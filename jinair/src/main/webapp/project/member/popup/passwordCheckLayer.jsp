<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>
	
<title>비밀번호 확인</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">


<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/popup.css?_=2022011209"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011209" media="all and (max-width:1024px)">
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011209" media="all and (max-width:640px)">

		
<script type="text/javascript">
	//document.domain			= 'jinair.com';

	
	var	globalImageServer	= 'images.jinair.com';
	var	globalLoginYn		= ('Y' == 'Y') ? 'Y' : 'N';
	

	var __global__ = __global__ || {};
	__global__ = {
		
		imageServer: 'images.jinair.com',
		loginYn: 'Y',
		accessChannel: '',
		csrfHeader: 'X-CSRF-TOKEN',
		csrfToken: '58043799-11f9-48bb-a1d9-bf91045e9798',
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

	
	check_isiFrame = true;
</script>
<!-- 
<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568520024|SS!2339@266:1641528021662'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>
 -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
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

<!-- <script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=eefe79dd-0966-449b-ba40-11283882224f"></script> -->
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript"src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010509"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010509" async></script>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<meta name="_csrf" content="58043799-11f9-48bb-a1d9-bf91045e9798"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script> -->
	
</head>

<body class="popup">

<script type="text/javascript">
//_dl = AAnalytics.dl();
_dl = parent._dl;
</script>
		
<div id="popWrap" style="width:645px;">
	<h1>비밀번호 확인</h1>
	<div id="popCont">
	<!-- 내용영역 -->
		<div class="pwdArea">
			<p class="text">고객님의 개인정보를 소중하게 보호하려고 노력하고 있으며, 회원님의 동의 없이는 회원정보를 제공하지 않습니다.</p>
			<form id="pwForm" method="post" autocomplete="off">
				<table class="fieldForm">
					<caption>비밀번호 확인</caption>
					<colgroup>
						<col width="25%"><col width="">
					</colgroup>
					<tr>
						<th><label for="password">비밀번호 입력</label></th>
						<td><input type="password" maxlength="150" name="pw" id="pw"  autocomplete="off"></td>
					</tr>
				</table>
			</form>
		</div>
		<div class="btnArea">
			<span><a href="javascript://" onclick="checkPassword();" id="btnCheck" class="btnTypeA">확인</a></span>
			<span><a href="javascript://" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a></span>
		</div>
	<!-- //내용영역 -->
	</div><!-- //popCont -->
</div><!-- //popWrap -->

<script type="text/javascript">
	var moveCode = ${ param.moveCode };
		$(document).ready(function(){
			setPopup('113');
			
			/*파이어폭스용 엔터이벤트*/
			var agent = navigator.userAgent.toLowerCase();
			if (agent != null) {
				if (-1 != agent.indexOf("firefox")) {
					$("#pw").bind("keypress", function (event) {
						var keyCode = event.which || event.keyCode;
						if (keyCode === 13) {
							event.keyCode = 0;
							checkPassword();
						}
					});
				}
			}
			
			/*다국어처리*/
			$.i18n.properties({
				name	: ['messages', 'individualMember'],
				path	: 'https://www.jinair.com/i18n/messages/',
				mode	: 'map',
				language: 'ko_KR',
				langCd	: 'KOR'
			});
			
			$('#pw').focus();
		});
		
		function checkPassword(){
			if ($("#pw").val() == '') {
				alertLayer($.i18n.prop('hom.mem.validate.023'));
				
				return false;
			}
			removeTrim($("#pwForm"));
			$.ajax({
				type	: "POST",
				url		: "<%= request.getContextPath() %>/project/member/passwordCheck.do",
				data	: {pw : $("#pw").val()},
				dataType: "json",
				beforeSend: function(xhr) {
					console.log("beforeSend!");
					var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
					var	csrfToken	= $('meta[name="_csrf"]').attr('content');
					xhr.setRequestHeader(csrfHeader, csrfToken);
				},
				success	: function(data) {
					if ( data.success == 'true' ) {
						//회원정보수정 페이지 or 탈퇴페이지로 이동함.
						if (moveCode == '002') {
							parent.location.href="<%= request.getContextPath() %>/project/member/popup/withdrawal.jsp";
							hidePopupLayer();
						} else {
							parent.location.href="<%= request.getContextPath() %>/project/mypage/memberinfo.do";
							hidePopupLayer();
						}
					} else {
						alertLayer($.i18n.prop('hom.mem.validate.024'), '', '$("#password").focus');
					}
				},
				error	: function(data) {
					alertLayer($.i18n.prop("cmm.msg.alert.error"));
				}
			});
		}
		
		$("form").submit(function(event) {
			event.preventDefault();
			checkPassword();
		})
		/*엔터입력시 submit*/
		/* 
		function enterCheck() {
			var evt_code = (window.netscape) ? event.which : event.keyCode;
			if (evt_code == 13) {
				event.keyCode = 0;
				checkPassword();
			}
		}
		 */
		//whitespace 제거(공백, 탭, 줄바꿈 문자 등)
		function removeTrim(obj){
			$(obj).find('input').each(function(){
				$(this).val($(this).val().replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/\t/g, '').replace(/\r/g, '').replace(/\n/g, ''));
				if($(this).attr('name') != null && $(this).attr('name') != 'undefined'){
					if($(this).attr('name').indexOf('url') > -1 || $(this).attr('name').indexOf('Url') > -1 || $(this).attr('name').indexOf('URL') > -1){
						$(this).val($(this).val().replace(/\s/g, ''));
					}
				}
			});
		}
</script>

</body>
</html>