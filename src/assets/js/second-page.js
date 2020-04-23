var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 28,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 18,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
  },
});

jQuery(function ($) {

    // アコーディオン2----------------------------
  $(".js-about-toggle-1").on('click', function () {
    const $aboutAnswer = $(this).parent().find(".about__answer");

    if ($(".about__answer").hasClass("about-open-1")) {
      $aboutAnswer.removeClass("about-open-1");
      $aboutAnswer.slideUp();
      $(this)
        .removeClass("about__list-title-upArrow")
        .addClass("about__list-title");
    } else {
      $aboutAnswer.addClass("about-open-1");
      $aboutAnswer.slideDown();
      $(this)
        .removeClass("about__list-title")
        .addClass("about__list-title-upArrow");
    }
  });

  $(".js-about-toggle-2").on('click', function () {
    const $aboutAnswer = $(this).parent().find(".about__answer");

    if ($(".about__answer").hasClass("about-open-2")) {
      $aboutAnswer.removeClass("about-open-2");
      $aboutAnswer.slideUp();
      $(this)
        .removeClass("about__list-title-upArrow")
        .addClass("about__list-title");
    } else {
      $aboutAnswer.addClass("about-open-2");
      $aboutAnswer.slideDown();
      $(this)
        .removeClass("about__list-title")
        .addClass("about__list-title-upArrow");
    }
  });
  // ------------------------------------------------

  const topBtn = $(".js-to-top");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.on('click', function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
  // --------------------------------------

  //SP用ヘッダーナビドロワーの動き------------------------
  $('.js-header-toggle').on('click', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.js-header-nav, .js-header-toggle, .js-header').addClass('active');
    } else {
      $('.js-header-nav, .js-header-toggle, .js-header').removeClass('active');
    }
  });js-
  // -----------------------------------------------------

  //ページ内リンクスムーススクロール--------
  $('a[href^="#"]').on('click', function () {
    if (matchMedia("(max-width: 767px").matches) {
      headerHight = 60; //SP時のヘッダhight
    } else {
      headerHight = 100; //PC時のヘッダhight
    }
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - headerHight; //ヘッダ―の高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  // ---------------------------------------
  
});
