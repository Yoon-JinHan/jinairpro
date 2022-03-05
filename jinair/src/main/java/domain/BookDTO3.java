package domain;

import java.util.ArrayList;

public class BookDTO3 {

	private ScheduleDTO ScheduleDTO;
	private BookingDTO bookingDTO;
	private ArrayList<BoarderDTO> boarder;
	private ArrayList<String> dname;
	private ArrayList<String> kinds = new ArrayList<>();
	private ArrayList<Integer> weights = new ArrayList<>();
	private ArrayList<NMBookDTO> nmbook;
	private ArrayList<BaggageDTO> baggage;
	private ArrayList<SeatTableDTO> seatTable;
	private ArrayList<SeatDTO> seat;
	
	
	public BookDTO3() { }


	public BookDTO3(ScheduleDTO findScheduleDTO, BookingDTO bookingDTO, ArrayList<BoarderDTO> boarder,
			ArrayList<String> dname, ArrayList<String> kinds, ArrayList<Integer> weights, ArrayList<NMBookDTO> nmbook,
			ArrayList<BaggageDTO> baggage, ArrayList<SeatTableDTO> seatTable, ArrayList<SeatDTO> seat) {
		super();
		this.ScheduleDTO = findScheduleDTO;
		this.bookingDTO = bookingDTO;
		this.boarder = boarder;
		this.dname = dname;
		this.kinds = kinds;
		this.weights = weights;
		this.nmbook = nmbook;
		this.baggage = baggage;
		this.seatTable = seatTable;
		this.seat = seat;
	}


	public ScheduleDTO getScheduleDTO() {
		return ScheduleDTO;
	}
	public void setFindScheduleDTO(ScheduleDTO ScheduleDTO) {
		this.ScheduleDTO = ScheduleDTO;
	}
	public BookingDTO getBookingDTO() {
		return bookingDTO;
	}
	public void setBookingDTO(BookingDTO bookingDTO) {
		this.bookingDTO = bookingDTO;
	}
	public ArrayList<BoarderDTO> getBoarder() {
		return boarder;
	}
	public void setBoarder(ArrayList<BoarderDTO> boarder) {
		this.boarder = boarder;
	}
	public ArrayList<String> getDname() {
		return dname;
	}
	public void setDname(ArrayList<String> dname) {
		this.dname = dname;
	}
	public ArrayList<String> getKinds() {
		return kinds;
	}
	public void setKinds(ArrayList<String> kinds) {
		this.kinds = kinds;
	}
	public ArrayList<Integer> getWeights() {
		return weights;
	}
	public void setWeights(ArrayList<Integer> weights) {
		this.weights = weights;
	}
	public ArrayList<NMBookDTO> getNmbook() {
		return nmbook;
	}
	public void setNmbook(ArrayList<NMBookDTO> nmbook) {
		this.nmbook = nmbook;
	}
	public ArrayList<BaggageDTO> getBaggage() {
		return baggage;
	}
	public void setBaggage(ArrayList<BaggageDTO> baggage) {
		this.baggage = baggage;
	}
	public ArrayList<SeatTableDTO> getSeatTable() {
		return seatTable;
	}
	public void setSeatTable(ArrayList<SeatTableDTO> seatTable) {
		this.seatTable = seatTable;
	}
	public ArrayList<SeatDTO> getSeat() {
		return seat;
	}
	public void setSeat(ArrayList<SeatDTO> seat) {
		this.seat = seat;
	}
	
	
	
	
	
	
	
}
