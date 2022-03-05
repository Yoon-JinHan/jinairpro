package domain;

import java.sql.Date;

public class NMBookDTO {

	// fields
	private String nmNo;
	private String name;
	private Date birth;
	private String sex;
	private String nationality;
	private String bNO;
	
	public NMBookDTO() { }
	
	public NMBookDTO(String name, Date birth, String sex, String nationality, String bNO) {
		this.name = name;
		this.birth = birth;
		this.sex = sex;
		this.nationality = nationality;
		this.bNO = bNO;
	}

	// getter, setter
	public String getNmNo() {
		return nmNo;
	}
	public void setNmNo(String nmNo) {
		this.nmNo = nmNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getbNO() {
		return bNO;
	}
	public void setbNO(String bNO) {
		this.bNO = bNO;
	}
	
	
	

} // class
