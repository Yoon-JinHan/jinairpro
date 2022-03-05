<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>회원가입_가입완료 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />


		
<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?v=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022011110" />
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022011110" />
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_=2022011110"/><!-- 신규 나이포인트 관련 css 추가 -->
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011110" media="all and (max-width:1024px)" />
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011110" media="all and (max-width:640px)" />
		
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
	csrfToken: 'd9197558-b8f2-4990-bc62-b3940ae11ac7',
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
		n$apm: '15474568520024|SS!59555@270:1641129537806'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<script type="text/javascript" src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2021122914"></script>
<script type="text/javascript" src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2021122914"></script>

<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=68a87d6f-900b-4dad-9566-a519b21f3022"></script> -->
<script type="text/javascript" src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2021122914"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2021122914" async></script>

</head>
<body>
		
<script type="text/javascript">
_dl = AAnalytics.dl();
</script>

		
<div id="wrapper">
			
<%@ include file="/header.jsp" %>			

			
<div id="container" class="memberWrap">
	<h1 class="typeC">회원가입</h1>

	<ul class="joinStep">
		<li><strong>Step 1</strong><br/>약관동의 및 본인인증</li>
		<li><strong>Step 2</strong><br/>정보입력</li>
		<li class="on"><strong>Step 3</strong><br/>가입완료</li>
	</ul>

	<div class="joinComplete">
		<p class="text"><strong>회원가입이 완료 되었습니다.</strong><br>진에어에서 제공하는 다양한 서비스를 이용하실 수 있습니다.<br>감사합니다.</p>
		<table class="bbsForm typeB">
			<caption>회원가입정보</caption>
			<colgroup>
				<col width="22%"><col width="">
			</colgroup>
			<tr>
				<th scope="row">이름</th>
				<td>${ param.mbrNm }</td>
			</tr>
			<tr>
				<th scope="row">아이디</th>
				<td>${ param.id }</td>
			</tr>
		</table>

		<div class="btnArea">
			<span><a href="<%= contextPath %>/project/login/login.jsp" class="btnTypeA sizeL">로그인</a></span>
			<span><a href="<%= contextPath %>/jinairfront/www.jinair.com/booking/index.jsp" class="btnTypeB sizeL">메인</a></span>
		</div>

		<div class="btnSNS">
			<ul>
				<li class="facebook"><a href="https://www.facebook.com/JinAir" target="_blank" title="새창열림">페이스북</a></li>
				<li class="instagram"><a href="https://www.instagram.com/jinair_LJ/" target="_blank" title="새창열림">인스타그램</a></li>
				<li class="twitter"><a href="https://twitter.com/JinAir_LJ" target="_blank" title="새창열림">트위터</a></li>
			</ul>
			<p>진에어 <strong>SNS Follow us</strong></p>
		</div>
	</div>
</div>

<%@ include file="/footer.jsp" %>

<script type="text/javascript">
$(document).ready(function() {
	AAnalytics.appendToDataLayer({
		new_user: 'GPR3165211_개인',
		page_event: {
			join_complete: true
		}
	});
});
</script>



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
	<script type="text/javascript"  src="/MTK82y/IuRpnM/nW5B3/R8QxG/rwYeM/1cD7N0wr/bxsOIQlM/L1kSLmwn/ZWg"></script></body>
</html>
