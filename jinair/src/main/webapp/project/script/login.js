/**
 * 개인회원 로그인
 */
function MemberLoginForm(params) {
	var _this = this;

	_this.$form = $('#' + params.formId);
	_this.fromLayer = params.fromLayer;
	_this.isCapsLock = false;

	var $form = _this.$form;
	LoginForm.registerValidator($form);

	document.addEventListener('keydown', function(event) {
		_this.isCapsLock = event.getModifierState && event.getModifierState('CapsLock');
	});

	// 입력 PW 에서 Caps Lock 체크
	var $pw = $form.find('[name="pw"]');
	$pw.on('focus keypress', function() {
		if(_this.isCapsLock) {
			$('#capsLockWarning').show();
		} else {
			$('#capsLockWarning').hide();
		}
	}).on('focusout', function() {
		$('#capsLockWarning').hide();
	});

	// 입력 PW Enter 키 처리
	$pw.keydown(function(event) {
		if(13 == event.which) {
			_this.login();
		}
	})

	// 로그인 버튼
	$form.find('[role="login-button"]').click(function() {
		_this.login();
		return true;
	});

	// 비밀번호 항목 스크립트
	$(".member fieldset span input").on("focusin", function() {
		$(this).prev("label").hide();
	}).on("focusout", function() {
		if(!$(this).val()) {
			$(this).prev("label").show();
		}
	});

	$form.find('[name="id"]').focus();
};

MemberLoginForm.prototype.login = function(callback) {
	var _this = this;
	var $form = _this.$form;

	LoginForm.removeTrim($form);

	if(!$form.valid()) {
		return false;
	}

	delete _this.callback;
	_this.callback = callback;
	if(!_this.callback) {
		_this.callback = _this.defaultLoginCallback;
	}
	if($('#mType').val() === 'availpromotion') {
		_this.callback = MemberLoginForm.loginCallbackFromAvailIBE;
	}

	var returnUrl = $form.find('[name="returnUrl"]').val();
	if(!!returnUrl) {
		returnUrl = returnUrl.replace(/&amp;/g, '&');
		$form.find('[name="returnUrl"]').val(returnUrl);
	}

	showLoading();
	$.ajax({
		type: 'post',
		url: '/login/loginProcess',
		data: $form.serialize(),
		dataType: 'json',
		beforeSend: function(xhr) {
			var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
			var csrfToken = $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}
	}).done(function(data) {
		hideLoading();
		_this.callback(data);
	}).fail(function(data) {
		hideLoading();

		if(data.status === 403) {
			showLoading();
			$.ajax({
				type: 'get',
				url: '/login/refreshCsrf',
				dataType: 'json'
			}).done(function(data) {
				hideLoading();

				if(!data || !data.token) {
					return;
				}

				$('meta[name="_csrf"]').attr('content', data.token);

				_this.login(callback);
			}).fail(function(data) {
				hideLoading();
				location.reload();
			});
			return;
		}

		alertLayer($.i18n.prop('cmm.msg.alert.error'));
	});
}

MemberLoginForm.prototype.defaultLoginCallback = function(data) {
	if(!!data.errorCode) {
		switch(data.errorCode) {
		case 'INACTIVE':
			top.location.href = "/login/findIdPw?flag=inact";
			return;
		case 'INVALID_PW':
			alertLayer($.i18n.prop('hom.user.msg.alert.loginCount', data.errorArguments[0]));
			break;
		case 'BLOCKED':
			alertLayer($.i18n.prop('hom.user.msg.alert.loginBlock'));
			break;
		case 'INVALID_DEVICE':
			alertLayer($.i18n.prop('hom.user.msg.alert.loginDvc'));
			break;
		case 'MBR_REQUIRED':
			top.location.href = "/login/findIdPw?flag=mbrReq";
			break;
		case 'MBR_REQUIRED_MOD':
			top.location.href = "/login/findIdPw/memberModify?flag=mbrReq";
			break;
		default:
			alertLayer($.i18n.prop('hom.user.msg.alert.loginError'));
			break;
		}

		var $id = this.$form.find('[name="id"]');
		$id.focus();
		return;
	}

	/** after login success */

	if(typeof _satellite !== 'undefined' && typeof _satellite.track === 'function') {
		_satellite.track('user_login');
	}

	if(!!data.tokenLoginResult) {
		try {
			var tokenLoginResultJsonString = data.tokenLoginResult.replace(/&amp;/gi, '&').replace(/&#34;/gi, '"');
			var tokenLoginResult = JSON.parse(tokenLoginResultJsonString);
			doWLogin(tokenLoginResult.id, tokenLoginResult.ibsCstrId, tokenLoginResult.lctnRcvYn, tokenLoginResult.smsRcvYn, tokenLoginResult.dvcTknList);
		} catch(e) {
			console.log(e);
		}
	}

	if(data.requireRefreshProfile) {
		alertLayer($.i18n.prop('hom.user.msg.alert.goEditForm'), '', function() {
			top.location.href = "/mypage/editMemberForm";
		});
		return;
	}

	var returnUrl = !!data.returnUrl ? data.returnUrl : '/';
	if(!!returnUrl) {
		returnUrl = returnUrl.replace(/&amp;/g, '&');
	}

	if(data.requireChangePassword) {
		top.location.href = "/member/pwChange?returnUrl=" + encodeURIComponent(returnUrl);
		return;
	}

	top.location.href = returnUrl;
}

MemberLoginForm.loginCallbackFromAvailIBE = function(data) {
	if(!!data.errorCode) {
		var $id = this.$form.find('[name="id"]');

		switch(data.errorCode) {
		case 'INACTIVE':
			top.location.href = "/login/findIdPw?flag=inact";
			break;
		case 'INVALID_PW':
			alertLayer($.i18n.prop('hom.user.msg.alert.loginCount', data.errorArguments[0]));
			$id.focus();
			break;
		case 'BLOCKED':
			alertLayer($.i18n.prop('hom.user.msg.alert.loginBlock'));
			$id.focus();
			break;
		case 'MBR_REQUIRED':
			top.location.href = "/login/findIdPw?flag=mbrReq";
			break;
		case 'MBR_REQUIRED_OTHER':
			top.location.href = "/login/findIdPw?flag=mbrReq";
			break;
		default:
			alertLayer($.i18n.prop('hom.user.msg.alert.loginError'));
			$id.focus();
			break;
		}
		return;
	}

	if(!!data.tokenLoginResult) {
		try {
			var tokenLoginResultJsonString = data.tokenLoginResult.replace(/&amp;/gi, '&').replace(/&#34;/gi, '"');
			var tokenLoginResult = JSON.parse(tokenLoginResultJsonString);
			doWLogin(tokenLoginResult.id, tokenLoginResult.ibsCstrId, tokenLoginResult.lctnRcvYn, tokenLoginResult.smsRcvYn, tokenLoginResult.dvcTknList);
		} catch(e) {
			console.log(e);
		}
	}

	if(data.requireRefreshProfile) {
		alertLayer($.i18n.prop('hom.user.msg.alert.goEditForm'), '', function() {
			top.location.href = "/mypage/editMemberForm";
		});
		return;
	}

	parent.fnAfterPromotionLogin();
	hidePopupLayer();
}

function PnrLoginForm(params) {
	var _this = this;

	var formIds = params.formIds;

	this.$forms = [];
	for(var i = 0; i < formIds.length; i++) {
		var formId = formIds[i];

		var $form = $('#' + formId);
		LoginForm.registerValidator($form);

		$form.find('[role="login-button"]').click(function() {
			var $form = $(this).closest('form');
			_this.login($form);
		});

		$form.find('.btn_calendar').datepicker({
			dateFormat: 'yy-mm-dd',
			changeMonth: true,
			changeYear: true,
			showMonthAfterYear: true,
			dayNamesMin: ['일', '월', '화','수', '목', '금', '토'],
			showButtonPanel: true,
			closeText: 'close',
			monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
			onSelect: function(dateText, inst) {
				if($(this).attr("id") == "startImg") {
					$(".depDt").val($(this).val());
				}
			}
		});
		$form.find('.btn_calendar').mask('9999-99-99', {placeholder: 'YYYY-MM-DD'});

		this.$forms.push($form);
	}
};

PnrLoginForm.prototype.login = function($form, callback) {
	var _this = this;

	LoginForm.removeTrim($form);

	if(!$form.valid()) {
		return false;
	}

	var returnUrl = $form.find('[name="returnUrl"]').val();
	if(!!returnUrl) {
		returnUrl = returnUrl.replace(/&amp;/g, '&');
		$form.find('[name="returnUrl"]').val(returnUrl);
	}

	delete _this.callback;
	_this.callback = callback;
	if(!_this.callback) {
		_this.callback = PnrLoginForm.defaultLoginCallback;
	}

	showLoading();
	$.ajax({
		type: 'post',
		url: '/login/loginProcess',
		data: $form.serialize(),
		dataType: 'json',
		beforeSend: function(xhr) {
			var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
			var csrfToken = $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}
	}).done(function(data) {
		hideLoading();

		var params = {
			returnUrl: data.returnUrl,
			errorCode: data.errorCode,
			pnrNumber: $form.find('[name="pnrNumber"]').val(),
			accessPageUrl: $form.find('[name="accessPageUrl"]').val(),
			action: $form.find('[name="action"]').val()
		};
		_this.callback(params);
	}).fail(function(data) {
		hideLoading();

		if(data.status === 403) {
			showLoading();
			$.ajax({
				type: 'get',
				url: '/login/refreshCsrf',
				dataType: 'json'
			}).done(function(data) {
				hideLoading();

				if(!data || !data.token) {
					return;
				}

				$('meta[name="_csrf"]').attr('content', data.token);

				_this.login($form, callback);
			}).fail(function(data) {
				hideLoading();
				location.reload();
			});
			return;
		}

		alertLayer($.i18n.prop('cmm.msg.alert.error'));
	});
};

PnrLoginForm.defaultLoginCallback = function(params) {
	if(!!params.errorCode) {
		alertLayer($.i18n.prop('hom.login.msg.plz.check.inputs'));
		return;
	}

	var returnUrl = !!params.returnUrl ? params.returnUrl : '/checkin/checkinList';
	if(-1 < returnUrl.indexOf('/mypage/getReservationList')) {
		returnUrl = '/mypage/getReservationDetail';
	}
	if(-1 < returnUrl.indexOf('/mypage/getReservationDetail')) {
		return PnrLoginForm.getReservationCheckIBE(params);
	}

	if(!!returnUrl) {
		returnUrl = returnUrl.replace(/&amp;/g, '&');
	}

	showLoading();
	top.location.href = returnUrl;
};

PnrLoginForm.getReservationCheckIBE = function(params) {
	if(!params.accessPageUrl) {
		params.accessPageUrl = 'headerIbe';
	}

	var action = params.action;

	showLoading();
	$.ajax({
		type: 'post',
		url: '/mypage/getReservationCheck',
		data: JSON.stringify(params),
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		beforeSend: function(xhr) {
			var csrfHeader = $("meta[name='_csrf_header']").attr("content");
			var csrfToken = $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success: function(data) {
			if (data.uniqueCase.length) {
				if (data.uniqueCase.indexOf("CASE14") >= 0) {
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.011'));
				} else if (data.uniqueCase.indexOf("CASE6") >= 0) {
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.022'));
				} else if (data.uniqueCase.indexOf("CASE16") >= 0) { // 개인 로그인 시 입력정보가 정확하지 않을 경우
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.031'));
				} else if (data.uniqueCase.indexOf("CASE21") >= 0) { // 회원 PNR로 비회원 로그인 시
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.033'));
				} else if (data.uniqueCase.indexOf("CASE26") >= 0) { // 오프라인 PNR 비회원 예약으로 조회 시 알림 팝업
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.034'));
				} else {
					alertLayer($.i18n.prop('lj.ibe.b2c.myp.011'));
				}
				hideLoading();
			}
			else {
				showLoading();
				if(action == null) {
					location.href = '/mypage/getReservationDetail';
				} else {
					$("#non-member-login-form").attr("action", "/mypage/getReservationDetail")
					$("#non-member-login-form").attr("method", "post")
					$("#non-member-login-form").submit();
				}
			}
		},
		error: function(data) {
			hideLoading();
			try {
				var errorMsg = JSON.parse(data.responseText);
				alertLayer(errorMsg.errorMessage);
			} catch(e) {
				alertLayer($.i18n.prop('lj.ibe.b2c.rsv.057'));
			}
		}
	});
}

function LoginForm(params) {
}

LoginForm.registeredCustomMethods = false;

LoginForm.registerValidator = function($form) {
	LoginForm.registerCustomMethodsIfUndefined();

	$form.validate({
		rules: {
			id: {
				required: true,
				compareWithPlaceholder: true,
				maxlength: false
			},
			pw: {
				required: true,
				compareWithPlaceholder: true,
				maxlength: false
			},
			pnrNumber: {
				required: true,
				compareWithPlaceholder: true,
				maxlength: false
			},
			emailAddress: {
				required: true,
				compareWithPlaceholder: true,
				email: true,
				maxlength: false
			},
			lastName: {
				required: true,
				compareWithPlaceholder: true,
				maxlength: false
			},
			firstName: {
				required: true,
				compareWithPlaceholder: true,
				maxlength: false
			},
			departureDate: {
				required: true,
				compareWithPlaceholder: true,
				maxlength: false
			},
			agreedGatheringMyInfo: {required: true},
			agreedMyInfoToOverseas: {required: true}
		},
		messages: {
			id: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.id')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.id'))
			},
			pw: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.pw')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.pw'))
			},
			pnrNumber: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.pnr')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.pnr'))
			},
			emailAddress: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.email')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.email')),
				email: $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.login.email'))
			},
			lastName: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.lnm')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.lnm'))
			},
			firstName: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.fnm')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.fnm'))
			},
			departureDate: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.dep.date')),
				compareWithPlaceholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.login.dep.date'))
			},
			agreedGatheringMyInfo: {required: $.i18n.prop('cmm.msg.valid.select', $.i18n.prop('hom.login.agreement1'))},
			agreedMyInfoToOverseas: {required: $.i18n.prop('cmm.msg.valid.select', $.i18n.prop('hom.login.agreement2'))}
		},
		errorPlacement: function(error, element) {
		},
		invalidHandler: function(form, validator) {
			var errors = validator.numberOfInvalids();
			if(errors) {
				alertLayer(validator.errorList[0].message);
			}
		}
	});
}

LoginForm.removeTrim = function(obj) {
	$(obj).find('input').each(function() {
		$(this).val($(this).val().replace(/^\s+/g, '').replace(/\s+$/g, '').replace(/\t/g, '').replace(/\r/g, '').replace(/\n/g, ''));
		if($(this).attr('name') != null && $(this).attr('name') != 'undefined'){
			if($(this).attr('name').indexOf('url') > -1 || $(this).attr('name').indexOf('Url') > -1 || $(this).attr('name').indexOf('URL') > -1) {
				$(this).val($(this).val().replace(/\s/g, ''));
			}
		}
	});
};

LoginForm.registerCustomMethodsIfUndefined = function() {
	if(LoginForm.registeredCustomMethods) {
		return;
	}

	$.validator.addMethod('compareWithPlaceholder', function(value, element) {
		var value = $(element).val();
		var placeholder = $(element).prop('placeholder');
		return this.optional(element) || value !== placeholder;
	});

	$.validator.addMethod('email', function(value, element) {
		// 이메일 검증요건 완화 (2018.04.05 jhbang@crewmate.co.kr)
		// 이메일 검증요건 원복 (2018.05.03 jhbang@crewmate.co.kr)
		return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
	});

	LoginForm.registeredCustomMethods = true;
};