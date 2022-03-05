
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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

		
<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022010509"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022010509"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?_=2022010509"/>
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_="/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022010509">

<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022010509"/>
<link rel="stylesheet" href="//images.jinair.com/css/booking.css?_=2022010509"/>
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022010509"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022010509" media="all and (max-width:1024px)"/>
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022010509" media="all and (max-width:640px)"/>
		


<script type="text/javascript">
//document.domain = 'jinair.com';


var	globalImageServer = 'images.jinair.com';
var	globalLoginYn = ('Y' == '') ? 'Y' : 'N';


var __global__ = __global__ || {};
__global__ = {
	
	imageServer: 'images.jinair.com',
	loginYn: 'N',
	accessChannel: '',
	csrfHeader: 'X-CSRF-TOKEN',
	csrfToken: 'eefe79dd-0966-449b-ba40-11283882224f',
	isMobile: false,
	isApp: false,
	isLoggedIn: false,
	login: {
		isLoggedIn: false,
		type: ''
	},
	user: {
		number: '',
		gender: '',
		age: '',
		nationality: '',
		level: ''
	}
};
</script>

<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','https://www.jinair.com/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!5116@230:1641360621741'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<script type="text/javascript"src="jquery-1.10.2.min.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022010509"></script>
<script type="text/javascript"src="jquery-ui.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2022010509"></script>

<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=eefe79dd-0966-449b-ba40-11283882224f"></script>
<script type="text/javascript"src="common.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022010509"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010509" async></script>


<meta name="_csrf" content="eefe79dd-0966-449b-ba40-11283882224f" />
<meta name="_csrf_header" content="X-CSRF-TOKEN" />
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/booking/dontGoBack.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/netfunnel.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/NetFunnel_Skin.js"></script>

	</head>

	
	<body>
		
		<script type="text/javascript">
		_dl = AAnalytics.dl();
		</script>

		<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>

		
		<div id="wrapper" class="mainIndex">
			



	<div class="bandNotice">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				
					<div class="swiper-slide" data-slide-index="0">
						<div class="slideCont">
							<a href="https://www.jinair.com/company/announce/announceView?anceSeq=22410&amp;searchWord=&amp;searchKey=&amp;page=1" target="">
								<span class="text" data-click-area="head-NoticeBar" data-click-name="Notice"><span style="color:#7e0049;">[공지]</span> <span style="font-family: 돋움, Dotum;"><strong><span style="color: rgb(124, 0, 72); font-size: 11pt;"><span style="color: rgb(114, 25, 71); font-size: 10pt;"><u style="text-decoration-line: underline;">진에어 국제선 비정상운항 안내</u> </span></span><span style="color: rgb(114, 25, 71); font-size: 8pt;">자세히보기 ></span></strong></span> </span>
							</a>
							<div class="today_check">
								<input type="checkbox" role="btn-hide-1d-notice" id="noticeBarCheck-22411" value="noticeBar22411" data-target-slide="0" data-click-area="head-NoticeBar" data-click-name="오늘하루보지않기">
								<label for="noticeBarCheck-22411">오늘 하루 보지 않기</label>
								<span class="btn"><a href="javascript://" role="btn-hide-notice" data-target-slide="0"><img src="//images.jinair.com/images/btn/btn_close.png" alt="닫기" data-click-area="head-NoticeBar" data-click-name="닫기"></a></span>
							</div>
						</div>
					</div>
				
					<div class="swiper-slide" data-slide-index="1">
						<div class="slideCont">
							<a href="https://www.jinair.com/company/announce/announceView?anceSeq=22408&amp;searchWord=&amp;searchKey=&amp;page=1" target="">
								<span class="text" data-click-area="head-NoticeBar" data-click-name="Notice"><span style="color:#7e0049;">[공지]</span> <span style="font-family: 돋움, Dotum;"><strong><span style="color: rgb(124, 0, 72); font-size: 11pt;"><span style="color: rgb(114, 25, 71);"><span style="text-decoration-line: underline; font-size: 10pt;">진에어 국내선 비정상운항 안내</span> </span></span><span style="color: rgb(114, 25, 71); font-size: 8pt;">자세히보기 ></span></strong></span> </span>
							</a>
							<div class="today_check">
								<input type="checkbox" role="btn-hide-1d-notice" id="noticeBarCheck-22409" value="noticeBar22409" data-target-slide="1" data-click-area="head-NoticeBar" data-click-name="오늘하루보지않기">
								<label for="noticeBarCheck-22409">오늘 하루 보지 않기</label>
								<span class="btn"><a href="javascript://" role="btn-hide-notice" data-target-slide="1"><img src="//images.jinair.com/images/btn/btn_close.png" alt="닫기" data-click-area="head-NoticeBar" data-click-name="닫기"></a></span>
							</div>
						</div>
					</div>
				
					<div class="swiper-slide" data-slide-index="2">
						<div class="slideCont">
							<a href="https://www.jinair.com/company/announce/announceView?anceSeq=22384" target="">
								<span class="text" data-click-area="head-NoticeBar" data-click-name="Notice"><span style="color:#7e0049;">[공지]</span> <span style="color: rgb(149, 16, 21); font-family: 돋움,Dotum; font-size: 11pt;"><strong><u><span style="color: rgb(114, 25, 71); font-size: 10pt;"><u>11월 12일 시스템 장애 관련 보상지급 기준 안내</u></span></u><span style="color: rgb(114, 25, 71); font-size: 10pt;"> </span><span style="color: rgb(114, 25, 71); font-size: 8pt;">자세히보기></span></strong></span></span>
							</a>
							<div class="today_check">
								<input type="checkbox" role="btn-hide-1d-notice" id="noticeBarCheck-22385" value="noticeBar22385" data-target-slide="2" data-click-area="head-NoticeBar" data-click-name="오늘하루보지않기">
								<label for="noticeBarCheck-22385">오늘 하루 보지 않기</label>
								<span class="btn"><a href="javascript://" role="btn-hide-notice" data-target-slide="2"><img src="//images.jinair.com/images/btn/btn_close.png" alt="닫기" data-click-area="head-NoticeBar" data-click-name="닫기"></a></span>
							</div>
						</div>
					</div>
				
					<div class="swiper-slide" data-slide-index="3">
						<div class="slideCont">
							<a href="https://www.jinair.com/company/announce/announceView?anceSeq=22210&amp;searchWord=&amp;searchKey=&amp;page=1" target="">
								<span class="text" data-click-area="head-NoticeBar" data-click-name="Notice"><span style="color:#7e0049;">[공지]</span> <span style="font-family: 돋움, Dotum;"><strong><u><span style="color: rgb(124, 0, 72); font-size: 11pt;"><u><span style="color: rgb(114, 25, 71); font-size: 10pt;"><u>코로나19 관련 국가별 출입국 제한사항 안내</u></span></u></span></u><span style="color: rgb(114, 25, 71); font-size: 10pt;"> </span><span style="color: rgb(114, 25, 71); font-size: 10pt;"><span style="font-size: 8pt;">자세히보기 ></span> </span></strong></span></span>
							</a>
							<div class="today_check">
								<input type="checkbox" role="btn-hide-1d-notice" id="noticeBarCheck-21240" value="noticeBar21240" data-target-slide="3" data-click-area="head-NoticeBar" data-click-name="오늘하루보지않기">
								<label for="noticeBarCheck-21240">오늘 하루 보지 않기</label>
								<span class="btn"><a href="javascript://" role="btn-hide-notice" data-target-slide="3"><img src="//images.jinair.com/images/btn/btn_close.png" alt="닫기" data-click-area="head-NoticeBar" data-click-name="닫기"></a></span>
							</div>
						</div>
					</div>
				
			</div>

			<div class="swiper_paging">
				<div class="swiper-pagination"></div>

				<button type="button" class="swiper-button-prev"></button>
				<button type="button" class="swiper-button-next"></button>
			</div>
		</div>
	</div>

<%@ include file="/header.jsp" %>


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

<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/booking/common.js?v=eefe79dd-0966-449b-ba40-11283882224f"></script>
<script type="text/javascript">
$(document).ready(function() {
	setPopup();

	$.i18n.properties({
		name: ['messages', 'common','ibeBooking', 'ibeContentsBooking', 'member'],
		path: 'https://www.jinair.com/i18n/messages/',
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
					</div>
				</div>
			</div>

			
			<div class="bonus"><a href="javascript://" onclick="jsClickBonusCouponBtn(false);" data-click-area="메인" data-click-name="보너스항공권예매">보너스 항공권 예매</a></div>
		</div>

		







<input type="hidden" id="globalLangCd" value="KOR">


<div class="itinerary" style="display:;">
	
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
<script type="text/javascript"src="hong.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/booking/common.js?v=eefe79dd-0966-449b-ba40-11283882224f"></script>

<form id="registerform" action="/booking/getAvailabilityList" method="post">
	<input type="hidden" name="_csrf" id="_csrf" value="eefe79dd-0966-449b-ba40-11283882224f" />

	<input type="hidden"	id="searchType"			name="searchType"		value="">
	<input type="hidden"	id="origin1"			name="origin1"			value="">
	<input type="hidden"	id="destination1"		name="destination1"		value="">
	<input type="hidden"	id="travelDate1"		name="travelDate1"		value="">
	<input type="hidden"	id="origin2"			name="origin2"			value="">
	<input type="hidden"	id="destination2"		name="destination2"		value="">
	<input type="hidden"	id="travelDate2"		name="travelDate2"		value="">
	<input type="hidden"	id="origin3"			name="origin3"			value="">
	<input type="hidden"	id="destination3"		name="destination3"		value="">
	<input type="hidden"	id="travelDate3"		name="travelDate3"		value="">
	<input type="hidden"	id="origin4"			name="origin4"			value="">
	<input type="hidden"	id="destination4"		name="destination4"		value="">
	<input type="hidden"	id="travelDate4"		name="travelDate4"		value="">
	<input type="hidden"	id="pointOfPurchase"	name="pointOfPurchase"	value="">
	<input type="hidden"	id="adultPaxCount"		name="adultPaxCount"	value="">
	<input type="hidden"	id="childPaxCount"		name="childPaxCount"	value="">
	<input type="hidden"	id="infantPaxCount"		name="infantPaxCount"	value="">
	<input type="hidden"	id="tripType"			name="tripType"			value="">
	<input type="hidden"	id="pnrNumber"			name="pnrNumber"		value="">

	<input type="hidden"	id="domIntType"			name="domIntType"		value="">
	<input type="hidden"	id="segmentId1"			name="segmentId1"		value="">
	<input type="hidden"	id="segmentId2"			name="segmentId2"		value="">
	<input type="hidden"	id="segmentId3"			name="segmentId3"		value="">
	<input type="hidden"	id="segmentId4"			name="segmentId4"		value="">
	<input type="hidden"	id="isModify1"			name="isModify1"		value="">
	<input type="hidden"	id="isModify2"			name="isModify2"		value="">
	<input type="hidden"	id="isModify3"			name="isModify3"		value="">
	<input type="hidden"	id="isModify4"			name="isModify4"		value="">

	<input type="hidden"	id="cpnNo"				name="cpnNo"			value="">
	<input type="hidden"	id="promoCode"			name="promoCode"		value="">
	<input type="hidden"							name="userBirth"		value="">
	<input type="hidden"	id="refVal"				name="refVal"			value="JINAIR">
	<input type="hidden"	id="refPop"				name="refPop"			value="">
	<input type="hidden"	id="refChannel"			name="refChannel"		value="">
	<input type="hidden"	id="refLang"			name="refLang"			value="">
	<input type="hidden"	id="userId"				name="userId"			value="">
	<input type="hidden"	id="bookingID"			name="bookingID"		value="">
	<input type="hidden"	id="depcity1Param"								value="">
	<input type="hidden"	id="arrcity1Param"								value="">
	<input type="hidden"	id="depdate1Param"								value="">
	<input type="hidden"	id="arrdate1Param"								value="">
	<input type="hidden"	id="tripday1Param"								value="">
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
				<a href="/promotion/nowLeave" data-click-area="메인-Promotion Banner" data-click-name="이벤트더보기"><img src="http://www.jinair.com/images/booking/btn_event_view_KOR.png" alt="더 많은 이벤트 보기"></a>
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
		<ul role="list-announces"></ul>
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
	doGateSetting('KOR', 'ko'); 
});

initial = true;

function initContents() {
	showLoading('[role="root-rollingbanners"]');
	showLoading('[role="root-servicebanners"]');
	showLoading('[role="root-announces"]');
	$.ajax({
		type: 'post',
		url: 'contents',
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


<script type="text/x-jsrender" role="template-announces">
{{for announces}}
<li>
	<strong class="num">※</strong>
	<p><a href="/company/announce/announceView?anceSeq={{:anceSeq}}">{{:titl}}</a></p>
	<span class="date">{{:rgstDttmStr}}</span>
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


<%@ include file="/footer.jsp" %>

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
	<script type="text/javascript"  src="WCQ"></script></body>
</html>

