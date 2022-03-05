package persistence;

import java.sql.Connection;
import java.sql.Date;
import java.sql.SQLException;
import java.util.List;

import domain.AuthUserDTO;
import domain.CouponDTO;
import domain.MemberDTO;

public interface IMember {

	// 핸드폰 중복 체크 
	String[] mobileCheck( Connection con, String mobileNO ) throws SQLException;
	
	// 아이디 중복 체크 
	int idCheck( Connection con, String m_id ) throws SQLException;
	
	// 회원가입 
	int joinMember( Connection con, MemberDTO dto ) throws SQLException;
	
	// 아이디 찾기 
	String findId( Connection con, String m_name, Date birth, String contact ) throws SQLException;
	
	// 비밀번호 찾기 oldpwd, email    
	List<String> findPwd( Connection con, String m_id,  String m_name, Date birth, String contact ) throws SQLException;
	
	// 비밀번호 변경 
	int updatePwd( Connection con, String m_id, String oldPwd, String newPwd ) throws SQLException;
	
	// 로그인
	AuthUserDTO login( Connection con, String m_id, String pwd ) throws SQLException;
	
	// 비밀번호 틀린 횟수 조회 
	int selectWrongPwdCnt( Connection con, String m_id ) throws SQLException;
	
	// 비밀번호 틀리면 cnt + 1 
	int updateWrongPwdCnt( Connection con, String m_id, int cnt ) throws SQLException;
	
	// 입력한 비밀번호가 맞는지 체크 
	int pwdCheck( Connection con, String m_id, String pwd ) throws SQLException;
	
	// 비밀번호 체크해서 회원정보 가져오기  
	MemberDTO userInfo( Connection con, String m_id ) throws SQLException;
	
	// 계정별 sns 인증 정보 가져오기 
	List<String> userSns( Connection con, String m_id ) throws SQLException; 
	
	// 회원 탈퇴 
	int deleteMember( Connection con, String m_id ) throws SQLException; 
	
	// 회원 정보 수정 
	int updateMember( Connection con, MemberDTO dto ) throws SQLException;
	
	// 쿠폰 정보 조회 
	List<CouponDTO> selectCouponList( Connection con, String m_id ) throws SQLException;
	
	
}
