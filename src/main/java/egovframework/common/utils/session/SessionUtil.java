package egovframework.common.utils.session;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;;


public class SessionUtil {

	public static final String USER_KEY = "loginVO";
	public static final String USER_AUTHOR = "userAuthorList";
	/**
	 * value 정보를 SessionUtil.USER_KEY를 key로 하여 session에 적재. 인증시에만 사용
	 *
	 * @param req
	 * @param value
	 */
	public static void createSession(HttpServletRequest req, Object value) {
		addSessionAttribute(req, USER_KEY, value);
	}

	/**
	 * session에 정보를 저장한다.
	 *
	 * @param req
	 * @param key
	 * @param value
	 */
	public static void addSessionAttribute(HttpServletRequest req, String key, Object value) {
		HttpSession session = req.getSession(true);
		session.setAttribute(key, value);

	}

	/**
	 *  로그인 사용자 정보를 조회한다.
	 *
	 * @param req
	 * @return
	 */
	public static Object getUser(HttpServletRequest req) {
		LoginVO loginVO = (LoginVO)req.getSession().getAttribute(USER_KEY);
		return loginVO;
	}

	/**
	 * 사용자 권한목록을 조회한다.
	 *
	 * @param req
	 * @return
	 */
	public static List<?> getUserAuthor(HttpServletRequest req) {
		@SuppressWarnings("unchecked")
		List<String> list = (List<String>) req.getSession().getAttribute(USER_AUTHOR);
		return list;
	}

	/**
	 * session 정보를 제거한다.
	 *
	 * @param req
	 */
	public static void invalidateSession(HttpServletRequest req) {
		req.getSession(true).invalidate();
	}
}
