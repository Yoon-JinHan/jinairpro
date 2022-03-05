<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
	
	String searchType = request.getParameter("searchType");
	String origin1 = request.getParameter("origin1");
	String destination1 = request.getParameter("destination1");
	String travelDate1 = request.getParameter("travelDate1");
	String origin2 = request.getParameter("origin2");
	String destination2 = request.getParameter("destination2");
	String travelDate2 = request.getParameter("travelDate2");
	String origin3 = request.getParameter("origin3");
	String destination3 = request.getParameter("destination3");
	String travelDate3 = request.getParameter("travelDate3");
	String origin4 = request.getParameter("origin4");
	String destination4 = request.getParameter("destination4");
	String travelDate4 = request.getParameter("travelDate4");
	String pointOfPurchase = request.getParameter("pointOfPurchase");
	String adultPaxCount = request.getParameter("adultPaxCount");
	String childPaxCount = request.getParameter("childPaxCount");
	String infantPaxCount = request.getParameter("infantPaxCount");
	String tripType = request.getParameter("tripType");
	
	
	String isGroup = request.getParameter("isGroup");
	String cpnNo = request.getParameter("cpnNo");
	String promoCode = request.getParameter("promoCode");
	String refVal = request.getParameter("refVal");
	String refPop = request.getParameter("refPop");
	String refChannel = request.getParameter("refChannel");
	String refLang = request.getParameter("refLang");

	System.out.println("origin1 : " + origin1);
%>