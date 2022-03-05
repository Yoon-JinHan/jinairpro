/**
 * 
 */
var active;
var reacYn = false;
$(function() {
	// 초기 로딩 시 마스터 코드 목록 표시
	
	if ($("#pnrStatus").val() == "" && $("#page").val() == "") {
		active = "ACTIVE";
		fnGetList(active);	
	}
	else {
		active = $("#pnrStatus").val();
		fnGetList(active, $("#page").val());
	}
	
	if (active == "ACTIVE") {
		$("#tabActivePnr").parent().addClass("choice")
		$("#tabInactivePnr").parent().removeClass("choice")
	}else {
		$("#tabInactivePnr").parent().addClass("choice")
		$("#tabActivePnr").parent().removeClass("choice")
	}

	// 현재 PNR 검색
	$('#tabActivePnr').click(function() {
		active = "ACTIVE";
		fnGetList(active);
		$(this).parent().siblings(".choice").removeClass("choice");
		$(this).parent().addClass("choice");
		$('a[name="btnDetail"]').attr("data-click-name","예약조회_상세조회");
	});

	// 현재 PNR 검색
	$('#tabInactivePnr').click(function() {
		active = "INACTIVE";
		fnGetList(active);
		/*fnGetList("ACTIVE");*/
		$(this).parent().siblings(".choice").removeClass("choice");
		$(this).parent().addClass("choice");
		$('a[name="btnDetail"]').attr("data-click-name","지난예약_상세조회");
	});
});

var obj;
function fnGetList(pnrStatus,page) {
	
	if ((null == page) || (typeof(page) == 'undefined')) {
		page	= 1;
	}
	
	showLoading();
	
	$.ajax({
		type	: "POST",
		url		: "/mypage/getReservationListJson",
		data	: JSON.stringify({
			pnrStatus	: 	pnrStatus,
			page 		: 	page
		}),
		contentType	: "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success	: function(data) {
			
			if (!data.profileYN) {
				alertLayer($.i18n.prop('lj.ibe.b2c.myp.016'),"","moveLogin");
			}
			
			if (data.pnrSummary == null || data.pnrSummary.list == null) { // 데이터 렌더링
				$("#divReservationList").html("");
				$('#divReservationList').append(
					$("#ReservationListTmpl").render([{}])
				);
				$('#ulPagination').html("");
				return;
			}
			
			if(!reacYn) {
				if (data.reacYN) {
					reacYn = true;
					alertLayer($.i18n.prop('hom.ibe.rsv.lbl.279'));
				}
			}
			
			$("#pnrStatus").val(pnrStatus);
			$("#page").val(page);
			
			$.each(data.pnrSummary.list, function(index, item){
				// GroupId기준 그룹핑
				item.segmentGroup = new Array();
				$.each(group(item.flightSegmentSummaryDetails,"flightSegmentGroupID"), function(key, value){
					var segmentItem = new Object();
					
					segmentItem.groupId = key;
					segmentItem.depSegment = value[0];
					segmentItem.arrSegment = value[value.length-1];
					
					item.segmentGroup.push(segmentItem);
				});
				
				//TripType 설정
				var tripArr = new Array();
				var uniqueTripArr = new Array();
				
				//기존 구간 순서대로 정렬하기
				$.each(item.flightSegmentSummaryDetails, function(i, segItem){
					$.each(item.segmentGroup, function(j, groupItem){
						if (segItem.flightSegmentGroupID == groupItem.groupId) {
							groupItem.seq = i+1;
							
							tripArr.push(groupItem.depSegment.boardPoint);
							tripArr.push(groupItem.arrSegment.offPoint);
						}
					});	
				});
				
				//TripType 설정
				$.each(tripArr,function(i,el){
					if ($.inArray(el,uniqueTripArr) === -1) uniqueTripArr.push(el);
				});
				if (item.segmentGroup.length == 1) {
					item.segmentGroup.tripType = $.i18n.prop('hom.ibe.rsv.lbl.002');
				}
				else {
					if (uniqueTripArr.length > 2) {
						item.segmentGroup.tripType = $.i18n.prop('hom.ibe.rsv.lbl.003');	
					}
					else {
						item.segmentGroup.tripType = $.i18n.prop('hom.ibe.rsv.lbl.001');
					}
				}
				
				item.segmentGroup.sort(custonSort);
			});	

			data.searchPnrStatus = pnrStatus;
			fnShowList(data.pnrSummary);

			if (pnrStatus == "ACTIVE") {
				$("span.tripType").show();	
			}
			else {
				$("span.tripType").hide();
			}
			
			
			if (0 < data.pnrSummary.listCount) {
				var	pagelist	= [];
				for (var i = data.pnrSummary.page.startPage; i <= data.pnrSummary.page.endPage; i++) {
					pagelist.push({'no' : i, 'flag' : (i == data.pnrSummary.page.currentPage ? 'c' : '')});
				}
				data.pnrSummary.page['pagelist']	= pagelist;
				
				$('#ulPagination').html(
					$('#commonPaginationTmpl').render(data.pnrSummary.page)
				);
			} else {
				$('#ulPagination').html('');
			}
			
			$('a[name=btnDetail]').click(function() {
				fnReservationDetail($(this).attr("pnrnum"), data.pnrSummary.list);
			});
			$('a[name=btnEticket]').click(function() {
				fnReservationDetail($(this).attr("pnrnum"), data.pnrSummary.list);
			});

			$('[role="btn-login-with-pnr"]').on('click', function() {
				doLogOut();

				var logoutUrl = '/login/logout?returnUrl=';
				var returnUrl = '/login/quickform?accessFrom=05&codeshareSelectable=false&noswitch=true&returnUrl=';
				var checkinListUrl = '/mypage/getReservationList';
				location.href = logoutUrl + encodeURIComponent(returnUrl + encodeURIComponent(checkinListUrl));
			});
		},
		error	: function(data) {
			if (data.responseJSON != null && data.responseJSON.errorCode == "WS_1007") {
				$("#divReservationList").html("");
				$('#divReservationList').append(
					$("#ReservationListTmpl").render([{}])
				);
				$('#ulPagination').html("");
			}
			else {
				hideLoading();
				try {
                    var errorMsg = JSON.parse(data.responseText);
                    alertLayer(errorMsg.errorMessage);
				}
				catch(e) {
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
				}
			}

			$('[role="btn-login-with-pnr"]').on('click', function() {
				doLogOut();

				var logoutUrl = '/login/logout?returnUrl=';
				var returnUrl = '/login/quickform?accessFrom=05&codeshareSelectable=false&noswitch=true&returnUrl=';
				var checkinListUrl = '/mypage/getReservationList';
				location.href = logoutUrl + encodeURIComponent(returnUrl + encodeURIComponent(checkinListUrl));
			});
		},
		complete	: function(data) {
			window.scroll(0, 0);
			hideLoading();
		}
	});

}

function fnShowList(data) {
	
	var pnrList = data.list;
	
	$("#divReservationList").html("");
	
	$('#divReservationList').append(
		$("#ReservationListTmpl").render(0 < data.totalCount ? data : [{}],{leadingZeros:leadingZeros,rtnSuffix:rtnSuffix})
	);
	
	$.each(data.list, function(index, item){
		if(item.wasConfimed == true) {
			$("#"+item.pnrNumber).addClass("fontTypeF");
		}
	});
	
	$.each(data.list, function(index, item){
		$.each(item.flightSegmentSummaryDetails, function(index, segInfo){
			if(segInfo.scheduleCancel == true) {
				$("#bp"+item.pnrNumber+segInfo.flightSegmentGroupID).addClass("fontTypeF");
				$("#op"+item.pnrNumber+segInfo.flightSegmentGroupID).addClass("fontTypeF");
				$("#st"+item.pnrNumber+segInfo.flightSegmentGroupID).text($.i18n.prop('hom.ibe.rsv.lbl.280'))
			}
			if(segInfo.scheduleChange == true) {
				$("#bp"+item.pnrNumber+segInfo.flightSegmentGroupID).addClass("fontTypeF");
				$("#op"+item.pnrNumber+segInfo.flightSegmentGroupID).addClass("fontTypeF");
				$("#st"+item.pnrNumber+segInfo.flightSegmentGroupID).text($.i18n.prop('hom.ibe.rsv.lbl.281'))
			}
		});
	});
}

function fnReservationDetail(pnrnum, lstData){
	showLoading();
	
	var reservationData = new Object();
	
	reservationData.pnrNumber = pnrnum;
	
	for (var i = 0; i < lstData.length; i++) {
		if (lstData[i].pnrNumber == pnrnum) {
			var apoCode = new Array();
			for (var j = 0; j < lstData[i].flightSegmentSummaryDetails.length; j++) {
				apoCode.push(lstData[i].flightSegmentSummaryDetails[j].boardPoint);
				apoCode.push(lstData[i].flightSegmentSummaryDetails[j].offPoint);
			}
			reservationData.apoCode = apoCode;
			break;
		}
	}
	
	$.ajax({
		type	: "POST",
		url		: "/mypage/getReservationCheck",
		data	: JSON.stringify(reservationData),
		contentType	: "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success	: function(data) {
			if (data.uniqueCase.length) {
				var caseInfo = $.grep(data.uniqueCase , function( n, i ) {
				    return n.indexOf("CASE7")>=0
				});
				
				if (caseInfo.length > 0) {
					window.open(caseInfo[0].split('|')[1], "pop", "width=1000,height=850,scrollbars=yes");	
				} else if (data.uniqueCase.indexOf("CASE5") >= 0) {
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.011'));	
				} else if (data.uniqueCase.indexOf("CASE20") >= 0) {
                    alertLayer($.i18n.prop('lj.ibe.b2c.myp.032'));
                }
				hideLoading();
			} else {
				$("#pnrNumber").val(pnrnum);
				$("#reservationForm").attr("action", "/mypage/getReservationDetail")
				$("#reservationForm").attr("method", "post")
				$("#reservationForm").submit();
			}
		},
		error	: function(data) {
			hideLoading();
			try {
                var errorMsg = JSON.parse(data.responseText);
                alertLayer(errorMsg.errorMessage);
			}
			catch(e) {
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		}
	});
}

function goPage(page) {
	fnGetList(active,page);
}

//로그인페이지이동
function moveLogin(){
	document.location.href = '/login/login?returnUrl=/';
}

//특정 키값 기준 그룹핑
function group(data, column) {
  var generatedData = {};
  $.each(data, function(i, dt) {
    var key = dt[column];
    if (!(key in generatedData)) {
      generatedData[key] = [];
    }
    generatedData[key].push(dt);
  });
  return generatedData;
}

//정렬 기준
function custonSort(a, b) { if(a.seq == b.seq){ return 0} return a.seq > b.seq ? 1 : -1; }

//자릿수 앞에 0채우기
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (var i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

