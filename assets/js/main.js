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
      $a.animate({
        height: $a.attr('data-h') + "px"
      });
      $q.addClass('active');
    }
    // $(this).toggleClass('active').siblings('.faq-q').removeClass('active');
  });

  // Closer look carousel
  if ($("body.home").length) {
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/repos/DeFiCh/ain/releases/latest',
      success: function (data) {
        $(".latest-cli").html(data.tag_name);
      }
    });
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://api.github.com/repos/DeFiCh/defi-app/releases/latest',
    //   success: function (data) {
    //     $(".latest-app").html(data.tag_name);
    //   }
    // });
  }

  // Closer look carousel
  if ($(".closer-look").length) {
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
  }

  if ($(".featured-video").length) {

    $('.video-link').each(function () {
      $(this).click(function () {
        player.cueVideoById($(this).data('video'));
      });
    });
  }

  // if ($("#TableOfContents").length) {
  //   $('body').scrollspy({
  //     target: '#TableOfContents',
  //     offset: 154
  //   });

  //   $("#TableOfContents").stick_in_parent({
  //     offset_top: 144
  //   });

  //   $.localScroll({
  //     duration: 500,
  //     offset: {
  //       top: -144
  //     },
  //     hash: true,
  //   });
  // }

});

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
    $('body > header').addClass('sticky');
  };

  scope.heroIn = function () {
    $('body > header').removeClass('sticky');
    console.log("hero in");
  };
});
