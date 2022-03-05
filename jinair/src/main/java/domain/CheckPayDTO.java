package domain;

public class CheckPayDTO {

	private String origin1;
	private String destination1;
	private String travelDate1;
	private String origin2;
	private String destination2;
	private String travelDate2;
	private String s1_time;
	private String b1_type;
	private String s2_time;
	private String b2_type;
	private int adultPaxCount;
	private int childPaxCount;
	private int infantPaxCount;
	
	
	public CheckPayDTO() { }
	public CheckPayDTO(String origin1, String destination1, String travelDate1, String origin2, String destination2,
			String travelDate2, String s1_time, String b1_type, String s2_time, String b2_type, int adultPaxCount,
			int childPaxCount, int infantPaxCount) {
		this.origin1 = origin1;
		this.destination1 = destination1;
		this.travelDate1 = travelDate1;
		this.origin2 = origin2;
		this.destination2 = destination2;
		this.travelDate2 = travelDate2;
		this.s1_time = s1_time;
		this.b1_type = b1_type;
		this.s2_time = s2_time;
		this.b2_type = b2_type;
		this.adultPaxCount = adultPaxCount;
		this.childPaxCount = childPaxCount;
		this.infantPaxCount = infantPaxCount;
	}
	
	public String getOrigin1() {
		return origin1;
	}
	public void setOrigin1(String origin1) {
		this.origin1 = origin1;
	}
	public String getDestination1() {
		return destination1;
	}
	public void setDestination1(String destination1) {
		this.destination1 = destination1;
	}
	public String getTravelDate1() {
		return travelDate1;
	}
	public void setTravelDate1(String travelDate1) {
		this.travelDate1 = travelDate1;
	}
	public String getOrigin2() {
		return origin2;
	}
	public void setOrigin2(String origin2) {
		this.origin2 = origin2;
	}
	public String getDestination2() {
		return destination2;
	}
	public void setDestination2(String destination2) {
		this.destination2 = destination2;
	}
	public String getTravelDate2() {
		return travelDate2;
	}
	public void setTravelDate2(String travelDate2) {
		this.travelDate2 = travelDate2;
	}
	public String getS1_time() {
		return s1_time;
	}
	public void setS1_time(String s1_time) {
		this.s1_time = s1_time;
	}
	public String getB1_type() {
		return b1_type;
	}
	public void setB1_type(String b1_type) {
		this.b1_type = b1_type;
	}
	public String getS2_time() {
		return s2_time;
	}
	public void setS2_time(String s2_time) {
		this.s2_time = s2_time;
	}
	public String getB2_type() {
		return b2_type;
	}
	public void setB2_type(String b2_type) {
		this.b2_type = b2_type;
	}
	public int getAdultPaxCount() {
		return adultPaxCount;
	}
	public void setAdultPaxCount(int adultPaxCount) {
		this.adultPaxCount = adultPaxCount;
	}
	public int getChildPaxCount() {
		return childPaxCount;
	}
	public void setChildPaxCount(int childPaxCount) {
		this.childPaxCount = childPaxCount;
	}
	public int getInfantPaxCount() {
		return infantPaxCount;
	}
	public void setInfantPaxCount(int infantPaxCount) {
		this.infantPaxCount = infantPaxCount;
	}
	
	
	
}
