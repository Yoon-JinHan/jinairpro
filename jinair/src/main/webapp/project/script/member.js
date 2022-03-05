function Member() {
}

Member.valid = function(params) {
	var validCallback = params.valid;
	var invalidCallback = params.invalid;

	if(!!params.dimmed) {
		showLoading();
	}
	$.ajax({
		type: 'post',
		url: '/member/valid',
		data: JSON.stringify(params.data),
		contentType: 'application/json; charset=utf-8',
		beforeSend: function(xhr) {
			xhr.setRequestHeader(__global__.csrfHeader, __global__.csrfToken);
		},
		dataType: 'json'
	}).done(function(data) {
		if(!!params.dimmed) {
			hideLoading();
		}

		if(!data) {
			invalidCallback({errorCode: 'SERVER_ERROR_OCCURED'});
			return;
		}

		if(!!data.errorCode) {
			invalidCallback(data);
			return;
		}

		validCallback(data);
	}).fail(function(data) {
		if(!!params.dimmed) {
			hideLoading();
		}

		invalidCallback({errorCode: 'SERVER_ERROR_OCCURED'});
	});
};
