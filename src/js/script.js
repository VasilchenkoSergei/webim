$(document).ready(function(){

$('.promo__burger--straight').on('click', function() {
  $('.main-nav').toggleClass('.active');
  $('.main-nav').toggle();
});


// !!!!!!!!!!!!!!!!VISITED LINKS!!!!!!!!!!!!

$('.main-nav__link').on('click', function() {
  $(this).css({'color':'blue'});
});

$('.lightinst-link').on('click', function() {
  $(this).children('.lightinst-link__text').css({'color':'blue'});
});

$('.htmlinst__item').on('click', function() {
  $(this).children('.htmlinst__link').css({'color':'blue'});
});

$('.appinst__item').on('click', function() {
  $(this).children('.appinst__link').css({'color':'blue'});
});


});
