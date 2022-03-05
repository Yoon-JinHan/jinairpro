package command;

import java.net.URLEncoder;
import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.FindIdService;

public class FindIdHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String ml_name = request.getParameter("mbrLnm");
		String mf_name = request.getParameter("mbrFnm");
		String m_name = String.format("%s%s", ml_name, mf_name);

		String date = request.getParameter("bthDt");
		String birthDate = String.format("%s-%s-%s", date.substring(0,4), date.substring(4, 6), date.substring(6,8));
		Date birth = Date.valueOf( birthDate );

		String contact = request.getParameter("contact");
		if( !contact.contains("@") ) {
			contact = "KOR " + contact;
		}
		
		FindIdService findIdService = FindIdService.getInstance();
		String id = null;
		id = findIdService.findId(m_name, birth, contact);

		if( id != null ) { // 찾는 아이디가 존재한다. 
			m_name = m_name.substring(0, m_name.length()-1) + "*";
			id = id.substring(0, id.length()-2) + "**";
	
			String location = "/jinair/project/login/resultId.jsp";
			location = String.format("%s?m_name=%s&id=%s", location, URLEncoder.encode(m_name, "UTF-8"), id);
			response.sendRedirect(location);
			
		} else {// 아이디가 존재하지 않는다.
			return "/project/login/noResult.jsp";
		}
	
		return null;
	
	}

}
