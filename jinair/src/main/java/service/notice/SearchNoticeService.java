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

public class SearchNoticeService {
	private static SearchNoticeService instance = new SearchNoticeService();
	private SearchNoticeService() {}
	public static SearchNoticeService getInstance() {
		return instance;
	}
	
	//한 페이지에 출력할 글 갯수
	private static final int COUNT_PER_PAGE=10;
	
	public NoticeListView getNoticeList(int pageNumber, String searchWord) {
		Connection conn=null;
		int currentPageNumber=pageNumber;
		try {
			conn=ConnectionProvider.getConnection();
			JinairDAO dao=JinairDAO.getInstance();
			
			int noticeTotalCount=dao.searchNoticeCount(conn, searchWord);
			
			List<NoticeDTO> noticeList=null;
			
			int firstRow=noticeTotalCount;
			int endRow=0;
			if(noticeTotalCount > 0) {
				firstRow-=(pageNumber-1)*COUNT_PER_PAGE;
				endRow=firstRow-COUNT_PER_PAGE+1;
				noticeList=dao.searchNoticeList(conn, endRow, firstRow, searchWord);
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
