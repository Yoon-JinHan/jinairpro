<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
<head>		
<title>아이디 중복 검사</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/popup.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011110" media="all and (max-width:1024px)">
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011110" media="all and (max-width:640px)">

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

	
	check_isiFrame = true;
</script>

<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','http://www.jinair.com/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!2081@187:1641869568201'
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

<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=22c391c5-c7b5-4f1b-9ebc-34ad30732a67"></script> -->
<script type="text/javascript" src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2021122914"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2021122914" async></script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		

<meta name="_csrf" content="d9197558-b8f2-4990-bc62-b3940ae11ac7"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
	

</head>

<body class="popup">
	<script type="text/javascript">
//_dl = AAnalytics.dl();
_dl = parent._dl;
</script>

		
<div id="popWrap">
	<h1>아이디 중복 검사</h1>
	<div id="popCont">
		<form method="post">
			<input type="hidden" name="_csrf" value="68a87d6f-900b-4dad-9566-a519b21f3022" action="" />
			<div class="zipcodeArea">
				<fieldset>
					<input type="text" id="chekedId" name="checkedId" style="text-transform:uppercase;" maxlength="20" onkeydown="enterCheck();"/>
					<a id="btnDupCheckPopup" class="btnTypeA"  >중복확인</a>
					<p id="resultArea" class="txt">
							
					</p>
				</fieldset>
			</div>
		</form>
		<div id="btnIdUseArea" class="btnArea" >
			<span><a href="javasacript://" id="bthIdUse" class="btnTypeA sizeL">아이디 사용</a></span>
		</div>
	</div><!-- //popCont -->
</div><!-- //popWrap -->

<script>
	function isDupCheck(){
		var id = $("#chekedId").val().trim();
		if (id == null || id == '') {
			alertLayer($.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.result.text.004')));
			$("#chekedId").focus();
			
			return false;
		}
		if( !/^[a-zA-Z]+[a-zA-Z0-9]{5,19}$/g.test(id)) {
			alertLayer($.i18n.prop('hom.mem.validate.006'));
			$("#chekedId").focus();
			
			return false;
		}
		$.ajax({
			type	: "POST",
			url		: "<%= request.getContextPath() %>/project/member/idcheck.do",
			data	: {checkedId : id},
			dataType: "json",
			cache : false,
			beforeSend: function(xhr) {
				var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
				var	csrfToken	= $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			success	: function(data) {
				if ( data.idCheck == 'false') {
					dupCheckYn = true;
					$("#resultArea").html($.i18n.prop('hom.mem.validate.008'));
					$("#btnIdUseArea").css("display", "");
					setPopup('113');
				} else if ( data.idCheck == 'true') {
					$("#resultArea").html($.i18n.prop('hom.mem.validate.009'));
					$("#btnIdUseArea").css("display", "none");
					setPopup('113');
				} else {
					alertLayer($.i18n.prop("cmm.msg.alert.error"));
				}
			},
			error	: function(data) {
				alertLayer($.i18n.prop("cmm.msg.alert.error"));
			}
		}); // ajax
	}

</script>


<script type="text/javascript">

var dupCheckYn = '${ param.resultCode }' == '001' ? true : false;

$(document).ready(function(){
	
	$("#chekedId").val( '${ param.id }' );
	isDupCheck();
	
	$("#chekedId").focus();
	
	setPopup('113');
	
	/*파이어폭스용 엔터이벤트*/
	var agent = navigator.userAgent.toLowerCase();
	if (agent != null) {
		if (-1 != agent.indexOf("firefox")) {
			$("#chekedId").bind("keypress", function (event) {
				var keyCode = event.which || event.keyCode;
				if (keyCode === 13) {
					event.keyCode = 0;
					$("#btnDupCheckPopup").trigger('click');
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
	
	/*아이디 필드 변화시 중복검사결과 리셋*/
	$("#chekedId").change(function(){
		dupCheckYn = false;
	});
	
	/*팝업 내 중복확인*/
	$("#btnDupCheckPopup").click(function(event) {
		isDupCheck();
	}); // btnDupCheck()
	
	/*아이디 사용시 부모창 함수 호출*/
	$("#bthIdUse").click(function(){
		if (!dupCheckYn) {
			alertLayer($.i18n.prop('hom.mem.validate.010'));
			
			return false;
		}
		parent.setDupChekedId($("#chekedId").val());
		hidePopupLayer();
	});
});

/*엔터입력시 submit*/
function enterCheck() {
	var evt_code = (window.netscape) ? event.which : event.keyCode;
	if (evt_code == 13) {
		event.keyCode = 0;
		$("#bthIdUse").trigger('click');
	}
}
</script>

</html>