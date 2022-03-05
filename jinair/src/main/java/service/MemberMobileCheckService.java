 package service;

import java.sql.Connection;
import java.sql.Date;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class MemberMobileCheckService {
	
	// 싱글톤 
	private static MemberMobileCheckService instance = new MemberMobileCheckService();
	private MemberMobileCheckService() {}
	public static MemberMobileCheckService getInstance() {
		return instance;
	}
	
	public String[] mobileCheck( String mobileNo) {
		
		Connection con = null;
		String[] result = new String[2];
		
		try {
			con = ConnectionProvider.getConnection();
			MemberDAO dao = new MemberDAO();
			result = dao.mobileCheck(con, mobileNo );
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(con);
		}
		
		return result;
		
	}
	
}
