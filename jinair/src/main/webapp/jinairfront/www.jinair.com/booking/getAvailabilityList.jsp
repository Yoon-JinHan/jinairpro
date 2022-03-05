<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>


<title>항공편 선택 | Fly, better fly_Jin Air</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="_csrf" content="62024c52-e394-4ab2-8f36-630483b88f4b" />
    <meta name="_csrf_header" content="X-CSRF-TOKEN" />

    <link rel="stylesheet" href="//images.jinair.com/css/default.css"/>
    <link rel="stylesheet" href="//images.jinair.com/css/common.css"/>

    
        
            
            
                <link rel="stylesheet" href="//images.jinair.com/css/font.css"/>
            
        
    
    <link rel="stylesheet" href="//images.jinair.com/css/layout.css"/>
    <link rel="stylesheet" href="//images.jinair.com/css/booking.css"/>

    <link rel="stylesheet" href="//images.jinair.com/css/tablet.css" media="all and (max-width:1024px)"/>
    <link rel="stylesheet" href="//images.jinair.com/css/mobile.css" media="all and (max-width:640px)"/>

    

    

    <script type="text/javascript">
		document.domain = 'localhost';

		
		var	globalImageServer	= 'images.jinair.com';
		var	globalLoginYn		= ('Y' == 'Y') ? 'Y' : 'N';
		var __homepage__ = {
			accessChannel: ''
		};
		

		var __global__ = __global__ || {};
		__global__ = {
			
			imageServer: 'images.jinair.com',
			loginYn: 'Y',
			accessChannel: '',
			csrfHeader: 'X-CSRF-TOKEN',
			csrfToken: '62024c52-e394-4ab2-8f36-630483b88f4b',
			isMobile: false,
			isApp: false,
			isLoggedIn: true,
			login: {
				isLoggedIn: true,
				type: 'normal'
			},
			user: {
                number: 'GPR1987133',
				gender: 'M',
				age: '29',
				nationality: 'KOR',
                level: ''
			}
		};
    </script>

    

<!-- 
<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','../js/apm/appinsightor.min.js','ne'); //*************************************************
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!30396@207:1641693979697'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>
 -->
    <script type="text/javascript" src="../js/hom/pub/front/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.cycle.all.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/swiper.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/iscroll.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-efuSlider.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ieSlide.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.plugin.js"></script>

    <script type="text/javascript" src="../js/hom/lib/front/netfunnel.js"></script>
    <script type="text/javascript" src="../js/hom/lib/front/NetFunnel_Skin.js"></script>

    <script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js"></script>
    <script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=62024c52-e394-4ab2-8f36-630483b88f4b"></script>
    <script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/common.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/common.pages.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/chatbot.js"></script>

    <script src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js" async></script>


    <!--[if IE 9]>
    <link rel="stylesheet" href="//images.jinair.com/css/content.ie9.css"/>
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="//images.jinair.com/css/content.ie8.css"/>
    <script type="text/javascript" src="../js/hom/pub/front/respond.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.ie8.js"></script>
    <![endif]-->
    
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P9MZDT6');</script>
<!-- End Google Tag Manager -->
	
	<meta name="_csrf" content="62024c52-e394-4ab2-8f36-630483b88f4b" />
	<meta name="_csrf_header" content="X-CSRF-TOKEN" />
	<script type="text/javascript" src="../js/hom/lib/front/js.cookie.js"></script>
	<script type="text/javascript" src="../js/hom/lib/front/jsrender.min.js"></script>
	<script type="text/javascript"	src="../js/hom/lj/front/booking/promise.js"></script>
	<script type="text/javascript" src="../js/hom/lj/front/booking/getAvailabilityList.js"></script>
	<style>:focus:not(:focus-visible) { outline: none }</style>

</head>

<body>
<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>

<div id="wrapper">
        
 <%@include file="/header.jsp" %>
 
     <script type="text/javascript">

		
		
		$.ajax({
			type : "POST",
			url : "<%= contextPath %>//jinairfront/www.jinair.com/common/getRoundingCurrencyYN.json",
			dataType: "text",
			async: false,
			contentType	: "application/json; charset=UTF-8",
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");

				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			success : function(data) {
				if (data == 'true') {
					roundingCurrencyYN = true;
				}
			},
			error : function(data) {
			}
		});
		var loginInfoType = "LOGOUT";
		
		
		loginInfoType = "MEMBER";
		
		
		
		
		

    </script>
<script type="text/javascript">
var __header__ = __header__ || {};

$(document).ready(function() {
	$.i18n.properties({
		name: ['messages', 'ibeBooking'],
		path: '../i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			__header__.initialize();
		}
	});
});

__header__.initialize = function() {
	$(document).on('click', 'a[href="/login/logout"]', function() {
		doLogOut(); // mobile App 연계
		_satellite.track('user_logout');
		return true;
	});

	// band Notice JS
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)) {
		//IE9 이상(swiper js)
		__header__.noticeBarSwiper = new Swiper('.bandNotice .swiper-container', {
			pagination: '.swiper-pagination',
			paginationType: 'fraction',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			loop: true,
			autoplay: 3000
		});
	} else {
		//IE9 이하 (bxSlider js)
		$('.bandNotice .swiper-wrapper').bxSlider({
			minSlides: 1,
			moveSlides: 1,
			slideMargin: 0,
			infiniteLoop: true,
			auto: true,
			autoDelay: 3000
		});
	}
	//play, stop
	$('.bandNotice .swiper-wrapper .swiper-slide').on( 'mouseenter focusin', function() {
		__header__.noticeBarSwiper.stopAutoplay();
	});
	$('.bandNotice .swiper-wrapper .swiper-slide').on( 'mouseleave focusout', function() {
		__header__.noticeBarSwiper.startAutoplay();
	});

	// 알림바 오늘 하루 보지 않기 클릭
	$(document).on('click', '[role="btn-hide-1d-notice"]', function() {
		var checked = $(this).prop('checked');
		if(!checked) {
			return;
		}

		setCookie($(this).val(), 'done', 1);

		removeNoticeBarSlide($(this).data('target-slide'));
	});

	// 알림바 닫기 클릭
	$(document).on('click', '[role="btn-hide-notice"]', function() {
		removeNoticeBarSlide($(this).data('target-slide'));
		if(typeof onNoticeBarChanged === 'function') {
			onNoticeBarChanged();
		}
	});

	// 지역(언어)/통화 표시 영역 클릭
	$('[role="btn-change-locale"]').on('click', function() {
		showPopupLayer('../common/header/localeSelectLayer?from=' + encodeURIComponent(location.href));
	});

	// 앱 내 새창 열기 제어
	$(document).on('click', '[data-need-app-except="true"][target="_blank"]', function() {
		var href = $(this).attr('href');
		if(!href) {
			return false;
		}

		// 앱이 아니면 기존 링크로 이동
		if(!__global__.isApp) {
			return true;
		}

		// 앱일 경우, 앱 인터페이스 실행
		doWebURL(href);
		return false;
	});
}

function removeNoticeBarSlide(slideIndex) {
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)) {
		var index = -1;
		var entry = $('.bandNotice .swiper-wrapper .swiper-slide:not(.swiper-slide-duplicate)');
		for(var i = 0; i < entry.length; i++) {
			if(slideIndex === $(entry[i]).data('slide-index')) {
				index = $(entry[i]).index() - 1;
				break;
			}
		}

		__header__.noticeBarSwiper.removeSlide(index);
		__header__.noticeBarSwiper.startAutoplay();
	} else {
		$('[data-slide-index="' + slideIndex + '"]').remove();
	}

	var remained = $('.bandNotice .swiper-slide').length;
	if(remained === 0) {
		$('.bandNotice').remove();
	}
}
</script>


        
<!-- Google Tag Manager (noscript) -->

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9MZDT6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<!-- End Google Tag Manager (noscript) -->
	<!-- Adobe Analytics  -->
	<script type="text/javascript">
		_dl ={"channel":"pc","login_status":"Y","login_type":"normal","page_event":{"booking_step2":true,"trip_isModifyBooking":false},"page_name":"Booking^Step2_Choose flights","page_url":"getAvailabilityList.jsp","products":[{"trip_bookingClass":"","trip_category":"","trip_date":"2022.01.11|","trip_depDay":"","trip_depTime":"","trip_flightNumber":"","trip_fuelSurcharge":"","trip_journeyOrigin":"","trip_passengerDetail":"","trip_passengerInfo":"1-0-0","trip_passengerNum":1,"trip_purchase_channel":"","trip_segment":"GMP-CJU|","trip_tax":"","trip_ticketPrice":"","trip_type":"RT"}],"site_currency":"KRW","site_language":"KOR","site_name":"Jin Air","site_region":"KOR","today_currency":0,"trip_id":"","user_age":29,"user_gender":"M","user_level":"","user_nationality":"KOR","user_number":"GPR1987133"};
	</script>
	<!-- Adobe Analytics  -->

	<!--container-->
	<div id="container">
		<input type="hidden" id="globalLangCd" value="KOR">
		






<div id="quickModify">
	<ul class="srmy">
		<li class="trip"><div class="wrap">
			<div class="multiArea">
				<ul id="basketFullSeg">
				</ul>
				<p class="more transition"><a href="#" onclick="showMulti(); return false">다구간 더보기</a></p>
			</div><!-- //다구간 -->
		</div></li>
		<li class=""><div class="wrap">
			<p class="tit">탑승객수</p>
			<p class="cont"><em></em></p>
		</div></li>
	</ul>
	<p class="btn"><a href="javascript:;" onclick="showItinerary(); return false"><span>수정</span></a></p>
	<div class="modifyLayer" style="display:none">
		<p class="close"><a href="#" onclick="hideItinerary(); return false">닫기</a></p>
		<div class="bookHead">
			<div class="type">
				<ul>
					<li><input type="radio" name="tripType" value="RT" id="type1" checked><label for="type1">왕복</label></li>
					<li><input type="radio" name="tripType" value="OW" id="type2"><label for="type2">편도</label></li>
					<li><input type="radio" name="tripType" value="MC" id="type3"><label for="type3">다구간</label></li>
				</ul>
			</div>
		</div>
		







<input type="hidden" id="globalLangCd" value="KOR">

<div class="itinerary" style="display:;">

	<div class="sec memberNum active"><!-- 활성상태 active -->
		<p class="srmy setting"><a href="#" onclick="showBooking(this); return false" class="icoFold">탑승객수<strong>성인1</strong></a></p>
		<div class="content member">
			<h2>탑승객수</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul>
					<li>
						<span><strong name="adultPaxCnt" name="adultPaxCnt">1</strong>성인</span>
						<a href="#" name="adultPaxCntDown" onclick="fnSetPaxCountDown('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="adultPaxCntUp" onclick="fnSetPaxCountUp('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="childPaxCnt" name="childPaxCnt">0</strong>소아
							<a href="#popAge1" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge1" class="popAgeLayer">
								<p>소아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 만 2세 – 만 13세 미만</li>
									<li>[국제선] 만 2세 – 만 12세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge1" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="childPaxCntDown" onclick="fnSetPaxCountDown('CHILD',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a><!-- 성인 9명 선택시 소아 비활성 : disable -->
						<a href="#" name="childPaxCntUp" onclick="fnSetPaxCountUp('CHILD',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="infantPaxCnt" name="infantPaxCnt">0</strong>유아 
							<a href="#popAge2" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge2" class="popAgeLayer">
								<p>유아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 생후 7일 이상 – 만 2세 미만</li>
									<li>[국제선] 생후 7일 이상 – 만 2세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge2" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="infantPaxCntDown" onclick="fnSetPaxCountDown('INFANT',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="infantPaxCntUp" onclick="fnSetPaxCountUp('INFANT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
				</ul>
				<p class="btn"><a href="#" onclick="setMemberNum(this);return false" class="btnTypeA">확인</a></p>
				<div class="caution">
					
					<p class="cal"><a href="javascript:;">유/소아 나이계산기</a></p>
				</div>
				<div class="ageCal"><!-- 모바일에서만 노출 -->
					<h3>유/소아 나이계산기</h3>
					




<div class="ageType">
	<input type="radio" name="rdoType_" id="type1" checked="checked"><label for="type1">국제선</label>
	<input type="radio" name="rdoType_" id="type2"><label for="type2">국내선</label>
</div>
<fieldset class="calculator">
	<p class="calculator_birth">
		<label for="birth">생년월일</label>
		<span>
		<select id="birth" name="cboYear" title="생년월일 년 선택">
			<option value="">2016</option>
			<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="생년월일 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" id="cboBirthDay" title="생년월일 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>

	<p class="calculator_date">
		<label for="date">가는날</label>
		<span>
		<select name="cboYear" id="date" title="가는날 년 선택">
				<option value="">2017</option>
				<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="가는날 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" title="가는날 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>
	<p class="btnArea">
		<a href="javascript:;" name="btnCalculate" class="btnTypeA">계산하기</a>
		<a href="#" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a>
	</p>
</fieldset>
<p class="ageResult"></p>

<script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js"></script>
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	setPopup();

	$.i18n.properties({
		name: ['messages', 'common','ibeBooking', 'ibeContentsBooking', 'member'],
		path: '../i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			if(typeof autoLoginInApp === 'function') {
				autoLoginInApp();
			}
		}
	});

	//기본날짜 셋팅
	var selectDate = new Date();
	

	//생년월일 기본값 설정
	$("select[name=cboYear]").empty();
	$("select[name=cboMonth]").empty();
	$("select[name=cboDay]").empty();

	var dateArea =  $(".calculator_date");
	var birthArea =  $(".calculator_birth");
// 	birthArea.find("[name=cboYear]").append($("<option>" + '년' + "</option>"));
	birthArea.find("[name=cboMonth]").append($("<option>" + '월' + "</option>"));
	birthArea.find("[name=cboDay]").append($("<option>" + '일' + "</option>"));

	var selectYear = selectDate.getFullYear();
	var selectMonth = selectDate.getMonth()+1;
	var selectDay = selectDate.getDate();
	var defaultYear = (new Date()).getFullYear();
	selectMonth = selectMonth < 10 ? "0" + selectMonth : selectMonth;
	selectDay = selectDay < 10 ? "0" + selectDay : selectDay;

	//Year
	var birthYearHTML = '<option>년</option>';
	var departureYearHTML = '';
	for(var i = defaultYear - 15; i <= defaultYear + 1; i++) {
		if(i <= defaultYear) {
			birthYearHTML += '<option>' + i + '</option>';
		}

		var selected = selectYear == i ? ' selected' : '';
		departureYearHTML += '<option' + selected + '>' + i + '</option>';
	}
	$('.calculator_birth select[name="cboYear"]').html(birthYearHTML);
	$('.calculator_date select[name="cboYear"]').html(departureYearHTML);

	//Month
	for (var i = 1; i <= 12; i++) {
		i = i < 10 ? "0" + i : i;
		$("select[name=cboMonth]").append($("<option>" + i + "</option>"));

		if (selectMonth == i) {
			dateArea.find("[name=cboMonth]").val(i);
		}
	}

	//Day
	for (var i = 1; i <= 31; i++) {
		i = i < 10 ? "0" + i : i;
		$("select[name=cboDay]").append($("<option>" + i + "</option>"));

		if (selectDay == i) {
			dateArea.find("[name=cboDay]").val(i);
		}
	}

	$(".calculator select").focus();

	

	//버튼 이벤트
	$("[name=btnCalculate]").click(function(){
		var _this = $(this).closest(".calculator");
		var dateArea = _this.find(".calculator_date");
		var birthArea = _this.find(".calculator_birth");

		if (birthArea.find("[name=cboYear] option:selected").index() == 0 || birthArea.find("[name=cboMonth] option:selected").index() == 0 || birthArea.find("[name=cboDay] option:selected").index() == 0) {
			alertLayer($.i18n.prop("lj.ibe.b2c.rsv.022"));
			return false;
		}

		var birthDate = new Date(Number(birthArea.find("[name=cboYear] option:selected").val()), Number(birthArea.find("[name=cboMonth] option:selected").val())-1, Number(birthArea.find("[name=cboDay] option:selected").val()));
		var depDate = new Date(Number(dateArea.find("[name=cboYear] option:selected").val()), Number(dateArea.find("[name=cboMonth] option:selected").val())-1, Number(dateArea.find("[name=cboDay] option:selected").val()));
		var calAge = calcAge(birthArea.find("[name=cboYear] option:selected").val()+birthArea.find("[name=cboMonth] option:selected").val()+birthArea.find("[name=cboDay] option:selected").val(),depDate);

		var paxInfo = "";

		if(getCompareTime(birthDate, 6) > depDate) {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.222');
		} else if (calAge < 2) {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.014');
		} else if (calAge < (_this.siblings(".ageType").find("#type1").is(':checked')?12:13)) {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.013');
		} else {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.012');
		}

		$(".ageResult").html($.i18n.prop("hom.ibe.ctn.rsv.006").replace("{0}",dateArea.find("[name=cboYear] option:selected").val()+"-"+dateArea.find("[name=cboMonth] option:selected").val()+"-"+dateArea.find("[name=cboDay] option:selected").val()).replace("{1}",paxInfo));

		setPopup();
	});
});
</script>

				</div>
			</div>
		</div><!-- //member -->
	</div><!-- //memberNum(탑승객수) -->
	<div class="sec departure">
		<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">출발지<strong></strong></a></p>
		<div class="content">
			<h2>출/도착 선택</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul class="cityList" name="depCity">
				</ul>
			</div>
		</div><!-- //content -->
	</div><!-- //departure(출발지) -->
	<div class="sec destination">
		<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">도착지<strong></strong></a></p>
		<!-- 출발지 선택안하고 도착지 클릭했을때<p class="srmy"><a href="#" onclick="alertLayer('출발지가 선택되지 않았습니다.'); return false" class="icoFold">도착지<strong></strong></a></p> -->
		<!-- [dev] 처음엔 p class="choice"가 없는 상태, 레이어에서 지역선택하면 p에 class="choice" 추가되고 strong에 선택한 지역이 표시됨 -->
		<div class="content">
			<h2>출/도착 선택</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul class="cityList" name="arrCity">
				</ul>
			</div>
		</div><!-- //content -->
	</div><!-- //destination(도착지) -->
	<div class="sec date" name="calendar">
		<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'가는날'); return false" class="icoFold">가는날<strong></strong></a></p></div>
		<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'오는날', true); return false" class="icoFold">오는날<strong></strong></a></p></div>
	</div>
</div><!-- //itinerary -->
<!-- 다구간 -->
<div class="itinerary multiCourse" style="display:none;">
	<div class="sec memberNum active"><!-- 활성상태 active -->
		<p class="srmy setting"><a href="javascript:;" onclick="showBooking(this); return false" class="icoFold">탑승객수<strong>성인1</strong></a></p>
		<div class="content member">
			<h2>탑승객수</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul>
					<li>
						<span><strong name="adultPaxCnt" name="adultPaxCnt">1</strong>성인</span>
						<a href="#" name="adultPaxCntDown" onclick="fnSetPaxCountDown('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="adultPaxCntUp" onclick="fnSetPaxCountUp('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="childPaxCnt" name="childPaxCnt">0</strong>소아
							<a href="#popAge1" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge1" class="popAgeLayer">
								<p>소아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 만 2세 – 만 13세 미만</li>
									<li>[국제선] 만 2세 – 만 12세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge1" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="childPaxCntDown" onclick="fnSetPaxCountDown('CHILD',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a><!-- 성인 9명 선택시 소아 비활성 : disable -->
						<a href="#" name="childPaxCntUp" onclick="fnSetPaxCountUp('CHILD',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="infantPaxCnt" name="infantPaxCnt">0</strong>유아 
							<a href="#popAge2" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge2" class="popAgeLayer">
								<p>유아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 생후 7일 이상 – 만 2세 미만</li>
									<li>[국제선] 생후 7일 이상 – 만 2세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge2" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="infantPaxCntDown" onclick="fnSetPaxCountDown('INFANT',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="infantPaxCntUp" onclick="fnSetPaxCountUp('INFANT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
				</ul>
				<p class="btn"><a href="#" onclick="setMemberNum(this); return false" class="btnTypeA">확인</a></p>
				<div class="caution">
					
		<p>소아 : 만2세 ~ 13세 미만 (국제선 만 12세 미만)</p>
   		<p>유아 : 만 2세 미만</p>
	
					<p class="cal"><a href="javascript:;">유/소아 나이계산기</a></p>
				</div>
				<div class="ageCal"><!-- 모바일에서만 노출 -->
					<h3>유/소아 나이계산기</h3>
					




<div class="ageType">
	<input type="radio" name="rdoType_multiCourse" id="type1" checked="checked"><label for="type1">국제선</label>
	<input type="radio" name="rdoType_multiCourse" id="type2"><label for="type2">국내선</label>
</div>
<fieldset class="calculator">
	<p class="calculator_birth">
		<label for="birth">생년월일</label>
		<span>
		<select id="birth" name="cboYear" title="생년월일 년 선택">
			<option value="">2016</option>
			<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="생년월일 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" id="cboBirthDay" title="생년월일 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>

	<p class="calculator_date">
		<label for="date">가는날</label>
		<span>
		<select name="cboYear" id="date" title="가는날 년 선택">
				<option value="">2017</option>
				<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="가는날 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" title="가는날 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>
	<p class="btnArea">
		<a href="javascript:;" name="btnCalculate" class="btnTypeA">계산하기</a>
		<a href="#" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a>
	</p>
</fieldset>
<p class="ageResult"></p>

				</div>
			</div>
		</div><!-- //member -->
	</div><!-- //memberNum(탑승객수) -->
	<ul class="course">
		<li>
			<div class="sec departure">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">출발지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="depCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //departure(출발지) -->
			<div class="sec destination">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">도착지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="arrCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //destination(도착지) -->
			<div class="sec" name="calendar">
				<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'가는날'); return false" class="icoFold">가는날<strong></strong></a></p></div>
			</div>
		</li>
		<li>
			<div class="sec departure">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">출발지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="depCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //departure(출발지) -->
			<div class="sec destination">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">도착지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="arrCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //destination(도착지) -->
			<div class="sec" name="calendar">
				<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'가는날'); return false" class="icoFold">가는날<strong></strong></a></p></div>
			</div>
		</li>
	</ul>
	<p class="more" style="display: none;"><a href="#" onclick="addCourse(); return false">구간추가</a></p>
</div>
<!-- //다구간 -->
<script>

</script>

<script id="depTemplate" type="text/x-jsrender">
 {{if #getIndex() == 0}}
<li class="on">
	<p class="icoFold on">{{:regionName}}</p>
 {{else}}
<li>
	<p class="icoFold">{{:regionName}}</p>
 {{/if}}
	<ul regcode="{{:regionCode}}">
		{{for airportList}}
			<li {{if (iataCityAirportCode == 'DAC')}}class="disable"{{/if}}><a href="#" onclick="setCity(this); return false">{{:cityAirportName}}</a><input type='hidden' name="ApoCode" country="{{:countryCode}}" value="{{:iataCityAirportCode}}"></li>
		{{/for}}
	</ul>
</li>
</script>
<script id="arrTemplate" type="text/x-jsrender">
 {{if #getIndex() == 0}}
<li class="on">
	<p class="icoFold on">{{:regionName}}</p>
 {{else}}
<li>
	<p class="icoFold">{{:regionName}}</p>
 {{/if}}
	<ul regcode="{{:regionCode}}">
		{{for airportList}}
			<li {{if (iataCityAirportCode == 'DAC')}}class="disable"{{/if}} ><a href="#" onclick="setCity(this); ">{{:cityAirportName}}</a><input type='hidden' name="ApoCode" country="{{:countryCode}}" value="{{:iataCityAirportCode}}"></li>
		{{/for}}
	</ul>
</li>
</script>

<script type="text/javascript">
	var sid = ('prd' == 'prd') ? 'service_1' : 'service_2';
	var aid = ('prd' == 'prd') ? 'avail' 	 : 'stg_avail';

	$(document).ready(function() {

		//var globalLangCd =  'KOR';
		

		
		netfunnelVisible = true;
		
	});
</script>
<script type="text/javascript" src="../js/hom/lj/front/booking/getItinerary.js"></script>
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>


<%
	String searchType = request.getParameter("searchType");
	String origin1 = request.getParameter("origin1");
	String destination1 = request.getParameter("destination1");
	String origin2 = request.getParameter("origin2");
	String destination2 = request.getParameter("destination2");
	String origin3 = request.getParameter("origin3");
	String destination3 = request.getParameter("destination3");
	String origin4 = request.getParameter("origin4");
	String destination4 = request.getParameter("destination4");
	String adultPaxCount = request.getParameter("adultPaxCount") == "" ? "0" : request.getParameter("adultPaxCount");
	String childPaxCount = request.getParameter("childPaxCount") == "" ? "0" : request.getParameter("childPaxCount");
	String infantPaxCount = request.getParameter("infantPaxCount") == "" ? "0" : request.getParameter("infantPaxCount");
	String tripType = request.getParameter("tripType");
%>

<form id="registerform"  action="getAvailabilityList.jsp"> <!-- ******************************** -->
			<input type="hidden"  	id="_csrf" 				name="_csrf"				value="${ param._csrf }" 			/>
			<input type="hidden" 	id="searchType" 		name="searchType" 			value= "${ param.searchType }"		/>
			<input type="hidden" 	id="origin1" 			name="origin1"              value= "${ param.origin1 }"        	/>
			<input type="hidden" 	id="destination1" 		name="destination1"         value= "${ param.destination1 }"	/>
			<input type="hidden" 	id="travelDate1" 		name="travelDate1"          value= "${ param.travelDate1 }"		/>
			<input type="hidden" 	id="origin2" 			name="origin2"              value= "${ param.origin2 }"        	/>
			<input type="hidden" 	id="destination2" 		name="destination2"         value= "${ param.destination2 }"	/>
			<input type="hidden" 	id="travelDate2" 		name="travelDate2"          value= "${ param.travelDate2 }"		/>
			
			<input type="hidden" 	id="origin3" 			name="origin3"              value="${ param.origin3 }"        />
			<input type="hidden" 	id="destination3" 		name="destination3"         value="${ param.destination3 }"	/>
			<input type="hidden" 	id="travelDate3" 		name="travelDate3"          value="${ param.travelDate3 }"    />
			<input type="hidden" 	id="origin4" 			name="origin4"              value="${ param.origin4 }"        />
			<input type="hidden" 	id="destination4" 		name="destination4"         value="${ param.destination4 }"	/>
			<input type="hidden" 	id="travelDate4" 		name="travelDate4"          value="${ param.travelDate4 }"    />
			<input type="hidden" 	id="pointOfPurchase" 	name="pointOfPurchase"      value= "${ param.pointOfPurchase }" />
			<input type="hidden" 	id="adultPaxCount" 		name="adultPaxCount"        value= "${ param.adultPaxCount }"	/>
			<input type="hidden" 	id="childPaxCount" 		name="childPaxCount"        value= "${ param.childPaxCount }"	/>
			<input type="hidden" 	id="infantPaxCount" 	name="infantPaxCount"       value= "${ param.infantPaxCount }"	/>
			<input type="hidden" 	id="tripType" 			name="tripType"             value= "${ param.tripType }"		/>
			<input type="hidden" 	id="pnrNumber" 			name="pnrNumber"            value= "${ param.pnrNumber }"		/>
		
			<input type="hidden" 	id="domIntType" 		name="domIntType"           value= "${ param.domIntType }"		/>
			<input type="hidden"	id="segmentId1"			name="segmentId1"			value="">
			<input type="hidden"	id="segmentId2"			name="segmentId2"			value="">
			<input type="hidden"	id="segmentId3"			name="segmentId3"			value="">
			<input type="hidden"	id="segmentId4"			name="segmentId4"			value="">
			<input type="hidden"	id="isModify1"			name="isModify1"			value="true">
			<input type="hidden"	id="isModify2"			name="isModify2"			value="true">
			<input type="hidden"	id="isModify3"			name="isModify3"			value="true">
			<input type="hidden"	id="isModify4"			name="isModify4"			value="true">
		
			<input type="hidden" 	id="cpnNo"				name="cpnNo"				value= "${ param.cpnNo }"			/>
			<input type="hidden" 	id="promoCode"			name="promoCode"			value= "${ param.promoCode }"		/>
			<input type="hidden" 							name="userBirth" 			value= "${ param.userBirth }" 		/>
			<input type="hidden" 	id="refVal"				name="refVal"				value= "${ param.refVal }"			/>
			<input type="hidden" 	id="refPop"				name="refPop"				value= "${ param.refPop }"			/>
			<input type="hidden" 	id="refChannel"			name="refChannel"			value= "${ param.refChannel }"		/>
			<input type="hidden" 	id="refLang"			name="refLang"				value= "${ param.refLang }"			/>
			<input type="hidden" 	id="userId"				name="userId" 				value= "${ param.userId }"			/>
			<input type="hidden"	id="bookingID"			name="bookingID"			value= "${ param.bookingID }"		/>
			<input type="hidden" 	id="depcity1Param" 									value="" 						/>
			<input type="hidden" 	id="arrcity1Param"									value="" 						/>
			<input type="hidden" 	id="depdate1Param" 									value="" 						/>
			<input type="hidden" 	id="arrdate1Param" 									value="" 						/>
			<input type="hidden" 	id="tripday1Param" 									value="" 						/>
		</form>


		<div class="btnArea">
			<a href="javascript:;" onclick="return submitItinerary();" class="btnTypeB sizeL icoNext">조회</a><!-- [dev] 활성화버튼 btnTypeA -->
		</div>
	</div><!-- //modifyLayer -->
</div><!-- //quickModify -->







<script type="text/javascript" src="../js/hom/lj/front/booking/quickModify.js"></script>
<script type="text/javascript">

$(document).ready(function() {
	$.i18n.properties({
	    name	: ['messages', 'common','ibeBooking'],
	    path	: '../i18n/messages/',
	    mode	: 'map',
	    language: 'ko_KR',
	    langCd	: 'KOR'
	});
	
	try {
		confirmPrice = JSON.parse('');
		setBasketQuickModify();
	}catch(e){
		// nothing
	}
	
	//getCityAirport();
});
console.log("asdasd");
var qTop = $("#quickModify").offset().top;

function showItinerary(){
	if($(".bgLayer2").size() == 0){
		$("#wrapper").append("<div class='bgLayer2'></div>");
	}
	$(".bgLayer2, .modifyLayer").fadeIn(150);
	$("#quickModify").css("z-index", "113");
	//_satellite.track("trip_research_click"); // ************** 이 부분이 뭔지 찾기
	
}
function hideItinerary(){
	$(".bgLayer2, .modifyLayer").fadeOut(100);
	$("#quickModify").css("z-index", "100");
}

function showMulti(){
	//편도일 경우  눌리지 않도록 변경
	if ($("#quickModify .multiArea li:first-child ~li").length > 0) {
		if(!$("#quickModify").hasClass("multiOpen")){
			$("#quickModify .multiArea li:first-child ~li").stop().slideDown(100);
			$("#quickModify").addClass("multiOpen");
		} else {
			$("#quickModify .multiArea li:first-child ~li").stop().slideUp(50, function(){
				$("#quickModify").removeClass("multiOpen");
			});
		}	
	}
}
</script>
		
			
			
		



	
		<h1 class="typeA">항공편 선택</h1>
	
	
	
	
	

<div class="step">
	<h2>Step</h2>
	<ol>
		<li><strong>1</strong> <span>여정 선택</span></li>
		<li class="on"><strong>2</strong> <span>항공편 선택</span></li>
		<li><strong>3</strong> <span>탑승객 정보</span></li>
		<li><strong>4</strong> <span>부가 서비스</span></li>
		<li><strong>5</strong> <span>결제</span></li>
	</ol>
</div>
		<div class="typeSel">
			
				
		        	<a href="#" onclick="fnClickPromotionCode(true); return false" class="btnTypeA icoCode" id="btnAvailPromotion" data-click-area="여정-2_항공편선택" data-click-name="프로모션코드">프로모션 코드</a>
		    	
		    	
		    

			<select id="currencyOpt" name="currencyOpt" title="결제통화 변경">
				<option value="">결제통화 변경</option>
				<option value="KRW">KRW</option>
				<option value="USD">USD</option>
			</select>
			<button class="btnTypeB" onclick="fnChangeCurrency();" data-click-area="여정-2_항공편선택" data-click-name="확인(결제통화변경)">확인</button><!-- [dev] 결제통화 선택후 버튼활성화 btnTypeA -->
		</div>
		<div id="listSchedule"></div>

		<ul class="caution">
			
		<li>B737-800 항공기 내 좌석 등급은 일반석만 운영하며, B737-900 항공기 내 좌석 등급은 지니 비즈 좌석과 일반석을 운영합니다.</li>
		<li>B777 항공기 내 좌석등급은 지니플러스시트와 일반석을 운영합니다.</li>
		<li>항공권 예매는 국내선 항공권의 경우 예매시점 30분 이후 출발편부터, 국제선 항공권의 경우 예매시점 3시간 이후 출발편부터 361일 이내 출발편까지 가능합니다.</li>
		<li>인터넷 예약은 1회 9명까지 가능합니다. 항공권 구입 시에는 예약과 동시 구매하셔야 하며, 미 구매된 예약은 자동 취소됩니다.</li>
		<li>승객의 나이는 탑승일 기준이며, 국내선은 만 5세 이상 ~ 만 13세 미만의 소아 승객은 반드시 만 13세 이상의 동반 탑승자가 필요하고 국내선 만 5세 미만, 국제선 만 12세 미만의 소아 승객은 부모 또는 만 18세 이상의 보호자와 동반 시에만 여행이 가능합니다.</li>
		<li>소아 단독 예약은 소아 로그인 후 이용 가능합니다.</li>
		<li>국제선 소아 단독 예약은 모바일 APP과 고객서비스센터를 이용하여 주시기 바랍니다.</li>
		<li>국제선 구간 여행을 위해 유효기간이 최소 6개월 이상 남은 여권과 필요한 경우 출입국을 위한 해당 국가의 비자를 준비하셔야 합니다.</li>
		<li>훼손된 여권의 경우 해당 국가의 입국이 거절 될 수 있으니 유의하여 주시기 바랍니다.</li>
		<li>복수 목적지 여정의 예약을 원하실 경우 [다구간 여정] 을 선택하여 주시기 바랍니다.</li>
		<li>해외발행 카드 사용의 경우 진에어 해외사이트에서 결제하실 수 있습니다.</li>
		<li>반려동물과 함께 여행하시는 고객께서는 번들 구매 등을 통해 사전좌석지정을 신청하는 경우라도 공항 수속 시 좌석이 변경될 수 있으며, 일부 좌석 배정이 제한되오니 이점 양해하여 주시기 바랍니다.</li>
		<li>무료수하물을 초과하는 경우 추가요금이 발생할 수 있습니다. <a href="/ready/baggage" target="_blank" title="새창열림"><strong>[자세히 보기]</strong></a></li>
		<li>환불 신청 기한은 항공권 유효기간 만료일로부터 30일 이내 이며, 그 이후에 요청하실 경우 환불이 거절될 수 있습니다.</li>
		<li>항공권의 유효기간은 전체 미사용 항공권의 경우 발행일로부터 1년, 여행 개시 후에는 최초 출발일로부터 1년입니다.</li>
	
		</ul>
		
		<form id="registerform2"> <!-- ******************************** -->
			여정1 출발시간 : <input id ="sTime1"  type="text" name="s1_time"/><br />
			여정1 운임종류 : <input id ="bType1"  type="text" name="b1_type"/><br />
			<span>여정2 출발시간 : <input id ="sTime2" type="text" name="s2_time"/><br /></span>
			<span>여정2 운임종류 : <input id ="bType2" type="text" name="b2_type"/><br /></span>
		</form>
		<button id="check" style="background-color: #BDD600; width: 20%;height: 30px;">요금 확인</button>
		
<script>
	var count = 0;
	$("button#check").on("click", function() {
		if(count == 0){
			for(var i = 1; i <= 2;i++){
				$("form#registerform").append("<input id ='sTime"+i+"'  type='hidden' name='s"+i+"_time' value='"+$("#registerform2 #sTime"+i).val()+"'/>");
				$("form#registerform").append("<input id ='bType"+i+"'  type='hidden' name='b"+i+"_type' value='"+$("#registerform2 #bType"+i).val()+"'/>");
			} 
		} else {
			for(var i = 1; i <= 2;i++){
				//alert("asd");
				$("form#registerform #sTime"+i).val($("#registerform2 #sTime"+i).val());
				$("form#registerform #bType"+i).val($("#registerform2 #bType"+i).val());
			} 
		}
		var params = $("form").serialize();
		
		
		$.ajax({
			url:"checkpay.do", // 프로젝트 	MVC idcheck.do->  컨트롤러 -> 모델
			dataType:"json", 		// test, html, xml, script, 등등
			type:"post",
			data:params,
			cache:false, 			
			success: function(data, textStatus, jpXHR) {
				var fare1 = Number( data.fare[0].fare );
				var fuel1 = Number( data.fare[0].fuel );
				var tax1  = Number( data.fare[0].tax  );
				if($("form #bType1").val() == "슈퍼로우")  fare1 *= 0.3;
				else if($("form #bType1").val() == "플렉스") fare1 *= 0.6;
				var totalfare = fare1 * Number( ${ param.adultPaxCount } );
				var totalfuel = fuel1 * Number( ${ param.adultPaxCount } );
				var totaltax  = tax1 * Number( ${ param.adultPaxCount } );
				
				if(${ param.childPaxCount } !="0" && $("form #bType1").val()!="슈퍼로우"){
					totalfare += fare1*0.9*Number(${ param.childPaxCount });
					totalfuel += fuel1*0.5*Number(${ param.childPaxCount });
				} 
				if(count == 0){
					$("form#registerform").append("<input id ='fare1'  type='hidden' name='fare1' value='"+fare1+"'/>");
					$("form#registerform").append("<input id ='fuel1'  type='hidden' name='fuel1' value='"+fuel1+"'/>");
					$("form#registerform").append("<input id ='tax1'  type='hidden' name='tax1' value='"+tax1+"'/>");
				} else {
					$("form#registerform #fare1").val(fare1);
					$("form#registerform #fuel1").val(fuel1);
					$("form#registerform #tax1").val(tax1);
				}
				
				
				if(data.fare.length == 2){
					var fare2 = Number( data.fare[1].fare );
					var fuel2 = Number( data.fare[1].fuel );
					var tax2  = Number( data.fare[1].tax  );
					if($("form #bType2").val() == "슈퍼로우")  fare2 *= 0.3;
					else if($("form #bType2").val() == "플렉스") fare2 *= 0.6;
					totalfare += fare2 * Number( ${ param.adultPaxCount } );
					totalfuel += fuel2 * Number( ${ param.adultPaxCount } );
					totaltax  += tax2 * Number( ${ param.adultPaxCount } );
					if(${ param.childPaxCount } !="0" && $("form #bType2").val()!="슈퍼로우"){
						totalfare += fare2*0.9*Number( ${ param.childPaxCount });
						totalfuel += fuel2*0.5*Number( ${ param.childPaxCount });
					}
					if(count == 0){
						$("form#registerform").append("<input id ='fare2'  type='hidden' name='fare2' value='"+fare2+"'/>");
						$("form#registerform").append("<input id ='fuel2'  type='hidden' name='fuel2' value='"+fuel2+"'/>");
						$("form#registerform").append("<input id ='tax2'  type='hidden' name='tax2' value='"+tax2+"'/>");
					} else {
						$("form#registerform #fare2").val(fare2);
						$("form#registerform #fuel2").val(fuel2);
						$("form#registerform #tax2").val(tax2);
					}
				}
				
				
				
				//alert(fare1 + " = " + fuel1 + " = " + tax1 + " = " + fare2 + " = " + fuel2 + " = " + tax2);
				$("dl.totalCharge dd#totalApplied").text(totalfare.toLocaleString());
				$("dl.totalCharge dd#totalSurcharge").text(totalfuel.toLocaleString());
				$("dl.totalCharge dd#totalTax").text(totaltax.toLocaleString());
				$("dl.totalCharge dd#totalAmout").text((totalfare+totalfuel+totaltax).toLocaleString());
				
				$(".content .scr dl dd#flightTaxSum").text(totalfare.toLocaleString());
				$(".content .scr dl dd#fuelTaxSum").text(totalfuel.toLocaleString());
				$(".content .scr dl dd#basicTaxSum").text(totaltax.toLocaleString());
				$("#totalCharge").text((totalfare+totalfuel+totaltax).toLocaleString());
				
				$("form#registerform").append("<input type='hidden' id ='totalfare'   name='totalfare' value='"+totalfare.toLocaleString()+"'/>");
				$("form#registerform").append("<input type='hidden' id ='totalfuel'   name='totalfuel' value='"+totalfuel.toLocaleString()+"'/>");
				$("form#registerform").append("<input type='hidden' id ='totaltax'    name='totaltax' value='"+totaltax.toLocaleString()+"'/>");
				$("form#registerform").append("<input type='hidden' id ='totalprice'  name='totalprice' value='"+(totalfare+totalfuel+totaltax).toLocaleString()+"'/>");
				
				count++;
				
			},
			error: function() {
				alert("에러!");
			}
		});
		
	})
</script>
<script>
	function next() {
		var form = $("#registerform");
		form.attr("action","getAvailabilityList_2.jsp");
		form.attr("method","post");
		form.submit();
	}
</script>		
<script>
	if("${ param.tripType}" != "OW"){
		$("#registerform2 span").show();
	} else {
		$("#registerform2 span").hide();
	}
</script>		
		
		<h2 class="typeA">운임 확인</h2>
		<dl class="totalCharge">
			<dt>항공운임</dt>
			<dd id="totalApplied"><span class="unit"></span> 0</dd>
			<dt>유류할증료</dt>
			<dd id="totalSurcharge"><span class="unit"></span> 0</dd>
			<dt>세금*</dt>
			<dd id="totalTax"><span class="unit"></span> 0</dd>
			<dt>부가서비스</dt>
			<dd id="totalBundle"><span class="unit"></span> 0</dd>
			<dt class="total">총 금액</dt><dd class="total" id="totalAmout"><span class="unit"></span> 0</dd>
		</dl>
		<p class="caution typeB">국제선 한국 출발 세금(BP)에는 국제 여객공항이용료(인천/김포공항 17,000원, 기타 12,000원), 출국납부금 10,000원, 국제 빈곤퇴치기여금 1,000원이 포함되어 있습니다.</p>
		<div class="btnArea" id="nextbtnWrap">
		
			<a href="#" onclick="next(); return false" class="btnTypeA sizeL" data-click-area="여정-2_항공편선택" data-click-name="다음">다음</a>
		</div>
		
			






<div id="totalSrmy">


	<div class="price">
		<a href="#" onclick="showMySrmy(); return false" class="btn transition">상세보기</a>
		
			
			
				<p><span class="tit"><em>항공운임 등 총액</em><br>(<text currency>KRW</text>)</span><strong id="totalCharge">0</strong></p>
			
		
	</div>

	
	
		<p class="btnNext">
			
				
					<a href="#" onclick="return next();" data-click-area="여정-2_항공권선택" data-click-name="다음" class="btnTypeA">
				
				
				
			
			다음
			</a>
		</p><!-- [dev] 활성화버튼 btnTypeA -->
	


	<div class="mySrmy"><div class="wrap">
		<p class="close"><a href="#" onclick="showMySrmy(); return false">닫기</a></p>
		<div class="clearfix" id="basketSegment">
		</div><!-- //가는여정,오는여정 -->
		<div class="content" id="fareInfo">
			<h2>운임정보 <span class="unit">(통화 : <text currency>KRW</text>)</span></h2>
			<div class="scr">
				<dl>
					<dt>항공운임</dt><dd id="flightTaxSum">0</dd>
					<dt>유류할증료</dt><dd id="fuelTaxSum">0</dd>
					<dt>세금</dt><dd id="basicTaxSum">0</dd>
				</dl>
				<p class="btn"><a href="#" onclick="showSrmyDetail(this); return false">더보기</a></p>
				<div class="detail" id="basketChargeByPax" >					
				</div>
			</div>
		</div>
		<div class="content">
			<h2>부가서비스 신청 내역 <span class="unit">(통화 : <text currency>KRW</text>)</span></h2>
			<div class="scr">
				<dl id="basketSSRSummary">
				</dl>
				<p class="btn"><a href="#" onclick="showSrmyDetail(this); return false">더보기</a></p>
				<!-- 170830 start -->
				<div class="detail" id="basketSSR">

				</div>
				<!-- //170830 end -->
			</div>
		</div>
	</div></div><!-- //mySrmy -->
</div><!-- //totalSrmy -->




 <!-- 여정정보 뿌리는곳******************** -->


<script id="basketSSRSummaryTmp" type="text/x-jsrender">
		<dt>{{:ssrCodeName}}</dt><dd>{{getAmountSum:segmentSSRFareList}}</dd>
</script>

<script type="text/javascript" src="../js/hom/lj/front/booking/totalSrmy.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	try {
		confirmPrice = JSON.parse('');
		setBasketTotalSrmy();	
	}catch(e){
		// nothing
	} 	
	var channel = '';
	
	if(channel == "OEC") {
		$("#fareInfo").hide();
	}
	
});
</script>

	</div>
	<!--//container-->

<script id="listScheduleTmpl" type="text/x-jsrender">
{{for originDestinationInfo itemVar="~originDestinationInfo"}}
	{{if modifyTypeOption == "MODIFY_FIRST" tmpl="#originDestinationListTmpl"}}
	{{else modifyTypeOption == "MODIFY_ETC" tmpl="#originDestinationModifyListTmpl"}}
	{{else modifyTypeOption == "MODIFY_READONLY" tmpl="#originDestinationModifyListTmpl"}}
	{{else tmpl="#originDestinationListTmpl"}}
	{{/if}}
{{/for}}

</script>

<script id="originDestinationModifyListTmpl" type="text/x-jsrender">
{{if #data ~root=#data}}
<div class="originDestinationInfo" style="display:none" indexNo="{{:~root.indexNo}}" modifyTypeOption="{{:modifyTypeOption}}"></div>
{{/if}}
</script>
<script id="originDestinationListTmpl" type="text/x-jsrender">


{{if #data ~root=#data}}
<div class="originDestinationInfo"
	origin="{{:~root.origin}}"
	destination="{{:~root.destination}}"
	indexNo="{{:~root.indexNo}}"
	modifyTypeOption="{{:~root.modifyTypeOption}}" >

	<!-- schedule -->
	<div class="schedule">
		<h2>여정{{:~root.indexNo+1}} :
			<span class="br"></span><strong>{{:~root.originName}}<span class="ico">→</span>{{:~root.destinationName}}</strong>
			
		</h2>
		<div class="cal">
			<div class="tblScrollArea">
				<ul class="tblScroll">
					{{for bestFareInfo itemVar="~bestFareInfo"}}
						<li flightDate="{{:flightDate}}" class="{{if (#getIndex()==3) }}choice{{/if}} {{if ((bestFare=='-1') || (bestFare=='-2')  || (selectable==false) ) }}disable{{/if}}" >
							{{if ((bestFare=='-1') || (bestFare=='-2')) }}
								<a href="javascript:void(0);"><span class="date">{{:flightDateText}}</span><span class="price">{{:bestFareName}}</span></a>
							{{else (bestFare=='-3') }}
								<a href="javascript:void(0);" onclick="fnClickBestFare(this ,{{:~root.indexNo}},'{{:flightDate}}','');"><span class="date">{{:flightDateText}}</span>{{:bestFareName}}</a>
							{{else (selectable==false) }}
								<a href="javascript:void(0);"><span class="date">{{:flightDateText}}</span><span class="price"><span class="fs">{{:currency}}</span>{{:bestFareName}}</span></a>
							{{else}}
								<a href="javascript:void(0);" onclick="fnClickBestFare(this ,{{:~root.indexNo}},'{{:flightDate}}','');"><span class="date">{{:flightDateText}}</span><span class="price"><span class="fs">{{:currency}}</span>{{fnCurrencyFormat:bestFare roundingCurrency}}</span></a>
							{{/if}}
						</li>
					{{/for}}
				</ul>
				<a href="javascript:void(0);" onclick="fnClickBestFare(this ,{{:~root.indexNo}},'','prev');" class="prev"></a>
				<a href="javascript:void(0);" onclick="fnClickBestFare(this ,{{:~root.indexNo}},'','next');" class="next"></a>
			</div>
		</div>
	</div>
	<!-- // schedule -->

	<!-- flightList pc -->
	<div class="tblScrollArea">
		<table class="flightList tblScroll">
			<caption>항공 좌석별 가격 안내</caption>
			<colgroup>
				<col width="9%"><col width="11%"><col width="11%"><col width="11%"><col width="15%">
				{{if (~root.tripInfo.length && ~root.tripInfo[0].segmentInfo.length)}}
				{{for ~root.tripInfo[0].segmentInfo[0].segmentAvailability}}
					<col width="">
				{{/for}}
				{{/if}}
			</colgroup>
			<thead>
				<tr>
					<th scope="col">편명</th>
					<th scope="col">출발시간</th>
					<th scope="col" class="desc"><!-- 소요시간 --></th>
					<th scope="col">도착시간</th>
					<th scope="col">
						운임규정
					</th>
					{{if (~root.tripInfo.length && ~root.tripInfo[0].segmentInfo.length )}}
					{{for ~root.tripInfo[0].segmentInfo[0].segmentAvailability}}
						{{if (fareType.indexOf('JINIPLUS')>-1) }}
							<th scope="col" class="jiniPlus">
								<a href="javascript:void(0);" onclick="fnShowJiniplus(this)">{{:fareTypeNm}} <img src="//images.jinair.com/images/common/ico_question.png" alt="지니플러스 자세히보기"></a>
								<div class="popLayerWrap">
									<div class="popArea">
										<p class="txt">
		<strong>지니플러스 운임</strong>을 구매하시면!<span>아래 4가지 서비스가 추가로 제공 됩니다.</span>
	</p>
										<ol>
		<li>1) 지니플러스 좌석 무료 제공</li>
		<li>2) 기본 제공 무료수하물 5kg 추가</li>
		<li>3) 지니플레이 무료 제공</li>
		<li>4) 수하물 우선 하기 서비스 제공</li>
	</ol>
										<div class="des">지니플러스 운임 규정도 꼭! 확인하세요.</div>
										<p class="close"><a href="javascript:void(0);"><span닫기</span></a></p>
									</div>
								</div>
							</th>
						{{else}}
							<th scope="col">{{:fareTypeNm}}</th>
						{{/if}}
					{{/for}}
					{{/if}}
				</tr>
			</thead>
			<tbody>
				{{if (tripInfo.length ==0) }}
					<tr><td colspan="5" class="noResult">운항편이 없습니다.</td></tr>
				{{/if}}
				{{for tripInfo itemVar="~tripInfo"}}
					{{for segmentInfo itemVar="~segmentInfo" ~isThrough=(segmentInfo.length>1?true:false) ~segmentInfoLen=(segmentInfo.length) ~availabilityLen=(segmentInfo[0].segmentAvailability.length) }}
						<tr class="segmentInfo {{:~isTrueThenElse(~isThrough==true && #getIndex()==0 ,'viaList','')}} {{:~isTrueThenElse(~isThrough==true && #getIndex()>0 ,'diviLine','')}}"
							isThrough ="{{:~isThrough}}"
							segmentInfoLen = "{{:~segmentInfoLen}}"
							availabilityLen = "{{:~availabilityLen}}"

							tripIndex="{{:~tripInfo.tripIndex}}"
							segmentIndex="{{:~segmentInfo.segmentIndex}}"
							flightIdentifierInfo.carrierCode="{{:~segmentInfo.flightIdentifierInfo.carrierCode}}"
							flightIdentifierInfo.flightNumber="{{:~segmentInfo.flightIdentifierInfo.flightNumber}}"
							flightIdentifierInfo.flightDate="{{fnParseDateToString:~segmentInfo.flightIdentifierInfo.flightDate}}"
							flightIdentifierInfo.flightSuffix="{{:~segmentInfo.flightIdentifierInfo.flightSuffix}}"

							departureInfo.airportCode="{{:~segmentInfo.departureInfo.airportCode}}"
							departureInfo.dateTime="{{fnParseDateToString:~segmentInfo.departureInfo.dateTime}}"
							departureInfo.timeZoneOffset="{{:~segmentInfo.departureInfo.timeZoneOffset}}"

							arrivalInfo.airportCode="{{:~segmentInfo.arrivalInfo.airportCode}}"
							arrivalInfo.dateTime="{{fnParseDateToString:~segmentInfo.arrivalInfo.dateTime}}"
							arrivalInfo.timeZoneOffset="{{:~segmentInfo.arrivalInfo.timeZoneOffset}}"

							aircraftInfo.type="{{:~segmentInfo.aircraftInfo.type}}"
							aircraftInfo.version="{{:~segmentInfo.aircraftInfo.version}}"

							journeyTime="{{:~segmentInfo.journeyTime}}"
							stops="{{:~segmentInfo.stops}}"
							dayChange="{{:~segmentInfo.dayChange}}"
	 						>
							<th scope="row">{{:flightNm}}
								{{if (flightDelayedText != null && flightDelayedText != '')}}
								<br><span class="delay">{{:flightDelayedText}}</span>
								{{/if}}
							</th>
							<td><p class="time {{if (estimatedDepartureTime != null && estimatedDepartureTime != '')}} delay {{/if}}">
								<strong>{{:departureTime}}{{if (~segmentInfo.watingDayChange>0) }} <span>(+{{:~segmentInfo.watingDayChange}} day)</span>{{/if}}</strong>
								{{if (estimatedDepartureTime != null && estimatedDepartureTime != '')}}<strong>{{:estimatedDepartureTime}}</strong>{{/if}}

								{{if (estimatedDepartureTime == null || estimatedDepartureTime == '')}} <br/> {{/if}}
								({{:departureAirportCode}})</p>

								{{if (departureAirportCode =='ICN' && arrivalAirportCode == 'CJU')}}
								<p class="alt_txt">※ 해당편은 인천에서 출발하는 제주행 비행기입니다.</p>
								{{/if}}
							</td>
							<td>
								{{:journeyTimeText}}
									{{if ~isThrough }}
										{{if (#getIndex()==0)}}<br/>대기 {{:~tripInfo.watingTime}}{{/if}}
										{{if (#getIndex()==1)}}<br/>총 소요 {{:~tripInfo.totalTime}}{{/if}}
									{{/if}}
								<div class="flightDetail">
									{{:aircraft}} <a href="javascript:void(0);" onclick="showFlight(this); return false"><img src="//images.jinair.com/images/common/ico_question.png" alt="항공편자세히보기"></a>
									<div class="popFlight">
										<p class="close"><a href="javascript:void(0);" onclick="hideFlight(); return false"><span>닫기</span></a></p>
										<h3>항공편 안내</h3>
										<!-- &lt;구간1&gt;<br/> -->
										편명 : {{:flightNm}}<br/>
										출발 : {{:departureDateTime}} {{:departureAirportName}}<br/>
										도착 : {{:arrivalDateTime}} {{:arrivalAirportName}}<br/>
										비행시간 : {{:journeyTimeText}}<br/>
										A/C 타입 : {{:aircraft}} <!-- Operated by {{:carrierName}}<br/><br/> -->
										<!-- &lt;구간2&gt;<br/> -->
									</div>
								</div>
							</td>
							<td><p class="time {{if (estimatedArrivalTime != null && estimatedArrivalTime != '')}} delay {{/if}}">
								<strong>{{:arrivalTime}}{{if (~segmentInfo.dayChange>0) }} <span>(+{{:~segmentInfo.dayChange}} day)</span>{{/if}}</strong>
								{{if (estimatedArrivalTime != null && estimatedArrivalTime != '')}}<strong>{{:estimatedArrivalTime}}</strong>{{/if}}
								{{if (estimatedArrivalTime == null || estimatedArrivalTime == '')}} <br/> {{/if}}
								({{:arrivalAirportCode}})</p>
							</td>
							{{if (~segmentInfoLen>0 && #getIndex()==0) }} <!-- 경유일경우 한번만 표시 -->
								<td rowspan="{{:~segmentInfoLen}}">
									<a id="trip{{:~tripInfo.tripIndex}}" href="javascript:void(0);" onclick="fnShowAirfareRule(this, {{:~tripInfo.tripIndex}}); return false"><img src="//images.jinair.com/images/common/ico_plus2.png" alt="자세히보기"></a>
								</td>

								{{for segmentAvailability itemVar="~segmentAvailability"}}
								<td class="segmentAvailability"
									rowspan="{{:~segmentInfoLen}}"
									isThrough="{{:~isThrough}}"
									flightSuffix="{{:~segmentInfo.flightIdentifierInfo.flightSuffix}}"
									tripIndex="{{:~tripInfo.tripIndex}}"
									origin="{{:~segmentInfo.departureAirportCode}}"
									destination="{{:~segmentInfo.arrivalAirportCode}}"
									pricingUnitID="{{:~root.pricingUnitID}}"
									saleDate="{{fnParseDateToString:~root.sysDate}}"
									segmentIndex="{{:~segmentInfo.segmentIndex}}"
									carrierCode="{{:~segmentInfo.flightIdentifierInfo.carrierCode}}"
									flightNumber="{{:~segmentInfo.flightIdentifierInfo.flightNumber}}"
									flightDate="{{fnParseDateToString:~segmentInfo.flightIdentifierInfo.flightDate}}"
									departureInfo.dateTime="{{fnParseDateToString:~segmentInfo.departureInfo.dateTime}}"
									departureInfo.timeZoneOffset="{{:~segmentInfo.departureInfo.timeZoneOffset}}"
									arrivalInfo.dateTime="{{fnParseDateToString:~segmentInfo.arrivalInfo.dateTime}}"
									arrivalInfo.timeZoneOffset="{{:~segmentInfo.arrivalInfo.timeZoneOffset}}"
									journeyTime="{{:~segmentInfo.journeyTime}}"
									stops="{{:~segmentInfo.stops}}"
									dayChange="{{:~segmentInfo.dayChange}}"

									cabinClass="{{:~segmentAvailability.cabinClass}}"
									bookingClass="{{:~segmentAvailability.bookingClass}}"
									fareLevel="{{:~segmentAvailability.fareLevel}}"
									fareType="{{:~segmentAvailability.fareType}}"
									fareBasis="{{:~segmentAvailability.fareBasis}}"
									fareTypeNm="{{:~segmentAvailability.fareTypeNm}}"
									fareAddInfo3="{{:~segmentAvailability.fareAddInfo3}}"

									baseFare.adultAmount="{{:~segmentAvailability.adultPaxBaseFareAmount}}"
									baseFare.childAmount="{{:~segmentAvailability.childPaxBaseFareAmount}}"
									baseFare.infantAmount="{{:~segmentAvailability.infantPaxBaseFareAmount}}"
									apppliedFare.adultAmount="{{:~segmentAvailability.adultAppliedFareAmount}}"
									apppliedFare.childAmount="{{:~segmentAvailability.childAppliedFareAmount}}"
									apppliedFare.infantAmount="{{:~segmentAvailability.infantAppliedFareAmount}}"
									surcharge.adultAmount="{{:~segmentAvailability.adultSurchargeAmount}}"
									surcharge.childAmount="{{:~segmentAvailability.childSurchargeAmount}}"
									surcharge.infantAmount="{{:~segmentAvailability.infantSurchargeAmount}}"
									tax.adultAmount="{{:~segmentAvailability.adultTaxAmount}}"
									tax.childAmount="{{:~segmentAvailability.childTaxAmount}}"
									tax.infantAmount="{{:~segmentAvailability.infantTaxAmount}}"
									currencyCode="{{:~segmentAvailability.paxBaseFareCurrencyCode}}"
									fareId="{{:~segmentAvailability.fareId}}"
									pricingComponentIndex="{{:~segmentAvailability.pricingComponentIndex}}"
									seatAvailablity="{{:seatAvailablity}}"
									selectable="{{:~segmentAvailability.selectable}}"
									>
										{{if (seatAvailablity==null || selectable == false || seatAvailablity <= 0) }}
											<p class="charge">{{:seatAvailablityText}}</p><!-- 운항없음/예약마감 -->
										{{else}}
											<p class="charge"><a href="javascript:void(0);" onclick="fnClickSegmentAvailavility(this ,{{:~root.indexNo}}); return false">
											{{if (fareAddInfo3 != null && fareAddInfo3 == "S")}}
												<span class="sticker">슬림한 진</span>
											{{/if}}
											{{if (fareAddInfo3 != null && fareAddInfo3 == "J")}}
												<span class="sticker">진MARKET</span>
											{{/if}}
											{{if (fareAddInfo3 != null && fareAddInfo3 == "O")}}
												<span class="sticker">온라인 특가</span>
											{{/if}}
											{{if (fareAddInfo3 != null && fareAddInfo3 == "K" && true)}}
												<span class="sticker">만우절 특가</span>
											{{/if}}
											{{if (fareAddInfo3 != null && fareAddInfo3 == "E")}}
												<span class="sticker">프로모션 특가</span>
											{{/if}}
												<span class="unit">{{:appliedFareCurrencyCode}}</span><em>{{fnCurrencyFormat:appliedFareAmount roundingCurrency}}</em>
												<span class="text">{{:seatAvailablityText}}</span>
											</a></p>
										{{/if}}
									</td>

								{{/for}}
							{{/if}}
						</tr>

						<tr class="bundleArea" style="display:none">
							<td colspan="{{:5+~availabilityLen}}" style="display:none">
								<ul class="bundleList"></ul>
							</td>
						</tr>
					{{/for}}
				{{/for}}
			</tbody>
		</table>
		<!-- // flightList pc -->
	</div>
</div>
{{/if}}

</script>


<script id="bundleListTmpl" type="text/x-jsrender">


<ul class="bundleList">
	{{for saleableAncillaries itemVar="~saleableAncillaries"}}
	{{for saleableSsrs itemVar="~saleableSsrs"}}
	<!-- No Bundle -->
	<li class="basic">
		<div class="sale_info"><span class="sale">무료</span></div>
		<div class="cont_area">
			<div class="tit">
			베이직
			<span class="price"><em>FREE</em></span>
			</div>
			<div class="detail_view">
				<div class="area">
					기본<br>제공
				</div>
				<div class="area">
					<ul>
						<li class="excess">무료 수하물</li>
						<li class="meal">
						무료 기내식<span class="type">(일부 노선 제외)</span>
							<div class="detail">
								<a href="javascript:void(0);" title="새창열림" onclick="showPopupLayer('/popup/baggageFlight'); return false">자세히 보기</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="btn"><a href="javascript:void(0);" onclick="fnClickBundle(this); return false">선택</a></div>
	</li>
	<!-- // No Bundle -->
	{{for ancillaryService itemVar="~ancillaryService"}}
	<li
		serviceCode="{{:~ancillaryService.serviceCode}}"
		feeAmount="{{:~ancillaryService.feeInformation.feeAmount}}"
		segmentId="{{:~ancillaryService.segmentIds.segmentId}}"
	{{if (~ancillaryService.serviceCode == 'JINB9')}}class="event_bundle"{{/if}}
	>
	<div class="sale_info">
		{{if ~ancillaryService.isNewBundle == true }} <!-- // 개편 번들 할인율 -->
			{{if (serviceCode=='JINB1' || serviceCode=='JINB2')}}
				<span class="sale"><span>21~27</span>% SALE</span>
			{{else (serviceCode=='SPB1' || serviceCode=='SPB2')}}
				<span class="sale"><span>29~50</span>% SALE</span>
			{{else (serviceCode=='LPPB' || serviceCode=='LOUGCH')}}
				<span class="sale"><span>34~36</span>% SALE</span>
			{{/if}}
		{{else}} <!-- // 기존 번들 할인율 -->
			{{if (serviceCode=='JINB1' || serviceCode=='JINB2')}}
				<span class="sale"><span>20~25</span>% SALE</span>
			{{else}}
				<span class="sale"><span>43~47</span>% SALE</span>
			{{/if}}
		{{/if}}
	</div>
	<div class="cont_area">
		<div class="tit">
			{{:serviceName}}
			<span class="price"><span class="type">+</span>
			{{:feeInformation.feeCurrency}}<em>
			{{fnCurrencyFormat:feeInformation.feeAmount roundingCurrency}}</em></span>
		</div>
		<div class="detail_view">
			<div class="area">
			기본<br>제공
			</div>
			<div class="area">
				<ul>
					<li class="excess">무료 수하물</li>
					<li class="meal">
						무료 기내식<span class="type">(일부 노선 제외)</span>
						<div class="detail">
							<a href="javascript:void(0);" title="새창열림" onclick="showPopupLayer('/popup/baggageFlight'); return false">자세히 보기</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="detail_view">
			<div class="area">
			추가<br>제공
			</div>
			<div class="area">
				{{if (serviceCode=='LPPB')}}
				<ul class="etc">
					<li class="lounge">
					스카이허브라운지 이용권 
				<div class="detail">
					<a href="javascript:void(0);" title="새창열림" onclick="showPopupLayer('/popup/loungeInfo'); return false">자세히 보기</a>
				</div>
				</li>
				{{else}}
					<ul>
				{{/if}}
				{{for includedAncillaries}}
					{{for ancillaryService}}
						{{if (serviceCategory == 'SEAT')}}
							{{if ( ~ancillaryService.serviceCode=='JINB3'|| ~ancillaryService.serviceCode=='JINB4'
								|| ~ancillaryService.serviceCode=='SPB1'|| ~ancillaryService.serviceCode=='SPB2'
								|| ~ancillaryService.serviceCode=='LPPB' || ~ancillaryService.serviceCode== 'LOUGCH') }}
								<li class="seat">
									전좌석
									<div class="detail">
										{{if ~ancillaryService.isNewBundle == true}}
										<a href="#" onclick="showPopupLayer('/popup/newSeatInfo'); return false">자세히 보기</a>
										{{else}}
										<a href="#" onclick="showPopupLayer('/popup/seatInfo'); return false">자세히 보기</a>
										{{/if}}
									</div>
								</li>
							{{else (~ancillaryService.serviceCode== 'JINB1' || ~ancillaryService.serviceCode== 'JINB2' || ~ancillaryService.serviceCode== 'JNB1') }}
								<li class="seat">
									{{if ~ancillaryService.isNewBundle == true}}
										지니스탠다드 A/B
										<div class="detail">
											<a href="#" onclick="showPopupLayer('/popup/newSeatInfo'); return false">자세히 보기</a>
										</div>
									{{else}}
										지니프론트
										<div class="detail">
											<a href="#" onclick="showPopupLayer('/popup/seatInfo'); return false">자세히 보기</a>
										</div>
									{{/if}}
								</li>
							{{else}}
								<li class="seat">{{:serviceName}}
									<div class="detail">
										<a href="#" onclick="showPopupLayer('/popup/seatInfo'); return false">자세히 보기</a>
									</div>
								</li>
							{{/if}}
						{{/if}}
						{{if (serviceCategory == 'BAGGAGE')}}
							<li class="excess">{{:serviceName}}</li>
						{{/if}}
						{{if (serviceCategory == 'MEALS')}}
							<li class="meal">{{:serviceName}}</li>
						{{/if}}
						{{if (serviceCategory == 'SNAK')}}
							<li class="meal">{{:serviceName}}</li>
						{{/if}}
						{{if (serviceCategory == 'MERCHANDISE')}}
							<li class="meal">{{:serviceName}}</li>
						{{/if}}
						{{if (serviceCategory == 'GENERAL')}}
							<li class="above">{{:serviceName}}</li>
						{{/if}}
						{{if (serviceCategory == 'EVENT')}}
							<li class="event">{{:serviceName}}</li>
						{{/if}}
					{{/for}}
				{{/for}}
				{{if (serviceCode=='LPPB' || serviceCode=='LOUGCH')}}
					<li class="counter">전용 체크인 카운터</li>
				{{/if}}
				</ul>
			{{if (serviceCode=='LPPB' || serviceCode=='LOUGCH')}}
				<div class="guide_txt">*소아는 위 요금(성인)에서 20% 할인 됩니다.</div>
			{{/if}}
			</div>
		</div>
		<div class="btn"><a href="javascript:void(0);" onclick="fnClickBundle(this); return false">선택</a></div>
	</div>

	{{/for}}
	{{/for}}
	{{/for}}
</ul>

</script>

<script id="quickSrmyTmpl" type="text/x-jsrender">
	{{if #index ==0}}
		<li>
	{{else}}
		<li style="display:none">
	{{/if}}
	<p class="tit">
		<span class="tripType">
			{{if #view.parent.data.length==1}}
			편도
			{{else #view.parent.data.length==2}}
			왕복
			{{else}}
			다구간
			{{/if}}
		</span> 여정{{:segmentSEQ}}
	</p>
	<p class="cont">
		<span><em>{{:boardPointName}}</em> [출발] {{:departureDateTimeString}}</span>
		<span class="single"></span>
		<span><em>{{:offPointName}}</em> [도착] {{:arrivalTimeString}}</span>
	</p>
	</li>
</script>

<script id="template-dummy-bundle" type="text/x-jsrender">
<ul class="bundleList bundleList2">
	{{for list}}
	<li class="{{:styleClass}}">
		<div class="cont_area">
			<div class="tit">{{:title}} <span class="stxt">{{:subTitle}}</span></div>
			<div class="detail_view">
				<div class="area">
					<ul>
						{{for items}}<li class="{{:styleClass}}">{{:desc}}</li>{{/for}}
					</ul>
				</div>
			</div>
			{{if selectable}}
			<div class="btn"><a href="javascript://" onclick="fnClickBundle(this);">확인</a></div>
			{{/if}}
		</div>
	</li>
	{{/for}}
</ul>
</script>

<script id="template-dummy-bundle-mobile" type="text/x-jsrender">
<ul class="bundleList bundleList2">
	{{for list}}
	<li class="{{:styleClass}}">
		<div class="tit">{{:title}}</div>
		<div class="detail_view">
			<em class="title">{{:subTitle}}</em>
			<ul>
				{{for items}}<li class="{{:styleClass}}">{{:desc}}</li>{{/for}}
			</ul>
		</div>
		{{if selectable}}
		<div class="btn"><a href="javascript://" onclick="fnClickBundle(this);">확인</a></div>
		{{/if}}
	</li>
	{{/for}}
</ul>
</script>

<script type="text/javascript">

var isMobileOS = false;
var sid = ('prd' == 'prd') ? 'service_1' : 'service_2';
var aid = ('prd' == 'prd') ? 'fare' : 'stg_fare';

// jsRender Custom Converts // 별도 추가 가능하게
$.views.settings.debugMode(true);
$.views.converters({
	upper : function(val) {
		return val.toUpperCase();
	},
	fnCurrencyFormat : function(amount, roundingCurrency){
		return currencyFormat(amount, roundingCurrency);
	},
	fnNumberWithCommas : function(val){
		if ( val != null & val !=undefined ){
			val = val.toString().replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
			val = 0;
		}
		return val;
	},
	fnParseDateToString : function(v){
		var dt = new Date();
		var r ='';
		try{
			if ( isNaN(v) ){
				if ( !isNaN(Date.parse(v)) ){
					dt.setTime( Date.parse(v) );
				}
			} else {
				dt.setTime( parseInt(v) );
			}
		} catch(e){
			dt='';
		}
		if ( dt !=null){
			r =dt.toISOString();
		}
		return r;
	},
	fni18n : function(arg1 ,arg2 ,arg3){
		return $.i18n.prop(arg1 ,arg2 ,arg3);
	}
});

$.views.helpers({
	currencyFormat : currencyFormat,
	numberWithCommas : numberWithCommas,
    isTrueThenElse : function(arg1,arg2,arg3){
    	return arg1==true ? arg2:arg3;
    }
});

//상단선택여정 표시
function setQuickBasket(){

	// 여정
	var tripType = "${ param.tripType }";
	var oriDest = [];
	var segmentSEQ = 1 ;
	var origin1 = "${ param.origin1 }";
	var origin2 = "${ param.origin2 }";
	var origin3 = "${ param.origin3 }";
	var origin4 = "${ param.origin4 }";
	var destination1 = "${ param.destination1 }";
	var destination2 = "${ param.destination2 }";
	var destination3 = "${ param.destination3 }";
	var destination4 = "${ param.destination4 }";
	var isModify1 = true;
	var isModify2 = true;
	var isModify3 = true;
	var isModify4 = true;
	var chkModify = false;
	
	const origin = [origin1,origin2,origin3,origin4];
	const destination =[destination1,destination2,destination3,destination4];
	const christmas = ["서울/인천(ICN)","서울/김포(GMP)","부산(PUS)","제주(CJU)","청주(CJJ)","광주(KWJ)","대구(TAE)","여수(RSU)","울산(USN)","포항(KPO)","원주(WJU)","군산(KUV)","사천(HIN)","도쿄/나리타(NRT)","오사카/간사이(KIX)","후쿠오카(FUK)","삿포로(CTS)","오키나와(OKA)","기타큐슈(KKJ)","상하이/푸동(PVG)","시안(XIY)","홍콩(HKG)","마카오(MFM)","타이베이/타오위안(TPE)","칭다오(TAO)","방콕(BKK)","푸껫(HKT)","치앙마이(CNX)","세부(CEB)","클락(CRK)","보라카이/칼리보(KLO)","다낭(DAD)","하노이(HAN)","비엔티안(VTE)","코타 키나발루(BKI)","조호르바루(JHB)","다카(DAC)","괌(GUM)","하와이, 호놀룰루(HNL)"];
	for(var i = 0; i <= 3 ;i++){
		if(origin[i] != "" && destination[i] != ""){
			for(var j = 0; j < christmas.length; j++){
				if(christmas[j].indexOf(origin[i]) != -1) 		origin[i] = christmas[j];
				if(christmas[j].indexOf(destination[i]) != -1) 	destination[i] = christmas[j];
			}
		}
	}
	
	origin1 = origin[0];
	origin2 = origin[1];
	origin3 = origin[2];
	origin4 = origin[3];
	destination1 = destination[0];
	destination2 = destination[1];
	destination3 = destination[2];
	destination4 = destination[3];

	var ljCodeLangCd = "";
	var ljCountryLangCd = "한국";

	if ( origin1 !='' && destination1 !='' && ((chkModify && isModify1) || !chkModify) ){
		oriDest.push({boardPointName : origin1,offPointName : destination1 ,segmentSEQ : segmentSEQ++});
	}
	if ( origin2 !='' && destination2 !='' && ((chkModify && isModify2) || !chkModify) ){
		oriDest.push({boardPointName : origin2,offPointName : destination2 ,segmentSEQ : segmentSEQ++});
	}
	if ( origin3 !='' && destination3 !='' && ((chkModify && isModify3) || !chkModify) ){
		oriDest.push({boardPointName : origin3,offPointName : destination3 ,segmentSEQ : segmentSEQ++});
	}
	if ( origin4 !='' && destination4 !='' && ((chkModify && isModify4) || !chkModify) ){
		oriDest.push({boardPointName : origin4,offPointName : destination4 ,segmentSEQ : segmentSEQ++});
	}

	$("#basketFullSeg").html($("#quickSrmyTmpl").render(oriDest));

	//탑승객수
	var adultCnt = "${ param.adultPaxCount }";
	var childCnt = "${ param.childPaxCount }";
	var infantCnt = "${ param.infantPaxCount }";
	var paxCountString =[];
	if ( adultCnt !='' && adultCnt > '0' ) {
		paxCountString.push('성인 ' + adultCnt);
	}
	if ( childCnt !='' && childCnt > '0' ) {
		paxCountString.push('소아 ' + childCnt);
	}
	if ( infantCnt !='' && infantCnt > '0' ) {
		paxCountString.push('유아 ' + infantCnt);
	}

	$("#quickModify").find(".wrap>p.cont>em").text(paxCountString.join(','));
}


$(document).ready(function() {

	//var globalLangCd =  'KOR';
	//var discPopupShow = ;

	/*다국어처리*/
	$.i18n.properties({
		name	: ['messages', 'code','ibeBooking','ibeContentsExtras'],
		path	: '../i18n/messages/',
		mode	: 'map',
		language: 'ko_KR',
	    langCd	: 'KOR'
	});

	$.ajaxSetup({
		statusCode : {
			401	: function() {
				location.href='/';
			},
			403	: function() {
				location.href='/';
			}
		}
	});

	$(document).keydown(function (e) {
	    // F5, ctrl + F5, ctrl + r 새로고침 막기
	    if (e.which === 116) {
			if (typeof event == "object") {
				event.keyCode = 0;
			}
			return false;
		} else if (e.which === 82 && e.ctrlKey) {
			return false;
		}
	});

	// Basket을위한 화면 높이 재 계산
	$(document).ajaxComplete(function(){
		totalTop = $("#wrapper").height() - $("#footer").height() - 140;
	});

	//결제통화
	$(".typeSel select").change(function(){
		$(".typeSel button").addClass("btnTypeA").removeClass("btnTypeB");
	});

	// 팝업숨기기
	$(document).on("click focusin", function(e) {
		if($(".popFlight").is(":visible")){
			if(!($(e.target).parents(".flightDetail").length)){
				hideFlight();
			}
		}
	});

	// 상단선택여정 표시
	setQuickBasket();


	
	netfunnelVisible = true;
	// Net Funnel Complete
	NetFunnel_Complete();
	
});
</script>


       <!--  <div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div> -->

        
 <%@include file="/footer.jsp" %>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119908502-1"></script>
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)
[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-X', 'auto') ;
ga('send', 'pageview');
</script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){
	dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-119908502-1');
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){
	dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-121107129-1');
</script>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '590576527970824');
fbq('init', '403399370135869');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=590576527970824&amp;ev=PageView&amp;noscript=1"/>
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=403399370135869&amp;ev=PageView&amp;noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

    </div>
<script type="text/javascript"  src="../DozU28/o/z/9c7tQechBnFw/uJEbfwQN9mL9/HgAzLVlZ/DAVXQV/IqOxs.html"></script>



</body>
</html>