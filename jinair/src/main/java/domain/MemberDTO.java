package domain;

import java.sql.Date;

public class MemberDTO {

	private String m_id;       
	private String m_name; 
	private String e_name; 
	private String pwd;        
	private String tel;       
	private Date birth;               
	private String email; 
	private char sex;            
	private String nationality;  
	private String country;  
	private String addr; 
	private Date joinDate;               
	private int point;          
	private char sns;            
	private char smspush;            
	private char emailpush;
	
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public String getE_name() {
		return e_name;
	}
	public void setE_name(String e_name) {
		this.e_name = e_name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public char getSex() {
		return sex;
	}
	public void setSex(char sex) {
		this.sex = sex;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public char getSns() {
		return sns;
	}
	public void setSns(char sns) {
		this.sns = sns;
	}
	public char getSmspush() {
		return smspush;
	}
	public void setSmspush(char smspush) {
		this.smspush = smspush;
	}
	public char getEmailpush() {
		return emailpush;
	}
	public void setEmailpush(char emailpush) {
		this.emailpush = emailpush;
	}
	
	public MemberDTO(String m_id, String m_name, String e_name, String pwd, String tel, Date birth, String email,
			char sex, String nationality, String country, String addr, Date joinDate, int point, char sns, char smspush,
			char emailpush) {
		super();
		this.m_id = m_id;
		this.m_name = m_name;
		this.e_name = e_name;
		this.pwd = pwd;
		this.tel = tel;
		this.birth = birth;
		this.email = email;
		this.sex = sex;
		this.nationality = nationality;
		this.country = country;
		this.addr = addr;
		this.joinDate = joinDate;
		this.point = point;
		this.sns = sns;
		this.smspush = smspush;
		this.emailpush = emailpush;
	}
	
	public MemberDTO() {
		super();
	}

}
