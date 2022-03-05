// confirmPrice
var confirmPrice;

// 화면에 표출되는 segment seq 가져오기
$.views.converters("getSegmentSeq", function (val) {
	var segmentOboj = getObjects(confirmPrice.segmentDetailList, "segmentId", val);
	return segmentOboj[0].segmentSEQ;
});
// 구간 정보 가져오기 by segmentId
$.views.converters("getSegmentDataBySegmentId", function (val, name) {
	var segmentOboj = getObjects(confirmPrice.segmentDetailList, "segmentId", val);
	return segmentOboj[0][name];
});
// 구간 정보 가져오기
$.views.converters("getSegmentInfo", function (key, val, index, name) {
	var segmentOboj = getObjects(confirmPrice.segmentDetailList, key, val);
	return segmentOboj[index][name];
});
// 승객 이름 가져오기
$.views.converters("getPaxName", function (val) {
	return getObjects(confirmPrice.paxDetailList, "guestId", val)[0].passengerName;
});
// 특정ssr id 기준 sum 반환
$.views.converters("getAmountSum", function (val) {
	var sum = 0;
	$.each(getObjectValues(val, "amount"), function (i, value) {
		sum += value;
	});
	return currencyFormat(sum);
});
// 금액표시
$.views.converters("getCurrenctyFormat", function (val) {
	return currencyFormat(val);
});
// tripType 가져오기
$.views.converters("getTripType", function (type) {
	var result = '';
	if (confirmPrice.tripType) {
		
		switch(confirmPrice.tripType) {
		case 'OW' : result = $.i18n.prop('hom.ibe.rsv.lbl.002');// 편도
		break;
		case 'MC' : result = $.i18n.prop('hom.ibe.rsv.lbl.003');// 다구간
		break;
		case 'RT' :
		default: result = $.i18n.prop('hom.ibe.rsv.lbl.001');	// 왕복
		break;
		}
	}
	return result;
});

// 상단 바스켓 바인딩
function setBasketQuickModify() {
	try {

		// 상단 여정, 탑승객수
		if (confirmPrice.itineraryList) {
			// ** priceBasketVO를 통해 들어온 데이터 바인딩
			
			// 상단 여정
			$("#basketFullSeg").html($("#basketFullSegTmp1").render(confirmPrice.itineraryList));
			
			// 상단 탑승객수
			if (confirmPrice.paxDetailList) {
				var paxSummary = {};
				$.each(confirmPrice.paxDetailList, function(i,l){
					var count = paxSummary[l.guestType];
					if (count == undefined) count = 0;				
					paxSummary[l.guestType] = count + 1;
				});

				var paxCountString = "";
				var cnt = 0;
				$.each(paxSummary, function(i,l){
					paxCountString += i + ' ' + l;
					if (++cnt < Object.keys(paxSummary).length) {
						paxCountString += ', ';
					}
				});
				$("#quickModify").find(".wrap > p.cont > em").text(paxCountString);
			}
		}
		else {
			$("#basketFullSeg").html($("#basketFullSegTmp2").render(confirmPrice.segmentDetailList));
			
			//탑승객수
			var adultCnt = 0;
			var childCnt = 0;
			var infantCnt = 0;
			
			$.each(confirmPrice.paxDetailList, function(i,l){
				switch (l.guestType) {
				case "ADULT":
					adultCnt = adultCnt+1;
					break;
				case "CHILD":
					childCnt = childCnt+1;
					break;
				case "INFANT":
					infantCnt = infantCnt+1;
					break;
				}
			});
			
			var paxCountString = "";
			// 탑승객 수 표시
			if (adultCnt > 0) {
				paxCountString += "성인 " + adultCnt;
				paxCountString += (childCnt > 0) ? ", " : ((infantCnt > 0) ? ", " : "");
			}
			if (childCnt > 0) {
				paxCountString += "소아 " + childCnt;
				paxCountString += (infantCnt > 0) ? ", " : "";
			}
			if (infantCnt > 0) {
				paxCountString += "유아 " + infantCnt;
			}
			
			$("#quickModify").find(".wrap>p.cont>em").text(paxCountString);
		}
	}
	catch(e) {
		// nothing
		//console.log(e);
	}
}

// 데이터 바인딩
function setDataBinding() {
	
	try {
	
		// 상단 바스켓 바인딩
		setBasketQuickModify();
		
		// 하단 바스켓 바인딩
		if (typeof setBasketTotalSrmy == 'function') {
			setBasketTotalSrmy();	
		}
	}
	catch(e) {
		// nothing
	}
}

function headerMinimize(){
	$("html, body").stop().animate({scrollTop:qTop}, 300, "easeInOutQuint");
}
