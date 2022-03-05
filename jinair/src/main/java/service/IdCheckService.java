 package service;

import java.sql.Connection;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class IdCheckService {
	
	// 싱글톤 
	private static IdCheckService instance = new IdCheckService();
	private IdCheckService() {}
	public static IdCheckService getInstance() {
		return instance;
	}
	
	public int idCheck( String m_id ) {
		
		Connection con = null;
		int count = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			count = dao.idCheck(con, m_id );
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}
		
		return count;
		
	}
	
}
