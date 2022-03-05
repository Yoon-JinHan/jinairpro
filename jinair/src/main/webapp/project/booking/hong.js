/**
 * 
 */
var selectPaxADT = 1;
var selectPaxCHD = 0;
var selectPaxINF = 0;
var maxPaxCnt = 9;
var cityAirport;
var play = false;
var contHeight = 0;
var itineraryEdit = true;
var initial = false;
var kpodepCode;

var stage = false;
var netfunnelVisible = false;

//페이지 빈공간 클릭시 레이어 닫기
$(document).on("click",function(e) {
	if ($(".itinerary .sec .content").is(":visible")) {
		/* 170810 start */
		if (!($(e.target).parents(".itinerary .sec").length)
			&& !($(e.target).parents(".close").length)
			&& !($(e.target).is(".bgLayer"))
			&& !($(e.target).parents(".alertLayer, .confirmLayer").length)
			&& !($(e.target).is(".alertLayer, .confirmLayer, .bgLayer3"))) {
			hideBooking();
		}
		/* 170810 end */
	}
});

$(document).ready(function() {
	//왕복.편도.다구간 변경 이벤트
	/*$("input[type=radio][name=tripType]").change(function() {

		if ($(this).val() == "MC") { //다구간
			$(".multiCourse").show().siblings(".itinerary").hide();
		} else { //왕복, 편도
			$(".itinerary:not(.multiCourse)").show().siblings(".itinerary").hide();

			if ($(this).val() == "OW") {
				$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").hide();
				$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy strong").text("");
				$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").removeClass("setting");
				$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").addClass("choice");
			} else {
				$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").show();
			}
		}
	});*/

	//나이계산기
	$('.cal a').on('click', function() {
		var url = '/popup/ageCalculator';
		var startDate = $('.date div:eq(0)').find('.srmy strong').text();
		if(startDate.length > 0) {
			startDate = startDate.replace(/-/g, '').substr(0, 8);
			url = url + '?startDate=' + startDate;
		}

		showPopupLayer(url);
		return false;
	});

	$('a[name=adultPaxCntDown], a[name=adultPaxCntUp], a[name=childPaxCntDown], a[name=childPaxCntUp], a[name=infantPaxCntDown], a[name=infantPaxCntUp]').click(function() {
		return false;
	});

	getCityAirport();

	// PC 여정유형 셀렉트
	var $layerButtonItem = $( '.layer_menu li' );
	$layerButtonItem.find( 'a' ).on('click', function(e) {
		var $target = $(this);
		var value = $target.data('value');

		$( '.sel_opt .init' ).html($target.text()).attr( 'title', $target.text() + ' 선택됨' ).removeClass( 'on' );
		$( '.layer_menu' ).slideUp(100);

		var $selectItem = $('#routeType');				// 모바일 셀렉트 (PC와 값 공유)
		$selectItem.val(value);

		if(value === 'RT') { //왕복
			$( '.itinerary_wrap .itinerary:not(.multiCourse)' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$( '.itinerary_wrap .itinerary:not(.multiCourse) .date div:last-child' ).show();
			$target.parents().find('.itinerary_wrap .btnArea').removeClass( 'btnArea2' );
		} else if(value === 'OW') { //편도
			$( '.itinerary_wrap .itinerary:not(.multiCourse)' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$( '.itinerary_wrap .itinerary:not(.multiCourse) .date div:last-child' ).hide();
			$target.parents().find('.itinerary_wrap .btnArea').addClass( 'btnArea2' );
		} else if(value === 'MC') { //다구간
			$( '.multiCourse' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$target.parents().find('.itinerary_wrap .btnArea').addClass( 'btnArea2' );
		}
		e.preventDefault();
	});

	$( '.sel_opt .init' ).on('click', function() {
		$(this).toggleClass( 'on' );
		$( '.layer_menu' ).slideToggle(100);
	});

	$(document).on( 'click', function(e) {
		if( $( '.sel_opt .layer_menu' ).is( ':visible' ) ) {
			if( !($(e.target).parents( '.sel_opt' ).length) ) {
				$( '.layer_menu' ).slideToggle(100);
				$( '.sel_opt .init' ).removeClass( 'on' );
			}
		}
	});

	//구간 선택(모바일) JS
	// 모바일 셀렉트 (PC와 값 공유)
	var $selectItem = $( '#routeType' );
	$selectItem.on( 'change', function() {
		var target = $(this).val();
		var targetSelectNum = $(this).prop( 'selectedIndex' );

		$( '.sel_opt .init' ).html( $( '#routeType option:selected' ).text() );

		if(target === 'RT') { //왕복
			$( '.itinerary_wrap .itinerary:not(.multiCourse)' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$( '.itinerary_wrap .itinerary:not(.multiCourse) .date div:last-child' ).show();
			$(this).parents().find('.itinerary_wrap .btnArea').removeClass( 'btnArea2' );
		} else if(target === 'OW') { //편도
			$( '.itinerary_wrap .itinerary:not(.multiCourse)' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$( '.itinerary_wrap .itinerary:not(.multiCourse) .date div:last-child' ).hide();
			$(this).parents().find('.itinerary_wrap .btnArea').addClass( 'btnArea2' );
		} else if(target === 'MC') { //다구간
			$( '.multiCourse' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$(this).parents().find('.itinerary_wrap .btnArea').addClass( 'btnArea2' );
		}
	});
});

function getCityAirport(){
	var data = {itineraryEdit : itineraryEdit};

	$.ajax({
		type : "POST",
		url : "getAirportListJson",
		data : data,
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
			
		},
		dataType : "json",
		success : function(data) {
			cityAirport = data;
			fnSetDepartureAirportList();
			// ajax 도시코드 바인딩 후에 기존 정보 바인딩
			if (data.itineraryInfo != null && !initial) {
				setModifyCity(data.itineraryInfo);
			}
			else {
				setItineraryInfo();
			}

			//로딩된 탑승객 수에 따른 버튼 디자인  셋팅
			setUpDownBtn();

			//보너스 쿠폰 정보 셋팅
			if ($("#registerform #cpnNo").val() != "") {
				getBonusInfo();
			}

			// itineraryEdit값이 false일 경우 여정수정을 하지 못하도록 수정함.
			if (!data.itineraryEdit && $("#quickModify").length > 0) {
				$("#quickModify").children("p.btn").find("a").attr("onclick","");
				$("#quickModify").children("p.btn").find("a").css('cursor','default');
			}
		},
		error : function(data) {
			hideLoading();
			try {
				alert("1");
				var errorMsg = JSON.parse(data.responseText);
				alert("2");
				alertLayer(errorMsg.errorMessage);
			}
			catch(e) {
				alertLayer("문제인 지점2");
			}
		}
	});
}

// 소아 단독 발권 동의
function confirmLayerYes() {
	hideConfirmLayer();

	// 여정1 출/도착지 국가
	var arrCountry = "";
	var depCountry = "";

//	var multiCheck = $('input[name=tripType]:checked').val() == "MC" || $("#registerform #pnrNumber").val() != "";
	var multiCheck = $('#routeType').val() === 'MC' || $("#registerform #pnrNumber").val() != "";
	if(multiCheck) {
		arrCountry = $(".itinerary.multiCourse").find(".sec.destination>p>a>strong").eq(0).attr("country");
		depCountry = $(".itinerary.multiCourse").find(".sec.departure>p>a>strong").eq(0).attr("country");
	} else {
		arrCountry = $(".destination").find(".srmy strong").attr("country");
		depCountry = $(".departure").find(".srmy strong").attr("country");
	}

	var tripType = $('input[name=tripType]:checked').val();
	var depCity = $(".itinerary").not(".multiCourse").find(".sec.departure>p>a>strong").attr("city");
	var arrCity = $(".itinerary").not(".multiCourse").find(".sec.destination>p>a>strong").attr("city");

	var startDate = $(".date div:eq(0)").find(".srmy strong").text();
	if(!!startDate) {
		startDate = startDate.replace(/-/g, '');
		startDate = startDate.substr(0, 8);
	}

	var lastDate = $(".date div:eq(1)").find(".srmy strong").text();
	if(!!lastDate) {
		lastDate = lastDate.replace(/-/g, '');
		lastDate = lastDate.substr(0, 8);
	}

	// 출/도착지 노선에 따른 안내문
	var route = '';
	var itin = ';' + depCity + arrCity + ';';
	if(tripType === 'RT') {
		itin += arrCity + depCity + ';';
	}
	if(itin.indexOf(';ICNXIY;') !== -1 || itin.indexOf(';XIYICN;') !== -1) {
		route = 'ICNGMPXIY';
	} else if(itin.indexOf(';GMPXIY;') !== -1 || itin.indexOf(';XIYGMP;') !== -1) {
		route = 'ICNGMPXIY';
	} else if(itin.indexOf(';ICNGUM;') !== -1 || itin.indexOf(';GUMICN;') !== -1) {
		route = 'GUM';
	} else if(itin.indexOf(';ICNBKK;') !== -1 || itin.indexOf(';BKKICN;') !== -1) {
		route = 'BKK';
	} else if(itin.indexOf(';ICNCNX;') !== -1 || itin.indexOf(';CNXICN;') !== -1) {
		route = 'CNX';
	}
	if(!!route) {
		showPopupLayer("/popup/noteDestination?destination=" + route);
		return false;
	}

	// 출발 국가 또는 도착 국가에 따른 안내문
	var country ='';
	var langCd = $('#globalLangCd').val();
	switch(arrCountry) {
	case 'KOR':
		switch (depCountry) {
		case 'JPN': country = 'JP'; break;
		case 'PHL': country = 'PH'; break;
		case 'VNM': country = 'VN'; break;
		case 'USA': country = 'US'; break;
		case 'CHN':
			if(langCd == 'KOR' || langCd == 'CHN') {
				if((depCity == 'CJU' && arrCity == 'XIY') || (depCity == 'XIY' && arrCity == 'CJU') || (depCity == 'CJU' && arrCity == 'PVG')) {
					country = 'CN';
					break;
				}
			}
		default: country=''; break;
		}
		break;
	case 'JPN': country = 'JP'; break;
	case 'PHL': country = 'PH'; break;
	case 'VNM': country = 'VN'; break;
	case 'USA': country = 'US'; break;
	case 'CHN':
		if(langCd == 'KOR' || langCd == 'CHN') {
			if((depCity == 'CJU' && arrCity == 'XIY') || (depCity == 'XIY' && arrCity == 'CJU') || (depCity == 'CJU' && arrCity == 'PVG')) {
				country = 'CN';
				break;
			}
		}
		break;
	default: country=''; break;
	}
	if(!!country) {
		showPopupLayer("/popup/noteDestination?destination=" + country);
		return false;
	}

	// 넷퍼넬 적용 상태, 최초 예약일 때
	var initialBooking = $('#registerform #pnrNumber').val() == "";
	if(netfunnelVisible && initialBooking) {
		var skinId = ('KOR' == globalLangCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";
		NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
			$('#registerform').submit();
		});
		return false;
	}

	setTimeout(function() {
		$('#registerform').submit();
	}, 100);
}

//소아 단독 발권 동의 안함
function confirmLayerNo(){
	hideConfirmLayer();
}

// 탑승객수 레이어의 확인버튼
function setMemberNum(self) {
	var btnParent = $(self).parent().siblings("ul");

	// 선택된 탑승객 수 표시
	var iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
		iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
		iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
		sPaxCount = "";

	// 성인 or 소아 최소 1명
	if (!(iAdultCount + iChildCount)) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.067'));
		return false;
	}

	sPaxCount = setPaxCount(iAdultCount, iChildCount, iInfantCount);

	// 탑승객 화면 닫기
	hideBooking(self);

	//$(self).parents(".sec").find(".srmy strong").text(sPaxCount);
	$(".memberNum .srmy strong").text(sPaxCount);

	//보너스 쿠폰이 적용되지 않았을 경우나 ALL인 경우만 지역 팝업을 띄움
	if(!bonusCoupon || bonusCoupon.apoCd.split("|")[0].split(",")[0] == "ALL") {
		var multicity = $('#routeType').val() === 'MC';
		if(multicity) { // 다구간
			showBooking($('.itinerary_wrap').find(".multiCourse").find(".course > li:first-child .departure p.srmy"));
		} else { // 왕복, 편도
			showBooking($('.itinerary_wrap').find(".itinerary").find(".departure>p"));
		}
	}
}


// 탑승객 수 표시
function setPaxCount(adultCount, childCount, infantCount) {
	var paxCountString = "";

	if (adultCount > 0) {
		paxCountString += $.i18n.prop('hom.ibe.rsv.lbl.012') + adultCount;
		paxCountString += (childCount > 0) ? ", " : ((infantCount > 0) ? ", " : "");
	}
	if (childCount > 0) {
		paxCountString += $.i18n.prop('hom.ibe.rsv.lbl.013') + childCount;
		paxCountString += (infantCount > 0) ? ", " : "";
	}
	if (infantCount > 0) {
		paxCountString += $.i18n.prop('hom.ibe.rsv.lbl.014') + infantCount;
	}

	selectPaxADT = adultCount;
	selectPaxCHD = childCount;
	selectPaxINF = infantCount;

	return paxCountString;
}

// 출발지, 도착지 레이어의 도시 선택
function setCity(self) {

	//다구간일 경우 다구간 function으로 이동
	if ($('input[name=tripType][type=radio]').size() > 0) {
		if ($('input[name=tripType]:checked').val() == "MC" || $("#registerform #pnrNumber").val() != "") {
			setCityForMulti(self);
			return false;
		}
	}
	else {
		if ($('#tripType').val() == "MC"  || $("#registerform #pnrNumber").val() != "") {
			setCityForMulti(self);
			return false;
		}
	}

	if ($(self).parent().hasClass("disable")) return false;

	var cityText = $(self).text();
	hideBooking(self);

	var arrCityCheck = $(self).parents(".sec").hasClass("destination");
	if (arrCityCheck) {
		var depCityCheck = $(self).parents(".sec").parent().find(".departure>p>a>strong").attr("city");
		if (!depCityCheck) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.019'))); return false;
		}
	}

	$(self).parents(".sec").find(".srmy").addClass("setting");
	$(self).parents(".sec").find(".srmy strong").text(cityText);
	$(self).parents(".sec").find(".srmy strong").attr("city", $(self).next().val());
	$(self).parents(".sec").find(".srmy strong").attr("country", $(self).next().attr("country"));

	var depCity = $(self).parents(".departure").find("p>a>strong").attr("city");
	var depCode = "";
	if ($(self).parents(".sec").next().attr("name") != "calendar") {
		if ($(self).parents(".departure").length > 0) {
			//보너스 쿠폰이 적용되지 않았을 경우나 ALL인 경우만 지역 팝업을 띄움
			if (!bonusCoupon || (bonusCoupon.apoCd.split("|")[0].split(",")[0] == "ALL" && bonusCoupon.apoCd.split("|")[0].split(",")[1] == "ALL")) {
				showBooking($(self).parents(".departure").parent().find(".destination>p"));
			}

			$.each(cityAirport.departureAirportList, function(i, v) {
				$.each(v.airportList, function(j, o) {
					if (o.iataCityAirportCode == depCity) {
						depCode = o.departureSeq;
						return;
					}
				});
			});
			var depCodeList = new Array();
			$.each(cityAirport.arrivalAirportList, function(i, v) {
				$.each(v.airportList, function(j, o) {
					$.each(o.parentDepSeqList, function(q, p) {
						if (p == depCode) {
							depCodeList.push(o.iataCityAirportCode);
						}

					});
				});
			});

			$(self).parents(".sec").parent().find("[name=arrCity]").find("li>input").each(function(i, v) {

				$(v).parent().removeClass('disable');

				if ($.inArray(v.value, depCodeList) == -1) {
					$(v).parent().addClass('disable');
				}
				if( v.value =='DAC')
					$(v).parent().addClass('disable');
				// 국제선 관광비행
				if(depCity == "ICN" && v.value == "ICN" && getCookie('foLangCd') != "KOR"){
					$(v).parent().addClass('disable');
				}
				// 국제선 관광비행
				if(depCity == "GMP" && v.value == "GMP" && getCookie('foLangCd') != "KOR"){
					$(v).parent().addClass('disable');
				}
				// 국제선 관광비행
				if(depCity == "PUS" && v.value == "PUS" && getCookie('foLangCd') != "KOR"){
					$(v).parent().addClass('disable');
				}
				// 국제선 관광비행
				if(depCity == "ICN" && v.value == "CJU" && isIntTourICNCJU() && getCookie('foLangCd') != "KOR"){
					$(v).parent().addClass('disable');
				}
				if (bonusCoupon && bonusCoupon.domIntCtgrCd == "D" && $(v).attr("country")!="KOR") {
					$(v).parent().addClass('disable');
				}
			});
		}


	} else if ($(self).parents(".destination").length > 0) {
		showCalendar(self, $.i18n.prop('hom.ibe.rsv.lbl.021'));
	}
}

//다구간용 출도착지 선택
function setCityForMulti(self) {
	if ($(self).parent().hasClass("disable")) return false;

	var cityText = $(self).text();
	hideBooking(self);

	//이전 구간의 값이 빈값이 있는지 검토
	if ($(self).parents(".sec").parent().index() > 0) {
		var index = $(self).parents(".sec").parent().index() - 1;

		var depCityCode = $(self).parents("ul.course").children().eq(index).find(".departure>p>a>strong").attr("city");
		var arrCityCode = $(self).parents("ul.course").children().eq(index).find(".destination>p>a>strong").attr("city");

		if (!depCityCode || !arrCityCode) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.059')); return false;
		}
	}

	//도착지 클릭 시 출발지가 선택되었는지 확인
	var arrCityCheck = $(self).parents(".sec").hasClass("destination");
	if (arrCityCheck) {
		var depCityCheck = $(self).parents(".sec").parent().find(".departure>p>a>strong").attr("city");
		if (!depCityCheck) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.019'))); return false;
		}
		arrCountryCode = $(self).siblings("input[name=ApoCode]").attr("country");
	}
	else {
		depCountryCode = $(self).siblings("input[name=ApoCode]").attr("country");
	}


	$(self).parents(".sec").find(".srmy").addClass("setting");
	$(self).parents(".sec").find(".srmy strong").text(cityText);
	$(self).parents(".sec").find(".srmy strong").attr("city", $(self).next().val());
	$(self).parents(".sec").find(".srmy strong").attr("country", $(self).next().attr("country"));

	var depCity = $(self).parents(".departure").find("p>a>strong").attr("city");
	var depCode = "";
	if ($(self).parents(".sec").next().attr("name") != "calendar") {
		if ($(self).parents(".departure").length > 0) {
			//보너스 쿠폰이 적용되지 않았을 경우나 ALL인 경우만 지역 팝업을 띄움
			if (!bonusCoupon || bonusCoupon.apoCd.split("|")[$(self).parents(".sec").parent().index()].split(",")[1] == "ALL") {
				showBooking($(self).parents(".departure").parent().find(".destination>p"));
			}
			//showBooking($(self).parents(".departure").parent().find(".destination>p"));

			$.each(cityAirport.departureAirportList, function(i, v) {
				$.each(v.airportList, function(j, o) {
					if (o.iataCityAirportCode == depCity) {
						depCode = o.departureSeq;
						return;
					}
				});
			});

			var depCodeList = new Array();
			$.each(cityAirport.arrivalAirportList, function(i, v) {
				$.each(v.airportList, function(j, o) {
					$.each(o.parentDepSeqList, function(q, p) {
						if (p == depCode) {
							depCodeList.push(o.iataCityAirportCode);
						}

					});
				});
			});

			$(self).parents(".sec").parent().find("[name=arrCity]").find("li>input").each(function(i, v) {
				$(v).parent().removeClass('disable');
				if ($.inArray(v.value, depCodeList) == -1) {
					$(v).parent().addClass('disable');
				}

				if (bonusCoupon && bonusCoupon.domIntCtgrCd == "D" && $(v).attr("country")!="KOR") {
					$(v).parent().addClass('disable');
				}
			});

			//여정 변경이면서 첫구간일 경우 기존 국가만 선택 가능하도록 변경
			if ($("#pnrNumber").val() != "" && $(self).parents(".sec").parent().index() == 0) {
				var arriveCode = $(self).parents(".course").children().eq($(self).parents(".sec").parent().index()).find(".sec.destination>p>a>strong").attr("city");
				var arrCountryCode = $(self).parents(".course").children().eq($(self).parents(".sec").parent().index()).find(".sec.destination>p>a>strong").attr("country");
				$(self).parents(".sec").parents(".course").children().eq($(self).parents(".sec").parent().index()).find("[name=arrCity]").find("li>input").each(function(i, v) {
					if ($(v).attr("country") != arrCountryCode) {
						//예외
						if ((arriveCode == "BKK" && $(v).val() == "VTE")
							|| (arriveCode == "VTE" && $(v).val() == "BKK")
							|| (arriveCode == "HKG" && $(v).val() == "MFM")
							|| (arriveCode == "MFM" && $(v).val() == "HKG")
							|| (arriveCode == "GUM" && $(v).val() == "SPN")
							|| (arriveCode == "SPN" && $(v).val() == "GUM")) {
							return true;
						}
						$(v).parent().addClass('disable');
					}

					if (bonusCoupon && bonusCoupon.domIntCtgrCd == "D" && $(v).attr("country")!="KOR") {
						$(v).parent().addClass('disable');
					}
				});
			}else if ($(self).parents(".course").children()[$(self).parents(".sec").parent().index()-1]) {
				var beforeDepCode = $(self).parents(".course").children().eq($(self).parents(".sec").parent().index()-1).find(".sec.departure>p>a>strong").attr("city");
				depCountryCode = $(self).parents(".cityList").find("[value="+beforeDepCode+"]").attr("country");
				$(self).parents(".sec").parents(".course").children().eq($(self).parents(".sec").parent().index()).find("[name=arrCity]").find("li>input").each(function(i, v) {
					if ($(v).attr("country") != depCountryCode) {
						//예외
						if (stage) {
							if ((beforeDepCode == "BKK" && $(v).val() == "VTE")
								|| (beforeDepCode == "VTE" && $(v).val() == "BKK")
								|| (beforeDepCode == "HKG" && $(v).val() == "MFM")
								|| (beforeDepCode == "MFM" && $(v).val() == "HKG")
								|| (beforeDepCode == "GUM" && $(v).val() == "SPN")
								|| (beforeDepCode == "SPN" && $(v).val() == "GUM")) {
								return true;
							}
						}

						$(v).parent().addClass('disable');
					}

					if (bonusCoupon && bonusCoupon.domIntCtgrCd == "D" && $(v).attr("country")!="KOR") {
						$(v).parent().addClass('disable');
					}
				});
			}
		}
	} else if ($(self).parents(".destination").length > 0) {
		if ($(self).parents(".course").children()[$(self).parents(".sec").parent().index()+1]) {
			var beforeArrCode = $(self).parents(".course").children().eq($(self).parents(".sec").parent().index()).find(".sec.destination>p>a>strong").attr("city");
			$(self).parents(".course").children().eq($(self).parents(".sec").parent().index()+1).find("[name=depCity]").find("li>input").each(function(i, v) {
				$(v).parent().removeClass('disable');
				if ($(v).attr("country") != arrCountryCode) {
					//예외
					if ((beforeArrCode == "BKK" && $(v).val() == "VTE")
						|| (beforeArrCode == "VTE" && $(v).val() == "BKK")
						|| (beforeArrCode == "HKG" && $(v).val() == "MFM")
						|| (beforeArrCode == "MFM" && $(v).val() == "HKG")
						|| (beforeArrCode == "GUM" && $(v).val() == "SPN")
						|| (beforeArrCode == "SPN" && $(v).val() == "GUM")) {
						return true;
					}
					$(v).parent().addClass('disable');
				}

				if (bonusCoupon && bonusCoupon.domIntCtgrCd == "D" && $(v).attr("country")!="KOR") {
					$(v).parent().addClass('disable');
				}
			});
		}

		/*if ($('input[name=tripType]:checked').val()=="RT") {
			showCalendar(self, $.i18n.prop('hom.ibe.rsv.lbl.021'), true);
		}
		else {
			showCalendar(self, $.i18n.prop('hom.ibe.rsv.lbl.021'), false);
		}*/

		showCalendar(self, $.i18n.prop('hom.ibe.rsv.lbl.021'), false);
	}
}

//국가 선택 레이어 표시
function showBooking(obj) {
	var $target = $(obj).parents(".sec");
	var $other = $target.parents(".itinerary").find(".sec").not($target);

	if (!play) {
		play = true;
		$other.removeClass("focus active").find(".srmy a").removeClass("on");
		$other.find(".content").stop().slideUp(50);
		$target.toggleClass("focus active").find(".srmy a").toggleClass("on");
		if ($(obj).parents(".multiCourse li").is(":visible")) {
			$target.find(".content").css("top",
				(($target.parents("li").index() + 1) * 78 + 5) + "px");
		}
		$target
			.find(".content")
			.stop()
			.slideToggle(
				100,
				function() {
					play = false;
					contHeight = $(window).height()
						- ($target.find(".content h2").height()
							+ parseInt($target.find(
								".content h2").css(
								"padding-top")) + parseInt($target
								.find(".content h2").css(
									"padding-bottom")));
					$target.find(".scr").css("max-height", contHeight + "px");
					$target.find(".scr").css("overflow-y", "auto").find(".popAgeLayer").hide(); //탑승객 수 선택 시 활성화 된 소아/유아 레이어 닫기

					var calculator_date=$target.find(".calculator_date");
					var startDate = $(".date div:eq(0)").find(".srmy strong").text();
					var selectDate = new Date();
					var selectYear = selectDate.getFullYear();
					var selectMonth = selectDate.getMonth()+1;
					var selectDay = selectDate.getDate();
					selectMonth = selectMonth < 10 ? "0" + selectMonth : selectMonth;
					selectDay = selectDay < 10 ? "0" + selectDay : selectDay;

					if (startDate.length > 0) {
						startDate= startDate.replace(/-/g, '');
						startDate= startDate.substr(0, 8);
						selectYear = startDate.substr(0, 4);
						selectMonth = startDate.substr(4, 2);
						selectDay = startDate.substr(6, 2);
					}

					calculator_date.find("select[name=cboYear]").val(selectYear);
					calculator_date.find("select[name=cboMonth]").val(selectMonth);
					calculator_date.find("select[name=cboDay]").val(selectDay);
				});
	}
}

//국가 선택 레이어 숨김
function hideBooking(obj) {
	var $target;
	if (obj) { // 타켓을 지정했을때, ex)hideBooking('fromCity')
		$target = $(obj).parents(".sec");
	} else { // 타켓을 지정하지 않았을때 열려있는 레이어 닫기, ex)hideBooking()
		$(".itinerary .sec").each(function() {
			if ($(this).hasClass("focus")) {
				$target = $(this);
			}
		});
	}

	if ($target) {
		$target.removeClass("focus active").find(".srmy a").removeClass("on");
		$target.find(".content").stop().slideUp(50);
	}
}

function isIntTourICNCJU(){
	var today = new Date();
	function pad(number, length) {
		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}
		return str;
	}
	var yyyy = today.getFullYear().toString();
	var MM = pad(today.getMonth() + 1,2);
	var dd = pad(today.getDate(), 2);
	var hh = pad(today.getHours(), 2);
	var mm = pad(today.getMinutes(), 2)
	//return yyyy + MM + dd+  hh + mm >= "202105010000";
	//국토부 승인 대기 - 20210430
	return false;
}

// 달력 띄우기
function showCalendar(self, title, bindYN) {
	var depCityCode = $(self).parents(".sec").parent().find(".departure>p>a>strong").attr("city");
	var arrCityCode = $(self).parents(".sec").parent().find(".destination>p>a>strong").attr("city");

	if (!depCityCode) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.019'))); return false;
	}
	if (!arrCityCode) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.020'))); return false;
	}

	// 국제선 관광비행 (ICN <> ICN)
	if((depCityCode == 'ICN' && arrCityCode == 'ICN')||
		(depCityCode == 'GMP' && arrCityCode == 'GMP')||
		(depCityCode == 'PUS' && arrCityCode == 'PUS')||
		(depCityCode == 'ICN' && arrCityCode == 'CJU' && isIntTourICNCJU())){
		$("input:radio[id=type2]:radio[value=OW]").prop('checked', true);
		$(".itinerary:not(.multiCourse)").show().siblings(".itinerary").hide();
		$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").hide();
		$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy strong").text("");
		$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").removeClass("setting");
		$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").addClass("choice");
	}

	var startDate = "&p_startDate=" + encodeURIComponent($(self).parents(".sec").parent().find("[name=calendar] div:eq(0)").find(".srmy strong").text());
	var lastDate = "&p_endDate=" + encodeURIComponent($(self).parents(".sec").parent().find("[name=calendar] div:eq(1)").find(".srmy strong").text());


	var paxADT = "&p_paxADT=" + selectPaxADT;
	var paxCHD = "&p_paxCHD=" + selectPaxCHD;
	var paxINF = "&p_paxINF=" + selectPaxINF;
	var bind = "";

	var depCity = "&p_depCity=" + depCityCode;
	var arrCity = "&p_arrCity=" + arrCityCode;
	if (bindYN) {
		bind = "&p_bind=" + bindYN;
	}
	//var tripType = "&p_tripType=" + $('input[name=tripType]:checked').val();
	var tripType = "&p_tripType=" + $('#routeType').val();

	var index = "";

/*	if ($('input[name=tripType][type=radio]').size() > 0) {
		if ($('input[name=tripType]:checked').val() == "MC" || $("#registerform #pnrNumber").val() != "") {
			index = "&p_index=" + $(self).parents(".sec").parents("ul").children().index($(self).parents(".sec").parent());
		}
	} else {
		if ($('#tripType').val() == "MC" || $("#registerform #pnrNumber").val() != "") {
			index = "&p_index=" + $(self).parents(".sec").parents("ul").children().index($(self).parents(".sec").parent());

			tripType = "&p_tripType=" + $('#tripType').val();
		}
	}*/

	if ($('#routeType').val() == "MC" || $("#registerform #pnrNumber").val() != "") {
		index = "&p_index=" + $(self).parents(".sec").parents("ul").children().index($(self).parents(".sec").parent());
	}

	selectedDate = "&p_selectedDate=" + encodeURI($(self).find("strong").text());
	showPopupLayer("/popup/getBestFares?title=" + encodeURIComponent(title)
		+ startDate + lastDate + paxADT + paxCHD + paxINF + depCity
		+ arrCity + bind + tripType + index + selectedDate);
}

//날짜 표시
function getInputDayLabel(convertDate) {
	var week = new Array('('+$.i18n.prop('hom.ibe.rsv.lbl.sun')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.mon')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.tue')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.wed')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.thu')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.fri')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.sat')+')');
	var year = convertDate.substring(0, 4);
	var month = convertDate.substring(4, 6);
	var day = convertDate.substring(6, 8);

	var today = new Date(Number(year), Number(month)-1 ,Number(day)).getDay();
	var todayLabel = week[today];

	return year + "-" + month + "-" + day + todayLabel;
}

//국가 정보 셋팅
function fnSetDepartureAirportList() {
	var htmlOutputDEP = $('#depTemplate').render(cityAirport.departureAirportList);
	var htmlOutputARR = $('#arrTemplate').render(cityAirport.arrivalAirportList);

	$("#depCity").html(htmlOutputDEP);
	$("#arrCity").html(htmlOutputARR);

	$("[name=depCity]").html(htmlOutputDEP);
	$("[name=arrCity]").html(htmlOutputARR);

	$(".cityList").each(function() {
		$(this).find("li p").on("click", function() {
			$(this).add($(this).parent("li")).toggleClass("on");
		});
	});
}

//최초 발행 시 셋팅
function setItineraryInfo() {
//	$("input[type=radio][name=tripType][value=" + $('#tripType').val() + "]").attr("checked", "checked");

	var triptype = $("#tripType").val();
	if(triptype != "") {
		$('[role="trip-type-option"][data-value="' + triptype + '"]').click();
	}

	var tripTypeForCheck = $('#routeType').val();

	if (tripTypeForCheck == "MC" || $("#registerform #pnrNumber").val() != "") { // 다구간
		$(".multiCourse").show().siblings(".itinerary").hide();
		if ($("#registerform #pnrNumber").val() != "") {
			// 재발행에서 사용하지 않는 bookHead 숨김 및 인원 수 변경 막기
			$(".bookHead").hide();
			$(".multiCourse .memberNum .setting a").attr('onclick', '').unbind('click').removeClass("icoFold");

			// 국내선에서 예약변경 시 출발지, 도착지 선택 불가능 하게 막기
			var domType = $("#hidDomIntType").val();
			if(domType == "DOM") {
				$(".multiCourse .departure a").attr('onclick', '').unbind('click').removeClass("icoFold");
				$(".multiCourse .destination a").attr('onclick', '').unbind('click').removeClass("icoFold");
			}

		} else {
			// 발행에서는 isModify값 모두를 TRUE로 설정
			$("#registerform [id^=isModify]").val("TRUE");
		}
		setMultiCourseInfo();
		return false;
	} else { // 왕복, 편도
		$(".itinerary:not(.multiCourse)").show().siblings(".itinerary").hide();

		if (tripTypeForCheck == "OW") {
			$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").hide();
			$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy strong").text("");
			$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").removeClass("setting");
			$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").addClass("choice");
		} else {
			$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").show();
		}
		$("#registerform [id^=isModify]").val("TRUE");
	}

	var depCity = $("#origin1").val();
	// 출발지가 파라미터로 넘어온 경우 getItinerayr에서 히든값을 읽어온다
	var getParamTrip = false;
	var depCityParam = $("#depcity1Param").val();
	if (depCityParam != "N" && depCityParam != "") {
		depCity = depCityParam.toUpperCase();
		getParamTrip = true;
	}

	if (depCity == "")
		return;
	var depName = "";
	var depCode = "";
	var depCountryCode = "";
	// 출발지 정보 찾기
	$.each(cityAirport.departureAirportList, function(i, v) {
		$.each(v.airportList, function(j, o) {
			if (o.iataCityAirportCode == depCity) { // 코드 변경
				depName = o.cityAirportName;
				depCode = o.departureSeq;
				depCountryCode = o.countryCode;
				return;
			}
		});
	});

	// 출발지 적용
	var depStrongTag = $(".itinerary").not(".multiCourse").find(".sec.departure>p>a>strong");

	$(depStrongTag).text(depName);
	$(depStrongTag).attr("city", depCity);
	$(depStrongTag).attr("country", depCountryCode);
	$(depStrongTag).closest(".srmy").addClass("setting");

	var arrCity = $("#destination1").val();
	// 도착지가 파라미터로 넘어온 경우 getItinerayr에서 히든값을 읽어온다
	var arrCityParam = $("#arrcity1Param").val();
	if (getParamTrip)
		arrCity = arrCityParam.toUpperCase();

	var arrCountryCode = "";
	var arrName = "";

	// 도착지 정보 찾기
	$.each(cityAirport.arrivalAirportList, function(i, v) {
		$.each(v.airportList, function(j, o) {
			if (o.iataCityAirportCode == arrCity) { // 코드 변경
				arrName = o.cityAirportName;
				arrCountryCode = o.countryCode;
				return;
			}
		});
	});
	var depCodeList = new Array();
	$.each(cityAirport.arrivalAirportList, function(i, v) {
		$.each(v.airportList, function(j, o) {
			$.each(o.parentDepSeqList, function(q, p) {
				if (p == depCode) {
					depCodeList.push(o.iataCityAirportCode);
				}

			});
		});
	});

	// 도착지 적용
	var arrStrongTag = $(".itinerary").not(".multiCourse").find(".sec.destination>p>a>strong");
	$(arrStrongTag).text(arrName);
	$(arrStrongTag).attr("city", arrCity);
	$(arrStrongTag).attr("country", arrCountryCode);
	$(arrStrongTag).closest(".srmy").addClass("setting");

	$(arrStrongTag).parents(".sec").parent().find("[name=arrCity]").find("li>input").each(function(i, v) {
		$(v).parent().removeClass('disable');
		if ($.inArray(v.value, depCodeList) == -1) {
			$(v).parent().addClass('disable');
		}
	});

	// 출발일
	var inputStartDate = $("#travelDate1").val();
	// 출발일이 파라미터로 넘어온 경우 getItinerayr에서 히든값을 읽어온다
	var depdateParam = $("#depdate1Param").val();
	//오늘 기준 과거날짜가 파라미터로 들어오면 오늘날짜로 변환
	if (getParamTrip &&  depdateParam.length == 8) {
		var nowdate = new Date();
		var gettodayyear = nowdate.getFullYear();
		var gettodaymonth = nowdate.getMonth() + 1;
		if((gettodaymonth + "").length < 2)
			gettodaymonth = "0" + gettodaymonth;
		var gettodayday = nowdate.getDate();
		if((gettodayday + "").length < 2)
			gettodayday = "0" + gettodayday;
		var gettoday = gettodayyear.toString() + gettodaymonth.toString() + gettodayday.toString();
		if(gettoday > depdateParam)
			depdateParam = gettoday;

		inputStartDate = depdateParam;
	}
	if (inputStartDate == "")
		return;
	if (inputStartDate != "") {
		var datefromNode01 = $(".itinerary .date div:eq(0)").not(".multiCourse");
		$(datefromNode01).find(".srmy strong").text(getInputDayLabel(inputStartDate));

		$(datefromNode01).find(".srmy").removeClass("choice");
		$(datefromNode01).find(".srmy").addClass("setting");

	}

//	var triptype = $("#tripType").val();
	var triptype = tripTypeForCheck;

	if (triptype != "" || getParamTrip) {
	//	$('.layer_menu li[role="trip-type-option"][data-value="' + tripType + '"]').click();

		var inputEndDate = $("#travelDate2").val();
		// 왕복일 경우
		if (triptype == "RT" || depdateParam != "") {
			// 도착일이 파라미터로 넘어온 경우 getItinerayr에서 히든값을 읽어온다
			var arrdateParam = $("#arrdate1Param").val();
			if ($("#tripday1Param").val() != "N") {
				var tripdayParam = Number($("#tripday1Param").val());

				// 스크립트를 더럽게 짠 이유 (좋은 방법 있으면 수정 하셔도 됩니다)
				// 1. 다국어포함 공통처리 위해
				// 2. 자바스크립트 시간 표출 관련 버그로 인하여 마지막날이 30/31일 경우에 따라 도착일 오계산
				if(depdateParam != "") {
					var arryear = depdateParam.substring(0, 4);
					var arrmonth = depdateParam.substring(4, 6);
					var arrday = depdateParam.substring(6, 8);
					var convertdate = arrmonth + "/" + arrday + "/" + arryear;
					var dateformatarrdate = new Date(convertdate);
					dateformatarrdate.setDate(dateformatarrdate.getDate()+ tripdayParam);

					var arrplusyear = dateformatarrdate.getFullYear();
					var arrplusmonth = dateformatarrdate.getMonth() + 1;
					if(arrplusmonth < 10)
						arrplusmonth = "0" + arrplusmonth;
					var arrplusday = dateformatarrdate.getDate();
					if(arrplusday < 10)
						arrplusday = "0" + arrplusday;
					inputEndDate = arrplusyear.toString() + arrplusmonth.toString() + arrplusday.toString();
				}
			} else {
				if (getParamTrip)
					inputEndDate = arrdateParam;
			}
			if (inputEndDate != "") {
				var datefromNode01 = $(".itinerary .date div:eq(1)").not(".multiCourse");
				$(datefromNode01).find(".srmy strong").text(getInputDayLabel(inputEndDate));

				$(datefromNode01).find(".srmy").removeClass("choice");
				$(datefromNode01).find(".srmy").addClass("setting");
			}
		}
		$('input:radio[name=tripType]:input[value=' + triptype + ']').attr(
			"checked", true);
	}

	var inputADTCount = parseInt($("#adultPaxCount").val());
	// 승객 숫자 적용 (출도착지 등의 정보를 파라미터로 받아온 경우엔 해당 구문 SKIP (: 탑승객이 0으로 셋팅되기 떄문)
	if (getParamTrip)
		inputADTCount = 1;
	var inputCHDCount = parseInt($("#childPaxCount").val());
	var inputINFCount = parseInt($("#infantPaxCount").val());
	inputADTCount = isNaN(inputADTCount) ? 0 : inputADTCount;
	inputCHDCount = isNaN(inputCHDCount) ? 0 : inputCHDCount;
	inputINFCount = isNaN(inputINFCount) ? 0 : inputINFCount;
	var memberLabel = setPaxCount(inputADTCount, inputCHDCount, inputINFCount);

	$("strong[name=adultPaxCnt]").text(inputADTCount);
	$("strong[name=childPaxCnt]").text(inputCHDCount);
	$("strong[name=infantPaxCnt]").text(inputINFCount);

	$(".itinerary").find(".memberNum>.srmy strong").text(memberLabel);
}

//다구간일 경우의 값 셋팅
function setMultiCourseInfo(cnt) {
	if (cnt == undefined) {
		cnt = 2;
	}

	var course = $(".itinerary.multiCourse .course");
	course.children().not("li:first").remove();

	for (var i = 1; i <= cnt; i++) {
		var depCity = $("#origin"+i).val();
		if (depCity == "") return;
		var depName = "";
		var depCode = "";
		var depCountryCode = "";

		if (i > 1) {
			addCourse();
		}

		//출발지 정보 찾기
		$.each(cityAirport.departureAirportList, function(i, v) {
			$.each(v.airportList, function(j, o) {
				if (o.iataCityAirportCode == depCity) { // 코드 변경
					depName = o.cityAirportName;
					depCode = o.departureSeq;
					depCountryCode = o.countryCode;
					return;
				}
			});
		});

		//출발지 적용
		var depStrongTag = course.children().eq(i-1).find(".sec.departure>p>a>strong");
		$(depStrongTag).text(depName);
		$(depStrongTag).attr("city", depCity);
		$(depStrongTag).attr("country", depCountryCode);
		$(depStrongTag).closest(".srmy").addClass("setting");

		var arrCity = $("#destination"+i).val();
		var arrCountryCode = "";
		var arrName = "";
		//도착지 정보 찾기
		$.each(cityAirport.arrivalAirportList, function(i, v) {
			$.each(v.airportList, function(j, o) {
				if (o.iataCityAirportCode == arrCity) { // 코드 변경
					arrName = o.cityAirportName;
					arrCountryCode = o.countryCode;
					return;
				}
			});
		});
		var depCodeList = new Array();
		$.each(cityAirport.arrivalAirportList, function(i, v) {
			$.each(v.airportList, function(j, o) {
				$.each(o.parentDepSeqList, function(q, p) {
					if (p == depCode) {
						depCodeList.push(o.iataCityAirportCode);
					}

				});
			});
		});

		//도착지 적용
		var arrStrongTag = course.children().eq(i-1).find(".sec.destination>p>a>strong");
		$(arrStrongTag).text(arrName);
		$(arrStrongTag).attr("city", arrCity);
		$(arrStrongTag).attr("country", arrCountryCode);
		$(arrStrongTag).closest(".srmy").addClass("setting");

		$(arrStrongTag).parents(".sec").parent().find("[name=arrCity]").find("li>input").each(function(i, v) {
			$(v).parent().removeClass('disable');
			if ($.inArray(v.value, depCodeList) == -1) {
				$(v).parent().addClass('disable');
			}
		});

		//여정 변경일 경우 출도착지는 해당 국가에서만 선택 가능
		if ($("#pnrNumber").val() != "" && i == 1) {
			var departureCode = $(depStrongTag).parents(".sec").parents(".course").children().eq($(depStrongTag).parents(".sec").parent().index()).find(".sec.departure>p>a>strong").attr("city");
			var arriveCode = $(arrStrongTag).parents(".sec").parents(".course").children().eq($(arrStrongTag).parents(".sec").parent().index()).find(".sec.destination>p>a>strong").attr("city");
			depCountryCode = $(arrStrongTag).parents(".sec").parent().find("[name=arrCity]").find("[value="+departureCode+"]").attr("country");
			arrCountryCode = $(arrStrongTag).parents(".sec").parent().find("[name=arrCity]").find("[value="+arriveCode+"]").attr("country");

			$(arrStrongTag).parents(".sec").parents(".course").children().eq($(arrStrongTag).parents(".sec").parent().index()).find("[name=arrCity]").find("li>input").each(function(i, v) {
				if ($(v).attr("country") != arrCountryCode) {
					//예외
					if ((arriveCode == "BKK" && $(v).val() == "VTE")
						|| (arriveCode == "VTE" && $(v).val() == "BKK")
						|| (arriveCode == "HKG" && $(v).val() == "MFM")
						|| (arriveCode == "MFM" && $(v).val() == "HKG")
						|| (arriveCode == "GUM" && $(v).val() == "SPN")
						|| (arriveCode == "SPN" && $(v).val() == "GUM")) {
						return true;
					}
					$(v).parent().addClass('disable');
				}
			});

			$(depStrongTag).parents(".course").children().eq($(depStrongTag).parents(".sec").parent().index()).find("[name=depCity]").find("li>input").each(function(i, v) {
				$(v).parent().removeClass('disable');
				if ($(v).attr("country") != depCountryCode) {
					$(v).parent().addClass('disable');
				}
			});
		}

		if ($(arrStrongTag).parents(".sec").parents(".course").children()[$(arrStrongTag).parents(".sec").parent().index()-1]) {
			var beforeDepCode = $(depStrongTag).parents(".sec").parents(".course").children().eq($(depStrongTag).parents(".sec").parent().index()-1).find(".sec.departure>p>a>strong").attr("city");
			depCountryCode = $(depStrongTag).parents(".sec").parent().find("[name=arrCity]").find("[value="+beforeDepCode+"]").attr("country");
			$(arrStrongTag).parents(".sec").parents(".course").children().eq($(arrStrongTag).parents(".sec").parent().index()).find("[name=arrCity]").find("li>input").each(function(i, v) {
				if ($(v).attr("country") != depCountryCode) {
					$(v).parent().addClass('disable');
				}
			});
		}

		if ($(depStrongTag).parents(".course").children()[$(depStrongTag).parents(".sec").parent().index()-1]) {
			var beforeArrCode = $(arrStrongTag).parents(".sec").parents(".course").children().eq($(arrStrongTag).parents(".sec").parent().index()-1).find(".sec.destination>p>a>strong").attr("city");
			arrCountryCode = $(arrStrongTag).parents(".sec").parent().find("[name=arrCity]").find("[value="+beforeArrCode+"]").attr("country");

			$(depStrongTag).parents(".course").children().eq($(depStrongTag).parents(".sec").parent().index()).find("[name=depCity]").find("li>input").each(function(i, v) {
				$(v).parent().removeClass('disable');
				if ($(v).attr("country") != arrCountryCode) {
					//예외
					if ((beforeArrCode == "BKK" && $(v).val() == "VTE")
						|| (beforeArrCode == "VTE" && $(v).val() == "BKK")
						|| (beforeArrCode == "HKG" && $(v).val() == "MFM")
						|| (beforeArrCode == "MFM" && $(v).val() == "HKG")
						|| (beforeArrCode == "GUM" && $(v).val() == "SPN")
						|| (beforeArrCode == "SPN" && $(v).val() == "GUM")) {
						return true;
					}
					$(v).parent().addClass('disable');
				}
			});
		}

		//출발일
		var inputStartDate = $("#travelDate"+i).val();
		if (inputStartDate == "") return;
		if (inputStartDate != "") {
			var datefromNode = $(".itinerary.multiCourse").children(".course").children("li").eq(i-1).children(":not(.departure):not(.destination)");
			$(datefromNode).find(".srmy strong").text(getInputDayLabel(inputStartDate));

			$(datefromNode).find(".srmy").removeClass("choice");
			$(datefromNode).find(".srmy").addClass("setting");

		}
	}

	//변경에 해당없는 항목 숨김처리
	for (var i = 1; i <= cnt; i++) {
		if ($("#isModify"+i).val() == "TRUE") {
			course.children().eq(i-1).show();
		}
		else {
			course.children().eq(i-1).hide();
		}
	}

	//국내선 여정변경 시 변경 불가능하도록 셋팅
	if ($("#registerform #pnrNumber").val() != "" && $("#domIntType").val() == "DOM") {
		$(".itinerary.multiCourse").find(".sec.departure").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
		$(".itinerary.multiCourse").find(".sec.destination").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
	}

	//승객 숫자 적용
	var inputADTCount = parseInt($("#adultPaxCount").val());
	var inputCHDCount = parseInt($("#childPaxCount").val());
	var inputINFCount = parseInt($("#infantPaxCount").val());
	inputADTCount = isNaN(inputADTCount) ? 0 : inputADTCount;
	inputCHDCount = isNaN(inputCHDCount) ? 0 : inputCHDCount;
	inputINFCount = isNaN(inputINFCount) ? 0 : inputINFCount;
	var memberLabel = setPaxCount(inputADTCount, inputCHDCount, inputINFCount);


	$("strong[name=adultPaxCnt]").text(inputADTCount);
	$("strong[name=childPaxCnt]").text(inputCHDCount);
	$("strong[name=infantPaxCnt]").text(inputINFCount);


	$(".itinerary").find(".memberNum>.srmy strong").text(memberLabel);
}

//여정 변경시 데이터 셋팅
function fnSetReservationInfo(data) {
	$(".multiCourse").show().siblings(".itinerary").hide();
	$(".multiCourse .memberNum .setting a").attr('onclick', '').unbind('click').removeClass("icoFold");
	$(".multiCourse").children(".more").hide();

	if ($(".bookHead")) {
		$(".bookHead").hide();
	}

	$(".multiCourse .memberNum .setting a strong").text(setPaxCount(data.adultPaxCount,data.childPaxCount,data.infantPaxCount));
	var segCnt = 0;
	if (data.segmentDetailList != undefined) {
		$("#registerform #pnrNumber").val(data.pnrNumber);
		$("#registerform #adultPaxCount").val(data.adultPaxCount);
		$("#registerform #childPaxCount").val(data.childPaxCount);
		$("#registerform #infantPaxCount").val(data.infantPaxCount);
		$("#registerform #tripType").val(data.segmentDetailList.length == 1?"OW":"RT");

		$("#registerform [id^=isModify]").val("");

		for (var i = 0; i < data.segmentDetailList.length; i++) {
			$("#registerform #origin"+(i+1)).val(data.segmentDetailList[i].depSegment.boardPoint);
			$("#registerform #destination"+(i+1)).val(data.segmentDetailList[i].arrSegment.offPoint);
			// LTC로 변환된 값을 사용하기 때문에  new Date()에서 자동 로컬타임(GMT+9)을 적용하는 값을 지우고 계산함.[convertDate.getTimezoneOffset() * 60000]
			//var convertDate = new Date(data.segmentDetailList[i].depSegment.scheduledDepartureDateTime);
			//$("#registerform #travelDate"+(i+1)).val(fnGetFormatDate(new Date(convertDate.valueOf() + convertDate.getTimezoneOffset() * 60000)));
			$("#registerform #travelDate"+(i+1)).val(fnGetFormatDate(new Date(data.segmentDetailList[i].depSegment.scheduledDepartureDateTime)));
			$("#registerform #segmentId"+(i+1)).val(data.segmentDetailList[i].groupId);
			if (data.segmentDetailList[i].checked != "") {
				$("#registerform #isModify"+(i+1)).val(data.segmentDetailList[i].checked);
			}else {
				$("#registerform #isModify"+(i+1)).val("");
			}
		}
		segCnt = data.segmentDetailList.length;
	}
	else {
		segCnt = data.segmentCnt;
	}

	setMultiCourseInfo(segCnt);
}

//여정 선택 이벤트
function submitItinerary() {
	var tripTypeForCheck = $('#routeType').val();
	if(tripTypeForCheck == "MC" || $("#registerform #pnrNumber").val() != "") {
		return submitMultiCourseItinerary();
	}

	// 여정1 출발지
	var depCity = $(".itinerary").not(".multiCourse").find(".sec.departure>p>a>strong").attr("city");
	if(!depCity) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.019')));
		return false;
	}

	// 여정1 도착지
	var arrCity = $(".itinerary").not(".multiCourse").find(".sec.destination>p>a>strong").attr("city");
	if(!arrCity) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.020')));
		return false;
	}

	// 여정1 출발일
	var startDate = $(".date div:eq(0)").find(".srmy strong").text();
	startDate = startDate.replace(/-/g, '');
	startDate = startDate.substr(0, 8);
	if(!startDate) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.021')));
		return false;
	}

	var tripType = tripTypeForCheck;
	if(!tripType) {
		tripType = 'RT';
	}

	// 여정2 출발일
	var lastDate = '';
	if(tripType == "RT") {
		lastDate = $(".date div:eq(1)").find(".srmy strong").text();
		lastDate = lastDate.replace(/-/g, '');
		lastDate = lastDate.substr(0, 8);
		if(!lastDate) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.022')));
			return false;
		}
	}

	// 노선 유효성 검사 호출
	if(!chkDepArrCity(depCity, arrCity)) {
		// 해당 노선은 운행되지 않는 노선입니다.
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.075'));
		return false;
	}

	// 여정1 출/도착지 국가
	var depCountry = $(".itinerary").not(".multiCourse").find(".sec.departure>p>a>strong").attr("country");
	var arrCountry = $(".itinerary").not(".multiCourse").find(".sec.destination>p>a>strong").attr("country");
	if(!!depCountry) {
		if(depCountry == arrCountry && depCountry == "KOR") {
			$("#domIntType").val("DOM");
		} else {
			$("#domIntType").val("INT");
		}

		// 국제선 관광비행
		if((depCity == 'ICN' && arrCity == 'ICN')||
			(depCity == 'GMP' && arrCity == 'GMP')||
			(depCity == 'PUS' && arrCity == 'PUS')||
			(depCity == 'ICN' && arrCity == 'CJU' && isIntTourICNCJU())){
			$("#domIntType").val("INT");
		}
	}

	// 보너스 항공권 적용일 때
	if(bonusCoupon) {
		// 국내선 보너스 항공권, 국제선 여정일 때
		if(bonusCoupon.domIntCtgrCd == "D" && $("#domIntType").val()!= "DOM") {
			// 선택하신 보너스 항공권은 국내선만 예매 가능합니다. 출도착지를 확인해 주세요
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.074').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.017')));
			return false;
		}

		// 국제선 보너스 항공권, 국내선 여정일 때
		if(bonusCoupon.domIntCtgrCd == "I" && $("#domIntType").val()!= "INT") {
			// 선택하신 보너스 항공권은 국제선만 예매 가능합니다. 출도착지를 확인해 주세요
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.074').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.016')));
			return false;
		}
	}

	var origin2 = tripType === 'RT' ? arrCity : '';
	var destination2 = tripType === 'RT' ? depCity : '';
	var travelDate2 = tripType === 'RT' ? lastDate : '';

	$("#origin1").val(depCity);
	$("#destination1").val(arrCity);
	$("#travelDate1").val(startDate);
	$("#origin2").val(origin2);
	$("#destination2").val(destination2);
	$("#travelDate2").val(travelDate2);
	$("#adultPaxCount").val(selectPaxADT);
	$("#childPaxCount").val(selectPaxCHD);
	$("#infantPaxCount").val(selectPaxINF);
	$("#tripType").val(tripType);

	// 소아만 있을 때
	if(selectPaxCHD > 0 && selectPaxADT == 0 && selectPaxINF == 0) {
		// 단독이 아닐 때
		if(selectPaxCHD > 1) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.036'));
			return false;
		}

		// 로그인 유무 체크
		if($("#userId").val() == "") {
			confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.045'),'moveLogin','hideConfirmLayer');
			return false;
		}

		var msg = $("#domIntType").val() === "DOM" ? 'lj.ibe.b2c.rsv.006' : 'lj.ibe.b2c.rsv.007';
		confirmLayer($.i18n.prop(msg),'confirmLayerYes','confirmLayerNo');
		return false;
	}

	// 출/도착지 노선에 따른 안내문
	var route = '';
	var itin = ';' + depCity + arrCity + ';';
	if(tripType === 'RT') {
		itin += arrCity + depCity + ';';
	}
	if(itin.indexOf(';ICNXIY;') !== -1 || itin.indexOf(';XIYICN;') !== -1) {
		route = 'ICNGMPXIY';
	} else if(itin.indexOf(';GMPXIY;') !== -1 || itin.indexOf(';XIYGMP;') !== -1) {
		route = 'ICNGMPXIY';
	} else if(itin.indexOf(';ICNGUM;') !== -1 || itin.indexOf(';GUMICN;') !== -1) {
		route = 'GUM';
	} else if(itin.indexOf(';ICNBKK;') !== -1 || itin.indexOf(';BKKICN;') !== -1) {
		route = 'BKK';
	} else if(itin.indexOf(';ICNCNX;') !== -1 || itin.indexOf(';CNXICN;') !== -1) {
		route = 'CNX';
	}
	if(!!route) {
		showPopupLayer("/popup/noteDestination?destination=" + route);
		return false;
	}

	// 출발 국가 또는 도착 국가에 따른 안내문
	var country ='';
	var langCd = $("#globalLangCd").val();
	switch(arrCountry) {
	case "KOR":
		switch (depCountry) {
		case "JPN": country = "JP"; break;
		case "PHL": country = "PH"; break;
		case "VNM": country = "VN"; break;
		case "USA": country = "US"; break;
		case "CHN":
			if(langCd == "KOR" || langCd == "CHN") {
				if((depCity == "CJU" && arrCity == "XIY") || (depCity == "XIY" && arrCity == "CJU") || (depCity == "CJU" && arrCity == "PVG")) {
					country = "CN";
					break;
				}
			}
		default: country=""; break;
		}
		break;
	case "JPN": country = "JP"; break;
	case "PHL": country = "PH"; break;
	case "VNM": country = "VN"; break;
	case "USA": country = "US"; break;
	case "CHN":
		if(langCd == "KOR" || langCd == "CHN") {
			if((depCity == "CJU" && arrCity == "XIY") || (depCity == "XIY" && arrCity == "CJU") || (depCity == "CJU" && arrCity == "PVG")) {
				country = "CN";
				break;
			}
		}
		break;
	default: country=""; break;
	}
	if(!!country) {
		showPopupLayer("/popup/noteDestination?destination=" + country);
		return false;
	}

	// 넷퍼넬 적용 상태, 최초 예약일 때
	var initialBooking = $('#registerform #pnrNumber').val() == "";
	if(netfunnelVisible && initialBooking) {
		var skinId = ('KOR' == globalLangCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";
		NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
			$('#registerform').submit();
		});
		return false;
	}

	setTimeout(function() {
		$('#registerform').submit();
	}, 100);
}

//다구간 및 여정 변경 시 이벤트
function submitMultiCourseItinerary() {
	var tampDate = new Array();

	var depCityArray = $(".itinerary.multiCourse").find(".sec.departure>p>a>strong");
	var arrCityArray = $(".itinerary.multiCourse").find(".sec.destination>p>a>strong");
	var startDateArray = $(".itinerary.multiCourse").children(".course").children("li").children(":not(.departure):not(.destination)").find(".srmy strong");
	var domChk = true;
	var cityChk = true;

	var chnPopup = false;

	var itin = '';
	for (var i = 0; i < depCityArray.length; i++) {
		var depCity = depCityArray.eq(i).attr("city");
		var depCountry = depCityArray.eq(i).attr("country");
		if (depCity == "" || depCity == undefined) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.019'))); return false;
		}
		else {
			if (domChk && depCountry != "KOR") {
				domChk = false;
			}
		}

		var arrCity = arrCityArray.eq(i).attr("city");
		var arrCountry = arrCityArray.eq(i).attr("country");
		if (arrCity == "" || arrCity == undefined) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.020'))); return false;
		}else {
			if (domChk && arrCountry != "KOR") {
				domChk = false;
			}
		}
		//노선 유효성 검사 호출
		if (!chkDepArrCity(depCity,arrCity)) {
			cityChk = false;
		}

		var startDate = startDateArray.eq(i).text();
		startDate = startDate.replace(/-/g, '');
		startDate = startDate.substr(0, 8);
		if (startDate == "" || startDate == undefined) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.021'))); return false;
		}
		if (i > 0) {
			if (Number($("#travelDate"+i).val()) > Number(startDate)) {
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.054')); return false;
			}
		}

		$("#origin"+(i+1)).val(depCity);
		$("#destination"+(i+1)).val(arrCity);
		tampDate.push($("#travelDate"+(i+1)).val());
		$("#travelDate"+(i+1)).val(startDate);

		if(arrCity == "XIY" || arrCity == "PVG") {
			chnPopup = true;
		}

		itin += ';' + depCity + arrCity;
	}
	itin += ';';

	// 노선 유효성 검사 호출
	if (!cityChk) {
		// 해당 노선은 운행되지 않는 노선입니다.
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.075'));
		return false;
	}

	if(domChk) {
		$("#domIntType").val("DOM");
	} else {
		$("#domIntType").val("INT");
	}

	// 보너스 항공권 적용일 때
	if(bonusCoupon) {
		// 국내선 보너스 항공권, 국제선 여정일 때
		if(bonusCoupon.domIntCtgrCd == "D" && $("#domIntType").val()!= "DOM") {
			// 선택하신 보너스 항공권은 국내선만 예매 가능합니다. 출도착지를 확인해 주세요
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.074').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.017')));
			return false;
		}

		// 국제선 보너스 항공권, 국내선 여정일 때
		if(bonusCoupon.domIntCtgrCd == "I" && $("#domIntType").val()!= "INT") {
			// 선택하신 보너스 항공권은 국제선만 예매 가능합니다. 출도착지를 확인해 주세요
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.074').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.016')));
			return false;
		}
	}

	$("#adultPaxCount").val(selectPaxADT);
	$("#childPaxCount").val(selectPaxCHD);
	$("#infantPaxCount").val(selectPaxINF);
	$("#tripType").val("MC");

	$("#promoCode").val($("#reservationDetailForm #hidPromo").val());

	// 소아만 있을 때
	if(selectPaxCHD > 0 && selectPaxADT == 0 && selectPaxINF == 0) {
		// 단독이 아닐 때
		if(selectPaxCHD > 1) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.036'));
			return false;
		}

		//로그인 유무 체크
		if($("#userId").val() == "") {
			confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.045'),'moveLogin','hideConfirmLayer');
			return false;
		}

		var msg = $("#domIntType").val() === "DOM" ? 'lj.ibe.b2c.rsv.006' : 'lj.ibe.b2c.rsv.007';
		confirmLayer($.i18n.prop(msg),'confirmLayerYes','confirmLayerNo');
		return false;
	}

	// 재발행일 경우 DOB를 체크함
	if ($("#registerform #pnrNumber").val() != "") {
		if (!reissueDobCheck()) {
			//날짜값을 변경전 값으로 리셋
			for (var i = 0; i < tampDate.length; i++) {
				$("#travelDate"+(i+1)).val(tampDate[i]);
			}

			alertLayer($.i18n.prop("lj.ibe.b2c.myp.025"));
			return false;
		}
	}

	// 출/도착지 노선에 따른 안내문
	var route = '';
//	var itin = ';' + depCity + arrCity + ';';
	if(itin.indexOf(';ICNXIY;') !== -1 || itin.indexOf(';XIYICN;') !== -1) {
		route = 'ICNGMPXIY';
	} else if(itin.indexOf(';GMPXIY;') !== -1 || itin.indexOf(';XIYGMP;') !== -1) {
		route = 'ICNGMPXIY';
	} else if(itin.indexOf(';ICNGUM;') !== -1 || itin.indexOf(';GUMICN;') !== -1) {
		route = 'GUM';
	} else if(itin.indexOf(';ICNBKK;') !== -1 || itin.indexOf(';BKKICN;') !== -1) {
		route = 'BKK';
	} else if(itin.indexOf(';ICNCNX;') !== -1 || itin.indexOf(';CNXICN;') !== -1) {
		route = 'CNX';
	}
	if(!!route) {
		showPopupLayer("/popup/noteDestination?destination=" + route);
		return false;
	}

	var country ='';
	var langCd = $("#globalLangCd").val();
	switch($(".itinerary.multiCourse").find(".sec.destination>p>a>strong").eq(0).attr("country")) {
		case "KOR":
			//시안-제주 노선 안내
			if(langCd == "KOR" || langCd == "CHN") {
				if(chnPopup) {
					country = "CN";
				}
			}
			break;
		case "JPN":
			if (startDateArray.length == 2) {
				country = "JP";
			}
			break;
		case "PHL": country = "PH"; break;
		case "VNM": country = "VN"; break;
		case "USA": country = "US"; break;
		case "CHN":
			if(langCd == "KOR" || langCd == "CHN") {
				if(langCd == "KOR" || langCd == "CHN") {
					if(chnPopup) {
						country = "CN"; break;
					}
				}
			}
			break;
		default: country=""; break;
	}
	if(!!country) {
		showPopupLayer("/popup/noteDestination?destination=" + country);
		return false;
	}

	// 넷퍼넬 적용 상태, 최초 예약일 때
	var initialBooking = $('#registerform #pnrNumber').val() == "";
	if(netfunnelVisible && initialBooking) {
		var skinId = ('KOR' == langCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";
		NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
			$('#registerform').submit();
		});
	}

	setTimeout(function() {
		$('#registerform').submit();
	}, 100);
}

//구간 추가
function addCourse(){
	if ($(".itinerary.multiCourse .course").children().length <= 3) {
		var liClone = $(".itinerary.multiCourse .course").children().eq(0).clone();

		liClone.find(".setting").removeClass("setting");

		liClone.find("p").on("click", function() {
			$(this).add($(this).parent("li")).toggleClass("on");
		});

		$(".itinerary.multiCourse .course").append(liClone);
	}
}

//날짜 포맷팅
function fnGetFormatDate(date){
	var year = date.getFullYear();
	var month = (1 + date.getMonth());
	month = month >= 10 ? month : '0' + month;
	var day = date.getDate();
	day = day >= 10 ? day : '0' + day;
	return  year + '' + month + '' + day;
}

//itinerary의 값을 셋팅
function setModifyCity(itinerary){
	var segmentCnt = 0;
	for( var key in itinerary ) {
		$("#registerform #"+key).val(itinerary[key]);
		if (key.indexOf("origin") >= 0 && itinerary[key] != null) {
			segmentCnt++;
		}
	}

	itinerary.segmentCnt = segmentCnt;

	if (itinerary["pnrNumber"]) {
		fnSetReservationInfo(itinerary);
	}else {
		setItineraryInfo();
	}
}

/**
 * Pax Count 증감 1. 개별 수 체크 2. 성인 + 소아 수 체크 3. 성인수 = 유아수 체크
 *
 * @param {string}
 *            strPaxType - ADULT, CHILD, INFANT
 * @example fnSetPaxCountDown("ADULT";
 */
function fnSetPaxCountDown(strPaxType,obj) {
	var btnParent = $(obj).parents("ul");

	var //
		iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
		iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
		iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
		iPaxCount = iAdultCount + iChildCount;

	switch (strPaxType) {
		case "ADULT":
			iAdultCount--;
			if (iAdultCount >= 0) {
				iPaxCount--;
			}

			if (iInfantCount > iAdultCount) {
				iInfantCount = iAdultCount;
			}

			if (iAdultCount <= 0) {
				iAdultCount = 0;
				iInfantCount = 0;
				fnSetEnableButtonUp('a[name=adultPaxCntDown], a[name=infantPaxCntDown]', false);
			}
			if (iInfantCount == iAdultCount) {
				fnSetEnableButtonUp('a[name=infantPaxCntUp]', false);
			}

			$("strong[name=adultPaxCnt]").text(iAdultCount);
			$("strong[name=infantPaxCnt]").text(iInfantCount);
			break;
		case "CHILD":
			iChildCount--;
			if (iChildCount >= 0) {
				iPaxCount--;
			}
			if (iChildCount <= 0) {
				iChildCount = 0;
				fnSetEnableButtonUp('a[name=childPaxCntDown]', false);
			}

			$("strong[name=childPaxCnt]").text(iChildCount);
			break;
		case "INFANT":
			iInfantCount--;
			if (iInfantCount <= 0) {
				iInfantCount = 0;
				fnSetEnableButtonUp('a[name=infantPaxCntDown]', false);
			}

			if (iAdultCount > iInfantCount) {
				fnSetEnableButtonUp('a[name=infantPaxCntUp]', true);
			}

			$("strong[name=infantPaxCnt]").text(iInfantCount);
			break;
	}

	if (iPaxCount < maxPaxCnt) {
		fnSetEnableButtonUp('a[name=adultPaxCntUp], a[name=childPaxCntUp]', true);
	}
}

/**
 * Pax Count 증감 1. 개별 수 체크 2. 성인 + 소아 수 체크 3. 성인수 = 유아수 체크
 *
 * @param {string}
 *            strPaxType - ADULT, CHILD, INFANT
 * @example fnSetPaxCountUp("ADULT");
 */
function fnSetPaxCountUp(strPaxType,obj) {
	var btnParent = $(obj).parents("ul");

	var //
		iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
		iChildCount = parseInt($(btnParent).find(
			'strong[name=childPaxCnt]').text()),
		iInfantCount = parseInt($(btnParent).find(
			'strong[name=infantPaxCnt]').text()),
		iPaxCount = iAdultCount + iChildCount;

	// Count 증감
	switch (strPaxType) {
		case "ADULT":
			if (iPaxCount < maxPaxCnt) {
				iAdultCount++;
				iPaxCount++;
				$("strong[name=adultPaxCnt]").text(iAdultCount);
				//fnSetEnableButtonUp('a[name=adultPaxCntDown], a[name=infantPaxCntDown], a[name=infantPaxCntUp]',true);
				fnSetEnableButtonUp('a[name=adultPaxCntDown], a[name=infantPaxCntUp]',true);
			} else {
				// 성인,소아 비활성처리
				fnSetEnableButtonUp('a[name=adultPaxCntUp], a[name=childPaxCntUp]', false);
			}
			break;
		case "CHILD":
			if (iPaxCount < maxPaxCnt) {
				iChildCount++;
				iPaxCount++;
				$("strong[name=childPaxCnt]").text(iChildCount);
				fnSetEnableButtonUp('a[name=childPaxCntDown]',true);
			} else {
				// 성인,소아 비활성처리
				fnSetEnableButtonUp('a[name=adultPaxCntUp], a[name=childPaxCntUp]', false);
			}
			break;
		case "INFANT":
			iInfantCount++;
			if (iAdultCount <= iInfantCount) {
				iInfantCount = iAdultCount;
				fnSetEnableButtonUp('a[name=infantPaxCntUp]', false);
			}

			if (iInfantCount > 0) {
				fnSetEnableButtonUp('a[name=infantPaxCntDown]', true);
			}

			$("strong[name=infantPaxCnt]").text(iInfantCount);
			break;
	}

	if (iPaxCount == maxPaxCnt) {
		fnSetEnableButtonUp('a[name=adultPaxCntUp], a[name=childPaxCntUp]', false);
	}

}

function fnSetEnableButtonUp(buttonID, enable) {
	if (enable) { // 활성
		/*if (bonusCoupon != null && !($(buttonID).attr("name") == "infantPaxCntDown" || $(buttonID).attr("name") =="infantPaxCntUp")) {
			return false;
		}*/
		$(buttonID).removeClass('disable');
		$(buttonID).on('click');
		$(buttonID).bind('click', false);
	} else { // 비활성
		$(buttonID).addClass('disable');
		$(buttonID).off('click');
		$(buttonID).unbind('click', false);
	}

}

function setUpDownBtn(){
	fnSetEnableButtonUp('a[name=adultPaxCntDown], a[name=adultPaxCntUp], a[name=childPaxCntDown], a[name=childPaxCntUp], a[name=infantPaxCntDown], a[name=infantPaxCntUp]',true);

	if ($("#adultPaxCount").val() != "" && parseInt($("#adultPaxCount").val()) == 0) {
		fnSetEnableButtonUp('a[name=infantPaxCntDown]',false);
		fnSetEnableButtonUp('a[name=infantPaxCntUp]',false);
		fnSetEnableButtonUp('a[name=adultPaxCntDown]',false);
	}
	if ($("#childPaxCount").val() == "" || parseInt($("#childPaxCount").val()) == 0) {
		fnSetEnableButtonUp('a[name=childPaxCntDown]',false);
	}
	if ($("#infantPaxCount").val() == "" || parseInt($("#infantPaxCount").val()) == 0) {
		fnSetEnableButtonUp('a[name=infantPaxCntDown]',false);
	}
	if (($("#adultPaxCount").val() != "" && $("#childPaxCount").val() != "")
		&& (parseInt($("#adultPaxCount").val())+parseInt($("#childPaxCount").val()) == maxPaxCnt)) {
		fnSetEnableButtonUp('a[name=adultPaxCntUp]',false);
		fnSetEnableButtonUp('a[name=childPaxCntUp]',false);
	}
	if (($("#adultPaxCount").val()!= "" && $("#infantPaxCount").val()!= "")
		&& (parseInt($("#infantPaxCount").val()) == maxPaxCnt || parseInt($("#adultPaxCount").val()) == parseInt($("#infantPaxCount").val()))) {
		fnSetEnableButtonUp('a[name=infantPaxCntUp]',false);
	}
}

// 보너스항공권 json
var bonusCoupon = null;
// 보너스항공권 Embargo 정보 json
var bonusCouponEmbargo = null;
// 보너스항공권 팝업

// 로그인페이지이동
function moveLogin(){
	document.location.href = '/login/login?returnUrl=/';
}
//로그아웃
function moveLogout(){
	doLogOut();
	$('#logoutForm').submit();
}

function jsClickBonusCouponBtn(isLogin){
	if ( isLogin ){
		showPopupLayer('/popup/bonus');
	} else {
		confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.003'),'moveLogin','hideConfirmLayer');
	}
}

function setCoupon(){
	if($("#registerform #cpnNo").val()!="" && bonusCoupon != null)
	{
		//구간정보
		var boundOffCode = bonusCoupon.apoCd.split("|");

		// 홈페이지 UI/UX 개선
		//여정종류(편도,왕복,다구간) 설정
		//$("input[name=tripType][type=radio][value="+bonusCoupon.itnTypCd+"]").prop("checked",true);
		//$("input[name=tripType][type=radio]").prop("disabled",true);


		//var $target = $(this);
		var $target = $('[role="trip-type-option"][data-value="' + bonusCoupon.itnTypCd + '"]');
		var value = $target.data('value');

		$( '.sel_opt .init' ).html($target.text()).attr( 'title', $target.text() + ' 선택됨' ).removeClass( 'on' );
//		$( '.layer_menu' ).slideToggle(100);

		var $selectItem = $( '#routeType' );				// 모바일 셀렉트 (PC와 값 공유)
		$selectItem.val(value);

		if(value === 'RT') { //왕복
			$( '.itinerary_wrap .itinerary:not(.multiCourse)' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$( '.itinerary_wrap .itinerary:not(.multiCourse) .date div:last-child' ).show();
			$target.parents().find('.itinerary_wrap .btnArea').removeClass( 'btnArea2' );
		} else if(value === 'OW') { //편도
			$( '.itinerary_wrap .itinerary:not(.multiCourse)' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$( '.itinerary_wrap .itinerary:not(.multiCourse) .date div:last-child' ).hide();
			$target.parents().find('.itinerary_wrap .btnArea').addClass( 'btnArea2' );
		} else if(value === 'MC') { //다구간
			$( '.multiCourse' ).show().siblings( '.itinerary_wrap .itinerary' ).hide();
			$target.parents().find('.itinerary_wrap .btnArea').addClass( 'btnArea2' );
		}

//		$('[role="trip-type-option"][data-value="' + bonusCoupon.itnTypCd + '"]').click();
//		$('#routeType').val(bonusCoupon.itnTypCd);
		// 홈페이지 UI/UX 개선 끝

		//국내국제 여부
		if (bonusCoupon.domIntCtgrCd == "D") {
			$("#domIntType").val("DOM");
		}
		else {
			$("#domIntType").val("INT");
		}
		//최대 선택 인원수 설정
		maxPaxCnt = 1;

		//탑승인원수 설정
		var now = new Date();
		var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		var strToday = dateFormating(today,"yyyyMMdd");
		var childUser = false;

		if (dobCheck($("#domIntType").val(),"CHILD", $("[name=userBirth]").val(),strToday,strToday)) {
			childUser = true;
		}
		//첫 페이지일경우에만 동작
		if (initial) {
			var sPaxCount = setPaxCount(1, 0, 0);
			if (childUser) {
				sPaxCount = setPaxCount(0, 1, 0);
				$("[name=adultPaxCnt]").text("0");
				$("[name=childPaxCnt]").text("1");

				//소아일 경우 유저수 변경이 가능하도록 함.
				fnSetEnableButtonUp("a[name=adultPaxCntUp]",false);
				fnSetEnableButtonUp("a[name=adultPaxCntDown]",false);
				fnSetEnableButtonUp("a[name=childPaxCntUp]",false);
				fnSetEnableButtonUp("a[name=childPaxCntDown]",true);
				fnSetEnableButtonUp("a[name=infantPaxCntUp]",false);
				fnSetEnableButtonUp("a[name=infantPaxCntDown]",false);
			}else {
				$("[name=adultPaxCnt]").text("1");
				$("[name=childPaxCnt]").text("0");
				fnSetEnableButtonUp('a[name=infantPaxCntUp]', true);
				fnSetEnableButtonUp('a[name=infantPaxCntDown]', false);

				//성인일 경우 국내선이면 유아를 추가 할수 있음.
				$("a[name=adultPaxCntUp]").addClass("disable").prop('onclick',"javascript:;").off('click');
				$("a[name=adultPaxCntDown]").addClass("disable").prop('onclick',"javascript:;").off('click');
				$("a[name=childPaxCntUp]").addClass("disable").prop('onclick',"javascript:;").off('click');
				$("a[name=childPaxCntDown]").addClass("disable").prop('onclick',"javascript:;").off('click');
				if ($("#domIntType").val() != "DOM") {
					$("a[name=infantPaxCntUp]").addClass("disable").prop('onclick',"javascript:;").off('click');
					$("a[name=infantPaxCntDown]").addClass("disable").prop('onclick',"javascript:;").off('click');
				}
			}
			$("[name=infantPaxCnt]").text("0");

			$(".memberNum .srmy strong").text(sPaxCount);
		}


		if (childUser) {
			//소아일 경우 유저수 변경이 불가능하도록 함.
			fnSetEnableButtonUp("a[name=adultPaxCntUp]",false);
			fnSetEnableButtonUp("a[name=adultPaxCntDown]",false);
			fnSetEnableButtonUp("a[name=childPaxCntUp]",false);
			fnSetEnableButtonUp("a[name=childPaxCntDown]",true);
			fnSetEnableButtonUp("a[name=infantPaxCntUp]",false);
			fnSetEnableButtonUp("a[name=infantPaxCntDown]",false);
		}
		else {
			//성인일 경우 국내선이면 유아를 추가 할수 있음.
			$("a[name=adultPaxCntUp]").addClass("disable").prop('onclick',"javascript:;").off('click');
			$("a[name=adultPaxCntDown]").addClass("disable").prop('onclick',"javascript:;").off('click');
			$("a[name=childPaxCntUp]").addClass("disable").prop('onclick',"javascript:;").off('click');
			$("a[name=childPaxCntDown]").addClass("disable").prop('onclick',"javascript:;").off('click');
			if ($("#domIntType").val() != "DOM") {
				$("a[name=infantPaxCntUp]").addClass("disable").prop('onclick',"javascript:;").off('click');
				$("a[name=infantPaxCntDown]").addClass("disable").prop('onclick',"javascript:;").off('click');
			}
		}

		//구간별 적용
		if (bonusCoupon.itnTypCd == "MC") { //다구간
			//다구간일 경우 화면 컨트롤
			$(".multiCourse").show().siblings(".itinerary").hide();

			if ($("#origin1").val() == "") {
				$(".itinerary.multiCourse").find(".sec[name=calendar]").find(".srmy").removeClass("setting");
				$(".itinerary.multiCourse").find(".sec[name=calendar]").find(".srmy strong").text("");
			}

			if (boundOffCode[0].split(",")[0] != "ALL") {
				$(".itinerary.multiCourse").find(".sec.departure").eq(0).find(".srmy strong").attr("city", boundOffCode[0].split(",")[0]);
				$.each(cityAirport.departureAirportList, function(i, v) {
					$.each(v.airportList, function(j, o) {
						if (o.iataCityAirportCode == boundOffCode[0].split(",")[0]) { // 코드 변경
							$(".itinerary.multiCourse").find(".sec.departure").eq(0).find(".srmy strong").attr("country", o.countryCode);
							return false;
						}
					});
				});
				$(".itinerary.multiCourse").find(".sec.departure").eq(0).find(".srmy").addClass("setting");
				$(".itinerary.multiCourse").find(".sec.departure").eq(0).find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			}
			else {
				//보너스 쿠폰 사용 시 국내선만 사용할 경우 적용
				if (bonusCoupon.domIntCtgrCd == "D") {
					$(".itinerary.multiCourse").find(".sec.departure").eq(0).find("[name=depCity]").find("li>input").each(function(i, v) {
						$(v).parent().removeClass('disable');
						if ($(v).attr("country")!="KOR") {
							$(v).parent().addClass('disable');
						}
					});
				}
			}

			if (boundOffCode[0].split(",")[1] != "ALL") {
				$(".itinerary.multiCourse").find(".sec.destination").eq(0).find(".srmy strong").attr("city", boundOffCode[0].split(",")[1]);
				$.each(cityAirport.departureAirportList, function(i, v) {
					$.each(v.airportList, function(j, o) {
						if (o.iataCityAirportCode == boundOffCode[0].split(",")[1]) { // 코드 변경
							$(".itinerary.multiCourse").find(".sec.destination").eq(0).find(".srmy strong").attr("country", o.countryCode);
							return false;
						}
					});
				});
				$(".itinerary.multiCourse").find(".sec.destination").eq(0).find(".srmy").addClass("setting");
				$(".itinerary.multiCourse").find(".sec.destination").eq(0).find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			}
			else {
				//보너스 쿠폰 사용 시 국내선만 사용할 경우 적용
				if (bonusCoupon.domIntCtgrCd == "D") {
					$(".itinerary.multiCourse").find(".sec.departure").eq(0).find("[name=arrCity]").find("li>input").each(function(i, v) {
						$(v).parent().removeClass('disable');
						if ($(v).attr("country")!="KOR") {
							$(v).parent().addClass('disable');
						}
					});
				}
			}

			if (boundOffCode[1].split(",")[0] != "ALL") {
				$(".itinerary.multiCourse").find(".sec.departure").eq(1).find(".srmy strong").attr("city", boundOffCode[1].split(",")[0]);
				$.each(cityAirport.departureAirportList, function(i, v) {
					$.each(v.airportList, function(j, o) {
						if (o.iataCityAirportCode == boundOffCode[1].split(",")[0]) { // 코드 변경
							$(".itinerary.multiCourse").find(".sec.departure").eq(1).find(".srmy strong").attr("country", o.countryCode);
							return false;
						}
					});
				});
				$(".itinerary.multiCourse").find(".sec.departure").eq(1).find(".srmy").addClass("setting");
				$(".itinerary.multiCourse").find(".sec.departure").eq(1).find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			}
			else {
				//보너스 쿠폰 사용 시 국내선만 사용할 경우 적용
				if (bonusCoupon.domIntCtgrCd == "D") {
					$(".itinerary.multiCourse").find(".sec.departure").eq(1).find("[name=depCity]").find("li>input").each(function(i, v) {
						$(v).parent().removeClass('disable');
						if ($(v).attr("country")!="KOR") {
							$(v).parent().addClass('disable');
						}
					});
				}
			}

			if (boundOffCode[1].split(",")[1] != "ALL") {
				$(".itinerary.multiCourse").find(".sec.destination").eq(1).find(".srmy strong").attr("city", boundOffCode[1].split(",")[1]);
				$.each(cityAirport.departureAirportList, function(i, v) {
					$.each(v.airportList, function(j, o) {
						if (o.iataCityAirportCode == boundOffCode[1].split(",")[1]) { // 코드 변경
							$(".itinerary.multiCourse").find(".sec.destination").eq(1).find(".srmy strong").attr("country", o.countryCode);
							return false;
						}
					});
				});
				$(".itinerary.multiCourse").find(".sec.destination").eq(1).find(".srmy").addClass("setting");
				$(".itinerary.multiCourse").find(".sec.destination").eq(1).find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			}
			else {
				//보너스 쿠폰 사용 시 국내선만 사용할 경우 적용
				if (bonusCoupon.domIntCtgrCd == "D") {
					$(".itinerary.multiCourse").find(".sec.departure").eq(1).find("[name=arrCity]").find("li>input").each(function(i, v) {
						$(v).parent().removeClass('disable');
						if ($(v).attr("country")!="KOR") {
							$(v).parent().addClass('disable');
						}
					});
				}
			}

			/*$(".itinerary.multiCourse").find(".sec.departure").eq(0).find(".srmy strong").attr("city", boundOffCode[0].split(",")[0]);
			$(".itinerary.multiCourse").find(".sec.departure").eq(1).find(".srmy strong").attr("city", boundOffCode[1].split(",")[0]);
			$(".itinerary.multiCourse").find(".sec.destination").eq(0).find(".srmy strong").attr("city", boundOffCode[0].split(",")[1]);
			$(".itinerary.multiCourse").find(".sec.destination").eq(1).find(".srmy strong").attr("city", boundOffCode[1].split(",")[1]);
			$(".itinerary.multiCourse").find(".sec.departure").find(".srmy").addClass("setting");
			$(".itinerary.multiCourse").find(".sec.departure").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			$(".itinerary.multiCourse").find(".sec.destination").find(".srmy").addClass("setting");
			$(".itinerary.multiCourse").find(".sec.destination").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');*/

			$.each(cityAirport.departureAirportList, function(i, v) {
				$.each(v.airportList, function(j, o) {
					if (o.iataCityAirportCode == boundOffCode[0].split(",")[0]) {
						$(".itinerary.multiCourse").find(".sec.departure").eq(0).find(".srmy strong").text(o.cityAirportName);
					}
					if (o.iataCityAirportCode == boundOffCode[0].split(",")[1]) {
						$(".itinerary.multiCourse").find(".sec.destination").eq(0).find(".srmy strong").text(o.cityAirportName);
					}
					if (o.iataCityAirportCode == boundOffCode[1].split(",")[0]) {
						$(".itinerary.multiCourse").find(".sec.departure").eq(1).find(".srmy strong").text(o.cityAirportName);
					}
					if (o.iataCityAirportCode == boundOffCode[1].split(",")[1]) {
						$(".itinerary.multiCourse").find(".sec.destination").eq(1).find(".srmy strong").text(o.cityAirportName);
					}
				});
			});

		} else { //왕복, 편도
			$(".itinerary:not(.multiCourse)").show().siblings(".itinerary").hide();

			//여정
			var origin = boundOffCode[0].split(",")[0];
			var destination = boundOffCode[0].split(",")[1];
			if ($("#origin1").val() == "") {
				$(".itinerary:not(.multiCourse)").find(".sec.date").find(".srmy").removeClass("setting");
				$(".itinerary:not(.multiCourse)").find(".sec.date").find(".srmy strong").text("");
			}

			//출발지 적용
			if (origin != "ALL") {
				$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy strong").attr("city", origin);
				$.each(cityAirport.departureAirportList, function(i, v) {
					$.each(v.airportList, function(j, o) {
						if (o.iataCityAirportCode == origin) { // 코드 변경
							$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy strong").attr("country", o.countryCode);
							return false;
						}
					});
				});
				//$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy").addClass("setting");
				setCity($(".itinerary:not(.multiCourse)").find(".sec.departure").find("[name=depCity]").find("li>input[value="+origin+"]"));
				$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			}
			else {
				//보너스 쿠폰 사용 시 국내선만 사용할 경우 적용
				if (bonusCoupon.domIntCtgrCd == "D") {
					$(".itinerary:not(.multiCourse)").find(".sec.departure").find("[name=depCity]").find("li>input").each(function(i, v) {
						$(v).parent().removeClass('disable');
						if ($(v).attr("country")!="KOR") {
							$(v).parent().addClass('disable');
						}
					});
				}
			}

			if (destination != "ALL") {
				$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy strong").attr("city", destination);
				$.each(cityAirport.departureAirportList, function(i, v) {
					$.each(v.airportList, function(j, o) {
						if (o.iataCityAirportCode == destination) { // 코드 변경
							$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy strong").attr("country", o.countryCode);
							return false;
						}
					});
				});
				$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy").addClass("setting");
				$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			}
			else {
				//보너스 쿠폰 사용 시 국내선만 사용할 경우 적용
				if (bonusCoupon.domIntCtgrCd == "D") {
					$(".itinerary:not(.multiCourse)").find(".sec.destination").find("[name=arrCity]").find("li>input").each(function(i, v) {
						if (origin == "ALL") {
							$(v).parent().removeClass('disable');
						}
						if ($(v).attr("country")!="KOR") {
							$(v).parent().addClass('disable');
						}
					});
				}
			}

			/*$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy strong").attr("city", origin);
			$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy").addClass("setting");
			$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');
			$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy strong").attr("city", destination);
			$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy").addClass("setting");
			$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy.setting a").prop('onclick',"javascript:;").off('click');*/

			$.each(cityAirport.departureAirportList, function(i, v) {
				$.each(v.airportList, function(j, o) {
					if (o.iataCityAirportCode == origin) {
						$(".itinerary:not(.multiCourse)").find(".sec.departure").find(".srmy strong").text(o.cityAirportName);
					}
					else if(o.iataCityAirportCode == destination){
						$(".itinerary:not(.multiCourse)").find(".sec.destination").find(".srmy strong").text(o.cityAirportName);
					}
				});
			});

			if (bonusCoupon.itnTypCd == "OW") {
				//편도일 경우 화면 컨트롤
				$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").hide();
				$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy strong").text("");
				$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").removeClass("setting");
				$(".itinerary:not(.multiCourse) .date div:eq(1)").find(".srmy").addClass("choice");

			} else {
				//왕복일 경우 화면 컨트롤
				$(".itinerary:not(.multiCourse)").find(".date div:eq(1)").show();
			}
		}

		$(".bonus>a").attr("onclick","");
		$(".bonus>a").unbind("click");
		$(".bonus>a").text($.i18n.prop('hom.ibe.rsv.lbl.167'));
		$(".bonus>a").bind("click",function(){
			document.location.reload();
		});

		//탑승객 정보 화면의 회원정부 수정 가능 체크박스 제어
		if ($("#passenger")) {
			$("#passenger").prop("disabled",true);
		}
	}
}

//소아와 유아의 DOB 조건을 비교해서 true/false를 반환
function reissueDobCheck(){
	var result = true;
	if(cityAirport.paxDetailList)
	{
		$.each(cityAirport.paxDetailList, function(i, v) {
			result = dobCheck($("#domIntType").val(),v.guestType,v.birth,$("#travelDate1").val(),$("#travelDate2").val());
		});
	}
	return result;
}

//guestDetail->paxDetail에 담기
function setPaxDetail(obj){
	cityAirport.paxDetailList = obj;

	$.each(cityAirport.paxDetailList, function(i, v) {
		v.birth = dateFormating(v.dateOfBirth,"yyyyMMdd");
	});
}

//출도착 공항 유효성 검사
function chkDepArrCity(dep, arr){
	var result = false;
	$.each(cityAirport.departureAirportList, function(i, v) {
		$.each(v.airportList, function(j, o) {
			if (o.iataCityAirportCode == dep) {
				depCode = o.departureSeq;
				return;
			}
		});
	});
	var depCodeList = new Array();
	$.each(cityAirport.arrivalAirportList, function(i, v) {
		$.each(v.airportList, function(j, o) {
			if (o.iataCityAirportCode == arr) {
				$.each(o.parentDepSeqList, function(q, p) {
					if (p == depCode) {
						result = true;
					}
				});
			}
		});
	});

	// 예외사항
	if( (dep == "ICN" && arr == "CJU") || (dep == "CJU" && arr == "ICN") ) {
		result = true;
	}

	return result;
}

//보너스 쿠폰을 적용했을 경우 데이터를 읽어옴
function getBonusInfo(){

	var frm = $('#registerform');
	var frm_cpnNo = frm.find(':input[name=cpnNo]').val();
	var jsonData = {cpnNo : frm_cpnNo};

	$.ajax({
		type	: "POST",
		url		: "/booking/bonusJson",
		data	: JSON.stringify(jsonData),
		dataType: "json",
		contentType : "application/json; charset=UTF-8",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success	: function(data) {
			if (data && data.result) {
				bonusCoupon = data.result.bonusCoupon[0];
				bonusCouponEmbargo = data.result.bonusCouponEmbargo;
				setCoupon();
				setUpDownBtn();
				var path = window.location.pathname;
				if(path == "/booking/payReservation"){
					checkBonusCoupon();
				}
			}
		},
		error : function(data) {
			hideLoading();
			try {
				var errorMsg = JSON.parse(data.responseText);
				alertLayer(errorMsg.errorMessage);
			}
			catch(e) {
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		},
		complete : function() {
		}
	});
}


//소아/유아 레이어
var zIndex = 1;
function showAgeLayer(obj){
	var target = $(obj).attr( 'href' );
	$(target).add($(target).find( '.popAgeLayer' )).show().css('z-index', zIndex++);
	$('.itinerary .member .scr').css( 'overflow-y', 'visible' );
}
function hideAgeLayer(obj){
	var target = $(obj).attr( 'href' );
	$(target).add($(target).find( '.popAgeLayer' )).hide();
	//$('.itinerary .member .scr').css( 'overflow-y', 'auto' );
}
