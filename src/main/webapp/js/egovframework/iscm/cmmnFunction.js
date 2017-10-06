$(document).ready(function () {

	// input 에서 B/S 눌렀을 경우 뒤로 가기 방지
	$(document).keydown(function (event) {
		if (event.which == 8) {
			var nodeName = event.target.nodeName;
			if (nodeName == 'INPUT' && $(event.target).attr('readonly')) {
				return false;
			}
		}
	});

	//Date형 format변환 함수
	Number.prototype.to2 = function(){return this<10?'0'+this:this;}
	Date.prototype.getYMD = function(s){
		s=s||'-';
		var nowYear = this.getMonth()<1?(this.getFullYear()-1):this.getFullYear();
		var nowMonth = this.getMonth()<1?12:(this.getMonth()+1).to2();
		var nowDay = this.getDate().to2();
		return nowYear + s + nowMonth + s + nowDay;
	}
});

/**
 * 달력 초기화
 *
 * @param objectId
 */
function initDatePicker(objectId) {
	// 달력초기화
	 $('#' + objectId).datepicker({
		 dateFormat			: 'yy-mm-dd',
		 dayNames			: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		 dayNamesMin		: ['일', '월', '화', '수', '목', '금', '토'],
		 dayNamesShort		: ['일', '월', '화', '수', '목', '금', '토'],
		 monthNames			: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		 monthNamesShort	: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	 	 changeMonth: true,
	 	 changeYear: true
	 });
}
/**
 * 달력 초기화 From~To Type
 *
 * @param objectId
 * @param objectId
 */
function initDatePickerFromTo(fromId, toId){
	var dateFormat = "yy-mm-dd";
	var from = $( "#"+fromId ).datepicker({
								 dateFormat			: dateFormat,
								 dayNames			: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
								 dayNamesMin		: ['일', '월', '화', '수', '목', '금', '토'],
								 dayNamesShort		: ['일', '월', '화', '수', '목', '금', '토'],
								 monthNames			: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
								 monthNamesShort	: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
					             defaultDate: "+1w",
					             changeMonth: true,
					             changeYear: true,
					             numberOfMonths: 1

					        }).on( "change", function() {to.datepicker( "option", "minDate", getDate( this ) ); });

	var to = $( "#"+toId ).datepicker({
   								 dateFormat			: dateFormat,
								 dayNames			: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
								 dayNamesMin		: ['일', '월', '화', '수', '목', '금', '토'],
								 dayNamesShort		: ['일', '월', '화', '수', '목', '금', '토'],
								 monthNames			: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
								 monthNamesShort	: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
						         defaultDate: "+1w",
						         changeMonth: true,
						         changeYear: true,
						         numberOfMonths: 1
					      }).on( "change", function() {from.datepicker( "option", "maxDate", getDate( this ) ); });
	function getDate( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( dateFormat, element.value );
		} catch( error ) {
			date = null;
		}

		return date;
	}
}

/**
 * 화면중앙에 주어진 엘리먼트를 노출.
 *
 * @param objectId
 */
function fnCmmnShowCenter(objectId) {
	var	obj	= $('#' + objectId);

	var	windowHeight	= $(window).height();
	var	windowWidth		= $(window).width();

	var	imgHeight		= $(obj).height();
	var	imgWidth		= $(obj).width();

	$(obj).css({
		'position'	: 'absolute',
		'top'		: windowHeight - ((windowHeight + imgHeight) / 2),
		'left'		: windowWidth - ((imgWidth + windowWidth) / 2)
	});

	$(obj).show();
}

// dialog 창이 닫힌 후 focus를 얻을 객체
var G_ID_FOR_FOCUS;

/**
 * jquery ui의 dialog를 초기화한다.
 *
 * @param buildTag true/false. false일 경우 tag가 수동으로 작성해둬야 한다.
 * @param id 사용할 dialog의 아이디
 * @param title 사용할 dialog의 title '오류', '정보' 등.
 * @param width pixel.
 * @param buttons ex> { '확인' : function () {...}, '취소' : function () {...} }
 */
function fnCmmnInitDialog(buildTag, id, title, width, height, buttons) {
	$('#'+id).remove();
	$('div[aria-describedby="'+id+'"]').remove();


	if (buildTag) {
		var div = $('<div/>').attr('id', id);
		$(div).appendTo(document.body);
	}

	var vWidth = width != null ? width : 400;
	var	vButtons = buttons != null ? buttons : { '확인'	: function() {
			$(this).dialog('close');
			if (G_ID_FOR_FOCUS) {
				$('#' + G_ID_FOR_FOCUS).focus();
			}
		}
	};

	if (!height) {
		$('#' + id).dialog({
			autoOpen 	: false,
			resizable	: false,
			modal		: true,
			title		: title,
			width		: vWidth,
			buttons 	: vButtons,
			stack		: false
		});
	} else {
		$('#' + id).dialog({
			autoOpen 	: false,
			resizable	: false,
			modal		: true,
			title		: title,
			width		: vWidth,
			height		: height,
			buttons 	: vButtons,
			stack		: false
		});
	}
}

/**
 * jquery ui의 dialog 객체의 메시지를 초기화하고 open.
 *
 * @param dialogId
 * @param msg
 */
function openDialog(dialogId, msg, zIndex, idForFocus) {
	G_ID_FOR_FOCUS = idForFocus;

	$('#' + dialogId).html(msg);
	$('#' + dialogId).dialog('open');

	if (zIndex != null) {
		$('#' + dialogId).css('z-index', zIndex);
	}
}

function fnCmmnCloseDialog(dialogId, zIndex) {
	$('#' + dialogId).dialog('close');
	$('#' + dialogId).dialog('widget').remove();

	if (zIndex != null) {
		$('#' + dialogId).css('z-index', zIndex);
	}
}

/**
 * html text로부터 body만 추출하여 반환.
 *
 * @param htmlText
 * @returns
 */
function getBodyObjectFromString(htmlText) {
	var parser = new DOMParser();
	var htmlDoc = parser.parseFromString(htmlText, 'text/html');
	return $(htmlDoc.body);
}


/**
 * 파일 확장자를 반환
 *
 * @param filename
 * @returns 확장자
 */
function getExtension(filename) {
	return filename.split('.').pop().toLowerCase();
}

/**
 * date format
 * http://stove99.tistory.com/46
 */
Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

/**
 * email domain options 작성
 *
 * @param selectId select id
 * @param inputId input(text) id
 */
function fnCmmnCreateDomainOptions(selectId, inputId) {
	var selectBox = $('#' + selectId);
	$(selectBox).
		append($('<option/>', { text : '선택해 주세요.', value : ''})).
		append($('<option/>', { text : 'naver.com', value : 'naver.com'})).
		append($('<option/>', { text : 'chol.com', value : 'chol.com'})).
		append($('<option/>', { text : 'dreamwiz.com', value : 'dreamwiz.com'})).
		append($('<option/>', { text : 'empal.com', value : 'empal.com'})).
		append($('<option/>', { text : 'freechal.com', value : 'freechal.com'})).
		append($('<option/>', { text : 'gmail.com', value : 'gmail.com'})).
		append($('<option/>', { text : 'hanafos.com', value : 'hanafos.com'})).
		append($('<option/>', { text : 'hanmail.net', value : 'hanmail.net'})).
		append($('<option/>', { text : 'hanmir.com', value : 'hanmir.com'})).
		append($('<option/>', { text : 'hitel.net', value : 'hitel.net'})).
		append($('<option/>', { text : 'hotmail.com', value : 'hotmail.com'})).
		append($('<option/>', { text : 'korea.com', value : 'korea.com'})).
		append($('<option/>', { text : 'lycos.co.kr', value : 'lycos.co.kr'})).
		append($('<option/>', { text : 'nate.com', value : 'nate.com'})).
		append($('<option/>', { text : 'netian.com', value : 'netian.com'})).
		append($('<option/>', { text : 'paran.com', value : 'paran.com'})).
		append($('<option/>', { text : 'yahoo.com', value : 'yahoo.com'})).
		append($('<option/>', { text : 'yahoo.co.kr', value : 'yahoo.co.kr'})).
		append($('<option/>', { text : '직접입력', value : 'self'}));

	$('#' + selectId).change(function (e) {
		var value = $(selectBox).val();
		var textObj = $('#' + inputId);
		if (value == 'self') {
			value = '';
			$(textObj).attr('readonly', false);
		} else {
			$(textObj).attr('readonly', true);
		}

		$(textObj).val(value);
	});
}

/**
 * 레이어를 열고 screen을 masking.
 *
 * @param id
 */
function openAndMaskScreen(id) {
	$(document.body).mask();
	$('#' + id).show();
	$('#' + id).unmask();
}
/**
 * NULL여부 체크. Null일 경우 공백으로 치환 후 반환
 *
 * @param id
 */
function checkNull(strValue)
{
	if ( strValue == null || strValue == "null")
	{
		return "";
	}

	return strValue;
}


/**
 * 레이어를 닫고 screen을 unmasking.
 *
 * @param id
 */
function closeAndUnmaskScreen(id) {
	$('#' + id).hide();
	$(document.body).unmask();
}

/**
 * text input에 사용자가 입력하면 자동 select.
 * select를 선택하면 text input에 자동 입력.
 *
 * @param inputObj text input(jquery object)
 * @param selectObj select(jquery object)
 */
function inputAndSelect(textInputObj, selectObj) {
	$(textInputObj).keyup(function (event) {
		$(selectObj).val($(textInputObj).val());

		if ($(selectObj).val() != $(textInputObj).val()) {
			$(selectObj).val('');
		}
	});

	$(selectObj).change(function (event) {
		$(textInputObj).val($(selectObj).val());
	});
}

/**
 * 오늘날짜를 yyyymmdd 형식으로 반환
 *
 * @param none
 * @returns String
 */
function getTodayDate() {
	var date  = new Date();
	var year  = date.getFullYear();
	var month = ""+ ( date.getMonth() + 1 );
	var day   = ""+ date.getDate();

	if( month.length == 1 )
		month = "0"+ month;

	if( day.length == 1 )
		day = "0"+ day;

	var yyyymmdd = ""+ year + month + day;

	return yyyymmdd;
}

/**
 * 총길이 리턴(한글 2바이트, 영어 숫자 1바이트)
 *
 * @param id
 */
function lengthKor(/** String */ tempVal) {
    var n = 0;
    var v = null;
    v = $('#'+tempVal).val();
    for (var i=0; i<v.length; i++) {
        var ch = v.charAt(i);
        if (escape(ch).length > 4) {
            n += 2;
        } else if (ch == 'n') {
            if (v.charAt(i-1) != 'r') {
                n += 1;
            }
        } else if (ch == '<' || ch == '>') {
            n += 4;
        } else {
            n += 1;
        }
    }
    return n;
}

/**
 * ',' '.' '-' 특수문자 제거
 *
 * @param id
 */
function removeSpecific(tempValue){
	var objId = tempValue;
	var value = '';
	if(!isEmpty(tempValue) ){
		value = $('#'+objId).val().replace(/[\-\.\,\:]/gi, '');
	}
	$('#'+objId).val(value);
}

/**
 * ',' '-' 특수문자 제거(차고지관리 면적부분에 사용-(.)제외)
 *
 * @param id
 */
function removeSpecific2(tempValue){
	var objId = tempValue;
	var value = '';
	if(!isEmpty(tempValue) ){
	  value = $('#'+objId).val().replace(/[\-\,\:]/gi, '');
	}
	$('#'+objId).val(value);
}

/**
 * 날짜의 '월','일'문자 제거
 *
 * @param id
 */
function removeMonthDayChar(tempValue){
	var objId = tempValue;
	var value = '';
	if(!isEmpty(tempValue) ){
		value = $('#'+objId).val().replace(/[월일]/gi, '');
	}
	$('#'+objId).val(value);
}


/**
 * 날짜의 /\-/gi 제거
 *
 * @param id
 */
function dateTransform(tempValue){
	var objId = tempValue;
	var value = '';
	if(!isEmpty(tempValue) ){
	 value = $('#'+objId).val().replace(/\-/gi, '');
	}
	$('#'+objId).val(value);
}

/**
 * 우편번호의 /\-/gi 제거
 *
 * @param id
 */
function postTransform(tempValue){
	var objId = tempValue;
	var value = '';
	if(!isEmpty(tempValue) ){
	  value = $('#'+objId).val().replace(/\-/gi, '');
	}
	$('#'+objId).val(value);
}

/**
 * 날짜에 '-' 추가
 *
 * @param id
 */
function dateTransformDash(tempValue){
	var objId = $('#'+tempValue).val();
	var value = '';
	if( !isEmpty(tempValue) ){
		value = objId.substring(0, 4) + '-' +objId.substring(4, 6) + '-' + objId.substring(6, 8);
	}
	$('#'+tempValue).val(value);
}
function dateTransformDashVal(tempValue){
	var	value = tempValue.substring(0, 4) + '-' +tempValue.substring(4, 6) + '-' + tempValue.substring(6, 8);
	return value;
}

/**
 * 우편번호 '-' 추가
 *
 * @param id
 */
function postTransformDash(tempValue){
	var objId = $('#'+tempValue).val();
	var value = '';
	if( !isEmpty(tempValue) ){
		if(objId.length==6){
			value = objId.substring(0,3) + '-' +objId.substring(3,6);
		}else{
			value = objId;
		}
	}
	$('#'+tempValue).val(value);
}
function postTransformDash2(tempValue){
	var value = '';
	if(tempValue.length!=0){
		if(tempValue.length==6){
			value = tempValue.substring(0,3) + '-' +tempValue.substring(3,6);
		}else{
			value = tempValue;
		}
	}
	return value;
}

/**
 * 주민번호 '-' 추가
 *
 * @param id
 */
function juminTransformDash(tempValue){
	var objId = $('#'+tempValue).val();
	var value = '';
	if( !isEmpty(tempValue) ){
		if(objId.length > 6){
			value = objId.substring(0, 6) + '-' +objId.substring(6, 13);
		}else{
			value = objId;
		}
	}
	$('#'+tempValue).val(value);
}

/**
 * 주민번호 '-' 추가(value)
 *
 * @param id
 */
function juminTransformDash2(tempValue){
	tempValue = tempValue.replace(/-/gi, '');
	var value = tempValue.substring(0, 6) + '-' +tempValue.substring(6, 13);
	return value;
}

/**
 * 사업자등록번호 '-' 추가
 *
 * @param id
 */
function bsnmTransformDash(tempValue){
	var objId = $('#'+tempValue).val();
	var value = '';
	if( !isEmpty(tempValue) ){
		value = objId.substring(0, 3) + '-' + objId.substring(3, 5) + '-' + objId.substring(5, 10);
	}
	$('#'+tempValue).val(value);
}

/**
 * 법인등록번호 '-' 추가(value)
 *
 * @param id
 */
function cprTransformDash2(tempValue){
	var	value = tempValue.substring(0, 6) + '-' +tempValue.substring(6, 13);
	return value;
}


/**
 * 숫자 ',' 추가
 *
 * @param id
 */
function numTransformComma(tempValue){
	var objId = $('#'+tempValue).val();
	var value = fnCmmnAutoComma(objId);
	$('#'+tempValue).val(value);
}
function numTransformComma2(tempValue){
	var value = fnCmmnAutoComma(tempValue);
	return value;
}

/**
 * 숫자만 리턴
 *
 * @param id
 */
function fnCmmnSelectNumber(strValue)
{
 var re;

 re = /[^0-9]/gi;

 return strValue.replace(re,"");
}

/**
 * 숫자,- 리턴
 *
 * @param id
 */
function fnCmmnSelectNumber2(strValue)
{
 var re;

 re = /[^0-9\-]/gi;

 return strValue.replace(re,"");
}

/**
 * 영문, 숫자 리턴
 *
 * @param id
 */
function fnCmmnSelectEngNum(strValue)
{
 var re;

 re = /^[a-z]+[a-z0-9]{3,19}$/g;

 return strValue.replace(re,"");
}

/**
 * 숫자에 3자리수 콤마 추가
 *
 * @param id
 */
function fnCmmnAutoComma(sVal)
{
	var newValue;
	var len;
	var ch;
	var j;
	var formatValue;

	newValue			= "" + sVal;
	len					= newValue.length;
	ch					= "";
	j					= 1;
	formatValue			= "";

	newValue			= fnCmmnSelectNumber(newValue);
	len					= newValue.length;

	for (var i=len; i>0; i-- )
	{
		ch				= newValue.substring(i-1,i);

		formatValue		= ch + formatValue;

		if ( (j%3) == 0 && i>1 )
		{
			formatValue	= "," + formatValue;
		}

		j++;
	}
	return formatValue;
}

/* 숫자 자동 콤마 추가 */
function fnCmmnNumberCommaFormat(obj){
	obj.value = obj.value.replace(/[^0-9]/g,'');
//	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = fnCmmnAutoComma(obj.value);
		obj.value = value;
		return true;
//	}
	return false;
}

/* 서브밋 */
function fnCmmnSubmit(id, url){
	$("#" + id).attr('action', url);
	$("#" + id).submit();
}

/* 선택로우색 변경 */
function fnCmmnTrSelected(obj){
	$("#list tbody tr.selected").removeClass("selected");
	$(obj).addClass("selected");
}

/* 주민번호 6자리입력후 자동 대시 추가 */
function fnCmmnInhbtntDashFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
		if(value.length == 6){
			value = value + '-';
		}else if(value.length == 14){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}

/* 전화번호 '-' 자동추가*/
function fnCmmnTlphonNoDashFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
			if(value == 02 && value.length == 2){
				value = value+'-';
			}else if(value.substring(0,2) == 02 && value.length == 6){
				value = value.replace('-', '');
				value = value.substring(0,2) + '-' + value.substring(2,5)+'-';
			}else if(value.substring(0,2) == 02 && value.length == 11){
				value = value.replace('-', '');
				value = value.replace('-', '');
				value = value.substring(0,2) + '-' + value.substring(2,6)+'-'+value.substring(6,10);
			}else if(value.substring(0,2) != 02 && value.substring(0,1) != 1 && value.length == 3){
				value = value+'-';
			}else if(value.substring(0,2) != 02 && value.substring(0,1) != 1 && value.length == 7){
				value = value.replace('-', '');
				value = value.substring(0,3)+'-'+value.substring(3,6)+'-';
			}else if(value.substring(0,2) != 02 && value.substring(0,1) != 1 && value.length == 12){
				value = value.replace('-', '');
				value = value.replace('-', '');
				value = value.substring(0,3)+'-'+value.substring(3,7)+'-'+value.substring(7,11);
			}else if(value.substring(0,1) == 1 && value.length == 4){
				value = value+'-';
			}
			else if(value.substring(0,2) == 02 && value.length == 12){
				return false;
			}else if(value.length == 13){
				return false;
			}
			obj.value = value;
			return true;
	}
	return false;
}

/* 전화번호 자유 입력 포맷 
 * 예시1)02-1234-1234
 * 예시2)02-1234-1234~9
 * 예시3)02-1234-1234,02-4444-5678
 */
function fnCmmnPhoneNumberFreeFormat(obj){
	return $(obj).val().replace(/[^0-9,-~]/gi,'').replace(/[a-zA-Z@\^_]/gi,'');
}

/* 사업자 등록번호 대시 자동추가 형식 3-2-5*/
function fnCmmnBsnmDashFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
		if(value.length == 3){
			value = value + '-';
		}else if(value.length == 6){
			value = value + '-';
		}else if(value.length == 12){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}

/* 날짜 4자리후 6자리후 대시 자동추가 */
function fnCmmnDateDashFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
		if(value.length == 4){
			value = value + '-';
		}else if(value.length == 7){
			value = value + '-';
		}else if(value.length == 10){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}


/* 우편번호 3자리입력후 대시추가 */
function fnCmmnPostDashFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
		//if(value.length == 3){
			//value = value + '-';
		if(value.length == 5){
			if(obj.value.indexOf('-')==-1){
				value=value.substring(0,3) + '-' +value.substring(3,6);
			}else{
				value=value.replace('-','');
			}
		}else if(value.length == 6){
			if(obj.value.indexOf('-')==-1){
				value=value.substring(0,3) + '-' +value.substring(3,5);
			}else if(obj.value.indexOf('-')!=3){
				value=value.replace('-','');
				value=value.substring(0,3) + '-' +value.substring(3,6);
			}
		}else if(value.length >= 7){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}

/* 숫자만 입력허용 */
function fnCmmnIntCheck(){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		return true;
	}
	return false;
}

/* 숫자만 입력허용 2 */
function fnCmmnIntCheck2(id){
	var temp = $('#'+id);
	if(event.keyCode > 47 && event.keyCode < 58 ){
		return true;
	}
	temp.val("");
	temp.focus();
	return false;
}

/* 숫자, 대시만 입력허용 */
function fnCmmnIntCheck2(){
	if(event.keyCode > 47 && event.keyCode < 58 || event.keyCode == 45 ){
		return true;
	}
	return false;
}


/*소수점 포함 숫자 유효성 체크 */
function fnCmmnDecNumberFormat(obj,intScope,decScope)
{
	var val = obj.value;

	var re = /[^0-9|.]/gi;
	obj.value = val.replace(re, '');

	var split = val.split(".");

	if(split[0].length > intScope) // 정수 자릿수 체크
	{
		alert("정수 "+intScope+"자리까지만 입력 가능합니다.");
		obj.value = val.substr(0, intScope);
	}

	if(split[1] != null)//소수점 아래 자리수 체크
	{
		if(split[1].length > decScope)
		{
			alert("소수점 아래 "+decScope+"자리까지만 입력 가능합니다.");
			obj.value = val.substr(0, split[0].length+decScope+1);
		}
	}

}


/* 페이징 가능여부 검사*/
function pagingCheck(totalCount, recordPerPage, button){
	if(!button){
		if((totalCount/recordPerPage) <= 1){
			return false;
		}
	}
	return true;
}

/** 폼 닫기 */
	function fnCloseForm() {
	$.unblockUI();
}

/** 접수번호 자동 양식 */
function fnCmmnRceptDashFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
		if(value.length == 4){
			value = value + '-';
		}else if(value.length == 11){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}

/** 시:분:초 자동 양식 */
function fnCmmnTimeCommaFormat(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;

		if(value.length == 2){
			if(value <= 23){
				value = value + ':';
			}else{
				alert("'시간'은 '23' 이상 입력불가 합니다.");
				return false;
			}
		}else if(value.length == 5){
			if(value <= '23:59'){
				value = value + ':';
			}else{
				alert("'분'은 '59' 이상 입력불가 합니다.");
				return false;
			}
		}else if(value.length == 7){
			if(value <= '23:59:5'){
			}else{
				alert("'초'는 '59' 이상 입력불가 합니다.");
				return false;
			}
		}else if(value.length == 8){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}


/** 시:분 자동 양식 */
function fnCmmnTimeCommaFormatHHMM(obj){
	if(event.keyCode > 47 && event.keyCode < 58 ){
		var value = obj.value;
		if(value.length == 2){
			if(value <= 23){
				value = value + ':';
			}else{
				alert("'시간'은 '23' 이상 입력불가 합니다.");
				return false;
			}
		}else if(value.length == 5){
			if(value.substr(3,2) <= '59'){
			}else{
				alert("'분'은 '59' 이상 입력불가 합니다.");
				return false;
			}
		}else if(value.length == 6){
			return false;
		}
		obj.value = value;
		return true;
	}
	return false;
}


/**
 * 날짜계산 (value=값, addDay=더할날짜수, gubun=return타입('-'붙일지여부))
 */
function fnCmmnAddDate(value, addDay, gubun){
	if( value == null || value == '' ){
		return;
	}

	var strDate = value.replace(/\-/gi, '');
	var yyyy = strDate.substr(0, 4);
	var mm = strDate.substr(4, 2);
	var dd = strDate.substr(6, 2);

	var date = new Date(yyyy,mm,dd);
	date.setDate(date.getDate() + addDay);

	var rYyyy = date.getFullYear()+"";
	var rMm = date.getMonth()+"";
	var rDd = date.getDate()+"";

	if( rMm < 10 ){
		rMm = "0" + rMm;
	}
	if( rDd < 10 ){
		rDd = "0" + rDd;
	}

	var fullDate = rYyyy + rMm + rDd;
	var fullDate2 = rYyyy + "-" + rMm + "-" + rDd;
	if( gubun == 1 ){
		return fullDate;
	} else {
		return fullDate2;
	}
}

/**
 * 날짜계산 (value=값, addMonth=더할월수, gubun=return타입('-'붙일지여부))
 */
function fnCmmnAddMonth(value, addMonth, gubun){
	if( value == null || value == '' ){
		return;
	}

	var strDate = value.replace(/\-/gi, '');
	var yyyy = strDate.substr(0, 4);
	var mm = strDate.substr(4, 2);
	var dd = strDate.substr(6, 2);

	mm = Number(mm-1);

	var date = new Date(yyyy,mm,dd);

	date.setMonth(date.getMonth() + addMonth);

	date.setDate (date.getDate() - 1);

	var rYyyy = date.getFullYear()+"";
	var rMm = (date.getMonth()+1)+"";
	var rDd = date.getDate()+"";

	if( rMm < 10 ){
		rMm = "0" + rMm;
	}
	if( rDd < 10 ){
		rDd = "0" + rDd;
	}

	var fullDate = rYyyy + rMm + rDd;
	var fullDate2 = rYyyy + "-" + rMm + "-" + rDd;
	if( gubun == 1 ){
		return fullDate;
	} else {
		return fullDate2;
	}
}


/**
 * 패스워드 유효성 검사
 */
function fnPwdVaildate(paramObj){
	/**
	 * 1.입력값 제한(영문,숫자,특수문자만 입력가능)
	 * 2.입력값 자리수(9~12자리 체크)
	 * 3.영문,숫자,특수문자 혼합여부 체크
	 * 4.최종확인
	 */

	var data = paramObj.value;
	var obj = {};
	//입력값 제한(영문,숫자,특수문자만 입력가능)
	if(
			//영문자
			!(event.keyCode >= 65 && event.keyCode <= 90)&& //대문자
			!(event.keyCode >= 97 && event.keyCode <= 122)&& //소문자
			//숫자
			!(event.keyCode >= 48 && event.keyCode <= 57) &&
			//특수문자
			!(event.keyCode >= 33 && event.keyCode <= 47) && !(event.keyCode >= 58 && event.keyCode <= 64) && !(event.keyCode >= 91 && event.keyCode <= 96) && !(event.keyCode >= 123 && event.keyCode <= 126)&&
			//백스페이스, 탭, 쉬프트, ...
			!(event.keyCode >= 8 && event.keyCode <= 27)
	){
		obj.result = false;
		obj.type = '100';
		obj.msg = '영문 소문자,숫자,특수문자만 입력가능 합니다.';
		$('#'+paramObj.id).val(data.substring(0,data.length-1));
		return obj;
	}

	//입력값 자리수(8~20자리 체크)
	if(!(data.length >= 8 && data.length <= 20)){
		obj.result = false;
		obj.type = '200';
		obj.msg = '영문,숫자,특수문자를 혼합하여 8자 이상 20자 이내로 입력하세요.';
		return obj;
	}

	//영문,숫자,특수문자 혼합여부 체크
	var charCode = '';
	var cCnt = 0; //영문 카운트
	var nCnt = 0; //숫자 카운트
	var sCnt = 0; //특수문자 카운트
	var eCnt = 0; //입력불가문자 카운트
	for(var i=0; i<data.length; i++){
		charCode = data.charCodeAt(i);
		if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
			cCnt++;
		}else if(charCode >= 48 && charCode <= 57){
			nCnt++;
		}else if((charCode >= 33 && charCode <= 47)||(charCode >= 58 && charCode <= 64)||(charCode >= 91 && charCode <= 96)||(charCode >= 123 && charCode <= 126)){
			sCnt++;
		}else{
			eCnt++;
		}
	}
	if(eCnt != 0){
		obj.result = false;
		obj.type = '300';
		obj.msg = '패스워드에 입력불가 문자가 포함되어있습니다.';
		return obj;
	}else if(cCnt == 0){
		obj.result = false;
		obj.type = '301';
		obj.msg = '패스워드에 영문을 혼합하세요.';
		return obj;
	}else if(nCnt == 0){
		obj.result = false;
		obj.type = '302';
		obj.msg = '패스워드에 숫자를 포함하세요.';
		return obj;
	}else if(sCnt == 0){
		obj.result = false;
		obj.type = '303';
		obj.msg = '패스워드에 특수기호를 포함하세요.';
		return obj;
	}

	//최종확인
	if(data.length < 9){
		obj.result = false;
		obj.type = '900';
		obj.msg = '패스워드를 입력하세요.';
	}else{
		obj.result = true;
		obj.type = '000';
		obj.msg = '사용가능한 패스워드 입니다.';
	}

	//font Color 설정
	if(obj.type=='000'){
		obj.msg = '<font color="green"><strong>'+obj.msg+'</strong></font>';
	}else if(obj.type='900'){
		obj.msg = '<font color="black"><strong>'+obj.msg+'</strong></font>';
	}else{
		obj.msg = '<font color="red"><strong>'+obj.msg+'</strong></font>';
	}
	return obj;
}


/**
 * select row의 element의 객체화(String -> Object 변환)
 * author: pmk
 * create_dt : 2015-01-14
 */
function fnParseObjOfStr(row, rmIdx ,regex1, regex2){
	rmIdx = rmIdx == '' ? 0 : rmIdx;
	regex1 = regex1 == '' ? ',' : regex1;
	regex2 = regex2 == '' ? '=' : regex2;

	var obj = {};
	var items = new Array();
	row = row.substr(1,row.length-rmIdx); //garbage문자열 제거
	row = row.replace(/[\'\"]/gi,"");

	//step1.String -> item으로 분리
	var initIndex = 0;
	var i = 0;
	do{
		initIndex = row.lastIndexOf(regex1, row.lastIndexOf(regex2, row.length));
		items[i]= row.substr(initIndex+1,row.length);
		row = row.substr(0, initIndex);
		i++;
	}while(initIndex >= 0);

	//step2.item -> Object<key,value>로 변환
	for(var i=0; i<items.length; i++){
		var item = new Array();
		item = items[i].split('=');
		if(item.length == '2'){
			item[1] = item[1] == 'null' ? '' : item[1];
			eval("obj."+item[0]+"='" +item[1] +"';");
		}
	}

	return obj;
}

/**
*	Date Format 설정 20170101 -> 2017-01-01
*  	author: pmk
* 	create_dt : 2017-05-17
*/
function fnCmmnDateFormat(secDate)
{
	var year = secDate.substr(0,4);
	var month = secDate.substr(4,2);
	var day = secDate.substr(6,2);

	return year+"-"+month+"-"+day;
}
/**
*	Time Format 설정 2220 -> 22:20
*	author: LCH
* 	create_dt : 2017-05-17
*/
function fnCmmnTimeFormat(secTime)
{
	var min = secTime.substr(0,2);
	var sec = secTime.substr(2,4);

	return min+":"+sec ;
}

///**
// * 주민번호 입력
// *
// * @param displayTagId 화면에 노출할 더미 태그(사용자에게 보여주고 서버로 전송하지 않을 태그 - input text)
// * @param hiddenTagId 실제 입력한 주민번호를 적재할 태그(서버로 전송할 값을 적재할 태그 - input hidden)
// */
//function hideIhidnum(displayTagId, hiddenTagId) {
//	var displayTag = $('#' + displayTagId);
//	var hiddenTag = $('#' + hiddenTagId);
//
//	$(displayTag).keyup(function (event) {
//
//		if ($(displayTag).val().length == 6) {
//			$(hiddenTag).val($(hiddenTag).val() + '-');
//			$(displayTag).val($(displayTag).val() + '-');
//		} else {
//			$(hiddenTag).val($(hiddenTag).val() + (event.which - 48));
//
//			if ($(displayTag).val().length > 7) {
//				var displayValue = $(displayTag).val().substring(0, $(displayTag).val().length - 1);
//				$(displayTag).val(displayValue + '*');
//			}
//		}
//
//		return true;
//	});
//
//	$(displayTag).keypress(function (event) {
//
//		if ($(displayTag).val().length >= 14) {
//			return false;
//		}
//
//		if (event.which < 48 || event.which > 48 + 9) {
//			return false;
//
//		} else if (event.which == 45) {
//			if ($(displayTag).val().length != 7) {
//				return false;
//			}
//		}
//	});
//}
