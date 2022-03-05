package domain;

public class CheckServiceDTO {
	
	private String origin;
	private String destination;
	private String travelDate;
	private String seatRow;
	private String seatColumn;
	private int weight;
	private String food;
	private String channel="온라인";
	private String country="국내선";
	
	public CheckServiceDTO() { }
	public CheckServiceDTO(String origin, String destination, String travelDate, String seatRow, String seatColumn,
			String weight, String food) {
		this.origin = origin;
		this.destination = destination;
		this.travelDate = travelDate;
		this.seatRow = seatRow;
		this.seatColumn = seatColumn;
		this.weight = Integer.parseInt( weight==""?"0":weight );
		this.food = food;
	}
	
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getTravelDate() {
		return travelDate;
	}
	public void setTravelDate(String travelDate) {
		this.travelDate = travelDate;
	}
	public String getSeatRow() {
		return seatRow;
	}
	public void setSeatRow(String seatRow) {
		this.seatRow = seatRow;
	}
	public String getSeatColumn() {
		return seatColumn;
	}
	public void setSeatColumn(String seatColumn) {
		this.seatColumn = seatColumn;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public String getFood() {
		return food;
	}
	public void setFood(String food) {
		this.food = food;
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
	
	
	
	
	

}
