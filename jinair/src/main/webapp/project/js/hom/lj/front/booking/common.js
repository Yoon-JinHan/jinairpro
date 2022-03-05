
$(function(){
    $.ajaxSetup({
        statusCode : {
            401	: function() {
                hideAlertLayer();
                alertLayerForCallback($.i18n.prop('lj.ibe.b2c.rsv.082'),afterFunc,null);
            },
            403	: function() {
                hideAlertLayer();
                alertLayerForCallback($.i18n.prop('lj.ibe.b2c.rsv.082'),afterFunc,null);
            }
        }
    });
})

var afterFunc = function (param) {
    location.href = '/booking/index';
};

// 소수점 표시 여부
var roundingCurrencyYN = false;

// 금액표시 (ex. 3000 => 3,000 )
function numberWithCommas(x) {
	
	if(x == null) {
		return '';
	}
	y = x.toString().split('.')[0];
	z = '';
	
	if (x.toString().split('.')[1]) {
		z = '.' + x.toString().split('.')[1];	
	}
	
    return y.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",") + z;
}
// float형의 sum을 구할 경우 사용.
// ** 99 + 4.05 + 29.97 => 133.01999999999998 이라는 값이 나옴. 이를 방지하기 위해 아래와 같이 처리한다.
// ex) var totalcharge = doTheSum([99, 4.05, 29.97]);
//     totalCharge ==> 133.02
function doTheSum(numbers) {
	
	var result = 0;
	var standard = 1000;
	
	for (var i = 0; i < numbers.length; i++) {
		result += numbers[i] * standard;
	}
	
	return result / standard;
}
// currency에 따라 amount를 다르게 표현한다.
function currencyFormat(amount, roundingCurrency) {
	
	var result = 0.0;
	try {
		result = parseFloat(amount);
	}
	catch(e) {
	}
	if (roundingCurrency != undefined) {
		if (typeof roundingCurrencyYN == 'boolean' && roundingCurrency === true) {
			// 소수점 2자리까지
			result = (result + 0.0).toFixed(2);
		}
	}
	else if (typeof roundingCurrencyYN == 'boolean' && roundingCurrencyYN === true) {
		// 소수점 2자리까지
		result = (result + 0.0).toFixed(2);
	}
	
	return numberWithCommas(result);
}
/* 숫자입력 정규식 */
function regExpNum(str,type){ 
    /* 
	    type 
	    -> 'int'   : 양의 정수 
	    -> 'float' : 양의 실수 
	    -> '-int'  : 음의 정수 포함 
	    -> '-int'  : 음의 실수 포함 
    */ 
    temp_value = str; 
    regexp = /[^-\.0-9]/g; 
    repexp = ''; 
    temp_value = temp_value.replace(regexp,repexp); 
    regexp = ''; 
    repexp = ''; 
    
    switch(type){ 
    
        case 'int' : regexp = /[^0-9]/g; 											break; 
        
        case 'float' : regexp = /^(-?)([0-9]*)(\.?)([^0-9]*)([0-9]*)([^0-9]*)/; 	break; 
        
        case '-int' : regexp = /^(-?)([0-9]*)([^0-9]*)([0-9]*)([^0-9]*)/;			break; 
        
        case '-float' : regexp = /^(-?)([0-9]*)(\.?)([^0-9]*)([0-9]*)([^0-9]*)/; 	break; 
        
        default : regexp = /[^0-9]/g; 												break; 
    } 
    
    switch(type){ 
    
        case 'int' : repexp = '';				break; 
        
        case 'float' : repexp = '$2$3$5';		break; 
        
        case '-int' : repexp = '$1$2$4';		break; 
        
        case '-float' : repexp = '$1$2$3$5'; 	break; 
        
        default : regexp = /[^0-9]/g; 			break; 
        
    } 
    
    temp_value = temp_value.replace(regexp,repexp); 
    return temp_value; 
} 

/* 한글입력 정규식 */
function regExpKo(str,type){ 
    /* 
	    type 
	    -> 'c' : 초성 포함 
	    -> 's' : 초성 포함 + 공백 포함 
	    -> ''  : 초성, 공백 무시 
    */ 
    temp_value = str; 
    regexp = ''; 
    repexp = ''; 

    switch(type){ 
    
        case 'c':  regexp = /[^ㄱ-ㅎ가-힣]/g;			break; 
        
        case 's':  regexp = /[^ㄱ-ㅎ가-힣\s]/g;		break; 
        
        case '' :  regexp = /[^가-힣]/g; 				break; 
        
        default :  regexp = /[^ㄱ-ㅎ가-힣\s]/g; 
    } 

    if(regexp.test(temp_value)) 
    { 
        temp_value = temp_value.replace(regexp,repexp);  
    } 
    
    return temp_value;
} 

/* 영어 입력 정규식  */
function regExpEn(str, type){ 
	
    temp_value = str, type; 
    regexp = ''; 
    repexp = ''; 
    
    switch(type){ 
    
        case 'small' : regexp = /[^a-z]/g;		break;
        
        case 'big' : regexp = /[^A-Z]/g;		break; 
        
        case 'all' : regexp = /[^a-z]/i;		break; 
        
        default : regexp = /[^a-z]/i;			break; 
        
    } 
    
    temp_value = temp_value.replace(regexp,repexp);
    
    return temp_value; 
} 

/* 이메일 아이디 입력 정규식  */
function regExpId(str){ 
	
    temp_value = str; 
    regexp = /[^0-9a-zA-Z][^_0-9a-zA-Z-]*/g;
    repexp = ''; 
    
    temp_value = temp_value.replace(regexp,repexp); 
    return temp_value; 
} 

//json 객체에서 특정키 에서 특정 value 를가지는 객체 반환하기.
function getObjects(obj, key, val) {
  var objects = [];
  for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] == 'object') {
          objects = objects.concat(getObjects(obj[i], key, val));
      } else if (i == key && obj[key] == val) {
          objects.push(obj);
      }
  }
  return objects;
}
//json 객체에서 특정키 에서 특정 키 를가지는 객체 반환하기.
function getObjectValues(obj, key) {
var objects = [];
for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
        objects = objects.concat(getObjectValues(obj[i], key));
    } else if (i == key ) {
        objects.push(obj[key]);
    }
}
return objects;
}

//url에서 파라메터 추출
function getQuerystring(paramName){ 
	var _tempUrl = window.location.search.substring(1); //url에서 처음부터 '?'까지 삭제 
	var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기
	for(var i = 0; _tempArray.length; i++) {
		var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기 
		if(_keyValuePair[0] == paramName){ // _keyValuePair[0] : 파라미터 명
			// _keyValuePair[1] : 파라미터 값
			return _keyValuePair[1]; 
		} 
	} 
}
// 문자 치환
// ex. replaceFormatString('{0}{0}, {1}입니다.', ['사과', '배']); ==> '사과사과, 배입니다.'
// format : String
// arr : String[]
function replaceFormatString(format, arr) {

	var result = format;

	$.each(arr, function(idx, item) {
		
		var replaceText = '\\{' + idx + '\\}';
		replaceText = eval('/' + replaceText +'/gi');
		result = result.replace(replaceText, item);
	});
	
	try {
		result = result.replace('{}', arr[0]);
	}
	catch(e) {
		
	}
	
	return result;
}

//ITR 확인(E-Ticket 확인증)
function fnPopupReceiptITR(pnrNo,channelCode){
	var param = {
		pnrNo : pnrNo,
		channelCode : channelCode,
		transactionId : ''
	}
	var receiptRQ = encodeURI(JSON.stringify(param));
	showPopupLayer('/popup/receiptITR?receiptRQ=' + receiptRQ);
}

// 신용카드 지불 확인증
function fnPopupReceiptCCPayment(pnrNo, channelCode, transactionId){
	var param = {
		pnrNo : pnrNo,
		channelCode : channelCode,
		transactionId : transactionId
	}
	var receiptRQ = encodeURI(JSON.stringify(param));
	showPopupLayer('/popup/receiptCCPayment?receiptRQ=' + receiptRQ);
}

// 지불 영수증
function fnPopupReceiptPayment(pnrNo, channelCode, transactionId){
	var param = {
		pnrNo : pnrNo,
		channelCode : channelCode,
		transactionId : transactionId
	}
	var receiptRQ = encodeURI(JSON.stringify(param));
	showPopupLayer('/popup/receiptPayment?receiptRQ=' + receiptRQ);
}
// 환불 영수증
function fnPopupReceiptRefund(pnrNo, channelCode, transactionId){
	var param = {
		pnrNo : pnrNo,
		channelCode : channelCode,
		transactionId : transactionId
	}
	var receiptRQ = encodeURI(JSON.stringify(param));
	showPopupLayer('/popup/receiptRefund?receiptRQ=' + receiptRQ);
}
// 영수증 재 호출
function fnPopReceiptReload( param ){
	hidePopupLayer();
	showPopupLayer(param);
}

// alertLayer (callBack 포함)
function alertLayerForCallback(message, afterFunc, param) {
	
	if (param == null || param == '') {
		param = {};
	}
	
	alertLayer(message, null, 'var func = ' + afterFunc + '(' + JSON.stringify(param) + ');' + 'var nothing = function() {}');
}

//날짜 포맷팅
function dateFormating(dateTime,formatString){
	var weekName = [$.i18n.prop('hom.ibe.rsv.lbl.sun'), $.i18n.prop('hom.ibe.rsv.lbl.mon'), $.i18n.prop('hom.ibe.rsv.lbl.tue'), $.i18n.prop('hom.ibe.rsv.lbl.wed'), $.i18n.prop('hom.ibe.rsv.lbl.thu'), $.i18n.prop('hom.ibe.rsv.lbl.fri'), $.i18n.prop('hom.ibe.rsv.lbl.sat')];
	var d = new Date(dateTime);
	 
	return formatString.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
	    switch ($1) {
	        case "yyyy": return d.getFullYear();
	        case "yy": return leadingZeros((d.getFullYear() % 1000),2);
	        case "MM": return leadingZeros((d.getMonth() + 1),2);
	        case "dd": return leadingZeros(d.getDate(),2);
	        case "E": return weekName[d.getDay()];
	        case "HH": return leadingZeros(d.getHours(),2);
	        case "hh": return leadingZeros(((h = d.getHours() % 12) ? h : 12),2);
	        case "mm": return leadingZeros(d.getMinutes(),2);
	        case "ss": return leadingZeros(d.getSeconds(),2);
	        case "a/p": return d.getHours() < 12 ? "오전" : "오후";
	        default: return $1;
	    }
	});
}

//자릿수 앞에 0채우기
function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (var i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

//해당 일자의 몇일 뒤 계산
function getCompareTime(date,value){
	var tempDate = new Date(date);
	tempDate.setDate(tempDate.getDate()+value);
	
	var compareDate = new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate());
	return compareDate;
}

//만 나이 계산
function calcAge(birth,depDate) {                 
    var date = depDate;
    var year = date.getFullYear() + "";
    var month = (date.getMonth()+1) + "";
    var day = date.getDate() + "";       

    if (Number(month) < 10) month = '0' + month;

    if (Number(day) < 10) day = '0' + day;

    var monthDay = month + day;	       

    birth = birth.replace('-', '').replace('-', '');

    var birthdayy = birth.substr(0, 4);
    var birthdaymd = birth.substr(4, 4);

    var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;

    return age;
}

//dobCheck로직
function dobCheck(domInt, guestType, birth, stratDt, endDt){
	var result = true;
	var depDate = new Date(Number(stratDt.substr(0,4)),Number(stratDt.substr(4,2))-1,Number(stratDt.substr(6,2)));
	var arrDate = "";
	var birthDate = null;
	if (birth != null && birth != "") {
		birthDate = new Date(Number(birth.substr(0,4)),Number(birth.substr(4,2))-1,Number(birth.substr(6,2)));	
	}
	if (endDt != null && endDt != "") {
		arrDate = new Date(Number(endDt.substr(0,4)),Number(endDt.substr(4,2))-1,Number(endDt.substr(6,2)));
	}
	else {
		arrDate = depDate;
	}
	
	if (domInt == "DOM"){
		switch (guestType) {
		case "CHILD":
			if (!((2<= calcAge(birth,depDate) && calcAge(birth,depDate) < 13)
					&& (2<= calcAge(birth,arrDate) && calcAge(birth,arrDate) < 13))) {				
				result =  false;
			}	
			break;
		case "INFANT":
			if (birthDate == null) {
				result =  false;
			}else if (!((getCompareTime(birthDate,13) < depDate && calcAge(birth,depDate) < 2)
					&& (getCompareTime(birthDate,13) < arrDate && calcAge(birth,arrDate) < 2))) {
				result =  false;
			}	
			break;
		default:
			if (birth != null && birth != "") {
				if (!(calcAge(birth,depDate) >= 13 && calcAge(birth,arrDate) >= 13)) {				
					result =  false;
				}	
			}
			break;
		}
	}
	else {
		switch (guestType) {
		case "CHILD":
			if (!(2<= calcAge(birth,depDate) && calcAge(birth,depDate) < 12)) {
				result =  false;
			}	
			break;
		case "INFANT":
			if (birthDate == null) {
				result =  false;
			}else if (!(getCompareTime(birthDate,13) < depDate && calcAge(birth,depDate) < 2)) {
				result =  false;
			}
			break;
		default:
			if (birth != null && birth != "") {
				if (!(calcAge(birth,depDate) >= 12)) {				
					result =  false;
				}
			}
			break;
		}
	}

	return result;
}

function rtnSuffix(suffix) {
	var rtn = "";
	if(suffix== undefined || suffix =="" || suffix =="*")
		rtn="";
	else
		rtn = suffix;
	return rtn;
}
 
function isEmpty(value) {
	return (value == null || value == undefined || value == "");
}