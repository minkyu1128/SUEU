package egovframework.iscm.filter;

import java.io.IOException;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.util.AntPathMatcher;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;

import egovframework.common.utils.session.LoginVO;
import egovframework.common.utils.session.SessionUtil;

public class SpringSecurityTargetFilter extends org.springframework.web.filter.DelegatingFilterProxy{

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain filterChain) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpServletRequest req = (HttpServletRequest) request;
		String uri = req.getRequestURI();
		
		if(uri.contains("/login/logout.do")||uri.contains("/main/main.do")){
			//인증된 사용자 대상
			HttpServletRequest httpRequest = (HttpServletRequest) request;
			LoginVO loginVO = (LoginVO)SessionUtil.getUser(httpRequest);
			if(loginVO==null){
				super.doFilter(request, response, filterChain);
			}else{
				filterChain.doFilter(request, response);
			}
		}else if(uri.contains("/iscm/cmmn/")||uri.contains("/uat/uia/")){
			//모든 사용자 대상
			filterChain.doFilter(request, response);
		}else{
			@SuppressWarnings("unchecked")
			List<String> listAuthor = (List<String>)SessionUtil.getUserAuthor((HttpServletRequest)req);
			AntPathMatcher ant = new AntPathMatcher();
			if(listAuthor==null){
				super.doFilter(request, response, filterChain);
			}else{
				WebApplicationContext context	= ContextLoader.getCurrentWebApplicationContext();
				String contextPath = context.getServletContext().getContextPath();
				boolean isMatched = false;
				for(String authorPattern:listAuthor){
					authorPattern = authorPattern.replace("\\A", "").replace("\\Z", "").replace("do.*", "do").replace(".*", "**/*").replace("\\.", ".");
					if(ant.match(contextPath+authorPattern, uri)){
						filterChain.doFilter(request, response);
						isMatched=true;
						break;
					}
				}
				if(!isMatched){
					super.doFilter(request, response, filterChain);
				}
			}
		}
		
		
	}

}
