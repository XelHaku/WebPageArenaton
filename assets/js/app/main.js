(function ($) {
	"use strict";


/*==============================
    Nested jQuery Active List
--------------------------------
    01. Preloader
    02. Mobile Menu
    03. Data Background
    04. Data Color
    05. Sticky Menu
    06. Scroll to Top
    07. Scroll Up
    08. Search Active
    09. Click Sound Active
    10. OffCanvas Active
    11. Gallery Active
    12. Project Active
    13. Third Slider Active
    14. Trending Active
    15. Streamers Active
    16. Brand Active
    17. Intersection Observer
    18. Brand effect
    19. Button Icon Draw
    20. parallaxMouse Active
    21. Odometer Active
    22. Magnific Popup
    23. Jarallax Active
    24. Countdown Active
    25. Parallax Active
    26. Slider Range Active
    27. Cart Active
    28. Click to Active
    29. servicesTab Active
    30. FaqTab Active
    31. SplitText Active
    32. GSAP Active
    33. Wow Active

================================*/



/*==========================================
	=           Preloader          =
============================================*/
function preloader() {
	$('.tg-preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
    mainSlider();
	wowAnimation();
});


/*===========================================
	=           Mobile Menu          =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
	$('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
	$('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}


/*===========================================
     =          Data Background        =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/*===========================================
	=           Data Color             =
=============================================*/
$("[data-bg-color]").each(function () {
	$(this).css("background-color", $(this).attr("data-bg-color"));
});


/*===========================================
	   =         Sticky Menu     =
=============================================*/
function stickyHeader() {

    var $window = $(window);
    var lastScrollTop = 0;
    var $headerID = $('#sticky-header');
    var headerHeight = $headerID.outerHeight() + 30;

    $window.scroll(function () {
        var windowTop = $window.scrollTop();

        if (windowTop >= headerHeight) {
            $headerID.addClass('tg-sticky-menu');
        } else {
            $headerID.removeClass('tg-sticky-menu');
            $headerID.removeClass('sticky-menu__show');
        }

        if ($headerID.hasClass('tg-sticky-menu')) {
            if (windowTop < lastScrollTop) {
                $headerID.addClass('sticky-menu__show');
            } else {
                $headerID.removeClass('sticky-menu__show');
            }
        }

        lastScrollTop = windowTop;
    });
};
stickyHeader();


/*===========================================
	=          Scroll to Top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$('.scroll-to-target').removeClass('open');

	} else {
		$('.scroll-to-target').addClass('open');
	}
});


/*===========================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 0);

  });
}

/*===========================================
	=            Search Active            =
=============================================*/
if($('.tgmenu__action .search').length) {
    $('.tgmenu__action .search').on('click', function() {
        $('body').addClass('search__active');
        return false
    });
    $('.search__close').on('click', function() {
        $('body').removeClass('search__active');
    });
}


/*===========================================
	=            OffCanvas Active     =
=============================================*/
$('.side-toggle-icon').on('click', function () {
	$('body').addClass('offCanvas__menu-visible');
});
$('.offCanvas__overlay, .offCanvas__toggle').on('click', function () {
	$('body').removeClass('offCanvas__menu-visible');
});


/*=============================================
	=        Third Slider Active		      =
=============================================*/
function mainSlider() {
	$('.slider-active').slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            },
		]
	})
	.slickAnimation();
}


/*=============================================
	=        Intersection Observer         =
=============================================*/
if (!!window.IntersectionObserver) {
let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	if (entry.isIntersecting) {
		entry.target.classList.add("active-footer");
		//entry.target.src = entry.target.dataset.src;
		observer.unobserve(entry.target);
	}});
}, {
	rootMargin: "0px 0px -100px 0px"
});
    document.querySelectorAll('.has-footer-animation').forEach(block => {
        observer.observe(block)
    });
} else {
    document.querySelectorAll('.has-footer-animation').forEach(block => {
        block.classList.remove('has-footer-animation')
    });
}


/*==================================
          Button Icon Draw
====================================*/
var $svgIconBox = $('.tg-svg');
$svgIconBox.each(function() {
    var $this = $(this),
        $svgIcon = $this.find('.svg-icon'),
        $id = $svgIcon.attr('id'),
        $icon = $svgIcon.data('svg-icon');
    var $vivus = new Vivus($id, { duration: 180, file: $icon });
    $this.on('mouseenter', function () {
        $vivus.reset().play();
    });
});



/*=============================================
	=    		Magnific Popup		      =
=============================================*/
/*
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	},
    zoom: {
        enabled: false,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
});
*/
/* magnificPopup video view */
/*
$('.popup-video').magnificPopup({
	type: 'iframe'
});
*/

/*=============================================
	=          Jarallax Active         =
=============================================*/
$('.tg-jarallax').jarallax({
    speed: 0.2,
});



/*=============================================
	=          Parallax Active         =
=============================================*/
(function () {
  var parallax = $('.tg-parallax');

  if (parallax.length) {
    parallax.each(function () {
      var _this = $(this),
        scale = _this.data('scale'),
        orientation = _this.data('orientation');

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        delay: 1,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    });
  }
})();


/*===========================================
    =          Click to Active        =
=============================================*/
$('.shop__details-model li').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*===========================================
	=        servicesTab Active         =
=============================================*/
$('.services__wrapper .services__item').on('mouseover', function(){
    var li = $(this),
    ul = li.parent(),
    wrap = li.closest('.e-con-inner'),
    tab_content = $('.services__images', wrap),
    current_index = li.index();
    ul.find('.services__item').removeClass('active');
    li.addClass('active');
    tab_content.find( ".services__images-item" ).removeClass('active').eq( current_index ).addClass('active');

}).on('mouseout', function(){
    var li = $(this);
    var li = $(this),
    ul = li.parent(),
    wrap = li.closest('.e-con-inner'),
    tab_content = $('.services__images', wrap),
    current_index = li.index();
    if(ul.find('.active').length > 1){
        li.removeClass('active');
    }
    if(tab_content.find('.tab-pan.active').length > 1){
        tab_content.find( ".services__images-item" ).eq( current_index ).removeClass('active');
    }
});


/*===========================================
	=        FaqTab Active         =
=============================================*/
$(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/genix-faq.default", accordionActive
    );
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/genix-image.default", accordionActive
    );
});
function accordionActive() {
    $('.faq__wrapper .accordion-item').on('click', function(){
        var li = $(this),
        ul = li.parent(),
        wrap = li.closest('.e-con-inner'),
        tab_content = $('.services__images', wrap),
        current_index = li.index();
        ul.find('.services__item').removeClass('active');
        li.addClass('active');
        tab_content.find( ".services__images-item" ).removeClass('active').eq( current_index ).addClass('active');

    }).on('mouseout', function(){
        var li = $(this);
        var li = $(this),
        ul = li.parent(),
        wrap = li.closest('.e-con-inner'),
        tab_content = $('.services__images', wrap),
        current_index = li.index();
        if(ul.find('.active').length > 1){
            li.removeClass('active');
        }
        if(tab_content.find('.tab-pan.active').length > 1){
            tab_content.find( ".services__images-item" ).eq( current_index ).removeClass('active');
        }
    });
}


/*===========================================
	=          SplitText Active         =
=============================================*/
$(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/tg-heading.default", splitText
    );
    elementorFrontend.hooks.addAction(
        "frontend/element_ready/gallery.default", splitText
    );
});
function splitText() {
    $(".tg__animate-text").each(function () {
        var a = $(this),
            d = a.text().split(""),
            c = a.data("wait");
        c || (c = 0);
        var b = a.data("speed");
        b || (b = 4),
        (b /= 100),
        a.html("<em>321...</em>").addClass("ready"),
        a.waypoint({
            handler: function () {
                a.hasClass("stop") ||
                (a.addClass("stop"),
                setTimeout(function () {
                    a.text(""),
                        $.each(d, function (d, e) {
                            var c = document.createElement("span");
                            (c.textContent = e), (c.style.animationDelay = d * b + "s"), a.append(c);
                        });
                }, c));
            },
            offset: "90%",
        });
    });
};

/*===========================================
	=         Isotope Active     =
=============================================*/
$('.shop-grid-activee').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.shop-grid-activee').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
		}
	});
});

/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);