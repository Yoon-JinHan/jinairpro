<%@ page contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 작성</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
</head>
<body>
<style>
  a{
     text-decoration: none;
     color:black;
   }
   table,  tr, td {
    border-radius: 3px;
   }
</style>
<body>
<!-- write.do로 post방식 -->
<form name="form1" method="post">
 <table width="1000px" style="margin:50px auto" border="1">
   <tr>
     <td colspan="2" align="right">
       <a href="/jinair/project/faqList.do">글목록</a>
     </td>
   </tr>
   <tr>
     <td width="70" align="center">분류</td>
     <td width="330">
       <select name="fgroup" id="ctg" onchange="fnCngList(this.value);">
       		<option value="">대분류</option>
       		<option value="항공권 예매">항공권 예매</option>
       		<option value="할인제도">할인제도</option>
       		<option value="프로모션">프로모션</option>
       		<option value="체크인(수속)">체크인(수속)</option>
       		<option value="수하물">수하물</option>
       		<option value="도움이 필요하신 고객">도움이 필요하신 고객</option>
       		<option value="기내서비스">기내서비스</option>
       		<option value="홈페이지">홈페이지</option>
       		<option value="공동운항">공동운항</option>
       		<option value="나비포인트">나비포인트</option>
       		<option value="기타">기타</option>
       </select>
     </td>
   </tr>
   <tr>
     <td width="70" align="center">소분류</td>
     <td width="330">
       <select name="fgroup2" id="ctg_nm">
       		<option value="">소분류</option>
       </select>
     </td>
   </tr>
   <tr>
     <td width="70" align="center">질문</td>
     <td width="330">
       <input type="text" name="title" size="50" value="${dto.title }">
     </td>
   </tr>
   <tr>
     <td width="70" align="center">답변</td>
     <td width="330">
       <textarea rows="13" cols="50" name="content" id="p_content">${dto.content }</textarea>
       <script type="text/javascript"> CKEDITOR.replace('p_content', {height:500});</script>
     </td>
   </tr>
   <tr>
     <td colspan="2" align="center">
       <input type="submit" value="수정">
       <input type="reset" value="다시작성">
     </td>
   </tr>
 </table>
</form>
<script>
	function fnCngList(sVal){
		var f=document.form1;
		var opt=$("#ctg_nm option").length;
		
		if(sVal==""){
			num=new Array("소분류");
			vnum=new Array("");
		}else if(sVal=="항공권 예매"){
			num=new Array("예약,결제","변경,환불","사전좌석지정","지니플러스 좌석","번들 서비스","기타(영수증 발급 등)");
			vnum=new Array("예약,결제","변경,환불","사전좌석지정","지니플러스 좌석","번들 서비스","기타(영수증 발급 등)");
		}else if(sVal=="할인제도"){
			num=new Array("가족운임 할인제도", "제주,재외,명예도민 할인제도","기타 제휴 할인");
			vnum=new Array("가족운임 할인제도", "제주,재외,명예도민 할인제도","기타 제휴 할인");
		}else if(sVal="프로모션"){
			num=new Array("진MARKET","슬림한 진");
			vnum=new Array("진MARKET","슬림한 진");
		}else if(sVal="체크인(수속)"){
			num=new Array("공항 체크인", "웹,모바일 체크인", "셀프 체크인", "여행서류");
			vnum=new Array("공항 체크인", "웹,모바일 체크인", "셀프 체크인", "여행서류");
		}else if(sVal="수하물"){
			num=new Array("휴대 수하물", "위탁 수하물", "기내 유실물", "수하물 배상");
			vnum=new Array("휴대 수하물", "위탁 수하물", "기내 유실물", "수하물 배상");			
		}else if(sVal="도움이 필요하신 고객"){
			num=new Array("유아동반,임산부 고객","반려동물과 여행하는 고객","몸이 불편하신 고객","보조호흡장치 사용 고객");
			vnum=new Array("유아동반,임산부 고객","반려동물과 여행하는 고객","몸이 불편하신 고객","보조호흡장치 사용 고객");
		}else if(sVal="기내서비스"){
			num=new Array("기내식", "기내유상판매", "기내 면세품", "기타 서비스");
			vnum=new Array("기내식", "기내유상판매", "기내 면세품", "기타 서비스");
		}else if(sVal="홈페이지"){
			num=new Array("회원가입,변경","비회원","탈퇴","기타");
			vnum=new Array("회원가입,변경","비회원","탈퇴","기타");
		}else if(sVal="공동운항"){
			num=new Array("대한항공 공동운항");
			vnum=new Array("대한항공 공동운항");
		}else if(sVal="나비포인트"){
			num=new Array("적립,소멸","사용(보너스 항공권)");
			vnum=new Array("적립,소멸","사용(보너스 항공권)");
		}else if(sVal="기타"){
			num=new Array("회사안내", "고객센터","제휴,문의 등");
			vnum=new Array("회사안내", "고객센터","제휴,문의 등");
		}
		
		for(var i=0;i<opt;i++){
			f.fgroup2.options[i]=null;
		}
		
		for(k=0;k<num.length;k++){
			f.fgroup2.options[k]=new Option(num[k],vnum[k]);
		}
		
	}
</script>

</body>
</html>