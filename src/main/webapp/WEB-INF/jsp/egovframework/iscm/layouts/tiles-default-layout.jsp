<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<%@ include file="/WEB-INF/jsp/egovframework/iscm/cmmn/includeCmmnLib.jsp" %>
</head>
<body class="fixed-nav sticky-footer bg-dark" id="page-top">
	<t:insertAttribute name="header"/>
	<div class="content-wrapper">
		<t:insertAttribute name="content"/>
	</div>
</body>
</html>

