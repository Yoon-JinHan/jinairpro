package command;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import domain.MemberDTO;
import net.sf.json.JSONObject;
import service.EditMemberService;
import service.JoinMemberService;

public class EditMemberHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String m_id = request.getParameter("id");
		
		String mblFonCtrCd = request.getParameter("mblFonCtrCd");
		String mblFonNo = request.getParameter("mblFonNo");
		String tel = String.format("%s %s", mblFonCtrCd, mblFonNo); 
				
		String date = request.getParameter("bthDt");
		String birthDate = String.format("%s-%s-%s", date.substring(0,4), date.substring(4, 6), date.substring(6,8));
		Date birth = Date.valueOf( birthDate );
		
		String email = request.getParameter("emAdr");	
		
		String nationality = request.getParameter("ntnltyCd");
		String country = request.getParameter("residenceIataCountryCode");
		
		String pstNo = request.getParameter("pstNo");
		String adr1 = request.getParameter("adr1");
		String adr2 = request.getParameter("adr2");
		String addr = String.format("%s+%s+%s",pstNo, adr1, adr2);
		
		char smspush = request.getParameter("smsRcvYn").charAt(0);
		char emailpush = request.getParameter("emRcvYn").charAt(0);
		
		MemberDTO dto = new MemberDTO();
		dto.setM_id(m_id);
		dto.setTel(tel);
		dto.setBirth(birth);
		dto.setEmail(email);
		dto.setNationality(nationality);
		dto.setCountry(country);
		dto.setAddr(addr);
		dto.setSmspush(smspush);
		dto.setEmailpush(emailpush);
		
		EditMemberService editMemberService = EditMemberService.getInstance();
		int rowCount = editMemberService.editMember(dto);
		
		JSONObject jObj = new JSONObject();
		
		if( rowCount == 1 ) {
			jObj.put("success", "true");
		} else {
			jObj.put("success", "false");
		}
		
		request.setAttribute("jObj", jObj);
		return "/project/mypage/editMemberForm_ok.jsp";
	}

}
