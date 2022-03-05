package command.faq;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.FaqDTO;
import service.faq.WriteFaqService;


public class WriteFaqHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		if(request.getMethod().equals("GET")) {
			return "/project/FAQ/writeFaq.jsp";
		}else if(request.getMethod().equals("POST")){
			String f_group=request.getParameter("fgroup");
			String f_group2=request.getParameter("fgroup2");
			String title = request.getParameter("title");
			String content = request.getParameter("content");
			
			FaqDTO dto = new FaqDTO();
			
			dto.setF_group(f_group);
			dto.setF_group2(f_group2);
			dto.setTitle(title);
			dto.setContent(content);
			
			WriteFaqService service=WriteFaqService.getInstance();
			int rowCount = service.writeFaq(dto);
			
			if(rowCount==1) {
				String location="faqList.do";
				response.sendRedirect(location);
			}
		}else {
			response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
		}
		
		return null;
	}

}
