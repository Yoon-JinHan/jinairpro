package service.notice;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.NoticeDTO;
import persistence.JinairDAO;

public class NoticeViewService {
	private NoticeViewService() {}
	private static NoticeViewService instance = new NoticeViewService();
	public static NoticeViewService getInstance() {
		return instance;
	}
	
	//3개의 공지사항을 가져오는 메서드(이전 공지사항, 선택한 공지사항, 다음 공지사항)
	public List<NoticeDTO> selectList(int num){
		Connection con = null;
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			List<NoticeDTO> list=null;
			list = dao.selectNoticeList(con, num);
			return list;
		} catch (NamingException | SQLException e) {
			//e.printStackTrace();
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}

	//한개의 공지사항을 가져오는 메서드
	public NoticeDTO selectOne(int num) {
		Connection con = null;
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			NoticeDTO dto=null;
			dto = dao.selectOneNotice(con, num);
			return dto;
		} catch (NamingException | SQLException e) {
			//e.printStackTrace();
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
}
