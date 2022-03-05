var __page__ = __page__ || {};

__page__.initialize = function(params) {
	setValidator();

	/** 아이디 찾기 */
	$('[role="btn-member-find-id"]').click(function() {
		if(!$('#form').valid()) {
			return;
		}

		var $form = $('#form');
		var type = $form.find('[name="type"]').val();
		var from = $form.find('[name="from"]').val();
		var id = $form.find('[name="id"]').val();
		var mbrLnm = $form.find('[name="mbrLnm"]').val();
		var mbrFnm = $form.find('[name="mbrFnm"]').val();
		var bthDt = $form.find('[name="bthDt"]').val();
		var contact = $form.find('[name="contact"]').val();

		showLoading();

		$.ajax({
			url: '/member/find',
			type: 'post',
			data: JSON.stringify({
				type: type,
				from: from,
				lastName: mbrLnm,
				firstName: mbrFnm,
				birth: bthDt,
				contact: contact
			}),
			contentType: 'application/json',
			dataType: 'json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
			}
		}).done(function(data) {
			hideLoading();

			if(!data) {
				return;
			}

			if(!!data.errorCode) {
				var errorCode = data.errorCode;
				if(errorCode === 'EMPTY_MEMBER') {
					top.location.href = '/login/findIdPw/noResult';
					hidePopupLayer();
					return;
				} else if(errorCode === 'EMPTY_INACTIVE_MEMBER') {
					top.location.href = '/login/findIdPw/noResult';
					hidePopupLayer();
					return;
				}
				return;
			}

			var message = data.message;
			if(message === 'INACTIVE') {
				top.location.href = '/login/findIdPw?flag=inact';
				hidePopupLayer();
				return;
			}

			if(message === 'EMPTY_RESULT') {
				top.location.href = "/login/findIdPw/resultId?inactive=true";
				hidePopupLayer();
				return;
			}

			if(message === 'SUCCESS') {
				top.location.href = '/login/findIdPw/resultId';
				hidePopupLayer();
				return;
			}

			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		}).fail(function() {
			hideLoading();
			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		});
	});

	/** 비밀번호 찾기 */
	$('[role="btn-member-find-pw"]').click(function() {
		if(!$('#form').valid()) {
			return;
		}

		var $form = $('#form');
		var type = $form.find('[name="type"]').val();
		var from = $form.find('[name="from"]').val();
		var id = $form.find('[name="id"]').val();
		var mbrLnm = $form.find('[name="mbrLnm"]').val();
		var mbrFnm = $form.find('[name="mbrFnm"]').val();
		var bthDt = $form.find('[name="bthDt"]').val();
		var contact = $form.find('[name="contact"]').val();

		showLoading();

		$.ajax({
			url: '/member/find',
			type: 'post',
			data: JSON.stringify({
				type: type,
				from: from,
				id: id,
				lastName: mbrLnm,
				firstName: mbrFnm,
				birth: bthDt,
				contact: contact
			}),
			contentType: 'application/json',
			dataType: 'json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
			}
		}).done(function(data) {
			hideLoading();

			if(!data) {
				return;
			}

			if(!!data.errorCode) {
				var errorCode = data.errorCode;
				if(errorCode === 'EMPTY_MEMBER') {
					top.location.href = '/login/findIdPw/noResult';
					hidePopupLayer();
					return;
				} else if(errorCode === 'EMPTY_INACTIVE_MEMBER') {
					top.location.href = '/login/findIdPw/noResult';
					hidePopupLayer();
					return;
				}
				return;
			}

			if(message === 'EMPTY_RESULT') {
				top.location.href = '/login/findIdPw/noResult';
				hidePopupLayer();
				return;
			}

			var message = data.message;
			if(message === 'INACTIVE') {
				top.location.href = '/login/findIdPw/resultId?inactive=true';
				hidePopupLayer();
				return;
			}

			showLoading();

			$.ajax({
				url: '/member/issueTempPassword',
				type: 'post',
				data: JSON.stringify({
					type: type,
					from: from,
					id: id,
					lastName: mbrLnm,
					firstName: mbrFnm,
					birth: bthDt,
					contact: contact
				}),
				contentType: 'application/json',
				dataType: 'json',
				beforeSend: function(xhr) {
					xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
				}
			}).done(function(data) {
				hideLoading();

				if(!data) {
					return;
				}

				if(!!data.errorCode) {
					alertLayer2('서버 에러 발생', null, function() {
						top.location.reload();
					});
					return;
				}

				top.location.href	= '/login/findIdPw/resultPw';
			}).fail(function() {
				hideLoading();
				alertLayer($.i18n.prop('cmm.msg.alert.error'));
			});
		}).fail(function() {
			hideLoading();
			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		});
	});

	/** 휴면 회원 복원하기 */
	$('[role="btn-member-activate"]').on('click', function() {
		if(!$('#form').valid()) {
			return;
		}

		var $form = $('#form');
		var type = $form.find('[name="type"]').val();
		var from = $form.find('[name="from"]').val();
		var id = $form.find('[name="id"]').val();
		var mbrLnm = $form.find('[name="mbrLnm"]').val();
		var mbrFnm = $form.find('[name="mbrFnm"]').val();
		var bthDt = $form.find('[name="bthDt"]').val();
		var contact = $form.find('[name="contact"]').val();

		showLoading();

		$.ajax({
			url: '/member/activate',
			type: 'post',
			dataType: 'json',
			data: JSON.stringify({
				type: type,
				mbrLnm: mbrLnm,
				mbrFnm: mbrFnm,
				bthDt: bthDt,
				contact: contact
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
					alertLayer2($.i18n.prop('hom.mem.validate.052'));
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
		return;
	});

	$('[role="btn-member-refresh-info"]').click(function() {
		if(!$('#form').valid()) {
			return;
		}

		var $form = $('#form');
		var type = $form.find('[name="type"]').val();
		var from = $form.find('[name="from"]').val();
		var id = $form.find('[name="id"]').val();
		var mbrLnm = $form.find('[name="mbrLnm"]').val();
		var mbrFnm = $form.find('[name="mbrFnm"]').val();
		var bthDt = $form.find('[name="bthDt"]').val();
		var contact = $form.find('[name="contact"]').val();

		showLoading();

		$.ajax({
			url: '/member/find',
			type: 'post',
			data: JSON.stringify({
				type: type,
				from: from,
				lastName: mbrLnm,
				firstName: mbrFnm,
				birth: bthDt,
				contact: contact
			}),
			contentType: 'application/json',
			dataType: 'json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
			}
		}).done(function(data) {
			hideLoading();

			if(!data) {
				return;
			}

			if(!!data.errorCode) {
				var errorCode = data.errorCode;
				if(errorCode === 'EMPTY_MEMBER') {
					top.location.href = '/login/findIdPw/noResult';
					hidePopupLayer();
					return;
				} else if(errorCode === 'EMPTY_INACTIVE_MEMBER') {
					top.location.href = '/login/findIdPw/noResult';
					hidePopupLayer();
					return;
				}
				return;
			}

			var message = data.message;
			if(message === 'INACTIVE') {
				top.location.href = '/login/findIdPw?flag=inact';
				hidePopupLayer();
				return;
			}

			if(message === 'EMPTY_RESULT') {
				top.location.href = "/login/findIdPw/resultId?inactive=true";
				hidePopupLayer();
				return;
			}

			if(message === 'SUCCESS') {
				top.location.href = '/login/findIdPw/memberModify';
				hidePopupLayer();
				return;
			}

			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		}).fail(function() {
			hideLoading();
			alertLayer($.i18n.prop('cmm.msg.alert.error'));
		});
	});
};

/** 비밀번호 폼 밸리데이터 */
function setValidator() {
	/** placeholder 값은 value 판단 제외 */
	$.validator.addMethod('placeholder', function(value, element) {
		if (value != '' && value != $(element).attr("placeholder")) {
			return true;
		}
	});

	$('#form').validate({
		rules: {
			id: {
				required: true
			},
			mbrLnm: {
				required: true,
				placeholder: true
			},
			mbrFnm: {
				required: true,
				placeholder: true
			},
			bthDt: {
				required: true,
				validDate: true,
				placeholder: true
			},
			emAdr: {
				required: true,
				email: true,
				placeholder: true
			},
			contact: {
				required: true,
				placeholder: true
			}
		},
		messages: {
			id: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.result.text.004'))
			},
			mbrLnm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.mem.text.037')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.mem.text.037'))
			},
			mbrFnm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.qna.lbl.name')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.qna.lbl.name'))
			},
			bthDt: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.checkin.lbl.dateOfBirth')),
				validDate: $.i18n.prop('hom.mem.validate.015'),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.checkin.lbl.dateOfBirth'))
			},
			emAdr: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.em')),
				email: $.i18n.prop('cmm.msg.valid.notcorrect', $.i18n.prop('hom.flight.paidEvent.em')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.em'))
			},
			contact: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.em')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.em'))
			}
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