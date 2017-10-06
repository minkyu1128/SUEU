package egovframework.common.utils.string;

public class StringUtil {
	/**
	 * 문자열을 byte 단위로 절삭하여 return한다. 
	 * 한글은 2byte로 계산한다.
	 * @param str	문자열
	 * @param beginByte	시작바이트
	 * @param endByte	종료바이트
	 * @return
	 */
	public static String substringByte(String str, int beginByte, int endByte) {
		return substringByte(str, beginByte, endByte, 2);
	}
	/**
	 * 문자열을 byte 단위로 절삭하여 return한다.
	 * 한글은 hangleByte에 입력한 byte 단위로 계산한다.
	 * @param str	문자열
	 * @param beginByte	시작바이트
	 * @param endByte	종료바이트
	 * @param hangleByte	한글 바이트 단위
	 * @return
	 */
	public static String substringByte(String str, int beginByte, int endByte, int hangleByte) {
		return substringByte(str, beginByte, endByte, hangleByte, true);
	}
	/**
	 * 문자열을 byte 단위로 절삭하여 return한다.
	 * @param str 문자열
	 * @param beginByte 시작바이트
	 * @param endByte 종료바이트
	 * @param hangleByte 한글 바이트 단위
	 * @param isTrim trim() 사용여부
	 * @return
	 */
	public static String substringByte(String str, int beginByte, int endByte, int hangleByte, boolean isTrim) {
		int beginIndex=-1;
		int endIndex=-1;
		
		int accByte=0;
		for(int i=0; i<str.length(); i++){
			String ch = str.substring(i,i+1);
			accByte+=ch.getBytes().length>=2?hangleByte:1;
			
			if(beginIndex==-1 && accByte>=beginByte){
				beginIndex = i;
			}
			if(endIndex==-1 && accByte>=endByte){
				if(accByte>endByte){
					endIndex = i;
				}else{
					endIndex = i+1;
				}
				break;
			}
		}
		return isTrim?str.substring(beginIndex, endIndex).trim():str.substring(beginIndex, endIndex);
	}
	
}
