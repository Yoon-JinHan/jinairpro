package service;

import java.io.DataOutputStream;
import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.sql.Connection;
import java.sql.Date;
import java.util.Base64;
import java.util.List;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import persistence.MemberDAO;

public class FindPwdService {
	
		// 싱글톤 
		private static FindPwdService instance = new FindPwdService();
		private FindPwdService() {}
		public static FindPwdService getInstance() {
			return instance;
		}
		
		public List<String> findPwd( String m_id,  String m_name, Date birth, String contact ) {
			
			Connection con = null;
			List<String> list = null;
			String rdmPwd = getRamdomPassword(10);
			String encryptRdmPwd = getSha512(rdmPwd); // 랜덤 패스워드 암호화
			
			try {
				con = ConnectionProvider.getConnection();
				MemberDAO dao = new MemberDAO();
				list = dao.findPwd(con, m_id, m_name, birth, contact);
				
				if( list != null ) { // 찾는 정보가 있을때 업데이트 시켜줌. 
					// 비밀번호 찾기를 하면 랜덤한 패스워드로 업데이트 시켜줌. 
					dao.updatePwd(con, m_id, list.get(0), encryptRdmPwd);
					list.add(rdmPwd);
				}
				
				int cnt = dao.selectWrongPwdCnt(con, m_id);
				if( cnt == 5 ) { // 비밀번호 5번 틀렸을 경우 비밀번호 찾기를 통해 비밀번호를 찾을때는 cnt를 0으로 바꿔준다. 
					dao.updateWrongPwdCnt(con, m_id, -1);
				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				JdbcUtil.close(con);
			}
			
			return list;
			
		}
		

		// 비밀번호 암호화 
		public static String getSha512(String password) {
	        String encPwd ="";
	        
	        //sha512방식의 암호화 객체 생성, 암호화 하는 객체
	        MessageDigest md =null;
	        try {
	            md = MessageDigest.getInstance("SHA-512");
	        }catch (Exception e) {
	            e.printStackTrace();
	        }
	       
	        if( password != null ) {
			    //암호화 하기전 패스워드를 바이트 단위로 먼저 쪼개주는 작업
			    byte[] bytes = password.getBytes(Charset.forName("UTF-8"));
			    //쪼개진 패스워드를 md의 update로 암호화 작업 진행
			    md.update(bytes);
	        }
	        //다시 String형으로 바꾸는 작업
	        encPwd = Base64.getEncoder().encodeToString(md.digest());
	        return encPwd;
	    }
		 
		// 랜덤 비밀번호 만들기 
		public String getRamdomPassword(int size) { 
			char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
					'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
					'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
					'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
					'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
					'!', '@', '#', '$', '%', '^', '&' 
			};
			StringBuffer sb = new StringBuffer(); 
			SecureRandom sr = new SecureRandom(); 
			sr.setSeed(new java.util.Date().getTime()); 
			int idx = 0; 
			int len = charSet.length; 
			for (int i=0; i<size; i++) { 
				// idx = (int) (len * Math.random()); 
				idx = sr.nextInt(len); 
				// 강력한 난수를 발생시키기 위해 SecureRandom을 사용한다. 
				sb.append(charSet[idx]); 
			} 
			
			return sb.toString();
			
		}

		
		
}
