package domain;

public class SeatTableDTO {

	// fields
	private int stno;	
	private String name;
	private int price;
	private String channel="온라인";
	private String country="국내선";
	
	public SeatTableDTO() { }
	
	public SeatTableDTO(String channel) {
		this.channel = channel;
	}
	public SeatTableDTO(String channel, String country) {
		this.channel = channel;
		this.country = country;
	}
	
	public SeatTableDTO(int stno, int price) {
		this.stno = stno;
		this.price = price;
	}



	// getter, setter
	public int getStno() {
		return stno;
	}
	public void setStno(int stno) {
		this.stno = stno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getChannel() {
		return channel;
	}
	public void setChannel(String channel) {
		this.channel = channel;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}

	
	
	
	
	
	
	

} // class
