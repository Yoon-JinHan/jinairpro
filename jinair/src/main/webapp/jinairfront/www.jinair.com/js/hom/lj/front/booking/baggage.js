// baggage 데이터 가져오기
function getBaggageData() {
	
	var request = new Array();
	var extrasType = ExtrasType.baggage;
	
	$('#baggageSec').find('.bunchArea').find('.memberList').find('.member').each(function(idx, item) {
		
		// guestId
		var guestId = $(this).find('input[name="guestId"]').val();
		
		$(this).find('.line').each(function(idx, item) {
			
			// segmentId
			var segmentId = $(this).attr('segmentId');
			
			$(this).find('.srmyArea').each(function(idx, item) {
				
				// ssr code
				var ssrCode = $(this).find('input[name="ssrCode"]').val();
				var weight = $(this).find('input[name="weight"]').val();
				var unit = $(this).find('input[name="unit"]').val();
				
				if(ssrCode == undefined) return true;	// continue;
				
				var data = {
						extrasType: extrasType
						, extrasCode: ssrCode
						, segmentId: segmentId
						, guestId: guestId
						, weight: weight
						, unit: unit
				}
				
				request.push(data);
			});
		});
	});
	
	return request;
}

// baggage 데이터 저장하기
function saveBaggageData(successFunc) {
	
	var request = getBaggageData();
	
	$.ajax({
		type : "POST",
		url : "/booking/requestSsrJson",
		data : JSON.stringify({extrasItemList: request, extrasInfo: SeatRes}),
		dataType: "text",
		contentType	: "application/json; charset=UTF-8",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success : function(data) {
			
			if($("#domIntType").val() == "DOM") {
				hideLoading();
				showPopupLayer('/popup/additionalServices');
			} else {
				successFunc(data);
			}
			
		},
		error : function(data) {
			extrasError(data);
		}
	});
}

$(function() {
	
	// 선택완료btn 클릭 이벤트
	$('#baggageSec').find('.btnArea > a').click(function(e) {
		
		showLoading();
		
		saveBaggageData(function(data) {
			
			try {
				
				executeAfterExtrasService(data);
				moveNextAncillary();
			}
			catch(e) {
				extrasError(e);
			}
		});
		
		return false;
	});
});