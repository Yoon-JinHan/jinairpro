//IE에서 css로 작성시 버벅거림 발생하므로 script로 작성함
function setMapStyle(){
	if($(window).width() > 640){
		$(".seatMap.b777 .map li:nth-child(2), .seatMap.b777 .map li:nth-child(6)").css("margin-right", "58px");
		$(".seatMap.b777 .map li.seatA:nth-child(38) ~li.seatA").css("height", "46px");
		$(".seatMap.b777 .map li:nth-child(10n+11), .seatMap.b777 .map li:nth-child(10n+15)").css("margin-right", "30px");
		$(".seatMap.b777 .map li:nth-child(78) ~li").css("margin-top", "129px");
		$(".seatMap.b777 .map li:nth-child(88) ~li").css("margin-top", "0");
		$(".seatMap.b777 .map li:nth-child(276)").css("clear", "both");
		$(".seatMap.b777 .map li:nth-child(275) ~li").css("margin-top", "100px");
		$(".seatMap.b777 .map li:nth-child(281) ~li").css("margin-top", "0");
		$(".seatMap.b777 .map li:nth-child(278)").css("margin-right", "176px");
		$(".seatMap.b777 .map li:nth-child(10n+281), .seatMap.b777 .map li:nth-child(10n+285)").css("margin-right", "0");
		$(".seatMap.b777 .map li:nth-child(10n+284), .seatMap.b777 .map li:nth-child(10n+288)").css("margin-right", "30px");
		$(".seatMap.b777 .map li:nth-child(10n+364), .seatMap.b777 .map li:nth-child(10n+368)").css("margin-right", "0");
		$(".seatMap.b777 .map li:nth-child(8n+363), .seatMap.b777 .map li:nth-child(8n+367)").css("margin-right", "58px");

		$(".seatMap.b737 .map li:nth-child(3)").css("margin-right", "210px");
		$(".seatMap.b737 .map li:nth-child(6n+6)").css("margin-right", "60px");
		$(".seatMap.b737 .map li:nth-child(82), .seatMap.b737 .map li:nth-child(83), .seatMap.b737 .map li:nth-child(84), .seatMap.b737 .map li:nth-child(85), .seatMap.b737 .map li:nth-child(86), .seatMap.b737 .map li:nth-child(87)").css("margin-top", "20px").css("margin-bottom", "20px");

		//b737-900 PC, 태블릿 추가
		$(".seatMap.b739 .map li:first-child, .seatMap.b739 .map li:nth-child(5)").css("margin-left", "25px");
		$(".seatMap.b739 .map li:nth-child(2), .seatMap.b739 .map li:nth-child(6)").css("margin-right", "109px");
		$(".seatMap.b739 .map li:nth-child(5), .seatMap.b739 .map li:nth-child(6), .seatMap.b739 .map li:nth-child(7), .seatMap.b739 .map li:nth-child(8)").css("margin-bottom", "60px");
		$(".seatMap.b739 .map li:nth-child(6n+5)").css("margin-right", "60px");
		$(".seatMap.b739 .map li:nth-child(5)").css("margin-right", "-4px");
		$(".seatMap.b739 .map li:nth-child(75), .seatMap.b739 .map li:nth-child(76), .seatMap.b739 .map li:nth-child(77), .seatMap.b739 .map li:nth-child(78), .seatMap.b739 .map li:nth-child(79), .seatMap.b739 .map li:nth-child(80)").css("margin-top", "20px").css("margin-bottom", "20px");
	} else {
		$(".seatMap.b777 .map li:nth-child(2), .seatMap.b777 .map li:nth-child(6)").css("margin-right", "15%");
		$(".seatMap.b777 .map li.seatA:nth-child(38) ~li.seatA").css("height", "auto");
		$(".seatMap.b777 .map li:nth-child(10n+11), .seatMap.b777 .map li:nth-child(10n+15)").css("margin-right", "6.3%");
		$(".seatMap.b777 .map li:nth-child(78) ~li").css("margin-top", "35%");
		$(".seatMap.b777 .map li:nth-child(88) ~li").css("margin-top", "0");
		$(".seatMap.b777 .map li:nth-child(275) ~li").css("margin-top", "28%");
		$(".seatMap.b777 .map li:nth-child(276)").css("clear", "both");
		$(".seatMap.b777 .map li:nth-child(281) ~li").css("margin-top", "0");
		$(".seatMap.b777 .map li:nth-child(278)").css("margin-right", "47.3%");
		$(".seatMap.b777 .map li:nth-child(10n+281), .seatMap.b777 .map li:nth-child(10n+285)").css("margin-right", "0");
		$(".seatMap.b777 .map li:nth-child(10n+284), .seatMap.b777 .map li:nth-child(10n+288)").css("margin-right", "6.3%");
		$(".seatMap.b777 .map li:nth-child(10n+364), .seatMap.b777 .map li:nth-child(10n+368)").css("margin-right", "0");
		$(".seatMap.b777 .map li:nth-child(8n+363), .seatMap.b777 .map li:nth-child(8n+367)").css("margin-right", "15%");

		$(".seatMap.b737 .map li:nth-child(3)").css("margin-right", "50%");
		$(".seatMap.b737 .map li:nth-child(6n+6)").css("margin-right", "13%");
		$(".seatMap.b737 .map li:nth-child(82), .seatMap.b737 .map li:nth-child(83), .seatMap.b737 .map li:nth-child(84), .seatMap.b737 .map li:nth-child(85), .seatMap.b737 .map li:nth-child(86), .seatMap.b737 .map li:nth-child(87)").css("margin-top", "5.5%").css("margin-bottom", "5.5%");

		//b737-900 모바일 추가
		$(".seatMap.b739 .map li:first-child, .seatMap.b739 .map li:nth-child(5)").css("margin-left", "5%");
		$(".seatMap.b739 .map li:nth-child(2), .seatMap.b739 .map li:nth-child(6)").css("margin-right", "28%");
		$(".seatMap.b739 .map li:nth-child(5), .seatMap.b739 .map li:nth-child(6), .seatMap.b739 .map li:nth-child(7), .seatMap.b739 .map li:nth-child(8)").css("margin-bottom", "14.5%");
		$(".seatMap.b739 .map li:nth-child(6n+5)").css("margin-right", "13%");
		$(".seatMap.b739 .map li:nth-child(5)").css("margin-right", "0");
		$(".seatMap.b739 .map li:nth-child(75), .seatMap.b739 .map li:nth-child(76), .seatMap.b739 .map li:nth-child(77), .seatMap.b739 .map li:nth-child(78), .seatMap.b739 .map li:nth-child(79), .seatMap.b739 .map li:nth-child(80)").css("margin-top", "5.5%").css("margin-bottom", "5.5%");
	}
}