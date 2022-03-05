package command.notice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import service.notice.NoticeListService;
import service.notice.NoticeListView;
import service.notice.SearchNoticeService;
//공지사항 목록 출력을 위한 핸들러
public class NoticeListHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String pCurrentPage=request.getParameter("page");
		String searchWord=request.getParameter("searchWord");
		int currentPage=1;
		if(pCurrentPage!=null) {
			currentPage=Integer.parseInt(pCurrentPage);
		}
		
		//searchWord가 없는 경우(검색을 하지 않은 경우)
		if(searchWord==null||searchWord.isEmpty()) {
			
			NoticeListService service=NoticeListService.getInstance();//NoticeListService 객체 생성
			NoticeListView viewData=service.getNoticeList(currentPage);//NoticeListView viewData 객체 생성
			request.setAttribute("list", viewData);//list라는 이름으로 viewData 넣어서 request 처리
			return "/project/notice/announceList.jsp";
		}
		//searchWord가 있는 경우(검색 한 경우)
		else {
			SearchNoticeService service=SearchNoticeService.getInstance();
			NoticeListView viewData=service.getNoticeList(currentPage, searchWord);
			request.setAttribute("list", viewData);
			return "/project/notice/announceList.jsp";
		}
	}
}
