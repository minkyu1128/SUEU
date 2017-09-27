package egovframework.common.utils;

public class TilesUseAt {
	/**
	 * tiles를 가변적으로 사용하기 위한 정적 메서드
	 * <br/>타일즈 사용 여부를 선택 할 수 있다.
	 * <br/>tilesUseAt=true는 적용, false는 미적용을 의미한다.
	 * @param url
	 * @param tilesUseAt
	 * @return
	 */
	public static String tilesUseAt(String url, boolean tilesUseAt){
		return tilesUseAt(url, tilesUseAt, ".def");
	}
	/**
	 * tiles를 가변적으로 사용하기 위한 정적 메서드
	 * <br/>타일즈 사용 여부를 선택 할 수 있다.
	 * <br/>tilesUseAt=true는 적용, false는 미적용을 의미한다.
	 * <br/>tilesExt에는 타일즈 설정파일에서 지정한 definition name을 의미한다.
	 * @param url
	 * @param tilesUseAt
	 * @param tilesExt
	 * @return
	 */
	public static String tilesUseAt(String url, boolean tilesUseAt, String tilesExt) throws NullPointerException{
		if(tilesExt==null||tilesExt.equals(""))
			throw new NullPointerException("tilesExt값이 공백이거나 null일 수 없습니다.");
		StringBuffer result = new StringBuffer();
		result.append(url);
		if(tilesUseAt)  result.append(tilesExt);
		return result.toString();
	}
	
}
