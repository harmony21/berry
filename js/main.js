$(document).ready(function() {
  if ($('div').is('.first-screen')) {
    $('.first-screen').fadeIn(); //появление первых экранов
    $('.first-screen').css('display', 'flex');
    $("body").css("overflow", "hidden"); //отключение прокрутки на ПК
    $('body').bind('touchmove', function(e){e.preventDefault()}) //отключение прокрутки на мобильных устройствах

    var slideItem = $('.first-screen__slider').find('li:eq(2)');
    $('.first-screen').click(function(e) {
      if (slideItem.hasClass('active')) {
        $(this).fadeOut();
        $("body").css("overflow", "visible");
        $('body').unbind('touchmove');
      }
    });
  }


//после регистрации пользователя
    // $('.intro--registration').fadeOut();
    // $('.inside-page--registration').fadeIn();

  $('.btn-without-login').click(function(e) {
    $('.first-screen').fadeOut();
    $("body").css("overflow", "visible");
    $('body').unbind('touchmove');
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

  //замена иконки микрофона на play
  // $('.message-area__left').find('textarea').click(function(e) {
  //   $('.message-area__send-btn').html("<img src='images/play.png' alt=''>");
  // });

  // Валидация формы при регистрации
  $('#user-date').hover(function() {
    $('#user-date').attr('type', 'date');
  })

  function validate_form () {    
    valid = true;

    if ((($("#man").prop('checked')) == false) && (($("#woman").prop('checked')) == false))
    {
      $('.input-wrap').css('border', '2px solid red;');
      valid = false;
    }

    if ((($("#high").prop('checked')) == false) && (($("#middle").prop('checked')) == false))
    {
      console.log('false');
      $('.select').css({
        'border': '1px solid red',
        'border-radius': '8px'
      });
      valid = false;
    }

    if ((($("#engeener").prop('checked')) == false) && (($("#teacher").prop('checked')) == false))
    {
      console.log('false');
      $('.select1').css({
        'border': '1px solid red',
        'border-radius': '8px'
      });
      valid = false;
    }

    if ((($("#small").prop('checked')) == false) && (($("#teenager").prop('checked')) == false))
    {
      console.log('false');
      $('.select2').css({
        'border': '1px solid red',
        'border-radius': '8px'
      });
      valid = false;
    }
  }

  $('.btn--registration').click(function(e) {
    validate_form();
  });


  $("#phone").mask("+7 (9 9 9) 9 9 9 - 9 9 - 9 9");
  
  $('.shop-card__share').fancybox();
  $('.shop-card__buttons').find('.btn').fancybox();
  $('.chat__item.leave-review').fancybox();

});
