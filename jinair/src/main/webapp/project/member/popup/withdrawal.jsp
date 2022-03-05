<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<title>회원 탈퇴 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />
		
<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?v=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011110"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022011110" />
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022011110" />
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_=2022011110"/><!-- 신규 나이포인트 관련 css 추가 -->
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011110" media="all and (max-width:1024px)" />
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011110" media="all and (max-width:640px)" />


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
	csrfToken: 'eefe79dd-0966-449b-ba40-11283882224f',
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

<script type="text/javascript"src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022011110"></script>
<script type="text/javascript"src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2022011110"></script>


<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=d9197558-b8f2-4990-bc62-b3940ae11ac7"></script>
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022011110"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022011110"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022011110" async></script>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="_csrf" content="d9197558-b8f2-4990-bc62-b3940ae11ac7"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
	
</head>
<body>
<script type="text/javascript">
	_dl = AAnalytics.dl();
</script>

		
<div id="wrapper">
<%@ include file="/header.jsp" %>

<div id="container">
		<!-- 내용영역 -->
	<h1 class="desc">회원 탈퇴</h1>
	<div class="secedeArea">
		<p class="head"><strong>진에어 회원 탈퇴를 원하십니까?</strong><br>그 동안 진에어를 이용해주셔서 정말 감사합니다.</p>
		<div class="content">
				  
        <h2>1. 회원탈퇴 전, 유의사항을 확인해 주시기 바랍니다.</h2>
              <ul class="caution">
                  <li>
                      회원 탈퇴 완료 시, 고객님의 개인정보는 진에어
                      &nbsp;<a href="javascript://" onclick="window.open('/member/indvInfoUsePolicy');" class="fontTypeA line">
                      홈페이지 이용약관</a>
                      및
                      &nbsp;<a href="javascript://" onclick="window.open('/member/hompageUseTerm');" class="fontTypeA line">
                      개인정보처리방침</a>
                      에 따라 관리 됩니다.
                  </li>
                  <li>
                      회원 탈퇴 이전에 '마이페이지' 내의 '
                      <a href="javascript://" onclick="window.open('/nabipoint/pointList');" class="fontTypeA line">
                      나의 나비포인트</a>&nbsp;/&nbsp;
                      <a href="javascript://" onclick="window.open('/myCoupon/jiniCouponList');" class="fontTypeA line">나의 할인쿠폰</a>
                      ' 메뉴에서 보유하신 포인트 및 쿠폰을 다시 한번 확인하시기 바랍니다.<br>회원 탈퇴가 완료되면, 보유하셨던 포인트 및 쿠폰은 모두 소멸되며, 재가입시에도 복원되지 않습니다.
                  </li>
                        
			  	<li>회원 탈퇴 후에는 홈페이지 상에서 구매 내역 조회나 영수증 발급 등을 손쉽게 할 수 있는 '마이페이지' 서비스를 이용하실 수 없습니다.</li>
				<li>항공편 구매 시에 회원을 위한 포인트 쿠폰을 받으실 수 없으며, 여행상품 및 각종 소식/이벤트에 관한 E-MAIL 을 받으실 수 없습니다.</li>
				<li>탈퇴 후 재가입을 하셔도 이전의 예매내역을 조회하실 수 없습니다. 만약, 이전의 예매내역을 원하시면 별도로 1:1 고객 문의를 통해 신청하셔야 합니다.</li>
	  
            </ul>
            <h2>2. 회원탈퇴 후 재가입 규정</h2>
            <p class="caution">탈퇴 후에도 진에어 회원으로 재가입할 수 있으나, 탈퇴일로부터 14일 동안은 재가입 불가하며 동일 ID 사용이 제한되오니 탈퇴하시기 전에 신중히 고려해 주시기 바랍니다.</p>			    
					
		</div>
				
				
		<p class="chk">
			<input type="checkbox" id="agreeYn">
			<label for="agreeYn">상기 회원탈퇴 시 처리사항 안내를 확인하였음에 동의합니다.</label>
		</p>
	</div>
	<div class="btnArea">
		<span><a href="javascript://" id="btnAgree" class="btnTypeA sizeL" data-click-area="회원정보수정" data-click-name="회원탈퇴 확인">회원 탈퇴</a></span>
		<span><a href="javascript://" onclick="history.back(); return false;" class="btnTypeB sizeL">취소</a></span>
	</div>
<!-- //내용영역 -->
</div><!-- //container -->

		<script type="text/javascript">
		$(document).ready(function() {
			/*다국어처리*/
			$.i18n.properties({
				name	: ['messages', 'individualMember'],
				path	: 'https://www.jinair.com/i18n/messages/',
				mode	: 'map',
				language: 'ko_KR',
			    langCd	: 'KOR'
			});

			$("#btnAgree").click(function(){
				if (!$("#agreeYn").is(":checked")) {
					alertLayer("회원탈퇴시 처리사항 안내 확인을 체크해 주세요.");

					return true;
				}

				<%-- $(this).attr("href","<%= contextPath %>/project/member/withdrawal.do"); --%>
				
				$.ajax({
					type	: "POST",
					url		: "<%= contextPath %>/project/member/withdrawal.do",
					dataType: "json",
					beforeSend: function(xhr) {
						var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
						var	csrfToken	= $('meta[name="_csrf"]').attr('content');
						xhr.setRequestHeader(csrfHeader, csrfToken);
					},
					success	: function(data) {
						if (data.success == 'true') {
							_satellite.track('membership_withdraw');
							alertLayer($.i18n.prop("hom.mem.validate.029"), '', 'goMain');
						} else if (data == 'false') {
							alertLayer($.i18n.prop("hom.mem.validate.048")); //일시적인 문제로 탈퇴할 수 없습니다.
						} else {
							alertLayer($.i18n.prop("cmm.msg.alert.error"));
						}
					},
					error	: function(data) {
						alertLayer($.i18n.prop("cmm.msg.alert.error"));
					}
				}); 
			});

			return true;
		});
		function goMain() {
			location.href = "<%= contextPath %>/project/login/logout.jsp";
		}
		</script>
	

<%@ include file="/footer.jsp" %>
</div>

</body>
</html>