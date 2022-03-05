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
	int currentPage=1;
	//Integer.parseInt(request.getParameter("jsonparam"));
	int numberPerPage=10;
	int numberOfPageBlock=2;
	int begin=(currentPage-1)*numberPerPage+1;
	int end=begin + numberPerPage-1;
	int totalRecords=0;
	int totalPages=0;
	
	String sql="select * "
			+ " from( "
			+ "     select rownum no, t.* "
			+ "	    from( "
			+ "	        select distinct e_name, prize_event.e_no, prize_event.p_date "
			+ "	        from event join prize_event on event.e_no=prize_event.e_no "
			+ "	        order by prize_event.e_no desc "
			+ "	    )t "
			+ "	)b "
			+ " order by no desc ";

	
	JSONObject jsonData=new JSONObject();
	JSONArray jsonEventArray=new JSONArray();
	
	try{
		con=ConnectionProvider.getConnection();
		pstmt=con.prepareStatement(sql);
		rs=pstmt.executeQuery();
		
		while(rs.next()){
			String no=rs.getString("no");
			String eName=rs.getString("e_name");
			String eNo=rs.getString("e_no");
			String date=rs.getString("p_date");
			
			String[] oriDate=date.split(" ");
			date=oriDate[0];
			
			JSONObject event=new JSONObject();
			
			event.put("no", no);
			event.put("eName", eName);
			event.put("eNo",eNo);
			event.put("date",date);
			
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