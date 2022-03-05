<%@page import="net.sf.json.JSONArray"%>
<%@page import="net.sf.json.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<%
	JSONObject jsonData = new JSONObject();
	jsonData.put("title","가는날");
	jsonData.put("p_startDate","2022-01-10(월)");
	jsonData.put("p_endDate","2022-01-17(월)");
	jsonData.put("p_paxADT",1);
	jsonData.put("p_paxCHD",0);
	jsonData.put("p_paxINF",0);
	jsonData.put("p_depCity","GMP");
	jsonData.put("p_arrCity","CJU");
	jsonData.put("p_tripType","RT");
	jsonData.put("p_selectedDate","");
	jsonData.put("layerId","113");
%>
<%= jsonData %>





<%-- 
<%
String data = "{
"title":"가는날",
"p_startDate":"2022-01-10(월)",
"p_endDate":"2022-01-17(월)",
"p_paxADT":1,
"p_paxCHD":0,
"p_paxINF":0,
"p_depCity":"GMP",
"p_arrCity":"CJU",
"p_tripType":"RT",
"p_selectedDate":"",
"layerId":"113",
}"
%>
 --%>