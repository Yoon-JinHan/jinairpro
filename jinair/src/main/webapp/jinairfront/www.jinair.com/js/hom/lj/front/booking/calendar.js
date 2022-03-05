$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || "";
    }
}



var startDate, lastDate, startMonth, startYM, lastYM, selStartDate, selLastDate, isStart = false, isLast = false;
var seachFareCount =0;
var offDates;

//날짜 포멧팅
function getDateObj(selectDate)
{
	var foo = {year:selectDate.substring(0,4), month:selectDate.substring(5,7),day:selectDate.substring(8,10)  };
	return foo;
}

function isIntTourICNCJU(){
	var today = new Date();
	function pad(number, length) {
		var str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}
		return str;
	}
	var yyyy = today.getFullYear().toString();
	var MM = pad(today.getMonth() + 1,2);
	var dd = pad(today.getDate(), 2);
	var hh = pad(today.getHours(), 2);
	var mm = pad(today.getMinutes(), 2)
	//return yyyy + MM + dd+  hh + mm >= "202105010000";
	//국토부 승인 대기 - 20210430
	return false;
}

$(document).ready(function() {
	//공휴일 데이터를 가져온다
	$.ajax({
		type : "POST",
		url : "/jinair/jinairfront/www.jinair.com/booking/chkOffdayJson.jsp",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success	: function(data) {
			offDates = data.ALL;
			
			$(".unit>span").text("KRW");// parent.cityAirport.currency
			
			var tempDate;
			if($(data.title) != "")
			{
				$("#title").text(decodeURIComponent($.urlParam("title")));
			}
			
			if($.urlParam("p_paxCHD") =="1" && $.urlParam("p_paxADT") =="0")
			{
				$("#btnSearchBestFare").addClass("disable");
			}
			if($.urlParam("p_bind")== "true"&& $.urlParam("p_startDate")!="" )
			{
				startDate = getDateObj($.urlParam("p_startDate")); // {year:2022,month:01,day:10}
				tempDate = getDateObj($.urlParam("p_endDate"));
				tempDate.day = "";
			}

			if($.urlParam("p_tripType")== "OW" || $.urlParam("p_tripType")== "MC" || $("#registerform #pnrNumber", parent.document).val() != "")
			{
				isLast = true;
			}
			
			// 달력 그리기
			setStartCalendar(tempDate);
			
			//가는날 선택
			if(startDate != undefined && startDate.month != undefined && startDate.month != "")
			{
				// 월 태그 찾기.
				var monthDivStrong=	$(".month>h2>strong:contains('"+startDate.month+"')");
				// ol 태그 찾기. (day 뿌리는 li 최상태그)
				var olElement=	monthDivStrong.parent().next();
				// 일자 찾기
				var emElement=	olElement.find("li>a>em:contains('"+startDate.day+"')");
				// start css 설정
				var liElement =emElement.parent().parent();
				isStart = true;
				liElement.addClass("start");
				liElement.find(".layer").show();
				
				$(liElement).find("a:eq(2)").hide();
				
				$(liElement).find("a:eq(1)").click(function( event ) {
					var yearMonth	=$(".start").closest("div").find("h2").text();
					var day =$(".start em").text();
					selStartDate = yearMonth + day;
					
					$(".date div:eq(0)", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selStartDate));
					$(".date div:eq(0)", parent.document).find(".srmy").removeClass("choice");
					$(".date div:eq(0)", parent.document).find(".srmy").addClass("setting");

					$(".date div:eq(1)", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selStartDate));
					$(".date div:eq(1)", parent.document).find(".srmy").removeClass("choice");
					$(".date div:eq(1)", parent.document).find(".srmy").addClass("setting");
					hidePopupLayer();
				});
			}
			//모바일 체크
			var ua = navigator.userAgent.toLowerCase();
			var isMobileOS = false;
			if (ua.match(/.*(android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino).*/g)
				|| ua.substring(0, 4).match(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/g)) {
				isMobileOS = true;
				if (ua.indexOf("v901") > -1 || ua.indexOf("v500") > -1 || ua.indexOf("v525") > -1 || ua.indexOf("lg-v700n") > -1 || ua.indexOf("lg-v607l") > -1) {
					isMobileOS = false;
				}
				if (ua.indexOf("lm-v500n") > -1   )
					isMobileOS	= true; 
			}
			
			//기존선택날짜 셋팅
			$(".prior>span").text(decodeURI($.urlParam("p_selectedDate")));
			
			// 최저가 조회
			$('#btnSearchBestFare').click(function() {

				if($('#btnSearchBestFare').hasClass('disable')) return ;

				var searchDate;
				var startSelect = $(".start");
				if(startSelect.length == 1)
				{
					//선택 날짜 있는 경우
					var monthTopDiv = $(".start").parent().parent();
					var yearMonth	=$(monthTopDiv).find("h2").text();
					var day =$(".start em").text();

					searchDate = yearMonth.substring(0,4)+"-"+yearMonth.substring(4,6)+"-"+day;

				}
				else
				{

					var monthTopDiv = $(".start").parent().parent();
					var yearMonth	=$(".scr div:eq(0)").find("h2").text();

					day = $(".scr div:eq(0)").find("em:eq(0)").text(); // 요일
					searchDate =  yearMonth.substring(0,4)+"-"+yearMonth.substring(4,6)+"-"+day;

				}

				 fnGetBestFare(searchDate);
			});
		},
		error : function(data) {
		}
	});
});

function fnGetInputDayLabel(convertDate) {
	var week = new Array('('+$.i18n.prop('hom.ibe.rsv.lbl.sun')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.mon')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.tue')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.wed')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.thu')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.fri')+')', '('+$.i18n.prop('hom.ibe.rsv.lbl.sat')+')');
	var year  = convertDate.substring(0,4);
	var month  = convertDate.substring(4,6);
	var day  = convertDate.substring(6,8);

	var today = new Date();
	today.setFullYear(year,Number(month)-1,day);
	var todayLabel = week[today.getDay()];

	return	year + "-" +month + "-" + day +todayLabel;
}

function setCalEvent()
{
	$(".calendar .day li:not(.disable)").off();
	$(".calendar .day li:not(.disable)").on("click", function(e){
		//선택한 영역의 값이 없는 빈 곳일 경우 동작하지 않음
		if ($(this).text()=="") {
			return false;
		}
		if(!($(e.target).parents(".layer").length)){
			var $day = $(this).parents(".day");
			if(!isStart)
			{ //시작월 선택
				$("#title").text($.i18n.prop('hom.ibe.rsv.lbl.022'));
				$(this).addClass("start");
				isStart = true;
				
				if (decodeURI($.urlParam("p_endDate")) != "") {
					$(".prior>span").text(decodeURI($.urlParam("p_endDate")));	
				}
				
				$(this).find("a:eq(1)").click(function( event ) {
					var yearMonth	=$(".start").closest("div").find("h2").text();
					var day =$(".start em").text();
					selStartDate = yearMonth + day;
					
					$(".date div:eq(0)", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selStartDate));
					$(".date div:eq(0)", parent.document).find(".srmy").removeClass("choice");
					$(".date div:eq(0)", parent.document).find(".srmy").addClass("setting");

					$(".date div:eq(1)", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selStartDate));
					$(".date div:eq(1)", parent.document).find(".srmy").removeClass("choice");
					$(".date div:eq(1)", parent.document).find(".srmy").addClass("setting");
					hidePopupLayer();
				});
				$(this).find("a:eq(2)").click(function( event ) {
					$("#title").text($.i18n.prop('hom.ibe.rsv.lbl.021'));
					 $(".start .layer").hide();
					 $(".start").removeClass("start")
					 $(".prior>span").text(decodeURI($.urlParam("p_selectedDate")));
					 isStart = false;
					 isLast =false;
				  event.stopImmediatePropagation();
				});
			}
			else
			{ //종료월 선택
				if($(".calendar .month:visible .day li.start").size() > 0){ //시작일이 선택되어있을때만
					if(!($day.parents(".month").index() < $(".calendar .month:visible .day li.start").parents(".month").index())){ //종료월이 시작 월보다 작으면 안됨
						if($(this).siblings().andSelf().hasClass("start")){ //종료월 = 시작월
							if($(this).nextAll("li").hasClass("start")){
								alertLayer($.i18n.prop('lj.ibe.b2c.rsv.053'));
							} else if($(this).prevAll("li").hasClass("start")){
								if(!isLast){ //종료월 선택
									$(this).addClass("last");
									isLast = true;
								}
							}
						} else { //종료월이 시작월보다 클때
							if(!isLast){ //종료월 선택
								$(this).addClass("last");
								isLast = true;
							}
						}
					} else {
						alertLayer($.i18n.prop('lj.ibe.b2c.rsv.053'));
					}
				}
			}

			if(isLast)
			{
				//선택 날짜 있는 경우

				var yearMonth	=$(".start").closest("div").find("h2").text();
				var day =$(".start em").text();

				selStartDate = yearMonth + day;

				if ($.urlParam("p_tripType")== "MC" || $("#registerform #pnrNumber", parent.document).val() != "") {
					if (Number($.urlParam("p_index")) == 1) {
						var beforeDate = $(".itinerary.multiCourse [name=calendar]:eq("+(Number($.urlParam("p_index"))-1)+")", parent.document).find(".srmy strong").text();
						beforeDate = beforeDate.replace(/-/g, '');
						beforeDate = beforeDate.substr(0, 8);
						if (beforeDate > selStartDate) {
							$(this).removeClass("start");
							isStart = false;
							alertLayer($.i18n.prop('lj.ibe.b2c.rsv.053'));
							return false;
						}
					}
					else {
						var afterDate = $(".itinerary.multiCourse [name=calendar]:eq("+(Number($.urlParam("p_index"))+1)+")", parent.document).find(".srmy strong").text();
						afterDate = afterDate.replace(/-/g, '');
						afterDate = afterDate.substr(0, 8);
						if (afterDate != "" && afterDate < selStartDate) {
							$(this).removeClass("start");
							isStart = false;
							alertLayer($.i18n.prop('lj.ibe.b2c.rsv.054'));
							return false;
						}
					}
					
					$(".itinerary.multiCourse [name=calendar]:eq("+$.urlParam("p_index")+")", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selStartDate));
					$(".itinerary.multiCourse [name=calendar]:eq("+$.urlParam("p_index")+")", parent.document).find(".srmy").removeClass("choice");
					$(".itinerary.multiCourse [name=calendar]:eq("+$.urlParam("p_index")+")", parent.document).find(".srmy").addClass("setting");
				}
				else {
					$(".date div:eq(0)", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selStartDate));
					$(".date div:eq(0)", parent.document).find(".srmy").removeClass("choice");
					$(".date div:eq(0)", parent.document).find(".srmy").addClass("setting");

					var lastDay= $(".last").find("em").text();
					lastYM = $(this).closest(".month").find("h2").text();
					if(lastDay != "")
					{
						selLastDate = lastYM + $(".last").find("em").text();
						$(".date div:eq(1)", parent.document).find(".srmy strong").text(fnGetInputDayLabel(selLastDate));
						$(".date div:eq(1)", parent.document).find(".srmy").removeClass("choice");
						$(".date div:eq(1)", parent.document).find(".srmy").addClass("setting");

					}
				}
				hidePopupLayer();
			}
			if($(this).hasClass("start")){
				$(this).find(".layer").show();
				$(this).addClass("beforeText"); //200520 ::before 관련 js 추가
			}
	}
	}).on("mouseenter focusin", function(){
		if($(".calendar .month:visible .day li.start").size() > 0){ //시작일이 있으면
			lastDate = $(this).index();
			startDate = $(".calendar .month:visible .day li.start").index();
			startMonth = $(".calendar .month:visible .day li.start").parents(".month").index();
			var $day = $(this).parents(".day");
			if(!($day.parents(".month").index() < startMonth)){ //종료월이 시작 월보다 작으면 안됨
				if(!$(this).siblings("li").hasClass("last")){
					$day.parents(".month").nextAll(".month").find("li").removeClass("over");
					if($day.parents(".month").index() > startMonth){ //종료월이 시작 월보다 클때
						$day.find("li").each(function(){
							if($(this).index() <= lastDate){
								$(this).addClass("over").add($(this).prevAll("li").addClass("over")).add($(this).nextAll("li").removeClass("over"));
							}
						});
						$day.parents(".month").prevAll(".month").not($(".calendar .month:visible .day li.start").parents(".month").prevAll(".month")).find("li").each(function(){
							if($(this).index() > startDate){
								$(this).addClass("over");
							}
						});
					} else { //종료월이 시작 월과 같을때
						$day.find("li").each(function(){
							if($(this).index() > startDate && $(this).index() <= lastDate){
								$(this).addClass("over").add($(this).nextAll("li").removeClass("over"));
							} else {
								$(this).removeClass("over");
							}
						});
					}
				}
			}
		}
		if($(this).hasClass("start")){ //출도착동일, 출발재선택
			$(this).find(".layer").show();
			$(this).addClass("beforeText"); //200520 ::before 관련 js 추가
		}
	}).on("mouseleave", function(){
		$(this).find(".layer").hide();
		$(this).removeClass("beforeText"); //200520 ::before 관련 js 추가
	});

}
//최상위 month div에서 날짜를 추출해서 yyyy-mm-dd 형식으로 반환 .
function getMonthDivDate(monthRootElement)
{
	var yearMonth	=$(monthRootElement).find("h2").text();
	var day ="01"; ////ddd

	return yearMonth.substring(0,4)+"-"+yearMonth.substring(4,6)+"-"+day;
}

var Nextdate;

function showPrice(data) {
	var ol =[];
	$.each(data, function( index, value ) {
		var startDate =  getDateObj(value.fltDate);

		// 월 태그 찾기.
		var monthDivStrong=	$(".month>h2>strong:contains('"+startDate.month+"')");
		// ol 태그 찾기. (day 뿌리는 li 최상태그)
		var olElement=	monthDivStrong.parent().next();
		// 일자 찾기
		var emElement=	olElement.find("li>a>em:contains('"+startDate.day+"')");
		ol.push(emElement.parent().parent());
		emElement.next().text(value.totalAmt);
	});
	Nextdate= data[data.length-1].fltDate;
	$.each(ol, function( index, value ) {
		//$(value).toggleClass("onPrice");
		$(value).addClass("onPrice");

	});
	seachFareCount++;

	if(seachFareCount<3)
	{
		fnGetBestFare(Nextdate);
	}
}

function fnGetBestFare(startDate)
{
	var depCity = $.urlParam("p_depCity");
	var arrCity = $.urlParam("p_arrCity");

	if(depCity ==  "undefined" || depCity =="" )
	{
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.055'));
		return false;
	}
	if(arrCity ==  "undefined" || arrCity =="" )
	{
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056'));
		return false;
	}
	var paxADT = $.urlParam("p_paxADT");
	var paxCHD = $.urlParam("p_paxCHD");
	var paxINF = $.urlParam("p_paxINF");
	var tripType = $.urlParam("p_tripType");
	//OW: 편도  가는날 조회, RO: 왕복가는날 조회, RR: 왕복 오는날 조회
	$.ajax({
		type	: "POST",
		url		: "/booking/getBestFareJson",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		data	: JSON.stringify({
			dep		: depCity,
			arr		: arrCity,
			onwardDate		: startDate,
			paxTypeADT		: paxADT,
			paxTypeCHD		: paxCHD,
			paxTypeINF		: paxINF,
			tripType		: tripType
		}),
		contentType	: "application/json; charset=UTF-8",
		dataType: "json",
		success	: function(data) {
			if (0 < data.length) {
				showPrice(data);
			} else {
			}
		},
		error	: function(data) {
			alert($.i18n.prop('ptl.code.msg.007'));
		}
	});

}

//출도착 동일 셋팅 컨펌창 (모바일에서만 노출)
/*function sameDate() { //확인
	alert('동일');
	hideConfirmLayer('allClose');
}
function sameDateNo() { //취소
	alert('다르게');
	hideConfirmLayer();
}*/

//이전 3개월
function showPrev() {

	var startDate = 	getMonthDivDate($(".scr div:visible:first"))
	startDate=getDateObj(startDate)
	var myDate=new Date();
	myDate.setFullYear(startDate.year, startDate.month-1, startDate.day);

	myDate.setMonth(myDate.getMonth()-3);
	var prevDate;
	var now = new Date();
	if(now.getTime()<myDate.getTime())
	{
		prevDate= {year:myDate.getFullYear(), month:myDate.getMonth()+1,day:myDate.getDate() };
	}


	setStartCalendar(prevDate, true);

/*	var mTop = $("#scr div:eq(0)").position().top + $(".scr").scrollTop();
	$(".calendar .scr").animate({
		scrollTop : mTop
	}, 150, "easeInOutQuint");*/
}

//다음 3개월
function showNext() {

	//현재 마지막 month div 읽어서  계산
	var endDate = 	getMonthDivDate($(".scr div:visible:last"));
	endDate=getDateObj(endDate)
	var myDate=new Date();
	myDate.setFullYear(endDate.year, endDate.month, endDate.day);
	myDate.setMonth(myDate.getMonth()+1);

	var nextDate = {year:myDate.getFullYear(), month:myDate.getMonth(),day:myDate.getDate() };

	setNextCalendar(nextDate, false);
	/*var mTop = $(".scr div:eq(0)").position().top + $(".scr").scrollTop();
	$(".calendar .scr").animate({
		scrollTop : mTop
	}, 150, "easeInOutQuint");*/
}
//date 기준으로 1개월 표출 처음 화면 로드 시 달력 표출
function setStartCalendar(date, isForth)
{
	// 달력 다시그리기 값 초기화
	//$(".scr").empty();
	//isStart = false;
	if (!isForth) {
		isForth = false;
	}

	var dt ;
	var nowDt = new Date();
	if(date == undefined)
	{
		dt = new Date(); // 날짜 객체 생성
	}
	else if(date.day ==""){
		dt= new Date(Number(date.year),Number(date.month)-1,1);
		
		if (nowDt.getFullYear() == dt.getFullYear() && nowDt.getMonth() == dt.getMonth()) {
			dt = new Date();
		}
	}
	else
	{
		dt= new Date(Number(date.year),Number(date.month)-1,Number(date.day));
	}
	var y = dt.getFullYear(), // 현재 연도
		m = dt.getMonth(), // 현재 월
		d = dt.getDate(), // 현재 일
		day = dt.getDay(); // 요일

	/*	12개월 달력 표시*/
	for (var i = 1; i < 13; i++) {

		if (i == 1 && m<= nowDt.getMonth())
			dt = new Date(y, m, d);
		else
			dt = new Date(y, m, 1);

		y = dt.getFullYear(), // 현재 연도
		m = dt.getMonth() + 1; // 현재 월

		if (i === 1)
			d = dt.getDate(); // 현재 일
		else
			d = 1;
		day = dt.getDay();

		if ($.grep($(".scr div:visible"), function(n,i){
			var compDate = getDateObj(getMonthDivDate(n));
			return compDate.year == y && compDate.month == m ;
		}).length > 0) {
			break;
		}
		
		var chkOffdt = new Array();
		var chkOffdtTmp = [];
		var tempMonth = m;
		if(tempMonth < 10)
			tempMonth = "0" + tempMonth;
		var chkYM = y + "";
		chkYM = chkYM + tempMonth;
		for (x in offDates) {
			if(offDates[x].ymd.indexOf(chkYM) >= 0) {
				chkOffdtTmp[x] = new Array();
				chkOffdtTmp[x]["day"] = offDates[x].ymd.substring(6, 8);
				chkOffdtTmp[x]["name"] = offDates[x].ymd_name;
				chkOffdtTmp[x]["color"] = offDates[x].color;
				chkOffdt.push(chkOffdtTmp[x]);
			}
		}
		
		setMonthDiv(y, m, d, day, isForth, chkOffdt);
	}

	setCouponDate();
	setDisableDate();
	setCalEvent();
	
	
	var style = ""
	style += '<style>';
	style += '    .calendar .day li.today >a:after {content:"' + $.i18n.prop("hom.ibe.rsv.lbl.173") + '"; position:absolute; left:0; top:50%; width:100%; margin-top:20px; text-align:center; font-size:14px; line-height:1em;}';
	style += '    .calendar .day li.start >a:before, .calendar .day li.last >a:before {content:"' + $.i18n.prop("hom.ibe.rsv.lbl.035") + '"; position:absolute; left:0; top:13px; width:100%; margin:0; color:#fff; font-family:"notol"; font-size:12px; line-height:1em; background:none;}';
	style += '    .calendar .day li.last >a:before {content:"' + $.i18n.prop("hom.ibe.rsv.lbl.176") + '";}';
	style += '    .calendarWrap .prior {position:absolute; left:57%; top:38px; margin-left:80px; padding-left:20px; color:#333;}';
	style += '</style>' ;
	
	$("head").append(style);
}

function setDisableDate(){
	var depCity = $.urlParam("p_depCity");
	var arrCity = $.urlParam("p_arrCity");
	
	// 국제선 관광비행 (ICN<>ICN)
	if((depCity == 'ICN' && arrCity == 'ICN')||
		(depCity == 'GMP' && arrCity == 'GMP')||
		(depCity == 'PUS' && arrCity == 'PUS')||
		(depCity == 'ICN' && arrCity == 'CJU' && isIntTourICNCJU())){
		// 예약 가능한 날짜
		var dateList;
		if(depCity == 'ICN' && arrCity == 'ICN'){
			dateList = icnTourDate;
		}else if(depCity == 'GMP' && arrCity == 'GMP'){
			dateList = gmpTourDate;
		}else if(depCity == 'PUS' && arrCity == 'PUS'){
			dateList = pusTourDate;
		}else if(depCity == 'ICN' && arrCity == 'CJU' && isIntTourICNCJU()){
			dateList = cjuTourDate;
		}
		if(dateList.length>0){
			if(parent.document.referrer.indexOf('osaka')>-1){
				dateList = ["20210221"];
			}
			$.each($("div.month:visible"), function( index, value ) {
				var year = $(value).find("h2").text().substr(0, 4);
				var month = $(value).find("h2").text().substr(4, 2);
				$.each($(value).find("li>a"), function( aIndex, aValue ) {
					var date = $(aValue).find('em').text();
					var fullDate = ''.concat(year,month,date);
					if(dateList.filter(function(d){return d == fullDate;}).length < 1){
						$(aValue).parent().addClass("disable");
						$(aValue).prop('onclick',"javascript:;").off('click');
					}
				});
			});
		}
	}
}

// 달력 3개월 추가
function setNextCalendar(date, isForth)
{
	// 달력 다시그리기 값 초기화
	//$(".scr").empty();
	//isStart = false;
	if (!isForth) {
		isForth = false;
	}

	var dt ;
	var nowDt = new Date();
	if(date == undefined)
	{
		dt = new Date(); // 날짜 객체 생성
	}
	else if(date.day ==""){
		dt= new Date(Number(date.year),Number(date.month)-1,1);
		
		if (nowDt.getFullYear() == dt.getFullYear() && nowDt.getMonth() == dt.getMonth()) {
			dt = new Date();
		}
	}
	else
	{
		dt= new Date(Number(date.year),Number(date.month)-1,Number(date.day));
	}
	var y = dt.getFullYear(), // 현재 연도
		m = dt.getMonth(), // 현재 월
		d = dt.getDate(), // 현재 일
		day = dt.getDay(); // 요일

	/*	3개월 달력 표시*/
	for (var i = 1; i < 4; i++) {

		if (i == 1 && m<= nowDt.getMonth())
			dt = new Date(y, m, d);
		else
			dt = new Date(y, m, 1);

		y = dt.getFullYear(), // 현재 연도
		m = dt.getMonth() + 1; // 현재 월

		if (i === 1)
			d = dt.getDate(); // 현재 일
		else
			d = 1;
		day = dt.getDay();

		if ($.grep($(".scr div:visible"), function(n,i){
			var compDate = getDateObj(getMonthDivDate(n));
			return compDate.year == y && compDate.month == m ;
		}).length > 0) {
			break;
		}
		
		var chkOffdt = new Array();
		var chkOffdtTmp = [];
		var tempMonth = m;
		if(tempMonth < 10)
			tempMonth = "0" + tempMonth;
		var chkYM = y + "";
		chkYM = chkYM + tempMonth;
		for (x in offDates) {
			if(offDates[x].ymd.indexOf(chkYM) >= 0) {
				chkOffdtTmp[x] = new Array();
				chkOffdtTmp[x]["day"] = offDates[x].ymd.substring(6, 8);
				chkOffdtTmp[x]["name"] = offDates[x].ymd_name;
				chkOffdtTmp[x]["color"] = offDates[x].color;
				chkOffdt.push(chkOffdtTmp[x]);
			}
		}
		
		setMonthDiv(y, m, d, day, isForth, chkOffdt);
	}

	setCouponDate();
	setDisableDate();
	setCalEvent();
	
	var style = ""
	style += '<style>';
	style += '    .calendar .day li.today >a:after {content:"' + $.i18n.prop("hom.ibe.rsv.lbl.173") + '"; position:absolute; left:0; top:50%; width:100%; margin-top:20px; text-align:center; font-size:14px; line-height:1em;}';
	style += '    .calendar .day li.start >a:before, .calendar .day li.last >a:before {content:"' + $.i18n.prop("hom.ibe.rsv.lbl.035") + '"; position:absolute; left:0; top:13px; width:100%; margin:0; color:#fff; font-family:"notol"; font-size:12px; line-height:1em; background:none;}';
	style += '    .calendar .day li.last >a:before {content:"' + $.i18n.prop("hom.ibe.rsv.lbl.176") + '";}';
	style += '    .calendarWrap .prior {position:absolute; left:57%; top:38px; margin-left:80px; padding-left:20px; color:#333;}';
	style += '</style>' ;
	
	$("head").append(style);
}

function setInitStart()
{
	/*$(".calendar .day li.start .layer").hide();
	$(".calendar .month:visible .day li.start").removeClass("start");
		isStart = false;
	 return false;*/
}

function setCouponDate(){
	if($("#registerform #cpnNo",parent.document).val() != "")
	{
		var couponInfo = parent.bonusCoupon;
		var embargo = parent.bonusCouponEmbargo;
		// 프로모션코드일시 null에러
		if(couponInfo != null && embargo != null){
			$.each($("div.month:visible"), function( index, value ) {
				var year = $(value).find("h2").text().substr(0,4);
				var month = $(value).find("h2").text().substr(4,2);
				var firstDate = $(value).find("li>a>em:first").text();
				var strtArr = couponInfo.brdStrtDt.split('-');
				var endArr = couponInfo.brdExprDt.split('-');
				var brdStrtDt = new Date(Number(strtArr[0]),Number(strtArr[1])-1,Number(strtArr[2]));
				var brdExprDt = new Date(Number(endArr[0]),Number(endArr[1])-1,Number(endArr[2]));
				var useWeek =  couponInfo.weekCtgrCd;

				function pad(num) {
					num = num + '';
					return num.length < 2 ? '0' + num : num;
				}
				function getWeek(date){
					var week = date.getDay();
					if (week == 0) {
						return 7;
					}
					else {
						return week;
					}
				}

				//요일 및 시작 종료일 적용
				if ((year < brdStrtDt.getFullYear() && month < brdStrtDt.getMonth()+1) || (year > brdExprDt.getFullYear() && month > brdExprDt.getMonth()+1)) {
					$.each($(value).find("li>a"), function( aIndex, aValue ) {
						$(aValue).parent().addClass("disable");
						$(aValue).prop('onclick',"javascript:;").off('click');
					});
				}else {

					var chkDate = new Date(Number(year),Number(month)-1,Number(firstDate));
					$.each($(value).find("li>a>em"), function( aIndex, aValue ) {

						//시작일 체크
						if (chkDate < brdStrtDt)
						{
							$(aValue).closest("li").addClass("disable");
							$(aValue).closest("a").prop('onclick',"javascript:;").off('click');
						}
						//종료일 체크
						else if (chkDate > brdExprDt)
						{
							$(aValue).closest("li").addClass("disable");
							$(aValue).closest("a").prop('onclick',"javascript:;").off('click');
						}
						//요일 체크
						else if (useWeek.indexOf(getWeek(chkDate)) == -1) {
							$(aValue).closest("li").addClass("disable");
							$(aValue).closest("a").prop('onclick',"javascript:;").off('click');
						}
						else {
							//embargo 체크
							for (var j = 0; j < embargo.length; j++) {
								var ebgStartArr = embargo[j].embrgStrtDt.split('-');
								var ebgEndArr = embargo[j].embrgEndDt.split('-');
								var ebgStartDt = new Date(Number(ebgStartArr[0]),Number(ebgStartArr[1])-1,Number(ebgStartArr[2]));
								var ebgEndDt = new Date(Number(ebgEndArr[0]),Number(ebgEndArr[1])-1,Number(ebgEndArr[2]));

								if (chkDate >= ebgStartDt && chkDate <= ebgEndDt) {
									$(aValue).closest("li").addClass("disable");
									$(aValue).closest("a").prop('onclick',"javascript:;").off('click');
								}
							}
						}

						//날짜 증가
						chkDate.setDate(chkDate.getDate()+1);
					});
				}
			});
		}
	}
}

function setMonthDiv(y, m, d, theDay, isForth, offdays) {

	// 오늘 여부
	var toDate = new Date();
	var ty = toDate.getFullYear();
	var tm = toDate.getMonth() + 1;
	var td = toDate.getDate();
	var isToday = (y === ty && m === tm && d === td) ? true : false;

	/* 현재 월의 마지막 일 */
	var last = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
	// 4년마다 있는 윤년 계산(100년||400년 주기는 제외)
	if (y % 4 == 0 && y % 100 != 0 || y % 400 === 0) {
		lastDate = last[1] = 29;
	}
	// 현재 월의 마지막 날짜
	var lastDate = last[m - 1];
	/* 현재 월의 달력에 필요한 행의 개수 */
	// theDay(빈 칸의 수), lastDate(월의 전체 일수)
	var row = Math.ceil((theDay + lastDate) / 7);

	var dNum = d;
	/* 달력 연도/월을 표기하고 달력이 들어갈 테이블을 작성*/
	function pad(num) {
		num = num + '';
		return num.length < 2 ? '0' + num : num;
	}
	function getcalSetting()
	{
		this.year = y ;
		this.month =  pad(m);
		this.day =[];
		for(var i =d; i<= lastDate; i++)
		{
			this.day.unshift(pad(i));
		}
		return this;

	}
	var insDiv = '<div class="month"><h2>' + y + '<br><strong>' + pad(m) + '</strong></h2><ol class="day">';


	var calSetting = getcalSetting();;
	
	// 달력에 표기되는 일의 초기값!
	for (var i = 1; i <= row; i++) {
		for (var k = 1; k <= 7; k++) {
			//렌더링 하려는 일자가 공휴일인지 아닌지 판별 시작
			var isHoliday = false;
			//일요일의 경우 무조건 빨간색처리
			if(k==1)
				isHoliday = true;
			
			for(var h = 0; h < offdays.length; h++) {
				if(offdays[h].day == pad(dNum))
					isHoliday = true;
			}
			//렌더링 하려는 일자가 공휴일인지 아닌지 판별 끝
			
			// 월1일 이전 + 월마지막일 이후 = 빈 칸으로!
			if (i === 1 && k <= theDay) {
				insDiv += '<li></li>';
			}else if( dNum > lastDate)
			{

			}
			else {
				if (dNum === d && isToday) {	// 오늘 날짜 표시
					if(isHoliday) // 공휴일이면 빨간칠
						insDiv += '<li class="sun"><a href="#" onclick="return false"><em>' + pad(dNum) + '</em><span class="price"></span></a><p class="layer"><a href="javascript:void(0);" class="same">'+$.i18n.prop('hom.ibe.rsv.lbl.174')+'</a><a href="javascript:void(0);" class="choose">'+$.i18n.prop('hom.ibe.rsv.lbl.175')+'</a></p></li>';
					else
						insDiv += '<li class="today"><a href="#" onclick="return false"><em>' + pad(dNum) + '</em><span class="price"></span></a><p class="layer"><a href="javascript:void(0);" class="same">'+$.i18n.prop('hom.ibe.rsv.lbl.174')+'</a><a href="javascript:void(0);" class="choose">'+$.i18n.prop('hom.ibe.rsv.lbl.175')+'</a></p></li>';
				}
				else {
					if(isHoliday) // 공휴일이면 빨간칠
						insDiv += '<li class="sun"><a href="#" onclick="return false"><em>' + pad(dNum) + '</em><span class="price"></span></a><p class="layer"><a href="javascript:void(0);" class="same">'+$.i18n.prop('hom.ibe.rsv.lbl.174')+'</a><a href="javascript:void(0);" class="choose">'+$.i18n.prop('hom.ibe.rsv.lbl.175')+'</a></p></li>';
					else
						insDiv += '<li><a href="#" onclick="return false"><em>' + pad(dNum) + '</em><span class="price"></span></a><p class="layer"><a href="javascript:void(0);" class="same">'+$.i18n.prop('hom.ibe.rsv.lbl.174')+'</a><a href="javascript:void(0);" class="choose">'+$.i18n.prop('hom.ibe.rsv.lbl.175')+'</a></p></li>';
				}
				dNum++;
			}
		}
	}

	insDiv += '</ol></div>';

	/* 화면에 추가 */
	if (isForth) {
		var addDate = getDateObj(getMonthDivDate(insDiv));
		var beforeDate = $.grep($(".scr div:visible"), function(n,i){
			var compDate = getDateObj(getMonthDivDate(n));
			if (compDate.year <= addDate.year) {
				return compDate.month < addDate.month;
			}
		});
		if (beforeDate.length == 0) {
			$(".scr").prepend(insDiv);	
		}
		else {
			$(beforeDate).last().after(insDiv);	
		}
	}
	else {
		$(".scr").append(insDiv);	
	}
}
