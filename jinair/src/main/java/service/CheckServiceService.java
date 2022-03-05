package service;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.CheckServiceDTO;
import net.sf.json.JSONObject;
import persistence.JinairDAO;


public class CheckServiceService {
	
	// 1. 싱글톤 
	private static CheckServiceService instance = new CheckServiceService();
	private CheckServiceService() { }
	public static CheckServiceService getInstance() {
		return instance;
	}	
	
	public JSONObject checkservice(CheckServiceDTO dto){
		JSONObject jsonData = new JSONObject(); 
		

		Connection con = null;
 		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			
			jsonData.put("seat", dao.checkseat(con, dto));
			jsonData.put("baggage", dao.baggage(con, dto));
			jsonData.put("food", dao.food(con, dto));
			
			
			
			
			
			return jsonData;
		} catch (NamingException | SQLException e) { 
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
	
	

}
