// swiper-menu-4
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

jQuery(function ($) {
  //ファイル添付------------------------
  $(".js-contact-file")
    .css({
      position: "absolute",
      opacity: "0",
    })
    .focus(function () {
      $(".js-image-file-select").css({
        borderColor: "#1589ee",
        boxShadow: "0 0 5px #1589ee",
      });
    })
    .blur(function () {
      $("js-image-file-select").css({
        borderColor: "#none",
        boxShadow: "none",
      });
    })
    .change(function () {
      const val = $(this).val();
      const path = val.replace(/\\/g, "/");
      const match = path.lastIndexOf("/");
      $(".js-contact-file-name").text(
        match !== -1 ? val.substring(match + 1) : val
      );
    });
  // --------------------------------------

  //waw初期化-------------------------
  new WOW().init();
  // --------------------------------------

  //ドロワーメニュー----------------
  $(".js-hamburger-toggle").on("click", function () {
    $(".js-hamburger-toggle span").toggleClass("active");

    if ($(".js-hamburger-toggle span").hasClass("active")) {
      $(".js-nav-visible").addClass("active");
    } else {
      $(".js-nav-visible").removeClass("active");
    }
  });
  //リンクをクリックしたらドロワーを消す
  $('a[href^="#"]').on("click", function () {
    if ($(".js-hamburger-toggle span").hasClass("active")) {
      $(".js-nav-visible").removeClass("active");
      $(".js-hamburger-toggle span").removeClass("active");
    } else {
      return;
    }
  });
  // --------------------------------------

  //ページトップへ戻る---------------------
  const topBtn = $(".js-to-top");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // --------------------------------------

  //ページ内リンクスムーススクロール--------
  $('a[href^="#"]').on("click", function () {
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

  // ナビゲーションに現在位置を表示する------------------------------
  const set = 200;
  const boxTop = new Array();
  let current = -1;

  $(".position-now").each(function (i) {
    boxTop[i] = $(this).offset().top;
  });

  function changeBox(secNum) {
    if (secNum != current) {
      current = secNum;

      $(".js-nav-underline li a").removeClass("js-current-underline");

      if (current == 1) {
        $("#tileLink").addClass("js-current-underline");
      } else if (current == 2) {
        $("#newsLink").addClass("js-current-underline");
      } else if (current == 3) {
        $("#priceLink").addClass("js-current-underline");
      } else if (current == 4) {
        $("#accessLink").addClass("js-current-underline");
      } else if (current == 5) {
        $("#contactLink").addClass("js-current-underline");
      } else if (current == 6) {
        $("#qaLink").addClass("js-current-underline");
      }
    }
  }

  $(window).scroll(function () {
    scrollPosition = $(window).scrollTop();
    for (let i = boxTop.length - 1; i >= 0; i--) {
      if ($(window).scrollTop() > boxTop[i] - set) {
        changeBox(i);
        break;
      }
    }
  });

  // アコーディオン---------------------------------------
  $(".js-answer-toggle").on("click", function () {
    var $answer = $(this).parent().find(".q-a__answer");

    if ($(".q-a__answer").hasClass("q-a-open")) {
      $answer.removeClass("q-a-open");
      $answer.slideUp();
      $(this)
        .parent()
        .find(".q-a__question--minus-icon")
        .removeClass("q-a__question--minus-icon")
        .addClass("q-a__question--plus-icon");
    } else {
      $answer.addClass("q-a-open");
      $answer.slideDown();
      $(this)
        .parent()
        .find(".q-a__question--plus-icon")
        .removeClass("q-a__question--plus-icon")
        .addClass("q-a__question--minus-icon");
    }
  });
  // -----------------------------------------------------

  // モーダル---------------------------------------------
  $(".js-modal-show").on("click", function () {
    $(".js-modal").fadeIn();
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
  });

  // ----------------------------------------------------
});
