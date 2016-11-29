"use strict";
!function () {
    var e = navigator.userAgent;
    if (e.indexOf("wechatdevtools") > 0) {
        var n, i, t, o, r;
        !function () {
            var s = function (e, i) {
                r[e] && r[e].fn ? r[e].fn(i) : m[e] && n(m[e])
            }, a = function () {
                window.WeixinJSBridge = o;
                var e = document.createEvent("UIEvent");
                e.initEvent("WeixinJSBridgeReady", !1, !1), document.dispatchEvent(e);
                var n = document.createEvent("UIEvent");
                n.initEvent("_WeixinJSBridgeReady", !1, !1), document.dispatchEvent(n)
            };
            window.nw = void 0;
            var c = parseInt(e.match(/webview\/(\d*)/)[1]), d = -1 !== e.indexOf("Android"), u = -1 !== e.indexOf("iPhone");
            window.addEventListener("load", function () {
                try {
                    Object.defineProperty && !function () {
                        var e = function () {
                            return u ? "iPhone" : "Android"
                        }, n = document.createElement("div");
                        n.style.cssText = "position:absolute;left:0;right:0;top:0;bottom:0;opacity:0", document.body.appendChild(n);
                        var i = n.offsetWidth, t = n.offsetHeight, o = function () {
                            return i
                        }, r = function () {
                            return t
                        };
                        document.body.removeChild(n), Object.defineProperty(navigator, "platform", {get: e}), Object.defineProperty(screen, "height", {get: r}), Object.defineProperty(screen, "width", {get: o}), Object.defineProperty(screen, "availHeight", {get: r}), Object.defineProperty(screen, "availWidth", {get: o})
                    }()
                } catch (e) {
                }
            });
            var m = {
                "menu:share:timeline": "shareTimeline",
                "menu:share:appmessage": "sendAppMessage",
                "menu:share:qq": "shareQQ",
                "menu:share:weiboApp": "shareWeiboApp",
                "menu:share:QZone": "shareQZone"
            }, f = {
                shareTimeline: "menu:share:timeline",
                sendAppMessage: "menu:share:appmessage",
                shareQQ: "menu:share:qq",
                shareWeiboApp: "menu:share:weiboApp",
                shareQZone: "menu:share:QZone"
            };
            n = function (e, n, i) {
                var t = {};
                t.sdkName = e, t.args = n, t.ext = {
                    isOn: i,
                    origin: document.origin,
                    url: location.href,
                    domain: document.domain,
                    title: document.title,
                    desc: document.title,
                    img_url: document.images.length ? document.images[0].src : "http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0",
                    link: void 0
                }, window.postMessage(JSON.stringify(t), "*")
            }, i = function (e) {
                console.log(r);
                var n = e.type, i = e.sdkName;
                if ("REGISTER_SDK" === n)console.info("[JSSDK Info] 注册 %c %s", "color:blue", i); else {
                    var t = e.isErr;
                    if (t) {
                        var o = f[i] || i;
                        if (!r[o])return;
                        console.error("[JSSDK Error] %s \ninput %s;\noutput %s", i, JSON.stringify(e.inputArgs || {}), JSON.stringify(e.sdkRes || {}))
                    } else console.info("[JSSDK Info]%c %s %c \ninput %c %s; %c \noutput %c %s", "color:blue", i, "color:black", "color:purple", JSON.stringify(e.inputArgs || {}), "color:black", "color:purple", JSON.stringify(e.sdkRes || {}))
                }
            }, t = function (e, n) {
                window.WeixinJSBridge ? s(e, n) : document.addEventListener("_WeixinJSBridgeReady", function () {
                    s(e, n)
                })
            }, window.addEventListener("message", function (e) {
                var n = e.origin;
                if (-1 !== n.indexOf("chrome-extension://")) {
                    var o = e.data;
                    if (c === o.webviewID) {
                        d && ("checkJsApi" === o.sdkName ? o.res.checkResult = JSON.stringify(o.res.checkResult) : "chooseImage" === o.sdkName && (o.res.localIds = JSON.stringify(o.res.localIds)));
                        var r = o.command, s = o.sdkName, a = o.ext, u = o.res || {};
                        a && a.domain !== document.domain || ("GET_JSSDK_RES" === r ? t(s, u) : "INVOKE_SDK" === r ? t(s, u) : "SHOW_CONSOLE_LOG" === r && i(o.data))
                    }
                }
            }), o = {}, r = {}, o.invoke = function (e, i, t) {
                r[e] = {fn: t}, n(e, i)
            }, o.on = function (e, i) {
                r[e] = {fn: i}, n(e, {}, !0)
            }, o.call = function () {
                console.error("WeixinJSBridge.call 不被支持，请参考 http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html 进行正确调用")
            }, o.log = function (e) {
                console.log(e)
            }, "complete" === document.readyState ? a() : window.addEventListener("load", function (e) {
                a()
            })
        }()
    }
}();