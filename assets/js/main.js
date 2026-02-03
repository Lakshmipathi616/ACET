/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/


(function ($) {
  'use strict';
  let device_width = window.innerWidth;
  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      rtsJs.rtlToggle();
      rtsJs.preloader();
      rtsJs.smoothScroll();
      rtsJs.metismenu();
      rtsJs.sideMenu();
      rtsJs.swiperActivation();
      rtsJs.odoMeter();
      rtsJs.splitText();
      rtsJs.backToTopInit();
      rtsJs.stickyHeader();
      rtsJs.radialProgress();
    },
    rtlToggle: function () {

      $(document).ready(function () {
        // Retrieve the saved direction from localStorage
        const savedDir = localStorage.getItem("pageDirection") || "ltr"; // Default to "ltr"
        $("body").attr("dir", savedDir);

        // Update button visibility based on saved direction
        if (savedDir === "rtl") {
          $(".rtl").removeClass("show");
          $(".ltr").addClass("show");
        } else {
          $(".rtl").addClass("show");
          $(".ltr").removeClass("show");
        }

        // Toggle direction and save state on button click
        $(".rtl-ltr-switcher-btn").on("click", function () {
          const currentDir = $("body").attr("dir");
          const newDir = currentDir === "rtl" ? "ltr" : "rtl";

          // Update body direction
          $("body").attr("dir", newDir);

          // Toggle button visibility
          $(".rtl").toggleClass("show");
          $(".ltr").toggleClass("show");

          // Save the new direction in localStorage
          localStorage.setItem("pageDirection", newDir);
        });
      });

    },
    preloader: function () {
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add("loaded")
      });
    },
    smoothScroll: function (e) {
      $(document).on('click', '.onepage a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
      });
    },

    metismenu: function () {
      $('#mobile-menu-active').metisMenu();
    },

    sideMenu: function () {

      // collups menu side right
      $(document).on('click', '.menu-btn', function () {
        $("#side-bar").addClass("show");
        $("#anywhere-home").addClass("bgshow");
      });
      $(document).on('click', '.close-icon-menu', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '#anywhere-home', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
      $(document).on('click', '.onepage .mainmenu li a', function () {
        $("#side-bar").removeClass("show");
        $("#anywhere-home").removeClass("bgshow");
      });
    },
    swiperActivation: function () {
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiperh1_team", {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          centeredSlides: false,
          speed: 1000,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 2000,
          },
          breakpoints: {
            1500: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 3,

            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-case-studies-5", {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          centeredSlides: false,
          speed: 1000,
          pagination: {
            el: '.swiper-pagination-fraction',
            type: 'fraction',
            formatFractionCurrent: function (number) {
              return '0' + number;
            },
            formatFractionTotal: function (number) {
              return '0' + number;
            }
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          autoplay: {
            delay: 2000,
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 2,

            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".imageSlider", {
          slidesPerView: 3.5,
          spaceBetween: 30,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          // autoplay: {
          //   delay: 3000,
          // },
          breakpoints: {
            1500: {
              slidesPerView: 3.5,
            },
            1240: {
              slidesPerView: 4,
            },
            1199: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 3,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 2,
            }
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".mySwiper-testimonials-10", {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          centeredSlides: false,
          speed: 1000,
          pagination: {
            el: '.swiper-pagination-fractions',
            type: 'fraction',
            formatFractionCurrent: function (number) {
              return '0' + number;
            },
            formatFractionTotal: function (number) {
              return '0' + number;
            }
          },
          navigation: {
            nextEl: ".swiper-button-nexts",
            prevEl: ".swiper-button-prevs",
          },
          autoplay: {
            delay: 2000,
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 1,

            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
      });
    },
    odoMeter: function () {
      $(document).ready(function () {
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
        }

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
          }
        }

        function handleOdometer() {
          $('.odometer').each(function () {
            if (isInViewport(this)) {
              triggerOdometer(this);
            }
          });
        }

        // Check on page load
        handleOdometer();

        // Check on scroll
        $(window).on('scroll', function () {
          handleOdometer();
        });
      });
    },
    splitText: function (e) {
      if ($('.rts-text-anime-style-1').length) {
        let animatedTextElements = document.querySelectorAll('.rts-text-anime-style-1');

        animatedTextElements.forEach((element) => {
          //Reset if needed
          if (element.animation) {
            element.animation.progress(1).kill();
            element.split.revert();
          }

          element.split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });
          gsap.set(element, { perspective: 400 });

          gsap.set(element.split.chars, {
            opacity: 0,
            x: "50",
          });

          element.animation = gsap.to(element.split.chars, {
            scrollTrigger: { trigger: element, start: "top 95%" },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: 0.02,
          });
        });
      }
    },
    backToTopInit: function () {
      $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
        });
        jQuery('.progress-wrap').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        })


      });
    },
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.header--sticky').addClass('sticky')
        } else {
          $('.header--sticky').removeClass('sticky')
        }
      })
    },

    radialProgress: function () {
      function radial_animate() {
        $('svg.radial-progress').each(function (index, value) {

          $(this).find($('circle.bar--animated')).removeAttr('style');
          // Get element in Veiw port
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          if (elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find($('circle.bar--animated')).attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find($('circle.bar--animated')).animate({ 'stroke-dashoffset': strokeDashOffset }, 2800);
          }
        });
      }
      // To check If it is in Viewport 
      var $window = $(window);
      function check_if_in_view() {
        $('.countervalue').each(function () {
          if ($(this).hasClass('start')) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
              $(this).removeClass('start');
              $('.countervalue').text();
              var myNumbers = $(this).text();
              if (myNumbers == Math.floor(myNumbers)) {
                $(this).animate({
                  Counter: $(this).text()
                }, {
                  duration: 2800,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(Math.ceil(now) + '%');
                  }
                });
              } else {
                $(this).animate({
                  Counter: $(this).text()
                }, {
                  duration: 2800,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(now.toFixed(2) + '$');
                  }
                });
              }

              radial_animate();
            }
          }
        });
      }

      $window.on('scroll', check_if_in_view);
      $window.on('load', check_if_in_view);

    },


  }

  rtsJs.m();
})(jQuery, window)
