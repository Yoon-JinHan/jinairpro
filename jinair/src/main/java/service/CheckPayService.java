package service;

import java.sql.Connection;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Date;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import domain.CheckPayDTO;
import domain.FareDTO;
import net.sf.json.JSONArray;
import persistence.JinairDAO;


public class CheckPayService {
	
	// 1. 싱글톤 
	private static CheckPayService instance = new CheckPayService();
	private CheckPayService() { }
	public static CheckPayService getInstance() {
		return instance;
	}	
	
	public JSONArray checkpay(CheckPayDTO dto){
		JSONArray jsonArray = new JSONArray(); 
		

		Connection con = null;
 		try {
			con = ConnectionProvider.getConnection();
			JinairDAO dao = JinairDAO.getInstance();
			
			FareDTO fareDTO1 = new FareDTO(ckeckDtype(dto.getS1_time(),dto.getTravelDate1()),dto.getOrigin1(),dto.getDestination1() );
			jsonArray.add( dao.getpay(con, fareDTO1));
			//System.out.println(jsonArray.toString());
			if(dto.getOrigin2() != "") {
				FareDTO fareDTO2 = new FareDTO(ckeckDtype(dto.getS2_time(),dto.getTravelDate2()), dto.getOrigin2(),dto.getDestination2() );
				jsonArray.add( dao.getpay(con, fareDTO2));
			}
			//System.out.println(jsonArray.toString());
			
			
			
			
			return jsonArray;
		} catch (NamingException | SQLException e) { 
			throw new RuntimeException(e);
		} finally {
			JdbcUtil.close(con);
		}
	}
	
	private String ckeckDtype(String time, String travelDate) {
		String dType = null;
		String 요일 = "월화수목";
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
		SimpleDateFormat format = new SimpleDateFormat("E");
		
		try {
			Date date = dateFormat.parse(travelDate);
			String day = format.format(date);
			if(요일.indexOf(day) != -1) dType = "주중";
			else						dType = "주말";
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		LocalTime localTime = LocalTime.parse(time);
		if(localTime.isBefore(LocalTime.parse("14:00"))) dType += "선호";
		else											 dType += "일반";
		
		//System.out.println(dType);
		
		return dType;
	}

}
