package command;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import domain.MemberDTO;
import service.JoinMemberService;

public class JoinMemberHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String m_id = request.getParameter("id");
		String m_name = request.getParameter("mbrNm");
		
		String el_name = request.getParameter("engLnm");
		String ef_name = request.getParameter("engFnm");
		String e_name = String.format("%s %s", ef_name, el_name);
		
		String pwd = request.getParameter("pw");
		
		String mblFonCtrCd = request.getParameter("mblFonCtrCd");
		String mblFonNo = request.getParameter("mblFonNo");
		String tel = String.format("%s %s", mblFonCtrCd, mblFonNo); 
				
		String date = request.getParameter("bthDt");
		String birthDate = String.format("%s-%s-%s", date.substring(0,4), date.substring(4, 6), date.substring(6,8));
		Date birth = Date.valueOf( birthDate );
		
		String email = request.getParameter("emAdr");	
		char sex = request.getParameter("gndrCd").charAt(0);
		
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
		dto.setM_name(m_name);
		dto.setE_name(e_name);
		dto.setPwd(pwd);
		dto.setTel(tel);
		dto.setBirth(birth);
		dto.setEmail(email);
		dto.setSex(sex);
		dto.setNationality(nationality);
		dto.setCountry(country);
		dto.setAddr(addr);
		dto.setSmspush(smspush);
		dto.setEmailpush(emailpush);
		
		JoinMemberService joinService = JoinMemberService.getInstance();
		int rowCount = joinService.joinMember(dto);
		
		
		if( rowCount == 1 ) {
			return "/project/member/joinComplete.jsp";
		} else {
			return "/project/login/systemError.html";
		}
		
		
	}

}
