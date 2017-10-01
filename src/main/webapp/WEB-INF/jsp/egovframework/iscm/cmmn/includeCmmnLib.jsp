<!-- meta -->
<!-- 	<meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
	<meta http-equiv="X-UA-Compatible" content="IE=10" />

<!-- egov taglib -->
	<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>

<!-- jstl taglib -->
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
	<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!-- CSS -->
	<link rel="stylesheet" href="<c:url value="/common/jquery/css/jquery-ui.css"/>" />
<%-- 	<link rel="stylesheet" href="<c:url value="/common/bootstrap/css/bootstrap.min.css"/>" /> --%>

<!-- javascript -->
	<script type="text/javascript" src="<c:url value="/common/jquery/js/jquery-3.2.0.min.js"/>" ></script>
	<script type="text/javascript" src="<c:url value="/common/jquery/js/jquery-ui.js"/>" ></script>
	<script type="text/javascript" src="<c:url value="/common/jquery/js/jquery.mtz.monthpicker.js"/>"></script>
<%-- 	<script type="text/javascript" src="<c:url value="/common/bootstrap/js/bootstrap.min.js"/>"></script> --%>

<!-- templete -->
	<!-- Dynamic View -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Bootstrap core CSS-->
  	<link href="<c:url value="/common/bootstrapTemplete/vendor/bootstrap/css/bootstrap.min.css"/>" rel="stylesheet">
  	<!-- Custom fonts for this template-->
  	<link href="<c:url value="/common/bootstrapTemplete/vendor/font-awesome/css/font-awesome.min.css"/>" rel="stylesheet" type="text/css">
  	<!-- Page level plugin CSS-->
  	<link href="<c:url value="/common/bootstrapTemplete/vendor/datatables/dataTables.bootstrap4.css"/>" rel="stylesheet">
  	<!-- Custom styles for this template-->
  	<link href="<c:url value="/common/bootstrapTemplete/css/sb-admin.css"/>" rel="stylesheet">
	<!-- Bootstrap core JavaScript-->
    <script src="<c:url value="/common/bootstrapTemplete/vendor/jquery/jquery.min.js"/>"></script>
    <script src="<c:url value="/common/bootstrapTemplete/vendor/popper/popper.min.js"/>"></script>
    <script src="<c:url value="/common/bootstrapTemplete/vendor/bootstrap/js/bootstrap.min.js"/>"></script>
    <!-- Core plugin JavaScript-->
    <script src="<c:url value="/common/bootstrapTemplete/vendor/jquery-easing/jquery.easing.min.js"/>"></script>
    <!-- Page level plugin JavaScript-->
    <script src="<c:url value="/common/bootstrapTemplete/vendor/chart.js/Chart.min.js"/>"></script>
    <script src="<c:url value="/common/bootstrapTemplete/vendor/datatables/jquery.dataTables.js"/>"></script>
    <script src="<c:url value="/common/bootstrapTemplete/vendor/datatables/dataTables.bootstrap4.js"/>"></script>
    <!-- Custom scripts for all pages-->
    <script src="<c:url value="/common/bootstrapTemplete/js/sb-admin.min.js"/>"></script>
    <!-- Custom scripts for this page-->
    <script src="<c:url value="/common/bootstrapTemplete/js/sb-admin-datatables.min.js"/>"></script>
    <script src="<c:url value="/common/bootstrapTemplete/js/sb-admin-charts.min.js"/>"></script>

<script type="text/javascript">
$(document).ready(function(){
	var loading = $('<img class="ajaxLoaderImg" src="<c:url value="/images/egovframework/iscm/ajax-loader.gif"/>"/>').appendTo(document.body).hide();
	    var currentPosition = parseInt($(".ajaxLoaderImg").css("top")); 
		$(window).ajaxStart(function(){
	                         var docPx = $(document).height();        
	                         var scrollPx = $(window).scrollTop();    
	                         var scrollPer = (scrollPx/docPx)*100;    
	                         newPosition = parseInt(scrollPer)+currentPosition;
	                         $('.ajaxLoaderImg').css('top',newPosition+'%');
	                         $('.ajaxLoaderImg').css('z-Index','999');
	                         loading.show();});
		$(window).ajaxStop(function(){loading.hide();});
		
		
		$.ajaxSetup({
			cache : false,
			beforeSend:function(jqXhr, settings) {
		        jqXhr.setRequestHeader('AJAX',true);
		    }
		});
		
		fnCmmnInitDialog(true, 'ajaxErrorDialog', 'Error!');
		$( document ).ajaxError(function( event, jqxhr, settings, thrownError ){
			$('#ajaxErrorDialog').html(jqxhr.responseText);
			$('#ajaxErrorDialog').dialog('open');
		});
});
</script>
