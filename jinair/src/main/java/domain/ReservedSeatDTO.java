package domain;

public class ReservedSeatDTO {
	private int rs_no;//예약좌석
	private int s_no;//좌석 고유번호
	private String b_no;//탑승객 번호
	private int s_no2;//운항정보
	
	
	
	public ReservedSeatDTO(int s_no, String b_no, int s_no2) {
		this.s_no = s_no;
		this.b_no = b_no;
		this.s_no2 = s_no2;
	}
	public ReservedSeatDTO() { }
	public int getRs_no() {
		return rs_no;
	}
	public void setRs_no(int rs_no) {
		this.rs_no = rs_no;
	}
	public int getS_no() {
		return s_no;
	}
	public void setS_no(int s_no) {
		this.s_no = s_no;
	}
	public String getB_no() {
		return b_no;
	}
	public void setB_no(String b_no) {
		this.b_no = b_no;
	}
	public int getS_no2() {
		return s_no2;
	}
	public void setS_no2(int s_no2) {
		this.s_no2 = s_no2;
	}
	
	
	
}
