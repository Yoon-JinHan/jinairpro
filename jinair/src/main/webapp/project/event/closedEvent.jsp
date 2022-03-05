<%@page import="com.util.JdbcUtil"%>
<%@page import="java.sql.Date"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="com.util.ConnectionProvider"%>
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
	int numberPerPage=12;
	int pageBlock=10;
	int begin=(currentPage-1)*numberPerPage+1;
	int end=begin + numberPerPage-1;
	
	String sql="select * from(select rownum no, t.* from( "
			+" select e_no, e_name, to_char(sdate, 'yyyy-MM-dd') as sdate, to_char(edate, 'yyyy-MM-dd') as edate, banner "
			+" from event "
			+" where progress='종료' "
			+" )t "
			+" )b "
			+" where b.no between ? and ? ";
	
	JSONObject jsonData=new JSONObject();
	JSONArray jsonEventArray=new JSONArray();
	
	try{
		con=ConnectionProvider.getConnection();
		pstmt=con.prepareStatement(sql);
		pstmt.setInt(1, begin);
		pstmt.setInt(2, end);
		rs=pstmt.executeQuery();
		
		while(rs.next()){
			String linkUrl="/jinair/project/eventView.do?eNo="+rs.getString("e_no");
			String evntTitl=rs.getString("e_name");
			String displayDateStart=rs.getString("sdate");
			String displayDateEnd=rs.getString("edate");
			String banner=rs.getString("banner");
			
			JSONObject event=new JSONObject();
			
			event.put("linkUrl",linkUrl);
			event.put("evntTitl",evntTitl);
			event.put("displayDateStart",displayDateStart);
			event.put("displayDateEnd",displayDateEnd);
			event.put("banner",banner);
			
			jsonEventArray.add(event);
		}
	}catch(Exception e){
		e.printStackTrace();
	}finally{
		JdbcUtil.close(rs);
		JdbcUtil.close(pstmt);
		JdbcUtil.close(con);
	}
	jsonData.put("event", jsonEventArray);
%>
<%=jsonData%>