package service.notice;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.NoticeDTO;
import persistence.JinairDAO;

public class NoticeListService {
	private static NoticeListService instance = new NoticeListService();
	private NoticeListService() {}
	public static NoticeListService getInstance() {
		return instance;
	}
	
	//한 페이지에 출력할 글 갯수
	private static final int COUNT_PER_PAGE=10;
	
	//현재 페이지 번호를 받아 10개의 글을 List에 넣고 NoticeListView 객체 리턴
	public NoticeListView getNoticeList(int pageNumber) {
		Connection conn=null;
		int currentPageNumber=pageNumber;
		try {
			conn=ConnectionProvider.getConnection();
			JinairDAO dao=JinairDAO.getInstance();
			
			//공지사항 갯수 가져옴
			int noticeTotalCount=dao.selectNoticeCount(conn);
			
			List<NoticeDTO> noticeList=null;
			
			//마지막 글(최신 글)이 첫번째 행
			int firstRow=noticeTotalCount;
			int endRow=0;
			
			//한 페이지에 출력될 글 10개의 순번
			if(noticeTotalCount > 0) {
				firstRow-=(pageNumber-1)*COUNT_PER_PAGE;
				endRow=firstRow-COUNT_PER_PAGE+1;
				noticeList=dao.selectNoticeList(conn, endRow, firstRow);//10개의 공지사항
			}else {
				currentPageNumber=0;
				dao=(JinairDAO) Collections.emptyList();
			}
			return new NoticeListView(noticeList, noticeTotalCount, currentPageNumber, COUNT_PER_PAGE, firstRow, endRow);
		}catch(SQLException | NamingException e) {
			throw new RuntimeException();
		}finally {
			JdbcUtil.close(conn);
		}
	}
}
