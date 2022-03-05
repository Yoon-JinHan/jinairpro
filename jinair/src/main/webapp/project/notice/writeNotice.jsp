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
<form  method="post">
 <table width="1000px" style="margin:50px auto" border="1">
   <tr>
     <td colspan="2" align="right">
       <a href="/jinair/project/noticeList.do">글목록</a>
     </td>
   </tr>
   <tr>
     <td width="70" align="center">제목</td>
     <td width="330">
       <input type="text" name="title" size="50" >
     </td>
   </tr>
   <tr>
     <td width="70" align="center">내용</td>
     <td width="330">
       <textarea rows="13" cols="50" name="content" id="p_content"></textarea>
       <script type="text/javascript"> CKEDITOR.replace('p_content', {height:500});</script>
     </td>
   </tr>
   <tr>
     <td colspan="2" align="center">
       <input type="submit" value="글쓰기">
       <input type="reset" value="다시작성">
     </td>
   </tr>
 </table>
</form>
</body>
</html>