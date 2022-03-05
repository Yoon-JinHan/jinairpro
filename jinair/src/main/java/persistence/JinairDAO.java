package persistence;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.BaggageDTO;
import domain.BoarderDTO;
import domain.BookingDTO;
import domain.CancelDTO;
import domain.CheckServiceDTO;
import domain.DiscountDTO;
import domain.EventDTO;
import domain.FaqDTO;
import domain.FareDTO;
import domain.FoodDTO;
import domain.NMBookDTO;
import domain.NoticeDTO;
import domain.ReservedSeatDTO;
import domain.ScheduleDTO;
import domain.SeatDTO;
import domain.SeatTableDTO;
import domain.ServiceDTO;
import domain.WinnerDTO;
import net.sf.json.JSONObject; 

public class JinairDAO implements IJinair{

	// 1. 싱글톤
	private JinairDAO() {}
	private static JinairDAO instance = new JinairDAO();
	public static JinairDAO getInstance() {
		return instance;
	}

	@Override
	public List<NoticeDTO> selectNoticeList(Connection con, int firstlow, int endlow) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select * "
				+ "from ( "
				+ "    select rownum no, t.* "
				+ "    from ( "
				+ "        select * "
				+ "        from notice "
				+ "        order by n_no "
				+ "    )t "
				+ ")b "
				+ "where b.no between ? and ? "
				+ "order by no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, firstlow);
        	pstmt.setInt(2, endlow);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<NoticeDTO> list=new ArrayList<NoticeDTO>();
        		do {
					NoticeDTO dto=new NoticeDTO();
					dto.setNo(rs.getInt("no"));
					dto.setTitle(rs.getString("title"));
					dto.setN_date(rs.getDate("n_date"));
					dto.setN_no(rs.getInt("n_no"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int selectNoticeCount(Connection con) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select count(*) from notice ";
		try {
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			rs.next();
			return rs.getInt(1);
		}catch(Exception e){
			System.out.println("MessageImpl.selectCount -"+e.toString());
		}finally {
			JdbcUtil.close(pstmt);
		}
		return 0;
	}

	@Override
	public List<NoticeDTO> selectNoticeList(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=selectOneNoticeNo(con, num);
		
		String sql="select * "
				+ "from ( "
				+ "    select rownum no, t.*  "
				+ "    from (  "
				+ "        select *  "
				+ "        from notice  "
				+ "        order by n_no "
				+ "        )t  "
				+ ")b "
				+ "where no between ? and ? "
				+ "order by b.no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, no-1);
        	pstmt.setInt(2, no+1);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<NoticeDTO> list=new ArrayList<NoticeDTO>();
        		do {
					NoticeDTO dto=new NoticeDTO();
					dto.setN_no(rs.getInt("n_no"));
					dto.setTitle(rs.getString("title"));
					dto.setN_date(rs.getDate("n_date"));
					dto.setContent(rs.getString("content"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public List<NoticeDTO> searchNoticeList(Connection con, int firstlow, int endlow, String searchWord) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select * "
				+ "from ( "
				+ "    select rownum no, t.* "
				+ "    from (  "
				+ "        select *  "
				+ "        from notice  "
				+ "        where REGEXP_LIKE(title, ?) "
				+ "        order by n_no"
				+ "        )t  "
				+ ")b  "
				+ "where b.no between ? and ?  "
				+ "order by no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setString(1, searchWord);
        	pstmt.setInt(2, firstlow);
        	pstmt.setInt(3, endlow);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<NoticeDTO> list=new ArrayList<NoticeDTO>();
        		do {
					NoticeDTO dto=new NoticeDTO();
					dto.setNo(rs.getInt("no"));
					dto.setN_no(rs.getInt("n_no"));
					dto.setTitle(rs.getString("title"));
					dto.setN_date(rs.getDate("n_date"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int searchNoticeCount(Connection con, String searchWord) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select count(*) from notice where REGEXP_LIKE( title , ?) ";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, searchWord);
			rs=pstmt.executeQuery();
			rs.next();
			return rs.getInt(1);
		}catch(Exception e){
			System.out.println("MessageImpl.selectCount -"+e.toString());
		}finally {
			JdbcUtil.close(pstmt);
		}
		return 0;
	}

	@Override
	public int insertNotice(Connection con, NoticeDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		String sql = " insert into notice(n_no, title, n_date, content) "
				+ " values(seq_notice.nextval, ?, SYSDATE, ?) " ;
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getTitle());
			pstmt.setString(2, dto.getContent());
			return pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.println("insert -"+e.toString());;
		}finally {
			JdbcUtil.close(pstmt);
		}
		return 0;
	}

	@Override
	public int updateNotice(Connection con, NoticeDTO dto) throws SQLException {
		PreparedStatement pstmt=null;
		String sql = "UPDATE notice "
				+ " SET title =  ?, content = ? "
				+ " WHERE n_no = ? ";
		int rowCount=0;
		
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getTitle());
			pstmt.setString(2, dto.getContent());
			pstmt.setInt(3, dto.getN_no());
			
			rowCount=pstmt.executeUpdate();
		} finally {
			JdbcUtil.close(pstmt);
		}
		if(rowCount==1) {
			return rowCount;
		}else {			
			return 0;
		}
	}

	@Override
	public int deleteNotice(Connection con, NoticeDTO dto) throws SQLException {
		PreparedStatement pstmt=null;
		String sql = "delete from notice where n_no = ? ";
		int rowCount=0;
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, dto.getN_no());
			rowCount=pstmt.executeUpdate();
		}catch(Exception e){
			System.out.println("MessageImpl.selectCount -"+e.toString());
		}finally {
			JdbcUtil.close(pstmt);
		}
		if(rowCount==1) {
			return rowCount;
		}else {
			return 0;
		}
	}

	@Override
	public int selectOneNoticeNo(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=0;
		String sql = "select * "
				+ "from ( "
				+ "    select rownum no, t.*  "
				+ "    from (  "
				+ "        select *  "
				+ "        from notice  "
				+ "        order by n_no "
				+ "        )t  "
				+ ")b "
				+ "where n_no=? "
				+ "order by b.no desc ";

		try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, num);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		do {
					NoticeDTO dto=new NoticeDTO();
					no=rs.getInt("no");
				} while (rs.next());
        	}
        	
        }finally {
			JdbcUtil.close(pstmt);
		}
		return no;
	}

	@Override
	public List<FaqDTO> selectFaqList(Connection con, int firstlow, int endlow) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select * "
				+ "from ( "
				+ "    select rownum no, t.* "
				+ "    from ( "
				+ "        select * "
				+ "        from faq "
				+ "        order by f_no "
				+ "    )t "
				+ ")b "
				+ "where b.no between ? and ? "
				+ "order by no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, firstlow);
        	pstmt.setInt(2, endlow);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<FaqDTO> list=new ArrayList<FaqDTO>();
        		do {
					FaqDTO dto=new FaqDTO();
					dto.setNum(rs.getInt("no"));
					dto.setF_no(rs.getInt("f_no"));
					dto.setF_group(rs.getString("f_group"));
					dto.setF_group2(rs.getString("f_group2"));
					dto.setTitle(rs.getString("title"));
					dto.setContent(rs.getString("content"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int selectFaqCount(Connection con) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select count(*) from faq ";
		try {
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			rs.next();
			return rs.getInt(1);
		}catch(Exception e){
			System.out.println("MessageImpl.selectCount -"+e.toString());
		}finally {
			JdbcUtil.close(pstmt);
		}
		return 0;
	}

	
	@Override
	public List<FaqDTO> searchFaqList(Connection con, int firstlow, int endlow, String searchWord, String fgroup, String fgroup2) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select * "
				+ "from ( "
				+ "    select rownum no, t.* "
				+ "    from (  "
				+ "        select *  "
				+ "        from faq  ";
				
		if(searchWord==null||searchWord.isEmpty()) {
			if(!(fgroup==null||fgroup.isEmpty())) {
				if(fgroup2==null||fgroup2.isEmpty()) {					
					sql+=" where REGEXP_LIKE(f_group, ? ) ";
				}else {
					sql+=" where REGEXP_LIKE(f_group, ? ) and REGEXP_LIKE(f_group2, ?) ";
				}
			}
		}else {
			if(!(fgroup==null||fgroup.isEmpty())) {
				if(fgroup2==null||fgroup2.isEmpty()) {					
					sql+=" where REGEXP_LIKE(f_group, ? ) and REGEXP_LIKE(title, ?) ";
				}else {
					sql+=" where REGEXP_LIKE(f_group, ? ) and REGEXP_LIKE(f_group2, ?) and REGEXP_LIKE(title, ?) ";
				}
			}else {
				sql+=" where REGEXP_LIKE(title, ?) ";
			}
		}

				sql+= "        order by f_no "
				+ "        )t  "
				+ ")b  "
				+ "where b.no between ? and ?  "
				+ "order by no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	
    		if(searchWord==null||searchWord.isEmpty()) {
    			if(!(fgroup==null||fgroup.isEmpty())) {
    				if(fgroup2==null||fgroup2.isEmpty()) {					
    					pstmt.setString(1, fgroup);
    		        	pstmt.setInt(2, firstlow);
    		        	pstmt.setInt(3, endlow);
    				}else {
    					pstmt.setString(1, fgroup);
    					pstmt.setString(2, fgroup2);
    		        	pstmt.setInt(3, firstlow);
    		        	pstmt.setInt(4, endlow);
    				}
    			}else {
    				pstmt.setInt(1, firstlow);
    				pstmt.setInt(2, endlow);
    			}
    		}else {
    			if(!(fgroup==null||fgroup.isEmpty())) {
    				if(fgroup2==null||fgroup2.isEmpty()) {					
    					pstmt.setString(1, fgroup);
    					pstmt.setString(2, searchWord);
    		        	pstmt.setInt(3, firstlow);
    		        	pstmt.setInt(4, endlow);
    				}else {
    					pstmt.setString(1, fgroup);
    					pstmt.setString(2, fgroup2);
    					pstmt.setString(3, searchWord);
    		        	pstmt.setInt(4, firstlow);
    		        	pstmt.setInt(5, endlow);
    				}
    			}else {
    				pstmt.setString(1, searchWord);
		        	pstmt.setInt(2, firstlow);
		        	pstmt.setInt(3, endlow);
    			}
    		}

        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<FaqDTO> list=new ArrayList<FaqDTO>();
        		do {
					FaqDTO dto=new FaqDTO();
					dto.setNum(rs.getInt("no"));
					dto.setF_no(rs.getInt("f_no"));
					dto.setF_group(rs.getString("f_group"));
					dto.setF_group2(rs.getString("f_group2"));
					dto.setTitle(rs.getString("title"));
					dto.setContent(rs.getString("content"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int searchFaqCount(Connection con, String searchWord, String fgroup, String fgroup2) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		String sql = "select count(*) from faq ";
		if(searchWord==null||searchWord.isEmpty()) {
			if(!(fgroup==null||fgroup.isEmpty())) {
				if(fgroup2==null||fgroup2.isEmpty()) {					
					sql+=" where REGEXP_LIKE(f_group, ? ) ";
				}else {
					sql+=" where REGEXP_LIKE(f_group, ? ) and REGEXP_LIKE(f_group2, ?) ";
				}
			}
		}else {
			if(!(fgroup==null||fgroup.isEmpty())) {
				if(fgroup2==null||fgroup2.isEmpty()) {					
					sql+=" where REGEXP_LIKE(f_group, ? ) and REGEXP_LIKE(title, ?) ";
				}else {
					sql+=" where REGEXP_LIKE(f_group, ? ) and REGEXP_LIKE(f_group2, ?) and REGEXP_LIKE(title, ?) ";
				}
			}else {
				sql+=" where REGEXP_LIKE(title, ?) ";
			}
		}
		try {
			pstmt=con.prepareStatement(sql);
			if(searchWord==null||searchWord.isEmpty()) {
    			if(!(fgroup==null||fgroup.isEmpty())) {
    				if(fgroup2==null||fgroup2.isEmpty()) {					
    					pstmt.setString(1, fgroup);
    				}else {
    					pstmt.setString(1, fgroup);
    					pstmt.setString(2, fgroup2);
    				}
    			}
    		}else {
    			if(!(fgroup==null||fgroup.isEmpty())) {
    				if(fgroup2==null||fgroup2.isEmpty()) {					
    					pstmt.setString(1, fgroup);
    					pstmt.setString(2, searchWord);
    				}else {
    					pstmt.setString(1, fgroup);
    					pstmt.setString(2, fgroup2);
    					pstmt.setString(3, searchWord);
    				}
    			}else {
    				pstmt.setString(1, searchWord);
    			}
    		}
			rs=pstmt.executeQuery();
			rs.next();
			return rs.getInt(1);
		}catch(Exception e){
			System.out.println("JinairDAO.searchFaqCount -"+e.toString());
		}finally {
			JdbcUtil.close(pstmt);
		}
		return 0;
	}

	@Override
	public int insertFaq(Connection con, FaqDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		String sql = " insert into faq(f_no, f_group, f_group2, title, content) "
				+ " values(seq_faq.nextval, ?, ?, ?, ?) " ;
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getF_group());
			pstmt.setString(2, dto.getF_group2());
			pstmt.setString(3, dto.getTitle());
			pstmt.setString(4, dto.getContent());
			return pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.println("insert -"+e.toString());;
		}finally {
			JdbcUtil.close(pstmt);
		}
		return 0;
	}

	@Override
	public int updateFaq(Connection con, FaqDTO dto) throws SQLException {
		PreparedStatement pstmt=null;
		String sql = "UPDATE faq "
				+ " SET f_group = ?,f_group2 = ?,  title =  ?, content = ? "
				+ " WHERE f_no = ? ";
		int rowCount=0;
		
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getF_group());
			pstmt.setString(2, dto.getF_group2());
			pstmt.setString(3, dto.getTitle());
			pstmt.setString(4, dto.getContent());
			pstmt.setInt(5, dto.getF_no());
			
			rowCount=pstmt.executeUpdate();
		} finally {
			JdbcUtil.close(pstmt);
		}
		if(rowCount==1) {
			return rowCount;
		}else {			
			return 0;
		}
	}

	@Override
	public FaqDTO selectOneFaq(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		String sql="select * "
				+ "from faq "
				+ "where f_no = ? ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, num);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		FaqDTO dto=null;
        		do {
					dto=new FaqDTO();
					dto.setF_no(rs.getInt("f_no"));
					dto.setF_group(rs.getString("f_group"));
					dto.setF_group2(rs.getString("f_group2"));
					dto.setTitle(rs.getString("title"));
					dto.setContent(rs.getString("content"));
				} while (rs.next());
        		return dto;
        	}
        }finally {
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int deleteFaq(Connection con, FaqDTO dto) throws SQLException {
		PreparedStatement pstmt=null;
		String sql = "delete from faq where f_no = ? ";
		int rowCount=0;
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, dto.getF_no());
			rowCount=pstmt.executeUpdate();
		}catch(Exception e){
			System.out.println("DAO.deletCount -"+e.toString());
		}finally {
			JdbcUtil.close(pstmt);
		}
		if(rowCount==1) {
			return rowCount;
		}else {
			return 0;
		}
	}

	@Override
	public List<EventDTO> selectOneEvent(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=selectOneEventNo(con, num);
		
		String sql="select * "
				+ "from ( "
				+ "    select rownum no, t.*  "
				+ "    from (  "
				+ "        select *  "
				+ "        from event  "
				+ "        order by e_no "
				+ "        )t  "
				+ ")b "
				+ "where no between ? and ? "
				+ "order by b.no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, no-1);
        	pstmt.setInt(2, no+1);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<EventDTO> list=new ArrayList<EventDTO>();
        		do {
					EventDTO dto=new EventDTO();
					dto.setE_no(rs.getInt("e_no"));
					dto.setE_name(rs.getString("e_name"));
					dto.setSdate(rs.getDate("sdate"));
					dto.setEdate(rs.getDate("edate"));
					dto.setContent(rs.getString("content"));
					dto.setProgress(rs.getString("progress"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int selectOneEventNo(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=0;
		String sql = "select * "
				+ "from ( "
				+ "    select rownum no, t.*  "
				+ "    from (  "
				+ "        select *  "
				+ "        from event  "
				+ "        order by e_no "
				+ "        )t  "
				+ ")b "
				+ "where e_no=? "
				+ "order by b.no desc ";

		try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, num);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		do {
					EventDTO dto=new EventDTO();
					no=rs.getInt("no");
					/*
					 * dto.setN_no(rs.getInt("n_no")); dto.setTitle(rs.getString("title"));
					 * dto.setN_date(rs.getDate("n_date")); list.add(dto);
					 */
				} while (rs.next());
        	}
        	
        }finally {
			JdbcUtil.close(pstmt);
		}
		return no;
	}

	@Override
	public List<WinnerDTO> selectOneWinner(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=selectOneWinnerNo(con, num);
		
		String sql="select * "
				+ "from ( "
				+ "    select rownum no, t.*  "
				+ "    from (  "
				+ "        select *  "
				+ "        from prize_event  "
				+ "        order by e_no "
				+ "        )t  "
				+ ")b "
				+ "where no between ? and ? "
				+ "order by b.no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, no-1);
        	pstmt.setInt(2, no+1);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<WinnerDTO> list=new ArrayList<WinnerDTO>();
        		do {
					WinnerDTO dto=new WinnerDTO();
					dto.setNo(rs.getInt("no"));
					dto.setE_no(rs.getInt("e_no"));
					dto.setPe_no(rs.getInt("pe_no"));
					dto.setIds(rs.getString("ids"));
					dto.setGift(rs.getString("gift"));
					dto.setP_date(rs.getDate("p_date"));
					list.add(dto);
				} while (rs.next());
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	@Override
	public int selectOneWinnerNo(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=0;
		String sql = "select *  "
				+ "from (  "
				+ "   select rownum no, t.*   "
				+ "   from (   "
				+ "        select distinct prize_event.e_no "
				+ "        from event join prize_event on event.e_no=prize_event.e_no "
				+ "       order by prize_event.e_no desc "
				+ "       )t   "
				+ ")b  "
				+ "where e_no=? "
				+ "order by b.no desc ";

		try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, num);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		do {
					WinnerDTO dto=new WinnerDTO();
					no=rs.getInt("no");
					/*
					 * dto.setN_no(rs.getInt("n_no")); dto.setTitle(rs.getString("title"));
					 * dto.setN_date(rs.getDate("n_date")); list.add(dto);
					 */
				} while (rs.next());
        	}
        	
        }finally {
			JdbcUtil.close(pstmt);
		}
		return no;
	}

	@Override
	public List<EventDTO> selectOneWinnerEvent(Connection con, int num) throws SQLException {
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		int no=selectOneWinnerNo(con, num);
		
		String sql="select *  "
				+ "from (  "
				+ "   select rownum no, t.*   "
				+ "   from (   "
				+ "        select distinct prize_event.e_no, e_name, sdate, edate "
				+ "        from event  join prize_event on event.e_no=prize_event.e_no "
				+ "       order by prize_event.e_no desc "
				+ "       )t   "
				+ ")b  "
				+ "where no between ? and ? "
				+ "order by b.no desc ";

        try {
        	pstmt=con.prepareStatement(sql);
        	pstmt.setInt(1, no-1);
        	pstmt.setInt(2, no+1);
        	rs=pstmt.executeQuery();
        	if(rs.next()) {
        		List<EventDTO> list=new ArrayList<EventDTO>();
        		do {
					EventDTO dto=new EventDTO();
					dto.setE_no(rs.getInt("e_no"));
					dto.setE_name(rs.getString("e_name"));
					dto.setSdate(rs.getDate("sdate"));
					dto.setEdate(rs.getDate("edate"));
					list.add(dto);
				} while (rs.next());
        		if(no==2&&list.size()==2) {
					EventDTO dto=new EventDTO();
        			dto.setE_no(-1);
        			dto.setE_name("이전글이 없습니다");
        			list.add(dto);
        		}
        		return list;
        	}
        }finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	public List<WinnerDTO> selectAllWinner(Connection con, int num) throws SQLException{
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		String sql="select * from prize_event where e_no=? ";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs=pstmt.executeQuery();
			if(rs.next()){
				List<WinnerDTO> list=new ArrayList<WinnerDTO>();
				do {					
					WinnerDTO dto=new WinnerDTO();
					dto.setPe_no(rs.getInt("pe_no"));
					dto.setIds(rs.getString("ids"));
					dto.setGift(rs.getString("gift"));
					dto.setP_date(rs.getDate("p_date"));
					list.add(dto);
				}while(rs.next());
				return list;
			}
		}finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}

	public NoticeDTO selectOneNotice(Connection con, int num) throws SQLException{
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		
		String sql="select * from notice where n_no= ? ";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs=pstmt.executeQuery();
			if(rs.next()) {
				NoticeDTO dto=new NoticeDTO();
				do {
					dto.setN_no(rs.getInt("n_no"));
					dto.setTitle(rs.getString("title"));
					dto.setN_date(rs.getDate("n_date"));
					dto.setContent(rs.getString("content"));
				} while (rs.next());
				return dto;
			}
		} finally {
			JdbcUtil.close(con);
			JdbcUtil.close(pstmt);
		}
		return null;
	}
	@Override
	public ScheduleDTO findSchedule(Connection con, ScheduleDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		ScheduleDTO findScheduleDTO = new ScheduleDTO();

		String sql = "select s_no, model, route "
				   + "from schedule left join section on schedule.flight_no = section.flight_no "
				   + "where departure like ? and arrival  like ? and to_char(stime, 'yyyy-MM-DD HH24:MI') = ?";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, "%"+dto.getDeparture()+"%");
			pstmt.setString(2, "%"+dto.getArrival()+"%");
			pstmt.setString(3, dto.getStime());
			rs=pstmt.executeQuery();
			while(rs.next()) {				
				findScheduleDTO.setsNo( rs.getInt(1) ); 
				findScheduleDTO.setModel( rs.getString(2) ); 
				findScheduleDTO.setRoute( rs.getInt(3) ); 
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return findScheduleDTO;
	}
	
	@Override
	public BaggageDTO findBaggage(Connection con, BaggageDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		BaggageDTO baggageDTO = null;

		String sql = "select EB_NO, PRICE, base "
				   + "FROM baggage "
				   + "WHERE type like ? and country LIKE ?";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, "%"+dto.getType()+"%");
			pstmt.setString(2, "%"+dto.getCountry()+"%");
			rs = pstmt.executeQuery();
			while(rs.next()) {		
				baggageDTO = new BaggageDTO(rs.getInt("EB_NO" )
										  , rs.getInt(2)
										  , rs.getString(3)
									);
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return baggageDTO;
	}
	

	@Override
	public int insertService(Connection con, ServiceDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		int rowCount = 0;

		String sql = "insert into service "
				+ "(s_no, b_no, st_no, eb_no, weight, f_no) "
				+ "VALUES(SERVICE_SEQ.nextval, ?, ?, ?, ?, ?)";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, dto.getBno());
			pstmt.setString(2, dto.getStno() == 0? null : dto.getStno() +"");
			pstmt.setString(3, dto.getEbno() == 0? null : dto.getEbno() +"");
			pstmt.setString(4, dto.getWeight() == 0? null : dto.getWeight() +"");
			pstmt.setString(5, dto.getFno() == 0? null : dto.getFno() +"");

			rowCount = pstmt.executeUpdate();
		}finally {
			JdbcUtil.close(pstmt);
		} 


		return rowCount;
	}

	@Override
	public SeatTableDTO findSeatTable(Connection con, SeatTableDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		SeatTableDTO seatTableDTO = new SeatTableDTO();

		String sql = "SELECT st_no, price "
				   + "FROM seat_table "
				   + "WHERE name=? and channel like ? and country like ?";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, dto.getName());
			pstmt.setString(2, "%"+dto.getChannel()+"%");
			pstmt.setString(3, "%"+dto.getCountry()+"%");

			rs = pstmt.executeQuery();
			while(rs.next()) {				
				seatTableDTO.setStno(rs.getInt(1));
				seatTableDTO.setPrice(rs.getInt(2));
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return seatTableDTO;
	}

	@Override
	public FoodDTO food(Connection con, String kind) throws SQLException {
		PreparedStatement pstmt = null;
		FoodDTO food = new FoodDTO();

		String sql = "SELECT f_no, price "
				+ "FROM food "
				+ "WHERE kind=?";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, kind);

			rs = pstmt.executeQuery();
			while(rs.next()) {				
				food.setFno(rs.getInt(1));;
				food.setPrice(rs.getInt(2));
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return food;
	}


	@Override
	public int insertBoarder(Connection con, BoarderDTO dto) throws SQLException {
		PreparedStatement pstmt=null;
		int rowCount=0;
		String sql = "insert into boarder "
				+ "(b_no, m_id, price, b_no2, d_no) "
				+ "values(?, ?, ?, ?, ?) ";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, dto.getbNo());
			pstmt.setString(2, dto.getmId());
			pstmt.setInt(3, dto.getTotalPrice());
			pstmt.setString(4, dto.getbNo2());
			pstmt.setString(5, dto.getdNo() == 0 ? null : dto.getdNo()+"" );

			rowCount=pstmt.executeUpdate();
		}finally {
			JdbcUtil.close(pstmt);
		}
		return rowCount;
	}

	@Override
	public int insertReservedSeat(Connection con, ReservedSeatDTO dto) throws SQLException {
		PreparedStatement pstmt=null;
		int rowCount=0;
		String sql = "insert into reserved_seat "
				+ "(rs_no, s_no, b_no, s_no2) "
				+ "values( reserved_seat_seq.nextval, ?, ?, ?) ";
		try {
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, dto.getS_no());
			pstmt.setString(2, dto.getB_no());
			pstmt.setInt(3, dto.getS_no2());

			rowCount=pstmt.executeUpdate();
		}finally {
			JdbcUtil.close(pstmt);
		}
		return rowCount;
	}

	@Override
	public SeatDTO seat(Connection con, SeatDTO seat) throws SQLException {
		PreparedStatement pstmt = null;
		SeatDTO dto = new SeatDTO();

		String sql = "select s_no, grade "
				+ "from seat "
				+ "where model=? and s_column=? and s_row=? ";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, seat.getModel());
			pstmt.setString(2, seat.getScolumn());
			pstmt.setInt(3, seat.getSrow());

			rs = pstmt.executeQuery();
			while(rs.next()) {				
				dto.setSno( rs.getInt(1) );
				dto.setGrade( rs.getString(2) );
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return dto;
	}

	@Override
	public int wpet(Connection con, String bNo, String select) throws SQLException {
		PreparedStatement pstmt = null;
		int rowCount = 0;	
		String sql = "";
		if(select.equals("휠체어")) {
			sql = "insert into wheelchair "
					+ "(w_no, b_no) "
					+ "VALUES (WNOO.nextval, ?) ";
		} else if(select.equals("반려동물")) {
			sql = "insert into pet "
					+ "(p_no, b_no) "
					+ "VALUES (pNOO.nextval, ?) ";
		};	
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, bNo);

			rowCount = pstmt.executeUpdate();

		}finally {
			JdbcUtil.close(pstmt);
		} 
		return rowCount;
	}

	@Override
	public int insert(Connection con, BookingDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		int rowCount = 0;

		String sql = "INSERT INTO booking "
				   + "(b_no, s_no, b_count, price, b_type, email, tel) "
				   + "VALUES(?, ?, ?, ?, ?, ?, ?)";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, dto.getB_no());
			pstmt.setInt(2, dto.getS_no());
			pstmt.setInt(3, dto.getB_count());
			pstmt.setInt(4, dto.getPrice());
			pstmt.setString(5, dto.getB_type());
			pstmt.setString(6, dto.getEmail());
			pstmt.setString(7, dto.getTel());

			rowCount = pstmt.executeUpdate();
		}finally {
			JdbcUtil.close(pstmt);
		} 

		return rowCount;
	}

	@Override
	public DiscountDTO discount(Connection con, String name) throws SQLException {
		PreparedStatement pstmt = null;
		DiscountDTO dto = new DiscountDTO();

		String sql = "SELECT d_no,rate, target, d_type "
				   + "FROM discount "
				   + "Where name = ? ";

		ResultSet rs = null;
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, name);

			rs = pstmt.executeQuery();
			while(rs.next()) {
				dto.setdNo(rs.getInt(1));
				dto.setRate(rs.getDouble(2));
				dto.setTarget(rs.getString("target"));
				dto.setdType(rs.getString("d_type"));
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		
		return dto;
	}

	@Override
	public ArrayList<String> getBnoList() throws SQLException {
		ArrayList<String> list = new ArrayList<String>();
		PreparedStatement pstmt = null;
		
		try {
			Connection con = ConnectionProvider.getConnection();
			String sql = "SELECT distinct SUBSTR(b_no,0,6) b_no "
					   + "FROM booking "
					   + "ORDER BY b_no";

			ResultSet rs = null;
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				list.add(rs.getString(1));
			}
			
			
		} catch (NamingException | SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(pstmt);
		} 
		return list;
	}

	@Override
	public int insertNMBook(Connection con, NMBookDTO dto) throws SQLException {
		int rowCount = 0;
		PreparedStatement pstmt = null;
		String sql = "INSERT INTO nm_book "
				   + "(nm_no, name, birth, sex, nationality, b_no ) "
				   + "VALUES(NM_seq.nextval, ?, ?, ?, ?, ?)";
		
		try {
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getName());
			pstmt.setDate(2, dto.getBirth());
			pstmt.setString(3, dto.getSex()+"");
			pstmt.setString(4, dto.getNationality());
			pstmt.setString(5, dto.getbNO());
			
			
			rowCount = pstmt.executeUpdate();
			
			
		} finally {
			JdbcUtil.close(pstmt);
		}
		
		
		
		return rowCount;
	}

	//@Override
	public int pet(Connection con, String bNo) throws SQLException {
		PreparedStatement pstmt = null;
		int rowCount=0;

		String sql = "DELETE from pet "
				     + "where b_no=? ";

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1,  bNo );
			rowCount = pstmt.executeUpdate();

		}finally {
			
			JdbcUtil.close(pstmt);
		} 
		return rowCount;
	}
	
	public boolean deleteComplete(Connection con, String bNo) throws SQLException {
		PreparedStatement pstmt = null;
		
		String sql = " delete from wheelchair "
				   + " where b_no=?";
		
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, bNo);
			
			int rowCount = pstmt.executeUpdate();
			
			if( rowCount == 0 ) {
				return false;
			} else {
				return true;
			}
			
			
		} finally {
			JdbcUtil.close(pstmt);
		}
		
		
	}

	@Override
	public String getBno(Connection con, CancelDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		String bNo = null;
		
		try {
			String sql = "SELECT b_no "
					   + "FROM booking "
					   + "WHERE email = ? AND tel LIKE ?";

			ResultSet rs = null;
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, dto.getEmail());
			pstmt.setString(2, "%"+dto.getTel()+"%");
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				bNo = rs.getString(1);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(pstmt);
		} 
		return bNo;
	}

	@Override
	public int cancelBoarder(Connection con, String bNo, String name) throws SQLException {
		int rowCount = 0;
		PreparedStatement pstmt = null;
		String sql = "UPDATE boarder "
				   + "SET price = 0 "
				   + "WHERE b_no2 = ? AND (m_id = ? OR b_no = (SELECT b_no FROM nm_book where name = ?))";
		
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, bNo);
			pstmt.setString(2, name);
			pstmt.setString(3, name);
			
			rowCount = pstmt.executeUpdate();
			
		} finally {
			JdbcUtil.close(pstmt);
		}
		 
		return rowCount;
	}

	@Override
	public JSONObject getpay(Connection con, FareDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		JSONObject fare = new JSONObject();
		String sql = "select fare, fuel_surcharge, airport_tax "
				   + "from domestic d join route r ON d.route=r.route "
				   + "where r.rname like ? and r.rname like ? and d_type like ?";
		
		try {
			ResultSet rs = null;
			pstmt = con.prepareStatement(sql);
			/*
			  System.out.println(dto.getOrigin());
			  System.out.println(dto.getDestination()); 
			  System.out.println(dto.getdType());
			  System.out.println(dto.getdType().substring(0, 2));
			 */
			pstmt.setString(1, "%"+dto.getOrigin()+"%");
			pstmt.setString(2, "%"+dto.getDestination()+"%");
			if(dto.getOrigin().equals("CJU") || dto.getDestination().equals("CJU") )
				pstmt.setString(3, "%"+dto.getdType()+"%");
			else
				pstmt.setString(3, "%"+dto.getdType().substring(0, 2)+"%");
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				fare.put("fare", rs.getInt(1) );
				fare.put("fuel", rs.getInt(2) );
				fare.put("tax", rs.getInt(3) );
			}
			
		} finally {
			JdbcUtil.close(pstmt);
		}
		return fare;
	}

	@Override
	public JSONObject idcheck(Connection con, String mid) throws SQLException {
		PreparedStatement pstmt = null;
		JSONObject check = new JSONObject();
		String sql = "select count(*) "
				   + "from member "
				   + "where m_id =  ?";
		
		try {
			ResultSet rs = null;
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, mid);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				check.put("check", rs.getInt(1) );
			}
			
		} finally {
			JdbcUtil.close(pstmt);
		}
		return check;
	}

	@Override
	public JSONObject checkseat(Connection con, CheckServiceDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		JSONObject jsonData = new JSONObject(); 
		String sql = "select rs_no, price "
				+ "from schedule sc join section se ON sc.flight_no=se.flight_no "
				+ "                 join seat s on se.model = s.model "
				+ "                 join reserved_seat rs on rs.s_no = s.s_no and rs.s_no2 = sc.s_no "
				+ "                 join seat_table st on st.name=s.grade "
				+ "where se.departure LIKE ? AND se.arrival LIKE ? and to_char(stime,'YYYYMMDD HH24:MI')=?"
				+ "       and s.s_row = ? and s.s_column=? and channel like ? and country like ?";
		
		try {
			ResultSet rs = null;
			pstmt = con.prepareStatement(sql);
			
			pstmt.setString(1, "%"+dto.getOrigin()+"%");
			pstmt.setString(2, "%"+dto.getDestination()+"%");
			pstmt.setString(3, dto.getTravelDate());
			pstmt.setString(4, dto.getSeatRow());
			pstmt.setString(5, dto.getSeatColumn());
			pstmt.setString(6, "%"+dto.getChannel()+"%");
			pstmt.setString(7, "%"+dto.getCountry()+"%");
			
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				jsonData.put("seat", dto.getSeatRow()+dto.getSeatColumn());
				jsonData.put("rs_no", rs.getInt(1));
				jsonData.put("price", rs.getInt(2));
			} else {
				jsonData.put("price", 0);
			}
				
			
		} finally {
			JdbcUtil.close(pstmt);
		}
		return jsonData;
	}
	
	@Override
	public JSONObject food(Connection con, CheckServiceDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		JSONObject jsonData = new JSONObject(); 
		
		String sql = "SELECT f_no, price "
				+ "FROM food "
				+ "WHERE kind=?";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, dto.getFood());

			rs = pstmt.executeQuery();
			if(rs.next()) {				
				jsonData.put("f_no",rs.getInt(1));;
				jsonData.put("price",rs.getInt(2));
			} else {
				jsonData.put("price", 0);
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return jsonData;
	}
	
	@Override
	public JSONObject baggage(Connection con, CheckServiceDTO dto) throws SQLException {
		PreparedStatement pstmt = null;
		JSONObject jsonData = new JSONObject(); 

		String sql = "select EB_NO, PRICE, base "
				   + "FROM baggage "
				   + "WHERE type like ? and country LIKE ?";

		ResultSet rs = null;

		try {
			pstmt = con.prepareStatement(sql);

			pstmt.setString(1, "%"+dto.getChannel()+"%");
			pstmt.setString(2, "%"+dto.getCountry()+"%");
			rs = pstmt.executeQuery();
			if( dto.getWeight() == 0 )jsonData.put("price", 0);
			else if(rs.next()) {		
				jsonData.put("eb_no", rs.getInt("EB_NO") );
				jsonData.put("price", rs.getInt(2)*(  Math.ceil(dto.getWeight()/ ( Integer.parseInt( rs.getString(3).substring(0, 1) )*1.0 )) ));
			}
		}finally {
			JdbcUtil.close(pstmt);
		} 
		return jsonData;
	}

}











