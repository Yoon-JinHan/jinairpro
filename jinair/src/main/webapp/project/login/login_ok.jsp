<%@page import="net.sf.json.JSONObject"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	JSONObject jObj = (JSONObject)request.getAttribute("jObj");
%>
<%= jObj %>