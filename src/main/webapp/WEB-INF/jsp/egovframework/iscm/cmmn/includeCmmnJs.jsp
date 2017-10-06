<% String jsContextPath = request.getContextPath(); %>

<!-- javascript -->
	<script type="text/javascript" src="<%=jsContextPath%>/common/jquery/js/jquery-3.2.0.min.js" ></script>
	<script type="text/javascript" src="<%=jsContextPath%>/common/jquery/js/jquery-ui.js" ></script>
	<script type="text/javascript" src="<%=jsContextPath%>/common/jquery/js/jquery.mtz.monthpicker.js"></script>

<!-- templete -->
	<!-- Bootstrap core JavaScript-->
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/jquery/jquery.min.js"></script>
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/popper/popper.min.js"></script>
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/bootstrap/js/bootstrap.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/chart.js/Chart.min.js"></script>
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/datatables/jquery.dataTables.js"></script>
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/vendor/datatables/dataTables.bootstrap4.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/js/sb-admin.min.js"></script>
    <!-- Custom scripts for this page-->
    <script src="<%=jsContextPath%>/common/bootstrapTemplete/js/sb-admin-datatables.min.js"></script>
<%--     <script src="<%=jsContextPath%>/common/bootstrapTemplete/js/sb-admin-charts.min.js"></script> --%>


<script type="text/javascript">
$(document).ready(function(){
// 	var loading = $('<img class="ajaxLoaderImg" src="<%=jsContextPath%>/images/egovframework/iscm/ajax-loader.gif').appendTo(document.body).hide();
// 	    var currentPosition = parseInt($(".ajaxLoaderImg").css("top")); 
// 		$(window).ajaxStart(function(){
// 	                         var docPx = $(document).height();        
// 	                         var scrollPx = $(window).scrollTop();    
// 	                         var scrollPer = (scrollPx/docPx)*100;    
// 	                         newPosition = parseInt(scrollPer)+currentPosition;
// 	                         $('.ajaxLoaderImg').css('top',newPosition+'%');
// 	                         $('.ajaxLoaderImg').css('z-Index','999');
// 	                         loading.show();});
// 		$(window).ajaxStop(function(){loading.hide();});
		
		
// 		$.ajaxSetup({
// 			cache : false,
// 			beforeSend:function(jqXhr, settings) {
// 		        jqXhr.setRequestHeader('AJAX',true);
// 		    }
// 		});
		
// 		fnCmmnInitDialog(true, 'ajaxErrorDialog', 'Error!');
// 		$( document ).ajaxError(function( event, jqxhr, settings, thrownError ){
// 			$('#ajaxErrorDialog').html(jqxhr.responseText);
// 			$('#ajaxErrorDialog').dialog('open');
// 		});
});
</script>
