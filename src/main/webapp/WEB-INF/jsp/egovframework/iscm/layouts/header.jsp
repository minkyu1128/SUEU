<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<title>우편 발송시스템</title>
	<h1 class="logo">
		<a href="#" onclick="javascript:location.href='<c:url value='/pss/main/main.do'/>';"><img src="<c:url value="/images/egovframework/pss/logo_top.png"/>" alt="엑스아이티" /></a>
	</h1>
	<div class="gnb_bx">
		<ul id="gnb">
			<li class="lst01">
				<a href="javascript:;">발송 등록관리</a><!-- gnb원뎁스 활성화시에 a태그에 class명 .on 삽입 -->
				<ul class="depth02">
					<li><a href="<c:url value="/post/ma/10/main.do"/>">우편물 등록</a></li><!-- gnb 투뎁스 활성화시에 a태그에 class명 .on 삽입 -->
<%-- 					<li><a href="<c:url value="/post/ma/20/main.do"/>">우편물 발송</a></li> --%>
					<li><a href="<c:url value="/post/ma/30/main.do"/>">우편물 조회</a></li>
				</ul>
			</li>
<!-- 			<li> -->
<!-- 			<li class="lst02"> -->
<!-- 				<a href="javascript:;">발송 정보관리</a> -->
<!-- 				<ul class="depth02"> -->
<%-- 					<li><a href="<c:url value="/post/mb/10/main.do"/>">발송자료 관리</a></li> --%>
<%-- 					<li><a href="<c:url value="/post/mb/20/main.do"/>">반송자료 관리</a></li> --%>
<%-- 					<li><a href="<c:url value="/post/mb/30/main.do"/>">발송현황/반송현황 관리</a></li> --%>
<!-- 				</ul> -->
<!-- 			</li> -->
<!-- 			<li> -->
			<li class="lst03">
				<a href="javascript:;">정산관리</a>
				<ul class="depth02">
					<li><a href="<c:url value="/post/mc/10/main.do"/>">정산관리</a></li>
					<li><a href="<c:url value="/post/mc/20/main.do"/>">우편물 발송현황</a></li>
				</ul>
			</li>
<!-- 			<li> -->
			<li class="lst04">
				<a href="javascript:;">게시판</a>
				<ul class="depth02">
					<li><a href="<c:url value="/post/md/10/main.do"/>">공지사항</a></li>
					<li><a href="<c:url value="/post/md/20/main.do"/>">자료실</a></li>
				</ul>
			</li>
<!-- 			<li> -->
			<li class="lst05">
				<a href="#javascript:;">시스템관리</a>
				<ul class="depth02">
					<li><a href="<c:url value="/post/me/10/main.do"/>">사용자 관리</a></li>
					<li><a href="<c:url value="/post/me/20/main.do"/>">부서 관리</a></li>
					<li><a href="<c:url value="/post/me/30/main.do"/>">우편물 관리</a></li>
					<li><a href="<c:url value="/post/me/40/main.do"/>">코드 관리</a></li>
					<li><a href="<c:url value="/post/me/50/main.do"/>">등기번호 관리</a></li>
				</ul>
			</li>
			<ul>
				<br/>
				${pssLoginVO.name }(${pssLoginVO.id }) 님
				<a href="javascript:openDialog('beforeLogoutMsgDialog', '로그아웃 하시겠습니까?', '', '');">
					<img alt="로그아웃" src="<c:url value="/images/egovframework/com/logout_btn.gif"/>"/>
				</a>
			</ul>
		</ul><!-- gnb -->
		<div class="gnb_bg">&nbsp;</div>
	</div><!-- gnb_bx -->
<form id="logoutForm">
</form>
<script type="text/javascript">

</script>