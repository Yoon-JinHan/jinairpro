var CONST_debugEnable = false;
var console = window.console || {log:function(){}};
(function(){
	var _debugEnable = CONST_debugEnable;
	var _log = console.log;

	console.log = function(logMessage) {
		if(_debugEnable){
			_log.apply(console, arguments);
		}

	};
})();

String.prototype.replaceAll = function(org, dest) {
	return this.split(org).join(dest);
}

/*
window.history.pushState( null, null, location.href);
window.onpopstate = function(event) {
	if ( $('#registerform').find(':input[name=pnrNumber]').val() == '') {
		location.replace('/booking/index');
	} else {
		location.replace('/mypage/getReservationList');
	}
	//location.replace(refinit);

}
*/
/**
 * B2C 예매 - 항공권 검색
 */
var channel = '';			// IBS 채널 코드
var DomIntType = ''; 		// 국내,국제선 구분
var isGroup = false; 		// 단체여부
var isFareRefreshRequired = false; //결함운인 조회가능여부
var promotionCode	=''; // 프로모션코드
var couponNo		=''; // 보너스항공권
var modifyJsonData = null;	// 예약변경 RetrieveBooking Data
var netfunnelVisible = false; // netfunnel사용여부
var jiniplusOBFlag = false; // OUTBOUND JINIPLUS 시트유무
var jiniplusIBFlag = false; // INBOUND JINIPLUS 시트유무
var OFFER_META_DATA = null;

var __page__ = __page__ || {};
__page__.numOfRequests = 0;
/*
// 1. 항공권 조회
function getAvailabilityList(indexNo){

	headerMinimize();

	if ( $('#registerform').find(':input[name=pnrNumber]').val() == '') {
		//1-1. 일반 항공권 조회
		getNormalAvailabilityList(indexNo);
	} else {
		//1-2. 예약변경시 항공권 조회
		getModifyAvailabilityList(indexNo);
	}
}
/*
//1-1. 일반 항공권 조회
function getNormalAvailabilityList(indexNo) {

	var frm = $('#registerform');
	var metaCh = getCookie('metaCh');
	var sky  = getCookie('Affliliate_vendor');
	var welfareCh = getCookie('ch'); // 복지 채널

	// metaSearch나 복지채널 유입시에만 사용
	var domIntType1; // 국내선, 국제선 여부
	var selectedOrigin1 = frm.find(':input[name=origin1]').val(); // 선택한 출발지
	var selectedDestination1 = frm.find(':input[name=destination1]').val(); // 선택한 도착지

	// ( 공항 추가 변경시 BookingController.java - playwings도 같이 변경 )
	if(selectedDestination1 == "GMP" || selectedDestination1 == "CJJ" ||
	   selectedDestination1 == "KWJ" || selectedDestination1 == "TAE" ||
	   selectedDestination1 == "RSU" || selectedDestination1 == "KPO" ||
	   selectedDestination1 == "USN" || selectedDestination1 == "WJU" ||
	   selectedDestination1 == "KUV" || selectedDestination1 == "HIN") {
		domIntType1 = "DOM";
	} else if(selectedDestination1 == "CJU") {
		if(selectedOrigin1 == "PVG" || selectedOrigin1 == "XIY") {
			domIntType1 = "INT";
		} else {
			domIntType1 = "DOM";
		}
	} else if(selectedDestination1 == "PUS") {
		if(selectedOrigin1 == "GMP" || selectedOrigin1 == "CJU") {
			domIntType1 = "DOM";
		} else {
			domIntType1 = "INT";
		}
	} else {
		domIntType1 = "INT";
	}

	// METASEARCH 유입시 채널값 재셋팅
	// 카약
	if(metaCh == "kayak") {
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDB");
		} else {
			frm.find(':input[name=refChannel]').val("OMIB");
		}
	}

	// 스카이 스캐너
	if(metaCh == "skyscanner" || sky == "skyscanner") {
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDA");
		} else {
			frm.find(':input[name=refChannel]').val("OMIA");
		}
	}

	// 네이버
	if(metaCh == "naver") {
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDN");
		} else {
			frm.find(':input[name=refChannel]').val("OMIN");
		}
	}

	// 트래블코(일본 지역)
	if(metaCh == "travelko") {
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDT");
		} else {
			frm.find(':input[name=refChannel]').val("OMIT");
		}
	}

	// 플라잉라쿤
	if(metaCh == "flying") {
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDF");
		} else {
			frm.find(':input[name=refChannel]').val("OMIF");
		}
	}

	if(welfareCh == "samsungmall" ) { // 복지채널(삼성몰)
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDS");
		} else {
			frm.find(':input[name=refChannel]').val("OMIS");
		}

		if (frm.find(':input[name=promoCode]').val() == '') {
			frm.find(':input[name=promoCode]').val("SAMSUNGMALL");
		}
	} else if(welfareCh == "EZWELFARE") { // 복지채널(이지웰페어)
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDE");
		} else {
			frm.find(':input[name=refChannel]').val("OMIE");
		}

		if (frm.find(':input[name=promoCode]').val() == '') {
			frm.find(':input[name=promoCode]').val("EZWELFARE");
		}
	} else if(welfareCh.indexOf("SKBENEPIA") >= 0){ // 복지채널(SK베네피아)
		if(domIntType1 == "DOM") {
			frm.find(':input[name=refChannel]').val("OMDK");
		} else {
			frm.find(':input[name=refChannel]').val("OMIK");
		}

		if (frm.find(':input[name=promoCode]').val() == '') {
			frm.find(':input[name=promoCode]').val("SKBENEPIA");
		}
	}

	var pop = getCookie('foPop');
	if(pop == "" || pop == null  || pop == undefined) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.080') , ''  ,'fnMoveGate');
		return false;
	}
	frm.find(':input[name=pointOfPurchase]').val(pop);

	var jsonData = "searchType=" + 		frm.find(':input[name=searchType]').val()
				 + "&origin1=" + 	 	frm.find(':input[name=origin1]').val()
				 + "&destination1="+	frm.find(':input[name=destination1]').val()
				 + "&travelDate1="+	 	frm.find(':input[name=travelDate1]').val()
				 + "&origin2="+		 	frm.find(':input[name=origin2]').val()
				 + "&destination2="+  	frm.find(':input[name=destination2]').val()
				 + "&travelDate2="+	 	frm.find(':input[name=travelDate2]').val()
				 + "&origin3="+		 	frm.find(':input[name=origin3]').val()
				 + "&destination3="+  	frm.find(':input[name=destination3]').val()
				 + "&travelDate3="+	 	frm.find(':input[name=travelDate3]').val()
				 + "&origin4="+		 	frm.find(':input[name=origin4]').val()
				 + "&destination4="+  	frm.find(':input[name=destination4]').val()
				 + "&travelDate4="+	 	frm.find(':input[name=travelDate4]').val()
				 + "&pointOfPurchase="+ frm.find(':input[name=pointOfPurchase]').val()
				 + "&adultPaxCount="+ 	frm.find(':input[name=adultPaxCount]').val()
				 + "&childPaxCount="+ 	frm.find(':input[name=childPaxCount]').val()
				 + "&infantPaxCount="+	frm.find(':input[name=infantPaxCount]').val()
				 + "&tripType="+		frm.find(':input[name=tripType]').val()
				 + "&isGroup="+		 	frm.find(':input[name=isGroup]').val()
				 + "&cpnNo="+		 	frm.find(':input[name=cpnNo]').val()
				 + "&promoCode="+	 	frm.find(':input[name=promoCode]').val()
				 + "&refVal="+		 	frm.find(':input[name=refVal]').val()
				 + "&refPop="+		 	frm.find(':input[name=refPop]').val()
				 + "&refChannel="+	 	frm.find(':input[name=refChannel]').val()
				 + "&refLang="+		 	frm.find(':input[name=refLang]').val();
	
	
	if (frm.find(':input[name=tripType]').val() =='' || frm.find(':input[name=origin1]').val() =='' || frm.find(':input[name=destination1]').val() =='' ) {
		alertLayer( $.i18n.prop('lj.ibe.b2t.rsv.058'), '' //잘못된 접근입니다.
			,'fnMoveBookingHome'
		);
		return;
	}

	console.log('getNormalAvailabilityList');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	$.ajax({
		type	: "POST",
		url		: "/Jinair/jinairfront/www.jinair.com/getAirAvailabilityJson.json",
		data	: jsonData,
		dataType: "json",
		//contentType : "application/json; charset=UTF-8",
		cache:false,
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			try {
				console.log('getAirAvailabilityJson');
				console.log(data);
				if (isFlightNotFoundError(data.errorCode)){
					if(data.result.jmkStonControl) { // 진마켓 Ston캐싱 제어

						if (indexNo != undefined && indexNo >0 ){
							// BestFare 조회일경우 && 첫번째일 경우 전체 재 조회
							var html = $("#originDestinationListTmpl").render(data.result.originDestinationInfo[indexNo]);
							if ( indexNo==$('div.originDestinationInfo').length-1 ){
								// 마지막 여정일 경우
								$('div.originDestinationInfo:eq('+indexNo+')').remove();
								$(html).insertAfter('div.originDestinationInfo:eq('+(indexNo-1)+')');
							} else {
								$('div.originDestinationInfo:eq('+indexNo+')').remove();
								$(html).insertBefore('div.originDestinationInfo:eq('+indexNo+')');
							}
						} else {
							jiniplusOBFlag = checkJiniPlusSeat(data);
							$('#listSchedule').html(
								$("#listScheduleTmpl").render(data.result)
							);
						}
						// Dynamic Pricing 설정 추가
						// dynamic pricing 개발 pending 2020-03-16
						if(data.result.customFieldList[0] != undefined)
							OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];

						// 결함운임 조회 가능 여부 업데이트
						isFareRefreshRequired = data.result.isFareRefreshRequired;
						// 국내/국제선 구분
						DomIntType= data.result.domIntType;
						// IBS 채널 코드
						channel	= data.result.channel;
						// 그룹여부
						isGroup	= data.result.isGroup;
						// 보너스항공권
						couponNo = data.result.cpnNo;
						// 프로모션코드
						promotionCode = data.result.promoCode;
						frm.find(':input[name=promoCode]').val(promotionCode);
						// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
						checkZeroSeatCnt(data.result.originDestinationInfo);
						hideLoading();

					} else {

						getCachedAvailListJSON(jsonData).then(
							function(cachedData){
								for(var i = 0; i < data.result.originDestinationInfo.length; i++) {
									cachedData.result.originDestinationInfo[i].bestFareInfo.forEach(
										function(bestfare,index){
											if(bestfare.indexNo!=3){
												data.result.originDestinationInfo[i].bestFareInfo[index] = bestfare;
											}
										});
								}
								if (indexNo != undefined && indexNo >0 ){
									// BestFare 조회일경우 && 첫번째일 경우 전체 재 조회
									var html = $("#originDestinationListTmpl").render(data.result.originDestinationInfo[indexNo]);
									if ( indexNo==$('div.originDestinationInfo').length-1 ){
										// 마지막 여정일 경우
										$('div.originDestinationInfo:eq('+indexNo+')').remove();
										$(html).insertAfter('div.originDestinationInfo:eq('+(indexNo-1)+')');
									} else {
										$('div.originDestinationInfo:eq('+indexNo+')').remove();
										$(html).insertBefore('div.originDestinationInfo:eq('+indexNo+')');
									}
								} else {
									jiniplusOBFlag = checkJiniPlusSeat(data);
									$('#listSchedule').html(
										$("#listScheduleTmpl").render(data.result)
									);
								}
								// Dynamic Pricing 설정 추가
								// dynamic pricing 개발 pending 2020-03-16
								if(data.result.customFieldList[0] != undefined)
									OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];

								// 결함운임 조회 가능 여부 업데이트
								isFareRefreshRequired = data.result.isFareRefreshRequired;
								// 국내/국제선 구분
								DomIntType= data.result.domIntType;
								// IBS 채널 코드
								channel	= data.result.channel;
								// 그룹여부
								isGroup	= data.result.isGroup;
								// 보너스항공권
								couponNo = data.result.cpnNo;
								// 프로모션코드
								promotionCode = data.result.promoCode;
								frm.find(':input[name=promoCode]').val(promotionCode);
								// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
								checkZeroSeatCnt(data.result.originDestinationInfo);
								hideLoading();
						});
					}

				} else {
					hideLoading();
					if(data.errorCode=="000")
					{
						alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'), ''//처리중 오류가 발생하였습니다.

							,'fnMoveBookingHome'
						);
					}

					else if(data.errorCode.indexOf("PROMO_ERROR_")>-1){
						alertLayer(data.errorDetail, ''//처리중 오류가 발생하였습니다.
						);
					}
					else
					{
						alertLayer(data.errorDetail, ''//처리중 오류가 발생하였습니다.
							,'fnMoveBookingHome'
						);
					}
					//alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');

				}
			} catch(e) {
				console.log(data);
				console.log(e);
				hideLoading();
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));//처리중 오류가 발생하였습니다.
			}
		},
		error : function(data) {
			try {
				hideLoading();
				if ( data.responseJSON.errorCode =='000' ){
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'), ''//처리중 오류가 발생하였습니다.
						,'fnMoveBookingHome'
					);
				} else {
					if ( frm.find(':input[name=promoCode]').val() !='' ){
						// 프로모션코드 오류는 대기
						alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
					} else {
						alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>',''
							,'fnMoveBookingHome'
						);
					}

				}
			} catch(e) {
				console.log(data);
				console.log(e);
				hideLoading();
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));//처리중 오류가 발생하였습니다.
			} finally {
				// 보너스항공권
				frm.find(':input[name=cpnNo]').val('');
				// 프로모션코드
				frm.find(':input[name=promoCode]').val('');
				couponNo = '';
				promotionCode = '';
			}
		},
		complete : function() {

		}
	});
}
*/

//1-2. 예약변경시 항공권 조회
function getModifyAvailabilityList(){
	var frm = $('#registerform');

	var jsonData = {
		searchType		: frm.find(':input[name=searchType]').val()
		,origin1		: frm.find(':input[name=origin1]').val()
		,destination1 	: frm.find(':input[name=destination1]').val()
		,travelDate1	: frm.find(':input[name=travelDate1]').val()
		,origin2		: frm.find(':input[name=origin2]').val()
		,destination2 	: frm.find(':input[name=destination2]').val()
		,travelDate2	: frm.find(':input[name=travelDate2]').val()
		,origin3		: frm.find(':input[name=origin3]').val()
		,destination3 	: frm.find(':input[name=destination3]').val()
		,travelDate3	: frm.find(':input[name=travelDate3]').val()
		,origin4		: frm.find(':input[name=origin4]').val()
		,destination4 	: frm.find(':input[name=destination4]').val()
		,travelDate4	: frm.find(':input[name=travelDate4]').val()
		,pointOfPurchase: frm.find(':input[name=pointOfPurchase]').val()
		,adultPaxCount	: frm.find(':input[name=adultPaxCount]').val()
		,childPaxCount	: frm.find(':input[name=childPaxCount]').val()
		,infantPaxCount	: frm.find(':input[name=infantPaxCount]').val()
		,tripType		: frm.find(':input[name=tripType]').val()
		,pnrNumber		: frm.find(':input[name=pnrNumber]').val()
		,segmentIds		: frm.find(':input[name=segmentIds]').val()
		,segmentGroupIds: frm.find(':input[name=segmentGroupIds]').val()
		,isModify1		: frm.find(':input[name=isModify1]').val()
		,isModify2		: frm.find(':input[name=isModify2]').val()
		,isModify3		: frm.find(':input[name=isModify3]').val()
		,isModify4		: frm.find(':input[name=isModify4]').val()
		,segmentId1		: frm.find(':input[name=segmentId1]').val()
		,segmentId2		: frm.find(':input[name=segmentId2]').val()
		,segmentId3		: frm.find(':input[name=segmentId3]').val()
		,segmentId4		: frm.find(':input[name=segmentId4]').val()
		,promoCode		: $("#promoCode").val()
	}
	console.log('getModifyAvailabilityList');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	$.ajax({
		type	: "POST",
		url		: "/jinair/jinairfront/www.jinair.com/booking/getModifyAirAvailabilityJson.json",
		data	: JSON.stringify(jsonData),
		//async	: false,
		contentType : "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			try {
				console.log('getModifyAirAvailabilityJson :');
				console.log(data);

				var indexNo = 0;
				if (isFlightNotFoundError(data.errorCode)){
					jiniplusOBFlag = checkJiniPlusSeat(data);
					// 예약변경 Data 전역변수 저장
					modifyJsonData = data.result;
					$.each(modifyJsonData.originDestinationInfo,function(i){
						$(this)[0].flightSegmentDetails = JSON.parse($(this)[0].flightSegmentDetailsForModifyJsonString)
						$(this)[0].fareDetailsForGuestType = JSON.parse($(this)[0].fareDetailsForGuestTypeModifyJsonString)
					})

					$('#listSchedule').html(
						$("#listScheduleTmpl").render(data.result)
					);
					// Dynamic Pricing 설정 추가
					// dynamic pricing 개발 pending 2020-03-16
					if(data.result.customFieldList[0] != undefined)
						OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];
					// 결함운임 조회 가능 여부 업데이트
					isFareRefreshRequired = data.result.isFareRefreshRequired;
					// 국내/국제선 구분
					DomIntType= data.result.domIntType;
					// IBS 채널 코드
					channel	= data.result.channel;
					// 그룹여부
					isGroup	= data.result.isGroup;
					//탑승객정보 셋팅
					setPaxDetail(data.result.guestDetails);
					// 프로모션코드
					promotionCode = $("#promoCode").val();
					//domint필드 값 입력
					$("#domIntType").val(DomIntType);
					// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
					checkZeroSeatCnt(data.result.originDestinationInfo);
				} else {
					alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');
				}
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));//처리중 오류가 발생하였습니다.
			} finally {
				hideLoading();
			}
		},
		error : function(data) {
			try {
				if ( data.responseJSON.errorCode =='000' ){
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'), ''//처리중 오류가 발생하였습니다.
						,'fnMoveBookingHome'
					);
				} else {
					alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
				}
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));//처리중 오류가 발생하였습니다.
			} finally {
				hideLoading();
			}
		},
		complete : function() {
			hideLoading();
		}
	});
}


// 2. 번들 조회
function getListSaleableAncillaryServices(obj ,indexNo){

	// 경유 여부
	var isThrough = $(obj).closest('.segmentAvailability').attr('isThrough') =='true';

	// 국내선 | 경유 | 단체 일경우 번들 조회 안함
	if ( /*DomIntType=='DOM' ||*/ isThrough || isGroup ) {
		if ( isMobileOS ){
			$(obj).parents('.flightListM').find('.choice').removeClass('choice')
			$(obj).parents("li").addClass("choice");

			$(obj).parents('.flightListM').find('.groupFareName').hide();
			$(obj).find('.groupFareName').show();
		} else {
			$(obj).parents(".flightList").find(".charge").removeClass("choice");
			$(obj).parents(".charge").addClass("choice");

			$(obj).parents('.flightList').find('.groupFareName').hide();
			$(obj).find('.groupFareName').show();
		}
		// 3. 결합운임 조회
		getEnhancedAirAvailabilityList(indexNo);
		return false;
	}

	var isBundleExists = false;
	var frm = $('#registerform');


	if ( indexNo != undefined ) indexNo = parseInt(indexNo);
	var segInfo = $(obj).closest('.segmentAvailability');


	// origin1 조회된 결과로 호출하도록 수정
	var jsonData = {
		channel : channel,	// IBS 채널 코드
		domIntType : DomIntType,// 국제,국내선구분
		saleDate : '',
		itinerary : [],
		fareInfo : [],
		passengerList : '' ,
		tripType		: frm.find(':input[name=tripType]').val(),
		origin1		: segInfo.attr('origin'),
		destination1 	: segInfo.attr('destination')
	};


	// Itinerary
	var itinerary = {
		flightSegmentDetails : []
	};
	var flightSegmentDetails = {
		flightSegmentGroupID : segInfo.attr('tripIndex'),
		segmentId : segInfo.attr('segmentIndex'),
		carrierCode : segInfo.attr('carrierCode'),
		fltNumber : segInfo.attr('flightNumber'),
		fltSuffix : segInfo.attr('flightSuffix') ,
		flightDate : {date : segInfo.attr('flightDate')},
		boardPoint : segInfo.attr('origin'),
		offPoint : segInfo.attr('destination'),
		scheduledDepartureDateTime : segInfo.attr('departureInfo.dateTime'),
		departureTimeZone : segInfo.attr('departureInfo.timeZoneOffset'),
		scheduledArrivalTime : segInfo.attr('arrivalInfo.dateTime'),
		arrivalTimeZone : segInfo.attr('arrivalInfo.timeZoneOffset'),
		//journeyTime : segInfo.attr('journeyTime'),
		//stops : segInfo.attr('stops'),
		//arrivalDayChange : segInfo.attr('dayChange'),
		cabinClass : segInfo.attr('cabinClass')
		//fareClass : segInfo.attr('bookingClass')
	}
	itinerary.flightSegmentDetails.push(flightSegmentDetails);
	jsonData.itinerary.push(itinerary);

	var passengerList ={
		passenger : []
	}
	// passengerList
	if ( frm.find(':input[name=adultPaxCount]').val() >'0'){
		var passenger = {
			paxType 	: 'ADULT',
			quantity 	: frm.find(':input[name=adultPaxCount]').val()
		}
		passengerList.passenger.push(passenger);
	}
	if ( frm.find(':input[name=childPaxCount]').val() >'0'){
		var passenger = {
			paxType 	: 'CHILD',
			quantity 	: frm.find(':input[name=childPaxCount]').val()
		}
		passengerList.passenger.push(passenger);
	}
	if ( frm.find(':input[name=infantPaxCount]').val() >'0'){
		var passenger = {
			paxType 	: 'INFANT',
			quantity 	: frm.find(':input[name=infantPaxCount]').val()
		}
		passengerList.passenger.push(passenger);
	}
	jsonData.passengerList = passengerList;

	// fareInfo
	var fareInfoList = [];

	$.each(passengerList.passenger,function(i){
		var fareInfo = {
			fareDetailsForGuestType : []
		}
		var fareDetailsForGuestType = {
			fareLevel : segInfo.attr('fareLevel'),
			fareType : segInfo.attr('fareType'),
			fareBasisCode : segInfo.attr('fareBasis'),
			fareClass : segInfo.attr('bookingClass'),
			//guestType : 'ADULT',
			guestType : $(this)[0].paxType,
			currency : segInfo.attr('currencyCode'),
			//fareTransactionID : fareInfo.attr('fareId'),
			pricingUnitID : segInfo.attr('pricingUnitID')
			//fareComponentId : fareInfo.attr('pricingComponentIndex'),
		}
		fareInfo.fareDetailsForGuestType.push(fareDetailsForGuestType);
		fareInfoList.push(fareInfo);
	});

	jsonData.fareInfo =fareInfoList;

	// saleDate
	jsonData.saleDate = segInfo.attr('saledate');

	console.log('getListSaleableAncillaryServices');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	if(getCookie('foCountry') =='' || getCookie('foCountry') ==null  || getCookie('foCountry') ==undefined)
	{
		alertLayer('쿠키에러. 처음으로 돌아갑니다.' , ''  ,'fnMoveGate');
		//location.href ="/gate?dispLang=KOR";
		return false;
	}

	__page__.numOfRequests++;
	$.ajax({
		type	: "POST",
		url		: "/jinair/jinairfront/www.jinair.com/booking/getListSaleableAncillaryServicesJson.json",
		data	: JSON.stringify(jsonData),
		//async	: false,
		contentType : "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			try {
				console.log('getListSaleableAncillaryServicesJson');
				console.log(data);
				if (data.errorCode == null ){
					isBundleExists = true;
				} else if (data.errorCode=='ANCILLARY_021') {
					// 번들없음 에러는 정상처리
					isBundleExists = false ;
				} else {
					alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');
				}

				// 더미 번들 (현재 JINIBIZ only)
				var dummyBundles = null;
				var hasJINIBIZ = false;
				try {
					hasJINIBIZ = jsonData.fareInfo[0].fareDetailsForGuestType[0].fareType === 'JINIBIZ';
				} catch(e) {
					hasJINIBIZ = false;
				}
				if(hasJINIBIZ) {
					dummyBundles = [];
					dummyBundles.push({
						title: $.i18n.prop('lj.ibe.b2c.rsv.088'),
						subTitle: $.i18n.prop('lj.ibe.b2c.rsv.096'),
						items: [
							{styleClass: 'seat', desc: $.i18n.prop('lj.ibe.b2c.rsv.089')},
							{styleClass: 'excess', desc: $.i18n.prop('lj.ibe.b2c.rsv.090')}
						]
					});
					dummyBundles.push({
						styleClass: 'biz',
						title: $.i18n.prop('lj.ibe.b2c.rsv.091'),
						subTitle: $.i18n.prop('lj.ibe.b2c.rsv.097'),
						items: [
							{styleClass: 'seat', desc: $.i18n.prop('lj.ibe.b2c.rsv.092')},
							{styleClass: 'excess', desc: $.i18n.prop('lj.ibe.b2c.rsv.093')},
							{styleClass: 'counter', desc: $.i18n.prop('lj.ibe.b2c.rsv.094')},
							{styleClass: 'above', desc: $.i18n.prop('lj.ibe.b2c.rsv.095')}
						],
						selectable: true
					});
				}
				var hasDummyBundle = !!dummyBundles;

				var flag = indexNo == 0 ?jiniplusOBFlag:jiniplusIBFlag;
				if ( isBundleExists ){
					if ( isMobileOS ){

						var html = $("#bundleListTmpl").render(data.result);
						if(flag){
							html = html.replaceAll($.i18n.prop('hom.ibe.ctn.ssr.026'),$.i18n.prop('hom.ibe.ctn.ssr.088'));
						}
						$(obj).parents(".flightListM").find('div.bundleArea').find('ul.bundleList').remove();
						$(obj).parents('div.bundleArea').append(html);

						$(obj).parents('.flightListM').find('.choice').removeClass('choice')
						$(obj).parents("li").addClass("choice");
						//$(obj).parents(".flightListM").find(".bundleList").show();
						var bTop = $(obj).parents(".bundleArea").offset().top - ($("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom")));
						$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
					} else {
						var html = $("#bundleListTmpl").render(data.result);
						if(flag){
							html = html.replaceAll($.i18n.prop('hom.ibe.ctn.ssr.026'),$.i18n.prop('hom.ibe.ctn.ssr.088'));
						}
						$(obj).closest('tr').next('.bundleArea').find('td:eq(0)').html(html);

						$(obj).parents(".flightList").find(".charge").removeClass("choice");
						$(obj).parents(".charge").addClass("choice");
						$(obj).parents(".flightList").find(".bundleArea, .bundleArea td").hide();
						$(obj).parents("tr").next(".bundleArea").add($(obj).parents("tr").next(".bundleArea").find("td")).show();
						var bTop = $(obj).parents("tr").offset().top - 70;
						$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
					}
					chkPromoFare(obj);
				} else if(hasDummyBundle) {
					if(isMobileOS) {
						var html = $("#template-dummy-bundle-mobile").render({list: dummyBundles});
						$(obj).parents(".flightListM").find('div.bundleArea').find('ul.bundleList').remove();
						$(obj).parents('div.bundleArea').append(html);

						$(obj).parents('.flightListM').find('.choice').removeClass('choice')
						$(obj).parents("li").addClass("choice");
						var bTop = $(obj).parents(".bundleArea").offset().top - ($("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom")));
						$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
					} else {
						var html = $("#template-dummy-bundle").render({list: dummyBundles});
						$(obj).closest('tr').next('.bundleArea').find('td:eq(0)').html(html);

						$(obj).parents(".flightList").find(".charge").removeClass("choice");
						$(obj).parents(".charge").addClass("choice");
						$(obj).parents(".flightList").find(".bundleArea, .bundleArea td").hide();
						$(obj).parents("tr").next(".bundleArea").add($(obj).parents("tr").next(".bundleArea").find("td")).show();
						var bTop = $(obj).parents("tr").offset().top - 70;
						$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
					}

					chkPromoFare(obj);
				} else {
					if ( isMobileOS ){
						$(obj).parents(".flightListM").find('div.bundleArea').find('ul.bundleList').remove();

						$(obj).parents('.flightListM').find('.choice').removeClass('choice')
						$(obj).parents("li").addClass("choice");
					} else {
						$(obj).closest('tr').next('.bundleArea').find('ul.bundleList').remove();
						$(obj).parents(".flightList").find(".bundleArea, .bundleArea td").hide();

						$(obj).parents(".flightList").find(".charge").removeClass("choice");
						$(obj).parents(".charge").addClass("choice");
					}
					// 3. 결합운임 조회
					getEnhancedAirAvailabilityList(indexNo);
					chkPromoFare(obj);
				}
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			} finally {
				//hideLoading();
			}
		},
		error : function(data) {
			alert("오류");
			try {
				alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			} finally {
				//hideLoading();
			}
		},
		complete : function() {
			//hideLoading();
			__page__.numOfRequests--;
			if(!__page__.numOfRequests) {
				hideLoading();
			}
		}
	});
}

function fnMoveGate()
{
	location.href ="/jinair/jinairfront/www.jinair.com/booking/gate?dispLang=KOR";
}

// 3. 결합운임 조회
function getEnhancedAirAvailabilityList(indexNo){
	if ( $('#registerform').find(':input[name=pnrNumber]').val() == '') {
		// 일반 결합운임 조회
		getNormalEnhancedAirAvailabilityList(indexNo);
	} else {
		// 예약변경 결합운임 조회
		getModifyEnhancedAirAvailabilityList(indexNo);
	}
}

//3-1. 일반 결합운임 조회
function getNormalEnhancedAirAvailabilityList(indexNo){

	var frm = $('#registerform');
	var jsonData = {
		channel : channel,	// IBS 채널 코드
		domIntType : DomIntType,// 국제,국내선구분
		itineraryDetails : [],
		itineraryPriceDetails : [],
		availabilitySearches : [],
		paxCountDetails : [],
		oldPricingUnitID :'',
		searchCurrency : '',
		isGroup		: isGroup,
		cpnNo	: couponNo,
		promoCode	: promotionCode,
		customFieldList : []
	};

	if ( indexNo != undefined ) indexNo = parseInt(indexNo);
	var	originDestinationInfo = $('div.originDestinationInfo');

	// 결함운임 조회 가능이 아닐경우 ,국내선일경우 결합운임 조회 안함 -> 화면이동 & 운임정보 업데이트
	if ( isFareRefreshRequired==false || DomIntType=='DOM' ){
		if ( indexNo < originDestinationInfo.length-1 ){
			// 다음여정 선택으로 이동
			var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
			var bTop = $('div.originDestinationInfo:eq('+(parseInt(indexNo)+1)+')').offset().top - quickModifyHeight ;
			$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
		} else {
			// 운임확인 으로 이동
			var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
			var bTop = $('dl.totalCharge').offset().top - quickModifyHeight -100;
			$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
		}

		//인천-제주 노선 선택 시 진에어 카운터 안내 팝업 표출
		var selectedFare = $("div.originDestinationInfo[indexno='"+indexNo+"'] td.segmentAvailability p.choice");
		var origin = selectedFare.parent().attr("origin");
		var destination = selectedFare.parent().attr("destination");

		if(isMobileOS){
			selectedFare = $("div.originDestinationInfo[indexno='"+indexNo+"'] li.segmentAvailability.choice");
			origin = selectedFare.attr("origin");
			destination = selectedFare.attr("destination");
		}

		if(origin == "ICN" && destination == "CJU" && isIntTourICNCJU() == false){
			showPopupLayer("/popup/showJinairCounterInfoLayer");
		}


		//운임정보 업데이트(마지막 여정선택시에만)
		if ( originDestinationInfo.length-1 == indexNo ){
			getConfirmPrice();
		}
		return false;
	}

	// PaxCountDetail
	var arrPaxDetails = [];
	if ( frm.find(':input[name=adultPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'ADULT',
			paxCount 	: frm.find(':input[name=adultPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=childPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'CHILD',
			paxCount 	: frm.find(':input[name=childPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=infantPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'INFANT',
			paxCount 	: frm.find(':input[name=infantPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	jsonData.paxCountDetails = arrPaxDetails;

	var itineraryDetails ={
		flightSegmentDetails : []
	}

	if ( indexNo < originDestinationInfo.length-1  && isFareRefreshRequired && DomIntType=='INT'){
		$.each(originDestinationInfo,function(i){

			if ( i <= indexNo  ) {

				var selectedInfos	= getSelectedInfos($(this));	// 선택여정 정보
				var isThrough 		= selectedInfos.isThrough;		// 경유 여부
				var segmentInfos	= selectedInfos.segmentInfos;	// Segment정보
				var selFareInfo		= selectedInfos.fareInfo;		// 운임정보
				var selBundleInfo	= selectedInfos.bundleInfo;		// 번들정보

				if ( segmentInfos.length == 0 ) { return false };

				var segmentIds = [];
				segmentInfos.each( function(s){
					var selSegInfo = $(this);
					// ItineraryDetails
					var flightSegmentDetails = {
						flightSegmentGroupID : selSegInfo.attr('tripIndex'),
						segmentId : selSegInfo.attr('segmentIndex'),
						carrierCode : selSegInfo.attr('flightIdentifierInfo.carrierCode'),
						fltNumber : selSegInfo.attr('flightIdentifierInfo.flightNumber'),
						flightDate : {date : selSegInfo.attr('flightIdentifierInfo.flightDate')},
						fltSuffix : selSegInfo.attr('flightIdentifierInfo.flightSuffix'),
						boardPoint : selSegInfo.attr('departureInfo.airportCode'),
						offPoint : selSegInfo.attr('arrivalInfo.airportCode'),
						scheduledDepartureDateTime : selSegInfo.attr('departureInfo.dateTime'),
						departureTimeZone : selSegInfo.attr('departureInfo.timeZoneOffset'),
						scheduledArrivalTime : selSegInfo.attr('arrivalInfo.dateTime'),
						arrivalTimeZone : selSegInfo.attr('arrivalInfo.timeZoneOffset'),
						journeyTime : selSegInfo.attr('journeyTime'),
						stops : selSegInfo.attr('stops'),
						arrivalDayChange : selSegInfo.attr('dayChange'),
						isThroughFlight : isThrough,
						cabinClass : selFareInfo.attr('cabinClass').indexOf(',')>0 ? selFareInfo.attr('cabinClass').split(',')[s] : selFareInfo.attr('cabinClass'),
						fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[s] : selFareInfo.attr('bookingClass')
					}
					itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
					//jsonData.itineraryDetails.push(itineraryDetails);

					segmentIds.push(selSegInfo.attr('segmentIndex'));

				});

				var itineraryPriceDetails = {
					guestPriceBreakDown : []
				}
				$.each( arrPaxDetails, function(p) {
					var guestPriceBreakDown = {
						priceBreakDown :[{
							fareDetailsForGuestType : {
								fareLevel : selFareInfo.attr('fareLevel'),
								fareType : selFareInfo.attr('fareType'),
								fareBasisCode : selFareInfo.attr('fareBasis'),
								currency : selFareInfo.attr('currencyCode'),
								fareTransactionID : selFareInfo.attr('fareId'),
								guestType : $(this)[0].paxType,
								segmentId : segmentIds,
								pricingUnitID : selFareInfo.attr('pricingUnitID'),
								fareComponentId : selFareInfo.attr('pricingComponentIndex')
							}
						}]
					}
					itineraryPriceDetails.guestPriceBreakDown.push(guestPriceBreakDown);
				});

				jsonData.itineraryPriceDetails.push(itineraryPriceDetails);

				jsonData.oldPricingUnitID = selFareInfo.attr('pricingUnitID');
				jsonData.searchCurrency = selFareInfo.attr('currencyCode');

			} else if ( i == indexNo+1  ) {
				// 조회해 올 여정은 출/도착정보만 전송
				var dt = frm.find(':input[name=travelDate'+(parseInt(indexNo)+2)+']').val();
				var newdt = new Date(parseInt(dt.substring(0,4)),parseInt(dt.substring(4,6))-1,parseInt(dt.substring(6,8)));

				var availabilitySearches = {
					origin	: frm.find(':input[name=origin'+(parseInt(indexNo)+2)+']').val(),
					destination : frm.find(':input[name=destination'+(parseInt(indexNo)+2)+']').val(),
					travelDate : newdt.toISOString()
					//BestFarePossitiveDaysOut = fareInfo.attr('fareId');
					//BestFareNegativeDaysOut = fareInfo.attr('fareId');
				}

				jsonData.availabilitySearches.push(availabilitySearches);
				// 조회해 올 여정 리셋
				if ( isMobileOS ){
					$(this).find('div.bundleArea').find('li.choice').removeClass('choice');
					$(this).find('div.bundleArea').find('ul.bundleList').remove();
				} else {
					$(this).find('table.flightList').find('p.choice').removeClass('choice')
					$(this).find('table.flightList').find('tr.bundleArea').remove();
				}

			} else {
				// 선택 행 +1 까지만 Loop ,그외 여정은 리셋
				if ( isMobileOS ){
					$(this).find('div.bundleArea').find('li.choice').removeClass('choice');
					$(this).find('div.bundleArea').find('ul.bundleList').remove();
				} else {
					$(this).find('table.flightList').find('p.choice').removeClass('choice')
					$(this).find('table.flightList').find('tr.bundleArea').remove();
				}
				return false;
			}

		});

		jsonData.itineraryDetails.push(itineraryDetails);
		// dynamic pricing 개발 pending 2020-03-16
		jsonData.customFieldList = [{customField:new Array}];
		jsonData.customFieldList[0].customField.push(OFFER_META_DATA);

		console.log('getNormalEnhancedAirAvailabilityList');
		console.log(jsonData);
		fnJsonCheck(jsonData);

		$.ajax({
			type	: "POST",
			url		: "/jinair/jinairfront/www.jinair.com/booking/getEnhancedAirAvailabilityJson.json",
			data	: JSON.stringify(jsonData),
			//async	: false,
			contentType : "application/json; charset=UTF-8",
			dataType: "json",
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");
				xhr.setRequestHeader(csrfHeader, csrfToken);
				showLoading();
			},
			success	: function(data) {
				try {
					console.log('getNormalEnhancedAirAvailabilityListJson :');
					console.log(data);

					$.each(data.result.originDestinationInfo,function(i){
						$(this)[0].indexNo = parseInt(indexNo)+1;
					});

					if (isFlightNotFoundError(data.errorCode)){
						jiniplusIBFlag = checkJiniPlusSeat(data);
						var html = $("#listScheduleTmpl").render(data.result);
						// 변경할 위치 삭제
						$('div.originDestinationInfo:gt('+indexNo+'):first').remove();
						// 받아온 데이터 삽입
						$(html).insertAfter('div.originDestinationInfo:eq('+parseInt(indexNo)+')');

						// 다음여정 선택으로 이동
						var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
						var bTop = $('div.originDestinationInfo:eq('+(parseInt(indexNo)+1)+')').offset().top - quickModifyHeight ;
						$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
						// Dynamic Pricing 설정 추가
						// dynamic pricing 개발 pending 2020-03-16
						if(data.result.customFieldList[0] != undefined)
							OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];
						// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
						checkZeroSeatCnt(data.result.originDestinationInfo);
					} else {
						alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');
					}
				} catch(e) {
					console.log(data);
					console.log(e);
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
				} finally {
					hideLoading();
				}
			},
			error : function(data) {
				try {
					alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
				} catch(e) {
					console.log(data);
					console.log(e);
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
				} finally {
					hideLoading();
				}
			},
			complete : function() {
				hideLoading();
			}

		});
	} else {

		// 운임확인 구간으로 이동
		var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
		var bTop = $('dl.totalCharge').offset().top - quickModifyHeight -100;
		$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");

		//운임정보 업데이트(마지막 여정선택시에만)
		if ( originDestinationInfo.length-1 == indexNo ){
			getConfirmPrice();
		}
	}
}

//3-2. 예약변경 결합운임 조회
function getModifyEnhancedAirAvailabilityList(indexNo){

	var frm = $('#registerform');
	var jsonData = {
		channel : channel,	// IBS 채널 코드
		domIntType : DomIntType,// 국제,국내선구분
		itineraryDetails : [],
		itineraryPriceDetails : [],
		availabilitySearches : [],
		paxCountDetails : [],
		cancelAndRebookInfo : '',
		oldPricingUnitID :'',
		searchCurrency : '',
		isGroup		: isGroup,
		cpnNo	: couponNo,
		promoCode	: promotionCode,
		customFieldList : []
	};

	if ( indexNo != undefined ) indexNo = parseInt(indexNo);
	var originDestinationInfo = $('div.originDestinationInfo');

	//인천-제주 노선 선택 시 진에어 카운터 안내 팝업 표출
	var selectedFare = $("div.originDestinationInfo[indexno='"+indexNo+"'] td.segmentAvailability p.choice");
	var origin = selectedFare.parent().attr("origin");
	var destination = selectedFare.parent().attr("destination");

	if(isMobileOS){
		selectedFare = $("div.originDestinationInfo[indexno='"+indexNo+"'] li.segmentAvailability.choice");
		origin = selectedFare.attr("origin");
		destination = selectedFare.attr("destination");
	}

	// 결함운임 조회 가능이 아닐경우 ,국내선일경우 결합운임 조회 안함 -> 화면이동 & 운임정보 업데이트
	//if ( isFareRefreshRequired==false || DomIntType=='DOM' ){
	if ( originDestinationInfo.parent().find('[modifyTypeOption="MODIFY_ETC"]').length >0 ){
		// 다음여정 선택으로 이동
		var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
		var bTop = $('div.originDestinationInfo:eq('+(parseInt(indexNo)+1)+')').offset().top - quickModifyHeight ;
		$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
	} else {
		// 운임확인 구간으로 이동
		var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
		var bTop = $('dl.totalCharge').offset().top - quickModifyHeight -100;
		$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");

		if(origin == "ICN" && destination == "CJU"){
			showPopupLayer("/popup/showJinairCounterInfoLayer");
		}

		//운임정보 업데이트(마지막 여정선택시에만)
		getModifyBooking();
		return false;
	}

	// PaxCountDetail
	var arrPaxDetails = [];
	if ( frm.find(':input[name=adultPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'ADULT',
			paxCount 	: frm.find(':input[name=adultPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=childPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'CHILD',
			paxCount 	: frm.find(':input[name=childPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=infantPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'INFANT',
			paxCount 	: frm.find(':input[name=infantPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	jsonData.paxCountDetails = arrPaxDetails;

	var itineraryDetails ={
		flightSegmentDetails : []
	}

	//if ( indexNo < originDestinationInfo.length-1  && isFareRefreshRequired && DomIntType=='INT'){
	if ( originDestinationInfo.parent().find('[modifyTypeOption="MODIFY_ETC"]').length >0 ){
		$.each(originDestinationInfo,function(i){

			if ( $(this).attr('modifyTypeOption') =='MODIFY_FIRST' || $(this).attr('modifyTypeOption') =='' ){

				var selectedInfos	= getSelectedInfos($(this));	// 선택여정 정보
				var isThrough 		= selectedInfos.isThrough;		// 경유 여부
				var segmentInfos	= selectedInfos.segmentInfos;	// Segment정보
				var selFareInfo		= selectedInfos.fareInfo;		// 운임정보
				var selBundleInfo	= selectedInfos.bundleInfo;		// 번들정보

				if ( segmentInfos.length == 0 ) { return false };

				// itineraryDetails
				var segmentIds = [];
				segmentInfos.each( function(s){
					var selSegInfo = $(this);
					// ItineraryDetails
					var flightSegmentDetails = {
						flightSegmentGroupID : selSegInfo.attr('tripIndex'),
						segmentId : selSegInfo.attr('segmentIndex'),
						carrierCode : selSegInfo.attr('flightIdentifierInfo.carrierCode'),
						fltNumber : selSegInfo.attr('flightIdentifierInfo.flightNumber'),
						flightDate : {date : selSegInfo.attr('flightIdentifierInfo.flightDate')},
						fltSuffix : selSegInfo.attr('flightIdentifierInfo.flightSuffix'),
						boardPoint : selSegInfo.attr('departureInfo.airportCode'),
						offPoint : selSegInfo.attr('arrivalInfo.airportCode'),
						scheduledDepartureDateTime : selSegInfo.attr('departureInfo.dateTime'),
						departureTimeZone : selSegInfo.attr('departureInfo.timeZoneOffset'),
						scheduledArrivalTime : selSegInfo.attr('arrivalInfo.dateTime'),
						arrivalTimeZone : selSegInfo.attr('arrivalInfo.timeZoneOffset'),
						journeyTime : selSegInfo.attr('journeyTime'),
						stops : selSegInfo.attr('stops'),
						arrivalDayChange : selSegInfo.attr('dayChange'),
						isThroughFlight : isThrough,
						cabinClass : selFareInfo.attr('cabinClass').indexOf(',')>0 ? selFareInfo.attr('cabinClass').split(',')[s] : selFareInfo.attr('cabinClass'),
						fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[s] : selFareInfo.attr('bookingClass')
					}
					itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
					segmentIds.push(selSegInfo.attr('segmentIndex'));

				});

				// itineraryPriceDetails
				var itineraryPriceDetails = {
					guestPriceBreakDown : []
				}
				$.each( arrPaxDetails, function(p) {
					var guestPriceBreakDown = {
						priceBreakDown :[{
							fareDetailsForGuestType : {
								fareLevel : selFareInfo.attr('fareLevel'),
								fareType : selFareInfo.attr('fareType'),
								fareBasisCode : selFareInfo.attr('fareBasis'),
								currency : selFareInfo.attr('currencyCode'),
								fareTransactionID : selFareInfo.attr('fareId'),
								guestType : $(this)[0].paxType,
								segmentId : segmentIds,
								pricingUnitID : selFareInfo.attr('pricingUnitID'),
								fareComponentId : selFareInfo.attr('pricingComponentIndex')
							}
						}]
					}
					itineraryPriceDetails.guestPriceBreakDown.push(guestPriceBreakDown);
				});

				jsonData.itineraryPriceDetails.push(itineraryPriceDetails);

				// searchCurrency
				jsonData.searchCurrency = selFareInfo.attr('currencyCode');
				jsonData.oldPricingUnitID = selFareInfo.attr('pricingUnitID');

				//} else if ( $(this).attr('modifyTypeOption') =='MODIFY_READONLY' || $(this).attr('modifyTypeOption') =='MODIFY_ETC' ) {
			} else {
				if ( i == originDestinationInfo.parent().find('[modifyTypeOption="MODIFY_ETC"]:first').attr('indexNo') ){
					// 조회해올 여정 => availabilitySearches
					var dt = frm.find(':input[name=travelDate'+(i+1)+']').val();
					var newdt = new Date(parseInt(dt.substring(0,4)),parseInt(dt.substring(4,6))-1,parseInt(dt.substring(6,8)));

					var availabilitySearches = {
						origin	: frm.find(':input[name=origin'+(i+1)+']').val()
						,destination : frm.find(':input[name=destination'+(i+1)+']').val()
						,travelDate : newdt.toISOString()
					}
					jsonData.availabilitySearches.push(availabilitySearches);

					// CancelAndRebookInfo
					var oldFlightInfo = modifyJsonData.originDestinationInfo[i].flightSegmentDetails[0];
					var oldFareInfo = modifyJsonData.originDestinationInfo[i].fareDetailsForGuestType[0].guestPriceBreakDown[0].priceBreakDown[0].fareDetailsForGuestType;
					var oldGuestPriceBreakDown = modifyJsonData.originDestinationInfo[i].fareDetailsForGuestType[0].guestPriceBreakDown;

					var cancelAndRebookInfo = {
						fareBasis : oldFareInfo.fareBasisCode,
						adultBaseFare : oldFareInfo.baseFare,
						oldFlightDepartureDate : new Date(oldFlightInfo.scheduledDepartureTimeLTC.year,oldFlightInfo.scheduledDepartureTimeLTC.month-1,oldFlightInfo.scheduledDepartureTimeLTC.day),
						timeZoneOffset : oldFlightInfo.departureTimeZone
					}
					$.each(oldGuestPriceBreakDown,function(p){
						if ( $(this)[0].guestType=='ADULT') {
							cancelAndRebookInfo.adultBaseFare = $(this)[0].priceBreakDown[0].fareDetailsForGuestType.baseFare;
						} else if ( $(this)[0].guestType=='CHILD' ) {
							cancelAndRebookInfo.childBaseFare = $(this)[0].priceBreakDown[0].fareDetailsForGuestType.baseFare;
						} else if ( $(this)[0].guestType=='INFANT' ) {
							cancelAndRebookInfo.infantBaseFare = $(this)[0].priceBreakDown[0].fareDetailsForGuestType.baseFare;
						}
					});

					jsonData.cancelAndRebookInfo = cancelAndRebookInfo;

					jsonData.pnrCreationChannelType = modifyJsonData.bookingChannel.channelType;
					jsonData.pnrCreationChannelCode = modifyJsonData.bookingChannel.channel;
					jsonData.pnrCreationTime = modifyJsonData.pnrCreationTime;
					jsonData.ticketedDate = modifyJsonData.ticketedDate;

					jsonData.oldPricingUnitID = oldFareInfo.pricingUnitID;
					// dynamic pricing 개발 pending 2020-03-16
					// 재개발시 아래 if문 전체 삭제
					if ( modifyJsonData.customFieldList ){
						jsonData.customFieldList = modifyJsonData.customFieldList;
					}

				} else {
					var segInfos = modifyJsonData.originDestinationInfo[i].flightSegmentDetails;
					var fareDetailsForGuestType = modifyJsonData.originDestinationInfo[i].fareDetailsForGuestType[0];
					$.each(segInfos,function(i){
						var segInfo = $(this)[0];
						var flightSegmentDetails = {
							flightSegmentGroupID : segInfo.flightSegmentGroupID,
							segmentId : segInfo.segmentId,
							carrierCode : segInfo.carrierCode,
							fltNumber : segInfo.fltNumber,
							flightDate : {date : (new Date(segInfo.flightDate.date.year ,segInfo.flightDate.date.month-1 ,segInfo.flightDate.date.day)).valueOf() },
							boardPoint : segInfo.boardPoint,
							offPoint : segInfo.offPoint,
							scheduledDepartureDateTime : (new Date(segInfo.scheduledDepartureDateTime.year ,segInfo.scheduledDepartureDateTime.month-1 ,segInfo.scheduledDepartureDateTime.day)).valueOf(),
							departureTimeZone : segInfo.departureTimeZone,
							scheduledArrivalTime : (new Date(segInfo.scheduledArrivalTime.year ,segInfo.scheduledArrivalTime.month-1 ,segInfo.scheduledArrivalTime.day)).valueOf(),
							arrivalTimeZone : segInfo.arrivalTimeZone,
							journeyTime : segInfo.journeyTime,
							stops : segInfo.stops,
							arrivalDayChange : segInfo.arrivalDayChange,
							cabinClass : segInfo.cabinClass,
							fareClass : segInfo.fareClass
						}
						itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
					});

					jsonData.itineraryPriceDetails.push(fareDetailsForGuestType);
					jsonData.searchCurrency = fareDetailsForGuestType.guestPriceBreakDown[0].priceBreakDown[0].fareDetailsForGuestType.currency;
				}
			}
		});
		jsonData.itineraryDetails.push(itineraryDetails);
		// dynamic pricing 개발 pending 2020-03-16
		jsonData.customFieldList = [{customField:new Array}];
		jsonData.customFieldList[0].customField.push(OFFER_META_DATA);
		console.log('getModifyEnhancedAirAvailabilityList');
		console.log(jsonData);
		fnJsonCheck(jsonData);

		$.ajax({
			type	: "POST",
			url		: "/jinair/jinairfront/www.jinair.com/booking/getEnhancedAirAvailabilityJson.json",
			data	: JSON.stringify(jsonData),
			//async	: false,
			contentType : "application/json; charset=UTF-8",
			dataType: "json",
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");
				xhr.setRequestHeader(csrfHeader, csrfToken);
				showLoading();
			},
			success	: function(data) {
				try {
					console.log('getModifyEnhancedAirAvailabilityListJson :')
					console.log(data)
					$.each(data.result.originDestinationInfo,function(i){
						$(this)[0].indexNo = parseInt(indexNo)+1;
					});

					if (isFlightNotFoundError(data.errorCode)){
						jiniplusIBFlag = checkJiniPlusSeat(data);
						var html = $("#listScheduleTmpl").render(data.result);
						// 변경할 위치 삭제
						$('div.originDestinationInfo:gt('+indexNo+'):first').remove();
						// 받아온 데이터 삽입
						$(html).insertAfter('div.originDestinationInfo:eq('+parseInt(indexNo)+')');

						// 다음여정 선택으로 이동
						var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
						var bTop = $('div.originDestinationInfo:eq('+(parseInt(indexNo)+1)+')').offset().top - quickModifyHeight ;
						$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");
						// Dynamic Pricing 설정 추가
						// dynamic pricing 개발 pending 2020-03-16
						if(data.result.customFieldList[0] != undefined)
							OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];
						// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
						checkZeroSeatCnt(data.result.originDestinationInfo);
					} else {
						alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');
					}
				} catch(e) {
					console.log(data);
					console.log(e);
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
				} finally {
					hideLoading();
				}
			},
			error : function(data) {
				try {
					alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
				} catch(e) {
					console.log(data);
					console.log(e);
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
				} finally {
					hideLoading();
				}
			},
			complete : function() {
				hideLoading();
			}
		});

		if(origin == "ICN" && destination == "CJU"){
		showPopupLayer("/popup/showJinairCounterInfoLayer");
	}


	} else {

		// 운임확인 구간으로 이동
		var quickModifyHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
		var bTop = $('dl.totalCharge').offset().top - quickModifyHeight -100;
		$("html, body").stop().animate({scrollTop:bTop}, 150, "easeInOutQuint");

		//운임정보 업데이트(마지막 여정선택시에만)
		if ( originDestinationInfo.length-1 == indexNo ){
			getModifyBooking();
		}
	}
}


// 4. ConfirmPrice 조회 / 저장
function getConfirmPrice(procType){

	var frm = $('#registerform');

	var jsonData = {
		channel : channel,	// IBS 채널 코드
		domIntType : DomIntType,// 국제,국내선구분
		itineraryDetails : [],
		fareInfo : [],
		paxCountDetails : [],
		ssrdetails : [],
		isGroup		: isGroup,
		tripType	: frm.find(':input[name=tripType]').val() ,
		cpnNo		: couponNo,
		promoCode	: promotionCode
	};

	var arrPaxDetails = [];
	if ( frm.find(':input[name=adultPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType : 'ADULT',
			paxCount : frm.find(':input[name=adultPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=childPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType : 'CHILD',
			paxCount : frm.find(':input[name=childPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=infantPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType : 'INFANT',
			paxCount : frm.find(':input[name=infantPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}

	var originDestinationInfo = $('div.originDestinationInfo');

	var itineraryDetails = {
		flightSegmentDetails :[]
	}
	$.each(originDestinationInfo ,function(i){
		if ( $(this).attr('modifyTypeOption') =='MODIFY_FIRST' || $(this).attr('modifyTypeOption') =='' ){

			var selectedInfos	= getSelectedInfos($(this));	// 선택여정 정보
			var isThrough 		= selectedInfos.isThrough;		// 경유 여부
			var segmentInfos	= selectedInfos.segmentInfos;	// Segment정보
			var selFareInfo		= selectedInfos.fareInfo;		// 운임정보
			var selBundleInfo	= selectedInfos.bundleInfo;		// 번들정보

			if ( segmentInfos.length == 0 ) { return false };
			var segmentIds = [];
			segmentInfos.each( function(s){
				var selSegInfo = $(this);
				// ItineraryDetails
				var flightSegmentDetails = {
					flightSegmentGroupID : selSegInfo.attr('tripIndex'),
					segmentId : selSegInfo.attr('segmentIndex'),
					carrierCode : selSegInfo.attr('flightIdentifierInfo.carrierCode'),
					fltNumber : selSegInfo.attr('flightIdentifierInfo.flightNumber'),
					flightDate : {date : selSegInfo.attr('flightIdentifierInfo.flightDate')},
					fltSuffix : selSegInfo.attr('flightIdentifierInfo.flightSuffix'),
					boardPoint : selSegInfo.attr('departureInfo.airportCode'),
					offPoint : selSegInfo.attr('arrivalInfo.airportCode'),
					scheduledDepartureDateTime : selSegInfo.attr('departureInfo.dateTime'),
					departureTimeZone : selSegInfo.attr('departureInfo.timeZoneOffset'),
					scheduledArrivalTime : selSegInfo.attr('arrivalInfo.dateTime'),
					arrivalTimeZone : selSegInfo.attr('arrivalInfo.timeZoneOffset'),
					journeyTime : selSegInfo.attr('journeyTime'),
					stops : selSegInfo.attr('stops'),
					arrivalDayChange : selSegInfo.attr('dayChange'),
					isThroughFlight : isThrough,
					cabinClass : selFareInfo.attr('cabinClass').indexOf(',')>0 ? selFareInfo.attr('cabinClass').split(',')[s] : selFareInfo.attr('cabinClass'),
					fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[s] : selFareInfo.attr('bookingClass')
				}
				itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
				segmentIds.push(selSegInfo.attr('segmentIndex'));
			});

			var fareInfo = {
				fareDetailsForGuestType : []
			}

			$.each(arrPaxDetails,function(p){
				var baseFare = '';
				var paxType = $(this)[0].paxType;
				if ( paxType=='ADULT') {
					baseFare = selFareInfo.attr('baseFare.adultAmount');
				} else if ( paxType=='CHILD') {
					baseFare = selFareInfo.attr('baseFare.childAmount');
				} else if ( paxType=='INFANT') {
					baseFare = selFareInfo.attr('baseFare.infantAmount');
				} else {
					baseFare = selFareInfo.attr('baseFare.adultAmount');
				}
				var fareDetails = {
					fareLevel : selFareInfo.attr('fareLevel'),
					fareType : selFareInfo.attr('fareType'),
					fareBasisCode : selFareInfo.attr('fareBasis'),
					//fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[s] : selFareInfo.attr('bookingClass'),
					guestType : paxType,
					ReturnRestrictionInd : true,
					baseFare : baseFare,
					currency : selFareInfo.attr('currencyCode'),
					fareTransactionID : selFareInfo.attr('fareId'),
					segmentId : segmentIds,
					pricingUnitID : selFareInfo.attr('pricingUnitID'),
					fareComponentId : selFareInfo.attr('pricingComponentIndex')
				}
				fareInfo.fareDetailsForGuestType.push(fareDetails);

			});

			jsonData.fareInfo.push(fareInfo);

			if ( selBundleInfo.attr('serviceCode') ){
				var ssrDetails = {
					ssrCode : selBundleInfo.attr('serviceCode'),
					ssrType : 'BUNDLE',
					ssrAirlineCode : 'LJ',
					numberOfRequests : '1',
					segmentId : [selBundleInfo.attr('segmentId')]
				}
				jsonData.ssrdetails.push(ssrDetails);
			}
		} else if ( $(this).attr('modifyTypeOption') =='MODIFY_READONLY' ) {
			//=> Itinerary(json)
			var oldSegInfo = modifyJsonData.originDestinationInfo[i].flightSegmentDetails;

			var flightSegmentDetails = {
				flightSegmentGroupID : oldSegInfo.flightSegmentGroupID,
				segmentId : oldSegInfo.segmentId,
				carrierCode : oldSegInfo.carrierCode,
				fltNumber : oldSegInfo.fltNumber,
				flightDate : {date : new Date(oldSegInfo.flightDate.date.year,oldSegInfo.flightDate.date.month-1,oldSegInfo.flightDate.date.day)},
				fltSuffix : oldSegInfo.fltSuffix,
				boardPoint : oldSegInfo.boardPoint,
				offPoint : oldSegInfo.offPoint,
				scheduledDepartureDateTime : new Date(oldSegInfo.scheduledDepartureDateTime.year,oldSegInfo.scheduledDepartureDateTime.month-1,oldSegInfo.scheduledDepartureDateTime.day),
				departureTimeZone : oldSegInfo.departureTimeZone,
				scheduledArrivalTime : new Date(oldSegInfo.scheduledArrivalTime.year,oldSegInfo.scheduledArrivalTime.month-1,oldSegInfo.scheduledArrivalTime.day),
				arrivalTimeZone : oldSegInfo.arrivalTimeZone,
				journeyTime : oldSegInfo.journeyTime,
				stops : oldSegInfo.stops,
				arrivalDayChange : oldSegInfo.arrivalDayChange,
				isThroughFlight : isThrough,
				cabinClass : oldSegInfo.cabinClass,
				fareClass : oldSegInfo.fareClass
			}

			itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
			//FlightSegmentDetails.push(modifyJsonData[i].fareDetailsForGuestType);
			var fareInfo = {
				fareDetailsForGuestType : []
			}

			$.each( modifyJsonData.originDestinationInfo[i].fareDetailsForGuestType[0].guestPriceBreakDown ,function(p){
				$.each( $(this)[0].priceBreakDown ,function(d){
					var oldFareInfo = $(this)[0].fareDetailsForGuestType[0];
					var fareDetails = {
						fareLevel : oldFareInfo.fareLevel,
						fareType : oldFareInfo.fareType,
						fareBasisCode : oldFareInfo.fareBasisCode,
						fareClass : oldFareInfo.fareClass,
						guestType : oldFareInfo.guestType,
						ReturnRestrictionInd : true,
						baseFare : oldFareInfo.baseFare,
						currency : oldFareInfo.currency,
						fareTransactionID : oldFareInfo.fareTransactionID,
						segmentId : oldFareInfo.segmentId,
						pricingUnitID : oldFareInfo.pricingUnitID,
						fareComponentId : oldFareInfo.fareComponentId
					}
					fareInfo.fareDetailsForGuestType.push(fareDetails);
				});
			});
			//$(this).attr('flightSegmentDetailsForModifyJsonString')
			//$(this).attr('fareDetailsForGuestTypeModifyJsonString')
			jsonData.fareInfo.push(fareInfo);
		}
	});

	jsonData.itineraryDetails.push(itineraryDetails);
	jsonData.paxCountDetails = arrPaxDetails;
	// dynamic pricing 개발 pending 2020-03-16
	jsonData.customFieldList = {customField:new Array};
	jsonData.customFieldList.customField.push(OFFER_META_DATA);

	console.log('getConfirmPrice');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	var bookingID = ( $('#bookingID').val()!= undefined && $('#bookingID').val()!='')? $('#bookingID').val().trim() : '';

	__page__.numOfRequests++;
	$.ajax({
		type	: "POST",
		url		: (procType=='NEXT' ? "/jinair/jinairfront/www.jinair.com/booking/getNextConfirmPriceJson.json" : '/jinair/jinairfront/www.jinair.com/booking/getConfirmPriceJson.json') + '?bookingID='+bookingID,
		data	: JSON.stringify(jsonData),
		//async	: false,
		contentType : "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			__page__.numOfRequests--;
			if(!__page__.numOfRequests) {
				hideLoading();
			}

			try {
				console.log('getConfirmPriceJson :')
				console.log(data);

				if (data.errorCode == null ){
					if ( procType=='NEXT' ){
						showLoading();
						if ( isGroup ){
							document.location.replace('/jinair/jinairfront/www.jinair.com/booking/registerPassengerGroup.json')
						} else {
							document.location.replace('/jinair/jinairfront/www.jinair.com/booking/registerPassenger.json')
						}
					} else {
						// 운임정보 계산
						fnCalculateTotalCharge(data.result);
					}
				} else {
					//hideLoading();
					alertLayer($.i18n.prop(data.errorCode), ''//동일 브라우저에서 2개 이상의 예약을 진행할 수 없습니다.
						,'fnMoveBookingHome'
					);
				}
			} catch(e) {
				__page__.numOfRequests--;
				if(!__page__.numOfRequests) {
					hideLoading();
				}

				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		error : function(data) {
			__page__.numOfRequests--;
			if(!__page__.numOfRequests) {
				hideLoading();
			}

			try {
				alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		complete : function(xhr, status) {
			if ( procType=='NEXT' && status!='success' ){
				// Net Funnel Complete
				if ( netfunnelVisible ) {
					NetFunnel_Complete();
				}
			}
		}
	});
}




//5. ModifyBooking 저장
function getModifyBooking(procType){

	var frm = $('#registerform');

	var jsonData = {
		channel : channel,	// IBS 채널 코드
		domIntType : DomIntType,// 국제,국내선구분
		itineraryChangeType : [],
		fareInfo : [],
		paxCountDetails : [],
		pnrNumber : '',
		numberOfSeats :'',
		ssrModifyType :[],
		guestDetails : [],
		isGroup		: isGroup
	};

	var arrPaxDetails = [];
	var numberOfSeats = 0;
	if ( frm.find(':input[name=adultPaxCount]').val() >'0'){
		var PaxCountDetails = {
			paxType : 'ADULT',
			paxCount : frm.find(':input[name=adultPaxCount]').val()
		}
		arrPaxDetails.push(PaxCountDetails);

		//numberOfSeats += parseInt(frm.find(':input[name=adultPaxCount]').val());
	}
	if ( frm.find(':input[name=childPaxCount]').val() >'0'){
		var PaxCountDetails = {
			paxType : 'CHILD',
			paxCount : frm.find(':input[name=childPaxCount]').val()
		}
		arrPaxDetails.push(PaxCountDetails);
		//numberOfSeats += parseInt(frm.find(':input[name=childPaxCount]').val());
	}

	if ( frm.find(':input[name=infantPaxCount]').val() >'0'){
		var PaxCountDetails = {
			paxType : 'INFANT',
			paxCount : frm.find(':input[name=infantPaxCount]').val()
		}
		arrPaxDetails.push(PaxCountDetails);
	}

	//jsonData.numberOfSeats = numberOfSeats;
	//jsonData.agencyCode = modifyJsonData.agencyCode;
	//jsonData.originalAgentID = modifyJsonData.originalAgentID;
	//jsonData.pnrOnHoldIndicator = modifyJsonData.pnrOnHoldIndicator;
	jsonData.numberOfSeats = modifyJsonData.numberOfSeats;

	var originDestinationInfo = $('div.originDestinationInfo');

	var itineraryChangeType = {
		segmentChangeType : []
	};

	$.each(originDestinationInfo ,function(i){
		if ( $(this).attr('modifyTypeOption') =='MODIFY_FIRST' || $(this).attr('modifyTypeOption') =='' ){

			var selectedInfos	= getSelectedInfos($(this));	// 선택여정 정보
			var isThrough 		= selectedInfos.isThrough;		// 경유 여부
			var segmentInfos	= selectedInfos.segmentInfos;	// Segment정보
			var selFareInfo		= selectedInfos.fareInfo;		// 운임정보
			var selBundleInfo	= selectedInfos.bundleInfo;		// 번들정보

			if ( segmentInfos.length == 0 ) { return false };

			// ItineraryDetails
			var segmentChangeType = {
				pnrActionType : '',
				oldSegmentId : [],
				flightSegmentDetails :[]
			};
			var segmentIds = [];
			segmentInfos.each( function(s){
				var selSegInfo = $(this);
				// ItineraryDetails
				var flightSegmentDetails = {
					flightSegmentGroupID : selSegInfo.attr('tripIndex'),
					segmentId : selSegInfo.attr('segmentIndex'),
					carrierCode : selSegInfo.attr('flightIdentifierInfo.carrierCode'),
					fltNumber : selSegInfo.attr('flightIdentifierInfo.flightNumber'),
					flightDate : {date : selSegInfo.attr('flightIdentifierInfo.flightDate')},
					fltSuffix : selSegInfo.attr('flightIdentifierInfo.flightSuffix'),
					boardPoint : selSegInfo.attr('departureInfo.airportCode'),
					offPoint : selSegInfo.attr('arrivalInfo.airportCode'),
					scheduledDepartureDateTime : selSegInfo.attr('departureInfo.dateTime'),
					departureTimeZone : selSegInfo.attr('departureInfo.timeZoneOffset'),
					scheduledArrivalTime : selSegInfo.attr('arrivalInfo.dateTime'),
					arrivalTimeZone : selSegInfo.attr('arrivalInfo.timeZoneOffset'),
					journeyTime : selSegInfo.attr('journeyTime'),
					stops : selSegInfo.attr('stops'),
					arrivalDayChange : selSegInfo.attr('dayChange'),
					aircraftType	: selSegInfo.attr('aircraftinfo.type'),
					isThroughFlight : isThrough,
					cabinClass : selFareInfo.attr('cabinClass').indexOf(',')>0 ? selFareInfo.attr('cabinClass').split(',')[s] : selFareInfo.attr('cabinClass'),
					fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[s] : selFareInfo.attr('bookingClass')
				}
				segmentChangeType.flightSegmentDetails.push(flightSegmentDetails);
				segmentIds.push(selSegInfo.attr('segmentIndex'));
			});

			var oldFlightSegmentDetails = modifyJsonData.originDestinationInfo[i].flightSegmentDetails;
			var oldSegmentId =[];
			$.each(oldFlightSegmentDetails ,function(f){
				oldSegmentId.push($(this)[0].segmentId);
			});

			segmentChangeType.pnrActionType = 'MODIFY';
			segmentChangeType.oldSegmentId = oldSegmentId;
			itineraryChangeType.segmentChangeType.push(segmentChangeType);
			//jsonData.itineraryChangeType.push(itineraryChangeType);


			var fareInfo = {
				fareDetailsForGuestType : []
			}

			$.each(arrPaxDetails,function(p){
				var baseFare ='';
				if ( $(this)[0].paxType=='ADULT') {
					baseFare = selFareInfo.attr('baseFare.adultAmount');
				} else if ( $(this)[0].paxType=='CHILD') {
					baseFare = selFareInfo.attr('baseFare.childAmount');
				} else if ( $(this)[0].paxType=='INFANT') {
					baseFare = selFareInfo.attr('baseFare.infantAmount');
				} else {
					baseFare = selFareInfo.attr('baseFare.adultAmount');
				}
				var fareDetails = {
					fareLevel : selFareInfo.attr('fareLevel'),
					fareType : selFareInfo.attr('fareType'),
					fareBasisCode : selFareInfo.attr('fareBasis'),
					fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[p] : selFareInfo.attr('bookingClass'),
					guestType : $(this)[0].paxType,
					ReturnRestrictionInd : true,
					//FareSubType
					baseFare : baseFare,
					currency : selFareInfo.attr('currencyCode'),
					fareTransactionID : selFareInfo.attr('fareId'),
					segmentId : segmentIds,
					pricingUnitID : selFareInfo.attr('pricingUnitID'),
					fareComponentId : selFareInfo.attr('pricingComponentIndex')
				}
				fareInfo.fareDetailsForGuestType.push(fareDetails);
			});
			jsonData.fareInfo.push(fareInfo);

			// 최초 출발지가 필리핀인 경우
			var isExph = modifyJsonData.originDestinationInfo[i].isExph;
			if ( selBundleInfo.attr('serviceCode') ){
				$.each( modifyJsonData.guestDetails ,function(g) {
					if ( $(this)[0].guestType=='ADULT' || $(this)[0].guestType=='CHILD' ){
						var ssrModifyType = {
							pnrActionType : 'ADD',
							ssrinformationType : [{
								ssrCode : isExph ? 'EXPH' : selBundleInfo.attr('serviceCode') ,
								ssrType : isExph ? 'GENERAL' : 'BUNDLE',
								ssrAirlineCode : 'LJ',
								numberOfRequests : 1,
								guestId : $(this)[0].guestId,
								segmentId : segmentIds
							}]
						}

						jsonData.ssrModifyType.push(ssrModifyType);
					}
				});
			}

		}
	});

	jsonData.pnrNumber = frm.find(':input[name=pnrNumber]').val()
	jsonData.itineraryChangeType.push(itineraryChangeType);
	jsonData.paxCountDetails = arrPaxDetails;
	jsonData.bookerDetails = modifyJsonData.bookerDetails;
	jsonData.guestDetails = modifyJsonData.guestDetails;
	//jsonData.ssrdetails = SSRDetails;
	// dynamic pricing 개발 pending 2020-03-16
	jsonData.customFieldList = {customField:new Array};
	jsonData.customFieldList.customField.push(OFFER_META_DATA);

	console.log('getModifyBooking');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	var bookingID = ( $('#bookingID').val()!= undefined && $('#bookingID').val()!='')? $('#bookingID').val().trim() : '';

	__page__.numOfRequests++;
	$.ajax({
		type	: "POST",
		url		: (procType=='NEXT' ? "/jinair/jinairfront/www.jinair.com/booking/getNextModifyBookingJson.json" : '/jinair/jinairfront/www.jinair.com/booking/getModifyBookingJson.json') + '?bookingID='+bookingID,
		data	: JSON.stringify(jsonData),
		//async	: false,
		contentType : "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			__page__.numOfRequests--;
			if(!__page__.numOfRequests) {
				hideLoading();
			}

			try {
				console.log('getModifyBookingJson :');
				console.log(data);

				if (data.errorCode == null ){
					if ( procType=='NEXT' ){
						if ( isGroup ){
							showLoading();
							document.location.replace('/jinair/jinairfront/www.jinair.com/booking/registerPassengerGroup')
						} else {
							showLoading();
							document.location.replace('/jinair/jinairfront/www.jinair.com/booking/registerPassenger')
						}
					} else {
						// 운임정보 계산
						fnCalculateTotalCharge(data.result);
					}
				} else {
					alertLayer($.i18n.prop(data.errorCode), ''//동일 브라우저에서 2개 이상의 예약을 진행할 수 없습니다.
						,'fnMoveReservationList'
					);
				}
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		error : function(data) {
			__page__.numOfRequests--;
			if(!__page__.numOfRequests) {
				hideLoading();
			}

			try {
				alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		complete : function() {
		}
	});
}

// 6. 최저가 조회
function getBestFare(indexNo){

	if ( indexNo != undefined ) indexNo = parseInt(indexNo);

	if ( $('#registerform').find(':input[name=pnrNumber]').val() == '') {
		if ( indexNo == 0 ){
			// 6-1. 일반 최저가 조회
			getNormalBestFare(indexNo);
		} else {
			// 예약변경
			var isFareSelected = false;
			var isBundleExists = false;
			var isBunldeSelected = false;
			var prevSelected = true;
			var currSelected = true;

			var originDestinationInfo = $('div.originDestinationInfo');

			$.each(originDestinationInfo , function(i){
				prevSelected = currSelected;
				if ( prevSelected ){
					if ( indexNo == i ){
						// 6-2. 결합운임 최저가 조회
						getEnhancedBestFare(indexNo);
						return false;
					}
				} else {
					//alertLayer($.i18n.prop('lj.ibe.b2c.rsv.059'));//이전 여정을 선택하여 주세요.
					getNormalBestFare(indexNo);
					return false;
				}

				if (isMobileOS ){
					isFareSelected  = $(this).find('.segmentAvailability.choice').length ? true:false;
					isBundleExists  = $(this).find('.bundleList:visible').length ? true:false;
					isBunldeSelected= $(this).find('.bundleList:visible').find('li.choice').length ? true:false;
				} else {
					isFareSelected  = $(this).find('.segmentAvailability p.choice').length ? true:false;
					isBundleExists  = $(this).find('.bundleArea:visible').length ? true:false;
					isBunldeSelected= $(this).find('.bundleArea:visible').find('li.choice').length ? true:false;
				}

				if ( isFareSelected ) {
					if ( isBundleExists ) {
						if ( isBunldeSelected ) {
							currSelected = true;
						} else {
							currSelected = false;
						}
					} else {
						currSelected = true;
					}
				} else {
					currSelected = false;
				}

			});
		}
	} else {
		if ( !reissueDobCheck()) {return;}
		//if ( !dobCheck()) {return;}
		// 6-2. 결합운임 최저가 조회
		getEnhancedBestFare(indexNo);
	}
}
//6-1. 일반 최저가 조회
function getNormalBestFare(indexNo) {

	var frm = $('#registerform');
	var pop = getCookie('foPop');
	frm.find(':input[name=pointOfPurchase]').val(pop);
	var jsonData = {
		searchType		: frm.find(':input[name=searchType]').val()
		,origin1		: frm.find(':input[name=origin1]').val()
		,destination1 	: frm.find(':input[name=destination1]').val()
		,travelDate1	: frm.find(':input[name=travelDate1]').val()
		,origin2		: frm.find(':input[name=origin2]').val()
		,destination2 	: frm.find(':input[name=destination2]').val()
		,travelDate2	: frm.find(':input[name=travelDate2]').val()
		,origin3		: frm.find(':input[name=origin3]').val()
		,destination3 	: frm.find(':input[name=destination3]').val()
		,travelDate3	: frm.find(':input[name=travelDate3]').val()
		,origin4		: frm.find(':input[name=origin4]').val()
		,destination4 	: frm.find(':input[name=destination4]').val()
		,travelDate4	: frm.find(':input[name=travelDate4]').val()
		,pointOfPurchase: frm.find(':input[name=pointOfPurchase]').val()
		,adultPaxCount	: frm.find(':input[name=adultPaxCount]').val()
		,childPaxCount	: frm.find(':input[name=childPaxCount]').val()
		,infantPaxCount	: frm.find(':input[name=infantPaxCount]').val()
		,tripType		: frm.find(':input[name=tripType]').val()
		,isGroup		: frm.find(':input[name=isGroup]').val()
		,cpnNo			: frm.find(':input[name=cpnNo]').val()
		,promoCode		: frm.find(':input[name=promoCode]').val()
		,refVal			: frm.find(':input[name=refVal]').val()
		,refPop			: frm.find(':input[name=refPop]').val()
		,refChannel		: frm.find(':input[name=refChannel]').val()
		,refLang		: frm.find(':input[name=refLang]').val()

	}

	if ( indexNo != undefined ) indexNo = parseInt(indexNo);

	console.log('getNormalBestFareList');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	$.ajax({
		type	: "POST",
		url		: "/jinair/jinairfront/www.jinair.com/booking/getAirAvailabilityJson.json",
		data	: JSON.stringify(jsonData),
		dataType: "json",
		contentType : "application/json; charset=UTF-8",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			try {
				console.log('getNormalBestFareJson');
				console.log(data);
				if (isFlightNotFoundError(data.errorCode)){
					var test = new Array();
					if(data.result.jmkStonControl) { // 진마켓 Ston캐싱 제어
						if (indexNo != undefined && indexNo >0 ){
							// BestFare 조회일경우 && 첫번째일 경우 전체 재 조회
							var html = $("#originDestinationListTmpl").render(data.result.originDestinationInfo[indexNo]);
							if ( indexNo==$('div.originDestinationInfo').length-1 ){
								// 마지막 여정일 경우
								$('div.originDestinationInfo:eq('+indexNo+')').remove();
								$(html).insertAfter('div.originDestinationInfo:eq('+(indexNo-1)+')');
							} else {
								$('div.originDestinationInfo:eq('+indexNo+')').remove();
								$(html).insertBefore('div.originDestinationInfo:eq('+indexNo+')');
							}
						} else {
							jiniplusOBFlag = checkJiniPlusSeat(data);
							$('#listSchedule').html(
								$("#listScheduleTmpl").render(data.result)
							);
						}
						// Dynamic Pricing 설정 추가
						// dynamic pricing 개발 pending 2020-03-16
						if(data.result.customFieldList[0] != undefined)
							OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];

						// 결함운임 조회 가능 여부 업데이트
						isFareRefreshRequired = data.result.isFareRefreshRequired;
						// 국내/국제선 구분
						DomIntType= data.result.domIntType;
						// IBS 채널 코드
						channel	= data.result.channel;
						// 그룹여부
						isGroup	= data.result.isGroup;
						// 보너스항공권
						couponNo = data.result.cpnNo;
						// 프로모션코드
						promotionCode = data.result.promoCode;
						frm.find(':input[name=promoCode]').val(promotionCode);
						// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
						checkZeroSeatCnt(data.result.originDestinationInfo);
						hideLoading();

					} else {

						getCachedAvailListJSON(jsonData).then(
							function(cachedData){
								for(var i = 0; i < data.result.originDestinationInfo.length; i++) {
									cachedData.result.originDestinationInfo[i].bestFareInfo.forEach(
										function(bestfare,index){
											if(bestfare.indexNo!=3){
												data.result.originDestinationInfo[i].bestFareInfo[index] = bestfare;
											}
										});
								}
								if (indexNo != undefined && indexNo >0 ){
									// BestFare 조회일경우 && 첫번째일 경우 전체 재 조회
								jiniplusIBFlag = checkJiniPlusSeat(data);
									var html = $("#originDestinationListTmpl").render(data.result.originDestinationInfo[indexNo]);
									if ( indexNo==$('div.originDestinationInfo').length-1 ){
										// 마지막 여정일 경우
										$('div.originDestinationInfo:eq('+indexNo+')').remove();
										$(html).insertAfter('div.originDestinationInfo:eq('+(indexNo-1)+')');
									} else {
										$('div.originDestinationInfo:eq('+indexNo+')').remove();
										$(html).insertBefore('div.originDestinationInfo:eq('+indexNo+')');
									}
								} else {
									jiniplusOBFlag = checkJiniPlusSeat(data);
									$('#listSchedule').html(
										$("#listScheduleTmpl").render(data.result)
									);
								}
								// Dynamic Pricing 설정 추가
								// dynamic pricing 개발 pending 2020-03-16
								if(data.result.customFieldList[0] != undefined)
									OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];

								// 결함운임 조회 가능 여부 업데이트
								isFareRefreshRequired = data.result.isFareRefreshRequired;
								// 국내/국제선 구분
								DomIntType= data.result.domIntType;
								// IBS 채널 코드
								channel	= data.result.channel;
								// 그룹여부
								isGroup	= data.result.isGroup;
								// 보너스항공권
								couponNo = data.result.cpnNo;
								// 프로모션코드
								promotionCode = data.result.promoCode;
								frm.find(':input[name=promoCode]').val(promotionCode);
								// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
								checkZeroSeatCnt(data.result.originDestinationInfo);
								hideLoading();
						});
					}
				} else {
					hideLoading();
					alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');
				}
			} catch(e) {
				hideLoading();
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		error : function(data) {
			try {
				hideLoading();
				alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
			} catch(e) {
				hideLoading();
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		complete : function() {

		}
	});
}

//6-2. 결합운임 최저가 조회
function getEnhancedBestFare(indexNo){
	var frm = $('#registerform');

	var jsonData = {
		channel : channel,	// IBS 채널 코드
		domIntType : DomIntType,// 국제,국내선구분
		itineraryDetails : [],
		itineraryPriceDetails : [],
		availabilitySearches : [],
		paxCountDetails : [],
		oldPricingUnitID :'',
		searchCurrency : '',
		isGroup		: isGroup,
		cpnNo	: couponNo,
		promoCode	: promotionCode,
		customFieldList : []
	};
	if ( indexNo != undefined ) indexNo = parseInt(indexNo);
	var originDestinationInfo = $('div.originDestinationInfo');

	// PaxCountDetail
	var arrPaxDetails = [];
	if ( frm.find(':input[name=adultPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'ADULT',
			paxCount 	: frm.find(':input[name=adultPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=childPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'CHILD',
			paxCount 	: frm.find(':input[name=childPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	if ( frm.find(':input[name=infantPaxCount]').val() >'0'){
		var paxCountDetails = {
			paxType 	: 'INFANT',
			paxCount 	: frm.find(':input[name=infantPaxCount]').val()
		}
		arrPaxDetails.push(paxCountDetails);
	}
	jsonData.paxCountDetails = arrPaxDetails;

	var itineraryDetails ={
		flightSegmentDetails : []
	}
	$.each(originDestinationInfo,function(i){
		if ( i == indexNo )	{
			// 조회 해올 대상
			var dt = frm.find(':input[name=travelDate'+(i+1)+']').val();
			var newdt = new Date(parseInt(dt.substring(0,4)),parseInt(dt.substring(4,6))-1,parseInt(dt.substring(6,8)));
			var availabilitySearches = {
				origin	: frm.find(':input[name=origin'+(i+1)+']').val()
				,destination : frm.find(':input[name=destination'+(i+1)+']').val()
				,travelDate : newdt.valueOf()
				//BestFarePossitiveDaysOut = fareInfo.attr('fareId');
				//BestFareNegativeDaysOut = fareInfo.attr('fareId');
			}
			jsonData.availabilitySearches.push(availabilitySearches);

		} else {
			if ( $(this).attr('modifyTypeOption') =='MODIFY_FIRST' || $(this).attr('modifyTypeOption') =='' ){

				var selectedInfos	= getSelectedInfos($(this));	// 선택여정 정보
				var isThrough 		= selectedInfos.isThrough;		// 경유 여부
				var segmentInfos	= selectedInfos.segmentInfos;	// Segment정보
				var selFareInfo		= selectedInfos.fareInfo;		// 운임정보
				var selBundleInfo	= selectedInfos.bundleInfo;		// 번들정보

				// fare 선택안했을 경우
				if ( segmentInfos.length == 0 && modifyJsonData != null ) {
					var segInfos = modifyJsonData.originDestinationInfo[i].flightSegmentDetails;
					var fareDetailsForGuestType = modifyJsonData.originDestinationInfo[i].fareDetailsForGuestType[0];

					$.each(segInfos,function(i){
						var segInfo = $(this)[0];
						var flightSegmentDetails = {
							flightSegmentGroupID : segInfo.flightSegmentGroupID,
							segmentId : segInfo.segmentId,
							carrierCode : segInfo.carrierCode,
							fltNumber : segInfo.fltNumber,
							flightDate : {date : (new Date(segInfo.flightDate.date.year ,segInfo.flightDate.date.month-1 ,segInfo.flightDate.date.day)).valueOf() },
							boardPoint : segInfo.boardPoint,
							offPoint : segInfo.offPoint,
							scheduledDepartureDateTime : (new Date(segInfo.scheduledDepartureDateTime.year ,segInfo.scheduledDepartureDateTime.month-1 ,segInfo.scheduledDepartureDateTime.day)).valueOf(),
							departureTimeZone : segInfo.departureTimeZone,
							scheduledArrivalTime : (new Date(segInfo.scheduledArrivalTime.year ,segInfo.scheduledArrivalTime.month-1 ,segInfo.scheduledArrivalTime.day)).valueOf(),
							arrivalTimeZone : segInfo.arrivalTimeZone,
							journeyTime : segInfo.journeyTime,
							stops : segInfo.stops,
							arrivalDayChange : segInfo.arrivalDayChange,
							cabinClass : segInfo.cabinClass,
							fareClass : segInfo.fareClass
						}
						itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
					});
					jsonData.itineraryPriceDetails.push(fareDetailsForGuestType);
					jsonData.searchCurrency = fareDetailsForGuestType.guestPriceBreakDown[0].priceBreakDown[0].fareDetailsForGuestType.currency;
				} else {
					// fare 선택했을 경우
					// 일반예약일경우에는 생략
					if ( modifyJsonData == null &&  i > indexNo ) {
						return false;
					}
					var segmentIds = [];
					segmentInfos.each( function(s){
						var selSegInfo = $(this);
						// ItineraryDetails
						var flightSegmentDetails = {
							flightSegmentGroupID : selSegInfo.attr('tripIndex'),
							segmentId : selSegInfo.attr('segmentIndex'),
							carrierCode : selSegInfo.attr('flightIdentifierInfo.carrierCode'),
							fltNumber : selSegInfo.attr('flightIdentifierInfo.flightNumber'),
							flightDate : {date : selSegInfo.attr('flightIdentifierInfo.flightDate')},
							fltSuffix : selSegInfo.attr('flightIdentifierInfo.flightSuffix'),
							boardPoint : selSegInfo.attr('departureInfo.airportCode'),
							offPoint : selSegInfo.attr('arrivalInfo.airportCode'),
							scheduledDepartureDateTime : selSegInfo.attr('departureInfo.dateTime'),
							departureTimeZone : selSegInfo.attr('departureInfo.timeZoneOffset'),
							scheduledArrivalTime : selSegInfo.attr('arrivalInfo.dateTime'),
							arrivalTimeZone : selSegInfo.attr('arrivalInfo.timeZoneOffset'),
							journeyTime : selSegInfo.attr('journeyTime'),
							stops : selSegInfo.attr('stops'),
							arrivalDayChange : selSegInfo.attr('dayChange'),
							isThroughFlight : isThrough,
							cabinClass : selFareInfo.attr('cabinClass').indexOf(',')>0 ? selFareInfo.attr('cabinClass').split(',')[s] : selFareInfo.attr('cabinClass'),
							fareClass : selFareInfo.attr('bookingClass').indexOf(',')>0 ? selFareInfo.attr('bookingClass').split(',')[s] : selFareInfo.attr('bookingClass')
						}
						itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);

						segmentIds.push(selSegInfo.attr('segmentIndex'));
					});

					var itineraryPriceDetails = {
						guestPriceBreakDown : []
					}
					$.each( arrPaxDetails, function(p) {
						var guestPriceBreakDown = {
							priceBreakDown :[{
								fareDetailsForGuestType : {
									fareLevel : selFareInfo.attr('fareLevel'),
									fareType : selFareInfo.attr('fareType'),
									fareBasisCode : selFareInfo.attr('fareBasis'),
									currency : selFareInfo.attr('currencyCode'),
									fareTransactionID : selFareInfo.attr('fareId'),
									guestType : $(this)[0].paxType,
									segmentId : segmentIds,
									pricingUnitID : selFareInfo.attr('pricingUnitID'),
									fareComponentId : selFareInfo.attr('pricingComponentIndex')
								}
							}]
						}
						itineraryPriceDetails.guestPriceBreakDown.push(guestPriceBreakDown);
					});

					jsonData.itineraryPriceDetails.push(itineraryPriceDetails);

					jsonData.oldPricingUnitID = selFareInfo.attr('pricingUnitID');
					jsonData.searchCurrency = selFareInfo.attr('currencyCode');
				}

			} else if ( $(this).attr('modifyTypeOption') =='MODIFY_READONLY' || $(this).attr('modifyTypeOption') =='MODIFY_ETC' ) {
				//=> Itinerary(json)
				// ItineraryDetails
				var segInfos = modifyJsonData.originDestinationInfo[i].flightSegmentDetails;
				var fareDetailsForGuestType = modifyJsonData.originDestinationInfo[i].fareDetailsForGuestType[0];

				$.each(segInfos,function(i){
					var segInfo = $(this)[0];
					var flightSegmentDetails = {
						flightSegmentGroupID : segInfo.flightSegmentGroupID,
						segmentId : segInfo.segmentId,
						carrierCode : segInfo.carrierCode,
						fltNumber : segInfo.fltNumber,
						flightDate : {date : (new Date(segInfo.flightDate.date.year ,segInfo.flightDate.date.month-1 ,segInfo.flightDate.date.day)).valueOf() },
						boardPoint : segInfo.boardPoint,
						offPoint : segInfo.offPoint,
						scheduledDepartureDateTime : (new Date(segInfo.scheduledDepartureDateTime.year ,segInfo.scheduledDepartureDateTime.month-1 ,segInfo.scheduledDepartureDateTime.day)).valueOf(),
						departureTimeZone : segInfo.departureTimeZone,
						scheduledArrivalTime : (new Date(segInfo.scheduledArrivalTime.year ,segInfo.scheduledArrivalTime.month-1 ,segInfo.scheduledArrivalTime.day)).valueOf(),
						arrivalTimeZone : segInfo.arrivalTimeZone,
						journeyTime : segInfo.journeyTime,
						stops : segInfo.stops,
						arrivalDayChange : segInfo.arrivalDayChange,
						cabinClass : segInfo.cabinClass,
						fareClass : segInfo.fareClass
					}
					itineraryDetails.flightSegmentDetails.push(flightSegmentDetails);
				});
				jsonData.itineraryPriceDetails.push(fareDetailsForGuestType);
				jsonData.searchCurrency = fareDetailsForGuestType.guestPriceBreakDown[0].priceBreakDown[0].fareDetailsForGuestType.currency;
			}
		}
	});

	jsonData.itineraryDetails.push(itineraryDetails);

	if ( null != modifyJsonData ){
		// 예약변경 경우만
		var oldFlightInfo = modifyJsonData.originDestinationInfo[indexNo].flightSegmentDetails[0];
		var oldFareInfo = modifyJsonData.originDestinationInfo[indexNo].fareDetailsForGuestType[0].guestPriceBreakDown[0].priceBreakDown[0].fareDetailsForGuestType;
		var oldGuestPriceBreakDown = modifyJsonData.originDestinationInfo[indexNo].fareDetailsForGuestType[0].guestPriceBreakDown;

		var cancelAndRebookInfo = {
			fareBasis : oldFareInfo.fareBasisCode,
			adultBaseFare : oldFareInfo.baseFare,
			oldFlightDepartureDate : new Date(oldFlightInfo.scheduledDepartureTimeLTC.year,oldFlightInfo.scheduledDepartureTimeLTC.month-1,oldFlightInfo.scheduledDepartureTimeLTC.day),
			timeZoneOffset : oldFlightInfo.departureTimeZone
		}
		$.each(oldGuestPriceBreakDown,function(p){
			if ( $(this)[0].guestType=='ADULT') {
				cancelAndRebookInfo.adultBaseFare = $(this)[0].priceBreakDown[0].fareDetailsForGuestType.baseFare;
			} else if ( $(this)[0].guestType=='CHILD' ) {
				cancelAndRebookInfo.childBaseFare = $(this)[0].priceBreakDown[0].fareDetailsForGuestType.baseFare;
			} else if ( $(this)[0].guestType=='INFANT' ) {
				cancelAndRebookInfo.infantBaseFare = $(this)[0].priceBreakDown[0].fareDetailsForGuestType.baseFare;
			}
		});

		jsonData.cancelAndRebookInfo = cancelAndRebookInfo;

		jsonData.pnrCreationChannelType = modifyJsonData.bookingChannel.channelType;
		jsonData.pnrCreationChannelCode = modifyJsonData.bookingChannel.channel;
		jsonData.pnrCreationTime = modifyJsonData.pnrCreationTime;
		jsonData.ticketedDate = modifyJsonData.ticketedDate;

		jsonData.searchCurrency = oldFareInfo.currency;
		jsonData.oldPricingUnitID = oldFareInfo.pricingUnitID;

	}

	// dynamic pricing 개발 pending 2020-03-16
	jsonData.customFieldList = [{customField:new Array}];
	jsonData.customFieldList[0].customField.push(OFFER_META_DATA);
	if (modifyJsonData != null ){
		if ( modifyJsonData.customFieldList ){
			jsonData.customFieldList = modifyJsonData.customFieldList;
		}
	}

	console.log('getEnhancedBestFare');
	console.log(jsonData);
	fnJsonCheck(jsonData);

	$.ajax({
		type	: "POST",
		url		: "/jinair/jinairfront/www.jinair.com/booking/getEnhancedAirAvailabilityJson.json",
		data	: JSON.stringify(jsonData),
		//async	: false,
		contentType : "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			showLoading();
		},
		success	: function(data) {
			try {
				console.log('getEnhancedBestFareJson :');
				console.log(data);
				$.each(data.result.originDestinationInfo,function(i){
					//$(this)[0].indexNo = parseInt(indexNo)+1;
					$(this)[0].indexNo = parseInt(indexNo);
				});

				if (isFlightNotFoundError(data.errorCode)){
					var html = $("#listScheduleTmpl").render(data.result);
					if ( indexNo==$('div.originDestinationInfo').length-1 ){
						// 마지막 여정일 경우
						$('div.originDestinationInfo:eq('+indexNo+')').remove();
						if ( $('div.originDestinationInfo').length >0 ){
							$(html).insertAfter('div.originDestinationInfo:eq('+(indexNo-1)+')');
						} else {
							$('#listSchedule').html(html);
						}
						jiniplusIBFlag = checkJiniPlusSeat(data);
					} else {
						$('div.originDestinationInfo:eq('+indexNo+')').remove();
						$(html).insertBefore('div.originDestinationInfo:eq('+indexNo+')');
						jiniplusOBFlag = checkJiniPlusSeat(data);
					}
					// Dynamic Pricing 설정 추가
					// dynamic pricing 개발 pending 2020-03-16
					if(data.result.customFieldList[0] != undefined)
						OFFER_META_DATA = data.result.customFieldList[0].customField.filter(function (value) {return value.name == "OFFER_META_DATA";})[0];
					// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
					checkZeroSeatCnt(data.result.originDestinationInfo);
				} else {
					alertLayer('<p align=left>Error : ' + data.errorCode+'<br/>Detail : ' + data.errorDetail+'</p>');
				}
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			} finally {
				hideLoading();
			}
		},
		error : function(data) {
			try {
				alertLayer('<p align=left>Error : ' + data.responseJSON.errorCode+'<br/>Detail : ' + data.responseJSON.errorDetail+'<br/>ErrorDetail : ' + data.responseJSON.errorMessage+'</p>');
			} catch(e) {
				console.log(data);
				console.log(e);
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			} finally {
				hideLoading();
			}
		},
		complete : function() {
			hideLoading();
		}
	});

	//운임정보 업데이트
	//getConfirmPrice();
}
// 최저가조회 선택
function fnClickBestFare(obj, indexNo ,srcDate , srcType){

	//console.log(isMobileOS +''+ indexNo +''+ srcDate +''+ srcType);
	var frm = $('#registerform');

	if ( indexNo != undefined ) indexNo = parseInt(indexNo);

	var dt = frm.find(':input[name=travelDate'+(indexNo+1)+']').val();
	var newdt = new Date(parseInt(dt.substring(0,4)),parseInt(dt.substring(4,6))-1,parseInt(dt.substring(6,8)));
	var addCnt = 0;

	if ( srcType == 'prev'){
		if (isMobileOS){
			addCnt = -3;
		} else {
			addCnt = -7;
		}
		newdt.setDate(newdt.getDate()+addCnt);
		newdt.setTime( newdt.getTime() -(newdt.getTimezoneOffset()*60000) );
		srcDate = newdt.toISOString();//fnParseDateFormat(newdt,'yyyymmdd');
	} else if ( srcType == 'next'){
		if (isMobileOS){
			addCnt = 3;
		} else {
			addCnt = 7;
		}
		newdt.setDate(newdt.getDate()+addCnt);
		newdt.setTime( newdt.getTime() -(newdt.getTimezoneOffset()*60000) );
		srcDate = newdt.toISOString();//fnParseDateFormat(newdt,'yyyymmdd');
	}

	if ( srcDate !== undefined ){
		srcDate = srcDate.substr(0, 10);
		srcDate = srcDate.replace(/-/gi,'');
	}

	var travelDateList = [];
	for (i=1 ; i<=4 ; i++ ){
		var travelDate = frm.find(':input[name=travelDate'+(i)+']').val();
		if ( '' != travelDate ){
			travelDateList.push(travelDate.toString());
		}
	}

	var bestFareInfo = $('div.schedule').find('li.choice');

	var blnDateChk = true;
	if ( bestFareInfo.length >1 ){
		// 일반예약시
		$.each(bestFareInfo ,function(i){
			var choiceDate = $(this).attr('flightDate');
			choiceDate = choiceDate.replace(/-/gi,'');
			var currDate = fnParseDateFormat(new Date(),'yyyymmdd');
			if ( srcDate < currDate ){
				blnDateChk = false;
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.062'));//과거 날짜는 검색 할 수 없습니다.
				return false;
			}

			if ( indexNo > i && srcDate < choiceDate ){
				blnDateChk = false;
				alertLayer( $.i18n.prop('lj.ibe.b2c.rsv.060', (indexNo+1), (i+1)) ); //alertLayer('여정'+ (indexNo+1) +'은 여정'+ (i+1)+ ' 날짜보다 이후이어야 합니다.');
				return false;
			}
			if ( indexNo < i && srcDate > choiceDate ){
				blnDateChk = false;
				alertLayer( $.i18n.prop('lj.ibe.b2c.rsv.061', (indexNo+1), (i+1)));	//alertLayer('여정' +(indexNo+1)+ '은 여정' +(i+1)+ ' 날짜보다 이전이어야 합니다.');
				return false;
			}
		});
	} else {
		// 여정변경
		$.each(travelDateList,function(i){
			var choiceDate = travelDateList[i];
			var currDate = fnParseDateFormat(new Date(),'yyyymmdd');

			if ( srcDate < currDate ){
				blnDateChk = false;
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.062'));//과거 날짜는 검색 할 수 없습니다.
				return false;
			}
			if ( indexNo > i && srcDate < choiceDate ){
				blnDateChk = false;
				alertLayer( $.i18n.prop('lj.ibe.b2c.rsv.060', (indexNo+1), (i+1)) ); //alertLayer('여정'+ (indexNo+1) +'은 여정'+ (i+1)+ ' 날짜보다 이후이어야 합니다.');
				return false;
			}
			if ( indexNo < i && srcDate > choiceDate ){
				blnDateChk = false;
				alertLayer( $.i18n.prop('lj.ibe.b2c.rsv.061', (indexNo+1), (i+1)));	//alertLayer('여정' +(indexNo+1)+ '은 여정' +(i+1)+ ' 날짜보다 이전이어야 합니다.');
				return false;
			}
		});
	}

	if ( blnDateChk ){
		if ( indexNo !== undefined ){
			srcDate = srcDate.replace(/-/gi,'');
			frm.find(':input[name=travelDate'+(indexNo+1)+']').val(srcDate);
			// 6.최저가 조회
			getBestFare(indexNo);
		}
	}

}

// Fare선택시
function fnClickSegmentAvailavility(obj ,indexNo){
	var chkCookie = getCookie('foLangCountry');
	if(chkCookie == "" || chkCookie == null  || chkCookie == undefined) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.080') , ''  ,'fnMoveGate');
	}
	else {
		var isFareSelected = false;
		var isBundleExists = false;
		var isBunldeSelected = false;
		var prevSelected = true;
		var currSelected = true;

		if ( indexNo != undefined ) indexNo = parseInt(indexNo);
		var originDestinationInfo = $('div.originDestinationInfo');

		$.each(originDestinationInfo , function(i){
			prevSelected = currSelected;
			if ( prevSelected ){
				// 2. 번들 조회
				if ( indexNo == i ){
					if( fnValidateSegment(obj ,indexNo) && fnValidateFlight(obj, indexNo) ){
						getListSaleableAncillaryServices(obj ,indexNo);
					}
					return false;
				}
			} else {
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.059'));//이전 여정을 선택하여 주세요.
				return false;
			}

			if (isMobileOS ){
				isFareSelected  = $(this).find('.segmentAvailability.choice').length ? true:false;
				isBundleExists  = $(this).find('.bundleList:visible').length ? true:false;
				isBunldeSelected= $(this).find('.bundleList:visible').find('li.choice').length ? true:false;
			} else {
				isFareSelected  = $(this).find('.segmentAvailability p.choice').length ? true:false;
				isBundleExists  = $(this).find('.bundleArea:visible').length ? true:false;
				isBunldeSelected= $(this).find('.bundleArea:visible').find('li.choice').length ? true:false;
			}

			if ( isFareSelected ) {
				if ( isBundleExists ) {
					if ( isBunldeSelected ) {
						currSelected = true;
					} else {
						currSelected = false;
					}
				} else {
					currSelected = true;
				}
			} else {
				currSelected = false;
			}
			// 예약변경시 변경제외 대상은 선택된것으로 간주함
			if( $(this).attr('modifyTypeOption') =='MODIFY_READONLY' ){
				currSelected = true;
			}
		});
	}

}


// 운임정보 계산
function fnCalculateTotalCharge(data){

	var frm = $('#registerform');

	var originDestinationInfo = $('div.originDestinationInfo');

	var totalAppliedAmount=0	// 운임
	var totalSurchargeAmount=0;	// 유류할증료
	var totalTaxAmount=0;		// 세금
	var totalBundleAmount =0 ;	// 번들
	var totalAmount = 0;		// 총금액

	var adultCount 	= frm.find(':input[name=adultPaxCount]').val();
	var childCount 	= frm.find(':input[name=childPaxCount]').val();
	var infantCount = frm.find(':input[name=infantPaxCount]').val();

	var currency ='KRW';
	var adultAppliedAmount =0 , childAppliedAmount =0 , infantAppliedAmount=0;
	var adultSurchargeAmount =0 , childSurchargeAmount =0 , infantSurchargeAmount=0;
	var adultTaxAmount =0 , childTaxAmount =0 , infantTaxAmount=0;
	var bundleAmount  =0;

	var fnArrayCompare = function(a1 ,a2){
		var result = false;
		if ( a1.length == 0 || a2.length ==0 ){ return false; }
		for (var x=0; x<a1.length ; x++ ) {
			for (var y=0; y<a2.length ; y++ ) {
				if ( a1[x] == a2[y] ){
					result = true;
					break;
				}
			}
		}
		return result;
	}

	$.each( data.itinerary ,function(i) {
		var flightSegmentDetails = $(this)[0].flightSegmentDetails;

		// 그룹으로 정렬
		var flightGrp = {};
		$.each(flightSegmentDetails,function(a){
			var flightSegmentGroupID = $(this)[0].flightSegmentGroupID;
			var segmentId = $(this)[0].segmentId ? parseInt($(this)[0].segmentId) : 0;
			var segmentStatus = $(this)[0].segmentStatus;

			if ( 'HOLDING_SOLD' == segmentStatus ){
				if ( flightGrp[flightSegmentGroupID] !=undefined ){
					flightGrp[flightSegmentGroupID].push(segmentId)
				} else {
					flightGrp[flightSegmentGroupID] = [segmentId];
				}
			}
		});

		$.each(flightGrp,function(k , v){
			var segmentIds = v.sort();

			$.each( data.itinPrice ,function(b){
				var guestPriceBreakDown = $(this)[0].guestPriceBreakDown;

				$.each( guestPriceBreakDown, function(c){
					var priceBreakDown = $(this)[0].priceBreakDown;
					var guestType = $(this)[0].guestType;
					var tax = $(this)[0].tax;

					// fareComponentId 찾기
					var fareComponentId = '';
					$.each( priceBreakDown ,function(d){
						var appliedFareDetailsType = $(this)[0].appliedFareDetailsType
						var fareDetailsForGuestType = $(this)[0].fareDetailsForGuestType

						if ( fnArrayCompare(segmentIds ,fareDetailsForGuestType.segmentId) ) {
							if ( guestType =='ADULT' ){
								adultAppliedAmount += appliedFareDetailsType.appliedFare;
							} else if ( guestType =='CHILD' ){
								childAppliedAmount += appliedFareDetailsType.appliedFare;
							} else if ( guestType =='INFANT' ){
								infantAppliedAmount += appliedFareDetailsType.appliedFare;
							}
							currency = appliedFareDetailsType.currency;
							fareComponentId = fareDetailsForGuestType.fareComponentId;
							return false;
						}
					});
					// tax - start
					$.each( tax ,function(t) {
						var _this = $(this)[0];
						if ( fareComponentId == _this.fareComponentId ){
							if ( guestType =='ADULT' ){
								if ( _this.code =='YR' ){
									// 유류할증료
									adultSurchargeAmount += _this.amount;
								} else {
									// 세금
									adultTaxAmount += _this.amount;
								}
							} else if ( guestType =='CHILD' ){
								if ( _this.code =='YR' ){
									childSurchargeAmount += _this.amount;
								} else {
									childTaxAmount += _this.amount;
								}
							} else if ( guestType =='INFANT' ){
								if ( _this.code =='YR' ){
									infantSurchargeAmount += _this.amount;
								} else {
									infantTaxAmount += _this.amount;
								}
							}
						}
					});
					// tax - end
				});
			});
			$.each( data.feeInformation ,function(i){
				//if ( $(this)[0].feeCode =='BUNDLE' && fnArrayCompare(segmentIds,$(this)[0].segmentId) ){
				//if ( $(this)[0].feeCode =='BUNDLE' ){
				if ( fnArrayCompare(segmentIds,$(this)[0].segmentId) ){
					bundleAmount += $(this)[0].feeAmount;
				}
			});
		});
	});


	totalAppliedAmount+=(adultAppliedAmount)+(childAppliedAmount)+(infantAppliedAmount);
	totalSurchargeAmount+=(adultSurchargeAmount)+(childSurchargeAmount)+(infantSurchargeAmount);
	totalTaxAmount+=(adultTaxAmount)+(childTaxAmount)+(infantTaxAmount);
	totalBundleAmount+=(bundleAmount);
	totalAmount += totalAppliedAmount+totalSurchargeAmount+totalTaxAmount+totalBundleAmount;

	totalAppliedAmount = isNaN(totalAppliedAmount) ? 0 : parseFloat(totalAppliedAmount.toFixed(2));
	totalSurchargeAmount = isNaN(totalSurchargeAmount) ? 0 : parseFloat(totalSurchargeAmount.toFixed(2));
	totalTaxAmount = isNaN(totalTaxAmount) ? 0 : parseFloat(totalTaxAmount.toFixed(2));
	totalBundleAmount = isNaN(totalBundleAmount) ? 0 : parseFloat(totalBundleAmount.toFixed(2));
	totalAmount = isNaN(totalAmount) ? 0 : parseFloat(totalAmount.toFixed(2));

	$('#totalApplied').html('<span id="Currency" class="unit">'+ currency +'</span> '+currencyFormat(totalAppliedAmount));
	$('#totalSurcharge').html('<span class="unit">'+ currency +'</span> '+currencyFormat(totalSurchargeAmount));
	$('#totalTax').html('<span class="unit">'+ currency +'</span> '+currencyFormat(totalTaxAmount));
	$('#totalBundle').html('<span class="unit">'+ currency +'</span> '+currencyFormat(totalBundleAmount));
	$('#totalAmout').html('<span class="unit">'+ currency +'</span> '+currencyFormat(totalAmount));

	// basket 적용
	//confirmPrice = JSON.parse(data.priceBasket);
	confirmPrice = data.priceBasket;
	setDataBinding();
}



//번들선택 (공통)
function fnClickBundle(obj){
	$(obj).parents("li").toggleClass("choice").siblings().removeClass("choice");

	var indexNo = $(obj).closest("div.originDestinationInfo").attr('indexNo');

	// 3. 결합운임 조회
	getEnhancedAirAvailabilityList(indexNo);
}

// 다음버튼('운임규정안내' 팝업조회)
function fnClickNext(){

	var originDestinationInfo = $('div.originDestinationInfo');

	// 여정존재여부 확인
	if ( originDestinationInfo.length ==0 ) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.058'));//운행가능한 여정이 없습니다.
		return false;
	} else {

		var chkFlight = true;
		$.each(originDestinationInfo , function(i){

			if ( $(this).attr('modifyTypeOption') =='MODIFY_FIRST' || $(this).attr('modifyTypeOption') =='' ){
				var flightLen = 0
				if ( isMobileOS ){
					flightLen = $(this).find('.flightListM').find('li').length;
				} else {
					flightLen = $(this).find('.flightList').find('tbody tr').length;
				}
				if ( flightLen == 0 ){
					chkFlight = false;
					return false;
				}
			}
		});
		if ( chkFlight==false ){
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.064'));	// 선택하신 여정에 항공편 비운항 일자가 포함되어 있습니다.<br/>일정을 재확인하시기 바랍니다.
			return false;
		}
	}

	//	여정선택 완료 체크 - start
	var isFareSelected = false;
	var isBundleExists = false;
	var isBunldeSelected = false;
	var prevSelected = true;
	var currSelected = true;

	$.each(originDestinationInfo , function(i){
		prevSelected = currSelected;

		if ( prevSelected ){
			// next
		} else {
			return false;
		}
		if (isMobileOS ){
			isFareSelected  = $(this).find('.segmentAvailability.choice').length ? true:false;
			isBundleExists  = $(this).find('.bundleList:visible').length ? true:false;
			isBunldeSelected= $(this).find('.bundleList:visible').find('li.choice').length ? true:false;
		} else {
			isFareSelected  = $(this).find('.segmentAvailability p.choice').length ? true:false;
			isBundleExists  = $(this).find('.bundleArea:visible').length ? true:false;
			isBunldeSelected= $(this).find('.bundleArea:visible').find('li.choice').length ? true:false;
		}

		if ( isFareSelected ) {
			if ( isBundleExists ) {
				if ( isBunldeSelected ) {
					currSelected = true;
				} else {
					currSelected = false;
				}
			} else {
				currSelected = true;
			}
		} else {
			currSelected = false;
		}
		// 예약변경시 변경제외 대상은 선택된것으로 간주함
		if( $(this).attr('modifyTypeOption') =='MODIFY_READONLY' ){
			currSelected = true;
		}
		// 예약변경시 변경 대상은 선택 안된것으로 간주함
		if( $(this).attr('modifyTypeOption') =='MODIFY_ETC' ){
			currSelected = false;
		}

	});

	if ( !prevSelected || !currSelected ){
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.063'));//모든 여정을 선택하여 주세요.
		return false;
	}
	//	여정선택 완료 체크 - end
	var depCity = $(".itinerary").not(".multiCourse").find(".sec.departure>p>a>strong").attr("city");
	var arrCity = $(".itinerary").not(".multiCourse").find(".sec.destination>p>a>strong").attr("city");

	// 편명에 의한 안내문
	var hasTargetFlight = false;
	var noteTargetFlightsCEBCRKGUM = ['22', '24', '772'];
	for(var i = 0; i < noteTargetFlightsCEBCRKGUM.length; i++) {
		hasTargetFlight = $('div.originDestinationInfo td.segmentAvailability[flightnumber="' + noteTargetFlightsCEBCRKGUM[i] + '"] p.choice').length > 0;
		if(hasTargetFlight) {
			break;
		}
	}
	if(hasTargetFlight) {
		showPopupLayer("/popup/noteDestination?destination=CEBCRKGUM");
		return;
	}

	fnSubmit();
}

// '운임비교' 팝업조회
function fnShowAirfareRule(obj, idx){
	var segmentInfos;
	if ( isMobileOS ){
		segmentInfos= $(obj).closest('ul.flightListM').find('ul.setList')
	} else {
		segmentInfos = $(obj).closest('div.originDestinationInfo').find('.segmentInfo')//.find('.segmentAvailability');
	}


	var fareSafe = true;
	var fareRuleList = [];
	segmentInfos.each(function(i){
		var segmentInfo = $(this);
		var availabilityList = segmentInfo.find('.segmentAvailability')
		//fareRuleList =[]
		if ( availabilityList.length>0 ){
			$.each(availabilityList,function(j) {
				//console.log($(this).attr('fareType') ,$(this).attr('fareBasis') ,$(this).attr('bookingClass'))
				if ( $(this).attr('fareType')!='' && $(this).attr('fareBasis')!='' &&
					$(this).attr('bookingClass')!='' && $(this).attr('seatAvailablity') > 0 &&
					$(this).attr('tripIndex') == idx){
					var fareRule = {
						fareTypeCdList : [$(this).attr('fareType')],
						fareBasis : $(this).attr('fareBasis'),
						fareTypeNm : $(this).attr('faretypenm'),
						rbd :       $(this).attr('bookingClass').indexOf(',')>0 ? $(this).attr('bookingClass').split(',')[0] : $(this).attr('bookingClass'),
						departureAirportCd : $(this).attr('origin'),
						arrivalAirportCd : $(this).attr('destination'),
						currencyCd : $(this).attr("currencycode"),
						departureDt : fnParseDateFormat( $(this).attr('flightDate') ,'yyyymmdd' ),
						amount : $(this).attr('apppliedfare.adultamount')

					}
					fareRuleList.push(fareRule);
				}
			})
			// if ( availabilityList.length == fareRuleList.length ) {
			// 	return false;
			// }
		}

	});
	if ( fareRuleList.length ){
		console.log(fareRuleList);
		fnJsonCheck(fareRuleList);

		var param = encodeURI(JSON.stringify(fareRuleList));
		showPopupLayer('/popup/airfareRule?fareRegulationData=' + param);
	}
	/*
	var fareInfo ,fareTypeInfos;
	if ( isMobileOS ){
	    //fareInfo = $(obj).closest('ul.flightListM').find('ul.setList').find('li:eq(0)');
		fareTypeInfos= $(obj).closest('ul.flightListM').find('ul.setList:eq(0)').find('.segmentAvailability');
	} else {
	    //fareInfo = $(obj).closest('div.originDestinationInfo').find('.segmentInfo:eq(0)').find('.segmentAvailability:eq(0)');
		fareTypeInfos = $(obj).closest('div.originDestinationInfo').find('.segmentInfo:eq(0)').find('.segmentAvailability');
	}

//	var fareTypeCdList = []
//	$.each(fareTypeInfo,function(i) {
//		if ( $(this).attr('tripIndex') != undefined ){
//			fareTypeCdList.push($(this).attr('fareType'))
//		}
//	})

	var fareRuleList = [];
	$.each(fareTypeInfos,function(i) {
		if ( $(this).attr('tripIndex') != undefined ){
			var fareRule = {
			    fareTypeCdList : [$(this).attr('fareType')],
			    fareBasis : $(this).attr('fareBasis'),
			    rbd : 		$(this).attr('bookingClass').indexOf(',')>0 ? $(this).attr('bookingClass').split(',')[0] : $(this).attr('bookingClass'),
			    departureAirportCd : $(this).attr('origin'),
			    arrivalAirportCd : $(this).attr('destination'),
			    currencyCd : $(this).attr("currencycode"),
			    departureDt : fnParseDateFormat( $(this).attr('flightDate') ,'yyyymmdd' )
			}
			fareRuleList.push(fareRule);
		}
	})

	if ( fareRuleList.length ){
		console.log(fareRuleList);
		fnJsonCheck(fareRuleList);

		var param = encodeURI(JSON.stringify(fareRuleList));
		showPopupLayer('/popup/airfareRule?fareRegulationData=' + param);
	}
	*/

}

// valid-1. 재발행시 동일 항공편 선택 불가
function fnValidateSegment(obj,indexNo){
	// 재발행시 동일 항공편 선택되게 처리함(향후, 소아발권 등 상세 요건받아서 처리하기로 함)
	return true;
//	var blnResult = true;
//
//	if ( null!=modifyJsonData ){
//		var segInfo = $(obj).closest('.segmentAvailability');
//		var oldSegInfo  = modifyJsonData.originDestinationInfo[indexNo];
//
//		var newInfo = {
//			origin : segInfo.attr("origin"),
//			destination	: segInfo.attr("destination"),
//			flightdate : new Date(Date.parse(segInfo.attr("flightdate"))),
//			carrierCode  : segInfo.attr('carriercode'),
//			flightNumber : segInfo.attr('flightnumber')
//		}
//		var oldInfo = {
//			origin : oldSegInfo.flightSegmentDetails[0].boardPoint,
//			destination	: oldSegInfo.flightSegmentDetails[oldSegInfo.flightSegmentDetails.length-1].offPoint,
//			flightdate : new Date(Date.UTC(oldSegInfo.flightSegmentDetails[0].flightDate.date.year, oldSegInfo.flightSegmentDetails[0].flightDate.date.month-1, oldSegInfo.flightSegmentDetails[0].flightDate.date.day)),
//			carrierCode  : oldSegInfo.flightSegmentDetails[0].carrierCode,
//			flightNumber : oldSegInfo.flightSegmentDetails[0].fltNumber
//		}
//
//		if ( JSON.stringify(newInfo) == JSON.stringify(oldInfo) ){
//			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.043'),"","");
//			blnResult=false;
//		} else {
//			blnResult=true;
//		}
//	}
//
//	return blnResult;

}
// valid-2. 출-도착지 시간제어
function fnValidateFlight(obj,indexNo){

	var blnResult = true;

	if ( indexNo >0 ){
		var originDestinationInfo = $('div.originDestinationInfo');

		// 가는편 도착시간
		var prevArrivalDate = '';
		if ( $(originDestinationInfo[indexNo-1]).attr('modifyTypeOption')=='MODIFY_READONLY' ){
			var prevInfo = modifyJsonData.originDestinationInfo[indexNo-1];
			var scheduledArrivalTimeLTC = prevInfo.flightSegmentDetails[prevInfo.flightSegmentDetails.length-1].scheduledArrivalTimeLTC;
			var ndt = new Date( Date.UTC(scheduledArrivalTimeLTC.year ,scheduledArrivalTimeLTC.month-1 ,scheduledArrivalTimeLTC.day ,scheduledArrivalTimeLTC.hour ,scheduledArrivalTimeLTC.minute) );
			prevArrivalDate = ndt.toISOString();
		} else {
			var prevInfo = getSelectedInfos($(originDestinationInfo[indexNo-1]));
			var prevSegmentInfos = prevInfo.segmentInfos;
			prevArrivalDate = $(prevSegmentInfos[prevSegmentInfos.length-1]).attr('arrivalinfo.datetime');
		}
		// 오는편 출발시간
		var currDepartureDate = '';
		if ( isMobileOS ){
			var isThrough = $(obj).parents('li').find('div.segmentInfo').attr('isThrough');
			var currSegmentInfos = ( isThrough=='true' ? $(obj).parents('li').find('div.segmentInfo') : $(obj).parents('li').find('div.segmentInfo') );
			currDepartureDate = $(currSegmentInfos[0]).attr('departureInfo.dateTime');
		} else {
			var isThrough = $(obj).parents('tr.segmentInfo').attr('isThrough');
			var currSegmentInfos = ( isThrough =='true' ? $(obj).parents('tr.segmentInfo').nextAll('tr.segmentInfo:eq(0)').andSelf() : $(obj).parents('tr.segmentInfo') );
			currDepartureDate = $(currSegmentInfos[0]).attr('departureInfo.dateTime');
		}

		// 시간차이
		var diff = (new Date(currDepartureDate).getTime() - new Date(prevArrivalDate).getTime())/1000/60;
		// 최소 연결 시간
		var minimum =( DomIntType == 'DOM' ? 60 : 90 );
		console.log(diff+',' + minimum);
		if ( minimum >= diff ){
			blnResult = false;
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.047',minimum),"","");
		}

	}

	return blnResult;
}

// 사용자 화면선택 정보 추출
function getSelectedInfos(obj) {

	var $this = obj;
	var isThrough = null;
	var segmentInfos = null;
	var fareInfo = null;
	var bundleInfo = null;

	var selectedInfo = {
		isThrough : null,
		segmentInfos : null,
		fareInfo : null,
		bundleInfo : null
	}

	if (isMobileOS ){
		isThrough = $this.find('ul.setList').find('li.choice').parents('li').find('div.segmentInfo').attr('isThrough');
		if ( isThrough=='true' ){
			segmentInfos = $this.find('ul.setList').find('li.choice').parents('li').find('div.segmentInfo');
		} else {
			segmentInfos = $this.find('ul.setList').find('li.choice').parents('li').find('div.segmentInfo');
		}
		fareInfo = $this.find('ul.setList').find('li.choice');
		bundleInfo= $this.find('ul.bundleList:visible').find('li.choice');
	} else {

		isThrough = $this.find('table.flightList').find('p.choice').parents('tr.segmentInfo').attr('isThrough');
		if ( isThrough=='true' ){
			segmentInfos = $this.find('table.flightList').find('p.choice').parents('tr.segmentInfo').nextAll('tr.segmentInfo:eq(0)').andSelf();
		} else {
			segmentInfos = $this.find('table.flightList').find('p.choice').parents('tr.segmentInfo');
		}
		fareInfo = $this.find('table.flightList').find('p.choice').parent();
		bundleInfo= $this.find('table.flightList').find('tr.bundleArea:visible').find('ul.bundleList').find('li.choice');
	}
	selectedInfo.isThrough = isThrough;
	selectedInfo.segmentInfos = segmentInfos;
	selectedInfo.fareInfo = fareInfo;
	selectedInfo.bundleInfo = bundleInfo;

	return selectedInfo;
}

// 다음페이지 진행
function fnSubmit(){
	if ( $('#registerform').find(':input[name=pnrNumber]').val() == '') {

		var langCd = $("#globalLangCd").val();
		var skinId = ('KOR' == langCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";

		if ( netfunnelVisible ) {
			NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
				getConfirmPrice('NEXT')
			});
		} else {
			getConfirmPrice('NEXT')
		}

		// ConfirmPrice 저장 , 다음진행
		//result = getConfirmPrice('NEXT');
	} else {
		// ModifyBooking 저장 , 다음진행
		getModifyBooking('NEXT')
	}
}

//결제통화변경
function fnChangeCurrency(){

	var currencyOpt = $('#currencyOpt option:selected').val()

	if (currencyOpt =='') {
		//alertLayer('currency');
	} else {
		if ( currencyOpt =='KRW' ){
			//Cookies.set('foCountry', 'KOR', {domain : '.jinair.com', path : '/', expires: 365});
			//Cookies.set('foLang', 'ko', {domain : '.jinair.com', path : '/', expires: 365});
			//Cookies.set('foLangCd', 'KOR', {domain : '.jinair.com', path : '/', expires: 365});
			//Cookies.set('foLangCountry', 'ko_KR', {domain : '.jinair.com', path : '/', expires: 365});
			Cookies.set('foPop', 'KR', {path : '/', expires: 365});
			//fnMoveBookingHome();

			_satellite.track("currency_change", {
				trip_currency : 'KRW' // 예시) 'USD'(기존KRW 에서 USD로 변경 할 경우)
			})
		} else {
			//Cookies.set('foCountry', 'USA', {domain : '.jinair.com', path : '/', expires: 365});
			//Cookies.set('foLang', 'en', {domain : '.jinair.com', path : '/', expires: 365});
			//Cookies.set('foLangCd', 'ENG', {domain : '.jinair.com', path : '/', expires: 365});
			//Cookies.set('foLangCountry', 'en_US', {domain : '.jinair.com', path : '/', expires: 365});
			Cookies.set('foPop', 'US', {path : '/', expires: 365});
			//fnMoveBookingHome();

			_satellite.track("currency_change", {
				trip_currency : 'USD' // 예시) 'USD'(기존KRW 에서 USD로 변경 할 경우)
			})
		}
		getAvailabilityList();
	}
}



function fnParseDateFormat(v ,f){
	var dt = new Date();
	var r ='';
	try{
		if ( isNaN(Date.parse(v)) ){
			if ( isNaN(v) ){
				dt.setTime( parseInt(v) );
			} else {
				dt ='';
			}
		} else {
			dt.setTime( Date.parse(v) );
		}
	} catch(e){
		dt='';
	}
	if ( dt !=null && f !=undefined) {
		switch( f.toLowerCase() ){
			case 'yyyymmdd' : r=dt.toISOString().slice(0,10).replace(/-/g,''); break;
			case 'yyyy-mm-dd' : r=dt.toISOString().slice(0,10); break;
			default: r =dt.toISOString(); break;
		}
	}


	return r;

}

// jsonData 빈값 체크
function fnJsonCheck(obj){
	if ( !CONST_debugEnable ) return ;

	if ( obj != null && obj != undefined && obj !='' ){
		$.each(obj ,function(k,v){
			if ( v instanceof Object ){
				fnJsonCheck(v);
			} else {
				if ( v != null && v != undefined && v !='') {
					if ( v instanceof Object ){
						fnJsonCheck(v);
					} else {
						//console.log(k + ' : ' ,v);
					}
				} else {
					console.log('\''+k +'\' is null!');
				}
			}
		});
	}
}

//지니플러스 Layer
function fnShowJiniplus(obj){
	var popcontPC = $(obj).parent().find('.popArea');
	var popcontMO = $(obj).parent().next().find('.popArea');
	var popcont = popcontPC.add(popcontMO);

	if( popcont.is(':visible') ){
		popcont.hide();
		$(obj).removeClass('on')
	} else {
		popcont.show();
		$(obj).addClass('on');
		// 닫기 추가
		$(popcont).find('.close').on("click", function(e) {
			popcont.hide();
		});
	}
	/*
	//지니플러스 Layer
	$('.jiniPlus > a').click(function(){
		alert('tt')
		var popcont = $('.popArea');
		if( popcont.is(':visible') ){
			popcont.hide();
			$(this).removeClass('on')
		} else {
			popcont.show();
			$(this).addClass('on')
		}
	});
	$('.popLayerWrap .close a').click(function(){
		$('.popArea').hide();
	});
	*/
}



function fnMoveBookingHome(){
	document.location.replace('/jinair/jinairfront/www.jinair.com/booking/index.jsp');
}

function fnMoveReservationList(){
	document.location.replace('/mypage/getReservationList');
}

//항공편안내 레이어팝업
function showFlight(obj){
	var $target = $(obj).parents(".flightDetail").find(".popFlight");
	$(".flightDetail").find(".popFlight").not($target).hide();
	$target.toggle();
}

function hideFlight(){
	$(".popFlight").hide();
}

//보너스항공권 (PC)
function choiceBonus(obj){
	$(obj).parents(".flightList").find(".charge").removeClass("choice");
	$(obj).parents(".charge").addClass("choice");
}

//보너스항공권 (mobile)
function choiceBonusM(obj){
	$(obj).parents(".flightListM").find(".setList li").removeClass("choice");
	$(obj).parent().parent("li").addClass("choice");
}

//경유일때 모바일 테이블
function showViaDetail(obj){
	/*
	$(obj).parents(".head").toggleClass("on");
	$(obj).toggleClass("on");
	$(obj).parents(".viaList").find(".viaDetail").slideToggle(150).siblings(".viaSrmy").slideToggle(150);
	*/
	$this = $(obj);
	$this.closest(".head").toggleClass("on");
	$this.toggleClass("on");
	$this.closest(".head").next('.viaSrmy').slideToggle(150).andSelf().next('.viaDetail').slideToggle(150);
}


// 프로모션코드 클릭
function fnClickPromotionCode(isLogin){
	if ( isLogin ){
		showPopupLayer('/jinair/jinairfront/www.jinair.com/popup/promotionCode')
	} else {
		confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.078'),'fnLoginLayer','hideConfirmLayer');
		//confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.078'),'fnLoginLayer','hideConfirmLayer');
		//showPopupLayer('/login/loginLayer?mType=availpromotion');
	}
}
// 프로모션 - 로그인레이어
function fnLoginLayer(){
	hideConfirmLayer();
	showPopupLayer('/login/loginLayer?mType=availpromotion');
}

// 프로모션 - 로그인 처리후 프로모션팝업
function fnAfterPromotionLogin(){
	// 로그인 -> 로그아웃
	var html = '<a href="javascript://" id="btnLogout">'+$.i18n.prop('cmm.msg.btn.logout')+'</a>';
	$('ul.util').find('li').each(function(){
		if(String($(this).find('a').attr('href')).indexOf('login') > -1){
			$(this).find('a').remove();
			$(this).html(html);
		}
	});
	// btn 이벤트 변경
	$("#btnAvailPromotion").attr('onclick', '').unbind('click');
	$('#btnAvailPromotion').on('click',function(){
		fnClickPromotionCode(true);
	});

	//document.location.href = '/login/login?returnUrl=/';
	hidePopupLayer();
	showPopupLayer('/popup/promotionCode');
}

//비회원 로그인시 프로모션 운임 alert 표출
function chkPromoFare(obj){
	var fareList = ["SLIMJEANS","JINMARKET","ONPROMO","THISISIT","IJINMKT","ISLIMJ","IPROMO","ITHIS"];
	if(loginInfoType != "MEMBER"){
		var faretype = $(obj).closest('.segmentAvailability').attr('faretype');
		$(fareList).each(function(){ // 회원 한정 운임 체크
			if(faretype.indexOf(this) > -1){
				$("html, body").queue(function(){
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.076'));
					$(this).dequeue();
				});
				return true;
			}
		});
	}
	return false;
}

// 지니플러스 시트 유무 확인
function checkJiniPlusSeat(data){
	var result = false;
	if(data.result.originDestinationInfo[0].tripInfo != null && data.result.originDestinationInfo[0].tripInfo.length >0){
		segmentAvailabilityList = data.result.originDestinationInfo[0].tripInfo[0].segmentInfo[0].segmentAvailability
		$(segmentAvailabilityList).each(function(index,segmentAvailability){
			if(segmentAvailability.fareType.indexOf("JINIPLUS") > -1){
				result = true;
				return true;
			}
		})
	}
	return result;
}

function checkZeroSeatCnt(data) {
	// 예약마감상태의 편명에 대한 운임규정 버튼을 안보임처리
	var tempInfo = data;
	for(var a=0; a < tempInfo.length; a++) {
		var tempTripInfo = tempInfo[a].tripInfo;
		if(tempTripInfo != null) {
			for(var b=0; b < tempTripInfo.length; b++) {
				var tempSegInfo = tempTripInfo[b].segmentInfo;
				var tempIdx = tempTripInfo[b].tripIndex;
				var tempSeatCnt = 0;
				for(var c=0; c < tempSegInfo.length; c++) {
					var tempSegmentAvail = tempSegInfo[c].segmentAvailability;
					for(var d=0; d < tempSegmentAvail.length; d++) {
						tempSeatCnt += tempSegmentAvail[d].seatAvailablity;
					}
				}
				if(tempSeatCnt == 0)
					$("#trip" + tempIdx).hide();
			}
		}
	}
}

function promoImgChange() {
	//프로모션 이미지 url변경
	var promoImgarray = $(".promoImg");
	for(var i=1; i < promoImgarray.length + 1; i++) {
		var imgSrc = promoImgarray[i-1].src;
		var imgIdx = "0" + i;
		imgSrc = imgSrc.replace("01", imgIdx);
		promoImgarray[i-1].src = imgSrc;
	}
}

// 캐싱Avail
function getCachedAvailListJSON(jsonData) {
	return new Promise(function(resolve,reject){
		var cachedData;
		// bestFare용 캐싱
		jsonData.cached = true;
		$.ajax({
			type	: "POST",
			url		: "/jinair/jinairfront/www.jinair.com/booking/getAirAvailabilityJson.json",
			data	: JSON.stringify(jsonData),
			dataType: "json",
			contentType : "application/json; charset=UTF-8",
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			success	: function(data) {
				if (isFlightNotFoundError(data.errorCode)){
					cachedData = data;
				}
			},
			error : function(result) {
				reject(result);
				hideLoading();
			},
			complete:function(){
				resolve(cachedData);
			}
		});
	})
}
//AVAIL 조회 ERROR 체크
function isFlightNotFoundError(errorCode)
{
	if ( errorCode == null || errorCode == "AVAILABILITY_069" || errorCode == "WS_321" )
		return true;
	else
		return false;
}