package command;
import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
 
// SMTP 서버의 인증정보를 담고있는 클래스를 먼저 생성
public class SMTPAuthenticatior extends Authenticator{
 
    @Override
    protected PasswordAuthentication getPasswordAuthentication() { 
       //  애플리케이션 비밀번호 생성 후 사용
       // 2단계 인증 설정하면 비번으로 로그인 X
        return new PasswordAuthentication("znlqmwm","LXSS1Z4V5LGM");
    }
}