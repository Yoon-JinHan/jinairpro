<%@page import="java.util.Iterator"%>
<%@page import="domain.CouponDTO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<head>
<title>나의 할인쿠폰 | 진에어</title>
<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="telephone=no" name="format-detection" />
<meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport" />
<meta content="metaDescriptionContent" name="description" />
<meta content="metaKeywordsContent" name="keywords" />

<title>JIN AIR   진에어</title>
<meta http-equiv="content-language" content="ko-kr" />
<meta property="og:type" content="website">
<meta property="og:title" content="JIN AIR   진에어">
<meta property="og:description" content="국내선 최다 운항 대한민국 대표 LCC 진에어, 집에서 즐기는 기내식 등 종합쇼핑몰 지니스토어">
<meta property="og:image" content="https://www.jinair.com/images/layout/logo.png">
<meta property="og:url" content="https://www.jinair.com">


<link rel="stylesheet" href="//images.jinair.com/css/default.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/common.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/jquery-ui.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/point.css?_="/>
<link rel="stylesheet" href="//images.jinair.com/css/font.css?_=2022011409">
<link rel="stylesheet" href="//images.jinair.com/css/layout.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/booking.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/content.css?_=2022011409"/>
<link rel="stylesheet" href="//images.jinair.com/css/tablet.css?_=2022011409" media="all and (max-width:1024px)"/>
<link rel="stylesheet" href="//images.jinair.com/css/mobile.css?_=2022011409" media="all and (max-width:640px)"/>
		
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

<script>
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','https://www.jinair.com/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568520024|SS!21257@277:1642228402168'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<script type="text/javascript"src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2022010509"></script>
<script type="text/javascript"src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2022010509"></script>
	
<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=eefe79dd-0966-449b-ba40-11283882224f"></script> -->
<script type="text/javascript"src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2022010509"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2022010509"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2022010509" async></script>

<meta name="_csrf" content="20e19748-5ddc-410f-a8b0-1198f1e3c67f"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

</head>
<body>

<script type="text/javascript">
_dl = AAnalytics.dl();
</script>

<div id="$f!" style="display:none">f5fd7d245a361b7d215c0083c6252858</div>


<div id="wrapper" class="">
	
			
<%@ include file="/header.jsp" %>

<div id="container">
	
<%@ include file="subNav.jsp" %>

<script type="text/javascript">
var navSwiper, isNavSwiper = false;
$(window).on("load resize", function() {
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)) {
		if($(window).width() <= 640) {
			if(!isNavSwiper){
				navSwiper = new Swiper($(".subNav .slideCont"), {
					slidesPerView: "auto"
				});
				isNavSwiper = true;
			}
		} else {
			if(isNavSwiper){
				navSwiper.destroy(true, true);
				isNavSwiper = false;
			}
		}
	}
});
</script>


	
	<h1 class="typeA">나의 할인쿠폰</h1>

	
	<div class="tabArea">
		<ul class="tabTypeA">
			<li><a href="#couponCont01" role="tab" data-click-area="마이페이지-나의 할인쿠폰" data-click-name="Tab_지니쿠폰">지니쿠폰</a></li>
			<li><a href="#couponCont03" role="tab" data-click-area="마이페이지-나의 할인쿠폰" data-click-name="Tab_보너스쿠폰">경품 보너스 항공권</a></li>
		</ul>
	</div>
	
	<div id="couponCont01" class="couponCont tabCont" style="display: none;">
		<div class="myCoupon">
			<div class="head">
			<h2>나의 지니쿠폰 <span class="num"><strong>${ userDTO.couponCnt }</strong> 개</span></h2>
			</div>
			<div class="cont">
				<fieldset>
					<legend>쿠폰등록</legend>
					<input type="text" id="cpnNo" title="쿠폰번호 입력" placeholder="쿠폰번호 입력" maxlength="16">
					<button class="btnTypeB sizeL" role="btn-register-jinicoupon">등록</button>
				</fieldset>
				<ul class="caution">
					<li>제휴 및 진에어에서 발급 된 쿠폰은 쿠폰 등록을 이용하여 주시기 바랍니다.</li>
					<li>지니 쿠폰은 등록 후에만 해당 쿠폰을 이용하실 수 있습니다.</li>
					<li>유효기간 만료 시 자동 소멸 됩니다.</li>
				</ul>
			</div>
		</div>
		<div class="detailSearch">
			<form id="form-search-jinicoupons">
				<fieldset>
					<legend>지니쿠폰 상세조회</legend>

					<label for="type">구분</label>
					<select class="typeB" name="searchStatus">
						<option value="">전체</option>
						<option value="UNUSE">사용가능</option>
						<option value="USE">사용완료</option>
						<option value="EXPR">기간만료</option>
						
					</select>

					<label>유효기간</label>
					<p class="dateField">
						<input type="text" class="btn_calendar" name="searchStartValidDate" title="유효기간 시작일">
						<input onClick="return false;" type="image" src="//images.jinair.com/images/common/ico_calendar.png" alt="유효기간 시작일" class="btn_calendar" data-target-name="searchStartValidDate">
					</p>
					<p class="dateField">
						<input type="text" class="btn_calendar" name="searchEndValidDate" title="유효기간 종료일">
						<input onClick="return false;" type="image" src="//images.jinair.com/images/common/ico_calendar.png" alt="유효기간 종료일" class="btn_calendar" data-target-name="searchEndValidDate">
					</p>

					<span class="btn">
						<span><input type="button" class="btnTypeA" role="btn-search-jinicoupons" value="조회" data-click-area="마이페이지-나의 할인쿠폰" data-click-name="지니쿠폰_조회"></span>
						<span><input type="button" class="btnTypeB" role="btn-init-jinicoupons" value="초기화"></span>
					</span>
				</fieldset>
			</form>
		</div>
		<div class="couponList">
			<c:if test="${ couponlist != null }">	
			<%
				List<CouponDTO> list = (List<CouponDTO>) request.getAttribute("couponlist");
				Iterator<CouponDTO> ir = list.iterator();
				while (ir.hasNext()) {
					CouponDTO couponDTO = (CouponDTO) ir.next();
					%>
						<div class="detailTbl couponTbl">
						<div class="basic_cont">
						<p>
							<strong>쿠폰명</strong>
							<span class="cont"><%= couponDTO.getC_name() %></span>
						</p>
						<p>
							<strong>구분</strong>
							<span class="cont"><%= couponDTO.getC_type() %></span>
						</p>
						<p>
							<strong>사용유효기간</strong>
							<span class="cont"><%= couponDTO.getS_usingdate() %> ~ <%= couponDTO.getE_usingdate() %></span>
						</p>
						<p>
							<strong>탑승유효기간</strong>
							<span class="cont"><%= couponDTO.getS_boardingdate() %> ~ <%= couponDTO.getE_boardingdate() %></span>
						</p>
						<a href="javascript://" class="icoFold" onclick="showDetail(this); return false;">자세히 보기</a>
					</div>
					<div class="detail_cont">
						<p>
							<strong>사용가능노선</strong>
							<span class="cont">
								<%= couponDTO.getRoute() %>
								<!-- 	<span><em>{{:display.departure}}</em></span>
									<span class="ico round">왕복</span>
									<span><em>{{:display.arrival}}</em></span> -->
								
							</span>
						</p>
						<p>
							<strong>할인금액</strong>
							<span class="cont"><%= couponDTO.getDiscount() %></span>
						</p>
						<p>
							<strong>사용가능서비스</strong>
							<span class="cont"><%= couponDTO.getService() %></span>
						</p>
						<p>
							<strong>사용가능채널</strong>
							<span class="cont"><%= couponDTO.getChannel() %></span>
						</p>
						<p class="long">
							<strong>쿠폰 상세사항</strong>
							<span class="cont" data-need-unescape="true"><%= couponDTO.getDetail() %></span>
						</p>
					</div>
				</div>
					
					<%
				}
			%>	
				
			</c:if>
			<c:if test="${ couponlist == null }">
				<div class="detailTbl couponTbl">
					<p class="none">+++ 지니쿠폰 내역이 없습니다. +++</p>
				</div>
			</c:if>
		</div>
		<div class="pointInfo">
			<h2>쿠폰 사용 안내</h2>
			<p>- 지니쿠폰 사용방법 및 유의사항을 확인하세요.</p>
			<a href="/benefit/jiniCoupon" title="지니쿠폰 안내" class="btnTypeA icoNavi" data-click-area="마이페이지-나의 할인쿠폰" data-click-name="지니쿠폰 안내">지니쿠폰 안내</a>
		</div>
	</div>

	
	<div id="couponCont02" class="couponCont tabCont" style="display: none;">
	</div>

	
	<div id="couponCont03" class="couponCont tabCont" style="display: none;">
		<div class="myCoupon"></div>
		<div class="detailSearch">
			<form id="form-search-bonustickets">
				<fieldset>
					<legend>지니쿠폰 상세조회</legend>

					<label for="type">구분</label>
					<select class="typeB" name="searchStatus">
						<option value="">전체</option>
						<option value="USE">사용완료</option>
						<option value="UNUSE">사용가능</option>
						<option value="EXPR">기간만료</option>
						
					</select>

					<label>유효기간</label>
					<p class="dateField">
						<input type="text" class="btn_calendar" name="searchStartValidDate" id="searchStartValidDate" title="유효기간 시작일">
						<input onClick="return false;" type="image" src="//images.jinair.com/images/common/ico_calendar.png" alt="유효기간 시작일" class="btn_calendar" id="startImg">
					</p>
					<p class="dateField">
						<input type="text" class="btn_calendar" name="searchEndValidDate" id="searchEndValidDate" title="유효기간 종료일">
						<input onClick="return false;" type="image" src="//images.jinair.com/images/common/ico_calendar.png" alt="유효기간 종료일" class="btn_calendar" id="endImg">
					</p>

					<span class="btn">
						<span><input type="button" class="btnTypeA" role="btn-search-bonustickets" value="조회" data-click-area="마이페이지-나의 할인쿠폰" data-click-name="보너스쿠폰_조회"></span>
						<span><input type="button" class="btnTypeB" role="btn-init-bonustickets" value="초기화"></span>
					</span>
				</fieldset>
			</form>
		</div>
		<div class="couponList"></div>
	</div>
</div>

<script id="jinicoupon-tab-content-head-template" type="text/x-jsrender">
<div class="head">
	<h2>나의 지니쿠폰 <span class="num"><strong>{{:allCount}}</strong> 개</span></h2>
</div>
<div class="cont">
	<fieldset>
		<legend>쿠폰등록</legend>
		<input type="text" id="cpnNo" title="쿠폰번호 입력" placeholder="쿠폰번호 입력" maxlength="16">
		<button class="btnTypeB sizeL" role="btn-register-jinicoupon">등록</button>
	</fieldset>
	<ul class="caution">
		<li>제휴 및 진에어에서 발급 된 쿠폰은 쿠폰 등록을 이용하여 주시기 바랍니다.</li>
		<li>지니 쿠폰은 등록 후에만 해당 쿠폰을 이용하실 수 있습니다.</li>
		<li>유효기간 만료 시 자동 소멸 됩니다.</li>
	</ul>
</div>
</script>

<script id="jinicoupon-tab-content-list-template" type="text/x-jsrender">
{{for list}}
<div class="detailTbl couponTbl">
	<div class="basic_cont">
		<p>
			<strong>쿠폰명</strong>
			<span class="cont">{{:display.name}}</span>
		</p>
		<p>
			<strong>구분</strong>
			<span class="cont">{{:display.status}}</span>
		</p>
		<p>
			<strong>사용유효기간</strong>
			<span class="cont">{{:display.usablePeriod}}</span>
		</p>
		<p>
			<strong>탑승유효기간</strong>
			<span class="cont">{{:display.boardablePeriod}}</span>
		</p>
		<a href="javascript://" class="icoFold" onclick="showDetail(this); return false;">자세히 보기</a>
	</div>
	<div class="detail_cont">
		<p>
			<strong>사용가능노선</strong>
			<span class="cont">
				{{if !!display.route}}
					{{:display.route}} {{if display.hasEmbargo}}일부 노선 제외{{/if}}
				{{else}}
					<span><em>{{:display.departure}}</em></span>
					<span class="ico round">왕복</span>
					<span><em>{{:display.arrival}}</em></span>
				{{/if}}
			</span>
		</p>
		<p>
			<strong>할인금액</strong>
			<span class="cont">{{:display.amount}}</span>
		</p>
		<p>
			<strong>사용가능서비스</strong>
			<span class="cont">{{:display.service}}</span>
		</p>
		<p>
			<strong>사용가능채널</strong>
			<span class="cont">{{:display.channel}}</span>
		</p>
		<p class="long">
			<strong>쿠폰 상세사항</strong>
			<span class="cont" data-need-unescape="true">{{:display.detailText}}</span>
		</p>
	</div>
</div>
{{else}}
<div class="detailTbl couponTbl">
	<p class="none">+++ 지니쿠폰 내역이 없습니다. +++</p>
</div>
{{/for}}
</script>

<script id="prepaidticket-tab-content-head-template" type="text/x-jsrender">
{{for list}}
<div class="myCoupon">
	<div class="head">
		<h2>{{:display.name}}
			<span class="num">잔액 <strong>{{:display.balanceAmount}}</strong> 원</span>
		</h2>
		<p class="text">유효 기간 : {{:display.expiryDate}}까지</p>
	</div>
	<div class="cont">
		<fieldset>
			<legend>권면 금액: {{:display.originalAmount}}원</legend>
			<legend>사용 금액: {{:display.usedAmount}}원</legend>
			<legend>구매 일자: {{:display.orderDate}}</legend>
		</fieldset>
	</div>
</div>
{{/for}}
</script>

<script id="bonusticket-tab-content-head-template" type="text/x-jsrender">
<div class="head">
	<h2>경품 보너스 항공권 <span class="num"><strong>{{:cpnCount.cpnNum}}</strong> 개</span></h2>
</div>
<div class="cont">
	<fieldset>
		<legend>쿠폰등록</legend>
		<input type="text" id="tktNo" title="쿠폰번호 입력" placeholder="쿠폰번호 입력">
		<button class="btnTypeB sizeL" role="btn-register-bonusticket">등록</button>
	</fieldset>
	<ul class="caution">
		<li>제휴 및 진에어에서 발급 된 쿠폰은 쿠폰 등록을 이용하여 주시기 바랍니다.</li>
		<li>경품보너스항공권은 등록 후에만 해당 쿠폰을 이용하실 수 있습니다.</li>
		<li>유효기간 만료 시 자동 소멸 됩니다.</li>
	</ul>
</div>
</script>

<script id="bonusticket-tab-content-list-template" type="text/x-jsrender">
{{for list}}
<div class="detailTbl couponTbl">
	<p>
		<strong>쿠폰번호</strong>
		<span class="cont">{{:display.couponNumber}}</span>
	</p>
	<p>
		<strong>구분</strong>
		<span class="cont">{{:display.status}}</span>
	</p>
	<p>
		<strong>사용유효기간</strong>
		<span class="cont">{{:display.usablePeriod}}</span>
		</p>
	<p>
		<strong>탑승유효기간</strong>
		<span class="cont">{{:display.boardablePeriod}}</span>
	</p>
	<p>
		<strong>탑승노선</strong>
		{{for display.detailRoutes}}
		<span class="cont line">
			<span class="tripType">{{:itineraryType}}</span>
			<span><em>{{:departure}}</em></span>
			<span class="ico {{:arrowType}}"></span>
			<span><em>{{:arrival}}</em></span>
		</span>
		{{else}}
		<span class="cont line">전체</span>
		{{/for}}
	</p>
	<p>
		<strong>할인율</strong>
		<span class="cont">{{:display.discountRate}}</span>
	</p>
</div>
{{else}}
<div class="detailTbl couponTbl">
	<p class="none">+++ 경품 보너스 항공권 내역이 없습니다. +++</p>
</div>
{{/for}}
</script>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pagination.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mypage/coupons.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	$.i18n.properties({
		name: ['messages', 'myCoupon'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			__page__.initialize({
				directID: 'couponCont01'
			});
		}
	});
});
</script>


<%@ include file="/footer.jsp" %>
</div>

</body>
</html>