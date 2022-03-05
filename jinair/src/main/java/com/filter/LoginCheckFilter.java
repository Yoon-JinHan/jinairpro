package com.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;

//@WebFilter("/project/login/findid.do")
public class LoginCheckFilter implements Filter {

	public LoginCheckFilter() {

	}

	public void destroy() {

	}


	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		// session - member ( logonID )
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		
		// httpRequest.getSession();
		HttpSession session = httpRequest.getSession(false);
		AuthUserDTO userDTO = null;
		
		boolean isLogon = false;
		
		if( session != null ) {
			userDTO = (AuthUserDTO) session.getAttribute("userDTO");
			if ( userDTO != null ) {
				isLogon = true;
			}
		}

		if (isLogon) {
			chain.doFilter(request, response);
		} else {
			// 원래 가고자 한 경로 -> 세션 저장 
			String referer = httpRequest.getRequestURI();
			System.out.println("> referer : " + referer);
			session.setAttribute("referer", referer);

			// login.jsp 페이지로 이동 - 포워딩 / 리다이렉트 
			String location = "/jinair/project/login/login.jsp";
			httpResponse.sendRedirect(location);		
		}	

	}

	public void init(FilterConfig fConfig) throws ServletException {

	}

}
