package domain;

public class FaqDTO {
	private int num;//글 순서
	private int f_no;//글 번호
	private String f_group;//대분류
	private String f_group2;//소분류
	private String title;//질문
	private String content;//답변
	
	public int getF_no() {
		return f_no;
	}
	public void setF_no(int f_no) {
		this.f_no = f_no;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getF_group() {
		return f_group;
	}
	public void setF_group(String f_group) {
		this.f_group = f_group;
	}
	public String getF_group2() {
		return f_group2;
	}
	public void setF_group2(String f_group2) {
		this.f_group2 = f_group2;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

}
