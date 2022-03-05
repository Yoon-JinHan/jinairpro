package command.notice;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.NoticeDTO;
import service.notice.EditNoticeService;
import service.notice.NoticeViewService;

public class EditNoticeHandler implements CommandHandler{
	//공지사항 수정 핸들러
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//수정 페이지에 기존의 데이터 출력
		if( request.getMethod().equals("GET") ){
			int num = Integer.parseInt( request.getParameter("num") );
			
			NoticeViewService noticeViewService=NoticeViewService.getInstance();
			NoticeDTO dto=noticeViewService.selectOne(num);
			
			request.setAttribute("dto", dto);
			
			return "/project/notice/editNotice.jsp";
			
		}
		//공지사항 수정 적용
		else if( request.getMethod().equals("POST") ){ // POST 방식 
			int num = Integer.parseInt( request.getParameter("num") );
			String title = request.getParameter("title");
			String content = request.getParameter("content");
			
			NoticeDTO dto = new NoticeDTO();
		
			dto.setN_no(num);
			dto.setTitle(title);
			dto.setContent(content);
		
		 	EditNoticeService editNoticeService=EditNoticeService.getInstance();
		 	int rowCount = editNoticeService.editNotice(dto);
		 	
		 	if( rowCount == 1 ) {
		 		String location = "noticeList.do";
		 		response.sendRedirect(location);
		 	} else {
		 		String location = "list.do?error";
		 		response.sendRedirect(location);
		 	}
		}
		
		return null;
	}

}
