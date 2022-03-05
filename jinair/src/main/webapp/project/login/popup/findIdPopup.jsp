<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>

<title>findIdPwPopup</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> 

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/popup.css?_=2022011009"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011009" media="all and (max-width:1024px)">
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011009" media="all and (max-width:640px)">

<script type="text/javascript">
//document.domain			= 'jinair.com';
var	globalImageServer	= 'images.jinair.com';
var	globalLoginYn		= ('Y' == '') ? 'Y' : 'N';

var __global__ = __global__ || {};
__global__ = {
	
	imageServer: 'images.jinair.com',
	loginYn: 'N',
	accessChannel: '',
	csrfHeader: 'X-CSRF-TOKEN',
	csrfToken: 'f071171c-82d2-4df2-8d1f-c30a0602ec42',
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
		n$apm: '15474568520024|SS!2953@246:1641784870014'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<script type="text/javascript"src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022011009"></script>
<script type="text/javascript"src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022011009"></script>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022011009"></script>
<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=86d26e45-59f3-4a0a-8970-1806fb5517fb"></script> -->
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022011009"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022011009" async></script>

<meta name="_csrf" content="86d26e45-59f3-4a0a-8970-1806fb5517fb"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.custom.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022011009"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022011009"></script>
<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/certification/formLayer.js?_=2022011009"></script> -->

</head>

<body class="popup">
<script type="text/javascript">
//_dl = AAnalytics.dl();
_dl = parent._dl;
</script>

<div id="popWrap">
	<h1>이메일 인증</h1>

	<div id="popCont">
		<form name="form" id="form">
			<input type="hidden" name="type" value="EMAIL">
			<input type="hidden" name="from" value="FIND_ID">

			<ul class="caution">
		    	<li>회원가입 시 기재한 이름/생년월일/이메일 정보를 입력해 주세요.</li>
				<li>회원가입 여부 확인 시 마스킹 처리된 아이디를 확인하실 수 있습니다.</li>
		    </ul>

			<table class="fieldForm">
				<caption>이메일 인증 회원정보 입력폼</caption>
				<colgroup>
					<col width="25%">
					<col width="">
				</colgroup>
				<tr>
					<th scope="row">이름</th>
					<td>
						<p class="nameField">
							<input type="text" name="mbrLnm" id="mbrLnm" placeholder="예) 홍" title="성" style="text-transform:uppercase;" maxlength="15">
							<input type="text" name="mbrFnm" id="mbrFnm" placeholder="예) 길동" title="이름" style="text-transform:uppercase;" maxlength="30">
						</p>
					</td>
				</tr>
				<tr>
					<th scope="row">생년월일</th>
					<td><input type="text" name="bthDt" id="bthDt" placeholder="예)19820626" title="생년월일"></td>
				</tr>
				<tr>
					<th scope="row">이메일 또는 연락처</th>
					<td><input type="text" name="contact" id="contact" placeholder="예)abcde@gmail.com" title="이메일"></td>
				</tr>
			</table>

			<div class="btnArea">
				<span><a href="javascript://" role="btn-member-find-id" class="btnTypeA">확인</a></span>
					<span><a href="#" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a></span>
			</div>
		</form>
	</div>
</div>

<script>
	$('[role="btn-member-find-id"]').click(function() {
		
		if( $("#mbrLnm").val() == "예) 홍" ){ 
			alertLayer("[성] 을(를) 입력해 주세요.");
		} else if($("#mbrFnm").val() == "예) 길동" ){
			alertLayer("[이름] 을(를) 입력해 주세요.");
		} else if( $("#bthDt").val() == "예)19820626" ){
			alertLayer("[생년월일] 을(를) 입력해 주세요.");
		} else if( !isBirthday(  $("#bthDt").val()) ){
			alertLayer("생일 형식이 유효하지 않습니다.");
		} else if($("#contact").val() == "예)abcde@gmail.com" ){
			alertLayer("[이메일] 을(를) 입력해 주세요.");
		} else{
			$("#form").attr("action","<%= request.getContextPath() %>/project/login/findid.do");
			$("#form").attr("target","_parent");
			$("#form").submit();
		}
	});
</script> 

<script>

// 생년월일 유효성 검사 
function isBirthday(dateStr) { 
	
	if (dateStr.length == 8) { // 연도의 경우 1900 보다 작거나 yearNow 보다 크다면 false를 반환합니다. 
		
		var year = Number(dateStr.substr(0,4)); // 입력한 값의 0~4자리까지 (연) 
		var month = Number(dateStr.substr(4,2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월) 
		var day = Number(dateStr.substr(6,2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일) 
		var today = new Date(); // 날짜 변수 선언 
		var yearNow = today.getFullYear(); // 올해 연도 가져옴 
		
		if (1900 > year || year > yearNow){ 
			return false; 
		} else if (month < 1 || month > 12) { 
			return false; 
		} else if (day < 1 || day > 31) { 
			return false; 
		} else if ((month==4 || month==6 || month==9 || month==11) && day==31) { 
			return false; 
		} else if (month == 2) { 
			var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)); 
			if (day>29 || (day==29 && !isleap)) { 
				return false; 
			} else { 
				return true; 
			} //end of if (day>29 || (day==29 && !isleap)) 
		} else { 
			return true; 
		}//end of if 
	} else { //1.입력된 생년월일이 8자 초과할때 : auth:false 
		return false; 
	} 
}


</script>

<script type="text/javascript">
setPopup('113');
$(document).ready(function() {
	$.i18n.properties({
		name: ['messages', 'individualMember', 'flight', 'qna', 'checkin'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			__page__.initialize();
		}
	});
});
</script>

	<script type="text/javascript"  src="/4e3SfGbkL/zNf1_Bn/Mg/OrOSkwDJGiS3/ekt7IT0/aRVrH09/BdE8"></script></body>
</html>