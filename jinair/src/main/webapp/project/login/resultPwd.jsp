<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
<head>
<title>아이디/비밀번호 찾기 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />
		
<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022010518"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022010518"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022010518"/>	
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022010518"/>
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022010518"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022010518" media="all and (max-width:1024px)"/>
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022010518" media="all and (max-width:640px)"/>
	
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
})(window,document,'script','/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!4737@193:1641394646099'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

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

<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=eefe79dd-0966-449b-ba40-11283882224f"></script>
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022010509"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010509" async></script>
		
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="_csrf" content="9c648289-fe14-4c29-aeeb-b5f3bcc7aa28"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

</head>
<body onload='$("#mailSendForm").submit()'>
		
<script type="text/javascript">
_dl = AAnalytics.dl();
</script>

		
<div id="wrapper">
	
<%@ include file="/header.jsp" %>

		<div id="container" class="memberWrap">
		<!-- 내용영역 -->
			<h1 class="typeC">아이디/비밀번호 찾기</h1>
			<div class="joinComplete">
				<p class="text">
    				<strong>회원님의 임시 비밀번호를 등록된 이메일 주소로 발송하였습니다.</strong><br>개인정보보호를 위해 로그인 후 새로운 비밀번호로 변경하여 주시기 바랍니다.
    			</p>
				<table class="bbsForm typeB">
					<caption>회원가입정보</caption>
					<colgroup>
						<col width="28%"><col width="">
					</colgroup>
					<tr>
						<th scope="row">이름</th>
						<td>${ param.m_name }</td>
					</tr>
					<tr>
						<th scope="row">아이디</th>
						<td>${ param.m_id }</td>
					</tr>
					<tr>
						<th scope="row">Email</th>
						<td>${ param.email }</td>
					</tr>
				</table>	
				<div class="btnArea">
					<span><a href="login.jsp" class="btnTypeA sizeL">로그인</a></span>
					<span><a href="<%= contextPath %>/jinairfront/www.jinair.com/booking/index.jsp" class="btnTypeB sizeL">메인</a></span>
				</div>
			</div>	
		<!-- //내용영역 -->
		</div><!-- //container -->
	
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
	<script type="text/javascript"  src="/4Gp9P3IVeqQ1r/OdxSYQE0Cxf/_uY/1raY6GmJEa9t/MigqcywGTg/X15O/WTweMUE"></script></body>
</html>
