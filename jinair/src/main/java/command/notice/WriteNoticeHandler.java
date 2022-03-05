package command.notice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.NoticeDTO;
import service.notice.WriteNoticeService;

public class WriteNoticeHandler implements CommandHandler{
	//공지사항 작성 핸들러
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//공지사항 작성 페이지로 이동
		if(request.getMethod().equals("GET")) {
			return "/project/notice/writeNotice.jsp";
		}
		//공지사항 작성 적용
		else if(request.getMethod().equals("POST")){
			String title = request.getParameter("title");
			String content = request.getParameter("content");
			
			NoticeDTO dto = new NoticeDTO();
			dto.setTitle(title);
			dto.setContent(content);
			
			WriteNoticeService service=WriteNoticeService.getInstance();
			int rowCount = service.writeNoice(dto);
			
			if(rowCount==1) {
				String location="noticeList.do";
				response.sendRedirect(location);
			}
		}else {
			response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED);
		}
		
		return null;
	}

}
