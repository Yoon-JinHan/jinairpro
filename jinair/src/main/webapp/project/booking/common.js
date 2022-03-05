/**
 * 
 */
$(function() {
	Contents.initialize();
	Webs.initialize();

	if(typeof Chatbot === 'function') {
		new Chatbot({
			isMobile: __global__.isMobile,
			accessChannel: __global__.accessChannel
		});
	}

	TextQualifier.initialize();

	// TODO headerIbe.jsp .내 data-need-app-except="true"와 통합
	$(document).on('click', '[data-formal-browser-target="true"][target="_blank"]', function() {
		// 앱이 아니면 기존 링크로 이동
		if(!__global__.isApp) {
			return true;
		}

		// 앱일 경우, 앱 인터페이스 실행
		var href = $(this).attr('href');
		doWebURL(href);
		return false;
	});

	$('[role="link-login-needed"]').on('click', function() {
		var href = $(this).attr('href');
		var loginUri = $(this).data('login-uri');
		var accessFrom = $(this).data('access-from');
		var codeshareSelectable = accessFrom === '06';

		Logins.loggedIn({
			loggedInCallback: function() {
				showLoading();
				location.href = href;
			},
			notLoggedInCallback: function() {
				showLoading();
				location.href = loginUri + '?accessFrom=' + accessFrom + '&codeshareSelectable=' + codeshareSelectable + '&returnUrl=' + encodeURIComponent(href);
			}
		});

		return false;
	});
});

function post(url, params) {
	if(typeof params === 'string') {
		if(!params) {
			return false;
		}
		if(params.indexOf('&') == -1) {
			return false;
		}

		if(params.indexOf('&amp;') != -1) {
			params = params.replace(/&amp;/gi, '&');
		}

		var listedParams = [];
		var parsedParams = params.split('&');
		for(var i = 0; i < parsedParams.length; i++) {
			var equalSignIndex = parsedParams[i].indexOf('=');
			var parsedParam = [parsedParams[i].substring(0, equalSignIndex), parsedParams[i].substring(equalSignIndex + 1)];
			if(!parsedParam) {
				continue;
			}

			listedParams.push({
				name: parsedParam[0],
				value: parsedParam[1]
			});
		}

		return request('post', url, listedParams);
	}

	return request('post', url, params);
}

function request(method, url, params) {
	if(!method) {
		return false;
	}

	var form = document.createElement('form');
	form.setAttribute('charset', 'utf-8');
	form.setAttribute('method', method);
	form.setAttribute('action', url);

	if(!params || !params.length) {
		params = [];
	}

	var csrfToken = $('meta[name="_csrf"]').attr('content');
	if(!!csrfToken) {
		params.push({
			name: '_csrf',
			value: csrfToken
		});
	}

	for(var i = 0; i < params.length; i++) {
		var param = params[i];
		var name = param['name'];
		var value = param['value'];
		var input = document.createElement('input');
		input.setAttribute('type', 'hidden');
		input.setAttribute('name', name);
		input.setAttribute('value', value);
		form.appendChild(input);
	}
	document.body.appendChild(form);

	form.submit();
}

function Logins() {
	return this;
}

Logins.loggedIn = function(params) {
	$.ajax({
		type: 'get',
		url: '/login/loggedIn'
	}).done(function(data) {
		if(data) {
			$('#login-button-area').html('<a href="/login/logout">' + $('#login-button-area').data('title-logout') + '</a>');
			params.loggedInCallback();
		} else if(!data) {
			$('#login-button-area').html('<a href="/login/login">' + $('#login-button-area').data('title-login') + '</a>');
			params.notLoggedInCallback();
		}
	}).fail(function() {
		location.reload();
	});
};

function Ajaxes() {
}

Ajaxes.defaultBeforeSend = function(xhr) {
	if(!xhr || typeof xhr.setRequestHeader !== 'function') {
		return;
	}

	var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
	if(!csrfHeader) {
		csrfHeader = __global__.csrfHeader;
	}

	var csrfToken = $('meta[name="_csrf"]').attr('content');
	if(!csrfToken) {
		csrfToken = __global__.csrfToken;
	}

	xhr.setRequestHeader(csrfHeader, csrfToken);
};

function Contents() {
}

Contents.initialize = function() {
	$(function() {
		$('[data-content-link-id]').each(function() {
			var linkId = $(this).data('content-link-id');
			if(!linkId) {
				return true;
			}

			var indicator = $(this).data('indicator');
			if(!indicator) {
				return true;
			}

			$(this).prop('href', Contents.links[linkId][indicator]);
		});
	});
};

Contents.links = {
	'klook': {
		'KOR': 'https://affiliate.klook.com/jump/ko/promo/jinairon?adid=100885&af_wid=8227',
		'TWN': 'https://www.klook.com/zh-TW/?aid=8227',
		'LAO': 'https://www.klook.com/en-US/?aid=8227',
		'MAC': 'https://www.klook.com/zh-HK/?aid=8227',
		'MYS': 'https://www.klook.com/en-US/?aid=8227',
		'USA': 'https://www.klook.com/en-US/?aid=8227',
		'VNM': 'https://www.klook.com/en-US/?aid=8227',
		'JPN': 'https://www.klook.com/ja/?aid=8227',
		'CHN': 'https://www.klook.com/zh-CN/?aid=8227',
		'THA': 'https://www.klook.com/en-US/?aid=8227',
		'PHL': 'https://www.klook.com/en-US/?aid=8227',
		'AUS': 'https://www.klook.com/en-US/?aid=8227',
		'HKG': 'https://www.klook.com/zh-HK/?aid=8227'
	},
	'booking.com': {
		'KOR': 'https://sp.booking.com/index.ko.html?aid=1486529&lang=ko',
		'CHN': 'https://sp.booking.com/index.zh-cn.html?aid=1486529&lang=zh-cn',
		'TWN': 'https://sp.booking.com/index.zh-tw.html?aid=1486529&lang=zh-tw',
		'MAC': 'https://sp.booking.com/index.zh-tw.html?aid=1486529&lang=zh-tw',
		'HKG': 'https://sp.booking.com/index.zh-tw.html?aid=1486529&lang=zh-tw',
		'JPN': 'https://sp.booking.com/index.ja.html?aid=1486529&lang=ja',
		'LAO': 'https://sp.booking.com/index.html?aid=1486529&lang=en',
		'MYS': 'https://sp.booking.com/index.html?aid=1486529&lang=en',
		'USA': 'https://sp.booking.com/index.html?aid=1486529&lang=en',
		'AUS': 'https://sp.booking.com/index.html?aid=1486529&lang=en',
		'PHL': 'https://sp.booking.com/index.tl.html?aid=1486529&lang=tl',
		'VNM': 'https://sp.booking.com/index.vi.html?aid=1487042&lang=vi',
		'THA': 'https://sp.booking.com/index.th.html?aid=1486529&lang=th'
	},
	'hotelscombined': {
		'KOR': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=KO&label=main',
		'CHN': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=CS&label=main',
		'TWN': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=TW&label=main',
		'MAC': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=HK&label=main',
		'HKG': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=HK&label=main',
		'JPN': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=JA&label=main',
		'LAO': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main',
		'MYS': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main',
		'USA': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main',
		'AUS': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main',
		'PHL': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main',
		'VNM': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main',
		'THA': 'https://www.hotelscombined.co.kr/?a_aid=226570&brandid=560805&languageCode=EN&label=main'
	},
	'trip.com': {
		'KOR': 'https://kr.trip.com/hotels?locale=ko-KR&allianceid=1307583&sid=4088763',
		'CHN': 'https://hk.trip.com/hotels?locale=zh-HK&allianceid=1307583&sid=4088763',
		'TWN': 'https://tc.trip.com/hotels?locale=zh-TW&allianceid=1307583&sid=4088763',
		'MAC': 'https://tc.trip.com/hotels?locale=zh-TW&allianceid=1307583&sid=4088763',
		'HKG': 'https://tc.trip.com/hotels?locale=zh-TW&allianceid=1307583&sid=4088763',
		'JPN': 'https://jp.trip.com/hotels?locale=ja_jp&allianceid=1307583&sid=4088763',
		'LAO': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763',
		'MYS': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763',
		'USA': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763',
		'AUS': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763',
		'PHL': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763',
		'VNM': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763',
		'THA': 'https://us.trip.com/hotels?locale=en_us&allianceid=1307583&sid=4088763'
	}
};

function Webs() {
}

Webs.initialize = function() {
	showLoading();
	$.get('popups.json').done(function(data) {
		hideLoading();
		Webs.showRegisteredPopups(data);
	}).fail(function() {
		hideLoading();
	});
};

Webs.showRegisteredPopups = function(popups) {
	if(!popups || !popups.length) {
		return;
	}

	var channel = __global__.isApp ? 'MOA' : (__global__.isMobile ? 'MOW' : 'PCW');

	if(!!$('.ly_benefit, .m_ly_benefit, .m_ly_fixed').length) {
		return;
	}

	for(var i = 0; i < popups.length; i++) {
		var popup = popups[i];
		if(!popup) {
			continue;
		}

		// 트리거 확인 (optional)
		var triggers = popup.triggers;
		if(!!triggers) {
			var triggered = false;
			for(var j = 0; j < triggers.length; j++) {
				var trigger = triggers[j];
				if(Cookies.get(trigger) === 'true') {
					triggered = true;
					Cookies.set(trigger, '', 0);
				}
			}
			if(!triggered) {
				continue;
			}
		}

		var now = new Date();

		// 전시 시작 일시 확인 (mandatory)
		var displayStartDate = new Date(popup.displayStart);
		if(displayStartDate === 'Invalid Date') {
			continue;
		}
		if(now.getTime() < displayStartDate.getTime()) {
			continue;
		}

		// 전시 종료 일시 확인 (mandatory)
		var displayEndDate = new Date(popup.displayEnd);
		if(displayEndDate === 'Invalid Date') {
			continue;
		}
		if(displayEndDate.getTime() < now.getTime()) {
			continue;
		}

		// 언어 확인 (mandatory)
		if(!!popup.locales) {
			var correctLocale = false;
			for(var j = 0; j < popup.locales.length; j++) {
				if(document.cookie.indexOf('foLangCountry=' + popup.locales[j]) !== -1) {
					correctLocale = true;
					break;
				}
			}
			if(!correctLocale) {
				continue;
			}
		}

		// 채널 확인 (mandatory)
		if(!popup.channels) {
			continue;
		}
		var popupChannel = popup.channels[channel];
		if(!popupChannel) {
			continue;
		}

		// 경로 확인 (optional)
		if(!!popup.paths) {
			var correctPath = false;
			for(var j = 0; j < popup.paths.length; j++) {
				if(location.pathname.startsWith(popup.paths[j])) {
					correctPath = true;
					break;
				}
			}
			if(!correctPath) {
				continue;
			}
		}

		// 오늘 하루 보지 않기 쿠키 확인
		var cookieName = popup.cookieName;
		if(!cookieName) {
			cookieName = 'HIDE-GLOBALPOPUP-' + popup.popupId;
		}
		if(document.cookie.indexOf(cookieName) !== -1) {
			continue;
		}

		// 렌더링
		var templateUrl = popupChannel.template;
		$.get(templateUrl).then(function(data) {
			var html = data.replace('{{:imageServer}}', __global__.imageServer);
			$('body').append(html);

			$('[role="btn-with-app-global-popup"]').on('click', function() {
				Webs.goAppDownloadPage();
			});
			$('[role="btn-close-global-popup"]').on('click', function() {
				Webs.hidePopup(cookieName, 30);
			});
			$('[role="btn-close-today-global-popup"]').on('click', function() {
				Webs.hidePopup(cookieName, 1);
			});

			$('.ly_benefit, .m_ly_benefit, .m_ly_fixed').show();
			$('.m_ly_fixed').on('click', function() {
				Webs.hidePopup();
			});
		});

		// 무조건 1개만
		break;
	}
};

Webs.goAppDownloadPage = function() {
	if(currentOS == 'android') {
		document.location = 'https://play.google.com/store/apps/details?id=com.jinair.android';
	}else if(currentOS == 'ios') {
		document.location = 'https://apps.apple.com/kr/app/진에어/id435624636';
	}
};

Webs.hidePopup = function(cookieName, maxAgeDays) {
	$('.ly_benefit, .m_ly_benefit, .m_ly_fixed').hide();
	if(!!cookieName) {
		Cookies.set(cookieName, true, maxAgeDays);
	}
};

function TextQualifier() {
}

TextQualifier.initialize = function() {
	if(!$) {
		return;
	}

	$('body').on('keyup keypress blur focusout', 'input:text[data-text-qualifier]', function(e) {
		var $this = $(e.target);

		var oldValue = $this.val();
		if(!oldValue && oldValue !== 0) {
			return;
		}

		var qualifiers = $this.data('text-qualifier').split(' ');
		if(!qualifiers.length) {
			return;
		}

		var newValue = oldValue;
		if(qualifiers.indexOf('eng-upper') !== -1) {
			newValue = newValue.toUpperCase();
		} else if(qualifiers.indexOf('eng-lower') !== -1) {
			newValue = newValue.toLowerCase();
		}

		var formula = $this.data('formula');
		if(!formula) {
			formula = '[^';
			for(var i = 0; i < qualifiers.length; i++) {
				var qualifier = qualifiers[i];
				if(!qualifier) {
					continue;
				}

				switch(qualifier) {
				case 'num':
					formula += '0-9';
					break;
				case 'num-with-comma':
					formula += '0-9\,';
					break;
				case 'eng':
					formula += 'a-zA-Z';
					break;
				case 'kor':
					formula += 'ㄱ-ㅎㅏ-ㅣ가-힣';
					break;
				case 'custom':
					var acceptChars = $this.data('text-qualifier-custom-chars');
					if(!acceptChars) {
						break;;
					}

					var reserveds = '^$-.*+?=!:|\\/()[]{}';
					for(var j = 0; j < acceptChars.length; j++) {
						var acceptChar = acceptChars.charAt(j);
						var requireEscape = reserveds.indexOf(acceptChar) !== -1;
						formula += (requireEscape ? '\\' : '') + acceptChar;
					}
					break;
				}
			}
			formula += ']';

			$this.data('formula', formula);
		}
		if(!formula) {
			return;
		}
		var regExp = new RegExp(formula, 'gi');
		if(regExp.test(newValue)) {
			newValue = newValue.replace(regExp, '');
		}

		if(oldValue !== newValue) {
			$this.val(newValue);
			$this.keyup();
		}
	});
}

String.prototype.left = function(len) {
	if(this.length <= len) {
		return this;
	}

	return this.substring(0, len);
}

function Strings() {
}

Strings.left = function(str, len) {
	if(!str) {
		return '';
	}

	if(str.length <= len) {
		return str;
	}

	return str.substring(0, len);
};

Strings.ellipsis = function(str, len) {
	if(!str) {
		return '';
	}

	if(str.length <= len) {
		return str;
	}

	return Strings.left(str, len - 1) + '…';
}

Strings.lpad = function(str, len, padChar) {
	if(!str) {
		return '';
	}
	str += '';

	if(!padChar) {
		return stg;
	} else if(padChar.length > len) {
		return str;
	}
	padChar += '';

	while(str.length < len) {
		str = padChar + str;
	}

	return str;
};

function Dates() {
}

Dates.string = function(date, format) {
	if(!date || typeof date.getMonth !== 'function' || !format || typeof format !== 'string') {
		return null;
	}

	var yyyy = date.getFullYear();
	var MM = Strings.lpad('' + (date.getMonth() + 1), 2 ,'0');
	var dd = Strings.lpad('' + date.getDate(), 2, '0');
	var HH = Strings.lpad('' + date.getHours(), 2, '0');
	var hh = Strings.lpad('' + (date.getHours() % 12), 2, '0');
	var mm = Strings.lpad('' + date.getMinutes(), 2, '0');
	var ss = Strings.lpad('' + date.getSeconds(), 2, '0');

	var result = '' + format;
	result = result.replace('yyyy', yyyy);
	result = result.replace('MM', MM);
	result = result.replace('dd', dd);
	result = result.replace('HH', HH);
	result = result.replace('hh', hh);
	result = result.replace('mm', mm);
	result = result.replace('ss', ss);
	return result;
};

Dates.addMonth = function(date, amount) {
	if(!date || typeof date.getMonth !== 'function' || !amount || typeof amount !== 'number') {
		return null;
	}

	var clone = new Date(date);
	clone.setMonth(clone.getMonth() + amount);
	return clone;
};

Dates.addDate = function(date, amount) {
	if(!date || typeof date.getMonth !== 'function' || typeof amount !== 'number') {
		return null;
	}

	var clone = new Date(date);
	clone.setDate(clone.getDate() + amount);
	return clone;
};

Dates.date = function(dateString, format) {
	if(!dateString) {
		return null;
	}

	dateString = '' + dateString;

	var date = null;
	if(format === 'yyyyMMdd') {
		var yyyy = null;
		var MM = null;
		var dd = null;
		yyyy = dateString.substring(0, 4);
		MM = dateString.substring(4, 6);
		dd = dateString.substring(6, 8);

		date = new Date();
		date.setDate(1);
		date.setFullYear(yyyy);
		date.setMonth(MM - 1);
		date.setDate(dd);
	}
	return date;
};

function AAnalytics() {
}

AAnalytics.dl = function() {
	var channel = !__global__.isMobile ? 'pc' : (!__global__.isApp ? 'mobile' : 'app');
	var page = new Page() || {};
	if(typeof page.aaPageName === 'undefined') {
		return undefined;
	}

	var cookie_real_referrer = Cookies.get('real_referrer');
	if(!cookie_real_referrer || cookie_real_referrer === 'null') {
		cookie_real_referrer = '';
	}

	var cookie_real_referrer_from_interceptor = Cookies.get('real_referrer_from_interceptor');
	if(!cookie_real_referrer_from_interceptor || cookie_real_referrer_from_interceptor === 'null') {
		cookie_real_referrer_from_interceptor = '';
	}

	var real_referrer = cookie_real_referrer || cookie_real_referrer_from_interceptor || '';
	if(!!real_referrer) {
		Cookies.set('real_referrer', null, 0);
		Cookies.set('real_referrer_from_interceptor', null, 0);
	}

	var login = __global__.login || {};
	var user = __global__.user || {};

	var currencies = {
		'KR': 'KRW',
		'CN': 'CNY',
		'JP': 'JPY',
		'US': 'USD',
		'AU': 'AUD',
		'HK': 'HKD',
		'MO': 'MOP',
		'TW': 'TWD',
		'MY': 'MYR',
		'TH': 'THB'
	};

	return {
		site_name: 'Jin Air',
		channel: channel,
		page_name: page.aaPageName,
		page_url: page.path,
		site_currency: currencies[Cookies.get('foPop') || 'KR'],
		site_region: Cookies.get('foCountry') || 'KOR',
		site_language: Cookies.get('foLangCd') || 'KOR',
		login_status: login.isLoggedIn ? 'Y' : 'N',
		login_type: login.type,
		user_number: user.number,
		user_gender: user.gender,
		user_age: user.age,
		user_nationality: user.nationality,
		user_level: user.level,
		real_referrer: real_referrer
	};
};

AAnalytics.appendToDataLayer = function(params) {
	if(typeof _dl === 'undefined') {
		return;
	}
	if(!params) {
		return;
	}

	for(var key in params) {
		_dl[key] = params[key];
	}
};

function Cookies() {
}

Cookies.get = function(name) {
	if(!document.cookie) {
		return '';
	}

	var searchText = name + '=';
	var allCookies = document.cookie.split(';');
	if(!allCookies) {
		return '';
	}

	for(var i in allCookies) {
		if(typeof allCookies[i] !== 'string') {
			continue;
		}

		var cookie = allCookies[i].trim();
		if(cookie.indexOf(searchText) === -1) {
			continue;
		}

		return cookie.substring(searchText.length);
	}

	return '';
};

Cookies.set = function(name, value, maxAge) {
	var attributes = [];
	attributes.push(name + '=' + value);
	if(!!maxAge || maxAge !== 0) {
		attributes.push('Max-Age=' + (maxAge * 24 * 60 * 60));
	}
	attributes.push('path=/');
	attributes.push('Secure');
	attributes.push('SameSite=None');
	document.cookie = attributes.join(';');
};

function confirmLayer2(html, successFunc, failureFunc, close) {
	if(!$(".bgLayer3").is(":visible")) {
		$("body").append('<div class="bgLayer3"></div>');
	}

	var confirmText = $.i18n.prop('cmm.msg.btn.confirm');
	if(confirmText.indexOf('cmm.msg.btn.confirm') !== -1) {
		confirmText = '확인';
	}
	var cancelText = $.i18n.prop('cmm.msg.btn.cancel');
	if(cancelText.indexOf('cmm.msg.btn.cancel') !== -1) {
		cancelText = '취소';
	}

	var $focus = $(document).find(":focus");
	$focus.addClass("focused");

	$("body").append('<div class="confirmLayer">'+ html +'<p class="btn"><a href="javascript://" class="btnTypeA" data-value="Y">' + confirmText + '</a> <a href="javascript://" class="btnTypeB" data-value="N">' + cancelText + '</a></p></div>');

	/** 확인 클릭 */
	$('.confirmLayer .btn a[data-value="Y"]').on('click', function() {
		hideConfirmLayer(close);
		if(typeof successFunc === 'function') {
			successFunc();
		}
		return false;
	});

	/** 취소 클릭 */
	$('.confirmLayer .btn a[data-value="N"]').on('click', function() {
		hideConfirmLayer(close);
		if(typeof failureFunc === 'function') {
			failureFunc();
		}
		return false;
	});

	var aTop = $(window).scrollTop() + $(window).height()/2 - ($(".confirmLayer").height() + parseInt($(".confirmLayer").css("padding-top")))/2;
	$(".bgLayer3").show();
	$(".confirmLayer").css("top", aTop + "px").css("opacity", "1");
	return false;
}

function UserAgents() {
	this.ua = navigator.userAgent.toLowerCase();
}

UserAgents.isMobile = function() {
	var ua = navigator.userAgent.toLowerCase();
	if(!ua) {
		ua = 'undefined';
	}

	return /iphone|ipad|ipod|android|windows ce|blackberry|symbian|windows phone|webos|opera mini|opera mobi|polaris|iemobile|lgtelecom|nokia|sonyericsson/i.test(ua);
};

UserAgents.isApple = function() {
	var ua = navigator.userAgent.toLowerCase();
	if(!ua) {
		ua = 'undefined';
	}

	return /iphone|ipad|ipod/i.test(ua);
};
