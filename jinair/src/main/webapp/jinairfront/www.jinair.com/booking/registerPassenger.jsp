<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang='ko' default='ko'>
<head>
	
    <title>탑승객 정보 | Fly, better fly_Jin Air</title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="_csrf" content="71a56a38-0a41-49e8-8d47-918e891aeca0" />
    <meta name="_csrf_header" content="X-CSRF-TOKEN" />

    <link rel="stylesheet" href="//images.jinair.com/css/default.css"/>
    <link rel="stylesheet" href="//images.jinair.com/css/common.css"/>

    
        
            
            
                <link rel="stylesheet" href="//images.jinair.com/css/font.css"/>
            
        
    
    <link rel="stylesheet" href="//images.jinair.com/css/layout.css"/>
    <link rel="stylesheet" href="//images.jinair.com/css/booking.css"/>

    <link rel="stylesheet" href="//images.jinair.com/css/tablet.css" media="all and (max-width:1024px)"/>
    <link rel="stylesheet" href="//images.jinair.com/css/mobile.css" media="all and (max-width:640px)"/>

    

    

    <script type="text/javascript">
		document.domain			= 'localhost';

		
		var	globalImageServer	= 'images.jinair.com';
		var	globalLoginYn		= ('Y' == 'Y') ? 'Y' : 'N';
		var __homepage__ = {
			accessChannel: ''
		};
		

		var __global__ = __global__ || {};
		__global__ = {
			
			imageServer: 'images.jinair.com',
			loginYn: 'Y',
			accessChannel: '',
			csrfHeader: 'X-CSRF-TOKEN',
			csrfToken: '71a56a38-0a41-49e8-8d47-918e891aeca0',
			isMobile: false,
			isApp: false,
			isLoggedIn: true,
			login: {
				isLoggedIn: true,
				type: 'normal'
			},
			user: {
                number: 'GPR1516254',
				gender: 'M',
				age: '26',
				nationality: 'KOR',
                level: ''
			}
		};
    </script>

    


<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','../js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15518438820064|SS!15162@185:1641833278519'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>


    <script type="text/javascript" src="../js/hom/pub/front/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.cycle.all.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.mousewheel.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/swiper.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/iscroll.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-efuSlider.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ieSlide.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.plugin.js"></script>

    <script type="text/javascript" src="../js/hom/lib/front/netfunnel.js"></script>
    <script type="text/javascript" src="../js/hom/lib/front/NetFunnel_Skin.js"></script>

    <script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js"></script>
    <script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=71a56a38-0a41-49e8-8d47-918e891aeca0"></script>
    <script type="text/javascript" src="../js/hom/lj/front/booking/common.js?_=71a56a38-0a41-49e8-8d47-918e891aeca0"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/common.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/common.pages.js"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/chatbot.js"></script>

    <script src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js" async></script>

    <script type="text/javascript">

		
		
		$.ajax({
			type : "POST",
			url : "../common/getRoundingCurrencyYN.json",
			dataType: "text",
			async: false,
			contentType	: "application/json; charset=UTF-8",
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");

				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			success : function(data) {
				if (data == 'true') {
					roundingCurrencyYN = true;
				}
			},
			error : function(data) {
			}
		});
		var loginInfoType = "LOGOUT";
		
		
		loginInfoType = "MEMBER";
		
		
		
		
		

    </script>
    <!--[if IE 9]>
    <link rel="stylesheet" href="//images.jinair.com/css/content.ie9.css"/>
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="//images.jinair.com/css/content.ie8.css"/>
    <script type="text/javascript" src="../js/hom/pub/front/respond.min.js"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.ie8.js"></script>
    <![endif]-->
    
		
		<meta name="_csrf" content="71a56a38-0a41-49e8-8d47-918e891aeca0"/>
		<meta name="_csrf_header" content="X-CSRF-TOKEN"/>
		
		<script type="text/javascript" src="../js/hom/lib/front/jsrender.min.js"></script>
		<script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js"></script>
		<script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js"></script>
		<script type="text/javascript" src="../js/hom/lj/front/booking/dontGoBack.js"></script>
	
</head>

<body>
<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>

<div id="wrapper" style="display:visible">
        
        






<div id="skipNav">
	<a href="#container">본문 바로가기</a>
	<a href="#gnb">메뉴 바로가기</a>
</div>





<div id="header" class="">
	
	<div class="topArea">

		
		<div class="logo"><a href="index.jsp" data-click-area="head-Logo" data-click-name="Jinair">JINAIR</a></div>

		
		<div class="global">
			<ul class="util">
				
				<li id="login-button-area" data-title-login="로그인" data-title-logout="로그아웃">
					
						<a href="https://www.jinair.com/login/logout" data-click-area="Gnb" data-click-name="로그아웃">로그아웃</a>
					
					
				</li>

				
					<li>
						<a href="https://www.jinair.com/mypage/getReservationList" data-click-area="Gnb" data-click-name="마이페이지" data-check-permission="true">마이페이지</a>
					</li>
				

				
				<li class="lang">
					<a href="javascript://" role="btn-change-locale">
						한국(한국어)
						/
						KRW
					</a>
				</li>
			</ul>
		</div>

		
		<ul id="gnb">
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="예약">예약</a>
				<div class="sub">
					<ul>
						<li>
							<a href="https://www.jinair.com/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약">항공권 예약</a>
							<ul>
								<li><a href="https://www.jinair.com/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약_예약">예약</a></li>
								
									<li><a href="https://www.jinair.com/promotion/nowMoment" data-click-area="Gnb-예약" data-click-name="항공권예약_최저가항공권">최저가 항공권</a></li>
								
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약" data-check-permission="true">나의 예약</a>
							<ul>
								<li><a href="https://www.jinair.com/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="Gnb-예약" data-click-name="나의예약_예약조회/변경/취소" data-check-permission="true">예약 조회/변경/취소</a></li>
								<li><a href="https://www.jinair.com/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="Gnb-예약" data-click-name="나의예약_부가서비스신청/취소" data-check-permission="true">부가서비스 신청/취소</a></li>
								<li><a href="https://www.jinair.com/checkin/checkinList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="06" data-click-area="Gnb-예약" data-click-name="나의예약_웹/모바일체크인" data-check-permission="true">웹/모바일 체크인</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/ready/flight" data-click-area="Gnb-예약" data-click-name="운항정보">운항 정보</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/flight?directID=flightCont01" data-click-area="Gnb-예약" data-click-name="운항정보_스케줄 조회">스케줄 조회</a></li>
								<li><a href="https://www.jinair.com/ready/flight?directID=flightCont02" data-click-area="Gnb-예약" data-click-name="운항정보_출도착안내">출도착 안내</a></li>
								<li><a href="https://www.jinair.com/ready/flight?directID=flightCont03" data-click-area="Gnb-예약" data-click-name="운항정보_취항노선안내">취항 노선 안내</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/ready/fareRules" data-click-area="Gnb-예약" data-click-name="예약및운임안내">예약 및 운임 안내</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules1" data-click-area="Gnb-예약" data-click-name="예약및운임안내_예매서비스">예매 서비스</a></li>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules3" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국내선운임">국내선 운임</a></li>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules4" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국제선운임">국제선 운임</a></li>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules2" data-click-area="Gnb-예약" data-click-name="예약및운임안내_비즈니스운임">비즈니스 운임</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/ready/discount" data-click-area="Gnb-예약" data-click-name="할인안내">할인안내</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/discount?directID=discountCont01" data-click-area="Gnb-예약" data-click-name="할인안내_가족운임할인제도">가족운임 할인제도</a></li>
								
									<li><a href="https://www.jinair.com/ready/discount?directID=discountCont02" data-click-area="Gnb-예약" data-click-name="할인안내_상용우대프로그램">상용우대 프로그램</a></li>
								
								<li><a href="https://www.jinair.com/ready/discount?directID=discountCont03" data-click-area="Gnb-예약" data-click-name="할인안내_제주도민할인제도">제주도민 할인제도</a></li>
								<li><a href="https://www.jinair.com/ready/discount?directID=discountCont04" data-click-area="Gnb-예약" data-click-name="할인안내_재외/명예도민할인제도">재외/명예도민 할인제도</a></li>
								
									<li><a href="https://www.jinair.com/ready/discount?directID=discountCont05" data-click-area="Gnb-예약" data-click-name="할인안내_군산시민할인제도">군산시민 할인제도</a></li>
								
							</ul>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="서비스">서비스</a>
				<div class="sub">
					<ul>
						<li>
							<a href="https://www.jinair.com/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스">공항 서비스</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스_공항카운터안내">공항카운터 안내</a></li>
								<li><a href="https://www.jinair.com/ready/baggage" data-click-area="Gnb-서비스" data-click-name="공항서비스_수하물">수하물</a></li>
								<li><a href="https://www.jinair.com/ready/help" data-click-area="Gnb-서비스" data-click-name="공항서비스_도움이필요하신고객">도움이 필요하신 고객</a></li>
								<li><a href="https://www.jinair.com/ready/checkin" data-click-area="Gnb-서비스" data-click-name="공항서비스_체크인안내">체크인 안내</a></li>
								
									<li><a href="https://www.jinair.com/ready/arrivalCard" data-click-area="Gnb-서비스" data-click-name="공항서비스_입국신고서작성안내">입국신고서 작성 안내</a></li>
								
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스">기내 서비스</a>
							<ul>
								<li><a href="https://www.jinair.com/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내여행가이드">기내 여행 가이드</a></li>
								<li><a href="https://www.jinair.com/flight/cabinShopping" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내유상판매">기내유상판매</a></li>
								<li><a href="https://www.jinair.com/flight/taxFree" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내면세품">기내 면세품</a></li>
								
									<li><a href="https://www.jinair.com/flight/jiniInsight" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내매거진">기내 매거진</a></li>
								
								
									<li><a href="https://www.jinair.com/flight/eventflight" data-click-area="Gnb-서비스" data-click-name="기내서비스_이벤트플라잇">이벤트 플라잇</a></li>
								
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스">부가 서비스</a>
							<ul>
								<li><a href="https://www.jinair.com/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스_번들서비스">번들 서비스</a></li>
								<li><a href="https://www.jinair.com/flight/seat" data-click-area="Gnb-서비스" data-click-name="부가서비스_사전좌석지정">사전좌석지정</a></li>
								<li><a href="https://www.jinair.com/flight/airlineFood" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내식">기내식</a></li>
								<li><a href="https://www.jinair.com/flight/jiniPlay" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내엔터테인먼트">기내 엔터테인먼트</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="혜택">혜택</a>
				<div class="sub">
					<ul>
						<li>
							<a href="https://www.jinair.com/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션">프로모션</a>
							<ul>
								<li><a href="https://www.jinair.com/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션_이벤트">이벤트</a></li>
								<li><a href="https://www.jinair.com/benefit/jiniCoupon" data-click-area="Gnb-혜택" data-click-name="프로모션_지니쿠폰">지니쿠폰</a></li>
							</ul>
						</li>
						
							<li>
								<a href="https://www.jinair.com/travel/associatedCard" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택">카드 및 환전 혜택</a>
								<ul>
									<li><a href="https://www.jinair.com/travel/associatedCard?directID=partnership1" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_제휴카드">제휴 카드</a></li>
									<li><a href="https://www.jinair.com/travel/associatedCard?directID=partnership2" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_환율우대">환율 우대</a></li>
									<li><a href="https://www.jinair.com/travel/associatedCard?directID=partnership3" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_무이자할부">무이자 할부</a></li>
								</ul>
							</li>
						
						<li>
							<a href="https://www.jinair.com/travel/jinipass" data-click-area="Gnb-혜택" data-click-name="보딩패스 할인">보딩패스 할인</a>
						</li>
						<li>
							<a href="https://www.jinair.com/travel/activity" data-click-area="Gnb-혜택" data-click-name="액티비티">액티비티</a>
							<ul>
								<li><a href="https://www.klook.com/ko/promo/jinairon?aff_adid=100885&aff_af_wid=8227&aid=8227&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=8227&utm_term=&utm_content=" data-click-area="Gnb-혜택" data-click-name="액티비티_클룩">클룩</a></li>
								<li><a href="https://www.yokosojapanpass.com/donki_fuel/public/coupon/index/0010789" data-click-area="Gnb-혜택" data-click-name="액티비티_돈키호테">돈키호테</a></li>
							</ul>
						</li>
						<li>
							<a href="/travel/hotel" data-click-area="Gnb-혜택" data-click-name="호텔">호텔</a>
							<ul>
								<li><a href="https://sp.booking.com/index.ko.html?aid=1486529&amp;lang=ko" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_부킹닷컴">부킹닷컴</a></li>
								<li><a href="https://www.hotelscombined.co.kr/?a_aid=226570&amp;brandid=560805&amp;languageCode=KO&amp;label=main" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_호텔스컴바인">호텔스컴바인</a></li>
								<li><a href="https://kr.trip.com/hotels?locale=ko-KR&amp;allianceid=1307583&amp;sid=4088763" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_트립닷컴">트립닷컴</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/travel/rentcar" data-click-area="Gnb-혜택" data-click-name="차량서비스">차량 서비스</a>
							<ul>
								<li><a href="https://www.skcarrental.com/rent/frame/wps/reservation.do?corpNm=jinAir&corpCd=&result=0000&resultMessage=ok" data-click-area="Gnb-혜택" data-click-name="차량서비스_SK렌터카">SK렌터카</a></li>
								<li><a href="https://www.rentalcars.com/?affiliateCode=jinair&adplat=jinimall&preflang=ko" data-click-area="Gnb-혜택" data-click-name="차량서비스_렌탈카스">렌탈카스</a></li>
								<li><a href="https://jinair.happartners.com/index.php/booking/plantrip" data-click-area="Gnb-혜택" data-click-name="차량서비스_허츠렌터카">허츠렌터카</a></li>
								
									<li><a href="https://tagogayo.co.kr/?ali=jinair15" data-click-area="Gnb-혜택" data-click-name="차량서비스_공항밴">공항 밴</a></li>
								
							</ul>
						</li>
						
							<li>
								<a href="https://www.jinair.com/travel/insurance" data-click-area="Gnb-혜택" data-click-name="여행안심서비스">여행 안심 서비스</a>
								<ul>
									<li><a href="https://www.jinair.com/travel/insurance2" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Chubb해외여행보험">Chubb 해외 여행보험</a></li>
									<li><a href="https://www.jinair.com/travel/insurance3" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Assistcard여행토탈케어">Assistcard 여행토탈케어</a></li>
								</ul>
							</li>
						
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="나비포인트">나비포인트</a>
				<div class="sub">
					<ul>
						<li><a href="https://www.jinair.com/mypage/nabipoint/pointList" data-click-area="Gnb-나비포인트" data-click-name="나의나비포인트">나의 나비포인트</a></li>
						<li><a href="https://www.jinair.com/benefit/point?directID=point01" data-click-area="Gnb-나비포인트" data-click-name="적립안내">적립안내</a></li>
						<li><a href="https://www.jinair.com/benefit/point?directID=point02" data-click-area="Gnb-나비포인트" data-click-name="사용안내">사용안내</a></li>
					</ul>
				</div>
			</li>
			
				<li><a href="https://jinistore.jinair.com/main.do" target="_blank" title="새 창 열림" data-click-area="Gnb" data-click-name="지니스토어">지니스토어</a></li>
			
		</ul>
	</div>

	
	<div class="quick">
		
		<div class="chatbot">
			<p class="btn"><a role="chatbot-parent" data-type="02"><img src="//images.jinair.com/images/btn/btn_jaid_2.png" alt="JAID"></a></p>
		</div>

		
		<div class="control gnb_m_open"><a href="javascript://" data-click-area="Gnb" data-click-name="Menu(mobile)">MENU</a></div>
	</div>

	
	<div class="m_gnb_wrap">
		
		<div class="m_gnb_top">
			
			<div class="lang">
				<a href="javascript://" role="btn-change-locale">
					한국(한국어)
					/
					KRW
				</a>
			</div>

			<ul class="menu">
				
				<li><a href="javascript://" data-click-area="Gnb" data-click-name="Menu(mobile)_회원가입" onclick="top.location.href='/member/joinGate';">회원가입</a></li>

				
				<li class="login" id="login-button-area" data-title-login="로그인" data-title-logout="로그아웃">
					
						<a href="https://www.jinair.com/login/logout" data-click-area="Gnb" data-click-name="Menu(mobile)_로그아웃">로그아웃</a>
					
					
				</li>
			</ul>
		</div>

		
		<ul id="m_gnb">
			<li class="on">
				<a href="javascript://" data-click-area="Gnb" data-click-name="예약">예약</a>
				<div class="sub">
					<ul>
						<li>
							<a href="https://www.jinair.com/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약">항공권 예약</a>
							<ul>
								<li><a href="https://www.jinair.com/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약_예약">예약</a></li>
								
									<li><a href="https://www.jinair.com/promotion/nowMoment" data-click-area="Gnb-예약" data-click-name="항공권예약_최저가항공권">최저가 항공권</a></li>
								
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약">나의 예약</a>
							<ul>
								<li><a href="https://www.jinair.com/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약_예약조회/변경/취소">예약 조회/변경/취소</a></li>
								<li><a href="https://www.jinair.com/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약_부가서비스신청/취소">부가서비스 신청/취소</a></li>
								<li><a href="https://www.jinair.com/checkin/checkinList" data-click-area="Gnb-예약" data-click-name="나의예약_웹/모바일체크인">웹/모바일 체크인</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/ready/flight" data-click-area="Gnb-예약" data-click-name="운항정보">운항 정보</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/flight?directID=flightCont01" data-click-area="Gnb-예약" data-click-name="운항정보_스케줄 조회">스케줄 조회</a></li>
								<li><a href="https://www.jinair.com/ready/flight?directID=flightCont02" data-click-area="Gnb-예약" data-click-name="운항정보_출도착안내">출도착 안내</a></li>
								<li><a href="https://www.jinair.com/ready/flight?directID=flightCont03" data-click-area="Gnb-예약" data-click-name="운항정보_취항노선안내">취항 노선 안내</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/ready/fareRules" data-click-area="Gnb-예약" data-click-name="예약및운임안내">예약 및 운임 안내</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules1" data-click-area="Gnb-예약" data-click-name="예약및운임안내_예매서비스">예매 서비스</a></li>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules3" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국내선운임">국내선 운임</a></li>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules4" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국제선운임">국제선 운임</a></li>
								<li><a href="https://www.jinair.com/ready/fareRules?directID=fareRules2" data-click-area="Gnb-예약" data-click-name="예약및운임안내_비즈니스운임">비즈니스 운임</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/ready/discount" data-click-area="Gnb-예약" data-click-name="할인안내">할인안내</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/discount?directID=discountCont01" data-click-area="Gnb-예약" data-click-name="할인안내_가족운임할인제도">가족운임 할인제도</a></li>
								
									<li><a href="https://www.jinair.com/ready/discount?directID=discountCont02" data-click-area="Gnb-예약" data-click-name="할인안내_상용우대프로그램">상용우대 프로그램</a></li>
								
								<li><a href="https://www.jinair.com/ready/discount?directID=discountCont03" data-click-area="Gnb-예약" data-click-name="할인안내_제주도민할인제도">제주도민 할인제도</a></li>
								<li><a href="https://www.jinair.com/ready/discount?directID=discountCont04" data-click-area="Gnb-예약" data-click-name="할인안내_재외/명예도민할인제도">재외/명예도민 할인제도</a></li>
								
									<li><a href="https://www.jinair.com/ready/discount?directID=discountCont05" data-click-area="Gnb-예약" data-click-name="할인안내_군산시민할인제도">군산시민 할인제도</a></li>
								
							</ul>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="서비스">서비스</a>
				<div class="sub">
					<ul>
						<li>
							<a href="https://www.jinair.com/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스">공항 서비스</a>
							<ul>
								<li><a href="https://www.jinair.com/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스_공항카운터안내">공항카운터 안내</a></li>
								<li><a href="https://www.jinair.com/ready/baggage" data-click-area="Gnb-서비스" data-click-name="공항서비스_수하물">수하물</a></li>
								<li><a href="https://www.jinair.com/ready/help" data-click-area="Gnb-서비스" data-click-name="공항서비스_도움이필요하신고객">도움이 필요하신 고객</a></li>
								<li><a href="https://www.jinair.com/ready/checkin" data-click-area="Gnb-서비스" data-click-name="공항서비스_체크인안내">체크인 안내</a></li>
								
									<li><a href="https://www.jinair.com/ready/arrivalCard" data-click-area="Gnb-서비스" data-click-name="공항서비스_입국신고서작성안내">입국신고서 작성 안내</a></li>
								
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스">기내 서비스</a>
							<ul>
								<li><a href="https://www.jinair.com/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내여행가이드">기내 여행 가이드</a></li>
								<li><a href="https://www.jinair.com/flight/cabinShopping" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내유상판매">기내유상판매</a></li>
								<li><a href="https://www.jinair.com/flight/taxFree" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내면세품">기내 면세품</a></li>
								
									<li><a href="https://www.jinair.com/flight/jiniInsight" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내매거진">기내 매거진</a></li>
								
								
									<li><a href="https://www.jinair.com/flight/eventflight" data-click-area="Gnb-서비스" data-click-name="기내서비스_이벤트플라잇">이벤트 플라잇</a></li>
								
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스">부가 서비스</a>
							<ul>
								<li><a href="https://www.jinair.com/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스_번들서비스">번들 서비스</a></li>
								<li><a href="https://www.jinair.com/flight/seat" data-click-area="Gnb-서비스" data-click-name="부가서비스_사전좌석지정">사전좌석지정</a></li>
								<li><a href="https://www.jinair.com/flight/airlineFood" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내식">기내식</a></li>
								<li><a href="https://www.jinair.com/flight/jiniPlay" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내엔터테인먼트">기내 엔터테인먼트</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="혜택">혜택</a>
				<div class="sub">
					<ul>
						<li>
							<a href="https://www.jinair.com/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션">프로모션</a>
							<ul>
								<li><a href="https://www.jinair.com/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션_이벤트">이벤트</a></li>
								<li><a href="https://www.jinair.com/benefit/jiniCoupon" data-click-area="Gnb-혜택" data-click-name="프로모션_지니쿠폰">지니쿠폰</a></li>
							</ul>
						</li>
						
							<li>
								<a href="https://www.jinair.com/travel/associatedCard" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택">카드 및 환전 혜택</a>
								<ul>
									<li><a href="https://www.jinair.com/travel/associatedCard?directID=partnership1" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_제휴카드">제휴 카드</a></li>
									<li><a href="https://www.jinair.com/travel/associatedCard?directID=partnership2" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_환율우대">환율 우대</a></li>
									<li><a href="https://www.jinair.com/travel/associatedCard?directID=partnership3" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_무이자할부">무이자 할부</a></li>
									<li><a href="https://www.jinair.com/travel/exchangeWallet" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_모바일환전지갑">모바일 환전지갑 서비스</a></li>
								</ul>
							</li>
						
						<li>
							<a href="https://www.jinair.com/travel/jinipass" data-click-area="Gnb-혜택" data-click-name="보딩패스 할인">보딩패스 할인</a>
						</li>
						<li>
							<a href="https://www.jinair.com/travel/activity" data-click-area="Gnb-혜택" data-click-name="액티비티">액티비티</a>
							<ul>
								<li><a href="https://www.klook.com/ko/promo/jinairon?aff_adid=100885&aff_af_wid=8227&aid=8227&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=8227&utm_term=&utm_content=" data-click-area="Gnb-혜택" data-click-name="액티비티_클룩">클룩</a></li>
								<li><a href="https://www.yokosojapanpass.com/donki_fuel/public/coupon/index/0010789" data-click-area="Gnb-혜택" data-click-name="액티비티_돈키호테">돈키호테</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/travel/hotel">호텔</a>
							<ul>
								<li><a href="https://sp.booking.com/index.ko.html?aid=1486529&amp;lang=ko" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_부킹닷컴">부킹닷컴</a></li>
								<li><a href="https://www.hotelscombined.co.kr/?a_aid=226570&amp;brandid=560805&amp;languageCode=KO&amp;label=main" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_호텔스컴바인">호텔스컴바인</a></li>
								<li><a href="https://kr.trip.com/hotels?locale=ko-KR&amp;allianceid=1307583&amp;sid=4088763" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_트립닷컴">트립닷컴</a></li>
							</ul>
						</li>
						<li>
							<a href="https://www.jinair.com/travel/rentcar" data-click-area="Gnb-혜택" data-click-name="차량서비스">차량 서비스</a>
							<ul>
								<li><a href="https://www.skcarrental.com/rent/frame/wps/reservation.do?corpNm=jinAir&corpCd=&result=0000&resultMessage=ok" data-click-area="Gnb-혜택" data-click-name="차량서비스_SK렌터카">SK렌터카</a></li>
								<li><a href="https://www.rentalcars.com/?affiliateCode=jinair&adplat=jinimall&preflang=ko" data-click-area="Gnb-혜택" data-click-name="차량서비스_렌탈카스">렌탈카스</a></li>
								<li><a href="https://jinair.happartners.com/index.php/booking/plantrip" data-click-area="Gnb-혜택" data-click-name="차량서비스_허츠렌터카">허츠렌터카</a></li>
								
									<li><a href="https://tagogayo.co.kr/?ali=jinair15" data-click-area="Gnb-혜택" data-click-name="차량서비스_공항밴">공항 밴</a></li>
								
							</ul>
						</li>
						
							<li>
								<a href="https://www.jinair.com/travel/insurance" data-click-area="Gnb-혜택" data-click-name="여행안심서비스">여행 안심 서비스</a>
								<ul>
									<li><a href="https://www.jinair.com/travel/insurance2" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Chubb해외여행보험">Chubb 해외 여행보험</a></li>
									<li><a href="https://www.jinair.com/travel/insurance3" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Assistcard여행토탈케어">Assistcard 여행토탈케어 </a></li>
								</ul>
							</li>
						
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="나비포인트">나비포인트</a>
				<div class="sub">
					<ul>
						<li><a href="https://www.jinair.com/mypage/nabipoint/pointList" data-click-area="Gnb-나비포인트" data-click-name="나의나비포인트">나의 나비포인트</a></li>
						<li><a href="https://www.jinair.com/benefit/point?directID=point01" data-click-area="Gnb-나비포인트" data-click-name="적립안내">적립안내</a></li>
						<li><a href="https://www.jinair.com/benefit/point?directID=point02" data-click-area="Gnb-나비포인트" data-click-name="사용안내">사용안내</a></li>
					</ul>
				</div>
			</li>
			
				<li><a href="javascript://" onclick="doWebURL('https://jinistore.jinair.com/main.do');" target="_blank" title="새 창 열림" data-click-area="Gnb" data-click-name="지니스토어">지니스토어</a></li>
			
		</ul>
		<div class="gnb_m_close">
			<a href="javascript://">모바일 메뉴 닫기</a>
		</div>
	</div>

	
	<div class="m_gnb_bg"></div>
</div>

<script type="text/javascript">
var __header__ = __header__ || {};

$(document).ready(function() {
	$.i18n.properties({
		name: ['messages', 'ibeBooking'],
		path: '../i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			__header__.initialize();
		}
	});
});

__header__.initialize = function() {
	$(document).on('click', 'a[href="/login/logout"]', function() {
		doLogOut(); // mobile App 연계
		_satellite.track('user_logout');
		return true;
	});

	// band Notice JS
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)) {
		//IE9 이상(swiper js)
		__header__.noticeBarSwiper = new Swiper('.bandNotice .swiper-container', {
			pagination: '.swiper-pagination',
			paginationType: 'fraction',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			loop: true,
			autoplay: 3000
		});
	} else {
		//IE9 이하 (bxSlider js)
		$('.bandNotice .swiper-wrapper').bxSlider({
			minSlides: 1,
			moveSlides: 1,
			slideMargin: 0,
			infiniteLoop: true,
			auto: true,
			autoDelay: 3000
		});
	}
	//play, stop
	$('.bandNotice .swiper-wrapper .swiper-slide').on( 'mouseenter focusin', function() {
		__header__.noticeBarSwiper.stopAutoplay();
	});
	$('.bandNotice .swiper-wrapper .swiper-slide').on( 'mouseleave focusout', function() {
		__header__.noticeBarSwiper.startAutoplay();
	});

	// 알림바 오늘 하루 보지 않기 클릭
	$(document).on('click', '[role="btn-hide-1d-notice"]', function() {
		var checked = $(this).prop('checked');
		if(!checked) {
			return;
		}

		setCookie($(this).val(), 'done', 1);

		removeNoticeBarSlide($(this).data('target-slide'));
	});

	// 알림바 닫기 클릭
	$(document).on('click', '[role="btn-hide-notice"]', function() {
		removeNoticeBarSlide($(this).data('target-slide'));
		if(typeof onNoticeBarChanged === 'function') {
			onNoticeBarChanged();
		}
	});

	// 지역(언어)/통화 표시 영역 클릭
	$('[role="btn-change-locale"]').on('click', function() {
		showPopupLayer('/common/header/localeSelectLayer?from=' + encodeURIComponent(location.href));
	});

	// 앱 내 새창 열기 제어
	$(document).on('click', '[data-need-app-except="true"][target="_blank"]', function() {
		var href = $(this).attr('href');
		if(!href) {
			return false;
		}

		// 앱이 아니면 기존 링크로 이동
		if(!__global__.isApp) {
			return true;
		}

		// 앱일 경우, 앱 인터페이스 실행
		doWebURL(href);
		return false;
	});
}

function removeNoticeBarSlide(slideIndex) {
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)) {
		var index = -1;
		var entry = $('.bandNotice .swiper-wrapper .swiper-slide:not(.swiper-slide-duplicate)');
		for(var i = 0; i < entry.length; i++) {
			if(slideIndex === $(entry[i]).data('slide-index')) {
				index = $(entry[i]).index() - 1;
				break;
			}
		}

		__header__.noticeBarSwiper.removeSlide(index);
		__header__.noticeBarSwiper.startAutoplay();
	} else {
		$('[data-slide-index="' + slideIndex + '"]').remove();
	}

	var remained = $('.bandNotice .swiper-slide').length;
	if(remained === 0) {
		$('.bandNotice').remove();
	}
}
</script>


        
	<script type="text/javascript">
		_dl = null;
		
		_dl = {"channel":"pc","login_status":"Y","login_type":"normal","page_event":{"booking_step3":true,"trip_isModifyBooking":false},"page_name":"Booking^Step3_Passenger","page_url":"/booking/registerPassenger","products":[{"trip_bookingClass":"R-SPDISC|I4-DISC","trip_category":"여정","trip_date":"2022.01.25|2022.01.27","trip_depDay":"화|목","trip_depTime":"14:20|12:30","trip_flightNumber":"LJ317|LJ314","trip_fuelSurcharge":"6600|6600","trip_journeyOrigin":"","trip_passengerDetail":"null-020111-null","trip_passengerInfo":"1-0-0","trip_passengerNum":1,"trip_purchase_channel":"Y","trip_segment":"GMP-CJU|CJU-GMP","trip_tax":"4000|4000","trip_ticketPrice":"14900|22900","trip_type":"RT"}],"site_currency":"KRW","site_language":"KOR","site_name":"Jin Air","site_region":"KOR","today_currency":1,"trip_id":"","user_age":26,"user_gender":"M","user_level":"","user_nationality":"KOR","user_number":"GPR1516254"};
		
		if(!_dl) {
			_dl = AAnalytics.dl();
		}
	</script>
	<div id="container">
		






<div id="quickModify">
	<ul class="srmy">
		<li class="trip"><div class="wrap">
			<div class="multiArea">
				<ul id="basketFullSeg">
				</ul>
				<p class="more transition"><a href="#" onclick="showMulti(); return false">다구간 더보기</a></p>
			</div><!-- //다구간 -->
		</div></li>
		<li class=""><div class="wrap">
			<p class="tit">탑승객수</p>
			<p class="cont"><em></em></p>
		</div></li>
	</ul>
	<p class="btn"><a href="javascript:;" onclick="showItinerary(); return false"><span>수정</span></a></p>
	<div class="modifyLayer" style="display:none">
		<p class="close"><a href="#" onclick="hideItinerary(); return false">닫기</a></p>
		<div class="bookHead">
			<div class="type">
				<ul>
					<li><input type="radio" name="tripType" value="RT" id="type1" checked><label for="type1">왕복</label></li>
					<li><input type="radio" name="tripType" value="OW" id="type2"><label for="type2">편도</label></li>
					<li><input type="radio" name="tripType" value="MC" id="type3"><label for="type3">다구간</label></li>
				</ul>
			</div>
		</div>
		







<input type="hidden" id="globalLangCd" value="KOR">

<div class="itinerary" style="display:visible">

	<div class="sec memberNum active"><!-- 활성상태 active -->
		<p class="srmy setting"><a href="#" onclick="showBooking(this); return false" class="icoFold">탑승객수<strong>성인1</strong></a></p>
		<div class="content member">
			<h2>탑승객수</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul>
					<li>
						<span><strong name="adultPaxCnt" name="adultPaxCnt">1</strong>성인</span>
						<a href="#" name="adultPaxCntDown" onclick="fnSetPaxCountDown('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="adultPaxCntUp" onclick="fnSetPaxCountUp('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="childPaxCnt" name="childPaxCnt">0</strong>소아
							<a href="#popAge1" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge1" class="popAgeLayer">
								<p>소아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 만 2세 – 만 13세 미만</li>
									<li>[국제선] 만 2세 – 만 12세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge1" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="childPaxCntDown" onclick="fnSetPaxCountDown('CHILD',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a><!-- 성인 9명 선택시 소아 비활성 : disable -->
						<a href="#" name="childPaxCntUp" onclick="fnSetPaxCountUp('CHILD',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="infantPaxCnt" name="infantPaxCnt">0</strong>유아 
							<a href="#popAge2" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge2" class="popAgeLayer">
								<p>유아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 생후 7일 이상 – 만 2세 미만</li>
									<li>[국제선] 생후 7일 이상 – 만 2세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge2" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="infantPaxCntDown" onclick="fnSetPaxCountDown('INFANT',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="infantPaxCntUp" onclick="fnSetPaxCountUp('INFANT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
				</ul>
				<p class="btn"><a href="#" onclick="setMemberNum(this);return false" class="btnTypeA">확인</a></p>
				<div class="caution">
					
					<p class="cal"><a href="javascript:;">유/소아 나이계산기</a></p>
				</div>
				<div class="ageCal"><!-- 모바일에서만 노출 -->
					<h3>유/소아 나이계산기</h3>
					




<div class="ageType">
	<input type="radio" name="rdoType_" id="type1" checked="checked"><label for="type1">국제선</label>
	<input type="radio" name="rdoType_" id="type2"><label for="type2">국내선</label>
</div>
<fieldset class="calculator">
	<p class="calculator_birth">
		<label for="birth">생년월일</label>
		<span>
		<select id="birth" name="cboYear" title="생년월일 년 선택">
			<option value="">2016</option>
			<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="생년월일 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" id="cboBirthDay" title="생년월일 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>

	<p class="calculator_date">
		<label for="date">가는날</label>
		<span>
		<select name="cboYear" id="date" title="가는날 년 선택">
				<option value="">2017</option>
				<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="가는날 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" title="가는날 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>
	<p class="btnArea">
		<a href="javascript:;" name="btnCalculate" class="btnTypeA">계산하기</a>
		<a href="#" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a>
	</p>
</fieldset>
<p class="ageResult"></p>

<script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js"></script>
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	setPopup();

	$.i18n.properties({
		name: ['messages', 'common','ibeBooking', 'ibeContentsBooking', 'member'],
		path: '../i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			if(typeof autoLoginInApp === 'function') {
				autoLoginInApp();
			}
		}
	});

	//기본날짜 셋팅
	var selectDate = new Date();
	

	//생년월일 기본값 설정
	$("select[name=cboYear]").empty();
	$("select[name=cboMonth]").empty();
	$("select[name=cboDay]").empty();

	var dateArea =  $(".calculator_date");
	var birthArea =  $(".calculator_birth");
// 	birthArea.find("[name=cboYear]").append($("<option>" + '년' + "</option>"));
	birthArea.find("[name=cboMonth]").append($("<option>" + '월' + "</option>"));
	birthArea.find("[name=cboDay]").append($("<option>" + '일' + "</option>"));

	var selectYear = selectDate.getFullYear();
	var selectMonth = selectDate.getMonth()+1;
	var selectDay = selectDate.getDate();
	var defaultYear = (new Date()).getFullYear();
	selectMonth = selectMonth < 10 ? "0" + selectMonth : selectMonth;
	selectDay = selectDay < 10 ? "0" + selectDay : selectDay;

	//Year
	var birthYearHTML = '<option>년</option>';
	var departureYearHTML = '';
	for(var i = defaultYear - 15; i <= defaultYear + 1; i++) {
		if(i <= defaultYear) {
			birthYearHTML += '<option>' + i + '</option>';
		}

		var selected = selectYear == i ? ' selected' : '';
		departureYearHTML += '<option' + selected + '>' + i + '</option>';
	}
	$('.calculator_birth select[name="cboYear"]').html(birthYearHTML);
	$('.calculator_date select[name="cboYear"]').html(departureYearHTML);

	//Month
	for (var i = 1; i <= 12; i++) {
		i = i < 10 ? "0" + i : i;
		$("select[name=cboMonth]").append($("<option>" + i + "</option>"));

		if (selectMonth == i) {
			dateArea.find("[name=cboMonth]").val(i);
		}
	}

	//Day
	for (var i = 1; i <= 31; i++) {
		i = i < 10 ? "0" + i : i;
		$("select[name=cboDay]").append($("<option>" + i + "</option>"));

		if (selectDay == i) {
			dateArea.find("[name=cboDay]").val(i);
		}
	}

	$(".calculator select").focus();

	

	//버튼 이벤트
	$("[name=btnCalculate]").click(function(){
		var _this = $(this).closest(".calculator");
		var dateArea = _this.find(".calculator_date");
		var birthArea = _this.find(".calculator_birth");

		if (birthArea.find("[name=cboYear] option:selected").index() == 0 || birthArea.find("[name=cboMonth] option:selected").index() == 0 || birthArea.find("[name=cboDay] option:selected").index() == 0) {
			alertLayer($.i18n.prop("lj.ibe.b2c.rsv.022"));
			return false;
		}

		var birthDate = new Date(Number(birthArea.find("[name=cboYear] option:selected").val()), Number(birthArea.find("[name=cboMonth] option:selected").val())-1, Number(birthArea.find("[name=cboDay] option:selected").val()));
		var depDate = new Date(Number(dateArea.find("[name=cboYear] option:selected").val()), Number(dateArea.find("[name=cboMonth] option:selected").val())-1, Number(dateArea.find("[name=cboDay] option:selected").val()));
		var calAge = calcAge(birthArea.find("[name=cboYear] option:selected").val()+birthArea.find("[name=cboMonth] option:selected").val()+birthArea.find("[name=cboDay] option:selected").val(),depDate);

		var paxInfo = "";

		if(getCompareTime(birthDate, 6) > depDate) {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.222');
		} else if (calAge < 2) {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.014');
		} else if (calAge < (_this.siblings(".ageType").find("#type1").is(':checked')?12:13)) {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.013');
		} else {
			paxInfo = $.i18n.prop('hom.ibe.rsv.lbl.012');
		}

		$(".ageResult").html($.i18n.prop("hom.ibe.ctn.rsv.006").replace("{0}",dateArea.find("[name=cboYear] option:selected").val()+"-"+dateArea.find("[name=cboMonth] option:selected").val()+"-"+dateArea.find("[name=cboDay] option:selected").val()).replace("{1}",paxInfo));

		setPopup();
	});
});
</script>

				</div>
			</div>
		</div><!-- //member -->
	</div><!-- //memberNum(탑승객수) -->
	<div class="sec departure">
		<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">출발지<strong></strong></a></p>
		<div class="content">
			<h2>출/도착 선택</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul class="cityList" name="depCity">
				</ul>
			</div>
		</div><!-- //content -->
	</div><!-- //departure(출발지) -->
	<div class="sec destination">
		<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">도착지<strong></strong></a></p>
		<!-- 출발지 선택안하고 도착지 클릭했을때<p class="srmy"><a href="#" onclick="alertLayer('출발지가 선택되지 않았습니다.'); return false" class="icoFold">도착지<strong></strong></a></p> -->
		<!-- [dev] 처음엔 p class="choice"가 없는 상태, 레이어에서 지역선택하면 p에 class="choice" 추가되고 strong에 선택한 지역이 표시됨 -->
		<div class="content">
			<h2>출/도착 선택</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul class="cityList" name="arrCity">
				</ul>
			</div>
		</div><!-- //content -->
	</div><!-- //destination(도착지) -->
	<div class="sec date" name="calendar">
		<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'가는날'); return false" class="icoFold">가는날<strong></strong></a></p></div>
		<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'오는날', true); return false" class="icoFold">오는날<strong></strong></a></p></div>
	</div>
</div><!-- //itinerary -->
<!-- 다구간 -->
<div class="itinerary multiCourse" style="display:none;">
	<div class="sec memberNum active"><!-- 활성상태 active -->
		<p class="srmy setting"><a href="javascript:;" onclick="showBooking(this); return false" class="icoFold">탑승객수<strong>성인1</strong></a></p>
		<div class="content member">
			<h2>탑승객수</h2>
			<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
			<div class="scr">
				<ul>
					<li>
						<span><strong name="adultPaxCnt" name="adultPaxCnt">1</strong>성인</span>
						<a href="#" name="adultPaxCntDown" onclick="fnSetPaxCountDown('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="adultPaxCntUp" onclick="fnSetPaxCountUp('ADULT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="childPaxCnt" name="childPaxCnt">0</strong>소아
							<a href="#popAge1" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge1" class="popAgeLayer">
								<p>소아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 만 2세 – 만 13세 미만</li>
									<li>[국제선] 만 2세 – 만 12세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge1" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="childPaxCntDown" onclick="fnSetPaxCountDown('CHILD',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a><!-- 성인 9명 선택시 소아 비활성 : disable -->
						<a href="#" name="childPaxCntUp" onclick="fnSetPaxCountUp('CHILD',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
					<li>
						<span>
							<strong name="infantPaxCnt" name="infantPaxCnt">0</strong>유아 
							<a href="#popAge2" class="btn_age" onclick="showAgeLayer(this); return false" title="레이어 팝업 열림"><img src="//images.jinair.com/images/common/ico_question_02.png" alt="자세히 보기"></a>
							<div id="popAge2" class="popAgeLayer">
								<p>유아<em>(탑승일 기준)</em></p>
								<ul>
									<li>[국내선] 생후 7일 이상 – 만 2세 미만</li>
									<li>[국제선] 생후 7일 이상 – 만 2세 미만</li>
								</ul>
								<span class="des">* 국내선의 경우 각 구간별 탑승일 기준으로 나이 계산,<br>국제선의 경우 첫구간 탑승일 기준으로 나이 계산<br>
	* 탑승 수속 시 생년월일 확인 가능한 서류 지참 필수
	</span>
								<div class="layer_close"><a href="#popAge2" onclick="hideAgeLayer(this); return false">닫기</a></div>
							</div>
						</span>
						<a href="#" name="infantPaxCntDown" onclick="fnSetPaxCountDown('INFANT',this); return false" class="disable"><img src="//images.jinair.com/images/btn/btn_minus.png" alt="-"></a>
						<a href="#" name="infantPaxCntUp" onclick="fnSetPaxCountUp('INFANT',this); return false"><img src="//images.jinair.com/images/btn/btn_plus.png" alt="+"></a>
					</li>
				</ul>
				<p class="btn"><a href="#" onclick="setMemberNum(this); return false" class="btnTypeA">확인</a></p>
				<div class="caution">
					
		<p>소아 : 만2세 ~ 13세 미만 (국제선 만 12세 미만)</p>
   		<p>유아 : 만 2세 미만</p>
	
					<p class="cal"><a href="javascript:;">유/소아 나이계산기</a></p>
				</div>
				<div class="ageCal"><!-- 모바일에서만 노출 -->
					<h3>유/소아 나이계산기</h3>
					




<div class="ageType">
	<input type="radio" name="rdoType_multiCourse" id="type1" checked="checked"><label for="type1">국제선</label>
	<input type="radio" name="rdoType_multiCourse" id="type2"><label for="type2">국내선</label>
</div>
<fieldset class="calculator">
	<p class="calculator_birth">
		<label for="birth">생년월일</label>
		<span>
		<select id="birth" name="cboYear" title="생년월일 년 선택">
			<option value="">2016</option>
			<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="생년월일 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" id="cboBirthDay" title="생년월일 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>

	<p class="calculator_date">
		<label for="date">가는날</label>
		<span>
		<select name="cboYear" id="date" title="가는날 년 선택">
				<option value="">2017</option>
				<option value=""></option>
		</select>
		</span>
		<span>
			<select name="cboMonth" title="가는날 월 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
		<span>
			<select name="cboDay" title="가는날 일 선택">
				<option value="">01</option>
				<option value=""></option>
			</select>
		</span>
	</p>
	<p class="btnArea">
		<a href="javascript:;" name="btnCalculate" class="btnTypeA">계산하기</a>
		<a href="#" onclick="hidePopupLayer(); return false" class="btnTypeB">취소</a>
	</p>
</fieldset>
<p class="ageResult"></p>

				</div>
			</div>
		</div><!-- //member -->
	</div><!-- //memberNum(탑승객수) -->
	<ul class="course">
		<li>
			<div class="sec departure">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">출발지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="depCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //departure(출발지) -->
			<div class="sec destination">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">도착지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="arrCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //destination(도착지) -->
			<div class="sec" name="calendar">
				<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'가는날'); return false" class="icoFold">가는날<strong></strong></a></p></div>
			</div>
		</li>
		<li>
			<div class="sec departure">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">출발지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="depCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //departure(출발지) -->
			<div class="sec destination">
				<p class="srmy"><a href="#" onclick="showBooking(this); return false" class="icoFold">도착지<strong></strong></a></p>
				<div class="content">
					<h2>출/도착 선택</h2>
					<p class="close"><a href="#" onclick="hideBooking(this); return false"><span>닫기</span></a></p>
					<div class="scr">
						<ul class="cityList" name="arrCity">
						</ul>
					</div>
				</div><!-- //content -->
			</div><!-- //destination(도착지) -->
			<div class="sec" name="calendar">
				<div><p class="srmy choice"><a href="#" onclick="showCalendar(this,'가는날'); return false" class="icoFold">가는날<strong></strong></a></p></div>
			</div>
		</li>
	</ul>
	<p class="more" style="display: none;"><a href="#" onclick="addCourse(); return false">구간추가</a></p>
</div>
<!-- //다구간 -->
<script>

</script>

<script id="depTemplate" type="text/x-jsrender">
 {{if #getIndex() == 0}}
<li class="on">
	<p class="icoFold on">{{:regionName}}</p>
 {{else}}
<li>
	<p class="icoFold">{{:regionName}}</p>
 {{/if}}
	<ul regcode="{{:regionCode}}">
		{{for airportList}}
			<li {{if (iataCityAirportCode == 'DAC')}}class="disable"{{/if}}><a href="#" onclick="setCity(this); return false">{{:cityAirportName}}</a><input type='hidden' name="ApoCode" country="{{:countryCode}}" value="{{:iataCityAirportCode}}"></li>
		{{/for}}
	</ul>
</li>
</script>
<script id="arrTemplate" type="text/x-jsrender">
 {{if #getIndex() == 0}}
<li class="on">
	<p class="icoFold on">{{:regionName}}</p>
 {{else}}
<li>
	<p class="icoFold">{{:regionName}}</p>
 {{/if}}
	<ul regcode="{{:regionCode}}">
		{{for airportList}}
			<li {{if (iataCityAirportCode == 'DAC')}}class="disable"{{/if}} ><a href="#" onclick="setCity(this); ">{{:cityAirportName}}</a><input type='hidden' name="ApoCode" country="{{:countryCode}}" value="{{:iataCityAirportCode}}"></li>
		{{/for}}
	</ul>
</li>
</script>

<script type="text/javascript">
	var sid = ('prd' == 'prd') ? 'service_1' : 'service_2';
	var aid = ('prd' == 'prd') ? 'avail' : 'stg_avail';

	$(document).ready(function() {

		//var globalLangCd =  'KOR';
		

		
		netfunnelVisible = true;
		
	});
</script>
<script type="text/javascript" src="../js/hom/lj/front/booking/getItinerary.js"></script>
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>

<form id="registerform" action="/booking/getAvailabilityList" method="post">
	<input type="hidden" name="_csrf" id="_csrf" value="71a56a38-0a41-49e8-8d47-918e891aeca0" />
		여정1 출발시간 : <input type="text" name="s_time"/><br />
		여정2 출발시간 : <input type="text" name="e_time"/><br />
		여정1 운임종류 : <input type="text" name="b_type"/><br />
		여정2 운임종류 : <input type="text" name="eb_type"/><br />
		<input type="hidden" name="b_count" value="${ param.b_count }"/>
		<input type="hidden" name="departure" value="${ param.departure }"/>
		<input type="hidden" name="arrival" value="${ param.arrival }"/>
		<input type="hidden" name="s_day" value="${ param.s_day }"/>
		<input type="hidden" name="e_day" value="${ param.e_day }"/>
		<input type="hidden" 	id="searchType" 		name="searchType" 			value= "${ param.searchType }"		/>
		<input type="hidden" 	id="origin1" 			name="origin1"              value= "${ param.origin1 }"        	/>
		<input type="hidden" 	id="destination1" 		name="destination1"         value= "${ param.destination1 }"	/>
		<input type="hidden" 	id="travelDate1" 		name="travelDate1"          value= "${ param.travelDate1 }"		/>
		<input type="hidden" 	id="origin2" 			name="origin2"              value= "${ param.origin2 }"        	/>
		<input type="hidden" 	id="destination2" 		name="destination2"         value= "${ param.destination2 }"	/>
		<input type="hidden" 	id="travelDate2" 		name="travelDate2"          value= "${ param.travelDate2 }"		/>
		<input type="hidden" 	id="pointOfPurchase" 	name="pointOfPurchase"      value= "${ param.pointOfPurchase }" />
		<input type="hidden" 	id="adultPaxCount" 		name="adultPaxCount"        value= "${ param.adultPaxCount }"	/>
		<input type="hidden" 	id="childPaxCount" 		name="childPaxCount"        value= "${ param.childPaxCount }"	/>
		<input type="hidden" 	id="infantPaxCount" 	name="infantPaxCount"       value= "${ param.infantPaxCount }"	/>
		<input type="hidden" 	id="tripType" 			name="tripType"             value= "${ param.tripType }"		/>
		<input type="hidden" 	id="pnrNumber" 			name="pnrNumber"            value= "${ param.pnrNumber }"		/>
	
		<input type="hidden" 	id="domIntType" 		name="domIntType"           value= "${ param.domIntType }"		/>
		<input type="hidden"	id="segmentId1"			name="segmentId1"		value="">
	<input type="hidden"	id="segmentId2"			name="segmentId2"		value="">
	<input type="hidden"	id="segmentId3"			name="segmentId3"		value="">
	<input type="hidden"	id="segmentId4"			name="segmentId4"		value="">
	<input type="hidden"	id="isModify1"			name="isModify1"		value="">
	<input type="hidden"	id="isModify2"			name="isModify2"		value="">
	<input type="hidden"	id="isModify3"			name="isModify3"		value="">
	<input type="hidden"	id="isModify4"			name="isModify4"		value="">
	
		<input type="hidden" 	id="cpnNo"				name="cpnNo"				value= "${ param.cpnNo }"			/>
		<input type="hidden" 	id="promoCode"			name="promoCode"			value= "${ param.promoCode }"		/>
		<input type="hidden" 							name="userBirth" 			value= "${ param.userBirth }" 		/>
		<input type="hidden" 	id="refVal"				name="refVal"				value= "${ param.refVal }"			/>
		<input type="hidden" 	id="refPop"				name="refPop"				value= "${ param.refPop }"			/>
		<input type="hidden" 	id="refChannel"			name="refChannel"			value= "${ param.refChannel }"		/>
		<input type="hidden" 	id="refLang"			name="refLang"				value= "${ param.refLang }"			/>
		<input type="hidden" 	id="userId"				name="userId" 				value= "${ param.userId }"			/>
		<input type="hidden"	id="bookingID"			name="bookingID"			value= "${ param.bookingID }"		/>
		<input type="hidden" 	id="depcity1Param" 									value="" 						/>
		<input type="hidden" 	id="arrcity1Param"									value="" 						/>
		<input type="hidden" 	id="depdate1Param" 									value="" 						/>
		<input type="hidden" 	id="arrdate1Param" 									value="" 						/>
		<input type="hidden" 	id="tripday1Param" 									value="" 						/>
</form>
		<div class="btnArea">
			<a href="javascript:;" onclick="return submitItinerary();" class="btnTypeB sizeL icoNext">조회</a><!-- [dev] 활성화버튼 btnTypeA -->
		</div>
	</div><!-- //modifyLayer -->
</div><!-- //quickModify -->
<script id="basketFullSegTmp1" type="text/x-jsrender">
	{{if #index == 0}}
		<li>
	{{else}}
		<li style="display:none;">
	{{/if}}
	<p class="tit">
		<span class="tripType">
			{{getTripType: 'name'}}
		</span> 여정{{:segmentSEQ}}
	</p>
	<p class="cont">
		{{if flightList.length > 1}}
			<span><em>{{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID 0 'boardPointName'}}</em> [출발] {{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID 0 'departureDateTimeString'}}</span>
			<span class="single"></span>
			<span><em>{{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID flightList.length - 1 'offPointName'}}</em> [도착] {{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID flightList.length - 1 'arrivalTimeString'}}</span>
		{{else}}
			<span><em>{{:boardPointName}}</em> [출발] {{:departureDateTimeString}}</span>
			<span class="single"></span>
			<span><em>{{:offPointName}}</em> [도착] {{:arrivalTimeString}}</span>
		{{/if}}		
	</p>
	</li>
</script>
<script id="basketFullSegTmp2" type="text/x-jsrender">
	{{if #index ==0}}
		<li>
	{{else}}
		<li style="display:none">
	{{/if}}

	<p class="tit">
		<span class="tripType">
			{{if #view.parent.data.length==1}}
			편도
			{{else #view.parent.data.length==2}}
			왕복
			{{else}}
			다구간
			{{/if}}
		</span> 여정{{:segmentSEQ}}
	</p>
	<p class="cont">
		<span><em>{{:boardPointName}}</em> [출발] {{:departureDateTimeString}}</span>
		<span class="single"></span>
		<span><em>{{:offPointName}}</em> [도착] {{:arrivalTimeString}}</span>
	</p>
	</li>
</script>

<script type="text/javascript" src="../js/hom/lj/front/booking/quickModify.js"></script>
<script type="text/javascript">

$(document).ready(function() {
	$.i18n.properties({
	    name	: ['messages', 'common','ibeBooking'],
	    path	: '../i18n/messages/',
	    mode	: 'map',
	    language: 'ko_KR',
	    langCd	: 'KOR'
	});
	
	try {
		confirmPrice = JSON.parse('');
		setBasketQuickModify();
	}catch(e){
		// nothing
	}
	
	//getCityAirport();
});

var qTop = $("#quickModify").offset().top;

function showItinerary(){
	if($(".bgLayer2").size() == 0){
		$("#wrapper").append("<div class='bgLayer2'></div>");
	}
	$(".bgLayer2, .modifyLayer").fadeIn(150);
	$("#quickModify").css("z-index", "113");
	
	_satellite.track("trip_research_click"); 
	
}
function hideItinerary(){
	$(".bgLayer2, .modifyLayer").fadeOut(100);
	$("#quickModify").css("z-index", "100");
}

function showMulti(){
	//편도일 경우  눌리지 않도록 변경
	if ($("#quickModify .multiArea li:first-child ~li").length > 0) {
		if(!$("#quickModify").hasClass("multiOpen")){
			$("#quickModify .multiArea li:first-child ~li").stop().slideDown(100);
			$("#quickModify").addClass("multiOpen");
		} else {
			$("#quickModify .multiArea li:first-child ~li").stop().slideUp(50, function(){
				$("#quickModify").removeClass("multiOpen");
			});
		}	
	}
}
</script>
		
			
			
		



	
	
		<h1 class="typeA">탑승객 정보</h1>
	
	
	
	

<div class="step">
	<h2>Step</h2>
	<ol>
		<li><strong>1</strong> <span>여정 선택</span></li>
		<li><strong>2</strong> <span>항공편 선택</span></li>
		<li class="on"><strong>3</strong> <span>탑승객 정보</span></li>
		<li><strong>4</strong> <span>부가 서비스</span></li>
		<li><strong>5</strong> <span>결제</span></li>
	</ol>
</div>
		<form id="passengerCheckForm" name="passengerCheckForm">
			<h2 class="typeA">탑승객 정보 <span class="fontTypeA">(*필수입력)</span></h2>
			<div class="passengerForm">
				
				<div class="head">
					<h3>성인  1</h3>
					
					<p class="chk" style="display: none;"><input type="checkbox" name="chkPassengerInfo" id="passenger" data-click-area="여정-3_탑승객정보" data-click-name="본인 탑승여부 체크(유/무)"><label for="passenger">회원 본인이 탑승하지 않는 경우 체크 해 주세요.</label></p>
					
				</div>
				<fieldset id="adultInfo1" name="adultInfo">
					<div class="fieldBox">
						<p class="tit"><em>*</em> 이름</p>
						<p class="nameField">
							<input class="placeholder" type="text" name="surName" title="성" placeholder="성" style="text-transform: uppercase;">
							<input class="placeholder" type="text" name="givenName" title="이름" placeholder="이름" style="text-transform: uppercase;">
						</p>
					</div>
					<div class="fieldBox">
						<p class="tit"><em>*</em> 성별</p>
						<div class="fieldArea"><div class="wrap">
							<span class="field"><button type="button" class="choice" value="M">남자</button></span>
							<span class="field"><button type="button" value="F">여자</button></span>
						</div></div>
					</div>
					<div class="fieldBox"> <!-- 생년월일 -->
						<p class="tit"><em>*</em> 생년월일</p>
						<input type="text" name="birth" class="placeholder" title="생년월일" placeholder="YYYYMMDD (예. 19820626)" maxlength="8">
					</div>
					
					<div class="fieldBox"> <!-- 국적 -->
						<p class="tit"><em>*</em> 국적</p>
						<select name="nationality">
							<option value=""></option>
							
								<option value="KOR" >
									한국
									(REPUBLIC OF KOREA)
								</option>
							
								<option value="JPN" >
									일본
									(JAPAN)
								</option>
							
								<option value="GHA" >
									가나
									(GHANA)
								</option>
							
								<option value="GAB" >
									가봉
									(GABON)
								</option>
							
								<option value="GUY" >
									가이아나
									(GUYANA)
								</option>
							
								<option value="GMB" >
									감비아
									(GAMBIA)
								</option>
							
								<option value="GLP" >
									과들루프
									(GUADELOUPE)
								</option>
							
								<option value="GTM" >
									과테말라
									(GUATEMALA)
								</option>
							
								<option value="GUM" >
									괌
									(GUAM)
								</option>
							
								<option value="GRD" >
									그레나다
									(GRENADA)
								</option>
							
								<option value="GEO" >
									그루지아
									(GEORGIA)
								</option>
							
								<option value="GRC" >
									그리스
									(GREECE)
								</option>
							
								<option value="GRL" >
									그린란드
									(GREENLAND)
								</option>
							
								<option value="GIN" >
									기니
									(GUINEA)
								</option>
							
								<option value="GNB" >
									기니
									(GUINEA BISSAU)
								</option>
							
								<option value="GUF" >
									기아나(프)
									(FRENCH GUIANA)
								</option>
							
								<option value="NAM" >
									나미비아
									(NAMIBIA)
								</option>
							
								<option value="NRU" >
									나우루
									(NAURU)
								</option>
							
								<option value="NGA" >
									나이지리아
									(NIGERIA)
								</option>
							
								<option value="ZAF" >
									남아프리카공화국
									(REP SOUTH AFRICA)
								</option>
							
								<option value="NLD" >
									네덜란드
									(NETHERLANDS)
								</option>
							
								<option value="NPL" >
									네팔
									(NEPAL)
								</option>
							
								<option value="NOR" >
									노르웨이
									(NORWAY)
								</option>
							
								<option value="NFK" >
									노퍽
									(NORFOLK ISLAND)
								</option>
							
								<option value="NCL" >
									누벨칼레도니
									(NEW CALEDONIA)
								</option>
							
								<option value="NZL" >
									뉴질랜드
									(NEW ZEALAND)
								</option>
							
								<option value="NIU" >
									니우에
									(NIUE)
								</option>
							
								<option value="NER" >
									니제르
									(NIGER)
								</option>
							
								<option value="NIC" >
									니카라과
									(NICARAGUA)
								</option>
							
								<option value="TWN" >
									대만
									(TAIWAN)
								</option>
							
								<option value="DNK" >
									덴마크
									(DENMARK)
								</option>
							
								<option value="DOM" >
									도미니카공화국
									(DOMINICAN REP)
								</option>
							
								<option value="DMA" >
									도미니카연방
									(DOMINICA)
								</option>
							
								<option value="DEU" >
									독일
									(GERMANY)
								</option>
							
								<option value="TLS" >
									동티모르
									(EAST TIMOR)
								</option>
							
								<option value="LAO" >
									라오스
									(LAOS)
								</option>
							
								<option value="LVA" >
									라트비아
									(LATVIA)
								</option>
							
								<option value="RUS" >
									러시아
									(RUSSIAN FED)
								</option>
							
								<option value="LBN" >
									레바논
									(LEBANON)
								</option>
							
								<option value="LSO" >
									레소토
									(LESOTHO)
								</option>
							
								<option value="ROU" >
									루마니아
									(ROMANIA)
								</option>
							
								<option value="LUX" >
									룩셈부르크
									(LUXEMBOURG)
								</option>
							
								<option value="RWA" >
									르완다
									(RWANDA)
								</option>
							
								<option value="LBR" >
									리베리아
									(LIBERIA)
								</option>
							
								<option value="LBY" >
									리비아
									(LIBYAN)
								</option>
							
								<option value="LTU" >
									리투아니아
									(LITHUANIA)
								</option>
							
								<option value="MDG" >
									마다가스카르
									(MADAGASCAR)
								</option>
							
								<option value="MTQ" >
									마르티니크
									(MARTINIQUE)
								</option>
							
								<option value="MHL" >
									마샬제도
									(MARSHALL ISLANDS)
								</option>
							
								<option value="MAC" >
									마카오
									(MACAO)
								</option>
							
								<option value="MKD" >
									마케도니아
									(MACEDONIA)
								</option>
							
								<option value="MWI" >
									말라위
									(MALAWI)
								</option>
							
								<option value="MYS" >
									말레이시아
									(MALAYSIA)
								</option>
							
								<option value="MLI" >
									말리
									(MALI)
								</option>
							
								<option value="MEX" >
									멕시코
									(MEXICO)
								</option>
							
								<option value="MCO" >
									모나코
									(MONACO)
								</option>
							
								<option value="MAR" >
									모로코
									(MOROCCO)
								</option>
							
								<option value="MUS" >
									모리셔스
									(MAURITIUS)
								</option>
							
								<option value="MRT" >
									모리타니
									(MAURITANIA)
								</option>
							
								<option value="MOZ" >
									모잠비크
									(MOZAMBIQUE)
								</option>
							
								<option value="MNE" >
									몬테네그로
									(REPUBLIC OF MENTENEGRO)
								</option>
							
								<option value="MSR" >
									몬트세라트
									(MONTSERRAT)
								</option>
							
								<option value="MDA" >
									몰도바
									(MOLDOVA)
								</option>
							
								<option value="MDV" >
									몰디브
									(MALDIVES)
								</option>
							
								<option value="MLT" >
									몰타
									(MALTA)
								</option>
							
								<option value="MNG" >
									몽골
									(MONGOLIA)
								</option>
							
								<option value="USA" >
									미국
									(U S A)
								</option>
							
								<option value="MMR" >
									미얀마
									(MYANMAR)
								</option>
							
								<option value="FSM" >
									미크로네시아연방
									(MICRONESIA)
								</option>
							
								<option value="VUT" >
									바누아투
									(VANUATU)
								</option>
							
								<option value="BHR" >
									바레인
									(BAHRAIN)
								</option>
							
								<option value="BRB" >
									바베이도스
									(BARBADOS)
								</option>
							
								<option value="VAT" >
									바티칸
									(Vatican City)
								</option>
							
								<option value="BHS" >
									바하마
									(BAHAMAS)
								</option>
							
								<option value="BGD" >
									방글라데시
									(BANGLADESH)
								</option>
							
								<option value="BMU" >
									버뮤다
									(BERMUDA)
								</option>
							
								<option value="VIR" >
									버진제도(미)
									(US VIRGIN IS)
								</option>
							
								<option value="VGB" >
									버진제도(영)
									(BRITISH VIRGIN IS)
								</option>
							
								<option value="VEN" >
									베네수엘라
									(VENEZUELA)
								</option>
							
								<option value="BEN" >
									베넹
									(BENIN PEOPLES REP)
								</option>
							
								<option value="VNM" >
									베트남
									(VIET NAM)
								</option>
							
								<option value="BEL" >
									벨기에
									(BELGIUM)
								</option>
							
								<option value="BLR" >
									벨로루시
									(BELARUS)
								</option>
							
								<option value="BLZ" >
									벨리즈
									(BELIZE)
								</option>
							
								<option value="BIH" >
									보스니아
									(BOSNIA HERZ)
								</option>
							
								<option value="BWA" >
									보츠와나
									(BOTSWANA)
								</option>
							
								<option value="BOL" >
									볼리비아
									(BOLIVIA)
								</option>
							
								<option value="BDI" >
									부룬디
									(BURUNDI)
								</option>
							
								<option value="BFA" >
									부르키나파소
									(BURKINA FASO)
								</option>
							
								<option value="BTN" >
									부탄
									(BHUTAN)
								</option>
							
								<option value="BGR" >
									불가리아
									(BULGARIA)
								</option>
							
								<option value="BRA" >
									브라질
									(BRASIL)
								</option>
							
								<option value="BRN" >
									브루나이
									(BRUNEI)
								</option>
							
								<option value="WSM" >
									사모아
									(INDEPENDENT SAMOA)
								</option>
							
								<option value="ASM" >
									사모아(미)
									(AMERICAN SAMOA)
								</option>
							
								<option value="SAU" >
									사우디아라비아
									(SAUDI ARABIA)
								</option>
							
								<option value="SMR" >
									산마리노
									(SAN MARINO)
								</option>
							
								<option value="STP" >
									상투메 프린시페
									(SAO TOME PRINCIPE)
								</option>
							
								<option value="SEN" >
									세네갈
									(SENEGAL)
								</option>
							
								<option value="SRB" >
									세르비아
									(REPUBLIC OF SERBIA)
								</option>
							
								<option value="SYC" >
									세이셜
									(SEYCHELLES)
								</option>
							
								<option value="LCA" >
									세인트루시아
									(SAINT LUCIA)
								</option>
							
								<option value="VCT" >
									세인트빈센트 그레나
									(ST VINCENT)
								</option>
							
								<option value="KNA" >
									세인트키츠 네비스
									(ST KITTS NEVIS)
								</option>
							
								<option value="SHN" >
									세인트헬레나
									(ST HELENA)
								</option>
							
								<option value="SOM" >
									소말리아
									(SOMALIA)
								</option>
							
								<option value="SLB" >
									솔로몬제도
									(SOLOMON ISLANDS)
								</option>
							
								<option value="SDN" >
									수단
									(SUDAN)
								</option>
							
								<option value="SUR" >
									수리남
									(SURINAME)
								</option>
							
								<option value="LKA" >
									스리랑카
									(SRI LANKA)
								</option>
							
								<option value="SWZ" >
									스와질랜드
									(SWAZILAND)
								</option>
							
								<option value="SWE" >
									스웨덴
									(SWEDEN)
								</option>
							
								<option value="CHE" >
									스위스
									(SWITZERLAND)
								</option>
							
								<option value="ESP" >
									스페인
									(SPAIN)
								</option>
							
								<option value="SVK" >
									슬로바키아
									(SLOVAKIA)
								</option>
							
								<option value="SVN" >
									슬로베니아
									(SLOVENIA)
								</option>
							
								<option value="SYR" >
									시리아
									(SYRIA)
								</option>
							
								<option value="SLE" >
									시에라리온
									(SIERRA LEONE)
								</option>
							
								<option value="SGP" >
									싱가폴
									(SINGAPORE)
								</option>
							
								<option value="ARE" >
									아랍에미리트
									(UNITED ARAB EMRTS)
								</option>
							
								<option value="ABW" >
									아루바
									(ARUBA)
								</option>
							
								<option value="ARM" >
									아르메니아
									(ARMENIA)
								</option>
							
								<option value="ARG" >
									아르헨티나
									(ARGENTINA)
								</option>
							
								<option value="ISL" >
									아이슬랜드
									(ICELAND)
								</option>
							
								<option value="HTI" >
									아이티
									(HAITI)
								</option>
							
								<option value="IRL" >
									아일랜드
									(IRELAND)
								</option>
							
								<option value="AZE" >
									아제르바이잔
									(AZERBAIJAN)
								</option>
							
								<option value="AFG" >
									아프가니스탄
									(AFGHANISTAN)
								</option>
							
								<option value="AND" >
									안도라
									(ANDORRA)
								</option>
							
								<option value="ANT" >
									안틸레스(네덜란드)
									(ANTILLES)
								</option>
							
								<option value="ALB" >
									알바니아
									(ALBANIA)
								</option>
							
								<option value="DZA" >
									알제리
									(ALGERIA)
								</option>
							
								<option value="AGO" >
									앙골라
									(ANGOLA)
								</option>
							
								<option value="EST" >
									에스토니아
									(ESTONIA)
								</option>
							
								<option value="ECU" >
									에쿠아도르
									(ECUADOR)
								</option>
							
								<option value="ETH" >
									에티오피아
									(ETHIOPIA)
								</option>
							
								<option value="ATG" >
									엔티가 바부다
									(ANTIGUA BARBUDA)
								</option>
							
								<option value="SLV" >
									엘살바도르
									(EL SALVADOR)
								</option>
							
								<option value="AIA" >
									엥귈라
									(ANGUILLA)
								</option>
							
								<option value="GBR" >
									영국
									(UNITED KINGDOM)
								</option>
							
								<option value="IOT" >
									영국령인도양식민지 
									(BRITISH INDIAN OCEAN TERRITORY)
								</option>
							
								<option value="YEM" >
									예멘
									(YEMEN ARAB REP)
								</option>
							
								<option value="OMN" >
									오만
									(OMAN)
								</option>
							
								<option value="AUT" >
									오스트리아
									(AUSTRIA)
								</option>
							
								<option value="HND" >
									온두라스
									(HONDURAS)
								</option>
							
								<option value="JOR" >
									요르단
									(JORDAN)
								</option>
							
								<option value="UGA" >
									우간다
									(UGANDA)
								</option>
							
								<option value="URY" >
									우루과이
									(URUGUAY)
								</option>
							
								<option value="UZB" >
									우즈베키스탄
									(UZBEKISTAN)
								</option>
							
								<option value="UKR" >
									우크라이나
									(UKRAINE)
								</option>
							
								<option value="WLF" >
									웰리스 푸투나
									(WALLIS AND FUTUNA)
								</option>
							
								<option value="YUG" >
									유고슬라비아
									(YUGOSLAVIA)
								</option>
							
								<option value="IRQ" >
									이라크
									(IRAQ)
								</option>
							
								<option value="IRN" >
									이란
									(IRAN)
								</option>
							
								<option value="ISR" >
									이스라엘
									(ISRAEL)
								</option>
							
								<option value="EGY" >
									이집트
									(EGYPT)
								</option>
							
								<option value="ITA" >
									이탈리아
									(ITALY)
								</option>
							
								<option value="IND" >
									인도
									(INDIA)
								</option>
							
								<option value="IDN" >
									인도네시아
									(INDONESIA)
								</option>
							
								<option value="JAM" >
									자메이카
									(JAMAICA)
								</option>
							
								<option value="COD" >
									자이르
									(CONGO KINSHASA)
								</option>
							
								<option value="ZMB" >
									잠비아
									(ZAMBIA)
								</option>
							
								<option value="GNQ" >
									적도기니
									(EQUATORIAL GUINEA)
								</option>
							
								<option value="CHN" >
									중국
									(MAINLAND CHINA)
								</option>
							
								<option value="CAF" >
									중앙아프리카공화국
									(CNTRAL AFRICN REP)
								</option>
							
								<option value="DJI" >
									지부티
									(DJIBOUTI)
								</option>
							
								<option value="GIB" >
									지브랄타
									(GIBRALTAR)
								</option>
							
								<option value="ZWE" >
									짐바브웨
									(ZIMBABWE)
								</option>
							
								<option value="TCD" >
									차드
									(CHAD)
								</option>
							
								<option value="CZE" >
									체코
									(CZECH REP)
								</option>
							
								<option value="CHL" >
									칠레
									(CHILE)
								</option>
							
								<option value="CMR" >
									카메룬
									(REPUBLIC CAMEROON)
								</option>
							
								<option value="CPV" >
									카보베르데
									(REP OF CAPE VERDE)
								</option>
							
								<option value="KAZ" >
									카자흐스탄
									(KAZAKHSTAN)
								</option>
							
								<option value="QAT" >
									카타르
									(QATAR)
								</option>
							
								<option value="KHM" >
									캄보디아
									(KAMPUCHEA)
								</option>
							
								<option value="CAN" >
									캐나다
									(CANADA)
								</option>
							
								<option value="KEN" >
									케냐
									(KENYA)
								</option>
							
								<option value="CYM" >
									케이맨제도
									(CAYMAN IS)
								</option>
							
								<option value="COM" >
									코모로
									(COMOROS)
								</option>
							
								<option value="CRI" >
									코스타리카
									(COSTA RICA)
								</option>
							
								<option value="CCK" >
									코코스킬링제도
									(COCOS ISL)
								</option>
							
								<option value="CIV" >
									코트디부와르
									(COTE D IVOIRE)
								</option>
							
								<option value="COL" >
									콜롬비아
									(COLOMBIA)
								</option>
							
								<option value="COG" >
									콩고
									(CONGO BRAZZAVILLE)
								</option>
							
								<option value="CUB" >
									쿠바
									(CUBA)
								</option>
							
								<option value="KWT" >
									쿠웨이트
									(KUWAIT)
								</option>
							
								<option value="COK" >
									쿡제도
									(COOK ISLANDS)
								</option>
							
								<option value="HRV" >
									크로아티아
									(CROATIA)
								</option>
							
								<option value="KGZ" >
									키르키스스탄
									(KYRGYZSTAN)
								</option>
							
								<option value="KIR" >
									키리바시
									(KIRIBATI)
								</option>
							
								<option value="CYP" >
									키프로스
									(CYPRUS)
								</option>
							
								<option value="TJK" >
									타지키스탄
									(TAJIKISTAN)
								</option>
							
								<option value="TZA" >
									탄자니아
									(TANZANIA)
								</option>
							
								<option value="THA" >
									태국
									(THAILAND)
								</option>
							
								<option value="TCA" >
									터크스 케이커스제도
									(TURKS CAICOS IS)
								</option>
							
								<option value="TUR" >
									터키
									(TURKEY)
								</option>
							
								<option value="TGO" >
									토고
									(TOGO)
								</option>
							
								<option value="TON" >
									통가
									(TONGA)
								</option>
							
								<option value="TKM" >
									투르크메니스탄
									(TURKMENISTAN)
								</option>
							
								<option value="TUV" >
									투발루
									(TUVALU)
								</option>
							
								<option value="TUN" >
									튀니지
									(TUNISIA)
								</option>
							
								<option value="TTO" >
									트리니다드토바고
									(TRINIDAD TOBAGO)
								</option>
							
								<option value="PAN" >
									파나마
									(PANAMA)
								</option>
							
								<option value="PRY" >
									파라과이
									(PARAGUAY)
								</option>
							
								<option value="FRO" >
									파로제도
									(FAROE ISLAND)
								</option>
							
								<option value="PAK" >
									파키스탄
									(PAKISTAN)
								</option>
							
								<option value="PNG" >
									파푸아뉴기니
									(PAPUA NEW GUINEA)
								</option>
							
								<option value="PLW" >
									팔라우
									(PALAU ISLANDS)
								</option>
							
								<option value="PSE" >
									팔레스타인
									(PALESTINIAN TERRITORY, OCCUPIED)
								</option>
							
								<option value="PER" >
									페루
									(PERU)
								</option>
							
								<option value="PRT" >
									포르투갈
									(PORTUGAL)
								</option>
							
								<option value="FLK" >
									포클랜드
									(FALKLAND)
								</option>
							
								<option value="POL" >
									폴란드
									(POLAND)
								</option>
							
								<option value="PYF" >
									폴리네시아(프)
									(FRENCH POLYNESIA)
								</option>
							
								<option value="PRI" >
									푸에르토리코
									(PUERTO RICO)
								</option>
							
								<option value="FRA" >
									프랑스
									(FRANCE)
								</option>
							
								<option value="FJI" >
									피지
									(FIJI)
								</option>
							
								<option value="FIN" >
									핀란드
									(FINLAND)
								</option>
							
								<option value="PHL" >
									필리핀
									(PHILIPPINES)
								</option>
							
								<option value="HUN" >
									헝가리
									(HUNGARY)
								</option>
							
								<option value="AUS" >
									호주
									(AUSTRALIA)
								</option>
							
								<option value="HKG" >
									홍콩
									(HONG KONG)
								</option>
							
						</select>
					</div>
					
					
					
						
						
							<div class="fieldBox">
								<p class="tit">회원아이디</p>
								<p class="idField">
									<input type="text" name="userId" title="회원아이디" value="">
									<a href="javascript:;" class="btnTypeA">확인</a>
								</p>
							</div>
						
					
					
					
					<div class="fieldBox">
						<p class="tit">추가할인
						<a href="https://www.jinair.com/ready/fareRules?directID=fareRules2" target="_blank" title="새 창 열림"><img src="../images/common/ico_info_02.png" alt="자세히 보기" class="vm"></a>
						</p>
						<select name="discount" title="추가할인 선택" onchange="fnBlockDupDisc(this, '', 'DIS1,DIS2,DIS3,DIS4,DIS5,DIS9');">
						<option value="">선택</option>
						
						
							
								
							<optgroup label="<공항세 50% 할인>" groupCd = "DIS6"/>
							
							
							<option value="DIS">1~4급 장애인 본인 또는 중증 장애인 본인</option>
							
						
							
							
							<option value="DIS56">5~6급 장애인 본인 또는 경증 장애인 본인</option>
							
						
							
							
							<option value="DISAT">1~3급 장애인 동반보호자 1명 또는 중증 장애인의 동반보호자 1명</option>
							
						
							
							
							<option value="ETC1">고엽제 피해자</option>
							
						
							
							
							<option value="ETC2">우수 숙련기술자</option>
							
						
							
							
							<option value="ETC3">숙련기술자</option>
							
						
							
							
							<option value="ETC4">대한민국명장</option>
							
						
							
							
							<option value="ETC5">전국기능경기대회입상자</option>
							
						
							
							
							<option value="ETC6">국제기능올림픽입상자</option>
							
						
							
							
							<option value="ETC7">기초생활수급대상자</option>
							
						
							
							
							<option value="NM13AT">1~3급 국가유공상이자의 동반보호자 1명</option>
							
						
							
							
							<option value="NM17">국가유공상이자 본인</option>
							
						
							
							
							<option value="NM518J">5/18 민주유공 부상자 본인</option>
							
						
						</select>
					</div>
					
				</fieldset>
				
				
				
				
				
			</div><!-- //탑승객정보 -->
			
			<ul class="caution">
				
				
					
					
						
			<li><span style="font-weight : bold">예매 후 이름 변경이 불가하오니 반드시 재확인을 부탁드리며 정보 오입력 시 탑승이 제한될 수 있습니다.</span></li>
			<li><span style="font-weight : bold">항공기 탑승 시 소지할 신분증에 한글 성명이 명기된 경우 한글 성명, 영문 성명이 명기된 경우, 영문 성명을 입력하여 주시기 바랍니다.</span></li>
			<li>이름 및 성별을 제외한 생년월일, 국적 등 정보는 마이페이지 (나의 예약)에서 수정 가능합니다.</li>
			<li>유/소아 동반 고객 및 추가할인 대상은 탑승 수속 시에 해당 증빙 서류를 지참하시기 바랍니다.</li>
			<li>신분할인 적용 요금은 다음 페이지에서 확인 가능합니다.
			<a href="https://www.jinair.com/ready/fareRules?directID=fareRules2" target="_blank" title="새 창 열림" style="border-bottom:1px solid #555;">
			(<img src="../images/common/ico_info_03.png" alt="자세히 보기" class="vm">할인조건 알아보기)
			</a>
			※ 추가 신분할인 적용 후에는 지니 쿠폰, 카드 제휴 할인 등의 중복 할인 적용이 불가합니다.
			</li>
			<li>회원아이디를 인증하시면 탑승 완료 후 나비포인트가 자동 적립됩니다. (탑승 완료 후 익일)</li>
	
					
				
				
			</ul>
			<h2 class="typeA">예매자 정보</h2>
			<div class="passengerForm">
				<fieldset class="typeB">
					<div class="fieldBox">
						<p class="tit"><em>*</em> 이메일</p>
						<input type="text" name="email"  title="이메일">
					</div>
					<div class="fieldBox">
						<p class="tit"><em>*</em> 휴대폰번호</p>
						<div class="mobileField">
						
							
							
								<span class="field">
								<select name="country" title="국가번호 선택">
									
									<option value="82"
										selected>
										한국
										(+82)
									</option>
									
									<option value="81"
										>
										일본
										(+81)
									</option>
									
									<option value="233"
										>
										가나
										(+233)
									</option>
									
									<option value="241"
										>
										가봉
										(+241)
									</option>
									
									<option value="592"
										>
										가이아나
										(+592)
									</option>
									
									<option value="220"
										>
										감비아
										(+220)
									</option>
									
									<option value="590"
										>
										과들루프
										(+590)
									</option>
									
									<option value="502"
										>
										과테말라
										(+502)
									</option>
									
									<option value="1671"
										>
										괌
										(+1671)
									</option>
									
									<option value="1473"
										>
										그레나다
										(+1473)
									</option>
									
									<option value="995"
										>
										그루지아
										(+995)
									</option>
									
									<option value="30"
										>
										그리스
										(+30)
									</option>
									
									<option value="299"
										>
										그린란드
										(+299)
									</option>
									
									<option value="224"
										>
										기니
										(+224)
									</option>
									
									<option value="245"
										>
										기니
										(+245)
									</option>
									
									<option value="594"
										>
										기아나(프)
										(+594)
									</option>
									
									<option value="264"
										>
										나미비아
										(+264)
									</option>
									
									<option value="674"
										>
										나우루
										(+674)
									</option>
									
									<option value="234"
										>
										나이지리아
										(+234)
									</option>
									
									<option value="27"
										>
										남아프리카공화국
										(+27)
									</option>
									
									<option value="31"
										>
										네덜란드
										(+31)
									</option>
									
									<option value="977"
										>
										네팔
										(+977)
									</option>
									
									<option value="47"
										>
										노르웨이
										(+47)
									</option>
									
									<option value=""
										>
										노퍽
										(+)
									</option>
									
									<option value="687"
										>
										누벨칼레도니
										(+687)
									</option>
									
									<option value="64"
										>
										뉴질랜드
										(+64)
									</option>
									
									<option value="683"
										>
										니우에
										(+683)
									</option>
									
									<option value="227"
										>
										니제르
										(+227)
									</option>
									
									<option value="505"
										>
										니카라과
										(+505)
									</option>
									
									<option value="886"
										>
										대만
										(+886)
									</option>
									
									<option value="45"
										>
										덴마크
										(+45)
									</option>
									
									<option value="1809"
										>
										도미니카공화국
										(+1809)
									</option>
									
									<option value="1767"
										>
										도미니카연방
										(+1767)
									</option>
									
									<option value="49"
										>
										독일
										(+49)
									</option>
									
									<option value="670"
										>
										동티모르
										(+670)
									</option>
									
									<option value="856"
										>
										라오스
										(+856)
									</option>
									
									<option value="371"
										>
										라트비아
										(+371)
									</option>
									
									<option value="7"
										>
										러시아
										(+7)
									</option>
									
									<option value="961"
										>
										레바논
										(+961)
									</option>
									
									<option value="266"
										>
										레소토
										(+266)
									</option>
									
									<option value="40"
										>
										루마니아
										(+40)
									</option>
									
									<option value="352"
										>
										룩셈부르크
										(+352)
									</option>
									
									<option value="250"
										>
										르완다
										(+250)
									</option>
									
									<option value="231"
										>
										리베리아
										(+231)
									</option>
									
									<option value="218"
										>
										리비아
										(+218)
									</option>
									
									<option value="370"
										>
										리투아니아
										(+370)
									</option>
									
									<option value="261"
										>
										마다가스카르
										(+261)
									</option>
									
									<option value="596"
										>
										마르티니크
										(+596)
									</option>
									
									<option value="692"
										>
										마샬제도
										(+692)
									</option>
									
									<option value="853"
										>
										마카오
										(+853)
									</option>
									
									<option value="389"
										>
										마케도니아
										(+389)
									</option>
									
									<option value="265"
										>
										말라위
										(+265)
									</option>
									
									<option value="60"
										>
										말레이시아
										(+60)
									</option>
									
									<option value="223"
										>
										말리
										(+223)
									</option>
									
									<option value="52"
										>
										멕시코
										(+52)
									</option>
									
									<option value="377"
										>
										모나코
										(+377)
									</option>
									
									<option value="212"
										>
										모로코
										(+212)
									</option>
									
									<option value="230"
										>
										모리셔스
										(+230)
									</option>
									
									<option value="222"
										>
										모리타니
										(+222)
									</option>
									
									<option value="258"
										>
										모잠비크
										(+258)
									</option>
									
									<option value="382"
										>
										몬테네그로
										(+382)
									</option>
									
									<option value="1664"
										>
										몬트세라트
										(+1664)
									</option>
									
									<option value="373"
										>
										몰도바
										(+373)
									</option>
									
									<option value="960"
										>
										몰디브
										(+960)
									</option>
									
									<option value="356"
										>
										몰타
										(+356)
									</option>
									
									<option value="976"
										>
										몽골
										(+976)
									</option>
									
									<option value="1"
										>
										미국
										(+1)
									</option>
									
									<option value="95"
										>
										미얀마
										(+95)
									</option>
									
									<option value="691"
										>
										미크로네시아연방
										(+691)
									</option>
									
									<option value="678"
										>
										바누아투
										(+678)
									</option>
									
									<option value="973"
										>
										바레인
										(+973)
									</option>
									
									<option value="1246"
										>
										바베이도스
										(+1246)
									</option>
									
									<option value="379"
										>
										바티칸
										(+379)
									</option>
									
									<option value="1242"
										>
										바하마
										(+1242)
									</option>
									
									<option value="880"
										>
										방글라데시
										(+880)
									</option>
									
									<option value="1441"
										>
										버뮤다
										(+1441)
									</option>
									
									<option value="1340"
										>
										버진제도(미)
										(+1340)
									</option>
									
									<option value="1284"
										>
										버진제도(영)
										(+1284)
									</option>
									
									<option value="58"
										>
										베네수엘라
										(+58)
									</option>
									
									<option value="229"
										>
										베넹
										(+229)
									</option>
									
									<option value="84"
										>
										베트남
										(+84)
									</option>
									
									<option value="32"
										>
										벨기에
										(+32)
									</option>
									
									<option value="375"
										>
										벨로루시
										(+375)
									</option>
									
									<option value="501"
										>
										벨리즈
										(+501)
									</option>
									
									<option value="387"
										>
										보스니아
										(+387)
									</option>
									
									<option value="267"
										>
										보츠와나
										(+267)
									</option>
									
									<option value="591"
										>
										볼리비아
										(+591)
									</option>
									
									<option value="257"
										>
										부룬디
										(+257)
									</option>
									
									<option value="226"
										>
										부르키나파소
										(+226)
									</option>
									
									<option value="975"
										>
										부탄
										(+975)
									</option>
									
									<option value="359"
										>
										불가리아
										(+359)
									</option>
									
									<option value="55"
										>
										브라질
										(+55)
									</option>
									
									<option value="673"
										>
										브루나이
										(+673)
									</option>
									
									<option value="685"
										>
										사모아
										(+685)
									</option>
									
									<option value="1684"
										>
										사모아(미)
										(+1684)
									</option>
									
									<option value="966"
										>
										사우디아라비아
										(+966)
									</option>
									
									<option value="378"
										>
										산마리노
										(+378)
									</option>
									
									<option value="239"
										>
										상투메 프린시페
										(+239)
									</option>
									
									<option value="221"
										>
										세네갈
										(+221)
									</option>
									
									<option value="381"
										>
										세르비아
										(+381)
									</option>
									
									<option value="248"
										>
										세이셜
										(+248)
									</option>
									
									<option value="1758"
										>
										세인트루시아
										(+1758)
									</option>
									
									<option value="1784"
										>
										세인트빈센트 그레나
										(+1784)
									</option>
									
									<option value="1869"
										>
										세인트키츠 네비스
										(+1869)
									</option>
									
									<option value="290"
										>
										세인트헬레나
										(+290)
									</option>
									
									<option value="252"
										>
										소말리아
										(+252)
									</option>
									
									<option value="677"
										>
										솔로몬제도
										(+677)
									</option>
									
									<option value="249"
										>
										수단
										(+249)
									</option>
									
									<option value="597"
										>
										수리남
										(+597)
									</option>
									
									<option value="94"
										>
										스리랑카
										(+94)
									</option>
									
									<option value="268"
										>
										스와질랜드
										(+268)
									</option>
									
									<option value="46"
										>
										스웨덴
										(+46)
									</option>
									
									<option value="41"
										>
										스위스
										(+41)
									</option>
									
									<option value="34"
										>
										스페인
										(+34)
									</option>
									
									<option value="421"
										>
										슬로바키아
										(+421)
									</option>
									
									<option value="386"
										>
										슬로베니아
										(+386)
									</option>
									
									<option value="963"
										>
										시리아
										(+963)
									</option>
									
									<option value="232"
										>
										시에라리온
										(+232)
									</option>
									
									<option value="65"
										>
										싱가폴
										(+65)
									</option>
									
									<option value="971"
										>
										아랍에미리트
										(+971)
									</option>
									
									<option value="297"
										>
										아루바
										(+297)
									</option>
									
									<option value="374"
										>
										아르메니아
										(+374)
									</option>
									
									<option value="54"
										>
										아르헨티나
										(+54)
									</option>
									
									<option value="354"
										>
										아이슬랜드
										(+354)
									</option>
									
									<option value="509"
										>
										아이티
										(+509)
									</option>
									
									<option value="353"
										>
										아일랜드
										(+353)
									</option>
									
									<option value="994"
										>
										아제르바이잔
										(+994)
									</option>
									
									<option value="93"
										>
										아프가니스탄
										(+93)
									</option>
									
									<option value="376"
										>
										안도라
										(+376)
									</option>
									
									<option value="599"
										>
										안틸레스(네덜란드)
										(+599)
									</option>
									
									<option value="355"
										>
										알바니아
										(+355)
									</option>
									
									<option value="213"
										>
										알제리
										(+213)
									</option>
									
									<option value="244"
										>
										앙골라
										(+244)
									</option>
									
									<option value="372"
										>
										에스토니아
										(+372)
									</option>
									
									<option value="593"
										>
										에쿠아도르
										(+593)
									</option>
									
									<option value="251"
										>
										에티오피아
										(+251)
									</option>
									
									<option value="1268"
										>
										엔티가 바부다
										(+1268)
									</option>
									
									<option value="503"
										>
										엘살바도르
										(+503)
									</option>
									
									<option value="1264"
										>
										엥귈라
										(+1264)
									</option>
									
									<option value="44"
										>
										영국
										(+44)
									</option>
									
									<option value="246"
										>
										영국령인도양식민지 
										(+246)
									</option>
									
									<option value="967"
										>
										예멘
										(+967)
									</option>
									
									<option value="968"
										>
										오만
										(+968)
									</option>
									
									<option value="43"
										>
										오스트리아
										(+43)
									</option>
									
									<option value="504"
										>
										온두라스
										(+504)
									</option>
									
									<option value="962"
										>
										요르단
										(+962)
									</option>
									
									<option value="256"
										>
										우간다
										(+256)
									</option>
									
									<option value="598"
										>
										우루과이
										(+598)
									</option>
									
									<option value="998"
										>
										우즈베키스탄
										(+998)
									</option>
									
									<option value="380"
										>
										우크라이나
										(+380)
									</option>
									
									<option value="681"
										>
										웰리스 푸투나
										(+681)
									</option>
									
									<option value="381"
										>
										유고슬라비아
										(+381)
									</option>
									
									<option value="964"
										>
										이라크
										(+964)
									</option>
									
									<option value="98"
										>
										이란
										(+98)
									</option>
									
									<option value="972"
										>
										이스라엘
										(+972)
									</option>
									
									<option value="20"
										>
										이집트
										(+20)
									</option>
									
									<option value="39"
										>
										이탈리아
										(+39)
									</option>
									
									<option value="91"
										>
										인도
										(+91)
									</option>
									
									<option value="62"
										>
										인도네시아
										(+62)
									</option>
									
									<option value="1876"
										>
										자메이카
										(+1876)
									</option>
									
									<option value="243"
										>
										자이르
										(+243)
									</option>
									
									<option value="260"
										>
										잠비아
										(+260)
									</option>
									
									<option value="240"
										>
										적도기니
										(+240)
									</option>
									
									<option value="86"
										>
										중국
										(+86)
									</option>
									
									<option value="236"
										>
										중앙아프리카공화국
										(+236)
									</option>
									
									<option value="253"
										>
										지부티
										(+253)
									</option>
									
									<option value="350"
										>
										지브랄타
										(+350)
									</option>
									
									<option value="263"
										>
										짐바브웨
										(+263)
									</option>
									
									<option value="235"
										>
										차드
										(+235)
									</option>
									
									<option value="420"
										>
										체코
										(+420)
									</option>
									
									<option value="56"
										>
										칠레
										(+56)
									</option>
									
									<option value="237"
										>
										카메룬
										(+237)
									</option>
									
									<option value="238"
										>
										카보베르데
										(+238)
									</option>
									
									<option value="7"
										>
										카자흐스탄
										(+7)
									</option>
									
									<option value="974"
										>
										카타르
										(+974)
									</option>
									
									<option value="855"
										>
										캄보디아
										(+855)
									</option>
									
									<option value="1"
										>
										캐나다
										(+1)
									</option>
									
									<option value="254"
										>
										케냐
										(+254)
									</option>
									
									<option value="1345"
										>
										케이맨제도
										(+1345)
									</option>
									
									<option value="269"
										>
										코모로
										(+269)
									</option>
									
									<option value="506"
										>
										코스타리카
										(+506)
									</option>
									
									<option value="61"
										>
										코코스킬링제도
										(+61)
									</option>
									
									<option value="225"
										>
										코트디부와르
										(+225)
									</option>
									
									<option value="57"
										>
										콜롬비아
										(+57)
									</option>
									
									<option value="242"
										>
										콩고
										(+242)
									</option>
									
									<option value="53"
										>
										쿠바
										(+53)
									</option>
									
									<option value="965"
										>
										쿠웨이트
										(+965)
									</option>
									
									<option value="682"
										>
										쿡제도
										(+682)
									</option>
									
									<option value="385"
										>
										크로아티아
										(+385)
									</option>
									
									<option value="996"
										>
										키르키스스탄
										(+996)
									</option>
									
									<option value="686"
										>
										키리바시
										(+686)
									</option>
									
									<option value="357"
										>
										키프로스
										(+357)
									</option>
									
									<option value="992"
										>
										타지키스탄
										(+992)
									</option>
									
									<option value="255"
										>
										탄자니아
										(+255)
									</option>
									
									<option value="66"
										>
										태국
										(+66)
									</option>
									
									<option value="1649"
										>
										터크스 케이커스제도
										(+1649)
									</option>
									
									<option value="90"
										>
										터키
										(+90)
									</option>
									
									<option value="228"
										>
										토고
										(+228)
									</option>
									
									<option value="676"
										>
										통가
										(+676)
									</option>
									
									<option value="993"
										>
										투르크메니스탄
										(+993)
									</option>
									
									<option value="688"
										>
										투발루
										(+688)
									</option>
									
									<option value="216"
										>
										튀니지
										(+216)
									</option>
									
									<option value="1868"
										>
										트리니다드토바고
										(+1868)
									</option>
									
									<option value="507"
										>
										파나마
										(+507)
									</option>
									
									<option value="595"
										>
										파라과이
										(+595)
									</option>
									
									<option value="298"
										>
										파로제도
										(+298)
									</option>
									
									<option value="92"
										>
										파키스탄
										(+92)
									</option>
									
									<option value="675"
										>
										파푸아뉴기니
										(+675)
									</option>
									
									<option value="680"
										>
										팔라우
										(+680)
									</option>
									
									<option value="970"
										>
										팔레스타인
										(+970)
									</option>
									
									<option value="51"
										>
										페루
										(+51)
									</option>
									
									<option value="351"
										>
										포르투갈
										(+351)
									</option>
									
									<option value="500"
										>
										포클랜드
										(+500)
									</option>
									
									<option value="48"
										>
										폴란드
										(+48)
									</option>
									
									<option value="689"
										>
										폴리네시아(프)
										(+689)
									</option>
									
									<option value="1787"
										>
										푸에르토리코
										(+1787)
									</option>
									
									<option value="33"
										>
										프랑스
										(+33)
									</option>
									
									<option value="679"
										>
										피지
										(+679)
									</option>
									
									<option value="358"
										>
										핀란드
										(+358)
									</option>
									
									<option value="63"
										>
										필리핀
										(+63)
									</option>
									
									<option value="36"
										>
										헝가리
										(+36)
									</option>
									
									<option value="61"
										>
										호주
										(+61)
									</option>
									
									<option value="852"
										>
										홍콩
										(+852)
									</option>
									
								</select>
								</span>
							
							
							<input type="text" name="phone" title="휴대폰번호">
						</div>
						
			<p class="text">- 국가번호 선택한 후 휴대폰번호 전체를 입력해 주세요. (예. 한국의 경우, 01011112222)</p>
			<p class="text">- 항공기 운항정보(스케줄 변경, 결항 등) 및 구매정보가 알림톡 또는 SMS 로 발송되며, 이메일로 e-티켓이 발송됩니다.</p>
	
					</div>
				</fieldset>
			</div><!-- //예매자정보 -->
		</form>
		<div class="btnArea">
			<a href="javascript:;" id="btnNextExtras" class="btnTypeA sizeL" data-click-area="여정-3_탑승객정보" data-click-name="다음">다음</a>
		</div>
		
		
		






<div id="totalSrmy">


	<div class="price">
		<a href="#" onclick="showMySrmy(); return false" class="btn transition">상세보기</a>
		
			
			
				<p><span class="tit"><em>항공운임 등 총액</em><br>(<text currency>KRW</text>)</span><strong id="totalCharge">0</strong></p>
			
		
	</div>

	
	
		<p class="btnNext">
			
				
				
					<a href="javascript:void(0);" onclick="return nextStep(this);" data-click-area="여정-3_탑승객정보 " data-click-name="다음" class="btnTypeA">
				
				
			
			다음
			</a>
		</p><!-- [dev] 활성화버튼 btnTypeA -->
	


	<div class="mySrmy"><div class="wrap">
		<p class="close"><a href="#" onclick="showMySrmy(); return false">닫기</a></p>
		<div class="clearfix" id="basketSegment">
		</div><!-- //가는여정,오는여정 -->
		<div class="content" id="fareInfo">
			<h2>운임정보 <span class="unit">(통화 : <text currency>KRW</text>)</span></h2>
			<div class="scr">
				<dl>
					<dt>항공운임</dt><dd id="flightTaxSum">0</dd>
					<dt>유류할증료</dt><dd id="fuelTaxSum">0</dd>
					<dt>세금</dt><dd id="basicTaxSum">0</dd>
				</dl>
				<p class="btn"><a href="#" onclick="showSrmyDetail(this); return false">더보기</a></p>
				<div class="detail" id="basketChargeByPax" >					
				</div>
			</div>
		</div>
		<div class="content">
			<h2>부가서비스 신청 내역 <span class="unit">(통화 : <text currency>KRW</text>)</span></h2>
			<div class="scr">
				<dl id="basketSSRSummary">
				</dl>
				<p class="btn"><a href="#" onclick="showSrmyDetail(this); return false">더보기</a></p>
				<!-- 170830 start -->
				<div class="detail" id="basketSSR">

				</div>
				<!-- //170830 end -->
			</div>
		</div>
	</div></div><!-- //mySrmy -->
</div><!-- //totalSrmy -->





<script id="basketSegmentTmp" type="text/x-jsrender">
<div class="trip">
	{{if flightList.length > 1}}
		<h2><strong>여정{{:segmentSEQ}}</strong>{{for flightList}}{{if #index > 0}}/{{/if}}{{:#data}}{{/for}}</h2>
		<div class="flightDetail">
			경유{{:flightList.length - 1}} <a href="#" onclick="showFlight(this); return false"><img src="//images.jinair.com//images/common/ico_question.png" alt="항공편자세히보기"></a>
			<div class="popFlight">
				<p class="close"><a href="#" onclick="hideFlight(); return false"><span>닫기</span></a></p>
				<h3>항공편 안내</h3>
				{{for flightList}}
					&lt;구간{{getSegmentInfo:'flight' #data 0 'segmentSEQ'}}&gt;<br>
					편명 : {{:#data}}<br>
					출발 : {{getSegmentInfo:'flight' #data 0 'departureDateTimeString'}} {{getSegmentInfo:'flight' #data 0 'boardPointName'}}<br>
					도착 : {{getSegmentInfo:'flight' #data 0 'arrivalTimeString'}} {{getSegmentInfo:'flight' #data 0 'offPointName'}}<br>
					비행시간 : {{getSegmentInfo:'flight' #data 0 'journeyTime'}}<br>
					{{if #index == 0}}
					대기시간 : {{:#parent.parent.parent.data.waitingTime}}<br>
					{{else}}
					총 소요 시간 : {{:#parent.parent.parent.data.totalTime}}<br>
					{{/if}}
					A/C 타입 : {{getSegmentInfo:'flight' #data 0 'aircraftType'}}<br><br>
				{{/for}}									
			</div>				
			</div><!-- //flightDetail -->
		<div class="clearfix">		
			<p><strong>[출발] {{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID 0 'boardPointName'}}</strong><span>{{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID 0 'departureDateTimeString'}}</span></p>
			<p><strong>[도착] {{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID flightList.length - 1 'offPointName'}}</strong><span>{{getSegmentInfo:'flightSegmentGroupID' flightSegmentGroupID flightList.length - 1 'arrivalTimeString'}}</span></p>
		</div>
	{{else}}
		<h2><strong>여정{{:segmentSEQ}}</strong>{{:flight}}</h2>
		<div class="clearfix">
			<p><strong>[출발] {{:boardPointName}}</strong><span>{{:departureDateTimeString}}</span></p>
			<p><strong>[도착] {{:offPointName}}</strong><span>{{:arrivalTimeString}}</span></p>
		</div>
	{{/if}}
</div>
</script>

<script id="basketChargeByPaxTmp" type="text/x-jsrender">
<h3>
	{{if #index == 0}}
		항공운임
	{{else #index == 1}}
		유류할증료
	{{else #index == 2}}
		세금
	{{/if}}
	<span class="cost"><em class="fs" currency>KRW</em> {{getCurrenctyFormat:totalTax}}</span></h3>

{{if #index == 0 || #index == 1}}
{{for taxList}}
	<h4>구간
		{{for segmentList}}{{if #index > 0}}/{{/if}}{{getSegmentSeq:#data}}{{/for}}
		:{{for segmentList}}
			{{if #index > 0}} / {{/if}}{{getSegmentDataBySegmentId:#data 'boardPoint'}}-{{getSegmentDataBySegmentId:#data 'offPoint'}}
		{{/for}}
	</h4>
	<dl class="typeB num2 tax">
		{{for ssrFareList}}
			<dt>{{getPaxName:guestId}}</dt><dd>{{getCurrenctyFormat:amount}}</dd>
		{{/for}}
	</dl>	
{{/for}}
{{/if}}

{{if #index == 2}}
{{for taxList}}
	<h4>구간
		{{for segmentList}}{{if #index > 0}}/{{/if}}{{getSegmentSeq:#data}}{{/for}}
		:{{for segmentList}}
			{{if #index > 0}} / {{/if}}{{getSegmentDataBySegmentId:#data 'boardPoint'}}-{{getSegmentDataBySegmentId:#data 'offPoint'}}
		{{/for}}
	</h4>
	<dl class="typeB num2 tax">
		{{for ssrFareList}}
			<dt>{{getPaxName:guestId}}</dt>
{{if (amount > 0) }}
			<!-- 자세히 보기 버튼 추가 -->
			<dd class="btn_detail">
				<a href="#tax{{:guestId}}{{:fareComponentId}}" onclick="showTax(this); return false">자세히 보기</a>
			</dd>
			<!-- //자세히 보기 버튼 추가 -->
{{/if}}
			<dd>{{getCurrenctyFormat:amount}}</dd>
		<!-- 상세정보 -->
			<dd id="tax{{:guestId}}{{:fareComponentId}}" class="detail_info">
				<div class="tax_list">
				<table>
					<colgroup>
					<col style="width:10%;">
					<col>
					<col style="width:25%;">
					</colgroup>
					<tbody>
						{{for taxDetailList}}
						<tr>
							<td>{{:iataTaxCode}}</td>
							<td class="txt">{{:taxName}}</td>
							<td>{{getCurrenctyFormat:amount}}</td>
						</tr>
						{{/for}}
					</tbody>
				</table>
				</div>
			</dd>
		<!-- //상세정보 -->
		{{/for}}
	</dl>	
{{/for}}
{{/if}}

{{if #index == 2}}
<p class="text">* 국제선 한국 출발 세금(BP)에는 국제여객공항이용료, 출국납부금, 국제빈곤퇴치기여금이 포함되어 있습니다.</p>
{{/if}}
</script>

<script id="basketSSRTmp" type="text/x-jsrender">
<h3>{{:ssrCodeName}}<span class="cost"><em class="fs" currency>KRW</em> {{getAmountSum:segmentSSRFareList}}</span></h3>
<dl class="typeB">
	{{for segmentSSRFareList}}
		<h4>구간
			{{for segmentList}}{{if #index > 0}}/{{/if}}{{getSegmentSeq:#data}}{{/for}}
			:
			{{for segmentList}}
				{{if #index > 0}} / {{/if}}{{getSegmentDataBySegmentId:#data 'boardPoint'}}-{{getSegmentDataBySegmentId:#data 'offPoint'}}
			{{/for}}
		</h4>
			<dl class="typeB">
				{{for ssrFareList}}
					<dt>{{getPaxName:guestId}}</dt><dd>{{:ssrDetail}}{{if ssrSubDetail}}<span class="fs"> ({{:ssrSubDetail}})</span>{{/if}}</dd><dd>{{getCurrenctyFormat:amount}}</dd>
				{{/for}}
			</dl>
	{{/for}}	
</dl>
</script>

<script id="basketSSRSummaryTmp" type="text/x-jsrender">
		<dt>{{:ssrCodeName}}</dt><dd>{{getAmountSum:segmentSSRFareList}}</dd>
</script>

<script type="text/javascript" src="../js/hom/lj/front/booking/totalSrmy.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	try {
		confirmPrice = JSON.parse('');
		setBasketTotalSrmy();	
	}catch(e){
		// nothing
	} 	
	var channel = '';
	
	if(channel == "OEC") {
		$("#fareInfo").hide();
	}
	
});
</script>
	</div>
	
	<script type="text/javascript" src="../js/hom/lj/front/booking/registerPassenger.js"></script>	
	<script type="text/javascript" src="../js/hom/lj/front/booking/common.js"></script>
	<script type="text/javascript">
		var sid = ('prd' == 'prd') ? 'service_1' : 'service_2';
		var aid = ('prd' == 'prd') ? 'pax' : 'stg_pax';
		var loginNationality;
		var foLangCd;
		$(document).ready(function() {
			//var globalLangCd =  'KOR';
			/*다국어처리*/
			$.i18n.properties({
				name	: ['messages', 'code','ibeBooking', 'ibeContentsPassenger'],
				path	: '../i18n/messages/',
				mode	: 'map',
				language: 'ko_KR',
			    langCd	: 'KOR'
			});
			
			loginNationality = 'KOR';
			foLangCd = 'KOR';
			
			
		});
	</script>
	
	<form id="sendForm" name="sendForm" method="post">
		<input type="hidden" name="_csrf" id="_csrf" value="71a56a38-0a41-49e8-8d47-918e891aeca0" />
		<input type="hidden" id="hidSendInfo" name="sendInfo"/>
		<input type="hidden" id="hidPnrNumber" name="pnrNumber"/>
		<input type="hidden" id="hidDomIntType" value="DOM"/>
		<input type="hidden" id="globalLangCd" value="KOR">
	</form>
	

        <div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div>

        





	


	

<div id="footer">
	<div class="head">
		<div class="wrap">
			<div class="quickMenu">
				<h2>회사안내</h2>
				<ul>
					<li><a href="https://www.jinair.com/company/announce/announceList" data-click-area="Footer-회사안내" data-click-name="공지사항">공지사항</a></li>
					
						<li><a href="https://jinair.career.co.kr/jobs/" target="_blank" title="새창열림" data-click-area="Footer-회사안내" data-click-name="채용정보">채용정보</a></li>
					
					<li><a href="https://www.jinair.com/company/ceo" data-click-area="Footer-회사안내" data-click-name="ceo인사말">CEO인사말</a></li>
					<li><a href="https://www.jinair.com/company/company" data-click-area="Footer-회사안내" data-click-name="기업개요">기업개요</a></li>
					 <!-- 2020.03.26 국문 && 영문 이 아니면 비노출, 기업지배구조 헌장 > 기업지배구조 명칭 변경 -->
						<li><a href="https://www.jinair.com/company/governance" data-click-area="Footer-회사안내" data-click-name="기업지배구조">기업지배구조</a></li>
					
					 <!-- 2020.03.26 국문 && 영문 이 아니면 비노출, 기업지배구조 헌장 > 기업지배구조 명칭 변경 --><!-- 2021.12.27 영문 윤리경영 비표출 -->
						<li><a href="https://www.jinair.com/company/ethics" data-click-area="Footer-회사안내" data-click-name="윤리경영">윤리경영</a></li>
					
					<li><a href="https://www.jinair.com/company/ci" data-click-area="Footer-회사안내" data-click-name="ci소개">CI소개</a></li>
					<li><a href="https://www.jinair.com/company/aircraft" data-click-area="Footer-회사안내" data-click-name="항공기소개">항공기 소개</a></li>
					
						<li><a href="https://www.jinair.com/company/invest/stock" data-click-area="Footer-회사안내" data-click-name="투자정보">투자정보</a></li>
					
					<li><a href="https://www.jinair.com/company/freight" data-click-area="Footer-회사안내" data-click-name="화물운송">화물운송</a></li>
					
						<li><a href="https://www.jinair.com/company/center/newsList" data-click-area="Footer-회사안내" data-click-name="홍보센터">홍보센터</a></li>
					
					
				</ul>
			</div>
			<div class="quickMenu">
				<h2>약관 및 안내</h2>
				<ul>
					<li><a href="https://www.jinair.com/policy/privacy/latest" ><strong data-click-area="Footer-약관및안내" data-click-name="개인정보 처리방침">개인정보 처리방침</strong></a></li>
					<li><a href="https://www.jinair.com/policy/homepageuse/latest" data-click-area="Footer-약관및안내" data-click-name="홈페이지 이용약관">홈페이지 이용약관</a></li>
					<li class="shipAgree"><a href="#" onclick="showSubLayer('.shipAgree'); return false">여객운송약관 및 기타 고지사항</a>
						<ul class="subLayer">
							
								
									<li>
										<a href="javascript://" onclick="eFormDownload('국내여객운송약관.pdf');" title="국내여객운송약관" data-click-area="Footer-약관및안내" data-click-name="국내여객운송약관 다운로드">국내여객운송약관</a>
									</li>
								
								
							

							
							
								
									<li>
										<a href="javascript://" onclick="eFormDownload('국제여객운송약관_KOR.pdf');" title="국제여객운송약관" data-click-area="Footer-약관및안내" data-click-name="국제여객운송약관 다운로드">국제여객운송약관</a>
									</li>
								
								
								
							

							<!-- 항공안전투자공시 -->
							
									<li>
										<a href="javascript://" onclick="eFormDownload('항공안전투자공시.pdf');" title="국내여객운송약관" data-click-area="Footer-약관및안내" data-click-name="항공안전투자공시">항공안전투자공시</a>
									</li>
							
						</ul>
					</li>
						
							
								<li>
									<a href="javascript://" onclick="eFormDownload('진에어 항공교통이용자 서비스 계획.pdf');" title="항공교통이용자 서비스 계획" data-click-area="Footer-약관및안내" data-click-name="항공교통이용자 서비스 계획">항공교통이용자 서비스 계획</a>
								</li>
							
							
							
						
					
						<li>
							<a href="javascript://" onclick="eFormDownload('피해구제 신청서.pdf');" title="피해구제계획" data-click-area="Footer-약관및안내" data-click-name="피해구제계획">피해구제계획</a>
						</li>
					
					
					
					<li><a href="/customer/eTicket" data-click-area="Footer-약관및안내" data-click-name="e-티켓 확인증 법적 고지문">e-티켓 확인증 법적 고지문</a></li>
					
					<li><a href="javascript://" onclick="showPopupLayer('/popup/sitemap'); return false" data-click-area="Footer-약관및안내" data-click-name="사이트맵">사이트맵</a></li>
				</ul>
			</div>
			<div class="quickMenu">
				<h2>고객서비스</h2>
				<ul>
					<li><a href="https://www.jinair.com/customer/faq" data-click-area="Footer-고객서비스" data-click-name="자주 묻는 질문(FAQ)">자주 묻는 질문(FAQ)</a></li>
					<li><a href="https://www.jinair.com/qna/addQna" data-click-area="Footer-고객서비스" data-click-name="고객의 말씀(Q&A)">고객의 말씀(Q&amp;A)</a></li>
					
					
						<li><a href="https://www.jinair.com/ready/baggage?directID=baggage4" data-click-area="Footer-고객서비스" data-click-name="기내 유실물 찾기">기내 유실물 찾기</a></li>
					
					
				</ul>
			</div>
		</div>
	</div>
	<div class="content"><div class="wrap">
		
			<div class="btn">
				<ul class="sns">
					<li class="twitter"><a href="http://twitter.com/JinAir_LJ" target="_blank" title="새창열림" data-click-area="Footer-SNS" data-click-name="트위터">트위터 바로가기</a></li>
					<li class="facebook"><a href="http://www.facebook.com/JinAir" target="_blank" title="새창열림" data-click-area="Footer-SNS" data-click-name="페이스북">페이스북 바로가기</a></li>
					<li class="youtube"><a href="http://www.youtube.com/user/JinAir0717?feature=watch" target="_blank" title="새창열림" data-click-area="Footer-SNS" data-click-name="유튜브">유튜브 바로가기</a></li>
					<li class="insta"><a href="https://www.instagram.com/jinair_LJ/" target="_blank" title="새창열림" data-click-area="Footer-SNS" data-click-name="인스타그램">인스타그램 바로가기</a></li>
					<li class="blog"><a href="https://blog.naver.com/jinair_official" target="_blank" title="새창열림" data-click-area="Footer-SNS" data-click-name="블로그">블로그 바로가기</a></li>
				</ul>
				
					<div class="app">
						<h2>APP 다운로드</h2>
						<ul>
							<li class="ios"><a href="https://itunes.apple.com/kr/app/id435624636?mt=8&ls=1" target="_blank" data-click-area="Footer-APP 다운로드" data-click-name="ios">iOS</a></li>
							<li class="android"><a href="https://play.google.com/store/apps/details?id=com.jinair.android" target="_blank" data-click-area="Footer-APP 다운로드" data-click-name="google">Google play</a></li>
							
								<li class="agent"><a href="https://agent.jinair.com" target="_blank" title="새창 열림" data-click-area="Footer" data-click-name="대리점사이트 바로가기">대리점 사이트 바로가기</a></li>
							
						</ul>
					</div>
				
			</div>
		
		<div class="customer">
			<p class="fontTypeB">
				고객서비스센터
				
					
					
					
					
						<strong><a href="tel:1600-6200">1600-6200</a>, <a href="tel:02-6099-1200">02-6099-1200</a></strong>
					
				
			</p>
			<p>업무시간 <span>오전 08:00 ~ 오후 19:00</span></p>
		</div>
		<div class="info">
			<p>㈜진에어</p>
			<p>대표이사 최정호</p>
			<p>사업자등록번호 121-81-89086</p>
			<p>통신판매업 신고번호 : 제2008-서울 강서-0408</p>
			<address>주소 : 서울시 강서구 공항대로 453</address>
			<p>개인정보보호책임자 : 이광</p>
		</div>
		<p class="copy">Copyright &copy; JIN AIR. All Rights Reserved.</p>
		<div class="newsletter">
			<h2>뉴스레터 신청</h2>
			<input type="text" name="emAdrNewsletter" id="emAdrNewsletter" placeholder="Email Address" title="이메일">
			<a href="javascript://" id="btnAddNewsLetter" data-click-area="Footer-뉴스레터신청" data-click-name="신청버튼">신청</a>
		</div>
		<div class="marks">
			<a href="javascript://" onclick="eFormDownload('ISMS 인증서.pdf');" title="새창열림" data-click-area="Footer-ISMS" data-click-name="ISMS"><img src="//images.jinair.com/images/layout/ico_isms.png" alt="정보보호관리체계(ISMS)인증서"></a>
		</div>
	</div></div>
</div>

<script type="text/javascript">
	$(function() {
		$('#btnAddNewsLetter').click(function() {
			var emAdr = '';
			if($('#emAdrNewsletter').val() != 'Email Address'){
				emAdr = $('#emAdrNewsletter').val();
			}
			showPopupLayer('/popup/newsLetter?emAdr='+emAdr);
			$('#emAdrNewsletter').val('');
		});
	});
	if ($('#footer .content .wrap .btn').size() > 0) {
		$('#footer').addClass('main');
	} else {
		$('#footer').addClass('sub');
	}
</script>















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
<script type="text/javascript"  src="../popup/WMyOvNoqyw163nTlvdsw-ykbXPU/wOpYtSkD1kua/ZHE1PQ/UV/YqCUUFVzg"></script></body>


</html>