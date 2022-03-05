package command.notice;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import command.CommandHandler;
import domain.NoticeDTO;
import service.notice.NoticeViewService;

public class NoticeViewHandler implements CommandHandler{
	//선택한 공지사항 내용 보기 위한 핸들러
	//이전페이지와 다음 페이지의 제목을 출력해야 하므로 dto객체가 담긴 list를 클라이언트에 보내줘야한다
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int num=Integer.parseInt(request.getParameter("num"));
		
		NoticeViewService service=NoticeViewService.getInstance();
		List<NoticeDTO> list=service.selectList(num);
		
		request.setAttribute("dto", list);
		
		return "/project/notice/announceView.jsp";
	}
	
}
