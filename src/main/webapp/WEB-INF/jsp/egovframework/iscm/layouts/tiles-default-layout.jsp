<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles" %>
<% String contextPath = request.getContextPath(); %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<%@ include file="/WEB-INF/jsp/egovframework/iscm/cmmn/includeCmmn.jsp" %>
	<title>정보보호인증관리시스템</title>
</head>
<body class="fixed-nav sticky-footer bg-dark" id="page-top">
	<t:insertAttribute name="header"/>
	<div class="content-wrapper">
		<t:insertAttribute name="content"/>
    	<!-- Custom scripts for this page-->
		<script src="<%=contextPath %>/common/bootstrapTemplete/js/sb-admin-charts.min.js"></script>
		<t:insertAttribute name="footer"/>
	</div>
</body>
</html>

