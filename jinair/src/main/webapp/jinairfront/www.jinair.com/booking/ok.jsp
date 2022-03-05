<%@page import="net.sf.json.JSON"%>
<%@page import="net.sf.json.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	JSONObject jsonObject = (JSONObject) request.getAttribute("jsonData");
	//System.out.print("asd");
	//String jsonObject = (String) request.getAttribute("fare");
	//String jsonObject = "{\"fare\":[{\"fare\":66000,\"fuel\":8800,\"tax\":4000}]}";
	System.out.println(jsonObject);
%>
<%= jsonObject %>