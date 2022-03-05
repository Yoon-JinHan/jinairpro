package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import service.IdCheckService;

public class IdCheckHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String m_id = request.getParameter("checkedId");
	
		IdCheckService checkService = IdCheckService.getInstance();
		int count = checkService.idCheck(m_id);

		JSONObject jObj = new JSONObject();
				
		if( count == 1 ) {
			jObj.put("idCheck", "true");
		} else {
			jObj.put("idCheck", "false");
		}
		
		request.setAttribute("jObj", jObj);	
	    return "/project/member/popup/idDupCheckLayer_ok.jsp";
	}

}
