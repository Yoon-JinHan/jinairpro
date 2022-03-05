<%@page import="domain.AuthUserDTO"%>
<%@page import="java.net.InetAddress"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="/contextPath.jspf" %>
<%
	AuthUserDTO dto = (AuthUserDTO)session.getAttribute("userDTO");
%>
<div id="skipNav">
	<a href="#container">본문 바로가기</a>
	<a href="#gnb">메뉴 바로가기</a>
</div>

<div id="header" class="">
	
	<div class="topArea">

		
		<div class="logo"><a href="<%=contextPath %>/jinairfront/www.jinair.com/booking/index.jsp" data-click-area="head-Logo" data-click-name="Jinair">JINAIR</a></div>

		
		<div class="global">
			<ul class="util">
				
				<li id="login-button-area" data-title-login="로그인" data-title-logout="로그아웃">
					
					<c:if test="${ userDTO == null }">
							<a href="<%= contextPath %>/project/login/login.jsp" data-click-area="Gnb" data-click-name="로그인">로그인</a>
					</c:if>
					<c:if test="${ userDTO != null }">
						<a href="<%= contextPath %>/project/login/logout.jsp" data-click-area="Gnb" data-click-name="로그아웃">로그아웃</a>
						<li>
							<a href="<%= contextPath %>/project/mypage/getReservationList.jsp" data-click-area="Gnb" data-click-name="마이페이지" data-check-permission="true">마이페이지</a>
						</li>
					</c:if>
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
							<a href="<%= contextPath %>/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약">항공권 예약</a>
							<ul>
								<li><a href="<%= contextPath %>/booking/index" data-click-area="Gnb-예약" data-click-name="항공권예약_예약">예약</a></li>
								
									<li><a href="<%= contextPath %>/promotion/nowMoment" data-click-area="Gnb-예약" data-click-name="항공권예약_최저가항공권">최저가 항공권</a></li>
								
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/mypage/getReservationList" data-click-area="Gnb-예약" data-click-name="나의예약" data-check-permission="true">나의 예약</a>
							<ul>
								<li><a href="<%= contextPath %>/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="Gnb-예약" data-click-name="나의예약_예약조회/변경/취소" data-check-permission="true">예약 조회/변경/취소</a></li>
								<li><a href="<%= contextPath %>/mypage/getReservationList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="05" data-click-area="Gnb-예약" data-click-name="나의예약_부가서비스신청/취소" data-check-permission="true">부가서비스 신청/취소</a></li>
								<li><a href="<%= contextPath %>/checkin/checkinList" role="link-login-needed" data-login-uri="/login/quickform" data-access-from="06" data-click-area="Gnb-예약" data-click-name="나의예약_웹/모바일체크인" data-check-permission="true">웹/모바일 체크인</a></li>
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/ready/flight" data-click-area="Gnb-예약" data-click-name="운항정보">운항 정보</a>
							<ul>
								<li><a href="<%= contextPath %>/ready/flight?directID=flightCont01" data-click-area="Gnb-예약" data-click-name="운항정보_스케줄 조회">스케줄 조회</a></li>
								<li><a href="<%= contextPath %>/ready/flight?directID=flightCont02" data-click-area="Gnb-예약" data-click-name="운항정보_출도착안내">출도착 안내</a></li>
								<li><a href="<%= contextPath %>/ready/flight?directID=flightCont03" data-click-area="Gnb-예약" data-click-name="운항정보_취항노선안내">취항 노선 안내</a></li>
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/project/ready/fareRules.jsp" data-click-area="Gnb-예약" data-click-name="예약및운임안내">예약 및 운임 안내</a>
							<ul>
								<li><a href="<%= contextPath %>/project/ready/fareRules.jsp?directID=fareRules1" data-click-area="Gnb-예약" data-click-name="예약및운임안내_예매서비스">예매 서비스</a></li>
								<li><a href="<%= contextPath %>/project/ready/fareRules.jsp?directID=fareRules3" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국내선운임">국내선 운임</a></li>
								<li><a href="<%= contextPath %>/project/ready/fareRules.jsp?directID=fareRules4" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국제선운임">국제선 운임</a></li>
								<li><a href="<%= contextPath %>/project/ready/fareRules.jsp?directID=fareRules2" data-click-area="Gnb-예약" data-click-name="예약및운임안내_비즈니스운임">비즈니스 운임</a></li>
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/project/ready/discount.jsp" data-click-area="Gnb-예약" data-click-name="할인안내">할인안내</a>
							<ul>
								<li><a href="<%= contextPath %>/project/ready/discount.jsp?directID=discountCont01" data-click-area="Gnb-예약" data-click-name="할인안내_가족운임할인제도">가족운임 할인제도</a></li>
								
									<li><a href="<%= contextPath %>/project/ready/discount.jsp?directID=discountCont02" data-click-area="Gnb-예약" data-click-name="할인안내_상용우대프로그램">상용우대 프로그램</a></li>
								
								<li><a href="<%= contextPath %>/project/ready/discount.jsp?directID=discountCont03" data-click-area="Gnb-예약" data-click-name="할인안내_제주도민할인제도">제주도민 할인제도</a></li>
								<li><a href="<%= contextPath %>/project/ready/discount.jsp?directID=discountCont04" data-click-area="Gnb-예약" data-click-name="할인안내_재외/명예도민할인제도">재외/명예도민 할인제도</a></li>
								
									<li><a href="<%= contextPath %>/project/ready/discount.jsp?directID=discountCont05" data-click-area="Gnb-예약" data-click-name="할인안내_군산시민할인제도">군산시민 할인제도</a></li>
								
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
							<a href="<%= contextPath %>/project/ready/counter.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스">공항 서비스</a>
							<ul>
								<li><a href="<%= contextPath %>/project/ready/counter.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_공항카운터안내">공항카운터 안내</a></li>
								<li><a href="<%= contextPath %>/project/ready/baggage.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_수하물">수하물</a></li>
								<li><a href="<%= contextPath %>/project/ready/help.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_도움이필요하신고객">도움이 필요하신 고객</a></li>
								<li><a href="<%= contextPath %>/project/ready/checkin.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_체크인안내">체크인 안내</a></li>
								
									<li><a href="<%= contextPath %>/project/ready/arrivalCard.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_입국신고서작성안내">입국신고서 작성 안내</a></li>
								
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/project/flight/guide.jsp" data-click-area="Gnb-서비스" data-click-name="기내서비스">기내 서비스</a>
							<ul>
								<li><a href="<%= contextPath %>/project/flight/guide.jsp" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내여행가이드">기내 여행 가이드</a></li>
								<li><a href="<%= contextPath %>/project/flight/cabinShopping.jsp" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내유상판매">기내유상판매</a></li>
								<li><a href="<%= contextPath %>/project/flight/taxFree.jsp" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내면세품">기내 면세품</a></li>
								
									<li><a href="<%= contextPath %>/project/flight/jiniInsight.jsp" data-click-area="Gnb-서비스" data-click-name="기내서비스_기내매거진">기내 매거진</a></li>
								
								
									<li><a href="<%= contextPath %>/project/flight/eventflight.jsp" data-click-area="Gnb-서비스" data-click-name="기내서비스_이벤트플라잇">이벤트 플라잇</a></li>
								
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/project/flight/bundle.jsp" data-click-area="Gnb-서비스" data-click-name="부가서비스">부가 서비스</a>
							<ul>
								<li><a href="<%= contextPath %>/project/flight/bundle.jsp" data-click-area="Gnb-서비스" data-click-name="부가서비스_번들서비스">번들 서비스</a></li>
								<li><a href="<%= contextPath %>/project/flight/seat.jsp" data-click-area="Gnb-서비스" data-click-name="부가서비스_사전좌석지정">사전좌석지정</a></li>
								<li><a href="<%= contextPath %>/project/flight/airlineFood.jsp" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내식">기내식</a></li>
								<li><a href="<%= contextPath %>/project/flight/jiniPlay.jsp" data-click-area="Gnb-서비스" data-click-name="부가서비스_기내엔터테인먼트">기내 엔터테인먼트</a></li>
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
							<a href="<%= contextPath %>/project/event/eventList.jsp" data-click-area="Gnb-혜택" data-click-name="프로모션">프로모션</a>
							<ul>
								<li><a href="<%= contextPath %>/project/event/eventList.jsp" data-click-area="Gnb-혜택" data-click-name="프로모션_이벤트">이벤트</a></li>
								<li><a href="<%= contextPath %>/project/event/jiniCoupon.jsp" data-click-area="Gnb-혜택" data-click-name="프로모션_지니쿠폰">지니쿠폰</a></li>
							</ul>
						</li>
						
							<li>
								<a href="<%= contextPath %>/project/travel/associatedCard.jsp" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택">카드 및 환전 혜택</a>
								<ul>
									<li><a href="<%= contextPath %>/project/travel/associatedCard.jsp?directID=partnership1" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_제휴카드">제휴 카드</a></li>
									<li><a href="<%= contextPath %>/project/travel/associatedCard.jsp?directID=partnership2" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_환율우대">환율 우대</a></li>
									<li><a href="<%= contextPath %>/project/travel/associatedCard.jsp?directID=partnership3" data-click-area="Gnb-혜택" data-click-name="카드및환전혜택_무이자할부">무이자 할부</a></li>
								</ul>
							</li>
						
						<li>
							<a href="<%= contextPath %>/travel/jinipass" data-click-area="Gnb-혜택" data-click-name="보딩패스 할인">보딩패스 할인</a>
						</li>
						<li>
							<a href="<%= contextPath %>/travel/activity" data-click-area="Gnb-혜택" data-click-name="액티비티">액티비티</a>
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
								<a href="<%= contextPath %>/travel/insurance" data-click-area="Gnb-혜택" data-click-name="여행안심서비스">여행 안심 서비스</a>
								<ul>
									<li><a href="<%= contextPath %>/travel/insurance2" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Chubb해외여행보험">Chubb 해외 여행보험</a></li>
									<li><a href="<%= contextPath %>/travel/insurance3" data-click-area="Gnb-혜택" data-click-name="여행안심서비스_Assistcard여행토탈케어">Assistcard 여행토탈케어</a></li>
								</ul>
							</li>
						
					</ul>
				</div>
			</li>
			<li>
				<a href="javascript://" data-click-area="Gnb" data-click-name="나비포인트">나비포인트</a>
				<div class="sub">
					<ul>
						<li><a href="<%= contextPath %>/mypage/nabipoint/pointList" data-click-area="Gnb-나비포인트" data-click-name="나의나비포인트">나의 나비포인트</a></li>
						<li><a href="<%= contextPath %>/benefit/point?directID=point01" data-click-area="Gnb-나비포인트" data-click-name="적립안내">적립안내</a></li>
						<li><a href="<%= contextPath %>/benefit/point?directID=point02" data-click-area="Gnb-나비포인트" data-click-name="사용안내">사용안내</a></li>
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
					<c:if test="${ userDTO == null }">
						<a href="javascript://" data-click-area="Gnb" data-click-name="Menu(mobile)_회원가입" onclick="top.location.href='<%= contextPath %>/project/member/joinGate.jsp';">회원가입</a>
					</c:if>
					<c:if test="${ userDTO != null }">
						<a href="javascript://" data-click-area="Gnb" data-click-name="Menu(mobile)_회원가입" onclick="top.location.href='<%= contextPath %>/project/mypage/getReservationList.jsp';">마이페이지</a>
					</c:if>
				</li>
				
				<li class="login" id="login-button-area" data-title-login="로그인" data-title-logout="로그아웃">
					
					<c:if test="${ userDTO == null }">
						<a href="<%= contextPath %>/project/login/login.jsp" data-click-area="Gnb" data-click-name="Menu(mobile)_로그인">로그인</a>
					</c:if>
					<c:if test="${ userDTO != null }">
						<a href="<%= contextPath %>/project/login/logout.jsp" data-click-area="Gnb" data-click-name="Menu(mobile)_로그아웃">로그아웃</a>
						
					</c:if>
				</li>
			</ul>
		</div>

		
		<ul id="m_gnb">
			<li class="on">
				<a href="javascript://" data-click-area="Gnb" data-click-name="예약">예약</a>
				<div class="sub">
					<ul>
						<li>
							<a href="<%= contextPath %>/jinairfront/www.jinair.com/booking/index.jsp" data-click-area="Gnb-예약" data-click-name="항공권예약">항공권 예약</a>
							<ul>
								<li><a href="<%= contextPath %>/jinairfront/www.jinair.com/booking/index.jsp" data-click-area="Gnb-예약" data-click-name="항공권예약_예약">예약</a></li>
								
									<li><a href="<%= contextPath %>/promotion/nowMoment.jsp" data-click-area="Gnb-예약" data-click-name="항공권예약_최저가항공권">최저가 항공권</a></li>
								
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/mypage/getReservationList.jsp" data-click-area="Gnb-예약" data-click-name="나의예약">나의 예약</a>
							<ul>
								<li><a href="<%= contextPath %>/mypage/getReservationList.jsp" data-click-area="Gnb-예약" data-click-name="나의예약_예약조회/변경/취소">예약 조회/변경/취소</a></li>
								<li><a href="<%= contextPath %>/mypage/getReservationList.jsp" data-click-area="Gnb-예약" data-click-name="나의예약_부가서비스신청/취소">부가서비스 신청/취소</a></li>
								<li><a href="<%= contextPath %>/checkin/checkinList.jsp" data-click-area="Gnb-예약" data-click-name="나의예약_웹/모바일체크인">웹/모바일 체크인</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/flight" data-click-area="Gnb-예약" data-click-name="운항정보">운항 정보</a>
							<ul>
								<li><a href="<%= contextPath %>/ready/flight.jsp?directID=flightCont01" data-click-area="Gnb-예약" data-click-name="운항정보_스케줄 조회">스케줄 조회</a></li>
								<li><a href="<%= contextPath %>/ready/flight.jsp?directID=flightCont02" data-click-area="Gnb-예약" data-click-name="운항정보_출도착안내">출도착 안내</a></li>
								<li><a href="<%= contextPath %>/ready/flight.jsp?directID=flightCont03" data-click-area="Gnb-예약" data-click-name="운항정보_취항노선안내">취항 노선 안내</a></li>
							</ul>
						</li>
						<li>
							<a href="/ready/fareRules" data-click-area="Gnb-예약" data-click-name="예약및운임안내">예약 및 운임 안내</a>
							<ul>
								<li><a href="<%= contextPath %>/ready/fareRules.jsp?directID=fareRules1" data-click-area="Gnb-예약" data-click-name="예약및운임안내_예매서비스">예매 서비스</a></li>
								<li><a href="<%= contextPath %>/ready/fareRules.jsp?directID=fareRules3" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국내선운임">국내선 운임</a></li>
								<li><a href="<%= contextPath %>/ready/fareRules.jsp?directID=fareRules4" data-click-area="Gnb-예약" data-click-name="예약및운임안내_국제선운임">국제선 운임</a></li>
								<li><a href="<%= contextPath %>/ready/fareRules.jsp?directID=fareRules2" data-click-area="Gnb-예약" data-click-name="예약및운임안내_비즈니스운임">비즈니스 운임</a></li>
							</ul>
						</li>
						<li>
							<a href="<%= contextPath %>/ready/discount.jsp" data-click-area="Gnb-예약" data-click-name="할인안내">할인안내</a>
							<ul>
								<li><a href="<%= contextPath %>/ready/discount.jsp?directID=discountCont01" data-click-area="Gnb-예약" data-click-name="할인안내_가족운임할인제도">가족운임 할인제도</a></li>
								
									<li><a href="<%= contextPath %>/ready/discount.jsp?directID=discountCont02" data-click-area="Gnb-예약" data-click-name="할인안내_상용우대프로그램">상용우대 프로그램</a></li>
								
								<li><a href="<%= contextPath %>/ready/discount.jsp?directID=discountCont03" data-click-area="Gnb-예약" data-click-name="할인안내_제주도민할인제도">제주도민 할인제도</a></li>
								<li><a href="<%= contextPath %>/ready/discount.jsp?directID=discountCont04" data-click-area="Gnb-예약" data-click-name="할인안내_재외/명예도민할인제도">재외/명예도민 할인제도</a></li>
								
									<li><a href="<%= contextPath %>/ready/discount.jsp?directID=discountCont05" data-click-area="Gnb-예약" data-click-name="할인안내_군산시민할인제도">군산시민 할인제도</a></li>
								
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
							<a href="<%= contextPath %>/ready/counter.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스">공항 서비스</a>
							<ul>
								<li><a href="<%= contextPath %>/ready/counter.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_공항카운터안내">공항카운터 안내</a></li>
								<li><a href="/ready/baggage" data-click-area="Gnb-서비스" data-click-name="공항서비스_수하물">수하물</a></li>
								<li><a href="<%= contextPath %>/ready/help.jsp" data-click-area="Gnb-서비스" data-click-name="공항서비스_도움이필요하신고객">도움이 필요하신 고객</a></li>
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
		path: '/i18n/messages/',
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