package service.notice;

import java.util.List;

import domain.NoticeDTO;

public class NoticeListView {
	private List<NoticeDTO> noticeList;
	
	private int noticeTotalCount;//공지사항 글 수
	private int pageTotalCount;//총 페이지 수
	private int currentPageNumber;//현재 페이지 번호
	private int noticeCountPerPage;//한 페이지에 출력할 글 수
	private int firstRow;//시작
	private int endRow;//끝
	
	//생성자
	public NoticeListView(List<NoticeDTO> noticeList, int noticeTotalCount, int currentPageNumber,
			int noticeCountPerPage, int firstRow, int endRow) {

		this.noticeList = noticeList;
		this.noticeTotalCount = noticeTotalCount;
		this.currentPageNumber = currentPageNumber;
		this.noticeCountPerPage = noticeCountPerPage;
		this.firstRow = firstRow;
		this.endRow = endRow;
		
		//총 페이지수 계산하는 메소드
		calculatePageTotalCount();
	}

	private void calculatePageTotalCount() {
		if(noticeTotalCount==0) {
			pageTotalCount=0;
		}else {
			pageTotalCount=(int)(Math.ceil((double)noticeTotalCount/noticeCountPerPage));
		}		
	}

	public List<NoticeDTO> getNoticeList() {
		return noticeList;
	}


	public int getNoticeTotalCount() {
		return noticeTotalCount;
	}


	public int getPageTotalCount() {
		return pageTotalCount;
	}


	public int getCurrentPageNumber() {
		return currentPageNumber;
	}


	public int getNoticeCountPerPage() {
		return noticeCountPerPage;
	}


	public int getFirstRow() {
		return firstRow;
	}


	public int getEndRow() {
		return endRow;
	}


	public boolean isEmpty() {
		return this.noticeTotalCount==0;
	}
}
