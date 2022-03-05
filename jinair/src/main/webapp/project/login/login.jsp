<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />


<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022010309"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022010309"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022010309"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022010309"/>
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022010309"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022010309" media="all and (max-width:1024px)"/>
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022010309" media="all and (max-width:640px)"/>

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
	csrfToken: '2aba25c1-d305-4854-befd-c144495fb36d',
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
		n$apm: '15518424830024|SS!34171@187:1641714215747'
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
<script type="text/javascript"src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2022010509"></script>

<!-- <script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=eefe79dd-0966-449b-ba40-11283882224f"></script> -->
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010509"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022010509"></script>
<!-- <script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010509" async></script> -->
		
<meta name="_csrf" content="37d7b8a3-35e7-49cb-a3a5-c033368d68bd">
<meta name="_csrf_header" content="X-CSRF-TOKEN">
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/login/login.js?_=20190715"></script>

</head>
<body onload='$("#id").focus();'>

<div id="wrapper">

<%@ include file="/header.jsp" %>

<div id="container" class="memberWrap">
	<h1 class="typeC">로그인</h1>

	<div class="loginArea">
		<div class="member">
			<form id="login-form" autocomplete="off" method="post" action="<%= request.getContextPath() %>/project/login/login.do">
				<input type="hidden" name="_csrf"
					value="8c0630c5-6125-4437-84b9-83c8b9b75b89"> <input
					type="hidden" name="accessFrom" value="01"> <input
					type="hidden" name="returnUrl" value="">

				<fieldset>
					<legend>회원</legend>
					<span><input type="text" name="id" id="id" maxlength="20" placeholder="아이디" style="text-transform: uppercase;" ></span> 
					<span><label for="login-form-pw" id="pwdlabel">비밀번호</label><input type="password" name="pw" id="login-form-pw"onkeydown="enterCheck();" maxlength="20" placeholder="비밀번호" ></span>
					<p id="capsLockWarning" style="display: none;">
						<font color="red"><br />Caps Lock이 켜져 있습니다.</font>
					</p>
					<a href="javascript://" role="login-button" class="btnTypeA sizeL"
						data-click-area="로그인" data-click-name="확인" onclick="btnLogin();">확인</a>
				</fieldset>
			</form>

			<script type="text/javascript" src="https://www.jinair.com/sns/snsLogin.js"></script>

			<p class="find">
				<a href="javascript://" data-click-area="로그인"
					data-click-name="회원가입"
					onclick="top.location.href='<%= contextPath %>/project/member/joinGate.jsp';">회원가입</a> <a
					href ="javascript://" data-click-area="로그인" data-click-name="아이디찾기"
					onclick="top.location.href='findIdPw.jsp';">아이디 찾기</a> 
					<a href="javascript://" data-click-area="로그인"
					data-click-name="비밀번호 찾기"
					onclick="top.location.href='findIdPw.jsp?find=findPw';">비밀번호
					찾기</a>
			</p>

			<p class="btnSns">

				<a href="javascript://" class="kakao choice" role="btn-sns"
					data-sns-type-code="08" data-state="SNS_LOGIN">카카오 계정으로 로그인</a> <a
					href="javascript://" class="facebook choice" role="btn-sns"
					data-sns-type-code="01" data-state="SNS_LOGIN">페이스북 계정으로 로그인</a> <a
					href="javascript://" class="naver choice" role="btn-sns"
					data-sns-type-code="02" data-state="SNS_LOGIN">네이버 계정으로 로그인</a> <a
					href="javascript://" class="google choice" role="btn-sns"
					data-sns-type-code="05" data-state="SNS_LOGIN">구글 계정으로 로그인</a> <a
					href="javascript://" class="intra choice" role="btn-sns"
					data-sns-type-code="06" data-state="SNS_LOGIN">링크드인 계정으로 로그인</a> <a
					href="javascript://" class="apple choice" role="btn-sns"
					data-sns-type-code="09" data-state="SNS_LOGIN">애플 계정으로 로그인</a>
			</p>

			<div class="phone_login">
				<a href="https://safelogin.kr/sauth/regist?site_code=NH&sub_code=0">

					<img src="//images.jinair.com/images/customer/img_phone_login.gif"
					alt="휴대폰 간편 로그인">
				</a>
			</div> <!--phone_login  -->

		</div> <!-- member-->
	</div> <!-- loginArea -->
	
	<div class="loginSwiper" role="banner-parent"><div class="swiper-container swiper-container-horizontal"><ul class="swiper-wrapper" style="transform: translate3d(-1836px, 0px, 0px); transition-duration: 0ms;"><li class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="2" style="width: 459px;"><a href="https://www.jinair.com/travel/rentcar?snsLang=ko_KR&amp;ctrCd=KOR" target="_blank" title="새 창 열림"><img src="//images.jinair.com/images/customer/img_login_bn_2105_03.jpg" alt="특별한 렌터카 할인/오직 진에어 회원 대상 혜택 누리기" data-click-area="로그인" data-click-name="login-banner_affiliate-rentcar"></a></li><li class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 459px;"><a href="https://www.jinair.com/promotion/eventView?evntSeq=11337&amp;snsLang=ko_KR&amp;ctrCd=KOR" target="_blank" title="새 창 열림"><img src="//images.jinair.com/images/customer/img_login_bn_2105_01.jpg" alt="걱정 없는 여행을 위한 여행보험/추가 정보 입력 없이 간편하게 가입하기" data-click-area="로그인" data-click-name="login-banner_DOM-insurance-promo"></a></li><li class="swiper-slide" data-swiper-slide-index="1" style="width: 459px;"><a href="https://www.jinair.com/travel/hotel?snsLang=ko_KR&amp;ctrCd=KOR" target="_blank" title="새 창 열림"><img src="//images.jinair.com/images/customer/img_login_bn_2105_02.jpg" alt="전세계 최저가 호텔이 한 자리에!/나만의 가벼운 여행 완성하기" data-click-area="로그인" data-click-name="login-banner_affiliate-hotel"></a></li><li class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="2" style="width: 459px;"><a href="https://www.jinair.com/travel/rentcar?snsLang=ko_KR&amp;ctrCd=KOR" target="_blank" title="새 창 열림"><img src="//images.jinair.com/images/customer/img_login_bn_2105_03.jpg" alt="특별한 렌터카 할인/오직 진에어 회원 대상 혜택 누리기" data-click-area="로그인" data-click-name="login-banner_affiliate-rentcar"></a></li><li class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 459px;"><a href="https://www.jinair.com/promotion/eventView?evntSeq=11337&amp;snsLang=ko_KR&amp;ctrCd=KOR" target="_blank" title="새 창 열림"><img src="//images.jinair.com/images/customer/img_login_bn_2105_01.jpg" alt="걱정 없는 여행을 위한 여행보험/추가 정보 입력 없이 간편하게 가입하기" data-click-area="로그인" data-click-name="login-banner_DOM-insurance-promo"></a></li></ul></div><a href="javascript://" class="swiper-button-next"></a><a href="javascript://" class="swiper-button-prev"></a></div>
	
</div> <!-- container  -->

<%@ include file="/footer.jsp" %>

</div>

<script>

	function btnLogin() {
		
		if( $("#id").val() == '아이디' ){
			alertLayer("[아이디] 을(를) 입력해 주세요.");
		} else if( $("#login-form-pw").val() == '비밀번호' || $("#login-form-pw").val() == '' ){
			alertLayer("[비밀번호] 을(를) 입력해 주세요.");
		} else{
			var params = $("form").serialize();
		
			$.ajax({
				url:"<%= contextPath %>/project/login/login.do",
				dataType:"json",
				type:"POST",
				data: params,
				cache: false, 
				async: false,
				success:function(data, textStatus, jqXHR){
					if( data.success == 'true' ){ // 로그인 성공 
						location.href="<%= contextPath %>/jinairfront/www.jinair.com/booking/index.jsp";
					} else if( data.error == 0 ){ // 아이디 틀림 
						alertLayer("아이디와 비밀번호를 확인해 주세요.");
					} else if ( data.error < 6 ){ // 비밀번호 틀림 
						alertLayer("아이디와 비밀번호를 정확히 입력해 주세요.<br><br>5회 연속 실패 시 비밀번호를 재발급받아야 합니다.<br>현재 <span>"+data.error+"</span>회 실패하였습니다.");
					} else if ( data.error == 6 ){ // 비밀번호 5회이상 틀림 
						alertLayer("로그인 5회 연속 실패로 인해 사용자의 계정이 로그인 제한 상태입니다.<br>비밀번호를 재발급받은 후 로그인 해주세요.");
					}
				},
				error: function(){
					alert("에러~");
				}
			});
		}
	}

	function enterCheck() {
		var evt_code = (window.netscape) ? event.which : event.keyCode;
		if (evt_code == 13) {
			event.keyCode = 0;
			btnLogin();
		}
	}
	
</script>

<script>
	$("#login-form-pw").focusin(function(event) {
		$("#pwdlabel").css("display","none");
	});
	$("#login-form-pw").focusout(function(event) {
		if( $(this).val() == "" ){
			$("#pwdlabel").css("display","block");
		}
	});
	$("#login-form-pw").keypress(function(e) {
		var keyCode = 0;
		var shirftKey = false;
		keyCode = e.keyCode;	
		shiftKey = e.shiftKey;

		if(((keyCode >= 65 && keyCode <90) && !shiftKey) || ((keyCode >= 97 && keyCode <= 112) && shiftKey)){
			$("#capsLockWarning").css("display","block");
		}else{
			$("#capsLockWarning").css("display","none");
		}
	});
	
</script>
</body>
</html>

