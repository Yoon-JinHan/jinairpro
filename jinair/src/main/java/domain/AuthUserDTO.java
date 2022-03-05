package domain;

public class AuthUserDTO {

	private String m_id;       
	private String m_name;         
	private int point;    
	private int couponCnt;
	
	// getter, setter
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
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public int getCouponCnt() {
		return couponCnt;
	}
	public void setCouponCnt(int couponCnt) {
		this.couponCnt = couponCnt;
	}
	
	// constructor
	public AuthUserDTO(String m_id, String m_name, int point, int couponCnt) {
		super();
		this.m_id = m_id;
		this.m_name = m_name;
		this.point = point;
		this.couponCnt = couponCnt;
	}
	public AuthUserDTO() {
		super();
	}
	
	
	
}
