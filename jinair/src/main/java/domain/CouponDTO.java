package domain;

import java.sql.Date;

public class CouponDTO {

	// fields
	private String m_id;      
	private String c_no;      
	private String c_name; 
	private String c_type;   
	private Date s_usingdate;              
	private Date e_usingdate;              
	private Date s_boardingdate;              
	private Date e_boardingdate;              
	private String route; 
	private int discount;         
	private String service; 
	private String channel;     
	private String detail;
	
	// getter,setter
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	public String getC_no() {
		return c_no;
	}
	public void setC_no(String c_no) {
		this.c_no = c_no;
	}
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getC_type() {
		return c_type;
	}
	public void setC_type(String c_type) {
		this.c_type = c_type;
	}
	public Date getS_usingdate() {
		return s_usingdate;
	}
	public void setS_usingdate(Date s_usingdate) {
		this.s_usingdate = s_usingdate;
	}
	public Date getE_usingdate() {
		return e_usingdate;
	}
	public void setE_usingdate(Date e_usingdate) {
		this.e_usingdate = e_usingdate;
	}
	public Date getS_boardingdate() {
		return s_boardingdate;
	}
	public void setS_boardingdate(Date s_boardingdate) {
		this.s_boardingdate = s_boardingdate;
	}
	public Date getE_boardingdate() {
		return e_boardingdate;
	}
	public void setE_boardingdate(Date e_boardingdate) {
		this.e_boardingdate = e_boardingdate;
	}
	public String getRoute() {
		return route;
	}
	public void setRoute(String route) {
		this.route = route;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getChannel() {
		return channel;
	}
	public void setChannel(String channel) {
		this.channel = channel;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	
	
	public CouponDTO(String m_id, String c_no, String c_name, String c_type, Date s_usingdate, Date e_usingdate,
			Date s_boardingdate, Date e_boardingdate, String route, int discount, String service, String channel,
			String detail) {
		super();
		this.m_id = m_id;
		this.c_no = c_no;
		this.c_name = c_name;
		this.c_type = c_type;
		this.s_usingdate = s_usingdate;
		this.e_usingdate = e_usingdate;
		this.s_boardingdate = s_boardingdate;
		this.e_boardingdate = e_boardingdate;
		this.route = route;
		this.discount = discount;
		this.service = service;
		this.channel = channel;
		this.detail = detail;
	}
	public CouponDTO() {
		super();
	}              

	
}
