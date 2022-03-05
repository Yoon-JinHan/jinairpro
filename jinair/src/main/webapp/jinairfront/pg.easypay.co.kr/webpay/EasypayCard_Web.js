var mprotocol   = window.location.protocol;
var mappversion = window.navigator.appVersion;
var https_flag  = false;
var kicc_frm;
var kicc_pg = "pg";
var xmlHttp;

var protocol = "https://";
if(window.location.protocol != "https:"){
     protocol = "http://"
}
    


if(mprotocol == 'https:')
{
   https_flag = true;
}


		function createXMLHttpRequest() {

			if(window.ActiveXObject) {

				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

			} else if(window.XMLHttpRequest) {

				xmlHttp = new XMLHttpRequest();

			}

		}

	

		function sendKiccData(url,params) {

			createXMLHttpRequest();

			if(!xmlHttp)
			{
				
				return false;
				
			}
			
			
			

			xmlHttp.open("POST", url, false);
			//Send the proper header information along with the request
      xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlHttp.onreadystatechange = loader;
   
			xmlHttp.send(params);
			
			

		}

	

		function loader() {

			if(xmlHttp.readyState == 4) {

				if(xmlHttp.status == 200) {

					temp = xmlHttp.responseText;

					

				}

			}

		}
		

function EASYPAY_form_pos(frm,defaultWinX,defaultWinY,windowType,formType,inputCd)
{
   var returnval = new Array(4);
   var CardCode;
   var retPopup;
   var popOpt;
   var codeCd;
   var popW = 410;
   var popH = 420;
   
   var x = window.screenLeft; 
   var y = window.screenTop; 
   var basicwindow = null;
   basicwindow = window;
   
   x = basicwindow.screenLeft; 
   y = basicwindow.screenTop; 
   
   var leftPos = basicwindow.outerWidth  > popW ? ( ( ( basicwindow.outerWidth  - popW ) / 2 ) + x      ) : 100;
   var topPos  = basicwindow.outerHeight > popH ? ( ( ( basicwindow.outerHeight - popH ) / 2 ) + y - 20 ) : 100;
   
   if(defaultWinX == undefined || defaultWinX == "")
   {
      returnval[0] = topPos;
   }
   else
   {
      returnval[0] = defaultWinX;
   }
   
   if(defaultWinY == undefined || defaultWinY == "")
   {
      returnval[1] = leftPos;
   }
   else
   {
      returnval[1] = defaultWinY;
   }
   
   if(formType == "card")
   {
      if(codeCd == undefined)
      {
         
         codeCd = "999";
         
         if(frm.EP_card_cd != undefined)
         {
            
            codeCd = frm.EP_card_cd.value;
            
         }else if(frm.sp_card_cd != undefined)
         {
            
            codeCd = "999";
            
         }
         
      }
      else
      {    
         codeCd = inputCd;            
      } 
      
      if(windowType == "iframe")
      {
		 			if( codeCd == "031" )
		      { /**삼성카드 MPI **/
		         popW = 410;
		         popH = 450;
		      }  
		      else if( codeCd == "027")
		      { /**현대카드 MPI **/
		         popW = 390;
		         popH = 450;
		      }  
		      else if( codeCd == "047")
		      { /**롯데카드 MPI **/
		         popW = 650;
		         popH = 490;
		      }  
		      else if( codeCd == "029")
		      { /**신한카드 MPI **/
		         popW = 400;
		         popH = 440;
		      }  
		      else if( codeCd == "008")
		      { /**하나(외환) MPI **/
		         popW = 620;
		         popH = 500;
		      }  
		      else if( codeCd == "018")
		      { /**NH농협 MPI **/
		         popW = 400;
		         popH = 400;
		      }  
		      else if( codeCd == "006")
		      { /**하나카드 MPI **/
		         popW = 630;
		         popH = 440;
		      }  
		      else if( codeCd == "022")
		      { /**씨티카드 MPI**/
		         popW = 640;
		         popH = 480;
		      }          
		      else if( codeCd == "050")
		      { /**비자**/
		         popW = 620;
		         popH = 460;
		      }  
		      else if( codeCd == "049")
		      { /**마스터**/
		         popW = 620;
		         popH = 460;
		      }  
		      else if( codeCd == "046")
			  { /**아멕스**/
		    	  popW = 550;
		    	  popH = 550;
			  }
		      else if( codeCd == "028")
		      { /**JCB**/
		         popW = 620;
		         popH = 460;
		      } 
              else if( codeCd == "016")
              { /**KB**/
                  if(frm.EP_kmotion_close != undefined && frm.EP_kmotion_close.value == "Y" 
                	  && frm.EP_kmotion_useyn != undefined && (frm.EP_kmotion_useyn.value == "Y" || frm.EP_kmotion_useyn.value == "M" )){
                     popW = 460;
                     popH = 550;
                  }else{
                     popW = -1;
                     popH = -1;
                     returnval[0] = 0;
                     returnval[1] = 0;
                  }
              }
              else if( codeCd == "021")
              { /**Woori**/
                  if(frm.EP_wooripay_useyn != undefined && frm.EP_wooripay_useyn.value == "Y" ){
                     popW = 600;
                     popH = 517;
                  }else{
                     popW = -1;
                     popH = -1;
                     returnval[0] = 0;
                     returnval[1] = 0;
                  }
              }		 			
		      else if(codeCd == "999")
		      {
		            popW = -2;
		            popH = -2;
		            returnval[0] = 0;
		            returnval[1] = 0; 
		            
		      }else
		      {
		          popW = -1;
		          popH = -1;
		          returnval[0] = 0;
		          returnval[1] = 0; 
		      }    
			}else {
				
					 if( codeCd == "031" )
		      { /**삼성카드 MPI **/
		         popW = 410;
		         popH = 500;
		      }  
		      else if( codeCd == "027")
		      { /**현대카드 MPI **/
		         popW = 390;
		         popH = 480;
		      }  
		      else if( codeCd == "047")
		      { /**롯데카드 MPI **/
		         popW = 650;
		         popH = 490;
		      }  
		      else if( codeCd == "029")
		      { /**신한카드 MPI **/
		         popW = 400;
		         popH = 480;
		      }  
		      else if( codeCd == "008")
		      { /**하나(외환) MPI **/
		         popW = 620;
		         popH = 500;
		      }  
		      else if( codeCd == "018")
		      { /**NH농협 MPI **/
		         popW = 440;
		         popH = 600;
		      }  
		      else if( codeCd == "006")
		      { /**하나카드 MPI **/
		         popW = 630;
		         popH = 460;
		      }  
		      else if( codeCd == "022")
		      { /**씨티카드 MPI**/
		         popW = 680;
		         popH = 480;
		      }          
		      else if( codeCd == "050")
		      { /**비자**/
		         popW = 620;
		         popH = 460;
		      }  
		      else if( codeCd == "049")
		      { /**마스터**/
		         popW = 620;
		         popH = 460;
		      }  
		      else if( codeCd == "028")
		      { /**JCB**/
		         popW = 620;
		         popH = 460;
		      } 
		      else if(codeCd == "999")
		      {
		            popW = -2;
		            popH = -2;
		            returnval[0] = 0;		            
		            returnval[1] = 0; 
		            
		      }else
		      {
		          popW = 600;
		          popH = 500;    
		      }
				
			}   
   }
   else if(formType == "webpay")
   {
      popW = -3;
      popH = -3;   
      returnval[0] = 0;
      returnval[1] = 0;                  
   }
   
   returnval[2] = popH;
   returnval[3] = popW;
   
   return returnval;
}





function EASYPAY_card_popup(frm, pop_name,defaultWinX,defaultWinY,windowType,cardCd)
{           
	 
   var returnPos = EASYPAY_form_pos(frm,defaultWinX,defaultWinY,windowType,"card",cardCd);
   popOpt = "top=" + returnPos[0] + ",left=" + returnPos[1] + ", height=" + returnPos[2] + ", width=" + returnPos[3] + ","; 
   popOpt += "dependent=yes, status=no, minimizable=no, fullscreen=no, location=no, scrollbars=no, menubar=no, toolbar=no, titlebar=no, directories=no, resizable=no"; 
   retPopup = window.open( "", pop_name, popOpt );
   retPopup.focus();
   return retPopup;
}

function EASYPAY_webpay_popup( frm, pop_name,defaultWinX,defaultWinY)
{ 
	 
   var returnPos = EASYPAY_form_pos(frm,defaultWinX,defaultWinY,"webpay","-1");
   popOpt = "top=" + returnPos[0] + ",left=" + returnPos[1] + ", height=" + returnPos[2] + ", width=" + returnPos[3] + ","; 
   popOpt += "dependent=yes, status=no, minimizable=no, fullscreen=no, location=no, scrollbars=no, menubar=no, toolbar=no, titlebar=no, directories=no, resizable=no"; 
   retPopup = window.open( "", pop_name, popOpt );
   
   return retPopup;
}

// DirectCard에서 사용
function easypay_card_webpay(formid,URL,popupName,iPopUpWinX,iPopUpWinY, window_type,opacity,cardCd, rgbPer)
{
   /*
   var iScreenWidth = screen.availWidth;
   var iScreenHeight = screen.availHeight;
   var iPointX = (iScreenWidth - iPopUpWinX) / 2;
   var iPointY = (iScreenHeight - iPopUpWinY) / 2; 
   */
   kicc_frm = formid;  
   if(window_type != null && window_type == "iframe" )
   {
      var attachElement = document.body;
      var newDiv;
      var element = document.getElementById("KICC_PAYMENTWINDOW_POPUP");
      
      if(element != null)
      {
         element.parentNode.removeChild(element);
      }
      
      var returnPos =   EASYPAY_form_pos(formid,iPopUpWinX,iPopUpWinY,window_type,"card",cardCd);
      var installpop = '';
      var heightPx = '';
      var iframeHeightPx = '';
      var iframeWidthPx = '';
      var iframeTopMarginPx = '';
      
     var backgroudColor = '';

     if(returnPos[2] != -1)
      {
        backgroudColor = 'white';
     }else{

        backgroudColor = 'transparent';
     }
     
    if(rgbPer == undefined){
    	rgbPer = 0;
    }
      
 	var rgbRed		= parseInt(255 * rgbPer) ;
	var rgbGreen	= parseInt(255 * rgbPer) ;
	var rgbBlue		= parseInt(255 * rgbPer) ;
	var rgbColor    = "#7F000000";

	if( rgbPer < 0.1 ) {
		rgbColor = "#9F000000";
	}else if (rgbPer >= 0.1 && rgbPer < 0.3 ){
		rgbColor = "#7F000000";
	}else if (rgbPer >= 0.3 && rgbPer < 0.5 ){
		rgbColor = "#5F000000";
	}else if (rgbPer >= 0.5 && rgbPer < 0.7 ){
		rgbColor = "#3F000000";
	}else{
		rgbColor = "#00000000";
	}
	var pBackground = "";
	var	pFilter = "";

	if(rgbPer >= 1){
		pBackground = "";
		pFilter ="";
	}else{
		pBackground = "background: rgba("+rgbRed+", "+rgbGreen+", "+rgbBlue+", 0.5);";
		pFilter ="filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="+rgbColor+",endColorstr="+rgbColor+");";
	}
	

    installpop += '<div id="KICC_FADE" style=" position: fixed;  z-index:2147483600; width: 100% ; height:100%;  top : 0px ; left : 0px; ';
    installpop +=  pBackground;
    installpop +=  pFilter;
    //installpop +=  'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000); ';
    installpop +=  'background-image: url(\''+protocol+ kicc_pg +'.easypay.co.kr/img/webpay/transparent.png\'); zoom: 1; ">';
    installpop += '<div id="KICC_PAYMENTWINDOW_POPUP"  class="white_content" scrolling="no" style="position: relative; display: none; left: 0; right: 0;  margin-left: auto;  margin-right: auto; z-index:2147483601; overflow:visible">';
   	if( formid.EP_card_cd		!= undefined && formid.EP_card_cd.value == "016"    
   		&& formid.EP_kmotion_close != undefined && formid.EP_kmotion_close.value == "Y"
   		&& formid.EP_kmotion_useyn != undefined && (formid.EP_kmotion_useyn.value == "Y" || formid.EP_kmotion_useyn.value == "M" )){
   		installpop += '<div id="KICC_PAYMENTWINDOW_BG" style="float: right; clear : both; height : 93%; width : 100%; background-color : '+backgroudColor+';  z-index:2147483602; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
   	}else{
   		installpop += '<div id="KICC_PAYMENTWINDOW_BG"  style="float: right; clear : both; height : 100%; width : 100%; background-color : '+backgroudColor+';  z-index:2147483602; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
   	}
    
      

//installpop += '<div style="float: right; clear : both; height : 100%; width : 100%; text-align : right; margin-right : 0px; background-color : transparent; z-index:2147483647; "><img align="right"  style="cursor:pointer; margin:10px; background-image:url(\''+protocol+kicc_pg+'.easypay.co.kr/img/66_black.png\'); background-size:22px; border:0px; width:22px; height:22px;"  onclick="javascript:kicc_popup_close();" /></div>';   



    if(returnPos[2] != -1 && returnPos[2] != -2)
    {
    	var closedPosition = "";//iframe Kmotion 
	   	if( formid.EP_card_cd		!= undefined && (formid.EP_card_cd.value == "016")  
	   		&& formid.EP_kmotion_close != undefined && formid.EP_kmotion_close.value == "Y"  
	   		&& formid.EP_kmotion_useyn != undefined && ( formid.EP_kmotion_useyn.value == "Y" || formid.EP_kmotion_useyn.value == "M" )){
   				iframeTopMarginPx = '0%';	
   				closedPosition = " position:relative;";
    	}else{
    			iframeTopMarginPx = '7%';
    	}
	   	installpop += '<div id="KICC_PAYMENTWINDOW_POPUP_CLOSE" style="float:right; clear : both;'+closedPosition+' height : 7%; width : 100%; text-align : right; margin-right : 0px; background-color : transparent; z-index:2147483605; ">';
	   	if(formid.EP_kiccpopup_close == undefined || formid.EP_kiccpopup_close.value != "N"){
	   		installpop += '<img src="'+protocol+kicc_pg+'.easypay.co.kr/img/66_gray.png" tabindex="0" alt= "close" style="cursor:pointer; margin:10px; border:0px; width:18px; height:18px;"  onclick="javascript:kicc_popup_close();" />';
	   	}
	   	installpop += '</div>';
        heightPx = '95%';
        iframeHeightPx = '95%';
        iframeWidthPx = '100%';
    }
    else
    {
        heightPx = '100%';
        iframeHeightPx = '100%';
        iframeWidthPx = '100%';
        iframeTopMarginPx = '0%';
    }
    
      
    installpop += '<div width="100%"  style="float: left; clear : both; ; height : '+heightPx+' ; width : 100% ; overflow: hidden;">';
    installpop += '<iframe name="'+popupName+'" id="KICC_PAYMENTWINDOW_IFRAME" title="PC Payment Window_Iframe" allowtransparency="false"';
    installpop += ' src="" frameborder=no scrolling="no" style="position: absolute; width : '+iframeWidthPx+'; height : '+iframeHeightPx+'; display:block; overflow: hidden;'; 
    installpop += 'z-index:2147483604; left:0; top:'+iframeTopMarginPx+'; overflow: hidden;">';
    installpop += '</iframe></div></div></div>';
    installpop += '</div>';
      
      newDiv = document.createElement("div");
      
      newDiv.innerHTML = installpop;
      
      attachElement.appendChild(newDiv);
      
      if(returnPos[2] == -1)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
         
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onresize = function()
         {
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "100%";
         }
      }
      else if(returnPos[2] == -2)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
         
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onresize = function()
         {
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "100%";
         }


         
          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onload = function(e){

          };

      }
      else if(returnPos[2] == -3)
      {
      	 //document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "686px";
         //document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "630px";      
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "686px";
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "630px";      
      	 document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "686px";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "606px";      
         

      }
      else
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  returnPos[3]+"px";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = (returnPos[2]+20)+"px";      
      }
      // jsmun, 201803 계좌이체 iframe의 경우 사이즈 조정
      if(formid != undefined ){
    	  var payTypeVal = f_chkToVal("EP_pay_type");
          if(payTypeVal == "21"){
	          document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "722px";
	          document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "650px";
	          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "722px";
	          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "650px";
          }
      }
      
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.padding =  "0px";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.border =  "0px solid orange";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.backgroundColor =  "";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.overflow = "visible";
      
      if(returnPos[2] == -1)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
      }else if(returnPos[2] == -2)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
      }
      else
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "15%";
      }         
      
      /*document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  returnPos[0]+"px";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.left = returnPos[1]+"px";*/
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.display='block';
   }
   else if(window_type != null && window_type == "submit")
   {
      
   }
   else if(window_type != null && window_type == "popup")
   {
      var newWindow = EASYPAY_card_popup(formid,popupName,iPopUpWinX,iPopUpWinY,window_type,cardCd);
      if(!newWindow)
      {
         alert("BLOWER SETTING POPUP NOT ALLOWED ");
         return;
      }
   }
   
   formid.target = popupName;
   formid.action = URL;
   formid.submit();
}

function easypay_webpay(formid,URL,popupName,iPopUpWinX,iPopUpWinY, window_type,opacity,cardCd)
{
   /*
   var iScreenWidth = screen.availWidth;
   var iScreenHeight = screen.availHeight;
   var iPointX = (iScreenWidth - iPopUpWinX) / 2;
   var iPointY = (iScreenHeight - iPopUpWinY) / 2; 
   */
   kicc_frm = formid;
   
   if(window_type != null && window_type == "iframe" )
   {
      var attachElement = document.body;
      var newDiv;
      var element = document.getElementById("KICC_PAYMENTWINDOW_POPUP");
      
      if(element != null)
      {
         element.parentNode.removeChild(element);
      }
   
      var returnPos =    EASYPAY_form_pos(formid,iPopUpWinX,iPopUpWinY,window_type,"webpay","-1");
      var installpop = '';
      var heightPx = '';
      var iframeWidthPx = '';
      var iframeHeightPx = '';
      var iframeTopMarginPx = '';
     var backgroudColor = '';

     if(returnPos[2] != -1)
      {
        backgroudColor = 'white';
     }else{

        backgroudColor = 'transparent';
     }
      

    installpop += '<div id="KICC_FADE" style="overflow-y:auto;-ms-overflow-style:none; position: fixed;  z-index:2147483646; width: 100% ; height:100%;  top : 0px ; left : 0px; background: rgba(0, 0, 0, 0.5); ';
    installpop +=  'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000); ';
    installpop +=  'background-image: url(\''+protocol+kicc_pg+'.easypay.co.kr/img/webpay/transparent.png\'); zoom: 1; ">';
    installpop += '<div id="KICC_PAYMENTWINDOW_POPUP"  class="white_content" scrolling="no" style="position: relative; display: none; left: 0; right: 0;  margin-left: auto;  margin-right: auto; z-index:2147483647; overflow: visible">';
    installpop += '<div style="float: right; clear : both; height : 100%; width : 100%; background-color : '+backgroudColor+';  z-index:2147483646; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
      
//installpop += '<div style="float: right; clear : both; height : 7%; width : 100%; text-align : right; margin-right : 0px; background-color : transparent; z-index:2147483647; "><img align="right"  style="cursor:pointer; margin:10px; background-image:url(\''+protocol+kicc_pg+'.easypay.co.kr/img/66_black.png\'); background-size:22px; border:0px; width:22px; height:22px;"  onclick="javascript:kicc_popup_close();" /></div>';   

    if(returnPos[2] != -1 && returnPos[2] != -2)
    {
        installpop += '<div style="float: right; clear : both; height : 7%; width : 100%; text-align : right; margin-right : 0px; background-color : transparent; z-index:2147483647; ">';
        if(formid.EP_kiccpopup_close == undefined || formid.EP_kiccpopup_close.value != "N"){
        	installpop += '<img src="'+protocol+kicc_pg+'.easypay.co.kr/img/66_gray.png" tabindex="0" alt="close" style="cursor:pointer; margin:10px; border:0px; width:18px; height:18px;"  onclick="javascript:kicc_popup_close();" />';
        }
        installpop += '</div>';
        heightPx = '95%';
        iframeWidthPx = '100%';
        iframeHeightPx = '95%';
        iframeTopMarginPx = '7%';
    }
    else
    {
        heightPx = '100%';
        iframeWidthPx = '100%';
        iframeHeightPx = '100%';
        iframeTopMarginPx = '0%';
    }
      
    installpop += '<div width="100%"  style="float: left; clear : both; ; height : '+heightPx+' ; width : 100% ; overflow: hidden;">';
    installpop += '<iframe name="'+popupName+'" id="KICC_PAYMENTWINDOW_IFRAME"  title="PC Payment Window_Iframe" allowtransparency="false"';
    installpop += ' src="" frameborder=no scrolling="no" style="position: absolute; width : '+iframeWidthPx+'; height : '+iframeHeightPx+'; display:block; overflow: hidden;'; 
    installpop += 'z-index:2147483647; left:0; top:'+iframeTopMarginPx+'; overflow: hidden;">';
    installpop += '</iframe></div></div></div>';
    installpop += '</div>';
      
      newDiv = document.createElement("div");
      
      newDiv.innerHTML = installpop;
      
      attachElement.appendChild(newDiv);
      
      if(returnPos[2] == -1)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
         
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onresize = function()
         {
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "100%";
         }
      }
      else if(returnPos[2] == -2)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
         
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onresize = function()
         {
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "100%";
         }


         
          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onload = function(e){

          };

      }
      else if(returnPos[2] == -3)
      {
      	
      	 document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "686px";
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "620px";      
      	 document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "686px";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "596px";      

      }
      
      else
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  returnPos[3]+"px";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = (returnPos[2]+20)+"px";      
      }

      // jsmun, 201803 계좌이체 iframe의 경우 사이즈 조정
      if(formid != undefined ){
    	  var payTypeVal = f_chkToVal("EP_pay_type");
          if(payTypeVal == "21"){
	          document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "722px";
	          document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "650px";
	          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "722px";
	          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "650px";
          }
      }
      
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.padding =  "0px";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.border =  "0px solid orange";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.backgroundColor =  "";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.overflow = "visible";
      
      if(returnPos[2] == -1)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
      }else if(returnPos[2] == -2)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
      }
      else
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "5%";
  		// IE의 경우에 통합결제창에서 스크롤바 제거. IE9이하의 경우에 아래 CSS가 적용되지 않아 예외처리함. 
        var userAgent = navigator.userAgent.toLowerCase();
        if(!(userAgent.search("msie 5") != -1 || userAgent.search("msie 6") != -1 || userAgent.search("msie 7") != -1 || userAgent.search("msie 8") != -1 || userAgent.search("msie 9") != -1)) {
        	 try{
	 			 var KICC_FADE_SCROLL = document.createElement("style");
	 		   	 KICC_FADE_SCROLL.innerHTML = "#KICC_FADE::-webkit-scrollbar{display:none}";
	 			 attachElement.appendChild(KICC_FADE_SCROLL);
        	 }catch(exception){}
 		}
      }         
      
      /*document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  returnPos[0]+"px";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.left = returnPos[1]+"px";*/
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.display='block';
   }
   else if(window_type != null && window_type == "submit")
   {
      
   }
   else if(window_type != null && window_type == "popup")
   {
      var newWindow = EASYPAY_card_popup(formid,popupName,iPopUpWinX,iPopUpWinY,window_type,cardCd);
      if(!newWindow)
      {
         alert("BLOWER SETTING POPUP NOT ALLOWED ");
         return;
      }
   }
   
   formid.target = popupName;
   formid.action = URL;
   formid.submit();
}

function kicc_show_html_message(width,height,top_margin,isClose,message)
{
   /*
   var iScreenWidth = screen.availWidth;
   var iScreenHeight = screen.availHeight;
   var iPointX = (iScreenWidth - iPopUpWinX) / 2;
   var iPointY = (iScreenHeight - iPopUpWinY) / 2; 
   */
   
      var attachElement = document.body;
      var newDiv;
      var element = document.getElementById("KICC_PAYMENTWINDOW_POPUP");
      
      if(element != null)
      {
         element.parentNode.removeChild(element);
      }
      
      var installpop = '';
      var heightPx = '';
      var backgroudColor = '';
			
      
      

    installpop += '<div id="KICC_FADE" style=" position: fixed;  z-index:2147483646; width: 100% ; height:100%;  top : 0px ; left : 0px; background: rgba(0, 0, 0, 0.5); ';
    installpop +=  'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000); ';
    installpop +=  'background-image: url(\''+protocol+kicc_pg+'.easypay.co.kr/img/webpay/transparent.png\'); zoom: 1; ">';
    installpop += '<div id="KICC_PAYMENTWINDOW_POPUP"  class="white_content" scrolling="no" style="position: relative;height : '+height+'; width : '+width+'; display: none; left: 0; right: 0;  margin-left: auto;  margin-right: auto; z-index:2147483647;">';
    installpop += '<div style="float: right; clear : both; height : 100%; width : 100%; background-color : white;  z-index:2147483646; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
      
		
    
     if(isClose == true)
    {
        installpop += '<div style="float: right; clear : both; height : 42px; width : 100%; text-align : right; margin-right : 0px; background-color : transparent; z-index:2147483647; "><img src="'+protocol+kicc_pg+'.easypay.co.kr/img/66_gray.png" tabindex="0" alt="close" style="cursor:pointer; margin:10px; border:0px; width:18px; height:18px;"  onclick="javascript:kicc_popup_close();" /></div>';   
        heightPx = '95%';
        
    }
    else
    {
        heightPx = '100%';
      
    }
    
    
    installpop += '<div width="100%"  style="float: left; clear : both; ; height : '+heightPx+' ; width : 100% ; overflow: hidden;">';
    installpop += message;
    installpop += '</div></div></div>';
    installpop += '</div>';
      
      newDiv = document.createElement("div");
      
      newDiv.innerHTML = installpop;
      
      attachElement.appendChild(newDiv);
      
      
      
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.padding =  "0px";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.border =  "0px solid orange";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.backgroundColor =  "";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.overflow = "visible";
      
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  top_margin;
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.display='block';
   
  
}


function kicc_popup_close()
{
	 
	 kicc_cust_popup_close();
	 
   document.getElementById('KICC_PAYMENTWINDOW_POPUP').style.display='none';
   document.getElementById('KICC_FADE').style.display='none';

   var element = document.getElementById("KICC_PAYMENTWINDOW_POPUP");

   if(element != null)
   {
      element.parentNode.removeChild(element);
   }

   var elementFade = document.getElementById("KICC_FADE");

   if(elementFade != null)
   {
      elementFade.parentNode.removeChild(elementFade);
   }    
   
   var mall_id         = kicc_frm.EP_mall_id.value;
	 var order_id        = kicc_frm.EP_order_no.value;
	 var product_amt     = kicc_frm.EP_product_amt.value;
			
	 var params = 'EP_mall_id='+mall_id+'&EP_order_no='+order_id+'&EP_product_amt='+product_amt;
   //sendKiccData(protocol+kicc_pg+'.easypay.co.kr/webpay/CloseAction.do',params);
}

function kicc_only_popup_close()
{
	
   document.getElementById('KICC_PAYMENTWINDOW_POPUP').style.display='none';
   document.getElementById('KICC_FADE').style.display='none';

   var element = document.getElementById("KICC_PAYMENTWINDOW_POPUP");

   if(element != null)
   {
      element.parentNode.removeChild(element);
   }

   var elementFade = document.getElementById("KICC_FADE");

   if(elementFade != null)
   {
      elementFade.parentNode.removeChild(elementFade);
   }    

}

function kicc_PAYMENTLAYER_POPUP(frm, payType, windowType, pWidth, pHeight, rgbPer){
	kicc_frm = frm;
	var targetNm = "kiccLayerTarget";
	if(payType != undefined){
		if(payType == "BANK"){
			pWidth = "720";
			pHeight = "600";
		}else if(payType == "DNAL"){
			pWidth = "500";
			pHeight = "680";			
		}else if(payType == "MBIL"){
			pWidth = "390";
			pHeight = "651";
		}else if(payType == "IMPA"){
			pWidth = "390";
			pHeight = "770";
		}else if(payType == "PCO"){
		    pWidth = "720";
		    pHeight = "680";
	    }		
	}
    if(rgbPer == undefined){
    	rgbPer = 0;
    }
	/* 
	 *    백그라운드 농도 조정 Logic 추가 
	 */
	var rgbRed		= parseInt(255 * rgbPer) ;
	var rgbGreen	= parseInt(255 * rgbPer) ;
	var rgbBlue		= parseInt(255 * rgbPer) ;
	var rgbColor    = "#7F000000";

	if( rgbPer < 0.1 ) {
		rgbColor = "#9F000000";
	}else if (rgbPer >= 0.1 && rgbPer < 0.3 ){
		rgbColor = "#7F000000";
	}else if (rgbPer >= 0.3 && rgbPer < 0.5 ){
		rgbColor = "#5F000000";
	}else if (rgbPer >= 0.5 && rgbPer < 0.7 ){
		rgbColor = "#3F000000";
	}else{
		rgbColor = "#00000000";
	}
	var pBackground = "";
	var	pFilter = "";

	if(rgbPer >= 1){
		pBackground = "";
		pFilter ="";
	}else{
		pBackground = "background: rgba("+rgbRed+", "+rgbGreen+", "+rgbBlue+", 0.5);";
		pFilter ="filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="+rgbColor+",endColorstr="+rgbColor+");";
	}	
	
	if(windowType != undefined && windowType == "iframe"){
			var newDiv = document.createElement("div");
			var kiccPopup = "";
				kiccPopup += '<div id="KICC_FADE" style="overflow-y:auto;-ms-overflow-style:none; position: fixed; z-index:2147483600; width: 100% ; height:100%;  top : 0px ; left : 0px; ';
				kiccPopup +=  pBackground;
				kiccPopup +=  pFilter;
				kiccPopup += 'background-image: url(\''+protocol+kicc_pg+'.easypay.co.kr/img/webpay/transparent.png\'); ">';					
				kiccPopup += '	<div id="KICC_PAYMENTWINDOW_POPUP" style="position: relative; z-index:2147483601; display: block; left: 0px; right: 0px; margin-left: auto; margin-right: auto;  overflow: visible; width: '+pWidth+'px; height: '+pHeight+'px; padding: 0px; border: 0px solid orange; top: 5%;">';
				kiccPopup += '		<div id="KICC_PAYMENTWINDOW_BG" style="float: right; z-index:2147483602; clear : both; height : 100%; width : 100%; background-color : white;  -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
				kiccPopup += '			<div id="KICC_PAYMENTWINDOW_POPUP_CLOSE" style="float:right; z-index:2147483603;clear : both; height : 7%; width : 100%; text-align : right; margin-right : 0px; background-color : transparent;  ">';
		        if(frm == undefined || frm.EP_kiccpopup_close == undefined || frm.EP_kiccpopup_close.value != "N"){
		        	kiccPopup += '				<img src="'+protocol+kicc_pg+'.easypay.co.kr/img/66_gray.png" tabindex="0" alt="close" style="cursor:pointer; margin:10px; border:0px; width:18px; height:18px;" onclick="javascript:kicc_popup_close();">';
		        }
				kiccPopup += '			</div>';
				kiccPopup += '			<div style="float: left; clear : both; z-index:2147483604; height : 95% ; width : 100% ; overflow: hidden;">';
				kiccPopup += '				<iframe name="'+targetNm+'" id="'+targetNm+'" allowtransparency="false" frameborder="no" scrolling="no" style="position: absolute; width : 100%; height : 95%; z-index:2147483605; display:block; overflow: hidden; left:0; top:7%; overflow: hidden;">	</iframe>';
				kiccPopup += '			</div>';
				kiccPopup += '		</div>';
				kiccPopup += '	</div>';
				kiccPopup += '</div>';
	
		    newDiv.innerHTML = kiccPopup;
		    document.body.appendChild(newDiv);
		    
  		// IE의 경우에 통합결제창에서 스크롤바 제거. IE9이하의 경우에 아래 CSS가 적용되지 않아 예외처리함. 
        var userAgent = navigator.userAgent.toLowerCase();
        if(!(userAgent.search("msie 5") != -1 || userAgent.search("msie 6") != -1 || userAgent.search("msie 7") != -1 || userAgent.search("msie 8") != -1 || userAgent.search("msie 9") != -1)) {
        	 try{
	 			 var KICC_FADE_SCROLL = document.createElement("style");
	 		   	 KICC_FADE_SCROLL.innerHTML = "#KICC_FADE::-webkit-scrollbar{display:none}";
	 		     document.body.appendChild(KICC_FADE_SCROLL);
        	 }catch(exception){}
 		}
 				    
	}else if(windowType != undefined && windowType == "submit"){
		targetNm = "_self";
	}else if(windowType != undefined && windowType == "popup"){
		var leftPosition = (screen.width-pWidth)/2-10;
		var topPosition =  (screen.height-pHeight)/2-50;
		window.open("about:blank",targetNm, 'top='+topPosition+', left='+leftPosition+',height='+pHeight+',width='+pWidth+',status=no,dependent=no,scrollbars=no,resizable=no');
	}
	
	   frm.target = targetNm;
	   frm.submit();
}
    
function kicc_cust_popup_close(){
    
}
//type이  radio 인 경우 선택된 radio의 value를 가져온다. text인 경운 value를 가져온다.
function f_chkToVal(pName){
	var payTypeVals = document.getElementsByName(pName);
	if(payTypeVals[0] != undefined && payTypeVals[0] != ""){
		if( payTypeVals[0].type == "radio"){
			for(var i=0; i<payTypeVals.length; i++){
				  var payTypeCheck = payTypeVals[i];
				  if(payTypeCheck.checked){
					  return  payTypeCheck.value;
				  }
			}
		}else{
			return payTypeVals[0].value; 
		}
	}
} 


//20190326, Order파일 Bridge파일에서 사용함. 모바일에서만 사용
function easypay_webpay_m(formid,URL,popupName,iPopUpWinX,iPopUpWinY, window_type,opacity,cardCd, rgbPer)
{

   kicc_frm = formid;  
   if(window_type != null && window_type == "iframe" )
   {
      var attachElement = document.body;
      var newDiv;
      var element = document.getElementById("KICC_PAYMENTWINDOW_POPUP");
      
      if(element != null)
      {
         element.parentNode.removeChild(element);
      }
      
      var returnPos =   EASYPAY_form_pos(formid,iPopUpWinX,iPopUpWinY,window_type,"card",cardCd);
      var installpop = '';
      var heightPx = '';
      var iframeHeightPx = '';
      var iframeWidthPx = '';
      var iframeTopMarginPx = '';
      
     var backgroudColor = '';

     if(returnPos[2] != -1)
      {
        backgroudColor = 'white';
     }else{

        backgroudColor = 'transparent';
     }
     
    if(rgbPer == undefined){
    	rgbPer = 0;
    }
      
 	var rgbRed		= parseInt(255 * rgbPer) ;
	var rgbGreen	= parseInt(255 * rgbPer) ;
	var rgbBlue		= parseInt(255 * rgbPer) ;
	var rgbColor    = "#7F000000";

	if( rgbPer < 0.1 ) {
		rgbColor = "#9F000000";
	}else if (rgbPer >= 0.1 && rgbPer < 0.3 ){
		rgbColor = "#7F000000";
	}else if (rgbPer >= 0.3 && rgbPer < 0.5 ){
		rgbColor = "#5F000000";
	}else if (rgbPer >= 0.5 && rgbPer < 0.7 ){
		rgbColor = "#3F000000";
	}else{
		rgbColor = "#00000000";
	}
	var pBackground = "";
	var	pFilter = "";

	if(rgbPer >= 1){
		pBackground = "";
		pFilter ="";
	}else{
		pBackground = "background: rgba("+rgbRed+", "+rgbGreen+", "+rgbBlue+", 0.5);";
		pFilter ="filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="+rgbColor+",endColorstr="+rgbColor+");";
	}
	

    installpop += '<div id="KICC_FADE" style=" position: fixed;  z-index:2147483600; width: 100% ; height:100%;  top : 0px ; left : 0px; ';
    installpop +=  pBackground;
    installpop +=  pFilter;
    //installpop +=  'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000); ';
    installpop +=  'background-image: url(\''+protocol+ kicc_pg +'.easypay.co.kr/img/webpay/transparent.png\'); zoom: 1; ">';
    installpop += '<div id="KICC_PAYMENTWINDOW_POPUP"  class="white_content" scrolling="no" style="position: relative; display: none; left: 0; right: 0;  margin-left: auto;  margin-right: auto; z-index:2147483601; overflow:visible">';
   	if( formid.EP_card_cd		!= undefined && formid.EP_card_cd.value == "016"    
   		&& formid.EP_kmotion_close != undefined && formid.EP_kmotion_close.value == "Y"
   		&& formid.EP_kmotion_useyn != undefined && (formid.EP_kmotion_useyn.value == "Y" || formid.EP_kmotion_useyn.value == "M" )	){
   		installpop += '<div id="KICC_PAYMENTWINDOW_BG" style="float: right; clear : both; height : 93%; width : 100%; background-color : '+backgroudColor+';  z-index:2147483602; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
   	}else{
   		installpop += '<div id="KICC_PAYMENTWINDOW_BG"  style="float: right; clear : both; height : 100%; width : 100%; background-color : '+backgroudColor+';  z-index:2147483602; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px; ">';
   	}
    
      

    if(returnPos[2] != -1 && returnPos[2] != -2)
    {
    	var closedPosition = "";//iframe Kmotion 
	   	if( formid.EP_card_cd		!= undefined && (formid.EP_card_cd.value == "016")  
	   		&& formid.EP_kmotion_close != undefined && formid.EP_kmotion_close.value == "Y"  
	   		&& formid.EP_kmotion_useyn != undefined && (formid.EP_kmotion_useyn.value == "Y" || formid.EP_kmotion_useyn.value == "M" )){
   				iframeTopMarginPx = '0%';	
   				closedPosition = " position:relative;";
    	}else{
    			iframeTopMarginPx = '7%';
    	}
	   	installpop += '<div id="KICC_PAYMENTWINDOW_POPUP_CLOSE" style="float:right; clear : both;'+closedPosition+' height : 7%; width : 100%; text-align : right; margin-right : 0px; background-color : transparent; z-index:2147483605; ">';
	   	if(formid.EP_kiccpopup_close == undefined || formid.EP_kiccpopup_close.value != "N"){
	   		installpop += '<img src="'+protocol+kicc_pg+'.easypay.co.kr/img/66_gray.png" tabindex="0" alt="close" style="cursor:pointer; margin:10px; border:0px; width:18px; height:18px;"  onclick="javascript:kicc_popup_close();" />';
	   	}
	   	installpop += '</div>';
        heightPx = '95%';
        iframeHeightPx = '95%';
        iframeWidthPx = '100%';
    }
    else
    {
        heightPx = '100%';
        iframeHeightPx = '100%';
        iframeWidthPx = '100%';
        iframeTopMarginPx = '0%';
    }
    
      
    installpop += '<div width="100%"  style="float: left; clear : both; ; height : '+heightPx+' ; width : 100% ; overflow: hidden;">';
    installpop += '<iframe name="'+popupName+'" id="KICC_PAYMENTWINDOW_IFRAME"  title="PC Payment Window_Iframe" allowtransparency="false"';
    installpop += ' src="" frameborder=no scrolling="no" style="position: absolute; width : '+iframeWidthPx+'; height : '+iframeHeightPx+'; display:block; overflow: hidden;'; 
    installpop += 'z-index:2147483604; left:0; top:'+iframeTopMarginPx+'; overflow: hidden;">';
    installpop += '</iframe></div></div></div>';
    installpop += '</div>';
      
      newDiv = document.createElement("div");
      
      newDiv.innerHTML = installpop;
      
      attachElement.appendChild(newDiv);
      
      if(returnPos[2] == -1)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
         
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onresize = function()
         {
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "100%";
         }
      }
      else if(returnPos[2] == -2)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
         
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onresize = function()
         {
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "100%";
            document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "100%";
         }


         
          document.getElementById("KICC_PAYMENTWINDOW_IFRAME").onload = function(e){

          };

      }
      else if(returnPos[2] == -3)
      {
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.width =  "686px";
         document.getElementById("KICC_PAYMENTWINDOW_IFRAME").style.height = "630px";      
      	 document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "686px";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "606px";      
      }
      else
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  returnPos[3]+"px";
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = (returnPos[2]+20)+"px";      
      }
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.padding =  "0px";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.border =  "0px solid orange";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.backgroundColor =  "";
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.overflow = "visible";
      
      if(returnPos[2] == -1)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
      }else if(returnPos[2] == -2)
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
      }
      else
      {
         document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "15%";
      }         
      
      document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.display='block';
   }
   else if(window_type != null && window_type == "submit")
   {
      
   }
   else if(window_type != null && window_type == "popup")
   {
      var newWindow = EASYPAY_card_popup(formid,popupName,iPopUpWinX,iPopUpWinY,window_type,cardCd);
      if(!newWindow)
      {
         alert("BLOWER SETTING POPUP NOT ALLOWED ");
         return;
      }
   }
   
   formid.target = popupName;
   formid.action = URL;
   formid.submit();
}

//이지페이8.0 Direct 모듈에서 국민카드 Kmotion 닫기버튼을 사용시에 
//국민카드 Kmotion 실행 후 ISP 선택 하면 결제창이 화면이 남는 문제가 발생하여 해결함 
//parent.postMessage는 EasypayCard_Web.js receiveMessage 펑션을 사용함
//크로스 도메인 문제가 발생하여 postMessage를 사용함
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

eventer(messageEvent,function(e) {
	if( e.data == "true"){
		if(document.getElementById("KICC_PAYMENTWINDOW_POPUP") != undefined ){
			document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.width =  "100%";
			document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.height = "100%";
			document.getElementById("KICC_PAYMENTWINDOW_POPUP").style.top =  "0%";
		}
		if(document.getElementById("KICC_PAYMENTWINDOW_BG") != undefined ){
			document.getElementById("KICC_PAYMENTWINDOW_BG").style.backgroundColor =  "transparent";	
		}
		if(document.getElementById("KICC_PAYMENTWINDOW_POPUP_CLOSE") != undefined ){
			document.getElementById("KICC_PAYMENTWINDOW_POPUP_CLOSE").style.display = "none";	
		}
	}
},false);