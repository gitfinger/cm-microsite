!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function($){return n($,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function($,e,n,o,t){"use strict";var i="fullpage-wrapper",a="."+i,s="fp-scrollable",l="."+s,r=".slimScrollBar",c=".slimScrollRail",d="fp-responsive",f="fp-notransition",u="fp-destroyed",h="fp-enabled",p="fp-viewing",v="active",g="."+v,m=".section",S="fp-section",w="."+S,y=w+g,x=w+":first",b=w+":last",T="fp-tableCell",C="."+T,k="fp-nav",A="#"+k,L="fp-tooltip",E="fp-show-active",B=".slide",M="fp-slide",R="."+M,z=R+g,I="fp-slides",P="."+I,F="fp-slidesContainer",H="."+F,D="fp-table",V="fp-slidesNav",q="."+V,O=q+" a",U="fp-controlArrow",Y="."+U,W="fp-prev",N="."+W,K=U+" "+W,X=Y+N,j="fp-next",Q="."+j,_=U+" "+j,G=Y+Q,J=$(e),Z=$(n);$.fn.fullpage=function(U){function N(e){e.find(P).after('<div class="'+K+'"></div><div class="'+_+'"></div>'),"#fff"!=U.controlArrowColor&&(e.find(G).css("border-color","transparent transparent transparent "+U.controlArrowColor),e.find(X).css("border-color","transparent "+U.controlArrowColor+" transparent transparent")),U.loopHorizontal||e.find(X).hide()}function j(){gn.append('<div id="'+k+'"><ul></ul></div>'),En=$(A),En.addClass(function(){return U.showActiveTooltip?E+" "+U.navigationPosition:U.navigationPosition});for(var e=0;e<$(w).length;e++){var n="";U.anchors.length&&(n=U.anchors[e]);var o='<li><a href="#'+n+'"><span></span></a>',t=U.navigationTooltips[e];"undefined"!=typeof t&&""!==t&&(o+='<div class="'+L+" "+U.navigationPosition+'">'+t+"</div>"),o+="</li>",En.find("ul").append(o)}}function Q(){$(w).each(function(){var e=$(this).find(R);e.length?e.each(function(){qe($(this))}):qe($(this))}),ee()}function ee(){var e=$(y);ne(e),we(e),$.isFunction(U.afterLoad)&&U.afterLoad.call(e,e.data("anchor"),e.index(w)+1),$.isFunction(U.afterRender)&&U.afterRender.call(this)}function ne(e){var n=e.find("SLIDES_WRAPPER"),o=e.find(l);n.length&&(o=n.find(z)),o.mouseover()}function oe(){var e;if(!U.autoScrolling||U.scrollBar){for(var t=J.scrollTop(),i=0,a=o.abs(t-n.querySelectorAll(w)[0].offsetTop),s=n.querySelectorAll(w),l=0;l<s.length;++l){var r=s[l],c=o.abs(t-r.offsetTop);a>c&&(i=l,a=c)}e=$(s).eq(i)}if(!U.autoScrolling||U.scrollBar){if(!e.hasClass(v)){Pn=!0;var d=$(y),f=d.index(w)+1,u=De(e),h=e.data("anchor"),p=e.index(w)+1,g=e.find(z);if(g.length)var m=g.data("anchor"),S=g.index();An&&(e.addClass(v).siblings().removeClass(v),$.isFunction(U.onLeave)&&U.onLeave.call(d,f,p,u),$.isFunction(U.afterLoad)&&U.afterLoad.call(e,h,p),Fe(h,p-1),U.anchors.length&&(Cn=h,$e(S,m,h,p))),clearTimeout(zn),zn=setTimeout(function(){Pn=!1},100)}U.fitToSection&&(clearTimeout(In),In=setTimeout(function(){An&&($(y).is(e)&&(Tn=!0),he(e),Tn=!1)},1e3))}}function te(e){return e.find(P).length?e.find(z).find(l):e.find(l)}function ie(e,n){if(Mn.m[e]){var o,t;if("down"==e?(o="bottom",t=mn.moveSectionDown):(o="top",t=mn.moveSectionUp),n.length>0){if(!He(o,n))return!0;t()}else t()}}function ae(e){var n=e.originalEvent;if(!se(e.target)&&le(n)){U.autoScrolling&&e.preventDefault();var t=$(y),i=te(t);if(An&&!Sn){var a=sn(n);Dn=a.y,Vn=a.x,t.find(P).length&&o.abs(Hn-Vn)>o.abs(Fn-Dn)?o.abs(Hn-Vn)>J.width()/100*U.touchSensitivity&&(Hn>Vn?Mn.m.right&&mn.moveSlideRight():Mn.m.left&&mn.moveSlideLeft()):U.autoScrolling&&o.abs(Fn-Dn)>J.height()/100*U.touchSensitivity&&(Fn>Dn?ie("down",i):Dn>Fn&&ie("up",i))}}}function se(e,n){n=n||0;var o=$(e).parent();return n<U.normalScrollElementTouchThreshold&&o.is(U.normalScrollElements)?!0:n==U.normalScrollElementTouchThreshold?!1:se(o,++n)}function le(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function re(e){var n=e.originalEvent;if(U.fitToSection&&vn.stop(),le(n)){var o=sn(n);Fn=o.y,Hn=o.x}}function ce(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function de(n){var t=(new Date).getTime();if(U.autoScrolling&&!Bn){n=e.event||n;var i=n.wheelDelta||-n.deltaY||-n.detail,a=o.max(-1,o.min(1,i));Ln.length>149&&Ln.shift(),Ln.push(o.abs(i)),U.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);var s=$(y),l=te(s),r=t-qn;if(qn=t,r>200&&(Ln=[]),An){var c=ce(Ln,10),d=ce(Ln,70),f=c>=d;f&&(0>a?ie("down",l):ie("up",l))}return!1}U.fitToSection&&vn.stop()}function fe(e){var n=$(y),o=n.find(P),t=o.find(R).length;if(!(!o.length||Sn||2>t)){var i=o.find(z),a=null;if(a="prev"===e?i.prev(R):i.next(R),!a.length){if(!U.loopHorizontal)return;a="prev"===e?i.siblings(":last"):i.siblings(":first")}Sn=!0,Le(o,a)}}function ue(){$(z).each(function(){ln($(this),"internal")})}function he(e,n,o){var t=e.position();if("undefined"!=typeof t){var i={element:e,callback:n,isMovementUp:o,dest:t,dtop:t.top,yMovement:De(e),anchorLink:e.data("anchor"),sectionIndex:e.index(w),activeSlide:e.find(z),activeSection:$(y),leavingSection:$(y).index(w)+1,localIsResizing:Tn};if(!(i.activeSection.is(e)&&!Tn||U.scrollBar&&J.scrollTop()===i.dtop)){if(i.activeSlide.length)var a=i.activeSlide.data("anchor"),s=i.activeSlide.index();if(U.autoScrolling&&U.continuousVertical&&"undefined"!=typeof i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=ge(i)),$.isFunction(U.onLeave)&&!i.localIsResizing){if(U.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement)===!1)return;xe(i.activeSection)}e.addClass(v).siblings().removeClass(v),An=!1,$e(s,a,i.anchorLink,i.sectionIndex),pe(i),Cn=i.anchorLink,Fe(i.anchorLink,i.sectionIndex)}}}function pe(e){if(U.css3&&U.autoScrolling&&!U.scrollBar){var n="translate3d(0px, -"+e.dtop+"px, 0px)";We(n,!0),U.scrollingSpeed?setTimeout(function(){Se(e)},U.scrollingSpeed):Se(e)}else{var o=ve(e);$(o.element).animate(o.options,U.scrollingSpeed,U.easing).promise().done(function(){Se(e)})}}function ve(e){var n={};return U.autoScrolling&&!U.scrollBar?(n.options={top:-e.dtop},n.element=a):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function ge(e){return e.isMovementUp?$(y).before(e.activeSection.nextAll(w)):$(y).after(e.activeSection.prevAll(w).get().reverse()),rn($(y).position().top),ue(),e.wrapAroundElements=e.activeSection,e.dest=e.element.position(),e.dtop=e.dest.top,e.yMovement=De(e.element),e}function me(e){e.wrapAroundElements&&e.wrapAroundElements.length&&(e.isMovementUp?$(x).before(e.wrapAroundElements):$(b).after(e.wrapAroundElements),rn($(y).position().top),ue())}function Se(e){me(e),e.element.find(".fp-scrollable").mouseover(),$.isFunction(U.afterLoad)&&!e.localIsResizing&&U.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),we(e.element),ye(e.element),An=!0,$.isFunction(e.callback)&&e.callback.call(this)}function we(e){e.find("img[data-src], video[data-src], audio[data-src]").each(function(){$(this).attr("src",$(this).data("src")),$(this).removeAttr("data-src")})}function ye(e){e.find("video, audio").each(function(){var e=$(this).get(0);e.hasAttribute("autoplay")&&"function"==typeof e.play&&e.play()})}function xe(e){e.find("video, audio").each(function(){var e=$(this).get(0);e.hasAttribute("data-ignore")||"function"!=typeof e.pause||e.pause()})}function be(){var n=e.location.hash.replace("#","").split("/"),o=n[0],t=n[1];o&&Xe(o,t)}function Te(){if(!Pn&&!U.lockAnchors){var n=e.location.hash.replace("#","").split("/"),o=n[0],t=n[1];if(o.length){var i="undefined"==typeof Cn,a="undefined"==typeof Cn&&"undefined"==typeof t&&!Sn;(o&&o!==Cn&&!i||a||!Sn&&kn!=t)&&Xe(o,t)}}}function Ce(e){clearTimeout(On);var n=$(":focus");if(!n.is("textarea")&&!n.is("input")&&!n.is("select")&&U.keyboardScrolling&&U.autoScrolling){var o=e.which,t=[40,38,32,33,34];$.inArray(o,t)>-1&&e.preventDefault(),On=setTimeout(function(){ke(e)},150)}}function ke(e){var n=e.shiftKey;switch(Bn=e.ctrlKey,e.which){case 38:case 33:Mn.k.up&&mn.moveSectionUp();break;case 32:if(n&&Mn.k.up){mn.moveSectionUp();break}case 40:case 34:Mn.k.down&&mn.moveSectionDown();break;case 36:Mn.k.up&&mn.moveTo(1);break;case 35:Mn.k.down&&mn.moveTo($(w).length);break;case 37:Mn.k.left&&mn.moveSlideLeft();break;case 39:Mn.k.right&&mn.moveSlideRight();break;default:return}}function Ae(e){An&&(e.pageY<Un?mn.moveSectionUp():e.pageY>Un&&mn.moveSectionDown()),Un=e.pageY}function Le(e,n){var t=n.position(),i=n.index(),a=e.closest(w),s=a.index(w),l=a.data("anchor"),r=a.find(q),c=Ge(n),d=Tn;if(U.onSlideLeave){var f=a.find(z),u=f.index(),h=Ve(u,i);if(!d&&"none"!==h&&$.isFunction(U.onSlideLeave)&&U.onSlideLeave.call(f,l,s+1,u,h,i)===!1)return void(Sn=!1)}n.addClass(v).siblings().removeClass(v),!U.loopHorizontal&&U.controlArrows&&(a.find(X).toggle(0!==i),a.find(G).toggle(!n.is(":last-child"))),a.hasClass(v)&&$e(i,c,l,s);var p=function(){d||$.isFunction(U.afterSlideLoad)&&U.afterSlideLoad.call(n,l,s+1,c,i),Sn=!1};if(U.css3){var m="translate3d(-"+o.round(t.left)+"px, 0px, 0px)";Me(e.find(H),U.scrollingSpeed>0).css(cn(m)),setTimeout(function(){p()},U.scrollingSpeed,U.easing)}else e.animate({scrollLeft:o.round(t.left)},U.scrollingSpeed,U.easing,function(){p()});r.find(g).removeClass(v),r.find("li").eq(i).find("a").addClass(v)}function Ee(){if(Be(),wn){var e=$(n.activeElement);if(!e.is("textarea")&&!e.is("input")&&!e.is("select")){var t=J.height();o.abs(t-Yn)>20*o.max(Yn,t)/100&&(mn.reBuild(!0),Yn=t)}}else clearTimeout(Wn),Wn=setTimeout(function(){mn.reBuild(!0)},350)}function Be(){var e=U.responsive||U.responsiveWidth,n=U.responsiveHeight;if(e&&mn.setResponsive(J.width()<e),n){var o=xn.hasClass(d);o||mn.setResponsive(J.height()<n)}}function Me(e){var n="all "+U.scrollingSpeed+"ms "+U.easingcss3;return e.removeClass(f),e.css({"-webkit-transition":n,transition:n})}function Re(e){return e.addClass(f)}function ze(e,n){var t=825,i=900;if(t>e||i>n){var a=100*e/t,s=100*n/i,l=o.min(a,s),r=l.toFixed(2);gn.css("font-size",r+"%")}else gn.css("font-size","100%")}function Ie(e,n){U.navigation&&($(A).find(g).removeClass(v),e?$(A).find('a[href="#'+e+'"]').addClass(v):$(A).find("li").eq(n).find("a").addClass(v))}function Pe(e){U.menu&&($(U.menu).find(g).removeClass(v),$(U.menu).find('[data-menuanchor="'+e+'"]').addClass(v))}function Fe(e,n){Pe(e),Ie(e,n)}function He(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0}function De(e){var n=$(y).index(w),o=e.index(w);return n==o?"none":n>o?"up":"down"}function Ve(e,n){return e==n?"none":e>n?"left":"right"}function qe(e){e.css("overflow","hidden");var n=e.closest(w),o=e.find(l),t;o.length?t=o.get(0).scrollHeight:(t=e.get(0).scrollHeight,U.verticalCentered&&(t=e.find(C).get(0).scrollHeight));var i=bn-parseInt(n.css("padding-bottom"))-parseInt(n.css("padding-top"));t>i?o.length?o.css("height",i+"px").parent().css("height",i+"px"):(U.verticalCentered?e.find(C).wrapInner('<div class="'+s+'" />'):e.wrapInner('<div class="'+s+'" />'),e.find(l).slimScroll({allowPageScroll:!0,height:i+"px",size:"10px",alwaysVisible:!0})):Oe(e),e.css("overflow","")}function Oe(e){e.find(l).children().first().unwrap().unwrap(),e.find(r).remove(),e.find(c).remove()}function Ue(e){e.addClass(D).wrapInner('<div class="'+T+'" style="height:'+Ye(e)+'px;" />')}function Ye(e){var n=bn;if(U.paddingTop||U.paddingBottom){var o=e;o.hasClass(S)||(o=e.closest(w));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=bn-t}return n}function We(e,n){n?Me(xn):Re(xn),xn.css(cn(e)),setTimeout(function(){xn.removeClass(f)},10)}function Ne(e){var n=$(w+'[data-anchor="'+e+'"]');return n.length||(n=$(w).eq(e-1)),n}function Ke(e,n){var o=n.find(P),t=o.find(R+'[data-anchor="'+e+'"]');return t.length||(t=o.find(R).eq(e)),t}function Xe(e,n){var o=Ne(e);"undefined"==typeof n&&(n=0),e===Cn||o.hasClass(v)?je(o,n):he(o,function(){je(o,n)})}function je(e,n){if("undefined"!=typeof n){var o=e.find(P),t=Ke(n,e);t.length&&Le(o,t)}}function Qe(e,n){e.append('<div class="'+V+'"><ul></ul></div>');var o=e.find(q);o.addClass(U.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(v)}function $e(e,n,o,t){var i="";U.anchors.length&&!U.lockAnchors&&(e?("undefined"!=typeof o&&(i=o),"undefined"==typeof n&&(n=e),kn=n,_e(i+"/"+n)):"undefined"!=typeof e?(kn=n,_e(o)):_e(o)),Je()}function _e(n){if(U.recordHistory)location.hash=n;else if(wn||yn)history.replaceState(t,t,"#"+n);else{var o=e.location.href.split("#")[0];e.location.replace(o+"#"+n)}}function Ge(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function Je(){var e=$(y),n=e.find(z),o=e.data("anchor"),t=Ge(n),i=e.index(w),a=String(i);U.anchors.length&&(a=o),n.length&&(a=a+"-"+t),a=a.replace("/","-").replace("#","");var s=new RegExp("\\b\\s?"+p+"-[^\\s]+\\b","g");gn[0].className=gn[0].className.replace(s,""),gn.addClass(p+"-"+a)}function Ze(){var o=n.createElement("p"),i,a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(o,null);for(var s in a)o.style[s]!==t&&(o.style[s]="translate3d(1px,1px,1px)",i=e.getComputedStyle(o).getPropertyValue(a[s]));return n.body.removeChild(o),i!==t&&i.length>0&&"none"!==i}function en(){n.addEventListener?(n.removeEventListener("mousewheel",de,!1),n.removeEventListener("wheel",de,!1),n.removeEventListener("DOMMouseScroll",de,!1)):n.detachEvent("onmousewheel",de)}function nn(){n.addEventListener?(n.addEventListener("mousewheel",de,!1),n.addEventListener("wheel",de,!1),n.addEventListener("DOMMouseScroll",de,!1)):n.attachEvent("onmousewheel",de)}function on(){if(wn||yn){var e=an();$(a).off("touchstart "+e.down).on("touchstart "+e.down,re),$(a).off("touchmove "+e.move).on("touchmove "+e.move,ae)}}function tn(){if(wn||yn){var e=an();$(a).off("touchstart "+e.down),$(a).off("touchmove "+e.move)}}function an(){var n;return n=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function sn(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,yn&&le(e)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function ln(e,n){mn.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Tn=!0),Le(e.closest(P),e),"undefined"!=typeof n&&(Tn=!1),mn.setScrollingSpeed(Rn.scrollingSpeed,"internal")}function rn(e){if(U.scrollBar)xn.scrollTop(e);else if(U.css3){var n="translate3d(0px, -"+e+"px, 0px)";We(n,!1)}else xn.css("top",-e)}function cn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function dn(e,n,o){switch(n){case"up":Mn[o].up=e;break;case"down":Mn[o].down=e;break;case"left":Mn[o].left=e;break;case"right":Mn[o].right=e;break;case"all":"m"==o?mn.setAllowScrolling(e):mn.setKeyboardScrolling(e)}}function fn(){rn(0),$(A+", "+q+", "+Y).remove(),$(w).css({height:"","background-color":"",padding:""}),$(R).css({width:""}),xn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),$(w+", "+R).each(function(){Oe($(this)),$(this).removeClass(D+" "+v)}),Re(xn),xn.find(C+", "+H+", "+P).each(function(){$(this).replaceWith(this.childNodes)}),vn.scrollTop(0)}function un(e,n,o){U[e]=n,"internal"!==o&&(Rn[e]=n)}function hn(){U.continuousVertical&&(U.loopTop||U.loopBottom)&&(U.continuousVertical=!1,pn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),U.continuousVertical&&U.scrollBar&&(U.continuousVertical=!1,pn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),$.each(U.anchors,function(e,n){($("#"+n).length||$('[name="'+n+'"]').length)&&pn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function pn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var vn=$("html, body"),gn=$("body"),mn=$.fn.fullpage;U=$.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:m,slideSelector:B,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},U),hn(),$.extend($.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),$.extend($.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),mn.setAutoScrolling=function(e,n){un("autoScrolling",e,n);var o=$(y);U.autoScrolling&&!U.scrollBar?(vn.css({overflow:"hidden",height:"100%"}),mn.setRecordHistory(U.recordHistory,"internal"),xn.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&rn(o.position().top)):(vn.css({overflow:"visible",height:"initial"}),mn.setRecordHistory(!1,"internal"),xn.css({"-ms-touch-action":"","touch-action":""}),rn(0),o.length&&vn.scrollTop(o.position().top))},mn.setRecordHistory=function(e,n){un("recordHistory",e,n)},mn.setScrollingSpeed=function(e,n){un("scrollingSpeed",e,n)},mn.setFitToSection=function(e,n){un("fitToSection",e,n)},mn.setLockAnchors=function(e){U.lockAnchors=e},mn.setMouseWheelScrolling=function(e){e?nn():en()},mn.setAllowScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),$.each(n,function(n,o){dn(e,o,"m")})):e?(mn.setMouseWheelScrolling(!0),on()):(mn.setMouseWheelScrolling(!1),tn())},mn.setKeyboardScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),$.each(n,function(n,o){dn(e,o,"k")})):U.keyboardScrolling=e},mn.moveSectionUp=function(){var e=$(y).prev(w);e.length||!U.loopTop&&!U.continuousVertical||(e=$(w).last()),e.length&&he(e,null,!0)},mn.moveSectionDown=function(){var e=$(y).next(w);if(e.length||!U.loopBottom&&!U.continuousVertical||(e=$(w).first()),e.length){if(U.onBeforeMoveSection&&$.isFunction(U.onBeforeMoveSection)&&U.onBeforeMoveSection.call(this,direction,currentSlide,destiny,slides,activeSection)===!1)return;he(e,null,!1)}},mn.silentMoveTo=function(e,n){mn.setScrollingSpeed(0,"internal"),mn.moveTo(e,n),mn.setScrollingSpeed(Rn.scrollingSpeed,"internal")},mn.moveTo=function(e,n){var o=Ne(e);"undefined"!=typeof n?Xe(e,n):o.length>0&&he(o)},mn.moveSlideRight=function(){fe("next")},mn.moveSlideLeft=function(){fe("prev")},mn.reBuild=function(e){if(!xn.hasClass(u)){Tn=!0;var n=J.width();bn=J.height(),U.resize&&ze(bn,n),$(w).each(function(){var e=$(this).find(P),n=$(this).find(R);U.verticalCentered&&$(this).find(C).css("height",Ye($(this))+"px"),$(this).css("height",bn+"px"),U.scrollOverflow&&(n.length?n.each(function(){qe($(this))}):qe($(this))),n.length>1&&Le(e,e.find(z))});var o=$(y),t=o.index(w);t&&mn.silentMoveTo(t+1),Tn=!1,$.isFunction(U.afterResize)&&e&&U.afterResize.call(xn),$.isFunction(U.afterReBuild)&&!e&&U.afterReBuild.call(xn)}},mn.setResponsive=function(e){var n=xn.hasClass(d);e?n||(mn.setAutoScrolling(!1,"internal"),mn.setFitToSection(!1,"internal"),$(A).hide(),xn.addClass(d)):n&&(mn.setAutoScrolling(Rn.autoScrolling,"internal"),mn.setFitToSection(Rn.autoScrolling,"internal"),$(A).show(),xn.removeClass(d))};var Sn=!1,wn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),yn="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,xn=$(this),bn=J.height(),Tn=!1,Cn,kn,An=!0,Ln=[],En,Bn,Mn={};Mn.m={up:!0,down:!0,left:!0,right:!0},Mn.k=$.extend(!0,{},Mn.m);var Rn=$.extend(!0,{},U);$(this).length?(xn.css({height:"100%",position:"relative"}),xn.addClass(i),$("html").addClass(h)):pn("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"),U.css3&&(U.css3=Ze()),mn.setAllowScrolling(!0),xn.removeClass(u),$(U.sectionSelector).each(function(){$(this).addClass(S)}),$(U.slideSelector).each(function(){$(this).addClass(M)}),U.navigation&&j(),$(w).each(function(e){var n=$(this),o=$(this).find(R),t=o.length;if(e||0!==$(y).length||$(this).addClass(v),$(this).css("height",bn+"px"),U.paddingTop&&$(this).css("padding-top",U.paddingTop),U.paddingBottom&&$(this).css("padding-bottom",U.paddingBottom),"undefined"!=typeof U.sectionsColor[e]&&$(this).css("background-color",U.sectionsColor[e]),"undefined"!=typeof U.anchors[e]&&($(this).attr("data-anchor",U.anchors[e]),$(this).hasClass(v)&&Fe(U.anchors[e],e)),t>0){var i=100*t,a=100/t;o.wrapAll('<div class="'+F+'" />'),o.parent().wrap('<div class="'+I+'" />'),$(this).find(H).css("width",i+"%"),t>1&&(U.controlArrows&&N($(this)),U.slidesNavigation&&Qe($(this),t)),o.each(function(e){$(this).css("width",a+"%"),U.verticalCentered&&Ue($(this))});var s=n.find(z);s.length?ln(s):o.eq(0).addClass(v)}else U.verticalCentered&&Ue($(this))}).promise().done(function(){mn.setAutoScrolling(U.autoScrolling,"internal");var o=$(y).find(z);if(o.length&&(0!==$(y).index(w)||0===$(y).index(w)&&0!==o.index())&&ln(o),U.fixedElements&&U.css3&&$(U.fixedElements).appendTo(gn),U.navigation&&(En.css("margin-top","-"+En.height()/2+"px"),En.find("li").eq($(y).index(w)).find("a").addClass(v)),U.menu&&U.css3&&$(U.menu).closest(a).length&&$(U.menu).appendTo(gn),U.scrollOverflow?("complete"===n.readyState&&Q(),J.on("load",Q)):ee(),Be(),!U.animateAnchor){var t=e.location.hash.replace("#","").split("/"),i=t[0];if(i.length){var s=$('[data-anchor="'+i+'"]');s.length&&(U.autoScrolling?rn(s.position().top):(rn(0),vn.scrollTop(s.position().top)),Fe(i,null),$.isFunction(U.afterLoad)&&U.afterLoad.call(s,i,s.index(w)+1),s.addClass(v).siblings().removeClass(v))}}Je(),J.on("load",function(){be()})});var zn,In,Pn=!1;J.on("scroll",oe);var Fn=0,Hn=0,Dn=0,Vn=0,qn=(new Date).getTime();J.on("hashchange",Te),Z.keydown(Ce),Z.keyup(function(e){Bn=e.ctrlKey}),$(e).blur(function(){Bn=!1});var On;xn.mousedown(function(e){2==e.which&&(Un=e.pageY,xn.on("mousemove",Ae))}),xn.mouseup(function(e){2==e.which&&xn.off("mousemove")});var Un=0;Z.on("click touchstart",A+" a",function(e){e.preventDefault();var n=$(this).parent().index();he($(w).eq(n))}),Z.on("click touchstart",O,function(e){e.preventDefault();var n=$(this).closest(w).find(P),o=n.find(R).eq($(this).closest("li").index());Le(n,o)}),U.normalScrollElements&&(Z.on("mouseenter",U.normalScrollElements,function(){mn.setMouseWheelScrolling(!1)}),Z.on("mouseleave",U.normalScrollElements,function(){mn.setMouseWheelScrolling(!0)})),$(w).on("click touchstart",Y,function(){$(this).hasClass(W)?Mn.m.left&&mn.moveSlideLeft():Mn.m.right&&mn.moveSlideRight()}),J.resize(Ee);var Yn=bn,Wn;mn.destroy=function(e){mn.setAutoScrolling(!1,"internal"),mn.setAllowScrolling(!1),mn.setKeyboardScrolling(!1),xn.addClass(u),J.off("scroll",oe).off("hashchange",Te).off("resize",Ee),Z.off("click",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click",O).off("mouseover",U.normalScrollElements).off("mouseout",U.normalScrollElements),$(w).off("click",Y),e&&fn()}}});