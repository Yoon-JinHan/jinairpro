package domain;

public class BoarderDTO {
	private String bNo; //탑승객 번호
	private String mId; //회원ID
	private int price;	//요금
	private int fuel;	//유류할증
	private int tax;	//요금
	private int totalPrice;	//요금
	
	private String bNo2;//예약 번호
	private int dNo;//추가할인
	
	
	
	
	public BoarderDTO() { }
	
	
	public BoarderDTO(String mId, int price, int fuel, int tax, String bNo2) {
		this.mId = mId;
		this.price = price;
		this.fuel = fuel;
		this.tax = tax;
		this.totalPrice = price + fuel + tax;
		this.bNo2 = bNo2;
	}

	
	public int getFuel() {
		return fuel;
	}

	public void setFuel(int fuel) {
		this.fuel = fuel;
	}

	public int getTax() {
		return tax;
	}

	public void setTax(int tax) {
		this.tax = tax;
	}

	public int getTotalPrice() {
		return totalPrice;
	}


	public String getbNo() {
		return bNo;
	}


	public void setbNo(String bNo) {
		this.bNo = bNo;
	}


	public String getmId() {
		return mId;
	}


	public void setmId(String mId) {
		this.mId = mId;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public String getbNo2() {
		return bNo2;
	}


	public void setbNo2(String bNo2) {
		this.bNo2 = bNo2;
	}


	public int getdNo() {
		return dNo;
	}


	public void setdNo(int dNo) {
		this.dNo = dNo;
	}


	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}

	
	
}
