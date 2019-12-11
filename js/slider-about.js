//слайдер портфолио на странице "О компании"
var sliderAbout = $("#sliderAbout");
sliderAbout.lightSlider({
  item: 4,
  speed: 600,
  pager: false,
  responsive : [
    {
      breakpoint: 769,
      settings: {
        item: 3,
        pager: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        item: 1,
        pager: true,
      }
    }
  ]
}); 
$('.slider-about-arrow--prev').click(function(e) {
    sliderAbout.goToPrevSlide();
});
$('.slider-about-arrow--next').click(function(e) {
    sliderAbout.goToNextSlide();
});

//слайдер команды для мобильных
var teamSlider = $("#teamSlider");
teamSlider.lightSlider({
  item: 3,
  speed: 600,
  pager: false,
  responsive : [
    {
      breakpoint: 769,
      settings: {
        pager: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        item: 2,
        pager: true,    
      }
    }
  ]
}); 

