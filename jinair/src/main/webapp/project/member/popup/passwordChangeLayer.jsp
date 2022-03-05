<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html lang="ko">
<head>
<title>비밀번호 변경</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011409">
<link rel="stylesheet" href="//images.jinair.com/css/popup.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011409" media="all and (max-width:1024px)">
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011409" media="all and (max-width:640px)">

	
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
		csrfToken: 'ce316885-619c-4ecf-a9b4-0b72ea44cd2f',
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

<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15518424830024|SS!21594@206:1641633162401'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>


<script type="text/javascript"src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022010710"></script>
<script type="text/javascript"src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022010710"></script>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022010710"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022010710"></script>
<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=ce316885-619c-4ecf-a9b4-0b72ea44cd2f"></script> -->
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010710"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010710" async></script>

<meta name="_csrf" content="ce316885-619c-4ecf-a9b4-0b72ea44cd2f"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.custom.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/member/member.js"></script> -->

</head>

<body class="popup">

<script type="text/javascript">
//_dl = AAnalytics.dl();
_dl = parent._dl;
</script>
	
<div id="popWrap">
	<h1>비밀번호 변경</h1>

	<div id="popCont">
		<div class="pwdArea pwdModify">
			<form id="pwForm" name="pwForm" method="post" autocomplete="off" action="<%= request.getContextPath() %>/project/member/passwordchange.do">
				<input type="hidden" name="_csrf" id="_csrf" value="ce316885-619c-4ecf-a9b4-0b72ea44cd2f" />
				<p class="text">회원님의 개인정보를 안전하게 보호하기 위해  비밀번호를 암호화하여 저장, 관리하고 있습니다. 새로운 비밀번호로 변경해 주세요.</p>
				<table class="fieldForm">
					<caption>비밀번호 변경</caption>
					<colgroup>
						<col width="25%"><col width="">
					</colgroup>
					<tr>
						<th><label for="oldPassword">기존 비밀번호</label></th>
						<td><input type="password" name="pw" id="oldPw" maxlength="150" autocomplete="off"></td>
					</tr>
					<tr>
						<th><label for="pw">신규 비밀번호<p id="pwTest"></p></label></th>
						<td><input type="password" name="pw" id="pw" maxlength="20" autocomplete="off"></td>
					</tr>
					<tr>
						<th><label for="pwCheck">신규 비밀번호 확인</label></th>
						<td><input type="password" name="pwCheck" id="pwCheck" maxlength="20" onkeydown="enterCheck();" autocomplete="off"></td>
					</tr>
				</table>
				<input type="hidden" name="m_id" value="${ userDTO.m_id }" />
			</form>
		</div>

		<table class="fieldForm">
			<tr>
				<td>
					<p class="text">영어/숫자/특수문자 중 2가지 이상 조합하여 최소 10자리 이상 20자리 이하, 3가지 이상을 조합할 경우에는 최소 8자리 이상 20자리 이하로 구성</p>
					<p class="text">PW내 동일 또는 연속의 숫자 또는 키보드 상의 연속한 위치의 문자열 4자리 이상 포함 금지</p>
					<p class="text">ID 중 연속되는 숫자 또는 문자는 6자리 이상 PW로 사용 금지</p>
					<p class="text">개인 신상 정보와 4자리 이상 중복 (생년월일,전화번호,핸드폰번호) 금지 </p>
				</td>
			</tr>
		</table>

		<div class="btnArea">
			<span><a href="javascript://" role="btn-save" class="btnTypeA">확인</a></span>
			<span><a href="javascript://" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a></span>
		</div>
	</div>
</div>

<script type="text/javascript">
$(document).ready(function() {
	setPopup('113');

	/*다국어처리*/
	
	$.i18n.properties({
		name: ['messages', 'individualMember', 'benefit'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR'
	});
 
	$("#oldPw").focus();

	$('[role="btn-save"]').on('click', function() {
		if(!$("#pwForm").valid()) {
			return;
		}
		
		removeTrim($('#pwForm'));
		
		if( $("#oldPw").val() == ''  ) alertLayer("[기존 비밀번호] 을(를) 입력해 주세요.");
		else if( $("#pw").val() == '' ) alertLayer("[신규 비밀번호] 을(를) 입력해 주세요.");
		else if( $("#pwCheck").val() == '' ) alertLayer("[신규 비밀번호 확인] 을(를) 입력해 주세요.");
		else if( $("#pw").val() != $("#pwCheck").val() ) alertLayer("비밀번호와 비밀번호 확인란에 입력된 내용이 서로 일치하지 않습니다.");
		else if( checkPasswordValid($("#pw").val()) == 'false') alertLayer("비밀번호는 영문(대소문자 구별)/숫자/특수문자 중 2가지 이상 조합으로 8 ~ 20자리이어야 합니다.");
		else {
			$.ajax({
				type: 'post',
				url: '<%= request.getContextPath() %>/project/member/passwordchange.do',
				data: {
					oldPw: $("#oldPw").val(),
					pw: $("#pw").val()
				},
				beforeSend: function(xhr) {
					xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
				},
				dataType: 'json'
			}).done(function(data) {
				
				if ( data.pwdError == 'true' ) {
					alertLayer('기존 비밀번호를 확인해 주세요.');
				} else if ( $("#oldPw").val() == $("#pw").val()) {
					alertLayer('기존 비밀번호와 동일한 비밀번호는 사용할 수 없습니다.', '', '$("#pw").focus');
				} else if ( data.success == 'true') {
					if ('pwChange' == '') {
						top.location.href	= '/';
					} else {
						alertLayer('비밀번호가 정상적으로 수정되었습니다.', '', 'hidePopupLayer');
					}
				}
				 
			}).fail(function(data) {
				alertLayer($.i18n.prop("cmm.msg.alert.error"));
			});
		}

	});
});

/*엔터입력시 submit*/
function enterCheck() {
	var keycode = !!window.netscape ? event.which : event.keyCode;
	if(keycode === 13) {
		event.keyCode = 0;
		$('[role="btn-save"]').trigger('click');
	}
}

/*비밀번호 valid & 안전도 검사표시*/
function checkPasswordValid( pw ) {
	
		var pwdCheck1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,20}$/
		var pwdCheck2 = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{10,20}$/
		var pwdCheck3 = /^(?=.*\d)(?=.*[@$!%*#?&])[\d$@$!%*#?&]{10,20}$/
		var pwdCheck4 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
		
		var btnDt = parent.document.getElementById("bthDt").value;
		var birthDate = btnDt.substr(4,4);
		var mblFonNo = parent.document.getElementById("mblFonNo").value;
		var mobileLastNo = mblFonNo.substr( mblFonNo.length - 4, 4 );
		var id = '${ userDTO.m_id }';
		
		if( checkPwForm( pw ) || pw.indexOf( birthDate ) >= 0 || pw.indexOf( mobileLastNo ) >= 0 || pw.indexOf( id ) >= 0 )
			return 'false';
		else {
			if( pwdCheck4.test( pw ))
				return 'true';
			else if( pwdCheck1.test( pw ) || pwdCheck2.test( pw ) || pwdCheck3.test( pw ))
				return 'true';
		}	
		return 'false';
		
}

function checkPwForm(str){

	var max = 4; // 3자리 이상 검사		
	var i, j, k, x, y;		
	var buff = ["0123456789","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","qwertyuiopasdfghjklzxcvbnm","QWERTYUIOPASDFGHJKLZXCVBNM"];		
	var scr, src2, ptn = "";

	for(i = 0; i < buff.length; i++){		
		src = buff[i];
		src2 = buff[i] + buff[i];

		for(j = 0; j < src.length; j++){
			x = src.substr(j, 1);	
			y = src2.substr(j, max);				
			ptn += "["+x+"]{"+max+",}|";				
			ptn += y+"|";
		}

	}
	
	ptn = new RegExp(ptn.replace(/.$/, ""));

	if(ptn.test(str)) return true;
	
	return false;

}

//whitespace 제거(공백, 탭, 줄바꿈 문자 등)
function removeTrim(obj) {
	$(obj).find('input').each(function() {
		$(this).val($(this).val().replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/\t/g, '').replace(/\r/g, '').replace(/\n/g, ''));
		if($(this).attr('name') != null && $(this).attr('name') != 'undefined'){
			if($(this).attr('name').indexOf('url') > -1 || $(this).attr('name').indexOf('Url') > -1 || $(this).attr('name').indexOf('URL') > -1){
				$(this).val($(this).val().replace(/\s/g, ''));
			}
		}
	});
}
</script>

		
		

</html>