var __page__ = __page__ || {};

__page__.initialize = function(params) {
	$('.promotionCode a.btnTypeA').click(function() {
		var promotionCode = $(':input[name=promotionCode]').val().toUpperCase();
		if(!promotionCode || promotionCode === $.i18n.prop('hom.ibe.ctn.rsv.019')) {
			alertLayer($.i18n.prop('hom.ibe.ctn.rsv.019'));
			return false;
		}

		$.ajax({
			type: 'get',
			url: '/popup/checkPromotionCode?promotionCode=' + promotionCode,
			dataType: 'json'
		}).done(function(data) {
			if(!data) {
				alertLayer("이벤트 기간이 아닙니다.");
				return;
			}

			if(promotionCode === "WHY15") {
				if(!isMobileOS) {
					alertLayer("모바일 전용 코드입니다");
					return false;
				}
			}

			var promotionInfo = data.cdXpln;
			if(promotionCode == "LANDFLY") {
				return promotionInfoPopup(2);
			} else if(promotionCode == "OCEANFLY") {
				return promotionInfoPopup(3);
			} else {
				var infoToHTML = !!promotionInfo ? promotionInfo.replace(/\n/gi, '<br>') : '';
				if(!!infoToHTML) {
					$("#promotionEx").html(infoToHTML);
					return promotionInfoPopup(1);
				}
			}

			$(parent.document).find('#registerform').find(':input[name=promoCode]').val(promotionCode);
			// 항공권 재조회
			parent.getAvailabilityList();
			hidePopupLayer();
		}).fail(function() {
			alertLayer("이벤트 기간이 아닙니다.");
		});
	});

	// 취소
	$('.promotionCode a.btnTypeB').click(function() {
		hidePopupLayer();
	});

	$('.promotionInfo a.btnTypeB').click(function() {
		hidePopupLayer();
	});

	$('.promotionInfo a.btnTypeA').click(function() {
		$(parent.document).find('#registerform').find(':input[name=promoCode]').val($(':input[name=promotionCode]').val().toUpperCase());
		// 항공권 재조회
		parent.getAvailabilityList();
		hidePopupLayer();
	});
};
