package service;

import java.sql.Connection;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class PwdCheckService {
	// 싱글톤 
		private static PwdCheckService instance = new PwdCheckService();
		private PwdCheckService() {}
		public static PwdCheckService getInstance() {
			return instance;
		}

		public int pwdCheck( String m_id, String pwd ) {

			Connection con = null;
			int result = 0;

			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				result = dao.pwdCheck(con, m_id, pwd);
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}

			return result;

		}
}
