var NetFunnel = {};
function NetFunnel_init(e, t, n) {
    return NetFunnel.gControl && (NetFunnel.gControl._resetScript(), NetFunnel.gControl = null),
    void 0 === n ? n = NetFunnel.DefaultCallback : (n.onSuccess || (n.onSuccess = NetFunnel.DefaultCallback.onSuccess), n.onContinued || (n.onContinued = NetFunnel.DefaultCallback.onContinued), n.onError || (n.onError = NetFunnel.DefaultCallback.onError), n.onStop || (n.onStop = NetFunnel.DefaultCallback.onStop), n.onBypass || (n.onBypass = NetFunnel.DefaultCallback.onBypass), n.onBlock || (n.onBlock = NetFunnel.DefaultCallback.onBlock), n.onExpressnumber || (n.onExpressnumber = NetFunnel.DefaultCallback.onExpressnumber), n.onIpBlock || (n.onIpBlock = NetFunnel.DefaultCallback.onIpBlock)),
    NetFunnel.gControl = new NetFunnel.TsClient(t, n),
    !0
}
function NetFunnel_sendStop(e) {
    try {
        return NetFunnel.gControl || NetFunnel_init(),
        NetFunnel.gAlreadyProc = 0,
        NetFunnel.gControl.setNext(e),
        NetFunnel.gControl.sendStop(),
        !0
    } catch (e) {
        return !1
    }
}
function NetFunnel_getTicketID(e, t, n) {
    return NetFunnel.gControl || NetFunnel_init(),
    NetFunnel.gAlreadyProc = 0,
    NetFunnel.gControl.setNext(e),
    NetFunnel.gControl.getTicketID(t, n),
    !0
}
function NetFunnel_chkEnter(e, t) {
    var n;
    if (NetFunnel.gControl || NetFunnel_init(), NetFunnel.gAlreadyProc = 0, void 0 !== t && t.constructor == Object) {
        if (!(n = t.key))
            return !1
    } else {
        var i = new NetFunnel.Storage(2),
        o = i.getItem(NetFunnel.gControl.mConfig.cookie_id);
        if (null === o || "" == o)
            return !1;
        if (!(n = new NetFunnel.RetVal(o).getValue("key")))
            return (i = new NetFunnel.Storage(2)).removeItem(this.mConfig.cookie_id), !1
    }
    return NetFunnel.gControl.setNext(e),
    NetFunnel.gControl.chkEnter(n),
    !0
}
function NetFunnel_getTidChkEnter(e, t, n) {
    return NetFunnel.gControl || NetFunnel_init(),
    NetFunnel.gAlreadyProc = 0,
    NetFunnel.gControl.setNext(e),
    NetFunnel.gControl.getTidChkEnter(t, n),
    !0
}
function NetFunnel_aliveNotice(e, t) {
    try {
        NetFunnel.gControl || NetFunnel_init(),
        NetFunnel.gAlreadyProc = 0;
        var n = "",
        i = "",
        o = "";
        if (void 0 !== t && t.constructor == Object) {
            if (!(n = t.key))
                return !1;
            i = t.ip,
            o = t.port
        } else {
            var r = new NetFunnel.Storage(2),
            s = r.getItem(NetFunnel.gControl.mConfig.cookie_id);
            if (null === s || "" == s)
                return !1;
            var l = new NetFunnel.RetVal(s);
            if (!(n = l.getValue("key")))
                return r.removeItem(this.mConfig.cookie_id), !1;
            i = l.getValue("ip"),
            o = l.getValue("port")
        }
        return NetFunnel.gControl.setNext(e),
        NetFunnel.gControl.aliveNotice(n, i, o),
        !0
    } catch (e) {
        return !1
    }
}
function NetFunnel_setComplete(e, t) {
    NetFunnel.gControl || NetFunnel_init(),
    NetFunnel.gAlreadyProc = 0,
    NetFunnel.gControl.setNext(e);
    var n = "",
    i = "",
    o = "";
    if (void 0 !== t && t.constructor == Object) {
        if (!(n = t.key))
            return NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorSystem), !1;
        i = t.ip,
        o = t.port
    } else {
        var r = new NetFunnel.Storage(2),
        s = r.getItem(NetFunnel.gControl.mConfig.cookie_id);
        if (null === s || "" == s)
            return NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorSystem), !1;
        var l = new NetFunnel.RetVal(s),
        u = l.getRetCode(),
        a = l.getReqType();
        if (u != NetFunnel.kSuccess && u != NetFunnel.kTsBypass && (a != NetFunnel.RTYPE_ALIVE_NOTICE || u != NetFunnel.kContinue)) {
            var N = new NetFunnel.RetVal(NetFunnel.RTYPE_SET_COMPLETE + ':200:msg="Success"');
            return NetFunnel.gControl._showResultSetComplete(N),
            !0
        }
        if (!(n = l.getValue("key")))
            return (r = new NetFunnel.Storage(2)).removeItem(NetFunnel.gControl.mConfig.cookie_id), NetFunnel.gControl._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorSystem), !1;
        i = l.getValue("ip"),
        o = l.getValue("port")
    }
    return NetFunnel.gControl.setComplete(n, i, o),
    !0
}
function NetFunnel_cookieExist() {
    return !!NetFunnel.gControl && NetFunnel.gControl.cookieExist()
}
function NetFunnel_isRunning() {
    return !!NetFunnel.gControl && NetFunnel.gControl.isRunning()
}
function NetFunnel_goForm(e, t, n) {
    var i = null;
    if ("string" == typeof t) {
        if ("object" != typeof(i = document.getElementById(t)) || null === i) {
            var o = document.getElementsByName(t);
            if ("object" != typeof(i = o[0]) || null === i)
                return alert("[NetFUNNEL] Invalid input form"), !1
        }
    } else {
        if ("object" != typeof t)
            return alert("[NetFUNNEL] Invalid input form"), !1;
        i = t
    }
    return "function" != typeof n && (n = function (e, t) {
        return !1
    }),
    NetFunnel_init(null, e),
    NetFunnel_getTidChkEnter({
        success: function (e, t) {
            null !== i && i.submit()
        },
        error: function (e, t) {
            null !== i && i.submit()
        },
        bypass: function (e, t) {
            null !== i && i.submit()
        },
        stop: n
    }),
    !1
}
function NetFunnel_goUrl(e, t, n) {
    return "string" != typeof t ? (alert("[NetFUNNEL] Invalid input url"), !1) : ("function" != typeof n && (n = function (e, t) {
            return !1
        }), NetFunnel_init(null, e), NetFunnel_getTidChkEnter({
            success: t,
            error: t,
            bypass: t,
            stop: n
        }), !1)
}
function NetFunnel_goFunc(e, t, n) {
    return "function" != typeof t ? (alert("[NetFUNNEL] Invalid input function"), !1) : ("function" != typeof n && (n = function (e, t) {
            return !1
        }), NetFunnel_init(null, e), NetFunnel_getTidChkEnter({
            success: t,
            error: t,
            bypass: t,
            stop: n
        }), !1)
}
function NetFunnel_goComplete(e, t) {
    return "function" != typeof t && (t = function (e, t) {
        return !1
    }),
    NetFunnel_init(null, e),
    NetFunnel_setComplete({
        success: t,
        error: t,
        bypass: t
    }),
    !1
}
function NetFunnel_goAliveNotice(e, t) {
    return "function" != typeof t && (t = function (e, t) {
        return !1
    }),
    NetFunnel_init(null, e),
    NetFunnel_aliveNotice({
        success: t,
        error: t,
        bypass: t
    }),
    !1
}
function NetFunnel_Action(e, t) {
    var n = null,
    i = t.success,
    o = t.continued,
    r = t.stop,
    s = t.error,
    l = t.bypass,
    u = t.block,
    a = t.ipblock,
    N = t.expressnumber;
    return void 0 === t.success && (i = t),
    "object" == typeof i && (n = i),
    void 0 === r && (r = function (e, t) {
        return !1
    }),
    void 0 === s && (s = i),
    void 0 === l && (l = i),
    void 0 === N && (N = i),
    NetFunnel_init(null, e),
    NetFunnel_getTidChkEnter(null === n ? {
        success: i,
        error: s,
        stop: r,
        bypass: l,
        block: u,
        ipblock: a,
        expressnumber: N,
        continued: o
    }
         : {
        success: function (e, t) {
            null !== n && n.submit()
        },
        error: function (e, t) {
            null !== n && n.submit()
        },
        bypass: function (e, t) {
            null !== n && n.submit()
        },
        expressnumber: function (e, t) {
            null !== n && n.submit()
        },
        stop: r,
        block: u,
        ipblock: a,
        continued: o
    }),
    !1
}
function NetFunnel_Complete(e, t) {
    return "function" != typeof t && (t = function (e, t) {
        return !1
    }),
    NetFunnel_init(null, e),
    NetFunnel_setComplete({
        success: t,
        error: t,
        bypass: t
    }),
    !1
}
function NetFunnel_AliveNotice(e, t) {
    if (NetFunnel_init(null, e), "function" == typeof t)
        NetFunnel_aliveNotice({
            success: t,
            error: t,
            bypass: t,
            continued: t
        });
    else if ("object" == typeof t) {
        var n = t.success,
        i = t.continued,
        o = t.stop;
        NetFunnel_aliveNotice({
            success: n,
            error: t.error,
            stop: o,
            bypass: t.bypass,
            block: t.block,
            ipblock: t.ipblock,
            expressnumber: t.expressnumber,
            continued: i
        })
    } else
        NetFunnel_aliveNotice({
            success: t = function (e, t) {
                return !1
            },
            error: t,
            bypass: t,
            continued: t
        });
    return !1
}
function DefaultCallback_onSuccess(e, t, n) {
	try
	{
		console.log(navigator);
		console.log(navigator.userAgent );
	    if (!navigator && !navigator.userAgent && navigator.userAgent.toLowerCase().indexOf("chrome") > 0)
	    {
	        if (NetFunnel.gPop) {
	            var i = n.getConfig("popup_target").document,
	            o = document.createElement("IMG");
	            o.src = "data:image/gif;base64," + NetFunnel.gFixelData,
	            o.style.position = "absolute",
	            o.style.top = "-10px",
	            o.style.left = "-10px",
	            o.style.display = "none",
	            o.onload = function () {
	                t.next(e, t),
	                i.getElementsByTagName("body")[0].removeChild(o)
	            },
	            i.getElementsByTagName("body")[0].appendChild(o)
	        } else
	            t.next(e, t);
	    }
	    else
	        t.next(e, t);
	}
	catch(e)
	{
		t.next(e, t);
		return !1
	}
    return !1
}
NetFunnel.Skin = {}, NetFunnel.TS_HOST = "nf.jinair.com", NetFunnel.TS_PORT = 443, NetFunnel.TS_PROTO = "https", NetFunnel.TS_QUERY = "ts.wseq", NetFunnel.TS_SERVICE_ID = "service_1", NetFunnel.TS_ACTION_ID = "act_1", NetFunnel.TS_MAX_TTL = 30, NetFunnel.TS_CONN_TIMEOUT = 3, NetFunnel.TS_CONN_RETRY = 2, NetFunnel.TS_COOKIE_ID = "NetFunnel_ID", NetFunnel.TS_COOKIE_TIME = 10, NetFunnel.TS_COOKIE_DOMAIN = "", NetFunnel.TS_BYPASS = !1, NetFunnel.TS_POPUP_TOP = !1, NetFunnel.TS_POPUP_LEFT = !1, NetFunnel.TS_AUTO_COMPLETE = !1, NetFunnel.TS_DEBUG_MODE = !1, NetFunnel.TS_SHOWTIME_LIMIT = 1200, NetFunnel.TS_SHOWCNT_LIMIT = 0, NetFunnel.TS_SHOWNEXT_LIMIT = 0, NetFunnel.TS_LIMIT_TEXT = "20분 이상", NetFunnel.TS_IFRAME_RESIZE = !1, NetFunnel.TS_USE_UNFOCUS = !0, NetFunnel.TS_VIRT_WAIT = 1e4, NetFunnel.TS_USE_MOBILE_UI = !0, NetFunnel.TS_POPUP_TARGET = window, NetFunnel.TS_USE_FRAME_BLOCK = !1, NetFunnel.TS_FRAME_BLOCK_LIST = [], NetFunnel.TS_USE_PRE_WAIT = !1, NetFunnel.TS_USER_DATA_KEYS = [], NetFunnel.TS_CONFIG_USE = !1, NetFunnel.TS_POPUP_ZINDEX = 32e3, NetFunnel.TS_IP_ERROR_RETRY = !0, NetFunnel.TS_NWAIT_BYPASS = !1, NetFunnel.TS_MAX_NWAIT_COUNT = 100, NetFunnel.TS_BLOCK_MSG = "Service Block!!", NetFunnel.TS_BLOCK_URL = "", NetFunnel.TS_IPBLOCK_WAIT_COUNT = 200, NetFunnel.TS_IPBLOCK_WAIT_TIME = 1e4, NetFunnel.TS_SHOW_WAIT_POPUP = !1, NetFunnel.TS_SKIN_ID = "nf_skin_eretail", NetFunnel.MP_USE = !1, NetFunnel.MP_TIMELIMIT = 2e4, NetFunnel.MP_MAXREQLIMIT = NetFunnel.MP_TIMELIMIT / 1100, NetFunnel.MP_DEVLIMIT = 20, NetFunnel.MP_DEVCNTLIMIT = 7, NetFunnel.MP_REQONLYLIMIT = 10, NetFunnel.MP_MINCOUNT = 5, NetFunnel.gLogoData = "R0lGODlhJgAQAOe/AB5vlR5ykh9zkyNymCF0lC1xkiN1lSR2liZ3lyd4mDN1lyh5mSp6mjN4lCt7my18nDh5myt+mC59nTd7ly9+njF/nzp+mjKAoDt/mzOBoT+CnkCDn0KFoUOGokSHo0iLpk+SrlSWsl2ZsF6asWeYsWCbsmGcs2OetWSftla4Q1e5RFi6RVm7Rl+6TWK6RnaowXuou3WqvHipwmG8TmS9SGK9T2W+SWq8T2O+UH6rvmS/UX+sv2y+UWXAUoCtwIKuwYOvw4SwxIWxxW/DXYayxnfCXYezx3XDZXbEZom1yY21w4q2you4y3rIaXvJao67zoLKcpq6yonJcpe/zZu/1IrNfY3Nd6C/z5zA1ZrC0KHA0I7QgJ/D2KPD04/SgZbQgZDTgqPH0KbG1pbUiqvH0azM3LDM16PZkaLamLPP2q7Zn7bS3KncobfT3bHcorrW4LnfrbPirrrgrsTY5Lvhr7jkqsba5rzjsLrkt73kscjc6Mvc4rzluMzd49Dg59Hh6MfpvtLi6dPk6s3qxtfk5dTl687rx9Xm7Nbn7dPrz9Ts0Nfo79Xt0dnp8N3q69fv097r7OHq8uXq7d/s7eDt7uDw1ePs9Obs7uTt9eft79/y3uLw8Onu8ODz3+vw8+H14Ozx9O3y9er14u306e7z9uj26u/26+/19+n46/D37PD2+PL3+fL57vP4+/T67/T5/Pf59vX6/fj69/L89/X88Pn7+Pr8+ff9//v9+v78///9+//9//n///z/+/7//P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAAAmABAAAAj+AH2hSuXLl61SsHzp8pVLIcOHBSNKnDgxFY8VnXwlckHH1y2PBiuJakixZElUOlrocGWoBRxfuBS58vWpxRZbJnNKRKXSpqIWdB6x0JFCUZMWKhjpXMrTypkUTlzgWXHkjgsko3R4wbk0J08ovoq0aMEmxZAvW6rM0jGmq05TOqT4MpWiBR8oLfL0UOPqxphbC91SnFUHUMFHcTTJcgMGjShccgYtDUyxYSguWq5EWdXFjq9WWNp4mlJG4ZwrqvRcQVRQTBZfUbRkyULqDZWEug5RcLAAACUIQHxBIkAiUIIFYXz9cHApyQQJBT1Q8CVAwgIGiGAgIJXrlu4RBgXsUQjiKxKBEn8WOMCgCgiDS0okMBDhSzp1AxFjbGd4SH4BDpFQENwkBIzwBwIgSLCBD+8lIcEHC6TxwXQBSCCAAZ68gMApBenmQRBPIEIBDL40ct6BP5AhQQUMSLKEBH5wsGIFvgzQgBFCvCLDhgyJWEJBjkigQRonJADDHwns4EsIDDBASRIR9AGKBBNMJ4ACa5jRSgwM/EAEJIhcYEJEKEhgpgaq9OHADwVxQAEmTFDQhy9lLJCBLwdYQIEFjeRAwZ973LIJKBI5QkghqtwSSyYc+kIKJ7eowkktH2XCiS+WcKKpLadomkksAQEAOw==", NetFunnel.gLogoText = "", NetFunnel.gLogoURL = "http://www.netfunnel.co.kr", NetFunnel.gPreWaitData = "R0lGODlhKAAoALMMAPj4+MTExPT09NTU1NPT08XFxcbGxsLCwtXV1cPDw/X19b+/v////wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSAABcv0qQRLvwQCyc73C5YGxB5BgkwuS4nk4iCJJqlQKdZKxJII0ifYaRLwfECJmZg2AQaFwqA2ecfnrry+dJvR80NoRi5NRE8uXD5eLYk9iyxjhnprgnt2cn97mpucnZ6foKGio3oRACH5BAkFAAwALAAAAAAoACgAAASAkMlJq7046827/2AojmRpnmiqrmwLAohhIAAFy/SpBEu/BALJzvcLlgbEHkGCTC5LieTiIIkmqVAp1krEkgjSJ9hpEvB8QImZmDYBBoXCoDZ5x+euvP4Vm9HzQ2hGLk1ETy5cPl4tiT2LLGOGemuCe3Zyf3uam5ydnp+goaKjnREAIfkECQUADAAsAAAAACgAKAAABICQyUmrvTjrzbv/YCiOZGmeaKqubAsCiGEgAAXL9KkES78EAsnO9wuWBsQeQYJMLkuJ5OIgiSapUCnWSsSSCNIn2GkS8HxAiZmYNgEGhcKgNnnH5668fnOb0fNDaEYuTURPLlw+Xi2JPYssY4Z6a4J7dnJ/e5qbnJ2en6ChoqOiEQAh+QQJBQAMACwAAAAAKAAoAAAEgJDJSau9OOvNu/9gKI5kaZ5oqq5sCwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkQJTEY7CXK7ngQn1JoAg0JhUJMEj1GX8dhUL9uk6azMeKJN3KyPce3uSWdCaWBiZCdrQnAsiDuKK3aCP316PwyEY3SVmpucnZ6foKGio6IRACH5BAkFAAwALAAAAAAoACgAAAR9kMlJq7046827/2AojmRpnmiqrmwLAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRtBGWRJsgt+v9GIBBoTCoXb/gDUxGo4xn3hJOaGWsq75S8BidC6Mk47GpFzbzS3yBJk90EoV3JlNscYtwJ1lbXWZaXGlhmJmam5ydnp+goBEAIfkECQUADAAsAAAAACgAKAAABH2QyUmrvTjrzbv/YCiOZGmeaKqubFsCiGEggDspwaIvgWAzg92O8EsIdYficZG0EZZEmyC36/0YgEGhMKhdv2ALTEajjGfeEk5oZayrvlLwGJ0LoyTjsakXNvNLfIEmT3QShXcmU2xxi3AnWVtdZlpcaWGYmZqbnJ2en6CgEQAh+QQJBQAMACwAAAAAKAAoAAAEfZDJSau9OOvNu/9gKI5kaZ5oqq5sqwKIYSCAOynBoi+BYDOD3Y7wSwh1h+JxkbQRlkSbILfr/RiAQaEwqF2/YGxs5pXAZLQTTmhlrKu+UvAYnQujJOOxqRc280t8gSZPdBKFdyZTbHGLcCdZW10UkVxlYZiZmpucnZ6foKARACH5BAUFAAwALAAAAAAoACgAAASBkMlJq7046827/2AojmRpnmiqrmyrAohhIIA7KcGiL4FgM4PdjvBLCHWH4nGRNMFktAlhSSzhhD2JILfLloLHKgMwKBQGNZPx2HSthe3WNDx5ztKlLdbHuHb5JWRmaBNgQmItbztxLIpIP3OHP3p/P2NlZ3iWm5ydnp+goaKjpD8RADs=", NetFunnel.gFixelData = "R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==", NetFunnel.RTYPE_NONE = 0, NetFunnel.RTYPE_CHK_ENTER = 5002, NetFunnel.RTYPE_ALIVE_NOTICE = 5003, NetFunnel.RTYPE_SET_COMPLETE = 5004, NetFunnel.RTYPE_GET_TID_CHK_ENTER = 5101, NetFunnel.RTYPE_INIT = 5105, NetFunnel.RTYPE_STOP = 5106, NetFunnel.kSuccess = 200, NetFunnel.kContinue = 201, NetFunnel.kContinueDebug = 202, NetFunnel.kTsBypass = 300, NetFunnel.kTsBlock = 301, NetFunnel.kTsIpBlock = 302, NetFunnel.kTsExpressNumber = 303, NetFunnel.kTsErrorNoUservice = 500, NetFunnel.kTsErrorNoAction = 501, NetFunnel.kTsErrorAComplete = 502, NetFunnel.kTsErrorWrongServer = 503, NetFunnel.kTsErrorTooRecreate = 504, NetFunnel.kTsErrorNoKey = 505, NetFunnel.kTsErrorInvalidID = 506, NetFunnel.kTsErrorInvalidKey = 507, NetFunnel.kTsErrorInvalidIdStr = 508, NetFunnel.kTsErrorDuplicate = 509, NetFunnel.kTsErrorDelAction = 510, NetFunnel.kTsErrorUserviceExist = 511, NetFunnel.kTsErrorActionExist = 512, NetFunnel.kTsErrorLicenseOver = 513, NetFunnel.kTsErrorSize = 514, NetFunnel.kTsErrorNoUserAction = 515, NetFunnel.kTsErrorTooBigKey = 516, NetFunnel.kTsErrorInvalidIp = 517, NetFunnel.kErrorAuth = 900, NetFunnel.kErrorNotFound = 901, NetFunnel.kErrorNoinit = 902, NetFunnel.kErrorCode = 903, NetFunnel.kErrorParam = 904, NetFunnel.kErrorData = 905, NetFunnel.kErrorUnknownType = 906, NetFunnel.kErrorAlready = 907, NetFunnel.kErrorService = 908, NetFunnel.kErrorExecution = 909, NetFunnel.kErrorSock = 920, NetFunnel.kErrorSockSend = 921, NetFunnel.kErrorSockRecv = 922, NetFunnel.kErrorNotFoundLocalIP = 925, NetFunnel.kErrorSockConnect = 926, NetFunnel.kErrorNoConnect = 927, NetFunnel.kErrorSockData = 928, NetFunnel.kErrorIO = 991, NetFunnel.kErrorArunning = 992, NetFunnel.kErrorPermission = 993, NetFunnel.kErrorExpiredTime = 994, NetFunnel.kErrorOverCounter = 995, NetFunnel.kErrorSecurity = 996, NetFunnel.kErrorSystemStopping = 997, NetFunnel.kErrorNotSupport = 998, NetFunnel.kErrorSystem = 999, NetFunnel.PS_N_RUNNING = 0, NetFunnel.PS_RUNNING = 1, NetFunnel.PS_CONTINUE = 2, NetFunnel.PS_TIMEOUT = 3, NetFunnel.PS_ERROR = 99, NetFunnel.CONN_TIMEOUT_KEY = "connection_timeout", NetFunnel.gControl = null, NetFunnel.gShowtimeLimit = !1, NetFunnel.gShowcntLimit = !1, NetFunnel.gShownextLimit = !1, NetFunnel.gSkinId = "", NetFunnel.gPopupTop = !1, NetFunnel.gPopupLeft = !1, NetFunnel.gTotWait = -1, NetFunnel.gPrevWaitTime = -1, NetFunnel.gLastSkinID = "default", NetFunnel.gUseMobileUI = !1, NetFunnel.gUseUnfocus = !1, NetFunnel.gAlreadyProc = 0, NetFunnel.gWaitPop = null, NetFunnel.gIPBlockWaitCount = 0, NetFunnel.gNWaitCount = 0, NetFunnel.gNWaitTemp = 0, NetFunnel.gReTimer = null, NetFunnel.gDebugflag = !1, NetFunnel.Util = {
    makeDebugMsg: function (e, t, n, i, o) {
        var r = "\n",
        s = "       ";
        1 == o && (r = "<br>", s = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        var l = "Unknown",
        u = "Unkonwn Error";
        switch (t) {
        case NetFunnel.RTYPE_GET_TID:
            l = "getTicketID";
            break;
        case NetFunnel.RTYPE_CHK_ENTER:
            l = "chkEnter";
            break;
        case NetFunnel.RTYPE_ALIVE_NOTICE:
            l = "aliveNotice";
            break;
        case NetFunnel.RTYPE_SET_COMPLETE:
            l = "setComplete";
            break;
        case NetFunnel.RTYPE_GET_TID_CHK_ENTER:
            l = "getTID+ChkEnter";
            break;
        case NetFunnel.RTYPE_INIT:
            l = "Init";
            break;
        case NetFunnel.RTYPE_STOP:
            l = "stop";
            break;
        default:
            l = "Unknown"
        }
        switch (n) {
        case NetFunnel.kSuccess:
            u = "Normal";
            break;
        case NetFunnel.kContinue:
            u = "Continue";
            break;
        case NetFunnel.kContinueDebug:
            u = "Debug Continue mode";
            break;
        case NetFunnel.kTsBypass:
            u = "ServerSide Bypass";
            break;
        case NetFunnel.kTsBlock:
            u = "ServerSide Block";
            break;
        case NetFunnel.kTsIpBlock:
            u = "ServerSide Ip Block";
            break;
        case NetFunnel.kErrorSystem:
            u = "System Error";
            break;
        case NetFunnel.kErrorSecurity:
            u = "Security Error";
            break;
        case NetFunnel.kErrorIO:
            u = "I/O Error";
            break;
        case NetFunnel.kErrorSockConnect:
            u = "Connection Timeout";
            break;
        case NetFunnel.kErrorAlready:
            u = "Already Running";
            break;
        case NetFunnel.kErrorNoinit:
            u = "Init Error";
            break;
        case NetFunnel.E_INSERT:
            u = "Insert Error";
            break;
        case NetFunnel.kErrorPermission:
            u = "No Permission";
            break;
        case NetFunnel.kErrorExpiredTime:
            u = "Key Expire";
            break;
        case NetFunnel.kErrorParam:
            u = "Parameter Error";
            break;
        case NetFunnel.E_NOT_STARTED:
            u = "No service time";
            break;
        case NetFunnel.kTsErrorNoUserAction:
            u = "No action Error";
            break;
        default:
            u = "Unknown Error"
        }
        var a = e + " " + r + r + "  - type : " + l + " (" + t + ")" + r + " - Code : " + u + " (" + n + ")" + r + " - Params" + r;
        for (var N in i)
            a += s + N + " ---\x3e " + i[N] + r;
        return a
    },
    goNextPage: function (e, t) {
        var n = e;
        for (var i in t)
            n += "&" + i + "=" + t[i];
        document.location.href = n
    },
    alertDebugMsg: function (e) {
        alert(e)
    },
    decodeBase64: function (e) {
        var t,
        n,
        i,
        o,
        r,
        s,
        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        u = "",
        a = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            t = l.indexOf(e.charAt(a++)) << 2 | (o = l.indexOf(e.charAt(a++))) >> 4,
            n = (15 & o) << 4 | (r = l.indexOf(e.charAt(a++))) >> 2,
            i = (3 & r) << 6 | (s = l.indexOf(e.charAt(a++))),
            u += String.fromCharCode(t),
            64 != r && (u += String.fromCharCode(n)),
            64 != s && (u += String.fromCharCode(i))
        } while (a < e.length);
        return u
    },
    getParam: function (e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(document.location.href);
        return null === t ? "" : t[1]
    },
    isSmartPhone: function () {
        var e = ["iPhone", "iPod", "iPad", "BlakBerry", "Android", "WindowsCE", "LG", "MOT", "SAMSUNG", "SonyEricsson", "Nokia", "Webos", "Opera mini", "Opera mobi", "Iemobile"];
        try {
            for (var t = 0; t < e.length; t++)
                if (null !== navigator.userAgent.match(e[t]))
                    return !0
        } catch (e) {}
        return !1
    },
    calcStdDev: function (e, t) {
        if ("object" != typeof e)
            return !1;
        if (e.length < 2)
            return !1;
        (t > 1 || t < 0) && (t = 0);
        var n = 0,
        i = 0;
        for (i = 0; i < e.length; i++)
            n += parseInt(e[i], 10);
        var o = n / e.length,
        r = 0;
        for (i = 0; i < e.length; i++)
            r += (parseInt(e[i], 10) - o) * (parseInt(e[i], 10) - o);
        return Math.sqrt(r / (e.length - t))
    },
    delFocus: function (e) {
        try {
            var t = document;
            "object" == typeof e && "object" == typeof e.document && (t = e.document);
            var n = t.getElementsByTagName("body")[0],
            i = t.createElement("iframe");
            i.style.position = "absolute",
            i.style.width = "0px",
            i.style.height = "0px",
            i.style.border = "0px",
            i.style.top = NetFunnel.PopupUtil.getScrollTop(t),
            i.style.left = NetFunnel.PopupUtil.getScrollLeft(t),
            n.appendChild(i),
            i.focus();
            var o = i.parentNode;
            o && "object" == typeof o && o.removeChild(i)
        } catch (e) {}
    },
    isVirtualWait: function (e) {
        return "object" == typeof e && ("number" == typeof e.mprotect && e.mprotect > 0)
    },
    getTimeStr: function (e, t, n, i) {
        var o = parseInt(e, 10);
        void 0 === t && (t = "%H시간 %M분 %S초"),
        void 0 === n && (n = " "),
        void 0 === i && (i = !1);
        var r = 0,
        s = 0,
        l = 0,
        u = 0,
        a = !1,
        N = !1,
        c = !1,
        h = !1,
        p = !1,
        g = t.match(/%[-]*[0-9]*[H|M|S]/g);
        for (u = 0; u < g.length; u++)
            "H" == (N = (a = g[u]).charAt(a.length - 1)) && (c = !0), "M" == N && (h = !0), "S" == N && (p = !0);
        1 == c && (s = Math.floor(o / 3600)),
        1 == h && (r = 1 == c ? Math.floor(o % 3600 / 60) : Math.floor(o / 60)),
        1 == p && (0 == c && 0 == h ? l = o : 1 == h ? l = o % 60 : 1 == c && 0 == h && (l = Math.floor(o % 3600)));
        for (var _ = "", m = t.split(n), F = 0; F < m.length; F++) {
            var f = m[F];
            g = f.match(/%[-]*[0-9]*[H|M|S]/g);
            var d = !0;
            for (u = 0; g && u < g.length; u++) {
                var T = "",
                y = !1,
                E = "&nbsp;",
                C = !1,
                S = 0;
                if (N = (a = g[u]).charAt(a.length - 1), a.length > 2) {
                    for (var k = "", P = !0, b = 1; b < a.length - 1; b++) {
                        var I = a[b];
                        "-" == I ? C = !0 : "0" == I && 1 == P ? (E = "0", P = !1, y = !0) : (k += I, y = !0)
                    }
                    S = parseInt(k, 10)
                }
                var v = "";
                if ("H" == N ? (0 == s && (d = !1), v = "" + s) : "M" == N ? (0 == r && (d = !1), v = "" + r) : "S" == N && (v = "" + l), y) {
                    C && (T = v);
                    for (var R = S - v.length, A = 0; A < R; A++)
                        T += E;
                    C || (T += v)
                } else
                    T = v;
                f = f.replace(a, T)
            }
            1 != i && 1 != d || (_ = _.length > 0 ? _ + n + f : f)
        }
        return _
    },
    getFrameWindowList: function (e) {
        for (var t = [], n = 0; n < top.frames.length; n++) {
            var i = top.frames[n];
            i !== e && t.push({
                win: i,
                popup: null
            })
        }
        return t
    }
}, NetFunnel.BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser",
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version",
        this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function (e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].string,
            i = e[t].prop;
            if (this.versionSearchString = e[t].versionSearch || e[t].identity, n) {
                if (-1 != n.indexOf(e[t].subString))
                    return e[t].identity
            } else if (i)
                return e[t].identity
        }
        return ""
    },
    searchVersion: function (e) {
        var t = e.indexOf(this.versionSearchString);
        return -1 == t ? 0 : parseFloat(e.substring(t + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari"
        }, {
            prop: window.opera,
            identity: "Opera"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]
}, NetFunnel.BrowserDetect.init(), "Explorer" == NetFunnel.BrowserDetect.browser && ("function" != typeof Array.push && (Array.prototype.push = function () {
        for (var e = this.length >>> 0, t = 0; t < arguments.length; t++)
            this[e] = arguments[t], e = e + 1 >>> 0;
        return this.length = e,
        e
    }), "function" != typeof Array.pop && (Array.prototype.pop = function () {
        var e,
        t = this.length >>> 0;
        return t && (e = this[--t], delete this[t]),
        this.length = t,
        e
    })), NetFunnel.getCommandStr = function (e, t) {
    var n = "",
    i = 0;
    if ("recv" == e)
        i = parseInt(t.substring(0, 4), 10);
    else {
        var o = /opcode=([0-9]+)&/.exec(t);
        o.length > 1 && (i = parseInt(o[1], 10))
    }
    switch (i) {
    case 5101:
        n = "getTidchkEnter";
        break;
    case 5002:
        n = "chkEnter      ";
        break;
    case 5003:
        n = "aliveNotice   ";
        break;
    case 5004:
        n = "setComplete   ";
        break;
    default:
        n = "Unknown       "
    }
    return n
}, NetFunnel.writeDebugMsg = function (e, t, n) {
    var i = new Date,
    o = parseInt(i.getHours(), 10),
    r = parseInt(i.getMinutes(), 10),
    s = parseInt(i.getSeconds(), 10),
    l = "";
    o < 10 && (l += "0"),
    l += o + ":",
    r < 10 && (r += "0"),
    l += r + ":",
    s < 10 && (s += "0"),
    l += s,
    l += "." + parseInt(i.getMilliseconds(), 10);
    var u = "",
    a = "",
    N = "";
    "recv" == t ? (u = "padding-left:1px;", a = "#9E9E9E;", N = l + " | Recv | <b>" + NetFunnel.getCommandStr(t, n) + "</b> | ") : (u = "margin-top:5px;", a = "#EEEEEE;", N = l + " | Send | <b>" + NetFunnel.getCommandStr(t, n) + "</b> | "),
    e.document.write("<div onload='this.focus()' style='width:650;overflow:hidden;padding:1px;border:1px solid #eeeeee;margin:0px;font-size:10px;font-family:monospace;background-color:" + a + u + "'>" + N + n.substring(0, 50) + "</div>")
}, NetFunnel.printDebugMsg = function (e, t, n) {
    NetFunnel.debugWindow = window.open("", "NetFunnel_debugWindow", "status=1,width=700,height=300,resizable=1,scrollbars=1"),
    "object" == typeof NetFunnel.debugWindow && NetFunnel.writeDebugMsg(NetFunnel.debugWindow, e, t)
}, NetFunnel.Storage = function (e) {
    this.html5Support = this.supportsHtml5Storage(),
    "number" == typeof e && (this.type = e)
}, NetFunnel.Storage.prototype.supportsHtml5Storage = function () {
    try {
        return "localStorage" in window && null !== window.localStorage
    } catch (e) {
        return !1
    }
}, NetFunnel.Storage.prototype.html5Support = !1, NetFunnel.Storage.prototype.length = 0, NetFunnel.Storage.prototype.type = 1, NetFunnel.Storage.prototype.setStorageType = function (e) {
    this.type = e < 1 || e > 2 ? 1 : e
}, NetFunnel.Storage.prototype.getStorage = function () {
    return 1 == this.type ? localStorage : 2 == this.type ? sessionStorage : localStorage
}, NetFunnel.Storage.prototype.setItem = function (e, t, n, i) {
    try {
        return this.html5Support ? (this.getStorage().setItem(e, t), NetFunnel.Cookie.set(e, t, n, i)) : NetFunnel.Cookie.set(e, t, n, i),
        !0
    } catch (e) {
        return !1
    }
}, NetFunnel.Storage.prototype.setItemStorageOnly = function (e, t, n, i) {
    try {
        return this.html5Support ? this.getStorage().setItem(e, t) : NetFunnel.Cookie.set(e, t, n, i),
        !0
    } catch (e) {
        return !1
    }
}, NetFunnel.Storage.prototype.getItem = function (e, t) {
    var n = !1;
    try {
        return this.html5Support && ((n = this.getStorage().getItem(e)) || null != t && 0 != t) || (n = NetFunnel.Cookie.get(e)),
        n
    } catch (e) {
        return !1
    }
}, NetFunnel.Storage.prototype.removeItem = function (e, t) {
    try {
        return this.html5Support ? (this.getStorage().removeItem(e), null != t && 0 != t || NetFunnel.Cookie.del(e)) : NetFunnel.Cookie.del(e),
        !0
    } catch (e) {
        return !1
    }
}, NetFunnel.Storage.prototype.clear = function () {
    try {
        return this.html5Support && this.getStorage().clear(),
        !0
    } catch (e) {
        return !1
    }
}, NetFunnel.MProtect = function () {
    try {
        var e = new NetFunnel.Storage,
        t = (new Date).getTime(),
        n = e.getItem("NFMPT.data", !0);
        null === n && (n = "");
        var i = e.getItem("NFMPT.stdData", !0);
        null === i && (i = "");
        var o = parseInt(e.getItem("NFMPT.lastTime", !0), 10);
        (isNaN(o) || null === o || "" == o) && (o = 0);
        var r = parseInt(e.getItem("NFMPT.reqCnt", !0), 10);
        (isNaN(r) || null === r || "" == r) && (r = 0);
        var s = [],
        l = [];
        "" != n && (s = n.split(",")),
        "" != i && (l = i.split(",")),
        0 != o && (s[s.length] = t - o, l[l.length] = t - o),
        o = t;
        for (var u = s.length - 1, a = 0; u >= 0 && !((a += parseInt(s[u], 10)) > NetFunnel.MP_TIMELIMIT); u--);
        var N = l.length - NetFunnel.MP_DEVCNTLIMIT;
        N < 0 && (N = 0);
        var c = l.slice(N),
        h = s.slice(u + 1);
        e.setItemStorageOnly("NFMPT.data", h.join(",")),
        e.setItemStorageOnly("NFMPT.stdData", c.join(",")),
        e.setItemStorageOnly("NFMPT.lastTime", o + ""),
        e.setItemStorageOnly("NFMPT.reqCnt", ++r + "");
        var p = NetFunnel.Util.calcStdDev(c, 0);
        if (0 != p && p < NetFunnel.MP_DEVLIMIT)
            return 2;
        if (h.length < NetFunnel.MP_MINCOUNT)
            return 0;
        if (h.length + 1 > NetFunnel.MP_MAXREQLIMIT)
            return 1;
        if (r > NetFunnel.MP_REQONLYLIMIT)
            return e.setItemStorageOnly("NFMPT.reqCnt", "0"), 3
    } catch (e) {}
    return 0
}, NetFunnel.ProgressBar = function (e, t, n, i) {
    if (this._bar = null, this._bar2 = null, this._config = {}, this._totWaitCnt = 0, this._wflag = 0, this._obj = "string" == typeof e ? n.getElementById(e) : e, this._config.width = 360, this._config.height = 5, this._config.count = 50, this._config.interval = 50, this._config.color = this._color, this._config.bgcolor = this._bgcolor, this._config.waitchk = 0, "object" == typeof t)
        for (var o in t)
            this._config[o] = t[o];
    this._config.count <= 0 && (this._config.count = 50),
    this._oTable = n.createElement("table"),
    this._oTable.style.width = i ? this._config.width + (this._config.width.indexOf("%") > 0 ? "" : "%") : this._config.width + "px",
    this._oTable.style.height = this._config.height + "px",
    this._oTable.cellPadding = 0,
    this._oTable.cellSpacing = 0;
    var r = n.createElement("tbody"),
    s = n.createElement("tr"),
    l = n.createElement("td");
    l.style.height = this._config.height + "px",
    l.style.backgroundColor = this._config.bgcolor;
    var u = n.createElement("td");
    u.style.backgroundColor = this._config.bgcolor,
    s.appendChild(l),
    s.appendChild(u),
    r.appendChild(s),
    this._oTable.appendChild(r),
    this._obj.appendChild(this._oTable),
    this._bar = l,
    this._bar2 = u,
    this.show = function () {
        this._obj.style.visibility = "visible";
        var e = this;
        this._timer = setInterval(function () {
                e._action(0)
            }, this._config.interval)
    },
    this.hide = function () {
        this._obj.style.visibility = "hidden",
        this._timer && (clearTimeout(this._timer), this._timer = null)
    },
    this._action = function () {
        try {
            if (0 != this._config.waitchk && parseInt(this._config.waitchk, 10) < parseInt(NetFunnel.gLastData.nwait, 10) && (NetFunnel.gLastData.nwait = this._config.waitchk), 0 == this._wflag && null === NetFunnel.retryData && (this._wflag = 1), NetFunnel.gTotWait <= 0 && (NetFunnel.gTotWait = NetFunnel.gLastData.nwait), parseInt(NetFunnel.gLastData.nwait, 10) > parseInt(NetFunnel.gTotWait, 10) && (NetFunnel.gTotWait = NetFunnel.gLastData.nwait), i) {
                this._oTable.style.width = this._config.width + (this._config.width.indexOf("%") > 0 ? "" : "%");
                var e = 100 - Math.round(NetFunnel.gLastData.nwait / NetFunnel.gTotWait * 100),
                t = 100 - e;
                this._bar.style.width = e + "%",
                this._bar2.style.width = t + "%"
            } else {
                this._oTable.style.width = this._config.width + "px";
                var e = this._config.width - Math.round(NetFunnel.gLastData.nwait / NetFunnel.gTotWait * this._config.width),
                t = this._config.width - e;
                this._bar.style.width = e + "px",
                this._bar2.style.width = t + "px"
            }
            this._bar.style.backgroundColor = this._config.color,
            this._bar2.style.backgroundColor = this._config.bgcolor,
            this._config.waitchk = NetFunnel.gLastData.nwait
        } catch (e) {}
        return !0
    }
}, NetFunnel.ProgressBar.prototype._mmm = 0, NetFunnel.ProgressBar.prototype._curr = 0, NetFunnel.ProgressBar.prototype._direct = 0, NetFunnel.ProgressBar.prototype._obj = null, NetFunnel.ProgressBar.prototype._cells = null, NetFunnel.ProgressBar.prototype._timer = null, NetFunnel.ProgressBar.prototype._oTable = null, NetFunnel.ProgressBar.prototype._config = null, NetFunnel.ProgressBar.prototype._color = "#bdd600", NetFunnel.ProgressBar.prototype._bgcolor = "#f4f3e0", NetFunnel.Cookie = {
    set: function (e, t, n, i) {
        var o = e + "=" + escape(t);
        if (void 0 !== n && n.constructor == Number && n > 0) {
            var r = new Date;
            r.setMinutes(r.getMinutes() + n),
            o += ";expires=" + r.toGMTString()
        }
        void 0 !== i && i.constructor == String && "" != i ? o += ";domain=" + i : "" != NetFunnel.TS_COOKIE_DOMAIN && (o += ";domain=" + NetFunnel.TS_COOKIE_DOMAIN),
        o += ";path=/;",
        document.cookie = o
    },
    del: function (e) {
        NetFunnel.Cookie.set(e, "", -1)
    },
    get: function (e) {
        if (document.cookie.length > 0) {
            var t = document.cookie.indexOf(e + "=");
            if (-1 != t) {
                t = t + e.length + 1;
                var n = document.cookie.indexOf(";", t);
                return -1 == n && (n = document.cookie.length),
                unescape(document.cookie.substring(t, n))
            }
        }
        return ""
    }
}, NetFunnel.getUrlParameters = function (e) {
    if ("string" != typeof e || "" == e)
        return "";
    var t = "",
    n = document.location.href;
    if (n.indexOf("?") > -1)
        for (var i = n.substr(n.indexOf("?")).split("&"), o = 0; o < i.length; o++)
            if (i[o].indexOf(e + "=") > -1) {
                var r = i[o].indexOf(e + "=") + e.length + 1;
                t = i[o].substr(r);
                break
            }
    return unescape(t)
}, NetFunnel.gPop = null, NetFunnel.gTimer = null, NetFunnel.gLastData = null, NetFunnel.countdown_stop = function () {
    try {
        NetFunnel.Util.isVirtualWait(NetFunnel.gLastData) || (NetFunnel.gControl.fireEvent(null, NetFunnel.gControl, "onStop", {
                next: NetFunnel.gControl.next.stop
            }), NetFunnel_sendStop(), NetFunnel.gPop && (NetFunnel.gPop.hide(), NetFunnel.gPop.destroy(), delete NetFunnel.gPop, NetFunnel.gPop = null), 1 == NetFunnel.gControl.getConfig("use_frame_block") && NetFunnel.PopupUtil.hideBlockList(NetFunnel.gControl.getConfig("frame_block_list")))
    } catch (e) {}
}, NetFunnel.countdown = function () {
    if (NetFunnel.gLastData && NetFunnel.gLastData.time_left >= 0 && NetFunnel.gPop) {
        var tTime = NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_TimeLeft"),
        tCount = NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_Count"),
        tNext = NetFunnel.gPop.getObj("NetFunnel_Loading_Popup_NextCnt");
        0 != this._gNWaitView && parseInt(this._gNWaitView, 10) < parseInt(NetFunnel.gLastData.nwait, 10) && (NetFunnel.gLastData.nwait = this._gNWaitView),
        this._gNWaitView = NetFunnel.gLastData.nwait;
        var tformat = "",
        tformat_arr = null,
        shownext_limit = 0,
        showcnt_limit = 0;
        if (tCount && (showcnt_limit = NetFunnel.gControl.getConfig("showcnt_limit"), showcnt_limit > 0 && NetFunnel.gLastData.nwait > showcnt_limit ? (tformat = tCount.className, tformat.length > 0 ? tCount.innerHTML = tformat : tCount.innerHTML = NetFunnel.TS_LIMIT_TEXT) : tCount.innerHTML = String(NetFunnel.gLastData.nwait)), tNext && (shownext_limit = NetFunnel.gControl.getConfig("shownext_limit"), null == NetFunnel.gLastData.nnext ? tNext.innerHTML = "0" : shownext_limit > 0 && NetFunnel.gLastData.nnext > shownext_limit ? (tformat = tNext.className, tformat.length > 0 ? tNext.innerHTML = tformat : tNext.innerHTML = NetFunnel.TS_LIMIT_TEXT) : tNext.innerHTML = String(NetFunnel.gLastData.nnext)), tTime) {
            var showtime_limit = NetFunnel.gControl.getConfig("showtime_limit");
            showtime_limit > 0 && NetFunnel.gLastData.real_time_left > showtime_limit ? (tformat = tTime.className, tformat_arr = tformat.split("^"), 4 == tformat_arr.length && tformat_arr[3].length > 0 ? tTime.innerHTML = tformat_arr[3] : tTime.innerHTML.length >= 5 ? tTime.innerHTML = "." : tTime.innerHTML += ".") : (tformat = tTime.className, tformat.length > 0 ? (tformat_arr = tformat.split("^"), tTime.innerHTML = NetFunnel.Util.getTimeStr(NetFunnel.gLastData.real_time_left, tformat_arr[0], tformat_arr[1], eval(tformat_arr[2]))) : tTime.innerHTML = NetFunnel.Util.getTimeStr(NetFunnel.gLastData.real_time_left))
        }
        try {
            "object" == typeof tTime && ("none" == tTime.style.textDecoration ? tTime.style.textDecoration = "underline" : tTime.style.textDecoration = "none"),
            "object" == typeof tTime && ("none" == tNext.style.textDecoration ? tNext.style.textDecoration = "underline" : tNext.style.textDecoration = "none"),
            "object" == typeof tCount && ("none" == tCount.style.textDecoration ? tCount.style.textDecoration = "underline" : tCount.style.textDecoration = "none")
        } catch (e) {}
    }
    if (NetFunnel.gLastData.time_left <= 0 && NetFunnel.gTimer)
        NetFunnel.gPop;
    else {
        var left_perc = 0,
        skinObj = NetFunnel.SkinUtil.get(NetFunnel.gSkinId, NetFunnel.Util.isSmartPhone());
        "function" == typeof skinObj.updateCallback && (parseInt(NetFunnel.gTotWait, 10) <= 0 ? left_perc = 0 : (parseInt(NetFunnel.gTotWait, 10) < parseInt(NetFunnel.gLastData.nwait, 10) && (NetFunnel.gTotWait = parseInt(NetFunnel.gLastData.nwait, 10)), left_perc = parseInt(100 * (NetFunnel.gTotWait - NetFunnel.gLastData.nwait) / NetFunnel.gTotWait, 10)), skinObj.updateCallback(left_perc, NetFunnel.gLastData.nwait, NetFunnel.gTotWait, NetFunnel.gLastData.real_time_left, !0)),
        NetFunnel.gLastData.time_left--;
        var self = this;
        NetFunnel.gTimer = setTimeout(function () {
                self.countdown()
            }, 500)
    }
}, NetFunnel.SkinUtil = {
    prevID: "",
    add: function (e, t, n) {
        try {
            return "string" == typeof e && "" != e && ("object" == typeof t && ("string" == typeof n && "" != n || (n = "normal"), "object" != typeof NetFunnel.Skin[e] && (NetFunnel.Skin[e] = {}), NetFunnel.Skin[e][n] = t, NetFunnel.gLastSkinID = e, !0))
        } catch (e) {
            return !1
        }
    },
    get: function (e, t) {
        try {
            "string" == typeof e && "" != e || (e = NetFunnel.gLastSkinID);
            var n = "normal";
            return 1 == NetFunnel.gUseMobileUI && 1 == t && (n = "mobile"),
            "object" == typeof NetFunnel.Skin[e] && "object" == typeof NetFunnel.Skin[e][n] ? NetFunnel.Skin[e][n] : "" != NetFunnel.TS_SKIN_ID && NetFunnel.TS_SKIN_ID != e && "object" == typeof NetFunnel.Skin[NetFunnel.TS_SKIN_ID] && "object" == typeof NetFunnel.Skin[NetFunnel.TS_SKIN_ID][n] ? NetFunnel.Skin[NetFunnel.TS_SKIN_ID][n] : NetFunnel.Skin.default[n]
        } catch (e) {}
        return NetFunnel.Skin.default.normal
    }
}, NetFunnel.PopupSetup = function (e, t, n) {
    null !== n && "" != n || (n = NetFunnel.gSkinId);
    var i = NetFunnel.SkinUtil.get(n, NetFunnel.Util.isSmartPhone());
    switch (e) {
    case "vcontinue":
        t.data.nwait = 1e4,
        t.data.ttl = "2",
        t.data.tps = 10,
        t.data.time_left = 3e5,
        t.data.real_time_left = 35e4,
        t.data.gTotWait = 15e3
    }
    "alert" != e && "object" == typeof t && (NetFunnel.gLastData = t.data, NetFunnel.gLastData.time_left = parseInt(t.data.ttl, 10), NetFunnel.gLastData.tps = parseInt(t.data.tps, 10), 0 == NetFunnel.gLastData.tps && (NetFunnel.gLastData.tps = 1), NetFunnel.gLastData.real_time_left = Math.round(parseInt(t.data.nwait, 10) / NetFunnel.gLastData.tps), NetFunnel.gLastData.real_time_left < 1 && (NetFunnel.gLastData.real_time_left = 1), NetFunnel.gPrevWaitTime > -1 && NetFunnel.gLastData.real_time_left > NetFunnel.gPrevWaitTime && (NetFunnel.gLastData.real_time_left = NetFunnel.gPrevWaitTime), NetFunnel.gPrevWaitTime = NetFunnel.gLastData.real_time_left, NetFunnel.gTotWait < 0 && (NetFunnel.gTotWait = NetFunnel.gLastData.nwait)),
    NetFunnel.gPop || (NetFunnel.gPop = new NetFunnel.Popup(i.htmlStr, NetFunnel.gPopupTop, NetFunnel.gPopupLeft, NetFunnel.gControl.getConfig("popup_target"), !1, !1, NetFunnel.gControl.getConfig("popup_zindex")), "function" == typeof i.prepareCallback && i.prepareCallback(), this._gNWaitView = 0),
    NetFunnel.gPop.show();
    NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts") && (NetFunnel.gDebugflag ? NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts").innerHTML = " Debug Mode " : NetFunnel.gPop.getObj("NetFunnel_Loding_Popup_Debug_Alerts").innerHTML = ""),
    1 == NetFunnel.gControl.getConfig("use_frame_block") && NetFunnel.PopupUtil.showBlockList(NetFunnel.gControl.getConfig("frame_block_list")),
    "alert" != e && NetFunnel.countdown()
}, NetFunnel.DefaultCallback = {
    onSuccess: function (e, t, n) {
        NetFunnel.gTimer && clearTimeout(NetFunnel.gTimer),
        NetFunnel.gPop && (NetFunnel.gPop.hide(), NetFunnel.gPop.destroy(), delete NetFunnel.gPop, NetFunnel.gPop = !0),
        1 == n.getConfig("use_frame_block") && NetFunnel.PopupUtil.hideBlockList(n.getConfig("frame_block_list")),
        "string" == typeof t.next && "" != t.next ? document.location.href = t.next : "function" == typeof t.next && DefaultCallback_onSuccess(e, t, n),
        NetFunnel.gPop = null
    },
    onContinued: function (e, t, n) {
        "string" != typeof t.next ? "function" == typeof t.next && 0 == t.next(e, t) || t.rtype != NetFunnel.RTYPE_CHK_ENTER && t.rtype != NetFunnel.RTYPE_GET_TID_CHK_ENTER || (NetFunnel.gTimer && clearTimeout(NetFunnel.gTimer), NetFunnel.PopupSetup("continue", t, NetFunnel.gSkinId)) : document.location.href = t.next
    },
    onError: function (e, t, n) {
        NetFunnel.gPop && (NetFunnel.gPop.hide(), NetFunnel.gPop.destroy(), delete NetFunnel.gPop, NetFunnel.gPop = null),
        1 == n.getConfig("use_frame_block") && NetFunnel.PopupUtil.hideBlockList(n.getConfig("frame_block_list")),
        "string" != typeof t.next || "" == t.next ? "function" != typeof t.next || t.next(e, t) : document.location.href = t.next
    },
    onStop: function (e, t) {
        "string" != typeof t.next || "" == t.next ? "function" != typeof t.next || t.next(e, t) : document.location.href = t.next
    },
    onBypass: function (e, t, n) {
        NetFunnel.gTimer && clearTimeout(NetFunnel.gTimer),
        NetFunnel.gPop && (NetFunnel.gPop.hide(), NetFunnel.gPop.destroy(), delete NetFunnel.gPop, NetFunnel.gPop = null),
        1 == n.getConfig("use_frame_block") && NetFunnel.PopupUtil.hideBlockList(n.getConfig("frame_block_list")),
        "string" != typeof t.next || "" == t.next ? "function" != typeof t.next || t.next(e, t) : document.location.href = t.next
    },
    onExpressnumber: function (e, t, n) {
        NetFunnel.gTimer && clearTimeout(NetFunnel.gTimer),
        NetFunnel.gPop && (NetFunnel.gPop.hide(), NetFunnel.gPop.destroy(), delete NetFunnel.gPop, NetFunnel.gPop = null),
        1 == n.getConfig("use_frame_block") && NetFunnel.PopupUtil.hideBlockList(n.getConfig("frame_block_list")),
        "string" != typeof t.next || "" == t.next ? "function" != typeof t.next || t.next(e, t) : document.location.href = t.next
    },
    onBlock: function (e, t, n) {
        NetFunnel.gTimer && clearTimeout(NetFunnel.gTimer),
        NetFunnel.gPop && (NetFunnel.gPop.hide(), NetFunnel.gPop.destroy(), delete NetFunnel.gPop, NetFunnel.gPop = null),
        "string" != typeof t.next || "" == t.next ? "function" == typeof t.next && 0 == t.next(e, t) || ("string" == typeof n.getConfig("block_url") && "" != n.getConfig("block_url") ? document.location.href = n.getConfig("block_url") : "" == n.getConfig("block_msg") || "string" != typeof n.getConfig("block_msg") ? alert("[NetFUNNEL]Service Block!") : alert(n.getConfig("block_msg"))) : document.location.href = t.next
    },
    onIpBlock: function (e, t) {
        "string" != typeof t.next ? "function" == typeof t.next && 0 == t.next(e, t) || (NetFunnel.gTimer && clearTimeout(NetFunnel.gTimer), NetFunnel.PopupSetup("vcontinue", t, NetFunnel.gSkinId)) : document.location.href = t.next
    }
}, NetFunnel.Event = function () {
    this.events = [],
    this.builtinEvts = []
}, NetFunnel.Event.prototype.getActionIdx = function (e, t, n, i) {
    if (e && t) {
        var o = this.events[e][t];
        if (!o)
            return -1;
        for (var r = o.length - 1; r >= 0; r--)
            if (o[r].action == n && o[r].binding == i)
                return r
    }
    return -1
}, NetFunnel.Event.prototype.addListener = function (e, t, n, i) {
    if (this.events[e])
        if (this.events[e][t]) {
            if (-1 == this.getActionIdx(e, t, n, i)) {
                var o = this.events[e][t];
                o[o.length] = {
                    action: n,
                    binding: i
                }
            }
        } else
            this.events[e][t] = [], this.events[e][t][0] = {
                action: n,
                binding: i
            };
    else
        this.events[e] = [], this.events[e][t] = [], this.events[e][t][0] = {
            action: n,
            binding: i
        }
}, NetFunnel.Event.prototype.removeListener = function (e, t, n, i) {
    if (this.events[e] && this.events[e][t]) {
        var o = this.actionExists(e, t, n, i);
        o >= 0 && this.events[e][t].splice(o, 1)
    }
}, NetFunnel.Event.prototype.fireEvent = function (e, t, n, i) {
    if (e || (e = window.event), t && this.events) {
        var o = this.events[t];
        if (o) {
            var r = o[n];
            if (r)
                for (var s = 0; r.length > s; s++) {
                    var l = r[s].action;
                    r[s].binding && (l = l.bind(r[s].binding)),
                    l(e, i, t)
                }
        }
    }
}, NetFunnel.gPopup = [], NetFunnel.PopupUtil = {
    getViewportHeight: function (e, t) {
        return e.innerHeight != e.undefined ? e.innerHeight : "CSS1Compat" == t.compatMode ? t.documentElement.clientHeight : t.body ? t.body.clientHeight : e.undefined
    },
    getViewportWidth: function (e, t) {
        return e.innerWidth != e.undefined ? e.innerWidth : "CSS1Compat" == t.compatMode ? t.documentElement.clientWidth : t.body ? t.body.clientWidth : 0
    },
    getScrollTop: function (e) {
        return e.pageYOffset ? e.pageYOffset : e.documentElement && "number" == typeof e.documentElement.scrollTop ? e.documentElement.scrollTop : e.body ? e.body.scrollTop : 0
    },
    getScrollLeft: function (e) {
        return e.pageXOffset ? e.pageXOffset : e.documentElement && "number" == typeof e.documentElement.scrollLeft ? e.documentElement.scrollLeft : e.body ? e.body.scrollLeft : 0
    },
    resizePopup: function () {
        for (var e = 0; NetFunnel.gPopup.length > e; e++)
            NetFunnel.gPopup[e]._centerPopWin()
    },
    getObjWidth: function (e) {
        if (!e)
            return 0;
        return parseInt(e.style.width, 10) > parseInt(e.offsetWidth, 10) ? parseInt(e.style.width, 10) : e.offsetWidth
    },
    getObjHeight: function (e) {
        if (!e)
            return 0;
        return parseInt(e.style.height, 10) > parseInt(e.offsetHeight, 10) ? parseInt(e.style.height, 10) : e.offsetHeight
    },
    showBlockList: function (e) {
        for (var t = 0; t < e.length; t++)
            try {
                var n = e[t];
                n.popup = new NetFunnel.Popup("", NetFunnel.gPopupTop, NetFunnel.gPopupLeft, n.win, !1, !1, NetFunnel.gControl.getConfig("popup_zindex")),
                n.popup.show()
            } catch (e) {}
    },
    hideBlockList: function (e) {
        for (var t = 0; t < e.length; t++)
            try {
                var n = e[t];
                n.popup && (n.popup.hide(), n.popup.destroy(), delete n.popup, n.popup = null)
            } catch (e) {}
    },
    hideWaitPopup: function () {
        "object" == typeof NetFunnel && NetFunnel.gWaitPop && (NetFunnel.gWaitPop.hide(), NetFunnel.gWaitPop.destroy(), NetFunnel.gWaitPop = null)
    },
    showWaitPopup: function () {
        if ("object" == typeof NetFunnel) {
            var e = '<div style="padding:2px;border:1px solid darkgray;">               <table>                     <tr>';
            "Explorer" == NetFunnel.BrowserDetect.browser && "6" == NetFunnel.BrowserDetect.version ? e += "<td></td>" : e += '<td><img style="" border=0 src="data:image/gif;base64,' + NetFunnel.gPreWaitData + '" ></td>',
            e += '  <td style="valign:middle;font-size:9pt">wait...</td>                    </tr>               </table>            </div>',
            NetFunnel.gWaitPop = new NetFunnel.Popup(e, !1, !1, NetFunnel.gControl, !0, "NetFunnel_Waiting_Popup", NetFunnel.gControl.getConfig("popup_zindex")),
            NetFunnel.gWaitPop.show()
        }
    },
    getDocumentEntireHeight: function (e) {
        var t = e.body,
        n = e.documentElement;
        return Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
    }
}, NetFunnel.Popup = function (e, t, n, i, o, r, s) {
    "object" == typeof i ? (this._mWin = i, "object" == typeof i.document ? this._mDoc = i.document : (this._mWin = window, this._mDoc = document)) : (this._mWin = window, this._mDoc = document),
    "boolean" != typeof o && (o = !1),
    "string" != typeof r && (r = "NetFunnel_Loading_Popup"),
    void 0 === s || isNaN(s) || (this._mZindex = s);
    var l = this._mDoc.getElementsByTagName("BODY")[0];
    if (l) {
        var u = this._mDoc.getElementById(r);
        if (!u || NetFunnel.SkinUtil.prevID != NetFunnel.gSkinId) {
            (u = this._mDoc.createElement("div")).id = r,
            u.style.display = "none",
            u.style.top = 0,
            u.style.left = 0,
            u.innerHTML = e,
            l.appendChild(u);
            var a = this._mDoc.getElementById("NetFunnel_Loading_Popup_Progressbar");
            if (a) {
                var e = a.style.width.indexOf("%") > 0;
                var N = {
                    count: 50,
                    interval: 50
                },
                c = parseInt(a.style.width, 10),
                h = parseInt(a.style.height, 10);
                isNaN(c) || (N.width = e ? c + "%" : c),
                isNaN(h) || (N.height = h);
                var p = new NetFunnel.ProgressBar(a, N, this._mDoc, e);
                p.show(),
                this._mProgress = p
            }
            var g = this._mDoc.getElementById("NetFunnel_Countdown_Stop");
            g && (g.onclick = NetFunnel.countdown_stop),
            this.new_draw = !0
        }
        NetFunnel.SkinUtil.prevID = NetFunnel.gSkinId;
        var _ = this._mDoc.getElementById("mpopup_bg"),
        m = this._mDoc.getElementById("pop_iframe");
        _ || ((_ = this._mDoc.createElement("div")).id = "mpopup_bg", _.innerHTML = "<div style='width:100%; height=100%'>&nbsp;</div>", _.style.position = "absolute", _.style.zIndex = this._mZindex + 1, _.style.top = "0px", _.style.left = "0px", _.style.width = "100%", _.style.height = NetFunnel.PopupUtil.getDocumentEntireHeight(this._mDoc) + "px", _.style.margin = "0", _.style.padding = "0", _.style.border = "0px solid black", _.fontSize = "0", l.appendChild(_)),
        m || ((m = this._mDoc.createElement("iframe")).id = "pop_iframe", m.frameborder = "0", m.border = "0", m.framespacing = "0", m.marginheight = "0", m.marginwidth = "0", o ? (m.style.opacity = "0", m.style.filter = "alpha(opacity=0)") : (m.style.opacity = "0.5", m.style.filter = "alpha(opacity=50)"), m.style.zIndex = this._mZindex, m.style.top = "0px", m.style.left = "0px", m.style.width = "100%", m.style.height = NetFunnel.PopupUtil.getDocumentEntireHeight(this._mDoc) + "px", m.style.position = "absolute", m.style.border = "0px solid #FFFFFF", m.style.backgroundColor = "#FFFFFF", (l = this._mDoc.getElementsByTagName("BODY")[0]).appendChild(m)),
        u.style.position = "absolute",
        u.style.visibility = "hidden",
        this._mCount++,
        this._mMask = _,
        this._mPopIFrame = m,
        this._mObj = u,
        this._mTop = t,
        this._mLeft = n,
        this.mid = "mpopup_" + this._mCount,
        this.addListener(this._mWin, "resize", NetFunnel.PopupUtil.resizePopup),
        NetFunnel.gPopup.push(this)
    }
}, NetFunnel.Popup.prototype = new NetFunnel.Event, NetFunnel.Popup.prototype._mCount = 0, NetFunnel.Popup.prototype._mid = "", NetFunnel.Popup.prototype._mWin = window, NetFunnel.Popup.prototype._mDoc = document, NetFunnel.Popup.prototype._mObj = null, NetFunnel.Popup.prototype._mMask = null, NetFunnel.Popup.prototype._mPopIFrame = null, NetFunnel.Popup.prototype._mIsShown = !1, NetFunnel.Popup.prototype._mIframeResize = NetFunnel.TS_IFRAME_RESIZE, NetFunnel.Popup.prototype._mProgress = null, NetFunnel.Popup.prototype._mZindex = NetFunnel.TS_POPUP_ZINDEX, NetFunnel.Popup.prototype._setMaskSize = function () {
    var e = this._mDoc.getElementsByTagName("BODY")[0];
    if (e) {
        var t = 0;
        t = 1 == NetFunnel.Util.isSmartPhone() ? NetFunnel.PopupUtil.getViewportHeight(window, this._mDoc) : NetFunnel.PopupUtil.getViewportHeight(this._mWin, this._mDoc);
        var n = NetFunnel.PopupUtil.getViewportWidth(this._mWin, this._mDoc);
        t > e.scrollHeight ? t : e.scrollHeight,
        n > e.scrollWidth ? n : e.scrollWidth
    }
}, NetFunnel.Popup.prototype._centerPopWin = function () {
    if (this._mIsShown) {
        var e,
        t = this._mDoc.getElementsByTagName("BODY")[0];
        if (!t)
            return;
        e = 1 == NetFunnel.Util.isSmartPhone() ? window : "Explorer" == NetFunnel.BrowserDetect.browser ? this._mDoc : this._mWin;
        var n = parseInt(NetFunnel.PopupUtil.getScrollTop(e), 10),
        i = parseInt(t.scrollLeft, 10);
        this._setMaskSize();
        var o = 0;
        o = 1 == NetFunnel.Util.isSmartPhone() ? NetFunnel.PopupUtil.getViewportHeight(window, this._mDoc) : NetFunnel.PopupUtil.getViewportHeight(this._mWin, this._mDoc);
        var r = NetFunnel.PopupUtil.getViewportWidth(this._mWin, this._mDoc);
        "number" == typeof this._mTop ? this._mObj.style.top = this._mTop + "px" : this._mObj.style.top = n + (o - NetFunnel.PopupUtil.getObjHeight(this._mObj)) / 2 + "px",
        "number" == typeof this._mLeft ? this._mObj.style.left = this._mLeft + "px" : this._mObj.style.left = i + (r - NetFunnel.PopupUtil.getObjWidth(this._mObj)) / 2 + "px",
        this._mIframeResize && "object" == typeof this._mPopIFrame && (this._mPopIFrame.style.top = this._mObj.style.top, this._mPopIFrame.style.left = this._mObj.style.left, this._mPopIFrame.style.width = this._mObj.style.width, this._mPopIFrame.style.height = parseInt(this._mObj.style.height, 10) + 6)
    }
}, NetFunnel.Popup.prototype.getObj = function (e) {
    return this._mDoc.getElementById(e)
}, NetFunnel.Popup.prototype.show = function () {
    var e = this._mDoc.getElementsByTagName("BODY")[0];
    e && (e.style.overflow = "auto", this._mObj.style.zIndex = this._mZindex + 2, this._mObj.style.visibility = "visible", this._mObj.style.display = "block", this._mMask.style.visiblity = "visible", this._mMask.style.display = "block", this._mPopIFrame.style.visiblity = "visible", this._mPopIFrame.style.display = "block", this._mIsShown = !0, this._centerPopWin())
}, NetFunnel.Popup.prototype.hide = function () {
    var e = this._mDoc.getElementsByTagName("BODY")[0];
    e && (e.style.overflow = "auto", this._mObj.style.visibility = "hidden", this._mObj.style.display = "none", this._mMask.style.visiblity = "hidden", this._mMask.style.display = "none", this._mPopIFrame.style.visiblity = "hidden", this._mPopIFrame.style.display = "none", this._mIsShown = !1)
}, NetFunnel.Popup.prototype.destroy = function () {
    var e = this._mDoc.getElementsByTagName("BODY")[0];
    if (e) {
        var t = NetFunnel.gPopup.length;
        try {
            var n = this._mDoc.getElementById("mpopup_bg");
            e.removeChild(n)
        } catch (e) {}
        try {
            var i = this._mDoc.getElementById("pop_iframe");
            e.removeChild(i)
        } catch (e) {}
        for (var o = 0; o < t; o++) {
            var r = NetFunnel.gPopup.pop();
            if (r.mid != this.mid)
                NetFunnel.gPopup.push(r);
            else
                try {
                    e.removeChild(r._mObj)
                } catch (e) {}
        }
        this._mProgress && this._mProgress.hide()
    }
}, NetFunnel.RetVal = function (e) {
    this._mParam = {},
    this._mRtype = parseInt(e.substr(0, 4), 10),
    this._mCode = parseInt(e.substr(5, 3), 10),
    this._mRetStr = e.substr(9, e.length - 9),
    this._parse()
}, NetFunnel.RetVal.prototype._ltrim = function (e) {
    for (var t = 0; t < e.length && this._isWhitespace(e.charAt(t)); t++);
    return e.substring(t, e.length)
}, NetFunnel.RetVal.prototype._rtrim = function (e) {
    for (var t = e.length - 1; t >= 0 && this._isWhitespace(e.charAt(t)); t--);
    return e.substring(0, t + 1)
}, NetFunnel.RetVal.prototype._trim = function (e) {
    return this._ltrim(this._rtrim(e))
}, NetFunnel.RetVal.prototype._isWhitespace = function (e) {
    return -1 != " \t\n\r\f".indexOf(e)
}, NetFunnel.RetVal.prototype._parse = function () {
    for (var e = "", t = "", n = "", i = this._mRetStr.split("&"), o = 0; i.length > o; o++)
        (e = i[o].split("=")).length > 1 && (t = this._trim(e[0]), n = this._trim(e[1]), this._mParam[t] = n)
}, NetFunnel.RetVal.prototype.getRetCode = function () {
    return this._mCode
}, NetFunnel.RetVal.prototype.setRetCode = function (e) {
    return this._mCode = e,
    this._mCode
}, NetFunnel.RetVal.prototype.getReqType = function () {
    return this._mRtype
}, NetFunnel.RetVal.prototype.setReqType = function (e) {
    return this._mRtype = e,
    this._mRtype
}, NetFunnel.RetVal.prototype.getRetStr = function () {
    return this._mRetStr
}, NetFunnel.RetVal.prototype.getValue = function (e) {
    try {
        return this._mParam[e]
    } catch (e) {
        return null
    }
}, NetFunnel.RetVal.prototype.setValue = function (e, t) {
    var n = null;
    try {
        return this.isKeyExist(e) && (n = this.getValue(e)),
        this._mParam[e] = t,
        n
    } catch (e) {
        return null
    }
}, NetFunnel.RetVal.prototype.getNumber = function (e) {
    try {
        return parseInt(this._mParam[e], 10)
    } catch (e) {
        return 0
    }
}, NetFunnel.RetVal.prototype.isKeyExist = function (e) {
    try {
        if (null !== this._mParam[e])
            return !0
    } catch (e) {}
    return !1
}, NetFunnel.RetVal.prototype.getParam = function () {
    return this._mParam
}, NetFunnel.TsClient = function (e, t) {
    if (this.mConfig = {}, this.mConfig.host = NetFunnel.TS_HOST, this.mConfig.port = NetFunnel.TS_PORT, this.mConfig.proto = NetFunnel.TS_PROTO, this.mConfig.query = NetFunnel.TS_QUERY, this.mConfig.max_ttl = NetFunnel.TS_MAX_TTL, this.mConfig.conn_timeout = NetFunnel.TS_CONN_TIMEOUT, this.mConfig.conn_retry = NetFunnel.TS_CONN_RETRY, this.mConfig.cookie_id = NetFunnel.TS_COOKIE_ID, this.mConfig.cookie_time = NetFunnel.TS_COOKIE_TIME, this.mConfig.cookie_domain = NetFunnel.TS_COOKIE_DOMAIN, this.mConfig.showcnt_limit = NetFunnel.TS_SHOWCNT_LIMIT, this.mConfig.showtime_limit = NetFunnel.TS_SHOWTIME_LIMIT, this.mConfig.shownext_limit = NetFunnel.TS_SHOWNEXT_LIMIT, this.mConfig.popup_top = NetFunnel.TS_POPUP_TOP, this.mConfig.popup_left = NetFunnel.TS_POPUP_LEFT, this.mConfig.skin_id = NetFunnel.TS_SKIN_ID, this.mConfig.use_unfocus = NetFunnel.TS_USE_UNFOCUS, this.mConfig.virt_wait = NetFunnel.TS_VIRT_WAIT, this.mConfig.use_mobile_ui = NetFunnel.TS_USE_MOBILE_UI, this.mConfig.mp_use = NetFunnel.MP_USE, this.mConfig.use_frame_block = NetFunnel.TS_USE_FRAME_BLOCK, this.mConfig.frame_block_list = NetFunnel.TS_FRAME_BLOCK_LIST, this.mConfig.use_pre_wait = NetFunnel.TS_USE_PRE_WAIT, this.mConfig.popup_target = NetFunnel.TS_POPUP_TARGET, this.mConfig.user_data = !1, this.mConfig.user_data_keys = NetFunnel.TS_USER_DATA_KEYS, this.mConfig.block_msg = NetFunnel.TS_BLOCK_MSG, this.mConfig.block_url = NetFunnel.TS_BLOCK_URL, this.mConfig.ipblock_wait_count = NetFunnel.TS_IPBLOCK_WAIT_COUNT, this.mConfig.ipblock_wait_time = NetFunnel.TS_IPBLOCK_WAIT_TIME, this.mConfig.service_id = NetFunnel.TS_SERVICE_ID, this.mConfig.action_id = NetFunnel.TS_ACTION_ID, this.mConfig.show_wait_popup = NetFunnel.TS_SHOW_WAIT_POPUP, this.mConfig.config_use = NetFunnel.TS_CONFIG_USE, this.mConfig.popup_zindex = NetFunnel.TS_POPUP_ZINDEX, this.mConfig.ip_error_retry = NetFunnel.TS_IP_ERROR_RETRY, this.mConfig._host_changed = !1, this.mConfig._port_changed = !1, "object" == typeof e)
        for (var n in e)
            this.mConfig[n] = e[n], "host" == n && (this.mConfig._host_changed = !0), "port" == n && (this.mConfig._port_changed = !0);
    NetFunnel.gPopupLeft = this.mConfig.popup_left,
    NetFunnel.gPopupTop = this.mConfig.popup_top,
    NetFunnel.gPopupLeft = this.mConfig.popup_left,
    NetFunnel.gBlockList = this.mConfig.block_list,
    "" == this.mConfig.skin_id ? NetFunnel.gSkinId = NetFunnel.TS_SKIN_ID : NetFunnel.gSkinId = this.mConfig.skin_id,
    "boolean" != typeof this.mConfig.use_unfocus && ("string" == typeof this.mConfig.use_unfocus && "true" == this.mConfig.use_unfocus ? this.mConfig.use_unfocus = !0 : this.mConfig.use_unfocus = !1),
    NetFunnel.gUseUnfocus = this.mConfig.use_unfocus,
    "boolean" != typeof this.mConfig.use_mobile_ui && ("string" == typeof this.mConfig.use_mobile_ui && "true" == this.mConfig.use_mobile_ui ? this.mConfig.use_mobile_ui = !0 : this.mConfig.use_mobile_ui = !1),
    NetFunnel.gUseMobileUI = this.mConfig.use_mobile_ui,
    "boolean" != typeof this.mConfig.use_frame_block && ("string" == typeof this.mConfig.use_frame_block && "true" == this.mConfig.use_frame_block ? this.mConfig.use_frame_block = !0 : this.mConfig.use_frame_block = !1),
    1 == this.mConfig.use_frame_block ? this.mConfig.frame_block_list.length < 1 && (this.mConfig.frame_block_list = NetFunnel.Util.getFrameWindowList(this.mConfig.popup_target)) : this.mConfig.frame_block_list = [],
    this.id = 0,
    NetFunnel.TsClient._Objects[this.id] = this,
    NetFunnel.TsClient._Count += 1,
    t.onSuccess && this.addListener(this, "onSuccess", t.onSuccess),
    t.onContinued && this.addListener(this, "onContinued", t.onContinued),
    t.onBypass && this.addListener(this, "onBypass", t.onBypass),
    t.onBlock && this.addListener(this, "onBlock", t.onBlock),
    t.onIpBlock && this.addListener(this, "onIpBlock", t.onIpBlock),
    t.onError && this.addListener(this, "onError", t.onError),
    t.onStop && this.addListener(this, "onStop", t.onStop),
    t.onExpressnumber && this.addListener(this, "onExpressnumber", t.onExpressnumber),
    this.counter[NetFunnel.RTYPE_NONE] = 0,
    this.counter[NetFunnel.RTYPE_GET_TID_CHK_ENTER] = 0,
    this.counter[NetFunnel.RTYPE_GET_TID] = 0,
    this.counter[NetFunnel.RTYPE_CHK_ENTER] = 0,
    this.counter[NetFunnel.RTYPE_ALIVE_NOTICE] = 0,
    this.counter[NetFunnel.RTYPE_SET_COMPLETE] = 0,
    this.counter[NetFunnel.RTYPE_INIT] = 0,
    this.counter[NetFunnel.RTYPE_STOP] = 0,
    this.connTimeout = function e() {
        if (this != NetFunnel.gControl)
            return e.apply(NetFunnel.gControl, arguments);
        if (0 != NetFunnel.gAlreadyProc)
            return !1;
        if (this._resetScript(), this.counter[this._mReqType] < this.mConfig.conn_retry)
            switch (this._mStatus = NetFunnel.PS_TIMEOUT, this.counter[this._mReqType] += 1, this._mReqType) {
            case NetFunnel.RTYPE_GET_TID:
                return this.getTicketID(this.user_id, this.user_tid, !1),
                !0;
            case NetFunnel.RTYPE_CHK_ENTER:
                return this.chkEnter(this.key, !1),
                !0;
            case NetFunnel.RTYPE_GET_TID_CHK_ENTER:
                return this.getTidChkEnter(this.user_id, this.user_tid, !1),
                !0;
            case NetFunnel.RTYPE_ALIVE_NOTICE:
                return this.aliveNotice(this.key, "", "", !1),
                !0;
            case NetFunnel.RTYPE_SET_COMPLETE:
                return this.setComplete(this.key, "", "", !1),
                !0
            }
        (NetFunnel.PopupUtil.hideWaitPopup(), this._mReqType == NetFunnel.RTYPE_CHK_ENTER || this._mReqType == NetFunnel.RTYPE_GET_TID_CHK_ENTER) && new NetFunnel.Storage(2).setItem(this.mConfig.cookie_id, "5002:200:key=" + NetFunnel.CONN_TIMEOUT_KEY, 1, this.mConfig.cookie_domain);
        return !(NetFunnel.gAlreadyProc >= 1) && (this.fireEvent(null, this, "onError", {
                rtype: this._mReqType,
                code: NetFunnel.kErrorSockConnect,
                data: {
                    msg: "Connection Timeout"
                },
                next: this.next.error
            }), this._mStatus = NetFunnel.PS_ERROR, !0)
    }
}, NetFunnel.TsClient._Count = 0, NetFunnel.TsClient._Objects = {}, NetFunnel.TsClient.prototype = new NetFunnel.Event, NetFunnel.TsClient.prototype._initDone = !1, NetFunnel.TsClient.prototype.id = null, NetFunnel.TsClient.prototype.mConfig = null, NetFunnel.TsClient.prototype.key = null, NetFunnel.TsClient.prototype.script = null, NetFunnel.TsClient.prototype.alarm = null, NetFunnel.TsClient.prototype._mReqType = NetFunnel.RTYPE_NONE, NetFunnel.TsClient.prototype._mMousePos = 0, NetFunnel.TsClient.prototype._mNoActTime = 0, NetFunnel.TsClient.prototype._mStatus = NetFunnel.PS_N_RUNNING, NetFunnel.TsClient.prototype.counter = {}, NetFunnel.TsClient.prototype.next = {
    success: "",
    error: ""
}, NetFunnel.TsClient.prototype.init = function () {
    this._nCount++,
    this._initDone = !0
}, NetFunnel.TsClient.prototype.getConfig = function (e) {
    return this.mConfig[e]
}, NetFunnel.TsClient.prototype._isNoAction = function () {
    return this._mMousePos == NetFunnel.MouseX || (this._mMousePos = NetFunnel.MouseX, !1)
}, NetFunnel.TsClient.prototype._resetAlarm = function () {
    null !== this.alarm && clearTimeout(this.alarm),
    this.alarm = null
}, NetFunnel.TsClient.prototype._resetReTimer = function () {
    null !== NetFunnel.gReTimer && clearTimeout(NetFunnel.gReTimer),
    NetFunnel.gReTimer = null
}, NetFunnel.TsClient.prototype._resetRetryTimer = function () {
    null !== this.retryTimer && clearTimeout(this.retryTimer),
    this.retryTimer = null
}, NetFunnel.TsClient.prototype._resetScript = function () {
    try {
        if (this.script && "object" == typeof this.script) {
            var e = this.script.parentNode;
            e && "object" == typeof e && e.removeChild(this.script)
        }
    } catch (e) {}
    this.script = null
}, NetFunnel.TsClient.prototype.getUserdata = function () {
    try {
        var userdata = "",
        uKey = this.mConfig.user_data_keys;
        if ("string" == typeof this.mConfig.user_data)
            return this.mConfig.user_data;
        if ("Array" != Object.prototype.toString.call(uKey).slice(8, -1))
            return !1;
        for (var i = 0; i < uKey.length; i++) {
            var keydata = uKey[i];
            if ("object" == typeof keydata) {
                if ("v" == keydata.type)
                    try {
                        if (userdata = eval(keydata.key), "" != userdata)
                            break
                    } catch (e) {}
                if ("c" == keydata.type && (userdata = NetFunnel.Cookie.get(keydata.key), "" != userdata))
                    break
            }
        }
        return userdata
    } catch (e) {
        return !1
    }
}, NetFunnel.TsClient.prototype._showResult = function () {
    if (this._resetAlarm(), 1 != NetFunnel.gAlreadyProc || NetFunnel.gRtype != NetFunnel.RTYPE_GET_TID_CHK_ENTER)
        switch (NetFunnel.gAlreadyProc = 1, NetFunnel.PopupUtil.hideWaitPopup(), this.retval = new NetFunnel.RetVal(this.result), this.retval.getReqType() == NetFunnel.RTYPE_GET_TID_CHK_ENTER && this.retval.setReqType(NetFunnel.RTYPE_CHK_ENTER), NetFunnel.TS_DEBUG_MODE && NetFunnel.printDebugMsg("recv", this.result), NetFunnel.ttl = 0, this.counter[this._mReqType] = 0, this.retval.getRetCode() == NetFunnel.kContinueDebug ? NetFunnel.gDebugflag = !0 : NetFunnel.gDebugflag = !1, this.retval.getReqType()) {
        case NetFunnel.RTYPE_GET_TID:
            this._showResultGetTicketID(this.retval);
            break;
        case NetFunnel.RTYPE_CHK_ENTER:
            this._showResultChkEnter(this.retval);
            break;
        case NetFunnel.RTYPE_ALIVE_NOTICE:
            this._showResultAliveNotice(this.retval);
            break;
        case NetFunnel.RTYPE_SET_COMPLETE:
            this._showResultSetComplete(this.retval);
            break;
        default:
            new NetFunnel.Storage(2).removeItem(this.mConfig.cookie_id),
            this.fireEvent(null, this, "onError", {
                rtype: NetFunnel.RTYPE_NONE,
                code: this.retval.getRetCode(),
                data: this.retval.getParam(),
                next: this.next.error
            }),
            this._mStatus = NetFunnel.PS_ERROR
        }
}, NetFunnel.TsClient.prototype._showResultGetTicketID = function (e) {
    var t = new NetFunnel.Storage(2);
    switch (e.getRetCode()) {
    case NetFunnel.kSuccess:
        t.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain),
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onSuccess", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.success
        });
        break;
    default:
        t.removeItem(this.mConfig.cookie_id),
        this._mStatus = NetFunnel.PS_ERROR,
        this.fireEvent(null, this, "onError", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.error
        })
    }
}, NetFunnel.TsClient.prototype._showResultChkEnter = function (e) {
    var t = this,
    n = new NetFunnel.Storage(2);
    switch (e.getRetCode()) {
    case NetFunnel.kSuccess:
        n.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain),
        this._mStatus = NetFunnel.PS_N_RUNNING,
        NetFunnel.gNWaitTemp = 0,
        NetFunnel.gNWaitCount = 0,
        this.fireEvent(null, this, "onSuccess", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.success
        });
        break;
    case NetFunnel.kContinueDebug:
    case NetFunnel.kContinue:
        this._mStatus = NetFunnel.PS_CONTINUE;
        var i = e.getNumber("ttl");
        i > this.mConfig.max_ttl && (i = this.mConfig.max_ttl, e.setValue("ttl", i));
        var o = e.getNumber("nwait");
        if (NetFunnel.TS_NWAIT_BYPASS && (NetFunnel.gNWaitTemp == o ? NetFunnel.gNWaitCount += 1 : (NetFunnel.gNWaitTemp = o, NetFunnel.gNWaitCount = 0), NetFunnel.TS_MAX_NWAIT_COUNT <= NetFunnel.gNWaitCount)) {
            this.fireEvent(null, this, "onSuccess", {
                rtype: e.getReqType(),
                code: e.getRetCode(),
                data: e.getParam(),
                next: this.next.success
            });
            break
        }
        this.fireEvent(null, this, "onContinued", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.continued
        }),
        NetFunnel.gAlreadyProc = 0,
        i > 0 && this._mStatus != NetFunnel.PS_N_RUNNING && (this.retryTimer && clearTimeout(this.retryTimer), NetFunnel.ttl = i, this.retryTimer = setTimeout(function () {
                    t.chkEnterCont(t.retval.getValue("key"))
                }, 1e3 * i));
        break;
    case NetFunnel.kTsBlock:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        n.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain),
        this.fireEvent(null, this, "onBlock", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.block
        }),
        this.retryTimer && clearTimeout(this.retryTimer),
        NetFunnel.ttl = i;
        break;
    case NetFunnel.kTsIpBlock:
        if (this._mStatus = NetFunnel.PS_N_RUNNING, this.retryTimer && clearTimeout(this.retryTimer), NetFunnel.gAlreadyProc = 0, !(this.mConfig.ipblock_wait_count >= NetFunnel.gIPBlockWaitCount + 1)) {
            n.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain),
            this._mStatus = NetFunnel.PS_N_RUNNING,
            this.fireEvent(null, this, "onSuccess", {
                rtype: e.getReqType(),
                code: e.getRetCode(),
                data: e.getParam(),
                next: this.next.success
            });
            break
        }
        NetFunnel.gReTimer = setTimeout(function () {
                t.getTidChkEnter(t.user_id, t.user_tid, !0)
            }, this.mConfig.ipblock_wait_time),
        this.fireEvent(null, this, "onIpBlock", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.ipblock
        }),
        0 != this.mConfig.ipblock_wait_count && (NetFunnel.gIPBlockWaitCount += 1);
        break;
    case NetFunnel.kTsBypass:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        n.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain),
        this.fireEvent(null, this, "onBypass", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.bypass
        });
        break;
    case NetFunnel.kTsExpressNumber:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        n.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain),
        this.fireEvent(null, this, "onExpressnumber", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.expressnumber
        });
        break;
    default:
        n.removeItem(this.mConfig.cookie_id),
        this._mStatus = NetFunnel.PS_ERROR,
        e.getRetCode() == NetFunnel.kTsErrorInvalidIp && 1 == this.mConfig.ip_error_retry ? (NetFunnel.gAlreadyProc = 0, this._mStatus = NetFunnel.PS_N_RUNNING, NetFunnel.gReTimer = setTimeout(function () {
                    t.getTidChkEnter(t.user_id, t.user_tid, !0, NetFunnel.gTotWait)
                }, 100)) : (this._mStatus = NetFunnel.PS_ERROR, this.fireEvent(null, this, "onError", {
                rtype: e.getReqType(),
                code: e.getRetCode(),
                data: e.getParam(),
                next: this.next.error
            }))
    }
}, NetFunnel.TsClient.prototype._showResultAliveNotice = function (e) {
    var t = new NetFunnel.Storage(2);
    switch (e.getRetCode()) {
    case NetFunnel.kSuccess:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onSuccess", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.success
        });
        break;
    case NetFunnel.kContinueDebug:
    case NetFunnel.kContinue:
        if (this._mStatus = NetFunnel.PS_CONTINUE, this._mNoActTime > this.mConfig.no_action) {
            this.fireEvent(null, this, "onError", {
                rtype: e.getReqType(),
                code: NetFunnel.kTsErrorNoUserAction,
                data: e.getParam(),
                next: this.next.error
            }),
            this._mNoActTime = 0,
            this._mStatus = NetFunnel.PS_ERROR;
            break
        }
        var n = e.getNumber("ttl");
        if (n > this.mConfig.max_ttl && (n = this.mConfig.max_ttl, e.setValue("ttl", n)), this.fireEvent(null, this, "onContinued", {
                rtype: e.getReqType(),
                code: e.getRetCode(),
                data: e.getParam(),
                next: this.next.continued
            }), NetFunnel.gAlreadyProc = 0, n > 0 && this._mStatus != NetFunnel.PS_N_RUNNING) {
            this.retryTimer && clearTimeout(this.retryTimer),
            this._isNoAction() ? this._mNoActTime += n : this._mNoActTime = 0,
            t.setItem(this.mConfig.cookie_id, this.result, this.mConfig.cookie_time, this.mConfig.cookie_domain);
            var i = this;
            this.retryTimer = setTimeout(function () {
                    i.aliveNoticeCont(i.retval.getValue("key"), i.retval.getValue("ip"), i.retval.getValue("port"), i.retval.getValue("first"))
                }, 1e3 * n)
        }
        break;
    case NetFunnel.kTsBlock:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onBlock", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.block
        });
        break;
    case NetFunnel.kTsExpressNumber:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onExpressnumber", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.expressnumber
        });
        break;
    case NetFunnel.kTsBypass:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onBypass", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.bypass
        });
        break;
    case NetFunnel.kTsIpBlock:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onIpBlock", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.ipblock
        });
        break;
    default:
        e.getRetCode() == NetFunnel.kErrorExpiredTime && t.removeItem(this.mConfig.cookie_id),
        this._mStatus = NetFunnel.PS_ERROR,
        this.fireEvent(null, this, "onError", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.error
        })
    }
}, NetFunnel.TsClient.prototype._showResultSetComplete = function (e) {
    switch (new NetFunnel.Storage(2).removeItem(this.mConfig.cookie_id), e.getRetCode()) {
    case NetFunnel.kSuccess:
        this._mStatus = NetFunnel.PS_N_RUNNING,
        this.fireEvent(null, this, "onSuccess", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.success
        });
        break;
    default:
        this._mStatus = NetFunnel.PS_ERROR,
        this.fireEvent(null, this, "onError", {
            rtype: e.getReqType(),
            code: e.getRetCode(),
            data: e.getParam(),
            next: this.next.error
        })
    }
}, NetFunnel.TsClient.prototype._connInit = function (e) {
    this.result = null,
    this._mReqType = e,
    this._resetAlarm(),
    this._resetScript(),
    this._resetRetryTimer();
    var t = this;
    return this.alarm = setTimeout(function () {
            t.connTimeout(0)
        }, 1e3 * parseInt(this.mConfig.conn_timeout, 10)),
    !(!this.mConfig.host || "" == this.mConfig.host) && (!(!this.mConfig.port || "" == this.mConfig.port) && (!(!this.mConfig.query || "" == this.mConfig.query) && (!(!this.mConfig.service_id || "" == this.mConfig.service_id) && (!(!this.mConfig.action_id || "" == this.mConfig.action_id) && (this._mStatus = NetFunnel.PS_RUNNING, !0)))))
}, NetFunnel.TsClient.prototype._sendRequest = function (e) {
    this.script = document.createElement("script"),
    this.script.src = e;
    var t = document.getElementsByTagName("head").item(0);
    return NetFunnel.TS_DEBUG_MODE && NetFunnel.printDebugMsg("send", e),
    t.appendChild(this.script),
    !0
}, NetFunnel.TsClient.prototype._sendError = function (e, t) {
    var n = "";
    switch (t) {
    case NetFunnel.kErrorAlready:
        n = "Already running";
        break;
    case NetFunnel.kErrorNoinit:
        n = "Uninitialized object";
        break;
    case NetFunnel.kErrorSystem:
    default:
        n = "System error"
    }
    this.fireEvent(null, this, "onError", {
        rtype: e,
        code: t,
        data: {
            msg: n
        },
        next: this.next.error
    })
}, NetFunnel.TsClient.prototype.setNext = function (e) {
    if ("object" == typeof e)
        this.next = e;
    else
        try {
            this.next.success = void 0,
            this.next.continued = void 0,
            this.next.bypass = void 0,
            this.next.expressnumber = void 0,
            this.next.block = void 0,
            this.next.ipblock = void 0,
            this.next.error = void 0,
            this.next.stop = void 0
        } catch (e) {
            this.next.success = window.undefined,
            this.next.continued = window.undefined,
            this.next.bypass = window.undefined,
            this.next.expressnumber = window.undefined,
            this.next.block = window.undefined,
            this.next.ipblock = window.undefined,
            this.next.error = window.undefined,
            this.next.stop = window.undefined
        }
}, NetFunnel.TsClient.prototype.sendStop = function (e) {
    return 1 == NetFunnel.TS_BYPASS ? (this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), !0) : ("undefined" == e && (e = !0), e && (this.counter[NetFunnel.RTYPE_STOP] = 0), this._resetReTimer(), this._resetAlarm(), this._resetRetryTimer(), this._resetScript(), this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), this._mStatus = NetFunnel.PS_N_RUNNING, !0)
}, NetFunnel.TsClient.prototype.getTicketID = function (e, t, n) {
    if (NetFunnel.gPrevWaitTime = -1, 1 == NetFunnel.TS_BYPASS)
        return this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), !0;
    1 == this.mConfig.use_unfocus && NetFunnel.Util.delFocus(this.getConfig("popup_target")),
    NetFunnel.gTotWait = -1,
    NetFunnel.retryData = null;
    var i = 1 == this.mConfig.mp_use ? NetFunnel.MProtect() : 0;
    if (0 != i) {
        this.fireEvent(null, this, "onContinued", {
            rtype: NetFunnel.RTYPE_CHK_ENTER,
            code: NetFunnel.kContinue,
            data: {
                tps: 1,
                eps: 2,
                nwait: 2 * NetFunnel.gControl.getConfig("showcnt_limit"),
                mprotect: i,
                ttl: 10
            }
        }),
        this.retryTimer && clearTimeout(this.retryTimer),
        NetFunnel.retryData = {
            user_id: e,
            user_tid: t,
            first: n
        };
        var o = this;
        return this.retryTimer = setTimeout(function () {
                o.retryFunction(NetFunnel.RTYPE_GET_TID)
            }, this.mConfig.virt_wait),
        !1
    }
    if ("undefined" == n && (n = !0), n && (this.counter[NetFunnel.RTYPE_GET_TID] = 0), this._mStatus == NetFunnel.PS_RUNNING)
        return this._sendError(NetFunnel.RTYPE_GET_TID, NetFunnel.kErrorAlready), !1;
    this.user_id = e,
    this.user_tid = t;
    var r = this.mConfig.proto + "://" + this.mConfig.host + ":" + this.mConfig.port + "/" + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_GET_TID + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_GET_TID + ";";
    r += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
    var s = this.getUserdata();
    return "" != s && (r += "&user_data=" + s),
    r += "&js=yes",
    r += "&" + (new Date).getTime(),
    this._connInit(NetFunnel.RTYPE_GET_TID) ? (this._sendRequest(r), !0) : (this._sendError(NetFunnel.RTYPE_GET_TID, NetFunnel.kErrorNoinit), !1)
}, NetFunnel.TsClient.prototype.chkEnter = function (e, t) {
    return 1 == NetFunnel.TS_BYPASS ? (this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), !0) : this._mStatus == NetFunnel.PS_RUNNING || this._mStatus == NetFunnel.PS_CONTINUE ? (this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorAlready), !1) : this.chkEnterProc(e, t)
}, NetFunnel.TsClient.prototype.chkEnterCont = function (e, t) {
    return this._mStatus == NetFunnel.PS_RUNNING ? (this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorAlready), !1) : this.chkEnterProc(e, t)
}, NetFunnel.TsClient.prototype.chkEnterProc = function (e, t) {
    if ("undefined" == t && (t = !0), t && (this.counter[NetFunnel.RTYPE_CHK_ENTER] = 0), !e || "" == e) {
        if (!this.key)
            return this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorParam), !1;
        e = this.key
    }
    this.key = e;
    var n = this.retval.getValue("ip");
    this.mConfig.conn_retry > 1 && this.counter[this._mReqType] == this.mConfig.conn_retry && (n = this.mConfig.config_use);
    var i = this.retval.getValue("port"),
    o = "";
    o = (o = n && "" != n && i && "" != i && !this.mConfig.config_use ? this.mConfig.proto + "://" + n + ":" + i + "/" : this.mConfig.proto + "://" + this.mConfig.host + ":" + this.mConfig.port + "/") + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_CHK_ENTER + "&key=" + e + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_CHK_ENTER + ";",
    NetFunnel.ttl > 0 && (o = o + "&ttl=" + NetFunnel.ttl),
    o += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
    var r = this.getUserdata();
    return "" != r && (o += "&user_data=" + r),
    o += "&js=yes",
    o += "&" + (new Date).getTime(),
    this._connInit(NetFunnel.RTYPE_CHK_ENTER) ? (this._sendRequest(o), !0) : (this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorNoinit), !1)
}, NetFunnel.retryData = null, NetFunnel.retryFunction = function (e) {
    if ("object" == typeof NetFunnel.retryData) {
        var t = NetFunnel.retryData;
        e == NetFunnel.RTYPE_GET_TID ? NetFunnel.gControl.getTicketID(t.user_id, t.user_tid, t.first) : e == NetFunnel.RTYPE_GET_TID_CHK_ENTER && NetFunnel.gControl.getTidChkEnter(t.user_id, t.user_tid, t.first)
    }
}, NetFunnel.TsClient.prototype.getTidChkEnter = function (e, t, n, i) {
    if (NetFunnel.gPrevWaitTime = -1, 1 == NetFunnel.TS_BYPASS)
        return this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), !0;
    if (this._mStatus == NetFunnel.PS_RUNNING || this._mStatus == NetFunnel.PS_CONTINUE)
        return this._sendError(NetFunnel.RTYPE_CHK_ENTER, NetFunnel.kErrorAlready), !1;
    1 == this.mConfig.use_unfocus && NetFunnel.Util.delFocus(this.getConfig("popup_target")),
    NetFunnel.gTotWait = null == i || isNaN(i) ? -1 : i,
    NetFunnel.retryData = null;
    var o = 1 == this.mConfig.mp_use ? NetFunnel.MProtect() : 0;
    return 0 == o && 0 == this.mConfig.show_wait_popup ? (this.getConfig("use_pre_wait") && NetFunnel.PopupUtil.showWaitPopup(), this.getTidChkEnterProc(e, t, n)) : (this.fireEvent(null, this, "onContinued", {
            rtype: NetFunnel.RTYPE_CHK_ENTER,
            code: NetFunnel.kContinue,
            data: {
                tps: 1,
                eps: 2,
                nwait: 2 * NetFunnel.gControl.getConfig("showcnt_limit"),
                mprotect: o,
                ttl: 10
            }
        }), this.retryTimer && clearTimeout(this.retryTimer), NetFunnel.retryData = {
            user_id: e,
            user_tid: t,
            first: n
        }, this.retryTimer = setTimeout(function () {
                NetFunnel.retryFunction(NetFunnel.RTYPE_GET_TID_CHK_ENTER)
            }, this.mConfig.virt_wait), !1)
}, NetFunnel.TsClient.prototype.getTidChkEnterProc = function (e, t, n) {
    "undefined" == n && (n = !0),
    n && (this.counter[NetFunnel.RTYPE_GET_TID_CHK_ENTER] = 0),
    this.user_id = e,
    this.user_tid = t;
    var i = this.mConfig.proto + "://" + this.mConfig.host + ":" + this.mConfig.port + "/" + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_GET_TID_CHK_ENTER + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_GET_TID_CHK_ENTER + ";";
    NetFunnel.ttl > 0 && (i = i + "&ttl=" + NetFunnel.ttl),
    i += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id,
    i += "&js=yes";
    var o = this.getUserdata();
    return "" != o && (i += "&user_data=" + o),
    i += "&" + (new Date).getTime(),
    this._connInit(NetFunnel.RTYPE_GET_TID_CHK_ENTER) ? (this._sendRequest(i), !0) : (this._sendError(NetFunnel.RTYPE_GET_TID_CHK_ENTER, NetFunnel.kErrorNoinit), !1)
}, NetFunnel.TsClient.prototype.aliveNoticeProc = function (e, t, n, i) {
    if ("undefined" == i && (i = !0), i && (this.counter[NetFunnel.RTYPE_ALIVE_NOTICE] = 0), !e || "" == e) {
        if (!this.key)
            return this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorParam), !1;
        e = this.key
    }
    this.key = e,
    this.ip = t,
    this.port = n,
    this.mConfig.conn_retry > 1 && this.counter[this._mReqType] == this.mConfig.conn_retry && (t = this.mConfig.config_use);
    var o = "";
    t && "" != t && n && "" != n && !this.mConfig.config_use ? (this.ip = 0 == this.mConfig._host_changed ? t : this.mConfig.host, this.port = 0 == this.mConfig._port_changed ? n : this.mConfig.port, o = this.mConfig.proto + "://" + this.ip + ":" + this.port + "/") : o = this.mConfig.proto + "://" + this.mConfig.host + ":" + this.mConfig.port + "/",
    o = o + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_ALIVE_NOTICE + "&key=" + e + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_ALIVE_NOTICE + ";",
    o += "&sid=" + this.mConfig.service_id + "&aid=" + this.mConfig.action_id;
    var r = this.getUserdata();
    return "" != r && (o += "&user_data=" + r),
    o += "&js=yes",
    o += "&" + (new Date).getTime(),
    this._connInit(NetFunnel.RTYPE_ALIVE_NOTICE) ? (this._sendRequest(o), !0) : (this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorNoinit), !1)
}, NetFunnel.TsClient.prototype.aliveNotice = function (e, t, n, i) {
    return 1 == NetFunnel.TS_BYPASS ? (this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), !0) : this._mStatus == NetFunnel.PS_RUNNING || this._mStatus == NetFunnel.PS_CONTINUE ? (this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorAlready), !1) : this.aliveNoticeProc(e, t, n, i)
}, NetFunnel.TsClient.prototype.aliveNoticeCont = function (e, t, n, i) {
    return this._mStatus == NetFunnel.PS_RUNNING ? (this._sendError(NetFunnel.RTYPE_ALIVE_NOTICE, NetFunnel.kErrorAlready), !1) : this.aliveNoticeProc(e, t, n, i)
}, NetFunnel.TsClient.prototype.setComplete = function (e, t, n, i) {
    if ((new NetFunnel.Storage).setItemStorageOnly("NFMPT.reqCnt", "0"), 1 == NetFunnel.TS_BYPASS)
        return this.fireEvent(null, this, "onSuccess", {
            rtype: this._mReqType,
            code: NetFunnel.kSuccess,
            data: {},
            next: this.next.success
        }), !0;
    if ("undefined" == i && (i = !0), i && (this.counter[NetFunnel.RTYPE_SET_COMPLETE] = 0), this._mStatus == NetFunnel.PS_RUNNING)
        return this._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorAlready), !1;
    if (!e || "" == e) {
        if (!this.key)
            return this._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorParam), !1;
        e = this.key
    }
    if (this.key = e, this.ip = t, this.mConfig.conn_retry > 1 && this.counter[this._mReqType] == this.mConfig.conn_retry - 1 && (t = this.mConfig.config_use), this.port = n, e == NetFunnel.CONN_TIMEOUT_KEY) {
        var o = new NetFunnel.RetVal(NetFunnel.RTYPE_SET_COMPLETE + ":" + NetFunnel.kSuccess + ":utime=1");
        return this._showResultSetComplete(o),
        !0
    }
    var r = "";
    t && "" != t && n && "" != n && !this.mConfig.config_use ? (this.ip = 0 == this.mConfig._host_changed ? t : this.mConfig.host, this.port = 0 == this.mConfig._port_changed ? n : this.mConfig.port, r = this.mConfig.proto + "://" + this.ip + ":" + this.port + "/") : r = this.mConfig.proto + "://" + this.mConfig.host + ":" + this.mConfig.port + "/",
    r = r + this.mConfig.query + "?opcode=" + NetFunnel.RTYPE_SET_COMPLETE + "&key=" + e + "&nfid=" + this.id + "&prefix=NetFunnel.gRtype=" + NetFunnel.RTYPE_SET_COMPLETE + ";";
    var s = this.getUserdata();
    return "" != s && (r += "&user_data=" + s),
    r += "&js=yes",
    r += "&" + (new Date).getTime(),
    this._connInit(NetFunnel.RTYPE_SET_COMPLETE) ? (this._sendRequest(r), !0) : (this._sendError(NetFunnel.RTYPE_SET_COMPLETE, NetFunnel.kErrorNoinit), !1)
}, NetFunnel.TsClient.prototype.cookieExist = function () {
    var e = new NetFunnel.Storage(2),
    t = e.getItem(this.mConfig.cookie_id);
    return 0 != t && "" != t && (!!new NetFunnel.RetVal(t).getValue("key") || (e.removeItem(this.mConfig.cookie_id), !1))
}, NetFunnel.TsClient.prototype.isRunning = function () {
    return this._mStatus == NetFunnel.PS_RUNNING || this._mStatus == NetFunnel.PS_CONTINUE
}, 1 == NetFunnel.TS_AUTO_COMPLETE && NetFunnel_Complete();
