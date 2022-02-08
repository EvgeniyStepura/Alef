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
    $("head").append( '<link rel="preload stylesheet" href="css/style.css" as="style">' );
  },1000);

  setTimeout(function() {
    $("head").append( '<link rel="preload stylesheet" href="css/fonts.css" as="style">' );
    
    loadJS('js/components/jquery.formstyler.js',selectFunc, document.body);

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

  $('.numb').each(function() {  
	  var asd = $(this);  
	  asd.find('span.minus').click(function() {
	   var data = asd.find('input').val();
	   if(data > 0) {
		asd.find('input').val(parseInt(data) - 1);
	   }
	   return false
	  });  
	  asd.find('span.plus').click(function() {
	   var data = asd.find('input').val();
	   asd.find('input').val(parseInt(data) + 1);
	   return false
	  });	  
  });

  $('.like_link').click(function(){
    $(this).toggleClass('active');

  });

  function selectFunc() {
    if ($('select').length) {
      $('select').styler();
    }
  }


  $("#form").validate({
    rules: {
      email: {
        required: true
      },
    },        
    messages: {
        email: "Введите Ваш email",  
    }, 
  });

  

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
