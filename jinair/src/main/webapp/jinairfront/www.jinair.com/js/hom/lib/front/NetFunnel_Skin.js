if (typeof NetFunnel == "object") {
    NetFunnel.SkinUtil.add('nf_skin_eretail_eng', {
    	prepareCallback:function(){
    		/*var progress_print = document.getElementById("Progress_Print");
			progress_print.innerHTML="0 % (0/0) - 0 sec";*/
    	},
    	updateCallback:function(percent,nwait,totwait,timeleft){
    		/*var progress_print = document.getElementById("Progress_Print");
			var prog=totwait - nwait;
			progress_print.innerHTML=percent+" % ("+prog+"/"+totwait+") - "+timeleft+" sec";*/
    		var isMobileOS	= /iphone|ipad|ipod|android|windows ce|blackberry|symbian|windows phone|webos|opera mini|opera mobi|polaris|iemobile|lgtelecom|nokia|sonyericsson/i.test(navigator.userAgent.toLowerCase());
			document.getElementById("dialogFrame").style.width =  isMobileOS == true? "100%": "596px";
    		
    		var custom_timeLeft = document.getElementById("Custom_TimeLeft");
    		var timeLeftStr="";
    		if(timeleft >= (20*60)){
    			timeLeftStr="over 20 minutes";
    		}else{
    			
    			var timeLeftMin = parseInt(timeleft/60);
    			var timeLeftSec = timeleft %60;
    			timeLeftStr=  (timeLeftMin>0? timeLeftMin+"min.":"") + timeLeftSec +"sec. " ;  //<--- 시, 분, 초 계산 로직 등 추가
    		}
    		custom_timeLeft.innerHTML=timeLeftStr;
    	},
    	htmlStr: '<div id="dialogFrame" style="margin:0;padding:0;border:2px solid #8d9c1f;background:#fff;">\
    		<h1 style="margin:0;padding:18px 0 16px 25px;background:#bdd600;color:#fff;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;font-weight:normal;text-align:left;">Sorry, our homepage is currently <strong style="margin:0;padding:0;color:#579d46;">very crowded.</strong></h1>\
    		<div style="margin:0;padding:30px 25px 15px;">\
    		<p style="margin:0;padding:0;color:#354662;font-family: \'맑은고딕\', \'Malgun Gothic\';font-size:25px;font-weight:bold;text-align:center;letter-spacing:-1px;">You will be <span style="margin:0;padding:0;color:#fa5b3d;">automatically redirected</span> to Jin Air Homepage in consecutive order.</p>\
    		<ul style="overflow:hidden;margin:10px 0 20px;padding:0;list-style-type:none;font:0/0 a;text-align:center;">\
    			<li style="display:inline-block;height:30px;margin:0 23px 0 0;padding:0;color:#354662;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;line-height:30px;"><p style="display:inline-block;margin:0;padding:0 0 0 20px;"><img src="https://images.jinair.com/images/common/ico_time.gif" alt="" style="margin:0 8px 4px 0;border:none;vertical-align: middle;">Remaining Time :</p><span id="Custom_TimeLeft" style="margin:0;padding:0;color:#354662;font-size:15px;font-weight:bold;></span> </li>\
    		<li style="display:inline-block;height:30px;margin:0 10px 0 0;padding:0;color:#354662;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;line-height:30px;"><p style="display:inline-block;margin:0;padding:0;"> <img src="https://images.jinair.com/images/common/ico_person.gif" alt="" style="margin:0 8px 4px 0;border:none;vertical-align: middle;">Waiting Number :</p> <span style="margin:0;padding:0;color:#354662;font-weight:bold;">#</span><span id="NetFunnel_Loading_Popup_Count" style="margin:0;padding:0;color:#fb7863;font-size:15px;font-weight:bold;"></span></li>\
    		</ul>\
    		<div style="position:relative;width:100%;height:30px;margin:0;padding:0;background:#f4f3e0;">\
    		<div id="NetFunnel_Loading_Popup_Progressbar"  style="position:absolute;top:0;left:0;height:30px;margin:0;padding:0;width:100%;"></div>\
    		</div>\
    		</div>\
    		<div style="height:30px;margin:0;padding:20px 0 10px 20px;background:#eff4f5;color:#717373;font-family: \'맑은고딕\', \'Malgun Gothic\';font-size:11px;">- Waiting time may be longer if you refresh(F5), go back or revisit Jin Air Homepage.</div>\
    		</div>'
    }, 'normal');


    NetFunnel.SkinUtil.add('nf_skin_eretail', {
        prepareCallback:function(){
            /*var progress_print = document.getElementById("Progress_Print");
            progress_print.innerHTML="0 % (0/0) - 0 sec";*/
        },
        updateCallback:function(percent,nwait,totwait,timeleft){
            /*var progress_print = document.getElementById("Progress_Print");
            var prog=totwait - nwait;
            progress_print.innerHTML=percent+" % ("+prog+"/"+totwait+") - "+timeleft+" sec";*/
            var isMobileOS  = /iphone|ipad|ipod|android|windows ce|blackberry|symbian|windows phone|webos|opera mini|opera mobi|polaris|iemobile|lgtelecom|nokia|sonyericsson/i.test(navigator.userAgent.toLowerCase());
            document.getElementById("dialogFrame").style.width =  isMobileOS == true? "100%": "596px";
            
           /* var isAndroidOS =  /android/i.test(navigator.userAgent.toLowerCase());
            var instaDiv =  document.getElementById("btnInsta");
            if(isAndroidOS){
            	instaDiv.style.display = "none";
            }*/
            
            var custom_timeLeft = document.getElementById("Custom_TimeLeft");
            var timeLeftStr="";
            if(timeleft >= (20*60)){
                timeLeftStr="over 20 minutes";
            }else{
                
                var timeLeftMin = parseInt(timeleft/60);
                var timeLeftSec = timeleft %60;
                timeLeftStr=  (timeLeftMin>0? timeLeftMin+"min.":"") + timeLeftSec +"sec. " ;  //<--- 시, 분, 초 계산 로직 등 추가
            }
            custom_timeLeft.innerHTML=timeLeftStr;
        },
        htmlStr: '<div id="dialogFrame" style="margin: 0px; padding: 0px; border: 2px solid rgb(141, 156, 31); background: rgb(255, 255, 255); width: 350px;box-sizing:border-box;">\
            <h1 style="margin:0;padding:18px 0 16px 25px;background:#bdd600;color:#fff;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;font-weight:normal;text-align:left;">이용 고객이 많아 <strong style="margin:0;padding:0;color:#579d46;">접속 대기중</strong>입니다.</h1>\
            <div style="margin:0;padding:30px 25px 15px;">\
                <p style="margin:0;padding:0;color:#354662;font-family: \'맑은고딕\', \'Malgun Gothic\';font-size:30px;font-weight:bold;text-align:center;letter-spacing:-1px;">대기 순서에 따라<br/><span style="margin:0;padding:0;color:#fa5b3d;">자동 접속</span>됩니다.</p>\
                <ul style="overflow:hidden;margin:10px 0 20px;padding:0;list-style-type:none;font:0/0 a;text-align:center;">\
                    <li style="height:30px;margin:0 23px 0 0;padding:0;color:#354662;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;line-height:30px;"><p style="display:inline-block;margin:0;padding:0 0 0 20px;"> <img src="https://images.jinair.com/images/common/ico_time.gif" alt="" style="margin:0 8px 4px 0;border:none;vertical-align: middle;">예상 대기 시간 :</p> <span id="Custom_TimeLeft"></span> </li>\
                    <li style="height:30px;margin:0 10px 0 0;padding:0;color:#354662;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;line-height:30px;"><p style="display:inline-block;margin:0;padding:0;"> <img src="https://images.jinair.com/images/common/ico_person.gif" alt="" style="margin:0 8px 4px 0;border:none;vertical-align: middle;">현재 대기 순번 :</p> <span id="NetFunnel_Loading_Popup_Count" style="margin:0;padding:0;color:#fb7863;font-size:15px;font-weight:bold;">331</span><span style="margin:0;padding:0;color:#354662;font-weight:bold;">번째</span></li>\
                </ul>\
                <div style="position:relative;width:100%;height:30px;margin:0;padding:0;background:#f4f3e0;">\
                    <div id="NetFunnel_Loading_Popup_Progressbar"  style="position:absolute;top:0;left:0;height:30px;margin:0;padding:0;width:100%;"></div>\
                </div>\
            </div>\
            <div style="height:30px;margin:0;padding:20px 0 10px 20px;background:#eff4f5;color:#717373;font-family: \'맑은고딕\', \'Malgun Gothic\';font-size:11px;">- 재접속하시면 대기시간이 더 길어집니다.</div>\
        	</div>'
    }, 'mobile');
    
    NetFunnel.SkinUtil.add('nf_skin_eretail', {
    	prepareCallback:function(){
			/*var progress_print = document.getElementById("Progress_Print");
			progress_print.innerHTML="0 % (0/0) - 0 sec";*/
		},
		updateCallback:function(percent,nwait,totwait,timeleft){
			/*var progress_print = document.getElementById("Progress_Print");
			var prog=totwait - nwait;
			progress_print.innerHTML=percent+" % ("+prog+"/"+totwait+") - "+timeleft+" sec";*/
			var isMobileOS	= /iphone|ipad|ipod|android|windows ce|blackberry|symbian|windows phone|webos|opera mini|opera mobi|polaris|iemobile|lgtelecom|nokia|sonyericsson/i.test(navigator.userAgent.toLowerCase());
			document.getElementById("dialogFrame").style.width =  isMobileOS == true? "100%": "596px";
			
			var custom_timeLeft = document.getElementById("Custom_TimeLeft");
			var timeLeftStr="";
			if(timeleft >= (20*60)){
				timeLeftStr="20분 이상";
			}else{
				
			    var timeLeftMin = parseInt(timeleft/60);
			    var timeLeftSec = timeleft %60;
				timeLeftStr=  (timeLeftMin>0? timeLeftMin+"분":"") + timeLeftSec +"초 " ;  //<--- 시, 분, 초 계산 로직 등 추가
			}
			custom_timeLeft.innerHTML=timeLeftStr;

            // var progress_print = document.getElementById("NetFunnel_Loading_Popup_Progressbar");
            // var prog = totwait - nwait;
            // progress_print.style.width = percent + "%";
            // console.log("updateCallback : " + progress_print.style.width);
		},
        htmlStr: '<div id="dialogFrame" style="margin:0;padding:0;border:2px solid #8d9c1f;background:#fff;">\
        	<h1 style="margin:0;padding:18px 0 16px 25px;background:#bdd600;color:#fff;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;font-weight:normal;text-align:left;">홈페이지 이용 고객이 많아 <strong style="margin:0;padding:0;color:#579d46;">접속 대기중</strong>입니다.</h1>\
        	<div style="margin:0;padding:30px 25px 15px;">\
        		<p style="margin:0;padding:0;color:#354662;font-family: \'맑은고딕\', \'Malgun Gothic\';font-size:30px;font-weight:bold;text-align:center;letter-spacing:-1px;">대기 순서에 따라 <span style="margin:0;padding:0;color:#fa5b3d;">자동 접속</span>됩니다.</p>\
        		<ul style="overflow:hidden;margin:10px 0 20px;padding:0;list-style-type:none;font:0/0 a;text-align:center;">\
        			<li style="display:inline-block;height:30px;margin:0 23px 0 0;padding:0;color:#354662;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;line-height:30px;"><p style="display:inline-block;margin:0;padding:0 0 0 20px;"> <img src="https://images.jinair.com/images/common/ico_time.gif" alt="" style="margin:0 8px 4px 0;border:none;vertical-align: middle;">예상 대기 시간 :</p> <span id="Custom_TimeLeft"></span> </li>\
        			<li style="display:inline-block;height:30px;margin:0 10px 0 0;padding:0;color:#354662;font-family:\'맑은고딕\', \'Malgun Gothic\';font-size:15px;line-height:30px;"><p style="display:inline-block;margin:0;padding:0;"> <img src="https://images.jinair.com/images/common/ico_person.gif" alt="" style="margin:0 8px 4px 0;border:none;vertical-align: middle;">현재 대기 순번 :</p> <span id="NetFunnel_Loading_Popup_Count" style="margin:0;padding:0;color:#fb7863;font-size:15px;font-weight:bold;">331</span><span style="margin:0;padding:0;color:#354662;font-weight:bold;">번째</span></li>\
        		</ul>\
        		<div style="position:relative;width:100%;height:30px;margin:0;padding:0;background:#f4f3e0;">\
                    <div id="NetFunnel_Loading_Popup_Progressbar"  style="position:absolute;top:0;left:0;height:30px;margin:0;padding:0;width:100%;"></div>\
        		</div>\
        	</div>\
        	<div style="height:30px;margin:0;padding:20px 0 10px 20px;background:#eff4f5;color:#717373;font-family: \'맑은고딕\', \'Malgun Gothic\';font-size:11px;">- 새로고침, 뒤로가기 또는 재접속하시면 대기시간이 더 길어집니다.</div>\
        </div>'
    }, 'normal');
}