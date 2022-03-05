var dupCheckYn = false;

var __page__ = __page__ || {};

__page__.initialize = function() {
	

	// 숫자만 입력
	$(".onlyNum").on('keyup change', function(event) {
		if (!(event.keyCode >=37 && event.keyCode <= 40)) {
			if ($(this).val() != $(this).attr("placeholder")) {
				var inputVal = $(this).val();
				$(this).val(inputVal.replace(/[^0-9]/gi,''));
			}
		}
	});

	// 영문대문자만 입력
	$(".onlyEngUpp").on('keyup change', function(event) {
		if (!(event.keyCode >=37 && event.keyCode <= 40)) {
			if ($(this).val() != $(this).attr("placeholder")) {
				var inputVal = $(this).val();
				$(this).val(inputVal.replace(/[^A-Z]/gi,''));
			}
		}
	});

	// 영문대문자, 숫자만 입력
	$(".onlyEngUppNum").on('keyup change', function(event) {
		if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
			if ($(this).val() != $(this).attr("placeholder")) {
				var inputVal = $(this).val();
				  $(this).val(inputVal.replace(/[^A-Z0-9.;\-]/gi,''));
			}
		}
	});

	/*아이디 필드 변화시 중복검사결과 리셋*/
	$("#id").change(function() {
		dupCheckYn = false;
	});

	$("#ntnltyCd").change(function() {
		var selectedNtnltyCd = $(this).val();
		$("#residenceIataCountryCode").val(selectedNtnltyCd).prop("selected", true);
		$("#mblFonCtrCd").val(selectedNtnltyCd).prop("selected", true);
	});

	// 아이디 중복 확인
	$('[role="btn-check-id-duplication"]').on('click', function() {
		var id = $('#id').val().trim();
		if(!id) {
			alertLayer2($.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.result.text.004')), '', function() {
				$('#id').focus();
			});

			return false;
		}

		if(!/^[a-zA-Z]+[a-zA-Z0-9]{5,19}$/g.test(id)) {
			alertLayer2($.i18n.prop('hom.mem.validate.006'), '', function() {
				$('#id').focus();
			});

			return false;
		}

		dupCheckYn = true;
		showPopupLayer('/jinair/project/member/popup/idDupCheckLayer.jsp?resultCode=001&id=' + id);
		
		/*
		Member.valid({
			data: {
				id: id,
				type: 'JOIN',
				action: 'CHECK_ID'
			},
			valid: function() {
				dupCheckYn = true;
				showPopupLayer('/jinair/project/member/popup/idDupCheckLayer?resultCode=001&id=' + id);
			},
			invalid: function(data) {
				var errorCode = data.errorCode;
				if(errorCode === 'ERR_MBR_01') {
					alertLayer2($.i18n.prop('cmm.msg.alert.error'));
					return;
				} else if(errorCode === 'ERR_MBR_05') {
					showPopupLayer('/jinair/project/member/popup/idDupCheckLayer?resultCode=002&id=' + id);
					return;
				} else {
					alertLayer2($.i18n.prop('hom.mem.validate.051'), "", function() {
						moveToIndex();
					});
					return;
				}
			},
			
			dimmed: true
		});
		*/
	});

	// 비밀번호 안전도 검사
	$('#id, #pw, #bthDt, #mblFonNo').on('keyup blur', function() {
		$("#pwTest").text('');

		var id = $('#id').val();
		if(!id) {
			return;
		}
		var pw = $('#pw').val();
		if(!pw) {
			return;
		}
		var bthDt = $('#bthDt').val();
		if(!bthDt) {
			return;
		}
		var mblFonNo = $('#mblFonNo').val();
		if(!mblFonNo) {
			return;
		}
		
		var pwdCheck1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,20}$/
		var pwdCheck2 = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{10,20}$/
		var pwdCheck3 = /^(?=.*\d)(?=.*[@$!%*#?&])[\d$@$!%*#?&]{10,20}$/
		var pwdCheck4 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
		
		var birthDate = bthDt.substr(4,4);
		var mobileLastNo = mblFonNo.substr( mblFonNo.length - 4, 4 );
		
		if( checkPwForm( pw ) || pw.indexOf( birthDate ) >= 0 || pw.indexOf( mobileLastNo ) >= 0 || pw.indexOf( id ) >= 0 )
			$("#pwTest").text('사용불가');
		else {
			if( pwdCheck4.test( pw ))
				$("#pwTest").text('안전');
			else if( pwdCheck1.test( pw ) || pwdCheck2.test( pw ) || pwdCheck3.test( pw ))
				$("#pwTest").text('보통');
		}
		
		/*
		Member.valid({
			data: {
				type: 'JOIN',
				action: 'CHECK_PW',
				id: id,
				pw: pw,
				bthDt: bthDt,
				mblFonNo: mblFonNo
			},
			valid: function(data) {
				var passwordSafety = data.passwordSafety;
				if(passwordSafety === 'SAF') {
					$("#pwTest").text($.i18n.prop('hom.indv.mem.join.text.041'));
				} else if(passwordSafety === 'NOR') {
					$("#pwTest").text($.i18n.prop('hom.indv.mem.join.text.042'));
				} else if(passwordSafety === 'DIS') {
					$("#pwTest").text($.i18n.prop('hom.benefit.point.tab2.fee_1'));
				}
			},
			invalid: function(data) {
				var errorCode = data.errorCode;
				if(errorCode === 'ERR_MBR_01') {
				} else if(errorCode === 'ERR_MBR_02') {
				} else if(errorCode === 'ERR_MBR_03') {
				} else if(errorCode === 'ERR_MBR_04') {
				} else if(errorCode === 'ERR_MBR_05') {
				} else if(errorCode === 'ERR_MBR_06') {
				} else if(errorCode === 'ERR_MBR_07') {
				} else if(errorCode === 'ERR_MBR_08') {
				}
			}
		});
		*/
	});
	
	function checkPwForm(str){

		var max = 4; // 3자리 이상 검사		
		var i, j, k, x, y;		
		var buff = ["0123456789","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","qwertyuiopasdfghjklzxcvbnm","QWERTYUIOPASDFGHJKLZXCVBNM"];		
		var scr, src2, ptn = "";
		
		
		
		for(i = 0; i < buff.length; i++){		
			src = buff[i];
			src2 = buff[i] + buff[i];

			for(j = 0; j < src.length; j++){
				x = src.substr(j, 1);	
				y = src2.substr(j, max);				
				ptn += "["+x+"]{"+max+",}|";				
				ptn += y+"|";
			}

		}
		
		ptn = new RegExp(ptn.replace(/.$/, ""));

		if(ptn.test(str)) return true;
		
		return false;

	}



	/*거주국적 USA 선택시*/
	$("#residenceIataCountryCode").change(function(){
		if ($("#residenceIataCountryCode").val() == 'USA') {
			$("#usaSttCdSelectBox").css("display", "");
		} else {
			$("#usaSttCdSelectBox").css("display", "none");
			$("#usaSttCd").find("option:eq(0)").prop("selected", true);
		}
	});

	// 가입 버튼 클릭
	$('[role="btn-join"]').on('click', function() {
		if(!dupCheckYn) {
			alertLayer($.i18n.prop('hom.mem.validate.010'), '', '$("#id").focus');
			return false;
		}

		removeWhitespace($("#joinForm"));

		if(!$('#joinForm').valid()) {
			return;
		}

		if('KOR' == $("#foLangCd").val() && 'KOR' == $("#foCountry").val()) {
			var fullNm = $("#mbrLnm").val() + $("#mbrFnm").val() + "";
			if(fullNm.toUpperCase().replace(/\s/g, '') !=  $("#mbrNm").val().toUpperCase().replace(/\s/g, '')){
				alertLayer($.i18n.prop('hom.mem.validate.045'), '', '$("#mbrFnm").focus');
				return false;
			}
		}

		if($('#pstNo').val() != null) {
			stringByteLength = (function(s, b, i, c) {
				for(b = i = 0; c = s.charCodeAt(i++); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
				return b;
			})($('#pstNo').val());
			if (stringByteLength > 10) {
				alertLayer($.i18n.prop('cmm.msg.valid.minlength', $.i18n.prop('hom.indv.mem.join.text.017'), 10), '', '$("#pstNo").focus');

				return false;
			}
		}
		
		$("#joinForm").submit();
		
		/*
		Member.valid({
			data: {
				type: 'JOIN',
				action: 'SAVE',
				id: $('[name="id"]').val(),
				pw: $('[name="pw"]').val(),
				bthDt: $('[name="bthDt"]').val(),
				mblFonNo: $('[name="mblFonNo"]').val(),
				emAdr: $('[name="emAdr"]').val(),
				mbrLnm: $('[name="mbrLnm"]').val(),
				mbrFnm: $('[name="mbrFnm"]').val(),
				engLnm: $('[name="engLnm"]').val(),
				engFnm: $('[name="engFnm"]').val()
			},
			valid: function() {
				showLoading();

				$.ajax({
					type: 'post',
					data: $('#joinForm').serialize(),
					url: '/member/individual/joinProcess',
					dataType: 'json',
					success: function(data) {
						hideLoading();

						if("S" == data.resultCode) {
							showLoading();
							location.href = "/member/individual/joinComplete?mbrNo=" + data.mbrNo;
							return;
						}

						if("01" == data.resultCode) {
							alertLayer($.i18n.prop('hom.mem.validate.010', $.i18n.prop('hom.indv.mem.join.text.043')), "", '$("#comDiscCd").focus');
						} else if("F" == data.resultCode) {
							dupCheckYn = false;
							alertLayer($.i18n.prop('hom.mem.validate.009'), "", '$("#id").focus');
						} else if("02" == data.resultCode) {
							alertLayer($.i18n.prop('hom.mem.validate.018'), "", '$("#comDiscCd").focus');
						} else if("G" == data.resultCode) {
							location.href = "/member/greenwings/joinForm";
						} else if(data.resultCode === 'IBS_LYT_DUPLICATED') {
							alertLayer2($.i18n.prop('hom.indv.mem.105'), '', function() {
								location.href = '/booking/index';
							});
						} else {
							alertLayer2($.i18n.prop('hom.mem.validate.051'), '', function() {
								location.href = '/booking/index';
							});
						}
					},
					error: function(data) {
						hideLoading();
						alertLayer2($.i18n.prop('hom.mem.validate.051'), '', function() {
							location.href = '/booking/index';
						});
					}
				});
			},
			invalid: function(data) {
				var errorCode = data.errorCode;
				switch(errorCode) {
				case 'ERR_MBR_01':
					alertLayer2($.i18n.prop('hom.indv.mem.pw.valid.001'), '', function() {
						$("#pw").focus();
					});
					break;
				case 'ERR_MBR_02':
					alertLayer2($.i18n.prop('hom.indv.mem.pw.valid.001'), '', function() {
						$("#pw").focus();
					});
					break;
				case 'ERR_MBR_03':
					alertLayer2($.i18n.prop('hom.indv.mem.pw.valid.001'), '', function() {
						$("#pw").focus();
					});
					break;
				case 'ERR_MBR_04':
					alertLayer2($.i18n.prop('hom.indv.mem.pw.valid.001'), '', function() {
						$("#pw").focus();
					});
					break;
				case 'ERR_MBR_05':
					alertLayer2($.i18n.prop('hom.mem.validate.009'), '', function() {
						$("#id").focus();
					});
					dupCheckYn = false;
					break;
				case 'ERR_MBR_06':
					alertLayer2($.i18n.prop('hom.indv.mem.105'), '', function() {
						location.href = '/booking/index';
					});
					break;
				case 'ERR_MBR_07':
					alertLayer2($.i18n.prop('cmm.msg.alert.error'), '', function() {
						$("#id").focus();
					});
					break;
				case 'ERR_MBR_08':
					alertLayer2($.i18n.prop('hom.mem.validate.011'), '', function() {
						$("#pw").focus();
					});
					break;
				}
				return;
			},
			dimmed: true
		});
		*/
	});

	setValidator();
};

/*중복확인 팝업으로부터 확인된 아이디 받음*/
function setDupChekedId(id) {
	dupCheckYn = true;
	$("#id").val(id);
	$("#pw").focus();
}

/*주소팝업으로부터 우편번호와 도로명주소 받음*/
function setJusoFromLayer(zipNo, roadAddrPart1, roadAddrPart2, jibunAddr) {
	$("#pstNo").val(zipNo);
	$("#adr1").val(roadAddrPart1);
	$("#adr2").val(roadAddrPart2);
	$("#adr2").prop("readonly", false);
	$("#adr2").focus();
}

function moveToIndex() {
	location.href = '/jinair/jinairfront/www.jinair.com/booking/index.jsp';
}

$.validator.addMethod('placeholder', function(value, element) {
	if (value != '' && value != $(element).attr("placeholder")) {
		return true;
	}
});

function setValidator() {
	// 다국어 로딩 및 초기화 작업
	$('#joinForm').validate({
		rules: {
			id: {
				required: true,
				validId: true
			},
			pw: {
				required: true
			},
			pwCheck: {
				required: true,
				equalTo: "#pw"
			},
			mbrNm: {
				required: function(){return 'KOR' == $("#foLangCd").val() &&'KOR' == $("#foCountry").val();}
			},
			mbrLnm: {
				required: function(){return 'KOR' == $("#foLangCd").val() &&'KOR' == $("#foCountry").val();},
				placeholder: function(){return 'KOR' == $("#foLangCd").val() &&'KOR' == $("#foCountry").val();}
			},
			mbrFnm: {
				required: function(){return 'KOR' == $("#foLangCd").val() &&'KOR' == $("#foCountry").val();},
				placeholder: function(){return 'KOR' == $("#foLangCd").val() &&'KOR' == $("#foCountry").val();}
			},
			engLnm: {
				required: true,
				placeholder: true
			},
			engFnm: {
				required: true,
				placeholder: true
			},
			bthDt: {
				required: true,
				placeholder: true,
				validDate: true
			},
			mblFonCtrCd: {
				required: true
			},
			mblFonNo: {
				required: true
			},
			emAdr: {
				required: true,
				placeholder: true,
				email: true
			},
			ntnltyCd: {
				required: true,
				placeholder: true
			},
			residenceIataCountryCode: {
				required: true,
				placeholder: true
			}
		},
		messages: {
			id: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.result.text.004')),
				validId: $.i18n.prop('hom.mem.validate.006')
			},
			pw: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.003'))
			},
			pwCheck: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.004')),
				equalTo: $.i18n.prop('hom.mem.validate.012')
			},
			mbrNm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.qna.lbl.name'))
			},
			mbrLnm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.045')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.045'))
			},
			mbrFnm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.005')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.005'))
			},
			engLnm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.007')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.007'))
			},
			engFnm: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.006')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.006'))
			},
			bthDt: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.checkin.lbl.dateOfBirth')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.checkin.lbl.dateOfBirth')),
				validDate: $.i18n.prop('hom.mem.validate.015')
			},
			mblFonCtrCd: {
				required:  $.i18n.prop('cmm.msg.valid.select', $.i18n.prop('hom.indv.mem.join.text.044'))
			},
			mblFonNo: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.phone')),
				validTelNo: $.i18n.prop('hom.mem.validate.016')
			},
			emAdr: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.em')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.flight.paidEvent.em')),
				email: $.i18n.prop('hom.mem.validate.017')
			},
			ntnltyCd: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.checkin.lbl.nationality')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.checkin.lbl.nationality'))
			},
			residenceIataCountryCode: {
				required: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.014')),
				placeholder: $.i18n.prop('cmm.msg.valid.require', $.i18n.prop('hom.indv.mem.join.text.014'))
			}
		},
		errorPlacement: function(error, element) {
			// do nothing
		},
		invalidHandler: function(form, validator) {
			var errors = validator.numberOfInvalids();
			if(errors) {
				alertLayer(validator.errorList[0].message, '', '$("#' + validator.errorList[0].element.id + '").focus');
			}
		}
	});
}

//앞뒤 공백, 탭, 줄바꿈문자, 제거
function removeWhitespace(obj) {
	$(obj).find('input').each(function() {
		if($(this).attr('type') === 'hidden') {
			return true;
		}

		$(this).val($(this).val().trim());
		$(this).val($(this).val().replace(/\t/g, ''));
		$(this).val($(this).val().replace(/\n/g, ''));
		$(this).val($(this).val().replace(/\r/g, ''));
		$(this).val($(this).val().replace(/\r\n/g, ''));
		$(this).val($(this).val().replace(/\n\r/g, ''));
	});
}
