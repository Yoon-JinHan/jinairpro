package command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import domain.CheckServiceDTO;
import net.sf.json.JSONObject;
import service.CheckServiceService;

public class CheckServiceHandler implements CommandHandler {
	
	
	@Override
	public String process(HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		JSONObject jsonData = new JSONObject(); 
		
		// 운항정보
		String origin = request.getParameter("origin");
		String destination = request.getParameter("destination");
		String travelDate = request.getParameter("travelDate");
	 	String seat = request.getParameter("seat")=="" ? "   ": request.getParameter("seat");
		String weight = request.getParameter("weight") == "" ? "0" : request.getParameter("weight");
		String food = request.getParameter("food");
		
		CheckServiceDTO dto = new CheckServiceDTO(origin, destination, travelDate, seat.substring(0, 2), seat.substring(2), weight, food);
		
		CheckServiceService service = CheckServiceService.getInstance();
		jsonData.put("service", service.checkservice(dto));
		
		//System.out.println(jsonData.toString());
		request.setAttribute("jsonData", jsonData);
		
		
					
		return "/jinairfront/www.jinair.com/booking/ok.jsp";
	}
	
	
}













