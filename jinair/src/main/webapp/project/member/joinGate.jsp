<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>회원가입 | 로그인 | 진에어</title>

<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="아시아 대표 실용 항공사! 진에어의 회원으로 가입하시면 다양한 서비스를 경험하실 수 있습니다." name="description" />
<meta content="진에어, 회원가입, 진에어회원, 진에어회원가입, 회원가입하기, 간편회원가입, 외국인회원가입, 일반회원, 진에어기업회원가입, 진에어유소아회원, 진에어어린이회원가입" name="keywords" />

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?v=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022011009" />
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022011009" />
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_=2022011009"/><!-- 신규 나이포인트 관련 css 추가 -->
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011009" media="all and (max-width:1024px)" />
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011009" media="all and (max-width:640px)" />

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
	csrfToken: '1ec6bdd7-e724-49aa-89f9-25389213b980',
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
		n$apm: '15474568520024|SS!49177@220:1641088049221'
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

<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=22c391c5-c7b5-4f1b-9ebc-34ad30732a67"></script> -->
<script type="text/javascript" src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2021122914"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2021122914" async></script>

	
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>

</head>
<body>
		
<script type="text/javascript">
_dl = AAnalytics.dl();
</script>
		
<div id="wrapper">
			
<%@ include file="/header.jsp" %>			
	
<div id="container" class="memberWrap">
	<h1 class="typeC">회원가입</h1>
	<ul class="joinGate">
		<li class="adult"><a href="termsAgree.jsp">14세 이상 일반회원</a></li>
		<li class="child"><a href="termsAgreeChild.jsp">14세 미만 소아회원</a></li>
	</ul>
	
	<p class="caution typeB">이 페이지는 한국에 거주하는 내국인을 위한 사이트입니다. 한국거주 외국인 또는 해외거주   내국인께서는 국가/언어 설정을 변경하시어 알맞은 사이트로 이동하시기 바랍니다.</p>
	
</div>

<script type="text/javascript">
$(function() {
	$.i18n.properties({
		name: ['messages', 'cmmMessage', 'agencyRequest'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: '',
		langCd: 'KOR',
		callback: function() {
			var errorCode = '';
			if(!!errorCode) {
				switch(errorCode) {
				case '01':
					alertLayer('인증하신 정보는 만 14세 이상입니다. 만 14세 이상이신 경우에는 일반회원 가입 절차를 진행하여 주시기 바랍니다.');
					break;
				case '02':
					alertLayer('인증하신 정보는 만 14세 미만입니다. 만 14세 미만이신 경우에는 소아회원 가입 절차를 진행하여 주시기 바랍니다.');
					break;
				}
			}
		}
	});
});
</script>

<%@ include file="/footer.jsp" %>			
</div>
			

<script type="text/javascript"  src="https://www.jinair.com/MTK82y/IuRpnM/nW5B3/R8QxG/rwYeM/1cD7N0wr/bxsOIQlM/L1kSLmwn/ZWg"></script></body>
</html>
