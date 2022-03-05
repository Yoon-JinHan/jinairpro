/**
 * 모바일 APP 지원 모듈
 */
var isMobileOS = false;
var currentOS = 'nomobile';

/** @Deprecated */
var _csrfHeader = '';

/** @Deprecated */
var _csrfToken = '';

var psptIdx = -1;

/** @Deprecated */
var imageServer = globalImageServer;

/** @Deprecated */
var isLoginYn = globalLoginYn;

var	scripts		= document.getElementsByTagName('script');
var	thisScript	= scripts[scripts.length - 1];

$(function() {
	isMobileOS	= /iphone|ipad|ipod|android|windows ce|blackberry|symbian|windows phone|webos|opera mini|opera mobi|polaris|iemobile|lgtelecom|nokia|sonyericsson/i.test(navigator.userAgent.toLowerCase());

	if (isMobileOS) {
		var	userAgent	= navigator.userAgent.toLowerCase();

		if (/android/i.test(userAgent)) {
			currentOS	= 'android';
		} else if (/iphone|ipad|ipod/i.test(userAgent)) {
			currentOS	= 'ios';
		} else {
			currentOS	= 'else';
		}
	}

	parseCsrf();

	var loginYn = 'N';
	try {
		if(__global__.login.isLoggedIn) {
			loginYn = 'Y'
		}
	} catch(e) {
		loginYn = 'N';
	}
	//MobileApps.callIfExists('doIsLogin', loginYn);
	try {
		if('ios' === currentOS) {
			window.webkit.messageHandlers.doIsLogin.postMessage(loginYn);
		} else if('android' === currentOS) {
			Android_lj.doIsLogin(loginYn);
		}
	} catch(e) {
		console.log(e);
	}
});

/**
 * javascript CSRF 파라미터 파싱
 *
 * @returns
 */
function parseCsrf() {
	var	query	= thisScript.src.replace(/^[^\?]+\??/, '');

	if (!query) {
		return;
	}

	var	pairs	= query.split(/[;&]/);
	for (var i = 0; i < pairs.length; i++) {
		var	keyVal	= pairs[i].split('=');

		if (!keyVal || (2 != keyVal.length)) {
			continue;
		}

		var	key	= unescape(keyVal[0]);
		var	val	= unescape(keyVal[1]);
		val	= val.replace(/\+/g, ' ');

		if ('key' == key) {
			_csrfHeader	= val;
		} else if ('val' == key) {
			_csrfToken	= val;
		}
	}
}

/**
 * 언어 설정 (Web to App)
 *
 * @param region
 * @param language
 * @returns
 */
function doGateSetting(region, language) {
	var	jsonData	= {"region" : region, "language" : language};

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doGateSetting' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doGateSetting.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doGateSetting(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * 로그인 처리 (Web to App)
 *
 * @param id
 * @param ibsCstrId
 * @param lctnRcvYn
 * @param smsRcvYn
 * @param dvcTknList - JSON Type [{"token" : ''}, {"token" : ''}]
 * @returns
 */
function doWLogin(id, ibsCstrId, lctnRcvYn, smsRcvYn, dvcTknList) {
	var	jsonData	= {
		"user_id"				: id,
		"customer_profile_id"	: ibsCstrId,
		"loc_agree"				: lctnRcvYn,
		"push_agree"			: smsRcvYn,
		"token_list"			: dvcTknList
	}

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doWLogin' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doWLogin.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doWLogin(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * 푸시 수신 동의 설정 결과 (Web to App)
 *
 * @param agreeYn
 * @param message
 * @returns
 */
function doPushSetting(agreeYn, message) {
	var	jsonData	= {"push_agree" : agreeYn, "result_message" : message};

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doPushSetting' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doPushSetting.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doPushSetting(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * 위치 정보 사용 동의 설정 결과 (Web to App)
 *
 * @param agreeYn
 * @param message
 * @returns
 */
function doLocationSetting(agreeYn, message) {
	var	jsonData	= {"loc_agree" : agreeYn, "result_message" : message};

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doLocationSetting' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doLocationSetting.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doLocationSetting(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * SNS 로그인 버튼 클릭 (Web to App)
 *
 * @param snsCode
 * @returns
 */
function doClickSNSLogin(snsCode, state) {
	if(!state) {
		state = 'SNS_LOGIN';
	}
	var jsonData = {
		type: snsCode,
		state: state
	};

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doClickSNSLogin' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doClickSNSLogin.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doClickSNSLogin(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * 자동 로그인 필요 시 App 호출 (Web to App)
 *
 * @returns
 */
function doCheckAutoLogin() {
	try {
		if('ios' == currentOS) {
			window.webkit.messageHandlers.doCheckAutoLogin.postMessage('');
		} else if ('android' == currentOS) {
			Android_lj.doCheckAutoLogin();
		}
	} catch(e) {}
}

/** 로그아웃 시 App 호출 (Web to App) */
function doLogOut() {
	try {
		if('ios' == currentOS) {
			window.webkit.messageHandlers.doLogOut.postMessage('');
		} else if ('android' == currentOS) {
			Android_lj.doLogOut();
		}
	} catch(e) {}
}

/** doNLogin 실패한 경우 or 토큰이 비정상인 경우 (Web to App) */
function doLogOutClean() {
	try {
		if ('ios' == currentOS) {
			window.webkit.messageHandlers.doLogOutClean.postMessage('');
		} else if ('android' == currentOS) {
			/** STG용 (삭제 예정) */
			Android_lj.doLogOutClean('');
		}
	} catch(e) {
		try {
			/** PRD용 */
			Android_lj.doLogOutClean();
		} catch(e1) {
		}
	}
}

/**
 * QR코드 버튼 클릭 시 App 호출 (Web to App)
 *
 * @returns
 */
function doNQRRead() {
	try {
		if('ios' == currentOS) {
			window.webkit.messageHandlers.doNQRRead.postMessage('');
		} else if ('android' == currentOS) {
			Android_lj.doNQRRead();
		}
	} catch(e) {}
}

/**
 * PDF 파일 클릭 시 App 호출 (Web to App)
 *
 * @param pdfUrl
 * @returns
 */
function doNPdfReader(pdfUrl) {
	var	domain		= location.protocol + '//' + location.host;

	if ('' != location.port) {
		domain	+= ':' + location.port;
	}

	var	jsonData	= {"url" : domain + '/' + pdfUrl};

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doNPdfReader' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doNPdfReader.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doNPdfReader(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * SMS 인증 버튼 클릭 시 App 호출 (Web to App)
 *
 * @param telNo
 * @returns
 */
function doNSMSReceive(telNo) {
	var	jsonData	= {"telnum" : telNo};

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doNSMSReceive' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doNSMSReceive.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doNSMSReceive(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * 외부 App (SNS 등) 실행 호출 (Web to App)
 * doNUrlSchemeRun	: iOS (scheme)
 * doNPackageRun	: Android (package)
 *
 * @param scheme
 * @returns
 */
function doExternalAppRun(param) {
	var	jsonData	= {};

	if ('ios' == currentOS) {
		jsonData['scheme']	= param;
	} else if ('android' == currentOS) {
		jsonData['package']	= param;
	}

	try {
		var	jsonString			= JSON.stringify(jsonData);
		var	escapedJsonParam	= escape(jsonString);

		if ('ios' == currentOS) {
//			var	url	= 'lj://doNUrlSchemeRun' + '#' + escapedJsonParam;
//			document.location.href	= url;
			window.webkit.messageHandlers.doNUrlSchemeRun.postMessage(jsonData);
		} else if ('android' == currentOS) {
			Android_lj.doNUrlSchemeRun(escapedJsonParam);
		}
	} catch(e) {}
}

/**
 * '여권 리더' 버튼 클릭 시 App 호출 (Web to App)
 *
 * @returns
 */
function doOCRRead(index) {
	psptIdx	= index;

	try {
		if ('ios' == currentOS) {
//			var	url	= 'lj://doOCRRead';
//			document.location.href	= url;
			window.webkit.messageHandlers.doOCRRead.postMessage('');
		} else if ('android' == currentOS) {
			Android_lj.doOCRRead('');
		}
	} catch(e) {}
}

/**
 * App 실행 시 1회 호출 (App to Web)
 *
 * @deprecated
 */
function doAccessApp() {
	try {
		$.ajax({
			type	: "POST",
			url		: "/mobileApp/ajaxSaveMobileAccess",
			dataType: "text",
			contentType	: "application/json; charset=UTF-8",
			beforeSend: function(xhr) {
				if ((null == _csrfHeader) || (null == _csrfToken)) {
					parseCsrf();
				}
				xhr.setRequestHeader(_csrfHeader, _csrfToken);
			},
			success	: function(data) {
				if ('E' == data) {
					alertLayer($.i18n.prop('cmm.msg.alert.error'));
				}
			},
			error	: function(data) {
				alertLayer($.i18n.prop('cmm.msg.alert.error'));
			}
		});
	} catch (e) {}
}

/**
 * 로그인 처리 후 기기정보 전송 (App to Web)
 *
 * @param param
 * @returns
 */
function doNLogin(param) {
	/*
		param 구조
		{
			"user_id"		: '',
			"token"			: '',
			"os_type"		: '',
			"app_version"	: '',
			"model"			: '',
			"os_version"	: '',
			"app_language"	: ''
		}
	*/
	/*var tokenCheck = param.token;
	if (tokenCheck == null || tokenCheck == ''  || tokenCheck == "BLACKLISTED" ||  tokenCheck.length < 6) {
		doLogOutClean();
		return;
	}*/

	$.ajax({
		type: 'post',
		url: '/mobileApp/ajaxSaveAppLoginInfo',
		data: {
			id: param.user_id,
			dvcTknNo: param.token,
			osTypCd: param.os_type,
			osVrsn: param.os_version,
			appLang: param.app_language,
			appVrsn: param.app_version,
			modelNo: param.model
		},
		dataType: 'text',
		beforeSend: function(xhr) {
			xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
		}
	}).done(function(data) {
		if(data === 'E') {
			doLogOutClean();
		}
	}).fail(function() {
		doLogOutClean();
	});
}

/** 로그인 처리 후 푸시 수신 동의 설정 결과값 전송 (App to Web) */
function setPushAgree(param) {
	/*
		param 구조
		{
			"user_id"		: '',
			"push_agree"	: ''
		}
	*/
	$.ajax({
		type: "POST",
		url: "/mobileApp/ajaxSaveSmsReceiveAgreeInfo",
		data: {
			"agrYn"	: param.push_agree
		},
		dataType: "text",
		success	: function(data) {
			if('E' == data) {
				alertLayer($.i18n.prop('cmm.msg.alert.error'));
			}
		},
		beforeSend: function(xhr) {
			if ((null == _csrfHeader) || (null == _csrfToken)) {
				parseCsrf();
			}
			xhr.setRequestHeader(_csrfHeader, _csrfToken);
		},
		error: function(data) {
			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		}
	});
}

/**
 * 로그인 처리 후 위치 정보 사용 동의 설정 결과값 전송 (App to Web)
 *
 * @param param
 * @returns
 */
function setLocAgree(param) {
	/*
		param 구조
		{
			"user_id"	: '',
			"loc_agree"	: ''
		}
	*/
	$.ajax({
		type: "POST",
		url: "/mobileApp/ajaxSaveLocationUseAgreeInfo",
		data: {
			"agrYn"	: param.loc_agree
		},
		dataType: "text",
		beforeSend: function(xhr) {
			if ((null == _csrfHeader) || (null == _csrfToken)) {
				parseCsrf();
			}
			xhr.setRequestHeader(_csrfHeader, _csrfToken);
		},
		success: function(data) {
			if ('E' == data) {
				alertLayer($.i18n.prop('cmm.msg.alert.error'));
			}
		},
		error: function(data) {
			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		}
	});
}

/**
 * SNS 로그인 (App to Web)
 *
 *	sample param
 *	{
 *		"type": "08",
 *		"sns_id": "1342054711",
 *		"state": "SNS_LOGIN",
 *		"kakao_account_indicator": "Dw8u...8g=="
 *	}
 */
function doSNSLogin(param) {
	if(param.type === '08') {
		kakaoCallbackFromApp(param);
		return;
	}

	var snsTypCd = param.type;
	var state = param.state;
	var snsId = param.sns_id;
	if(param.state === 'MYPAGE_SNS_CONNECT') {
		switch(param.type) {
		case '02': case '06': case '09':
			activeSnsLogin({snsTypCd: snsTypCd, snsId: snsId});
			break;
		}

		return;
	}

	showLoading();
	$.ajax({
		type: 'post',
		url: '/login/loginProcess',
		data: {
			accessFrom: '07',
			snsType: snsTypCd,
			snsId: snsId
		},
		dataType: 'json',
		beforeSend: function(xhr) {
			xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
		}
	}).done(function(data) {
		hideLoading();

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
			case 'SNS_CONNECT_NOT_EXISTS':
				alertLayer($.i18n.prop('hom.user.msg.alert.sns.notconnect'));
				break;
			default:
				alertLayer($.i18n.prop('hom.user.msg.alert.loginError'));
				break;
			}

			var $id = this.$form.find('[name="id"]');
			$id.focus();
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

		var returnUrl = !!$('[name="returnUrl"]').val() ? $('[name="returnUrl"]').val() : '/';
		if(!!returnUrl) {
			returnUrl = returnUrl.replace(/&amp;/g, '&');
		}

		if(data.requireChangePassword) {
			top.location.href = "/member/pwChange?returnUrl=" + encodeURIComponent(returnUrl);
			return;
		}

		top.location.href = returnUrl;
	}).fail(function() {
		hideLoading();
		alertLayer($.i18n.prop('cmm.msg.alert.error'));
	});
}

function kakaoCallbackFromApp(param) {
	var snsTypCd = param.type;
	var snsId = param.sns_id;
	var ci = param.kakao_account_indicator;

	var requestParam = {crfcCi : ci, snsId : snsId, snsTypCd : snsTypCd};

	if(param.state === 'KAKAO_ACTIVATE') {
		SNS.onSignedIn({
			kakaoAccountIndicator: param.kakao_account_indicator,
			state: param.state
		});
		return;
	}

	var state = null;
	findPageYn = $('.findType').find("input[name='find']:checked").val() != undefined ? true : false;
	if(!loginSessionYn && !findPageYn) {
		state = 'SNS_LOGIN';
	} else if(!loginSessionYn && findPageYn) {
		state = 'FIND_MEMBER';
	} else {
		state = 'MYPAGE';
	}

	var find = $('.findType').find("input[name='find']:checked").val();
	kakaoLogInfo({
		snsId: snsId,
		snsTypCd : snsTypCd,
		find: find
	});

	showLoading();

	$.ajax({
		url : "/snsLogin/getFindMemberInfo",
		type : "post",
		dataType : "json",
		data : JSON.stringify(requestParam),
		contentType: 'application/json',
		beforeSend: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}
	}).done(function(data, textStatus, xhr) {
		hideLoading();

		//로그인 상태가 아니고 카카오 인증 요청으로 로그인 할 경우..회원 정보를 검색하여 로그인 처리..
		if(state === 'SNS_LOGIN') {
			goSnsLogin(snsTypCd, requestParam);
			return;
		}

		//로그인 상태가 아니고 아이디/비밀번호 찾기 화면일 경우..
		if(state === 'FIND_MEMBER') {
			if(data.resultCode == '01' || data.resultCode == '02') {
				//아이디 찾기 일 경우..해당 아이디 표출 화면으로 이동한다..
				if(find == 'findId') {
					top.location.href="/login/findIdPw/resultId";
					return;
				} else if(find == 'findPw') {
					showLoading();

					var frm = document.pwFindForm;
					frm.mbrLnm.value = data.indvMbr.mbrLnm;
					frm.mbrFnm.value = data.indvMbr.mbrFnm;
					frm.bthDt.value = data.indvMbr.bthDt;
					frm.emAdr.value = data.indvMbr.emAdr;
					frm.id.value = data.indvMbr.id;

					$.ajax({
						url : "/login/findIdPw/emailAuthPw",
						type : "post",
						data	: $('#pwFindForm').serialize(),
						beforeSend: function(xhr) {
							var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
							var	csrfToken	= $("meta[name='_csrf']").attr("content");
							xhr.setRequestHeader(csrfHeader, csrfToken);
						}
					}).done(function(data, textStatus, xhr) {
						hideLoading();

						if(data === 'S') {
							top.location.href	= '/login/findIdPw/resultPw'; //회원 임시 비밀번호 발급 페이지 이동..
							return;
						} else if(data === 'I') {
							top.location.href	= '/login/findIdPw/noResult'; //회원 정보없음 페이지
							return;
						}
					}).fail(function(xhr, status, errorThrown) {
						hideLoading();
					});
					return;
				}
			}

			if(data.resultCode === '03') {
				if(find === 'findId') {
					top.location.href="/login/findIdPw/resultId?inactive=true";
				} else if(find === 'findPw') {
					top.location.href="/login/findIdPw?flag=inact";
				}
				return;
			}

			if(data.resultCode === '04') {
				top.location.href="/find/noFindResultId";
				return;
			}
		}

		if(state === 'MYPAGE') {
			top.location.reload();
		}
	}).fail(function(xhr, status, errorThrown) {
		hideLoading();
	});
}

/**
 * 자동 로그인 (App to Web)
 *
 * @param param
 * @returns
 */
function doAutoLogin(param) {
	/*
		param 구조
		{
			"type"		: '', // 20200818 삭제됨
			"sns_id"	: '', // 20200818 삭제됨
			"user_id"	: '',
			"token"		: ''
		}
	*/

	var tokenCheck = param.token;
	if(tokenCheck == null || tokenCheck == ''  || tokenCheck == "BLACKLISTED" ||  tokenCheck.length < 6) {
		doLogOutClean();
		return;
	}

	/*if(('01' == param.type) || ('02' == param.type) || ('05' == param.type) || ('06' == param.type)) {
		doSNSLogin({
			type: param.type,
			sns_id: param.sns_id
		});
		return;
	}*/

	// 일반 회원 로그인
	$.ajax({
		type: 'post',
		url: '/login/loginProcess',
		data: 'accessFrom=01&id=' + param.user_id + '&dvcTkn=' + param.token + '&returnUrl=' + encodeURIComponent(location.href),
		dataType: 'json',
		beforeSend: function(xhr) {
			var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
			var csrfToken = $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}
	}).done(function(data) {
		if(!!data.errorCode) {
			doLogOutClean();

			switch(data.errorCode) {
			case 'INACTIVE':
				top.location.href = "/login/findIdPw?flag=inact";
				break;
			case 'INVALID_PW':
				alertLayer($.i18n.prop('hom.user.msg.alert.loginCount', data.errorArguments[0]));
				break;
			case 'BLOCKED':
				alertMessage('hom.user.msg.alert.loginBlock');
				break;
			case 'INVALID_DEVICE':
				alertMessage('hom.user.msg.alert.loginDvc');
				break;
			default:
				alertMessage('hom.user.msg.alert.loginError');
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

		var returnUrl = !!data.returnUrl ? data.returnUrl : '/';
		if(-1 < returnUrl.indexOf('/login')) {
			returnUrl	= '/';
		} else if((-1 < returnUrl.indexOf('/lateLogin')) || (-1 < returnUrl.indexOf('/checkinLogin'))) {
			if (-1 < returnUrl.indexOf('returnUrl=')) {
				var	url	= returnUrl.substring(returnUrl.indexOf('returnUrl=') + 10);
				returnUrl = unescape(url);
			} else {
				returnUrl = '/';
			}
		}

		if(data.requireChangePassword) {
			top.location.href = "/member/pwChange?returnUrl=" + encodeURIComponent(returnUrl);
			return;
		}

		top.location.href = returnUrl;
	}).fail(function() {
		if(!param.again) {
			Android_lj.doNotToken();
		}
	}).always(function() {
		hideLoading();
	});
}

function doNGetToken(params) {
	if(!params) {
		return;
	} else if(!params.user_id) {
		return;
	} else if(!params.token) {
		return;
	}

	params.again = true;

	doAutoLogin(params);
}

/**
 * QR코드 데이터 입력 (App to Web)
 *
 * @param param
 * @returns
 */
function doQRSetting(param) {
	/*
		param 구조
		{
			"qrcode"	: ''
		}
	*/
	try {
		if (param.qrcode) {
			$('#pnrNo').val(param.qrcode);
		}
	} catch(e) {}
}

/**
 * SMS 인증번호 입력 (App to Web)
 * @deprecated
 * @param param
 * @returns
 */
function doSMSReceive(param) {
	/*
		param 구조
		{
			"cer_num"	: ''
		}
	*/
}

/**
 * 여권 정보 입력 (App to Web)
 *
 * @param param
 * @returns
 */
function doOCRSetting(param) {
	/*
		param 구조
		{
			"firstName"			: '',
			"lastName"			: '',
			"sex"				: '',
			"dateOfBirth"		: '',
			"region"			: '',
			"passportNumber"	: '',
			"expirationDate"	: '',
			"issuingContry"		: ''
		}
	*/
	if (-1 == psptIdx) {
		return;
	}

	$(':input[name=firstName]:eq(' + psptIdx + ')').val(param.firstName);
	$(':input[name=lastName]:eq(' + psptIdx + ')').val(param.lastName);

	if ('M' == param.sex) {
		$('#male' + psptIdx).attr('checked', true);
	} else {
		$('#female' + psptIdx).attr('checked', true);
	}

	$(':input[name=dateOfBirth]:eq(' + psptIdx + ')').val(param.dateOfBirth);
	$(':input[name=nationality]:eq(' + psptIdx + ')').val(param.region);
	$(':input[name=documentNumber]:eq(' + psptIdx + ')').val(param.passportNumber);
	$(':input[name=dateOfExpiry]:eq(' + psptIdx + ')').val(param.expirationDate);
	$(':input[name=issuingCountry]:eq(' + psptIdx + ')').val(param.issuingContry);

	psptIdx	= -1;
}

/**
 * 로그인 여부 확인 (App to Web)
 *
 * @returns
 */
function isLogin() {
	return isLoginYn;
}

/**
 * e-서식함 다운로드
 * 모바일 PDF 다운로드와 함께 사용하기 위해 여기에 구현
 */
function eFormDownload(filename) {
	if((undefined == typeof filename) || (null == filename) || ('' == filename)) {
		return;
	}

	var tempDate = new Date();
	var parameterDate = '?' + tempDate.getFullYear() + (tempDate.getMonth() + 1) + tempDate.getDate();

	var	fullpath	= '//' + imageServer + '/eForm/' + filename + parameterDate;

	if (isMobileOS) {
		if (-1 < filename.toLowerCase().indexOf('.pdf')) {
			try {
				if ('ios' == currentOS) {
					var	jsonData	= {"url" : fullath};

//					var	url	= 'lj://doNPdfReader' + '#' + escapedJsonParam;
//					document.location.href	= url;
					window.webkit.messageHandlers.doNPdfReader.postMessage(jsonData);
				} else if ('android' == currentOS) {
					var	appPath		= encodeURIComponent(fullpath);
					var	jsonData	= {"url" : appPath};

					var	jsonString			= JSON.stringify(jsonData);
					var	escapedJsonParam	= escape(jsonString);

					Android_lj.doNPdfReader(jsonString);
				}
			} catch(e) {
				window.open(fullpath, 'download');
			}
		} else {
			window.open(fullpath, 'download');
		}
	} else {
		window.open(fullpath, 'download');
	}
}

function callNPdfReaderIfMobileApp(url) {
	var fullpath = null;
	if(url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
		fullpath = url;
	} else if(url.indexOf('//') === 0) {
		fullpath = url;
	} else if(url.indexOf('/') === 0) {
		fullpath = location.protocol + '//' + location.host + url;
	}
	if(!fullpath) {
		return;
	}

	fullpath += fullpath.indexOf('?') !== -1 ? '&' : '?';
	fullpath += '_=' + (new Date()).getTime();

	if(!isMobileOS) {
		window.open(fullpath, 'download');
		return;
	}

	try {
		if('ios' == currentOS) {
			window.webkit.messageHandlers.doNPdfReader.postMessage({url: fullpath});
		} else if('android' == currentOS) {
			var jsonData = {url: encodeURIComponent(fullpath)};
			var jsonString = JSON.stringify(jsonData);
			var escapedJsonParam = escape(jsonString);
			Android_lj.doNPdfReader(escapedJsonParam);
		}
	} catch(e) {
		window.open(fullpath, 'download');
	}
}

/** @Depreacted */
function goEditForm() {
	location.href	= "/mypage/editMemberForm";
}

/** App to Web */
function doNGoolgeUserID(value) {
	if(!value) {
		return;
	}

	var params = {
		snsId: value.Id,
		snsTypCd: '05',
		acsTkn: value.IdToken,
		tknExprTm: 3600
	};
	activeSnsLogin(params);
}

/** 앱에서 새 창 열기 (Web to App) */
function doWebURL(url) {
	try {
		if('ios' == currentOS) {
			window.webkit.messageHandlers.doWebUrl.postMessage(url);
		} else if ('android' == currentOS) {
			Android_lj.doWebUrl(url);
		}
	} catch(e) {
		window.open(url, 'blank');
	}
}

function connectLinkedInCallback(params) {
	if(!params) {
		return;
	}

	params.snsTypCd = '06';
	activeSnsLogin(params);
}

function alertMessage(code) {
	var msg = $.i18n.map[code];
	if(!!msg) {
		alertLayer($.i18n.prop(code));
		return;
	}

	var codes = [];
	codes.push(code);

	if(!$.i18n.map['lj.ibe.b2c.rsv.079']) {
		codes.push('lj.ibe.b2c.rsv.079');
	}

	$.ajax({
		type: 'get',
		url: '/messages?codes=' + codes.join(','),
		dataType: 'json'
	}).done(function(data) {
		for(var key in data) {
			$.i18n.map[key] = data[key];
		}

		alertLayer($.i18n.prop(code));
	}).fail(function() {
		alertLayer('서버 에러 발생');
	});
}

function confirmMessage(code) {
	var msg = $.i18n.prop(code);
	if(!!msg && ('[' + code + ']') !== msg) {
		confirmLayer(msg);
		return;
	}

	$.ajax({
		type: 'get',
		url: '/messages?codes=' + code + ',lj.ibe.b2c.rsv.079',
		dataType: 'json'
	}).done(function(data) {
		for(var key in data) {
			$.i18n.map[key] = data[key];
		}

		confirmLayer($.i18n.prop(code));
	});
}

function doDeviceVersion(params) {
	if(!params || !params.DeviceVersion) {
		return;
	}

	try {
		var deviceOS = 'ELSE';
		var userAgent = navigator.userAgent.toLowerCase();
		if(/android/i.test(userAgent)) {
			deviceOS = 'ANDROID';
		} else if(/iphone|ipad|ipod/i.test(userAgent)) {
			deviceOS = 'IOS';
		}

		$.ajax({
			type: 'post',
			url: '/mobileApp/ajaxSaveMobileAccess?appVersion=' + params.DeviceVersion + '&deviceOS=' + deviceOS,
			dataType: 'text',
			contentType: 'application/json; charset=UTF-8',
			beforeSend: function(xhr) {
				xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
			},
			success: function(data) {
				if('E' == data) {
					alertLayer($.i18n.prop('cmm.msg.alert.error'));
				}
			},
			error: function(data) {
				alertLayer($.i18n.prop('cmm.msg.alert.error'));
			}
		});
	} catch(e) {}
}

function getLocationPermissionEnable() {
	try {
		if('ios' === currentOS) {
			window.webkit.messageHandlers.getLocationPermissionEnable.postMessage();
		} else if('android' === currentOS) {
			Android_lj.getLocationPermissionEnable();
		}
	} catch(e) {
	}
}

function MobileApps() {
}

MobileApps.callIfExists = function(interfaceName, params) {
	try {
		MobileApps.call(interfaceName, params);
	} catch(e) {
	}
};

MobileApps.call = function(interfaceName, params) {
	if('ios' === currentOS) {
		window.webkit.messageHandlers[interfaceName].postMessage(params);
	} else if('android' === currentOS) {
		Android_lj[interfaceName](params);
	}
};