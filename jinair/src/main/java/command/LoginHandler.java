package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;
import net.sf.json.JSONObject;
import service.LoginService;

public class LoginHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		String m_id = request.getParameter("id");
		String pwd = request.getParameter("pw");
		
		HttpSession session = request.getSession(false);
		AuthUserDTO userDTO = null;

		LoginService loginService = LoginService.getInstance();
		userDTO = loginService.login(m_id, pwd);
		
		JSONObject jObj = new JSONObject();
		
		if( userDTO == null ) { // 아이디 없음 
			jObj.put("error", 0);
		} else if( userDTO.getM_name() == null ) { // 패스워드 틀림
			int cnt = loginService.selectWrongPwdCnt(m_id);

			jObj.put("error", cnt);
		} else { // 로그인 완료
			session.setAttribute("userDTO", userDTO);
			
			jObj.put("success", "true");
		}
		
		request.setAttribute("jObj", jObj);
		
		String referer = null;
		if( session != null ) {
			// login 필터에서 원래 가고자 했던 url을 가져온다. 
			referer = (String) session.getAttribute("referer");
		}
		if( referer != null ) {
			response.sendRedirect(referer);
			session.removeAttribute("referer");
			return null;
		} else  return "/project/login/login_ok.jsp";
		
		
	}

}
