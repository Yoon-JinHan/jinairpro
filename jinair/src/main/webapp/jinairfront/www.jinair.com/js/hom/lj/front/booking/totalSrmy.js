
var srmyHeight = 0;

// 하단 바스켓 바인딩
function setBasketTotalSrmy() {
	try {
			
		var flightTax = 0;
		var fuelTax = 0;
		var basicTax = 0;
		var ssrSum = 0;
		
		// 하단 여정
		if (confirmPrice.itineraryList) {
			$("#basketSegment").html($('#basketSegmentTmp').render(confirmPrice.itineraryList));
		}
		
		// 하단 운임
		if (confirmPrice.chargeList) {
			$("#basketChargeByPax").html($('#basketChargeByPaxTmp').render(confirmPrice.chargeList));
			
			// 0:항공운임, 1:유류할증료, 2:세금
			flightTax = confirmPrice.chargeList[0].totalTax;
			fuelTax = confirmPrice.chargeList[1].totalTax;
			basicTax = confirmPrice.chargeList[2].totalTax;
			
			$("#flightTaxSum").text(currencyFormat(flightTax));
			$("#fuelTaxSum").text(currencyFormat(fuelTax));
			$("#basicTaxSum").text(currencyFormat(basicTax));
		}
		// 하단 부가서비스
		if (confirmPrice.ssrFareList) {
			$("#basketSSR").html($('#basketSSRTmp').render(confirmPrice.ssrFareList));
			
			ssrSum = doTheSum(getObjectValues(confirmPrice.ssrFareList, "amount"));
		}
		// 하단 부가서비스 sum
		if (confirmPrice.ssrFareList) {
			$("#basketSSRSummary").html($("#basketSSRSummaryTmp").render(confirmPrice.ssrFareList));
			
			// 세팅 전 모든 count를 제거한다.
			$('#totalSrmy').find('ul.extras > li').find("em").remove();
			
			$.each(confirmPrice.ssrFareList, function (i, l) {
				var ssrSum = getObjectValues(l.segmentSSRFareList, "amount").length;
				if(l.ssrCode == 'KAL LOUNGE'){
					l.ssrCode = 'LOUNGE';
				}
				$("#" + l.ssrCode + "Sum").find("em").remove();
				if (ssrSum > 0) {
					$("#" + l.ssrCode + "Sum").append("<em>" + ssrSum + "</em>")
				}
			});
		}
		
		// currency
		$("text[currency], em[currency]").text(confirmPrice.currency);
		
		// total
		var totalcharge = doTheSum([flightTax, fuelTax, basicTax, ssrSum]);
		//$("#totalCharge").text(currencyFormat(totalcharge));
		
	}
	catch(e) {
		// nothing
		//console.log(e);
	}
}

// 다음btn 이벤트
function nextStep(obj) {
	// totalSrmy영역과 같은 레벨에 [btnArea > a]가 같은 동작을 하는 버튼이다. 
	var btnArea = $(obj).parents('#totalSrmy').prev();
	if (btnArea.length > 0) {
		$(btnArea).find('a').click();
	}
}
function showMySrmy() {
	if ($(".bgLayer2").size() == 0) {
		$("#wrapper").append("<div class='bgLayer2'></div>");
	}
	$(".bgLayer2").fadeToggle(150);
	srmyHeight = $(window).height() - $("#totalSrmy .price").height();
	$(".mySrmy .wrap").css("max-height", srmyHeight + "px");
	$(".mySrmy").slideToggle(150);
	$("#totalSrmy").toggleClass("on");
}
function showSrmyDetail(obj){
	var state = $(obj).parent().hasClass("minus");
	var $detail = $(obj).parent().next(".detail");
	if(!state){
		$(obj).parent().addClass("minus");
		$detail.show();
		var dTop = $detail.position().top;
		$detail.parents(".scr").animate({scrollTop:dTop}, 150, "easeInOutQuint");	
	} else {
		$(obj).parent().removeClass("minus");
		$detail.hide();
		$detail.parents(".scr").animate({scrollTop:0}, 150, "easeInOutQuint");
	}
}
//항공편안내 레이어팝업
function showFlight(obj){
	var $target = $(obj).parents(".flightDetail").find(".popFlight");
	$(".flightDetail").find(".popFlight").not($target).hide();
	$target.toggle();
	$(obj).parents(".flightListM").toggleClass("on");
}
function hideFlight(){
	$(".popFlight").hide();
}

//tax 관련 js 추가 
function showTax(obj){
	var target = $(obj).attr( 'href' );
	$(obj).parent().toggleClass( 'on' );
	$(target).add($(target).find( '.detail_info' )).toggle();
}

$(document).on("click focusin", function (e) {
	if ($(".mySrmy").is(":visible")) {
		if (!($(e.target).parents("#totalSrmy").length)) {
			$(".bgLayer2").hide();
			$(".mySrmy").hide();
			$("#totalSrmy").removeClass("on");
		}
	}
});
