package command;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import domain.BaggageDTO;
import domain.BoarderDTO;
import domain.BookDTO3;
import domain.BookingDTO;
import domain.NMBookDTO;
import domain.ScheduleDTO;
import domain.SeatDTO;
import domain.SeatTableDTO;
import persistence.JinairDAO;
import service.BookingService3;

public class BookingHandler3 implements CommandHandler {

	@Override
	public String process(HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		
		ArrayList<BoarderDTO> boarder = new ArrayList<>();
		ArrayList<String> dname = new ArrayList<>();
		ArrayList<NMBookDTO> nmbook = new ArrayList<>();
		ArrayList<String> kinds = new ArrayList<>();
		ArrayList<Integer> weights = new ArrayList<>();
		ArrayList<BaggageDTO> baggage = new ArrayList<>();
		ArrayList<SeatTableDTO> seatTable = new ArrayList<>();
		ArrayList<SeatDTO> seat = new ArrayList<>();
		
		int num = request.getParameter("origin2") == "" ? 1 : 2;
		String bNo =  makeBNo(); // 랜덤으로 만듬
		int bCount = Integer.parseInt( request.getParameter("b_count") ); // 탑승객 수
		//int price 	= Integer.parseInt( request.getParameter("price") ); 
	  	String email = request.getParameter("email");
	  	String tel = request.getParameter("tel");
		for(int k = 1; k <= num; k++) {
			// 운항정보
		 	String departure = request.getParameter("origin"+k);
			String arrival = request.getParameter("destination"+k);
			String sTime = request.getParameter("travelDate"+k) + " " + request.getParameter("s"+k+"_time");
			ScheduleDTO ScheduleDTO = new ScheduleDTO(departure,arrival,sTime);
			
			// 예약정보
			String bType = request.getParameter("b"+k+"_type"); // 운임등급
			
			String bNo2 = bNo + "-" + num;
			//int sNo 	= findScheduleDTO.getsNo(); // dao에서 만들기 
			
		  	BookingDTO bookingDTO = new BookingDTO(k, bNo2, bCount, bType, email, tel);
			
		  	
		  	for(int i = 1; i <= bCount; i++) {
				// 탑승객
				String m_id = request.getParameter("mId"+i) == "" ? null : request.getParameter("mId"+i);
				int price = Integer.parseInt( request.getParameter("fare"+i) );
				int fuel = Integer.parseInt( request.getParameter("fuel"+i) );
				int tax = Integer.parseInt( request.getParameter("tax"+i) );
				
				// int d_no=Integer.parseInt(request.getParameter("d_no")); // dao에서 처리
				BoarderDTO boarderDTO = new BoarderDTO(m_id, price, fuel, tax, bNo2);
				boarder.add(boarderDTO);
				
				// 추가할인
				String dName = request.getParameter("discount"+i);
				dname.add(dName);
				
				// 비회원예약정보
				String nmName = request.getParameter("name"+i);
				Date birth = Date.valueOf(request.getParameter("birth"+i));
				String sex =  request.getParameter("sex"+i);
				String nationality = request.getParameter("nationality"+i);
				NMBookDTO nmbookDTO = new NMBookDTO(nmName, birth, sex, nationality, bNo2);
				nmbook.add(nmbookDTO);
				
				// 부가서비스 
				String type = request.getParameter("type"+i);
				String detail = request.getParameter("detail"+i);
				String channel = request.getParameter("channel"+i);
				
				String kind = request.getParameter("food"+i);
				int weight = Integer.parseInt( request.getParameter("weight"+i) == "" ? "0" : request.getParameter("weight"+i) );
				BaggageDTO baggageDTO = new BaggageDTO(type, detail);
				SeatTableDTO seatTableDTO = new SeatTableDTO(channel);
				kinds.add(kind);
				weights.add(weight);
				baggage.add(baggageDTO);
				seatTable.add(seatTableDTO);
				
				// 좌석
				String seatNo = request.getParameter("seats"+i);
				String scolumn = request.getParameter("s_column"+i);
				int srow = Integer.parseInt(request.getParameter("s_row"+i) == "" ? "0" : request.getParameter("s_row"+i));
				SeatDTO seatDTO = new SeatDTO(scolumn, srow);
				seat.add(seatDTO);
		  	}
			BookDTO3 bookDTO = new BookDTO3(ScheduleDTO, bookingDTO, boarder, dname, kinds, weights, nmbook, baggage, seatTable, seat);
			
			
			BookingService3 service = BookingService3.getInstance();
			int rowCount = service.book(bookDTO);
			
			System.out.println(rowCount==1?"예약 완료":"예약실패");
		}		
		return null;
	}
	
	
	// 예약번호 랜덤 생성
	public String makeBNo() {
		// 예약번호 가져오기
		ArrayList<String> list = new ArrayList<String>();
		JinairDAO dao = JinairDAO.getInstance();
		try {
			list = dao.getBnoList();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		// 예약번호 생성
		
		String bNo = "";
		do {
			bNo += (char)((int)(Math.random()*25)+65)+"";
			bNo += String.format("%2d", (int)(Math.random()*100));
			bNo += (char)((int)(Math.random()*25)+65);
			bNo += (char)((int)(Math.random()*25)+65);
			bNo += (int)(Math.random()*25)+65;
		}while(list.contains(bNo));
		return bNo;
	}


	
	
}













