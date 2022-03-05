package persistence;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.util.JdbcUtil;

import domain.AuthUserDTO;
import domain.CouponDTO;
import domain.MemberDTO;

public class MemberDAO implements IMember{

	@Override
	public String[] mobileCheck( Connection con, String mobileNO) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String[] result = new String[2];

		String sql = "SELECT m_id, m_name "
				+ "FROM member "
				+ "WHERE tel= ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, mobileNO);

			rs = pstmt.executeQuery();
			if( rs.next() ) {
				result[0] = rs.getString(1);
				result[1] = rs.getString(2);
			}
			return result;
			
		} catch (Exception e){
			System.out.println("MemberDao.mobileCheck" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}
		return null;
	}

	@Override
	public int idCheck(Connection con, String m_id) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;

		String sql = "SELECT COUNT(*) cnt "
				+ "FROM member "
				+ "WHERE m_id= ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);

			rs = pstmt.executeQuery();
			if( rs.next() ) return rs.getInt(1);

		} catch (Exception e){
			System.out.println("MemberDao.idCheck" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}

		return 0;
	}

	@Override
	public int joinMember(Connection con, MemberDTO dto) throws SQLException {

		PreparedStatement pstmt = null;

		String sql = "INSERT INTO member(m_id, m_name, e_name, pwd, tel, birth, email, sex, nationality, country, addr, smspush, emailpush) "
				+ "VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? ) ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, dto.getM_id());
			pstmt.setString(2, dto.getM_name());
			pstmt.setString(3, dto.getE_name());
			pstmt.setString(4, dto.getPwd());
			pstmt.setString(5, dto.getTel());
			pstmt.setDate(6, dto.getBirth());
			pstmt.setString(7, dto.getEmail());
			pstmt.setString(8, String.valueOf(dto.getSex()));
			pstmt.setString(9, dto.getNationality());
			pstmt.setString(10, dto.getCountry());
			pstmt.setString(11, dto.getAddr());
			pstmt.setString(12, String.valueOf(dto.getSmspush()));
			pstmt.setString(13, String.valueOf(dto.getEmailpush()));

			int rowCount = pstmt.executeUpdate();

			return rowCount;

		} catch (Exception e){
			System.out.println("MemberDao.joinMember" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
		}

		return 0;
	}

	@Override
	public String findId(Connection con, String m_name, Date birth, String contact) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;

		String sql = "SELECT m_id "
				+ "FROM member "
				+ "WHERE m_name=? and birth=? and (email= ? or tel= ?) ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_name);
			pstmt.setDate(2, birth);
			pstmt.setString(3, contact);
			pstmt.setString(4, contact);

			rs = pstmt.executeQuery();
			if( rs.next() ) return rs.getString(1);

		} catch (Exception e){
			System.out.println("MemberDao.findId" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}


		return null;
	}

	@Override
	public List<String> findPwd( Connection con, String m_id,  String m_name, Date birth, String contact ) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List<String> list = null;

		String sql = "SELECT pwd, email "
				+ "FROM member "
				+ "WHERE m_id = ? and m_name=? and birth=? and (email= ? or tel= ?) ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);
			pstmt.setString(2, m_name);
			pstmt.setDate(3, birth);
			pstmt.setString(4, contact);
			pstmt.setString(5, contact);

			rs = pstmt.executeQuery();
			if( rs.next() ) {
				list = new ArrayList<String>();

				list.add( rs.getString(1) );
				list.add( rs.getString(2) );

				return list;
			}


		} catch (Exception e){
			System.out.println("MemberDao.findPwd" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}

		return null;
	}

	@Override
	public int updatePwd(Connection con, String m_id, String oldPwd, String newPwd) throws SQLException {

		PreparedStatement pstmt = null;

		String sql = "UPDATE member "
				+ "SET pwd= ? "
				+ "WHERE m_id = ? and pwd = ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, newPwd);
			pstmt.setString(2, m_id);
			pstmt.setString(3, oldPwd);

			return pstmt.executeUpdate();


		} catch (Exception e){
			System.out.println("MemberDao.updatePwd" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
		}

		return 0;
	}

	@Override
	public AuthUserDTO login(Connection con, String m_id, String pwd) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		AuthUserDTO dto = null;

		String sql = "SELECT m_name, point, pwd, "
				+ "    ( SELECT COUNT(*)  "
				+ "      FROM member m join coupon c on m.m_id=c.m_id  "
				+ "      WHERE m.m_id= ? "
				+ "    ) AS couponCnt "
				+ "FROM member "
				+ "WHERE m_id= ?";

		String login_pwd = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);
			pstmt.setString(2, m_id);

			rs = pstmt.executeQuery();

			if( rs.next() ) {

				String m_name = rs.getString("m_name");
				login_pwd = rs.getString("pwd");
				int point = rs.getInt("point");
				int couponCnt = rs.getInt("couponCnt");

				if( login_pwd.equals(pwd) ) {
					dto = new AuthUserDTO(m_id, m_name, point, couponCnt);
				} else 
					dto = new AuthUserDTO();

			}

		} catch (Exception e){
			System.out.println("MemberDao.login" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}

		return dto;
	}
	
	@Override
	public int selectWrongPwdCnt(Connection con, String m_id) throws SQLException {
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		String sql = "SELECT cnt "
				+ "FROM passwordcnt "
				+ "where m_id = ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);

			rs = pstmt.executeQuery();

			if( rs.next() ) {
				return rs.getInt("cnt");
			}

		} catch (Exception e){
			System.out.println("MemberDao.selectWrongPwdCnt" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}
		
		return -2;
	}

	@Override
	public int updateWrongPwdCnt(Connection con, String m_id, int cnt) throws SQLException {
		
		PreparedStatement pstmt = null;
		
		String sql = null;
		if( cnt == -2 ) {
			sql = "insert into passwordcnt values (?, 1) ";
		} else if( cnt == 6 ) {
			sql = "update member "
					+ "set pwd = DBMS_RANDOM.STRING('P', 20) "
					+ "where m_id = ? ";
		} else {
			sql = "update passwordcnt "
					+ "set cnt = ? "
					+ "where m_id = ? ";
		}
		try {
			pstmt = con.prepareStatement(sql);
			
			if( cnt == -2 || cnt == 6) {
				pstmt.setString(1, m_id);
				cnt = (cnt == -2 ) ? 1 : cnt;
			} else {
				pstmt.setInt(1, ++cnt);
				pstmt.setString(2, m_id);
			}
			
			pstmt.executeUpdate();
			
		} catch (Exception e){
			System.out.println("MemberDao.updateWrongPwdCnt" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
		}
		
		return cnt;
	}

	@Override
	public int pwdCheck(Connection con, String m_id, String pwd) throws SQLException {
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		String sql = "SELECT COUNT(*) cnt "
				+ "FROM member "
				+ "WHERE m_id= ? and pwd = ?";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);
			pstmt.setString(2, pwd);
	
			rs = pstmt.executeQuery();
			if( rs.next() ) return rs.getInt(1);

		} catch (Exception e){
			System.out.println("MemberDao.pwdCheck" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}

		return 0;
		
	}
	
	@Override
	public MemberDTO userInfo(Connection con, String m_id ) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		MemberDTO dto = null;

		String sql = "SELECT * "
				+ "FROM member "
				+ "WHERE m_id = ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);

			rs = pstmt.executeQuery();

			String m_name; 
			String e_name;        
			String tel;       
			Date birth;               
			String email; 
			char sex;            
			String nationality;  
			String country;  
			String addr; 
			Date joinDate;               
			int point;          
			char sns;            
			char smspush;            
			char emailpush;

			if( rs.next() ) {

				m_name = rs.getString("m_name");
				e_name = rs.getString("e_name");
				tel = rs.getString("tel");
				birth = rs.getDate("birth");
				email = rs.getString("email");
				sex = rs.getString("sex").charAt(0);
				nationality = rs.getString("nationality");
				country = rs.getString("country");
				addr = rs.getString("addr");
				joinDate = rs.getDate("joinDate");
				point = rs.getInt("point");
				sns = rs.getString("sns").charAt(0);
				smspush = rs.getString("smspush").charAt(0);
				emailpush = rs.getString("emailpush").charAt(0);

				dto = new MemberDTO(m_id, m_name, e_name, null, tel, birth, email, sex, nationality, country, addr, joinDate, point, sns, smspush, emailpush);

			}

		} catch (Exception e){
			System.out.println("MemberDao.userInfo" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}

		return dto;
	}


	@Override
	public List<String> userSns(Connection con, String m_id) throws SQLException {

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List<String> list = null;

		String sql = "select s.sns "
				+ "from member m join snslink s on m.m_id = s.m_id "
				+ "where m.m_id = ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);

			rs = pstmt.executeQuery();

			if( rs.next() ) {
				list = new ArrayList<String>();
				do {
					String sns = rs.getString("sns");

					list.add( sns );
				} while( rs.next() );
			}

		} catch (Exception e) {
			System.out.println("MemberDao.userSns" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}


		return list;
	}

	@Override
	public int deleteMember(Connection con, String m_id) throws SQLException {
		
		PreparedStatement pstmt = null;
		
		String sql = "delete from member "
				+ "where m_id = ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);
	
			return pstmt.executeUpdate();
			
		} catch (Exception e){
			System.out.println("MemberDao.deleteMember" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
		}

		return 0;
		
	}

	@Override
	public int updateMember( Connection con, MemberDTO dto ) throws SQLException {
		
		PreparedStatement pstmt = null;
		
		String sql = "update member "
				+ "set tel = ?, email = ?, nationality = ?, country = ?, addr = ?, smspush = ?, emailpush = ? "
				+ "where m_id = ? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, dto.getTel());			
			pstmt.setString(2, dto.getEmail());
			pstmt.setString(3, dto.getNationality());
			pstmt.setString(4, dto.getCountry());
			pstmt.setString(5, dto.getAddr());
			pstmt.setString(6, String.valueOf(dto.getSmspush()));
			pstmt.setString(7, String.valueOf(dto.getEmailpush()));
			pstmt.setString(8, dto.getM_id());
			
			return pstmt.executeUpdate();
			
		} catch (Exception e){
			System.out.println("MemberDao.deleteMember" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
		}

		return 0;
	}

	@Override
	public List<CouponDTO> selectCouponList(Connection con, String m_id) throws SQLException {
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		List<CouponDTO> list = null;
		CouponDTO dto = null;

		String sql = "select * "
				+ "from coupon "
				+ "where m_id = ? ";
		
		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, m_id);

			rs = pstmt.executeQuery();

			String c_no = null;      
			String c_name = null; 
			String c_type = null;   
			Date s_usingdate = null;              
			Date e_usingdate = null;              
			Date s_boardingdate = null;              
			Date e_boardingdate = null;              
			String route = null; 
			int discount = 0;         
			String service = null; 
			String channel = null;     
			String detail = null;
			
			if( rs.next() ) {
				list = new ArrayList<CouponDTO>();
				do {
					c_no = rs.getString("c_no");
					c_name = rs.getString("c_name");
					c_type = rs.getString("c_type");
					s_usingdate = rs.getDate("s_usingdate");
					e_usingdate = rs.getDate("e_usingdate");
					s_boardingdate = rs.getDate("s_boardingdate");
					e_boardingdate = rs.getDate("e_boardingdate");
					route = rs.getString("route");
					discount = rs.getInt("discount");
					service = rs.getString("service");
					channel = rs.getString("channel");
					detail = rs.getString("detail");
					
					dto = new CouponDTO(m_id, c_no, c_name, c_type, s_usingdate, e_usingdate, s_boardingdate, e_boardingdate, route, discount, service, channel, detail);
					list.add(dto);
					
				} while( rs.next() );
			}

		} catch (Exception e) {
			System.out.println("MemberDao.selectCouponList" + e.toString());
		} finally {
			JdbcUtil.close(pstmt);
			JdbcUtil.close(rs);
		}


		return list;
	}



}
