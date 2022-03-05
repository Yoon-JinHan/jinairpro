<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<title>아이디/비밀번호 찾기 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011009"/>		
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011009" media="all and (max-width:1024px)"/>
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011009" media="all and (max-width:640px)"/>
 
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
	csrfToken: '28352727-bc3b-4bca-b5d2-37b719d3eb96',
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
		n$apm: '15474568520024|SS!440@208:1641777204960'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>
 
<script type="text/javascript" src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022011009"></script>
<script type="text/javascript" src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022011009"></script>

<!-- <script type="text/javascript" src="https://www.jinair.com//js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=28352727-bc3b-4bca-b5d2-37b719d3eb96"></script> -->
<script type="text/javascript" src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com//js/hom/lj/front/common/common.pages.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com//js/hom/lj/front/common/chatbot.js?_=2022011009"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022011009" async></script>
 
<meta name="_csrf" content="28352727-bc3b-4bca-b5d2-37b719d3eb96"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>
<script type="text/javascript" src="https://www.jinair.com//js/hom/lib/front/jquery.validate.js"></script>
<script type="text/javascript" src="/jinair/project/script/find.js"></script>
<script type="text/javascript" src="https://www.jinair.com//sns/snsLogin.js?_=2022011009"></script>

<style>
	.popLayer{
		display: none;
		z-index: 113; 
		top: 50%; 
		/* height: 562px;  */
		margin-top: -281px; 
		width: 645px; 
		margin-left: -322.5px; 
		opacity: 1;	
	}
</style>

</head>
<body>

<div id="wrapper">

<!-- header --> 
<%@ include file="/header.jsp" %>

<div id="container" class="memberWrap">
	
	<h1 class="typeC">아이디/비밀번호 찾기</h1>
	<div class="findType">
		<label for="findId"><input type="radio" name="find" value="findId" id="findId" checked=""> 아이디 찾기</label>
		<label for="findPw"><input type="radio" name="find" value="findPw" id="findPw"> 비밀번호 찾기</label>
	</div>

	<div class="certifyArea">
		<ul class="certify">
			<li class="email emailId">
				<a href="javascript://" id="emailAuth">이메일 인증<span class="caption"></span></a>
			</li>

			<li class="kakao">
				<a href="javascript://" id="kakaoAuth">카카오 인증
					<span class="caption">카카오 인증을 통해 진에어 계정 연동 후 본인인증</span>
				</a>
			</li>
		</ul>
		
	</div>
</div>

<form id="pwFindForm" name="pwFindForm" method="POST">
	<input type="hidden" id="mbrLnm" name="mbrLnm" value="">
	<input type="hidden" id="mbrFnm" name="mbrFnm" value="">
	<input type="hidden" id="bthDt" name="bthDt" value="">
	<input type="hidden" id="emAdr" name="emAdr" value="">
	<input type="hidden" id="id" name="id" value="">
</form>

<script type="text/javascript">
var flag = '';
$(document).ready(function() {
	isMobileOS	= false;
	lytOpenYn	= 'N';
	$.i18n.properties({
		name: ['messages', 'individualMember'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			var messageCode = '';
			if(!!messageCode) {
				alertLayer($.i18n.prop(''));
			}

			initialize({
				returnUrlWithoutPopup: 'https://www.jinair.com/login/findIdPw/afterAuth',
				flag: ''
			});
		}
	});
});
</script>

<%-- 
<div class="bgLayer" style="z-index: 113; height: 100%; display: none;"></div>

아이디 찾기 이메일 인증 모달창 
<div class="popLayer" id="popLayer113">
	<iframe src="<%= contextPath %>/project/login/popup/findIdPopup.jsp" width="100%" height="100%" frameborder="0" allowtransparency="true" scrolling="no" id="iframePopLayer113" style=" height: 365px;"></iframe>
	<p class="close"><a href="#" onclick="closePopup();"><span>닫기</span></a></p>
</div>

비밀번호 찾기 이메일 인증 모달창 
<div class="popLayer" id="pwdPopup">
	<iframe src="findPwdPopup.jsp" width="100%" height="100%" frameborder="0" allowtransparency="true" scrolling="no" id="iframePopLayer113" style="height: 400px;"></iframe>
	<p class="close"><a href="#" onclick="closePopup();"><span>닫기</span></a></p>
</div>
 --%>
<%@ include file="/footer.jsp" %>

</div>
<%-- 
<script>
$("#emailAuth").click(function() {
	if( $(":radio[name=find]:checked").val() == 'findId' ){
		showPopupLayer('<%= contextPath %>/project/login/popup/findIdPopup.jsp');
	} else if( $(":radio[name=find]:checked").val() == 'findPw' ){
		showPopupLayer('<%= contextPath %>/project/login/popup/findPwdPopup.jsp');
	} 
});
</script> --%>

 <!-- 
<script>
	// 모달창 띄우기 
	$("#emailAuth").on("click", function(event) {
		if( $(":radio[name=find]:checked").val() == 'findId' ){
			$("#idPopup").css("display", "block");
			$(".bgLayer").css("display", "block");
		} else if( $(":radio[name=find]:checked").val() == 'findPw' ){
			$("#pwdPopup").css("display", "block");
			$(".bgLayer").css("display", "block");
		} 
	});
	
	// 모달창 닫기 
	function closePopup() {
		if( $(":radio[name=find]:checked").val() == 'findId' ){
			$("#idPopup").css("display", "none");
			$(".bgLayer").css("display", "none");
		} else if( $(":radio[name=find]:checked").val() == 'findPw' ){
			$("#pwdPopup").css("display", "none");
			$(".bgLayer").css("display", "none");
		} 
	};
</script>
  -->
</body>
</html>