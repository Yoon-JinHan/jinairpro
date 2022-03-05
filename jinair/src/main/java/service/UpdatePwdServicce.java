package service;

import java.sql.Connection;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class UpdatePwdServicce {
	// 싱글톤 
	private static UpdatePwdServicce instance = new UpdatePwdServicce();
	private UpdatePwdServicce() {}
	public static UpdatePwdServicce getInstance() {
		return instance;
	}

	public int updatePwd( String m_id, String oldPwd, String newPwd) {

		Connection con = null;
		int result = 0;

		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			result = dao.updatePwd(con, m_id, oldPwd, newPwd );
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}

		return result;

	}

}
