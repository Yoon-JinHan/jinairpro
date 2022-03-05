 package service;

import java.sql.Connection;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.MemberDTO;
import persistence.MemberDAO;

public class JoinMemberService {
	
	// 싱글톤 
	private static JoinMemberService instance = new JoinMemberService();
	private JoinMemberService() {}
	public static JoinMemberService getInstance() {
		return instance;
	}
	
	public int joinMember( MemberDTO dto ) {
		
		Connection con = null;
		int count = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			count = dao.joinMember(con, dto );
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}
		
		return count;
		
	}
	
}
