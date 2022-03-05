package command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;
import domain.MemberDTO;
import net.sf.json.JSONObject;
import service.MemberInfoService;

public class MemberInfoHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		HttpSession session = request.getSession(false);
		AuthUserDTO dto = (AuthUserDTO) session.getAttribute("userDTO"); 
		
		String m_id = dto.getM_id();
		
		MemberDTO infoDTO = null;
		List<String> snsList = null;
		
		MemberInfoService infoService = MemberInfoService.getInstance();
		infoDTO = infoService.userInfo(m_id);
		snsList = infoService.userSns(m_id);
		
		
		request.setAttribute("infoDTO", infoDTO);
		request.setAttribute("snsList", snsList);	
		
		return "/project/mypage/editMemberForm.jsp";
	
	}

}
