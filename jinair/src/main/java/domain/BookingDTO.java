package domain;

public class BookingDTO {

	// fields
	
	private int num;			// 여정1 or 여정2
	private String b_no;		// 예약No
	private int s_no;			// 운항정보No
	private int b_count;		// 탑승객수
	private int price;			// 요금
	private String b_type;		// 운임종류
  	private String email;		// 예매자 이메일
  	private String tel;			// 예매자 전화번호
	
  	

   	public BookingDTO() { }
   	
	public BookingDTO(int num, String b_no, int b_count, String b_type, String email, String tel) {
		this.num = num;
		this.b_no = b_no;
		this.b_count = b_count;
		this.b_type = b_type;
		this.email = email;
		this.tel = tel;
	}

	// getter, setter
  	// 예약정보
	
	public int getNum() { return num; }
	
	public void setNum(int num) { this.num = num; }
	public String getB_no() { return b_no; }
	public void setB_no(String b_no) { this.b_no = b_no; }
	public int getS_no() { return s_no; }
	public void setS_no(int s_no) { this.s_no = s_no; }
	public int getB_count() { return b_count; }
	public void setB_count(int b_count) { this.b_count = b_count; }
	public int getPrice() { return price; }
	public void setPrice(int price) { this.price = price; }
	public String getB_type() { return b_type; }
	public void setB_type(String b_type) { this.b_type = b_type; }
	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }
	public String getTel() { return tel; }
	public void setTel(String tel) { this.tel = tel; }

} // class
