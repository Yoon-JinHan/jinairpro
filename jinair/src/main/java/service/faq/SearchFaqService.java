package service.faq;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Collections;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.FaqDTO;
import persistence.JinairDAO;

public class SearchFaqService {
	private static SearchFaqService instance=new SearchFaqService();
	private SearchFaqService() {}
	public static SearchFaqService getInstance() {
		return instance;
	}
	
	//한 페이지에 출력할 글 갯수
		private static final int COUNT_PER_PAGE=10;
		
		public FaqListView getFaqList(int pageNumber, String searchWord, String fgroup, String fgroup2) {
			Connection conn=null;
			int currentPageNumber=pageNumber;
			try {
				conn=ConnectionProvider.getConnection();
				JinairDAO dao=JinairDAO.getInstance();
				
				int faqTotalCount=dao.searchFaqCount(conn, searchWord, fgroup, fgroup2);
				
				List<FaqDTO> faqList=null;
				
				int firstRow=faqTotalCount;
				int endRow=0;
				if(faqTotalCount > 0) {
					firstRow-=(pageNumber-1)*COUNT_PER_PAGE;
					endRow=firstRow-COUNT_PER_PAGE+1;
					faqList=dao.searchFaqList(conn, endRow, firstRow, searchWord, fgroup, fgroup2);
				}else {
					currentPageNumber=0;
					dao=(JinairDAO) Collections.emptyList();
				}
				return new FaqListView(faqList, faqTotalCount, currentPageNumber, COUNT_PER_PAGE, firstRow, endRow);
			}catch(SQLException | NamingException e) {
				throw new RuntimeException();
			}finally {
				JdbcUtil.close(conn);
			}
		}
		
		
}
