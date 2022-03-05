package domain;

public class BaggageDTO {

	// fields
	private int ebNo;
	private String type;	
	private String country;
	private String base;
	private String detail;
	private int price;
	
	public BaggageDTO() { }
	
	public BaggageDTO(String type, String detail) {
		this.type = type;
		this.detail = detail;
	}

	public BaggageDTO(int ebNo, int price, String base) {
		this.ebNo = ebNo;
		this.base = base;
		this.price = price;
	}



	// getter, setter
	
	public String getType() {
		return type;
	}
	public String getBase() {
		return base;
	}
	public void setBase(String base) {
		this.base = base;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getEbNo() {
		return ebNo;
	}
	public void setEbNo(int ebNo) {
		this.ebNo = ebNo;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	
	

} // class
