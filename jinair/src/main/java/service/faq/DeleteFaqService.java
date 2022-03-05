package service.faq;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.FaqDTO;
import persistence.JinairDAO;

public class DeleteFaqService {
	private DeleteFaqService() {}
	private static DeleteFaqService instance = new DeleteFaqService();
	public static DeleteFaqService getInstance() {
		return instance;
	}
	
	public int deleteFaq(FaqDTO dto) {
		Connection con = null;
		int rowCount = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			
			con.setAutoCommit(false);
			
			rowCount = dao.deleteFaq(con, dto);
			con.commit();
			
		} catch (NamingException | SQLException e) {
			JdbcUtil.rollback(con);
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
		return rowCount;
	}
}
