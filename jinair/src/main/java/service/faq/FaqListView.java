package service.faq;

import java.util.List;

import domain.FaqDTO;


public class FaqListView {
	private List<FaqDTO> faqList;
	
	private int faqTotalCount;//faq 글 수
	private int pageTotalCount;//총 페이지 수
	private int currentPageNumber;//현재 페이지 번호
	private int faqCountPerPage;//한 페이지에 출력할 글 수
	private int firstRow;//시작
	private int endRow;//끝
	
	
	public FaqListView(List<FaqDTO> faqList, int faqTotalCount, int currentPageNumber,
			int faqCountPerPage, int firstRow, int endRow) {
		this.faqList = faqList;
		this.faqTotalCount = faqTotalCount;
		this.currentPageNumber = currentPageNumber;
		this.faqCountPerPage = faqCountPerPage;
		this.firstRow = firstRow;
		this.endRow = endRow;
		
		//총 페이지수 계산하는 메소드
		calculatePageTotalCount();
	}

	private void calculatePageTotalCount() {
		if(faqTotalCount==0) {
			pageTotalCount=0;
		}else {
			pageTotalCount=(int)(Math.ceil((double)faqTotalCount/faqCountPerPage));
		}		
	}
	
	public List<FaqDTO> getFaqList() {
		return faqList;
	}
	public int getFaqTotalCount() {
		return faqTotalCount;
	}
	public int getPageTotalCount() {
		return pageTotalCount;
	}
	public int getCurrentPageNumber() {
		return currentPageNumber;
	}
	public int getFaqCountPerPage() {
		return faqCountPerPage;
	}
	public int getFirstRow() {
		return firstRow;
	}
	public int getEndRow() {
		return endRow;
	}
	
	
}
