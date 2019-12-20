$(document).ready(function() {
  var slider1 = $("#lightSlider");
  slider1.lightSlider({
    item: 1,
    speed: 1500,
    mode: 'fade',
    loop: false,
    enableTouch: false,
  }); 

  $('.first-screen').click(function(e) {
    slider1.goToNextSlide();
  });
});
