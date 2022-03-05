/** 의존성 jquery-1.10.2.min.js, decorator config */

function Chatbot(params) {
	/** 국문 외 언어일 경우, 챗봇 생성 안 함 */
	var isKorLangCd = typeof getCookie !== 'function' || (getCookie('foLangCd') === 'KOR');
	if(!isKorLangCd) {
		return;
	}


	Chatbot.channel = !params.isMobile ? 'PCW' : (params.accessChannel === 'MOA' ? 'MOA' : 'MOW');

	if(params.isMobile) {
		var restrictedPaths = [
			'/booking/getAvailabilityList',
			'/booking/registerPassenger',
			'/booking/extras',
			'/booking/payReservation'
		];

		var thisPath = location.pathname || '';
		for(var i = 0; i < restrictedPaths.length; i++) {
			var restrictedPath = restrictedPaths[i];
			if(thisPath.startsWith(restrictedPath)) {
				return;
			}
		}
	}

	$('[role="chatbot-parent"]').each(function() {
		var $parent = $(this);

		var type = $parent.data('type');
		$.get('/chatbot?type=' + type).then(function(data) {
			$parent.html(data);

			if(Chatbot.channel === 'PCW') {
				$( window ).scroll( function () {
					Chatbot.chatbotJs();
				});
				Chatbot.chatbotJs();

				function loop() {
					$('.btn .balloon').animate({top: -4}, 500);
					$('.btn .balloon').animate({top: 0}, 500, loop);
				}
				loop();
			}

			$parent.find('[role="open-chatbot"]').on('click', function() {
				var params = [];
				var username = $(this).data('username');
				if(!!username) {
					params.push('username=' + encodeURIComponent(username));
				}
				var userid = $(this).data('userid');
				if(!!username) {
					params.push('userid=' + encodeURIComponent(userid));
				}
				var locale = $(this).data('locale');
				if(!!locale) {
					params.push('locale=' + encodeURIComponent(locale));
				}

				Chatbot.show('https://jinairbot.azurewebsites.net/webChat.html?' + params.join('&'));
			});

			$parent.find('.close').on('click', function(e) {
				e.preventDefault();
				$parent.removeClass('full');
			});

			$('.chatbot_wrap').show();
		});
	});

	return this;
}

Chatbot.show = function(url) {
	if(Chatbot.channel !== 'MOA') {
		Chatbot.chatbotPop(url, '', '600', '800', 'no');
	} else {
		Chatbot.showChat(url);
	}
};

/** window open */
Chatbot.chatbotPop = function( url, name, w, h, s, l, t, e ) {
	var ex = null, features = 'width=' + w + ', height=' + h + ', left=' + l + ', top=' + t + ', scrollbars=yes, resizable=no, menubar=no, status=no';
	try {
		ex = e || window.event;
		ex.returnValue = false;
	} catch ( excp ) {}

	window.open ( url, name, features );
};

/** layer open */
Chatbot.showChat = function(popSrc) {
	if($(".bgLayer2").is(":visible")) {
		$(".bgLayer").css("z-index", "113");
	} else {
		$(".bgLayer").css("z-index", "100");
	}

	var popTop = $(window).height() / 2 + $(document).scrollTop();

	$("#wrapper").append(
		  '<div class="popLayer" id="popLayerChatbot" style="z-index:199; top:' + popTop + 'px; width:800px; height:800px;">'
		+ ' <iframe src="' + popSrc +'" width="100%" height="100%" frameborder="0" allowTransparency="true" scrolling="no" id="iframePopLayerChatbot"></iframe>'
		+ ' <p class="close" style="top:6px; margin-right:-12px;"><a href="#" onclick="Chatbot.hideChat(); return false;"><span>Close</span></a></p>'
		+ '</div>'
	);

	$(".bgLayer").css("height", $(document).height() + "px").show();
	$("#popLayerChatbot").show();
	$("html").css("overflow", "hidden");

	var popMargin = parseInt(parent.$(".popLayer").css("margin-top"));
	if(0 > popMargin) {
		popMargin	= 20;
	}

	$("#popLayerChatbot").css("top", ($(window).height() / 2 + $(window).scrollTop()) + "px");
	$("#popLayerChatbot").css("margin-top", "-" + (800 / 2) + "px");

	if($(window.parent).width() <= 740) {
		$('#popLayerChatbot').height('100%');
		$('#popLayerChatbot').find('.close').css('top', 0).css('margin-right', 0);
	}

	var pWidth = 600;
	if(pWidth > $(window).width() - 40) {
		pWidth = $(window).width() - 40;
	}

	$("#popLayerChatbot").width(pWidth).css("margin-left", "-" + pWidth / 2 + "px");

	var popHeight = $(window).height() - (popMargin * 2);

	if(800 >= popHeight) {
		$("#popLayerChatbot, #iframePopLayerChatbot").height(popHeight);
		$("#popLayerChatbot").css("top", $(window).scrollTop() + "px").css("margin-top", popMargin + "px");

		if ($(window).scrollTop() + 800 > $(".bgLayer").height()) { //반투명 BG 높이가 모자를때
			$(".bgLayer").height($(window).scrollTop() + 800 + 3);
		}
	}

	$("#popLayerChatbot").css("opacity", "1");
};

/** hide layer */
Chatbot.hideChat = function() {
	$("#popLayerChatbot").empty().remove();
	$(".bgLayer").hide();
	$("html").css("overflow", "visible");
};

Chatbot.chatbotJs = function() {
	if ( $( window ).scrollTop() + $( window ).height() - 124 < $( '.chatbot_wrap' ).offset().top ) {
		$( '.chatbot_wrap .box' ).addClass( 'fixed' )
	} else {
		$( '.chatbot_wrap .box' ).removeClass( 'fixed' )
	}
};