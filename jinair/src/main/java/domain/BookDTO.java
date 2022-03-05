package domain;

public class BookDTO {

	private ScheduleDTO findScheduleDTO;
	private BookingDTO bookingDTO;
	private BoarderDTO boarderDTO;
	private String dName;
	private NMBookDTO nmbookDTO;
	private String kind;
	private int weight;
	private BaggageDTO baggageDTO;
	private SeatTableDTO seatTableDTO;
	private SeatDTO seatDTO;
	
	
	public BookDTO() { }
	
	public BookDTO(ScheduleDTO ScheduleDTO, BookingDTO bookingDTO, BoarderDTO boarderDTO, String dName,
			NMBookDTO nmbookDTO, String kind, int weight, BaggageDTO baggageDTO, SeatTableDTO seatTableDTO,
			SeatDTO seatDTO) {
		this.findScheduleDTO = ScheduleDTO;
		this.bookingDTO = bookingDTO;
		this.boarderDTO = boarderDTO;
		this.dName = dName;
		this.nmbookDTO = nmbookDTO;
		this.kind = kind;
		this.weight = weight;
		this.baggageDTO = baggageDTO;
		this.seatTableDTO = seatTableDTO;
		this.seatDTO = seatDTO;
	}
	
	
	public ScheduleDTO getScheduleDTO() {
		return findScheduleDTO;
	}
	public void setScheduleDTO(ScheduleDTO ScheduleDTO) {
		this.findScheduleDTO = ScheduleDTO;
	}
	public BookingDTO getBookingDTO() {
		return bookingDTO;
	}
	public void setBookingDTO(BookingDTO bookingDTO) {
		this.bookingDTO = bookingDTO;
	}
	public BoarderDTO getBoarderDTO() {
		return boarderDTO;
	}
	public void setBoarderDTO(BoarderDTO boarderDTO) {
		this.boarderDTO = boarderDTO;
	}
	public String getdName() {
		return dName;
	}
	public void setdName(String dName) {
		this.dName = dName;
	}
	public NMBookDTO getNmbookDTO() {
		return nmbookDTO;
	}
	public void setNmbookDTO(NMBookDTO nmbookDTO) {
		this.nmbookDTO = nmbookDTO;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	public BaggageDTO getBaggageDTO() {
		return baggageDTO;
	}
	public void setBaggageDTO(BaggageDTO baggageDTO) {
		this.baggageDTO = baggageDTO;
	}
	public SeatTableDTO getSeatTableDTO() {
		return seatTableDTO;
	}
	public void setSeatTableDTO(SeatTableDTO seatTableDTO) {
		this.seatTableDTO = seatTableDTO;
	}
	public SeatDTO getSeatDTO() {
		return seatDTO;
	}
	public void setSeatDTO(SeatDTO seatDTO) {
		this.seatDTO = seatDTO;
	}
	
	
	
}
