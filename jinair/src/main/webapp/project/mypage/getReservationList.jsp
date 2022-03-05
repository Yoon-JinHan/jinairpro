<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko-kr">
<head>
<title>예약 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />

<title>JIN AIR   진에어</title>
<meta http-equiv="content-language" content="ko-kr" />
<meta property="og:type" content="website">
<meta property="og:title" content="JIN AIR   진에어">
<meta property="og:description" content="국내선 최다 운항 대한민국 대표 LCC 진에어, 집에서 즐기는 기내식 등 종합쇼핑몰 지니스토어">
<meta property="og:image" content="https://www.jinair.com/images/layout/logo.png">
<meta property="og:url" content="https://www.jinair.com">


<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_="/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011209">
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/booking.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011209" media="all and (max-width:1024px)"/>
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011209" media="all and (max-width:640px)"/>

		
<script type="text/javascript">
//document.domain = 'jinair.com';


var	globalImageServer = 'images.jinair.com';
var	globalLoginYn = ('Y' == 'Y') ? 'Y' : 'N';


var __global__ = __global__ || {};
__global__ = {
	
	imageServer: 'images.jinair.com',
	loginYn: 'Y',
	accessChannel: '',
	csrfHeader: 'X-CSRF-TOKEN',
	csrfToken: '37d7b8a3-35e7-49cb-a3a5-c033368d68bd',
	isMobile: false,
	isApp: false,
	isLoggedIn: true,
	login: {
		isLoggedIn: true,
		type: 'normal'
	},
	user: {
		number: 'GPR3150086',
		gender: 'F',
		age: '30',
		nationality: 'KOR',
		level: ''
	}
};
</script>
<!-- 
<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','https://www.jinair.com/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568520024|SS!7619@214:1641481779578'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>
 -->
<script type="text/javascript"src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022010509"></script>
<script type="text/javascript"src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2022010509"></script>

<!-- <script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=eefe79dd-0966-449b-ba40-11283882224f"></script> -->
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022010509"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010509" async></script>

<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/booking/dontGoBack.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/booking/common.js?v=708ba792-58fb-47b9-a8a0-9b0f9f1c018a"></script> -->
<!-- <script type="text/javascript" src="/jinair/project/script/reservationList.js"></script> -->
<meta name="_csrf" content="708ba792-58fb-47b9-a8a0-9b0f9f1c018a"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

<style>
.popLayer {
    position: absolute;
    left: 50%;
    z-index: 113;
    top: 492px;
    height: 404px;
    margin-top: -202px;
    width: 645px;
    margin-left: -322.5px;
    opacity: 1;
    max-width: 1160px;
    background: #fff;
}
</style>
 
</head>
<body>
		
<script type="text/javascript">
_dl = AAnalytics.dl();
</script>

<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>

		
<div id="wrapper" class="">
			
<%@ include file="/header.jsp" %>	
			
			
<div id="wrapper">
	<div id="container">
	<!-- 내용영역 -->
		
<%@ include file="subNav.jsp" %>

<script type="text/javascript">
var navSwiper, isNavSwiper = false;
$(window).on("load resize", function() {
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)) {
		if($(window).width() <= 640) {
			if(!isNavSwiper){
				navSwiper = new Swiper($(".subNav .slideCont"), {
					slidesPerView: "auto"
				});
				isNavSwiper = true;
			}
		} else {
			if(isNavSwiper){
				navSwiper.destroy(true, true);
				isNavSwiper = false;
			}
		}
	}
});
</script>

		<h1 class="typeA">예약조회/변경/취소</h1>
		<div class="tabArea">
			<ul class="tabTypeA">
				<li class="choice"><a href="javascript:void(0);" id="tabActivePnr" data-click-area="마이페이지-예약조회/변경/취소" data-click-name="Tab_예약조회">예약조회</a></li>
				<li><a href="javascript:void(0);" id="tabInactivePnr" data-click-area="마이페이지-예약조회/변경/취소" data-click-name="Tab_지난조회">지난예약</a></li>
			</ul>
		</div>
		<div id="divReservationList"></div>
		<ul id="ulPagination" class="paging"></ul>

	<!-- //내용영역 -->
	</div>
</div>

<form id="reservationForm">
	<input type="hidden" id="pnrNumber" name="pnrNumber" />
	<input type="hidden" id="pnrStatus" name="pnrStatus" value=""/>
	<input type="hidden" id="page" name="page" value=""/>
	<input type="hidden" name="_csrf" id="_csrf" value="708ba792-58fb-47b9-a8a0-9b0f9f1c018a" />
</form>


<script type="text/javascript">
$(document).ready(function() {
	$.i18n.properties({
	    name	: ['messages', 'user', 'ibeBooking', 'ibeContentsMypage'],
	    path	: 'http://www.jinair.com/i18n/messages/',
	    mode	: 'map',
	    language: 'ko_KR',
	    langCd	: 'KOR'
	});

	if ('DENY' == '') {
		showPopupLayer('<%= contextPath %>/project/member/popup/passwordCheckLayer.jsp?moveCode=001');
	}
});
</script>

<%@ include file="/footer.jsp" %>	


</div>
	
</html>
