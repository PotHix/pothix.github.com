/* Retina.js */
(function(){var i=(typeof exports=="undefined"?window:exports);var e={check_mime_type:true};i.Retina=f;function f(){}f.configure=function(l){if(l==null){l={}}for(var m in l){e[m]=l[m]}};f.init=function(l){if(l==null){l=i}var m=l.onload||new Function;l.onload=function(){var n=document.getElementsByTagName("img"),o=[],p,q;for(p=0;p<n.length;p++){q=n[p];o.push(new j(q))}m()}};f.isRetina=function(){var l="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(i.devicePixelRatio>1){return true}if(i.matchMedia&&i.matchMedia(l).matches){return true}return false};i.RetinaImagePath=d;function d(m,l){this.path=m;if(typeof l!=="undefined"&&l!==null){this.at_2x_path=l;this.perform_check=false}else{this.at_2x_path=m.replace(/\.\w+$/,function(n){return"@2x"+n});this.perform_check=true}}var b,c,a;if(localStorage){if(localStorage.retinajs_confirmed_paths){try{d.confirmed_paths=JSON.parse(localStorage.retinajs_confirmed_paths)}catch(g){d.confirmed_paths={}}}else{d.confirmed_paths={}}if(localStorage.retinajs_skip_paths){try{d.skip_paths=JSON.parse(localStorage.retinajs_skip_paths)}catch(g){d.skip_paths={}}}else{d.skip_paths={}}b=false;c=function h(){if(!b){b=true;setTimeout(a,10)}};a=function k(){if(localStorage){try{localStorage.retinajs_confirmed_paths=JSON.stringify(d.confirmed_paths);localStorage.retinajs_skip_paths=JSON.stringify(d.skip_paths)}catch(l){c=a=function(){}}}b=false}}else{d.confirmed_paths={};d.skip_paths={};c=a=function(){}}d.prototype.is_external=function(){return !!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};d.prototype.check_2x_variant=function(n){var l,m=this;if(this.is_external()){return n(false)}else{if(d.skip_paths[this.at_2x_path]){return n(false)}else{if(d.confirmed_paths[this.at_2x_path]){return n(true)}else{l=new XMLHttpRequest;l.open("HEAD",this.at_2x_path);l.onreadystatechange=function(){if(l.readyState!=4){return n(false)}if(l.status>=200&&l.status<=399){if(e.check_mime_type){var o=l.getResponseHeader("Content-Type");if(o==null||!o.match(/^image/i)){d.skip_paths[m.at_2x_path]=1;c();return n(false)}}d.confirmed_paths[m.at_2x_path]=1;c();return n(true)}else{d.skip_paths[m.at_2x_path]=1;c();return n(false)}};l.send()}}}};function j(l){this.el=l;this.path=new d(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var m=this;this.path.check_2x_variant(function(n){if(n){m.swap()}})}i.RetinaImage=j;j.prototype.swap=function(n){if(typeof n=="undefined"){n=this.path.at_2x_path}var l=this;function m(){if(!l.el.complete){setTimeout(m,5)}else{l.el.setAttribute("width",l.el.offsetWidth);l.el.setAttribute("height",l.el.offsetHeight);l.el.setAttribute("src",n)}}m()};if(f.isRetina()){f.init(i)}})();

/* SUPERFISH */
(function(b){b.fn.superfish=function(k){var g=b.fn.superfish,j=g.c,f=b(['<span class="',j.arrowClass,'"> &#187;</span>'].join("")),i=function(){var c=b(this),l=d(c);clearTimeout(l.sfTimer);c.showSuperfishUl().siblings().hideSuperfishUl()},e=function(){var c=b(this),m=d(c),l=g.op;clearTimeout(m.sfTimer);m.sfTimer=setTimeout(function(){l.retainPath=(b.inArray(c[0],l.$path)>-1);c.hideSuperfishUl();if(l.$path.length&&c.parents(["li.",l.hoverClass].join("")).length<1){i.call(l.$path)}},l.delay)},d=function(c){var l=c.parents(["ul.",j.menuClass,":first"].join(""))[0];g.op=g.o[l.serial];return l},h=function(c){c.addClass(j.anchorClass).append(f.clone())};return this.each(function(){var c=this.serial=g.o.length;var m=b.extend({},g.defaults,k);m.$path=b("li."+m.pathClass,this).slice(0,m.pathLevels).each(function(){b(this).addClass([m.hoverClass,j.bcClass].join(" ")).filter("li:has(ul)").removeClass(m.pathClass)});g.o[c]=g.op=m;b("li:has(ul)",this)[(b.fn.hoverIntent&&!m.disableHI)?"hoverIntent":"hover"](i,e).each(function(){if(m.autoArrows){h(b(">a:first-child",this))}}).not("."+j.bcClass).hideSuperfishUl();var l=b("a",this);l.each(function(n){var o=l.eq(n).parents("li");l.eq(n).focus(function(){i.call(o)}).blur(function(){e.call(o)})});m.onInit.call(this)}).each(function(){var c=[j.menuClass];if(g.op.dropShadows&&!(b.browser.msie&&b.browser.version<7)){c.push(j.shadowClass)}b(this).addClass(c.join(" "))})};var a=b.fn.superfish;a.o=[];a.op={};a.IE7fix=function(){var c=a.op;if(b.browser.msie&&b.browser.version>6&&c.dropShadows&&c.animation.opacity!=undefined){this.toggleClass(a.c.shadowClass+"-off")}};a.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"};a.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};b.fn.extend({hideSuperfishUl:function(){var e=a.op,d=(e.retainPath===true)?e.$path:"";e.retainPath=false;var c=b(["li.",e.hoverClass].join(""),this).add(this).not(d).removeClass(e.hoverClass).find(">ul").hide().css("visibility","hidden");e.onHide.call(c);return this},showSuperfishUl:function(){var e=a.op,d=a.c.shadowClass+"-off",c=this.addClass(e.hoverClass).find(">ul:hidden").css("visibility","visible");a.IE7fix.call(c);e.onBeforeShow.call(c);c.animate(e.animation,e.speed,function(){a.IE7fix.call(c);e.onShow.call(c)});return this}})})(jQuery);

/* SUPERSUBS */
(function(a){a.fn.supersubs=function(b){var c=a.extend({},a.fn.supersubs.defaults,b);return this.each(function(){var d=a(this);var e=a.meta?a.extend({},c,d.data()):c;var f=a('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(d).width();a("#menu-fontsize").remove();$ULs=d.find("ul");$ULs.each(function(l){var k=$ULs.eq(l);var j=k.children();var g=j.children("a");var m=j.css("white-space","nowrap").css("float");var h=k.add(j).add(g).css({"float":"none",width:"auto"}).end().end()[0].clientWidth/f;h+=e.extraWidth;if(h>e.maxWidth){h=e.maxWidth}else{if(h<e.minWidth){h=e.minWidth}}h+="em";k.css("width",h);j.css({"float":m,width:"100%","white-space":"normal"}).each(function(){var n=a(">ul",this);var i=n.css("left")!==undefined?"left":"right";n.css(i,h)})})})};a.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);

/*! responsive-nav.js v1.0.20 by @viljamis, http://responsive-nav.com, MIT license */
var responsiveNav=function(h,g){var v=!!h.getComputedStyle;h.getComputedStyle||(h.getComputedStyle=function(a){this.el=a;this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;"float"===b&&(b="styleFloat");c.test(b)&&(b=b.replace(c,function(a,b,c){return c.toUpperCase()}));return a.currentStyle[b]?a.currentStyle[b]:null};return this});var d,f,e,n=g.createElement("style"),p,q,l=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"===typeof c&&c.handleEvent)a.addEventListener(b,
function(a){c.handleEvent.call(c,a)},d);else throw e;}else"attachEvent"in a&&("object"===typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},k=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"===typeof c&&c.handleEvent)a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e;}else"detachEvent"in a&&("object"===typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):
a.detachEvent("on"+b,c))},w=function(a){if(1>a.children.length)throw Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},m=function(a,b){for(var c in b)a.setAttribute(c,b[c])},r=function(a,b){a.className+=" "+b;a.className=a.className.replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b){a.className=a.className.replace(RegExp("(\\s|^)"+b+"(\\s|$)")," ").replace(/(^\s*)|(\s*$)/g,"")},u=function(a,b){var c;
this.options={animate:!0,transition:350,label:"Menu",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(c in b)this.options[c]=b[c];r(g.documentElement,this.options.jsClass);this.wrapperEl=a.replace("#","");if(g.getElementById(this.wrapperEl))this.wrapper=g.getElementById(this.wrapperEl);else throw Error("The nav element you are trying to select doesn't exist");this.wrapper.inner=w(this.wrapper);f=this.options;d=this.wrapper;
this._init(this)};u.prototype={destroy:function(){this._removeStyles();s(d,"closed");s(d,"opened");d.removeAttribute("style");d.removeAttribute("aria-hidden");t=d=null;k(h,"resize",this,!1);k(g.body,"touchmove",this,!1);k(e,"touchstart",this,!1);k(e,"touchend",this,!1);k(e,"keyup",this,!1);k(e,"click",this,!1);k(e,"mouseup",this,!1);f.customToggle?e.removeAttribute("aria-hidden"):e.parentNode.removeChild(e)},toggle:function(){!0===p&&(q?(s(d,"opened"),r(d,"closed"),m(d,{"aria-hidden":"true"}),f.animate?
(p=!1,setTimeout(function(){d.style.position="absolute";p=!0},f.transition+10)):d.style.position="absolute",q=!1,f.close()):(s(d,"closed"),r(d,"opened"),d.style.position=f.openPos,m(d,{"aria-hidden":"false"}),q=!0,f.open()))},handleEvent:function(a){a=a||h.event;switch(a.type){case "touchstart":this._onTouchStart(a);break;case "touchmove":this._onTouchMove(a);break;case "touchend":case "mouseup":this._onTouchEnd(a);break;case "click":this._preventDefault(a);break;case "keyup":this._onKeyUp(a);break;
case "resize":this._resize(a)}},_init:function(){r(d,"closed");p=!0;q=!1;this._createToggle();this._transitions();this._resize();l(h,"resize",this,!1);l(g.body,"touchmove",this,!1);l(e,"touchstart",this,!1);l(e,"touchend",this,!1);l(e,"mouseup",this,!1);l(e,"keyup",this,!1);l(e,"click",this,!1);f.init()},_createStyles:function(){n.parentNode||g.getElementsByTagName("head")[0].appendChild(n)},_removeStyles:function(){n.parentNode&&n.parentNode.removeChild(n)},_createToggle:function(){if(f.customToggle){var a=
f.customToggle.replace("#","");if(g.getElementById(a))e=g.getElementById(a);else throw Error("The custom nav toggle you are trying to select doesn't exist");}else a=g.createElement("a"),a.innerHTML=f.label,m(a,{href:"#",id:"nav-toggle"}),"after"===f.insert?d.parentNode.insertBefore(a,d.nextSibling):d.parentNode.insertBefore(a,d),e=g.getElementById("nav-toggle")},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onTouchStart:function(a){a.stopPropagation();
this.startX=a.touches[0].clientX;this.startY=a.touches[0].clientY;this.touchHasMoved=!1;k(e,"mouseup",this,!1)},_onTouchMove:function(a){if(10<Math.abs(a.touches[0].clientX-this.startX)||10<Math.abs(a.touches[0].clientY-this.startY))this.touchHasMoved=!0},_onTouchEnd:function(a){this._preventDefault(a);if(!this.touchHasMoved)if("touchend"===a.type){this.toggle(a);var b=this;d.addEventListener("click",b._preventDefault,!0);setTimeout(function(){d.removeEventListener("click",b._preventDefault,!0)},
f.transition+100)}else{var c=a||h.event;3!==c.which&&2!==c.button&&this.toggle(a)}},_onKeyUp:function(a){13===(a||h.event).keyCode&&this.toggle(a)},_transitions:function(){if(f.animate){var a=d.style,b="max-height "+f.transition+"ms";a.WebkitTransition=b;a.MozTransition=b;a.OTransition=b;a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<d.inner.length;b++)a+=d.inner[b].offsetHeight;a="#"+this.wrapperEl+".opened{max-height:"+a+"px}";v&&(n.innerHTML=a)},_resize:function(){"none"!==h.getComputedStyle(e,
null).getPropertyValue("display")?(m(e,{"aria-hidden":"false"}),d.className.match(/(^|\s)closed(\s|$)/)&&(m(d,{"aria-hidden":"true"}),d.style.position="absolute"),this._createStyles(),this._calcHeight()):(m(e,{"aria-hidden":"true"}),m(d,{"aria-hidden":"false"}),d.style.position=f.openPos,this._removeStyles())}};var t;return function(a,b){t||(t=new u(a,b));return t}}(window,document);

/*!
* FitVids 1.0
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
(function(a){a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var f=document.createElement("div"),d=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],e="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";f.className="fit-vids-style";f.id="fit-vids-style";f.style.display="none";f.innerHTML=e;d.parentNode.insertBefore(f,d)}if(b){a.extend(c,b)}return this.each(function(){var g=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(c.customSelector){g.push(c.customSelector)}var h=a(this).find(g.join(","));h=h.not("object object");h.each(function(){var m=a(this);if(this.tagName.toLowerCase()==="embed"&&m.parent("object").length||m.parent(".fluid-width-video-wrapper").length){return}var i=(this.tagName.toLowerCase()==="object"||(m.attr("height")&&!isNaN(parseInt(m.attr("height"),10))))?parseInt(m.attr("height"),10):m.height(),j=!isNaN(parseInt(m.attr("width"),10))?parseInt(m.attr("width"),10):m.width(),k=i/j;if(!m.attr("id")){var l="fitvid"+Math.floor(Math.random()*999999);m.attr("id",l)}m.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",(k*100)+"%");m.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);

/*!
 * headroom.js v0.3.9 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/
 * License: MIT
 */

!function(a){"use strict";function b(a){this.callback=a,this.ticking=!1}function c(a,d){d=d||c.options,this.lastKnownScrollY=0,this.elem=a,this.debouncer=new b(this.update.bind(this)),this.tolerance=d.tolerance,this.classes=d.classes,this.offset=d.offset}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,b.prototype={constructor:b,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.update.bind(this)),this.ticking=!0)},handleEvent:function(){this.requestTick()}},c.prototype={constructor:c,init:function(){this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100)},destroy:function(){window.removeEventListener("scroll",this.eventHandler,!1),this.eventHandler=null,this.elem.classList.remove(this.classes.unpinned,this.classes.pinned,this.classes.initial)},attachEvent:function(){this.eventHandler||(this.eventHandler=this.debouncer.handleEvent.bind(this.debouncer),window.addEventListener("scroll",this.eventHandler,!1))},unpin:function(){this.elem.classList.add(this.classes.unpinned),this.elem.classList.remove(this.classes.pinned)},pin:function(){this.elem.classList.remove(this.classes.unpinned),this.elem.classList.add(this.classes.pinned)},update:function(){var a=window.scrollY,b=Math.abs(a-this.lastKnownScrollY)>=this.tolerance;0>a||(b&&(a>this.lastKnownScrollY&&a>=this.offset?this.unpin():a<this.lastKnownScrollY&&this.pin()),this.lastKnownScrollY=a)}},c.options={tolerance:0,offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",initial:"headroom"}},a.Headroom=c}(this);
!function(a){a.fn.headroom=function(b){return this.each(function(){var c=a(this),d=c.data("headroom"),e="object"==typeof b&&b;e=a.extend(!0,{},Headroom.options,e),d||(d=new Headroom(this,e),d.init(),c.data("headroom",d)),"string"==typeof b&&d[b]()})},a("[data-headroom]").each(function(){var b=a(this);b.headroom(b.data())})}(window.Zepto||window.jQuery);
