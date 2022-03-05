<%@page import="com.util.JdbcUtil"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="net.sf.json.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	Connection con=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	int currentPage=Integer.parseInt(request.getParameter("page"));
	int numberPerPage=10;
	int pageBlock=10;
	
	String sql="select count(*) "
		+"	from(select distinct prize_event.e_no "
		+"	from event join prize_event on event.e_no=prize_event.e_no) ";
	
	JSONObject jsonData=new JSONObject();
	JSONArray jsonEventArray=new JSONArray();
	
	int totalPages=0;
	int totalRecords=0;
	
	try{
		con=ConnectionProvider.getConnection();
		pstmt=con.prepareStatement(sql);
		rs=pstmt.executeQuery();
		rs.next();
		totalRecords=rs.getInt(1);
		totalPages=(int)Math.ceil((double)totalRecords/numberPerPage);
		
		JSONObject paging=new JSONObject();
		
		paging.put("totalPages",totalPages);
		
		jsonEventArray.add(paging);
	}catch(Exception e){
		e.printStackTrace();
	}finally{
		JdbcUtil.close(rs);
		JdbcUtil.close(pstmt);
		JdbcUtil.close(con);
	}

	jsonData.put("paging", jsonEventArray);
%>
<%=jsonData%>