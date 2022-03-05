package service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.BaggageDTO;
import domain.BookDTO3;
import domain.DiscountDTO;
import domain.FoodDTO;
import domain.ReservedSeatDTO;
import domain.ScheduleDTO;
import domain.SeatDTO;
import domain.SeatTableDTO;
import domain.ServiceDTO;
import persistence.JinairDAO;

public class BookingService3 {
	
	// 1. 싱글톤
	private BookingService3() {}
	private static BookingService3 instance = new BookingService3();
	public static BookingService3 getInstance() {
		return instance;
	}

	public int book(BookDTO3 dto) {
		
		Connection con = null;
		int booking = 0;
		int nmBook = 0;
		int rowCount = 0;
		//int totalPrice = 0;
		SeatDTO seatDTO = null;
		SeatTableDTO seatTableDTO = null;
		FoodDTO foodDTO = null;
		BaggageDTO baggageDTO = null;
		ServiceDTO serviceDTO = new ServiceDTO();
		DiscountDTO discountDTO = null;
		
		
		
		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			// 자동커밋 끄기
			con.setAutoCommit(false);
			
			// 운항정보NO 가져오기
			ScheduleDTO scheduleDTO = dao.findSchedule(con, dto.getScheduleDTO());
			int sNo = scheduleDTO.getsNo();
			System.out.println(scheduleDTO.getModel());
			
			// 예약정보 dto에 sNO추가
			dto.getBookingDTO().setS_no(sNo);
			
			// 총 요금 계산
			// dto.getBookingDTO().setPrice(totalPrice);
			
			// 예약정보 테이블 추가
			booking = dao.insert(con, dto.getBookingDTO());
			System.out.println("예약정보 추가 : " + booking);
			
			for(int i = 0; i < dto.getBookingDTO().getB_count(); i++) {
			
				// 추가할인
				if(dto.getDname().get(i) != "") {
					discountDTO = dao.discount( con, dto.getDname().get(i) );
					dto.getBoarder().get(i).setdNo(discountDTO.getdNo());
				}
				
				
				// 탑승객 테이블 추가
				String bNo = dto.getBookingDTO().getB_no();
				String bNo2 = bNo + "-"+i; // 탑승객 no
				dto.getBoarder().get(i).setbNo(bNo2);
				
				int boarder = dao.insertBoarder(con, dto.getBoarder().get(i));
				System.out.println("탑승객정보 추가"+i+" : " + boarder);
				
				// 비회원 예약정보 추가
				if(dto.getBoarder().get(i).getmId() == null) {
					dto.getNmbook().get(i).setbNO(bNo2);
					nmBook = dao.insertNMBook(con, dto.getNmbook().get(i));
					System.out.println("비회원예약정보"+i+" 추가 : " + nmBook);
				}
				
				// 지역조회
				String country = findCountry(dto.getScheduleDTO().getDeparture());
				
	
				//System.out.println(country);
				
				//////////////////////// 부가서비스 선택 ///////////////////////////////////////////////////////
				
				if(dto.getKinds().get(i) != "") {
					System.out.println("기내식 선택");
					foodDTO = dao.food(con, dto.getKinds().get(i));
					serviceDTO.setFno(foodDTO.getFno());
					
					System.out.println(foodDTO.getFno());
					System.out.println(foodDTO.getPrice());
				}
				
				
				
				if(dto.getSeat().get(i).getScolumn()!="" && dto.getSeat().get(i).getSrow()!=0) {
					System.out.println("사전좌석"+i+" 선택");
					dto.getSeat().get(i).setModel(scheduleDTO.getModel());
					seatDTO = dao.seat(con, dto.getSeat().get(i));
					
					System.out.println(seatDTO.getSno());
					System.out.println(seatDTO.getGrade());
					
					dto.getSeatTable().get(i).setCountry(country);
					dto.getSeatTable().get(i).setName(seatDTO.getGrade());
					seatTableDTO = dao.findSeatTable(con, dto.getSeatTable().get(i));
					
					System.out.println(dto.getSeatTable().get(i).getChannel());
					System.out.println(dto.getSeatTable().get(i).getCountry());
					System.out.println(dto.getSeatTable().get(i).getName());
					
					serviceDTO.setStno(seatTableDTO.getStno());
					System.out.println(seatTableDTO.getStno());
					System.out.println(seatTableDTO.getPrice());
					// 예약좌석 추가
					ReservedSeatDTO reservedSeatDTO = new ReservedSeatDTO(seatTableDTO.getStno(), bNo2, sNo);
					int reserved = dao.insertReservedSeat(con, reservedSeatDTO);
					System.out.println("예약좌석"+i+" 추가 : " + reserved);
				}
				
				if(dto.getWeights().get(i) != 0) {
					System.out.println("추가 수화물"+i+" 선택");
					dto.getBaggage().get(i).setCountry(country);
					dto.getBaggage().get(i).setType("온라인");
					baggageDTO = dao.findBaggage(con, dto.getBaggage().get(i));
					double baseWeight = (baggageDTO.getBase().charAt(0)-'0')/1.0;
					//System.out.println(baseWeight);
					int weight = (int)Math.ceil( dto.getWeights().get(i)/baseWeight);
					System.out.println(weight);
					
					serviceDTO.setEbno(baggageDTO.getEbNo());
					serviceDTO.setWeight(weight);
					System.out.println(baggageDTO.getEbNo());
					System.out.println(baggageDTO.getPrice());
				}
				/*
				System.out.println(serviceDTO.getEbno());
				System.out.println(serviceDTO.getFno());
				System.out.println(serviceDTO.getStno());
				System.out.println(serviceDTO.getWeight());
				*/
				if( seatTableDTO != null || foodDTO != null || baggageDTO != null) {
					serviceDTO.setBno(bNo2);
					int service = dao.insertService(con, serviceDTO);
					System.out.println("service"+i+" : " + service);
				}
			
			}
			////////////////////////////////////////////////////////////////////////////////////////////////
			/*
				System.out.println(dto.getScheduleDTO().getDeparture());
				System.out.println(dto.getScheduleDTO().getArrival());
				System.out.println(dto.getScheduleDTO().getStime());
				
				System.out.println(dto.getSeatDTO().getScolumn());
				System.out.println(dto.getSeatDTO().getSrow());
				System.out.println(scheduleDTO.getModel());
				
				System.out.println(sNo);
				
			*/
			
			
			
			
			
			
			
			
			
			rowCount=1;
			
			
			
			
			//con.commit();
			return rowCount;
		} catch (NamingException | SQLException e) {
			JdbcUtil.rollback(con);
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
	
	public String findCountry(String departure) {
		HashMap<String, String> map = new HashMap<>();
		map.put("국내선", "서울/인천(ICN),서울/김포(GMP),부산(PUS),제주(CJU),청주(CJJ),광주(KWJ),"
			           + "대구(TAE),여수(RSU),울산(USN),포항(KPO),원주(WJU),군산(KUV),사천(HIN)");
		map.put("동남아", "방콕(BKK),푸껫(HKT),치앙마이(CNX),세부(CEB),클락(CRK),보라카이/칼리보(KLO)"
			           + "다낭(DAD),하노이(HAN),비엔티안(VTE),코타 키나발루(BKI),조호르바루(JHB)");
		map.put("일본", "도쿄/나리타(NRT),오사카/간사이(KIX),후쿠오카(FUK),삿포로(CTS),오키나와(OKA),기타큐슈(KKJ)");
		map.put("중국본토", "상하이/푸동(PVG),시안(XIY),홍콩(HKG),칭다오(TAO)");
		map.put("마카오", "마카오(MFM)");
		map.put("대만", "타이베이/타오위안(TPE)");
		map.put("대양주", "괌(GUM)");
		map.put("미주", "하와이, 호놀룰루(HNL)");
		
		Iterator<Entry<String, String>> ir = map.entrySet().iterator();
		while(ir.hasNext()) {
			Entry<String, String> entry = ir.next();
			String countrys = entry.getValue();
			if(countrys.indexOf(departure) != -1) {
				return entry.getKey();
			}
		}
		return null;
		
	}
	
}
