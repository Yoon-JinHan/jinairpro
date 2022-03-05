package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;
import net.sf.json.JSONObject;
import service.IdCheckService;
import service.UpdatePwdServicce;

public class UpdatePwdHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpSession session = request.getSession();
		
		AuthUserDTO dto = (AuthUserDTO)session.getAttribute("userDTO");
		String m_id = dto.getM_id();
		String oldpwd = (String)request.getParameter("oldPw");
		String newPwd = (String)request.getParameter("pw");
		
		UpdatePwdServicce updatePwdServicce = UpdatePwdServicce.getInstance();
		int result = updatePwdServicce.updatePwd(m_id, oldpwd, newPwd);
	
		JSONObject jObj = new JSONObject();
		
		if( result == 0 ) { // 비밀번호가 맞지 않음 
			jObj.put("pwdError", "true");
		} else {
			jObj.put("success", "true");
		}
		
		request.setAttribute("jObj", jObj);
		return "/project/member/popup/passwordChangeLayer_ok.jsp";
	}

}
//                                              