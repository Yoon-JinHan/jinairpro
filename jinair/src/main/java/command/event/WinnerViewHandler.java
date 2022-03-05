package command.event;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.EventDTO;
import domain.WinnerDTO;
import service.event.GetPrizeEventData;
import service.event.WinnerViewService;


public class WinnerViewHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int num=Integer.parseInt(request.getParameter("eNo"));
		
		GetPrizeEventData data=GetPrizeEventData.getInstance();
		List<EventDTO> elist=data.select(num);
		
		WinnerViewService winnerViewService=WinnerViewService.getInstance();
		List<WinnerDTO> wlist=winnerViewService.selectAll(num);
		
		request.setAttribute("edto", elist);
		request.setAttribute("wdto", wlist);
		
		//content.jsp
		return "/project/event/winnerView.jsp";
	}
	
}
