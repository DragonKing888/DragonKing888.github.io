$(document).ready(function(){	
	"use strict";

	//jQuery Counter
    $('.counter').counterUp({
        time : 3000
    });

     /*====  preloader js =====*/
     setTimeout(function() {
      $('body').addClass('loaded');
  }, 2500);

  /*====== countdown ========*/
	$('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<ul><li><span class="cdown days"><span class="time-count">%-D</span><p class="day-css">Days</p></span></li><li><span class="cdown hour"><span class="time-count">%-H</span> <p class="day-css">Hour</p></span><l/i><li><span class="cdown minutes"><span class="time-count">%M</span> <p class="day-css">Min</p></span></li><li> <span class="cdown second"><span class="time-count">%S</span> <p class="day-css">Sec</p></span></li></ul>'));
        });
	});

	 // Action Slider 
	 $('.action-slider').owlCarousel({
        loop:false,
            margin:30,
            nav:false,
            dots:true,
            autoplay:false, 
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
            }
        }
    })

     // Seller Slider 
	 $('.seller-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:false, 
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

  // homepagetwo-slider  
  $('.homepagetwo-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:false, 
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })  

    // TopCreator-slider  
  $('.topcreator-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:false, 
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    // Homepagethree-slider  
    
  $('.homepagethree-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:false, 
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $('.top-seller-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:false, 
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })
    
    //======== video popup==========
    $('.video-main-area a').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              '</div>',
          patterns: {
              youtube: {
                  index: 'youtube.com/',
                  id: 'v=',
                  src: 'http://www.youtube.com/embed/%id%?autoplay=1'
              }
          },
          srcAction: 'iframe_src'
      }
  });

});

