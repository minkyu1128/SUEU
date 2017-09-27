<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<%@ include file="/WEB-INF/jsp/egovframework/iscm/cmmn/includeCmmnLib.jsp" %>
	<c:set var="aaa" value="aaa"></c:set>
</head>
<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<!-- 사이드바 내용 -->
			<div class="span2">
				<t:insertAttribute name="header"/>
			</div>
			<div class="span10">
				<!-- 본문 내용 -->
				<t:insertAttribute name="content"/>
			</div>
		</div>
	</div>
</body>
</html>

