function setcity(self) {
/*
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
	}*/

	if ($(self).parent().hasClass("disable")) return false;

	var cityText = $(self).text();
	hideBooking(self);

	var arrCityCheck = $(self).parents(".sec").hasClass("destination");
	if (arrCityCheck) {
		var depCityCheck = $(self).parents(".sec").parent().find(".departure>p>a>strong").attr("city");
		if (!depCityCheck) {
			//alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.019')));
			return false;
		}
	}

	$(self).parents(".sec").find(".srmy").addClass("setting");
	$(self).parents(".sec").find(".srmy strong").text(cityText);
	$(self).parents(".sec").find(".srmy strong").attr("city", $(self).next().val());
	$(self).parents(".sec").find(".srmy strong").attr("country", $(self).next().attr("country"));
/*
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
	*/
}

