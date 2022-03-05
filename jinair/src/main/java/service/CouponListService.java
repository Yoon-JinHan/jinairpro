package service;

import java.sql.Connection;
import java.util.List;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.CouponDTO;
import persistence.MemberDAO;

public class CouponListService {
		// 싱글톤 
		private static CouponListService instance = new CouponListService();
		private CouponListService() {}
		public static CouponListService getInstance() {
			return instance;
		}

		public List<CouponDTO> couponList( String m_id ) {

			Connection con = null;
			List<CouponDTO> list = null;

			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				list = dao.selectCouponList(con, m_id);
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}

			return list;
		}
}
