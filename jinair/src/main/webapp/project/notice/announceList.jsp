<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<title>공지사항 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />
<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022010609"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022010609"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?v=2022010609"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022010609"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022010609" />
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022010609" />
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_=2022010609"/><!-- 신규 나이포인트 관련 css 추가 -->
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022010609" media="all and (max-width:1024px)" />
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022010609" media="all and (max-width:640px)" />
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


var	globalImageServer = 'images.jinair.com';
var	globalLoginYn = ('Y' == '') ? 'Y' : 'N';


var __global__ = __global__ || {};
__global__ = {
	
	imageServer: 'images.jinair.com',
	loginYn: 'N',
	accessChannel: '',
	csrfHeader: 'X-CSRF-TOKEN',
	csrfToken: '6e378ddd-a269-4452-a3db-31c361d00405',
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
})(window,document,'script','/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568180014|SS!737@252:1641431746221'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<body>

<div id="wrapper">

<%@ include file="/project/header.jsp" %>

		
<div id="container">
	
<div class="heading bn">
	<h1 class="typeA">공지사항</h1>
	<p class="srmy">진에어의 다양한 소식을 알려드립니다.</p>
</div>

<fieldset class="search">
	<legend>공지사항 검색</legend>
	<form name="searchForm" id="searchForm" action="/jinair/project/noticeList.do">
		<input type="text" name="searchWord" id="searchWord" value="${param.searchWord }" placeholder="검색어를 입력하세요." title="검색어" maxlength="333">
		<button class="btnTypeA" id="btnSearch" title="검색">검색</button>
	</form>
</fieldset>

<table class="bbsList typeB">
	<caption>공지사항 목록</caption>
	<colgroup>
		<col width="11%">
		<col width="">
		<col width="25%">
	</colgroup>
	<thead>
		<tr>
			<th scope="col">번호</th>
			<th scope="col">제목</th>
			<th scope="col">등록일</th>
		</tr>
	</thead>
	<tbody>
		<!-- list의 noticeList를 반복문 돌려서 값 가져옴 -->
		<c:forEach var="row" items="${list.noticeList }">
			<tr>
				<td>${row.no }</td>
				<td style="text-align : left;">
					<a href="/jinair/project/noticeView.do?num=${ row.n_no }&page=${ param.page }&searchWord=${ param.searchWord }">${row.title }</a>
				</td>
				<td>${row.n_date }</td>
			</tr>
		</c:forEach>

	</tbody>
</table>

<!-- 관리자 IP일 경우에만 게시글 작성 나타남 -->
<c:set var="admin" value="<%=adminCheck %>"></c:set>
<c:if test="${admin eq '1'}">
	<p style="float:right"><a href="/jinair/project/writeNoice.do">게시글 작성</a></p>
</c:if>

<!-- 페이징 처리 -->
<ul class="paging">
<c:set var="total" value="${list.pageTotalCount }"></c:set>
<%
	//페이징 처리 확인을 위해 페이징블럭을 2로 하였음
	
	//page 파라미터가 없으면 현재 페이지를 1로 초기화
	String currentPage=request.getParameter("page")==null||request.getParameter("page").isEmpty() ? "1" : request.getParameter("page");
	int icurrentPage=Integer.parseInt(currentPage);
	
	//페이징 블럭의 시작 페이지 : 현재페이지가 짝수일 경우 현재페이지-1이 페이징 블럭의 시작페이지
	int startPage=icurrentPage%2==0 ? icurrentPage-1 : icurrentPage;
	
	//페이징 블럭의 마지막 페이지 : 시작 페이지+1
	int endPage=startPage+1;
	
	//endPage가 totalPageCount값을 넘었을때의 처리
	String strEPage=pageContext.getAttribute("total").toString();
	if(Integer.parseInt(strEPage)<endPage){
		endPage=startPage;
	}
%>

<!-- 페이징블록 이동-->
<c:if test="${not empty param.page&&param.page!=1&&param.page!=2}">
	<li class='btnL2'><a href="/jinair/project/noticeList.do?page=1&searchWord=${param.searchWord}">1페이지</a></li>
	<li class='btnL'><a href="/jinair/project/noticeList.do?page=<%=startPage-2 %>&searchWord=${param.searchWord}">이전2페이지</a></li>
</c:if>
<!-- 페이지번호 출력 -->
<%
	for(int i=startPage; i<=endPage; i++){
		if(i==icurrentPage){
%>
			<li><strong><%=i %></strong></li>
<%
		}else{
%>
		<li><a href="/jinair/project/noticeList.do?page=<%=i %>&searchWord=${param.searchWord}"><%=i %></a></li>
<%			
		}	
	}
%>

<!-- 페이징 블록 이동 -->
<c:if test="${param.page+1<list.pageTotalCount }">
	<c:choose>
		<c:when test="${empty param.page }">	
			<li class='btnR'><a href="/jinair/project/noticeList.do?page=${param.page+3 }&searchWord=${param.searchWord}">다음2페이지</a></li>
		</c:when>
		<c:when test="${not empty param.page }">
			<li class='btnR'><a href="/jinair/project/noticeList.do?page=<%=endPage+1 %>&searchWord=${param.searchWord}">다음2페이지</a></li>
		</c:when>
	</c:choose>
	<li class='btnR2'><a href="/jinair/project/noticeList.do?page=${list.pageTotalCount }&searchWord=${param.searchWord}">다음2페이지</a></li>
</c:if>
</ul>
</div>
<div class="chatbot_wrap" role="chatbot-parent" data-type="01" style="display: none;"></div>
<%@include file="/project/footer.jsp" %>
\

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
	<script type="text/javascript"  src="/4Gp9P3IVeqQ1r/OdxSYQE0Cxf/_uY/1raY6GmJEa9t/MigqcywGTg/X15O/WTweMUE"></script></body>
</html>
