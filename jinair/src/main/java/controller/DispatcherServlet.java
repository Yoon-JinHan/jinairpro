package controller;

import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;

// 컨트롤러 서블릿
public class DispatcherServlet extends HttpServlet{

	private static final long serialVersionUID = 3495685887147196111L;

	@Override
	public void destroy() {
		// 컨트롤러 서블릿객체가 소멸될 때 
	}
	
	private Map<String, CommandHandler> commandHandlerMap = new HashMap<>();

	@Override
	public void init() throws ServletException {
		// 컨트롤러 서블릿 객체가 생성될 때 - 초기화 작업 
		String path = this.getInitParameter("path");
		String realPath = this.getServletContext().getRealPath(path);
		
		Properties prop = new Properties();
		try( FileReader fr = new FileReader(realPath)) {
			prop.load(fr);
		} catch (Exception e) {
			throw new ServletException(e);
		}
		
		Iterator<Object> ir = prop.keySet().iterator();
		while (ir.hasNext()) {
			String url = (String) ir.next();
			String commandHandlerFullName = prop.getProperty(url);
			try {
				Class<?> handlerClass = Class.forName(commandHandlerFullName);
				CommandHandler handlerInstance =  (CommandHandler) handlerClass.newInstance();
				this.commandHandlerMap.put(url, handlerInstance);
			} catch (ClassNotFoundException | InstantiationException | IllegalAccessException e) {
				e.printStackTrace();
			}
			
		}
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//System.out.println("> DispatcherServlet.doGet() 호출됨");
		// 1. 요청 URL 분석 - list.do/ write.do/ ... 
		String requestURI = request.getRequestURI();
		// System.out.println(requestURI);  // /jspPro/board/list.do -> ListHandler.java 
		String contextPath = request.getContextPath();
		if( requestURI.indexOf(contextPath) == 0 ) {
			requestURI = requestURI.substring( contextPath.length() );
		}
		
		// 2. commandHandlerMap 맵 안에서 로직을 처리하는 모델(Model)을 얻어오는 작업 
		CommandHandler modelhandler = this.commandHandlerMap.get(requestURI);
		String viewPage = null;
		
		try {
			viewPage = modelhandler.process(request, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// 3. 포워딩 또는 리다이렉트 
		if ( viewPage != null ) {
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	
}
