<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
<head>

<title>회원가입_약관동의 및 본인인증 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />
	
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
		n$apm: '15474568520024|SS!51328@282:1641089259533'
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


<meta name="_csrf" content="22c391c5-c7b5-4f1b-9ebc-34ad30732a67"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.custom.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/member/individual/termsAgree.js"></script>

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
		<li class="on"><strong>Step 1</strong><br/>약관동의 및 본인인증</li>
		<li><strong>Step 2</strong><br/>정보입력</li>
		<li><strong>Step 3</strong><br/>가입완료</li>
	</ul>
	<h2 class="typeA">약관동의</h2>
	<p class="chkAll">
		<input type="checkbox" name="" id="agreeAll" onclick="checkAll();" >
		<label for="agreeAll">아래 약관 및 개인정보 수집, 이용 등에 모두 동의 합니다.</label>
	</p>
	<form id="termsForm" name="termsForm">
	<input type="hidden" name="_csrf" value="22c391c5-c7b5-4f1b-9ebc-34ad30732a67" />
	
	<ul class="joinAgree">
		<li>
			<label for="term01"><input type="checkbox" name="term01" id="term01" class="terms"> <strong class="fontTypeA">[필수]</strong> 홈페이지 이용 약관</label>
			<a onclick="showPopupLayer('<%= contextPath %>/project/member/termCode/policy01.html'); return false" class="btnTypeB">상세보기</a>
		</li>
		
		<li>
			<label for="term02"><input type="checkbox" name="term02" id="term02" class="terms"> <strong class="fontTypeA">[필수]</strong> 개인정보 수집 및 이용 관련 동의</label>
			<a onclick="showPopupLayer('<%= contextPath %>/project/member/termCode/policy02.html'); return false" class="btnTypeB">상세보기</a>
		</li>
		<li>
			<label for="term06"><input type="checkbox" name="term06" id="term06" class="terms"> <strong class="fontTypeA">
			[필수]</strong> 개인정보 국외 이전에 관한 동의</label>
			<a onclick="showPopupLayer('<%= contextPath %>/project/member/termCode/policy03.html?wide=true'); return false" class="btnTypeB">
			상세보기</a>
		</li>
		<li>
			<label for="term03"><input type="checkbox" name="term03" id="term03" class="terms"> <strong class="fontTypeA">[선택]</strong> 개인정보 제3자 제공에 대한 안내</label>
			<a onclick="showPopupLayer('<%= contextPath %>/project/member/termCode/policy04.html'); return false" class="btnTypeB">상세보기</a>
		</li>
		<li>
			<label for="term04"><input type="checkbox" name="term04" id="term04" class="terms"> <strong class="fontTypeA">[선택]</strong> 고유식별정보 수집 및 이용 관련 동의</label>
			<a onclick="showPopupLayer('<%= contextPath %>/project/member/termCode/policy05.html'); return false" class="btnTypeB">상세보기</a>
		</li>
		<li>
			<label for="term05"><input type="checkbox" name="term05" id="term05" class="terms"> <strong class="fontTypeA">[선택]</strong> 마케팅 및 광고 활용 동의</label>
			<a onclick="showPopupLayer('<%= contextPath %>/project/member/termCode/policy06.html'); return false" class="btnTypeB">상세보기</a>
		</li>
	</ul>
	</form>
	
	<h2 class="typeA">본인인증</h2>
	<div class="certifyArea">
		<ul class="certify">
			<li class="mobile">
				<a href="javascript://" id="mobileAuth1">
					휴대폰 본인인증
						<span class="caption">본인 명의로 가입된 핸드폰 번호를 통해 인증</span>
				</a>
			</li>
			<li class="ipin">
				<a href="javascript://" id="ipinAuth">
					아이핀(I-PIN) 인증
					<span class="caption">아이핀으로 인증</span>
				</a>
			</li>
		</ul>

		<p class="text">진에어는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 제23조의2 (주민등록번호의 사용제한)에 의거하여 고객님의 주민등록번호를 수집·이용하지 않습니다. 이에 대한 본인확인인증수단으로 '휴대폰본인확인서비스'와 '아이핀(I-PIN)인증서비스'를 제공합니다.</p>
		<ul class="caution">
    		<li>본인확인서비스는 한국모바일인증㈜ 에서 제공합니다.</li>
			<li>타인의 개인정보를 도용할 경우 관계법에 의해 처벌될 수 있으며 서비스 이용에 제한이 있을 수 있습니다.</li>
			<li>가입하신 고객이 개명한 경우 혹은 본인인증에 문제가 있는 경우 고객센터(1600-6200)로 문의 주시기 바랍니다.</li>
   		 </ul>
				
	</div>
	
	<div class="btnArea">
		 
		<a href="joinGate.jsp" class="btnCancel btnTypeA sizeL">취소</a>
	</div>
</div><!-- //container -->



<script type="text/javascript">
$(document).ready(function() {
	AAnalytics.appendToDataLayer({
		page_event: {
			join_start: true
		}
	});

	isMobileOS	= false;
	lytOpenYn	= 'N';

	/*다국어처리*/
	$.i18n.properties({
		name: ['messages', 'individualMember'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			initialize({
				returnUrlWithoutPopup: 'https://www.jinair.com/member/individual/afterAuth?fromChildPage=false'
			});
		}
	});
});
</script>

<script>
	// 필수 동의 체크시에만 핸드폰 인증 가능.	
	$("#mobileAuth1").on("click", function(event) {
		var xPos = (document.body.offsetWidth/2) - (480/2); 
		var yPos = (document.body.offsetHeight/2) - (500/2);

		if( !$("#term01").is(":checked") ){
			alertLayer("홈페이지 이용 약관에 동의하셔야 회원 가입이 가능합니다.");
		} else if( !$("#term02").is(":checked") ) {
			alertLayer("개인정보 수집 및 이용에 동의하셔야 회원 가입이 가능합니다.");
		} else if( !$("#term06").is(":checked") ){
			alertLayer("개인정보 국외 이전에 관한 동의를 하셔야 회원 가입이 가능합니다.");
		} else {
			window.open("<%= contextPath %>/project/member/popup/mobileAuth.jsp", "_blank", "width=480px, height=580px, left="+xPos+", top="+yPos+";");
		}
		
	});
 
</script>


<%@ include file="/footer.jsp" %>	
</div>

<script type="text/javascript">
$(document).ready(function() {
	AAnalytics.appendToDataLayer({
		page_event: {
			join_start: true
		}
	});

	isMobileOS	= false;
	lytOpenYn	= 'N';

	/*다국어처리*/
	$.i18n.properties({
		name: ['messages', 'individualMember'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			initialize({
				returnUrlWithoutPopup: 'https://www.jinair.com/member/individual/afterAuth?fromChildPage=false'
			});
		}
	});
});
</script>
		
</body>
</html>
