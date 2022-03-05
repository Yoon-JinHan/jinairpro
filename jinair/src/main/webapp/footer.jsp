<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div>

<div class="quickNav"><div class="wrap">
	<div class="setArea">
		<div class="slideCont">
			<ul class="swiper-wrapper">
				
				<li class="swiper-slide coupon"><a href="/mypage/coupons" data-click-area="Navigation-Btm" data-click-name="지니쿠폰">지니쿠폰</a></li>
				<li class="swiper-slide point"><a href="/mypage/nabipoint/pointList" data-click-area="Navigation-Btm" data-click-name="나비포인트">나비포인트</a></li>
				<li class="swiper-slide reser"><a href="/mypage/getReservationList" data-click-area="Navigation-Btm" data-click-name="예약확인">예약 확인</a></li>
			</ul>
		</div>
		<button class="prev">이전</button>
		<button class="next">다음</button>
	</div>
	<p class="text">
		<c:if test="${ userDTO == null }">
			<a>나비포인트와 지니쿠폰을 통해 더욱 합리적인 여행을 계획하세요.</a>
		</c:if>
		<c:if test="${ userDTO != null }">
			<a href="/mypage/nabipoint/pointSave" data-click-area="Navigation-Btm" data-click-name="개인화 텍스트"> ${ userDTO.m_name } 고객님, 여행 다녀 오신 후 나비포인트 적립 잊지 않으셨죠?</a>
		</c:if>

		
	</p>
</div></div><!-- //quickBtn -->
<div class="quickSet">
	<p class="btn"><a href="#" onclick="showQuickSet(); return false" class="transition">자주 찾는 메뉴</a></p>
	<ul>
		<li class="coupon"><a href="/mypage/coupons" data-click-area="Navigation-Btm" data-click-name="지니쿠폰">지니쿠폰</a></li>
		<li class="point"><a href="/mypage/nabipoint/pointList" data-click-area="Navigation-Btm" data-click-name="나비포인트">나비포인트</a></li>
		<li class="reser"><a href="/mypage/getReservationList" data-click-area="Navigation-Btm" data-click-name="예약확인">예약 확인</a></li>
	</ul>
</div>

<div id="footer">
	<div class="head">
		<div class="wrap">
			<div class="quickMenu">
				<h2>회사안내</h2>
				<ul>
					<li><a href="/jinair/project/noticeList.do" data-click-area="Footer-회사안내" data-click-name="공지사항">공지사항</a></li>
					
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
					
					
					
					<li><a href="project/eTicket.jsp" data-click-area="Footer-약관및안내" data-click-name="e-티켓 확인증 법적 고지문">e-티켓 확인증 법적 고지문</a></li>
					
					<li><a href="javascript://" onclick="showPopupLayer('/popup/sitemap'); return false" data-click-area="Footer-약관및안내" data-click-name="사이트맵">사이트맵</a></li>
				</ul>
			</div>
			<div class="quickMenu">
				<h2>고객서비스</h2>
				<ul>
					<li><a href="/jinair/project/faqList.do" data-click-area="Footer-고객서비스" data-click-name="자주 묻는 질문(FAQ)">자주 묻는 질문(FAQ)</a></li>
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
			
			<a href="javascript://" onclick="eFormDownload('2018년 ISMS 갱신 인증서_국문.pdf');" title="새창열림" data-click-area="Footer-ISMS" data-click-name="ISMS"><img src="//images.jinair.com/images/layout/ico_isms.png" alt="정보보호관리체계(ISMS)인증서"></a>
			

			
		</div>
	</div></div>
</div><!-- //footer -->

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
