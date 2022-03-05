// seat 데이터 가져오기
function getSeatData() {
	
	var baseData = $('#seatSec').find('.slideCont').find('li.choice > a');
	var origin = $(baseData).attr('origin');
	var destination = $(baseData).attr('destination');
	var segmentId = $(baseData).attr('segmentId');
	
	// 사용자가 선택한 좌석정보
	var guestSeatDetailsList = new Array();
	
	$('.seatArea:visible').find('.member').each(function(idx, item) {
		
		var guestId = $(this).find('[name="guestId"]');
		var seatNum = $(this).find('[name="seatNum"]');
		
		if(seatNum.val() != '') {
			var data = { 
					seatNumbers: seatNum.val()
					, guestId: guestId.val()
			};
			
			guestSeatDetailsList.push(data);
		}
	});
	
	var dataList = {
		guestSeatDetails: guestSeatDetailsList
		, origin: origin
		, destination: destination
		, segmentId: segmentId
		, extrasInfo: SeatRes
	};
	
	return dataList;
}

// target 구간 선택
function selctSeatCurrrentSeg(target) {
	if (CheckExtras() == false) {
		return false;
	}
	showSection(target, 'seatArea');
	seatMap();
	
	// 구간을 클릭할 때마다 showSeatMap서비스 호출
	getSeatMap({
		segmentId: $(target).attr('segmentId')
		, extrasInfo: SeatRes
	});
	
	var qTop = $("#header").height();
	if (typeof qTop == 'number') {
		$("html, body").stop().animate({scrollTop : qTop}, 0, "easeInOutQuint");
	}
}

// seat 데이터 저장하기
function saveSeatData(successFunc) {
	if (CheckExtras() == false) {
		return false;
	}
	var dataList = getSeatData();
	
	$.ajax({
		type : "POST",
		url : "/booking/requestSeatJson",
		data : JSON.stringify(dataList),
		dataType: "text",
		contentType	: "application/json; charset=UTF-8",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success : successFunc,
		error : function(data) {
			extrasError(data);
		}
	});
}

$(function() {
	
	// 구간 클릭 이벤트
	$('#seatSec').find('.slideCont').find('li > a').click(function(e) {
		
		// 현재 선택되어 있는 상태라면 return;
		if($(this).parent().hasClass('choice')) {
			return false;
		}
		
		showLoading();
		
		// 현재 구간 선택
		var target = $(this);
		selctSeatCurrrentSeg(target);
		
		return false;
	});
	
	// 다음, 선택완료btn 클릭 이벤트
	$('#seatSec').find('.btnArea > a').click(function(e) {
		
		showLoading();
		
		// 데이터 저장하기
		saveSeatData(function(data) {
			
			try {

				executeAfterExtrasService(data);
					
				// 다음 구간으로 이동
				var target = $('#seatSec').find('.slideCont').find('li.choice').next('li').find('a');
				if (target.length > 0) {
					
					selctSeatCurrrentSeg(target);
					$('button.next:visible').click();
				}
				else {
					moveNextAncillary();
				}
			}
			catch(e) {
				extrasError(e);
			}
		});
		
		return false;
	});
});
