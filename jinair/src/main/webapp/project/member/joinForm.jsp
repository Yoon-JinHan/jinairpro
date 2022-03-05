<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	String name = request.getParameter("userName");
	String l_name = name.substring(0,1);
	String f_name = name.substring(1);
%>
<!DOCTYPE html>
<html lang="ko">

<head>		
<title>회원가입_정보입력 | 진에어</title>
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
	csrfToken: 'd9197558-b8f2-4990-bc62-b3940ae11ac7',
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
})(window,document,'script','/https://www.jinair.com/js/apm/appinsightor.min.js','ne');
ne('https://eum.jinair.com/ne.nfl','prd01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '15474568520024|SS!59350@269:1641128650441'
	},
	session:{type:'cookie',value:'JSESSIONID'}
});
</script>

<script type="text/javascript" src="/jinair/project/script/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ui.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.easing.1.3.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.cycle.all.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.mousewheel.min.js?_=2021122914"></script>
<script type="text/javascript" src="/jinair/project/script/jquery-ui.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/swiper.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/iscroll.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-efuSlider.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery-ieSlide.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/pub/front/jquery.plugin.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jsrender.min.js?_=2021122914"></script>

<!-- <script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/mobileApp.js?key=X-CSRF-TOKEN&val=68a87d6f-900b-4dad-9566-a519b21f3022"></script> -->
<script type="text/javascript" src="/jinair/project/script/common.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/common.pages.js?_=2021122914"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lj/front/common/chatbot.js?_=2021122914"></script>
<script type="text/javascript" src="https://assets.adobedtm.com/9f7767d312ae/4a1737c07e51/launch-19b1f4fcc423.min.js?_=2021122914" async></script>


<meta name="_csrf" content="68a87d6f-900b-4dad-9566-a519b21f3022"/>
<meta name="_csrf_header" content="X-CSRF-TOKEN"/>

<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.validate.custom.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/xml2json.min.js"></script>
<script type="text/javascript" src="https://www.jinair.com/js/hom/lib/front/jquery.i18n.xml.js"></script>
<script type="text/javascript" src="/jinair/project/script/joinForm.js"></script>
<!-- <script type="text/javascript" src="/jinair/project/script/member.js"></script> -->

</head>
	
<body>
		
<script type="text/javascript">
_dl = AAnalytics.dl();
</script>

<div id="wrapper">
			
<%@ include file="/header.jsp" %>

<div id="container" class="memberWrap">
	<form id="joinForm" name="joinForm" method="post" autocomplete="off" action="<%= request.getContextPath() %>/project/member/joinmember.do">
	<input type="hidden" name="_csrf" value="68a87d6f-900b-4dad-9566-a519b21f3022" />
	<input type="hidden" id="foLangCd" value="KOR">
	<input type="hidden" id="foCountry" value="KOR">
	<input type="hidden" id="preferenceJson" name="preferenceJson">
	<h1 class="typeC">회원가입</h1>
	<ul class="joinStep">
		<li><strong>Step 1</strong><br/>약관동의 및 본인인증</li>
		<li class="on"><strong>Step 2</strong><br/>정보입력</li>
		<li><strong>Step 3</strong><br/>가입완료</li>
	</ul>
	<h2 class="typeA">정보입력 <span class="text fontTypeA">* 표시 항목은 필수 입력사항 입니다.</span></h2>
	<table class="fieldForm memberForm">
		<caption>회원정보 입력 폼</caption>
		<colgroup>
			<col width="23%"><col width="">
		</colgroup>
		<tr>
			<th scope="row"><em>*</em>아이디</th>
			<td>
				<p class="idField">
					<input type="text" id="id" name="id" maxlength="20" style="ime-mode:disabled;text-transform:uppercase;" class="onlyEngUppNum" title="아이디">
					<a href="javascript://" id="idCheck" role="btn-check-id-duplication" class="btnTypeA sizeL">중복확인</a>
				</p>
				<p class="text">- 영문 또는 숫자 6 ~ 20자로 혼합 가능하며 대소문자 구별 없음</p>
				
			</td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>비밀번호</th>
			<td>
				<input type="password" id="pw" name="pw" maxlength="20" title="비밀번호" autocomplete="off">
				<p id="pwTest"></p>
			</td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>비밀번호 확인</th>
			<td>
				<input type="password" id="pwCheck" name="pwCheck" maxlength="20" title="비밀번호 확인"  autocomplete="off">
				<a class="btnTypeB" onclick="showPopupLayer('<%= contextPath %>/project/member/popup/passwordGuideLayer.jsp'); return false;" style="margin-top: 10px;">비밀번호 설정 정책</a>
			</td>
		</tr>
		
			<tr class="divide">
				<th scope="row"><em>*</em>이름</th>
				<td>
					${ param.userName }
					<input type="hidden" id="mbrNm" name="mbrNm" value="${ param.userName }">
					
				</td>
			</tr>
			<tr>
				<th scope="row"><em>*</em>한글 이름</th>
				<td>
					<p class="nameField">
						<input type="text" id="mbrLnm" name="mbrLnm" value="<%= l_name %>" maxlength="30" style="ime-mode:active;" placeholder="성(Last Name)" title="영문 성">
						<input type="text" id="mbrFnm" name="mbrFnm" value="<%= f_name %>" maxlength="60" style="ime-mode:active;" placeholder="이름(First Name)" title="한글 이름">
					</p>
				</td>
			</tr>
		
		<tr class="bor_tn">
			<th scope="row"><em>*</em>영문 성명</th>
			<td>
				<p class="nameField">
					<input type="text" id="engLnm" name="engLnm" class="onlyEngUpp" style="text-transform:uppercase;" maxlength="30" style="ime-mode:inactive;" placeholder="성(Last Name)" title="영문 성">
					<input type="text" id="engFnm" name="engFnm" class="onlyEngUpp" style="text-transform:uppercase;" maxlength="60" style="ime-mode:inactive;" placeholder="이름(First Name)" title="한글 이름">
				</p>
				<p class="text">- 한글과 영문 성명은 여권상(또는 여권에 사용할) 성명과 동일하게 정확히 입력하시기 바랍니다. 회원 가입 후 성명 변경은 증빙자료를 검토하여 제한적으로만 허용됨을 유의하시기 바랍니다.</p>
			</td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>생년월일</th>
			<td><input type="text" id="bthDt" name="bthDt" maxlength="8" class="onlyNum" value="${ birthDate }" placeholder="YYYYMMDD (예.19820626)" title="생년월일"></td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>성별</th>
			<td>
				<div class="fieldArea chkArea">
					<div class="wrap">
						<span class="field">
							<input type="radio" id="male1" name="gndrCd" value="M" >
							<label for="male1">남자</label>
						</span>
						<span class="field">
							<input type="radio" id="female1" name="gndrCd" value="F">
							<label for="female1">여자</label>
						</span>
					</div>
				</div>
			</td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>국적(여권)</th>
			<td>
				<select id="ntnltyCd" name="ntnltyCd" title="국적선택">
					<option value="KOR" selected>한국 (REPUBLIC OF KOREA)</option>
					<option value="JPN" >일본 (JAPAN)</option>
					<option value="GHA" >가나 (GHANA)</option>
					<option value="GAB" >가봉(GABON)</option>
					<option value="GUY" >가이아나(GUYANA)</option>
					<option value="GMB" >감비아(GAMBIA)</option>
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
			</td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>거주 국가</th>
			<td>
				<select id="residenceIataCountryCode" name="residenceIataCountryCode" title="거주국적선택">
					
						<option value="KOR" selected>
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
			</td>
		</tr>
		<tr id="usaSttCdSelectBox" style="display:none;">
			<th scope="row">미국 주</th>
			<td><select name='usaSttCd' id='usaSttCd'><option value=''>선택</option><option value='AK'>알래스카</option><option value='AL'>앨라배마</option><option value='AR'>알칸사</option><option value='AZ'>아리조나</option><option value='CA'>캘리포니아</option><option value='CO'>콜로라도</option><option value='CT'>코네티컷</option><option value='DE'>델라웨어</option><option value='FL'>플로리다</option><option value='GA'>조지아</option><option value='GU'>괌</option><option value='HI'>하와이</option><option value='IA'>아이오아</option><option value='ID'>아이다호</option><option value='IL'>일리노이 </option><option value='IN'>인디애나 </option><option value='KS'>캔사스</option><option value='KY'>캔터키</option><option value='LA'>루이지아나</option><option value='MA'>메사추세츠</option><option value='MD'>메리랜드</option><option value='ME'>메인</option><option value='MI'>미시건</option><option value='MN'>미네소타</option><option value='MO'>미조리</option><option value='MS'>미시시피</option><option value='MT'>몬타나</option><option value='NC'>노스캐롤라이나</option><option value='ND'>노스다코타</option><option value='NE'>네브라스카</option><option value='NH'>뉴햄프셔</option><option value='NJ'>뉴저지</option><option value='NM'>뉴멕시코</option><option value='NV'>네바다</option><option value='NY'>뉴욕</option><option value='OH'>오하이오</option><option value='OK'>오클라호마</option><option value='OR'>오레곤</option><option value='PA'>펜실베니아</option><option value='RI'>로드아일랜드</option><option value='SC'>사우스캐롤라이나 </option><option value='SD'>사우스다코타</option><option value='TN'>테네시</option><option value='TX'>텍사스</option><option value='UT'>유타</option><option value='VA'>버지니아</option><option value='VT'>버몬트</option><option value='WA'>워싱톤</option><option value='WI'>위스콘신</option><option value='WV'>W.버지니아</option><option value='WY'>와이오밍</option></select></td>
		</tr>
				<tr>
					<th scope="row">주소</th>
					<td>
						<p class="zipcodeField">
							<input type="text" id="pstNo" name="pstNo" maxlength="10" onclick="postcode();" readonly="readonly" title="우편번호">
							<a href="javascript://" onclick="postcode();" class="btnTypeA sizeL">
								우편번호 검색
							</a>
						</p>
						<input type="text" id="adr1" name="adr1" maxlength="100" title="주소" readonly="readonly"><br>
						<input type="text" id="adr2" name="adr2" maxlength="150" title="상세주소">
					</td>
				</tr>

		<tr>
			<th scope="row"><em>*</em>연락처</th>
			<td>
				<div class="mobileField">
					<span class="field">
						<select id="mblFonCtrCd" name="mblFonCtrCd" title="국가번호 선택">
							<option value="">선택</option>				
									<option value="KOR" selected>
										한국 (+82)
									</option>
							<option value="JPN" >
										일본 (+81)
									</option>
								
							
								
									<option value="GHA" >
										가나 (+233)
									</option>
								
							
								
									<option value="GAB" >
										가봉 (+241)
									</option>
								
							
								
									<option value="GUY" >
										가이아나 (+592)
									</option>
								
							
								
									<option value="GMB" >
										감비아 (+220)
									</option>
								
							
								
									<option value="GLP" >
										과들루프 (+590)
									</option>
								
							
								
									<option value="GTM" >
										과테말라 (+502)
									</option>
								
							
								
									<option value="GUM" >
										괌 (+1671)
									</option>
								
							
								
									<option value="GRD" >
										그레나다 (+1473)
									</option>
								
							
								
									<option value="GEO" >
										그루지아 (+995)
									</option>
								
							
								
									<option value="GRC" >
										그리스 (+30)
									</option>
								
							
								
									<option value="GRL" >
										그린란드 (+299)
									</option>
								
							
								
									<option value="GIN" >
										기니 (+224)
									</option>
								
							
								
									<option value="GNB" >
										기니 (+245)
									</option>
								
							
								
									<option value="GUF" >
										기아나(프) (+594)
									</option>
								
							
								
									<option value="NAM" >
										나미비아 (+264)
									</option>
								
							
								
									<option value="NRU" >
										나우루 (+674)
									</option>
								
							
								
									<option value="NGA" >
										나이지리아 (+234)
									</option>
								
							
								
									<option value="ZAF" >
										남아프리카공화국 (+27)
									</option>
								
							
								
									<option value="NLD" >
										네덜란드 (+31)
									</option>
								
							
								
									<option value="NPL" >
										네팔 (+977)
									</option>
								
							
								
									<option value="NOR" >
										노르웨이 (+47)
									</option>
								
							
								
									<option value="NFK" >
										노퍽 (+)
									</option>
								
							
								
									<option value="NCL" >
										누벨칼레도니 (+687)
									</option>
								
							
								
									<option value="NZL" >
										뉴질랜드 (+64)
									</option>
								
							
								
									<option value="NIU" >
										니우에 (+683)
									</option>
								
							
								
									<option value="NER" >
										니제르 (+227)
									</option>
								
							
								
									<option value="NIC" >
										니카라과 (+505)
									</option>
								
							
								
									<option value="TWN" >
										대만 (+886)
									</option>
								
							
								
									<option value="DNK" >
										덴마크 (+45)
									</option>
								
							
								
									<option value="DOM" >
										도미니카공화국 (+1809)
									</option>
								
							
								
									<option value="DMA" >
										도미니카연방 (+1767)
									</option>
								
							
								
									<option value="DEU" >
										독일 (+49)
									</option>
								
							
								
									<option value="TLS" >
										동티모르 (+670)
									</option>
								
							
								
									<option value="LAO" >
										라오스 (+856)
									</option>
								
							
								
									<option value="LVA" >
										라트비아 (+371)
									</option>
								
							
								
									<option value="RUS" >
										러시아 (+7)
									</option>
								
							
								
									<option value="LBN" >
										레바논 (+961)
									</option>
								
							
								
									<option value="LSO" >
										레소토 (+266)
									</option>
								
							
								
									<option value="ROU" >
										루마니아 (+40)
									</option>
								
							
								
									<option value="LUX" >
										룩셈부르크 (+352)
									</option>
								
							
								
									<option value="RWA" >
										르완다 (+250)
									</option>
								
							
								
									<option value="LBR" >
										리베리아 (+231)
									</option>
								
							
								
									<option value="LBY" >
										리비아 (+218)
									</option>
								
							
								
									<option value="LTU" >
										리투아니아 (+370)
									</option>
								
							
								
									<option value="MDG" >
										마다가스카르 (+261)
									</option>
								
							
								
									<option value="MTQ" >
										마르티니크 (+596)
									</option>
								
							
								
									<option value="MHL" >
										마샬제도 (+692)
									</option>
								
							
								
									<option value="MAC" >
										마카오 (+853)
									</option>
								
							
								
									<option value="MKD" >
										마케도니아 (+389)
									</option>
								
							
								
									<option value="MWI" >
										말라위 (+265)
									</option>
								
							
								
									<option value="MYS" >
										말레이시아 (+60)
									</option>
								
							
								
									<option value="MLI" >
										말리 (+223)
									</option>
								
							
								
									<option value="MEX" >
										멕시코 (+52)
									</option>
								
							
								
									<option value="MCO" >
										모나코 (+377)
									</option>
								
							
								
									<option value="MAR" >
										모로코 (+212)
									</option>
								
							
								
									<option value="MUS" >
										모리셔스 (+230)
									</option>
								
							
								
									<option value="MRT" >
										모리타니 (+222)
									</option>
								
							
								
									<option value="MOZ" >
										모잠비크 (+258)
									</option>
								
							
								
									<option value="MNE" >
										몬테네그로 (+382)
									</option>
								
							
								
									<option value="MSR" >
										몬트세라트 (+1664)
									</option>
								
							
								
									<option value="MDA" >
										몰도바 (+373)
									</option>
								
							
								
									<option value="MDV" >
										몰디브 (+960)
									</option>
								
							
								
									<option value="MLT" >
										몰타 (+356)
									</option>
								
							
								
									<option value="MNG" >
										몽골 (+976)
									</option>
								
							
								
									<option value="USA" >
										미국 (+1)
									</option>
								
							
								
									<option value="MMR" >
										미얀마 (+95)
									</option>
								
							
								
									<option value="FSM" >
										미크로네시아연방 (+691)
									</option>
								
							
								
									<option value="VUT" >
										바누아투 (+678)
									</option>
								
							
								
									<option value="BHR" >
										바레인 (+973)
									</option>
								
							
								
									<option value="BRB" >
										바베이도스 (+1246)
									</option>
								
							
								
									<option value="VAT" >
										바티칸 (+379)
									</option>
								
							
								
									<option value="BHS" >
										바하마 (+1242)
									</option>
								
							
								
									<option value="BGD" >
										방글라데시 (+880)
									</option>
								
							
								
									<option value="BMU" >
										버뮤다 (+1441)
									</option>
								
							
								
									<option value="VIR" >
										버진제도(미) (+1340)
									</option>
								
							
								
									<option value="VGB" >
										버진제도(영) (+1284)
									</option>
								
							
								
									<option value="VEN" >
										베네수엘라 (+58)
									</option>
								
							
								
									<option value="BEN" >
										베넹 (+229)
									</option>
								
							
								
									<option value="VNM" >
										베트남 (+84)
									</option>
								
							
								
									<option value="BEL" >
										벨기에 (+32)
									</option>
								
							
								
									<option value="BLR" >
										벨로루시 (+375)
									</option>
								
							
								
									<option value="BLZ" >
										벨리즈 (+501)
									</option>
								
							
								
									<option value="BIH" >
										보스니아 (+387)
									</option>
								
							
								
									<option value="BWA" >
										보츠와나 (+267)
									</option>
								
							
								
									<option value="BOL" >
										볼리비아 (+591)
									</option>
								
							
								
									<option value="BDI" >
										부룬디 (+257)
									</option>
								
							
								
									<option value="BFA" >
										부르키나파소 (+226)
									</option>
								
							
								
									<option value="BTN" >
										부탄 (+975)
									</option>
								
							
								
									<option value="BGR" >
										불가리아 (+359)
									</option>
								
							
								
									<option value="BRA" >
										브라질 (+55)
									</option>
								
							
								
									<option value="BRN" >
										브루나이 (+673)
									</option>
								
							
								
									<option value="WSM" >
										사모아 (+685)
									</option>
								
							
								
									<option value="ASM" >
										사모아(미) (+1684)
									</option>
								
							
								
									<option value="SAU" >
										사우디아라비아 (+966)
									</option>
								
							
								
									<option value="SMR" >
										산마리노 (+378)
									</option>
								
							
								
									<option value="STP" >
										상투메 프린시페 (+239)
									</option>
								
							
								
									<option value="SEN" >
										세네갈 (+221)
									</option>
								
							
								
									<option value="SRB" >
										세르비아 (+381)
									</option>
								
							
								
									<option value="SYC" >
										세이셜 (+248)
									</option>
								
							
								
									<option value="LCA" >
										세인트루시아 (+1758)
									</option>
								
							
								
									<option value="VCT" >
										세인트빈센트 그레나 (+1784)
									</option>
								
							
								
									<option value="KNA" >
										세인트키츠 네비스 (+1869)
									</option>
								
							
								
									<option value="SHN" >
										세인트헬레나 (+290)
									</option>
								
							
								
									<option value="SOM" >
										소말리아 (+252)
									</option>
								
							
								
									<option value="SLB" >
										솔로몬제도 (+677)
									</option>
								
							
								
									<option value="SDN" >
										수단 (+249)
									</option>
								
							
								
									<option value="SUR" >
										수리남 (+597)
									</option>
								
							
								
									<option value="LKA" >
										스리랑카 (+94)
									</option>
								
							
								
									<option value="SWZ" >
										스와질랜드 (+268)
									</option>
								
							
								
									<option value="SWE" >
										스웨덴 (+46)
									</option>
								
							
								
									<option value="CHE" >
										스위스 (+41)
									</option>
								
							
								
									<option value="ESP" >
										스페인 (+34)
									</option>
								
							
								
									<option value="SVK" >
										슬로바키아 (+421)
									</option>
								
							
								
									<option value="SVN" >
										슬로베니아 (+386)
									</option>
								
							
								
									<option value="SYR" >
										시리아 (+963)
									</option>
								
							
								
									<option value="SLE" >
										시에라리온 (+232)
									</option>
								
							
								
									<option value="SGP" >
										싱가폴 (+65)
									</option>
								
							
								
									<option value="ARE" >
										아랍에미리트 (+971)
									</option>
								
							
								
									<option value="ABW" >
										아루바 (+297)
									</option>
								
							
								
									<option value="ARM" >
										아르메니아 (+374)
									</option>
								
							
								
									<option value="ARG" >
										아르헨티나 (+54)
									</option>
								
							
								
									<option value="ISL" >
										아이슬랜드 (+354)
									</option>
								
							
								
									<option value="HTI" >
										아이티 (+509)
									</option>
								
							
								
									<option value="IRL" >
										아일랜드 (+353)
									</option>
								
							
								
									<option value="AZE" >
										아제르바이잔 (+994)
									</option>
								
							
								
									<option value="AFG" >
										아프가니스탄 (+93)
									</option>
								
							
								
									<option value="AND" >
										안도라 (+376)
									</option>
								
							
								
									<option value="ANT" >
										안틸레스(네덜란드) (+599)
									</option>
								
							
								
									<option value="ALB" >
										알바니아 (+355)
									</option>
								
							
								
									<option value="DZA" >
										알제리 (+213)
									</option>
								
							
								
									<option value="AGO" >
										앙골라 (+244)
									</option>
								
							
								
									<option value="EST" >
										에스토니아 (+372)
									</option>
								
							
								
									<option value="ECU" >
										에쿠아도르 (+593)
									</option>
								
							
								
									<option value="ETH" >
										에티오피아 (+251)
									</option>
								
							
								
									<option value="ATG" >
										엔티가 바부다 (+1268)
									</option>
								
							
								
									<option value="SLV" >
										엘살바도르 (+503)
									</option>
								
							
								
									<option value="AIA" >
										엥귈라 (+1264)
									</option>
								
							
								
									<option value="GBR" >
										영국 (+44)
									</option>
								
							
								
									<option value="IOT" >
										영국령인도양식민지  (+246)
									</option>
								
							
								
									<option value="YEM" >
										예멘 (+967)
									</option>
								
							
								
									<option value="OMN" >
										오만 (+968)
									</option>
								
							
								
									<option value="AUT" >
										오스트리아 (+43)
									</option>
								
							
								
									<option value="HND" >
										온두라스 (+504)
									</option>
								
							
								
									<option value="JOR" >
										요르단 (+962)
									</option>
								
							
								
									<option value="UGA" >
										우간다 (+256)
									</option>
								
							
								
									<option value="URY" >
										우루과이 (+598)
									</option>
								
							
								
									<option value="UZB" >
										우즈베키스탄 (+998)
									</option>
								
							
								
									<option value="UKR" >
										우크라이나 (+380)
									</option>
								
							
								
									<option value="WLF" >
										웰리스 푸투나 (+681)
									</option>
								
							
								
									<option value="YUG" >
										유고슬라비아 (+381)
									</option>
								
							
								
									<option value="IRQ" >
										이라크 (+964)
									</option>
								
							
								
									<option value="IRN" >
										이란 (+98)
									</option>
								
							
								
									<option value="ISR" >
										이스라엘 (+972)
									</option>
								
							
								
									<option value="EGY" >
										이집트 (+20)
									</option>
								
							
								
									<option value="ITA" >
										이탈리아 (+39)
									</option>
								
							
								
									<option value="IND" >
										인도 (+91)
									</option>
								
							
								
									<option value="IDN" >
										인도네시아 (+62)
									</option>
								
							
								
									<option value="JAM" >
										자메이카 (+1876)
									</option>
								
							
								
									<option value="COD" >
										자이르 (+243)
									</option>
								
							
								
									<option value="ZMB" >
										잠비아 (+260)
									</option>
								
							
								
									<option value="GNQ" >
										적도기니 (+240)
									</option>
								
							
								
									<option value="CHN" >
										중국 (+86)
									</option>
								
							
								
									<option value="CAF" >
										중앙아프리카공화국 (+236)
									</option>
								
							
								
									<option value="DJI" >
										지부티 (+253)
									</option>
								
							
								
									<option value="GIB" >
										지브랄타 (+350)
									</option>
								
							
								
									<option value="ZWE" >
										짐바브웨 (+263)
									</option>
								
							
								
									<option value="TCD" >
										차드 (+235)
									</option>
								
							
								
									<option value="CZE" >
										체코 (+420)
									</option>
								
							
								
									<option value="CHL" >
										칠레 (+56)
									</option>
								
							
								
									<option value="CMR" >
										카메룬 (+237)
									</option>
								
							
								
									<option value="CPV" >
										카보베르데 (+238)
									</option>
								
							
								
									<option value="KAZ" >
										카자흐스탄 (+7)
									</option>
								
							
								
									<option value="QAT" >
										카타르 (+974)
									</option>
								
							
								
									<option value="KHM" >
										캄보디아 (+855)
									</option>
								
							
								
									<option value="CAN" >
										캐나다 (+1)
									</option>
								
							
								
									<option value="KEN" >
										케냐 (+254)
									</option>
								
							
								
									<option value="CYM" >
										케이맨제도 (+1345)
									</option>
								
							
								
									<option value="COM" >
										코모로 (+269)
									</option>
								
							
								
									<option value="CRI" >
										코스타리카 (+506)
									</option>
								
							
								
									<option value="CCK" >
										코코스킬링제도 (+61)
									</option>
								
							
								
									<option value="CIV" >
										코트디부와르 (+225)
									</option>
								
							
								
									<option value="COL" >
										콜롬비아 (+57)
									</option>
								
							
								
									<option value="COG" >
										콩고 (+242)
									</option>
								
							
								
									<option value="CUB" >
										쿠바 (+53)
									</option>
								
							
								
									<option value="KWT" >
										쿠웨이트 (+965)
									</option>
								
							
								
									<option value="COK" >
										쿡제도 (+682)
									</option>
								
							
								
									<option value="HRV" >
										크로아티아 (+385)
									</option>
								
							
								
									<option value="KGZ" >
										키르키스스탄 (+996)
									</option>
								
							
								
									<option value="KIR" >
										키리바시 (+686)
									</option>
								
							
								
									<option value="CYP" >
										키프로스 (+357)
									</option>
								
							
								
									<option value="TJK" >
										타지키스탄 (+992)
									</option>
								
							
								
									<option value="TZA" >
										탄자니아 (+255)
									</option>
								
							
								
									<option value="THA" >
										태국 (+66)
									</option>
								
							
								
									<option value="TCA" >
										터크스 케이커스제도 (+1649)
									</option>
								
							
								
									<option value="TUR" >
										터키 (+90)
									</option>
								
							
								
									<option value="TGO" >
										토고 (+228)
									</option>
									<option value="TON" >
										통가 (+676)
									</option>
									<option value="TKM" >
										투르크메니스탄 (+993)
									</option>
									<option value="TUV" >
										투발루 (+688)
									</option>
									<option value="TUN" >
										튀니지 (+216)
									</option>
									<option value="TTO" >
										트리니다드토바고 (+1868)
									</option>
									<option value="PAN" >
										파나마 (+507)
									</option>						
									<option value="PRY" >
										파라과이 (+595)
									</option>
									<option value="FRO" >
										파로제도 (+298)
									</option>
									<option value="PAK" >
										파키스탄 (+92)
									</option>
									<option value="PNG" >
										파푸아뉴기니 (+675)
									</option>
									<option value="PLW" >
										팔라우 (+680)
									</option>
									<option value="PSE" >
										팔레스타인 (+970)
									</option>
									<option value="PER" >
										페루 (+51)
									</option>
									<option value="PRT" >
										포르투갈 (+351)
									</option>
									<option value="FLK" >
										포클랜드 (+500)
									</option>
									<option value="POL" >
										폴란드 (+48)
									</option>
									<option value="PYF" >
										폴리네시아(프) (+689)
									</option>
									<option value="PRI" >
										푸에르토리코 (+1787)
									</option>
									<option value="FRA" >
										프랑스 (+33)
									</option>
									<option value="FJI" >
										피지 (+679)
									</option>
									<option value="FIN" >
										핀란드 (+358)
									</option>
									<option value="PHL" >
										필리핀 (+63)
									</option>
									<option value="HUN" >
										헝가리 (+36)
									</option>
									<option value="AUS" >
										호주 (+61)
									</option>
									<option value="HKG" >
										홍콩 (+852)
									</option>
							
						</select>
					</span>
					<input type="text" id="mblFonNo" name="mblFonNo" class="onlyNum" maxlength="20" value="${ param.mobileno }" title="휴대폰번호">
				</div>
			</td>
		</tr>
		<tr>
			<th scope="row"><em>*</em>이메일</th>
			<td>
				<input type="text" id="emAdr" name="emAdr" maxlength="100" placeholder="예) abcd@gmail.com" title="이메일">
			</td>
		</tr>
		<tr>
			<th scope="row">이메일 수신</th>
			<td>
				<input type="radio" name="emRcvYn" value="Y" id="emailY" checked="checked"><label for="emailY">동의</label>
				<input type="radio" name="emRcvYn" value="N" id="emailN"><label for="emailN">동의하지 않음</label>
			</td>
		</tr>
		<tr>
			<th scope="row">SMS/앱푸시 수신</th>
			<td>
				<input type="radio" name="smsRcvYn" value="Y" id="snsY"  checked="checked"><label for="snsY">동의</label>
				<input type="radio" name="smsRcvYn" value="N" id="snsN"><label for="snsN">동의하지 않음</label>
				<p class="text">- 수신동의 하는 경우, 항공권 특가 정보 및 상시 이벤트 등 유용한 정보를 고객님 이메일로 보내 드립니다. 단, 정보성 메일은 수신 여부와 관계없이 발송됩니다.</p>
				<p class="text">- 비정상 운항, 구매 관련 정보 등 필수 안내사항은 수신 여부와 관계 없이 안내 드립니다.</p>
			</td>
		</tr>
	</table>

	<div class="btnArea">
		<span><a href="javascript://" role="btn-join" class="btnTypeA sizeL">회원가입</a></span>
		<span><a href="joinGate.jsp" role="btn-cancel" class="btnTypeB sizeL">취소</a></span>
	</div>
	</form>
</div>


<%@ include file="/footer.jsp" %>
</div>

<script type="text/javascript">
$(document).ready(function() {
	$.i18n.properties({
		name: ['messages', 'individualMember', 'benefit', 'flight', 'qna', 'checkin', 'member'],
		path: 'https://www.jinair.com/i18n/messages/',
		mode: 'map',
		language: 'ko_KR',
		langCd: 'KOR',
		callback: function() {
			__page__.initialize();
		}
	});
});
</script>

<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
    //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
    function postcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                var addr = ''; // 주소 변수
                var extraRoadAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }
               
                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
	                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
	                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
	                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
	                    extraRoadAddr += data.bname;
	                }
	                // 건물명이 있고, 공동주택일 경우 추가한다.
	                if(data.buildingName !== '' && data.apartment === 'Y'){
	                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                }
	                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
	                if(extraRoadAddr !== ''){
	                    extraRoadAddr = ' (' + extraRoadAddr + ')';
	                }
				
	                document.getElementById("adr2").value = extraRoadAddr;
                } else{
                	document.getElementById("adr2").value = '';
                }
                
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('pstNo').value = data.zonecode;
                document.getElementById("adr1").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("adr2").focus();
                
                
                window.close();
            }
        	
        }).open();
    }
</script>

<script>
	// 번호 인증으로 받아오는 성별 저장 
	if( ${ param.sex } == 1 ) $("#male1").attr("checked","checked");
	if( ${ param.sex } == 2 ) $("#female1").attr("checked","checked");
</script>

</body>
</html>
