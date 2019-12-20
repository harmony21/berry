$(document).ready(function() {
  if ($('div').is('.first-screen')) {
    $('.first-screen').fadeIn(); //появление первых экранов
    $('.first-screen').css('display', 'flex');
    $("body").css("overflow", "hidden"); //отключение прокрутки на ПК
    $('body').bind('touchmove', function(e){e.preventDefault()}) //отключение прокрутки на мобильных устройствах

    //скрытие первых экранов по клику на экран и появление входа
    $('.first-screen').click(function(e) {
      $(this).fadeOut();
      $("body").css("overflow", "visible");
      $('body').unbind('touchmove');
      $('.intro').fadeIn();
      $('.intro').css('display', 'flex');
    });
  }


//после регистрации пользователя
    // $('.intro--registration').fadeOut();
    // $('.inside-page--registration').fadeIn();

  $('.btn-without-login').click(function(e) {
    $('.intro').fadeOut();
    $('.shop__bonus').css('display', 'none');
    $('.main-page').fadeIn();
    var slider = $("#lightSlider2");
      slider.lightSlider({
      item: 1,
      speed: 600,
      auto: true,
    }); 
  });

  $('.input-wrap__item').click(function(e) {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).find('input').attr('checked','checked');
      $(this).siblings().removeClass('active');
      $(this).siblings().find('input').attr('checked', false);
    }
    
  });

  //раскрытие информации о магазине
  $('.shop__discount').click(function(e) {
    var arrow = $(this).next('.shop__arrow');
    arrow.toggleClass('active');
    arrow.closest('.shop__wrap').next('.shop__desc').slideToggle();
  });

  $('.shop__arrow').click(function(e) {
    $(this).toggleClass('active');
    $(this).closest('.shop__wrap').next('.shop__desc').slideToggle();
  });

  //раскрытие информации о рекомендациях
  $('.shop__arrow--bonus').click(function(e) {
    $(this).toggleClass('active');
    $(this).closest('.profile__links').next('.recomendation').slideToggle();
  });

  $("#phone").mask("+7 (9 9 9) 9 9 9 - 9 9 - 9 9");
  
  $('.shop-card__share').fancybox();
  $('.shop-card__buttons').find('.btn').fancybox();
  $('.chat__item.leave-review').fancybox();
});
