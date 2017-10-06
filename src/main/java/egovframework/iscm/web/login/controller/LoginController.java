package egovframework.iscm.web.login.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import egovframework.com.cmm.EgovComponentChecker;
import egovframework.com.cmm.EgovMessageSource;
import egovframework.com.cmm.LoginVO;
import egovframework.com.cmm.service.EgovCmmUseService;
import egovframework.com.cmm.service.Globals;
import egovframework.com.cmm.util.EgovUserDetailsHelper;
import egovframework.com.uat.uia.service.EgovLoginService;
import egovframework.common.utils.tiles.TilesUtil;

@Controller
@RequestMapping(value="/login/")
public class LoginController {
//	@Resource(name="pssLoginService")
//	private TdmsLoginService pssLoginService;
//	@Resource(name="userManageService")
//	private EgovUserManageService egovUserManageService;

	/** EgovLoginService */
	@Resource(name = "loginService")
	private EgovLoginService loginService;
	/** EgovCmmUseService */
	@Resource(name = "EgovCmmUseService")
	private EgovCmmUseService cmmUseService;
	/** EgovMessageSource */
	@Resource(name = "egovMessageSource")
	EgovMessageSource egovMessageSource;

	/** log */
	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);


	/**
	 * 로그인 폼
	 * @param req
	 * @return
	 */
	@RequestMapping(value="loginForm.do", method={RequestMethod.GET,RequestMethod.POST})
	public String loginForm(@ModelAttribute("loginVO") LoginVO loginVO
						,HttpServletRequest request
						,HttpServletResponse response
						,ModelMap model
						){
		if (EgovComponentChecker.hasComponent("mberManageService")) {
			model.addAttribute("useMemberManage", "true");
		}

//		/* 사용자등록Form에 필요한 부서정보*/
//		List<PssCmmnOrgnztInfoVO> orgnzt_InfoList =  (List<PssCmmnOrgnztInfoVO>) pssCmmnService.getOrgnztInfoList();
//		model.put("orgnzt_InfoList", orgnzt_InfoList);
//
//		//패스워드힌트목록을 코드정보로부터 조회
//		List<PssCmmnCodeVO> passwordHint_CodeList = (List<PssCmmnCodeVO>) pssCmmnService.getCmmnCodeList("COM022");
//		model.put("passwordHint_CodeList", passwordHint_CodeList);

		return TilesUtil.tilesUseAt("egovframework/iscm/web/login/loginForm",false);
	}
	/**
	 * 로그인
	 * @param req
	 * @return
	 */
	/**
	 * 일반(세션) 로그인을 처리한다
	 * @param vo - 아이디, 비밀번호가 담긴 LoginVO
	 * @param request - 세션처리를 위한 HttpServletRequest
	 * @return result - 로그인결과(세션정보)
	 * @exception Exception
	 */
	@RequestMapping(value = "login.do")
	public String login(@ModelAttribute("loginVO") LoginVO loginVO, HttpServletRequest request, ModelMap model) throws Exception {

		// 1. 일반 로그인 처리
		LoginVO resultVO = loginService.actionLogin(loginVO);

		if (resultVO != null && resultVO.getId() != null && !resultVO.getId().equals("")) {

			// 2-1. 로그인 정보를 세션에 저장
			request.getSession().setAttribute("loginVO", resultVO);

//			return "redirect:/pss/login/main.do";

			// 2-2. Spring Security 사용자권한 처리
			Boolean isAuthenticated = EgovUserDetailsHelper.isAuthenticated();
			if (!isAuthenticated) {
				model.addAttribute("message", egovMessageSource.getMessage("fail.common.login"));
				return TilesUtil.tilesUseAt("egovframework/iscm/web/login/loginForm",false);
			}
			LoginVO user = (LoginVO) EgovUserDetailsHelper.getAuthenticatedUser();

			LOGGER.debug("User Id : {}", user.getId());

			return "redirect:"+Globals.MAIN_PAGE;

		} else {
			model.addAttribute("message", egovMessageSource.getMessage("fail.common.login"));
			return TilesUtil.tilesUseAt("egovframework/iscm/web/login/loginForm",false);
		}
	}

	/**
	 * 로그아웃한다.
	 * @return String
	 * @exception Exception
	 */
	@RequestMapping(value = "logout.do")
	public String logout(HttpServletRequest request, ModelMap model) throws Exception {

//		String userIp = EgovClntInfo.getClntIP(request);

		// 1. Security 연동
		return "redirect:/j_spring_security_logout";

//		request.getSession().setAttribute("loginVO", null);

		//return "redirect:/egovDevIndex.jsp";
//		return "redirect:/pss/login/loginForm.do";
	}



















//	@RequestMapping(value="login.do")
//	public String login(HttpServletRequest req
//						,HttpServletResponse res
//						,@ModelAttribute TdmsLoginVO loginVO
//						,ModelMap modelMap){
//
//		Map<String, Object> map = pssLoginService.validateUser(loginVO);
//		String result = map.get("result").toString();
//		String resultMsg = map.get("resultMsg").toString();
//		String url = "";
//
//		//인증확인
//		if(result.equals("Y")){
//			//세션 생성
//			SessionUtil.createSession(req, loginVO);
//
//			//쿠키 생성
//			String saveUserId = req.getParameter("saveUserId");
//			if ("save".equals(saveUserId)) {
//				Cookie cookie = new Cookie("userId", loginVO.getUserId());
//				cookie.setMaxAge(60 * 60 * 24 * 30);
//				res.addCookie(cookie);
//			} else {
//				res.addCookie(new Cookie("userId", ""));
//			}
//
//			url = "forward:/pss/main/main.do";
//		}else{
//			modelMap.addAttribute("result",result);
//			modelMap.addAttribute("resultMsg",resultMsg);
//			url="egovframework/pss/web/login/loginForm";
//		}
//
//		return url;
//	}
	/**
	 * 로그아웃
	 * @param req
	 * @return
	 */
//	@RequestMapping("logout.do")
//	public String logout(HttpServletRequest req) {
//
//		SessionUtil.invalidateSession(req);
//
//		return "egovframework/pss/web/login/loginForm";
//	}
	/**
	 * 세션확인
	 * @param req
	 * @return
	 */
//	@RequestMapping("checkSession.do")
//	@ResponseBody
//	public ModelMap checkSession(HttpServletRequest req) {
//
//		String url = "";
//
//		TdmsLoginVO user = (TdmsLoginVO) SessionUtil.getUser(req);
//		if(user != null){
//			url = "/pss/main/main.do";
//		}else{
//			url = "/pss/login/loginForm.do";
//		}
//		ModelMap modelMap = new ModelMap();
//		modelMap.addAttribute("result", true);
//		modelMap.addAttribute("url", url);
//
//		return modelMap;
//	}


//	@RequestMapping("insert.do")
//	@ResponseBody
//	public ModelMap insert(HttpServletRequest req
//						,@ModelAttribute UserManageVO userManageVO
//						) {
//		LoginVO loginVO =  (LoginVO) RequestContextHolder.getRequestAttributes().getAttribute("loginVO", RequestAttributes.SCOPE_SESSION);
//
//		try {
//			String result = egovUserManageService.insertUser(userManageVO);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
//	}

}
