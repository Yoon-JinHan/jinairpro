package domain;

public class FareDTO {
	
	private String dType;
	private String origin;
	private String destination;
	private int fare;
	private int fuel;
	private int tax;
	
	
	public FareDTO() { }
	public FareDTO(String dType, String origin, String destination) {
		super();
		this.dType = dType;
		this.origin = origin;
		this.destination = destination;
	}
	public FareDTO(int fare, int fuel, int tax) {
		this.fare = fare;
		this.fuel = fuel;
		this.tax = tax;
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
	public String getdType() {
		return dType;
	}
	public void setdType(String dType) {
		this.dType = dType;
	}
	public int getFare() {
		return fare;
	}
	public void setFare(int fare) {
		this.fare = fare;
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
	
	
	
	
}
