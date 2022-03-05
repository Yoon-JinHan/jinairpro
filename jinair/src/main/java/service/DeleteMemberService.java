package service;

import java.sql.Connection;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class DeleteMemberService {
		// 싱글톤 
		private static DeleteMemberService instance = new DeleteMemberService();
		private DeleteMemberService() {}
		public static DeleteMemberService getInstance() {
			return instance;
		}

		public int deleteMember( String m_id ) {

			Connection con = null;
			int result = 0;

			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				result = dao.deleteMember(con, m_id );
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}

			return result;

		}

}
