package service;

import java.sql.Connection;
import java.sql.Date;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class FindIdService {
	
	// 싱글톤 
		private static FindIdService instance = new FindIdService();
		private FindIdService() {}
		public static FindIdService getInstance() {
			return instance;
		}
		
		public String findId( String m_name, Date birth, String contact) {
			
			Connection con = null;
			String m_id = null;
			
			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				m_id = dao.findId(con, m_name, birth, contact );
			
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}
			
			return m_id;
			
		}
	
}
