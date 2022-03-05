// 부가서비스 정보
var SeatRes;
//netfunnel사용여부
var netfunnelVisible = false;

// 부가서비스 Type
var ExtrasType = {
	seat: 'SEAT'
	, baggage: 'BAGGAGE'
	, meal: 'MEALS'
	, sale: 'MERCHANDISE'
	, enter: 'ENTERTAINMENT'
	/*, lounge: 'KAL LOUNGE'*/
	, insurance: 'INSU2'
}

// 유아 동반 성인이 예약할 수 있는 기종별 유닛정보
var ExtrasUnitInfoForWithInfants = {
		b737: [
			['A', 'B', 'C']
			, ['D', 'E', 'F']
		],
		b739: [
			['A', 'B', 'C']
			, ['D', 'E', 'F']
		],
		b777: [
			['A', 'B', 'C']
			, ['H', 'J', 'K']
		],

		// 아래 column의 아래 rowNumber만 체크한다.
		b777_ColName: [
			['D', 'E', 'F', 'G']
		],
		b777_RowNumber: [
			1, 3, 6, 29
			, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49
			, 52, 54, 56, 58, 60, 62
		]
};

// 부가서비스 조회
function getExtras(url) {

	$.ajax({
		type : "POST",
		url : '/jinair/jinairfront/www.jinair.com/booking/include/' + url+'.jsp',
		data : JSON.stringify(SeatRes),
		dataType: "text",
		contentType	: "application/json; charset=UTF-8",
		success : function(html) {

			try {
				$(".extraContent").find(".extrasSec").hide();
				$(".extraContent").append(html);
				//windowLoad();

				// getSeatMap 로드가 완료되면 hideLoading함
				if(url != 'seat') {
					hideLoading();
				}
			}
			catch(e) {
				extrasError(e);
			}
		},
		error : function(data) {
			extrasError(data);
		}
	});
}

// 부가서비스 메뉴 Load
function showTabExtras(url, self) {

	var id = url + 'Sec';

	if ($(".extraContent").find("#" + id).size() > 0) {
		$(".extraContent").find(".extrasSec").hide();
		$("#" + id).show();
		windowLoad();
		hideLoading();
	} else {
		// booking.js에서 hideLoading() 처리함
		getExtras(url);
	}

	$(self).parents("li").addClass("choice").siblings().removeClass("choice");
	if ($(".extraArea .head .close").css("display") != "none") { //모바일
		var qTop = $("#header").height();
		$("html, body").stop().animate({scrollTop : qTop}, 0, "easeInOutQuint");
	}
	else {
		var qTop = $("#header").height();
		if (typeof qTop == 'number') {
			$("html, body").stop().animate({scrollTop : qTop}, 0, "easeInOutQuint");
		}
	}
}

// 서비스 호출 후, 후속작업
function executeAfterExtrasService(data) {

	try {

		// 바스켓 바인딩
		var result = JSON.parse(data);
		confirmPrice = result;
		setDataBinding();
	}
	catch(e) {
		// nothing
	}

	return true;
}

// 다음 부가서비스로 이동
function moveNextAncillary() {

	var nextItem = $('.extraArea').find('ul.tab > li.choice').next().find('a');
	if ($(nextItem).length > 0) {

		// 다음 메뉴 Load
		var url = $(nextItem).parent().attr('data');
		showTabExtras(url, nextItem);
	}
	else {
		// 다음 메뉴가 없을 경우 - stop
		hideLoading();
	}
}

// 바로 결제
function movePayment() {

	showLoading();

	// 부가서비스 추가의 경우 - 추가된 부가서비스가 없으면 이동하면 안 된다.
	checkMovePayment();

	return false;
}

// 결제로 이동하기 전 체크
function checkMovePayment() {

	// IBE_BOOKING_ID - 바로 여기 주석 푸세요.
	if (CheckExtras() == false) {
		return false;
	}

	// 선택되어 있는 seat의 seg를 파라메터로 전달한다.
	var segmentId = $('#seatSec').find('.slideCont').find('li.choice > a').attr('segmentId');

	// payment로 이동해도 되는지 체크
	$.ajax({
		type : "POST",
		url : '/booking/checkMovePayment?segmentId=' + segmentId,
		dataType: "json",
		contentType	: "application/json; charset=UTF-8",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success : function(data) {

			try {

				var isSeatCheck = false;
				var message = '';
				var afterFunc = null;
				var param = '';

				// valid항목 체크
				$.each(data, function(idx, validItem) {

					if (message != '') {
						return false;	// break;
					}

					if (validItem.checkType == 'RETRIEVE') {

						if (validItem.result == false) {

							// 추가된 부가서비스가 없어서 결제로 이동할 수 없습니다.
							message = $.i18n.prop('lj.ibe.b2c.rsv.051');

							return false;	// break;
						}
					}
					else if (validItem.checkType == 'SEAT_BY_BUNDLE') {		// 사용자가 seat을 선택하지 않음 by 번들

						isSeatCheck = true;
						var item = validItem.result;
						if (extrasHasSeatForUser(item.segmentId, item.guestId) == true) {

							// 선택하신 번들에 사전 좌석 배정 서비스가 포함되어 있습니다. 다음 단계로 진행하시려면 좌석을 선택하여 주시기 바랍니다.
							message = $.i18n.prop('lj.ibe.b2c.rsv.041');
							param = item;
							afterFunc = function(item) {

								// 해당 seg로 이동
								$('#seatSec').find('.slideCont').find('li > a[segmentId=' + item.segmentId + ']').click();

								// seat으로 이동
								$('.tab').find('li.seat > a').click();
							};
							return false;	// break;
						}

					}
					else if (validItem.checkType == 'SEAT_BY_CABIN' || validItem.checkType == 'SEAT_BY_CABIN_BIZ') {		// 사용자가 seat을 선택하지 않음 by cabinType
						if ( validItem.checkType == 'SEAT_BY_CABIN' )
							isSeatCheck = true;
						var item = validItem.result;
						if (extrasHasSeatForUser(item.segmentId, item.guestId) == true) {

							// 선택하신 지니플러스 운임에 사전 좌석 배정 서비스가 포함되어 있습니다. 다음 단계로 진행하시려면 좌석을 선택하여 주시기 바랍니다.
							// 선택하신 지니비즈 운임에 사전 좌석 배정 서비스가 포함되어 있습니다. 다음 단계로 진행하시려면 좌석을 선택하여 주시기 바랍니다.
							if (validItem.checkType == 'SEAT_BY_CABIN_BIZ')
								message = $.i18n.prop('lj.ibe.b2c.rsv.087');
							else
								message = $.i18n.prop('lj.ibe.b2c.rsv.046');
							param = item;
							afterFunc = function(item) {
								// 해당 seg로 이동
								$('#seatSec').find('.slideCont').find('li > a[segmentId=' + item.segmentId + ']').click();

								// seat으로 이동
								$('.tab').find('li.seat > a').click();
							};
							return false;	// break;
						}
					}
				});

				if (isSeatCheck == true && message == '') {

					// 선택할 수 있는 좌석이 없습니다. 처음부터 다시 예약해 주시기 바랍니다.
					message = $.i18n.prop('lj.ibe.b2c.rsv.050');

					afterFunc = function () {
						location.href = '/';	// 예매 첫 화면으로 이동
					};
				}

				if (message != '') {

					hideLoading();
					if (afterFunc == null) {
						alertLayer(message);
					}
					else {
						alertLayerForCallback(message, afterFunc, param);
					}
				}
				else {

					try {

						var callPopup = false;
						$.each(data, function(idx, validItem) {
							// 부가서비스 신청 팝업 호출 or 결제페이지로 이동 여부
							if (validItem.checkType == 'CALL_ADDITIONAL_SERVICE_POPUP') {
								callPopup = validItem.result;
								return false;	// break;
							}
						});

						var executeMovePayment = null;
						if (callPopup == true) {

							executeMovePayment = function () {

								// 부가서비스 신청 확인 팝업 호출
								hideLoading();
								showPopupLayer('/popup/additionalServices');
							};
						}
						else {

							executeMovePayment = function () {

								// 결제 페이지로 이동
								//location.href = '/booking/movePayment';
								hideLoading();
								showPopupLayer('/popup/additionalServices');
							};
						}

						if (SeatRes.basePnr == "ConfirmPriceRQ") {
								executeMovePayment();
						}
						else {

							executeMovePayment();
						}
					}
					catch(e) {
						extrasError(e);
					}
				}
			}
			catch(e) {
				extrasError(e);
			}
		},
		error : function(data) {
			extrasError(data);
		}
	});
}

function callbackAdditionalServices() {
	var langCd = $("#globalLangCd").val();
	var skinId = ('KOR' == langCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";

	if(netfunnelVisible){
		NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
			showLoading();
			location.href = '/booking/movePayment';
		});
	} else {
		showLoading();
		location.href = '/booking/movePayment';
	}

}

// AutoCheckIn callbackAdditionalServices
function callbackAdditionalServicesACKI() {
	var langCd = $("#globalLangCd").val();
	var skinId = ('KOR' == langCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";
	var autoCheckIn = true;

	if(netfunnelVisible){
		NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
			showLoading();
			location.href = '/booking/movePayment?autoCheckIn='+autoCheckIn;
		});
	} else {
		showLoading();
		location.href = '/booking/movePayment?autoCheckIn='+autoCheckIn;
	}
}

// 사용자가 해당seg에 선택 할 수 있는 좌석이 있는지 체크한다.
function extrasHasSeatForUser(segementId, guestId) {

	// 1. 모든 좌석이 비활성화 되어 있는 경우
	// 2. 유아를 동반한 성인의 경우
	//	- 유닛 당 유아 수에 따라 다름
	// 3. 소아의 경우
	//	- 비상구 좌석이 못 앉음
	var isSeatOK = false;
	var isChildOK = false;
	var isInfantOK = false;

	// segmentId에 해당하는 seatArea
	var seatArea = $('div.seatArea[segmentid="' + segementId + '"]');

	// 해당 구간에 활성화 되어 있는 좌석을 조회한다. (choice, disable 제외)
	var seatMap = $(seatArea).find('.content').find('.seatMap').find('.map');
	var arrSeat = $(seatMap).find('li:not(.choice):not(.disable)');

	// guest정보
	var objGuestId = $(seatArea).find('.memberList').find('input[name="guestId"][value="' + guestId + '"]');
	var guestType = $(objGuestId).parent().find('input[name="guestType"]').val();
	var withInfantYN = $(objGuestId).parent().find('p.child').length > 0 ? true : false;

	// ## 좌석 체크
	isSeatOK = (arrSeat.length > 0) ? true : false;

	// ## 소아 체크
	isChildOK = (guestType == 'CHILD') ? false : true;
	if (guestType == 'CHILD') {

		// 비상구 좌석이 아닌 것 조회 (비상구 = JEST, JRST)
		isChildOK = ($(arrSeat).find('a:not([type=JEST]):not([type=JRST])').length > 0) ? true : false;
	}

	// ## 유아 동반 성인 체크
	isInfantOK = (withInfantYN) ? false : true;
	if (withInfantYN) {

		// 유아 동반 성인이 앉을 수 있는 좌석이 있는지 체크한다.

		// 기종정보
		var airType = $(seatMap).find('input[name="airType"]').val();

		// 유아 동반 성인이 예약할 수 있는 기종별 유닛정보
		var group = ExtrasUnitInfoForWithInfants[airType];

		// 활성화된 좌석을 unit당 체크한다.
		$.each(group, function(idx, unit) {

			// 기종별 유닛정보 체크
			isInfantOK = extrasCheckUnitForInfant(seatArea, unit, null);
			if (isInfantOK == true) return false;	// break;
		});

		if (isInfantOK == false) {

			// b777기종의 경우 - 특정 좌석의 열을 더 체크한다.
			if (airType == 'b777') {

				var oddGroup = ExtrasUnitInfoForWithInfants['b777_ColName'];
				$.each(oddGroup, function(idx, unit) {

					// 기종별 유닛정보 체크
					isInfantOK = extrasCheckUnitForInfant(seatArea, unit, true);
					if (isInfantOK == true) return false;	// break;
				});
			}
		}
	}

	return isSeatOK && isChildOK && isInfantOK;
}

// 기종별 유닛정보 체크 by infant
function extrasCheckUnitForInfant(seatArea, unit, specificRowCheck) {

	var isInfantOK = false;


	// 해당 구간에 활성화 되어 있는 좌석을 조회한다. (choice, disable 제외)
	var seatMap = $(seatArea).find('.content').find('.seatMap').find('.map');
	var arrSeat = $(seatMap).find('li:not(.choice):not(.disable)');

	// unit당 수용 가능한 infant 수
	var maximumInfantsPerUnit = $(seatMap).find('input[name="maximumInfantsPerUnit"]').val();
	if (maximumInfantsPerUnit == undefined) {
		maximumInfantsPerUnit = 0;
	}

	// 조건문 : 해당 unit의 column만 조회하기 위함
	var opt = '';
	$.each(unit, function (i, col) {
		opt += '[externalcolumnname=' + col + ']';

		if (i < unit.length - 1) {
			opt += ',';
		}
	});

	var rowNumber = $(arrSeat).find('a').attr('externalrownumber');

	while(1) {

		if (specificRowCheck != null) {

			// 특정좌석의 열만 체크한다.
			if (specificRowCheck == true) {
				var iRowNum = parseInt(rowNumber);
				var sSeat = ExtrasUnitInfoForWithInfants['b777_RowNumber'];
				if ((sSeat.indexOf(iRowNum) > -1) == false) {
					continue;	// 지정된 rowNumber가 아니면 체크하지 않는다.
				}
			}
		}

		// 전체 좌석 대상 : 특정row의 해당unit만 조회
		var unitSeat = $(seatMap).find('li').find('a[externalrownumber=' + rowNumber + ']').filter(opt);
		if (unitSeat.length > 0) {

			// allocatedPassengerType가 'I'인 좌석
			var count = $(unitSeat).parent().filter('[allocatedPassengerType="I"]').length;
			if (count < maximumInfantsPerUnit) {
				isInfantOK = true;
				break;
			}
		}

		// 다음 rowNumber를 조회
		var nextObj = $(arrSeat).find('a').filter(function() {
		    return parseInt($(this).attr("externalrownumber")) > parseInt(rowNumber);
		});

		if ($(nextObj).length > 0) {
			rowNumber = $(nextObj).attr('externalrownumber');
		}
		else {
			break;
		}
	}

	return isInfantOK;
}

// error 메시지 처리
function extrasError(data) {

	try {
		hideLoading();

		var errorMsg = JSON.parse(data.responseText);
		alertLayer(errorMsg.errorMessage);
	}
	catch(e) {
		hideLoading();
	}
}

$(function() {

	// 부가서비스 메뉴 클릭 이벤트
	$('.extraArea').find('ul.tab > li > a').click(function(e) {

		// 현재 선택되어 있는 상태라면 return;
		if($(this).parent().hasClass('choice')) {
			return false;
		}

		showLoading();

		var curUrl = $(this).parent().attr('data');
		var curObj = this;

		// 메뉴 Load
		showTabExtras(curUrl, curObj);
	});
});

// IBE_BOOKING_ID - 부가서비스 체크
function CheckExtras() {

	var result = false;

	var oBooking = $('#bookingID');
	if (oBooking.length == 0) {
		// 객체가 없으면 return true;
		return true;
	}
	var bookingID = {
		"bookingID" : $(oBooking).val()
	};

	$.ajax({
		type : "POST",
		url : '/booking/CheckExtras',
		data : JSON.stringify(bookingID),
		dataType: "text",
		contentType	: "application/json; charset=UTF-8",
		async : false,	// 동기 처리
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success : function(data) {

			if (data == "true") {
				result = true;
			}
			else {
				hideLoading();
				alertLayer( $.i18n.prop('lj.ibe.b2c.rsv.070'), '','fnMoveHome');
				result = false;
			}
		},
		error : function(data) {
			extrasError(data);
		}
	});

	return result;
}

function fnMoveHome(){
	document.location.replace('/');
}


function callbackAdditionalServicesGDS(offExtrasEmail, offExtrasCountry, offExtrasPhone, snsAgree) {

	var langCd = $("#globalLangCd").val();
	var sid = ('KOR' == langCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";

	if(netfunnelVisible){
		NetFunnel_Action({ service_id: "service_1", action_id: "pay", skin_id: sid }, function (ev, ret) {
			showLoading();
			location.href = '/booking/movePayment?offExtrasEmail='+offExtrasEmail+'&offExtrasCountry='+offExtrasCountry+'&offExtrasPhone='+offExtrasPhone+'&snsAgree='+snsAgree;
		});
	} else {
		showLoading();
		location.href = '/booking/movePayment?offExtrasEmail='+offExtrasEmail+'&offExtrasCountry='+offExtrasCountry+'&offExtrasPhone='+offExtrasPhone+'&snsAgree='+snsAgree;
	}

}