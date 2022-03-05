package command;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MemberMobileCheckService;

public class MemberMobileCheckHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String userName = request.getParameter("userName");
		String birth = request.getParameter("birth");
		int sexInt = Integer.parseInt(request.getParameter("sex"));
		char sex = ( sexInt == 1 )? 'M':'F';
		String mobileno = request.getParameter("mobileno");
		mobileno = "KOR " + mobileno;
		
		String yearOfBirth = fn_getDateOfBirth( birth.substring(0, 2), sexInt);
		String monthOfBirth = birth.substring(2, 4);
		String dateOfBirth = birth.substring(4);
		
		String date = String.format("%s-%s-%s", yearOfBirth, monthOfBirth, dateOfBirth);
	
		Date birthDate = Date.valueOf( date );	
	
		MemberMobileCheckService checkService = MemberMobileCheckService.getInstance();
		String[] result = checkService.mobileCheck( mobileno );
		String id = result[0];
		String name = result[1];
		if( id != null ) id = id.toUpperCase();
		
		// 동일한 멤버가 존재한다. -> 이미 존재하는 회원 
		if( id != null ) { 
			request.setAttribute("id", id);
			request.setAttribute("name", name);
			return "/project/member/alreadyJoin.jsp";	
		} else { // 멤버가 존재하지 않는다 -> 회원가입 가능하다.
			request.setAttribute("birthDate", yearOfBirth+monthOfBirth+dateOfBirth);
			return "/project/member/joinForm.jsp";
		}
		
	}

	public static String fn_getDateOfBirth(String str1, int sexInt){
		String dateOfBirth = null;
		if(sexInt == 1 || sexInt == 2 || sexInt == 5 || sexInt == 6){
			// 한국인 1900~, 외국인 1900~
			dateOfBirth = "19"+str1;
		}else if(sexInt == 3 || sexInt == 4 || sexInt == 7 || sexInt == 8){
			// 한국인 2000~, 외국인 2000~
			dateOfBirth = "20"+str1;
		}else if(sexInt == 9 || sexInt == 0){
			// 한국인 1800~
			dateOfBirth = "18"+str1;
		}
		return dateOfBirth;
	}
}
