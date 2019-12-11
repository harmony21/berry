$(document).ready(function() {
  if ($('div').is('.first-screen')) {
    $('.first-screen').fadeIn(); //появление первых экранов
    $('.first-screen').css('display', 'flex');
    $("body").css("overflow", "hidden"); //отключение прокрутки на ПК
    $('body').bind('touchmove', function(e){e.preventDefault()}) //отключение прокрутки на мобильных устройствах

    //скрытие первых экранов по клику на экран и появление входа/регистрации
    $('.first-screen').click(function(e) {
      $(this).fadeOut();
      $("body").css("overflow", "visible");
      $('body').unbind('touchmove');
      $('.intro').fadeIn();
      $('.intro').css('display', 'flex');
    });
  }




  $('.btn-without-login').click(function(e) {
    $('.intro').fadeOut();
    $('.main-page').fadeIn();
    var slider = $("#lightSlider2");
      slider.lightSlider({
      item: 1,
      speed: 600,
      auto: true,
    }); 
  });

  //раскрытие информации о магазине
  $('.shop__arrow').click(function(e) {
    $(this).toggleClass('active');
    $(this).closest('.shop__wrap').next('.shop__desc').slideToggle();
  });
});
