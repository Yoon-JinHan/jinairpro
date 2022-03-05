<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html lang="ko-kr">
	
	<head>
		
		
		<title>항공권 예매 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="국내선 최다 운항 대한민국 대표 LCC 진에어, 집에서 즐기는 기내식 등 종합쇼핑몰 지니스토어" name="description" />
<meta content="진에어, JINAIR, 항공사, 진에어항공, 저비용항공사, 해외여행, 항공권, 항공권예매, 항공권예약, 진에어예약, 국내항공권예약, 국내선, 얼리버드, 특가항공권, 항공권특가, 제주도항공권, 국제선항공권, 부산항공권, 지니스토어, 온라인쇼핑몰, 대구항공권, 광주항공권, 포항항공권, 울산항공권, 여수항공권" name="keywords" />

		<title>JIN AIR   진에어</title>
		<meta http-equiv="content-language" content="ko-kr" />
		<meta property="og:type" content="website">
		<meta property="og:title" content="JIN AIR   진에어">
		<meta property="og:description" content="국내선 최다 운항 대한민국 대표 LCC 진에어, 집에서 즐기는 기내식 등 종합쇼핑몰 지니스토어">
		<meta property="og:image" content="https://www.jinair.com/images/layout/logo.png">
		<meta property="og:url" content="https://www.jinair.com">

		
		<link rel="stylesheet" href="//images.jinair.com/css/default.css"/>
		<link rel="stylesheet" href="//images.jinair.com/css/common.css"/>
		<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css"/>
		<link rel="stylesheet" href="//images.jinair.com/css/point.css"/>
		
			
			
			<link rel="stylesheet" href="//images.jinair.com/css/font.css">
		
		<link rel="stylesheet" href="//images.jinair.com/css/layout.css"/>
		<link rel="stylesheet" href="//images.jinair.com/css/booking.css"/>
		<link rel="stylesheet" href="//images.jinair.com/css/content.css"/>
		<link rel="stylesheet" href="//images.jinair.com/css/tablet.css" media="all and (max-width:1024px)"/>
		<link rel="stylesheet" href="//images.jinair.com/css/mobile.css" media="all and (max-width:640px)"/>
		

		
		






<script type="text/javascript">
document.domain = 'localhost';


var	globalImageServer = 'images.jinair.com';
var	globalLoginYn = ('Y' == 'Y') ? 'Y' : 'N';


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
	/* ****************** 이부분 다시 보기 ***********************  */
	user: {
		number: '',
		gender: '',
		age: '',
		nationality: '',
		level: ''
	} 
};
</script>

		

<!-- 
<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c);  }; 
	var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','../js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!30840@244:1641696266281'
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
		<script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js"></script>
		<script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js"></script>
		<script type="text/javascript" src="../js/hom/lib/front/jsrender.min.js"></script>

		
		<script type="text/javascript" src="../js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=62024c52-e394-4ab2-8f36-630483b88f4b"></script>
		<script type="text/javascript" src="../js/hom/lj/front/common/common.js"></script>
		<script type="text/javascript" src="../js/hom/lj/front/common/common.pages.js"></script>
		<script type="text/javascript" src="../js/hom/lj/front/common/chatbot.js"></script>
		<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js" async></script>

		
		<!--[if IE 9]>
		<link rel="stylesheet" href="//images.jinair.com/css/content.ie9.css"/>
		<![endif]-->
		<!--[if lte IE 8]>
		<link rel="stylesheet" href="//images.jinair.com/css/content.ie8.css"/>
		<script type="text/javascript" src="../js/hom/pub/front/respond.min.js"></script>
		<script type="text/javascript" src="../js/hom/pub/front/jquery-ui.ie8.js"></script>
		<![endif]-->

		
		

		
		
<meta name="_csrf" content="62024c52-e394-4ab2-8f36-630483b88f4b" />
<meta name="_csrf_header" content="X-CSRF-TOKEN" />
<script type="text/javascript" src="../js/hom/lj/front/booking/dontGoBack.js"></script>
<script type="text/javascript" src="../js/hom/lib/front/netfunnel.js"></script>
<script type="text/javascript" src="../js/hom/lib/front/NetFunnel_Skin.js"></script>

	</head>

	
	<body>
		
		<script type="text/javascript">
		_dl = AAnalytics.dl();
		$(":hidden#globalLangCd").val(getCookie('foLangCd'));
		</script>

		<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>

		
		<div id="wrapper" class="mainIndex">
			
			
<!-- ********************************************************************************************************************************* -->



<%@include file="/header.jsp" %>

<!-- ************************************************************************************************************************************************************************************************************************************************ -->










<script type="text/javascript">

var __header__ = __header__ || {};

$(document).ready(function() {
	$.i18n.properties({
		name: ['messages', 'ibeBooking'],
		path: '<%= contextPath %>/jinairfront/www.jinair.com/i18n/messages/',
		mode: 'map',
		language: getCookie('foLangCountry'),
		langCd: getCookie('foLangCd'),
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
		showPopupLayer('../popup/localeSelectLayer?from=' + encodeURIComponent(location.href));
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


			<!-- **************************************************************************************************************************************************  -->
			


<div class="noticePopLayer notice_Maintainance" style="display:none;width:620px;left:50%;top:25%;margin:-235px 0 0 -310px;">
	<div class="head">
		<h2>시스템 정기 점검 안내</h2>
		<p class="close"><a href="javascript://" onclick="hideNoticePopup(this); return false"><span>팝업 닫기</span></a></p>
	</div>
	<div class="content">
		<div class="maintainance">
			
		
		<p>현재 시스템 정기 점검 중 입니다.</p>
		<span class="txt">이용에 불편을 드려 죄송합니다.</span>
		<span class="time">(점검 시간 : 00:00 ~ 00:15)</span>
		
	
			<div class="btnTypeA" onclick="hideNoticePopup(this); return false">확인</div>
		</div>
	</div>
</div>

<div id="container">

	
	
		<div class="visual">
			<a  data-click-area="메인-main-banner" data-click-name="main-banner_사천취항">
				<img src="//files.jinair.com/prd/2022/0103/20305a4caf1647de98f771e57c6c4a382" alt="사천취항">
			</a>
		</div>
	

	
	<div class="itinerary_wrap">
		<!-- 구간 ~ 보너스 항공권 -->
		<div class="flight_box">
			
			<div class="sel_opt">
				<!-- PC(레이어 방식) -->
				<div class="p_sel">
					<a href="javascript:;" class="init icoFold" title="구간 선택" role="trip-type-selector">왕복</a>
					<ul class="layer_menu">
						<li><a href="javascript://" role="trip-type-option" data-value="RT">왕복</a></li>
						<li><a href="javascript://" role="trip-type-option" data-value="OW">편도</a></li>
						<li><a href="javascript://" role="trip-type-option" data-value="MC">다구간</a></li>
					</ul>
				</div>

				<!-- Mobile(셀렉트 방식) -->
				<div class="m_sel">
					<select id="routeType" title="구간 선택">
						<option value="RT">왕복</option>
						<option value="OW">편도</option>
						<option value="MC">다구간</option>
					</select>
				</div>
			</div>

			
			<div class="itinerary">
				<div class="sec memberNum">
					<p class="srmy setting"><a href="#" onclick="showBooking(this); return false" class="icoFold" title="승객수 선택"><strong>성인1</strong></a></p>
					<div class="content member" style="display: none;">
						<h2>탑승객수</h2>
						<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
						<div class="scr">
							<ul>
								<li>
									<span><strong name="adultPaxCnt" name="adultPaxCnt">1</strong>성인</span>
									<a href="javascript://"  name="adultPaxCntDown" onclick="fnSetPaxCountDown('ADULT', this);"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
									<a href="javascript://" name="adultPaxCntUp" onclick="fnSetPaxCountUp('ADULT', this);"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
								</li>
								<li>
									<span>
										<strong name="childPaxCnt" name="childPaxCnt">0</strong>소아
										<a href="#popAge1" class="btn_age" onclick="showAgeLayer(this);" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
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
									<a href="javascript://" onclick="fnSetPaxCountDown('CHILD',this);" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
									<a href="javascript://" onclick="fnSetPaxCountUp('CHILD',this);"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
								</li>
								<li>
									<span>
										<strong name="infantPaxCnt" name="infantPaxCnt">0</strong>유아
										<a href="#popAge2" class="btn_age" onclick="showAgeLayer(this); return false;" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
										<div id="popAge2" class="popAgeLayer">
											<p>유아<em>(탑승일 기준)</em></em></p>
											<ul>
												<li>[국내선] 생후 7일 이상 – 만 2세 미만</li>
												<li>[국제선] 생후 7일 이상 – 만 2세 미만</li>
											</ul>
											<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
											<div class="layer_close"><a href="#popAge2" onclick="hideAgeLayer(this);">닫기</a></div>
										</div>
									</span>
									<a href="javascript://" name="infantPaxCntDown" onclick="fnSetPaxCountDown('INFANT',this);"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
									<a href="javascript://" name="infantPaxCntUp" onclick="fnSetPaxCountUp('INFANT',this);"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
								</li>
							</ul>
							<p class="btn"><a href="javascript://" onclick="setMemberNum(this);" class="btnTypeA">확인</a></p>
							<div class="caution">
								<p class="cal"><a href="javascript://" title="나이계산기 팝업 열림">유/소아 나이계산기</a></p>
							</div>
							<div class="ageCal">
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
			<option value=""></option>
			<!-- <option value=""></option> -->
		</select>
		</span>
		<span>
			<select name="cboMonth" title="생년월일 월 선택">
				<option value=""></option>
				<!-- <option value=""></option> -->
			</select>
		</span>
		<span>
			<select name="cboDay" id="cboBirthDay" title="생년월일 일 선택">
				<option value=""></option>
				<!-- <option value=""></option> -->
			</select>
		</span>
	</p>

	<p class="calculator_date">
		<label for="date">가는날</label>
		<span>
		<select name="cboYear" id="date" title="가는날 년 선택">
				<option value=""></option>
				<!-- <option value=""></option> -->
		</select>
		</span>
		<span>
			<select name="cboMonth" title="가는날 월 선택">
				<option value=""></option>
				<!-- <option value=""></option> -->
			</select>
		</span>
		<span>
			<select name="cboDay" title="가는날 일 선택">
				<option value=""></option>
				<!-- <option value=""></option> -->
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
		path: '<%= contextPath %>/jinairfront/www.jinair.com/i18n/messages/',
		mode: 'map',
		language: getCookie('foLangCountry'),
		langCd: getCookie('foLangCd'),
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
					</div>
				</div>
			</div>

			
			<div class="bonus"><a href="javascript://" onclick="jsClickBonusCouponBtn(true);" data-click-area="메인" data-click-name="보너스항공권예매">보너스 항공권 예매</a></div>
		</div>

		







<input type="hidden" id="globalLangCd" value="">


<div class="itinerary" >
	
	<div class="sec departure">
		<p class="srmy"><a href="javascript://" onclick="showBooking(this);" class="icoFold">출발지<strong></strong></a></p>
		<div class="content">
			<h2>출/도착 선택</h2>
			<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
			<div class="scr">
				<ul class="cityList" name="depCity">
				</ul>
			</div>
		</div>
	</div>

	
	<div class="sec destination">
		<p class="srmy"><a href="javascript://" onclick="showBooking(this);" class="icoFold">도착지<strong></strong></a></p>
		<!-- 출발지 선택안하고 도착지 클릭했을때<p class="srmy"><a href="javascript://" onclick="alertLayer('출발지가 선택되지 않았습니다.');" class="icoFold">도착지<strong></strong></a></p> -->
		<!-- [dev] 처음엔 p class="choice"가 없는 상태, 레이어에서 지역선택하면 p에 class="choice" 추가되고 strong에 선택한 지역이 표시됨 -->
		<div class="content">
			<h2>출/도착 선택</h2>
			<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
			<div class="scr">
				<ul class="cityList" name="arrCity">
				</ul>
			</div>
		</div>
	</div>

	
	<div class="sec date" name="calendar">
		<div><p class="srmy choice"><a href="javascript://" onclick="showCalendar(this,'가는날');" class="icoFold">가는날<strong></strong></a></p></div>
		<div><p class="srmy choice"><a href="javascript://" onclick="showCalendar(this,'오는날', true);" class="icoFold">오는날<strong></strong></a></p></div>
	</div>
</div>


<div class="itinerary multiCourse" style="display:none;">
	<ul class="course">
		
		<li>
			
			<div class="sec departure">
				<p class="srmy"><a href="javascript://" onclick="showBooking(this);" class="icoFold">출발지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="depCity">
						</ul>
					</div>
				</div>
			</div>

			
			<div class="sec destination">
				<p class="srmy"><a href="javascript://" onclick="showBooking(this);" class="icoFold">도착지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="arrCity">
						</ul>
					</div>
				</div>
			</div>

			
			<div class="sec" name="calendar">
				<div><p class="srmy choice"><a href="javascript://" onclick="showCalendar(this,'가는날');" class="icoFold">가는날<strong></strong></a></p></div>
			</div>
		</li>

		
		<li>
			
			<div class="sec departure">
				<p class="srmy"><a href="javascript://" onclick="showBooking(this);" class="icoFold">출발지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="depCity">
						</ul>
					</div>
				</div>
			</div>

			
			<div class="sec destination">
				<p class="srmy"><a href="javascript://" onclick="showBooking(this);" class="icoFold">도착지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="javascript://" onclick="hideBooking(this);"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="arrCity">
						</ul>
					</div>
				</div>
			</div>

			
			<div class="sec" name="calendar">
				<div><p class="srmy choice"><a href="javascript://" onclick="showCalendar(this,'가는날');" class="icoFold">가는날<strong></strong></a></p></div>
			</div>
		</li>
	</ul>
	<p class="more" style="display: none;"><a href="javascript://" onclick="addCourse();">구간추가</a></p>
</div>
<!-- ************************************************************************************************************* -->
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
			<li {{if (iataCityAirportCode == 'DAC')}}class="disable"{{/if}}><a href="javascript://" onclick="setCity(this);">{{:cityAirportName}}</a><input type='hidden' name="ApoCode" country="{{:countryCode}}" value="{{:iataCityAirportCode}}"></li>
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
			<li {{if (iataCityAirportCode == 'DAC')}}class="disable"{{/if}} ><a href="javascript://" onclick="setCity(this);">{{:cityAirportName}}</a><input type='hidden' name="ApoCode" country="{{:countryCode}}" value="{{:iataCityAirportCode}}"></li>
		{{/for}}
	</ul>
</li>
</script>

<script type="text/javascript">
	var sid = ('prd' == 'prd') ? 'service_1' : 'service_2';
	var aid = ('prd' == 'prd') ? 'avail' : 'stg_avail';

	$(document).ready(function() {

		//var globalLangCd =  'KOR';
		

		
		netfunnelVisible = true;
		
	});
</script>
<script type="text/javascript" src="../js/hom/lj/front/booking/itineraryComponents.js"></script>
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>

<form id="registerform" action="getAvailabilityList.jsp" method="get">
	<!-- <input type="hidden" name="_csrf" id="_csrf" value="62024c52-e394-4ab2-8f36-630483b88f4b" /> -->

	<input type="hidden"  	id="_csrf" 				name="_csrf"				value="" 			/>
	<input type="hidden" 	id="searchType" 		name="searchType" 			value= ""		/>
	<input type="hidden" 	id="origin1" 			name="origin1"              value= ""        	/>
	<input type="hidden" 	id="destination1" 		name="destination1"         value= ""	/>
	<input type="hidden" 	id="travelDate1" 		name="travelDate1"          value= ""		/>
	<input type="hidden" 	id="origin2" 			name="origin2"              value= ""        	/>
	<input type="hidden" 	id="destination2" 		name="destination2"         value= ""	/>
	<input type="hidden" 	id="travelDate2" 		name="travelDate2"          value= ""		/>
	
	<input type="hidden" 	id="origin3" 			name="origin3"              value=""       />
	<input type="hidden" 	id="destination3" 		name="destination3"         value=""	/>
	<input type="hidden" 	id="travelDate3" 		name="travelDate3"          value=""    />
	<input type="hidden" 	id="origin4" 			name="origin4"              value=""        />
	<input type="hidden" 	id="destination4" 		name="destination4"         value=""	/>
	<input type="hidden" 	id="travelDate4" 		name="travelDate4"          value=""    />
	<input type="hidden" 	id="pointOfPurchase" 	name="pointOfPurchase"      value= "" />
	<input type="hidden" 	id="adultPaxCount" 		name="adultPaxCount"        value= ""	/>
	<input type="hidden" 	id="childPaxCount" 		name="childPaxCount"        value= ""	/>
	<input type="hidden" 	id="infantPaxCount" 	name="infantPaxCount"       value= ""	/>
	<input type="hidden" 	id="tripType" 			name="tripType"             value= ""		/>
	<input type="hidden" 	id="pnrNumber" 			name="pnrNumber"            value= ""		/>

	<input type="hidden" 	id="domIntType" 		name="domIntType"           value= ""		/>
	<input type="hidden"	id="segmentId1"			name="segmentId1"			value="">
	<input type="hidden"	id="segmentId2"			name="segmentId2"			value="">
	<input type="hidden"	id="segmentId3"			name="segmentId3"			value="">
	<input type="hidden"	id="segmentId4"			name="segmentId4"			value="">
	<input type="hidden"	id="isModify1"			name="isModify1"			value="true">
	<input type="hidden"	id="isModify2"			name="isModify2"			value="true">
	<input type="hidden"	id="isModify3"			name="isModify3"			value="true">
	<input type="hidden"	id="isModify4"			name="isModify4"			value="true">

	<input type="hidden" 	id="cpnNo"				name="cpnNo"				value= ""			/>
	<input type="hidden" 	id="promoCode"			name="promoCode"			value= ""		/>
	<input type="hidden" 							name="userBirth" 			value= "" 		/>
	<input type="hidden" 	id="refVal"				name="refVal"				value= ""			/>
	<input type="hidden" 	id="refPop"				name="refPop"				value= ""			/>
	<input type="hidden" 	id="refChannel"			name="refChannel"			value= ""		/>
	<input type="hidden" 	id="refLang"			name="refLang"				value= ""			/>
	<input type="hidden" 	id="userId"				name="userId" 				value= ""			/>
	<input type="hidden"	id="bookingID"			name="bookingID"			value= ""		/>
	<input type="hidden" 	id="depcity1Param" 									value="" 						/>
	<input type="hidden" 	id="arrcity1Param"									value="" 						/>
	<input type="hidden" 	id="depdate1Param" 									value="" 						/>
	<input type="hidden" 	id="arrdate1Param" 									value="" 						/>
	<input type="hidden" 	id="tripday1Param" 									value="" 						/>
</form>

		<div class="btnArea">
			<a href="javascript://" onclick="return presearch();" class="btnTypeA sizeL" data-click-area="메인" data-click-name="메인_다음">다음</a>
		</div>
	</div>

	
	<div class="menu_wrap">
		<div class="reserve"><a href="/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="메인" data-click-name="예약조회">예약조회</a></div>
		<div class="checkin"><a href="/checkin/checkinList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="06" data-click-area="메인" data-click-name="체크인">체크인</a></div>
	</div>

	
	<div class="banner_wrap" role="root-rollingbanners">
		<div class="swiper-container">
			<ul class="swiper-wrapper" role="list-rollingbanners"></ul>

			<div class="brn_navi">
				<div class="navi">
					<button type="button" class="swiper-button-prev">이전</button>
					<button type="button" class="swiper-button-next">다음</button>
				</div>
				<div class="fraction"></div>
				<div class="swiper-pagination"></div>
				<button type="button" class="control">버튼</button>
			</div>

			<div class="btn_more">
				<a href="/promotion/nowLeave" data-click-area="메인-Promotion Banner" data-click-name="이벤트더보기"><img src="<%= contextPath %>/jinairfront/images.jinair.com/images/booking/btn_event_view_KOR.png" alt="더 많은 이벤트 보기"></a>
			</div>
		</div>

		<div class="btnArea">
			<a href="/promotion/nowLeave" class="btnTypeA" data-click-area="메인-Promotion Banner" data-click-name="이벤트더보기">더 많은 이벤트 보기</a>
		</div>
	</div>

	
	<div class="service_wrap" role="root-servicebanners">
		<div class="inner">
			<h2>다양한 서비스와 혜택</h2>
			<ul role="list-servicebanners"></ul>
		</div>
	</div>

	
	<div class="notice_wrap" role="root-announces">
		<h2>공지사항</h2>
		<ul role="list-announces">
			<li>
			<strong class="num">※</strong>
			<p><a href="/jinair/project/noticeView.do?num=30">진에어 고객서비스센터 운영시간 변경 안내</a></p>
			<span class="date">2021-12-29</span>
			</li>
			<li>
			<strong class="num">※</strong>
			<p><a href="/jinair/project/noticeView.do?num=30">국제선 각국 입국 규정 강화에 따른 항공권 변경 및 환불 안내</a></p>
			<span class="date">2021-12-02</span>
			</li>
			<li>
			<strong class="num">※</strong>
			<p><a href="/jinair/project/noticeView.do?num=29">지니쿠폰 운영 정책 변경 안내</a></p>
			<span class="date">2021-10-05</span>
			</li>
		</ul>
		<div class="btn_more">
			<a href="/jinair/project/noticeList.do" data-click-area="메인-Notice" data-click-name="공지사항 더보기">더보기</a>
		</div>
	</div>
</div>

<script type="text/javascript">
$(document).on('ready', function() {
	
	NetFunnel_Complete();
	

	var ch = '';
	if(!!ch && !__global__.isApp) {
		var code = 'lj.ibe.b2c.' + ch.toLowerCase();
		var msg = $.i18n.prop(code);
		if(msg.indexOf(code) === -1) {
			alertLayer(msg);
		}
	}

	var params = {
		depcity1: '',
		arrcity1: '',
		depdate1: '',
		arrdate1: '',
		tripday1: '',
		ch: '',
	};

	initContents();

	// mobileApp 연계
	doGateSetting(getCookie('foLangCd'), getCookie('foLang')); 
});

initial = true;

function initContents() {
	showLoading('[role="root-rollingbanners"]');
	showLoading('[role="root-servicebanners"]');
	showLoading('[role="root-announces"]');
	$.ajax({
		type: 'post',
		url: 'contents.json',
		contentType: 'application/json; charset=utf-8',
		beforeSend: function(xhr) {
			xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
		},
		dataType: 'json'
	}).done(function(data) {
		$('[role="list-rollingbanners"]').html($('[role="template-rollingbanners"]').render(data));
		hideLoading('[role="root-rollingbanners"]');

		$('[role="list-servicebanners"]').html($('[role="template-servicebanners"]').render(data));
		initMainSwiper();
		hideLoading('[role="root-servicebanners"]');

		if(!!data.announces) {
			for(var i = 0; i < data.announces.length; i++) {
				data.announces[i].rgstDttmStr = data.announces[i].rgstDttmStr.substring(0, 10);
			}
		}
		$('[role="list-announces"]').html($('[role="template-announces"]').render(data));
		hideLoading('[role="root-announces"]');

		$('#wrapper').append($('[role="template-noticepopups"]').render(data));
		initPopups();
	}).fail(function() {
		hideLoading();
	});
}

var totalHeight = 0;
var tempStatus = 0;
var heightArr = [];
var reStatus = false;
var total = 0;

function presearch() {
	var maintenanceFlag = false;
	if(!maintenanceFlag) {
		return submitItinerary();
	} else {
		return showMaintenanceNoticePopup();
	}
}

function showMaintenanceNoticePopup() {
	var depCountry = $(".itinerary").not(".multiCourse").find(".sec.departure>p>a>strong").attr("country");
	var arrCountry = $(".itinerary").not(".multiCourse").find(".sec.destination>p>a>strong").attr("country");
	var domIntType;
	if (depCountry != undefined) {
		if (depCountry == arrCountry && depCountry == "KOR") {
			submitItinerary();
		}
		else {
			$(".notice_Maintainance").show();
			$("#wrapper").append("<div class='bgLayer3' style='display:block;'></div>");
		}
	}
}

function hideNoticePopup(obj) {
	$(obj).parents(".noticePopLayer").hide();
	$( '.bgLayer3' ).hide(); //dim hide
}

function todayNoticePopup(obj) {
	setCookie(obj, "done" , 1);
	$("#" + obj).hide();
}

function initPopups() {
	for(var i = 0; i < $('[id*="noticePopLayer"]').length; i++) {
		var $popup = $($('[id*="noticePopLayer"]')[i]);

		var seq = $popup.data('seq');
		var cookieName = 'noticePopLayer' + seq
		if(getCookie(cookieName) === 'done') {
			continue;
		}

		var popupSzX = $popup.data('width');
		var popupSzY = $popup.data('height');

		if(i == 0) {
			totalHeight = (popupSzY*1);
			total = (popupSzX*1) + 10;
			if (isMobileOS) {
				$('#noticePopLayer'+seq).css({width:popupSzX});
			} else {
				$('#content'+seq).css({width:popupSzX, height:popupSzY});
			}
			$('#noticePopLayer'+seq).css({left:50, top:50});
			heightArr[0] = (popupSzY*1);
			total += 40*1;
		} else {
			total += ((popupSzX*1) + 40);
			if(total < $(window).width()) {
				if(tempStatus==0){
					if (isMobileOS) {
						$('#noticePopLayer'+seq).css({width:popupSzX});
					} else {
						$('#content'+seq).css({width:popupSzX, height:popupSzY});
					}
					$('#noticePopLayer'+seq).css({left:total-popupSzX, top:50});
				} else {
					if(reStatus) {
						total -= (popupSzX*1);
						reStatus = false;
					}
					if (isMobileOS) {
						$('#noticePopLayer'+seq).css({width:popupSzX});
					} else {
						$('#content'+seq).css({width:popupSzX, height:popupSzY});
					}
					$('#noticePopLayer'+seq).css({left:total, top:totalHeight});
				}
			} else {
				var temp = document.getElementsByName('popupSzY')[i-1].value;
				total = 50;
				for(var j = 0; j < i; j++){
					if(document.getElementsByName('popupSzY')[j].value > temp) {
						temp = document.getElementsByName('popupSzY')[j].value;
					}
					if(j == i-1){
						tempStatus += tempStatus+1;
						heightArr[tempStatus] = (temp*1);
					}
				}
				totalHeight = 0;
				for(var j = 0; j < heightArr.length; j++) {
					totalHeight += (heightArr[j]*1);
				}
				if (isMobileOS) {
					$('#noticePopLayer'+seq).css({width:popupSzX});
				} else {
					$('#content'+seq).css({width:popupSzX, height:popupSzY});
				}
				$('#noticePopLayer'+seq).css({left:total, top:totalHeight});
				total = total+(popupSzX*1);
				reStatus = true;
			}
		}

		$("#noticePopLayer"+seq).show();

		// 제목이 긴 경우 말줄임(...) 처리
		var	pWidth	= $('#noticePopLayer' + seq).width();
		var	mWidth	= pWidth - 20 * 3 - 26;

		$('#noticePopLayer' + seq + ' .head h2').css({
			'width': mWidth,
			'text-overflow': 'ellipsis',
			'white-space': 'nowrap',
			'word-wrap': 'normal',
			'overflow': 'hidden'
		});
	}
};
</script>


<script type="text/x-jsrender" role="template-rollingbanners">
{{for rollingbanners}}
<li class="swiper-slide">
	<a href="{{:url}}" target="{{:(moveTypCd === '01' ? '_self' : '_blank')}}">
		<img src="{{:imageUri}}" alt="{{:bnrNm}}" data-click-area="메인-Promotion Banner" data-click-name="Hero Banner_{{:bnrNm}}">
	</a>
</li>
{{/for}}
</script>


<script type="text/x-jsrender" role="template-servicebanners">
{{for servicebanners}}
<li>
	<a href="{{:url}}" target="{{:(moveTypCd === '01' ? '_self' : '_blank')}}">
		<div class="thumb"><img src="{{:imageUri}}" alt="{{:bnrNm}}" data-click-area="메인-Service Banner" data-click-name="{{:bnrNm}}"></div>
		<strong data-click-area="메인-Service Banner" data-click-name="{{:bnrNm}}">{{:bnrNm}}</strong>
	</a>
</li>
{{/for}}
</script>


<script type="text/x-jsrender" role="template-noticepopups">
{{for noticepopups}}
<div class="noticePopLayer" id="noticePopLayer{{:anceSeq}}" style="display: none;" data-seq="{{:anceSeq}}" data-width="{{:popupSzX}}" data-height="{{:popupSzY}}">
	<div class="head">
		<h2>{{:titl}}</h2>
		<p class="close"><a href="javascript://" onclick="hideNoticePopup(this); return false"><span>레이어팝업 닫기</span></a></p>
	</div>
	<div class="content" id="content{{:anceSeq}}" style="overflow: auto;">{{:ctn}}
		{{if anceSeq == "928" || anceSeq == "22344"}}
		<div class="btnArea" style="margin-top:0;"><span><a href="/company/announce/reward" class="btnTypeA" style="margin-top:0;">보상 신청 하러가기</a></span></div>
		{{/if}}
	</div>
	<div class="foot">
		<input type="checkbox" id="todayChk{{:anceSeq}}" onclick="todayNoticePopup('noticePopLayer{{:anceSeq}}'); return false">
		<label for="todayChk{{:anceSeq}}">오늘 하루 더 이상 표시 안 함</label>
	</div>
</div>
{{/for}}
</script>


			
			<!-- <div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div> -->

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
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-121107129-1"></script>
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
	<script type="text/javascript"  src="../DozU28/o/z/9c7tQechBnFw/uJEbfwQN9mL9/HgAzLVlZ/DAVXQV/IqOxs.html"></script></body>
</html>
