package command.faq;

import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import service.faq.FaqListService;
import service.faq.FaqListView;
import service.faq.SearchFaqService;

public class FaqListHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String pCurrentPage=request.getParameter("page");
		String searchWord=request.getParameter("searchWord");
		String fgroup=request.getParameter("searchCtgrCd");
		String fgroup2=request.getParameter("searchCtgrDtlCd");
		int currentPage=1;
		if(pCurrentPage!=null) {
			currentPage=Integer.parseInt(pCurrentPage);
		}
		/*
		 * if(searchWord==null||searchWord.isEmpty()) { FaqListService
		 * service=FaqListService.getInstance(); FaqListView
		 * viewData=service.getFaqList(currentPage); request.setAttribute("list",
		 * viewData); return "faqList"; }
		 */
		//else { 
			SearchFaqService service=SearchFaqService.getInstance();
			FaqListView viewData=service.getFaqList(currentPage, searchWord, fgroup, fgroup2);
			request.setAttribute("list", viewData);
			return "/project/FAQ/faqList.jsp"; 
		//}
		 
	}
	
}
