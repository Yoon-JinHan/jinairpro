<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
		  
<meta http-equiv="Content-Language" content="ko-KR">
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr"><meta name="keywords" content="">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="format-detection" content="telephone=no">
<link href="https://img4.kmcert.com/kmcis/new_web/css/common.css?ver=211201" media="screen" rel="stylesheet">
<link href="https://img4.kmcert.com/kmcis/new_web/css/site.css?ver=211202" media="screen" rel="stylesheet">

<title>휴대폰 인증 정보</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<style>
	.moblieInput{
		padding: 20px;
		width: 480px;
	}
</style>
</head>
<body>

<form id="cplogn" name="cplogn" method="post" action="termsAgree.jsp">
	<div class="moblieInput">
		  <fieldset>
			<legend>휴대폰 본인확인 입력</legend>
			<ul class="frm_type">
			  <li class="name">
				<h3><label for="username">이름</label></h3>
				<div class="input input_del">
				  <input type="text" autocomplete="name" name="userName" id="userName" placeholder="성명입력" title="이름" value="">
				</div>
			  </li>
			  <li class="mynum">
				<h3><label for="mynum1">생년월일/성별</label></h3>
				<ul class="ui_cols">
				  <li>
					<span class="input input_mynum">
					  <input type="text" name="birth" id="birth" maxlength="6" title="주민등록번호 앞 6자리" value="">
					  <span class="mark firsChild" id="mynum1_mark"><i></i><i></i><i></i><i></i><i></i><i></i></span>
					</span>
				  </li>
				  <li><i></i></li>
				  <li>
					<span class="input input_mynum last">
					  <input type="text" name="sex" id="sex" maxlength="1" title="주민등록번호 7번째 자리" value="">
					  <span class="mark firstChild" id="mynum2_mark"><i></i></span>
					</span>
					<span class="mynum_after"><code class="blind"></code><i></i><i></i><i></i><i></i><i></i><i></i></span>
				  </li>
				</ul>
			  </li>
			  <li>
				<h3><label for="mobileno">휴대폰번호</label></h3>
				<div class="input input_del">
				  <input type="text" name="mobileno" id="mobileno" placeholder="숫자만 입력" title="휴대폰번호" maxlength="11" value="">
				</div>
			  </li>
			</ul>
		  </fieldset>
		  <div class="certi_btn_area">
			<ul class="btn_area2 bt2">
			  <li><button type="button" id="btnCancel" class="btn_r btn_type6" onclick="top.window.close();">취소</button></li>
			  <li><button type="button" id="btnSubmit" class="btn_r btn_type btn_type3">확인</button></li>
			</ul>
	  	</div>
	</div>
</form>

<script>	
window.onload=function(){
	  var btnSubmit = document.getElementById('btnSubmit');
	  var birthdayCheck = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;

	  btnSubmit.onclick=function(){
		  if( $("#userName").val() == '' ){
			  alert("이름을 입력해주세요.");
		  } else if( $("#birth").val() == ''){
			  alert("생년월일을 입력해주세요.")
		  } else if($("#sex").val() == '' ){
			  alert("성별을 입력해주세요.")
		  } else if($("#mobileno").val() == '' ){
			  alert("휴대폰번호를 입력해주세요.")
		  } else if( !birthdayCheck.test( $("#birth").val() ) ){
			  alert("올바른 생년월일이 아닙니다.")
		  } else {
			  var cplogn = document.getElementById('cplogn');
	           
			    cplogn.action="<%=request.getContextPath()%>/project/member/membermobilecheck.do"; 
			    window.opener.name="termsAgree";
			   	document.cplogn.target= "termsAgree"; //호출하고자하는 부모창의 이름	 
			   	cplogn.submit();
			   	top.window.close(); // 창닫기
			   	cplogn.reloadPage();  
		  }
	  }
};
</script>

</body>
</html>