var gObj = "";
var gEcnObj 	= "";
var timerObj	= "";
var child = null;
var timer = startInterval();
var arrCardName = [];
var couponList;
var selectedCoupon;
var rsResult= false;

function startInterval(){
	
	setInterval(function(){
		if(child != null){
			if(child.closed){
				clearInterval(timer);
	
				if(timerObj == null || timerObj == "" || timerObj == "undefined"){
					$(".bgLayer").hide();
				}		
				// timer 재시작 및 timer object 초기화
				child 		= null;
				timerObj 	= "";
				timer;
			}		
		}else{
			child 		= null;
			timerObj 	= "";
			timer;			
		}
	}, 500); 
}
function savePayment(pgYN, fareYN, directYN){

	if(!$('#saveData').valid())
	{
		return false;
	}
	if($('#refund_ck').is(":checked") == false &&( $('#paymentStatus').val() == "CANCEL" || $('#paymentStatus').val() == "PARTIAL_REFUND") ) {
		alertLayer($.i18n.prop('hom.ibe.rsv.lbl.255'));
		return;
	}

  var data = {};
    data.bookingID = $('#bookingID').val().trim();

    $.ajax({
        type : "POST",
        url : '/booking/checkBookingSession',
        beforeSend    : function(xhr) {
            var    csrfHeader    = $("meta[name='_csrf_header']").attr("content");
            var    csrfToken    = $("meta[name='_csrf']").attr("content");

            xhr.setRequestHeader(csrfHeader, csrfToken);
        },
        data : data,
        success : function(html) {

            if(html == "S"){

            	if(directYN){
            	   return fn_authValue();
            	}
            	_pgYN =pgYN ;
            	if(fareYN){
            		showPopupLayer('/popup/airfareInfo?checkYN=Y');
            	}
            	else if(pgYN)
            	{
            		checkSession();
            	}
            	else{
            		saveDataByBasic();
            	}
            	
            }else{
                alertLayerForCallback($.i18n.prop('lj.ibe.b2c.rsv.070'),afterFunc,null);
            }
        },
        error : function(data) {
            alertLayerForCallback($.i18n.prop('lj.ibe.b2c.rsv.070'),afterFunc,null);
        }
    });    
}

function paymentSSR(){
	fn_authValue();
}
function paymentSubmit(pgYN, fareYN)
{
	if(!$('#saveData').valid())
	{
		return false;
	}
	_pgYN =pgYN ;
	if(fareYN){
		showPopupLayer('/popup/airfareInfo?checkYN=Y');
	}
	else if(pgYN)
	{
		checkSession();
	}
	else{
		saveDataByBasic();
	}

}
var _pgYN;
function fnSubmit(){
	hidePopupLayer();
	
	// [크롬, 팝업(ex.네이버페이)] new tab으로 팝업이 호출되는 문제로 인해 setTimeout을 사용함
	setTimeout(function() {
		if(_pgYN) {
			checkSession();
		} else {
			saveDataByBasic();
		}
    }, 3);
}

// User 정보 setting // 사용안함 . 2017.09.20 한송희
function fn_setUserInfo(){

	/* requierd*/
	var UserId 			="";//= "TesterId";
	var UserName 		="";// "Tester";
	/* optional */
	var UserEmail 		="";// "Test@test.com";
	var UserAddress1 	="";// "서울시 서초구 방배동";
	var UserAddress2 	="";// "신구아파트";

	/* 상기 field는 업무에서 전송된 값을 사용 */

	$("#user_id").val(UserId);
	$("#user_nm").val(UserName);
	$("#user_mail").val(UserEmail);
	$("#user_addr").val(UserAddress1 + " " + UserAddress2);
}
function checkSession(){
	$.ajax({
		url : "/booking/getInventoryStatus",
		beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		type: 'POST',
		success : function(data) {
			if(data == "S"){
				fn_authValue();
			}else{
				alertLayerForCallback($.i18n.prop('lj.ibe.b2c.rsv.068'),afterFunc,null);
			}

		},
		error : function(xhr, status, error) {
			alertLayerForCallback($.i18n.prop('lj.ibe.b2c.rsv.068'),afterFunc,null);
		}
});
}
var afterFunc = function (param) {
	location.href = '/booking/index';
};

function fn_authValue(){
	if(!$('#saveData').valid())
	{
		return;
	}

	var amtSum 				= $("#totAmt").text();
	var amtOnly 			= amtSum.replace("원", "");
	var amt 				= amtOnly.replace(",", "");
	var authenticationType	= "";
	var cardCode 			= $("#selectCardCode").val();
	var chinFlag 			= "";
	var cardNo				= "";
	var cardExpdate			= "";

	var cardType	= "";
	var vanCry 		= $("#vanCry").val();
	var selectedValue=$('input[name=payment]:checked').val();

	if(selectedValue == "")
	{
		return false;
	}
	var selectedId;
	if("KRW" == vanCry) {
		selectedId = selectedValue;
	}else {
		if($("#cardTypeTmp").val() != "" && $("#cardTypeTmp").val() != undefined)
			selectedId = $("#cardTypeTmp").val();
		else
			selectedId = selectedValue;
	}

	cardNo = $("#cardNumber1").val() + $("#cardNumber2").val() + $("#cardNumber3").val() + $("#cardNumber4").val();
	cardNo = cardNo.trim();
	cardExpdate = $("#cardExpireDate").val();

	if(selectedId == "visa" ||selectedId == "masterCard"||selectedId == "jcb" ||selectedId == "amex" ||selectedId == "amexC" ){
		if(cardNo == ""){

			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056'));
			return;
		}else if(cardExpdate == ""){

			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.056'));
			return;
		}else{

		}
	}

	if("KRW" == vanCry){
		if("card" == selectedId){
			authenticationType = "cardAuth";
		}else if("paybooc" == selectedId){
			authenticationType = "cardAuth";
			cardCode = "026";
		}else if("hanacard" == selectedId){
			authenticationType = "cardAuth";
			cardCode = "006";
		}else if("accountTransfer" == selectedId){
			authenticationType = "accountAuth";
		}else if("naverPay" == selectedId){
			authenticationType = "naverpayAuth";
		}else if("virtual" == selectedId){
			authenticationType = "virtualAuth";
		}else if("payco" == selectedId){
			authenticationType = "paycoAuth";
		}else if("nkakaoPay" == selectedId){
			authenticationType = "nkakaoPayAuth";
		}else if("toss" == selectedId){
			authenticationType = "tossAuth";
		}else if("smilePay" == selectedId){
			authenticationType = "smilePayAuth";
		}else if("amexC" == selectedId){
			cardType	= "AX";
			authenticationType = "cyberSource3ds";
		}else if("tmoneyPay" == selectedId){
			var subSelectedId = $("#paySelect").val();
			if(subSelectedId == "pay"){
				authenticationType = "tmoneyPayAuth";
			}else if(subSelectedId == "bizpay"){
				authenticationType = "tmoneyBizPayAuth";
			}else {
				alert("결제 구분을 선택해주세요");
				return;
			}
		}
	}else if("CNY" == vanCry){
		if("visa" == selectedId){
			cardType	= "VI";
			authenticationType = "cyberSource3ds";
		}else if("masterCard" == selectedId){
			cardType	= "MC";
			authenticationType = "cyberSource3ds";
		}else if("P003" == selectedId || "P141" == selectedId){
			authenticationType = "aliAuth";
			$("#chinFlag").val(selectedValue);
		}else if("amexC" == selectedId){
			cardType	= "AX";
			authenticationType = "cyberSource3ds";
		}else if("paypal" == selectedId){
			authenticationType = "paypalAuth";
		}
	}else if("JPY" == vanCry){
		if("visa" == selectedId){
			cardType	= "VI";
			authenticationType = "eConText3dAuth";
		}else if("masterCard" == selectedId){
			cardType	= "MC";
			authenticationType = "eConText3dAuth";
		}else if("jcb" == selectedId){
			cardType	= "JC";
			authenticationType = "eConText3dAuth";
		}else if("amex" == selectedId){
			cardType	= "AX";
			authenticationType = "cyberSource3ds";
		}else if("conv" == selectedId){
			authenticationType = "convAuth";
		}else if("linePay" == selectedId){
			authenticationType = "linePayAuth";
		}else if("paypal" == selectedId){
			authenticationType = "paypalAuth";
		}
	}else if("USD" == vanCry){
		if("visa" == selectedId){
			cardType	= "VI";
			authenticationType = "cyberSource3ds";
		}else if("masterCard" == selectedId){
			cardType	= "MC";
			authenticationType = "cyberSource3ds";
		}else if("amexC" == selectedId){
			cardType	= "AX";
			authenticationType = "cyberSource3ds";
		}else if("paypal" == selectedId){
			authenticationType = "paypalAuth";
		}
	}else{
		if("visa" == selectedId){
			cardType	= "VI";
			authenticationType = "cyberSource3ds";
		}else if("masterCard" == selectedId){
			cardType	= "MC";
			authenticationType = "cyberSource3ds";
		}else if("amexC" == selectedId){
			cardType	= "AX";
			authenticationType = "cyberSource3ds";
		}else if("paypal" == selectedId){
			authenticationType = "paypalAuth";
		}
	}

	$("#productName").val("Air Ticket");
	$("#authenticationType").val(authenticationType);
	$("#cardCode").val(cardCode);
	$("#econCardno").val(cardNo);
	$("#cardExpdate").val(cardExpdate);
	$("#cardType").val(cardType);

	var econTelNo 			= $("#storePhone").val();
	var econKanjiName1_1 	= $("#storeUserLastName").val().substr(0,10);
	var econKanjiName1_2 	= $("#storeUserFirstName").val().substr(0,10);
	var econEmail 			= $("#storeEmail").val();

	$("#telNo").val(econTelNo);
	$("#kanjiName1_1").val(econKanjiName1_1);
	$("#kanjiName1_2").val(econKanjiName1_2);
	$("#email").val(econEmail);

	if(selectedCoupon != undefined && selectedCoupon != "")
	{
		$('#postData #couponNo').val(selectedCoupon.couponNumber);
	}else{
		$('#postData #couponNo').val('');
	}

	$postData =  $("#postData").serialize();

	$.ajax({
		url : "/booking/selectVan",
		beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		dataType : "json",
		async:false,
		data : $postData,
		success : function(data) {

			$("#amt").val(data.totAmt);
			$("#authenticationType").val(data.vanType);
			$("#vanUrl").val(data.connUrl);
			$("#cardCode").val(data.cardCode);
			$("#chinFlag").val(data.chinFlag);
			$("#conDev").val(data.conDev);
			$("#lineType").val(data.lineType);
			$("#econCardno").val(data.econCardno);
			$("#cardExpdate").val(data.cardExpdate);
			$("#cardType").val(data.cardType);
			$("#couponNo").val(data.couponNo);
			$("#productType").val(data.productType);
			$("#EP_wooripay_useyn").val(data.EP_wooripay_useyn);
			$("#sp_wooripay_useyn").val(data.sp_wooripay_useyn);

			fn_connVan();
		},
		error : function(xhr, status, error) {
			alertLayer("Van error");
		}
	});
}

function fn_connVan(){	

	$postData =  $("#postData").serialize();
	var frm = document.postData;
    var csrfToken = $('meta[name="_csrf"]').attr('content');
    var url  = "" + $("#vanUrl").val()  + "?_csrf=" + csrfToken;
 
	if($("#authenticationType").val() == "cardAuth"){
		if($("#conDev").val() == "P"){
			$("#EP_card_cd").val($("#cardCode").val());

			var installment = $("#selectInstallment").val();
			//if($("#isPayBooc").val()) installment =  $("#selectInstallment2").val();
			if($("#isPayBooc").val() === 'true' || $("#isPayBooc").val() === true) {
				installment =  $("#selectInstallment2").val();
			}

			$("#EP_install_period").val(installment);
			
			//현대 M포인트 사용 시
			if($("input[name=mPointUseCheck]").is(":checked")){
				$("#EP_install_period").val(parseInt(installment)+80);
			}

			// 50000원 이하일 경우 할부 제한
			var amt 		= $("#amt").val();
			var installment = $("#EP_install_period").val();
			
			easypay_card_webpay(frm, url, "hiddenifr", "", "", "iframe", 30, $("#cardCode").val());
		}else{
			$("#sp_card_cd").val($("#cardCode").val());
			$("#sp_install_period").val($("#selectInstallment").val());
			
			//현대 M포인트 사용 시
			if($("input[name=mPointUseCheck]").is(":checked")){
				$("#sp_install_period").val(parseInt($("#selectInstallment").val())+80);
			}

			// 50000원 이하일 경우 할부 제한
			var amt 		= $("#amt").val();
			var installment = $("#sp_install_period").val();

			easypay_card_webpay(frm, url, "hiddenifr", "", "", "iframe", 30, $("#cardCode").val());
		}

	}else if($("#authenticationType").val() == "aliAuth"){
		var aliRst = confirm("付款成功之后，请勿关闭弹出视窗。麻烦您等到弹出视窗自动关闭。 如果在使用移动浏览器，付款成功之后再点击完成。");
		if(aliRst) {
			/* alipay, wechatpay의 경우 해당 PG사에서 PG페이지로 강제 submit이 되기 떄문에 iframe 사용 불가
			 * 또한 그에 따라 popup의 X 버튼에 대한 컨트롤 또한 불가*/
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				if($("#chinFlag").val() == "P003"){
					child = window.open("", "pop", "width=1000,height=850,scrollbars=yes");
				}else{
					child = window.open("", "pop", "width=800,height=500,scrollbars=yes");
				}
				
				var tims = setInterval(function() {
					if(child.closed) {
						clearInterval(tims);
						remind();
					}
				});
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");
		}
		else {
			$(".bgLayer").hide();
		}
	}else if($("#authenticationType").val() == "convAuth"){
		timer = null;
		showPopupLayer(url+ "?" + $postData);
	}else if($("#authenticationType").val() == "virtualAuth"){
		var width = 720;
		var height = 630;
		
		var xpos = (screen.width - width) / 2;
		var ypos = (screen.width - height) / 6;
		var position = "top=" + ypos + ",left=" + xpos;
		var features = position + ", width="+width+", height="+height+",toolbar=no, location=no";
		
		$(".bgLayer").show();
		
		window.name = "STPG_CLIENT";
		child = window.open("", "STPG_WALLET", features);
		frm.action = url;
		frm.target = "STPG_WALLET";
		frm.submit();
	}else if($("#authenticationType").val() == "accountAuth"){
		$(".bgLayer").show();
		var agent = navigator.userAgent.toLowerCase();
		leftPosition = (screen.width-720)/2-10;
		topPosition = (screen.height-600)/2-50;
		child = window.open("", "pop", "top='+topPosition+',left='+leftPosition+',height=595,width=720,status=no,dependent=no,scrollbars=no,resizable=no");
		frm.action = url;
		frm.target = "pop";
		frm.submit();	
	}else if($("#authenticationType").val() == "naverpayAuth"){	
		
/*		$("#postData").one("submit",function(){			
			$(".bgLayer").show();
			child = window.open("", "pop", "width=790,height=890,scrollbars=yes");
			frm.method = "POST";
			frm.action = url;
			frm.target = "pop";
		}).trigger("submit");*/
		
		child = window.open("", "pop", "width=790,height=890,scrollbars=yes");
		
		if(child != null){
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");			
		}else{
			alert("팝업차단을 해제하셔야 네이버페이 결제가 가능합니다.");
		}
		

	}else if($("#authenticationType").val() == "eConText3dAuth") {
		
		var popHeight = 500; // 카드사 중 가장 큰 팝업사이즈에 맞춤
		var popWidth = 500; // 카드사 중 가장 큰 팝업사이즈에 맞춤
		var winHeight = document.body.clientHeight;	// 현재창의 높이
		var winWidth = document.body.clientWidth;	// 현재창의 너비
		var winX = window.screenLeft;	// 현재창의 x좌표
		var winY = window.screenTop;	// 현재창의 y좌표

		var popX = winX + (winWidth - popWidth)/2;
		var popY = winY + (winHeight - popHeight)/2;
		/*$(".bgLayer").show();		*/
		showAuthlayer(url,frm);		
		/*$("#postData").one("submit",function(){			
			$(".bgLayer").show();
			child = window.open("", "pop", "width="+popWidth+"px,height="+popHeight+"px,top="+popY+",left="+popX);			
			frm.method = "POST";
			frm.action = url;
			frm.target = "pop";
			showPopupLayer(url);
		}).trigger("submit");*/
	}else if($("#authenticationType").val() == "cyberSource3ds"){
		/*$(".bgLayer").show();*/
		showAuthlayer(url,frm);
		/*$("#postData").one("submit",function(){			
			$(".bgLayer").show();
			child = window.open("", "pop", "width=600,height=600,scrollbars=yes");

			frm.method = "POST";
			frm.action = url;
			frm.target = "pop";
		}).trigger("submit");*/
	}else if($("#authenticationType").val() == "paycoAuth"){	
		child = window.open("", "pop", "width=400,height=600,scrollbars=yes");
				
		if(child != null){
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");			
		}else{
			alert("팝업차단을 해제하셔야 페이코 결제가 가능합니다.");
		}
	}else if($("#authenticationType").val() == "nkakaoPayAuth"){	
		child = window.open("", "pop", "width=400,height=600,scrollbars=yes");
				
		if(child != null){
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");			
		}else{
			alert("팝업차단을 해제하셔야 카카오페이 결제가 가능합니다.");
		}
	}else if($("#authenticationType").val() == "tossAuth"){	
		/*
		child = window.open("", "pop", "width=400,height=600,scrollbars=yes");
				
		if(child != null){
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");			
		}else{
			alert("팝업차단을 해제하셔야 토스 결제가 가능합니다.");
		}
		*/
		
		$.ajax({
			url : "/payment/toss/tossAuth",
			beforeSend: function(xhr) {
				var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
				var	csrfToken	= $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			data : $postData,
			dataType : "json",
			async:false,
			success : function(data) {
				if(data.code == "0"){    				
        			//TOSS 결제창 이후 해당값이 리턴되지 않음으로 미리 담아둠
        			$("#tossToken").val(data.payToken);
        			var url = "/popup/tossOpen?orderSheetUrl=" + data.checkoutPage;
        			showPopupLayer(url);
        			if(data.orderChannel == "PC") {
        				$('.popLayer').addClass('tossPC');
        			}
        			else {
        				$('.popLayer').addClass('tossMOB');
        			}       			
    			}else{
    				alertLayer("Toss error");
    				hidePopupLayer();
    			}
			},
			error : function(xhr, status, error) {
				alertLayer("Toss error");
				hidePopupLayer();
			}
		});
	}else if($("#authenticationType").val() == "linePayAuth"){	
		child = window.open("", "pop", "width=500,height=600,scrollbars=yes");
				
		if(child != null){
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");			
		}else{
			alert("팝업차단을 해제하셔야 라인페이 결제가 가능합니다.");
		}
	}else if($("#authenticationType").val() == "paypalAuth"){	
		child = window.open("", "pop", "width=500,height=600,scrollbars=yes");
				
		if(child != null){
			$("#postData").one("submit",function(){			
				$(".bgLayer").show();
				
				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");			
		}else{
			alert("팝업차단을 해제하셔야 PAYPAL 결제가 가능합니다.");
		}
	}else if($("#authenticationType").val() == "smilePayAuth"){	
//		child = window.open("", "pop", "width=410,height=640,scrollbars=yes");
//		
//		if(child != null){
//			$("#postData").one("submit",function(){			
//				$(".bgLayer").show();
//				
//				frm.method = "POST";
//				frm.action = url;
//				frm.target = "pop";
//			}).trigger("submit");			
//		}else{
//			alert("팝업차단을 해제하셔야 스마일페이 결제가 가능합니다.");
//		}
		
		$.ajax({
			url : "/payment/smilePay/smilePayAuth",
			beforeSend: function(xhr) {
				var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
				var	csrfToken	= $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			data : $postData,
			dataType : "json",
			async:false,
			success : function(data) {
				if(data.authPageUrl != null){    				
					//SMILEPAY 승인 요청 시 전달되는 값
					$("#transactionIdSmilePay").val(data.shopTransactionId);
        			$("#orderNumberSmilePay").val(data.shopOrderId);
        			var url = "/popup/smilePayOpen?orderSheetUrl=" + data.authPageUrl;
        			showPopupLayer(url);

        			if(data.calledFromAppOrElse == "WEB") {
        				$('.popLayer').addClass('smilePayPC');
        			}
        			else {
        				$('.popLayer').addClass('smilePayMOB');
        			}   			
    			}else{
    				alertLayer("결제 진행중 오류가 발생하였습니다.");
    				hidePopupLayer();
    			}
			},
			error : function(xhr, status, error) {
				alertLayer("Smilepay error");
				hidePopupLayer();
			}
		});
	}else if($("#authenticationType").val() == "tmoneyPayAuth"){

		child = window.open("", "pop", "width=500,height=650,scrollbars=yes");

		if(child != null){
			$("#postData").one("submit",function(){
				$(".bgLayer").show();

				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");
		}else{
			alert("팝업차단을 해제하셔야 티머니페이 결제가 가능합니다.");
		}

		/*
		$.ajax({
			url : "/payment/tmoneyPay/tmoneyPayAuthJ",
			beforeSend: function(xhr) {
				var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
				var	csrfToken	= $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			data : $postData,
			dataType : "json",
			async:false,
			success : function(data) {
				var tmParam = "?callbackUrl=" + data.callbackUrl
				+ "&onlnAuthAmt=" + data.onlnAuthAmt + "&onlnAuthInflCd=" + data.onlnAuthInflCd
				+ "&onlnFrcAuthNo=" + data.onlnFrcAuthNo + "&onlnFrcDvsCd=" + data.onlnFrcDvsCd
				+ "&onlnFrcId=" + data.onlnFrcId + "&prdNm=" + data.prdNm
				+ "&returnUrl=" + data.returnUrl  + "&sbrdFrcId=" + data.sbrdFrcId + "&sbrdFrcNm=" + data.sbrdFrcNm;

    			var url = data.apiUrl + tmParam;
    			$("#vanUrl").val(url);

        		child = window.open("", "pop", "width=500,height=650,scrollbars=yes");
				
        		if(child != null){
        			$("#postData").one("submit",function(){			
        				$(".bgLayer").show();
        				
        				frm.method = "POST";
        				frm.action = "/payment/tmoneyPay/tmoneyOpen";
        				frm.target = "pop";
        			}).trigger("submit");			
        		}else{
        			alert("팝업차단을 해제하셔야 티머니페이 결제가 가능합니다.");
        		}
			},
			error : function(xhr, status, error) {
				alertLayer("tmoneyPay error");
				hidePopupLayer();
			}
		});
		*/
	}else if($("#authenticationType").val() == "tmoneyBizPayAuth"){
		child = window.open("", "pop", "width=410,height=600,scrollbars=yes");

		if(child != null){
			$("#postData").one("submit",function(){
				$(".bgLayer").show();

				frm.method = "POST";
				frm.action = url;
				frm.target = "pop";
			}).trigger("submit");
		}else{
			alert("팝업차단을 해제하셔야 티머니 비즈페이 결제가 가능합니다.");
		}
	}
}

function nPayV2Call() {
	 var oPay = Naver.Pay.create({
         "mode" : "development", // development or production
         "clientId": "H50HtGvdj5dBFs6vkZNI" // clientId
	 });

     oPay.open({
         "merchantUserKey": "JINAIR",
         "merchantPayKey": "1",
         "productName": "1",
         "totalPayAmount": "10000",
         "taxScopeAmount": "10000",
         "taxExScopeAmount": "0",
         "returnUrl": "사용자 결제 완료 후 결제 결과를 받을 URL"
     });
}

function fn_goIBS(){
	var expireDate = $("#cardExpireDate").val();
	var orgExp = expireDate.replace("/", "");
	var expYY = orgExp.substring(0, 4);
	var expMM = orgExp.substring(4, 6);
	
	var non3ds = {
			GuestId					:	"1",
			FormOfPaymentCode		:	"CC01",
			PaymentAmount			:	""	,
			ExchangeRate			:	"1.0",
			CardType				:	"",
			PaymentTypeNumber		:	$("#cardNumber1").val() + $("#cardNumber2").val() + $("#cardNumber3").val() + $("#cardNumber4").val(),
			ExpirationMonth			:	expMM,
			ExpirationYear			:	expYY,
			cvv2Number				:	$("#cardCvcNumber").val(),
			CardHolderName			:	"",
			PaymentCurrency			:	"",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			cd3secFlg				:	"0",
			CustomerUserID			:	"GPR14"		
	}

	showLoading();
	
	var stringJson=  JSON.stringify(non3ds);

	$('<input>').attr({type: 'hidden', id: "CertiString", name: "CertiString", value:stringJson}).appendTo("#saveData");
	saveData();
	//return non3ds;
}

//카드 인증요청한 정보를 object로 keeping, KICC에서는 DB 관리를 권장하나 현재 DB 관리 하지 않는 정책임
function fn_saveField(obj){
	gObj = obj;
}

function fn_ecnClose(){
	var econtext	=	{
			GuestId					:	"1",
			FormOfPaymentCode		:	"TR03",
			PaymentAmount			:	gEcnObj.totalAmt,
			ExchangeRate			:	"1.0",
			PaymentCurrency			:	"JPY",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			RecieptNumber			:	"",
			CustomerUserID			:	"GPR14",
			PaymentStatus			: 	"PROCESSING",
			ConvenienceStoreCode	:	"D00000",
			ConvenienceStoreName	:	"DUMMY",
			ConvenienceStoreType	:	"11",
			CustomerFirstName		:	"", // 사용자명
			CustomerFirstName		:	"", // 사용자명
			ReceiptProntURL			:	gEcnObj.paymentURL,
			pnrOnHoldIndicator		:	"TRUE",
			ConfirmDateTime 		:	gEcnObj.timeLimit,
			TransactionId 			: 	gEcnObj.econNo,
			ResponseCode 			: 	gEcnObj.status,
			ResponseMessage1 		: 	gEcnObj.info,
			ResponseMessage2		:	"",
			InterDomFlag 			: 	"D",
			OrderNumber 			: 	gEcnObj.orderNumber

	}
	
	var stringJson=  JSON.stringify(econtext);

	$('<input>').attr({type: 'hidden', id: "CertiString", name: "CertiString", value:stringJson}).appendTo("#saveData");
	saveData();
}


// 편의점 결제 데이터 저장
function fn_saveEcnField(obj){
	gEcnObj	= obj;

	if(gEcnObj.infoCode != "00000"){
		alert("[" + gEcnObj.infoCode + "]" +gEcnObj.info);
	}else{	
		RsType = "ENC";
		fn_ecnClose();
	}	
}

//인증 응답 공통
function publicRs(obj, JinPayMethod, secureFlag){
	try{
		var objRS;
		var RsType;
		// window.open X버튼 클릭 확인을 위한 obj
		timerObj = obj;
		
		if(JinPayMethod == "CC01"){
			if($("#conDev").val() == "P"){				
				if(secureFlag == "CYBS_3DS"){
					objRS = cyb3ds(obj, "CC01");
					$(".bgLayer").hide();
					// timer, window 창 초기화
					clearInterval(timer);
					child = null;
					timerObj = "";
					timer;				
					
				}else if(secureFlag == "ECON_3DS"){
					$(".bgLayer").hide();
					if(obj.econ_retCode == "1" && obj.econ_reasonCode == "20"){
						objRS =	ecn3DRs(obj, "CC01");					
					}else if(obj.econ_retCode == "2" && obj.econ_reasonCode == "30"){
						objRS =	ecn3DRs(obj, "CC01");					
					}else if(obj.econ_retCode == "2" && obj.econ_reasonCode == "50"){
						objRS =	ecn3DRs(obj, "CC01");					
					}else{
						// timer, window 창 초기화
						clearInterval(timer);
						child = null;
						timerObj = "";
						timer;		
						alert("["+obj.econ_retCode+"] " + obj.econ_reasonCode);
					}	
				}else{
					if(obj.EP_res_cd == "0000"){
						objRS=	cardRs(obj, "CC01");
					//	$(".bgLayer").hide();
					//	hidePopupLayer();
					}else{
						alert("[" + obj.EP_res_cd + "]" +obj.EP_res_msg);
						if(obj.EP_res_cd == "W301" ||obj.EP_res_cd == "W306" ||obj.EP_res_cd == "K100")
							return;
					//	hidePopupLayer();		
					}
				}		
			}else{	
				if(secureFlag == "CYBS_3DS"){
					objRS = cyb3ds(obj, "CC01");
					$(".bgLayer").hide();
					// timer, window 창 초기화
					clearInterval(timer);
					child = null;
					timerObj = "";
					timer;				
					
				}else if(secureFlag == "ECON_3DS"){
					$(".bgLayer").hide();
					if(obj.econ_retCode == "1" && obj.econ_reasonCode == "20"){
						objRS =	ecn3DRs(obj, "CC01");					
					}else if(obj.econ_retCode == "2" && obj.econ_reasonCode == "30"){
						objRS =	ecn3DRs(obj, "CC01");					
					}else if(obj.econ_retCode == "2" && obj.econ_reasonCode == "50"){
						objRS =	ecn3DRs(obj, "CC01");					
					}else{
						// timer, window 창 초기화
						clearInterval(timer);
						child = null;
						timerObj = "";
						timer;		
						alert("["+obj.econ_retCode+"] " + obj.econ_reasonCode);
					}	
				}else{
					if(obj.sp_res_cd == "0000"){				
						objRS = m_cardRs(obj, "CC01");
						//$(".bgLayer").hide();
						//hidePopupLayer();
					}else{
						alert("[" + obj.sp_res_cd + "]" +obj.sp_res_msg);
						//hidePopupLayer();
					}		
				}
			}			
		}else if(JinPayMethod == "CC05"){
			$(".bgLayer").hide();
			if(obj.krp_resultCd == "0000"){
				RsType = "ALI";
				objRS  =aliRs(obj, "CC05");
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("[" + obj.krp_resultCd + "]" +obj.krp_resmsg);
			}
		}else if(JinPayMethod == "TR03"){
			$(".bgLayer").hide();
			if(obj.infoCode != "00000"){
				alert("[" + obj.infoCode + "]" +obj.info);
				hidePopupLayer();
			}else{
				RsType = "ENC";
				alert("[" + obj.infoCode + "]" +obj.info);
			}
		}else if(JinPayMethod == "CM01"){
			$(".bgLayer").hide();
			if(obj.nresultCode == "Success"){
				RsType = "NPAY";
				objRS  = npayRs(obj, "CM01");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("[" + obj.nresultCode + "]" +obj.nresultMessage);			
			}
		}else if(JinPayMethod == "CM02"){
			$(".bgLayer").hide();
			if(obj.codePayco == "0"){
				RsType = "PAYCO";
				objRS  = paycoRs(obj, "CM02");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("PAYCO 결제 실패 코드 : " + obj["codePayco"]);	
			}
		}else if(JinPayMethod == "CM03"){
			$(".bgLayer").hide();
			if(obj.code == "1"){
				RsType = "NKAKAOPAY";
				objRS  = nkakaoPayRs(obj, "CM03");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("KAKAOPAY 결제 승인에 실패하였습니다");	
			}
		}else if(JinPayMethod == "CM04"){
			$(".bgLayer").hide();
			if(obj.codeLinepay == "1"){
				RsType = "LINEPAY";
				objRS  = linePayRs(obj, "CM04");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("LINEPAY ERROR!!!");	
			}
		}else if(JinPayMethod == "CM05"){
			$(".bgLayer").hide();
			if(obj.codePaypal == "1"){
				RsType = "PAYPAL";
				objRS  = paypalRs(obj, "CM05");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("PAYPAL ERROR!!!");	
			}
		}else if(JinPayMethod == "CM06"){
			$(".bgLayer").hide();
			if(obj.codeToss == "1"){
				RsType = "TOSS";
				objRS  = tossRs(obj, "CM06");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("TOSS 결제 실패 코드 : " + obj["codeToss"]);	
			}
		}else if(JinPayMethod == "CM07"){
			$(".bgLayer").hide();
			if(obj.codeSmilePay == "200"){
				RsType = "SMILEPAY";
				objRS  = smilePayRs(obj, "CM07");			
			}else{
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert("SMILEPAY 결제 실패 코드 : " + obj["codeSmilePay"]);	
			}
		}else if(JinPayMethod == "CM08"){
			$(".bgLayer").hide();
			RsType = "TMONEYPAY";
			objRS  = tmoneyPayRs(obj, "CM08");
		}else if(JinPayMethod == "CM09"){
			$(".bgLayer").hide();
			RsType = "TMONEYBIZPAY";
			objRS  = tmoneyBizPayRs(obj, "CM09");
			$("input[name=payment]").val("tmoneyBizPay");
		}else if(JinPayMethod == "TR05"){
			$(".bgLayer").hide();		
			RsType = "VIRTUAL";
			
			if(obj.vb_P_STATUS == "0051"){
				// 입금대기 처리
				objRS  = virtualRs(obj, "TR05");
			}else if(obj.vb_P_STATUS == "0021"){
				// 입금 처리된 주문 성공 처리
				objRS  = virtualRs(obj, "TR05");	
			}else if(obj.vb_P_STATUS == "0031"){
				// 거래 실패
				// timer, window 창 초기화
				clearInterval(timer);
				child = null;
				timerObj = "";
				timer;
				alert(obj.vb_P_RMESG1);
			}		
		}else if(JinPayMethod == "TR01"){
			$(".bgLayer").hide();
			showLoading();
			saveData();
			return;
		}

		if(rsResult == false){
			if(	objRS != undefined)
			{
				rsResult = true;
				var stringJson=  JSON.stringify(objRS);
				showLoading();
	
				$('<input>').attr({type: 'hidden', id: "CertiString", name: "CertiString", value:stringJson}).appendTo('#saveData');
				$('#saveData').append("<input type='hidden'  id='CertiString' name='CertiString' value='"+stringJson+"' />");
				saveData();
			}else{
				throw new Error('인증 정보값 손실');
			}
		}
	}catch(exception){
		var exceptionData = exception.name + exception.message +"["+JinPayMethod+"]";
		$.ajax({
			url : "/booking/addPaymentError?exception="+exceptionData,
			beforeSend: function(xhr) {
				var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
				var	csrfToken	= $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			dataType : "text",
			success : function(data) {
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		});
	}
}

function saveData()
{
	if($('#saveData').valid())
	{
			var certiTypeVal = $(':radio[name="payment"]:checked').val();
			if(certiTypeVal == 'hanacard') certiTypeVal = 'card';
		  $('<input>').attr({type: 'hidden', id: "CertiType", name: "CertiType", value: certiTypeVal}).appendTo("#saveData");

			if(selectedCoupon != undefined && selectedCoupon != "")
			{
				$('<input>').attr({type: 'hidden', id: "couponNo", name: "couponNo", value:selectedCoupon.couponNumber}).appendTo('#saveData');
			}

		  $("#saveData").attr("method", "post");
		  
		  //alertLayer("정상");
		 $('#saveData').submit();	
	}
	
}

function saveDataByBasic()
{
	showLoading();
	
	//Adobe Analytics
	if($('#paymentStatus').val() == "PARTIAL_REFUND"){
		var refundTemp = JSON.parse($('#dl').val());
		
		refundTemp.refund_amount =  $("#ptRfndCurrentTotalAmt").val()-$("#ptRfndFee").val();
		refundTemp.refund_penalty_amount = $("#ptRfndFee").val();
		refundTemp.refund_np_amount = 0; 
		refundTemp.refund_penalty_np_amount = 0; 
		refundTemp.refundTemp = refundTemp;
		
		if(refundTemp !=null || refundTemp != undefined){
			_satellite.track("click_trip_refund", refundTemp);
		}
	}
	
	$('<input>').attr({type: 'hidden', id: "CertiType", name: "CertiType", value:$(':radio[name="payment"]:checked').val()}).appendTo("#saveData");

	if(selectedCoupon != undefined && selectedCoupon != "")
	{
		$('<input>').attr({type: 'hidden', id: "couponNo", name: "couponNo", value:selectedCoupon.couponNumber}).appendTo('#saveData');
	}
	$("#saveData").attr("method", "post");
	$('#saveData').submit();
}

// 자릿수 맞추기
function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;

}

function rpad(s, padLength, padString){
    while(s.length < padLength)
        s += padString;
    return s;
}

function cardRs(obj, JinPayMethod){
	var reqType = obj.EP_req_type;
	var EncData = "";
	var sKey	= "";
	var kvpEncData = "";
	var epKvpCardCd = "";
	var isPayBook = "N";
	
	sKey		= obj.EP_kvp_sessionkey;
	kvpEncData  = obj.EV_kvp_encdata;
	epKvpCardCd = obj.EP_kvp_cardcode;
	
	if(kvpEncData != "")
		isPayBook = "Y";

	if(reqType == "2"){
		EncData	= rpad(obj.EV_cavv, 40, " ") +	rpad(obj.EV_xid, 40, " ") + obj.EV_eci;
	}else if(reqType == "1"){
		EncData	= pad(sKey.length, 4) + obj.EP_kvp_sessionkey + pad(kvpEncData.length, 4) + obj.EV_kvp_encdata ;
	}

	var cardTypeNumber = obj.EP_card_no;
	var cardCode		= $("#EP_card_cd").val(); 
	var expYY = "";
	var expMM = "";

	var objExp = obj.EP_expire_date; 
	if(objExp != null && objExp == ""){
		expYY = objExp.substring(0,1);
		expMM = objExp.substring(2,3);
	}
	/* 국내 카드 승인 요청 전문*/	
	var domesticCard = {
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	obj.EP_card_amt,
			ExchangeRate			:	"1.0",
			CardType				:	cardCode,
			PaymentTypeNumber		:	cardTypeNumber,
			ExpirationMonth			:	expMM,
			ExpirationYear			:	expYY,
			cvv2Number				:	"999",
			CardHolderName			:	gObj.user_nm,
			PaymentCurrency			:	"KRW",
			IpAddress				:	obj.clientIp,	
			CustomerPhoneNumber		:	"",				// IBE 추가
			EmailID					:	gObj.user_mail, // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	obj.EP_req_type,
			InstallmentPeriod		:	obj.EP_install_period,
			CustomerUserID			:	"GPR14",
			OrderNumber				:	obj.EP_order_no,
			cd3secFlg				:	"0",
			EncData					:	EncData,
			IssuedCountry			:	"KR",
			InterDomFlag			:	"", // IBE 추가
			EpKvpCardCd				: 	epKvpCardCd,
			IsPayBook				:	isPayBook
	}

	return domesticCard;
}

function m_cardRs(obj, JinPayMethod){
	var reqType = obj.sp_req_type;
	var EncData = "";
	var sKey	= "";
	var kvpEncData = "";
	var epKvpCardCd = "";
	var isPayBook = "N";
	
	sKey		= obj.sp_kvp_sessionkey;
	kvpEncData  = obj.sp_kvp_encdata;
	epKvpCardCd = obj.sp_kvp_cardcode;
	
	if(kvpEncData != "")
		isPayBook = "Y";

	if(reqType == "2"){
		EncData	= rpad(obj.sp_cavv, 40, " ") +	rpad(obj.sp_xid, 40, " ") + obj.sp_eci;
	}else if(reqType == "1"){
		EncData	= pad(sKey.length, 4) + obj.sp_kvp_sessionkey + pad(kvpEncData.length, 4) + obj.sp_kvp_encdata ;
	}

	var cardTypeNumber = obj.sp_card_no;
	var cardCode		= $("#sp_card_cd").val(); 
	var expYY = "";
	var expMM = "";

	var objExp = obj.sp_expire_date; 
	if(objExp != null && objExp == ""){
		expYY = objExp.substring(0,1);
		expMM = objExp.substring(2,3);
	}
	
/* 국내 카드 승인 요청 전문*/
	var domesticCard = {
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	obj.sp_card_amt,
			ExchangeRate			:	"1.0",
			CardType				:	cardCode,
			PaymentTypeNumber		:	cardTypeNumber,
			ExpirationMonth			:	expMM,
			ExpirationYear			:	expYY,
			cvv2Number				:	"999",
			CardHolderName			:	gObj.user_nm,
			PaymentCurrency			:	"KRW",
			IpAddress				:	obj.clientIp,	
			CustomerPhoneNumber		:	"",				// IBE 추가
			EmailID					:	gObj.user_mail, // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",	
			AuthType				:	obj.sp_req_type,
			InstallmentPeriod		:	obj.sp_install_period,
			CustomerUserID			:	"GPR14",
			OrderNumber				:	obj.sp_order_no,
			cd3secFlg				:	"0",
			EncData					:	EncData,
			IssuedCountry			:	"KR",
			InterDomFlag			:	"", // IBE 추가
			EpKvpCardCd				: 	epKvpCardCd, // IBE 추가
			IsPayBook				:	isPayBook
	}

	return domesticCard;
}

function aliRs(obj, JinPayMethod){
	var krp = {
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	obj.krp_amt	,
			ExchangeRate			:	obj.krp_convrate,
			CardType				:	"ALI/WECHAT",
			PaymentTypeNumber		:	obj.krp_cardno1+" " + "XXXX XXXX" + " " + obj.krp_cardno4,
			ExpirationMonth			:	"12",
			ExpirationYear			:	"17",
			cvv2Number				:	"999",
			CardHolderName			:	obj.krp_buyer,
			PaymentCurrency			:	obj.krp_cur,
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			OrderNumber				: 	obj.krp_ref,
			TransactionId			:	obj.krp_transid,
			ResponseCode			:	obj.krp_resultCd,
			ResponseMessage1		:	obj.krp_resmsg,
			InterDomFlag			: 	"", // 국내선/국제선 구분자 IBE 추가
			Lang					:	"CN"			
	}

	return krp;
}

function npayRs(obj, JinPayMethod){
	
	var npay	={
			GuestId					:	"1",
			FormOfPaymentCode		:	"CM01",
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"NAVERPAY",
			PaymentTypeNumber		:	"4444333322221111",
			ExpirationMonth			:	"12",
			ExpirationYear			:	"17",
			cvv2Number				:	"999",
			CardHolderName			:	"",
			PaymentCurrency			:	"KRW",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.npaymentId,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	obj.nmerchantPayKey
	};

	
	return npay;
}

function paycoRs(obj, JinPayMethod){
	
	var payco	={
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"PAYCO",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"KRW",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.reserveOrderNo,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	obj.sellerOrderReferenceKey,
			paymentCertifyToken		:	obj.paymentCertifyToken,
			Lang					:	$("#paycoPromo").val()
	};

	
	return payco;
}

function nkakaoPayRs(obj, JinPayMethod){
	
	var nkakaoPay	={
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"NKAKAOPAY",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"KRW",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.tId,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	obj.orderId,
			paymentCertifyToken		:	obj.pgToken
	};

	
	return nkakaoPay;
}

function linePayRs(obj, JinPayMethod){
	
	var linePay	={
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"LINEPAY",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"KRW",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.transactionId,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	"",
			paymentCertifyToken		:	""
	};

	
	return linePay;
}

function paypalRs(obj, JinPayMethod){
	
	var paypal	={
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"PAYPAL",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.transactionIdPaypal,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	"",
			paymentCertifyToken		:	obj.token
	};
	return paypal;
}

function tossRs(obj, JinPayMethod){
	
	var toss	={
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"TOSS",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.transactionIdToss,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	obj.transactionIdToss,
			paymentCertifyToken		:	obj.tossToken
	};
	return toss;
}

function smilePayRs(obj, JinPayMethod){
	
	var smilePay	=	{
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"SMILEPAY",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	obj.transactionIdSmilePay,
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	obj.orderNumberSmilePay,
			ResponseMessage1 		: 	obj.smilePayToken,
			ResponseMessage2		: 	obj.authorizationId
	};
	
	return smilePay;
}

function tmoneyPayRs(obj, JinPayMethod){

	var tmoneyPay	=	{
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"TMONEY",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	"",
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	"",
			ResponseMessage1 		: 	obj.onlnAuthKeyVal,
			ResponseMessage2		: 	obj.virtCardRfrnId
	};

	return tmoneyPay;
}

function tmoneyBizPayRs(obj, JinPayMethod){

	var tmoneyBizPay	=	{
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	"",
			ExchangeRate			:	"1.0",
			CardType				:	"TMONEYB",
			PaymentTypeNumber		:	"",
			ExpirationMonth			:	"",
			ExpirationYear			:	"",
			cvv2Number				:	"",
			CardHolderName			:	"",
			PaymentCurrency			:	"",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			TransactionId			:	"",
			InterDomFlag			:	"",//obj.nlineType,
			OrderNumber 			:	"",
			ResponseMessage1 		: 	obj.authKey,
			ResponseMessage2		: 	obj.tmbParam
	};

	return tmoneyBizPay;
}

function npayRsConvert(){
	var formObj = $("form[name='npayRs']").serializeObject();

	publicRs(formObj, "CM01", "");
}

function krpRsConvert(){
	var formObj = $("form[name='krpRs']").serializeObject();
	
	publicRs(formObj, "CC05", "");
}

function cbs3DsRsConvert(PaRes,MD){	
	$("#cbs_PaRes").val(PaRes);
	$("#cbs_MD").val(MD);
	var formObj = $("form[name='cbs3ds']").serializeObject();
	publicRs(formObj, "CC01", "CYBS_3DS");
}

function econ3DsRsConvert(){
	var formObj = $("form[name='econtext3dRs']").serializeObject();
	publicRs(formObj, "CC01", "ECON_3DS");
	hidePopupLayer();
}

function virtualRsConvert(){
	var formObj = $("form[name='virtualRs']").serializeObject();

	publicRs(formObj, "TR05", "");
}

//실시간 계좌이체
function bankpayRs(obj, JinPayMethod){
	
	var bankpay = {
					GuestId					:	"1",
					FormOfPaymentCode		:	JinPayMethod,
					PaymentAmount			:	obj.tx_amount,
					ExchangeRate			:	"1.0",
					CardType				:	"BA",
					PaymentTypeNumber		:	"4444333322221111",
					ExpirationMonth			:	"12",
					ExpirationYear			:	"17",
					cvv2Number				:	"999",
					CardHolderName			:	"",
					PaymentCurrency			:	"KRW",
					IpAddress				:	"",	// IBE 추가
					CustomerPhoneNumber		:	"",	
					EmailID					:	"", // IBE 추가
					addressOne				:	"",
					cityName				:	"",
					countryName				:	"",
					province				:	"",
					zipCode					:	"",
					phoneNumber				:	"",
					PhoneNumberCountryCode	:	"",
					RecieptNumber			:	"",
					AuthType				:	"",
					InstallmentPeriod		:	"",
					CustomerUserID			:	"GPR14",
					OrderNumber				:	obj.hd_serial_no,
					ResponseCode			: 	obj.hd_resp_code,
					InterDomFlag			: 	"", // 국내선/국제선 구분자 IBE 추가
					TxReceiptDate			: 	obj.tx_receipt_date,
					TxBillYn				:	obj.tx_bill_yn,
					ConfirmDateTime			:	obj.hd_pay_date				,	//	출금일자
					BankCode				:	obj.tx_bank_code			,
					TxFee					:	obj.tx_fee					, 
					ReceiptAccountNumber	:	obj.tx_receipt_acnt		
				}

	return bankpay;
}

function virtualRs(obj, JinPayMethod){
	var virtual = {
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	obj.vb_P_AMT	,
			ExchangeRate			:	"1.0",
			CardType				:	"VBA",
			PaymentTypeNumber		:	"4444333322221111",
			ExpirationMonth			:	"12",
			ExpirationYear			:	"17",
			cvv2Number				:	"999",
			CardHolderName			:	"",
			PaymentCurrency			:	"KRW",
			IpAddress				:	"", // IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			OrderNumber				: 	obj.vb_P_OID,
			TransactionId			:	obj.vb_P_TR_NO,
			ResponseCode			:	obj.vb_P_NOTI,
			ResponseMessage1		:	obj.vb_P_RMESG1,
			ResponseMessage2		:	obj.vb_P_RMESG2,
			InterDomFlag			:	""
	}

	return virtual;
}

function cyb3ds(obj, JinPayMethod){
	var cyb3ds	=	{
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	""	,
			ExchangeRate			:	"1.0",
			CardType				:	"",
			PaymentTypeNumber		:	"4444333322221111",
			ExpirationMonth			:	"12",
			ExpirationYear			:	"17",
			cvv2Number				:	"999",
			CardHolderName			:	"",
			PaymentCurrency			:	"USD",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			InterDomFlag			:	"",
			cd3secFlg				:	"1",
			EncData					:   obj.cbs_PaRes
	}
	return cyb3ds;
}

function ecn3DRs(obj, JinPayMethod){

	var ecn3DRs	=	{
			GuestId					:	"1",
			FormOfPaymentCode		:	JinPayMethod,
			PaymentAmount			:	""	,
			ExchangeRate			:	"1.0",
			CardType				:	"",
			PaymentTypeNumber		:	"4444333322221111",
			ExpirationMonth			:	"12",
			ExpirationYear			:	"17",
			cvv2Number				:	"999",
			CardHolderName			:	"",
			PaymentCurrency			:	"JPY",
			IpAddress				:	"",	// IBE 추가
			CustomerPhoneNumber		:	"",	
			EmailID					:	"", // IBE 추가
			addressOne				:	"",
			cityName				:	"",
			countryName				:	"",
			province				:	"",
			zipCode					:	"",
			phoneNumber				:	"",
			PhoneNumberCountryCode	:	"",
			RecieptNumber			:	"",
			AuthType				:	"",
			InstallmentPeriod		:	"",
			CustomerUserID			:	"GPR14",
			InterDomFlag			:	"",
			cd3secFlg				:	"1",
			EncData					:   obj.econ_sessionID
	}

	return ecn3DRs;
}

function paypalRsConvert(){
	var formObj = $("form[name='paypalRs']").serializeObject();

	publicRs(formObj, "CM05", "");
}

function linePayRsConvert(){
	var formObj = $("form[name='linePayRs']").serializeObject();

	publicRs(formObj, "CM04", "");
}

function nkakaoPayRsConvert(){
	var formObj = $("form[name='nkakaoPayRs']").serializeObject();

	publicRs(formObj, "CM03", "");
}

function paycoRsConvert(){
	var formObj = $("form[name='paycoRs']").serializeObject();

	publicRs(formObj, "CM02", "");
}

function tossRsConvert(){
	var formObj = $("form[name='tossRs']").serializeObject();

	publicRs(formObj, "CM06", "");
}

function smilePayRsConvert(){
	var formObj = $("form[name='smilePayRs']").serializeObject();

	publicRs(formObj, "CM07", "");
}

function tmoneyPayRsConvert(){
	var formObj = $("form[name='tmoneyPayRs']").serializeObject();
	$('<input>').attr({type: 'hidden', id: "_csrf", name: "_csrf", value:formObj.csrf}).appendTo('#saveData');
	publicRs(formObj, "CM08", "");
}

function tmoneyBizPayRsConvert(){
	var formObj = $("form[name='tmoneyBizPayRs']").serializeObject();
	$('<input>').attr({type: 'hidden', id: "_csrf", name: "_csrf", value:formObj.csrfB}).appendTo('#saveData');
	publicRs(formObj, "CM09", "");
}

$.validator.addMethod(
	"placeholder",
	function(value, element) {
		if (value != '' && value != $(element).attr("placeholder")) {
			return true;
		}
	}
);
$.validator.addMethod(
	"regex",
	function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        }
);
function updateValidator(target)
{
	var cardregex = "";
	

	switch (target) {
	
		case"visa": //VISA
			cardregex = /^(4)\d{3}$/;
			break;
		case"masterCard" : //Master
			cardregex = /^(5)\d{3}$/;
			break;
		case"jcb": //JCB
			cardregex = /^(35)\d{2}$/;
			break;
		case"amex": //amex
			cardregex = /^(3)\d{3}$/;
			break;
		case"amexC": //amex
			cardregex = /^(3)\d{3}$/;
			$("#cardNumber4").val('');
			break;
		default: 
			cardregex = /^\d{4}$/;
			break;
	}
	var settings = $('#saveData').validate().settings;

	switch (target) {
		case"freeCoupon": // 부가서비스 쿠폰 사용
			 $.extend(true, settings, {
				   rules	: {
						 agree2	: {required : true}
					},
					messages: {
						agree2	: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.019'))}			
					}
			});
			 break;
		case"card" ://국내-신용카드

			 $.extend(true, settings, {
				   rules	: {
					   selectCardCode	: {required : true},
					   agree2	: {required : true}
					},
					messages: {
						selectCardCode	: {required : $.i18n.prop('hom.ibe.rsv.lbl.1081')},			
						agree2	: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.019'))}			
					}
			});
			 break;
		case"accountTransfer" ://국내-계좌이체
		case"naverPay" : //국내-네이버페이
		case"P003" : //ALIPAY
		case"P141" : //WECHAT PAY

			$.extend(true, settings, {
				   rules	: {
					   agree2	: {required : true}
					},
					messages: {						
						agree2	: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.019'))}								
					}
			});
			break;
		break;
		case"visa": //VISA
		case"masterCard" : //Master
		case"jcb": //JCB		
			 $.extend(true, settings, {
				   rules	: {
					     cardVali				: {required : true}
						,cardIssuer				: {required : true}
						,cardUserLastName		: {required : true , placeholder	: true}
						,cardUserFristName		: {required : true , placeholder	: true}
						,cardNumber1			: {required : true , regex : cardregex}
						,cardNumber4			: {required : true , regex : /^\d{4}$/}
						,cardExpireDate			: {required : true , regex : /^(19|20)\d{2}\/(0[1-9]|1[012])/}						
						,cardCvcNumber			: {required : true , regex : /^([0-9]{3,4})/}						
						,billingAddress1		: {required : true}
						,billingAddress2		: {required : true}
						,billingState			: {required : true}
						,billingZipCode			: {required : true}
						,billingCountry			: {required : true}
						,billingEmail			: {required : true, regex:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
						,billingCountryNumber	: {required : true}
						,billingPhone			: {required : true}						
						, agree2				: {required : true}
					},
					messages: {
						cardVali				: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.007'))}					
						,cardUserLastName		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125')), placeholder : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125'))}
						,cardUserFristName		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125')), placeholder : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125'))}
						,cardNumber1			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.126')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.126'))}
						,cardNumber4			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.126')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.126'))}
						,cardExpireDate			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.127')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.127'))}
						,cardCvcNumber			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.128')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.128'))}					
						,billingAddress1		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.130'))}
						,billingAddress2		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.131'))}
						,billingState			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.132'))}
						,billingZipCode			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.133'))}
						,billingCountry			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.134'))}
						,billingEmail			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.084')), regex: $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.084'))}
						,billingCountryNumber	: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.135'))}
						,billingPhone			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.085'))}								
						, agree2				: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.019'))}			
					}
			});
			break;
		break;
		case"amex": //amex
		case"amexC": //amexC
			 $.extend(true, settings, {
				   rules	: {
					     cardVali				: {required : true}
						,cardIssuer				: {required : true}
						,cardUserLastName		: {required : true , placeholder	: true}
						,cardUserFristName		: {required : true , placeholder	: true}
						,cardNumber1			: {required : true , regex : cardregex}
						,cardNumber4			: {required : true , regex : /^\d{3}$/}
						,cardExpireDate			: {required : true , regex : /^(19|20)\d{2}\/(0[1-9]|1[012])/}						
						,cardCvcNumber			: {required : true , regex : /^([0-9]{3,4})/}						
						,billingAddress1		: {required : true}
						,billingAddress2		: {required : true}
						,billingState			: {required : true}
						,billingZipCode			: {required : true}
						,billingCountry			: {required : true}
						,billingEmail			: {required : true, regex:  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
						,billingCountryNumber	: {required : true}
						,billingPhone			: {required : true}						
						, agree2				: {required : true}
					},
					messages: {
						cardVali				: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.007'))}					
						,cardUserLastName		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125')), placeholder : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125'))}
						,cardUserFristName		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125')), placeholder : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.125'))}
						,cardNumber1			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.126')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.126'))}
						,cardNumber4			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.126')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.126'))}
						,cardExpireDate			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.127')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.127'))}
						,cardCvcNumber			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.128')), regex : $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.128'))}					
						,billingAddress1		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.130'))}
						,billingAddress2		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.131'))}
						,billingState			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.132'))}
						,billingZipCode			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.133'))}
						,billingCountry			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.134'))}
						,billingEmail			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.084')), regex: $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.ibe.rsv.lbl.084'))}
						,billingCountryNumber	: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.135'))}
						,billingPhone			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.085'))}								
						, agree2				: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.ctn.pay.019'))}			
					}
			});
			break;
		break;
		case"conv"://편의점 결제
			$.extend(true, settings, {
				   rules	: {
						 storeEmail			: {required : true}
						,storePhone			: {required : true}
						,storeUserLastName	: {required : true}
						,storeUserFirstName	: {required : true}						
					},
					messages: {
						  storeEmail			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.084'))}						
						, storePhone			: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.085'))}
						, storeUserLastName		: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.072'))}
						, storeUserFirstName	: {required : $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.ibe.rsv.lbl.072'))}									
					}
			});
		break;
		
		
	}


}
function showCardDiscountInfo(option){
	if($(".discountInfo input[name=discountType]:checked").val() == "card"){
		$(".discountType").hide();
		$(".discountType2"+$(option).val()).show();
	}
}

function showDiscountInfo(target) {
	getCoupon().then(
		function(data){
			couponList = data;
			var $parent = $(".discountInfo");
			$parent.find(".discountType").hide();

			switch (target) {
				case "coupon":// 쿠폰할인
					$parent.find(".discountType1").show();
					$(".discountInfo button").attr("data-click-name","쿠폰할인_적용");
					break;
				case "card":// 카드할인
					//$parent.find(".discountType2").show();
					$(".discountInfo button").attr("data-click-name","카드제휴할인_적용");
					break;
			}

			var select = $('#memberCoupon option:nth-child(1)');
			$('#memberCoupon').empty();
			$('#memberCoupon').append(select);

			if (couponList != null && couponList != undefined && couponList != ""){
				for (var i = 0; i < couponList.length; i++) {
					var option = "<option value='" + couponList[i].couponNumber + "' amt ='" + couponList[i].amount + "' >" + couponList[i].couponName + "</option>";

					if (target == "coupon" && couponList[i].couponMasterNumber != 1) {
						$('#memberCoupon').append(option);
					} else if (target == "card" && couponList[i].couponMasterNumber == 1) {
						$('#memberCoupon').append(option);
					}

				}
			}

			// [말풍선 설정 요청] 스마일페이제휴 이벤트 관련
			if(!$('label.smilePay:visible').length) {
				$('[role="smilepayBalloon"]').hide();
			}
			// [말풍선 설정 요청] 스마일페이제휴 이벤트 관련 끝
		}).catch(function(err){});
}

// 회원쿠폰정보조회
function getCoupon() {
	return new Promise(function(resolve,reject){
		if(couponList == null){
			var couponJson;
			$.ajax({
				type : "POST",
				url : '/booking/getMemberCouponJSON',
				contentType	: "application/json; charset=UTF-8",
				beforeSend	: function(xhr) {
					var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
					var	csrfToken	= $("meta[name='_csrf']").attr("content");
					xhr.setRequestHeader(csrfHeader, csrfToken);
				},
				success : function(coupon) {
					couponJson = coupon;
				},
				error : function(result) {
					extrasError(result);
					reject(result);
				},
				complete:function(){
					resolve(couponJson);
				}
			});
		}else{
			resolve(couponList);
		}
	})
}

function toggleCoupon() {

	var totalAMT = parseFloat($.trim($("#totalAmt").html().replace(/\,/g, "")));
	var selected = $("#memberCoupon option:selected" ).val();

	if(selected == null||selected == '') return;

	couponList.forEach(function(x) {
		if(x.couponNumber == selected) {
			selectedCoupon = x;
		}
	});

	if(!$("#memberCoupon").prop("disabled")){
		saveCoupon(selectedCoupon.couponNumber).then(
			function(data){
				if(selectedCoupon.couponMasterNumber == 1){
					// 프로모션코드 결제수단과 체크
					var fopError = true;
					var thisPromoCode;
					$(paymentPromoCode).each(function(){
						if($("#registerform #cpnNo").val() == this.name){
							thisPromoCode = this;
						}
					});
					if(thisPromoCode != null){
						switch (thisPromoCode.paymentType) {
							case 'card'  :
								if(selectedCoupon.usablePaymentCode.split(';').indexOf('02') > -1){
									var cardList = thisPromoCode.paymentDetailType.split(',');
									$(cardList).each(function(g,card){
										if($("#selectCardCode option:eq("+selectedCoupon.usableCreditCardCode+")").val() == card){
											fopError=false;
										}
									})
								}
								break;
							case 'accountTransfer' :
								if(selectedCoupon.usablePaymentCode.split(';').indexOf('01') > -1){
									fopError=false;
								}
								break;
							case 'kakao' :
							case 'naverPay' :
							case 'payco' :
							case 'nkakaoPay' :
							case 'toss' :
							case 'smilePay' :
							case 'linePay' :
								if(selectedCoupon.usablePaymentCode.split(';').indexOf('03') > -1){
									if(selectedCoupon.usableSmartPaymentCode == thisPromoCode.paymentType){
										fopError=false;
									}
								}
								break;
							default   :
								break;
						}
					}else{
						fopError=false;
					}
					if(fopError){
						var err = new Error('not avail');
						err.name = 'fopError';
						throw err;
					}
					confirmLayer('카드 제휴 할인을 적용 받으신 후 해당 제휴 카드로 \n' +
						'결제를 진행하지 않는 경우 예약이 불가하며, 처음부터 \n' +
						'다시 예약을 진행하게 되오니 이점 참고하시기 바랍니다.\n', 'hideConfirmLayer', 'hideConfirmLayer');
					if(selectedCoupon.amount>parseFloat($.trim(data.discountAMT.replace(/\,/g, "")))){
						var err = new Error('not avail');
						err.name = 'cardDiscountError';
						throw err;
					}
				}
				var payAmt = parseFloat($.trim(data.payAMT.replace(/\,/g, "")));
				if( payAmt > 0){
					$("#dicountAmt").html(data.discountAMT);
					$("#paymentAmt").html(data.payAMT);
					$("#memberCoupon").prop("disabled", true);
					if(selectedCoupon.currency == 'KRW'){
						$("input[name=payment]").prop("disabled", true);
					}
					$("#paycoBallon").hide();
					$(".discountInfo input[type=radio]").each(function(){
						if(!$(this).prop("checked")){
							$(this).prop("disabled", true);
						}
					});
					$(".discountInfo button").text($.i18n.prop('hom.ibe.rsv.btn.003'));
					$(".discountInfo button").addClass("btnTypeA").removeClass("btnTypeB");
					couponPaymentHandler(selectedCoupon).then()
						.catch(function(err){
							alertLayer("Not Support.");
						});
				}else{ // SSR ADD CASE Zero SUM
					$("#paymentAmt").html(data.payAMT);
					$("#dicountAmt").html(data.discountAMT);
					$("#memberCoupon").prop("disabled", true);
					if(selectedCoupon.currency == 'KRW'){
						$("input[name=payment]").prop("disabled", true);
					}
					$("#paycoBallon").hide();
					$(".discountInfo input[type=radio]").each(function(){
						if(!$(this).prop("checked")){
							$(this).prop("disabled", true);
						}
					});
					$(".discountInfo button").text($.i18n.prop('hom.ibe.rsv.btn.003'));
					$(".discountInfo button").addClass("btnTypeA").removeClass("btnTypeB");
					$(".payWith").hide();
					$("#payWithTitle").hide();
					$("#payWithButton").hide();
					$("#nonepayWithButton").show();
					$(":radio[name='payment'][value=freeCoupon]").prop("checked", true);
					updateValidator("freeCoupon");
				}
			}
		).catch(function(err){
			cancelCoupon();
			if(err.name == 'cardDiscountError'){
				confirmLayer('해당 카드의 제휴 할인을 받을 수 있는 서비스를 \n' +
					'신청하지 않으셨습니다. 다시 한번 확인 후 할인 신청을\n' +
					'진행해 주시기 바랍니다.\n', 'hideConfirmLayer', 'hideConfirmLayer');
			}else if(err.name == 'fopError'){
				confirmLayer('프로모션코드 적용으로 해당 카드 제휴 할인은 적용이 불가합니다.\n', 'hideConfirmLayer', 'hideConfirmLayer');
				checkBonusCoupon();
			}else if(err.responseText){
				alertLayer(err.responseText);
			}
		});
	} else {
		cancelCoupon();
	}

}

function cancelCoupon(){
	var totalAMT = parseFloat($.trim($("#totalAmt").html().replace(/\,/g, "")));
	$("#dicountAmt").html(0);
	if(paymentStatus == "RETRIEVE"||paymentStatus == "MODIFY"){
		$("#paymentAmt").html(currencyFormat(getGuestPayment().refundAmt));
	}else{
		$("#paymentAmt").html(currencyFormat(totalAMT));
	}
	
	//일반결제 간편결제 표출
	$('tr[payMethod="general"]').show();
	$('tr[payMethod="simple"]').show();
	$('tr[payMethod="simple"]').find(".fieldset").show();

	$("#memberCoupon").prop("disabled", false);
	$("input[name=payment]").prop("disabled", false);
	$("#paycoBallon").show();
	$(".discountInfo input[type=radio]").each(function(){
		if(!$(this).prop("checked")){
			$(this).prop("disabled", false);
		}
	});
	$(".discountInfo button").text($.i18n.prop('hom.ibe.rsv.lbl.211'));
	$(".discountInfo button").addClass("btnTypeB").removeClass("btnTypeA");
	$("#memberCoupon").val("");
	selectedCoupon = null;
	// SSR ADD CASE Zero SUM
	if($(":radio[name='payment'][value=freeCoupon]").prop("checked") == true){
		$("#payWithTitle").show();
		$("#payWithButton").show();
		$("#nonepayWithButton").hide();
	}else{
		$("#selectCardCode option").each(function(){$(this).prop("disabled",false);});
		$("#selectCardCode option:eq(0)").prop("selected", "selected").trigger('change');
	}
	$(".payWith").find('label[for!=freeCoupon]').show();
	showPayWith($("input[name=payment]").eq(0).attr('id'));
	$("input[name=payment]").eq(0).prop("checked", true).trigger('change');
}

var saveCoupon = function(param){
	return new Promise(function(resolve,reject){
		showLoading();
		var payData;
		var data = {};
		data.couponNumber = param;
		$.ajax({
			type : "POST",
			url : '/booking/selectCoupon',
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			data : data,
			success : function(result) {
				payData = result;
			},
			error : function(result) {
				hideLoading();
				extrasError(result);
				reject(result);
			},
			complete:function(){
				hideLoading();
				resolve(payData);
			}
		});
	});
}


function extrasError(data) {
	
	try {
		hideLoading();
		
		var errorMsg = JSON.parse(data.responseText);
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
	
		//alertLayer(errorMsg.errorMessage);
	}
	catch(e) {
		hideLoading();
	}
}

var couponPaymentHandler = function(coupon){
	return new Promise(function(resolve){
        if(coupon.currency == 'KRW'){
            if($("#memberCoupon").prop("disabled")){
                if(coupon.usablePaymentCode){
                    $(".payWith").find('label').hide();
                    $("#paycoBallon").hide();
					$(".balloon").hide();
					$('tr[payMethod="general"]').hide();
					$('tr[payMethod="simple"]').hide();
                    var paylist = coupon.usablePaymentCode.split(';');
                    for(var x = 0;x<paylist.length;x++){
                        if(paylist[x]=="01"){
                            $('tr[payMethod="general"]').show();
                            $(".payWith").find('label[for=accountTransfer]').show();
                            $(".payWith").find('input[value=accountTransfer]').prop("disabled", false);
                            $(".payWith").find('input[value=accountTransfer]').trigger('click');
						}else if(paylist[x]=="02") {
							$('tr[payMethod="general"]').show();
							$(".payWith").find('label[for=card]').show();
							$(".payWith").find('label[for=hanacard]').show();
							$(".payWith").find('input[value=card]').prop("disabled", false);
							$(".payWith").find('input[value=hanacard]').prop("disabled", false);
							$(".payWith").find('input[value=card]').trigger('click');
							if (coupon.usableCreditCardCode) {
								$("#selectCardCode option").prop("disabled", true);
								var usableCreditCardCodeList = coupon.usableCreditCardCode.split(",");

								var hanaCardUsable = false;
								var HANA_CARD_CODE = '006';
								for (var y = 0; y < usableCreditCardCodeList.length; y++) {
									for (var z = 0; z < $("#selectCardCode option").size(); z++) {
										if ($("#selectCardCode option:eq(" + z + ")").val() == usableCreditCardCodeList[y]) {
											$("#selectCardCode option:eq(" + z + ")").prop("disabled", false);
											$('#selectCardCode').val($("#selectCardCode option:eq(" + z + ")").val());
										}
									}
									if(usableCreditCardCodeList[y] === HANA_CARD_CODE) {
										hanaCardUsable = true;
									}
								}
								if(!hanaCardUsable) {
									$(".payWith").find('label[for=hanacard]').parent().hide();
									$(".payWith").find('input[value=hanacard]').prop("disabled", true);
								}
							}
						}else if(paylist[x]=="03") {
							$('tr[payMethod="simple"]').show();
							var usableSmartPay = coupon.usableSmartPaymentCode;
							var smartPay = ['kakao', 'naverPay', 'payco', 'nkakaoPay', 'linePay', 'toss', 'smilePay' ,'paybooc','tmoneyPay','tmoneyBizPay'];
							if (usableSmartPay) {
								//$('tr[payMethod="simple"]').find(".fieldset").hide();
								//$('#btnOthSimply').hide();
								$('tr[payMethod="simple"]').find('span[id=' + usableSmartPay + 'Field]').show();
								$(".payWith").find('label[for=' + usableSmartPay + ']').show();
								$(".payWith").find('input[value=' + usableSmartPay + ']').prop("disabled", false);
								if(!paylist.includes("01") && !paylist.includes("02")){
									$(".payWith").find('input[value=' + usableSmartPay + ']').trigger('click');
								}
								/*for(var sPay of smartPay){
									if(usableSmartPay != sPay ){
										$(".payWith").find('label[for=' + sPay + ']').parent().hide();
									}
								}*/
								for(var i = 0; i < smartPay.length; i++){
									var sPay = smartPay[i];
									if(usableSmartPay != sPay ){
										$(".payWith").find('label[for=' + sPay + ']').parent().hide();
									}
								}

								if (usableSmartPay == "payco")
									$("#paycoBallon").show();
							} else {
								smartPay.forEach(function (x) {
									$(".payWith").find('label[for=' + x + ']').show();
									$(".payWith").find('input[value=' + x + ']').prop("disabled", false);

									if (x == "payco")
										$("#paycoBallon").show();
								});

								if(!paylist.includes("01") && !paylist.includes("02")){
									$(".payWith").find("input[value='nkakaoPay']").trigger('click');
								}
							}
						}
                    }
                }
            }
        }
		resolve();
	})
}

// 보너스쿠폰 확인
function checkBonusCoupon(){
	var thisPromoCode;
	$(paymentPromoCode).each(function(){
		if($("#registerform #cpnNo").val() == this.name){
			thisPromoCode = this;
		}
	});

	if(thisPromoCode != null && paymentStatus == 'CREATE'){ // 최초발권시만 제어
		var payType = thisPromoCode.paymentType;
		var disablePayType = thisPromoCode.disablePaymentType;

		if(payType){
			// 결제수단 변경
			$(".payWith #"+payType).prop("checked", true).trigger('change');
			// 결제수단을 제외하고 disabled
			$('input[name=payment]').each(function(){
				if($(this).attr("id") != payType){
					$(this).prop("disabled",true);
				}
			});

			// 결제수단 별 추가 처리
			switch (payType) {
				case 'card'  :
					var cardList = thisPromoCode.paymentDetailType.split(',');
					$("#selectCardCode option").each(function(i,option){
						var opt = false;
						$(cardList).each(function(g,card){
							opt = ($(option).text().indexOf(card) != -1) || opt;
							if(opt){
								$(option).prop("disabled",false);
								$('#selectCardCode').val($(option).val());
							}else{
								$(option).prop("disabled",true);
							}
						})
					});

					break;
				case 'accountTransfer' :
					thisPromoCode.paymentType = '계좌이체';
					break;
				case 'naverPay' :
					thisPromoCode.paymentType = '네이버페이';
					break;
				default   :
					break;
			}
			// 프로모션 코드 결제 수단 안내 문구
			if($("#promocodeInfo").size() == 0){
				$("tr.payType1>td>ul.caution").prepend("<li id='promocodeInfo' style='color:#0f00ff;font-size:25px'>프로모션 코드 적용 시, "+thisPromoCode.paymentDetailType+"로만 결제 가능합니다.</li>");
			}
		}

		// 프로모션 제외 결제수단 2019-06-10
		if(disablePayType.length > 0){
			$('input[name=payment]').each(function(i,paymentType){
				$(disablePayType).each(function(g,disablePay){
					if($(paymentType).attr("id") == disablePay){
						$(paymentType).prop("disabled",true);
					}
				});
			});
		}
	}
}
	
function showAuthlayer(popSrc,frm){
	if($(".bgLayer2").is(":visible")){
		$(".bgLayer").css("z-index", "113");
	} else {
		$(".bgLayer").css("z-index", "100");
	}
	_popupLayerID += 2;

	if(popSrc.indexOf("?") > 0){
		popSrc += '&layerId='+ _popupLayerID
	}else {
		popSrc += '?layerId='+ _popupLayerID
	}

	var popTop = $(window).height() / 2 + $(document).scrollTop();
	$("#wrapper").append(
		'<div class="popLayer" id="popLayer' + (_popupLayerID) + '" style="z-index:' + _popupLayerID + ';top:' + popTop + 'px;">'
		+ '<iframe name="authLayer" src="" width="100%" height="100%" frameborder="0" allowTransparency="true" scrolling="no" id="iframePopLayer' + (_popupLayerID) + '"></iframe>'
		+ ' <p class="close"><a style="background: url(/images/btn/btn_close2.png) no-repeat 0 0;" href="#" onclick="hidePopupLayer(); return false"><span>닫기</span></a></p>'
		+ '</div>'
	);
	$(".bgLayer").css("height", $(document).height() + "px").show();
	$("#popLayer" + _popupLayerID).show();
	$("#iframePopLayer" + (_popupLayerID)).focus();
	$("html").css("overflow", "hidden");

	frm.method = "POST";
	frm.action = popSrc;
	frm.target = "authLayer";
	frm.submit();


}

function hideMpoint(){
	$("#MpointUse").hide();
}

function remind() {
	var data = {};
	    data.ref = $('#aliRef').val().trim();
	    data.cur = $('#aliCur').val().trim();
	    data.amt = $('#aliAmt').val().trim();
	    data.lang = $('#aliLang').val().trim();
	    data.fgkey = $('#aliFgkey').val().trim();
	    
	$.ajax({
		url : "/payment/alipay/chk",
		data : data,
		async:false,
		success : function(data) {
			if(data.status == "OK"){    				
				$("#krp_cur").val(data.cur);
				$("#krp_ver").val(data.ver);
				$("#krp_cardno1").val(data.cardno1);
				$("#krp_transid").val(data.transid);
				$("#krp_resdt").val(data.resdt);
				$("#krp_cardno4").val(data.cardno4);
				$("#krp_mid").val(data.mid);
				$("#krp_amt").val(data.amt);
				$("#krp_param3").val(data.param3);
				$("#krp_resmsg").val(data.resmsg);
				$("#krp_param1").val(data.param1);
				$("#krp_param2").val(data.param2);
				$("#krp_authcode").val(data.authcode);
				$("#krp_ref").val(data.ref);
				$("#krp_paymethod").val(data.paymethod);
				$("#krp_fgkey").val(data.fgkey);
				$("#krp_txntype").val(data.txntype);
				
				$("#krp_resultCd").val("0000");
				krpRsConvert();
			}else{
				hidePopupLayer();
			}
		},
		error : function(xhr, status, error) {
			hidePopupLayer();
		}
	});
}