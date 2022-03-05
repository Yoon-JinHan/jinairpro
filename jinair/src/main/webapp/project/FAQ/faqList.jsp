<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("utf-8"); %>

<!DOCTYPE html>
<html lang="ko">
	

	
	<head>
		
		
		<title>자주 묻는 질문(FAQ) | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022010710"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022010710"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?v=2022010710"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022010710"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022010710" />
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022010710" />
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_=2022010710"/><!-- 신규 나이포인트 관련 css 추가 -->
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022010710" media="all and (max-width:1024px)" />
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022010710" media="all and (max-width:640px)" />
		

		
<%
  //관리자 IP 체크
  String ipAddress=request.getRemoteAddr();
  if(ipAddress.equalsIgnoreCase("0:0:0:0:0:0:0:1")){
      InetAddress inetAddress=InetAddress.getLocalHost();
      ipAddress=inetAddress.getHostAddress();
  }
  String adminCheck="0";
  if(ipAddress.equals("192.168.219.101")){
	  adminCheck="1";
  }
%>			



<script type="text/javascript">
document.domain = 'jinair.com';


var	globalImageServer = 'images.jinair.com';
var	globalLoginYn = ('Y' == '') ? 'Y' : 'N';


var __global__ = __global__ || {};
__global__ = {
	
	imageServer: 'images.jinair.com',
	loginYn: 'N',
	accessChannel: '',
	csrfHeader: 'X-CSRF-TOKEN',
	csrfToken: '2ecde4fd-330f-4f70-9089-81ef6e724d70',
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

		


<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','https://www.jinair.com/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568520024|SS!18991@256:1641621452051'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-1.10.2.min.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2022010710"></script>

		
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=2ecde4fd-330f-4f70-9089-81ef6e724d70"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010710"></script>
		<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022010710"></script>
		<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010710" async></script>

		
		<!--[if IE 9]>
		<link rel="stylesheet" href="//images.jinair.com/css/content.ie9.css?_=2022010710"/>
		<![endif]-->
		<!--[if lte IE 8]>
		<link rel="stylesheet" href="//images.jinair.com/css/content.ie8.css?_=2022010710"/>
		<script type="text/javascript" src="/js/hom/pub/front/respond.min.js?_=2022010710"></script>
		<script type="text/javascript" src="/js/hom/pub/front/jquery-ui.ie8.js?_=2022010710"></script>
		<![endif]-->

		
		

		
		
<meta name="_csrf" content="2ecde4fd-330f-4f70-9089-81ef6e724d70"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>




<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/customer/faq.js"></script> -->


	</head>

	
	<body>
		
		<script type="text/javascript">
		_dl = AAnalytics.dl();
		</script>

		
<div id="wrapper">
	

<%@include file="/project/header.jsp" %>


<div id="container">
	<div class="heading">
		<h1 class="typeA">자주 묻는 질문(FAQ)</h1>
		<p class="srmy">
		고객님께서 자주 문의 하시는 질문 및 답변을 <span>모아 놓았습니다.</span>
	</p>
	</div>
	<div class="tabArea tabFaq">
		<ul id="ctgrTabList" class="tabTypeA">
			<li class="oneDepth">
				<a href="javascript://" class="searchFAQ" id="allFAQ">전체</a>
			</li>
				<li class="oneDepth">
					<a href="javascript://" id="예매" class="searchFAQ">항공권 예매</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="예약,결제" class="searchDtlFAQ">예약・결제</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="변경,환불" class="searchDtlFAQ">변경・환불</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="사전좌석지정" class="searchDtlFAQ">사전좌석지정</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="지니플러스 좌석" class="searchDtlFAQ">지니플러스 좌석</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="번들 서비스" class="searchDtlFAQ">번들 서비스</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기타(영수증 발급 등)" class="searchDtlFAQ">기타(영수증 발급 등)</a>
							</li>		
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="할인제도" class="searchFAQ">할인제도</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="가족운임 할인제도" class="searchDtlFAQ">가족운임 할인제도</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="명예도민" class="searchDtlFAQ">제주・재외・명예도민 할인제도</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기타 제휴 할인" class="searchDtlFAQ">기타 제휴 할인</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="프로모션" class="searchFAQ">프로모션</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="진MARKET" class="searchDtlFAQ">진MARKET</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="슬림한 진" class="searchDtlFAQ">슬림한 진</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="체크인" class="searchFAQ">체크인(수속)</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="공항 체크인" class="searchDtlFAQ">공항 체크인</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="웹,모바일 체크인" class="searchDtlFAQ">웹・모바일 체크인</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="셀프 체크인" class="searchDtlFAQ">셀프 체크인</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="여행서류" class="searchDtlFAQ">여행서류</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="수하물" class="searchFAQ">수하물</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="휴대 수하물" class="searchDtlFAQ">휴대 수하물</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="위탁 수하물" class="searchDtlFAQ">위탁 수하물</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기내 유실물" class="searchDtlFAQ">기내 유실물</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="수하물 배상" class="searchDtlFAQ">수하물 배상</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="도움" class="searchFAQ">도움이 필요하신 고객</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="유아동반,임산부 고객" class="searchDtlFAQ">유아동반・임산부 고객</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="반려동물과 여행하는 고객" class="searchDtlFAQ">반려동물과 여행하는 고객</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="몸이 불편하신 고객" class="searchDtlFAQ">몸이 불편하신 고객</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="보조호흡장치 사용 고객" class="searchDtlFAQ">보조호흡장치 사용 고객</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="기내서비스" class="searchFAQ">기내서비스</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="기내식" class="searchDtlFAQ">기내식</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기내유상판매" class="searchDtlFAQ">기내유상판매</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기내 면세품" class="searchDtlFAQ">기내 면세품</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기타 서비스" class="searchDtlFAQ">기타 서비스</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="홈페이지" class="searchFAQ">홈페이지</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="회원가입,변경" class="searchDtlFAQ">회원가입・변경</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="비회원" class="searchDtlFAQ">비회원</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="탈퇴" class="searchDtlFAQ">탈퇴</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="기타" class="searchDtlFAQ">기타</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="공동운항" class="searchFAQ">공동운항</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="대한항공 공동운항" class="searchDtlFAQ">대한항공 공동운항</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="나비포인트" class="searchFAQ">나비포인트</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="적립,소멸" class="searchDtlFAQ">적립・소멸</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="보너스 항공권" class="searchDtlFAQ">사용(보너스 항공권)</a>
							</li>
						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
				<li class="oneDepth">
					<a href="javascript://" id="기타" class="searchFAQ">기타</a>
					<div class="sub_depth checkClose">
						<ul class="checkClose">
							<li class="checkClose">
								<a href="javascript://" id="회사안내" class="searchDtlFAQ">회사안내</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="고객센터" class="searchDtlFAQ">고객센터</a>
							</li>
							<li class="checkClose">
								<a href="javascript://" id="제휴,문의 등" class="searchDtlFAQ">제휴・문의 등</a>
							</li>

						</ul>
						<div class="close"><a href="javascript:;"><span>닫기</span></a></div>
					</div>
				</li>
			
			<li><a href="/customer/download">e-서식함</a></li>
		</ul>
	</div>

	<fieldset class="search">
		<legend>FAQ 검색</legend>
		<form id="searchForm" action="/jinair/project/faqList.do">
			<input type="hidden" name="searchCtgrCd" value=""/>
			<input type="hidden" name="searchCtgrDtlCd" value=""/>
			<input type="text" name="searchWord" id="word" placeholder="전체 FAQ에서 검색합니다." onkeydown="enterCheck();" title="검색어" value="">
			<button class="btnTypeA" id="btnSearch" title="검색">검색</button>
		</form>			
	</fieldset>

	<table class="bbsList typeB faqList">
		<caption>FAQ 목록</caption>
		<colgroup>		
				<col width="10%">
				<col width="18%">
				<col width="">
		</colgroup>
		<thead>
			<tr>
				<th scope="col">번호</th>
				<th scope="col">상세분류</th>
				<th scope="col">제목</th>
			</tr>
		</thead>
		<tbody>
			<%int index=1; %>
			<c:forEach var="row" items="${list.faqList }">
				<tr>
					<td>${row.num }</td>
					<td>${row.f_group }</td>
					<td class="al"><p class="question">
					<a href="#faq<%=index %>" onclick="showFaq(this); return false" class="icoFold">${row.title }</a></p></td>
				</tr>
				<tr class="faqCont" id="faq<%=index%>">
					<td colspan="3">
						<div class="cont">
 						<%--<textarea id="ctn" style="diplay:block;">${row.content }</textarea> --%>
						<p>${row.content }</p>
						</div>
						<p class="close"><a href="javascript://" onclick="hideFaq(this); return false" title="닫기">닫기</a></p>
							<c:set var="admin" value="<%=adminCheck %>"></c:set>
							<c:if test="${admin eq '1'}">
								<p style="float:right;"><a href="/jinair/project/editFaq.do?num=${row.f_no }&page=${param.page}&searchWord=${param.searchWord}">수정</a>&nbsp;&nbsp;&nbsp;&nbsp;
									<a href="/jinair/project/deleteFaq.do?num=${row.f_no }&page=${param.page}&searchWord=${param.searchWord}" onclick="return confirm('정말 삭제하시겠습니까?')">삭제</a>
								</p>
							</c:if>
					</td>
				</tr>
				<%index++; %>
			</c:forEach>
			<%index=1; %>
		</tbody>
	</table>
	<p style="float:right"><a href="/jinair/project/writeFaq.do">FAQ 작성</a></p>
	<ul class="paging">
		<c:set var="total" value="${list.pageTotalCount }"></c:set>
		<%
			int pageNum=2;
			String currentPage=request.getParameter("page")==null||request.getParameter("page").isEmpty() ? "1" : request.getParameter("page");
			int icurrentPage=Integer.parseInt(currentPage);
			int startPage=icurrentPage%pageNum==0 ? icurrentPage-1 : icurrentPage;
			int endPage=startPage+1;
			String strEPage=pageContext.getAttribute("total").toString();
			if(Integer.parseInt(strEPage)<endPage){
				endPage=startPage;
			}
		%>
		<c:if test="${not empty param.page&&param.page!=1&&param.page!=2}">
			<li class='btnL2'><a href="/jinair/project/faqList.do?page=1&searchWord=${param.searchWord}">이전2페이지</a></li>
			<li class='btnL'><a href="/jinair/project/faqList.do?page=<%=startPage-2 %>&searchWord=${param.searchWord}">이전2페이지</a></li>
		</c:if>
		<%
			for(int i=startPage; i<=endPage; i++){
				if(i==icurrentPage){
		%>
					<li><strong><%=i %></strong></li>
		<%
				}else{
		%>
				<li><a href="/jinair/project/faqList.do?page=<%=i %>&searchWord=${param.searchWord}"><%=i %></a></li>
		<%			
				}	
			}
		%>
		<c:if test="${param.page+1<list.pageTotalCount }">
			<c:choose>
				<c:when test="${empty param.page }">	
					<li class='btnR'><a href="/jinair/project/faqList.do?page=${param.page+3 }&searchWord=${param.searchWord}">다음2페이지</a></li>
				</c:when>
				<c:when test="${not empty param.page }">
					<li class='btnR'><a href="/jinair/project/faqList.do?page=<%=endPage+1 %>&searchWord=${param.searchWord}">다음2페이지</a></li>
				</c:when>
			</c:choose>
			<li class='btnR2'><a href="/jinair/project/faqList.do?page=${list.pageTotalCount }&searchWord=${param.searchWord}">다음2페이지</a></li>
		</c:if>
	</ul>
	<div class="pointInfo">
		<p>
		더 궁금한 사항이 있으신가요?
	</p>
		<p class="btn">
			<a href="/qna/addQna" title="고객의 말씀(Q&amp;A) 문의하기" class="btnTypeA">고객의 말씀(Q&amp;A) 문의하기</a>
			<a href="/mypage/qnaList" title="나의 Q&amp;A 조회하기" class="btnTypeA">나의 Q&amp;A 조회하기</a>
		</p>
	</div>

	
		<div class="pointInfo">
			<p>원격 지원 서비스</p>
			<a href="https://939.co.kr/adminjinair/" target="_blank" title="원격 지원 서비스" class="btnTypeA">원격 지원 서비스</a>
		</div>
		<div class="guideCont tabCont">
			<h3 class="typeA">
				진에어 100% 활용 꿀팁! TELL ME JINI
				<span class="etcType">
					더 많은 영상을 보고 싶으시다면
					<a href="https://www.youtube.com/user/JinAir0717" class="btnTypeA btn_gallery" target="_blank" title="새 창 열림">진에어 YOUTUBE 공식 채널 바로 가기</a>
				</span>
			</h3>
			<ul class="gallery_list">
				<li>
					<div class="thumb">
						<iframe width="100%" height="200" src="https://www.youtube.com/embed/hC_84y6ZKts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="[진에어] 빨리 수속하는 꿀팁? 항공사 직원에게 무엇이든 물어보세요! (feat. 웹/모바일 체크인) l TELL ME JINI"></iframe>
					</div>
					<p><a href="https://www.youtube.com/watch?v=hC_84y6ZKts" target="_blank" title="새창열림">[진에어] 빨리 수속하는 꿀팁? 항공사 직원에게 무엇이든 물어보세요! (feat. 웹/모바일 체크인) l TELL ME JINI</a></p>
				</li>
				<li>
					<div class="thumb">
						<iframe width="100%" height="200" src="https://www.youtube.com/embed/dw4ooSyp8pY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="[진에어] 국내선 유아 동반 꿀팁 (feat. 아기랑 제주도 여행) l TELL ME JINI"></iframe>
					</div>
					<p><a href="https://www.youtube.com/watch?v=0Klb_AcbczA" target="_blank" title="새창열림">반려동물과 함께 국내선 비행기 타는 법! 쉽고 간단히 설명 드려요~</a></p>
				</li>
				<li>
					<div class="thumb">
						<iframe width="100%" height="200" src="https://www.youtube.com/embed/4XSd1N3PRQA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="3가지만 알아두세요, 여행사이트에서 구매한 항공권 바로 조회하는 법!"></iframe>
					</div>
					<p><a href="https://youtu.be/4XSd1N3PRQA" target="_blank" title="새창열림">3가지만 알아두세요, 여행사이트에서 구매한 항공권 바로 조회하는 법!</a></p>
				</li>
				<li>
					<div class="thumb">
						<iframe width="100%" height="200" src="https://www.youtube.com/embed/8hL7pHAIucQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="국내선 자주묻는 기내 반입 물품! 규정! 항공사에서 직접 정리해드립니다~"></iframe>
					</div>
					<p><a href="https://youtu.be/8hL7pHAIucQ" target="_blank" title="새창열림">국내선 자주묻는 기내 반입 물품! 규정! 항공사에서 직접 정리해드립니다~</a></p>
				</li>
			</ul>
		</div>
	
</div>
<script type="text/javascript">
$(document).ready(function() {
	$('.cont').each(function() {
		$(this).html($(this).find('#ctn').val());
	});

	/*다국어처리*/
	$.i18n.properties({
		name: ['messages', 'common', 'faq', 'company'],
		path: '/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR'
	});
});
$(window).on("load", function(){
	moveFaqTab($("#ctgrTabList li.oneDepth.choice").index());
});
$(window).on("resize", function(){
	moveFaqTab($("#ctgrTabList li.oneDepth.choice").index());
});
</script>


			
			<div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div>

<%@ include file="/project/footer.jsp" %>

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


<script>
window.onload=function(){
	//소분류 박스 이외에 다른 곳 클릭시 소분류박스 사라지게
	$("body").click(function(e){
		if (!$(e.target).hasClass("checkClose")) {
			$( '.tabFaq .tabTypeA > li' ).removeClass( 'active' );
		}
	});
	
	//대분류 클릭시
	$('a.searchFAQ').on('click', function(e){
		var ctgrCd = e.target.getAttribute('id');
		var word = $.trim($('#word').val());
		
		$('#searchForm').find('input[name=searchWord]').val(word == $('#word').attr('placeholder') ? "" : word);
		$('#searchForm').find('input[name=searchCtgrCd]').val(ctgrCd);
		$('#searchForm').find('input[name=searchCtgrDtlCd]').val("");
		$('#searchForm').submit();
	});
	
	//소분류 클릭시
	$('a.searchDtlFAQ').on('click', function(e){
		var ctgrCd = getParameters('searchCtgrCd');
		var ctgrCdDtl = e.target.getAttribute('id');
		var word = $.trim($('#word').val());
		
		$('#searchForm').find('input[name=searchWord]').val(word == $('#word').attr('placeholder') ? "" : word);
		$('#searchForm').find('input[name=searchCtgrCd]').val(ctgrCd);
		$('#searchForm').find('input[name=searchCtgrDtlCd]').val(ctgrCdDtl);
		$('#searchForm').submit();
	});
	
	
	$(document).on('click', '#btnSearch', function(){
		var word = $.trim($('#word').val());
		var ctgrCd = getParameters('searchCtgrCd');
		var ctgrCdDtl =getParameters('searchCtgrDtlCd');
		if(word == $('#word').attr('placeholder')){
			$('#searchForm').find('input[name=searchWord]').val("");
		} else {
			$('#searchForm').find('input[name=searchWord]').val(word);
			$('#searchForm').find('input[name=searchCtgrCd]').val(ctgrCd);
			$('#searchForm').find('input[name=searchCtgrDtlCd]').val(ctgrCdDtl);
		}
	
		$('#searchForm').submit();
	});
/* 	
	$( '.tabFaq .tabTypeA > li' ).on( 'click', function() {
		var tabType = $(this).index();
		
		$( '.tabFaq .tabTypeA > li' ).each(function(index) {
			$(this).addClass( 'choice' );
			
			if(tabType != index){
				$(this).removeClass( 'choice active' );
			}
		});
	});
	
	$( '.tabFaq .tabTypeA > li > a' ).on( 'click', function() {
		$(this).parent().toggleClass( 'active' );
	});
	$( '.sub_depth .close a' ).click(function(){ 
		$( '.tabFaq .tabTypeA > li' ).removeClass( 'active' );
	});  */
	
	var getParameters=function(paramName){
		var returnValue;
		var url=location.href;
		if(url.indexOf(paramName)==-1) return '전체';
		var parameters=(url.slice(url.indexOf('?')+1, url.length)).split('&');
		
		for(var i=0;i<parameters.length;i++){
			var varName=parameters[i].split('=')[0];
			if(varName==paramName){
				returnValue=parameters[i].split('=')[1];
				return decodeURIComponent(returnValue);
			}
		}
	}
	if(getParameters('searchCtgrCd')=='전체'||getParameters('searchCtgrCd')==''){
		$(".oneDepth").removeClass("choice active");
		$("#allFAQ").parent().addClass("choice active");
	}else{		
		$(".oneDepth").removeClass("choice active");
		$("#"+getParameters('searchCtgrCd')).parent().addClass("choice active");
	}
};

function showFaq(obj){
	var target = $(obj).attr("href");
	$(obj).toggleClass("on");
	$(target).add($(target).find("td")).toggle();
	var faqSeq = $(obj).parent().parent().parent().attr("id");
}
function hideFaq(obj){
	var target = $(obj).parents(".faqCont");
	target.prev("tr").find(".question a").removeClass("on");
	target.add(target.find("td")).hide();
}
/*엔터입력시 submit*/
function enterCheck() {
	var evt_code = (window.netscape) ? event.which : event.keyCode;
	if (evt_code == 13) {
		event.keyCode = 0;
		$("#btnSearch").trigger('click');
	}
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
	<script type="text/javascript"  src="/gex8St/Fk-aFR/AP/PH1k/kraSd8/7pamXDSz/dBkwGSAzdA/VEJuSyI/SIAAB"></script></body>
</html>
