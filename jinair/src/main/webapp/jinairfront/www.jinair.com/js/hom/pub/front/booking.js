/*
 * 부가서비스 관련 스크립트
 * 예매-부가서비스 /booking/extras.jsp
 * 체크인-좌석지정 /checkin/seat.jsp
 */
var visibleHeight, mapTop, map, mapHeight, thumbHeight, quickHeight, totalHeight, $dragObj, fixTop = 0, btnTopInit = new Array(), btnIdx, btnFloatingH, btnBtmH, onDrag = false, mapLeft, mapRight;
var isBunchMemberList, qTop;
var $this, $targetInfo, $targetZoom, $targetBox, $mapBox;
var allMealEntry = new Array, mealEntry = new Array;
function windowLoad(){
	setHeightInit();
	if($("#quickModify").size() > 0){
		qTop = $("#quickModify").offset().top;
	}
	$(".extrasSec").each(function(i){
		if($(this).is(":visible")){
			btnIdx = i;
		}
	});
	hideExtrasNav(); //모바일

	//기내식
	if($("#mealSec").is(":visible")){
		getMealList($('#mealSec').find('.slideCont').find('li.choice').find('a'));
	}

	//사전좌석지정, 기내식, 유상판매
	if($("#seatSec, #mealSec, #saleSec, #loungeSec").is(":visible")){
		$(".tripTab li").width(parseInt($(".extraArea").width()/2)); //구간 탭 사이즈
		efuSlider('.tripTab:visible', 1, 150, '', 'once');

		$(".mealArea, .saleArea, .loungeArea").each(function(i){ //탑승객1(수정불가상태일때는 다음 탑승객)에 포커스 init
			allMealEntry[i] = 0;
			mealEntry[i] = false;
			$(this).find(".member").each(function(){
				if($(this).find(".srmyArea").hasClass("disable")){ //수정불가상태면 입력완료표시
					$(this).addClass("entry").add($(this).find(".srmy")).removeClass("choice");
					allMealEntry[i]++;
				} else {
					if(!$(this).prevAll().hasClass("choice")){
						$(this).add($(this).find(".srmy")).addClass("choice");
					}
				}
			});

			if(allMealEntry[i] != 0){
				if(allMealEntry[i] == ($(this).find(".srmyArea").size())){ //전체가 선택불가상태일때는 버튼 플로팅
					btnFloating($(this));
					mealEntry[i] = true;
				}
			}
		});

		if($(".extraArea .head .close").css("display") == "none"){ //pc
			$(".extraArea").height("auto");
			var secHeight = new Array();
			secHeight[0] = $(".extraArea .head").height();
			secHeight[1] = $(this).height();
			secHeight[2] = $(".mealArea:visible, .saleArea:visible, .loungeArea:visible").find(".memberList").height() + $(".extraArea .tripTab:visible").height();
			$(".extraArea").height(Math.max.apply(null, secHeight));
			$(".mealArea:visible, .saleArea:visible, .loungeArea:visible").height(Math.max.apply(null, secHeight) - $(".extraArea .tripTab:visible").height());
		} else { //mobile
			setMobileMemberList(); //탑승객간 높이조절
		}
	}

	//초과수하물, 엔터테인먼트
	if($("#baggageSec, #enterSec").is(":visible")){
		var $target = $("#baggageSec:visible, #enterSec:visible");
		isBunchMemberList = false;
		if($(".extraArea .head .close").css("display") == "none"){ //pc
			setContHeight($(".bunch"));
		} else { //mobile
			setMobileContHeight($target);
			setMemberSwipe($target);
		}
		$(".bunch").each(function(){
			if(!$(this).nextAll(".bunch").length){
				$(this).addClass("last");
			}
		});
		var allEntry = false;
		$(".bunch .member .line").each(function(){
			if($(this).find(".srmyArea").hasClass("disable")){
				allEntry = true;
			} else {
				allEntry = false;
			}
		});
		if(allEntry){
			btnFloating($(".bunch"));
		}

		$(".srmyArea .srmy").on("click", function(e){
			var $gParent = $(this).parents(".bunchArea");
			if(!($(e.target).is(".add, .del"))){
				if(!$(this).parents(".srmyArea").hasClass("disable")){
					$gParent.find(".srmy.choice").removeClass("choice");
					$(this).addClass("choice");
				}
			} else {
				$gParent.find(".srmy.choice").not($(this).parents(".line").find(".srmy.choice")).removeClass("choice");
			}
		});

		$(".baggageArea .line").each(function(){
			var $lineTarget, $selTarget;
			$(this).find("select").change(function(){
				if($(this).val() != 0){
					if($(this).parents(".bunch").size() > 0){ //pc버젼
						var $parent = $(this).parents(".bunch");
						var $gParent = $(this).parents(".bunchArea");
					} else if($(this).parents(".newMember").size() > 0){ //모바일버젼
						var $parent = $(this).parents(".extrasSec").find(".bunchArea .bunch:eq("+$(obj).parents(".memberList").index()+")");
						var $gParent = $(this).parents(".newMember");
					}
					var lineId = $(this).parents(".line").attr("data");
					$parent.find(".member .line").each(function(){
						if($(this).attr("data") == lineId){
							$lineTarget = $(this);
						}
					});
					var $self = $(this);
					$gParent.find(".srmy.choice").not($lineTarget.find(".srmy.choice")).removeClass("choice"); //다른구간및 다른탑승객의 포커스삭제

					// customizing start : 다중선택X
					/*
					if($lineTarget.find(".srmyArea:last-child").hasClass("disable")){
						var srmyHtml = '<div class="srmyArea"><div class="srmy typeB choice"></div><p class="price"></p></div>';
						$lineTarget.append(srmyHtml);
					}
					*/
					// customizing end

					if($lineTarget.find(".srmy.choice").size() > 0){

						// customizing : disable인 객체는 return
						if ($lineTarget.find(".srmy.choice").parent('.srmyArea.disable').length > 0) return;

						$lineTarget.find(".srmy.choice").empty().addClass("entry").append('<p class="text">'+$self.find('option:selected').text()+'</p><a href="#" onclick="delOpt(this);return false" class="del">삭제</a>');
						$lineTarget.find(".srmy.choice").next(".price").empty().append('<span class="unit">KRW</span> <strong>'+ $self.find('option:selected').attr("data") +'</strong>');
					} else {

						// customizing : disable인 객체는 return
						if ($lineTarget.find('.srmyArea:last-child.disable').length > 0) return;

						$lineTarget.find(".srmyArea:last-child").find(".srmy").empty().addClass("choice entry").append('<p class="text">'+$self.find('option:selected').text()+'</p><a href="#" onclick="delOpt(this);return false" class="del">삭제</a>');
						$lineTarget.find(".srmyArea:last-child").find(".srmy").next(".price").empty().append('<span class="unit">KRW</span> <strong>'+ $self.find('option:selected').attr("data") +'</strong>');
					}
					$parent.find(".member").addClass("entry");
				}

				// customizing start
				var targetLine;
				var targetSrmyArea;
				var lineId = $(this).parents(".line").attr("data");
				$(this).parents('.content').parent().find('.memberList').find('.line').each(function() {
					if($(this).attr('data') == lineId) {
						targetLine = $(this);
					}
				});

				if($(targetLine).find('.srmy.choice').length > 0) {
					targetSrmyArea = $(targetLine).find('.srmy.choice').parents('.srmyArea');
				}
				else {
					targetSrmyArea = $(targetLine).find('.srmyArea:last-child');
				}

				if($(this).val() > 0) {

					var ssrCode = $(this).find('option:selected').attr("ssrCode");
					var price = $(this).find('option:selected').attr("data");
					var weight = $(this).find('option:selected').attr("weight");
					var unit = $(this).find('option:selected').attr("unit");

					$(targetSrmyArea).find(".srmy").next(".price").empty().append('<span class="unit">'+ $self.find('option:selected').attr("currency") +'</span> <strong>'+ $self.find('option:selected').attr("data") +'</strong>');
					$(targetSrmyArea).find('input[name="ssrCode"]').val(ssrCode);
					$(targetSrmyArea).find('input[name="price"]').val(price);
					$(targetSrmyArea).find('input[name="weight"]').val(weight);
					$(targetSrmyArea).find('input[name="unit"]').val(unit);
				}
				else {

					// disable인 객체는 return
					if ($(targetSrmyArea).find('.srmy.entry').parents('.srmyArea.disable').length > 0) return;

					// 기존 바인딩 된 데이터 삭제
					var del = $(targetSrmyArea).find('.srmy.entry').find('a.del');
					if (del.length > 0) {
						$(del).click();
					}
				}
				// customizing end

				if($(".extraArea .head .close").css("display") == "none"){ //pc버젼
					$(this).parents(".bunch").siblings().find(".memberList .member").removeClass("choice");
					$(this).parents(".bunch").find(".memberList .member").addClass("choice");
					setContHeight($(this).parents(".bunch"));
				} else {
					isBunchMemberList = false;
					setMemberSwipe($(this).parents(".extrasSec"));
					setMobileContHeight($(this).parents(".extrasSec"));
				}
			});
		}); //baggageArea

		$(".enterArea .line").each(function(){
			var $lineTarget;
			$(this).find("select").change(function(){
				if($(this).val() != 0){
					var $parent = $(this).parents(".bunch");
					$lineTarget = $parent.find(".member ." + $(this).parents(".line").attr("data"));
					var lineId = $(this).parents(".line").attr("data");
					$parent.find(".member .line").each(function(){
						if($(this).attr("data") == lineId){
							$lineTarget = $(this);
						}
					});

					// customizing : disable인 객체는 return
					if ($lineTarget.find(".srmyArea.disable").length > 0) return;

					var $self = $(this);
					$lineTarget.find(".srmyArea").find(".srmy").empty().addClass("entry").append('<p class="text">'+$self.find('option:selected').text()+'</p><a href="#" onclick="delOpt(this);return false" class="del">삭제</a>');
					$lineTarget.find(".srmyArea").find(".srmy").next(".price").empty().append('<span class="unit">KRW</span> <strong>'+ $self.find('option:selected').attr("data") +'</strong>');
					$parent.find(".member").addClass("entry");
				}

				// customizing start
				var targetLine;
				var targetSrmyArea;
				var lineId = $(this).parents(".line").attr("data");
				$(this).parents('.content').parent().find('.memberList').find('.line').each(function() {
					if($(this).attr('data') == lineId) {
						targetLine = $(this);
					}
				});

				if($(targetLine).find('.srmy.choice').length > 0) {
					targetSrmyArea = $(targetLine).find('.srmy.choice').parents('.srmyArea');
				}
				else {
					targetSrmyArea = $(targetLine).find('.srmyArea:last-child');
				}

				if($(this).val() > 0) {

					var ssrCode = $(this).find('option:selected').attr("ssrCode");
					var price = $(this).find('option:selected').attr("data");

					$(targetSrmyArea).find(".srmy").next(".price").empty().append('<span class="unit">'+ $self.find('option:selected').attr("currency") +'</span> <strong>'+ $self.find('option:selected').attr("data") +'</strong>');
					$(targetSrmyArea).find('input[name="ssrCode"]').val(ssrCode);
					$(targetSrmyArea).find('input[name="price"]').val(price);
				}
				else {

					// disable인 객체는 return
					if ($(targetSrmyArea).find('.srmy.entry').parents('.srmyArea.disable').length > 0) return;

					// 기존 바인딩 된 데이터 삭제
					var del = $(targetSrmyArea).find('.srmy.entry').find('a.del');
					if (del.length > 0) {
						$(del).click();
					}
				}
				// customizing end

				if($(".extraArea .head .close").css("display") == "none"){
					$(this).parents(".bunch").siblings().find(".memberList .member").removeClass("choice");
					$(this).parents(".bunch").find(".memberList .member").addClass("choice");
					setContHeight($(this).parents(".bunch"));
				} else {
					isBunchMemberList = false;
					setMemberSwipe($(this).parents(".extrasSec"));
					setMobileContHeight($(this).parents(".extrasSec"));
				}
			});
		});
	}

	// customizing start : 사용자가 선택한 코드 바인딩
	$('#baggageSec').find('input[name=selectedCode]').each(function (idx, item) {
		$(this).parents('.member').addClass('choice').siblings().removeClass('choice');

		var line = $(this).parent('.line').attr('data');
		var weight = $(this).attr('weight');
		var unit = $(this).attr('unit');
		$(this).closest('.bunch').find('.content').find('.line[data=' + line + ']').find('select').find("option[weight='" + weight + "'][unit=" + unit + "]").prop("selected", true).change();

		var disableYN = $(this).attr('disableYN');
		if (disableYN == 'true') {
			$(this).parents('.line').find('.srmyArea').addClass('disable').removeClass('choice').find('.srmy').removeClass('choice');
			$(this).parents('.line').find('.srmyArea').find('input[name=ssrCode]').val('');
		}

		$(this).remove();
	});
	$('#mealSec').find('input[name=selectedCode]').each(function (idx, item) {
		$(this).parents('.member').addClass('choice').siblings().removeClass('choice');
		$(this).parents('.member').find('.srmyArea').find('.srmy').addClass('choice').siblings().removeClass('choice');

		var code = $(this).val();
		$(this).closest('.mealArea').find('.content').find('input[name=extrasCd][value=' + code + ']').parent('.wrap').find('.btn > a').click();

		var disableYN = $(this).attr('disableYN');
		if (disableYN == 'true') {
			$(this).parents('.member').find('.srmyArea').addClass('disable').removeClass('choice');
			$(this).parents('.member').find('.srmyArea').find('input[name=ssrCode]').val('');
		}

		$(this).remove();
	});
	$('#saleSec').find('input[name=selectedCode]').each(function (idx, item) {
		$(this).parents('.member').addClass('choice').siblings().removeClass('choice');
		$(this).parents('.member').find('.srmyArea').find('.srmy').addClass('choice').siblings().removeClass('choice');

		var code = $(this).val();

		// 다중 선택 가능 - area에 데이터가 있는지 확인한다.
		var srmyAreaCount = $(this).parents('.member').find('.srmyArea').length;
		var srmyCount = $(this).parents('.member').find('.srmyArea').find('.srmy.entry').length;
		if (srmyAreaCount == srmyCount) {
			// 모든 area에 데이터가 있으면 area를 추가한다.
			$(this).parents('.member').find('.srmyArea').find('.srmy.entry:last').find('a.add').click();
		}

		$(this).closest('.saleArea').find('.content').find('input[name=extrasCd][value=' + code + ']').parent('.wrap').find('.btn > a').click();

		var disableYN = $(this).attr('disableYN');
		if (disableYN == 'true') {
			$(this).parents('.member').find('.srmyArea').addClass('disable').removeClass('choice');
			$(this).parents('.member').find('.srmyArea').find('input[name=ssrCode]').val('');
		}

		$(this).remove();
	});
	$('#enterSec').find('input[name=selectedCode]').each(function (idx, item) {
		$(this).parents('.member').addClass('choice').siblings().removeClass('choice');

		var line = $(this).parent('.line').attr('data');
		var code = $(this).val();
		$(this).closest('.bunch').find('.content').find('.line[data=' + line + ']').find('select').find("option[ssrCode='" + code + "']").prop("selected", true).change();

		var disableYN = $(this).attr('disableYN');
		if (disableYN == 'true') {
			$(this).parents('.line').find('.srmyArea').addClass('disable').removeClass('choice').find('.srmy').removeClass('choice');
			$(this).parents('.line').find('.srmyArea').find('input[name=ssrCode]').val('');
		}

		$(this).remove();
	});
	$('#loungeSec').find('input[name=selectedCode]').each(function (idx, item) {
		$(this).parents('.member').addClass('choice').siblings().removeClass('choice');
		$(this).parents('.member').find('.srmyArea').find('.srmy').addClass('choice').siblings().removeClass('choice');

		var code = $(this).val();
		$(this).closest('.loungeArea').find('.content').find('input[name=extrasCd][value=' + code + ']').parent('.select_box').find('a').click();

		var disableYN = $(this).attr('disableYN');
		if (disableYN == 'true') {
			$(this).parents('.member').find('.srmyArea').addClass('disable').removeClass('choice');
			$(this).parents('.member').find('.srmyArea').find('input[name=ssrCode]').val('');
		}

		$(this).remove();
	});
	// customizing end

	// customizing start - 콤보박스 비활성화 처리
	$('#baggageSec, #enterSec').find('.srmyArea.disable').each(function (idx, item) {
		var data = $(this).parents('.line').attr('data');

		var target = $(this).parents('.bunch').find('.content').find('.line[data="' + data + '"]');
		$(target).find('select').attr('disabled', 'disabled');
	});
	// customizing end
}

$(window).on("load", function(){

}).on("resize", function(){
	setHeightInit();
	if($(".btnArea:visible").hasClass("fix")){
		$(".btnArea:visible").stop().animate({bottom:btnFloatingH+"px"}, 0);
	}

	if($(".extraArea .head .close").css("display") == "none"){
		$(".extraArea .head, .extraArea .open").removeAttr("style");
	}

	//사전좌석지정, 기내식, 유상판매
	if($("#seatSec, #mealSec, #saleSec, #loungeSec").is(":visible")){
		if($(".extraArea .head .close").css("display") != "none"){ //mobile
			$(".extraArea .head, .extraArea .head .open").removeAttr("style");
		}
		$(".tripTab li").width(parseInt($(".extraArea").width()/2)); //구간 탭 사이즈
		setMobileMemberList(); //탑승객간 높이조절
	}
	//사전좌석지정
	if($("#seatSec").is(":visible")){
		/*
		mapTop = Math.ceil($mapBox.offset().top);
		quickHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
		setMapStyle();
		setZoomBox();
		setInfoFix();
		*/
		alert("asd");
	}

	//초과수하물, 엔터테인먼트
	if($("#baggageSec, #enterSec").is(":visible")){
		if($(".extraArea .head .close").css("display") == "none"){ //pc
			$(".bunch:visible").each(function(){
				setContHeight($(this));
				$(this).add($(this).siblings()).find(".content").show();
				$(this).parents(".extrasSec").find(".newMember").removeAttr("style").empty();
				if(isBunchMemberList){
					newMemberSwiper.destroy(true, true);
					isBunchMemberList = false;
				}
			});
		} else { //mobile
			$(".bunch:visible").parents(".extrasSec").each(function(){
				setMobileContHeight($(this));
				setMemberSwipe($(this));
			});
		}
	}
}).on("scroll", function(){
	$(".btnArea:visible").each(function(){
		var $target = $(this);
		if($(window).scrollTop() + $(window).height() - btnBtmH < btnTopInit[btnIdx]){
			if($target.hasClass("show")){
				if(!$target.hasClass("fix")){
					$target.addClass("fix");
				}
				$target.css("bottom", btnFloatingH + "px");
			}
		} else {
			if($target.hasClass("fix")){
				$target.removeClass("fix");
			}
			if($target.hasClass("show")){
				$target.css("bottom", "0");
			}
		}
	});


	totalTop = $("#wrapper").height() - $("#footer").height() - 140;
	if($("#totalSrmy").size() > 0){
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
/*
	//사전좌석지정
	if($("#seatSec").is(":visible")){
		setZoomBox();
		setInfoFix();
	}*/
});

//공통 : 사이즈 셋팅
function setHeightInit(){
	quickHeight = $("#quickModify").height() + parseInt($("#quickModify").css("padding-top")) + parseInt($("#quickModify").css("padding-bottom"));
	totalHeight = $("#totalSrmy").height() + parseInt($("#totalSrmy").css("padding-top")) + parseInt($("#totalSrmy").css("padding-bottom"));
	quickHeight = quickHeight ? quickHeight : 0;
	totalHeight = totalHeight ? totalHeight : 0;
	btnFloatingH = totalHeight + 20;
	btnBtmH = btnFloatingH + $(".btnArea:visible").height();
}

//공통 : 부가서비스 열고닫기 (mobile)
var tabHeight;
function showExtrasNav(){
	$(".extraArea .head .open").stop().animate({left:"0"}, 50, function(){
		var $target = $(".extraArea .head");
		tabHeight = $target.find(".wrap").height() + $target.position().top;
		$target.stop().animate({left:"0"}, 150, function(){
			if(!$target.hasClass("open")){
				$target.addClass("open");
			}
			if(tabHeight >= $(window).height()){
				if(!$target.hasClass("scroll")){
					$target.addClass("scroll");
				}
			} else {
				if($target.hasClass("scroll")){
					$target.removeClass("scroll");
				}
			}
		});
	});
}
function hideExtrasNav(){
	if($(".extraArea .head .close").css("display") != "none"){
		var $target = $(".extraArea .head");
		$target.stop().animate({left:"-90px"}, 50, function(){
			$target.find(".open").stop().animate({left:"90px"}, 150, function(){
				$target.removeClass("open");
				if($target.hasClass("scroll")){
					$target.removeClass("scroll");
				}
			});
		});
	}
}

//공통 : 버튼 floating
function btnFloating(obj){
	$(".extrasSec").each(function(i){
		if($(this).is(":visible")){
			if(!$(this).find(".btnArea:visible").hasClass("fix")){
				btnTopInit[i] = $(this).find(".btnArea:visible").offset().top;
				btnIdx = i;
			}
		}
	});
	var $btn = $(obj).parents(".extrasSec").find(".btnArea:visible");
	if($(window).scrollTop() + $(window).height() - btnBtmH < btnTopInit[btnIdx]){
		$btn.addClass("fix show");
		$btn.stop().animate({bottom:btnFloatingH+"px"}, 300);
	}
}
function btnInit(obj){
	var $btn = $(".extrasSec:visible").find(".btnArea:visible");
	$btn.removeClass("fix show");
	$btn.stop().animate({bottom:"0"}, 100, function(){
		$btn.removeAttr("style");
	});
}

//사전좌석지정, 기내식, 유상판매 - 상단 구간 탭 (공통)
function showSection(obj, obj2){
	var target = $(obj).attr("href");
	$(obj).parents("li").addClass("choice").siblings().removeClass("choice");
	$(target).show().siblings("."+obj2).hide();
	setMobileMemberList(); //탑승객간 높이조절
	$(".extrasSec:visible").each(function(){
		if($(".extraArea .head .close").css("display") == "none"){
			$(".extraArea, .seatArea, .mealArea, .saleArea, .loungeArea").height("auto");
			var secHeight = new Array();
			secHeight[0] = $(".extraArea .head").height();
			secHeight[1] = $(this).height();
			secHeight[2] = $(this).find(".memberList").height() + $(".extraArea .tripTab:visible").height();
			$(".extraArea").height(Math.max.apply(null, secHeight));
			$(".seatArea:visible, .mealArea:visible, .saleArea:visible, .loungeArea:visible").height(Math.max.apply(null, secHeight) - $(".extraArea .tripTab:visible").height());
		}
	});

	//사전좌석지정
	if($("#seatSec").is(":visible")){
		$this = $(".seatArea:visible .seatMap");
		$targetInfo = $(".seatArea:visible .seatMap .info");
		$targetZoom = $(".seatArea:visible .seatMap .zoomArea");
		$targetBox = $(".seatArea:visible .seatMap .zoomArea .box");
		$mapBox = $(".seatArea:visible .seatMap .mapBox");
	}
}

//사전좌석지정, 기내식, 유상판매 탑승객간 높이조절, swiper (mobile)
function setMobileMemberList(){
	$(".memberList:visible").each(function(){
		if($(this).parents(".seatArea").size() > 0){
			i = 0;
			j = $(this).parents(".seatArea").index()-1;
		} else if($(this).parents(".mealArea").size() > 0) {
			i = 1;
			j = $(this).parents(".mealArea").index()-1;
		} else if($(this).parents(".saleArea").size() > 0){
			i = 2;
			j = $(this).parents(".saleArea").index()-1;
		} else if($(this).parents(".loungeArea").size() > 0){
			i = 2;
			j = $(this).parents(".loungeArea").index()-1;
		}
		if($(".extraArea .head .close").css("display") != "none"){
			var memHeight = new Array;
			$(this).find(".member").each(function(){
				memHeight[$(this).index()] = $(this).find(".name").height() + parseInt($(this).find(".name").css("padding-top"));
			});
			var maxMemHeight = Math.max.apply(null, memHeight);
			$(this).find(".member .name").css("height", maxMemHeight + "px");
			if(!isMemberSwiper[i][j]){
				memberSwiper[i][j] = new Swiper($(this), {
					slidesPerView: "auto"
				});
				isMemberSwiper[i][j] = true;
			}
		} else {
			$(this).find(".member .name").css("height", "auto");
			$(".memberList .swiper-wrapper").removeAttr("style");
			if($(".memberList.swiper-container-horizontal").size() > 0){
				if(isMemberSwiper[i][j]){
					memberSwiper[i][j].destroy(true, true);
					isMemberSwiper[i][j] = false;
				}
			}
		}
	});
}

//사전좌석지정, 기내식, 유상판매 탑승객 선택
function choiceMember(obj){
	var $target = $(obj).parents(".member");
	if(!$target.hasClass("disable")){
		$target.siblings().removeClass("choice");
		$target.addClass("choice");
		$target.siblings().find(".srmy").removeClass("choice");
		if($(obj).parents(".mealArea").size() > 0 || $(obj).parents(".saleArea").size() > 0|| $(obj).parents(".loungeArea").size() > 0){
			if($target.find(".srmy:not(.entry)").size() > 0){
				$target.find(".srmy:not(.entry)").addClass("choice");
			} else {
				$target.find(".srmyArea:last-child .srmy").addClass("choice");
			}
		} else {
			$target.find(".srmy").addClass("choice");
		}
	}
}

//사전좌석지정
function seatMap(){

	try {

		mapTop = Math.ceil($mapBox.offset().top);
		map = $(".seatArea:visible .seatMap .map");
		mapHeight = $mapBox.height();
		thumbHeight = $(".seatArea:visible .seatMap .zoomArea p").height();
		setZoomBox();

		//썸네일 드래그
		if($(".extraArea .head .close").css("display") == "none"){
			$dragObj = $(".seatArea:visible .seatMap .zoomArea .box");
			var top, startY, endY, moveY;
			$dragObj.on("mousedown", function(e){
				top = parseInt($dragObj.position().top);
				startY = e.screenY;
				$(document).on("mousemove", function(e){
					moveY = e.screenY - startY;
					moveY = top + moveY;
					if(moveY >= thumbHeight - $dragObj.height()){
						moveY = thumbHeight - $dragObj.height();
					}
					if(moveY < 0){
						moveY = 0;
					}
					$dragObj.css("top", moveY + "px");
					dragZoomBox(moveY, mapTop);
					onDrag = true;
					e.preventDefault();
				}).on("mouseup", function(e) {
					$(document).off("mousemove");
					onDrag = false;
				});
			});
		}
	}
	catch(e) {

	}
}

//사전좌석지정 - 우측 좌석 썸네일에서 마우스드래그 했을때
var percent, mapResetTop;
function dragZoomBox(moveY, mapTop){
	var $targetZoom = $(".seatArea:visible .seatMap .zoomArea");
	percent = moveY / thumbHeight;
	percent = percent.toFixed(2);
	mapResetTop = Math.floor(percent*mapHeight);
	if($(window).scrollTop() >= mapTop - quickHeight){
		fixTop = $(window).scrollTop() - mapTop + quickHeight;
		if(fixTop + $targetZoom.height() + parseInt($targetZoom.css("padding-top")) < mapHeight){
			var min = mapTop - quickHeight;
			var max = mapTop + mapHeight - quickHeight;
			var moveTop = Math.floor(percent*(max-min)) + mapTop - quickHeight;
			$("html, body").scrollTop(moveTop);
		}
	} else {
		map.css("margin-top", "-" + mapResetTop + "px");
	}
}

//사전좌석지정 - 스크롤시 우측 썸네일 박스의 크기와 위치조정
function setZoomBox(){
	if($(window).scrollTop() > mapTop - quickHeight){
		visibleHeight = Math.ceil($(window).height() - quickHeight - totalHeight);
	} else {
		visibleHeight = Math.ceil($(window).height() - mapTop - totalHeight + $(window).scrollTop());
	}
	$targetBox.height(Math.ceil(visibleHeight / mapHeight * thumbHeight));
	if($(window).scrollTop() >= mapTop - quickHeight){
		fixTop = $(window).scrollTop() - mapTop + quickHeight;
		if(fixTop + $targetZoom.height() + parseInt($targetZoom.css("padding-top")) < mapHeight){
			var min = mapTop - quickHeight;
			var max = mapHeight - $targetZoom.height() - parseInt($targetZoom.css("padding-top"));
			if($(window).width() < 1200){
				max = max + $targetInfo.height() + parseInt($targetInfo.css("padding-top")) + parseInt($targetInfo.css("padding-bottom"));
			}
			percent = ($(window).scrollTop() - min) / (max - min);
			percent = percent.toFixed(2);
			if(!onDrag){
				if($(window).scrollTop() < mapTop + mapHeight - $(window).height() + totalHeight){
					$targetBox.css("top", Math.ceil(percent*(thumbHeight - $targetBox.height())) + "px");
				}
			}
			map.stop().animate({marginTop:0}, 100);
		}
	}
}

//사전좌석지정 - info와 비행기 좌석 썸네일 fix를 위한
function setInfoFix(){
	if($this.length){
		mapLeft = $this.offset().left;
	} else {
		mapLeft = 0;
	}
	mapRight = $(window).width() - $this.width() - mapLeft;
	if($(".extraArea .head .close").css("display") == "none"){ //pc버젼일때
		if($(window).scrollTop() >= mapTop - quickHeight){
			if(fixTop + $targetZoom.height() + parseInt($targetZoom.css("padding-top")) < mapHeight){
				if(!$this.hasClass("infoFix")){
					$this.addClass("infoFix");
					if($(window).width() > 1200){
						$targetInfo.css({
							"position": "fixed",
							"left": mapLeft + "px",
							"top": quickHeight + "px"
						});
					}
					$targetZoom.css({
						"position": "fixed",
						"right": mapRight + "px",
						"top": quickHeight + "px"
					});
				} else {
					$targetZoom.css({
						"right": mapRight + "px"
					});
				}
			} else {
				if($this.hasClass("infoFix")){
					$this.removeClass("infoFix");
					if($(window).width() > 1200){
						$targetInfo.css({
							"position":"absolute",
							"left":0,
							"top":mapHeight - $targetZoom.height() - parseInt($targetZoom.css("padding-top"))
						});
					}
					$targetZoom.css({
						"position":"absolute",
						"right":0,
						"top":mapHeight - $targetZoom.height() - parseInt($targetZoom.css("padding-top"))
					});
				}
			}
		} else {
			if($this.hasClass("infoFix")){
				$this.removeClass("infoFix");
				$targetInfo.add($targetZoom).removeAttr("style");
			}
		}
	}
}

//사전좌석지정 - 좌석셋팅
var isSeatAll = new Array;
var allChoice = false;
var allSeatEntry = new Array;
var seatEntry = new Array;
function getSeatMap(params){

	// customizing start - 선택된 좌석을 모두 해지한다.
	$('.seatArea:visible').find('.member').removeClass('disable');
	$('.seatArea:visible').find('a.del').click();
	// customizing end

	//$.post("/booking/include/getSeatMap", params, function(html){
	var successFunc =  function(html) {

		try {

		$(".seatMapArea").html(html);
		$this = $(".seatArea:visible .seatMap");
		$targetInfo = $(".seatArea:visible .seatMap .info");
		$targetZoom = $(".seatArea:visible .seatMap .zoomArea");
		$targetBox = $(".seatArea:visible .seatMap .zoomArea .box");
		$mapBox = $(".seatArea:visible .seatMap .mapBox");
		setMapStyle();
		seatMap();
		$(".seatArea").each(function(i){ //탑승객1(수정불가상태일때는 다음 탑승객)에 포커스 init
			allSeatEntry[i] = 0;
			seatEntry[i] = false;
			$(this).find(".member").each(function(){
				if($(this).hasClass("disable")){ //수정불가상태면 입력완료표시
					$(this).addClass("entry").add($(this).find(".srmy")).removeClass("choice");
					allSeatEntry[i]++;
				} else {
					if(!$(this).prevAll().hasClass("choice")){
						$(this).add($(this).find(".srmy")).addClass("choice");
					}
				}
			});

			if(allSeatEntry[i] != 0){
				if(allSeatEntry[i] == ($(this).find(".member").size())){ //전체가 선택불가상태일때는 버튼 플로팅
					btnFloating($(this));
					seatEntry[i] = true;
				}
			}
		});

		$("html, body").stop().animate({scrollTop:qTop}, 300, "easeInOutQuint");

		//사전좌석지정 섹션 높이 - 부가서비스탭과 섹션 간 maxHeight 셋팅 (PC)
		if($(".extraArea .head .close").css("display") == "none"){ //pc버젼일때
			var secHeight = new Array();
			secHeight[0] = $(".extraArea .head").height();
			secHeight[1] = $(".extrasSec").height();
			secHeight[2] = $(".extrasSec .memberList").height() + $(".extraArea .tripTab:visible").height();
			$(".extraArea").height(Math.max.apply(null, secHeight));
		}


		//사전좌석지정 좌석선택
		$(".seatMap").each(function(i){
			var $parent = $(this).parents(".seatArea");
			var $thisMember;
			var idx = ($parent.attr("id").substring($parent.attr("id").length, $parent.attr("id").length-1)) - 1;

			if(seatEntry[i]){
				isSeatAll[idx] = true;
			} else {
				isSeatAll[idx] = false;
			}
			$(this).find(".map li a").click(function(){
				if(!$(this).parents("li").hasClass("disable") && !$(this).parents("li").hasClass("choice")){
					if(!isSeatAll[idx]){
						$thisMember = $parent.find(".memberList .member.choice");
						if($thisMember.hasClass("entry")){
							var seatNum = $thisMember.find("input[name=seatNum]").val();
							$(".seatArea:visible .seatMap .map li").each(function(){
								if($(this).find("a").attr("data") == seatNum){
									$(this).removeClass("choice");
								}
							});
						}
						$(this).parent("li:not(.disable)").addClass("choice");
						$thisMember.find(".srmy").empty().append('<p class="text"><em>'+$(this).attr("data")+'</em></p><a href="#" onclick="delSeat(this);return false" class="del">취소</a>');
						//$thisMember.find(".srmy").next(".price").empty().append('<span class="unit">KRW</span> <strong>15,000</strong>');

						// customizing start
						var amount = $(this).find('input[name="amount"]');
						var currency = $(this).find('input[name="currency"]');
						if(amount.length > 0 && currency.length > 0) {
							$thisMember.find(".srmy").next(".price").empty().append('<span class="unit">' + currency.val() + '</span> <strong>' + amount.val() + '</strong>');
						}
						else {
							$thisMember.find(".srmy").next(".price").empty();
						}
						$thisMember.find("input[name=price]").val(amount.val());
						// customizing end

						$thisMember.find("input[name=seatNum]").val($(this).attr("data"));
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
							btnFloating($(this));
							isSeatAll[idx] = true;
						}
					}
				} else if($(this).parents("li").hasClass("choice")){
					var data = $(this).attr("data");
					$("input[name=seatNum]").each(function(){
						if($(this).val() == data) {
							$(this).parent().find("a.del").trigger("click");
						}
					});
				}
				if($(".extraArea").height() < $(".seatArea:visible .memberList").height() + $(".extraArea .tripTab:visible").height()){
					$(".extraArea").height($(".seatArea:visible .memberList").height() + $(".extraArea .tripTab:visible").height());
				}
				return false;
			});
		});

		$(".seatArea:visible .memberList .member").each(function(){
			if($(this).find("input[name=seatNum]").val()){
				var activeNum = $(this).find("input[name=seatNum]").val();
				$(".seatArea:visible .seatMap .map li").each(function(){
					if($(this).find("a").attr("data") == activeNum){
						$(this).addClass("choice");
					}
				});
			}
		});

		if($("#quickModify").is(":visible")){
			quickTop = $("#quickModify").offset().top;
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

			// customizing start : 사용자가 선택한 코드 바인딩
			$('.seatArea:visible').find('li.marking, li.completing').each(function(idx, item) {
				var guestId = $(this).attr('guestId');
				var $member = $(this).parents('.seatArea').find('.memberList').find('input[name="guestId"][value=' + guestId + ']').parents('.member');
				$member.addClass('choice').siblings().removeClass('choice');
				$member.find('.srmy').addClass('choice').siblings().removeClass('choice');
				$(this).find('a').click();

				$(this).removeClass('marking');

				if ($(this).hasClass('completing')) {
					$member.addClass('disable');
					$(this).removeClass('completing').removeClass('choice').addClass('disable');
					$member.find('[name="seatNum"]').val('');
				}
			});

			hideLoading();
			// customizing end
		}
		catch(e) {
			if (typeof extrasError == 'function') {
				extrasError(e);
			}
			else {
				hideLoading();
			}
		}
	//});
	}
	alert(123);
/*
	// customizing start
	$.ajax({
		type : "POST",
		url : '/booking/include/getSeatMap',
		data : JSON.stringify(params),
		dataType: "text",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		contentType	: "application/json; charset=UTF-8",
		success : successFunc,
		complete: function() {
			showSection($('#seatSec:visible').find('.slideCont').find('li.choice > a'), 'seatArea');
		},
		error : function(data) {

			try {

				var errorMsg = JSON.parse(data.responseText);
				if (errorMsg.errorCode == 'SAT_044') {

					var nextExecution = function() {

						showLoading();

						// 다음 구간으로 이동
						var target = $('#seatSec').find('.slideCont').find('li.choice').next('li').find('a');
						if (target.length > 0) {
							// 다음 구간으로 이동
							selctSeatCurrrentSeg(target);
							$('button.next:visible').click();
						}
						else {
							// 다음 부가서비스로 이동
							moveNextAncillary();
						}
					}

					hideLoading();
					alertLayerForCallback(errorMsg.errorMessage, nextExecution, {});
				}
				else {
					extrasError(data);
				}
			}
			catch(e) {
				extrasError(e);
			}
		}
	});*/
	// customizing end
}

//사전좌석지정 - 좌석선택 삭제
function delSeat(obj){
	var $parent = $(obj).parents(".seatArea");
	var $thisMember = $(obj).parents(".member");
	var recentSeatNum = $thisMember.find("input[name=seatNum]").val();
	var idx = ($parent.attr("id").substring($parent.attr("id").length, $parent.attr("id").length-1)) - 1;
	$thisMember.siblings().add($thisMember.siblings().find(".srmy")).removeClass("choice");
	$thisMember.add($thisMember.find(".srmy")).addClass("choice");
	$thisMember.removeClass("entry");
	$thisMember.find(".srmy em, .price").empty();
	$thisMember.find("input[name=seatNum]").val("");

	// customizing
	$thisMember.find("input[name=price]").val("");

	allChoice = false;
	isSeatAll[idx] = false;
	btnInit(obj);
	$(obj).parents(".seatArea").find(".map li").each(function(){
		if($(this).find("a").attr("data") == recentSeatNum){
			$(this).removeClass("choice");
		}
	});
}

//사전좌석지정 (mobile)
var memberSwiper = new Array(3), isMemberSwiper = new Array(3);
var i;
$(function(){
	for(var i=0; i<3; i++){
		memberSwiper[i] = new Array;
		isMemberSwiper[i] = new Array;
		for(var k=0; k<$(".tripTab:visible li").size(); k++){
			isMemberSwiper[i][k] = false;
		}
	}
});


//기내식
var isMealAll = new Array();
var mealIdx = 0;
function selectMeal(obj){
	var $parent = $(obj).parents(".mealArea");
	var $thisMember;
	var idx = ($parent.attr("id").substring($parent.attr("id").length, $parent.attr("id").length-1)) - 1;
	isMealAll[idx] = false;

	if(!isMealAll[idx]){
		$thisMember = $parent.find(".memberList .member.choice");
		$thisMember.find(".srmyArea").each(function(){
			//if(!$(this).find(".srmy").hasClass("entry")){
			if($(this).find(".srmy").hasClass("choice")){

				// customizing : disable인 객체는 return
				if ($(this).hasClass('disable')) return;

				$(this).find(".srmy").empty().append('<p class="text">'+$(obj).parents("li").find(".tit").text()+'</p><a href="#" onclick="delMeal(this);return false" class="del">취소</a>');

				// customizing start
				//$(this).find(".price").empty().append($(obj).parents("li").find(".price").html());
				var render = $(obj).parents("li").html();
				var $renderHtml = $(render).find('.price');
				var currency = $(obj).parents("li").find("input[name='currency']").val();
				var price = $(obj).parents("li").find("input[name='price']").val();
				var extrasCd = $(obj).parents("li").find("input[name='extrasCd']").val();
				$renderHtml.find('.unit').text(currency);
				$renderHtml.find('strong').text(price);
				$(this).find(".price").empty().append($renderHtml.html());
				$(this).find('input[name="ssrCode"]').val(extrasCd);
				$(this).find('input[name="price"]').val(price);
				// customizing end

				$(this).find("input[name=mealNum]").val($(obj).parents("li").attr("data"));
				$(this).find(".srmy").add($(this).parents(".member")).addClass("choice entry");
				if($thisMember.siblings().size() > 0){
					$thisMember.siblings().each(function(){
						if(!$(this).hasClass("entry")){ //선택안한 탑승객 있으면 자동 포커싱
							$thisMember.add($thisMember.find(".srmy")).removeClass("choice");
							$(this).add($(this).find(".srmy:not(.entry)")).addClass("choice");
							allChoice = false;
							return false;
						} else {
							allChoice = true;
						}
					});
				} else {
					allChoice = true;
				}
			}
		});
		if(allChoice){ //탑승객 모두 기내식 선택 후에 버튼 플로팅
			btnFloating($(obj));
			isMealAll[idx] = true;
		}
	}

	setSecHeight($parent);
	return false;
}
function delMeal(obj){
	var $parent = $(obj).parents(".mealArea");
	var $thisMember = $(obj).parents(".member");
	var $thisMeal = $(obj).parents(".srmyArea");
	var emptyMeal = false;
	$thisMeal.siblings(".srmyArea").each(function(){
		if($(this).find(".srmy").hasClass("entry")){
			emptyMeal = false;
		} else {
			$(this).remove();
			emptyMeal = true;
		}
	});
	$thisMember.siblings().add($thisMember.siblings().find(".srmy")).removeClass("choice");
	$thisMeal.find(".srmy").removeClass("entry");
	$thisMember.addClass("choice");
	$thisMeal.find(".srmy, .price").empty();
	$thisMeal.find("input[name=mealNum]").val("");

	// customizing
	$thisMeal.find("input[name=ssrCode]").val("");
	$thisMeal.find("input[name=price]").val("");

	if($thisMeal.siblings(".srmyArea").size() > 0){
		if(!$thisMeal.siblings(".srmyArea").hasClass("disable")){
			$thisMember.find(".srmyArea:last-child .srmy").addClass("choice");
		} else { //삭제하고 나머지가 수정불가상태면 다음 빈칸으로 포커스 이동
			if($thisMember.siblings().size() > 0){
				$thisMember.siblings().each(function(){
					if(!$(this).hasClass("entry")){ //선택안한 탑승객 있으면 자동 포커싱
						$thisMember.add($thisMember.find(".srmy")).removeClass("choice");
						$(this).add($(this).find(".srmy:not(.entry)")).addClass("choice");
						allChoice = false;
						return false;
					} else {
						allChoice = true;
					}
				});
			} else {
				allChoice = true;
			}
		}
		$thisMeal.remove();
	} else {
		$thisMember.removeClass("entry");
		$thisMember.find(".srmy:not(.entry)").addClass("choice");
	}
	$parent.find(".member").each(function(){
		if(!$(this).hasClass("entry")){
			btnInit(obj);
		}
	});
	setSecHeight($parent);
}

var isMealAdd = false;
function addMeal(obj){
	var $parent = $(obj).parents(".mealArea");
	var $thisMember = $(obj).parents(".member");
	$thisMember.find(".srmy").each(function(){
		if($(this).hasClass("entry")){
			isMealAdd = true;
		} else {
			isMealAdd = false;
		}
	});
	if(isMealAdd){
		// customizing
		//$thisMember.append('<div class="srmyArea"><div class="srmy typeB choice"></div><p class="price"></p><input type="hidden" name="mealNum" value=""></div>');
		$thisMember.append('<div class="srmyArea"><input type="hidden" name="ssrCode" value="" /><input type="hidden" name="price" value="" /><div class="srmy choice"></div><p class="price"></p><input type="hidden" name="mealNum" value=""></div>');

		$thisMember.siblings().add($thisMember.siblings().find(".srmy")).removeClass("choice");
		$thisMember.addClass("choice");
		$thisMember.find(".srmyArea .srmy.entry").removeClass("choice");
	}
	setSecHeight($parent);
}

//유상판매
var isSaleAll = new Array();
var saleIdx = 0;
function selectSale(obj){
	var $parent = $(obj).parents(".saleArea");
	var $thisMember;
	var idx = ($parent.attr("id").substring($parent.attr("id").length, $parent.attr("id").length-1)) - 1;
	isSaleAll[idx] = false;

	if(!isSaleAll[idx]){
		$thisMember = $parent.find(".memberList .member.choice");
		$thisMember.find(".srmyArea").each(function(){
			//if(!$(this).find(".srmy").hasClass("entry")){
			if($(this).find(".srmy").hasClass("choice")){

				// customizing : disable인 객체는 return
				if ($(this).hasClass('disable')) return;

				$(this).find(".srmy").empty().append('<p class="text">'+$(obj).parents("li").find(".tit").text()+'</p><a href="#" onclick="delSale(this);return false" class="del">취소</a><a href="#" onclick="addSale(this);return false" class="add">추가</a>');

				// customizing start
				//$(this).find(".price").empty().append($(obj).parents("li").find(".price").html());
				var render = $(obj).parents("li").html();
				var $renderHtml = $(render).find('.price');
				var currency = $(obj).parents("li").find("input[name='currency']").val();
				var price = $(obj).parents("li").find("input[name='price']").val();
				var extrasCd = $(obj).parents("li").find("input[name='extrasCd']").val();
				$renderHtml.find('.unit').text(currency);
				$renderHtml.find('strong').text(price);
				$(this).find(".price").empty().append($renderHtml.html());
				$(this).find('input[name="ssrCode"]').val(extrasCd);
				$(this).find('input[name="price"]').val(price);
				// customizing end

				$(this).find("input[name=saleNum]").val($(obj).parents("li").attr("data"));
				$(this).find(".srmy").add($(this).parents(".member")).addClass("choice entry");
				if($thisMember.siblings().size() > 0){
					$thisMember.siblings().each(function(){
						if(!$(this).hasClass("entry")){ //선택안한 탑승객 있으면 자동 포커싱
							$thisMember.add($thisMember.find(".srmy")).removeClass("choice");
							$(this).add($(this).find(".srmy:not(.entry)")).addClass("choice");
							allChoice = false;
							return false;
						} else {
							allChoice = true;
						}
					});
				} else {
					allChoice = true;
				}
			}
		});
		if(allChoice){ //탑승객 모두 기내식 선택 후에 버튼 플로팅
			btnFloating($(obj));
			isSaleAll[idx] = true;
		}
	}

	setSecHeight($parent);
	return false;
}
function delSale(obj){
	var $parent = $(obj).parents(".saleArea");
	var $thisMember = $(obj).parents(".member");
	var $thisSale = $(obj).parents(".srmyArea");
	var emptySale = false;
	$thisSale.siblings(".srmyArea").each(function(){
		if($(this).find(".srmy").hasClass("entry")){
			emptySale = false;
		} else {
			$(this).remove();
			emptySale = true;
		}
	});
	$thisMember.siblings().add($thisMember.siblings().find(".srmy")).removeClass("choice");
	$thisSale.find(".srmy").removeClass("entry");
	$thisMember.addClass("choice");
	$thisSale.find(".srmy, .price").empty();
	$thisSale.find("input[name=saleNum]").val("");

	// customizing
	$thisSale.find("input[name=ssrCode]").val("");
	$thisSale.find("input[name=price]").val("");

	if($thisSale.siblings(".srmyArea").size() > 0){
		$thisSale.remove();
		$thisMember.find(".srmyArea:last-child .srmy").addClass("choice");
	} else {
		$thisMember.removeClass("entry");
		$thisMember.find(".srmy:not(.entry)").addClass("choice");
	}
	$parent.find(".member").each(function(){
		if(!$(this).hasClass("entry")){
			btnInit(obj);
		}
	});
	setSecHeight($parent);
}

var isSaleAdd = false;
function addSale(obj){
	var $parent = $(obj).parents(".saleArea");
	var $thisMember = $(obj).parents(".member");
	$thisMember.find(".srmy").each(function(){
		if($(this).hasClass("entry")){
			isSaleAdd = true;
		} else {
			isSaleAdd = false;
		}
	});
	if(isSaleAdd){
		// customizing
		//$thisMember.append('<div class="srmyArea"><div class="srmy typeB choice"></div><p class="price"></p><input type="hidden" name="saleNum" value=""></div>');
		$thisMember.append('<div class="srmyArea"><input type="hidden" name="ssrCode" value="" /><input type="hidden" name="price" value="" /><div class="srmy typeB choice"></div><p class="price"></p><input type="hidden" name="saleNum" value=""></div>');

		$thisMember.siblings().add($thisMember.siblings().find(".srmy")).removeClass("choice");
		$thisMember.addClass("choice");
		$thisMember.find(".srmyArea .srmy.entry").removeClass("choice");
	}
	setSecHeight($parent);
}

//라운지
function selectLounge(obj){
	var $parent = $(obj).parents(".loungeArea");
	var $thisMember;
	$thisMember = $parent.find(".memberList .member.choice");
	$thisMember.find(".srmyArea").each(function(){
		if($(this).find(".srmy").hasClass("choice")){
			if ($(this).hasClass('disable')) return;

			$(this).find(".srmy").empty().append('<p class="text">'+$(obj).parents(".select_box").find("input[name='extrasNm']").val()+'</p><a href="#" onclick="delLounge(this);return false" class="del">취소</a>');

			var $renderHtml = $(obj).parents(".select_box").find('.price').html();
			var currency = $(obj).parents(".select_box").find("input[name='currency']").val();
			var price = $(obj).parents(".select_box").find("input[name='price']").val();
			var extrasCd = $(obj).parents(".select_box").find("input[name='extrasCd']").val();

			$(this).find(".price").empty().append($renderHtml);
			$(this).find('input[name="ssrCode"]').val(extrasCd);
			$(this).find('input[name="price"]').val(price);

			$(this).find(".srmy").add($(this).parents(".member")).addClass("choice entry");
			if($thisMember.siblings().size() > 0){
				$thisMember.siblings().each(function(){
					if(!$(this).hasClass("entry")){ //선택안한 탑승객 있으면 자동 포커싱
						$thisMember.add($thisMember.find(".srmy")).removeClass("choice");
						$(this).add($(this).find(".srmy:not(.entry)")).addClass("choice");
						allChoice = false;
						return false;
					} else {
						allChoice = true;
					}
				});
			} else {
				allChoice = true;
			}
		}
	});
	setSecHeight($parent);
	return false;
}
function delLounge(obj){
	var $parent = $(obj).parents(".loungeArea");
	var $thisMember = $(obj).parents(".member");
	var $thisSale = $(obj).parents(".srmyArea");
	var emptySale = false;
	$thisSale.siblings(".srmyArea").each(function(){
		if($(this).find(".srmy").hasClass("entry")){
			emptySale = false;
		} else {
			$(this).remove();
			emptySale = true;
		}
	});
	$thisMember.siblings().add($thisMember.siblings().find(".srmy")).removeClass("choice");
	$thisSale.find(".srmy").removeClass("entry");
	$thisMember.addClass("choice");
	$thisSale.find(".srmy, .price").empty();
	$thisSale.find("input[name=saleNum]").val("");

	// customizing
	$thisSale.find("input[name=ssrCode]").val("");
	$thisSale.find("input[name=price]").val("");

	if($thisSale.siblings(".srmyArea").size() > 0){
		$thisSale.remove();
		$thisMember.find(".srmyArea:last-child .srmy").addClass("choice");
	} else {
		$thisMember.removeClass("entry");
		$thisMember.find(".srmy:not(.entry)").addClass("choice");
	}
	$parent.find(".member").each(function(){
		if(!$(this).hasClass("entry")){
			btnInit(obj);
		}
	});
	setSecHeight($parent);
}

//기내식, 유상판매 상품 추가시 섹션간 높이조절
function setSecHeight(obj){
	if($(".extraArea .head .close").css("display") == "none"){
		$(obj).height("auto");
		var secHeight = new Array();
		secHeight[0] = $(".extraArea .head").height();
		secHeight[1] = $(obj).height();
		secHeight[2] = $(obj).find(".memberList").height() + $(".extraArea .tripTab:visible").height();
		$(".extraArea").height(Math.max.apply(null, secHeight));
		$(obj).height(Math.max.apply(null, secHeight) - $(".extraArea .tripTab:visible").height());
	}
}

//초과수하물, 엔터테인먼트 선택 추가
var isOptAdd = false, ableAdd = false;
function addOpt(obj){
	var $parent, $otherSrmy, $thisLine, selId;
	if($(obj).parents(".bunch").size() > 0){ //pc버젼
		$parent = $(obj).parents(".bunch");
	} else if($(obj).parents(".newMember").size() > 0){ //모바일버젼
		$parent = $(obj).parents(".extrasSec").find(".bunchArea .bunch:eq("+$(obj).parents(".memberList").index()+")");
		var line = $(obj).parents(".line").attr("data");
		$(obj).parents(".extrasSec").find(".bunchArea .bunch:eq("+ $(obj).parents('.memberList').attr("index") +") .memberList .line").each(function(){
			if($(this).attr("data") == line){
				$otherSrmy = $(this);
			}
		});
	}
	$thisLine = $(obj).parents(".line");
	selId = $thisLine.attr("data");
	$parent.find(".baggageArea .line, .enterArea .line").each(function(){
		if($(this).attr("data") == selId){
			$selTarget = $(this);
		}
	});
	$thisLine.find(".srmyArea").each(function(){
		if($(this).find(".srmy").hasClass("entry")){
			ableAdd = true;
		} else {
			ableAdd = false;
		}
	});
	if(ableAdd){
		$thisLine.find(".srmyArea .srmy.choice").removeClass("choice");

		// customizing start
		//var srmyHtml = '<div class="srmyArea"><div class="srmy typeB choice"></div><p class="price"></p></div>';
		var srmyHtml = '<div class="srmyArea">';
		srmyHtml += '<input type="hidden" name="ssrCode" value="" />';
		srmyHtml += '<input type="hidden" name="price" value="" />';
		srmyHtml += '<input type="hidden" name="weight" value="" />';
		srmyHtml += '<input type="hidden" name="unit" value="" />';
		srmyHtml += '<div class="srmy choice"></div><p class="price"></p></div>';
		// customizing end

		$thisLine.append(srmyHtml);
		if($otherSrmy){ //모바일버젼일때 pc도 데이터도 같이 변경
			$otherSrmy.find(".srmy.choice").removeClass("choice");
			$otherSrmy.append(srmyHtml);
		}
		$selTarget.find("select").val(0);
	}
	$(".srmyArea .srmy").on("click", function(e){
		if($(this).parents(".bunch").size() > 0){ //pc버젼
			var $gParent = $(this).parents(".bunchArea");
		} else if($(this).parents(".newMember").size() > 0){ //모바일버젼
			var $gParent = $(this).parents(".newMember");
			choiceBunchMember($(this).parents(".member").find(">a"));
		}
		if(!($(e.target).is(".add, .del"))){
			if(!$(this).parents(".srmyArea").hasClass("disable")){
				$gParent.find(".srmy.choice").removeClass("choice");
				$(this).addClass("choice");
			}
		} else {
			$gParent.find(".srmy.choice").not($(this).parents(".line").find(".srmy.choice")).removeClass("choice");
		}
	});
	if($(".extraArea .head .close").css("display") == "none"){ //pc
		setContHeight($parent);
	} else { //mobile
		choiceBunchMember($(obj).parents(".member").find(">a"));
		setMobileContHeight($(obj).parents(".extrasSec"));
		setMemberSwipe($(obj).parents(".extrasSec"));
	}

}

//초과수하물, 엔터테인먼트 선택 삭제
var isOpt, hasOpt = false;
function delOpt(obj){
	var $parent, $parentMemberList, $otherSrmy, $thisLine, selId;
	var $target = $(obj).parents(".srmyArea").attr("target");
	var $siblings = $(obj).parents(".srmyArea").siblings(".srmyArea");
	if($(obj).parents(".bunch").size() > 0){ //pc버젼
		$parent = $(obj).parents(".bunch");
		$parentMemberList = $parent;
		$parent.siblings(".bunch").find(".member").removeClass("choice");
		var line = $(obj).parents(".line").attr("class").substring($(obj).parents(".line").attr("class").length, $(obj).parents(".line").attr("class").length-1);
	} else if($(obj).parents(".newMember").size() > 0){ //모바일버젼
		$parent = $(obj).parents(".extrasSec").find(".bunchArea .bunch:eq("+$(obj).parents(".memberList").index()+")");
		$parentMemberList = $(obj).parents(".newMember");
		var line = $(obj).parents(".line").attr("data");
		$(obj).parents(".extrasSec").find(".bunchArea .bunch:eq("+ $(obj).parents('.memberList').attr("index") +") .memberList .line").each(function(){
			if($(this).attr("data") == line){
				$otherSrmy = $(this).find(".srmyArea:eq("+($(obj).parents(".srmyArea").index()-1)+")");
			}
		});
		$(obj).parents(".memberList").siblings(".memberList").find(".member").removeClass("choice");
		$parent.siblings(".bunch").find(".content").hide();
		$parent.find(".content").show();
	}
	$thisLine = $(obj).parents(".line");
	selId = $thisLine.attr("data");
	$parent.find(".baggageArea .line, .enterArea .line").each(function(){
		if($(this).attr("data") == selId){
			$selTarget = $(this);
		}
	});
	$selTarget.find("select").val(0);
	$(obj).parents(".member").addClass("choice");
	if($siblings.size() > 0){ //두개이상 선택한 후에 삭제할때는 한칸삭제
		$(obj).parents(".srmyArea").remove();
		if($otherSrmy){ //모바일버젼일때 pc 데이터도 같이 변경
			$otherSrmy.remove();
		}
	}
	$parent.find("[data=line"+ line +"] select[name="+$target+"]").val(0);
	$(obj).parents(".srmyArea").removeClass().addClass("srmyArea").removeAttr("target");
	if($otherSrmy){ //모바일버젼일때 pc도 데이터도 같이 변경
		$otherSrmy.removeClass().addClass("srmyArea").removeAttr("target");
	}
	/*
	$parentMemberList.find(".member .srmyArea").each(function(){
		if(!$(this).attr("target")){
			hasOpt = false;
		} else {
			hasOpt = true;
			return false;
		}
	});
	*/

	// customizing start - 데이터 clear
	$(obj).parents(".srmyArea").find('input[name="ssrCode"]').val('');
	$(obj).parents(".srmyArea").find('input[name="price"]').val('');
	$(obj).parents(".srmyArea").find('input[name="weight"]').val('');
	$(obj).parents(".srmyArea").find('input[name="unit"]').val('');
	// customizing end

	$(obj).parents(".srmyArea").find(".srmy").removeClass("choice entry");
	$(obj).parents(".srmyArea").find(".srmy, .price").empty();

	if($otherSrmy){ //모바일버젼일때 pc도 데이터도 같이 변경
		$otherSrmy.find(".srmy").removeClass("choice entry");
		$otherSrmy.find(".srmy, .price").empty();

		// customizing start - 데이터 clear
		$otherSrmy.find('input[name="ssrCode"]').val('');
		$otherSrmy.find('input[name="price"]').val('');
		$otherSrmy.find('input[name="weight"]').val('');
		$otherSrmy.find('input[name="unit"]').val('');
		// customizing end
	}

	$parentMemberList.find(".member .srmyArea .srmy").each(function(){
		if($(this).hasClass("entry")){
			hasOpt = true;
			return false;
		} else {
			hasOpt = false;
		}
	});
	if(!hasOpt){ //선택요소가 아무것도 없을때
		$parentMemberList.find(".member").removeClass("entry");
		//$(obj).parents(".member").removeClass("entry");
	}
}

//초과수하물, 엔터테인먼트 높이값 셋팅 (PC)
function setContHeight(obj){
	$(".extraArea").height("auto");
	obj.parents(".extrasSec").height("auto");
	obj.find(".memberList, .content").height("auto");
	obj.each(function(){
		var cHeight1 = $(this).find(".memberList").height();
		var cHeight2 = $(this).find(".content").height();
		var maxHeight = cHeight1;
		if(cHeight1 < cHeight2){
			maxHeight = cHeight2;
		}
		$(this).find(".memberList, .content").height(maxHeight);
		$(this).parents(".bunchArea").height("auto");
	});
}

//초과수하물, 엔터테인먼트 높이값 셋팅 (mobile)
var tHeight, tHeight2, tSize, maxTop, maxTop2;
function setMobileContHeight(obj){
	obj.add(obj.find(".memberList, .content")).height("auto");
	tHeight = new Array;
	tHeight2 = new Array;
	tSize = $(obj).find(".bunch").size();
	obj.find(".bunch").each(function(){
		tHeight[$(this).index()] = $(this).find(".memberList").height();
		tHeight2[$(this).index()] = $(this).find(".memberList").height() + parseInt($(this).find(".memberList").css("padding-top")) + parseInt($(this).find(".memberList").css("padding-bottom"));
	});
	maxTop = Math.max.apply(null, tHeight);
	maxTop2 = Math.max.apply(null, tHeight2);
	obj.find(".memberList").css("min-height", maxTop + "px");
	obj.find(".content").css("top", maxTop2+"px");
	var cHeight = obj.find(".content").height() + parseInt(obj.find(".content").css("padding-bottom"));
	obj.find(".bunchArea").height(cHeight+maxTop2);
}

//초과수하물, 엔터테인먼트 탑승객 선택 (mobile)
function choiceBunchMember(obj){
	if($(".extraArea .head .close").css("display") != "none"){
		var idx = $(obj).parents(".memberList").index();
		$(obj).parents(".memberList").siblings().find(".member, .member .srmy").removeClass("choice");
		$(obj).parents(".extrasSec").find(".bunch:eq("+ idx +")").siblings().find(".content").hide();
		$(obj).parents(".member").addClass("choice");
		$(obj).parents(".extrasSec").find(".bunch:eq("+ idx +")").find(".content").show();
		//리사이징시 pc버젼을 위한
		$(obj).parents(".extrasSec").find(".bunch .member").removeClass("choice");
		$(obj).parents(".extrasSec").find(".bunch:eq("+ idx +") .member").addClass("choice");

	}
}

var newMemberSwiper;
function setMemberSwipe(obj){
	if(!isBunchMemberList){
		obj.find(".newMember").empty();
		var memberList = new Array();
		obj.find(".bunch").each(function(){
			memberList[$(this).index()] = $(this).find(".memberList").clone().attr("index", $(this).index());
			obj.find(".newMember").append(memberList[$(this).index()]);
		});
		newMemberSwiper = new Swiper(obj, {
			slidesPerView: "auto"
		});
		obj.find(".newMember .swiper-slide").each(function(){
			if($(this).find(".member").hasClass("choice")){
				newMemberSwiper.slideTo($(this).index(), 0);
			}
		});

		$("#baggageSec:visible .srmyArea .srmy").on("click", function(e){
			var $otherSrmy;
			var $gParent = $(this).parents(".newMember");
			var $this = $(this);
			$(obj).find(".bunchArea .bunch:eq("+ $(this).parents('.memberList').attr("index") +") .memberList .line").each(function(){
				if($(this).attr("data") == $this.parents(".line").attr("data")){
					$otherSrmy = $(this);
				}
			});
			if(!($(e.target).is(".add, .del"))){
				if(!$(this).parents(".srmyArea").hasClass("disable")){
					$gParent.find(".srmy.choice").removeClass("choice");
					$(this).addClass("choice");
					if($otherSrmy){ //모바일버젼일때 pc도 데이터도 같이 변경
						$(obj).find(".bunchArea .srmy.choice").removeClass("choice");
						$otherSrmy.find(".srmy.choice").removeClass("choice");
						$otherSrmy.find(".srmyArea:eq("+($(this).parents(".srmyArea").index()-1)+") .srmy").addClass("choice");
					}
				}
			} else {
				$gParent.find(".srmy.choice").not($(this).parents(".line").find(".srmy.choice")).removeClass("choice");
				if($otherSrmy){ //모바일버젼일때 pc도 데이터도 같이 변경
					$(obj).find(".bunchArea .srmy.choice").not($(this).parents(".line").find(".srmy.choice")).removeClass("choice");
					$otherSrmy.find(".srmyArea:eq("+$(this).parents(".srmyArea").index()+") .srmy").addClass("choice");
				}
			}
			choiceBunchMember($(this).parents(".member").find(">a"));

		});
		isBunchMemberList = true;
	}
}

function getMealList(param){
	$.each(SeatRes.flightSegmentDetailsTypeList,function(i,e){
		if(e.segmentId == $(param).attr('segmentid')){
			if(!e.mealVisible){
				var nextExecution = function() {

					showLoading();

					// 다음 구간으로 이동
					var target = $('#mealSec').find('.slideCont').find('li.choice').next('li').find('a');
					if (target.length > 0) {
						// 다음 구간으로 이동
						selctMealCurrrentSeg(target);
						$('button.next:visible').click();
					}
					else {
						// 다음 부가서비스로 이동
						moveNextAncillary();
					}
				}

				hideLoading();
				alertLayerForCallback($.i18n.prop('hom.ibe.rsv.lbl.306'), nextExecution, {});
			}
		}
	});
}