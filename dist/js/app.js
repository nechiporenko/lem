// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);

/**
 * bxSlider v4.2.5
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function (a) { var b = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function () { return !0 }, onSlideBefore: function () { return !0 }, onSlideAfter: function () { return !0 }, onSlideNext: function () { return !0 }, onSlidePrev: function () { return !0 }, onSliderResize: function () { return !0 } }; a.fn.bxSlider = function (c) { if (0 === this.length) return this; if (this.length > 1) return this.each(function () { a(this).bxSlider(c) }), this; var d = {}, e = this, f = a(window).width(), g = a(window).height(); if (!a(e).data("bxSlider")) { var h = function () { a(e).data("bxSlider") || (d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = { index: d.settings.startSlide }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function () { for (var a = document.createElement("div"), b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], c = 0; c < b.length; c++) if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0; return !1 }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function () { a(this).data("origStyle", a(this).attr("style")) }), j()) }, j = function () { var b = d.children.eq(d.settings.startSlide); e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.settings.ariaLive && !d.settings.ticker && d.viewport.attr("aria-live", "polite"), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({ width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto", position: "relative" }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing"), d.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), d.viewport.parent().css({ maxWidth: n() }), d.settings.pager || d.settings.controls || d.viewport.parent().css({ margin: "0 auto 0px" }), d.children.css({ "float": "horizontal" === d.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({ position: "absolute", zIndex: 0, display: "none" }), d.children.eq(d.settings.startSlide).css({ zIndex: d.settings.slideZIndex, display: "block" })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids(), ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l) }, k = function (b, c) { var d = b.find('img:not([src=""]), iframe').length, e = 0; return 0 === d ? void c() : void b.find('img:not([src=""]), iframe').each(function () { a(this).one("load error", function () { ++e === d && c() }).each(function () { this.complete && a(this).load() }) }) }, l = function () { if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) { var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides, c = d.children.slice(0, b).clone(!0).addClass("bx-clone"), f = d.children.slice(-b).clone(!0).addClass("bx-clone"); d.settings.ariaHidden && (c.attr("aria-hidden", !0), f.attr("aria-hidden", !0)), e.append(c).prepend(f) } d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad.call(e, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M) }, m = function () { var b = 0, c = a(); if ("vertical" === d.settings.mode || d.settings.adaptiveHeight) if (d.carousel) { var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r(); for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++) c = e + i >= d.children.length ? c.add(d.children.eq(i - 1)) : c.add(d.children.eq(e + i)) } else c = d.children.eq(d.active.index); else c = d.children; return "vertical" === d.settings.mode ? (c.each(function (c) { b += a(this).outerHeight() }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function () { return a(this).outerHeight(!1) }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b }, n = function () { var a = "100%"; return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a }, o = function () { var a = d.settings.slideWidth, b = d.viewport.width(); if (0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode) a = b; else if (d.settings.maxSlides > 1 && "horizontal" === d.settings.mode) { if (b > d.maxThreshold) return a; b < d.minThreshold ? a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides : d.settings.shrinkItems && (a = Math.floor((b + d.settings.slideMargin) / Math.ceil((b + d.settings.slideMargin) / (a + d.settings.slideMargin)) - d.settings.slideMargin)) } return a }, p = function () { var a = 1, b = null; return "horizontal" === d.settings.mode && d.settings.slideWidth > 0 ? d.viewport.width() < d.minThreshold ? a = d.settings.minSlides : d.viewport.width() > d.maxThreshold ? a = d.settings.maxSlides : (b = d.children.first().width() + d.settings.slideMargin, a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)) : "vertical" === d.settings.mode && (a = d.settings.minSlides), a }, q = function () { var a = 0, b = 0, c = 0; if (d.settings.moveSlides > 0) if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r()); else for (; b < d.children.length;)++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p(); else a = Math.ceil(d.children.length / p()); return a }, r = function () { return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p() }, s = function () { var a, b, c; d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop ? "horizontal" === d.settings.mode ? (b = d.children.last(), a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)) : "vertical" === d.settings.mode && (c = d.children.length - d.settings.minSlides, a = d.children.eq(c).position(), t(-a.top, "reset", 0)) : (a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))) }, t = function (b, c, f, g) { var h, i; d.usingCSS ? (i = "vertical" === d.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", e.css("-" + d.cssPrefix + "-transition-duration", f / 1e3 + "s"), "slide" === c ? (e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()) }) : F()) : "reset" === c ? e.css(d.animProp, i) : "ticker" === c && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, i), 0 !== f ? e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (b) { a(b.target).is(e) && (e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(g.resetValue, "reset", 0), K()) }) : (t(g.resetValue, "reset", 0), K()))) : (h = {}, h[d.animProp] = b, "slide" === c ? e.animate(h, f, d.settings.easing, function () { F() }) : "reset" === c ? e.css(d.animProp, b) : "ticker" === c && e.animate(h, f, "linear", function () { t(g.resetValue, "reset", 0), K() })) }, u = function () { for (var b = "", c = "", e = q(), f = 0; e > f; f++) c = "", d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (c = d.settings.buildPager(f), d.pagerEl.addClass("bx-custom-pager")) : (c = f + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + c + "</a></div>"; d.pagerEl.html(b) }, v = function () { d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D) }, w = function () { d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl)) }, x = function () { d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start") }, y = function () { d.children.each(function (b) { var c = a(this).find("img:first").attr("title"); void 0 !== c && ("" + c).length && a(this).append('<div class="bx-caption"><span>' + c + "</span></div>") }) }, z = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToNextSlide()) }, A = function (a) { a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), e.goToPrevSlide()) }, B = function (a) { e.startAuto(), a.preventDefault() }, C = function (a) { e.stopAuto(), a.preventDefault() }, D = function (b) { var c, f; b.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && d.settings.stopAutoOnClick && e.stopAuto(), c = a(b.currentTarget), void 0 !== c.attr("data-slide-index") && (f = parseInt(c.attr("data-slide-index")), f !== d.active.index && e.goToSlide(f))) }, E = function (b) { var c = d.children.length; return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function (c, d) { a(d).find("a").eq(b).addClass("active") })) }, F = function () { if (d.settings.infiniteLoop) { var a = ""; 0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0)) } d.working = !1, d.settings.onSlideAfter.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) }, G = function (a) { d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active")) }, H = function () { 1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled"))) }, I = function () { if (d.settings.autoDelay > 0) { setTimeout(e.startAuto, d.settings.autoDelay) } else e.startAuto(), a(window).focus(function () { e.startAuto() }).blur(function () { e.stopAuto() }); d.settings.autoHover && e.hover(function () { d.interval && (e.stopAuto(!0), d.autoPaused = !0) }, function () { d.autoPaused && (e.startAuto(!0), d.autoPaused = null) }) }, J = function () { var b, c, f, g, h, i, j, k, l = 0; "next" === d.settings.autoDirection ? e.append(d.children.clone().addClass("bx-clone")) : (e.prepend(d.children.clone().addClass("bx-clone")), b = d.children.first().position(), l = "horizontal" === d.settings.mode ? -b.left : -b.top), t(l, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover && (d.usingCSS ? (g = "horizontal" === d.settings.mode ? 4 : 5, d.viewport.hover(function () { c = e.css("-" + d.cssPrefix + "-transform"), f = parseFloat(c.split(",")[g]), t(f, "reset", 0) }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(f))), K(j) })) : d.viewport.hover(function () { e.stop() }, function () { k = 0, d.children.each(function (b) { k += "horizontal" === d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0) }), h = d.settings.speed / k, i = "horizontal" === d.settings.mode ? "left" : "top", j = h * (k - Math.abs(parseInt(e.css(i)))), K(j) })), K() }, K = function (a) { var b, c, f, g = a ? a : d.settings.speed, h = { left: 0, top: 0 }, i = { left: 0, top: 0 }; "next" === d.settings.autoDirection ? h = e.find(".bx-clone").first().position() : i = d.children.first().position(), b = "horizontal" === d.settings.mode ? -h.left : -h.top, c = "horizontal" === d.settings.mode ? -i.left : -i.top, f = { resetValue: c }, t(b, "ticker", g, f) }, L = function (b) { var c = a(window), d = { top: c.scrollTop(), left: c.scrollLeft() }, e = b.offset(); return d.right = d.left + c.width(), d.bottom = d.top + c.height(), e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom) }, M = function (a) { var b = document.activeElement.tagName.toLowerCase(), c = "input|textarea", d = new RegExp(b, ["i"]), f = d.exec(c); if (null == f && L(e)) { if (39 === a.keyCode) return z(a), !1; if (37 === a.keyCode) return A(a), !1 } }, N = function () { d.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function (a) { d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled")) }) }, O = function (a) { if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled"); else { d.touch.originalPos = e.position(); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b]; d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P) } }, P = function (a) { t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, Q = function (a) { var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], e = Math.abs(c[0].pageX - d.touch.start.x), f = Math.abs(c[0].pageY - d.touch.start.y), g = 0, h = 0; 3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch && ("horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0)) }, R = function (a) { d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled"); var b = a.originalEvent, c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], f = 0, g = 0; d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId) }, S = function (b) { if (d.initialized) if (d.working) window.setTimeout(S, 10); else { var c = a(window).width(), h = a(window).height(); (f !== c || g !== h) && (f = c, g = h, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index)) } }, T = function (a) { var b = p(); d.settings.ariaHidden && !d.settings.ticker && (d.children.attr("aria-hidden", "true"), d.children.slice(a, a + b).attr("aria-hidden", "false")) }, U = function (a) { return 0 > a ? d.settings.infiniteLoop ? q() - 1 : d.active.index : a >= q() ? d.settings.infiniteLoop ? 0 : d.active.index : a }; return e.goToSlide = function (b, c) { var f, g, h, i, j = !0, k = 0, l = { left: 0, top: 0 }, n = null; if (d.oldIndex = d.active.index, d.active.index = U(b), !d.working && d.active.index !== d.oldIndex) { if (d.working = !0, j = d.settings.onSlideBefore.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof j && !j) return d.active.index = d.oldIndex, void (d.working = !1); "next" === c ? d.settings.onSlideNext.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1) : "prev" === c && (d.settings.onSlidePrev.call(e, d.children.eq(d.active.index), d.oldIndex, d.active.index) || (j = !1)), d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode ? (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({ zIndex: 0 }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function () { a(this).css("zIndex", d.settings.slideZIndex), F() })) : (d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({ height: m() }, d.settings.adaptiveHeightSpeed), !d.settings.infiniteLoop && d.carousel && d.active.last ? "horizontal" === d.settings.mode ? (n = d.children.eq(d.children.length - 1), l = n.position(), k = d.viewport.width() - n.outerWidth()) : (f = d.children.length - d.settings.minSlides, l = d.children.eq(f).position()) : d.carousel && d.active.last && "prev" === c ? (g = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides), n = e.children(".bx-clone").eq(g), l = n.position()) : "next" === c && 0 === d.active.index ? (l = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1) : b >= 0 && (i = b * parseInt(r()), l = d.children.eq(i).position()), "undefined" != typeof l ? (h = "horizontal" === d.settings.mode ? -(l.left - k) : -l.top, t(h, "slide", d.settings.speed)) : d.working = !1), d.settings.ariaHidden && T(d.active.index * r()) } }, e.goToNextSlide = function () { if (d.settings.infiniteLoop || !d.active.last) { var a = parseInt(d.active.index) + 1; e.goToSlide(a, "next") } }, e.goToPrevSlide = function () { if (d.settings.infiniteLoop || 0 !== d.active.index) { var a = parseInt(d.active.index) - 1; e.goToSlide(a, "prev") } }, e.startAuto = function (a) { d.interval || (d.interval = setInterval(function () { "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide() }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop")) }, e.stopAuto = function (a) { d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start")) }, e.getCurrentSlide = function () { return d.active.index }, e.getCurrentSlideElement = function () { return d.children.eq(d.active.index) }, e.getSlideElement = function (a) { return d.children.eq(a) }, e.getSlideCount = function () { return d.children.length }, e.isWorking = function () { return d.working }, e.redrawSlider = function () { d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index)), d.settings.ariaHidden && T(d.active.index * r()) }, e.destroySlider = function () { d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function () { void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style") }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M), a(this).removeData("bxSlider")) }, e.reloadSlider = function (b) { void 0 !== b && (c = b), e.destroySlider(), h(), a(e).data("bxSlider", this) }, h(), a(e).data("bxSlider", this), this } } }(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) { var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c); a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({ caret: function (a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) }, unmask: function () { return this.trigger("unmask") }, mask: function (c, g) { var h, i, j, k, l, m, n, o; if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 } return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function () { function h() { if (g.completed) { for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return; g.completed.call(B) } } function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) } function q(a) { for (; ++a < n && !j[a];); return a } function r(a) { for (; --a >= 0 && !j[a];); return a } function s(a, b) { var c, d; if (!(0 > a)) { for (c = a, d = q(b) ; n > c; c++) if (j[c]) { if (!(n > d && j[c].test(C[d]))) break; C[c] = C[d], C[d] = p(d), d = q(d) } z(), B.caret(Math.max(l, a)) } } function t(a) { var b, c, d, e; for (b = a, c = p(a) ; n > b; b++) if (j[b]) { if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break; c = e } } function u() { var a = B.val(), b = B.caret(); if (o && o.length && o.length > a.length) { for (A(!0) ; b.begin > 0 && !j[b.begin - 1];) b.begin--; if (0 === b.begin) for (; b.begin < l && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } else { for (A(!0) ; b.begin < n && !j[b.begin];) b.begin++; B.caret(b.begin, b.begin) } h() } function v() { A(), B.val() != E && B.change() } function w(a) { if (!B.prop("readonly")) { var b, c, e, f = a.which || a.keyCode; o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault()) } } function x(b) { if (!B.prop("readonly")) { var c, d, e, g = b.which || b.keyCode, i = B.caret(); if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) { if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) { if (t(c), C[c] = d, z(), e = q(c), f) { var k = function () { a.proxy(a.fn.caret, B, e)() }; setTimeout(k, 0) } else B.caret(e); i.begin <= m && h() } b.preventDefault() } } } function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) } function z() { B.val(C.join("")) } function A(a) { var b, c, d, e = B.val(), f = -1; for (b = 0, d = 0; n > b; b++) if (j[b]) { for (C[b] = p(b) ; d++ < e.length;) if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break } } else C[b] === e.charAt(d) && d++, k > b && (f = b); return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l } var B = a(this), C = a.map(c.split(""), function (a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }), D = C.join(""), E = B.val(); B.data(a.mask.dataName, function () { return a.map(C, function (a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function () { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function () { if (!B.prop("readonly")) { clearTimeout(b); var a; E = B.val(), a = A(), b = setTimeout(function () { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10) } }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () { B.prop("readonly") || setTimeout(function () { var a = A(!0); B.caret(a), h() }, 0) }), e && f && B.off("input.mask").on("input.mask", u), A() }) } }) });

/*
    SimpleLightBox
	By André Rinas, www.andreknieriem.de
	Available for use under the MIT License
*/
!function (e, t, n, i) { "use strict"; e.fn.simpleLightbox = function (i) { var i = e.extend({ overlay: !0, spinner: !0, nav: !0, navText: ["&lsaquo;", "&rsaquo;"], captions: !0, captionDelay: 0, captionSelector: "img", captionType: "attr", captionsData: "title", captionPosition: "bottom", close: !0, closeText: "×", showCounter: !0, fileExt: "png|jpg|jpeg|gif", animationSlide: !0, animationSpeed: 250, preloading: !0, enableKeyboard: !0, loop: !0, docClose: !0, swipeTolerance: 50, className: "simple-lightbox", widthRatio: .8, heightRatio: .9, disableRightClick: !1, disableScroll: !0, alertError: !0, alertErrorMessage: "Image not found, next image will be loaded" }, i), a = (t.navigator.pointerEnabled || t.navigator.msPointerEnabled, 0), o = e(), s = function () { var e = n.body || n.documentElement, e = e.style; return "" == e.WebkitTransition ? "-webkit-" : "" == e.MozTransition ? "-moz-" : "" == e.OTransition ? "-o-" : "" == e.transition ? "" : !1 }, l = !1, r = [], d = this, s = s(), p = s !== !1 ? !0 : !1, c = "simplelb", g = e("<div>").addClass("sl-overlay"), h = e("<button>").addClass("sl-close").html(i.closeText), f = e("<div>").addClass("sl-spinner").html("<div></div>"), u = e("<div>").addClass("sl-navigation").html('<button class="sl-prev">' + i.navText[0] + '</button><button class="sl-next">' + i.navText[1] + "</button>"), m = e("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'), v = !1, x = 0, b = e(), y = e("<div>").addClass("sl-caption pos-" + i.captionPosition), w = e("<div>").addClass("sl-wrapper").addClass(i.className).html('<div class="sl-image"></div>'), E = function (t) { return i.fileExt ? "a" == e(t).prop("tagName").toLowerCase() && new RegExp(".(" + i.fileExt + ")$", "i").test(e(t).attr("href")) : !0 }, T = function () { b = e(".sl-image"), i.close && h.appendTo(w), i.showCounter && d.length > 1 && (m.appendTo(w), m.find(".sl-total").text(d.length)), i.nav && u.appendTo(w), i.spinner && f.appendTo(w) }, S = function (t) { t.trigger(e.Event("show.simplelightbox")), i.disableScroll && R("hide"), w.appendTo("body"), i.overlay && g.appendTo(e("body")), v = !0, x = d.index(t), o = e("<img/>").hide().attr("src", t.attr("href")), -1 == r.indexOf(t.attr("href")) && r.push(t.attr("href")), e(".sl-image").html("").attr("style", ""), o.appendTo(e(".sl-image")), g.fadeIn("fast"), e(".sl-close").fadeIn("fast"), f.show(), u.fadeIn("fast"), e(".sl-wrapper .sl-counter .sl-current").text(x + 1), m.fadeIn("fast"), C(), i.preloading && q(), setTimeout(function () { t.trigger(e.Event("shown.simplelightbox")) }, i.animationSpeed) }, C = function (n) { if (o.length) { var a = new Image, s = e(t).width() * i.widthRatio, c = e(t).height() * i.heightRatio; a.src = o.attr("src"), e(a).bind("error", function (t) { return d.eq(x).trigger(e.Event("error.simplelightbox")), v = !1, l = !0, f.hide(), i.alertError ? (alert(i.alertErrorMessage), void D(1 == n || -1 == n ? n : 1)) : void 0 }), a.onload = function () { "undefined" != typeof n && d.eq(x).trigger(e.Event("changed.simplelightbox")).trigger(e.Event((1 === n ? "nextDone" : "prevDone") + ".simplelightbox")), -1 == r.indexOf(o.attr("src")) && r.push(o.attr("src")); var g = a.width, h = a.height; if (g > s || h > c) { var u = g / h > s / c ? g / s : h / c; g /= u, h /= u } e(".sl-image").css({ top: (e(t).height() - h) / 2 + "px", left: (e(t).width() - g) / 2 + "px" }), f.hide(), o.css({ width: g + "px", height: h + "px" }).fadeIn("fast"), l = !0; var m = "self" == i.captionSelector ? d.eq(x) : d.eq(x).find(i.captionSelector); if ("data" == i.captionType) var b = m.data(i.captionsData); else if ("text" == i.captionType) var b = m.html(); else var b = m.prop(i.captionsData); if (i.loop || (0 == x && e(".sl-prev").hide(), x >= d.length - 1 && e(".sl-next").hide(), x > 0 && x < d.length - 1 && e(".sl-prev, .sl-next").show()), 1 == d.length && e(".sl-prev, .sl-next").hide(), 1 == n || -1 == n) { var y = { opacity: 1 }; i.animationSlide && (p ? (I(0, 100 * n + "px"), setTimeout(function () { I(i.animationSpeed / 1e3, "0px"), 50 })) : y.left = parseInt(e(".sl-image").css("left")) + 100 * n + "px"), e(".sl-image").animate(y, i.animationSpeed, function () { v = !1, k(b) }) } else v = !1, k(b) } } }, k = function (t) { "" != t && "undefined" != typeof t && i.captions && y.html(t).hide().appendTo(e(".sl-image")).delay(i.captionDelay).fadeIn("fast") }, I = function (t, n) { var i = {}; i[s + "transform"] = "translateX(" + n + ")", i[s + "transition"] = s + "transform " + t + "s linear", e(".sl-image").css(i) }, q = function () { var t = 0 > x + 1 ? d.length - 1 : x + 1 >= d.length - 1 ? 0 : x + 1, n = 0 > x - 1 ? d.length - 1 : x - 1 >= d.length - 1 ? 0 : x - 1; e("<img />").attr("src", d.eq(t).attr("href")).load(function () { -1 == r.indexOf(e(this).attr("src")) && r.push(e(this).attr("src")), d.eq(x).trigger(e.Event("nextImageLoaded.simplelightbox")) }), e("<img />").attr("src", d.eq(n).attr("href")).load(function () { -1 == r.indexOf(e(this).attr("src")) && r.push(e(this).attr("src")), d.eq(x).trigger(e.Event("prevImageLoaded.simplelightbox")) }) }, D = function (t) { d.eq(x).trigger(e.Event("change.simplelightbox")).trigger(e.Event((1 === t ? "next" : "prev") + ".simplelightbox")); var n = x + t; if (!(v || (0 > n || n >= d.length) && 0 == i.loop)) { x = 0 > n ? d.length - 1 : n > d.length - 1 ? 0 : n, e(".sl-wrapper .sl-counter .sl-current").text(x + 1); var s = { opacity: 0 }; i.animationSlide && (p ? I(i.animationSpeed / 1e3, -100 * t - a + "px") : s.left = parseInt(e(".sl-image").css("left")) + -100 * t + "px"), e(".sl-image").animate(s, i.animationSpeed, function () { setTimeout(function () { var n = d.eq(x); o.attr("src", n.attr("href")), -1 == r.indexOf(n.attr("href")) && f.show(), e(".sl-caption").remove(), C(t), i.preloading && q() }, 100) }) } }, M = function () { if (!v) { var t = d.eq(x), n = !1; t.trigger(e.Event("close.simplelightbox")), e(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast", function () { i.disableScroll && R("show"), e(".sl-wrapper, .sl-overlay").remove(), n || t.trigger(e.Event("closed.simplelightbox")), n = !0 }), o = e(), l = !1, v = !1 } }, R = function (i) { if ("hide" == i) { var a = t.innerWidth; if (!a) { var o = n.documentElement.getBoundingClientRect(); a = o.right - Math.abs(o.left) } if (n.body.clientWidth < a) { var s = n.createElement("div"), l = parseInt(e("body").css("padding-right"), 10); s.className = "sl-scrollbar-measure", e("body").append(s); var r = s.offsetWidth - s.clientWidth; e(n.body)[0].removeChild(s), e("body").data("padding", l), r > 0 && e("body").css({ "padding-right": l + r, overflow: "hidden" }) } } else e("body").css({ "padding-right": e("body").data("padding"), overflow: "visible" }) }; T(), e(t).on("resize", C), d.on("click." + c, function (t) { if (E(this)) { if (t.preventDefault(), v) return !1; S(e(this)) } }), e(n).on("click", ".sl-close", function (e) { e.preventDefault(), l && M() }), e(n).click(function (t) { l && i.docClose && 0 == e(t.target).closest(".sl-image").length && 0 == e(t.target).closest(".sl-navigation").length && M() }), i.disableRightClick && e(n).on("contextmenu", ".sl-image img", function (e) { return !1 }), e(n).on("click", ".sl-navigation button", function (t) { t.preventDefault(), a = 0, D(e(this).hasClass("sl-next") ? 1 : -1) }), i.enableKeyboard && e(n).on("keyup." + c, function (e) { if (e.preventDefault(), a = 0, l) { var t = e.keyCode; 27 == t && M(), (37 == t || 39 == e.keyCode) && D(39 == e.keyCode ? 1 : -1) } }); var O = 0, P = 0, W = !1, X = 0; return e(n).on("touchstart mousedown pointerdown MSPointerDown", ".sl-image", function (e) { return W ? !0 : (p && (X = parseInt(b.css("left"))), W = !0, O = e.originalEvent.pageX || e.originalEvent.touches[0].pageX, !1) }).on("touchmove mousemove pointermove MSPointerMove", function (e) { return W ? (e.preventDefault(), P = e.originalEvent.pageX || e.originalEvent.touches[0].pageX, a = O - P, void (i.animationSlide && (p ? I(0, -a + "px") : b.css("left", X - a + "px")))) : !0 }).on("touchend mouseup touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", function (e) { W && (W = !1, Math.abs(a) > i.swipeTolerance ? D(a > 0 ? 1 : -1) : i.animationSlide && (p ? I(i.animationSpeed / 1e3, "0px") : b.animate({ left: X + "px" }, i.animationSpeed / 2))) }), this.open = function (t) { t = t || e(this[0]), S(t) }, this.next = function () { D(1) }, this.prev = function () { D(-1) }, this.close = function () { M() }, this.destroy = function () { e(n).unbind("click." + c).unbind("keyup." + c), M(), e(".sl-overlay, .sl-wrapper").remove() }, this } }(jQuery, window, document);

/* Selectric ϟ v1.9.5 (2016-02-26) - git.io/tjl9sQ - Copyright (c) 2016 Leonardo Santos - Dual licensed: MIT/GPL */
!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, o) { return void 0 === o && (o = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(o), o } : e(jQuery) }(function (e) { "use strict"; var t = "selectric", o = "Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive Above Scroll Group GroupLabel", i = ".sl", s = { onChange: function (t) { e(t).change() }, maxHeight: 300, keySearchTimeout: 500, arrowButtonMarkup: '<b class="button">&#x25be;</b>', disableOnMobile: !0, openOnHover: !1, hoverIntentTimeout: 500, expandToItemText: !1, responsive: !1, preventWindowScroll: !0, inheritOriginalWidth: !1, allowWrap: !0, customClass: { prefix: t, camelCase: !1, overwrite: !0 }, optionsItemBuilder: "{text}", labelBuilder: "{text}" }, n = { add: function (e, t, o) { this[e] || (this[e] = {}), this[e][t] = o }, remove: function (e, t) { delete this[e][t] } }, l = { replaceDiacritics: function (e) { for (var t = "40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g, "\\3$&").split(" "), o = t.length; o--;) e = e.toLowerCase().replace(RegExp("[" + t[o] + "]", "g"), "aeiouncy".charAt(o)); return e }, format: function (e) { var t = arguments; return ("" + e).replace(/{(\d+|(\w+))}/g, function (e, o, i) { return i && t[1] ? t[1][i] : t[o] }) }, nextEnabledItem: function (e, t) { for (; e[t = (t + 1) % e.length].disabled;); return t }, previousEnabledItem: function (e, t) { for (; e[t = (t > 0 ? t : e.length) - 1].disabled;); return t }, toDash: function (e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }, triggerCallback: function (o, i) { var s = i.element, a = i.options["on" + o]; e.isFunction(a) && a.call(s, s, i), n[o] && e.each(n[o], function () { this.call(s, s, i) }), e(s).trigger(t + "-" + l.toDash(o), i) } }, a = e(document), r = e(window), c = function (n, c) { function d(t) { if (A.options = e.extend(!0, {}, s, A.options, t), A.classes = {}, A.element = n, l.triggerCallback("BeforeInit", A), A.options.disableOnMobile && R) return void (A.disableOnMobile = !0); C(!0); var i = A.options.customClass, a = o.split(" "), r = $.width(); e.each(a, function (e, t) { var o = i.prefix + "-" + t; A.classes[t.toLowerCase()] = i.camelCase ? o : l.toDash(o) }), x = e("<input/>", { "class": A.classes.input, readonly: R }), k = e("<div/>", { "class": A.classes.items, tabindex: -1 }), T = e("<div/>", { "class": A.classes.scroll }), y = e("<div/>", { "class": i.prefix, html: A.options.arrowButtonMarkup }), D = e('<p class="label"/>'), I = $.wrap("<div>").parent().append(y.prepend(D), k, x), q = { open: m, close: g, destroy: C, refresh: u, init: d }, $.on(q).wrap('<div class="' + A.classes.hideselect + '">'), e.extend(A, q), E = A.options.labelBuilder, A.options.inheritOriginalWidth && r > 0 && I.width(r), p() } function p() { A.items = []; var t = $.children(), o = "<ul>", s = $.find("option"), n = s.index(s.filter(":selected")), a = 0; B = S = ~n ? n : 0, (M = t.length) && (t.each(function () { function t() { var t = e(this), i = t.html(), s = t.prop("disabled"), n = A.options.optionsItemBuilder; A.items[a] = { element: t, value: t.val(), text: i, slug: l.replaceDiacritics(i), disabled: s }, o += l.format('<li data-index="{1}" class="{2}">{3}</li>', a, e.trim([a == B ? "selected" : "", a == M - 1 ? "last" : "", s ? "disabled" : ""].join(" ")), e.isFunction(n) ? n(A.items[a], t, a) : l.format(n, A.items[a])), a++ } var i = e(this); if (i.is("optgroup")) { var s = i.prop("disabled"), n = i.children(); o += l.format('<ul class="{1}"><li class="{2}">{3}</li>', e.trim([A.classes.group, s ? "disabled" : "", i.prop("class")].join(" ")), A.classes.grouplabel, i.prop("label")), s && n.prop("disabled", !0), n.each(t), o += "</ul>" } else t.call(i) }), k.append(T.html(o + "</ul>")), D.html(e.isFunction(E) ? E(A.items[B]) : l.format(E, A.items[B]))), y.add($).add(I).add(x).off(i), I.prop("class", [A.classes.wrapper, A.options.customClass.overwrite ? $.prop("class").replace(/\S+/g, A.options.customClass.prefix + "-$&") : $.prop("class"), A.options.responsive ? A.classes.responsive : ""].join(" ")), $.prop("disabled") ? (I.addClass(A.classes.disabled), x.prop("disabled", !0)) : (L = !0, I.removeClass(A.classes.disabled).on("mouseenter" + i + " mouseleave" + i, function (t) { e(this).toggleClass(A.classes.hover), A.options.openOnHover && (clearTimeout(A.closeTimer), "mouseleave" == t.type ? A.closeTimer = setTimeout(g, A.options.hoverIntentTimeout) : m()) }), y.on("click" + i, function (e) { F ? g() : m(e) }), x.prop({ tabindex: Y, disabled: !1 }).on("keypress" + i, f).on("keydown" + i, function (e) { f(e), clearTimeout(A.resetStr), A.resetStr = setTimeout(function () { x.val("") }, A.options.keySearchTimeout); var t = e.keyCode || e.which; if (t > 36 && 41 > t) { if (!A.options.allowWrap && (39 > t && 0 == S || t > 38 && S + 1 == A.items.length)) return; b(l[(39 > t ? "previous" : "next") + "EnabledItem"](A.items, S)) } }).on("focusin" + i, function (e) { x.one("blur", function () { x.blur() }), F || m(e) }).on("oninput" in x[0] ? "input" : "keyup", function () { x.val().length && e.each(A.items, function (e, t) { return RegExp("^" + x.val(), "i").test(t.slug) && !t.disabled ? (b(e), !1) : void 0 }) }), $.prop("tabindex", !1), O = e("li", k.removeAttr("style")).on({ mousedown: function (e) { e.preventDefault(), e.stopPropagation() }, click: function () { return b(e(this).data("index"), !0), !1 } }).filter("[data-index]")), l.triggerCallback("Init", A) } function u() { l.triggerCallback("Refresh", A), p() } function f(e) { var t = e.keyCode || e.which; 13 == t && e.preventDefault(), /^(9|13|27)$/.test(t) && (e.stopPropagation(), b(S, !0)) } function h() { var e = k.closest(":visible").children(":hidden").addClass(A.classes.tempshow), t = A.options.maxHeight, o = k.outerWidth(), i = y.outerWidth() - (o - k.width()); !A.options.expandToItemText || i > o ? j = i : (k.css("overflow", "scroll"), I.width(9e4), j = k.width(), k.css("overflow", ""), I.width("")), k.width(j).height() > t && k.height(t), e.removeClass(A.classes.tempshow) } function m(o) { l.triggerCallback("BeforeOpen", A), o && (o.preventDefault(), o.stopPropagation()), L && (h(), e("." + A.classes.hideselect, "." + A.classes.open).children()[t]("close"), F = !0, H = k.outerHeight(), W = k.height(), I.addClass(A.classes.open), x.val("").is(":focus") || x.focus(), a.on("click" + i, g).on("scroll" + i, v), v(), A.options.preventWindowScroll && a.on("mousewheel" + i + " DOMMouseScroll" + i, "." + A.classes.scroll, function (t) { var o = t.originalEvent, i = e(this).scrollTop(), s = 0; "detail" in o && (s = -1 * o.detail), "wheelDelta" in o && (s = o.wheelDelta), "wheelDeltaY" in o && (s = o.wheelDeltaY), "deltaY" in o && (s = -1 * o.deltaY), (i == this.scrollHeight - W && 0 > s || 0 == i && s > 0) && t.preventDefault() }), w(S), l.triggerCallback("Open", A)) } function v() { I.toggleClass(A.classes.above, I.offset().top + I.outerHeight() + H > r.scrollTop() + r.height()) } function g() { if (l.triggerCallback("BeforeClose", A), B != S) { l.triggerCallback("BeforeChange", A); var t = A.items[S].text; $.prop("selectedIndex", B = S).data("value", t), D.html(e.isFunction(E) ? E(A.items[S]) : l.format(E, A.items[S])), l.triggerCallback("Change", A) } a.off(i), I.removeClass(A.classes.open), F = !1, l.triggerCallback("Close", A) } function b(e, t) { void 0 != e && (A.items[e].disabled || (O.removeClass("selected").eq(S = e).addClass("selected"), w(e), t && g())) } function w(e) { var t = O.eq(e).outerHeight(), o = O[e].offsetTop, i = T.scrollTop(), s = o + 2 * t; T.scrollTop(s > i + H ? s - H : i > o - t ? o - t : i) } function C(e) { L && (k.add(y).add(x).remove(), !e && $.removeData(t).removeData("value"), $.prop("tabindex", Y).off(i).off(q).unwrap().unwrap(), L = !1) } var x, k, T, y, D, I, O, S, B, H, W, j, M, q, E, A = this, $ = e(n), F = !1, L = !1, R = /android|ip(hone|od|ad)/i.test(navigator.userAgent), Y = $.prop("tabindex"); d(c) }; e.fn[t] = function (o) { return this.each(function () { var i = e.data(this, t); i && !i.disableOnMobile ? "" + o === o && i[o] ? i[o]() : i.init(o) : e.data(this, t, new c(this, o)) }) }, e.fn[t].hooks = n });

/* perfect-scrollbar v0.6.10 */
!function t(e, n, r) { function o(l, s) { if (!n[l]) { if (!e[l]) { var a = "function" == typeof require && require; if (!s && a) return a(l, !0); if (i) return i(l, !0); var c = new Error("Cannot find module '" + l + "'"); throw c.code = "MODULE_NOT_FOUND", c } var u = n[l] = { exports: {} }; e[l][0].call(u.exports, function (t) { var n = e[l][1][t]; return o(n ? n : t) }, u, u.exports, t, e, n, r) } return n[l].exports } for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]); return o }({ 1: [function (t, e, n) { "use strict"; function r(t) { t.fn.perfectScrollbar = function (e) { return this.each(function () { if ("object" == typeof e || "undefined" == typeof e) { var n = e; i.get(this) || o.initialize(this, n) } else { var r = e; "update" === r ? o.update(this) : "destroy" === r && o.destroy(this) } return t(this) }) } } var o = t("../main"), i = t("../plugin/instances"); if ("function" == typeof define && define.amd) define(["jquery"], r); else { var l = window.jQuery ? window.jQuery : window.$; "undefined" != typeof l && r(l) } e.exports = r }, { "../main": 7, "../plugin/instances": 18 }], 2: [function (t, e, n) { "use strict"; function r(t, e) { var n = t.className.split(" "); n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ") } function o(t, e) { var n = t.className.split(" "), r = n.indexOf(e); r >= 0 && n.splice(r, 1), t.className = n.join(" ") } n.add = function (t, e) { t.classList ? t.classList.add(e) : r(t, e) }, n.remove = function (t, e) { t.classList ? t.classList.remove(e) : o(t, e) }, n.list = function (t) { return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ") } }, {}], 3: [function (t, e, n) { "use strict"; function r(t, e) { return window.getComputedStyle(t)[e] } function o(t, e, n) { return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t } function i(t, e) { for (var n in e) { var r = e[n]; "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r } return t } var l = {}; l.e = function (t, e) { var n = document.createElement(t); return n.className = e, n }, l.appendTo = function (t, e) { return e.appendChild(t), t }, l.css = function (t, e, n) { return "object" == typeof e ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n) }, l.matches = function (t, e) { return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0 }, l.remove = function (t) { "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t) }, l.queryChildren = function (t, e) { return Array.prototype.filter.call(t.childNodes, function (t) { return l.matches(t, e) }) }, e.exports = l }, {}], 4: [function (t, e, n) { "use strict"; var r = function (t) { this.element = t, this.events = {} }; r.prototype.bind = function (t, e) { "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1) }, r.prototype.unbind = function (t, e) { var n = "undefined" != typeof e; this.events[t] = this.events[t].filter(function (r) { return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1) }, this) }, r.prototype.unbindAll = function () { for (var t in this.events) this.unbind(t) }; var o = function () { this.eventElements = [] }; o.prototype.eventElement = function (t) { var e = this.eventElements.filter(function (e) { return e.element === t })[0]; return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e }, o.prototype.bind = function (t, e, n) { this.eventElement(t).bind(e, n) }, o.prototype.unbind = function (t, e, n) { this.eventElement(t).unbind(e, n) }, o.prototype.unbindAll = function () { for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll() }, o.prototype.once = function (t, e, n) { var r = this.eventElement(t), o = function (t) { r.unbind(e, o), n(t) }; r.bind(e, o) }, e.exports = o }, {}], 5: [function (t, e, n) { "use strict"; e.exports = function () { function t() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } return function () { return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() } }() }, {}], 6: [function (t, e, n) { "use strict"; var r = t("./class"), o = t("./dom"); n.toInt = function (t) { return parseInt(t, 10) || 0 }, n.clone = function (t) { if (null === t) return null; if ("object" == typeof t) { var e = {}; for (var n in t) e[n] = this.clone(t[n]); return e } return t }, n.extend = function (t, e) { var n = this.clone(t); for (var r in e) n[r] = this.clone(e[r]); return n }, n.isEditable = function (t) { return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]") }, n.removePsClasses = function (t) { for (var e = r.list(t), n = 0; n < e.length; n++) { var o = e[n]; 0 === o.indexOf("ps-") && r.remove(t, o) } }, n.outerWidth = function (t) { return this.toInt(o.css(t, "width")) + this.toInt(o.css(t, "paddingLeft")) + this.toInt(o.css(t, "paddingRight")) + this.toInt(o.css(t, "borderLeftWidth")) + this.toInt(o.css(t, "borderRightWidth")) }, n.startScrolling = function (t, e) { r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y")) }, n.stopScrolling = function (t, e) { r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y")) }, n.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints } }, { "./class": 2, "./dom": 3 }], 7: [function (t, e, n) { "use strict"; var r = t("./plugin/destroy"), o = t("./plugin/initialize"), i = t("./plugin/update"); e.exports = { initialize: o, update: i, destroy: r } }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function (t, e, n) { "use strict"; e.exports = { maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, stopPropagationOnClick: !0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, useKeyboard: !0, useSelectionScroll: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" } }, {}], 9: [function (t, e, n) { "use strict"; var r = t("../lib/dom"), o = t("../lib/helper"), i = t("./instances"); e.exports = function (t) { var e = i.get(t); e && (e.event.unbindAll(), r.remove(e.scrollbarX), r.remove(e.scrollbarY), r.remove(e.scrollbarXRail), r.remove(e.scrollbarYRail), o.removePsClasses(t), i.remove(t)) } }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function (t, e, n) { "use strict"; function r(t, e) { function n(t) { return t.getBoundingClientRect() } var r = window.Event.prototype.stopPropagation.bind; e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) { var i = o.toInt(e.scrollbarYHeight / 2), a = e.railYRatio * (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i), c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight), u = a / c; 0 > u ? u = 0 : u > 1 && (u = 1), s(t, "top", (e.contentHeight - e.containerHeight) * u), l(t), r.stopPropagation() }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) { var i = o.toInt(e.scrollbarXWidth / 2), a = e.railXRatio * (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i), c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth), u = a / c; 0 > u ? u = 0 : u > 1 && (u = 1), s(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), l(t), r.stopPropagation() }) } var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll"); e.exports = function (t) { var e = i.get(t); r(t, e) } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function (t, e, n) { "use strict"; function r(t, e) { function n(n) { var o = r + n * e.railXRatio, i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth); 0 > o ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o; var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment; c(t, "left", s) } var r = null, o = null, s = function (e) { n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault() }, u = function () { l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s) }; e.event.bind(e.scrollbarX, "mousedown", function (n) { o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault() }) } function o(t, e) { function n(n) { var o = r + n * e.railYRatio, i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight); 0 > o ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o; var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight)); c(t, "top", s) } var r = null, o = null, s = function (e) { n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault() }, u = function () { l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s) }; e.event.bind(e.scrollbarY, "mousedown", function (n) { o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault() }) } var i = t("../../lib/dom"), l = t("../../lib/helper"), s = t("../instances"), a = t("../update-geometry"), c = t("../update-scroll"); e.exports = function (t) { var e = s.get(t); r(t, e), o(t, e) } }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function (t, e, n) { "use strict"; function r(t, e) { function n(n, r) { var o = t.scrollTop; if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation } var i = t.scrollLeft; if (0 === r) { if (!e.scrollbarXActive) return !1; if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 } var r = !1; e.event.bind(t, "mouseenter", function () { r = !0 }), e.event.bind(t, "mouseleave", function () { r = !1 }); var l = !1; e.event.bind(e.ownerDocument, "keydown", function (c) { if (!c.isDefaultPrevented || !c.isDefaultPrevented()) { var u = i.matches(e.scrollbarX, ":focus") || i.matches(e.scrollbarY, ":focus"); if (r || u) { var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement; if (d) { for (; d.shadowRoot;) d = d.shadowRoot.activeElement; if (o.isEditable(d)) return } var p = 0, f = 0; switch (c.which) { case 37: p = -30; break; case 38: f = 30; break; case 39: p = 30; break; case 40: f = -30; break; case 33: f = 90; break; case 32: f = c.shiftKey ? 90 : -90; break; case 34: f = -90; break; case 35: f = c.ctrlKey ? -e.contentHeight : -e.containerHeight; break; case 36: f = c.ctrlKey ? t.scrollTop : e.containerHeight; break; default: return } a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), l = n(p, f), l && c.preventDefault() } } }) } var o = t("../../lib/helper"), i = t("../../lib/dom"), l = t("../instances"), s = t("../update-geometry"), a = t("../update-scroll"); e.exports = function (t) { var e = l.get(t); r(t, e) } }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function (t, e, n) { "use strict"; function r(t, e) { function n(n, r) { var o = t.scrollTop; if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation } var i = t.scrollLeft; if (0 === r) { if (!e.scrollbarXActive) return !1; if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 } function r(t) { var e = t.deltaX, n = -1 * t.deltaY; return ("undefined" == typeof e || "undefined" == typeof n) && (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n] } function o(e, n) { var r = t.querySelector("textarea:hover"); if (r) { var o = r.scrollHeight - r.clientHeight; if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0; var i = r.scrollLeft - r.clientWidth; if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0)) return !0 } return !1 } function s(s) { var c = r(s), u = c[0], d = c[1]; o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), i(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault())) } var a = !1; "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s) } var o = t("../instances"), i = t("../update-geometry"), l = t("../update-scroll"); e.exports = function (t) { var e = o.get(t); r(t, e) } }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function (t, e, n) { "use strict"; function r(t, e) { e.event.bind(t, "scroll", function () { i(t) }) } var o = t("../instances"), i = t("../update-geometry"); e.exports = function (t) { var e = o.get(t); r(t, e) } }, { "../instances": 18, "../update-geometry": 19 }], 15: [function (t, e, n) { "use strict"; function r(t, e) { function n() { var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : ""; return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer } function r() { c || (c = setInterval(function () { return i.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void l(t)) : void clearInterval(c) }, 50)) } function a() { c && (clearInterval(c), c = null), o.stopScrolling(t) } var c = null, u = { top: 0, left: 0 }, d = !1; e.event.bind(e.ownerDocument, "selectionchange", function () { t.contains(n()) ? d = !0 : (d = !1, a()) }), e.event.bind(window, "mouseup", function () { d && (d = !1, a()) }), e.event.bind(window, "mousemove", function (e) { if (d) { var n = { x: e.pageX, y: e.pageY }, i = { left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight }; n.x < i.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > i.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r() } }) } var o = t("../../lib/helper"), i = t("../instances"), l = t("../update-geometry"), s = t("../update-scroll"); e.exports = function (t) { var e = i.get(t); r(t, e) } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function (t, e, n) { "use strict"; function r(t, e, n, r) { function s(n, r) { var o = t.scrollTop, i = t.scrollLeft, l = Math.abs(n), s = Math.abs(r); if (s > l) { if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation } else if (l > s && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i)) return !e.settings.swipePropagation; return !0 } function a(e, n) { l(t, "top", t.scrollTop - n), l(t, "left", t.scrollLeft - e), i(t) } function c() { Y = !0 } function u() { Y = !1 } function d(t) { return t.targetTouches ? t.targetTouches[0] : t } function p(t) { return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1 } function f(t) { if (p(t)) { w = !0; var e = d(t); v.pageX = e.pageX, v.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation() } } function h(t) { if (!Y && w && p(t)) { var e = d(t), n = { pageX: e.pageX, pageY: e.pageY }, r = n.pageX - v.pageX, o = n.pageY - v.pageY; a(r, o), v = n; var i = (new Date).getTime(), l = i - g; l > 0 && (m.x = r / l, m.y = o / l, g = i), s(r, o) && (t.stopPropagation(), t.preventDefault()) } } function b() { !Y && w && (w = !1, clearInterval(y), y = setInterval(function () { return o.get(t) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(y) }, 10)) } var v = {}, g = 0, m = {}, y = null, Y = !1, w = !1; n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b))) } var o = t("../instances"), i = t("../update-geometry"), l = t("../update-scroll"); e.exports = function (t, e, n) { var i = o.get(t); r(t, i, e, n) } }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function (t, e, n) { "use strict"; var r = t("../lib/class"), o = t("../lib/helper"), i = t("./instances"), l = t("./update-geometry"), s = t("./handler/click-rail"), a = t("./handler/drag-scrollbar"), c = t("./handler/keyboard"), u = t("./handler/mouse-wheel"), d = t("./handler/native-scroll"), p = t("./handler/selection"), f = t("./handler/touch"); e.exports = function (t, e) { e = "object" == typeof e ? e : {}, r.add(t, "ps-container"); var n = i.add(t); n.settings = o.extend(n.settings, e), r.add(t, "ps-theme-" + n.settings.theme), s(t), a(t), u(t), d(t), n.settings.useSelectionScroll && p(t), (o.env.supportsTouch || o.env.supportsIePointer) && f(t, o.env.supportsTouch, o.env.supportsIePointer), n.settings.useKeyboard && c(t), l(t) } }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function (t, e, n) { "use strict"; function r(t) { function e() { s.add(t, "ps-focus") } function n() { s.remove(t, "ps-focus") } var r = this; r.settings = p.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === a.css(t, "direction"), r.isNegativeScroll = function () { var e = t.scrollLeft, n = null; return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new u, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = p.toInt(a.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : p.toInt(a.css(r.scrollbarXRail, "top")), r.railBorderXWidth = p.toInt(a.css(r.scrollbarXRail, "borderLeftWidth")) + p.toInt(a.css(r.scrollbarXRail, "borderRightWidth")), a.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = p.toInt(a.css(r.scrollbarXRail, "marginLeft")) + p.toInt(a.css(r.scrollbarXRail, "marginRight")), a.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = p.toInt(a.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : p.toInt(a.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? p.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = p.toInt(a.css(r.scrollbarYRail, "borderTopWidth")) + p.toInt(a.css(r.scrollbarYRail, "borderBottomWidth")), a.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = p.toInt(a.css(r.scrollbarYRail, "marginTop")) + p.toInt(a.css(r.scrollbarYRail, "marginBottom")), a.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null } function o(t) { return "undefined" == typeof t.dataset ? t.getAttribute("data-ps-id") : t.dataset.psId } function i(t, e) { "undefined" == typeof t.dataset ? t.setAttribute("data-ps-id", e) : t.dataset.psId = e } function l(t) { "undefined" == typeof t.dataset ? t.removeAttribute("data-ps-id") : delete t.dataset.psId } var s = t("../lib/class"), a = t("../lib/dom"), c = t("./default-setting"), u = t("../lib/event-manager"), d = t("../lib/guid"), p = t("../lib/helper"), f = {}; n.add = function (t) { var e = d(); return i(t, e), f[e] = new r(t), f[e] }, n.remove = function (t) { delete f[o(t)], l(t) }, n.get = function (t) { return f[o(t)] } }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function (t, e, n) { "use strict"; function r(t, e) { return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e } function o(t, e) { var n = { width: e.railXWidth }; e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, l.css(e.scrollbarXRail, n); var r = { top: t.scrollTop, height: e.railYHeight }; e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, l.css(e.scrollbarYRail, r), l.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), l.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth }) } var i = t("../lib/class"), l = t("../lib/dom"), s = t("../lib/helper"), a = t("./instances"), c = t("./update-scroll"); e.exports = function (t) { var e = a.get(t); e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight; var n; t.contains(e.scrollbarXRail) || (n = l.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) { l.remove(t) }), l.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = l.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) { l.remove(t) }), l.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, s.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = s.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, s.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = s.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0)) } }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function (t, e, n) { "use strict"; var r, o, i = t("./instances"), l = document.createEvent("Event"), s = document.createEvent("Event"), a = document.createEvent("Event"), c = document.createEvent("Event"), u = document.createEvent("Event"), d = document.createEvent("Event"), p = document.createEvent("Event"), f = document.createEvent("Event"), h = document.createEvent("Event"), b = document.createEvent("Event"); l.initEvent("ps-scroll-up", !0, !0), s.initEvent("ps-scroll-down", !0, !0), a.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), b.initEvent("ps-y-reach-end", !0, !0), e.exports = function (t, e, n) { if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function"; if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function"; if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function"; "top" === e && 0 >= n && (t.scrollTop = n = 0, t.dispatchEvent(h)), "left" === e && 0 >= n && (t.scrollLeft = n = 0, t.dispatchEvent(p)); var v = i.get(t); "top" === e && n >= v.contentHeight - v.containerHeight && (t.scrollTop = n = v.contentHeight - v.containerHeight, t.dispatchEvent(b)), "left" === e && n >= v.contentWidth - v.containerWidth && (t.scrollLeft = n = v.contentWidth - v.containerWidth, t.dispatchEvent(f)), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && r > n && t.dispatchEvent(l), "top" === e && n > r && t.dispatchEvent(s), "left" === e && o > n && t.dispatchEvent(a), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(d)) } }, { "./instances": 18 }], 21: [function (t, e, n) { "use strict"; var r = t("../lib/dom"), o = t("../lib/helper"), i = t("./instances"), l = t("./update-geometry"), s = t("./update-scroll"); e.exports = function (t) { var e = i.get(t); e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.css(e.scrollbarXRail, "display", "block"), r.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = o.toInt(r.css(e.scrollbarXRail, "marginLeft")) + o.toInt(r.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = o.toInt(r.css(e.scrollbarYRail, "marginTop")) + o.toInt(r.css(e.scrollbarYRail, "marginBottom")), r.css(e.scrollbarXRail, "display", "none"), r.css(e.scrollbarYRail, "display", "none"), l(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), r.css(e.scrollbarXRail, "display", ""), r.css(e.scrollbarYRail, "display", "")) } }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]);


//Numeric Stepper
//Licensed under MIT
// https://github.com/xFlatlinex/Numeric-Stepper
!function (e) { e.fn.stepper = function (n) { var t = { type: "float", floatPrecission: 2, ui: !0, allowWheel: !0, allowArrows: !0, arrowStep: 1, wheelStep: 1, limit: [null, null], preventWheelAcceleration: !0, incrementButton: "&blacktriangle;", decrementButton: "&blacktriangledown;", onStep: null, onWheel: null, onArrow: null, onButton: null, onKeyUp: null }; return e(this).each(function () { function o(e) { e.preventDefault(); var n, t = e.originalEvent; if (t.wheelDelta ? n = t.wheelDelta / 120 : t.detail && (n = -t.detail / 3), n) { i.preventWheelAcceleration && (n = 0 > n ? -1 : 1); var o = r(i.wheelStep * n); a("Wheel", [o, n > 0]) } } function r(e) { c.val() || c.val(0); var n = "int" == i.type ? parseInt : parseFloat, t = l(n(c.val()) + e); return c.val(t), a("Step", [t, e > 0]), t } function a(e, n) { var t = i["on" + e]; "function" == typeof t && t.apply(c, n) } function l(e) { var n = i.limit[0], t = i.limit[1]; return null !== n && n > e ? e = n : null !== t && e > t && (e = t), p(e) } function p(e, n) { "undefined" == typeof n && (n = i.floatPrecission); var t = Math.pow(10, n); return e = Math.round(e * t) / t } var u = e(this).data(); delete u.stepper; var i = e.extend({}, t, n, u), c = e(this), f = e('<div class="stepper-wrap"/>'); if (!c.data("stepper")) { if (f.insertAfter(c), c.appendTo(f), c.stepper = function () { return { limit: l, decimalRound: p, onStep: function (e) { i.onStep = e }, onWheel: function (e) { i.onWheel = e }, onArrow: function (e) { i.onArrow = e }, onButton: function (e) { i.onButton = e }, onKeyUp: function (e) { i.onKeyUp = e } } }(), c.data("stepper", c.stepper), i.ui) { var s, w = e('<div class="stepper-btn-wrap"/>').appendTo(f), v = e('<a class="button stepper-btn-up">' + i.incrementButton + "</a>").appendTo(w), d = e('<a class="button stepper-btn-dwn">' + i.decrementButton + "</a>").appendTo(w); v.mousedown(function (e) { e.preventDefault(); var n = r(i.arrowStep); a("Button", [n, !0]) }), d.mousedown(function (e) { e.preventDefault(); var n = r(-i.arrowStep); a("Button", [n, !1]) }), e(document).mouseup(function () { clearInterval(s) }) } i.allowWheel && (f.bind("DOMMouseScroll", o), f.bind("mousewheel", o)), f.keydown(function (n) { var t = n.which, o = c.val(); if (i.allowArrows) switch (t) { case 38: o = r(i.arrowStep), a("Arrow", [o, !0]); break; case 40: o = r(-i.arrowStep), a("Arrow", [o, !1]) } (37 > t && t > 40 || t > 57 && 91 > t || t > 105 && 110 != t && 190 != t) && n.preventDefault(), "float" == i.type && -1 != e.inArray(t, [110, 190]) && -1 != o.indexOf(".") && n.preventDefault() }).keyup(function () { a("KeyUp", [c.val()]) }) } }) } }(jQuery);


// Application Scripts:

// Десктоп меню (выпадайки)
// Доп.меню на странице
// Мобильное меню
// Стилизуем хидер при скролле
// Форма поиска
// Маска для телефонного номера
// Стилизация Select
// Модальное окно
// Слайдер
// Вкладки
// Галерея
// Видео в модальном окне
// Скролл для фильтров каталога
// Покажем / спрячем фильтры каталога
// Подключим степперы для кол-ва товаров в корзине
// Калькулятор в корзине

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body');

    $body.append('<div id="overlay" class="overlay"></div>');
    var $overlay = $('#overlay');//оверлей

    //
    // Десктоп меню (выпадайки)
    //---------------------------------------------------------------------------------------
    (function () {
        var $menu = $('.js-menu li');
        $menu.has('ul').children('a').addClass('has-menu');
        $menu.on({
            mouseenter: function () {
                $(this).find('ul:first').stop(true, true).fadeIn('fast');
                $(this).find('a:first').addClass('hover');
            },
            mouseleave: function () {
                $(this).find('ul').stop(true, true).fadeOut('slow');
                $(this).find('a:first').removeClass('hover');
            }
        });
        $menu.on('click', '.has-menu', function (e) {//запретим клик по заголовку субменю
            e.preventDefault();
        });
    })();


    //
    // Доп.меню на странице
    //---------------------------------------------------------------------------------------
    function initPageMenu() {
        var $menu = $('.js-p-menu > ul'),
            $submenu = $menu.children('li').children('ul'),
            $btn = $menu.children('li').has('ul').addClass('has-menu').children('a').addClass('has-menu'),
            $toggle = $('.js-p-menu-toggle'),
            BREAKPOINT = 992,
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.hideAllSubMenu = function () {//при клике по заголовку не активного меню, сперва спрячем все субменю
            var winW = $.viewportW();//ширина окна браузера
            $btn.removeClass('active');
            $submenu.slideUp(200);
        };

        method.hideSubMenu = function(el, target) {
            target.slideUp(200);
            el.removeClass('active');
        };

        method.showSubMenu = function (el, target) {
            target.slideDown(200);
            el.addClass('active');
        };

        method.hideMenu = function () {
            $toggle.removeClass('active');
            $menu.slideUp(200);
            method.hideAllSubMenu();
        };

        method.showMenu = function () {
            $toggle.addClass('active');
            $menu.slideDown(200);
        };

        method.clickSubMenuHeader = function (e) {//клик по заголовку субменю
            e.preventDefault();
            var $el = $(this),
                $target = $el.parent('li').find('ul:first');
            if ($el.hasClass('active')) {
                method.hideSubMenu($el, $target);
            } else {
                //method.hideAllSubMenu(); //если нужно показывать раскрытым только одно суб-меню - расскоментировать
                method.showSubMenu($el, $target);
            };
        };

        method.clickToggleButton = function () {//клик по кнопке меню на мобильных
            if ($toggle.hasClass('active')) {
                method.hideMenu();
            } else {
                method.showMenu();
            }
        };

        method.checkResolution = function () {//если изменилось разрешение экрана - сбрасываем
            var winW = $.viewportW();//ширина экрана
            if (winW >= BREAKPOINT) {
                method.hideAllSubMenu();
                $toggle.removeClass('active');
                $menu.show();
            };
        };

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - проверяем
                method.checkResolution();
            }
        };

        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        };

        
        $toggle.bind('click', method.clickToggleButton);//начинаем отслеживать клик по кнопке меню на мобильных
        $btn.bind('click', method.clickSubMenuHeader); //начинаем отслеживать клик по заголовкам субменю
        $window.bind('resize', method.startResize);//если переходим на десктоп - сбрасывем на дефолт

        $menu.find('li.has-menu').hover(function () {//на десктопе будем показывать субменю при наведении мышки
            var winW = $.viewportW();//ширина экрана
            if (winW >= BREAKPOINT) {
                $btn.unbind('click', method.clickSubMenuHeader).on('click', function (e) { e.preventDefault(); });//отключаем обработку клика, но оставляем заголовок некликабельным
                $(this).children('a').addClass('hover').next('ul:first').fadeIn(200);
            };
        }, function () {
            var winW = $.viewportW();
            if (winW >= BREAKPOINT) {
                $(this).children('a').removeClass('hover').next('ul:first').hide();
                $btn.bind('click', method.clickSubMenuHeader);
            };
        });

    };
    if ($('.js-p-menu').length) { initPageMenu();}

    //
    // Мобильное меню
    //---------------------------------------------------------------------------------------
    (function () {
        var $menu = $('.js-mm'),
            $toggle_btn = $('.js-mm-toggle'),
            $menu_btn = $menu.find('li').has('ul').addClass('has-menu').children('a'),
            $submenu = $menu.find('.has-menu').children('ul'),
            method = {};


        $toggle_btn.on('click', function () {
            if ($(this).hasClass('active')) {
                method.close();
            } else {
                method.show();
            }
        });

        $menu.on('click', '.m-menu__label', function () {
            method.close();
        });

        $menu.on('click', '.has-menu > a', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                method.closeSubMenu();
            } else {
                method.closeSubMenu();
                method.showSubMenu($(this));
            }
        });

        method.show = function () {
            $html.css('overflow', 'hidden');
            $overlay.show().bind('click', method.close);
            $toggle_btn.addClass('active');
            $menu.addClass('active');
        };

        method.close = function () {
            $overlay.hide().unbind('click', method.close);
            method.closeSubMenu();
            $toggle_btn.removeClass('active');
            $menu.removeClass('active');
            $html.css('overflow', 'auto');
        };

        method.showSubMenu = function (el) {
            method.closeSubMenu();
            el.addClass('active').parent('li').children('ul').slideDown();
        };

        method.closeSubMenu = function () {
            $submenu.slideUp();
            $menu_btn.removeClass('active');
        };

    })();

    //
    // Стилизуем хидер при скролле
    //---------------------------------------------------------------------------------------
    (function () {
        var $header = $('.b-header'),
            isStick = false, //флаг
            checkScroll;

        (checkScroll = function () {
            var fromTop = $window.scrollTop();
            if (fromTop > 0 && !isStick) {
                $header.addClass('scrolled');
                isStick = true;
            };
            if (fromTop === 0 && isStick) {
                $header.removeClass('scrolled');
                isStick = false;
            }
        })();

        $window.bind('scroll', checkScroll);
    })();

    //
    // Форма поиска
    //---------------------------------------------------------------------------------------
    (function () {
        var $search__btn = $('[data-searchform]'),
            $form = $('.b-search'),
            method = {};

        method.show = function () {
            $form.fadeIn(400);
        };

        method.hide = function () {
            $form.hide();
        };

        $('.b-header').on('click', '[data-searchform]', method.show);
        $form.on('click', '.b-search__close', method.hide);
    })();

    //
    // Маска для телефонного номера
    //---------------------------------------------------------------------------------------
    $('.js-phone-input').mask('+7 (999) 999 - 99 - 99');

    //
    // Стилизация Select
    //---------------------------------------------------------------------------------------
    function stylingSelect() {
        var $select = $('.js-select');
        $select.each(function () {
            $(this).selectric({
                disableOnMobile: false,
                responsive: true
            });
        });
    }
    if ($('.js-select').length) { stylingSelect(); }

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        $close = $('<button type="button" class="modal__close"><i class="icomoon-cross"></i></button>'); //иконка закрыть


        $close.on('click', function () {
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center).trigger('resize');
            $modal.fadeIn(400);
            $overlay.show().bind('click', method.close);
        };

        // закрываем
        method.close = function () {
            $modal.hide().find('iframe').attr('src', '');//если в модальном окне было видео - убъем
            $overlay.hide().unbind('click', method.close);
            $window.unbind('resize.modal');
        };

        // клик по кнопке с атрибутом data-modal - открываем модальное окно
        $body.on('click', '[data-modal]', function (e) {
            e.preventDefault();
            var link = $(this).data('modal');
            if (link) { showModal.open(link); }
        });

        return method;
    }());

    
    //
    // Слайдер
    //---------------------------------------------------------------------------------------
    function initSlider() {
        var slider = $('.js-slider');
        slider.bxSlider({
            mode: 'fade',
            pager: false,
            nextText: '<i class="icomoon-right"></i>',
            prevText: '<i class="icomoon-left"></i>',
            auto: true,
            pause: 8000,
            autoHover:true
        });
    }
    if ($('.js-slider').length) { initSlider();}
    

    //
    // Вкладки
    //---------------------------------------------------------------------------------------
    function initTabs() {
        var $list = $('.js-tabs'),
            $content = $('.js-tabs-content > div'),
            method = {};

        method.init = (function () {//спрячем "лишние" вкладки
            $content.hide()
            $list.each(function () {
                var current = $(this).find('li.current');
                if (current.length < 1) { $(this).find('li:first').addClass('current'); }
                current = $(this).find('li.current a').attr('href');
                $(current).show();
            });
        })();

        method.show = function (el) {//обработка клика по вкладке
            var $tabs = el.parents('ul').find('li');
            var tab_next = el.attr('href');
            var tab_current = $tabs.filter('.current').find('a').attr('href');
            $(tab_current).hide();
            $tabs.removeClass('current');
            el.parent().addClass('current');
            $(tab_next).fadeIn();
            history.pushState(null, null, window.location.search + el.attr('href'));
        };


        $list.on('click', 'a[href^="#"]', function (e) {//клик по вкладке
            e.preventDefault();
            method.show($(this));
        });

        method.parsing = (function () {//парсим линк и открываем нужную вкладку при загрузке
            var hash = window.location.hash;
            if (hash) {
                var selectedTab = $list.find('a[href="' + hash + '"]');
                selectedTab.trigger('click', true);
            };
        })();
    };
    if ($('.js-tabs').length) { initTabs(); }
    
    //
    // Галерея
    //---------------------------------------------------------------------------------------
    function initGallery() {
        $('.js-gallery').find('a[data-popup]').simpleLightbox({
            navText: ['<i class="icomoon-left"></i>', '<i class="icomoon-right"></i>'],
            captions: true,
            captionSelector: 'self',
            captionType: 'data',
            captionsData: 'caption',
            close: true,
            closeText: '<i class="icomoon-cross"></i>',
            showCounter: true,
            disableScroll:false
        });
    };
    if ($('.js-gallery').length) { initGallery(); }

    //
    // Видео в модальном окне
    //---------------------------------------------------------------------------------------
    $('a[data-video]').on('click', function (e) {
        e.preventDefault();
        var link = $(this).attr('href'),
            id = getYoutubeID(link);

        if (id) {
            $('#video').find('iframe').attr('src', 'https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0;autoplay=1');
            showModal.open('#video');
        }

        function getYoutubeID(url) {//парсим youtube-ссылку, возвращаем id видео
            var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp),
                urllink;
            if (match && match[1].length == 11) {
                urllink = match[1];
            } else {
                urllink = false;
            }
            return urllink;
        }
    });
    

    //
    // Скролл для фильтров каталога
    //---------------------------------------------------------------------------------------
    function initFilterScrollBar() {
        var $scroll = $('.js-scroll'),
            winW,//будем хранить ширину окна
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 250,
            BREAKPOINT = 768,
            isScrollActive = false, //флаг состояния
            method = {};

        method.initJSscroll = function () {
            $scroll.perfectScrollbar({
                wheelSpeed: 1,
                minScrollbarLength: 30
            });
            isScrollActive = true;
        };

        method.destroyJSscroll = function () {
            $scroll.perfectScrollbar('destroy');
            isScrollActive = false;
        };

        method.updateJSscroll = function () {
            $scroll.perfectScrollbar('update');
        };

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - пересчитываем
                winW = verge.viewportW();
                if (winW >= BREAKPOINT) {//если планшет и больше
                    if (!isScrollActive) {
                        method.initJSscroll();//если перешли с мелкого размера на десктоп - подключили плагин
                    } else {
                        method.updateJSscroll();
                    }
                } else {//если мелкий экран
                    if (isScrollActive) {//и плагин активен
                        method.destroyJSscroll();//выключаем его
                    }
                }
            }
        }
        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        };

        //проверка при первой загрузке страницы
        winW = verge.viewportW();
        if (winW >= BREAKPOINT) {
            method.initJSscroll();
        };

        $window.bind('resize', method.startResize);//отслежиаем ресайз
    }
    if ($('.js-scroll').length) {
        initFilterScrollBar();
    };


    //
    // Покажем / спрячем фильтры каталога
    //---------------------------------------------------------------------------------------
    function collapseFilter() {
        var $filter=$('.js-filter-target'),
            $btn=$('.js-filter-toggle'),
            $toggle = $('.js-p-menu-toggle'),
            BREAKPOINT = 992,
            rtime, //переменные для пересчета ресайза окна с задержкой delta
            timeout = false,
            delta = 200,
            method = {};

        method.showFilter = function () {
            $btn.removeClass('active');
            $filter.slideDown(200);
        };

        method.hideFilter = function () {
            $btn.addClass('active');
            $filter.slideUp(200);
        };

        method.checkResolution = function () {
            var winW = $.viewportW();//ширина экрана
            if (winW >= BREAKPOINT) {//на десктопе покажем фильтр, в любом случае
                $btn.removeClass('active');
                $filter.show();
            };
        };

        method.endResize = function () {
            if (new Date() - rtime < delta) {
                setTimeout(method.endResize, delta);
            } else {
                timeout = false;
                //ресайз окончен - проверяем
                method.checkResolution();
            }
        };

        method.startResize = function () {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(method.endResize, delta);
            }
        };

        $btn.on('click', function () {//клик по кнопке - показать/скрыть
            if ($(this).hasClass('active')) {
                method.showFilter();
            } else {
                method.hideFilter();
            }
        });

        $window.bind('resize', method.startResize);//начинаем отслеживать ресайз на десктоп
    };
    if ($('.js-filter-target').length) {
        collapseFilter();
    };

    //
    // Подключим степперы для кол-ва товаров в корзине
    //---------------------------------------------------------------------------------------
    function initStepper() {
        $('.js-stepper').stepper({
            'incrementButton': '+',
            'decrementButton': '-',
            'limit': [1, 100],
            'allowWheel': false,
            'allowArrows': false
        }).on('change', function () {
            var val = $(this).val();
            val = Math.round(val);

            if (val > 100) {
                val = 100;
            };

            if (val == 0) {
                val = 1;
            };

            $(this).val(val);
        });
    };
    if ($('.js-stepper').length) {
        initStepper();
    };

    //
    // Калькулятор в корзине
    //---------------------------------------------------------------------------------------
    function initCartCalc() {
        var $cart = $('.js-cart'), //таблица корзины
            $cartcount = $('.b-cartlink__count'), //кол-во товаров в хидере
            $total = $cart.find('.js-total-price'), //итоговая сумма
            method = {};

        method.recalc = function () {//пересчитываем корзину
            var i = 0,
                total_count = 0,
                total_price = 0;
            $cart.find('tbody tr').each(function () {
                i++;
                $(this).find('.js-num').text(i);//номер позиции
                var price = +$(this).find('.js-price').text(),
                    count = +$(this).find('.js-stepper').val(),
                    item_price = count * price;
                total_count = total_count + count;
                total_price = total_price + item_price;
                $(this).find('.js-total').text(item_price);
            });

            $total.text(total_price);
            $cartcount.text(total_count);

            if (total_count === 0) {
                method.empty();//если нет товаров в корзине
            }
        };

        method.delete = function (el) {//удаляем строку
            var $row = el.parents('tr');
            $row.remove();
            method.recalc();
        };

        method.empty = function () {
            $('#checkout').hide();
            $('#empty_cart').removeClass('g-hidden');
            $cartcount.parent('a').removeClass('active');
        };

        method.recalc();//проверим на старте

        $cart.find('.js-stepper').bind('change', method.recalc);//отслеживаем изменение кол-ва товаров
        $cart.find('.stepper-btn-wrap a').bind('click', method.recalc);
        $cart.find('.js-delete').on('click', function () {//удаление строки
            method.delete($(this));
        });
    };
    if ($('.js-cart').length) {
        initCartCalc();
    }
});
