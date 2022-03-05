package command.notice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.NoticeDTO;
import service.notice.DeleteNoticeService;

public class DeleteNoticeHandler implements CommandHandler{
	//공지사항 삭제 핸들러
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int n_no=Integer.parseInt(request.getParameter("num"));
		NoticeDTO dto = new NoticeDTO();
		dto.setN_no(n_no);
		
		DeleteNoticeService service=DeleteNoticeService.getInstance();
		int rowCount = service.deleteNotice(dto);
		
		if(rowCount==1) {
			String location="noticeList.do";
			response.sendRedirect(location);
		}
		return null;
	}
	
}
