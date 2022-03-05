package service.notice;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.NoticeDTO;
import persistence.JinairDAO;

public class EditNoticeService {
	private EditNoticeService() {}
	private static EditNoticeService instance=new EditNoticeService();
	public static EditNoticeService getInstance() {
		return instance;
	}
	
	public int editNotice(NoticeDTO dto) {
		Connection con = null;
		int rowCount = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			
			con.setAutoCommit(false);
			
			rowCount = dao.updateNotice(con, dto);
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
