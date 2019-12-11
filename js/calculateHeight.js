$(document).ready(function() {
    if ($(window).width() > 768) {
        var height = $('.service-intro__desc').height();
    $('.service-intro__img').css('height', height);
    }  
});

//слайдер
var serviceSlider = $("#serviceSlider");
serviceSlider.lightSlider({
  item: 3,
  speed: 600,
  pager: false,
  responsive : [
    {
      breakpoint: 481,
      settings: {
        item: 1,
        pager: true,    
      }
    }
  ]
}); 
