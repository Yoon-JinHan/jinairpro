/*
	ex) efuSlider('.galleryList', 1, 150, '', 'once');
	ex) efuSlider('.galleryList', 3, 150); 
	obj = .slideCont(>ul>li)와 .prev .next를 자식으로 갖는 부모 엘리먼트
	num = 한번에 움직이는 갯수 (보이는 갯수만큼 움직인다고 가정)
	speed = 속도
	fx = vertical(세로형)
	step = once(한칸씩움직임, num = 1 필수)  
*/
function efuSlider(obj, num, speed, fx, step){
	var total, totalWidth, item, itemWidth, itemPadding, itemMargin, itemBorder, moveWidth, totalMoveWidth, speed, moveCnt = 0, activeCnt = 0;
	item = $(".slideCont li:first", obj);
	if(fx == "vertical"){
		if(item.css("height")){
			itemWidth = parseInt(item.css("height"));
		} else {
			itemWidth = item.find("img").height();
		}
		itemPadding = item.css("padding-top") ? (parseInt(item.css("padding-top").replace("px", "")) + parseInt(item.css("padding-bottom").replace("px", ""))) : 0;
		itemMargin = item.css("margin-top") ? (parseInt(item.css("margin-top").replace("px", "")) + parseInt(item.css("margin-bottom").replace("px", ""))) : 0;
		itemBorder = item.css("border-top-width") ? (parseInt(item.css("border-top-width").replace("px", "")) + parseInt(item.css("border-bottom-width").replace("px", ""))) : 0;		
	} else {	
		itemWidth = item.width();
		if(item.css("width")){
			itemWidth = parseInt(item.css("width"));
		} else {
			itemWidth = item.find("img").width();
		}
		itemPadding = item.css("padding-right") ? (parseInt(item.css("padding-right").replace("px", "")) + parseInt(item.css("padding-left").replace("px", ""))) : 0;
		itemMargin = item.css("margin-right") ? (parseInt(item.css("margin-right").replace("px", "")) + parseInt(item.css("margin-left").replace("px", ""))) : 0;
		itemBorder = item.css("border-right-width") ? (parseInt(item.css("border-right-width").replace("px", "")) + parseInt(item.css("border-left-width").replace("px", ""))) : 0;
	}		
	itemPadding = itemPadding ? itemPadding : 0;
	itemMargin = itemMargin ? itemMargin : 0;
	itemBorder = itemBorder ? itemBorder : 0;
	moveWidth = (itemWidth + itemPadding + itemMargin + itemBorder) * num; //한번에 움직이는 사이즈
	totalWidth = (itemWidth + itemPadding + itemMargin + itemBorder) * $(".slideCont >ul >li", obj).size();	
	
	//console.log(itemWidth+":"+itemPadding+":"+itemMargin+":"+itemBorder);
	
	if(step == "once"){
		moveCnt = $(".slideCont >ul >li", obj).size() - (parseInt(($(".slideCont", obj).width() + itemMargin) / (itemWidth + itemPadding + itemMargin + itemBorder)));
	} else {
		if($(".slideCont >ul >li", obj).size() % num != 0){ 
			moveCnt = parseInt($(".slideCont >ul >li", obj).size() / num); //이동횟수
		} else {
			moveCnt = ($(".slideCont >ul >li", obj).size() / num) - 1;
		}
	}
	
	$(obj).find(".next").off("click");
	$(obj).find(".prev").off("click");
	
	//$(".slideCont >ul", obj).width(totalWidth);
	var viewItem = Math.round($(".slideCont", obj).width() / (itemWidth + itemPadding + itemMargin + itemBorder));
	/*if(totalWidth <= $(".slideCont", obj).width()){*/
	if(totalWidth <= viewItem * (itemWidth + itemPadding + itemMargin + itemBorder)){
		//console.log('off')
		$(obj).find(".next, .prev").hide();
		$(obj).addClass("offSlide");
		//$(obj).width(totalWidth);
	} else {	
		$(obj).find(".next, .prev").show();
		$(obj).removeClass("offSlide");
		$(obj).find(".next").on("click", function(e){
			if(activeCnt < moveCnt){
				activeCnt++;
				totalMoveWidth = moveWidth * activeCnt;
				if(fx == "vertical"){
					$(obj).find("ul").animate({marginTop: "-" + totalMoveWidth + "px"}, speed);
				} else {		 
					$(obj).find("ul").animate({marginLeft: "-" + totalMoveWidth + "px"}, speed);
				}
			} 
			e.preventDefault();
		});
		$(obj).find(".prev").on("click", function(e){
			if(activeCnt > 0){
				activeCnt--;
				totalMoveWidth = moveWidth * activeCnt;
				if(fx == "vertical"){
					$(obj).find("ul").animate({marginTop: "-" + totalMoveWidth + "px"}, speed);
				} else {		 
					$(obj).find("ul").animate({marginLeft: "-" + totalMoveWidth + "px"}, speed);
				}
			} 
			e.preventDefault();
		});
	}
}

function efuSlider2(obj, num, speed, fx, step){
	var total, totalWidth = 0, item = new Array(), itemWidth = new Array(), itemPadding, itemMargin, itemBorder, moveWidth = new Array(), totalMoveWidth, speed, moveCnt = 0, activeCnt = 0;
	var parentWidth = $(".slideCont", obj).width() + parseInt($(".slideCont", obj).css("padding-left")) + parseInt($(".slideCont", obj).css("padding-right"));
	$(".slideCont li", obj).each(function(i){
		item[i] = $(this);
		if(fx == "vertical"){
			if(item[i].css("height")){
				itemWidth[i] = parseInt(item[i].css("height"));
			} else {
				itemWidth[i] = item[i].find("img").height();
			}
			itemPadding = item[0].css("padding-top") ? (parseInt(item[0].css("padding-top").replace("px", "")) + parseInt(item[0].css("padding-bottom").replace("px", ""))) : 0;
			itemMargin = item[0].css("margin-top") ? (parseInt(item[0].css("margin-top").replace("px", "")) + parseInt(item[0].css("margin-bottom").replace("px", ""))) : 0;
			itemBorder = item[0].css("border-top-width") ? (parseInt(item[0].css("border-top-width").replace("px", "")) + parseInt(item[0].css("border-bottom-width").replace("px", ""))) : 0;		
		} else {	
			itemWidth[i] = item[i].width();
			if(item[i].css("width")){
				itemWidth[i] = parseInt(item[i].css("width"));
			} else {
				itemWidth[i] = item[i].find("img").width();
			}
			itemPadding = item[0].css("padding-right") ? (parseInt(item[0].css("padding-right").replace("px", "")) + parseInt(item[0].css("padding-left").replace("px", ""))) : 0;
			itemMargin = item[0].css("margin-right") ? (parseInt(item[0].css("margin-right").replace("px", "")) + parseInt(item[0].css("margin-left").replace("px", ""))) : 0;
			itemBorder = item[0].css("border-right-width") ? (parseInt(item[0].css("border-right-width").replace("px", "")) + parseInt(item[0].css("border-left-width").replace("px", ""))) : 0;
		}
		itemPadding = itemPadding ? itemPadding : 0;
		itemMargin = itemMargin ? itemMargin : 0;
		itemBorder = itemBorder ? itemBorder : 0;
		moveWidth[i] = (itemWidth[i] + itemPadding + itemMargin + itemBorder) * num; //한번에 움직이는 사이즈
		totalWidth = totalWidth + moveWidth[i];
		if(step == "once"){
			if(totalWidth >= parentWidth){
				moveCnt = $(".slideCont >ul >li", obj).size() - i;
			}
		} else {
			if($(".slideCont >ul >li", obj).size() % num != 0){ 
				moveCnt = parseInt($(".slideCont >ul >li", obj).size() / num); //이동횟수
			} else {
				moveCnt = ($(".slideCont >ul >li", obj).size() / num) - 1;
			}
		}
	});	
		
	$(obj).find(".next").off("click");
	$(obj).find(".prev").off("click");
		
	if(totalWidth <= parentWidth){
		$(obj).find(".next, .prev").hide();
		$(obj).addClass("offSlide");
	} else {	
		$(obj).find(".next, .prev").show();
		$(obj).removeClass("offSlide");
		$(obj).find(".next").on("click", function(e){
			if(activeCnt < moveCnt){
				activeCnt++;
				totalMoveWidth = moveWidth[activeCnt-1] * activeCnt;
				if(fx == "vertical"){
					$(obj).find("ul").animate({marginTop: "-" + totalMoveWidth + "px"}, speed);
				} else {		 
					$(obj).find("ul").animate({marginLeft: "-" + totalMoveWidth + "px"}, speed);
				}
			} else { //마지막
				if(totalWidth > totalMoveWidth + parentWidth){
					totalMoveWidth = totalMoveWidth + totalWidth - (totalMoveWidth + parentWidth);
					if(fx == "vertical"){
						$(obj).find("ul").animate({marginTop: "-" + totalMoveWidth + "px"}, speed);
					} else {		 
						$(obj).find("ul").animate({marginLeft: "-" + totalMoveWidth + "px"}, speed);
					}
				}
			}
			e.preventDefault();
		});
		$(obj).find(".prev").on("click", function(e){
			if(activeCnt > 0){
				activeCnt--;
				totalMoveWidth = moveWidth[activeCnt+1] * activeCnt;
				if(fx == "vertical"){
					$(obj).find("ul").animate({marginTop: "-" + totalMoveWidth + "px"}, speed);
				} else {		 
					$(obj).find("ul").animate({marginLeft: "-" + totalMoveWidth + "px"}, speed);
				}
			} 
			e.preventDefault();
		});
	}
}