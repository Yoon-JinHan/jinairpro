package service;

import java.sql.Connection;
import java.util.List;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.AuthUserDTO;
import domain.MemberDTO;
import persistence.MemberDAO;

public class MemberInfoService {

	// 싱글톤 
		private static MemberInfoService instance = new MemberInfoService();
		private MemberInfoService() {}
		public static MemberInfoService getInstance() {
			return instance;
		}

		public MemberDTO userInfo( String m_id ) {

			Connection con = null;
			MemberDTO dto = null;

			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				dto = dao.userInfo(con, m_id );
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}

			return dto;

		}
		public List<String> userSns( String m_id ) {

			Connection con = null;
			List<String> list = null;

			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				list = dao.userSns(con, m_id );
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}

			return list;

		}

}
