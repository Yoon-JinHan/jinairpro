/**
 * 
 */
var	console	= window.console || {log:function(){}};

$(function(){
	/* placeholder */
	$('[placeholder]').focus(function() {
	    var input = $(this);
	    if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	})
	.blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	})
	.blur().parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
	});

	$("#wrapper").append("<div class='bgLayer'></div>");

	if($(".subNav").is(":visible")){
		var subTop = $(".subNav").offset().top;
		$("html, body").stop().animate({scrollTop:subTop}, 300, "easeInOutQuint");
	}

	//before gnb 주석
	/*if($(".menuPage").is(":visible")){
		$(".menuPage #gnb >li >a").on("click", function(){
			hideNav($(this).parent().siblings());
			showNav($(this).parent());
		}).on("mouseleave focusout", function(){
			//hideNav($(this));
		});
	}*/

	//renewal gnb
	$( "#gnb > li > a" ).on( "click", function(){
		hideNav($(this).parent().siblings());
		showNav($(this).parent());
	}).on( "mouseleave focusout", function(){
		//hideNav($(this));
	});

	//서브네비 모바일용(before gnb 주석)
	/*$(".sub li >a").on("click", function(){
		if($(window).width() <= 640){
			if($(this).hasClass("icoFold")){
				$(this).toggleClass("on");
				$(this).parent("li").find("ul").slideToggle(100);
				return false;
			}
		}
	});*/

	//datepicker
	$(".datepicker").datepicker({
		showOn: "both",
		buttonImage: "/images/common/ico_calendar.png",
		changeMonth: true,
		changeYear: true
    }).focus(function(){
    	$(this).blur();
    });


	if($(".tabArea .choice").find(".desc").size() <= 0){
		$(".tabArea .choice").prepend('<span class="desc">선택</span>');
	}

	//renewal mobile gnb : s
	$( ".gnb_m_open" ).on("click", function(e) {
		e.preventDefault();
		var t_height = $(document).height();
		$( ".m_gnb_wrap" ).stop().animate({right: "0"}, 300);
		$('.m_gnb_bg').css({opacity: "0.4", display: "block"});
		$( "html, body" ).css( {overflow: "hidden", height: "auto"} );

		//resize
		$(window).resize(function() {
			if ( $(window).width() <= 640 ) {
				$( "html, body" ).css( {overflow: "hidden", height: "auto"} );
			} else {
				$( "html, body" ).css( {overflow: "visible", height: "100%"} );
			}
		});
	});

	$( ".gnb_m_close" ).on("click", function(e) {
		e.preventDefault();
		$( ".m_gnb_wrap" ).stop().animate({right: "-100%"}, 300);
		$('.m_gnb_bg').css({opacity: "0", display: "none"});
		$( "html, body" ).css( {overflow: "visible", height: "100%"} );
	});

	$( ".m_gnb_wrap #m_gnb > li > a" ).on("click", function(e){
		e.preventDefault();
		$(this).parent().addClass( "on" ).find( ".m_sub" ).slideToggle().end().siblings().removeClass( "on" ).end().siblings().find( ".m_sub" ).slideUp();
		return false;
	});
	//renewal mobile gnb : e

});

browser = (function(){
	var a = navigator.userAgent.toLowerCase();
	var b,v;
	if(a.indexOf("safari/") > -1) {
		b = "safari";
		var s = a.indexOf("version/");
		var l = a.indexOf(" ", s);
		v = a.substring(s+8, l);
	}
	if(a.indexOf("chrome/") > -1) {
		b = "chrome";
		var ver = /[ \/]([\w.]+)/.exec(a)||[];
		v = ver[1];
	}
	if(a.indexOf("firefox/") > -1) {
		b = "firefox";
		var ver = /(?:.*? rv:([\w.]+)|)/.exec(a)||[];
		v = ver[1];
	}
	if(a.indexOf("opera/") > -1) {
		b = "opera";
		var ver = /(?:.*version|)[ \/]([\w.]+)/.exec(a)||[];
		v = ver[1];
	}
	if((a.indexOf("msie") > -1) || (a.indexOf(".net") > -1)) {
		b = "msie";
		var ver = /(?:.*? rv:([\w.]+))?/.exec(a)||[];
		if(ver[1])
		 v = ver[1];
		else{
		 var s = a.indexOf("msie");
		 var l = a.indexOf(".", s);
		 v = a.substring(s+4, l);
	 }
}
return { name: b || "", version: v || 0};
}());

var subHeight = 0;
function showNav(obj){
	if($(obj).find(".sub").is(":visible")){
		hideNav(obj);
	} else {
		subHeight = $(window).height() - parseInt($(obj).find(".sub").css("top"));
		$(obj).find(".sub").css("max-height", subHeight + "px");
		$(obj).addClass("over");
		$(obj).siblings("li.on").addClass("off");
		$(obj).find(".sub").stop().slideDown(100, function(){
			if($(".bgLayer2").is(":visible")){
				$(".bgLayer2").show();
			} else {
				$("#wrapper").append("<div class='bgLayer2'></div>");
				$(".bgLayer2").show();

				//renewal gnb resize
				$(window).resize(function() {
					if ( $(window).width() <= 640 ) {
						$(".bgLayer2").hide();
					} else {
						$(".bgLayer2").show();
					}
				});

			}
			$("#header").addClass("over");
		});
		//before resize 주석
		/*$(window).resize(function(){
			subHeight = $(window).height() - parseInt($(obj).find(".sub").css("top"));
			$(obj).find(".sub").height(subHeight);
		});*/
	}
}

function hideNav(obj){
	$(obj).removeClass("over");
	$(obj).siblings("li.off").removeClass("off");
	if($(window).width() <= 640){
		if($(obj).find(".sub li ul").is(":visible")){
			$(obj).find(".sub li ul").hide();
			$(obj).find(".sub li .icoFold").removeClass("on");
		}
	}
	$(obj).find(".sub").stop().slideUp(50);
	$(".bgLayer2").remove();
	$("#header").removeClass("over");
}

//모바일 더보기
function showBookingMenu(){
	if($(".bookingQuick ul").is(":visible")){
		hideBookingMenu();
	} else {
		$(".bookingQuick ul").stop().slideDown(100, function(){
			if($(".bgLayer2").is(":visible")){
				$(".bgLayer2").show();
			} else {
				$("#wrapper").append("<div class='bgLayer2'></div>");
				$(".bgLayer2").show();
			}
			$("#header").addClass("over");
		});
	}
}
function hideBookingMenu(){
	$(".bookingQuick ul").stop().slideUp(50);
	$(".bgLayer2").remove();
	$("#header").removeClass("over");
}

function setCycle(obj, fx, targetID, speed, timeout, before, after, func){
	if(func){
		func();
	}
	$(obj).find(".list").cycle({
		fx: fx,
		speed: speed,
		timeout: timeout,
		slideExpr : "li",
		prev : $(obj).find(".prev"),
		next : $(obj).find(".next"),
		pager : $(obj).find(".nav"),
		activePagerClass: 'on',
		pagerAnchorBuilder: function(idx) {
			idx = idx+1;
	        return '<li><a href="#'+targetID+idx+'">'+ idx +'</a></li>';
	    },
	    before : before,
	    after : after
	});
	$(obj).find(".control .pause").on("click", function(){
		$(obj).find(".list").cycle("pause");
		$(obj).find(".control .play").css("display", "inline-block").siblings(".pause").hide();
	});
	$(obj).find(".control .play").on("click", function(){
		$(obj).find(".list").cycle("resume");
		$(obj).find(".control .pause").css("display", "inline-block").siblings(".play").hide();
	});
}

function showSelBox(obj){
	var $target = $(obj).parents(".selBox");
	hideSelBox();
	if($target.find(".layer").is(":visible")){
		$target.removeClass("active focus").find(".srmy a").removeClass("on");
		$target.find(".layer").slideUp(50);
	} else {
		$target.addClass("active focus").find(".srmy a").addClass("on");
		$target.find(".layer").slideDown(100);
	}
}
function hideSelBox(){
	if($(".selBox .layer").is(":visible")){
		$(".selBox").removeClass("active focus").find(".srmy a").removeClass("on");
		$(".selBox .layer").slideUp(50);
	}
}

//탭 swiper 유무
var isTabSwiper = false;
$(window).on("load", function(){
	if($(".tabTypeA").is(":visible")){
		$(".tabTypeA").addClass("swiper-wrapper");
		$(".tabTypeA").find("li").addClass("swiper-slide");
		setTabSwiper();
		setTab();
		//FAQ
		if ($(".tabFaq .tabTypeA").is(":visible")) {
			$(".tabFaq .tabTypeA").css("transform", "translate3d(0, 0, 0)");
		}
	}
}).on("resize", function(){
	if($(".tabTypeA").is(":visible")){
		setTab();
	}
});

//FAQ
$(function(){
	$(".tabFaq .tabTypeA li:first-of-type").on("click", function() {
		$(".tabFaq .tabTypeA").css("transform", "translate3d(0, 0, 0)");
	});
});

var paddingTab= 0;
var tabSwiper;
function setTab(){
	var sumTab = 0;
	$(".tabTypeA li").each(function(){
		paddingTab = parseInt($(this).css("padding-left")) + parseInt($(this).css("padding-right"));
		sumTab = sumTab + ($(this).width()-1) + paddingTab;
	});

	if(sumTab > $(window).width()){
		$(".tabTypeA").removeClass("noSwipe");
		if(!isTabSwiper){
			setTabSwiper();
		}
		tabSwiper = new Swiper($(".tabTypeA").parents(".tabFaq"), {
			slidesPerView:'auto',
			centeredSlides: true
		});
	} else {
		$(".tabTypeA").addClass("noSwipe");
		if(isTabSwiper){
			tabSwiper.destroy(true, true);
			isTabSwiper = false;
		}
	}
	//FAQ
	if ($(window).width() < 641) {
		$(".tabFaq .tabTypeA").removeClass("noSwipe");
		if(!isTabSwiper){
			setTabSwiper();
		}
	} else {
		$(".tabFaq .tabTypeA").addClass("noSwipe");
		if(isTabSwiper){
			tabSwiper.destroy(true, true);
			isTabSwiper = false;
		}
	}
}
function setTabSwiper(){
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)){
		tabSwiper = new Swiper($(".tabTypeA").parents(".tabArea"), {
			slidesPerView:'auto'
		});
		$(".tabTypeA").find(".swiper-slide").each(function(){
			if($(this).hasClass("choice")){
				//tabSwiper.slideTo($(this).index(), 0);// 2018-08-29 수정 : 항공권 예매 기내식 탭 충돌
			}
		});
		isTabSwiper = true;
	}
}
function moveFaqTab(index){
	if (index > 0 && $(window).width() < 641) {
		tabSwiper.slideTo(index, 280);
	}
}
//리스트 행간 높이 통일
function setListHeight(obj, num){
	var $target = $(obj);
	var lineNum = 0;
	if(!num){
		num = $target.find("li").size();
	}

	$target.find("li a").removeAttr("style");

	$target.find("li").each(function(){
		lineNum = parseInt($(this).index() / num);
		$(this).addClass("line" + lineNum);
	});

	for(var idx = 0; idx < lineNum+1; idx++){
		var wHeight = 0;
		$target.find("li.line" + idx + " a").each(function(){
			if(wHeight < $(this).height()){
				wHeight = $(this).height();
			}
		});
		$target.find("li.line" + idx + " a").height(wHeight);
	}
}

function setListHeightReset(obj, num){
	var $target = $(obj);
	if(!num){
		num = $target.find("li").size();
	}
	$target.find("li").each(function(){
		lineNum = parseInt($(this).index() / num);
		$(this).removeClass("line" + lineNum);
		$(this).find("a").removeAttr("style");
	});
}

function goTop(){
	$("html, body").stop().animate({scrollTop:0}, 200, "easeInOutQuint");
}

function goContent(obj){
	var target = $(obj).attr("href");
	if($(".menuPageFix .menuPage").size() > 0){
		var contentTop = $(target).offset().top - $(".menuPageFix .menuPage #gnb").height();
	} else {
		var contentTop = $(target).offset().top;
	}
	$("html, body").stop().animate({scrollTop:contentTop}, 200, "easeInOutQuint");
}

var quickNavTop = 0, quickTop = 0, totalTop = 0, subNavTop = 0, menuPageTop = 0, cTop = 0, btnTop, quickHeight, totalHeight;
$(window).load(function(){
	if($(".quickNav").is(":visible")){
		quickNavTop = $(".quickNav").offset().top;
	}
	if($(".subNav").is(":visible")){
		subNavTop = $(".subNav").offset().top;
	}
	if($("#quickModify").is(":visible")){
		quickTop = $("#quickModify").offset().top;
	}
	if(!$(".extraArea").is(":visible")){ //부가서비스에서는 좌석 셋팅후에(ajax)
		if($("#totalSrmy").is(":visible")){
			totalHeight = $("#totalSrmy").height() + parseInt($("#totalSrmy").css("padding-top")) + parseInt($("#totalSrmy").css("padding-bottom"));
			totalTop = $("#totalSrmy").offset().top;
		}
	}
	if($(".menuPage #gnb").is(":visible")){
		menuPageTop = $(".menuPage #gnb").position().top + parseInt($(".menuPage #gnb").css("padding-top"));
	}
	$(".extraArea .btnArea:visible").each(function(){
		btnTop = $(this).offset().top;
	});
	floatingObj();
}).scroll(function(){
	floatingObj();
});

$(document)
.on("click focusin touchstart", function(e) {
	if($("#familyList").is(":visible")){
		if(!($(e.target).parents(".family").length)){
			$("#familyList").slideUp(100);
		}
	}
	if($("#gnb li .sub").is(":visible")){
		if(!($(e.target).parents("#gnb").length)){
			hideNav($("#gnb li.over"));
		}
	}
	if($(".shipAgree .subLayer").is(":visible")){
		if(!($(e.target).parents(".shipAgree").length)){
			hideSubLayer('.shipAgree');
		}
	}
	if($(".CStaiwan  .subLayer").is(":visible")){
		if(!($(e.target).parents(".CStaiwan ").length)){
			hideSubLayer('.CStaiwan');
		}
	}
});


function floatingObj(){
	if($(".quickNav").is(":visible")){
		if($(window).scrollTop() + $(window).height() - 67 < quickNavTop){
			if(!$("body").hasClass("quickNavFix")){
				$("body").addClass("quickNavFix");
			}
		} else {
			if($("body").hasClass("quickNavFix")){
				$("body").removeClass("quickNavFix");
			}
		}
	}
	if($(".subNav").is(":visible")){
		cTop = $(window).scrollTop();
		if(cTop > subNavTop){
			if(!$("body").hasClass("subNavFix")){
				$("body").addClass("subNavFix");
			}
		} else {
			if($("body").hasClass("subNavFix")){
				$("body").removeClass("subNavFix");
			}
		}
	}
	if($("#quickModify").is(":visible")){
		cTop = $(window).scrollTop();
		if(cTop > quickTop){
			if(!$("body").hasClass("quickFix")){
				$("body").addClass("quickFix");
			}
		} else {
			if($("body").hasClass("quickFix")){
				$("body").removeClass("quickFix");
			}
		}
	}
	if(!$(".extraArea").is(":visible")){
		if($("#totalSrmy").is(":visible")){
			if($(window).scrollTop() + $(window).height() - totalHeight < totalTop){
				if(!$("body").hasClass("totalFix")){
					$("body").addClass("totalFix");
				}
			} else {
				if($("body").hasClass("totalFix")){
					$("body").removeClass("totalFix");
				}
			}
		}
	}
	//renewal gnb menuPage fixed
	if($(".menuPage #gnb, .menuPage .m_gnb_wrap").is(":visible")){
		cTop = $(window).scrollTop();
		if(cTop > menuPageTop){
			if(!$("body").hasClass("menuPageFix")){
				$("body").addClass("menuPageFix");
			}
		} else {
			if($("body").hasClass("menuPageFix")){
				$("body").removeClass("menuPageFix");
			}
		}
	}
}

function showTab(obj, obj2, func){
	if($.type(obj) == 'string'){
		var target = $(obj);
		$(".tabTypeA:visible li").each(function(){
			if($(this).find("a").attr("href") == obj){
				$(this).addClass("choice").siblings().removeClass("choice");
				if($(this).find(".desc").size() <= 0){
					$(this).prepend('<span class="desc">선택</span>');
				}
			}
		});
	} else {
		var target = $(obj).attr("href");
		if(!$(obj).parents("li").hasClass("choice")){
			$(obj).parents("li").addClass("choice").siblings().removeClass("choice");
			$(obj).parents("li").siblings().find("span.desc").remove();
			$(obj).parents("li").prepend('<span class="desc">선택</span>');
		}
	}
	$(target).show().siblings("."+obj2).hide();
	if(func){
		func();
	}
}

function alertLayer(html, close, func){
	var $focus = $(document).find(":focus");
	$focus.addClass("focused");
	$("body").append('<div class="bgLayer3"></div><div class="alertLayer">'+ html +'<p class="btn"><a href="#" onclick="hideAlertLayer(\''+close+'\'); return false" class="btnTypeA">'+$.i18n.prop('lj.ibe.b2c.rsv.079')+'</a></p></div>');
	var aTop = $(window).scrollTop() + $(window).height()/2 - ($(".alertLayer").height() + parseInt($(".alertLayer").css("padding-top")))/2;
	$(".bgLayer3").show();
	$(".alertLayer").css("top", aTop + "px").css("opacity", "1");
	$(".alertLayer a").each(function(i){
		if(i == 0) {
			$(this).focus();
			return false;
		}
	});
	if(func){
		$(".alertLayer .btn a").attr("onclick", "hideAlertLayer("+close+"); " + func + "();  return false");
	}
	return false;
}

function alertLayer2(html, close, func) {
	var $focus = $(document).find(":focus");
	$focus.addClass("focused");
	$("body").append('<div class="bgLayer3"></div><div class="alertLayer">' + html + '<p class="btn"><a href="#" class="btnTypeA">' + $.i18n.prop('lj.ibe.b2c.rsv.079') + '</a></p></div>');
	var aTop = $(window).scrollTop() + $(window).height()/2 - ($(".alertLayer").height() + parseInt($(".alertLayer").css("padding-top")))/2;
	$(".bgLayer3").show();
	$(".alertLayer").css("top", aTop + "px").css("opacity", "1");
	$(".alertLayer a").each(function(i){
		if(i == 0) {
			$(this).focus();
			return false;
		}
	});

	$('.alertLayer .btn a').on('click', function() {
		hideAlertLayer(close);
		if(func) {
			func();
		}
		return false;
	});

	$('div.alertLayer').find('a').focus();

	return false;
}

function hideAlertLayer(close){
	$(".alertLayer, .bgLayer3").hide();
	$(document).find(".focused").focus();
	$(document).find(".focused").removeClass("focused");
	if(close == "allClose"){
		hidePopupLayer();
		top.$(document).find(".focused").focus();
		top.$(document).find(".focused").removeClass("focused");
	}
	return false;
}

function confirmLayer(html, confirmTrue, confirmFalse, close){
	if(!$(".bgLayer3").is(":visible")){
		$("body").append('<div class="bgLayer3"></div>');
	}

	var confirmText = $.i18n.prop('cmm.msg.btn.confirm');
	if(confirmText.indexOf('cmm.msg.btn.confirm') !== -1) {
		confirmText = '확인';
	}
	var cancelText = $.i18n.prop('cmm.msg.btn.cancel');
	if(cancelText.indexOf('cmm.msg.btn.cancel') !== -1) {
		cancelText = '취소';
	}

	var $focus = $(document).find(":focus");
	$focus.addClass("focused");
	$("body").append('<div class="confirmLayer">'+ html +'<p class="btn"><a href="#" onclick="' + confirmTrue + '();return false" class="btnTypeA">' + confirmText + '</a> <a href="#" onclick="' + confirmFalse + '();return false" class="btnTypeB">' + cancelText + '</a></p></div>');
	var aTop = $(window).scrollTop() + $(window).height()/2 - ($(".confirmLayer").height() + parseInt($(".confirmLayer").css("padding-top")))/2;
	$(".bgLayer3").show();
	$(".confirmLayer").css("top", aTop + "px").css("opacity", "1");
	return false;
}

function hideConfirmLayer(close){
	$(".confirmLayer, .bgLayer3").remove();
	$(document).find(".focused").focus();
	$(document).find(".focused").removeClass("focused");
	if(close == "allClose"){
		hidePopupLayer();
		top.$(document).find(".focused").focus();
		top.$(document).find(".focused").removeClass("focused");
	}
	return false;
}

function hidePopupLayer(layerId, reset){
	top._hidePopupLayer(layerId, reset);
}

function _hidePopupLayer(layerId, reset) {
	if(layerId){
		$("#popLayer" + layerId).empty().remove();
		$("#companyLayer" + layerId).empty().remove();//2019-01-21 채용 팝업
		_popupLayerID = _popupLayerID - 2;
		if(reset){
			_popupLayerID = _popupLayerID + 2;
			POPUP_INIT_ID = _popupLayerID - 2;
		}
	} else {
		if(_popupLayerID != POPUP_INIT_ID + 2){
			$("#popLayer" + _popupLayerID).empty().remove();
			$("#companyLayer" + _popupLayerID).empty().remove();//2019-01-21 채용 팝업
			_popupLayerID = _popupLayerID - 2;
		} else {
			$("#popLayer" + _popupLayerID).empty().remove();
			$("#companyLayer" + _popupLayerID).empty().remove();//2019-01-21 채용 팝업
			_popupLayerID = _popupLayerID - 2;
			$(".bgLayer").hide();
		}
	}

	$( '.bgLayer' ).css( 'z-index', _popupLayerID );// 2019-10-30 팝업 JS 추가
	$(document).find(".focused").focus();
	$(document).find(".focused").removeClass("focused");
	$("html").css("overflow", "visible");
	// 180712 추가
	if ( $('.popLayer').is(':visible') ){
		$( 'html' ).css('overflow','hidden');
	}
}
//공통 레이어팝업
function showPopupLayer(popSrc){
	top._showPopupLayer(popSrc);
}

var POPUP_INIT_ID = 111;
var _popupLayerID = POPUP_INIT_ID;
function _showPopupLayer(popSrc) {
	var $focus = $(document).find(":focus");//접근성 보완
	$focus.addClass("focused");//접근성 보완
	if($(".bgLayer2").is(":visible")){
		$(".bgLayer").css("z-index", "113");
	} else {
		$(".bgLayer").css("z-index", "100");
	}
	_popupLayerID += 2;
	var popTop = $(window).height() / 2 + $(document).scrollTop();
	var popSrcUrl = popSrc;
	/*var popWidth = $(window).width() - 100;
	if(popWidth > 1160){
		popWidth = 1160;
	}
	var marginLeft = popWidth / 2;*/
	if(popSrcUrl.indexOf("?") > 0){
		popSrcUrl += '&layerId='+ _popupLayerID
	}else {
		popSrcUrl += '?layerId='+ _popupLayerID
	}
	$("#wrapper").append(
		'<div class="popLayer" id="popLayer' + (_popupLayerID) + '" style="z-index:' + _popupLayerID + ';top:' + popTop + 'px;">'
		+ ' <iframe src="' + popSrcUrl +'" width="100%" height="100%" frameborder="0" allowTransparency="true" scrolling="no" id="iframePopLayer' + (_popupLayerID) + '"></iframe>'
		+ ' <p class="close"><a href="#" onclick="hidePopupLayer(); return false"><span>닫기</span></a></p>'
		+ '</div>'
	);	
	
	$(".bgLayer").css({"height": $(document).height() + "px", 'z-index': _popupLayerID }).show();// 2019-10-30 팝업 JS 수정
	$("#popLayer" + _popupLayerID).show();
	$("#iframePopLayer" + (_popupLayerID)).focus();
	$("html").css("overflow", "hidden");
}

function showImageLayer(imgSrc, title, imgAlt, wide) {
	if(!imgSrc) {
		return;
	}

	var queryString = '?imgSrc=' + encodeURIComponent(imgSrc);
	if(!!title) {
		queryString += '&title=' + encodeURIComponent(title);
	}
	if(!!imgAlt) {
		queryString += '&imgAlt=' + encodeURIComponent(imgAlt);
	}
	if(!!wide) {
		queryString += '&wide=' + true;
	}

	showPopupLayer('/popup/imageLayer' + queryString);
}

var popMargin;
function setPopup(obj, reset){
	if(!reset){
		popMargin = parseInt(top.$(".popLayer").css("margin-top"));
		if (0 > popMargin) {
			popMargin	= 20;
		}
	}
	if($("body").hasClass("hideClose")){
		top.$("#popLayer" + obj + " .close").hide();
	}
	top.$("#popLayer" + obj).css("top", ($(window.parent).height() / 2 + $(window.parent).scrollTop()) +"px");
	top.$("#popLayer" + obj +", #iframePopLayer" + obj).add($("#popCont")).height("auto");
	top.$("#popLayer" + obj +", #iframePopLayer" + obj).height($("#popWrap").height());
	top.$("#popLayer" + obj).css("margin-top", "-" + $("#popWrap").height()/2 + "px");
	var pWidth;
	if($("#popWrap").hasClass("calendarWrap")){
		if($(window.parent).width() <= 740 ){
			top.$("#popLayer" + obj).find(".close").addClass("mobileType");
		}
		top.$("#popLayer" + obj).find(".close").addClass("typeB");
		pWidth = $(window.parent).width() - 100;
		if(pWidth > 1160) pWidth = 1160;
	} else {
		pWidth = $("#popWrap").width();
	}
	if($("#popWrap").width() > $(window.parent).width() - 40){
		pWidth = $(window.parent).width() - 40;
		$("#popWrap").width($(window.parent).width() - 40);
	}
	top.$("#popLayer" + obj).width(pWidth).css("margin-left", "-" + pWidth/2 + "px");
	var popHeight = $(window.parent).height()-(popMargin*2);
	var titleHeight = $("h1").height()+parseInt($("h1").css("padding-top"))+parseInt($("h1").css("padding-bottom"));
	var contPadding = parseInt($("#popCont").css("padding-top"))+parseInt($("#popCont").css("padding-bottom"));
	//alert($("#popWrap").height() +":"+ popHeight)
	if($("#popWrap").height() >= popHeight){ //팝업높이가 부모창 높이보다 길때
		if($("#popWrap").hasClass("calendarWrap")){
			$("#popCont").height(popHeight-titleHeight);
			$(".scr").height($("#popWrap").height() - $(".scr").position().top);
		} else {
			$("#popCont").css("height", (popHeight-titleHeight-contPadding) + "px").css("overflow-y", "scroll").css("padding-right", "10px");
		}
		top.$("#popLayer" + obj +", #iframePopLayer" + obj).height($("#popWrap").height());
		top.$("#popLayer" + obj).css("top", $(window.parent).scrollTop() + "px").css("margin-top", popMargin + "px");
		if($(window.parent).scrollTop() + $("#popWrap").height() > top.$(".bgLayer").height()){ //반투명 BG 높이가 모자를때
			top.$(".bgLayer").height($(window.parent).scrollTop() + $("#popWrap").height() + 3);
		}
	}
	top.$("#popLayer" + obj).css("opacity", "1");
	/* 2019-01-21 추가 */
	/* 채용 팝업 */
	top.$("#companyLayer" + obj + ", #iframePopLayer" + obj).height($(".company_pop").outerHeight());
	top.$("#companyLayer" + obj).css("margin-top", "-" + $(".company_pop").outerHeight()/2 + "px");
	top.$(".company_layer").css("opacity", "1");

	if ( $( '#popWrap' ).hasClass( 'company_pop' ) ) {
		$("#popWrap").css('width','');
	}

	var companyH = $(window.parent).height()-(popMargin*2) - 40;

	if($(".company_pop").height() >= companyH){
		$(".company_pop_cont").css("height", companyH + "px").css("overflow-y", "scroll");
		top.$("#companyLayer" + obj +", #iframePopLayer" + obj).height($(".company_pop").outerHeight(true));
		top.$("#companyLayer" + obj).css("top", $(window.parent).scrollTop() + "px").css("margin-top", popMargin + "px");
	}

	$(window).resize(function(){
		top.$("#popLayer" + obj +", #iframePopLayer" + obj).height($("#popWrap").height());
	});
	/* // 2019-01-21 추가 */
}

/* 2019-01-21 추가 */
/* 채용 팝업 */
function recruitLayer(popSrc){
	top._recruitLayer(popSrc);
}

var POPUP_INIT_ID = 111;
var _popupLayerID = POPUP_INIT_ID;
function _recruitLayer(popSrc) {
	var $focus = $(document).find(":focus");
	$focus.addClass("focused");
	if($(".bgLayer2").is(":visible")){
		$(".bgLayer").css("z-index", "113");
	} else {
		$(".bgLayer").css("z-index", "100");
	}
	_popupLayerID += 2;
	var popTop = $(window).height() / 2 + $(document).scrollTop();
	var popSrcUrl = popSrc;

	if(popSrcUrl.indexOf("?") > 0){
		popSrcUrl += '&layerId='+ _popupLayerID
	}else {
		popSrcUrl += '?layerId='+ _popupLayerID
	}
	$("#wrapper").append(
		'<div class="popLayer company_layer" id="companyLayer' + (_popupLayerID) + '" style="z-index:' + _popupLayerID + ';top:' + popTop + 'px;">'
		+ ' <iframe src="' + popSrcUrl +'" width="100%" height="100%" frameborder="0" allowTransparency="true" scrolling="no" id="iframePopLayer' + (_popupLayerID) + '"></iframe>'
		+ '</div>'
	);
	$(".bgLayer").css("height", $(document).height() + "px").show();
	$("#companyLayer" + _popupLayerID).show();
	$("#iframePopLayer" + (_popupLayerID)).focus();
	$("html").css("overflow", "hidden");
}
/* // 2019-01-21 추가 */

//오늘 하루 레이어팝업
function setCookie( name, value, expiredays ) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookie(name){
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length){
		var y = (x+nameOfCookie.length);
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1) endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie ));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0) break;
	}
	return "";
}

//자주찾는메뉴
function showQuickSet(){
	$(".bgLayer").toggle();
	$(".quickSet").toggleClass("on");
	$(".quickSet ul").slideToggle(150);
}

//하위레이어 공통
function showSubLayer(obj){
	var $target = $(obj);
	$target.find(".subLayer").show();
}
function hideSubLayer(obj){
	var $target = $(obj);
	$target.find(".subLayer").hide();
}

function hideNotice(){
	$(".bandNotice").slideUp(150);
}

//로딩바
function showLoading(target){
	if(target){
		if(!!$(target).find('.loadingArea').length) {
			return;
		}

		if($(""+target+"").css("position") != "relative" && $(""+target+"").css("position") != "absolute"){
			$(""+target+"").css("position", "relative");
		}
		$(""+target+"").prepend("<div class='loadingArea'><img src='https://www.jinair.com/images/common/loading.gif' alt='loading'></div>");
	} else {
		if(!!$('body').find('.loadingArea').length) {
			return;
		}

		$("body").prepend("<div class='loadingArea full'><img src='https://www.jinair.com/images/common/loading.gif' alt='loading'></div>");
	}
}
function hideLoading(){
	$(".loadingArea").remove();
}

/* 2019-01-21 추가 */
/* 2019-09-27 수정 */
// 기업개요 - 직무소개
$( function () {
	$( '.introduction .list li .inbox a' ).on( 'click', function (e) {
  		e.preventDefault();

	    var _this = $( this ),
	    	$closest = _this.closest( 'li' ),
	        $list = $( '.list' ),
	    	$listLi = $list.find( 'li' );

	    var linkH = $( this ).outerHeight( true ),
	    	contentH = $( this ).closest( 'li' ).find( '.content' ).outerHeight( true );

	    var total = linkH + contentH;//Height

		$listLi.removeClass( 'active' ).css( 'height', '' ).find( '.inbox .view' ).text( '상세 닫기' );
		$closest.addClass( 'active' ).css( 'height', total + 'px' ).siblings( 'li' ).removeClass( 'active' ).css( 'height', '' ).find( '.inbox .view' ).text( '상세 보기' );
  	});
});
/* // 2019-09-27 수정 */
/* // 2019-01-21 추가 */

// 회원가입 preference 추가
$( function () {
	$( '.member_preference .detail_view a' ).on( 'click', function (e) {
		e.preventDefault();

		var _this = $( this ),
			$parent = _this.closest( '.detail_view' );

		$parent.toggleClass( 'active' );

		if ( $parent.hasClass( 'active' ) ) {
			_this.text( '상세닫기' );
		} else {
			_this.text( '상세보기' );
		}
	});
});

// 나의 멤버십 회원정보 탭 / Anchor 탭
$( function () {
	var $contentWrap = $( '.membership_wrap' ),
		$tab = $contentWrap.find( '.tab_style' ),
		$tabLi = $tab.find( 'li' ),
		$tabLink = $tabLi.find( 'a' ),
		$subNavH = $( '.subNav' ).outerHeight( true );

	// Tab
	$( '.membership_wrap .case .btn_detail' ).on( 'click', function (e) {
		e.preventDefault();

		var _this = $( this );

		_this.parents( '.case' ).addClass( 'current' ).siblings().removeClass( 'current' );

		caseHeight();// Height
	});

	// Tab Anchor 이동
	$tabLink.on( 'click', function (e) {
		e.preventDefault();

		var _this = $( this );

		$( 'html, body' ).animate({ scrollTop: $( _this.attr( 'href' ) ).offset().top - $subNavH }, 'slow' );
	});
});

// 항공운임 사용가능 포인트
$( function () {
	var $contentWrap = $( '.available_point_content' ),
		$tabCont = $contentWrap.find( '.available_cont' );

	$tabCont.hide();
	$tabCont.first().show();

	$( '.payment_navipoint .input_box .set input[type="radio"]' ).on( 'click', function () {
		var _this = $( this );

		$tabCont.hide();
		$tabCont.eq( _this.parents( '.set' ).index() ).show();
	});
});

// 캐쉬백 포인트
$( function () {
	if ( $( '.cashbag_point' ).hasClass( 'complete' ) ) {
		$( this ).find( '.agree_box input[type="checkbox"]' ).attr( 'checked', true );
	}

	$( '.cashbag_point .agree_box input[type="checkbox"]' ).on( 'click', function () {
		$( this ).closest( '.cashbag_point' ).toggleClass( 'open' );
	});
});

// 나의 멤버십 혜택 안내 모바일
$( function () {
	$( '.calculate_date .text .btn' ).on( 'click', function (e) {
		e.preventDefault();

		var _this = $( this ),
			$parent = _this.closest( '.calculate_date' );

		$parent.toggleClass( 'active' );
		if ( $parent.hasClass( 'active' ) ) {
			_this.text( '상세 닫기' );
		} else {
			_this.text( '상세 열기' );
		}
	});

	$( '.benefit_premium .info_title' ).on( 'click', function (e) {
		e.preventDefault();

		$( this ).toggleClass( 'active' );
	});
});

// 나의 멤버십 Height
function caseHeight() {
	$( '.membership_wrap .case' ).each( function () {
		var _this = $( this ),
			$parent = _this.parents( '.incont_group' ),
			$targetView = $( '.membership_wrap .case .info_view' ),
			$caseH = $targetView.outerHeight( true ),
			$currentViewH = $( '.incont_group .case.current .info_view' ).outerHeight( true ),
			$currentContH = $( '.incont_group .case.current .info_content' ).outerHeight( true );

		if ( _this.hasClass( 'current' ) ) {
			$parent.css( 'height', $caseH + $( this ).find( '.info_content' ).outerHeight( true ) + 'px' );
		}
		if ( $( window ).width() > 640 ) {
			$parent.css( 'height', $currentViewH + $currentContH + 'px' );
		}

		$targetView.css( 'height', $caseH + 'px' );
	});
}

//나의 멤버십 유료멤버십 상품 상세
function benefitList() {
	$( '.charge_membership .benefit_list' ).each( function () {
		$( this ).find( '.area' ).css( 'height', $( this ).height()  + 'px' );

		if ( $( window ).width() <= 767 ) {
			$( this ).find( '.area' ).css( 'height', '' );
		}
	});
}

function caseInfoHeight() {
	$( '.membership_wrap .case' ).each( function () {
		$( '.membership_wrap .case .info_view' ).css( 'height', $( '.membership_wrap .case .info_view' ).outerHeight( true ) + 'px' );
	});
}

$( function () {
	//benefitList();// 나의 멤버십 유료멤버십 상품 상세
	caseHeight();// 나의 멤버십 Height
});

$( window ).on( 'resize', function () {
	//benefitList();// 나의 멤버십 유료멤버십 상품 상세
	caseHeight();// 나의 멤버십 Height
});