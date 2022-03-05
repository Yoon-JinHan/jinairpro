package service.event;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.WinnerDTO;
import persistence.JinairDAO;

public class WinnerViewService {
	private WinnerViewService() {}
	private static WinnerViewService instance = new WinnerViewService();
	public static WinnerViewService getInstance() {
		return instance;
	}
	
	public List<WinnerDTO> select(int num){
		Connection con = null;
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			List<WinnerDTO> list=null;
			list = dao.selectOneWinner(con, num);
			return list;
		} catch (NamingException | SQLException e) {
			//e.printStackTrace();
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
	
	public List<WinnerDTO> selectAll(int num) {
		Connection con =null;
		try {
			con=ConnectionProvider.getConnection();
			JinairDAO dao=JinairDAO.getInstance();
			List<WinnerDTO> list=null;
			list=dao.selectAllWinner(con, num);
			return list;
		}catch (NamingException | SQLException e) {
			//e.printStackTrace();
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
}
