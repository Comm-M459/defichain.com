/* Written by Erik Terwan - MIT license - https://github.com/terwanerik */
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.ScrollTrigger=e()}(this,function(){"use strict";return function(t,e,n){function i(){var t=h.bindElement.scrollTop?h.bindElement.scrollTop:document.documentElement.scrollTop,e=h.bindElement.scrollLeft?h.bindElement.scrollLeft:document.documentElement.scrollLeft;a.left==e&&a.top==t||h.scrollDidChange(),r.length>0||c.length>0?(u=!0,d(i)):u=!1}function l(t,e){var n=e.split("("),i=n[0];if(n.length>1?(n=n[1].split(")")[0],n=n.indexOf("', '")>-1?n.split("', '"):n.indexOf("','")>-1?n.split("','"):n.indexOf('", "')>-1?n.split('", "'):n.indexOf('","')>-1?n.split('","'):[n]):n=[],n=n.map(function(t){return s(t)}),"function"==typeof h.callScope[i])try{h.callScope[i].apply(t.element,n)}catch(l){try{h.callScope[i].apply(null,n)}catch(l){}}}function s(t){return t+="",'"'==t[0]&&(t=t.substr(1)),"'"==t[0]&&(t=t.substr(1)),'"'==t[t.length-1]&&(t=t.substr(0,t.length-1)),"'"==t[t.length-1]&&(t=t.substr(0,t.length-1)),t}var o=function(t,e){this.element=e,this.defaultOptions=t,this.showCallback=null,this.hideCallback=null,this.visibleClass="visible",this.hiddenClass="invisible",this.addWidth=!1,this.addHeight=!1,this.once=!1;var n=0,i=0;this.left=function(t){return function(){return t.element.getBoundingClientRect().left}}(this),this.top=function(t){return function(){return t.element.getBoundingClientRect().top}}(this),this.xOffset=function(t){return function(e){var i=n;return t.addWidth&&!e?i+=t.width():e&&!t.addWidth&&(i-=t.width()),i}}(this),this.yOffset=function(t){return function(e){var n=i;return t.addHeight&&!e?n+=t.height():e&&!t.addHeight&&(n-=t.height()),n}}(this),this.width=function(t){return function(){return t.element.offsetWidth}}(this),this.height=function(t){return function(){return t.element.offsetHeight}}(this),this.reset=function(t){return function(){t.removeClass(t.visibleClass),t.removeClass(t.hiddenClass)}}(this),this.addClass=function(t){var e=function(e,n){t.element.classList.contains(e)||(t.element.classList.add(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),l=t.element.className;i.test(l)||(t.element.className+=" "+e,"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.removeClass=function(t){var e=function(e,n){t.element.classList.contains(e)&&(t.element.classList.remove(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),l=t.element.className;i.test(l)&&(t.element.className=l.replace(i,"$1").trim(),"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.init=function(t){return function(){var e=t.defaultOptions,l=t.element.getAttribute("data-scroll");e&&(e.toggle&&e.toggle.visible&&(t.visibleClass=e.toggle.visible),e.toggle&&e.toggle.hidden&&(t.hiddenClass=e.toggle.hidden),e.showCallback&&(t.showCallback=e.showCallback),e.hideCallback&&(t.hideCallback=e.hideCallback),e.centerHorizontal===!0&&(n=t.element.offsetWidth/2),e.centerVertical===!0&&(i=t.element.offsetHeight/2),e.offset&&e.offset.x&&(n+=e.offset.x),e.offset&&e.offset.y&&(i+=e.offset.y),e.addWidth&&(t.addWidth=e.addWidth),e.addHeight&&(t.addHeight=e.addHeight),e.once&&(t.once=e.once));var s=l.indexOf("addWidth")>-1,o=l.indexOf("addHeight")>-1,r=l.indexOf("once")>-1;t.addWidth===!1&&s===!0&&(t.addWidth=s),t.addHeight===!1&&o===!0&&(t.addHeight=o),t.once===!1&&r===!0&&(t.once=r),t.showCallback=t.element.hasAttribute("data-scroll-showCallback")?t.element.getAttribute("data-scroll-showCallback"):t.showCallback,t.hideCallback=t.element.hasAttribute("data-scroll-hideCallback")?t.element.getAttribute("data-scroll-hideCallback"):t.hideCallback;var c=l.split("toggle(");if(c.length>1){var a=c[1].split(")")[0].split(",");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),t.visibleClass=a[0].trim().replace(".",""),t.hiddenClass=a[1].trim().replace(".","")}l.indexOf("centerHorizontal")>-1&&(n=t.element.offsetWidth/2),l.indexOf("centerVertical")>-1&&(i=t.element.offsetHeight/2);var d=l.split("offset(");if(d.length>1){var u=d[1].split(")")[0].split(",");n+=parseInt(u[0].replace("px","")),i+=parseInt(u[1].replace("px",""))}return t}}(this)};this.scrollElement=window,this.bindElement=document.body,this.callScope=window;var r=[],c=[],a={left:-1,top:-1},d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},u=!1,f=function(t){return function(e,n,i){return void 0!=n&&null!=n?t.bindElement=n:t.bindElement=document.body,void 0!=i&&null!=i?t.scrollElement=i:t.scrollElement=window,t.bind(t.bindElement.querySelectorAll("[data-scroll]")),t}}(this);this.bind=function(e){return function(n){n instanceof HTMLElement&&(n=[n]);var l=[].slice.call(n);return l=l.map(function(e){var n=new o(t,e);return n.init()}),r=r.concat(l),r.length>0&&0==u?(u=!0,i()):u=!1,e}}(this),this.triggerFor=function(){return function(t){var e=null;return r.each(function(n){n.element==t&&(e=n)}),e}}(this),this.destroy=function(t){return function(e){return r.each(function(t,n){t.element==e&&r.splice(n,1)}),t}}(this),this.destroyAll=function(t){return function(){return r=[],t}}(this),this.reset=function(t){return function(e){var n=t.triggerFor(e);if(null!=n){n.reset();var i=r.indexOf(n);i>-1&&r.splice(i,1)}return t}}(this),this.resetAll=function(t){return function(){return r.each(function(t){t.reset()}),r=[],t}}(this),this.attach=function(t){return function(e){return c.push(e),u||(u=!0,i()),t}}(this),this.detach=function(t){return function(e){var n=c.indexOf(e);return n>-1&&c.splice(n,1),t}}(this);var h=this;return this.scrollDidChange=function(t){return function(){var e=t.scrollElement.innerWidth||t.scrollElement.offsetWidth,n=t.scrollElement.innerHeight||t.scrollElement.offsetHeight,i=t.bindElement.scrollTop?t.bindElement.scrollTop:document.documentElement.scrollTop,s=t.bindElement.scrollLeft?t.bindElement.scrollLeft:document.documentElement.scrollLeft,o=[];r.each(function(t){var r=t.left(),c=t.top();a.left>s?r-=t.xOffset(!0):a.left<s&&(r+=t.xOffset(!1)),a.top>i?c-=t.yOffset(!0):a.top<i&&(c+=t.yOffset(!1)),e>r&&r>=0&&n>c&&c>=0?(t.addClass(t.visibleClass,function(){t.showCallback&&l(t,t.showCallback)}),t.removeClass(t.hiddenClass),t.once&&o.push(t)):(t.addClass(t.hiddenClass),t.removeClass(t.visibleClass,function(){t.hideCallback&&l(t,t.hideCallback)}))}),c.each(function(l){l.call(t,s,i,e,n)}),o.each(function(t){var e=r.indexOf(t);e>-1&&r.splice(e,1)}),a.left=s,a.top=i}}(this),Array.prototype.each=function(t){for(var e=this.length,n=0;e>n;n++){var i=this[n];i&&t(i,n)}},f(t,e,n)}});

;
// Generated by CoffeeScript 1.9.2

/**
@license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */

(function() {
  var $, win;

  $ = this.jQuery || window.jQuery;

  win = $(window);

  $.fn.stick_in_parent = function(opts) {
    var doc, elm, enable_bottoming, fn, i, inner_scrolling, len, manual_spacer, offset_top, parent_selector, recalc_every, sticky_class;
    if (opts == null) {
      opts = {};
    }
    sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, recalc_every = opts.recalc_every, parent_selector = opts.parent, offset_top = opts.offset_top, manual_spacer = opts.spacer, enable_bottoming = opts.bottoming;
    if (offset_top == null) {
      offset_top = 0;
    }
    if (parent_selector == null) {
      parent_selector = void 0;
    }
    if (inner_scrolling == null) {
      inner_scrolling = true;
    }
    if (sticky_class == null) {
      sticky_class = "is_stuck";
    }
    doc = $(document);
    if (enable_bottoming == null) {
      enable_bottoming = true;
    }
    fn = function(elm, padding_bottom, parent_top, parent_height, top, height, el_float, detached) {
      var bottomed, detach, fixed, last_pos, last_scroll_height, offset, parent, recalc, recalc_and_tick, recalc_counter, spacer, tick;
      if (elm.data("sticky_kit")) {
        return;
      }
      elm.data("sticky_kit", true);
      last_scroll_height = doc.height();
      parent = elm.parent();
      if (parent_selector != null) {
        parent = parent.closest(parent_selector);
      }
      if (!parent.length) {
        throw "failed to find stick parent";
      }
      fixed = false;
      bottomed = false;
      spacer = manual_spacer != null ? manual_spacer && elm.closest(manual_spacer) : $("<div />");
      if (spacer) {
        spacer.css('position', elm.css('position'));
      }
      recalc = function() {
        var border_top, padding_top, restore;
        if (detached) {
          return;
        }
        last_scroll_height = doc.height();
        border_top = parseInt(parent.css("border-top-width"), 10);
        padding_top = parseInt(parent.css("padding-top"), 10);
        padding_bottom = parseInt(parent.css("padding-bottom"), 10);
        parent_top = parent.offset().top + border_top + padding_top;
        parent_height = parent.height();
        if (fixed) {
          fixed = false;
          bottomed = false;
          if (manual_spacer == null) {
            elm.insertAfter(spacer);
            spacer.detach();
          }
          elm.css({
            position: "",
            top: "",
            width: "",
            bottom: ""
          }).removeClass(sticky_class);
          restore = true;
        }
        top = elm.offset().top - (parseInt(elm.css("margin-top"), 10) || 0) - offset_top;
        height = elm.outerHeight(true);
        el_float = elm.css("float");
        if (spacer) {
          spacer.css({
            width: elm.outerWidth(true),
            height: height,
            display: elm.css("display"),
            "vertical-align": elm.css("vertical-align"),
            "float": el_float
          });
        }
        if (restore) {
          return tick();
        }
      };
      recalc();
      if (height === parent_height) {
        return;
      }
      last_pos = void 0;
      offset = offset_top;
      recalc_counter = recalc_every;
      tick = function() {
        var css, delta, recalced, scroll, will_bottom, win_height;
        if (detached) {
          return;
        }
        recalced = false;
        if (recalc_counter != null) {
          recalc_counter -= 1;
          if (recalc_counter <= 0) {
            recalc_counter = recalc_every;
            recalc();
            recalced = true;
          }
        }
        if (!recalced && doc.height() !== last_scroll_height) {
          recalc();
          recalced = true;
        }
        scroll = win.scrollTop();
        if (last_pos != null) {
          delta = scroll - last_pos;
        }
        last_pos = scroll;
        if (fixed) {
          if (enable_bottoming) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
            if (bottomed && !will_bottom) {
              bottomed = false;
              elm.css({
                position: "fixed",
                bottom: "",
                top: offset
              }).trigger("sticky_kit:unbottom");
            }
          }
          if (scroll < top) {
            fixed = false;
            offset = offset_top;
            if (manual_spacer == null) {
              if (el_float === "left" || el_float === "right") {
                elm.insertAfter(spacer);
              }
              spacer.detach();
            }
            css = {
              position: "",
              width: "",
              top: ""
            };
            elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
          }
          if (inner_scrolling) {
            win_height = win.height();
            if (height + offset_top > win_height) {
              if (!bottomed) {
                offset -= delta;
                offset = Math.max(win_height - height, offset);
                offset = Math.min(offset_top, offset);
                if (fixed) {
                  elm.css({
                    top: offset + "px"
                  });
                }
              }
            }
          }
        } else {
          if (scroll > top) {
            fixed = true;
            css = {
              position: "fixed",
              top: offset
            };
            css.width = elm.css("box-sizing") === "border-box" ? elm.outerWidth() + "px" : elm.width() + "px";
            elm.css(css).addClass(sticky_class);
            if (manual_spacer == null) {
              elm.after(spacer);
              if (el_float === "left" || el_float === "right") {
                spacer.append(elm);
              }
            }
            elm.trigger("sticky_kit:stick");
          }
        }
        if (fixed && enable_bottoming) {
          if (will_bottom == null) {
            will_bottom = scroll + height + offset > parent_height + parent_top;
          }
          if (!bottomed && will_bottom) {
            bottomed = true;
            if (parent.css("position") === "static") {
              parent.css({
                position: "relative"
              });
            }
            return elm.css({
              position: "absolute",
              bottom: padding_bottom,
              top: "auto"
            }).trigger("sticky_kit:bottom");
          }
        }
      };
      recalc_and_tick = function() {
        recalc();
        return tick();
      };
      detach = function() {
        detached = true;
        win.off("touchmove", tick);
        win.off("scroll", tick);
        win.off("resize", recalc_and_tick);
        $(document.body).off("sticky_kit:recalc", recalc_and_tick);
        elm.off("sticky_kit:detach", detach);
        elm.removeData("sticky_kit");
        elm.css({
          position: "",
          bottom: "",
          top: "",
          width: ""
        });
        parent.position("position", "");
        if (fixed) {
          if (manual_spacer == null) {
            if (el_float === "left" || el_float === "right") {
              elm.insertAfter(spacer);
            }
            spacer.remove();
          }
          return elm.removeClass(sticky_class);
        }
      };
      win.on("touchmove", tick);
      win.on("scroll", tick);
      win.on("resize", recalc_and_tick);
      $(document.body).on("sticky_kit:recalc", recalc_and_tick);
      elm.on("sticky_kit:detach", detach);
      return setTimeout(tick, 0);
    };
    for (i = 0, len = this.length; i < len; i++) {
      elm = this[i];
      fn($(elm));
    }
    return this;
  };

}).call(this);

;
$(function () {

  // Hamburger menu
  $('.hbg').click(function() {
    $('body').toggleClass('menu-open');
  });

  // Language switcher
  $('.lang-switcher > a').click(function (e) {
    e.preventDefault();
    $('.lang-menu').toggle();
    $('.lang-switcher').toggleClass('active');
  });

  // FAQ toggles
  function storeAnswerHeights() {
    $('.faq-a').css({
      'height': 'auto'
    }).each(function (i) {
      $(this).attr('data-h', $(this).height());
    });

    $('.faq-q').not('.active').next('.faq-a').css('height', 0).removeClass('active');
  }

  storeAnswerHeights();

  $(window).on("debouncedresize", function (event) {
    storeAnswerHeights();
  });

  $('.faq-q').click(function() {
    var $q = $(this);
    var $a = $q.next();
    if ($q.hasClass('active')) {
      $a.animate({
        height: 0
      });
      $q.removeClass('active');
    } else {
      console.log($a.attr('data-h'));
      $a.animate({
        height: $a.attr('data-h') + "px"
      });
      $q.addClass('active');
    }
    // $(this).toggleClass('active').siblings('.faq-q').removeClass('active');
  });

  // Closer look carousel
  var closerLookCarousel = new Swiper('.carousel', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    watchOverflow: true,
    mousewheel: {
      forceToAxis: true,
      invert: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      812: {
        spaceBetween: 60
      },
      992: {
        spaceBetween: 90
      }
    }
  });

});

$.fn.increment = function (options) {
  var $this = $(this);
  var target = options.target;
  var coef = target / 50;
  var speed = options.speed;
  var value = 0;
  var roll = setInterval(function () {
    value = value + coef;
    $this.html(value.toLocaleString());
    if (value == target) {
      clearInterval(roll);
    }
  }, speed);
};

document.addEventListener('DOMContentLoaded', function () {
  var scope = {};
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'scroll-visible',
      hidden: 'scroll-hidden'
    },
    addHeight: false,
    centerVertical: false,
    once: false,
  }, document.body, window);

  trigger.callScope = scope;

  scope.heroOut = function () {
    // pause hero animation
  };

  scope.heroIn = function () {
    // play hero animation
  };


  $("#TableOfContents").stick_in_parent({
    offset_top: 160
  });

  $("#TableOfContents").localScroll({
    duration: 500,
    offset: {
      top: -160
    }
  });

});