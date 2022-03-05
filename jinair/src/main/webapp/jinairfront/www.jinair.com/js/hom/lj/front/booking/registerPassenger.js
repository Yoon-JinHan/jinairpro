var focusSelecter = "";
var segmentDetailList;
var protectorPnr = "";
var seatedInfantId = "";
var adtBirthCheck = false;
var fareList = "";
var availParam = "";
var bextraSkip = false;
var nationalityCheck = false;
var lytOpenYn = false;
var fieldsetId = "";
window.onload = function(){
	NetFunnel_Complete();
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
	
	setTimeout(function() {
		var qTop = $("#quickModify").offset().top;
		$("html, body").stop().animate({scrollTop:qTop}, 300, "easeInOutQuint");
	}, 500);
	
	$.ajax({
		type : "POST",
		url : "/jinair/jinairfront/www.jinair.com/booking/checkPromotionFare.json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		contentType	: "application/json; charset=UTF-8",
		dataType: "json",
		success : function(data) {		
			fareJson = data.fareInfoTypeList;
			availParamJson = data.availParam;
			bextraSkip =data.extraSkip;
			if(!(typeof fareJson === "undefined")){
				fareList = JSON.parse(fareJson);
				availParam = JSON.parse(availParamJson);
				var memberFare = ["JINMARKET","JINMARKETK1","JINMARKETK2","JINMARKETK3","JINMARKETW1","JINMARKETW2","JINMARKETW3",
					"IJINMKT","IJINMKTK1","IJINMKTK2","IJINMKTK3","IJINMKTW1","IJINMKTW2","IJINMKTW3",
					"SLIMJEANS","SLIMJEANSK1","SLIMJEANSK2","SLIMJEANSK3","SLIMJEANSW1","SLIMJEANSW2","SLIMJEANSW3",
					"ISLIMJ","ISLIMJK1","ISLIMJK2","ISLIMJK3","ISLIMJW1","ISLIMJW2","ISLIMJW3",
					"IPROMO","IPROMOK1","IPROMOK2","IPROMOK3","IPROMOW1","IPROMOW2","IPROMOW3","ONPROMO",
					"ONPROMOK1","ONPROMOK2","ONPROMOK3","ONPROMOW1","ONPROMOW2","ONPROMOW3",
					"THISISIT","THISISITK1","THISISITK2","THISISITK3",
					"ITHIS","ITHISK1","ITHISK2","ITHISK3","ITHISW1","ITHISW2","ITHISW3"];
				//회원한정 프로모션 처리
				if(loginInfoType == 'NON_MEMBER'){
					var flag = false;
					for (var i = 0; i < fareList.length; i++) {
						var promoType = fareList[i].fareDetailsForGuestType[0].fareType;
						$(memberFare).each(function(){
							if(promoType.indexOf(this) > -1){
								flag = true;
							}
						});						
					}
					if(flag){
						form = $('#registerform');
						$.each(availParam,function(key,value) {
							form.find("input[name='"+key+"']").val(value);					
						});				
						$("#container").bind("click",function(){ form.submit(); return false;});
						alertLayer($.i18n.prop('lj.ibe.b2c.rsv.077'), null, 'form.submit');
					}else{
						$("#wrapper").attr("style","display:block");
					}
				}else{
					$("#wrapper").attr("style","display:block");
				}
			}else{
				$("#wrapper").attr("style","display:block");
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
		},
		complete : function() {
			hideLoading();    
	    }
	});
	
	$(document.activeElement.name).blur();
	
	$("#passengerCheckForm").find("input").val("");
	
	$("#container").find(".wrap").find("button").bind("click", function(){ genderToggle(this);});
	
	$("#container").find("select[name=protector]").bind("change",function(){ fnChangeAdultList(this);});
	//$("#container").find("#btnNextExtras").bind("click",function(){ fnGoExtras(); return false;});
	
	$("input[name=surName], input[name=givenName]").unbind("focus blur");
	$("input[name=surName], input[name=givenName]").bind("keyup focusout",function(){
		 var re = /[^A-Z]/gi;
		 if ($("#hidDomIntType").val() == "DOM") {
			 re =  re = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\u318D\u119E\u11A2\u2022\u2025a\u00B7\uFE55|A-Z]/gi;
		}
		 var temp = $(this).val();
		 if(re.test(temp)){
			 $(this).val(temp.replace(re,""));
		 }
		 
		if ($(this).val() == "") {
			 $(this).addClass("placeholder");	
		}
		else {
			 $(this).removeClass();
		}
	 });
	
	/* 로열티 ON/OFF */
	if(lytOpenYn){
		$("input[name=userId]").bind("keyup focusout",function(){
			var str = $(this).val().replace(/[^0-9]/g, '');
			$(this).val(str);
			
			if ($(this).val() == "") {
				$(this).addClass("placeholder");
			} else {
				$(this).removeClass();
			}
		});
	} else {
		$("input[name=userId]").bind("keyup focusout",function(){
			 var re = /[^A-Z0-9]/gi;
			 var temp=$(this).val();
			 if(re.test(temp)){
				 $(this).val(temp.replace(re,""));
			 }
		 });
	}
	/* 로열티 ON/OFF */

	// 회원번호 추가
	$("input[name=phone], input[name=birth]").bind("keyup focusout",function(){
		var str = $(this).val().replace(/[^0-9]/g, '');
		$(this).val(str);
		
		if ($(this).val() == "") {
			 $(this).addClass("placeholder");	
		}
		else {
			 $(this).removeClass();
		}
	});
	
	//변경사항이 있을 경우 회원 아이디 초기화
	$("input[name=surName], input[name=givenName], input[name=birth]").change(function(){
		var userId = $(this).parents("fieldset").find("input[name=userId]");
		
		userId.removeAttr("ibe_id");
		userId.parent().find("a").text($.i18n.prop('hom.ibe.rsv.btn.001'));
		userId.removeAttr("disabled");
		userId.val("");
	});
	
	$("#container").find(".idField").find("a").bind("click",function(){ fnIdCheck(this);});

	//사용자 정보 셋팅
	showLoading();
	
	$.ajax({
		type : "POST",
		url : "/jinair/jinairfront/www.jinair.com/booking/getPaxInfo.json",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		contentType	: "application/json; charset=UTF-8",
		dataType: "json",
		success : function(data) {
			
			console.log(data)
			
			if (data) {
				confirmPrice = data.priceBasket;
				setDataBinding();
				segmentDetailList = data.segmentDetailList;
				var tmp = "";
				var nameOnlyEngReg = /^[A-Za-z\s]*$/;
				
				if (data.guestList != null)
				{
					for (var i = 0; i < data.guestList.length; i++) {
						if(data.domIntType == "INT") {
							if(nameOnlyEngReg.test(data.guestList[i].surName))
								$(".passengerForm fieldset").eq(i).find("input[name=surName]").removeClass("placeholder").val(data.guestList[i].surName);
							if(nameOnlyEngReg.test(data.guestList[i].givenName))
								$(".passengerForm fieldset").eq(i).find("input[name=givenName]").removeClass("placeholder").val(data.guestList[i].givenName);
						}
						else {
							$(".passengerForm fieldset").eq(i).find("input[name=surName]").removeClass("placeholder").val(data.guestList[i].surName);
							$(".passengerForm fieldset").eq(i).find("input[name=givenName]").removeClass("placeholder").val(data.guestList[i].givenName);
						}
						if (data.guestList[i].gender == "F") {
							$(".passengerForm fieldset").eq(i).find(".wrap button[value=M]").removeClass();
							$(".passengerForm fieldset").eq(i).find(".wrap button[value=F]").addClass("choice");	
						}
						
						if (data.guestList[i].birth != null && data.guestList[i].birth.length > 0) {
							$(".passengerForm fieldset").eq(i).find("input[name=birth]").removeClass("placeholder").val(data.guestList[i].birth);	
						}
						else {
							$(".passengerForm fieldset").eq(i).find("input[name=birth]").attr("placeholder","").val("");
						}
						
						if (data.guestList[i].guestId != null) {
							$(".passengerForm fieldset").eq(i).attr("guest_id",data.guestList[i].guestId);	
						}
						
						if (data.guestList[i].protectorId != null) {
							for (var j = 0; j < data.guestList.length; j++) {
								if (data.guestList[i].protectorId == data.guestList[j].guestId) {
									$(".passengerForm fieldset").eq(i).find("[name=protector]").append("<option value='1'>"+data.guestList[j].displayGuestName+"</option>");
									$(".passengerForm fieldset").eq(i).find("[name=protector] option:last").attr("selected", "selected");
								}
							}
						}
						if (data.guestList[i].discountCode != null) {
							if (data.guestList[i].discountCode == "INS") {
								$(".passengerForm fieldset").eq(i).find("select[name=discount] option").eq(0).val(data.guestList[i].discountCode).text("");
							}
							else if ($(".passengerForm fieldset").eq(i).find("select[name=discount] option[value="+data.guestList[i].discountCode+"]").length > 0) {
								$(".passengerForm fieldset").eq(i).find("select[name=discount] option[value="+data.guestList[i].discountCode+"]").prop("selected",true);	
							}
							
						}
						else {
							if (data.pnrNumber) {
								$(".passengerForm fieldset").eq(i).find("select[name=discount] option:selected").text("");
							}
						}
						
						
						if (data.guestList[i].userId != null) {
							
							/* 로열티 ON/OFF */
							var userIdValue = (lytOpenYn ? data.guestList[i].userLoyaltyId : data.guestList[i].userId);
							$(".passengerForm fieldset").eq(i).find("input[name=userId]").val(userIdValue);
							
							$(".passengerForm fieldset").eq(i).find("input[name=userId]").attr("ibe_id",data.guestList[i].userProfileId);
							$(".passengerForm fieldset").eq(i).find("input[name=userId]").parent().find("a").text($.i18n.prop('hom.ibe.rsv.btn.006'));
							$(".passengerForm fieldset").eq(i).find("input[name=userId]").attr("disabled",true);
						}
						
						if (data.guestList[i].nationality != null) {
							if(data.domIntType == "DOM" && foLangCd == "KOR") {
								$("select[name=nationality]").find("option[value="+foLangCd+"]").attr("selected","selected");
							}
							$(".passengerForm fieldset").eq(i).find("select[name=nationality]").val(data.guestList[i].nationality);
						}
					}
					$("input[name=phone]").val(data.phoneNumber);
				} else {
					// 비회원이고 국문 페이지일 경우 국적을 KOR로 Default
					if(data.domIntType == "DOM" && foLangCd == "KOR") {
						$("select[name=nationality]").find("option[value="+foLangCd+"]").attr("selected","selected");
					}
				}
				// 국제선 관광 비행 국적 한국으로 고정
				if((data.segmentDetailList[0].boardPoint == 'ICN' && data.segmentDetailList[0].offPoint == 'ICN')||
					(data.segmentDetailList[0].boardPoint == 'GMP' && data.segmentDetailList[0].offPoint == 'GMP')||
					(data.segmentDetailList[0].boardPoint == 'PUS' && data.segmentDetailList[0].offPoint == 'PUS')||
					(data.segmentDetailList[0].boardPoint == 'ICN' && data.segmentDetailList[0].offPoint == 'CJU') && isIntTourICNCJU()){
					$("select[name=nationality]").find("option[value=KOR]").attr("selected","selected");
					$("select[name=nationality]").attr("readonly",true);
					$("select[name=nationality]").attr("onFocus","this.initialSelect = this.selectedIndex;");
					$("select[name=nationality]").attr("onChange","this.selectedIndex = this.initialSelect;");
				}
				$("input[name=email]").val(data.email);
				$("select[name=country]").find("option[value="+data.phoneCountryCode+"]").attr("selected","selected");
				if (data.pnrNumber) {
					$(".chk").hide();
					$(".passengerForm input:not([name=email]):not([name=phone])").attr("disabled","true");
					$(".passengerForm button").attr("disabled","true");
					$(".passengerForm [name=protector]").attr("disabled","true");
					$(".passengerForm select:not([name=country])").attr("disabled","disabled");
					$("#container").find(".idField").find("a").unbind("click");
					$("#sendForm #hidPnrNumber").val(data.pnrNumber);
				}
				else {
					if (data.guestList != null) {
						$(".chk").show();
						if(data.domIntType == "INT") {
							if(nameOnlyEngReg.test(data.guestList[0].surName))
								$(".passengerForm fieldset").eq(0).find("input[name=surName]").attr("disabled",true).val(data.guestList[0].surName);
							if(nameOnlyEngReg.test(data.guestList[0].givenName))
								$(".passengerForm fieldset").eq(0).find("input[name=givenName]").attr("disabled",true).val(data.guestList[0].givenName);
						}
						else {
							$(".passengerForm fieldset").eq(0).find("input[name=surName]").attr("disabled",true).val(data.guestList[0].surName);
							$(".passengerForm fieldset").eq(0).find("input[name=givenName]").attr("disabled",true).val(data.guestList[0].givenName);					
						}
						if (data.guestList[0].gender == "F") {
							$(".passengerForm fieldset").eq(0).find(".wrap button[value=M]").removeClass().attr("disabled",true);
							$(".passengerForm fieldset").eq(0).find(".wrap button[value=F]").addClass("choice").attr("disabled",true);	
						}
						
						$(".passengerForm fieldset").eq(0).find("input[name=birth]").attr("disabled",true).val( data.guestList[0].birth);
						$(".passengerForm fieldset").eq(0).find(".wrap").find("button").unbind("click");
						
						/* 로열티 ON/OFF */
						var userIdValue = (lytOpenYn ? data.guestList[0].userLoyaltyId : data.guestList[0].userId);
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").val(userIdValue);
						
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").attr("disabled",true).attr("ibe_id",data.guestList[0].userProfileId);
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").attr("disabled",true).attr("lyt_id",data.guestList[0].userLoyaltyId);
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").parent().find("a").text($.i18n.prop('hom.ibe.rsv.btn.006')).unbind("click").css('cursor','default');
					}
				}
				
				var chkCityArr = ["GUM", "SPN", "HNL", "CNS"];
				
				for (var i = 0; i < segmentDetailList.length; i++) {
					if (!adtBirthCheck && (chkCityArr.indexOf(segmentDetailList[i].boardPoint) >= 0 || chkCityArr.indexOf(segmentDetailList[i].arrPoint) >= 0 )) {
						adtBirthCheck = true;
					}
				}
				
				if(data.domIntType == "DOM") {
					adtBirthCheck = true;
					nationalityCheck = true;
				}
				
				if (!adtBirthCheck) {
					$("[id^=adultInfo]").find("input[name=birth]").prev().text($("input[name=birth]").prev().eq(0).text().replace("* ",""));
				}
				
				if(!nationalityCheck) { // 국적 필수가 아니면
					$("[id^=adultInfo]").find("select[name=nationality]").prev().text($("select[name=nationality]").prev().eq(0).text().replace("* ",""));
					$("[id^=childInfo]").find("select[name=nationality]").prev().text($("select[name=nationality]").prev().eq(0).text().replace("* ",""));
					$("[id^=infantInfo]").find("select[name=nationality]").prev().text($("select[name=nationality]").prev().eq(0).text().replace("* ",""));
				}
				
				$("#container").find("input[name=chkPassengerInfo]").bind("click",function(){
					if ($(this).is(":checked")) {
						$(".passengerForm fieldset").eq(0).find("input[name=surName]").removeAttr("disabled").val("");
						$(".passengerForm fieldset").eq(0).find("input[name=givenName]").removeAttr("disabled").val("");
						$(".passengerForm fieldset").eq(0).find("input[name=birth]").removeAttr("disabled").val("");
						$(".passengerForm fieldset").eq(0).find(".wrap button[value=M]").removeAttr("disabled").addClass("choice");
						$(".passengerForm fieldset").eq(0).find(".wrap button[value=F]").removeAttr("disabled").removeClass();
						$(".passengerForm fieldset").eq(0).find(".wrap").find("button").bind("click", function(){ genderToggle(this);});
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").val("");
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").removeAttr("ibe_id");
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").removeAttr("lyt_id");
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").parent().find("a").text($.i18n.prop('hom.ibe.rsv.btn.001')).css('cursor','pointer').bind("click",function(){ fnIdCheck(this);});
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").removeAttr("disabled");
						$(".passengerForm fieldset").eq(0).find("select[name=nationality]").removeAttr("disabled").val("");
					}
					else {
						if(data.domIntType == "INT") {
							if(nameOnlyEngReg.test(data.guestList[0].surName))
								$(".passengerForm fieldset").eq(0).find("input[name=surName]").attr("disabled",true).val(data.guestList[0].surName);
							if(nameOnlyEngReg.test(data.guestList[0].givenName))
								$(".passengerForm fieldset").eq(0).find("input[name=givenName]").attr("disabled",true).val(data.guestList[0].givenName);
						}
						else {
							$(".passengerForm fieldset").eq(0).find("input[name=surName]").attr("disabled",true).val(data.guestList[0].surName);
							$(".passengerForm fieldset").eq(0).find("input[name=givenName]").attr("disabled",true).val(data.guestList[0].givenName);					
						}
						if (data.guestList[0].gender == "F") {
							$(".passengerForm fieldset").eq(0).find(".wrap button[value=M]").removeClass().attr("disabled",true);
							$(".passengerForm fieldset").eq(0).find(".wrap button[value=F]").addClass("choice").attr("disabled",true);	
						}
						else {
							$(".passengerForm fieldset").eq(0).find(".wrap button[value=F]").removeClass().attr("disabled",true);
							$(".passengerForm fieldset").eq(0).find(".wrap button[value=M]").addClass("choice").attr("disabled",true);
						}
						
						$(".passengerForm fieldset").eq(0).find(".wrap").find("button").unbind("click");
						$(".passengerForm fieldset").eq(0).find("input[name=birth]").attr("disabled",true).val( data.guestList[0].birth);
						
						/* 로열티 ON/OFF */
						var userIdValue = (lytOpenYn ? data.guestList[0].userLoyaltyId : data.guestList[0].userId);
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").val(userIdValue);
						
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").attr("ibe_id",data.guestList[0].userProfileId);
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").attr("lyt_id",data.guestList[0].userLoyaltyId);
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").parent().find("a").text($.i18n.prop('hom.ibe.rsv.btn.006'));
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").parent().find("a").unbind("click");
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").parent().find("a").css('cursor','default');
						$(".passengerForm fieldset").eq(0).find("input[name=userId]").attr("disabled",true);
						$(".passengerForm fieldset").eq(0).find("select[name=nationality]").val(data.guestList[0].nationality);
					}
				});
				
				$("fieldset[id^=childInfo]").find("input[name=birth]").bind("focusout",function(){
					checkGuestType(this,data.segmentDetailList);
				});
				$("fieldset[id^=childInfo]").find("input[name=birth]").bind("change",function(){
					if ($(this).parents("fieldset").find("select[name=discount]").find("option:eq(0)").val() == "INS") {
						$(this).parents("fieldset").find("select[name=discount]").find("option:eq(0)").val("");
					}
				});
			}
			else{
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
		},
		complete : function() {
			hideLoading();    
	    }
	});
	$("input[name=documentNumber]").bind("keyup",function(){
		var re = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi;
		$(this).attr("style","text-transform: uppercase;");
		var temp = $(this).val();
		if(re.test(temp)){
			$(this).val(temp.replace(re,""));
		}

		if ($(this).val() == "") {
			$(this).addClass("placeholder");
		}
		else {
			$(this).removeClass();
		}
	});
	window.scroll(0, 0);
});

function fnIdCheck(obj){
	if ($(obj).parent().find("input").attr("disabled")) {
		$(obj).text($.i18n.prop('hom.ibe.rsv.btn.001'));
		$(obj).parent().find("input").attr("disabled",false);
		$(obj).parent().find("input").attr("ibe_id","");
		$(obj).parent().find("input").attr("lyt_id", "");
	}
	else
	{
		var parentField = $(obj).parents("fieldset");
		
		if (parentField.find("input[name=surName]").val() == ""
			|| parentField.find("input[name=surName]").val() == parentField.find("input[name=surName]").attr("placeholder")) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.013'));
			return false;
		}
		
		if (parentField.find("input[name=givenName]").val() == ""
			|| parentField.find("input[name=givenName]").val() == parentField.find("input[name=givenName]").attr("placeholder")) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.013'));
			return false;
		}
		if (parentField.find("input[name=birth]").val() == ""
			|| parentField.find("input[name=birth]").val() == parentField.find("input[name=birth]").attr("placeholder")) {
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("[{0}]","").replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')));
			return false;
		}
		if ($(obj).parent().find("input").val() == "") {
			
			/* 로열티 ON/OFF */
			if(lytOpenYn) {
				alertLayer($.i18n.prop("hom.ibe.rsv.lyt.mbs.alert.001"));
			} else {
				alertLayer($.i18n.prop("lj.ibe.b2c.rsv.029"));
			}
			return false;
		}
		
		showLoading();
		
		$.ajax({
			type : "POST",
			url : "/jinair/jinairfront/www.jinair.com/booking/getUserIdCheck.json",
			data : JSON.stringify({
				userId : $(obj).parent().find("input").val(),
				userLoyaltyId : $(obj).parent().find("input").val(),
				userLnm : parentField.find("input[name=surName]").val().toUpperCase(),
				userFnm : parentField.find("input[name=givenName]").val().toUpperCase(),
				birth : parentField.find("input[name=birth]").val(),
				airportCountry : $("#hidDomIntType").val()
			}),
			beforeSend	: function(xhr) {
				var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
				var	csrfToken	= $("meta[name='_csrf']").attr("content");
	
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			contentType	: "application/json; charset=UTF-8",
			dataType: "json",
			success : function(data) {
				if (data.userProfileId != null) {
					$(obj).text($.i18n.prop('hom.ibe.rsv.btn.006'));
					$(obj).parent().find("input").attr("disabled",true);
					$(obj).parent().find("input").attr("ibe_id",data.userProfileId);
					$(obj).parent().find("input").attr("lyt_id", data.userLoyaltyId);
				}
				else{
					
					/* 로열티 ON/OFF */
					if(lytOpenYn) {
						alertLayer($.i18n.prop('hom.ibe.ctn.pax.100'));
					} else {
						alertLayer($.i18n.prop('lj.ibe.b2c.rsv.014'));
					}
					/* 로열티 ON/OFF */
					
					$(obj).parent().find("input").val("");
					$(obj).parent().find("input").attr("ibe_id","");
					$(obj).parent().find("input").attr("lyt_id","");
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
			},
			complete : function() {
				hideLoading();    
		    }
		});
	}
}

function fnShowProtectorPopup(){
	showPopupLayer("/popup/protector?title=" + encodeURIComponent("동반 성인 정보 입력")+"");
}

function fnGoExtras(){
	var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	var dayRegExp = /^(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/;
	var phoneRegExp = /^(01[016789]{1})/;
	var birthDate;
	var depDate;
	var famCnt = 0;
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	
	if ($("#sendForm #hidPnrNumber").val() != "") {
		//email
		if (!emailRegExp.test($("input[name=email]").val()) || $("input[name=email]").val() == "") {
			focusSelecter = "input[name=email]";
			alertLayer($.i18n.prop('lj.ibe.b2c.myp.009'),"","goFocus");
			return false;
		}
		
		//phone
		if ($("input[name=phone]").val() == "") {
			focusSelecter = "input[name=phone]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("[{0}]","").replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.085')),"","goFocus");
			return false;
		}
		
		if($('select[name=country]').val() == "82"){
			if(!phoneRegExp.test($("input[name=phone]").val())){
				focusSelecter = "input[name=phone]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.086'));
				return false;
			}
		}
		
		if ($("fieldset[id^=adultInfo]").length == 0) {
			fnShowProtectorPopup();	
		}
		else {
			fnSendPassengerInfo();	
		}
		return true;
	}
	
	//adultInfo
	for (var i = 1; i <= $("fieldset[id^=adultInfo]").length; i++) {
		if ($("#adultInfo"+i).find("input[name=surName]").val() == "") {
			focusSelecter = "#adultInfo" + i + " input[name=surName]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.073')),"","goFocus");
			return false;
		}
		if ($("#adultInfo"+i).find("input[name=givenName]").val() == "") {
			focusSelecter = "#adultInfo" + i + " input[name=givenName]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.074')),"","goFocus");
			return false;
		}
		if (adtBirthCheck
				|| !($("#adultInfo"+i).find("input[name=birth]").val() == ""
					|| $("#adultInfo"+i).find("input[name=birth]").val() == $("#adultInfo"+i).find("input[name=birth]").attr("placeholder"))) {
			if ($("#adultInfo"+i).find("input[name=birth]").val() == ""
				|| $("#adultInfo"+i).find("input[name=birth]").val() == $("#adultInfo"+i).find("input[name=birth]").attr("placeholder")) {
				focusSelecter = "#adultInfo" + i + " input[name=birth]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')),"","goFocus");
				return false;
			}
			
			if (!dayRegExp.test($("#adultInfo"+i).find("input[name=birth]").val())) {
				focusSelecter = "#adultInfo" + i + " input[name=birth]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i),"","goFocus");
				return false;
			}
			
			birthDate = $("#adultInfo"+i).find("input[name=birth]").val();
			
			if ($("#hidDomIntType").val() == "DOM") {
				for (var j = 0; j < segmentDetailList.length; j++) {
					depDate = new Date(segmentDetailList[j].scheduledDepartureDateTime);
					if (calcAge(birthDate,depDate) < 13) {
						focusSelecter = "#adultInfo" + i + " input[name=birth]";
						alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i),"","goFocus");
						return false;
					}
				}
				
				// 국적 Validation
				if ($("#adultInfo"+i).find("select[name=nationality]").val() == "") {
					focusSelecter = "#adultInfo" + i + " select[name=nationality]";
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.232')),"","goFocus");
					return false;
				}
				
				// 생년월일 Validation
				/*if ($("#adultInfo"+i).find("input[name=birth]").val() == "") {
					focusSelecter = "#adultInfo" + i + " input[name=birth]";
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')),"","goFocus");
					return false;
				}*/
				
			}
			else {
				depDate = new Date(segmentDetailList[0].scheduledDepartureDateTime);
				
				if (calcAge(birthDate,depDate) < 12) {
					focusSelecter = "#adultInfo" + i + " input[name=birth]";
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i),"","goFocus");
					return false;
				}
			}
		}
		
		/* 로열티 ON/OFF */
		if(lytOpenYn){
			if ($("#adultInfo"+i).find("input[name=userId]").val() != ""
				&& ($("#adultInfo"+i).find("input[name=userId]").attr("ibe_id") == undefined || $("#adultInfo"+i).find("input[name=userId]").attr("ibe_id") == "")
				&& ($("#adultInfo"+i).find("input[name=userId]").attr("lyt_id") == undefined || $("#adultInfo"+i).find("input[name=userId]").attr("lyt_id") == "") ) {
				focusSelecter = "#adultInfo" + i + " input[name=userId]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.042').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i),"","goFocus");
				return false;
			}
		} else {
			if ($("#adultInfo"+i).find("input[name=userId]").val() != ""
				&& ($("#adultInfo"+i).find("input[name=userId]").attr("ibe_id") == undefined || $("#adultInfo"+i).find("input[name=userId]").attr("ibe_id") == "") ) {
				focusSelecter = "#adultInfo" + i + " input[name=userId]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.042').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.012')+i),"","goFocus");
				return false;
			}
		}
		/* 로열티 ON/OFF */
		
		if ($("#adultInfo"+i).find("[name=discount]").find("option:selected[value=FAM]").length > 0) {
			famCnt++;			
		}
	}
	
	//childInfo
	for (var i = 1; i <= $("fieldset[id^=childInfo]").length; i++) {
		if ($("#childInfo"+i).find("input[name=surName]").val() == "") {
			focusSelecter = "#childInfo" + i + " input[name=surName]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.073')),"","goFocus");
			return false;
		}
		if ($("#childInfo"+i).find("input[name=givenName]").val() == "") {
			focusSelecter = "#childInfo" + i + " input[name=givenName]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.074')),"","goFocus");
			return false;
		}
		
		if ($("#childInfo"+i).find("input[name=birth]").val() == ""
			|| $("#childInfo"+i).find("input[name=birth]").val() == $("#childInfo"+i).find("input[name=birth]").attr("placeholder")) {
			focusSelecter = "#childInfo" + i + " input[name=birth]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')),"","goFocus");
			return false;
		}
		
		if (!dayRegExp.test($("#childInfo"+i).find("input[name=birth]").val())) {
			focusSelecter = "#childInfo" + i + " input[name=birth]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i),"","goFocus");
			return false;
		}
		
		if ($("#childInfo"+i).find("select").find("option:eq(0)").val() != "INS") {			
			birthDate = $("#childInfo"+i).find("input[name=birth]").val();
			
			if ($("#hidDomIntType").val() == "DOM") {
				for (var j = 0; j < segmentDetailList.length; j++) {
					depDate = new Date(segmentDetailList[j].scheduledDepartureDateTime);
					var infantSeat = $("#childInfo"+i).attr("class");
					if(infantSeat == "" || infantSeat == null || infantSeat == undefined) {
						if (!(2<= calcAge(birthDate,depDate) && calcAge(birthDate,depDate) < 13)) {
							focusSelecter = "#childInfo" + i + " input[name=birth]";
							alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i),"","goFocus");
							return false;
						}
					}
				}
				
				// 국적 Validation
				if ($("#childInfo"+i).find("select[name=nationality]").val() == "") {
					focusSelecter = "#childInfo" + i + " select[name=nationality]";
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.232')),"","goFocus");
					return false;
				}
				
				// 생년월일 Validation
				/*if ($("#childInfo"+i).find("input[name=birth]").val() == "") {
					focusSelecter = "#childInfo" + i + " input[name=birth]";
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')),"","goFocus");
					return false;
				}*/
			}
			else {
				depDate = new Date(segmentDetailList[0].scheduledDepartureDateTime);
				if(!$("#childInfo"+i).attr("class") == "ChangeSeatInfant") {
					if (!(2<= calcAge(birthDate,depDate) && calcAge(birthDate,depDate) < 13)) {
						focusSelecter = "#childInfo" + i + " input[name=birth]";
						alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i),"","goFocus");
						return false;
					}
				}
			}
		}
		
		/* 로열티 ON/OFF */
		if(lytOpenYn) {
			if ($("#childInfo"+i).find("input[name=userId]").val() != ""
				&& ($("#childInfo"+i).find("input[name=userId]").attr("ibe_id") == undefined || $("#childInfo"+i).find("input[name=userId]").attr("ibe_id") == "")
				&& ($("#childInfo"+i).find("input[name=userId]").attr("lyt_id") == undefined || $("#childInfo"+i).find("input[name=userId]").attr("lty_id") == "") ) {
				focusSelecter = "#childInfo" + i + " input[name=userId]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.042').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i),"","goFocus");
				return false;
			}
		} else {
			if ($("#childInfo"+i).find("input[name=userId]").val() != ""
				&& ($("#childInfo"+i).find("input[name=userId]").attr("ibe_id") == undefined || $("#childInfo"+i).find("input[name=userId]").attr("ibe_id") == "") ) {
				focusSelecter = "#childInfo" + i + " input[name=userId]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.042').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.013')+i),"","goFocus");
				return false;
			}
		}
		/* 로열티 ON/OFF */
		
		if ($("#childInfo"+i).find("[name=discount]").find("option:selected[value=FAMC]").length > 0) {
			famCnt++;			
		}
	}
	
	//infantInfo
	for (var i = 1; i <= $("fieldset[id^=infantInfo]").length; i++) {
		if ($("#infantInfo"+i).find("input[name=surName]").val() == "") {
			focusSelecter = "#infantInfo" + i + " input[name=surName]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.073')),"","goFocus");
			return false;
		}
		if ($("#infantInfo"+i).find("input[name=givenName]").val() == "") {
			focusSelecter = "#infantInfo" + i + " input[name=givenName]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.074')),"","goFocus");
			return false;
		}
		
		if ($("#infantInfo"+i).find("input[name=birth]").val() == ""
			|| $("#infantInfo"+i).find("input[name=birth]").val() == $("#infantInfo"+i).find("input[name=birth]").attr("placeholder")) {
			focusSelecter = "#infantInfo" + i + " input[name=birth]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')),"","goFocus");
			return false;
		}
		
		if (!dayRegExp.test($("#infantInfo"+i).find("input[name=birth]").val())) {
			focusSelecter = "#infantInfo" + i + " input[name=birth]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i),"","goFocus");
			return false;
		}
					
		var birth = $("#infantInfo"+i).find("input[name=birth]").val();
		birthDate = new Date(Number(birth.substr(0,4)),Number(birth.substr(4,2))-1,Number(birth.substr(6,2)));
		
		if (today < birthDate) {
			focusSelecter = "#infantInfo" + i + " input[name=birth]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i),"","goFocus");
			return false;
		}
		
		if ($("#hidDomIntType").val() == "DOM") {
			for (var j = 0; j < segmentDetailList.length; j++) {
				depDate = new Date(segmentDetailList[j].scheduledDepartureDateTime);
				if (!(getCompareTime(birthDate,13) < depDate && calcAge(birth,depDate) < 2)) {
					focusSelecter = "#infantInfo" + i + " input[name=birth]";
					alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i),"","goFocus");
					return false;
				}
			}
			
			// 국적 Validation
			if ($("#infantInfo"+i).find("select[name=nationality]").val() == "") {
				focusSelecter = "#infantInfo" + i + " select[name=nationality]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.232')),"","goFocus");
				return false;
			}
			
			// 생년월일 Validation
			/*if ($("#infantInfo"+i).find("input[name=birth]").val() == "") {
				focusSelecter = "#infantInfo" + i + " input[name=birth]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i).replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.018')),"","goFocus");
				return false;
			}*/
		}
		else {
			depDate = new Date(segmentDetailList[0].scheduledDepartureDateTime);
			
			if (!(getCompareTime(birthDate,13) <= depDate && calcAge(birth,depDate) < 2)) {
				focusSelecter = "#infantInfo" + i + " input[name=birth]";
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.038').replace("{0}",$.i18n.prop('hom.ibe.rsv.lbl.014')+i),"","goFocus");
				return false;
			}
		}
		
		if ($("#infantInfo"+i).find("select[name=protector]").find("option:selected").index() == 0) {
			focusSelecter = "#infantInfo" + i + " select[name=protector]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.039'),"","goFocus");
			return false;
		}
		
		if ($("[name=infantInfo]").find("option:selected[value="+$("#infantInfo"+i).find("select[name=protector]").find("option:selected").val()+"]").length > 1) {
			focusSelecter = "#infantInfo" + i + " select[name=protector]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.052'),"","goFocus");
			return false;
		}
	}
	
	if (famCnt>0 && famCnt<3) {
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.069'));
		return false;
	}
	
	//email
	if (!emailRegExp.test($("input[name=email]").val()) || $("input[name=email]").val() == "") {
		focusSelecter = "input[name=email]";
		alertLayer($.i18n.prop('lj.ibe.b2c.myp.009'),"","goFocus");
		return false;
	}
	
	//phone
	if ($("input[name=phone]").val() == "") {
		focusSelecter = "input[name=phone]";
		alertLayer($.i18n.prop('lj.ibe.b2c.rsv.015').replace("[{0}]","").replace("{1}",$.i18n.prop('hom.ibe.rsv.lbl.085')),"","goFocus");
		return false;
	}

	if($('select[name=country]').val() == "82"){
		if(!phoneRegExp.test($("input[name=phone]").val())){
			focusSelecter = "input[name=phone]";
			alertLayer($.i18n.prop('lj.ibe.b2c.rsv.086'));
			return false;
		}
	}
	
	if ($("fieldset[id^=adultInfo]").length == 0) {
		fnShowProtectorPopup();	
	}
	else {
		if (netfunnelVisible && $('#registerform #pnrNumber').val() == "") {
			var langCd = $("#globalLangCd").val();
			var skinId = ('KOR' == langCd) ? "nf_skin_eretail" : "nf_skin_eretail_eng";
			
			NetFunnel_Action({ service_id: sid, action_id: aid, skin_id: skinId }, function (ev, ret) {
				fnSendPassengerInfo();
			});
		}
		else {
			fnSendPassengerInfo();
		}
	}
}


function fnSendPassengerInfo(){
	var registerPassengerJson = new Object();
	
	registerPassengerJson.email = $("input[name=email]").val();
	registerPassengerJson.phoneCountryCode = $("select[name=country] option:selected").val();
	registerPassengerJson.phoneNumber = $("input[name=phone]").val();
	registerPassengerJson.domIntType = $("#hidDomIntType").val();
	var passengerJsonArray = new Array();
	
	//adultInfo
	for (var i = 1; i <= $("fieldset[id^=adultInfo]").length; i++) {
		var adultInfo = new Object();
		
		if ($("#adultInfo"+i).attr("guest_id") == undefined) {
			adultInfo.guestId = i;
		}else {
			adultInfo.guestId = $("#adultInfo"+i).attr("guest_id");
		}
		
		adultInfo.surName = $("#adultInfo"+i).find("input[name=surName]").val();
		adultInfo.givenName = $("#adultInfo"+i).find("input[name=givenName]").val();
		adultInfo.guestType = "ADULT";
		adultInfo.gender = $("#adultInfo"+i).find(".fieldArea").find(".choice").val();
		adultInfo.birth = $("#adultInfo"+i).find("input[name=birth]").val();
		adultInfo.userProfileId = $("#adultInfo"+i).find("input[name=userId]").attr("ibe_id");
		adultInfo.nationality =  $("#adultInfo"+i).find("select[name=nationality]").find("option:selected").val(); // 국적 추가
		adultInfo.discountCode =  $("#adultInfo"+i).find("select[name=discount]").find("option:selected").val();
		adultInfo.discountGroupCode =  $("#adultInfo"+i).find("select[name=discount]").find("option:selected").parent().attr("groupCd");
		adultInfo.protectorId = "";
		adultInfo.userLoyaltyId = $("#adultInfo"+i).find("input[name=userId]").attr("lyt_id");
		
		// 국제선 관광비행
		adultInfo.documentNumber = $("#adultInfo"+i).find("input[name=documentNumber]").val(); //여권번호
		adultInfo.dateOfExpiry = $("#adultInfo"+i).find("input[name=dateOfExpiry]").val(); //만료일
		adultInfo.issuingCountry = $("#adultInfo"+i).find("select[name=issuingCountry]").find("option:selected").val(); //발급지
		
		passengerJsonArray.push(adultInfo);
	}
	
	//childInfo
	for (var i = 1; i <= $("fieldset[id^=childInfo]").length; i++) {
		var childInfo = new Object();
		
		if ($("#childInfo"+i).attr("guest_id") == undefined) {
			childInfo.guestId = $("fieldset[id^=adultInfo]").length+i;
		}else {
			childInfo.guestId = $("#childInfo"+i).attr("guest_id");
		}
		
		childInfo.surName = $("#childInfo"+i).find("input[name=surName]").val();
		childInfo.givenName = $("#childInfo"+i).find("input[name=givenName]").val();
		childInfo.guestType = "CHILD";
		childInfo.gender = $("#childInfo"+i).find(".fieldArea").find(".choice").val();
		childInfo.birth = $("#childInfo"+i).find("input[name=birth]").val();
		childInfo.userProfileId = $("#childInfo"+i).find("input[name=userId]").attr("ibe_id");
		childInfo.nationality =  $("#childInfo"+i).find("select[name=nationality]").find("option:selected").val(); // 국적 추가
		childInfo.discountCode =  $("#childInfo"+i).find("select[name=discount]").find("option:selected").val();
		childInfo.discountGroupCode =  $("#childInfo"+i).find("select[name=discount]").find("option:selected").parent().attr("groupCd");
		childInfo.protectorId = "";
		childInfo.userLoyaltyId = $("#childInfo"+i).find("input[name=userId]").attr("lyt_id");
		
		// 국제선 관광비행
		childInfo.documentNumber = $("#childInfo"+i).find("input[name=documentNumber]").val(); //여권번호
		childInfo.dateOfExpiry = $("#childInfo"+i).find("input[name=dateOfExpiry]").val(); //만료일
		childInfo.issuingCountry = $("#childInfo"+i).find("select[name=issuingCountry]").find("option:selected").val(); //발급지
		
		passengerJsonArray.push(childInfo);
	}
	
	//infantInfo
	for (var i = 1; i <= $("fieldset[id^=infantInfo]").length; i++) {
		var infantInfo = new Object();
		
		if ($("#infantInfo"+i).attr("guest_id") == undefined) {
			infantInfo.guestId = $("fieldset[id^=adultInfo]").length + $("fieldset[id^=childInfo]").length + i;
		}else {
			infantInfo.guestId = $("#infantInfo"+i).attr("guest_id");
		}
		
		infantInfo.surName = $("#infantInfo"+i).find("input[name=surName]").val();
		infantInfo.givenName = $("#infantInfo"+i).find("input[name=givenName]").val();
		infantInfo.guestType = "INFANT";
		infantInfo.gender = $("#infantInfo"+i).find(".fieldArea").find(".choice").val();
		infantInfo.birth = $("#infantInfo"+i).find("input[name=birth]").val();
		infantInfo.userProfileId = "";
		infantInfo.nationality =  $("#infantInfo"+i).find("select[name=nationality]").find("option:selected").val(); // 국적 추가
		infantInfo.discountCode = "";
		infantInfo.discountGroupCode = "";
		infantInfo.protectorId = $("#infantInfo"+i).find("select[name=protector]").find("option:selected").val();
		infantInfo.userLoyaltyId = "";
		
		// 국제선 관광비행
		infantInfo.documentNumber = $("#infantInfo"+i).find("input[name=documentNumber]").val(); //여권번호
		infantInfo.dateOfExpiry = $("#infantInfo"+i).find("input[name=dateOfExpiry]").val(); //만료일
		infantInfo.issuingCountry = $("#infantInfo"+i).find("select[name=issuingCountry]").find("option:selected").val(); //발급지
		
		passengerJsonArray.push(infantInfo);
	}
	
	registerPassengerJson.guestList = passengerJsonArray;
	registerPassengerJson.protectorPnrNumber = protectorPnr;
		
	if(bextraSkip){
		alertLayer($.i18n.prop("hom.ibe.ctn.pax.extraSkip"),'','showLoading'); 
		//시스템 업그레이드 작업으로 인해 부가서비스 신청은 8월24일 이후 마이페이지를 통해 추가 구매 하실 수 있습니다.
	}else{
		showLoading();
	}
	
	
	var bookingID = ( $('#bookingID').val()!= undefined && $('#bookingID').val()!='')? $('#bookingID').val().trim() : '';
	
	$.ajax({
		type : "POST",
		url : "/jinair/jinairfront/www.jinair.com/booking/savePassengerJson.json" + "?bookingID="+bookingID,
		data : JSON.stringify(registerPassengerJson),
		contentType	: "application/json; charset=UTF-8",
		beforeSend	: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");

			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		dataType: "json",
		success : function(data) {
			if (data.errorCode != null && data.errorCode != "") {
				alertLayer($.i18n.prop(data.errorCode),'','fnMoveHome');
				hideLoading();
			}
			else {
				if(bextraSkip)
					$("#sendForm").attr("action", "/booking/movePayment");
				else
					$("#sendForm").attr("action", "/booking/moveExtras");
				
				$("#sendForm").attr("method", "post");
				$("#sendForm").submit();	
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
			
			hideConfirmLayer();
			NetFunnel_Complete();
		}
	});
}

function genderToggle(obj){
	if (!$(obj).hasClass("choice")) {
		var divGender = $(obj).parents(".wrap");
		
		var btnOff = divGender.find("button:not(.choice)");
		var btnOn = divGender.find("button.choice");
			btnOff.addClass("choice");
			btnOn.removeClass("choice");			
	}
}

function fnChangeAdultList(obj){
	//선택항목 이외의 같은항목 숨김
	var selectedOption = $(obj).find("option:selected"); 
	var targetGroup = $("select[name=protector]").find("option:contains("+selectedOption.text()+")");
	targetGroup.hide();
	selectedOption.show();
	
	var selectedGroup = $("select[name=protector]").find("option:selected:not(:contains("+$.i18n.prop('hom.ibe.rsv.lbl.081')+"))");
	
	for (var i = 0; i < $(obj).find("option").length; i++) {
		if ($.grep($(selectedGroup),function(n){ return $(n).text() == $(obj).find("option").eq(i).text()}).length == 0) {
			$("select[name=protector]").find("option:contains("+$(obj).find("option").eq(i).text()+")").show();
		}
	}
}

function checkGuestType(obj,segmentDetailList)
{
	var dayRegExp = /^(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/;
	var birth = $(obj).val();
	
	if (!dayRegExp.test($(obj).val())) {
		return false;
	}
	
	var birthDate = new Date(Number(birth.substr(0,4)),Number(birth.substr(4,2))-1,Number(birth.substr(6,2)));
	var depDate;
	
	if ($("#hidDomIntType").val() == "DOM") {
		for (var i = 0; i < segmentDetailList.length; i++) {
			depDate = new Date(segmentDetailList[i].scheduledDepartureDateTime);
			if (getCompareTime(birthDate,6) < depDate && calcAge($(obj).val(),depDate) < 2) {
				if ($(obj).parents("fieldset").find("select[name=discount]").find("option:eq("+i+")").val() == "INS") {
					return true;
				}
				seatedInfantId = obj;
				confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.016'),"setSeatedInfant","resetSeatedInfant");
				return false;
			}
			else {
				$(obj).parents("fieldset").find("select[name=discount]").removeAttr("disabled");
				$(obj).parents("fieldset").find("select[name=discount]").find("option:eq("+i+")").prop("selected", true).val("");
			}
		}
	}
	else {
		depDate = new Date(segmentDetailList[0].scheduledDepartureDateTime);
		if (getCompareTime(birthDate,6) < depDate && calcAge($(obj).val(),depDate) < 2) {
			if ($(obj).parents("fieldset").find("select[name=discount]").find("option:eq("+i+")").val() == "INS") {
				return true;
			}
			seatedInfantId = obj;
			confirmLayer($.i18n.prop('lj.ibe.b2c.rsv.016'),"setSeatedInfant","resetSeatedInfant");
		}
		else {
			$(obj).parents("fieldset").find("select[name=discount]").removeAttr("disabled");
			$(obj).parents("fieldset").find("select[name=discount]").find("option:eq("+i+")").prop("selected", true).val("");
		}
	}
}

//유아 좌석 점유 적용
function setSeatedInfant(){
	// 2021-09-17 유아 좌석 점유 시 국적, 추가할인 disabled 되던것 해제 요청 
	// $(seatedInfantId).parents("fieldset").find("select").attr("disabled","disabled");
	$(seatedInfantId).parents("fieldset").find("select[name=discount]").find("option:eq(0)").prop("selected", true).val("INS");
	$(seatedInfantId).parents("fieldset").addClass("ChangeSeatInfant");
	hideConfirmLayer();
	seatedInfantId="";
}
//유아 좌석 점유 취소
function resetSeatedInfant(){
	$(seatedInfantId).parents("fieldset").find("select").removeAttr("disabled");
	$(seatedInfantId).parents("fieldset").find("select[name=discount]").find("option:eq(0)").prop("selected", true).val("");
	$(seatedInfantId).parents("fieldset").removeClass("");
	$(seatedInfantId).val("");
	hideConfirmLayer();
	seatedInfantId="";
}
//포커스 이동
function goFocus(){
	if (focusSelecter != "") {
		setTimeout(function(){
			$(focusSelecter).focus();
			focusSelecter = "";
			},1);
	}
}
//홈으로
function fnMoveHome(){
	document.location.replace('/');
}

//프로모션 코드 적용 후 운임할인 중복 적용 불가 팝업 표출
function fnBlockDupDisc(obj, promoCode, fareDiscGrpCds){
	var selectedOptionGroup = $(obj).find("option:selected").parent().attr("groupCd"); 
	var isFare = fareDiscGrpCds.indexOf(selectedOptionGroup) != -1;
	fieldsetId = $(obj).parents("fieldset").attr("id");
	
	if(promoCode != "" && isFare){
		confirmLayer("프로모션코드 할인과 추가 운임 할인 대상은 중복 적용이 불가합니다. (공항세 할인은 제외)<br>"+
					"운임 할인 대상 선택 시, 기존 프로모션코드 할인은 자동 취소되며 선택하신 추가 운임 할인으로 대체됩니다.<br>"+
					"운임 할인을 선택하시겠습니까? ","hideConfirmLayer","deSelectDiscout");
	}
}
function addDiscGroup(){
	hideConfirmLayer();
}

function deSelectDiscout(){
	$("#"+this.fieldsetId).find("select[name=discount]").val("");
	hideConfirmLayer();
}