package command.faq;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import command.CommandHandler;
import domain.FaqDTO;
import persistence.JinairDAO;
import service.faq.EditFaqService;


public class EditFaqHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		if( request.getMethod().equals("GET") ){
			int num = Integer.parseInt( request.getParameter("num") );
			
			EditFaqService service=EditFaqService.getInstance();
			FaqDTO dto = service.select(num);
			
			request.setAttribute("dto", dto);
			
			return "/project/FAQ/editFaq.jsp";
			
		} else if( request.getMethod().equals("POST") ){ // POST 방식 
			int num = Integer.parseInt( request.getParameter("num") );
			String title = request.getParameter("title");
			String content = request.getParameter("content");
			String f_group = request.getParameter("fgroup");
			String f_group2 = request.getParameter("fgroup2");
			
			FaqDTO dto = new FaqDTO();
		
			dto.setF_no(num);
			dto.setF_group(f_group);
			dto.setF_group2(f_group2);
			dto.setTitle(title);
			dto.setContent(content);
		
		 	EditFaqService editFaqService=EditFaqService.getInstance();
		 	int rowCount = editFaqService.editFaq(dto);
		 	
		 	if( rowCount == 1 ) {
		 		String location = "faqList.do";
		 		response.sendRedirect(location);
		 	} else {
		 		String location = "faqList.do?error";
		 		response.sendRedirect(location);
		 	}
		}
		return null;
	}

	
}
