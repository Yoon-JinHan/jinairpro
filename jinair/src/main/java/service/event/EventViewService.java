package service.event;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.EventDTO;
import persistence.JinairDAO;

public class EventViewService {
	private EventViewService() {}
	private static EventViewService instance = new EventViewService();
	public static EventViewService getInstance() {
		return instance;
	}
	
	public List<EventDTO> select(int num){
		Connection con = null;
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			List<EventDTO> list=null;
			list = dao.selectOneEvent(con, num);
			return list;
		} catch (NamingException | SQLException e) {
			//e.printStackTrace();
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
}
