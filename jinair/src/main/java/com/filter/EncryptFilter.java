package com.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import com.wrapper.EncryptWrapper;

@WebFilter("*.do")
public class EncryptFilter implements Filter {

    public EncryptFilter() {
        
    }

	public void destroy() {
		
	}


	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest req = (HttpServletRequest)request;
		EncryptWrapper encW = new EncryptWrapper(req);
		encW.getParameter("pw");
		encW.getParameter("oldPw");
		chain.doFilter(encW, response);

	}

	public void init(FilterConfig fConfig) throws ServletException {
		
	}

}
