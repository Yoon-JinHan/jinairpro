package domain;

import java.sql.Date;

public class WinnerDTO {
	private int no;//당첨자 발표 글 순서
	private int pe_no;//당첨자 발표 테이블 PK
	private String ids;//당첨자 목록
	private String gift;//상품
	private int e_no;//이벤트 번호
	private Date p_date;//글 작성일
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getPe_no() {
		return pe_no;
	}
	public void setPe_no(int pe_no) {
		this.pe_no = pe_no;
	}
	public String getIds() {
		return ids;
	}
	public void setIds(String ids) {
		this.ids = ids;
	}
	public String getGift() {
		return gift;
	}
	public void setGift(String gift) {
		this.gift = gift;
	}
	public int getE_no() {
		return e_no;
	}
	public void setE_no(int e_no) {
		this.e_no = e_no;
	}
	public Date getP_date() {
		return p_date;
	}
	public void setP_date(Date p_date) {
		this.p_date = p_date;
	}
	
	
	
}
