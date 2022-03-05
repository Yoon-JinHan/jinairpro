var __page__ = __page__ || {};

function initialize(params) {
	__page__.flag = params.flag;

	/** 로열티 */
	/* 다국어 로딩 및 초기화 작업 */
	if($('#termsForm').length > 0) {
		if(lytOpenYn == 'Y') {
			$('#termsForm').validate({
				rules : {
					term01: {
						required : true
					},
					term07: {
						required : true
					},
					term02: {
						required : true
					},
					term06: {
						required : true
					}
				},
				messages: {
					term01: {
						required : $.i18n.prop('hom.mem.validate.001')
					},
					term07: {
						required : $.i18n.prop('hom.mem.validate.np.001')
					},
					term02: {
						required : $.i18n.prop('hom.mem.validate.002')
					},
					term06: {
						required : $.i18n.prop('hom.mem.validate.049')
					}
				},
				errorPlacement : function(error, element) {
					// do nothing
				},
				invalidHandler: function(form, validator) {
					var errors = validator.numberOfInvalids();
					if (errors) {
						alertLayer(validator.errorList[0].message, '', '$("#' + validator.errorList[0].element.id + '").focus');
					}
				}
			});
		} else {
			$('#termsForm').validate({
				rules : {
					term01 : {
						required : true
					},
					term02 : {
						required : true
					},
					term06 : {
						required : true
					}
				},
				messages: {
					term01 : {
						required : $.i18n.prop('hom.mem.validate.001')
					},
					term02 : {
						required : $.i18n.prop('hom.mem.validate.002')
					},
					term06 : {
						required : $.i18n.prop('hom.mem.validate.049')
					}
				},
				errorPlacement : function(error, element) {
					// do nothing
				},
				invalidHandler : function(form, validator) {
					var errors = validator.numberOfInvalids();
					if(errors) {
						alertLayer(validator.errorList[0].message, '', '$("#' + validator.errorList[0].element.id + '").focus');
					}
				}
			});
		}
	}
	/** 로열티 끝 */

	if (isMobileOS && currentOS === 'android') {
		$('#mobileAuthForm').prop('target', '_self');
		$('#mobileAuthForm').find('[name="tr_url"]').val(
				params.returnUrlWithoutPopup);
	}

	$("#emailAuth").click(function() {
		if( $(":radio[name=find]:checked").val() == 'findId' ){
			showPopupLayer('popup/findIdPopup.jsp');
		} else if( $(":radio[name=find]:checked").val() == 'findPw' ){
			showPopupLayer('popup/findPwdPopup.jsp');
		} 
	});

	$("#mobileAuth").click(function() {
		var idPwCheck = $('.findType').find("input[name='find']:checked").val();
		// 활성화 회원 필수값 구분
		if(flag == "mbrReq") {
			idPwCheck = 'mbrReq';
		}
		if(flag == 'inact') {
			if ($('#termsForm').length === 0) {
				openKMCISWindow();
				saveSessionIdPwCheck(idPwCheck);
			} else {
				saveSessionTermsAgreeInfo().done(function() {
					openKMCISWindow();
					saveSessionIdPwCheck(idPwCheck);
				});
			}
		} else {
			openKMCISWindow();
			saveSessionIdPwCheck(idPwCheck);
		}
	});

	$("#ipinAuth").click(function() {
		var idPwCheck = $('.findType').find("input[name='find']:checked").val();
		// 활성화 회원 필수값 구분
		if (flag === 'mbrReq') {
			idPwCheck = 'mbrReq';
		}

		if (flag == 'inact') {
			if ($('#termsForm').length === 0) {
				openCBAWindow();
				saveSessionIdPwCheck(idPwCheck);
			} else {
				saveSessionTermsAgreeInfo().done(function() {
					openCBAWindow();
					saveSessionIdPwCheck(idPwCheck);
				});
			}
		} else {
			openCBAWindow();
			saveSessionIdPwCheck(idPwCheck);
		}
	});

	// 2020.04.09 카카오 인증 추가
	$("#kakaoAuth").click(function() {
		if (__page__.flag === 'inact') {
			SNS.signin({
				snsType : '08',
				state : 'KAKAO_ACTIVATE'
			});
			return;
		}

		var idPwCheck = $('.findType').find("input[name='find']:checked").val();
		if (idPwCheck != '') {
			kakaoLoginReq();
		} else {
			alertLayer2('아이디 찾기/비밀번호 찾기 여부를 선택해 주세요.');
			return;
		}
	});
}

function saveSessionIdPwCheck(idPwCheck) {
	$.ajax({
		type : "POST",
		url : "/login/findIdPw/idPwCheck",
		data : {
			idPwCheck : idPwCheck
		},
		beforeSend : function(xhr) {
			var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
			var csrfToken = $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		dataType : "text",
		success : function(data) {
			if('S' == data) {
				console.log("find success");
			} else {
				console.log("find fail");
			}
		},
		error : function(data) {
			console.log($.i18n.prop('cmm.msg.alert.error'));
		}
	});
}

function saveSessionTermsAgreeInfo() {
	var d = $.Deferred();
	if(!$('#termsForm').valid()) {
		d.reject();
		return d;
	}

	$.ajax({
		type : "POST",
		url : "/member/individual/saveTermsAgreeInfo",
		data : {
			indvInfoOfrAgrYn : $("#term03").is(':checked') ? "Y" : "N",
			idfrCltAgrYn : $("#term04").is(':checked') ? "Y" : "N",
			mrktnUseAgrYn : $("#term05").is(':checked') ? "Y" : "N"
		},
		beforeSend : function(xhr) {
			var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
			var csrfToken = $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		dataType : "text",
		success : function(data) {
			if ('S' == data) {
				d.resolve();
			} else {
				alert("saveTermsAgreeInfo fail");
				d.reject();
			}
		},
		error : function(data) {
			alert($.i18n.prop('cmm.msg.alert.error'));
			d.reject();
		}
	});
	return d;
}

function openKMCISWindow() {
	if(isMobileOS && currentOS === 'android') {
		$('#mobileAuthForm').submit();
		return;
	}

	var KMCIS_window = window.open('', 'KMCISWindow', 'width=430, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=300, top=200');
	if(KMCIS_window == null) {
		alertLayer(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
		return;
	}
	$('#mobileAuthForm').prop('target', 'KMCISWindow');
	$('#mobileAuthForm').submit();
}

function openCBAWindow() {
	var CBA_window;

	if(isMobileOS) {
		document.reqCBAForm.target = '_blank';
	} else {
		CBA_window = window.open('', 'IPINWindow', 'width=450, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=300, top=200');
		if(CBA_window == null) {
			alertLayer(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
		}
		document.reqCBAForm.target = 'IPINWindow';
	}

	document.reqCBAForm.submit();
}

/* 이용약관 전체동의 클릭시 이벤트 */
function checkAll() {
	if ($("#agreeAll").is(':checked')) {
		$(".terms").prop("checked", true);
	} else {
		$(".terms").prop("checked", false);
	}
}

/* 약관팝업에서 확인 클릭시 콜백함수 */
function termsAgree(termCode) {
	$("#term" + termCode).prop("checked", true);
}
