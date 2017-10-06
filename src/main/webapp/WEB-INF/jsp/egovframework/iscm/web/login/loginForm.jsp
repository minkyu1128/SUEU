<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
	  <meta charset="utf-8">
	  <meta name="description" content="">
	  <meta name="author" content="">
	  <%@ include file="/WEB-INF/jsp/egovframework/iscm/cmmn/includeCmmn.jsp" %>
	  
	  <title>ISCM 로그인</title>
	  
	  <script type="text/javascript">
		$(document).ready(function(){
	
			var msg = '${message}';
			if(msg!=''){
// 				alert(msg);
			}
		});
	
	
		/**
		* 로그인
		*/
		function fnLogin(){
			var id = $('#input_id').val();
			var password = $('#input_pwd').val();
	
			$('#form, input[name="id"]').val(id);
			$('#form, input[name="password"]').val(password);
			$('#form').attr('action','<c:url value="/login/login.do"/>');
			$('#form').submit();
		}
	
	</script>
	  
	</head>
	
	<body class="bg-dark">
	  <div class="container">
	    <div class="card card-login mx-auto mt-5">
	      <div class="card-header">정보보호인증관리</div>
	      <div class="card-body">
	        <form id="form" name="form" action="#" method="post">
	        	<input type="hidden" name="id">
	        	<input type="hidden" name="password">
	        	<input type="hidden" name="userSe" value="USR">
	        	
	<!--           <div class="form-group"> -->
	<!--             <label for="exampleInputEmail1">Email address</label> -->
	<!--             <input class="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email"> -->
	<!--           </div> -->
	<!--           <div class="form-group"> -->
	<!--             <div class="form-check"> -->
	<!--               <label class="form-check-label"> -->
	<!--                 <input class="form-check-input" type="checkbox"> Remember Password</label> -->
	<!--             </div> -->
	<!--           </div> -->
	          <div class="form-group">
	            <label for="input_id">ID</label>
	            <input class="form-control" id="input_id" type="email" aria-describedby="emailHelp" placeholder="아이디">
	          </div>
	          <div class="form-group">
	            <label for="input_pwd">Password</label>
	            <input class="form-control" id="input_pwd" type="password" placeholder="패스워드">
	          </div>
	          <div class="form-group">
	            <div class="form-check">
	              <label class="form-check-label">
	                <input class="form-check-input" type="checkbox" id="chk_userCookie"> 로그인정보 기억하기
	              </label>
	            </div>
	          </div>
	          <a class="btn btn-primary btn-block" onclick="javascript: fnLogin(); return;">Login</a>
	        </form>
	        <div class="text-center">
	          <a class="d-block small mt-3" href="register.html">Register an Account</a>
	          <a class="d-block small" href="forgot-password.html">Forgot Password?</a>
	        </div>
	      </div>
	    </div>
	  </div>
	</body>

</html>
