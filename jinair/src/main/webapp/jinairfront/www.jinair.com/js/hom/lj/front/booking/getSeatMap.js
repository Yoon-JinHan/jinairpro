//비상구열 체크 해체를 위해 전역변수로 빼둠
var id;
var idx;
var thisIs;
var thisIsParent;

$(function() {
	
	// 좌석 클릭 이벤트
	$('#seatSec').find('.map').find('li > a').click(function(e) {

		// marking, completing은 기존 사용자가 선택한 데이터를 바인딩하기 위한 표시
		if ($(this).parent('li').hasClass('marking') || $(this).parent('li').hasClass('completing')) return;

		// 좌석을 모두 선택하면 -> return
		id = $(this).parents(".seatArea").attr('id');
		idx = id.substring(id.length, id.length - 1) - 1;
		if(isSeatAll[idx]) return;

		// choice된 좌석 -> return
		if ($(this).parent('li').hasClass('choice') == true) return;

		// 탑승객이 유아가 동반되어 있는 성인인 경우 : 유닛당 제한 인원
		// 좌석을 클릭한 사용자가 유아를 동반한 성인일 경우만 처리함
		if ($(this).parents('.seatArea').find('.memberList').find('.member.choice').find('p.child').length > 0) {
		
			var valid = false;
			var airType = $(this).parents('.map').find('input[name="airType"]').val();
			var externalRowNumber = $(this).attr('externalRowNumber');
			var externalColumnName = $(this).attr('externalColumnName');
			
			// 유아 동반 성인이 예약할 수 있는 기종별 유닛정보
			var item = ExtrasUnitInfoForWithInfants[airType];
			
			// 사용자가 선택한 좌석의 유닛 조회
			var unit = [];
			$.each(item, function(idx, arr) {

				// 좌석 (ex. A, B, C etc)
				if(arr.indexOf(externalColumnName) > -1) {
					unit = arr;
					return false;	// break;
				}
			});
			
			// b777기종 && 특정 좌석의 열만 체크한다.
			if (unit.length == 0) {
				if (airType == 'b777') {
					
					var iRowNum = parseInt(externalRowNumber);
					var sSeat = ExtrasUnitInfoForWithInfants['b777_RowNumber'];
					if (sSeat.indexOf(iRowNum) > -1) {
					
						$.each(ExtrasUnitInfoForWithInfants['b777_ColName'], function(idx, arr) {
		
							// 좌석 (ex. A, B, C etc)
							if(arr.indexOf(externalColumnName) > -1) {
								unit = arr;
								return false;	// break;
							}
						});
					}
				}
			}

			if (unit.length > 0) {
				
				var paxCount_I = 0;
				var objSeat = $(this);
				
				// 유닛별 좌석의 AllocatedPassengerType를 확인한다.
				$.each(unit, function(idx, name) {
					
					var seatNum = externalRowNumber + name;
					var seat = $(objSeat).parents('ol').find('a[data=' + seatNum + ']');
					
					// allocatedPassengerType가 'I'인 좌석
					var allocatedPassengerType = $(seat).parent().attr('allocatedPassengerType');
					if (allocatedPassengerType == 'I') {
						
						paxCount_I++;
					}

					// 현재 사용자의 AllocatedPassengerType를 확인한다.
					// --> 선택 되어진 좌석이 '유아를 동반한 성인'인지 확인한다.
					if ($(seat).parent().hasClass('choice')) {
						
						var guestObj = $('.seatArea:visible').find('.member').find('input[name="seatNum"][value="' + seatNum + '"]');
						if ($(guestObj).length > 0) {
							
							if ($(guestObj).parents('.member').find('p.child').length > 0) {
								paxCount_I++;
							}
						}
					}
				});

				// unit당 수용 가능한 infant 수
				var maximumInfantsPerUnit = $(this).parents('.map').find('input[name="maximumInfantsPerUnit"]').val();
				if (maximumInfantsPerUnit == undefined) {
					maximumInfantsPerUnit = 0;
				}
				
				// 탑승객_I count < 수용가능 count
				if (paxCount_I < parseInt(maximumInfantsPerUnit)) {
					valid = true;
				}
			}
			else {
				
				// 유아를 동반하신 고객은 선택할 수 없습니다. 고객센터에 문의하시기 바랍니다.
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.031'));
				
				// 다른 이벤트(booking.js) 동작 중단
				e.stopImmediatePropagation();
				e.preventDefault();
				
				return;
			}
			
			if (valid == false) {
				
				// 해당 열에는 이미 유아가 배정되어 있습니다.
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.018'));
				
				// 다른 이벤트(booking.js) 동작 중단
				e.stopImmediatePropagation();
				e.preventDefault();
				
				return;
			}
		}
		
		// 비상구 좌석의 경우 메시지
		var seatNumber = $(this).attr('data');
		var guestId = $('.seatArea:visible').find('.member.choice').find('input[name="guestId"]').val();
		//var guestType = $('.seatArea:visible').find('input[name="guestId"][value="' + guestId + '"]').parent().find('input[name="guestType"]');
		var guestType = $('.seatArea:visible').find('.member.choice').find('input[name="guestType"]').val();
		var underfiftnAdultYN = $('.seatArea:visible').find('.member.choice').find('input[name="underfiftnAdultYN"]').val();
		var airType = $(this).parents('.map').find('input[name="airType"]').val();
		if(seatNumber == "38B" || seatNumber == "38C" || seatNumber == "41B" || seatNumber == "41C"
			|| (airType != undefined && airType == 'b739' && (seatNumber == "35B" || seatNumber == "35C"))) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.083')); // 선택하신 좌석은 교통약자에게 우선 배정되는 좌석으로 구매 후 교통약자의 요청이 있을 시 좌석이 변경될 수 있습니다.
		}
		
		// 비상구 좌석
		if($(this).attr('type') == 'JEST' || $(this).attr('type') == 'JRST') {
			// 유아동반 성인
			var withInfant = $(this).parents('.seatArea').find('.memberList').find('.member.choice').find('p.child').length > 0;
			// 소아동반 성인
			var withChild = $("#seat1 > div.memberList").find('input[name=guestType]').filter(function(i){
								return $(this).val() == 'CHILD';
							}).size() > 0;

			if (withInfant || withChild ||underfiftnAdultYN == "Y") {
				//만 15세 미만 승객 또는 유소아 동반 예약건은 비상구좌석 구매가 불가합니다.
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.085'));
			}else{
				// 비상구 좌석 지정 시 유희사항 안내 팝업
				showPopupLayer('/popup/exitInfo');
			}
			thisIs = $(this);
			thisIsParent = $(this).parents(".seatArea");
			var t = e;
			// 다른 이벤트(booking.js) 동작 중단
			e.stopImmediatePropagation();
			e.preventDefault();
			return;
		}
	});	
});

function chkExitSeat() {
	if(!thisIs.parents("li").hasClass("disable") && !thisIs.parents("li").hasClass("choice")){
		// 28ABC 석 추가 팝업 안내
		if(thisIs.attr("data") == "28A" || thisIs.attr("data") == "28B" || thisIs.attr("data") == "28C"){
			//28ABC 좌석은 항공기 기재 운용에 따라 전면 격벽 유무가 상이할 수 있습니다.
			alertLayer($.i18n.prop("hom.seat.exitInfo.popup0"));
		}

		if(!isSeatAll[idx]){
			$thisMember = thisIsParent.find(".memberList .member.choice");
			if($thisMember.hasClass("entry")){
				var seatNum = $thisMember.find("input[name=seatNum]").val();
				$(".seatArea:visible .seatMap .map li").each(function(){
					if(thisIs.find("a").attr("data") == seatNum){
						thisIs.removeClass("choice");
					}
				});
			}					
			thisIs.parent("li:not(.disable)").addClass("choice");
			$thisMember.find(".srmy").empty().append('<p class="text"><em>'+thisIs.attr("data")+'</em></p><a href="#" onclick="delSeat(this);return false" class="del">취소</a>');
			//$thisMember.find(".srmy").next(".price").empty().append('<span class="unit">KRW</span> <strong>15,000</strong>');
			
			// customizing start
			var amount = thisIs.find('input[name="amount"]');
			var currency = thisIs.find('input[name="currency"]');
			if(amount.length > 0 && currency.length > 0) {
				$thisMember.find(".srmy").next(".price").empty().append('<span class="unit">' + currency.val() + '</span> <strong>' + amount.val() + '</strong>');	
			}
			else {
				$thisMember.find(".srmy").next(".price").empty();
			}
			$thisMember.find("input[name=price]").val(amount.val());
			// customizing end
			
			$thisMember.find("input[name=seatNum]").val(thisIs.attr("data"));
			$thisMember.addClass("entry");
			if($thisMember.siblings().size() > 0){
				$thisMember.siblings().each(function(){
					if(!$(this).hasClass("entry")){ //선택안한 탑승객 있으면 자동 포커싱
						$thisMember.add($thisMember.find(".srmy")).removeClass("choice");
						$(this).add($(this).find(".srmy")).addClass("choice");
						allChoice = false;
						return false;
					} else {
						allChoice = true;
					}
				});		
			} else {
				allChoice = true;
			}
			if(allChoice){ //탑승객 모두 좌석선택 후에 버튼 플로팅
				btnFloating(thisIs);
				isSeatAll[idx] = true;
			} 
		}
	}
}

//좌석 안내 레이어 JS 추가
$(function(){
	$( '.seat_guide button' ).on( 'click', function(){
		$( '.layer_seatInfo' ).show();
		return false;
	});

	$( '.layer_seatInfo .layer_close' ).on( 'click', function(){
		$( '.layer_seatInfo' ).hide();
		return false;
	});
});