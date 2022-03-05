package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import domain.CheckPayDTO;
import net.sf.json.JSONObject;
import service.CheckPayService;

public class CheckPayHandler implements CommandHandler {
	
	
	@Override
	public String process(HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		JSONObject jsonData = new JSONObject(); 
		
		// 운항정보
	 	String origin1 = request.getParameter("origin1");
		String destination1 = request.getParameter("destination1");
		String travelDate1 = request.getParameter("travelDate1");
		String origin2 = request.getParameter("origin2");
		String destination2 = request.getParameter("destination2");
		String travelDate2 = request.getParameter("travelDate2");
		String s1_time = request.getParameter("s1_time");
		String b1_type = request.getParameter("b1_type");
		String s2_time = request.getParameter("s2_time");
		String b2_type = request.getParameter("b1_type");
		int adultPaxCount = Integer.parseInt( request.getParameter("adultPaxCount") );
		int childPaxCount = Integer.parseInt( request.getParameter("childPaxCount") );
		int infantPaxCount =Integer.parseInt( request.getParameter("infantPaxCount") );
		
		
		CheckPayDTO checkPayDTO = new CheckPayDTO(origin1, destination1, travelDate1, origin2, destination2, travelDate2, s1_time, b1_type, s2_time, b2_type, adultPaxCount, childPaxCount, infantPaxCount);
		CheckPayService checkPayService = CheckPayService.getInstance();
		jsonData.put("fare", checkPayService.checkpay(checkPayDTO));
		
		//System.out.println(jsonData.toString());
		request.setAttribute("jsonData", jsonData);
		
		
					
		return "/jinairfront/www.jinair.com/booking/ok.jsp";
	}
	
	
}













