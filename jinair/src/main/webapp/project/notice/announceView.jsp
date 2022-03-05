<%@ page contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
	
<head>
		
		
<title>공지사항 상세 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />

<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022010614"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022010614"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?v=2022010614"/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022010614"/>
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022010614" />
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022010614" />
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_=2022010614"/><!-- 신규 나이포인트 관련 css 추가 -->
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022010614" media="all and (max-width:1024px)" />
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022010614" media="all and (max-width:640px)" />
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
	csrfToken: 'e1cc4123-a41c-4692-9207-4ff5806d21da',
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
		n$apm: '15474568180014|SS!4473@207:1641464785957'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<meta name="_csrf" content="e1cc4123-a41c-4692-9207-4ff5806d21da"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>
<script type="text/javascript" src="//bit.ly/javascript-api.js?version=latest&amp;login=jinair&amp;apiKey=R_ee93cc6ae5d64805696872ff385c7e62"></script>
<script type="text/javascript" src="/sns/snsShare.js"></script>
</head>

<body>
		
<script type="text/javascript">
_dl = AAnalytics.dl();
</script>
<div id="wrapper">
			
<%@include file="/project/header.jsp" %>

	
<div id="container">
	
	<div class="heading bn">
		<h1 class="typeA">공지사항</h1>
		<p class="srmy">진에어의 다양한 소식을 알려드립니다.</p>
	</div>

	
	<div class="eventView">
		<div class="head" style="height:30px;">
			<input type="hidden" id="page" value="1">

			<p class="snsBtn">
				<a href="https://twitter.com/intent/tweet?text=TEXT&url=http://192.168.219.101:80/jinair/project/noticeView.do?num=${param.num } " target="_black" class="twitter btnTwitterShare" title="트위터 공유하기">트위터 공유하기</a>
				<a href="http://www.facebook.com/sharer/sharer.php?u=http://192.168.219.101:80/jinair/project/noticeView.do?num=${param.num }" " target="_black" class="facebook btnFacebookShare" title="페이스북 공유하기">페이스북 공유하기</a>
			</p>
		</div>
	</div>

	<!-- 핸들러에서 넘어온 데이터 출력 -->
	<c:if test="${dto.size() eq 3 }">
	<div class="pressView">
		<p class="tit">
			${dto[1].title }
			<span class="date">등록일&nbsp;${dto[1].n_date }</span>
		</p>
		<p class="txt">
			${dto[1].content }
		</p>
	</div>
	<p style="float:right"><a href="/jinair/project/updateNoice.do?num=${dto[1].n_no }&page=${param.page}&searchWord=${param.searchWord}">수정</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="/jinair/project/deleteNoice.do?num=${dto[1].n_no }&page=${param.page}&searchWord=${param.searchWord}" onclick="return confirm('정말 삭제하시겠습니까?')">삭제</a></p>
	
	<dl class="prnt">
		<dt>이전 글</dt>
		<dd>
			<a href="/jinair/project/noticeView.do?num=${ dto[0].n_no }&page=${ param.page }&searchWord=${ param.searchWord }" class="next">${dto[0].title }</a>		
		</dd>
		<dt>다음 글</dt>
		<dd>
			<a href="/jinair/project/noticeView.do?num=${ dto[2].n_no }&page=${ param.page }&searchWord=${ param.searchWord }" class="next">${dto[2].title }</a>
		</dd>
	</dl>
	</c:if>
	
	<c:if test="${dto.size()!=3 }">
	<div class="pressView">
		<p class="tit">
			${dto[0].title }
			<span class="date">등록일&nbsp;${dto[0].n_date }</span>
		</p>
		<p class="txt">
			${dto[0].content }
		</p>
	</div>
	<c:set var="admin" value="<%=adminCheck %>"></c:set>
	<c:if test="${admin eq '1'}">
		<p style="float:right"><a href="/jinair/project/updateNoice.do?num=${dto[0].n_no }&page=${param.page}&searchWord=${param.searchWord}">수정</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="/jinair/project/deleteNoice.do?num=${dto[0].n_no }&page=${param.page}&searchWord=${param.searchWord}" onclick="return confirm('정말 삭제하시겠습니까?')">삭제</a></p>
	</c:if>
	<dl class="prnt">
		<dt>이전 글</dt>
		<dd>
			이전 글이 없습니다.
		</dd>
		<dt>다음 글</dt>
		<dd>
			<a href="/jinair/project/noticeView.do?num=${ dto[1].n_no }&page=${ param.page }&searchWord=${ param.searchWord }" class="next">${dto[1].title }</a>				
		</dd>
	</dl>
	</c:if>
	<div class="btnArea">
		<c:if test="${empty param.page }">
			<a href="/jinair/project/noticeList.do?page=1" id="btnList" class="btnTypeA sizeL">목록</a>		
		</c:if>
		<c:if test="${not empty param.page }">		
			<a href="/jinair/project/noticeList.do?page=${param.page }" id="btnList" class="btnTypeA sizeL">목록</a>
		</c:if>
	</div>
</div>
<script type="text/javascript">
$(document).ready(function() {
	$('.pressView .txt').html($('#ctn').val());

	$.i18n.properties({
		name: ['messages', 'announce'],
		path: '/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			$('.pressView .txt').find('img').on('load', function() {
				var parentWidth = $('.pressView .txt').width();
				var imgWidth = $(this).width();
				if(parentWidth < imgWidth) {
					var imgHeight = $(this).height();
					var ratio = parentWidth / imgWidth;
					$(this).width(parentWidth);
					$(this).height(imgHeight * ratio);
				}
			});
		}
	});
});
</script>


<%@include file="/project/footer.jsp" %>	



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
