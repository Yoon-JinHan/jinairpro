 package service;

import java.sql.Connection;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.MemberDTO;
import persistence.MemberDAO;

public class EditMemberService {
	
	// 싱글톤 
	private static EditMemberService instance = new EditMemberService();
	private EditMemberService() {}
	public static EditMemberService getInstance() {
		return instance;
	}
	
	public int editMember( MemberDTO dto ) {
		
		Connection con = null;
		int count = 0;
		
		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			count = dao.updateMember(con, dto );
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}
		
		return count;
		
	}
	
}
