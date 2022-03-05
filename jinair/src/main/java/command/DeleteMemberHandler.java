package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;
import net.sf.json.JSONObject;
import service.DeleteMemberService;

public class DeleteMemberHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpSession session = request.getSession();
		
		AuthUserDTO dto = (AuthUserDTO)session.getAttribute("userDTO");
		String m_id = dto.getM_id();
		
		DeleteMemberService deleteMemberService = DeleteMemberService.getInstance();
		int result = deleteMemberService.deleteMember(m_id);
	
		JSONObject jObj = new JSONObject();
		
		if( result == 0 ) { // 탈퇴 실패
			jObj.put("success", "false");
		} else {
			jObj.put("success", "true");
		}
		
		request.setAttribute("jObj", jObj);
		return "/project/member/popup/withdrawal_ok.jsp";
	}
}
