<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>












<!DOCTYPE html>
<html lang='ko' default='ko'>
<head>
	

    
    
        
        
            
        
    
    <title>부가 서비스 | Fly, better fly_Jin Air</title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="_csrf" content="3a372de4-be32-45d9-ba45-289cded10851" />
    <meta name="_csrf_header" content="X-CSRF-TOKEN" />

    <link rel="stylesheet" href="//images.jinair.com/css/default.css?"/>
    <link rel="stylesheet" href="//images.jinair.com/css/common.css?"/>

    
        
            
            
                <link rel="stylesheet" href="//images.jinair.com/css/font.css?"/>
            
        
    
    <link rel="stylesheet" href="//images.jinair.com/css/layout.css?"/>
    <link rel="stylesheet" href="//images.jinair.com/css/booking.css?"/>

    <link rel="stylesheet" href="//images.jinair.com/css/tablet.css?" media="all and (max-width:1024px)"/>
    <link rel="stylesheet" href="//images.jinair.com/css/mobile.css?" media="all and (max-width:640px)"/>

    

    

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
			csrfToken: '3a372de4-be32-45d9-ba45-289cded10851',
			isMobile: false,
			isApp: false,
			isLoggedIn: true,
			login: {
				isLoggedIn: true,
				type: 'normal'
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

    

<!-- 
<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','../js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!21229@275:1642225438587'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>
 -->

    <script type="text/javascript" src="../js/hom/pub/front/jquery-1.10.2.min.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.min.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.easing.1.3.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.cycle.all.min.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.mousewheel.min.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/swiper.min.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/iscroll.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-efuSlider.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ieSlide.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery.plugin.js?"></script>

    <script type="text/javascript" src="../js/hom/lib/front/netfunnel.js?"></script>
    <script type="text/javascript" src="../js/hom/lib/front/NetFunnel_Skin.js?"></script>

    <script type="text/javascript" src="../js/hom/lib/front/xml2json.min.js?"></script>
    <script type="text/javascript" src="../js/hom/lib/front/jquery.i18n.xml.js?"></script>
    <script type="text/javascript" src="../js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=3a372de4-be32-45d9-ba45-289cded10851"></script>
    <script type="text/javascript" src="../js/hom/lj/front/booking/common.js?_=3a372de4-be32-45d9-ba45-289cded10851"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/common.js?"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/common.pages.js?"></script>
    <script type="text/javascript" src="../js/hom/lj/front/common/chatbot.js?"></script>

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
    <link rel="stylesheet" href="//images.jinair.com/css/content.ie9.css?"/>
    <![endif]-->
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="//images.jinair.com/css/content.ie8.css?"/>
    <script type="text/javascript" src="../js/hom/pub/front/respond.min.js?"></script>
    <script type="text/javascript" src="../js/hom/pub/front/jquery-ui.ie8.js?"></script>
    <![endif]-->
    
	
	<script type="text/javascript" src="../js/hom/lib/front/jsrender.min.js"></script>
		<script type="text/javascript">
		$(document).ready(function() {
			//var globalLangCd =  'KOR';
			/*다국어처리*/
			$.i18n.properties({
				name	: ['messages', 'code','ibeBooking','flight'],
				path	: '../i18n/messages/',
				mode	: 'map',
				language: 'ko_KR',
			    langCd	: 'KOR'
			});
		});
	</script>

</head>

<body>
<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>

    <div id="wrapper">
        
        






<div id="skipNav">
	<a href="#container">본문 바로가기</a>
	<a href="#gnb">메뉴 바로가기</a>
</div>





<div id="header" class="">
	
	<div class="topArea">

		
		<div class="logo"><a href="/booking/index" data-click-area="head-Logo" data-click-name="Jinair">JINAIR</a></div>

		
		<div class="global">
			<ul class="util">
				
				<li id="login-button-area" data-title-login="로그인" data-title-logout="로그아웃">
					
						<a href="/login/logout" data-click-area="Gnb" data-click-name="로그아웃">로그아웃</a>
					
					
				</li>

				
					<li>
						<a href="/mypage/getReservationList" data-click-area="Gnb" data-click-name="마이페이지" data-check-permission="true">마이페이지</a>
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
							<a href="/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약">항공권 예약</a>
							<ul>
								<li><a href="/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약_예약">예약</a></li>
								
									<li><a href="/promotion/nowMoment" data-click-area="Gnb-예약" data-click-name="항공권예약_최저가항공권">최저가 항공권</a></li>
								
							</ul>
						</li>
						<li>
							<a href="/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약" data-check-permission="true">나의 예약</a>
							<ul>
								<li><a href="/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="Gnb-예약" data-click-name="나의예약_예약조회/변경/취소" data-check-permission="true">예약 조회/변경/취소</a></li>
								<li><a href="/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="Gnb-예약" data-click-name="나의예약_부가서비스신청/취소" data-check-permission="true">부가서비스 신청/취소</a></li>
								<li><a href="/checkin/checkinList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="06" data-click-area="Gnb-예약" data-click-name="나의예약_웹/모바일체크인" data-check-permission="true">웹/모바일 체크인</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/flight" data-click-area="Gnb-예약" data-click-name="운항정보">운항 정보</a>
							<ul>
								<li><a href="/ready/flight?directID=flightCont01" data-click-area="Gnb-예약" data-click-name="운항정보_스케줄 조회">스케줄 조회</a></li>
								<li><a href="/ready/flight?directID=flightCont02" data-click-area="Gnb-예약" data-click-name="운항정보_출도착안내">출도착 안내</a></li>
								<li><a href="/ready/flight?directID=flightCont03" data-click-area="Gnb-예약" data-click-name="운항정보_취항노선안내">취항 노선 안내</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/fareRules" data-click-area="Gnb-예약" data-click-name="예약및운임안내">예약 및 운임 안내</a>
							<ul>
								<li><a href="/ready/fareRules?directID=fareRules1" data-click-area="Gnb-예약" data-click-name="예약및운임안내_예매서비스">예매 서비스</a></li>
								<li><a href="/ready/fareRules?directID=fareRules3" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국내선운임">국내선 운임</a></li>
								<li><a href="/ready/fareRules?directID=fareRules4" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국제선운임">국제선 운임</a></li>
								<li><a href="/ready/fareRules?directID=fareRules2" data-click-area="Gnb-예약" data-click-name="예약및운임안내_비즈니스운임">비즈니스 운임</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/discount" data-click-area="Gnb-예약" data-click-name="할인안내">할인안내</a>
							<ul>
								<li><a href="/ready/discount?directID=discountCont01" data-click-area="Gnb-예약" data-click-name="할인안내_가족운임할인제도">가족운임 할인제도</a></li>
								
									<li><a href="/ready/discount?directID=discountCont02" data-click-area="Gnb-예약" data-click-name="할인안내_상용우대프로그램">상용우대 프로그램</a></li>
								
								<li><a href="/ready/discount?directID=discountCont03" data-click-area="Gnb-예약" data-click-name="할인안내_제주도민할인제도">제주도민 할인제도</a></li>
								<li><a href="/ready/discount?directID=discountCont04" data-click-area="Gnb-예약" data-click-name="할인안내_재외/명예도민할인제도">재외/명예도민 할인제도</a></li>
								
									<li><a href="/ready/discount?directID=discountCont05" data-click-area="Gnb-예약" data-click-name="할인안내_군산시민할인제도">군산시민 할인제도</a></li>
								
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
							<a href="/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스">공항 서비스</a>
							<ul>
								<li><a href="/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스_공항카운터안내">공항카운터 안내</a></li>
								<li><a href="/ready/baggage" data-click-area="Gnb-서비스" data-click-name="공항서비스_수하물">수하물</a></li>
								<li><a href="/ready/help" data-click-area="Gnb-서비스" data-click-name="공항서비스_도움이필요하신고객">도움이 필요하신 고객</a></li>
								<li><a href="/ready/checkin" data-click-area="Gnb-서비스" data-click-name="공항서비스_체크인안내">체크인 안내</a></li>
								
									<li><a href="/ready/arrivalCard" data-click-area="Gnb-서비스" data-click-name="공항서비스_입국신고서작성안내">입국신고서 작성 안내</a></li>
								
							</ul>
						</li>
						<li>
							<a href="/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스">기내 서비스</a>
							<ul>
								<li><a href="/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내여행가이드">기내 여행 가이드</a></li>
								<li><a href="/flight/cabinShopping" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내유상판매">기내유상판매</a></li>
								<li><a href="/flight/taxFree" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내면세품">기내 면세품</a></li>
								
									<li><a href="/flight/jiniInsight" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내매거진">기내 매거진</a></li>
								
								
									<li><a href="/flight/eventflight" data-click-area="Gnb-서비스" data-click-name="기내서비스_이벤트플라잇">이벤트 플라잇</a></li>
								
							</ul>
						</li>
						<li>
							<a href="/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스">부가 서비스</a>
							<ul>
								<li><a href="/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스_번들서비스">번들 서비스</a></li>
								<li><a href="/flight/seat" data-click-area="Gnb-서비스" data-click-name="부가서비스_사전좌석지정">사전좌석지정</a></li>
								<li><a href="/flight/airlineFood" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내식">기내식</a></li>
								<li><a href="/flight/jiniPlay" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내엔터테인먼트">기내 엔터테인먼트</a></li>
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
							<a href="/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션">프로모션</a>
							<ul>
								<li><a href="/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션_이벤트">이벤트</a></li>
								<li><a href="/benefit/jiniCoupon" data-click-area="Gnb-혜택" data-click-name="프로모션_지니쿠폰">지니쿠폰</a></li>
							</ul>
						</li>
						
							<li>
								<a href="/travel/associatedCard" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택">카드 및 환전 혜택</a>
								<ul>
									<li><a href="/travel/associatedCard?directID=partnership1" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_제휴카드">제휴 카드</a></li>
									<li><a href="/travel/associatedCard?directID=partnership2" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_환율우대">환율 우대</a></li>
									<li><a href="/travel/associatedCard?directID=partnership3" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_무이자할부">무이자 할부</a></li>
								</ul>
							</li>
						
						<li>
							<a href="/travel/jinipass" data-click-area="Gnb-혜택" data-click-name="보딩패스 할인">보딩패스 할인</a>
						</li>
						<li>
							<a href="/travel/activity" data-click-area="Gnb-혜택" data-click-name="액티비티">액티비티</a>
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
							<a href="/travel/rentcar" data-click-area="Gnb-혜택" data-click-name="차량서비스">차량 서비스</a>
							<ul>
								<li><a href="https://www.skcarrental.com/rent/frame/wps/reservation.do?corpNm=jinAir&corpCd=&result=0000&resultMessage=ok" data-click-area="Gnb-혜택" data-click-name="차량서비스_SK렌터카">SK렌터카</a></li>
								<li><a href="https://www.rentalcars.com/?affiliateCode=jinair&adplat=jinimall&preflang=ko" data-click-area="Gnb-혜택" data-click-name="차량서비스_렌탈카스">렌탈카스</a></li>
								<li><a href="https://jinair.happartners.com/index.php/booking/plantrip" data-click-area="Gnb-혜택" data-click-name="차량서비스_허츠렌터카">허츠렌터카</a></li>
								
									<li><a href="https://tagogayo.co.kr/?ali=jinair15" data-click-area="Gnb-혜택" data-click-name="차량서비스_공항밴">공항 밴</a></li>
								
							</ul>
						</li>
						
							<li>
								<a href="/travel/insurance" data-click-area="Gnb-혜택" data-click-name="여행안심서비스">여행 안심 서비스</a>
								<ul>
									<li><a href="/travel/insurance2" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Chubb해외여행보험">Chubb 해외 여행보험</a></li>
									<li><a href="/travel/insurance3" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Assistcard여행토탈케어">Assistcard 여행토탈케어</a></li>
								</ul>
							</li>
						
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="나비포인트">나비포인트</a>
				<div class="sub">
					<ul>
						<li><a href="/mypage/nabipoint/pointList" data-click-area="Gnb-나비포인트" data-click-name="나의나비포인트">나의 나비포인트</a></li>
						<li><a href="/benefit/point?directID=point01" data-click-area="Gnb-나비포인트" data-click-name="적립안내">적립안내</a></li>
						<li><a href="/benefit/point?directID=point02" data-click-area="Gnb-나비포인트" data-click-name="사용안내">사용안내</a></li>
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
				
				<li>
					
						<a href="/mypage/getReservationList" data-click-area="Gnb" data-click-name="Menu(mobile)_마이페이지" data-check-permission="true">마이페이지</a>
					
					
				</li>

				
				<li class="login" id="login-button-area" data-title-login="로그인" data-title-logout="로그아웃">
					
						<a href="/login/logout" data-click-area="Gnb" data-click-name="Menu(mobile)_로그아웃">로그아웃</a>
					
					
				</li>
			</ul>
		</div>

		
		<ul id="m_gnb">
			<li class="on">
				<a href="javascript://" data-click-area="Gnb" data-click-name="예약">예약</a>
				<div class="sub">
					<ul>
						<li>
							<a href="/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약">항공권 예약</a>
							<ul>
								<li><a href="/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약_예약">예약</a></li>
								
									<li><a href="/promotion/nowMoment" data-click-area="Gnb-예약" data-click-name="항공권예약_최저가항공권">최저가 항공권</a></li>
								
							</ul>
						</li>
						<li>
							<a href="/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약">나의 예약</a>
							<ul>
								<li><a href="/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약_예약조회/변경/취소">예약 조회/변경/취소</a></li>
								<li><a href="/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약_부가서비스신청/취소">부가서비스 신청/취소</a></li>
								<li><a href="/checkin/checkinList" data-click-area="Gnb-예약" data-click-name="나의예약_웹/모바일체크인">웹/모바일 체크인</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/flight" data-click-area="Gnb-예약" data-click-name="운항정보">운항 정보</a>
							<ul>
								<li><a href="/ready/flight?directID=flightCont01" data-click-area="Gnb-예약" data-click-name="운항정보_스케줄 조회">스케줄 조회</a></li>
								<li><a href="/ready/flight?directID=flightCont02" data-click-area="Gnb-예약" data-click-name="운항정보_출도착안내">출도착 안내</a></li>
								<li><a href="/ready/flight?directID=flightCont03" data-click-area="Gnb-예약" data-click-name="운항정보_취항노선안내">취항 노선 안내</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/fareRules" data-click-area="Gnb-예약" data-click-name="예약및운임안내">예약 및 운임 안내</a>
							<ul>
								<li><a href="/ready/fareRules?directID=fareRules1" data-click-area="Gnb-예약" data-click-name="예약및운임안내_예매서비스">예매 서비스</a></li>
								<li><a href="/ready/fareRules?directID=fareRules3" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국내선운임">국내선 운임</a></li>
								<li><a href="/ready/fareRules?directID=fareRules4" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국제선운임">국제선 운임</a></li>
								<li><a href="/ready/fareRules?directID=fareRules2" data-click-area="Gnb-예약" data-click-name="예약및운임안내_비즈니스운임">비즈니스 운임</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/discount" data-click-area="Gnb-예약" data-click-name="할인안내">할인안내</a>
							<ul>
								<li><a href="/ready/discount?directID=discountCont01" data-click-area="Gnb-예약" data-click-name="할인안내_가족운임할인제도">가족운임 할인제도</a></li>
								
									<li><a href="/ready/discount?directID=discountCont02" data-click-area="Gnb-예약" data-click-name="할인안내_상용우대프로그램">상용우대 프로그램</a></li>
								
								<li><a href="/ready/discount?directID=discountCont03" data-click-area="Gnb-예약" data-click-name="할인안내_제주도민할인제도">제주도민 할인제도</a></li>
								<li><a href="/ready/discount?directID=discountCont04" data-click-area="Gnb-예약" data-click-name="할인안내_재외/명예도민할인제도">재외/명예도민 할인제도</a></li>
								
									<li><a href="/ready/discount?directID=discountCont05" data-click-area="Gnb-예약" data-click-name="할인안내_군산시민할인제도">군산시민 할인제도</a></li>
								
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
							<a href="/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스">공항 서비스</a>
							<ul>
								<li><a href="/ready/counter" data-click-area="Gnb-서비스" data-click-name="공항서비스_공항카운터안내">공항카운터 안내</a></li>
								<li><a href="/ready/baggage" data-click-area="Gnb-서비스" data-click-name="공항서비스_수하물">수하물</a></li>
								<li><a href="/ready/help" data-click-area="Gnb-서비스" data-click-name="공항서비스_도움이필요하신고객">도움이 필요하신 고객</a></li>
								<li><a href="/ready/checkin" data-click-area="Gnb-서비스" data-click-name="공항서비스_체크인안내">체크인 안내</a></li>
								
									<li><a href="/ready/arrivalCard" data-click-area="Gnb-서비스" data-click-name="공항서비스_입국신고서작성안내">입국신고서 작성 안내</a></li>
								
							</ul>
						</li>
						<li>
							<a href="/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스">기내 서비스</a>
							<ul>
								<li><a href="/flight/guide" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내여행가이드">기내 여행 가이드</a></li>
								<li><a href="/flight/cabinShopping" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내유상판매">기내유상판매</a></li>
								<li><a href="/flight/taxFree" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내면세품">기내 면세품</a></li>
								
									<li><a href="/flight/jiniInsight" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내매거진">기내 매거진</a></li>
								
								
									<li><a href="/flight/eventflight" data-click-area="Gnb-서비스" data-click-name="기내서비스_이벤트플라잇">이벤트 플라잇</a></li>
								
							</ul>
						</li>
						<li>
							<a href="/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스">부가 서비스</a>
							<ul>
								<li><a href="/flight/bundle" data-click-area="Gnb-서비스" data-click-name="부가서비스_번들서비스">번들 서비스</a></li>
								<li><a href="/flight/seat" data-click-area="Gnb-서비스" data-click-name="부가서비스_사전좌석지정">사전좌석지정</a></li>
								<li><a href="/flight/airlineFood" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내식">기내식</a></li>
								<li><a href="/flight/jiniPlay" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내엔터테인먼트">기내 엔터테인먼트</a></li>
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
							<a href="/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션">프로모션</a>
							<ul>
								<li><a href="/promotion/nowLeave" data-click-area="Gnb-혜택" data-click-name="프로모션_이벤트">이벤트</a></li>
								<li><a href="/benefit/jiniCoupon" data-click-area="Gnb-혜택" data-click-name="프로모션_지니쿠폰">지니쿠폰</a></li>
							</ul>
						</li>
						
							<li>
								<a href="/travel/associatedCard" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택">카드 및 환전 혜택</a>
								<ul>
									<li><a href="/travel/associatedCard?directID=partnership1" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_제휴카드">제휴 카드</a></li>
									<li><a href="/travel/associatedCard?directID=partnership2" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_환율우대">환율 우대</a></li>
									<li><a href="/travel/associatedCard?directID=partnership3" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_무이자할부">무이자 할부</a></li>
									<li><a href="/travel/exchangeWallet" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_모바일환전지갑">모바일 환전지갑 서비스</a></li>
								</ul>
							</li>
						
						<li>
							<a href="/travel/jinipass" data-click-area="Gnb-혜택" data-click-name="보딩패스 할인">보딩패스 할인</a>
						</li>
						<li>
							<a href="/travel/activity" data-click-area="Gnb-혜택" data-click-name="액티비티">액티비티</a>
							<ul>
								<li><a href="https://www.klook.com/ko/promo/jinairon?aff_adid=100885&aff_af_wid=8227&aid=8227&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=8227&utm_term=&utm_content=" data-click-area="Gnb-혜택" data-click-name="액티비티_클룩">클룩</a></li>
								<li><a href="https://www.yokosojapanpass.com/donki_fuel/public/coupon/index/0010789" data-click-area="Gnb-혜택" data-click-name="액티비티_돈키호테">돈키호테</a></li>
							</ul>
						</li>
						<li>
							<a href="/travel/hotel">호텔</a>
							<ul>
								<li><a href="https://sp.booking.com/index.ko.html?aid=1486529&amp;lang=ko" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_부킹닷컴">부킹닷컴</a></li>
								<li><a href="https://www.hotelscombined.co.kr/?a_aid=226570&amp;brandid=560805&amp;languageCode=KO&amp;label=main" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_호텔스컴바인">호텔스컴바인</a></li>
								<li><a href="https://kr.trip.com/hotels?locale=ko-KR&amp;allianceid=1307583&amp;sid=4088763" target="_blank" title="새 창 열림" data-click-area="Gnb-혜택" data-click-name="호텔_트립닷컴">트립닷컴</a></li>
							</ul>
						</li>
						<li>
							<a href="/travel/rentcar" data-click-area="Gnb-혜택" data-click-name="차량서비스">차량 서비스</a>
							<ul>
								<li><a href="https://www.skcarrental.com/rent/frame/wps/reservation.do?corpNm=jinAir&corpCd=&result=0000&resultMessage=ok" data-click-area="Gnb-혜택" data-click-name="차량서비스_SK렌터카">SK렌터카</a></li>
								<li><a href="https://www.rentalcars.com/?affiliateCode=jinair&adplat=jinimall&preflang=ko" data-click-area="Gnb-혜택" data-click-name="차량서비스_렌탈카스">렌탈카스</a></li>
								<li><a href="https://jinair.happartners.com/index.php/booking/plantrip" data-click-area="Gnb-혜택" data-click-name="차량서비스_허츠렌터카">허츠렌터카</a></li>
								
									<li><a href="https://tagogayo.co.kr/?ali=jinair15" data-click-area="Gnb-혜택" data-click-name="차량서비스_공항밴">공항 밴</a></li>
								
							</ul>
						</li>
						
							<li>
								<a href="/travel/insurance" data-click-area="Gnb-혜택" data-click-name="여행안심서비스">여행 안심 서비스</a>
								<ul>
									<li><a href="/travel/insurance2" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Chubb해외여행보험">Chubb 해외 여행보험</a></li>
									<li><a href="/travel/insurance3" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Assistcard여행토탈케어">Assistcard 여행토탈케어 </a></li>
								</ul>
							</li>
						
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="나비포인트">나비포인트</a>
				<div class="sub">
					<ul>
						<li><a href="/mypage/nabipoint/pointList" data-click-area="Gnb-나비포인트" data-click-name="나의나비포인트">나의 나비포인트</a></li>
						<li><a href="/benefit/point?directID=point01" data-click-area="Gnb-나비포인트" data-click-name="적립안내">적립안내</a></li>
						<li><a href="/benefit/point?directID=point02" data-click-area="Gnb-나비포인트" data-click-name="사용안내">사용안내</a></li>
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


        
	<!-- Adobe Analytics  -->
	<script type="text/javascript">
		_dl = {"channel":"pc","login_status":"Y","login_type":"normal","page_event":{"booking_step4":true},"page_name":"Booking^Step4_Extra service","page_url":"/booking/extras","products":[{"trip_bookingClass":"Y2-DISC|V1-SPDISC","trip_category":"여정","trip_date":"2022.01.18|2022.01.20","trip_depDay":"화|목","trip_depTime":"12:20|07:05","trip_flightNumber":"LJ311|LJ302","trip_fuelSurcharge":"6600|6600","trip_journeyOrigin":"","trip_passengerDetail":"M-940908-KOR","trip_passengerInfo":"1-0-0","trip_passengerNum":1,"trip_purchase_channel":"Y","trip_segment":"GMP-CJU|CJU-GMP","trip_tax":"4000|4000","trip_ticketPrice":"66900|19900","trip_type":"RT"}],"site_currency":"KRW","site_language":"KOR","site_name":"Jin Air","site_region":"KOR","today_currency":1,"trip_id":"","user_age":29,"user_gender":"M","user_level":"","user_nationality":"KOR","user_number":"GPR1987133"};
	</script>
	<!-- Adobe Analytics  -->
	<div id="container">
		<!-- 내용영역 -->
		<input type="hidden" id="globalLangCd" value="KOR">
		
		
		






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

<div class="itinerary" style="display:;">

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
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js?v=3a372de4-be32-45d9-ba45-289cded10851"></script>
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
<script type="text/javascript" src="../js/hom/lj/front/booking/getItinerary.js?v=3a372de4-be32-45d9-ba45-289cded10851"></script>
<script type="text/javascript" src="../js/hom/lj/front/booking/common.js?v=3a372de4-be32-45d9-ba45-289cded10851"></script>

<form id="registerform" action="/booking/getAvailabilityList" method="post">
	<input type="hidden" name="_csrf" id="_csrf" value="3a372de4-be32-45d9-ba45-289cded10851" />
	<input type="hidden" 	id="searchType" 		name="searchType" 			value=""		/>
	<input type="hidden" 	id="origin1" 			name="origin1"              value=""          />
	<input type="hidden" 	id="destination1" 		name="destination1"         value=""		/>
	<input type="hidden" 	id="travelDate1" 		name="travelDate1"          value=""		/>
	<input type="hidden" 	id="origin2" 			name="origin2"              value=""          />
	<input type="hidden" 	id="destination2" 		name="destination2"         value=""		/>
	<input type="hidden" 	id="travelDate2" 		name="travelDate2"          value=""		/>
	<input type="hidden" 	id="origin3" 			name="origin3"              value=""          />
	<input type="hidden" 	id="destination3" 		name="destination3"         value=""		/>
	<input type="hidden" 	id="travelDate3" 		name="travelDate3"          value=""      />
	<input type="hidden" 	id="origin4" 			name="origin4"              value=""          />
	<input type="hidden" 	id="destination4" 		name="destination4"         value=""		/>
	<input type="hidden" 	id="travelDate4" 		name="travelDate4"          value=""      />
	<input type="hidden" 	id="pointOfPurchase" 	name="pointOfPurchase"      value=""	/>
	<input type="hidden" 	id="adultPaxCount" 		name="adultPaxCount"        value=""	/>
	<input type="hidden" 	id="childPaxCount" 		name="childPaxCount"        value=""	/>
	<input type="hidden" 	id="infantPaxCount" 	name="infantPaxCount"       value=""	/>
	<input type="hidden" 	id="tripType" 			name="tripType"             value=""			/>
	<input type="hidden" 	id="pnrNumber" 			name="pnrNumber"            value=""		/>

	<input type="hidden" 	id="domIntType" 		name="domIntType"           value=""		/>
	<input type="hidden" 	id="segmentId1"			name="segmentId1"			value=""		/>
	<input type="hidden" 	id="segmentId2"			name="segmentId2"			value=""		/>
	<input type="hidden" 	id="segmentId3"			name="segmentId3"			value=""		/>
	<input type="hidden" 	id="segmentId4"			name="segmentId4"			value=""		/>
	<input type="hidden" 	id="isModify1"			name="isModify1"			value=""		/>
	<input type="hidden" 	id="isModify2"			name="isModify2"			value=""		/>
	<input type="hidden" 	id="isModify3"			name="isModify3"			value=""		/>
	<input type="hidden" 	id="isModify4"			name="isModify4"			value=""		/>

	<input type="hidden" 	id="cpnNo"				name="cpnNo"				value=""			/>
	<input type="hidden" 	id="promoCode"			name="promoCode"			value=""		/>
	<input type="hidden" name="userBirth" value="19940908">
	<input type="hidden" 	id="refVal"				name="refVal"				value="JINAIR"		/>
	<input type="hidden" 	id="refPop"				name="refPop"				value=""		/>
	<input type="hidden" 	id="refChannel"			name="refChannel"			value=""		/>
	<input type="hidden" 	id="refLang"			name="refLang"				value=""		/>
	<input type="hidden" 	id="userId"				name="userId" 				value="GKRWNS1901">
	<input type="hidden"	id="bookingID"			name="bookingID"			value="01151442452460000605"	/>
	<input type="hidden" id="depcity1Param" value="">
	<input type="hidden" id="arrcity1Param" value="">
	<input type="hidden" id="depdate1Param" value="">
	<input type="hidden" id="arrdate1Param" value="">
	<input type="hidden" id="tripday1Param" value="">
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

<script type="text/javascript" src="../js/hom/lj/front/booking/quickModify.js?v=3a372de4-be32-45d9-ba45-289cded10851"></script>
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
		confirmPrice = JSON.parse('{\"chargeList\":[{\"taxList\":[{\"segmentList\":[4],\"ssrFareList\":[{\"amount\":66900,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]},{\"segmentList\":[14],\"ssrFareList\":[{\"amount\":19900,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]}],\"totalTax\":86800},{\"taxList\":[{\"segmentList\":[4],\"ssrFareList\":[{\"amount\":6600,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]},{\"segmentList\":[14],\"ssrFareList\":[{\"amount\":6600,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]}],\"totalTax\":13200},{\"taxList\":[{\"segmentList\":[4],\"ssrFareList\":[{\"amount\":4000,\"fareComponentId\":\"500\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[{\"airportCode\":\"\",\"amount\":4000,\"code\":\"\",\"countryCode\":\"\",\"currency\":\"\",\"fareComponentId\":\"\",\"iataTaxCode\":\"DA\",\"taxName\":\"KR Domestic Passenger Service Charge\",\"taxType\":\"\"}]}]},{\"segmentList\":[14],\"ssrFareList\":[{\"amount\":4000,\"fareComponentId\":\"501\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[{\"airportCode\":\"\",\"amount\":4000,\"code\":\"\",\"countryCode\":\"\",\"currency\":\"\",\"fareComponentId\":\"\",\"iataTaxCode\":\"DA\",\"taxName\":\"KR Domestic Passenger Service Charge\",\"taxType\":\"\"}]}]}],\"totalTax\":8000}],\"currency\":\"KRW\",\"itineraryList\":[{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-18(\uD654) 13:30\",\"boardPoint\":\"GMP\",\"boardPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"departureDateTimeString\":\"2022-01-18(\uD654) 12:20\",\"fareClass\":\"Y2\",\"fareType\":\"DISC\",\"flight\":\"LJ311\",\"flightList\":[null],\"flightSegmentGroupID\":502,\"journeyTime\":\"01h 10m\",\"offPoint\":\"CJU\",\"offPointName\":\"\uC81C\uC8FC(CJU)\",\"scheduledArrivalTime\":{\"date\":18,\"day\":2,\"hours\":13,\"minutes\":30,\"month\":0,\"seconds\":0,\"time\":1642480200000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":18,\"day\":2,\"hours\":12,\"minutes\":20,\"month\":0,\"seconds\":0,\"time\":1642476000000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":4,\"segmentSEQ\":1,\"totalTime\":\"\",\"waitingTime\":\"\"},{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-20(\uBAA9) 08:15\",\"boardPoint\":\"CJU\",\"boardPointName\":\"\uC81C\uC8FC(CJU)\",\"departureDateTimeString\":\"2022-01-20(\uBAA9) 07:05\",\"fareClass\":\"V1\",\"fareType\":\"SPDISC\",\"flight\":\"LJ302\",\"flightList\":[null],\"flightSegmentGroupID\":503,\"journeyTime\":\"01h 10m\",\"offPoint\":\"GMP\",\"offPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"scheduledArrivalTime\":{\"date\":20,\"day\":4,\"hours\":8,\"minutes\":15,\"month\":0,\"seconds\":0,\"time\":1642634100000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":20,\"day\":4,\"hours\":7,\"minutes\":5,\"month\":0,\"seconds\":0,\"time\":1642629900000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":14,\"segmentSEQ\":2,\"totalTime\":\"\",\"waitingTime\":\"\"}],\"offlineExtrasPosible\":false,\"paxDetailList\":[{\"dateOfBirth\":\"940908\",\"gender\":\"M\",\"guestId\":\"1\",\"guestType\":\"\uC131\uC778\",\"nationality\":\"KOR\",\"passengerName\":\"\uC774/\uD559\uC900\"}],\"segmentDetailList\":[{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-18(\uD654) 13:30\",\"boardPoint\":\"GMP\",\"boardPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"departureDateTimeString\":\"2022-01-18(\uD654) 12:20\",\"fareClass\":\"Y2\",\"fareType\":\"DISC\",\"flight\":\"LJ311\",\"flightList\":[null],\"flightSegmentGroupID\":502,\"journeyTime\":\"01h 10m\",\"offPoint\":\"CJU\",\"offPointName\":\"\uC81C\uC8FC(CJU)\",\"scheduledArrivalTime\":{\"date\":18,\"day\":2,\"hours\":13,\"minutes\":30,\"month\":0,\"seconds\":0,\"time\":1642480200000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":18,\"day\":2,\"hours\":12,\"minutes\":20,\"month\":0,\"seconds\":0,\"time\":1642476000000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":4,\"segmentSEQ\":1,\"totalTime\":\"\",\"waitingTime\":\"\"},{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-20(\uBAA9) 08:15\",\"boardPoint\":\"CJU\",\"boardPointName\":\"\uC81C\uC8FC(CJU)\",\"departureDateTimeString\":\"2022-01-20(\uBAA9) 07:05\",\"fareClass\":\"V1\",\"fareType\":\"SPDISC\",\"flight\":\"LJ302\",\"flightList\":[null],\"flightSegmentGroupID\":503,\"journeyTime\":\"01h 10m\",\"offPoint\":\"GMP\",\"offPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"scheduledArrivalTime\":{\"date\":20,\"day\":4,\"hours\":8,\"minutes\":15,\"month\":0,\"seconds\":0,\"time\":1642634100000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":20,\"day\":4,\"hours\":7,\"minutes\":5,\"month\":0,\"seconds\":0,\"time\":1642629900000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":14,\"segmentSEQ\":2,\"totalTime\":\"\",\"waitingTime\":\"\"}],\"ssrFareList\":[],\"tripType\":\"RT\"}');
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
		
			
		



	
	
	
		<h1 class="typeA">부가서비스 신청</h1>
	
	
	

<div class="step">
	<h2>Step</h2>
	<ol>
		<li><strong>1</strong> <span>여정 선택</span></li>
		<li><strong>2</strong> <span>항공편 선택</span></li>
		<li><strong>3</strong> <span>탑승객 정보</span></li>
		<li class="on"><strong>4</strong> <span>부가 서비스</span></li>
		<li><strong>5</strong> <span>결제</span></li>
	</ol>
</div>
		<div class="extraArea">
			<div class="head">
				<div class="wrap">
					<p class="open"><a href="javascript:void(0)" onclick="showExtrasNav(); return false" class="icoGo">부가서비스 탭 열기</a></p><!-- 모바일 -->
					<div class="content">
						<ul class="tab">
							<li data="seat" class="seat choice"><a href="javascript:void(0)" data-click-area="여정-4_부가서비스" data-click-name="사전좌석지정_sidetab">사전좌석지정</a></li>

								
									<li data="baggage" class="baggage"><a href="javascript:void(0)" data-click-area="여정-4_부가서비스" data-click-name="초과수화물_sidetab">초과수하물</a></li>
									
									
									
								

						</ul>
						<p class="btn"><a href="javascript:void(0)" class="btnTypeA" onclick="movePayment();" data-click-area="여정-4_부가서비스" data-click-name="바로결제_sidetab">바로 결제</a></p>
						<p class="close"><a href="javascript:void(0)" onclick="hideExtrasNav(); return false" class="icoGo on">부가서비스 탭 닫기</a></p><!-- 모바일 -->
					</div>
				</div>
			</div><!-- //head -->
			<div class="extraContent">
				<!-- ajax -->
			</div>
		</div>

		
		
			
				
			






<div id="totalSrmy">


	<ul class="extras">
		<li class="seat" 		id="SEATSum">사전좌석지정</li>
		<li class="baggage" 	id="BAGGAGESum">초과수하물</li>
		
		
			
			
			
			
		
	</ul>

	<div class="price">
		<a href="#" onclick="showMySrmy(); return false" class="btn transition">상세보기</a>
		
			
			
				<p><span class="tit"><em>항공운임 등 총액</em><br>(<text currency>KRW</text>)</span><strong id="totalCharge">0</strong></p>
			
		
	</div>

	
		<p class="btnNext"><a href="javascript:void(0);" class="btnTypeA" onclick="movePayment();" data-click-area="여정-4_부가서비스" data-click-name="바로결제">바로 결제</a></p>
	
	


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

<script type="text/javascript" src="../js/hom/lj/front/booking/totalSrmy.js?v=3a372de4-be32-45d9-ba45-289cded10851"></script>
<script type="text/javascript">
$(document).ready(function() {
	try {
		confirmPrice = JSON.parse('{\"chargeList\":[{\"taxList\":[{\"segmentList\":[4],\"ssrFareList\":[{\"amount\":66900,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]},{\"segmentList\":[14],\"ssrFareList\":[{\"amount\":19900,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]}],\"totalTax\":86800},{\"taxList\":[{\"segmentList\":[4],\"ssrFareList\":[{\"amount\":6600,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]},{\"segmentList\":[14],\"ssrFareList\":[{\"amount\":6600,\"fareComponentId\":\"\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[]}]}],\"totalTax\":13200},{\"taxList\":[{\"segmentList\":[4],\"ssrFareList\":[{\"amount\":4000,\"fareComponentId\":\"500\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[{\"airportCode\":\"\",\"amount\":4000,\"code\":\"\",\"countryCode\":\"\",\"currency\":\"\",\"fareComponentId\":\"\",\"iataTaxCode\":\"DA\",\"taxName\":\"KR Domestic Passenger Service Charge\",\"taxType\":\"\"}]}]},{\"segmentList\":[14],\"ssrFareList\":[{\"amount\":4000,\"fareComponentId\":\"501\",\"fareOverrideReason\":\"\",\"guestId\":\"1\",\"taxDetailList\":[{\"airportCode\":\"\",\"amount\":4000,\"code\":\"\",\"countryCode\":\"\",\"currency\":\"\",\"fareComponentId\":\"\",\"iataTaxCode\":\"DA\",\"taxName\":\"KR Domestic Passenger Service Charge\",\"taxType\":\"\"}]}]}],\"totalTax\":8000}],\"currency\":\"KRW\",\"itineraryList\":[{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-18(\uD654) 13:30\",\"boardPoint\":\"GMP\",\"boardPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"departureDateTimeString\":\"2022-01-18(\uD654) 12:20\",\"fareClass\":\"Y2\",\"fareType\":\"DISC\",\"flight\":\"LJ311\",\"flightList\":[null],\"flightSegmentGroupID\":502,\"journeyTime\":\"01h 10m\",\"offPoint\":\"CJU\",\"offPointName\":\"\uC81C\uC8FC(CJU)\",\"scheduledArrivalTime\":{\"date\":18,\"day\":2,\"hours\":13,\"minutes\":30,\"month\":0,\"seconds\":0,\"time\":1642480200000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":18,\"day\":2,\"hours\":12,\"minutes\":20,\"month\":0,\"seconds\":0,\"time\":1642476000000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":4,\"segmentSEQ\":1,\"totalTime\":\"\",\"waitingTime\":\"\"},{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-20(\uBAA9) 08:15\",\"boardPoint\":\"CJU\",\"boardPointName\":\"\uC81C\uC8FC(CJU)\",\"departureDateTimeString\":\"2022-01-20(\uBAA9) 07:05\",\"fareClass\":\"V1\",\"fareType\":\"SPDISC\",\"flight\":\"LJ302\",\"flightList\":[null],\"flightSegmentGroupID\":503,\"journeyTime\":\"01h 10m\",\"offPoint\":\"GMP\",\"offPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"scheduledArrivalTime\":{\"date\":20,\"day\":4,\"hours\":8,\"minutes\":15,\"month\":0,\"seconds\":0,\"time\":1642634100000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":20,\"day\":4,\"hours\":7,\"minutes\":5,\"month\":0,\"seconds\":0,\"time\":1642629900000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":14,\"segmentSEQ\":2,\"totalTime\":\"\",\"waitingTime\":\"\"}],\"offlineExtrasPosible\":false,\"paxDetailList\":[{\"dateOfBirth\":\"940908\",\"gender\":\"M\",\"guestId\":\"1\",\"guestType\":\"\uC131\uC778\",\"nationality\":\"KOR\",\"passengerName\":\"\uC774/\uD559\uC900\"}],\"segmentDetailList\":[{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-18(\uD654) 13:30\",\"boardPoint\":\"GMP\",\"boardPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"departureDateTimeString\":\"2022-01-18(\uD654) 12:20\",\"fareClass\":\"Y2\",\"fareType\":\"DISC\",\"flight\":\"LJ311\",\"flightList\":[null],\"flightSegmentGroupID\":502,\"journeyTime\":\"01h 10m\",\"offPoint\":\"CJU\",\"offPointName\":\"\uC81C\uC8FC(CJU)\",\"scheduledArrivalTime\":{\"date\":18,\"day\":2,\"hours\":13,\"minutes\":30,\"month\":0,\"seconds\":0,\"time\":1642480200000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":18,\"day\":2,\"hours\":12,\"minutes\":20,\"month\":0,\"seconds\":0,\"time\":1642476000000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":4,\"segmentSEQ\":1,\"totalTime\":\"\",\"waitingTime\":\"\"},{\"aircraftType\":\"B737-800\",\"arrivalTimeString\":\"2022-01-20(\uBAA9) 08:15\",\"boardPoint\":\"CJU\",\"boardPointName\":\"\uC81C\uC8FC(CJU)\",\"departureDateTimeString\":\"2022-01-20(\uBAA9) 07:05\",\"fareClass\":\"V1\",\"fareType\":\"SPDISC\",\"flight\":\"LJ302\",\"flightList\":[null],\"flightSegmentGroupID\":503,\"journeyTime\":\"01h 10m\",\"offPoint\":\"GMP\",\"offPointName\":\"\uC11C\uC6B8/\uAE40\uD3EC(GMP)\",\"scheduledArrivalTime\":{\"date\":20,\"day\":4,\"hours\":8,\"minutes\":15,\"month\":0,\"seconds\":0,\"time\":1642634100000,\"timezoneOffset\":-540,\"year\":122},\"scheduledDepartureDateTime\":{\"date\":20,\"day\":4,\"hours\":7,\"minutes\":5,\"month\":0,\"seconds\":0,\"time\":1642629900000,\"timezoneOffset\":-540,\"year\":122},\"segmentId\":14,\"segmentSEQ\":2,\"totalTime\":\"\",\"waitingTime\":\"\"}],\"ssrFareList\":[],\"tripType\":\"RT\"}');
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
		
		<!-- //내용영역 -->
	</div>
	
	
	<input type="hidden" id="bookingID" name="bookingID" value="01151442452460000605"	/>
	<script type="text/javascript" src="../js/hom/pub/front/booking.js"></script>
	<script type="text/javascript" src="../js/hom/lj/front/booking/extras.js?v=3a372de4-be32-45d9-ba45-289cded10851"></script>
	<script type="text/javascript" src="../js/hom/lj/front/booking/dontGoBack.js"></script>
	<script type="text/javascript">

		showLoading();
		
		var sid = ('prd' == 'prd') ? 'service_1' : 'service_2';
		var aid = ('prd' == 'prd') ? 'pay' : 'stg_pay';
		
		try {
			
			var data = '{"itineraryDetails":null,"flightSegmentDetailsTypeList":[{"boardPoint":"GMP","offPoint":"CJU","aircraftType":"b737","segmentId":"4","flightSegmentGroupID":"502","fareClass":"Y2","departureDate":"20220118032000","carrierCode":null,"fltNumber":null,"fltSuffix":null,"departureDateLTC":null,"flightDate":null,"partnerCarrierCode":null,"partnerflightNumber":null,"codeshareRole":null,"scheduledDepartureDateTime":null,"scheduledDepartureTimeLTC":null,"departureTimeZone":null,"scheduledArrivalTime":null,"scheduledArrivalTimeLTC":null,"arrivalTimeZone":null,"departureTerminal":null,"arrivalTerminal":null,"standbyCode":null,"journeyTime":null,"stops":0,"arrivalDayChange":0,"cabinClass":"ECONOMY","postDepartureStatus":null,"aircraftVersion":null,"isThroughFlight":null,"isDeiExists":null,"deiCarrierName":null,"isIropIndicator":null,"oldSegmentId":null,"addedTime":null,"hasArnk":null,"isForMarking":null,"segmenReferenceId":null,"isFlightOverBooking":null,"mealVisible":false},{"boardPoint":"CJU","offPoint":"GMP","aircraftType":"b737","segmentId":"14","flightSegmentGroupID":"503","fareClass":"V1","departureDate":"20220119220500","carrierCode":null,"fltNumber":null,"fltSuffix":null,"departureDateLTC":null,"flightDate":null,"partnerCarrierCode":null,"partnerflightNumber":null,"codeshareRole":null,"scheduledDepartureDateTime":null,"scheduledDepartureTimeLTC":null,"departureTimeZone":null,"scheduledArrivalTime":null,"scheduledArrivalTimeLTC":null,"arrivalTimeZone":null,"departureTerminal":null,"arrivalTerminal":null,"standbyCode":null,"journeyTime":null,"stops":0,"arrivalDayChange":0,"cabinClass":"ECONOMY","postDepartureStatus":null,"aircraftVersion":null,"isThroughFlight":null,"isDeiExists":null,"deiCarrierName":null,"isIropIndicator":null,"oldSegmentId":null,"addedTime":null,"hasArnk":null,"isForMarking":null,"segmenReferenceId":null,"isFlightOverBooking":null,"mealVisible":true}],"guestDetailsTypeList":[{"guestId":"1","givenName":"학준","surName":"이","guestType":"ADULT","infantYN":false,"infantGivenName":null,"infantSurName":null,"underfiftnAdultYN":"N"}],"connectionFlightYN":false,"domIntType":"DOM","bICNICN":false,"seatVisibleYn":null,"baggageVisibleYn":true,"mealVisibleYn":true,"saleVisibleYn":null,"enterVisibleYn":null,"loungeVisibleYn":null,"ancillaryData":{"extrasCodeList":[{"segmentId":"14","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"5KG XBAG","contents":null,"price":"8000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":5.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"4","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"5KG XBAG","contents":null,"price":"8000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":5.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"14","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"10KG XBAG","contents":null,"price":"16000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":10.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"4","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"10KG XBAG","contents":null,"price":"16000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":10.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"14","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"15KG XBAG","contents":null,"price":"24000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":15.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"4","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"15KG XBAG","contents":null,"price":"24000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":15.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"14","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"20KG XBAG","contents":null,"price":"32000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":20.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"4","extrasType":"BAGGAGE","extrasCode":"XBAG","extrasName":"20KG XBAG","contents":null,"price":"32000.0","currency":"KRW","stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":20.0,"paxType":"ADULT","guestId":null,"disableYN":true,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":"KG"},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"AASP","extrasName":"FOR ASP EXCEPTION","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"AOXY","extrasName":"AIRLINE SUPPLIED OXYGEN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"ARMD","extrasName":"ARMD PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"ATCP","extrasName":"THE COMPLETE PARTY FOR ASP","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"AUIN","extrasName":"AUIN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"BCCO","extrasName":"BC CORPORATION CARD MARKETING","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"BLND","extrasName":"VISUALLY IMPAIRED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CBBG","extrasName":"SPECIAL CABIN BAGGAGE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CCVI","extrasName":"VISA CARD MARKETING","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CHGWV","extrasName":"CHANGE FEE WAIVER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CHLD","extrasName":"CHILD","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CKIN","extrasName":"INFORMATION FOR AIRPORT PERSONNEL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CONX","extrasName":"CONNECTION FLIGHT OR FERRY","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CTCE","extrasName":"EMAIL ADDRESS","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CTCM","extrasName":"MOBILE PHONE NUMBER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CTCP","extrasName":"PASSENGER TELEPHONE NUMBER UNKNOWN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"CTCT","extrasName":"Travel Agent phone","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"DEAF","extrasName":"HEARING IMPAIRED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"DEPA","extrasName":"DEPORTEE ACCOMPANIED BY AN ESCORT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"DEPO","extrasName":"DEPORTEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"DEPU","extrasName":"DEPORTEE UNACCOMPANIED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"DISC","extrasName":"DISC","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"ESAN","extrasName":"TRAVELING WITH AN EMOTIONAL SUPRT ANIMAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"EXMO","extrasName":"PREGNANT EXPECTED OVER 4WEEKS","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"EXMP","extrasName":"TKTL EXEMPTION","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"EXST","extrasName":"EXTRA SEAT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"FQTR","extrasName":"FREQUENT FLYER MILEAGE PROGRAM REDEMPTIO","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"FQTS","extrasName":"FREQUENT FLYER SERVICE REQUEST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"FQTU","extrasName":"FREQUENT FLYER UPGRADE AND ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"FQTV","extrasName":"FREQUENT FLYER MILEAGE PROGRAM ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"FRAV","extrasName":"Duty Free","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"GIND","extrasName":"GROUP IND RTN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"GTR","extrasName":"GOVERNMENT TRANSPORTATION REQUEST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"HPAX","extrasName":"HOT COMPLAINER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"INAD","extrasName":"INADMISSIBLE PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"INAU","extrasName":"INDV AUTH REQUEST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"INFS","extrasName":"INFANT WITH SEAT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"JINC","extrasName":"JINI COUPON","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"KBEZ","extrasName":"KB EASYFLY CARD MARKETING","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"KBPM","extrasName":"KOOKMIN CARD","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"KECS","extrasName":"DOMESTIC KE CODESHARE PAX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"LANG","extrasName":"LANGUAGE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"MAAS","extrasName":"MEET AND ASSIST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"MEAL","extrasName":"CHILD MEAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"MEDA","extrasName":"MEDICAL ASSISTANCE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"MIGP","extrasName":"MIGRATION SSR","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"NMCH","extrasName":"NAME CHANGE FEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"NODF","extrasName":"NO DROP AND FLY","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"NPTV","extrasName":"NABI POINTS PROGRAM ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"OTHS","extrasName":"OTHER SERVICE NOT SPECIFIED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PCCA","extrasName":"PCC ON","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PCTC","extrasName":"PAX CONTACT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PECA","extrasName":"PET CAGE FOR PETC","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"POXY","extrasName":"PASSENGER OWN OXYGEN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PRSN","extrasName":"PRISONER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PTAX","extrasName":"PTAX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PTNR","extrasName":"PARTNER LOYALTY PROGRAM ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"QNAR","extrasName":"QUNAR","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"RPIT","extrasName":"RPIT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SEMN","extrasName":"SEAMAN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SFML","extrasName":"SEAFOOD MEAL 2","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SSRX","extrasName":"SSRX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SSSS","extrasName":"SELECTEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SSTX","extrasName":"SSTX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"STCR","extrasName":"STRETCHER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"STFS","extrasName":"STAFF PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"STFU","extrasName":"STAFF PASSENGER CAPTAIN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"STPC","extrasName":"STOP OVER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SVAN","extrasName":"CUSTOMER TRAVELING WITH A SERVICE ANIMAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SVCA","extrasName":"SERVICE FEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"SVCF","extrasName":"SERVICE FEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"TLPW","extrasName":"TIME LIMIT PASSWORD","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"TWOV","extrasName":"TRANSIT OR TRANSFER WITHOUT VISA","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"UMNR","extrasName":"UNMR DOMESTIC","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"UPGR","extrasName":"UPGRADE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"UPMA","extrasName":"UPMA","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"VISA","extrasName":"VISA CHECK","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"VS5K","extrasName":"VISA CREDIT CARD PROMOTION","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"VVIP","extrasName":"VIP PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"AASP","extrasName":"FOR ASP EXCEPTION","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"AOXY","extrasName":"AIRLINE SUPPLIED OXYGEN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"ARMD","extrasName":"ARMD PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"ATCP","extrasName":"THE COMPLETE PARTY FOR ASP","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"AUIN","extrasName":"AUIN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"BCCO","extrasName":"BC CORPORATION CARD MARKETING","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"BLND","extrasName":"VISUALLY IMPAIRED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CBBG","extrasName":"SPECIAL CABIN BAGGAGE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CCVI","extrasName":"VISA CARD MARKETING","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CHGWV","extrasName":"CHANGE FEE WAIVER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CHLD","extrasName":"CHILD","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CKIN","extrasName":"INFORMATION FOR AIRPORT PERSONNEL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CONX","extrasName":"CONNECTION FLIGHT OR FERRY","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CTCE","extrasName":"EMAIL ADDRESS","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CTCM","extrasName":"MOBILE PHONE NUMBER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CTCP","extrasName":"PASSENGER TELEPHONE NUMBER UNKNOWN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"CTCT","extrasName":"Travel Agent phone","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"DEAF","extrasName":"HEARING IMPAIRED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"DEPA","extrasName":"DEPORTEE ACCOMPANIED BY AN ESCORT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"DEPO","extrasName":"DEPORTEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"DEPU","extrasName":"DEPORTEE UNACCOMPANIED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"DISC","extrasName":"DISC","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"ESAN","extrasName":"TRAVELING WITH AN EMOTIONAL SUPRT ANIMAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"EXMO","extrasName":"PREGNANT EXPECTED OVER 4WEEKS","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"EXMP","extrasName":"TKTL EXEMPTION","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"EXST","extrasName":"EXTRA SEAT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"FQTR","extrasName":"FREQUENT FLYER MILEAGE PROGRAM REDEMPTIO","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"FQTS","extrasName":"FREQUENT FLYER SERVICE REQUEST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"FQTU","extrasName":"FREQUENT FLYER UPGRADE AND ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"FQTV","extrasName":"FREQUENT FLYER MILEAGE PROGRAM ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"FRAV","extrasName":"Duty Free","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"GIND","extrasName":"GROUP IND RTN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"GTR","extrasName":"GOVERNMENT TRANSPORTATION REQUEST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"HPAX","extrasName":"HOT COMPLAINER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"INAD","extrasName":"INADMISSIBLE PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"INAU","extrasName":"INDV AUTH REQUEST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"INFS","extrasName":"INFANT WITH SEAT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"JINC","extrasName":"JINI COUPON","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"KBEZ","extrasName":"KB EASYFLY CARD MARKETING","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"KBPM","extrasName":"KOOKMIN CARD","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"KECS","extrasName":"DOMESTIC KE CODESHARE PAX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"LANG","extrasName":"LANGUAGE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"MAAS","extrasName":"MEET AND ASSIST","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"MEAL","extrasName":"CHILD MEAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"MEDA","extrasName":"MEDICAL ASSISTANCE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"MIGP","extrasName":"MIGRATION SSR","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"NMCH","extrasName":"NAME CHANGE FEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"NODF","extrasName":"NO DROP AND FLY","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"NPTV","extrasName":"NABI POINTS PROGRAM ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"OTHS","extrasName":"OTHER SERVICE NOT SPECIFIED","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PCCA","extrasName":"PCC ON","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PCTC","extrasName":"PAX CONTACT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PECA","extrasName":"PET CAGE FOR PETC","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"POXY","extrasName":"PASSENGER OWN OXYGEN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PRSN","extrasName":"PRISONER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PTAX","extrasName":"PTAX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PTNR","extrasName":"PARTNER LOYALTY PROGRAM ACCRUAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"QNAR","extrasName":"QUNAR","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"RPIT","extrasName":"RPIT","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SEMN","extrasName":"SEAMAN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SFML","extrasName":"SEAFOOD MEAL 2","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SSRX","extrasName":"SSRX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SSSS","extrasName":"SELECTEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SSTX","extrasName":"SSTX","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"STCR","extrasName":"STRETCHER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"STFS","extrasName":"STAFF PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"STFU","extrasName":"STAFF PASSENGER CAPTAIN","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"STPC","extrasName":"STOP OVER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SVAN","extrasName":"CUSTOMER TRAVELING WITH A SERVICE ANIMAL","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SVCA","extrasName":"SERVICE FEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"SVCF","extrasName":"SERVICE FEE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"TLPW","extrasName":"TIME LIMIT PASSWORD","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"TWOV","extrasName":"TRANSIT OR TRANSFER WITHOUT VISA","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"UMNR","extrasName":"UNMR DOMESTIC","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"UPGR","extrasName":"UPGRADE","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"UPMA","extrasName":"UPMA","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"VISA","extrasName":"VISA CHECK","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"VS5K","extrasName":"VISA CREDIT CARD PROMOTION","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"VVIP","extrasName":"VIP PASSENGER","contents":null,"price":"0.0","currency":null,"stSeq":0,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"GENERAL","extrasCode":"PRTG","extrasName":"수하물 우선하기","contents":null,"price":"0.0","currency":null,"stSeq":9,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"GENERAL","extrasCode":"PRTG","extrasName":"수하물 우선하기","contents":null,"price":"0.0","currency":null,"stSeq":9,"saveFileName":null,"saveFlNo":0,"atchFileMappingInfoVO":null,"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":null,"autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"MEALS","extrasCode":"SPGML","extrasName":"오동통 쉬림프 샐러드","contents":"샐러드","price":"0.0","currency":null,"stSeq":167,"saveFileName":"d117b775ae8647a89da611e8e98432c81","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":20100,"stSeq":0,"rgstDttm":1535014326000,"rgtntId":"120722K","rgstIp":"121.65.58.115","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2018/0823","pblcSavPth":"/prd/2018/0823","orglFlNm":"오동통.jpg","orglFlExt":"jpg","savFlNm":"d117b775ae8647a89da611e8e98432c81","flSz":376225,"rgstDttmStr":"2018-08-23 17:52:06","flSzStr":"367.41 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"MEALS","extrasCode":"SPGML","extrasName":"오동통 쉬림프 샐러드","contents":"샐러드","price":"0.0","currency":null,"stSeq":167,"saveFileName":"d117b775ae8647a89da611e8e98432c81","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":20100,"stSeq":0,"rgstDttm":1535014326000,"rgtntId":"120722K","rgstIp":"121.65.58.115","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2018/0823","pblcSavPth":"/prd/2018/0823","orglFlNm":"오동통.jpg","orglFlExt":"jpg","savFlNm":"d117b775ae8647a89da611e8e98432c81","flSz":376225,"rgstDttmStr":"2018-08-23 17:52:06","flSzStr":"367.41 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"MEALS","extrasCode":"SWGML","extrasName":"이탈리안 닭가슴살 샌드위치","contents":"샌드위치","price":"0.0","currency":null,"stSeq":168,"saveFileName":"9e954d65e282461c9ba4999ec481f7061","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":20102,"stSeq":0,"rgstDttm":1535014387000,"rgtntId":"120722K","rgstIp":"121.65.58.115","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2018/0823","pblcSavPth":"/prd/2018/0823","orglFlNm":"이탈리안닭가슴살.jpg","orglFlExt":"jpg","savFlNm":"9e954d65e282461c9ba4999ec481f7061","flSz":356443,"rgstDttmStr":"2018-08-23 17:53:07","flSzStr":"348.09 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"MEALS","extrasCode":"SWGML","extrasName":"이탈리안 닭가슴살 샌드위치","contents":"샌드위치","price":"0.0","currency":null,"stSeq":168,"saveFileName":"9e954d65e282461c9ba4999ec481f7061","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":20102,"stSeq":0,"rgstDttm":1535014387000,"rgtntId":"120722K","rgstIp":"121.65.58.115","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2018/0823","pblcSavPth":"/prd/2018/0823","orglFlNm":"이탈리안닭가슴살.jpg","orglFlExt":"jpg","savFlNm":"9e954d65e282461c9ba4999ec481f7061","flSz":356443,"rgstDttmStr":"2018-08-23 17:53:07","flSzStr":"348.09 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"MEALS","extrasCode":"BSGML","extrasName":"한 입 가득 불고기 치아바타 샌드위치","contents":"샌드위치","price":"0.0","currency":null,"stSeq":169,"saveFileName":"61677aa9326547b6b803c7d85be560611","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":20103,"stSeq":0,"rgstDttm":1535014411000,"rgtntId":"120722K","rgstIp":"121.65.58.115","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2018/0823","pblcSavPth":"/prd/2018/0823","orglFlNm":"치아바타.jpg","orglFlExt":"jpg","savFlNm":"61677aa9326547b6b803c7d85be560611","flSz":381679,"rgstDttmStr":"2018-08-23 17:53:31","flSzStr":"372.73 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"MEALS","extrasCode":"BSGML","extrasName":"한 입 가득 불고기 치아바타 샌드위치","contents":"샌드위치","price":"0.0","currency":null,"stSeq":169,"saveFileName":"61677aa9326547b6b803c7d85be560611","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":20103,"stSeq":0,"rgstDttm":1535014411000,"rgtntId":"120722K","rgstIp":"121.65.58.115","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2018/0823","pblcSavPth":"/prd/2018/0823","orglFlNm":"치아바타.jpg","orglFlExt":"jpg","savFlNm":"61677aa9326547b6b803c7d85be560611","flSz":381679,"rgstDttmStr":"2018-08-23 17:53:31","flSzStr":"372.73 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"MEALS","extrasCode":"CHGML","extrasName":"건강 가득 닭가슴살 샐러드","contents":"샐러드","price":"0.0","currency":null,"stSeq":176,"saveFileName":"e56153a0334e4e3d8f34135cc3fc1a812","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":35850,"stSeq":0,"rgstDttm":1564983649000,"rgtntId":"162550K","rgstIp":"121.65.58.114","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2019/0805","pblcSavPth":"/prd/2019/0805","orglFlNm":"치킨샐러드.jpg","orglFlExt":"jpg","savFlNm":"e56153a0334e4e3d8f34135cc3fc1a812","flSz":470286,"rgstDttmStr":"2019-08-05 14:40:49","flSzStr":"459.26 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"MEALS","extrasCode":"CHGML","extrasName":"건강 가득 닭가슴살 샐러드","contents":"샐러드","price":"0.0","currency":null,"stSeq":176,"saveFileName":"e56153a0334e4e3d8f34135cc3fc1a812","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":35850,"stSeq":0,"rgstDttm":1564983649000,"rgtntId":"162550K","rgstIp":"121.65.58.114","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2019/0805","pblcSavPth":"/prd/2019/0805","orglFlNm":"치킨샐러드.jpg","orglFlExt":"jpg","savFlNm":"e56153a0334e4e3d8f34135cc3fc1a812","flSz":470286,"rgstDttmStr":"2019-08-05 14:40:49","flSzStr":"459.26 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"MEALS","extrasCode":"PASML","extrasName":"파스트라미 샌드위치","contents":"샌드위치","price":"0.0","currency":null,"stSeq":177,"saveFileName":"ef2e9d323f0943e5bb56dd617c75a85d2","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":35849,"stSeq":0,"rgstDttm":1564983630000,"rgtntId":"162550K","rgstIp":"121.65.58.114","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2019/0805","pblcSavPth":"/prd/2019/0805","orglFlNm":"파스트라미.jpg","orglFlExt":"jpg","savFlNm":"ef2e9d323f0943e5bb56dd617c75a85d2","flSz":465950,"rgstDttmStr":"2019-08-05 14:40:30","flSzStr":"455.03 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"MEALS","extrasCode":"PASML","extrasName":"파스트라미 샌드위치","contents":"샌드위치","price":"0.0","currency":null,"stSeq":177,"saveFileName":"ef2e9d323f0943e5bb56dd617c75a85d2","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":35849,"stSeq":0,"rgstDttm":1564983630000,"rgtntId":"162550K","rgstIp":"121.65.58.114","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2019/0805","pblcSavPth":"/prd/2019/0805","orglFlNm":"파스트라미.jpg","orglFlExt":"jpg","savFlNm":"ef2e9d323f0943e5bb56dd617c75a85d2","flSz":465950,"rgstDttmStr":"2019-08-05 14:40:30","flSzStr":"455.03 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"4","extrasType":"MEALS","extrasCode":"SALML","extrasName":"훈제 연어 샐러드","contents":"샐러드","price":"0.0","currency":null,"stSeq":178,"saveFileName":"9dbd7daf7700422eb91fd69148c685fa2","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":35848,"stSeq":0,"rgstDttm":1564983615000,"rgtntId":"162550K","rgstIp":"121.65.58.114","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2019/0805","pblcSavPth":"/prd/2019/0805","orglFlNm":"연어샐러드.jpg","orglFlExt":"jpg","savFlNm":"9dbd7daf7700422eb91fd69148c685fa2","flSz":311175,"rgstDttmStr":"2019-08-05 14:40:15","flSzStr":"303.88 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null},{"segmentId":"14","extrasType":"MEALS","extrasCode":"SALML","extrasName":"훈제 연어 샐러드","contents":"샐러드","price":"0.0","currency":null,"stSeq":178,"saveFileName":"9dbd7daf7700422eb91fd69148c685fa2","saveFlNo":0,"atchFileMappingInfoVO":{"mapnNo":0,"tbNm":null,"tbKey":null,"flCtgr":null,"flNo":35848,"stSeq":0,"rgstDttm":1564983615000,"rgtntId":"162550K","rgstIp":"121.65.58.114","rgstChnlCd":"PCW","keepMapnNos":null,"savPth":"/tb_ancly_svc/2019/0805","pblcSavPth":"/prd/2019/0805","orglFlNm":"연어샐러드.jpg","orglFlExt":"jpg","savFlNm":"9dbd7daf7700422eb91fd69148c685fa2","flSz":311175,"rgstDttmStr":"2019-08-05 14:40:15","flSzStr":"303.88 KB"},"weight":null,"paxType":null,"guestId":null,"disableYN":null,"icon":null,"cate":"MEAL","autoCheckIn":false,"origin":null,"childSsrInfo":null,"unit":null}],"extrasBundleList":[],"selectedCodeList":[]},"basePnr":"ConfirmPriceRQ","baggageType":"KG","langCd":null,"jiniPlusList":null,"offlineExtras":false}';
			SeatRes = JSON.parse(data);	
		}
		catch(e) {
			extrasError(e);
		}

		getExtras('seat');

		
		
		
		$(document).ready(function(){
			
		});

					
			window.onload = function () {				
				try {
					if (SeatRes.basePnr == "ConfirmPriceRQ") {
						netfunnelVisible = true;
						NetFunnel_Complete();	
					}	
				}
				catch(e) {
					
				}
			}
		
	</script>
	


        <div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div>

        





	


	

<div id="footer">
	<div class="head">
		<div class="wrap">
			<div class="quickMenu">
				<h2>회사안내</h2>
				<ul>
					<li><a href="/company/announce/announceList" data-click-area="Footer-회사안내" data-click-name="공지사항">공지사항</a></li>
					
						<li><a href="https://jinair.career.co.kr/jobs/" target="_blank" title="새창열림" data-click-area="Footer-회사안내" data-click-name="채용정보">채용정보</a></li>
					
					<li><a href="/company/ceo" data-click-area="Footer-회사안내" data-click-name="ceo인사말">CEO인사말</a></li>
					<li><a href="/company/company" data-click-area="Footer-회사안내" data-click-name="기업개요">기업개요</a></li>
					 <!-- 2020.03.26 국문 && 영문 이 아니면 비노출, 기업지배구조 헌장 > 기업지배구조 명칭 변경 -->
						<li><a href="/company/governance" data-click-area="Footer-회사안내" data-click-name="기업지배구조">기업지배구조</a></li>
					
					 <!-- 2020.03.26 국문 && 영문 이 아니면 비노출, 기업지배구조 헌장 > 기업지배구조 명칭 변경 --><!-- 2021.12.27 영문 윤리경영 비표출 -->
						<li><a href="/company/ethics" data-click-area="Footer-회사안내" data-click-name="윤리경영">윤리경영</a></li>
					
					<li><a href="/company/ci" data-click-area="Footer-회사안내" data-click-name="ci소개">CI소개</a></li>
					<li><a href="/company/aircraft" data-click-area="Footer-회사안내" data-click-name="항공기소개">항공기 소개</a></li>
					
						<li><a href="/company/invest/stock" data-click-area="Footer-회사안내" data-click-name="투자정보">투자정보</a></li>
					
					<li><a href="/company/freight" data-click-area="Footer-회사안내" data-click-name="화물운송">화물운송</a></li>
					
						<li><a href="/company/center/newsList" data-click-area="Footer-회사안내" data-click-name="홍보센터">홍보센터</a></li>
					
					
				</ul>
			</div>
			<div class="quickMenu">
				<h2>약관 및 안내</h2>
				<ul>
					<li><a href="/policy/privacy/latest" ><strong data-click-area="Footer-약관및안내" data-click-name="개인정보 처리방침">개인정보 처리방침</strong></a></li>
					<li><a href="/policy/homepageuse/latest" data-click-area="Footer-약관및안내" data-click-name="홈페이지 이용약관">홈페이지 이용약관</a></li>
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
					<li><a href="/customer/faq" data-click-area="Footer-고객서비스" data-click-name="자주 묻는 질문(FAQ)">자주 묻는 질문(FAQ)</a></li>
					<li><a href="/qna/addQna" data-click-area="Footer-고객서비스" data-click-name="고객의 말씀(Q&A)">고객의 말씀(Q&amp;A)</a></li>
					
					
						<li><a href="/ready/baggage?directID=baggage4" data-click-area="Footer-고객서비스" data-click-name="기내 유실물 찾기">기내 유실물 찾기</a></li>
					
					
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
<script type="text/javascript"  src="../hGuW/6TaH/O7/2imk/mUTA/J9Yw4VmQ/MWFhNw/ARYn/NisOdHk"></script></body>


</html>