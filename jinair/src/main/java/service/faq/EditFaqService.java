package service.faq;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.FaqDTO;
import persistence.JinairDAO;


public class EditFaqService {
	private EditFaqService() {}
	private static EditFaqService instance=new EditFaqService();
	public static EditFaqService getInstance() {
		return instance;
	}
	
	public int editFaq(FaqDTO dto) {
		Connection con = null;
		int rowCount = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			
			con.setAutoCommit(false);
			
			rowCount = dao.updateFaq(con, dto);
			con.commit();
			
		} catch (NamingException | SQLException e) {
			JdbcUtil.rollback(con);
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
		return rowCount;
	}
	
	
	public FaqDTO select(int num){
		Connection con = null;
		FaqDTO dto=new FaqDTO();
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			dto = dao.selectOneFaq(con, num);
			return dto;
		} catch (NamingException | SQLException e) {
			//e.printStackTrace();
			throw new RuntimeException(e);
		} 
	}
}
