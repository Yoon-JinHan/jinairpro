package domain;

public class FindScheduleDTO {

	// fields
	private String departure;		
	private String arrival;		
	private String stime;
	

	// getter, setter
	public String getDeparture() {
		return departure;
	}
	public void setDeparture(String departure) {
		this.departure = departure;
	}
	public String getArrival() {
		return arrival;
	}
	public void setArrival(String arrival) {
		this.arrival = arrival;
	}
	public String getStime() {
		return stime;
	}
	public void setStime(String stime) {
		this.stime = stime;
	}		
	

} // class
