package command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import domain.AuthUserDTO;
import domain.CouponDTO;
import service.CouponListService;

public class CouponListHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		HttpSession session = request.getSession(false);
		AuthUserDTO dto = (AuthUserDTO) session.getAttribute("userDTO"); 
		
		String m_id = dto.getM_id();
		
		List<CouponDTO> list = null;
		
		CouponListService couponListService = CouponListService.getInstance();
		list = couponListService.couponList(m_id);
		
		request.setAttribute("couponlist", list);	
		
		return "/project/mypage/coupons.jsp";
	
	}

}
