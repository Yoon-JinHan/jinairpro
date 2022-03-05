package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;
import net.sf.json.JSONObject;
import service.PwdCheckService;

public class PwdCheckHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HttpSession session = request.getSession(false);
		AuthUserDTO dto = (AuthUserDTO) session.getAttribute("userDTO"); 

		String m_id = dto.getM_id();
		String pwd = request.getParameter("pw");

		PwdCheckService pwdCheckService = PwdCheckService.getInstance();
		int cnt = pwdCheckService.pwdCheck(m_id, pwd);
		
		JSONObject jObj = new JSONObject();

		if( cnt == 1 ) {	
			jObj.put("success", "true");
		} else {
			jObj.put("success", "false");
		}

		request.setAttribute("jObj", jObj);
		return "/project/member/popup/passwordCheckLayer_ok.jsp";


	}

}
