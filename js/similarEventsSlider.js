//слайдер мероприятий на странице "Портфолио подробно"
var similarEvents = $("#similarEvents");
similarEvents.lightSlider({
  item: 2,
  speed: 600,
  pager: false,
  responsive : [
    {
      breakpoint: 481,
      settings: {
        item: 1
      }
    }
  ]
}); 
$('.slider-about-arrow--prev').click(function(e) {
    similarEvents.goToPrevSlide();
});
$('.slider-about-arrow--next').click(function(e) {
    similarEvents.goToNextSlide();
});