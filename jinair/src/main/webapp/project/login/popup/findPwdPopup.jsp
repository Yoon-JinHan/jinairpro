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
	csrfToken: 'b5b0c370-a419-4861-a179-18841af1a2e8',
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
		n$apm: '15518424830024|SS!5374@208:1641793145012'
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
	<h1>????????? ??????</h1>

	<div id="popCont">
		<form name="form" id="form">
			<input type="hidden" name="type" value="EMAIL">
			<input type="hidden" name="from" value="FIND_PW">

				<ul class="caution">
				   	<li>???????????? ??? ????????? ??????/????????????/????????? ??? ????????? ????????? ????????? ?????????.</li>
					<li>????????? ???????????? ?????? ??????????????? ????????? ????????????.</li>
				</ul>

				<table class="fieldForm">
					<caption>????????? ?????? ???????????? ?????????</caption>
					<colgroup>
						<col width="25%">
						<col width="">
					</colgroup>
					<tr>
						<th scope="row">?????????</th>
						<td><input type="text" name="id" id="id" title="?????????" maxlength="20" style="text-transform:uppercase;"></td>
					</tr>
					<tr>
						<th scope="row">??????</th>
						<td>
							<p class="nameField">
								<input type="text" name="mbrLnm" id="mbrLnm" placeholder="???) ???" title="???" style="text-transform:uppercase;" maxlength="15">
								<input type="text" name="mbrFnm" id="mbrFnm" placeholder="???) ??????" title="??????" style="text-transform:uppercase;" maxlength="30">
							</p>
						</td>
					</tr>
					<tr>
						<th scope="row">????????????</th>
						<td><input type="text" name="bthDt" id="bthDt" placeholder="???)19820626" title="????????????"></td>
					</tr>
					<tr>
						<th scope="row">????????? ?????? ?????????</th>
						<td><input type="text" name="contact" id="contact" placeholder="???)abcde@gmail.com" title="?????????"></td>
					</tr>
				</table>

				<div class="btnArea">
					<span><a href="javascript://" role="btn-member-find-pw" class="btnTypeA">??????</a></span>
					<span><a href="#" onclick="hidePopupLayer(); return false" class="btnTypeB">??????</a></span>
				</div>

		</form>
	</div>
</div>		

<script>
	$('[role="btn-member-find-pw"]').click(function() {
		if( $("#id").val() == "" ){
			alertLayer("[?????????] ???(???) ????????? ?????????.");
		} else if( $("#mbrLnm").val() == "???) ???" ){ 
			alertLayer("[???] ???(???) ????????? ?????????.");
		} else if($("#mbrFnm").val() == "???) ??????" ){
			alertLayer("[??????] ???(???) ????????? ?????????.");
		} else if( $("#bthDt").val() == "???)19820626" ){
			alertLayer("[????????????] ???(???) ????????? ?????????.");
		} else if( !isBirthday(  $("#bthDt").val()) ){
			alertLayer("?????? ????????? ???????????? ????????????.");
		} else if($("#contact").val() == "???)abcde@gmail.com" ){
			alertLayer("[?????????] ???(???) ????????? ?????????.");
		} else{
			$("#form").attr("action","<%= request.getContextPath() %>/project/login/findpwd.do");
			$("#form").attr("target","_parent");
			$("#form").submit();
		}
	});
</script> 

<script>

// ???????????? ????????? ?????? 
function isBirthday(dateStr) { 
	
	if (dateStr.length == 8) { // ????????? ?????? 1900 ?????? ????????? yearNow ?????? ????????? false??? ???????????????. 
		
		var year = Number(dateStr.substr(0,4)); // ????????? ?????? 0~4???????????? (???) 
		var month = Number(dateStr.substr(4,2)); // ????????? ?????? 4?????? ???????????? 2?????? ?????? (???) 
		var day = Number(dateStr.substr(6,2)); // ????????? ??? 6?????? ???????????? 2?????? ?????? (???) 
		var today = new Date(); // ?????? ?????? ?????? 
		var yearNow = today.getFullYear(); // ?????? ?????? ????????? 
		
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
	} else { //1.????????? ??????????????? 8??? ???????????? : auth:false 
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