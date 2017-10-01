<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/egovframework/iscm/cmmn/includeCmmnLib.jsp" %>

	<div class="info_lst_bx">
		<h2 class="tit">미반환차량 현황</h2>
		<div class="info_bx">
			<ul class="info_lst">
				<li>
					<strong class="tit">금일입고 : </strong>
					<span class="nm"></span>
				</li>
				<li>
					<strong class="tit">금일출고 : </strong>
					<span class="nm"></span>
				</li>
				<li>
					<strong class="tit">잔존차량 : </strong>
					<span class="nm"></span>
				</li>
				<li class="red_lst">
					<strong class="tit">현금수납 : </strong>
					<span class="nm"></span>
				</li>
				<li class="red_lst">
					<strong class="tit">카드수납 : </strong>
					<span class="nm"></span>
				</li>
				<li class="red_lst">
					<strong class="tit">총  수  납 : </strong>
					<span class="nm"></span>
				</li>
			</ul><!-- info_lst -->
		</div><!-- info_bx -->
		<div class="ref_bx">
			<a href="#" class="btn_ref" onclick="javascript:fnLeftRefresh();return false;">
				<span class="tit">
					<span class="txt">갱</span>
					<span class="txt">신</span>
				</span><!-- tit -->
			</a><!-- btn_ref -->
			
			<div class="ref_nm_bx">
				<strong class="tit">차량번호</strong>
				<div class="car_nm_bx">
					<ul class="nm_lst">
<!-- 						<li><a href="javascript:fnMovePage();">22나 1234</a></li> -->
<!-- 						<li><a href="javascript:fnMovePage();">22나 1234</a></li> -->
<!-- 						<li><a href="javascript:fnMovePage();">22나 1234</a></li> -->
<!-- 						<li><a href="javascript:fnMovePage();">22나 1234</a></li> -->
<!-- 						<li><a href="javascript:fnMovePage();">22나 1234</a></li> -->
<!-- 						<li><a href="javascript:fnMovePage();">22나 1234</a></li> -->
					</ul><!-- nm_lst -->
				</div><!-- car_nm_bx -->
				
				<div class="ref_logout_bx" style="bottom: 0px;">
					<strong>
						<c:out value="${loginVO.name }"/>
						(<c:out value="${loginVO.id }"/>)
					</strong>
					<p/>
					<a href="javascript:openDialog('beforeLogoutMsgDialog', '로그아웃 하시겠습니까?', '', '');">
						<img alt="로그아웃" src="<c:url value="/images/egovframework/com/logout_btn.gif"/>"/>
					</a>
				</div>
			</div><!-- ref_nm_bx -->
			
		</div><!-- ref_bx -->
	</div><!-- info_bx -->

<form id="leftForm" method="post">
	<input type="hidden" name="sigunCode">		<!-- 시군코드 -->
	<input type="hidden" name="towngDe">		<!-- 견인일자 -->
	<input type="hidden" name="towngManageNo">	<!-- 견인관리번호 -->
	<input type="hidden" name="dpstryManageId">	<!-- 보관소관리ID -->
	<input type="hidden" name="tilesUseAt" value="false">	<!-- 타일즈 사용여부 -->

</form>
<form id="logoutForm">
</form>
<script type="text/javascript">
	var $left = $.noConflict();

	function fnLogout(){
		$left('#logoutForm').attr('action','<c:url value='/pss/login/logout.do'/>');
		$left('#logoutForm').submit();
	}

	$(document).ready(function(){
		
		//새로고침 타이머 설정
		setInterval(fnLeftRefresh,15*60*1000);
		fnLeftRefresh();
		
		fnCmmnInitDialog(true,					// div tag를 생성
				'beforeLogoutMsgDialog',	// container id(중복되지 않는 임의의 id를 사용)
				'로그아웃',				// 대화상자의 title
				350,				// width
				200,				// height
				{					// buttons
					'예(Y)'	: function () {
						fnLogout();
						$(this).dialog('close');
					},
					'아니오(N)'	: function () {
						$(this).dialog('close');
					}
				});
	});

	function fnMovePage(sigunCode, towngDe, towngManageNo, dpstryManageId){
		var url = location.pathname;
		if(url.indexOf('/pss/')>-1){
			url = '<c:url value="/tm/20/main.do"/>';
		}else if(url.indexOf('/tm/')<0){
			return false;
		}
		$left('#leftForm input[name="sigunCode"]').val(sigunCode);
		$left('#leftForm input[name="towngDe"]').val(towngDe);
		$left('#leftForm input[name="towngManageNo"]').val(towngManageNo);
		$left('#leftForm input[name="dpstryManageId"]').val(dpstryManageId);
		$left('#cont').load(url,$('#leftForm').serialize());
	}
	function fnLeftRefresh(){
		var url = '<c:url value="/left/main.do"/>';
		$left.ajax({
			url		:url,
			type	:'post',
			data	:$('#leftForm').serialize(),
			dataType:'json',
			asynsc:false,
			beforSend: function(jqXhr, settings){

			},
			error: function(jqXHR, textStatus, errorThrown){
				alert('미반환차량 현황 조회 실패');
			},
			success: function(data, jqXHR, textStatus){
				fnLeftDraw(data);
			},
			complete: function(jqXHR, textStatus){
			}
		});
	}
	function fnLeftDraw(obj){
		var detail=$left('.info_bx').children('.info_lst').children('li').children('span');
		detail.eq(0).text(obj.vo.todayInputCnt);
		detail.eq(1).text(obj.vo.todayOutputCnt);
		detail.eq(2).text(obj.vo.todayRemainCnt);
		detail.eq(3).text(obj.vo.sunabCoinCnt);
		detail.eq(4).text(obj.vo.sunabCardCnt);
		detail.eq(5).text(obj.vo.sunabTotCnt);

		var carList=$('.car_nm_bx').children('.nm_lst');
		var rows="";
		for(var i=0; i<obj.list.length; i++){
			rows+="<li onclick=\"javascript:fnMovePage('"+obj.list[i].sigunCode+"','"+obj.list[i].towngDe+"','"+obj.list[i].towngManageNo+"','"+obj.list[i].dpstryManageId+"'); return false;\">";
			rows+="<a href=\"#\">"+ obj.list[i].towtgVhcleNo +"</a>";
			rows+="</li>"
		}
		carList.children().remove();
		carList.append(rows);
	}

</script>