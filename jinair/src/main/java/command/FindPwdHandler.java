package command;

import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.sql.Date;
import java.util.Base64;
import java.util.List;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.wrapper.EncryptWrapper;

import service.FindPwdService;
import service.LoginService;

public class FindPwdHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		String m_id = request.getParameter("id");

		String ml_name = request.getParameter("mbrLnm");
		String mf_name = request.getParameter("mbrFnm");
		String m_name = String.format("%s%s", ml_name, mf_name);

		String date = request.getParameter("bthDt");
		String birthDate = String.format("%s-%s-%s", date.substring(0,4), date.substring(4, 6), date.substring(6,8));
		Date birth = Date.valueOf( birthDate );

		String contact = request.getParameter("contact");
		if( !contact.contains("@") ) {
			contact = "KOR " + contact;
		}
		
		FindPwdService findPwdService = FindPwdService.getInstance();
		List<String> list = findPwdService.findPwd( m_id, m_name, birth, contact);
		
		
		if( list != null ) { // 찾는 정보가 있음 
		
			m_name = m_name.substring(0, m_name.length()-1) + "*";
			String email = list.get(1);
			String rdmPwd = list.get(2);
			
			sendMail(request, response, email, rdmPwd, m_name);
			
			m_id = m_id.substring(0, m_id.length()-2) + "**";
			
			String location = "/jinair/project/login/resultPwd.jsp";
			location = String.format("%s?m_name=%s&m_id=%s&email=%s", location, URLEncoder.encode(m_name, "UTF-8"), m_id, email);
			response.sendRedirect(location);
		} else // 찾는 정보가 없음 
			return "/project/login/noResult.jsp";
		return null;	

	}
	
	public void sendMail(HttpServletRequest request, HttpServletResponse response, String sendemail, String sendPwd, String m_name ) throws Exception{

		request.setCharacterEncoding("utf-8");
		 
		String from = "znlqmwm@naver.com";
		String to = sendemail;
		String subject = "[JIN AIR]비밀번호 찾기";
		String content = "<textarea name=\"content\" style=\"width:170px; height:200px; display: none;\">"
				+ "		<table>"
				+ "		<tbody>"
				+ "			<tr><td align=\"right\" bgcolor=\"#c1d82f\"><a href=\"https://www.jinair.com\" target=\"_blank\" rel=\"noreferrer noopener\"><img src=\"http://images.jinair.com/images/mail/logo.png\" alt=\"JINAIR\" border=\"0\" loading=\"lazy\"></a></td></tr>"
				+ "			<tr><td height=\"70\"></td></tr>"
				+ "			<tr><td>"
				+ "				<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"table-layout:fixed\">"
				+ "					<tbody>"
				+ "						<tr>"
				+ "							<td width=\"10\"></td>"
				+ "							<td style=\"font-size:16px;line-height:1.8em;font-family:'맑은 고딕', dotum;color:#555\">"
				+ "								<strong style=\"font-size:28px;color:#661e43\">환영합니다.</strong>"
				+ "								<div style=\"padding:15px 0\">"
				+ "									<strong style=\"font-size:20px;color:#000\">안녕하세요"+ m_name +" 고객님,</strong>"
				+ "								</div>"
				+ "									회원님의 임시 비밀번호는 다음과 같습니다.<br>개인정보 보호를 위해 로그인 후 새로운 비밀번호로 변경해 주시기 바랍니다.<br>진에어를 이용해 주셔서 감사합니다."
				+ "			"
				+ "							</td>"
				+ "						</tr>"
				+ "						<tr>"
				+ "							<td height=\"40\" colspan=\"2\"></td>"
				+ "						</tr>"
				+ "					</tbody>"
				+ "				</table>"
				+ "			<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"table-layout:fixed\">"
				+ "				<tbody><tr><th colspan=\"1\" rowspan=\"1\" width=\"150\" style=\"padding:20px;border-top:1px solid #000;border-bottom:1px solid #000;text-align:left;font-size:18px;font-family:'맑은 고딕', dotum;color:#555;font-weight:normal\">임시 비밀번호</th><td style=\"padding:20px;border-top:1px solid #000;border-bottom:1px solid #000;font-size:18px;font-family:'맑은 고딕', dotum;color:#000;font-weight:bold\"> "+ sendPwd +" </td></tr>"
				+ "			</tbody></table>"
				+ "			<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"
				+ "				<tbody><tr><td height=\"30\"></td></tr>"
				+ "				<tr><td align=\"center\" style=\"padding:0;\">"
				+ "						<a href=\"https://www.jinair.com\" target=\"_blank\" style=\"color:#000;text-decoration:none;\" rel=\"noreferrer noopener\">"
				+ "							<span style=\"display:inline-block;height:66px;padding:0 30px;background:#bdd600;font-family:'맑은 고딕', dotum;font-size:24px;line-height:66px;\">진에어 홈페이지 바로가기</span>"
				+ "						</a>"
				+ "					</td></tr>"
				+ "			</tbody></table>"
				+ "		</td></tr>"
				+ "		<tr><td height=\"80\"></td></tr>"
				+ "		"
				+ "			"
				+ "			<tr><td style=\"padding:10px 0 25px 0;text-align:center;vertical-align:top;\">"
				+ "					<table cellpadding=\"0\" cellspacing=\"0\" style=\"margin:0 auto;\">"
				+ "						<tbody><tr><td style=\"vertical-align:top;padding:0;\"><a href=\"https://www.facebook.com/JinAir\" target=\"_blank\" title=\"새 창 열림\" style=\"padding:0;text-decoration:none;vertical-align:top;\" rel=\"noreferrer noopener\"><img src=\"//images.jinair.com/images/mail/ico_facebook.gif\" alt=\"Facebook\" style=\"border:none;\" loading=\"lazy\"></a></td><td style=\"vertical-align:top;padding:0 0 0 30px;\"><a href=\"https://www.instagram.com/jinair_LJ/\" target=\"_blank\" title=\"새 창 열림\" style=\"padding:0;text-decoration:none;vertical-align:top;\" rel=\"noreferrer noopener\"><img src=\"//images.jinair.com/images/mail/ico_instagram.gif\" alt=\"Instagram\" style=\"border:none;\" loading=\"lazy\"></a></td><td style=\"vertical-align:top;padding:0 0 0 30px;\"><a href=\"https://twitter.com/JinAir_LJ\" target=\"_blank\" title=\"새창열림\" style=\"padding:0;text-decoration:none;vertical-align:top;\" rel=\"noreferrer noopener\"><img src=\"//images.jinair.com/images/mail/ico_twitter.gif\" alt=\"Twitter\" style=\"border:none;\" loading=\"lazy\"></a></td><td style=\"vertical-align:top;padding:0 0 0 30px;\"><a href=\"https://blog.naver.com/jinair_official\" target=\"_blank\" title=\"새 창 열림\" style=\"padding:0;text-decoration:none;vertical-align:top;\" rel=\"noreferrer noopener\"><img src=\"//images.jinair.com/images/mail/ico_blog.gif\" alt=\"blog\" style=\"border:none;\" loading=\"lazy\"></a></td><td style=\"vertical-align:top;padding:0 0 0 30px;\"><a href=\"https://www.youtube.com/user/JinAir0717\" target=\"_blank\" title=\"새 창 열림\" style=\"padding:0;text-decoration:none;vertical-align:top;\" rel=\"noreferrer noopener\"><img src=\"//images.jinair.com/images/mail/ico_youtube.gif\" alt=\"youTube\" style=\"border:none;\" loading=\"lazy\"></a></td></tr>"
				+ "					</tbody></table>"
				+ "				</td></tr>"
				+ "			<tr><td style=\"padding:0 0 20px 0;text-align:center;vertical-align:top;color:#bed600;font-size:14px;font-family:Dotum;font-weight:bold;\">진에어 SNS Follow us</td></tr>"
				+ "				"
				+ "			<tr><td bgcolor=\"#f8f8f8\">"
				+ "					<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"
				+ "						<tbody><tr><td height=\"25\"></td></tr>"
				+ "						<tr><td align=\"center\" style=\"font-size:14px;line-height:22px;font-family:'맑은 고딕', dotum;color:#555\">"
				+ "								메일은 발신 전용으로 회신이 되지 않습니다. 문의사항은 <a href=\"https://www.jinair.com/qna/addQna\" target=\"_blank\" style=\"text-decoration:none;color:#661e43;font-weight:bold\" rel=\"noreferrer noopener\">1:1 고객문의</a>를 이용해주시기 바랍니다.<br>"
				+ "								Please do not reply to this message via e-mail. This address is automated and unattended.<br>"
				+ "								If you have any questions or comments, please use <a href=\"https://www.jinair.com/qna/addQna\" target=\"_blank\" style=\"text-decoration:none;color:#661e43;font-weight:bold\" rel=\"noreferrer noopener\">Q&amp;A</a>."
				+ "							</td></tr>"
				+ "						<tr><td height=\"25\"></td></tr>"
				+ "					</tbody></table>"
				+ "				</td></tr>"
				+ "			<tr><td bgcolor=\"#e9e9e9\">"
				+ "				<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"
				+ "					<tbody><tr><td height=\"40\"></td></tr>"
				+ "					<tr><td align=\"center\" style=\"font-size:12px;font-family:'맑은 고딕', dotum;color:#000\">고객서비스센터 <strong>1600-6200, 02-6099-1200</strong> | 업무시간 : 오전 8:00 ~ 오후 8:00</td></tr>"
				+ "					<tr><td height=\"15\"></td></tr>"
				+ "					<tr><td align=\"center\" style=\"font-size:12px;font-family:'맑은 고딕', dotum;color:#555\">㈜진에어 | 대표이사 최정호 | 사업자등록번호 121-81-89086</td></tr>"
				+ "						<tr><td height=\"60\"></td></tr>"
				+ "					</tbody></table>"
				+ "					</td></tr>"
				+ "				"
				+ "			"
				+ "		</tbody>"
				+ "		</table>"
				+ "   </textarea>"
				+ ""
				+ "";
		// 입력값 받음
		 
		// 현재 SMTP 서버를 만들어둔게 없어 naver의 SMTP 서버를 사용하였습니다.
		Properties p = new Properties(); // 정보를 담을 객체
		 
		p.put("mail.smtp.host","smtp.naver.com"); // 네이버 SMTP 
		p.put("mail.smtp.port", "465");
		p.put("mail.smtp.starttls.enable", "true");  //  로그인시 TLS를 사용할 것인지 설정
		p.put("mail.smtp.auth", "true");
		p.put("mail.smtp.debug", "true");
		p.put("mail.smtp.socketFactory.port", "465");
		p.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		p.put("mail.smtp.socketFactory.fallback", "false");
		p.put("mail.smtp.ssl.protocols", "TLSv1.2");
		// SMTP 서버에 접속하기 위한 정보들
		 
		try{
		    Authenticator auth = new SMTPAuthenticatior();
		    Session ses = Session.getInstance(p, auth);
		     
		    ses.setDebug(true);
		     
		    MimeMessage msg = new MimeMessage(ses); // 메일의 내용을 담을 객체
		    msg.setSubject(subject); // 제목
		     
		    Address fromAddr = new InternetAddress(from);
		    msg.setFrom(fromAddr); // 보내는 사람
		     
		    Address toAddr = new InternetAddress(to);
		    msg.addRecipient(Message.RecipientType.TO, toAddr); // 받는 사람
		     
		    msg.setContent(content, "text/html;charset=UTF-8"); // 내용과 인코딩
		     
		    Transport.send(msg); // 전송
		    
		} catch(Exception e){
		    e.printStackTrace();
		
		    return;
		}
		
	}
}

