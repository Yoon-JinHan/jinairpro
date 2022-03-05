package domain;

public class ScheduleDTO {

	// fields
	private int sNo;
	private String model;
	private int route;
	
	private String departure;		
	private String arrival;		
	private String stime;
	
	

	// getter, setter
	
	public ScheduleDTO() {}
	
	public ScheduleDTO(int sNo, String model, int route) {
		this.sNo = sNo;
		this.model = model;
		this.route = route;
	}

	public ScheduleDTO(String departure, String arrival, String stime) {
		this.departure = departure;
		this.arrival = arrival;
		this.stime = stime;
	}




	public int getRoute() {
		return route;
	}
	public void setRoute(int route) {
		this.route = route;
	}
	public String getDeparture() {
		return departure;
	}
	public int getsNo() {
		return sNo;
	}
	public void setsNo(int sNo) {
		this.sNo = sNo;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
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
