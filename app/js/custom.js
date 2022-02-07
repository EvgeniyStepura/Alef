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
    $("head").append( '<link rel="preload stylesheet" href="css/style.css" as="style">' );
  },1000);

  setTimeout(function() {
    $("head").append( '<link rel="preload stylesheet" href="css/fonts.css" as="style">' );
    
    loadJS('js/components/jquery.fancybox.js',fancyboxFunc, document.body);
    loadJS('js/components/jquery.formstyler.js',selectFunc, document.body);
    loadJS('js/components/jquery.validate.min.js',validateInput, document.body);


    
  }, 1300);
  
    

  setTimeout(function(){
    $('body').removeClass('loaded')
     
  },1800);
  $('.card_slider_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.card_slider_prev'
  });
  $('.card_slider_prev').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card_slider_big',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

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
	$('form').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});  
	/* placeholder*/ 
  



  
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
