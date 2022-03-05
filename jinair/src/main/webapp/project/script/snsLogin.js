


/**
 * 개인회원 SNS 로그인
 */
var facebookClientId = '256288011480510';
var facebookSdkUrl = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.10';

var kakaoClintId = '17d648ba7c5b43de00d599333e8f5722';
var kakaoAuthUrl = 'https://kauth.kakao.com/oauth';

var googleClientId = '313991584718-7a4r8ujon8090n7qqllb1bflm2p5o23b.apps.googleusercontent.com';
var googleCodeUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
var googleScopeUrl = 'https://www.googleapis.com/auth/userinfo.profile';

var callBack;
var loginSessionYn;
var findPageYn;

$(function() {
	callBack = location.protocol + '//www.jinair.com/snsLogin/snsCallback';

	//로그인화면/수정화면 구분용e
	loginSessionYn = $("#mbrNo").val() != undefined ? true : false;

	//페이스북 SDK init
	window.fbAsyncInit = function() {
		FB.init({appId: facebookClientId, status: true, cookie: true, xfbml: true, version : 'v2.10'});
	};
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s);
		js.id = id;
		js.src = facebookSdkUrl;
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	$('[role="btn-sns"]').on('click', function() {
		var snsTypeCode = $(this).data('sns-type-code');
		var state = $(this).data('state');

		if(__global__.isApp) {
			doClickSNSLogin(snsTypeCode, state);
			return;
		}

		if(snsTypeCode === '01') {
			FB.getLoginStatus(function(response) {
				var conn = response.status === 'connected';
				if(!conn) {
					facebookLoginReq();
					return;
				}

				var snsTypCd = "01";
				var snsId = response.authResponse['userID'];
				var acsTkn = response.authResponse['accessToken'];
				var tknExprTm = response.authResponse['expiresIn'];
				var param = {snsTypCd: snsTypCd, snsId: snsId, acsTkn: acsTkn, tknExprTm: tknExprTm};
				goSnsLogin(snsTypCd, param);
			});
		} else if(snsTypeCode === '02') {
			naverLoginReq(state);
		} else if(snsTypeCode === '05') {
			googleLoginReq(state)
		} else if(snsTypeCode === '06') {
			linkedinLoginReq(state);
		} else if(snsTypeCode === '08') {
			kakaoLoginReq(state);
		} else if(snsTypeCode === '09') {
			appleLoginReq(state);
		}
	});

	/* 수정화면 - 각 SNS버튼 클릭시 */
	$(".updateSnsLogin").click(function(){
		var snsTypCd = $(this).data('sns-type-code');
		if(!snsTypCd) {
			snsTypCd = $(this).next("input[name='snsTypCd']").val();
		}
		var snsId = $(".sns" + snsTypCd + ".snsId").val();
		var loginYn = $(".sns" + snsTypCd + ".loginYn").val();
		if('Y' == loginYn) {
			//비활성화
			confirmLayer2($.i18n.prop('cmm.msg.lbl.snsCancelConfirm'), function() {inactiveSnsLogin(snsId, snsTypCd);}, 'hideConfirmLayer');
			return;
		}

		var state = 'MYPAGE_SNS_CONNECT';

		//활성화
		if ("01" == snsTypCd) { /*페이스북*/
			FB.login(function(response) {
				if(response.status === 'connected') {
					$("#acsTkn").val(response.authResponse['accessToken']);
					$("#tknExprTm").val(response.authResponse['expiresIn']);

					snsId = response.authResponse['userID'];
					var acsTkn = response.authResponse['accessToken'];
					var tknExprTm = response.authResponse['expiresIn'];

					var param = {snsTypCd : snsTypCd, snsId : snsId, acsTkn : acsTkn, tknExprTm : tknExprTm};
					activeSnsLogin(param);
				}
			}, {auth_type: 'reauthenticate'})
		} else if ("02" == snsTypCd) { /*네이버*/
			naverLoginReq(state);
		} else if ("05" == snsTypCd) { /*구글+*/
			googleLoginReq();
		} else if ("06" == snsTypCd) { /*링크드인*/
			linkedinLoginReq(state);
		} else if ("08" == snsTypCd) { /*카카오*/
			kakaoLoginReq();
		} else if ("09" == snsTypCd) { /*애플*/
			appleLoginReq(state);
		}
	});
});

// 페이스북 로그인 요청
function facebookLoginReq() {
	FB.login(function(response) {
		if(!response) {
			return;
		}

		var conn = response.status === 'connected';
		if(!conn) {
			return;
		}

		var auth = response.authResponse;
		if(!auth) {
			return;
		}

		//로그인 성공
		var snsTypCd = "01";
		var snsId = auth['userID'];
		var acsTkn = auth['accessToken'];
		var tknExprTm = auth['expiresIn'];
		var param = {snsTypCd : snsTypCd, snsId : snsId, acsTkn : acsTkn, tknExprTm : tknExprTm};
		goSnsLogin(snsTypCd, param);
	});
}

// 네이버 로그인 요청
function naverLoginReq(state) {
	if(__global__.isApp) {
		doClickSNSLogin('02', state);
		return;
	}

	var NAVER_AUTHORIZE_URL = 'https://nid.naver.com/oauth2.0/authorize';
	var NAVER_CLIENT_ID = 'g6221zBJBwhp9_WJQ9eX';

	var params = []
	params.push('response_type=code');
	params.push('client_id=' + NAVER_CLIENT_ID);
	params.push('redirect_uri=' + encodeURIComponent(callBack));
	params.push('state=NAVER|' + state);
	params.push('scope=none');

	var url = NAVER_AUTHORIZE_URL + '?' + params.join('&');
	openWindow(url, 'naver login', 445, 500, 'yes');
}

// 구글 로그인 요청
function googleLoginReq(state) {
	if(__global__.isApp) {
		doClickSNSLogin('05', state);
		return;
	}

	var url = '';
	if(!!googleCodeUrl && !!googleScopeUrl) {
		url = googleCodeUrl
			+ "?scope=" + encodeURIComponent(googleScopeUrl)
			+ "&access_type=offline"
			+ "&include_granted_scopes=true"
			+ "&state=GOOGLE"
			+ "&redirect_uri=" + encodeURIComponent(callBack)
			+ "&response_type=code"
			+ "&client_id=" + googleClientId;
		openWindow(url, "google Login", 445, 500, "yes");
	}
}

// 링크드인 로그인 요청
function linkedinLoginReq(state) {
	if(__global__.isApp) {
		if('ios' == currentOS) {
			doClickSNSLogin('06', state);
			return;
		} else if ('android' == currentOS) {
			Android_lj.connectLinkedIn();
			return;
		}
	}

	var LINKEDIN_AUTHORIZATION_URL = 'https://www.linkedin.com/oauth/v2/authorization';
	var LINKEDIN_CLIENT_ID = '81btinfblja9q2';

	var params = [];
	params.push('scope=r_liteprofile');
	params.push('state=LINKEDIN');
	params.push('redirect_uri=' + encodeURIComponent(callBack));
	params.push('response_type=code');
	params.push('client_id=' + LINKEDIN_CLIENT_ID);

	var url = LINKEDIN_AUTHORIZATION_URL + '?' + params.join('&');
	openWindow(url, "linkedin Login", 445, 500, "yes");
}

// SNS 콜백 실패시 - 비정상적접근
function snsCallbackFail(code) {
	alertLayer($.i18n.prop('cmm.msg.alert.error'));
}

//구글 콜백 성공시
function googleCallback(code) {
	var snsTypCd = "05";
	var acsTkn = "";
	var udTkn = "";
	var tknTyp = "";
	var tknExprTm = "";
	var snsId = "";
	$.ajax({
		url : "/snsLogin/getGoogleAcsTkn"
	  , type : "post"
	  , data : {code:code}
	  , dataType : "json"
	  , beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);}
	  , success : function(result) {
			if (result.error != null) {
				alertLayer("에러가 발생하였습니다.");
				return;
			}

			acsTkn = result.access_token;
			tknTyp = result.token_type;
			tknExprTm = result.expires_in;
			$.ajax({
				url : "/snsLogin/getGoogleUserInfo"
			  , type : "post"
			  , data : {acsTkn:acsTkn}
			  , dataType : "json"
			  , beforeSend: function(xhr) {
					var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
					var csrfToken = $('meta[name="_csrf"]').attr('content');
					xhr.setRequestHeader(csrfHeader, csrfToken);}
			  , success : function(result) {
					if ("" != result.id) {
						snsId = result.id;
						var param = {snsTypCd : snsTypCd, snsId : snsId, acsTkn : acsTkn, udTkn:udTkn, tknExprTm : tknExprTm, tknTyp:tknTyp};
						if (!loginSessionYn) {//로그인화면용
							goSnsLogin(snsTypCd, param);
						} else { //수정화면용
							activeSnsLogin(param);
						}
					}
				}
			  , error:function(request, status, error) {
				}
			});
		}
	  , error:function(request, status, error) {
		}
	});
}

//링크드인 로그인 콜백성공시
function linkedinCallback(code) {
	var snsTypCd = "06";
	var acsTkn = "";
	var udTkn = "";
	var tknTyp = "";
	var tknExprTm = "";
	var snsId = "";
	$.ajax({
		url : "/snsLogin/getLinkedinAcsTkn"
	  , type : "post"
	  , data : {code:code}
	  , dataType : "json"
	  , beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);}
	  , success : function(result) {
			if (result.error != null) {
				//alert($.i18n.prop("cmm.msg.alert.error"));
			} else {
				acsTkn = result.access_token;
				tknExprTm = result.expires_in;
				$.ajax({
					url : "/snsLogin/getLinkedinUserInfo"
				  , type : "post"
				  , data : {acsTkn:acsTkn}
				  , dataType : "json"
				  , beforeSend: function(xhr) {
						var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
						var csrfToken = $('meta[name="_csrf"]').attr('content');
						xhr.setRequestHeader(csrfHeader, csrfToken);}
				  , success : function(result) {
						if ("" != result.id) {
							snsId = result.id;
							var param = {snsTypCd : snsTypCd, snsId : snsId, acsTkn : acsTkn, udTkn:udTkn, tknExprTm : tknExprTm, tknTyp:tknTyp};
							if (!loginSessionYn) {//로그인화면용
								goSnsLogin(snsTypCd, param);
							} else { //수정화면용
								activeSnsLogin(param);
							}
						}
					}
				  , error:function(request, status, error) {
					}
				});
			}
		}
	  , error:function(request, status, error) {
			//alert($.i18n.prop("cmm.msg.alert.error"));
		}
	});
}

//네이버 접근토큰 삭제요청
function deleteNaverAcsTkn(){
	$.ajax({
		url : "/snsLogin/deleteNaverAcsTkn"
	  , type : "post"
	  , dataType : "json"
	  , beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);}
	  , success : function(result) {
			if ("success" == result.result) {
				  location.reload();
			}
		}
	 , error:function(request, status, error){
		 //alert($.i18n.prop("cmm.msg.alert.error"));
		}
	});
}

//구글 접근토큰 삭제요청
function deleteGoogleAcsTkn(){
	$.ajax({
		url : "/snsLogin/deleteGoogleAcsTkn"
	  , type : "post"
	  , dataType : "json"
	  , beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);}
	  , success : function(result) {
			location.reload();
		}
	 , error : function(request, status, error){
	 	location.reload();
		//alert($.i18n.prop("cmm.msg.alert.error"));
		}
	});
}

//링크드인 접근토큰 삭제요청
function deleteLinkedinAcsTkn(){
	$.ajax({
		url : "/snsLogin/deleteLinkedinAcsTkn"
	  , type : "post"
	  , dataType : "json"
	  , beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);}
	  , success : function(result) {
			location.reload();
		}
	 , error : function(request, status, error){
	 	location.reload();
		//alert($.i18n.prop("cmm.msg.alert.error"));
		}
	});
}

//로그인화면 - 진에어 로그인처리
function goSnsLogin(snsTypCd, param) {
	showLoading();
	$.ajax({
		type: 'post',
		url: '/login/loginProcess',
		data: {
			accessFrom: '07',
			snsType: param.snsTypCd,
			snsId: param.snsId
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
			case 'MBR_REQUIRED':
				top.location.href = "/login/findIdPw?flag=mbrReq";
				break;
			case 'MBR_REQUIRED_MOD':
				top.location.href = "/login/findIdPw/memberModify?flag=mbrReq";
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

		if($('#mType').val() === 'availpromotion') {
			parent.fnAfterPromotionLogin();
			hidePopupLayer();
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

//수정화면 - SNS로그인활성화
function activeSnsLogin(param) {
	$.ajax({
		type	: "POST",
		url		: "/snsLogin/activeSnsLogin",
		data	: param,
		beforeSend: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success	: function(data) {
			if ('S' == data) {
				location.reload();
			} else if ('X' == data) {
				alertLayer($.i18n.prop('hom.mem.validate.043'));
			}
		},
		error	: function(data) {
			//alertLayer($.i18n.prop('cmm.msg.alert.error'));
		}
	});
}

//수정화면 - SNS로그인비활성화
function inactiveSnsLogin(snsId, snsTypCd){
	$.ajax({
		type	: "POST",
		url		: "/snsLogin/inactiveSnsLogin",
		data	: {snsId : snsId, snsTypCd : snsTypCd},
		beforeSend: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		},
		success	: function(data) {
			if ('S' == data) {
				if ('01' == snsTypCd) { /*페이스북*/
					FB.logout(function(response) {
						location.reload();
					});
				} else if ("02" == snsTypCd) { /*네이버*/
					deleteNaverAcsTkn();
				} else if ("05" == snsTypCd) { /* 구글 */
					deleteGoogleAcsTkn();
				} else if ("06" == snsTypCd) { /*링크드인*/
					deleteLinkedinAcsTkn();
				} else if ("08" == snsTypCd) { /*카카오*/
					deleteKakaoAcsLink();
				} else if ("09" == snsTypCd) { /*카카오*/
					location.reload();
				}
			}
		},
		error	: function(data) {
			//alertLayer($.i18n.prop('cmm.msg.alert.error'));
		}
	});
}
//팝업
function openWindow(openURL, title, width, height, scrollbars, needReturn){
	var screenWidth = window.screen.availWidth;
	var screenHeight = window.screen.availHeight;
	var top = ( screenHeight - height - 20 ) / 2;
	var left = (screenWidth - width) / 2;

	window.name = 'jinairParent';
	title = window.open(openURL, '', 'top = ' + top + ', left = ' + left + ',width=' + width + ', height=' + height + ', resizable=no, status=yes, toolbar=no, menubar=no, scrollbars=' + scrollbars);
	title.focus();

	if (needReturn == undefined || needReturn == true) {

		return title;
	}
}

//카카오로그인 요청
function kakaoLoginReq() {
	if(__global__.isApp) {
		doClickSNSLogin('08');		// mobile App 연계
		return;
	}

	var url = kakaoAuthUrl + "/authorize?client_id=" + kakaoClintId
	+ "&redirect_uri=" + encodeURIComponent(callBack)
	+ "&response_type=code"
	+ "&state=KAKAO";
	openWindow(url, "kakao login", 445, 500, "yes");
}

// 카카오 콜백 성공시
function kakaoCallback(code) {
	var state = null;
	findPageYn = $('.findType').find("input[name='find']:checked").val() != undefined ? true : false;
	if(!loginSessionYn && !findPageYn) {
		state = 'SNS_LOGIN';
	} else if(!loginSessionYn && findPageYn) {
		state = 'FIND_MEMBER';
	} else {
		state = 'MYPAGE';
	}

	if(typeof __page__ !== 'undefined' && __page__.flag === 'mbrReq') {
		state = 'REFRESH_MYINFO';
	}

	var find = $('.findType').find("input[name='find']:checked").val();

	showLoading();

	$.ajax({
		url : "/snsLogin/getKakaoAcsTkn",
		type : "post",
		data : {code: code},
		dataType : "json",
		beforeSend: function(xhr) {
			var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
			var csrfToken = $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}
	}).done(function(data) {
		hideLoading();

		var access_token = data.access_token;
		var token_type = data.token_type;
		var refresh_token = data.refresh_token;
		var expires_in = data.expires_in;
		var snsTypCd = '08';

		showLoading();

		$.ajax({
			url : "/snsLogin/getKakaoUserInfo",
			type : "post",
			data : {accessToken: access_token},
			beforeSend: function(xhr) {
				var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
				var csrfToken = $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			}
		}).done(function(data, textStatus, xhr) {
			hideLoading();

			//액세스 토큰으로 사용자 정보 요청 CI / 사용자 ID 획득
			if(!data || !data.kakao_account) {
				alertLayer($.i18n.prop('hom.user.msg.alert.sns.notconnect'));
				return;
			}

			if(!data.kakao_account.ci) {
				alertLayer($.i18n.prop('hom.user.msg.alert.sns.notconnect'));
				return;
			}

			if(!data.id) {
				alertLayer($.i18n.prop('hom.user.msg.alert.sns.notconnect'));
				return;
			}

			var snsId = data.id;
			kakaoLogInfo({
				snsId : snsId,
				snsTypCd : snsTypCd,
				find: find
			});

			var ci = data.kakao_account.ci;

			var param = {
				crfcCi: ci,
				snsId: snsId,
				snsTypCd: snsTypCd,
				tknTyp: token_type,
				tknExprTm: expires_in,
				acsTkn: access_token,
				udTkn: refresh_token
			};

			//회원정보 해당 값 존재 여부 확인

			showLoading();

			$.ajax({
				url : "/snsLogin/getFindMemberInfo",
				type : "post",
				dataType : "json",
				data : JSON.stringify(param),
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
					goSnsLogin(snsTypCd, param);
					return;
				}

				if(state === 'REFRESH_MYINFO') {
					if(data.resultCode === '01' || data.resultCode === '02') {
						top.location.href = '/login/findIdPw/memberModify';
						return;
					}
				}

				if(state === 'FIND_MEMBER') {
					if(data.resultCode ==='01' || data.resultCode === '02') {
						//아이디 찾기 일 경우..해당 아이디 표출 화면으로 이동한다..
						if(find == 'findId') {
							top.location.href="/login/findIdPw/resultId";
							return;
						}

						// 비밀번호 찾기 일 경우..해당 회원의 임시 비밀번호를 이메일 주소로 발송한다..
						if(find === 'findPw') {
							showLoading();

							var frm = document.pwFindForm;
							frm.mbrLnm.value = data.indvMbr.mbrLnm;
							frm.mbrFnm.value = data.indvMbr.mbrFnm;
							frm.bthDt.value = data.indvMbr.bthDt;
							frm.emAdr.value = data.indvMbr.emAdr;
							frm.id.value = data.indvMbr.id;

							$.ajax({
								url: "/login/findIdPw/emailAuthPw",
								type: "post",
								data: $('#pwFindForm').serialize(),
								beforeSend: function(xhr) {
									var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
									var	csrfToken	= $("meta[name='_csrf']").attr("content");
									xhr.setRequestHeader(csrfHeader, csrfToken);
								}
							}).done(function(data, textStatus, xhr) {
								hideLoading();

								if(data === 'S') {
									top.location.href	= '/login/findIdPw/resultPw'; //회원 임시 비밀번호 발급 페이지 이동..
								} else if(data === 'I') {
									top.location.href	= '/login/findIdPw/noResult'; //회원 정보없음 페이지
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
				} else {
					//회원 정보 수정에서 접근 했을 경우(계정 연동 처리) 일 땐 화면 리로드 처리..
					top.location.reload();
				}
			}).fail(function(xhr, status, errorThrown) {
				hideLoading();
			});
		}).fail(function(xhr, status, errorThrown) {
			hideLoading();
		});
	}).fail(function(xhr, status, errorThrown) {
		hideLoading();
	});
}

//카카오 연결 끊기 요청
function deleteKakaoAcsLink() {
	showLoading();

	$.ajax({
		url : "/snsLogin/deleteKakaoAcsLink",
	    type : "post",
	    dataType : "json",
	    beforeSend: function(xhr) {
			var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
			var	csrfToken	= $('meta[name="_csrf"]').attr('content');
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}

	}).done(function(data, textStatus, xhr) {
		hideLoading();
		top.location.reload();
	}).fail(function(xhr, status, errorThrown) {
		hideLoading();
		top.location.reload();
	});
}

function kakaoLogInfo(param) {
	$.ajax({
		url : "/snsLogin/setKakaoLogInfo",
		type : "post",
		dataType : "json",
		data : JSON.stringify(param),
		contentType: 'application/json',
		beforeSend: function(xhr) {
			var	csrfHeader	= $("meta[name='_csrf_header']").attr("content");
			var	csrfToken	= $("meta[name='_csrf']").attr("content");
			xhr.setRequestHeader(csrfHeader, csrfToken);
		}
	});
}

function appleLoginReq(state) {
	if(__global__.isApp) {
		doClickSNSLogin('09', state);
		return;
	}
}

function SNS() {
}

SNS.signin = function(params) {
	if(__global__.isApp) {
		doClickSNSLogin('08', params.state);		// mobile App 연계
		return;
	}

	var url = kakaoAuthUrl + "/authorize?client_id=" + kakaoClintId
	+ "&redirect_uri=" + encodeURIComponent(callBack)
	+ "&response_type=code"
	+ "&state=" + params.state;
	openWindow(url, "kakao login", 445, 500, "yes");
};

SNS.onSignedIn = function(params) {
	var state = params.state;
	if(!state) {
		return;
	}

	var code = params.code;

	var args = state.split('|');
	var argument0 = args.length > 0 ? args[0] : undefined;
	var argument1 = args.length > 1 ? args[1] : undefined;

	if(argument0 === 'NAVER') {
		$.ajax({
			url: '/sns/naver/signin',
			type: 'post',
			data: {code: code},
			dataType: 'json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
			}
		}).done(function(data) {
			switch(argument1) {
			case 'SNS_LOGIN':
				goSnsLogin(argument0, data);
				break;
			case 'MYPAGE_SNS_CONNECT':
				activeSnsLogin(data);
				break;
			}
		});
	} else if(state === 'GOOGLE') {
		googleCallback(code);
	} else if(state === 'LINKEDIN') {
		linkedinCallback(code);
	} else if(state === 'KAKAO') {
		kakaoCallback(code);
	} else if(state === 'KAKAO_ACTIVATE') {
		showLoading();

		$.ajax({
			url: '/member/activate',
			type: 'post',
			dataType: 'json',
			data: JSON.stringify({
				type: 'KAKAO',
				snsCode: params.code,
				kakaoAccountIndicator: params.kakaoAccountIndicator
			}),
			contentType: 'application/json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
			}
		}).done(function(data) {
			hideLoading();

			if(!data || !!data.errorCode) {
				var errorCode = data.errorCode;
				switch(errorCode) {
				case 'EMPTY_ACTIVATE_SESSION':
					alertLayer2('잘못된 접근입니다.', null, function() {
						top.location.href = '/login/login';
					});
					break;
				case 'EMPTY_KAKAO_ACCESS_TOKEN':
				case 'EMPTY_KAKAO_INFO':
				case 'EMPTY_KAKAO_INDICATOR':
					alertLayer2('카카오와의 통신에 실패하였습니다.');
					break;
				case 'EMPTY_INACTIVE_MEMBER':
					alertLayer2('존재하지 않는 회원입니다.');
					break;
				case 'MEMBER_MISMATCH':
					alertLayer2('휴면 회원 본인만 해제 가능합니다.');
					break;
				case 'ID_DUPLICATED':
					alertLayer2('휴면 해제 처리 중 오류가 발생했습니다.<br>관리자에게 문의하시기 바랍니다.');
					break;
				default:
					alertLayer2('서버 에러 발생');
					break;
				}

				return;
			}

			top.location.href = '/login/login?data=inacSuccess';
		}).fail(function(data) {
			hideLoading();
			alertLayer2('서버 에러 발생', null, function() {
				top.location.reload();
			});
		});
	}
};
