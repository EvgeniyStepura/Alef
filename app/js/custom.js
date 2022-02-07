document.addEventListener('touchmove', handler, {passive: true});
document.addEventListener("touchstart", function() {},false);
var loadJS = function(url, implementationCode, location){
    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
}; 
$(window).on('load',function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
        
	} else{
		$('body').addClass('web');
        
	};  

  setTimeout(function(){
    $(".js-bg").each(function () {
      $(this).css('background-image', 'url(' + $(this).data("preload") + ')');
    });
    $(".js-img").each(function () {
        $(this).attr('src', $(this).data("src"));
    });
    $("head").append( '<link rel="preload stylesheet" href="css/slick.css" as="style">' );
    $("head").append( '<link rel="preload stylesheet" href="css/fancybox.css" as="style">' );
    $("head").append( '<link rel="preload stylesheet" href="css/jquery.scrollbar.css" as="style">' );
    $("head").append( '<link rel="preload stylesheet" href="css/style.css" as="style">' );
  },1000);

  setTimeout(function() {
    $("head").append( '<link rel="preload stylesheet" href="css/fonts.css" as="style">' );
    
    loadJS('js/components/jquery.fancybox.js',fancyboxFunc, document.body);
    loadJS('js/components/jquery.formstyler.js',selectFunc, document.body);
    loadJS('js/components/jquery.validate.min.js',validateInput, document.body);
    loadJS('js/components/nouislider.js',nouiFunc, document.body);
    loadJS('js/components/jquery.scrollbar.min.js',scrollFunc, document.body);

    
  }, 1300);
  
  setTimeout(function(){
    if($('.js-agents').length) {
      $('.js-agents').slick({
        loop:true,
        arrows:true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        responsive: [
        {
          breakpoint: 640,
          settings: {
            arrows:false,
          }
        }],
        prevArrow: '<button class="slick-prev" aria-label="Previous" role="button"><span class="icon-arrow-prev"></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" role="button"><span class="icon-arrow-next"></span></button>',
      });
    }

    if($('.js-reviews').length) {
      $('.js-reviews').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots:false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2 
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
        prevArrow: '<button class="slick-prev" aria-label="Previous" role="button"><span class="icon-arrow-prev"></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" role="button"><span class="icon-arrow-next"></span></button>',
      
      });
    }
    if($('.js-videos').length) {
      $('.js-videos').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots:false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2 
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
        prevArrow: '<button class="slick-prev" aria-label="Previous" role="button"><span class="icon-arrow-prev"></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" role="button"><span class="icon-arrow-next"></span></button>',
      
      });
    }
    if($('.js-tovs').length) {
      $('.js-tovs').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots:false,
        responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3 
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2 
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
        prevArrow: '<button class="slick-prev" aria-label="Previous" role="button"><span class="icon-arrow-prev"></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" role="button"><span class="icon-arrow-next"></span></button>',
      
      });
    }
    if($('.js-welcome').length) {
      var $status = $('.pagingInfo');
      var $slickElement = $('.js-welcome');

      $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.html( '<b>' + i + '</b> / ' + slick.slideCount);
      });

      $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade:true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" role="button"><span class="icon-arrow-prev"></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" role="button"><span class="icon-arrow-next"></span></button>',
      
      });
    }
    
    //
    $('.js-slidertov_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      asNavFor: '.slidertov_nav'
    });

    $('.js-slidertov_nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slidertov_for',
      focusOnSelect: true,
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          }
        }],
      prevArrow: '<button class="slick-prev" aria-label="Previous" role="button"><span class="icon-arrow-prev"></span></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" role="button"><span class="icon-arrow-next"></span></button>',
    });
     
  },1600);
  setTimeout(function(){
    $('body').removeClass('loaded')
     
  },1800);
   
  function fancyboxFunc() {
    if ($('.fancybox').length) {
      $('.fancybox').fancybox({
        closeExisting: true,
        touch: false,
        smallBtn: true,
      });
    }
  }
  function selectFunc() {
    if ($('select').length) {
      $('select').styler();
    }
  }
  function validateInput() {  
    jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
          phone_number = phone_number.replace(/\s+/g, "");
          return this.optional(element) || phone_number.length > 9 && 
          phone_number.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
        }, "Введите Ваш телефон");
    $("#form").validate({
      rules: {
        name: {
          required: true
        },
        tel: {
          required: true,
          phoneUS: true,
          number: true
        },
        comment: {
          required: true,
        }
      },        
      messages: {
          name: "Введите Ваше имя",  
          tel: {
            required: "Введите Ваш телефон",
          },
          comment: "Введите Ваш комментарий", 
      },
      submitHandler: function (form) {
        $('#winok').trigger('click');
      }
    });
  }

  function nouiFunc(){
    if($('#rangeslider').length) {
      var slider = document.getElementById('rangeslider');
      noUiSlider.create(slider, {
          start: [3500,8800],
          connect: true,
          step: 10,
          tooltips: [true, true],
          range: {
              'min': 0,
              'max': 10000
            },
            format: wNumb({
            decimals: 0
          }),
      });
    }
    if($('#sizeslider').length) {
      var slider = document.getElementById('sizeslider');
      noUiSlider.create(slider, {
          start: [30,500],
          connect: true,
          step: 1,
          tooltips: [true, true],
          range: {
              'min': 30,
              'max': 500
            },
            format: wNumb({
            decimals: 0
          }),
      });
    }
    if($('#distslider').length) {
      var slider = document.getElementById('distslider');
      noUiSlider.create(slider, {
          start: [0,5000],
          connect: true,
          step: 100,
          tooltips: [true, true],
          range: {
              'min': 0,
              'max': 5000
            },
            format: wNumb({
            decimals: 0
          }),
      });
    }
  }

  function scrollFunc() {
    $(".rads_scroll").scrollbar();

  }


  	/*compare table*/
	var compLen = ".compare-charact".length;
	//
	if (compLen > 0) {
		$(".compare-top").css("height", "auto");
		var height1 = 0;
		$(".compare-top").each(function () {
			height1 = height1 > $(this).outerHeight() ? height1 : $(this).outerHeight();
		});
		$(".compare-top").each(function () {
			$(this).css("height", height1 + "px");
		});

		$(".compare-charact__item").css("height", "auto");
		for (var i = 1; i < 99; i++) {
			var height2 = 0;
			$(".compare-charact__item:nth-child(" + i + ")").each(function () {
				height2 = height2 > $(this).outerHeight() ? height2 : $(this).outerHeight();
			});
			$(".compare-charact__item:nth-child(" + i + ")").each(function () {
				$(this).css("height", height2 + "px");
			});
		}
		setTimeout(function () {
			$(".compare-charact__item").css("height", "auto");
			for (var i = 1; i < 99; i++) {
				var height2 = 0;
				$(".compare-charact__item:nth-child(" + i + ")").each(function () {
					height2 = height2 > $(this).outerHeight() ? height2 : $(this).outerHeight();
				});
				$(".compare-charact__item:nth-child(" + i + ")").each(function () {
					$(this).css("height", height2 + "px");
				});
			}
		}, 500);
	}
	$(".compare-charact__item").hover(
		function () {
			var id_line = $(this).attr("data-line");
			$(id_line).addClass("hover");
		},
		function () {
			var id_line = $(this).attr("data-line");
			$(id_line).removeClass("hover");
		}
	);
	/*compare table*/
	/*compare table*/


});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$( document ).ready(function() {
     
});

$(function(){
	/* placeholder*/	   
	$('.form-control').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});  
	/* placeholder*/ 

  //
  $(".mobile-button").toggle(function () {
        $(this).addClass('open');
        $('.header_nav').addClass('open');       
        if ($(document).height() > $(window).height()) {
            var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
            $('html').addClass('noscroll').css('top', -scrollTop);
        }      
        return false;
    }, function () {
        $(this).removeClass('open');
        $('.header_nav').removeClass('open');       
        var scrollTop = parseInt($('html').css('top'));
        $('html').removeClass('noscroll');
        $('html,body').scrollTop(-scrollTop);
        return false;
  });

  //
  $('.tabs li a').click(function() {
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide-tab');
    $(this).parent().addClass('active');
    return false;
  });

  //  
  $('.search_opener').on('click',function() {
    $('.form_cols_item-hid').toggleClass('active');
    $(this).toggleClass('active');
    return false;
  });
  
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.goup:hidden').stop(true, true).fadeIn();
    } else {
        $('.goup').stop(true, true).fadeOut();
    } 
  });
  $('.goup').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 700);
  });

});

//

document.addEventListener('DOMContentLoaded', function () {
  
});

var handler = function(){
	  
  var height_footer = $('.footer').height();	
  var height_header = $('.header').height();		

  var viewport_wid = viewport().width;
  var viewport_height = viewport().height;

  $('.js-vh').css({'height': $(window).height()});

  if (viewport_wid <= 991) {
    
  }
  else if (viewport_wid > 991) {
    
  }
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
