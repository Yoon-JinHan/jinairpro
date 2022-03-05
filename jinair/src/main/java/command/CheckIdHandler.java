package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import service.CheckIdService;

public class CheckIdHandler implements CommandHandler {
	
	
	@Override
	public String process(HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		JSONObject jsonData = new JSONObject(); 
		
		// 운항정보
	 	String mid = request.getParameter("mid");
	 	//System.out.println(mid);
	 	CheckIdService service = CheckIdService.getInstance();
	 	jsonData = service.idcheck(mid);
		
		request.setAttribute("jsonData", jsonData);
					
		return "/jinairfront/www.jinair.com/booking/ok.jsp";
	}
	
	
}













