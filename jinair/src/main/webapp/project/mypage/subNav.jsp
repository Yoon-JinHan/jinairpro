<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="subNav">
	<p class="tit">마이<br>페이지</p>

	<div class="slideCont">
				
		<ul class="mypage num6 swiper-wrapper">
			<li class="booking swiper-slide on"><a href="/mypage/getReservationList" data-click-area="마이페이지-SubGnb" data-click-name="예약조회/변경/취소">예약조회/변경/취소</a></li>
			<li class="point swiper-slide on"><a href="<%= contextPath %>/project/mypage/pointList.jsp" data-click-area="마이페이지-SubGnb" data-click-name="나의 나비포인트">나의 나비포인트<br><span class="num">${ userDTO.point }p</span></a></li>	
			
			<li class="coupon swiper-slide on"><a href="<%= contextPath %>/project/mypage/couponlist.do" data-click-area="마이페이지-SubGnb" data-click-name="나의 할인쿠폰">나의 할인쿠폰<br><span class="num">${ userDTO.couponCnt }</span></a></li>
			<li class="qna swiper-slide on"><a href="/mypage/qnaList" data-click-area="마이페이지-SubGnb" data-click-name="나의Q&A">나의 Q&amp;A<br></a></li>
			<li class="modify swiper-slide on"><a href="javascript://" onclick="showPopupLayer('<%= contextPath %>/project/member/popup/passwordCheckLayer.jsp?moveCode=001');" data-click-area="마이페이지-SubGnb" data-click-name="회원정보수정">회원정보 수정</a></li>
		</ul>

	</div>
</div>

