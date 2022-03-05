package command.event;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.EventDTO;
import service.event.EventViewService;


public class EventViewHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int num=Integer.parseInt(request.getParameter("eNo"));
		
		EventViewService service=EventViewService.getInstance();
		List<EventDTO> list=service.select(num);
		
		request.setAttribute("dto", list);
		
		//content.jsp
		return "/project/event/eventView.jsp";
	}
	
}
