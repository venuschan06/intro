(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

		
})(jQuery);

/* ==============================================
Smmoth Scroll Navigation
=============================================== */	
function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 30
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

/* ==============================================
Mobile Menu Button
=============================================== */

$('#nav-main a').on('click touchend', function() {
    // if .in class is set on element, the element is visible – you want to hide it
    if ($('#nav-main').hasClass('in')) {
        // collapse toggle will remove the .in class and animate the element closed 
        $('#nav-main').collapse('toggle');
    }
})