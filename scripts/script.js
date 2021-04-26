$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#totop').fadeIn();
 
} else {
 
$('#totop').fadeOut();
 
}
 
});
 
$('#totop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});

/*button like*/
$('.card__body-icon-like').on('click', function(){
	$(this).toggleClass('card__body-icon-like--active').siblings().removeClass('card__body-icon-like--active')
});
 
});