package service;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import net.sf.json.JSONObject;
import persistence.JinairDAO;


public class CheckIdService {
	
	// 1. 싱글톤 
	private static CheckIdService instance = new CheckIdService();
	private CheckIdService() { }
	public static CheckIdService getInstance() {
		return instance;
	}	
	
	public JSONObject idcheck(String mid){
		//
		JSONObject jsonData = new JSONObject(); 
		Connection con = null;
 		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			jsonData = dao.idcheck(con, mid);
			return jsonData;
		} catch (NamingException | SQLException e) { 
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}

}
