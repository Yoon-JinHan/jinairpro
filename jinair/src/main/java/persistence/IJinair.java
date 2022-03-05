package persistence;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import domain.BaggageDTO;
import domain.BoarderDTO;
import domain.BookingDTO;
import domain.CancelDTO;
import domain.CheckServiceDTO;
import domain.DiscountDTO;
import domain.EventDTO;
import domain.FaqDTO;
import domain.FareDTO;
import domain.FoodDTO;
import domain.NMBookDTO;
import domain.NoticeDTO;
import domain.ReservedSeatDTO;
import domain.ScheduleDTO;
import domain.SeatDTO;
import domain.SeatTableDTO;
import domain.ServiceDTO;
import domain.WinnerDTO;
import net.sf.json.JSONObject;

public interface IJinair {
	
	
	//공지사항 list
	List<NoticeDTO> selectNoticeList(Connection con, int fistlow, int endlow) throws SQLException;
	
	//공지사항 글 갯수
	int selectNoticeCount(Connection con) throws SQLException;
	
	//공지사항 보기(이전글, 본글, 다음글)
	List<NoticeDTO> selectNoticeList(Connection con, int num) throws SQLException;
	
	//공지사항 하나 가져오기
	public NoticeDTO selectOneNotice(Connection con, int num) throws SQLException;
	
	//선택한 공지사항의 순서값 가져오기
	int selectOneNoticeNo(Connection con, int num) throws SQLException;
	
	//공지사항 검색
	List<NoticeDTO> searchNoticeList(Connection con, int firstlow, int endlow, String searchWord) throws SQLException;
	
	//공지사항 검색 결과 게시글 수
	int searchNoticeCount(Connection con, String searchWord) throws SQLException;
	
	//공지사항 추가
	int insertNotice(Connection con, NoticeDTO dto) throws SQLException;
	
	//공지사항 수정
	int updateNotice(Connection con, NoticeDTO dto) throws SQLException;
	
	//공지사항 삭제
	int deleteNotice(Connection con, NoticeDTO dto) throws SQLException;
	
	//FAQ list
	List<FaqDTO> selectFaqList(Connection con, int firstlow, int endlow) throws SQLException;
	
	//FAQ 글 갯수
	int selectFaqCount(Connection con) throws SQLException;		
	
	//FAQ 검색
	List<FaqDTO> searchFaqList(Connection con, int firstlow, int endlow, String searchWord, String fgroup, String fgroup2) throws SQLException;
	
	//FAQ 검색 결과 게시글 수
	int searchFaqCount(Connection con, String searchWord, String fgroup, String fgroup2) throws SQLException;
	
	//FAQ 추가
	int insertFaq(Connection con, FaqDTO dto) throws SQLException;
	
	//FAQ 수정
	int updateFaq(Connection con, FaqDTO dto) throws SQLException;
	
	//FAQ 하나 가져오기
	FaqDTO selectOneFaq(Connection con, int num) throws SQLException;
	
	//FAQ 삭제
	int deleteFaq(Connection con, FaqDTO dto) throws SQLException;
	
	//Event 보기
	List<EventDTO> selectOneEvent(Connection con, int num) throws SQLException;
	
	//선택한 Event의 순서값 가져오기
	int selectOneEventNo(Connection con, int num) throws SQLException;
	
	//당첨자 발표 보기
	List<WinnerDTO> selectOneWinner(Connection con, int num) throws SQLException;
	
	//선택한 Event 당첨자 발표 list의 순서값 가져오기
	int selectOneWinnerNo(Connection con, int num) throws SQLException;
	
	//선택한 당첨자 발표에 대한 event 정보 가져오기
	List<EventDTO> selectOneWinnerEvent(Connection con, int num) throws SQLException;
	
	//prize_event 정보 다 가져옴
	public List<WinnerDTO> selectAllWinner(Connection con, int num) throws SQLException;
	

	// 운항정보찾기
	ScheduleDTO findSchedule(Connection con, ScheduleDTO dto) throws SQLException;
	
	ArrayList<String> getBnoList() throws SQLException;
	
	// 비회원예약정보 추가
	int insertNMBook(Connection con, NMBookDTO dto) throws SQLException;

	// 추가수화물 요금,번호 찾기
	BaggageDTO findBaggage( Connection con, BaggageDTO dto) throws SQLException;

	// 사전좌석지정 요금, 번호 찾기
	SeatTableDTO findSeatTable( Connection con, SeatTableDTO dto) throws SQLException;

	// 기내식 요금, 번호 찾기
	FoodDTO food( Connection con, String kind) throws SQLException;

	// 부가서비스 추가
	int insertService( Connection con, ServiceDTO dto) throws SQLException;

	//탑승객 테이블 insert
	int insertBoarder(Connection con, BoarderDTO dto) throws SQLException;
	
	//예약좌석 테이블 insert
	int insertReservedSeat(Connection con, ReservedSeatDTO dto)throws SQLException;
	
	// 좌석번호, 좌석등급 찾기
	SeatDTO seat(Connection con, SeatDTO seat) throws SQLException;
	
	//휠체어, 펫 선택자 추가 
	int wpet(Connection con, String bNo, String select) throws SQLException;
	
	
	int insert(Connection con, BookingDTO dto) throws SQLException;
	
	// 할인정보 가져오기
	DiscountDTO discount(Connection con, String name) throws SQLException;
	
	// 예약No 가져오기
	String getBno(Connection con, CancelDTO dto) throws SQLException;
	
	// 취소객 금액 0원으로 변경
	int cancelBoarder(Connection con, String bNo, String name) throws SQLException;
	
	// 요금가져오기
	JSONObject getpay(Connection con, FareDTO dto) throws SQLException;
	
	// id체크
	JSONObject idcheck(Connection con, String mid) throws SQLException;
	
	// 좌석지정 유무 확인
	JSONObject checkseat(Connection con, CheckServiceDTO dto) throws SQLException;
	
	JSONObject food(Connection con, CheckServiceDTO dto) throws SQLException;
	
	JSONObject baggage(Connection con, CheckServiceDTO dto) throws SQLException;
}
