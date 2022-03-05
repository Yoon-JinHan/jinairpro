package domain;

public class SeatDTO {

	// fields
	private int sno;	
	private String model;
	private String scolumn;
	private int srow;
	private String grade;
	
	public SeatDTO() { }
	
	public SeatDTO(String scolumn, int srow) {
		this.scolumn = scolumn;
		this.srow = srow;
	}


	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getScolumn() {
		return scolumn;
	}
	public void setScolumn(String scolumn) {
		this.scolumn = scolumn;
	}
	public int getSrow() {
		return srow;
	}
	public void setSrow(int srow) {
		this.srow = srow;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	
	
	
	

	
	
	
	
	
	
	

} // class
