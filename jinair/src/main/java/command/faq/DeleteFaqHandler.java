package command.faq;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.FaqDTO;
import service.faq.DeleteFaqService;


public class DeleteFaqHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int f_no=Integer.parseInt(request.getParameter("num"));
		FaqDTO dto = new FaqDTO();
		dto.setF_no(f_no);
		
		DeleteFaqService service=DeleteFaqService.getInstance();
		int rowCount = service.deleteFaq(dto);
		
		if(rowCount==1) {
			String location="faqList.do";
			response.sendRedirect(location);
		}
		return null;
	}
	
}
