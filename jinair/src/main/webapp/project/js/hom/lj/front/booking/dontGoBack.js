// 브라우저 - 뒤로가기
history.pushState(null, null, location.href);
window.onpopstate = function(event) {

	history.go(1);
};

$(document).keydown(function(e) {
    key = (e) ? e.keyCode : event.keyCode;
     
    var t = document.activeElement;
     
    if ( key == 116 || key == 8 || key == 17 || key == 82) {
        if (key == 8 || key == 17 || key == 82) {
            if (t.tagName != "INPUT") {
                if (e) {
                    e.preventDefault();
                } else {
                    event.keyCode = 0;
                    event.returnValue = false;
                }
            }
        } else {
            if (e) {
                e.preventDefault();
            } else {
                event.keyCode = 0;
                event.returnValue = false;
            }
        }
    }
});