$(function(){

	//initMainSwiper();

	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)){
		//Promotion Swiper : s
		var promotionSwiperAutoplay = $(document).find('.promotionVisual .swiper-container').find('li').length == 1 ? 0 : 2500;
		var promotionSwiper = new Swiper('.promotionVisual .swiper-container', {
		    pagination: '.promotionVisual .swiper-pagination',
		    nextButton: '.promotionVisual .swiper-button-next',
		    prevButton: '.promotionVisual .swiper-button-prev',
		    paginationClickable: true,
		    centeredSlides: true,
		    autoplay: promotionSwiperAutoplay,
		    slidesPerView:1,
		    slidesPerGroup :1,
		    loop: true,
		    autoplayDisableOnInteraction: false
		});
		//function btn
		$('.promotionVisual .btnControl').click(function(){
			if( $(this).hasClass( 'pause' ) ) {
				$( '.btnControl' ).removeClass( 'pause' );
				promotionSwiper.startAutoplay();
			} else {
				$( '.btnControl' ).addClass( 'pause' );
				promotionSwiper.stopAutoplay();
			}
		});
		//Promotion Swiper : e

		/* ticketWrap ~ promotionMainEvent 삭제 */
		/*var ticketSwiper = new Swiper('.ticketWrap .swiper-container', {
      nextButton: '.ticketWrap .swiper-button-next',
      prevButton: '.ticketWrap .swiper-button-prev',
      pagination: '.ticketWrap .swiper-pagination',
      slidesPerView:3,
      slidesPerGroup :3,
			breakpoints: {
        640: {
          slidesPerView:'auto',
          slidesPerGroup: 2
        }
      }
	  });

		var eventSwiperAutoplay = $(document).find('.promotionMainEvent .swiper-container .swiper-wrapper').find('div').length < 4 ? 0 : 2500;
		var eventSwiper = new Swiper('.promotionMainEvent .swiper-container', {
			pagination: '.promotionMainEvent .swiper-pagination',
	    nextButton: '.promotionMainEvent .swiper-button-next',
	    prevButton: '.promotionMainEvent .swiper-button-prev',
      slidesPerView:3,
      slidesPerGroup :3,
      paginationClickable: true,
      autoplay: eventSwiperAutoplay,
      spaceBetween: 40,
      autoplayDisableOnInteraction: false,
      breakpoints: {
          640: {
            slidesPerView:'auto',
            slidesPerGroup :1,
          }
        }
    });

		$('.promotionMainEvent .swiper-wrapper .swiper-slide').hover(
			function() {
				eventSwiper.stopAutoplay();
			}, function() {
				eventSwiper.startAutoplay();
			}
		);

		$('.promotionMainEvent .swiper-wrapper .swiper-slide').on('mouseenter focusin', function() {
			eventSwiper.stopAutoplay();
		});
		$('.promotionMainEvent .swiper-wrapper .swiper-slide').on('mouseleave focusout', function() {
			eventSwiper.startAutoplay();
		});*/
		/* //ticketWrap ~ promotionMainEvent 삭제 */

		//최저가 메인 : s
		var lowestSwiper = new Swiper('.lowestVisual .swiper-container', {
			scrollbar: '.lowestVisual .swiper-scrollbar',
			scrollbarDraggable: true,
			slidesPerView: 4,
			slidesPerGroup :1,
			spaceBetween: 20,
			breakpoints: {
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 10
				},
				640: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 10
				}
			}
		});
		//최저가 메인 : e

		/* 2019-01-21 추가 */
		//채용 팝업
		var eventSwiperAutoplay = $(document).find('.company_swiper .swiper-container .swiper-wrapper').find('div').length < 4 ? 0 : 2500;
		var eventSwiper = new Swiper('.company_swiper .swiper-container', {
			pagination: '.company_swiper .swiper-pagination',
			nextButton: '.company_swiper .swiper-button-next',
			prevButton: '.company_swiper .swiper-button-prev',
			slidesPerView:1,
			slidesPerGroup :1,
			paginationClickable: true,
			loop: true,
			autoplayDisableOnInteraction: false,
			breakpoints: {
				640: {
			      slidesPerView:'auto',
			      slidesPerGroup :1,
			    }
			}
    });
		/* // 2019-01-21 추가 */

		var qSwiper = new Swiper($(".setArea .slideCont"), {
			slidesPerView: 'auto',
			prevButton: $(".setArea .prev"),
			nextButton: $(".setArea .next")
		});

		var swiper = new Swiper('.aircraftSlide .swiper-container', {
		    pagination: '.aircraftSlide .swiper-pagination',
		    paginationClickable: true,
		    centeredSlides: true,
		    autoplay: 2500,
		    nextButton: '.aircraftSlide .swiper-button-next',
		    prevButton: '.aircraftSlide .swiper-button-prev',
		    autoplayDisableOnInteraction: false
		});

		//출도착 안내 조회결과
		var realtimeSwiper = new Swiper('.realtimeSwiper .swiper-container', {
			nextButton: '.realtimeResult .swiper-button-next',
			prevButton: '.realtimeResult .swiper-button-prev',
			pagination: '.realtimeResult .swiper-pagination',
			slidesPerView: 9,
			slidesPerGroup :1,
			spaceBetween: 10,
			breakpoints: {
					640: {
						slidesPerView: 5,
						slidesPerGroup: 1,
						spaceBetween: 5
					}
				}
		});

		//기내 유상판매
		var realtimeSwiper = new Swiper('.cabinshopSwiper .swiper-container', {
			nextButton: '.cabinshopSwiper .swiper-button-next',
			prevButton: '.cabinshopSwiper .swiper-button-prev',
			pagination: '.cabinshopSwiper .swiper-pagination',
			slidesPerView: 1,
			slidesPerGroup :1,
			spaceBetween: 0,
			loop: true,
			breakpoints: {
					640: {
						slidesPerView: 1,
						slidesPerGroup: 1,
						spaceBetween: 0,
						loop: true
					}
				}
		});

		//로그인 배너
		initLoginPageSwiper();
//		var realtimeSwiper = new Swiper('.loginSwiper .swiper-container', {
//			nextButton: '.loginSwiper .swiper-button-next',
//			prevButton: '.loginSwiper .swiper-button-prev',
//			pagination: '.loginSwiper .swiper-pagination',
//			slidesPerView: 1,
//			slidesPerGroup :1,
//			spaceBetween: 0,
//			loop: true,
//			breakpoints: {
//					640: {
//						slidesPerView: 1,
//						slidesPerGroup: 1,
//						spaceBetween: 0,
//						loop: true
//					}
//				}
//		});

		//lounge Swiper
		var loungeSwiper = new Swiper('.loungeSwiper .swiper-container', {
			nextButton: '.loungeSwiper .swiper-button-next',
			prevButton: '.loungeSwiper .swiper-button-prev',
			slidesPerView:1,
			slidesPerGroup :1,
			loop: false,
			observer: true,
			observeParents: true
		});

	} else { //IE9 이하
		//Promotion Swiper(IE9 이하) : s
		var promotionSlider = $('.promotionVisual .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			auto: true,
			autoDelay:2500
		});
		$('.promotionVisual .btnControl').click(function(){
			if( $(this).hasClass( 'pause' ) ) {
				$( '.btnControl' ).removeClass( 'pause' );
				promotionSlider.startAuto();
			} else {
				$( '.btnControl' ).addClass( 'pause' );
				promotionSlider.stopAuto();
			}
		});
		//Promotion Swiper(IE9 이하) : e

		/* ticketWrap ~ promotionMainEvent 삭제(IE9 이하) */
		/*$('.ticketWrap .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 3,
			maxSlides: 3,
			slideMargin: 0,
			auto: true,
			autoDelay:3000,
		});

		var eventSlider = $('.promotionMainEvent .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 3,
			maxSlides: 3,
			slideMargin: 30,
			auto: true,
			autoDelay:3000,
		});

		$('.promotionMainEvent .swiper-wrapper .swiper-slide').mouseenter(function() {
			eventSlider.stopAuto();
		}).mouseleave(function() {
			eventSlider.startAuto();
		});

		$('.promotionMainEvent .swiper-wrapper .swiper-slide').on('mouseenter focusin', function() {
			eventSlider.stopAuto();
		});
		$('.promotionMainEvent .swiper-wrapper .swiper-slide').on('mouseleave focusout', function() {
			eventSlider.startAuto();
		});*/
		/* //ticketWrap ~ promotionMainEvent 삭제(IE9 이하) */

		//최저가 메인(IE9 이하) : s
		var lowestSlider = $('.lowestVisual .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1,
			slideMargin: 20,
			pager:false,
			infiniteLoop: false
		});
		//최저가 메인(IE9 이하) : e

		/* 2019-01-21 추가 */
		//채용 팝업
		var companySlider = $('.company_swiper .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			pager:false,
			auto: false,
		});
		/* // 2019-01-21 추가 */

		efuSlider2('.setArea', 1, 150, '', 'once');

		$('.aircraftSlide .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0,
			auto: true,
			autoDelay:3000,
		});

		//출도착 안내 조회결과 - IE 하위버전
		$('.realtimeSwiper .swiper-wrapper').bxSlider({
			slideWidth:5000,
			minSlides: 9,
			maxSlides: 15,
			moveSlides: 1,
			slideMargin: 0
		});

		//기내 유상판매 - IE 하위버전
		$('.cabinshopSwiper .swiper-wrapper').bxSlider({
			slideWidth:1120,
			minSlides: 1,
			maxSlides: 2,
			moveSlides: 1,
			slideMargin: 0
		});

		//로그인 배너 - IE 하위버전
		$('.loginSwiper .swiper-wrapper').bxSlider({
			slideWidth:550,
			minSlides: 1,
			maxSlides: 3,
			moveSlides: 1,
			slideMargin: 0
		});

		//lounge Swiper - IE 하위버전
		$('.loungeSwiper .swiper-wrapper').bxSlider({
			minSlides: 1,
			moveSlides: 1,
			slideMargin: 0,
			pager:false,
			infiniteLoop: false
		});
	}
})

//Main swiper(loop)
function getSlideIndex(swiper){
	var activeIndex = swiper.activeIndex,
	 		slidesLen = swiper.slides.length;

	if(swiper.params.loop) {
		switch(swiper.activeIndex) {
			case 0:
				activeIndex = slidesLen-2;
				break;
	    case slidesLen-1:
	      activeIndex = 1;
				//console.log(activeIndex);
	      break;
			default:
	    	activeIndex;
    }
	}
	return activeIndex;
}

function initMainSwiper() {
	if(browser.name != "msie" || (browser.name == "msie" && browser.version > 9)){
		//Main Swiper : s
		var mainSwiperAutoplay = $(document).find('.banner_wrap .swiper-container').find('li').length == 1 ? 0 : 5000;
		var mainSwiper = new Swiper('.banner_wrap .swiper-container', {
			//pagination
	    pagination: '.banner_wrap .swiper-pagination',
			paginationType: 'progress',
			nextButton: '.banner_wrap .swiper-button-next',
			prevButton: '.banner_wrap .swiper-button-prev',

			//slides grid
	    centeredSlides: true,
	    slidesPerView:1,
	    slidesPerGroup :1,

			//autoplay
			autoplay: mainSwiperAutoplay,
	    autoplayDisableOnInteraction: false,

			//loop
			loop: true,
			onInit: function(swiper) {
		    var num = document.querySelector( '.fraction' );
		    num.innerHTML = '<span class="current">' + (getSlideIndex(swiper)) + '</span>' + '/' + '<span>' + (swiper.slides.length - 2) + '</span>';
		  },
		  onSlideChangeEnd: function(swiper) {
		    var num = document.querySelector( '.fraction' );
				num.innerHTML = '<span class="current">' + (getSlideIndex(swiper)) + '</span>' + '/' + '<span>' + (swiper.slides.length - 2) + '</span>';
		  }
		});
		//function btn
		$('.banner_wrap .control').on( 'click', function () {
			if( $(this).hasClass( 'pause' ) ) {
				$( '.control' ).removeClass( 'pause' );
				mainSwiper.startAutoplay();
			} else {
				$( '.control' ).addClass( 'pause' );
				mainSwiper.stopAutoplay();
			}
		});
		//Main Swiper : e
	} else { //IE9 이하
		//Main Swiper(IE9 이하) : s
		var mainSlider = $('.banner_wrap .swiper-wrapper').bxSlider({
			minSlides: 1,
			slideMargin: 0,
			auto: true,
			autoDelay:5000
		});
		$('.banner_wrap .control').click(function(){
			if( $(this).hasClass( 'pause' ) ) {
				$( '.control' ).removeClass( 'pause' );
				mainSlider.startAuto();
			} else {
				$( '.control' ).addClass( 'pause' );
				mainSlider.stopAuto();
			}
		});
		//Main Swiper(IE9 이하) : e
	}
}

function initLoginPageSwiper() {
	return new Swiper('.loginSwiper .swiper-container', {
		nextButton: '.loginSwiper .swiper-button-next',
		prevButton: '.loginSwiper .swiper-button-prev',
		pagination: '.loginSwiper .swiper-pagination',
		slidesPerView: 1,
		slidesPerGroup :1,
		spaceBetween: 0,
		loop: true,
		breakpoints: {
			640: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 0,
				loop: true
			}
		}
	});
}
