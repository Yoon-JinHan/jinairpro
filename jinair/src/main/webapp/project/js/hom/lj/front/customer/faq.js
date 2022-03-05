/**
 * Front FAQ 조회 
 */
$(document).ready(function(){
	
	//소분류 박스 이외에 다른 곳 클릭시 소분류박스 사라지게
	$("body").click(function(e){
		if (!$(e.target).hasClass("checkClose")) {
			$( '.tabFaq .tabTypeA > li' ).removeClass( 'active' );
		}
	});
	
	//대분류 클릭시
	$(document).on('click', 'a.searchFAQ', function(e){
		var ctgrCd = e.target.getAttribute('id');
		var word = $.trim($('#word').val());
		
		$('#searchForm').find('input[name=searchWord]').val(word == $('#word').attr('placeholder') ? "" : word);
		$('#searchForm').find('input[name=searchCtgrCd]').val(ctgrCd);
		$('#searchForm').find('input[name=searchCtgrDtlCd]').val("");
		$('#searchForm').submit();
	});
	
	//소분류 클릭시
	$(document).on('click', 'a.searchDtlFAQ', function(e){
		var ctgrCd = e.target.getAttribute('id');
		var word = $.trim($('#word').val());
		
		$('#searchForm').find('input[name=searchWord]').val(word == $('#word').attr('placeholder') ? "" : word);
		$('#searchForm').find('input[name=searchCtgrDtlCd]').val(ctgrCd);
		$('#searchForm').submit();
	});
	
	
	$(document).on('click', '#btnSearch', function(){
		var word = $.trim($('#word').val());
		if(word == $('#word').attr('placeholder')){
			$('#searchForm').find('input[name=searchWord]').val("");
		} else {
			$('#searchForm').find('input[name=searchWord]').val(word);
		}
	
		$('#searchForm').submit();
	});
	
	$( '.tabFaq .tabTypeA > li' ).on( 'click', function() {
		var tabType = $(this).index();
		
		$( '.tabFaq .tabTypeA > li' ).each(function(index) {
			$(this).addClass( 'choice' );
			
			if(tabType != index){
				$(this).removeClass( 'choice active' );
			}
		});
	});
	
	$( '.tabFaq .tabTypeA > li > a' ).on( 'click', function() {
		$(this).parent().toggleClass( 'active' );
	});
	$( '.sub_depth .close a' ).click(function(){ 
		$( '.tabFaq .tabTypeA > li' ).removeClass( 'active' );
	});
});

function showFaq(obj){
	var target = $(obj).attr("href");
	$(obj).toggleClass("on");
	$(target).add($(target).find("td")).toggle();
	var faqSeq = $(obj).parent().parent().parent().attr("id");
	
	if ("done" != getCookie("faq" + faqSeq)) {
		$.ajax({
			url : "/customer/faq/updateFaqViewCnt",
			type : 'post',
			data : {"faqSeq": faqSeq},
			beforeSend: function(xhr) {
				var	csrfHeader	= $('meta[name="_csrf_header"]').attr('content');
				var	csrfToken	= $('meta[name="_csrf"]').attr('content');
				xhr.setRequestHeader(csrfHeader, csrfToken);
			},
			dataType : "text",
			success : function(data) {
				if (data == 'S') {
					setCookie("faq" + faqSeq, "done", 1);
				}
			},
			error:function(request, status, error) {
				//console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
		});
	}
}
function hideFaq(obj){
	var target = $(obj).parents(".faqCont");
	target.prev("tr").find(".question a").removeClass("on");
	target.add(target.find("td")).hide();
}
/*엔터입력시 submit*/
function enterCheck() {
	var evt_code = (window.netscape) ? event.which : event.keyCode;
	if (evt_code == 13) {
		event.keyCode = 0;
		$("#btnSearch").trigger('click');
	}
}