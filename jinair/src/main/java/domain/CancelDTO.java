package domain;

import java.util.ArrayList;

public class CancelDTO {

	private String email;
	private String tel;
	private ArrayList<String> list;
	
	
	
	public CancelDTO() { }

	public CancelDTO(String email, String tel, ArrayList<String> list) {
		super();
		this.email = email;
		this.tel = tel;
		this.list = list;
	}
	
	
	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public ArrayList<String> getList() {
		return list;
	}
	public void setList(ArrayList<String> list) {
		this.list = list;
	}
	
	
	
	
}
