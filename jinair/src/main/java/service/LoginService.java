package service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.AuthUserDTO;
import domain.MemberDTO;
import persistence.MemberDAO;

public class LoginService {
	// 싱글톤 
	private static LoginService instance = new LoginService();
	private LoginService() {}
	public static LoginService getInstance() {
		return instance;
	}

	public AuthUserDTO login( String m_id, String pwd ) {

		Connection con = null;
		AuthUserDTO dto = null;

		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			dto = dao.login(con, m_id, pwd );
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}

		return dto;

	}
	
	public int selectWrongPwdCnt( String m_id ) {
		
		Connection con = null;
		int cnt = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			cnt = dao.selectWrongPwdCnt(con, m_id);
			
			if( cnt < 5 ) {
				if( cnt == 4 ) { // 비밀번호 5번 틀린경우 로그인 block 처리. 
					dao.updateWrongPwdCnt(con, m_id, 6);
				}
				cnt = dao.updateWrongPwdCnt(con, m_id, cnt);
			} else if (cnt == 5 ) {
				cnt++;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}
		
		return cnt;
	}

}
