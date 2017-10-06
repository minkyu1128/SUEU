package egovframework.common.utils.os;

public class OsUtil {
	
	/**
	 * OS가 window일 경우 path를 window의 경로로 변경 후 반환한다.
	 * <br/>기본 경로는 "C 드라이브"로 설정된다.
	 * <br/>예시) "C:"+path
	 * @param path
	 * @return
	 */
	public static String windowPath(String path){
		return windowPath(path);
	}
	/**
	 * OS가 window일 경우 path를 window의 경로로 변경 후 반환한다.
	 * <br/>frontPath를 지정할 수 있다. 
	 * <br/>frontPath를 지정하지 않을 경우 기본 경로는 "C 드라이브"로 설정된다.
	 * <br/>예시) "C:"+path
	 * @param path
	 * @param frontPath
	 * @return
	 */
	public static String windowPath(String path, String frontPath){
		frontPath = frontPath==null? "C:":frontPath;
		if(System.getProperty("os.name").contains("Window")){
			path=frontPath+path;
		}
		return path;
	}
	
}
