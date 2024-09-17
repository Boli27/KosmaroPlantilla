(function ($) {

  "use strict";

  var searchPopup = function () {
    // open search box
    $('#header-nav').on('click', '.search-button', function (e) {
      $('.search-popup').toggleClass('is-visible');
    });

    $('#header-nav').on('click', '.btn-close-search', function (e) {
      $('.search-popup').toggleClass('is-visible');
    });

    $(".search-popup-trigger").on("click", function (b) {
      b.preventDefault();
      $(".search-popup").addClass("is-visible"),
        setTimeout(function () {
          $(".search-popup").find("#search-popup").focus()
        }, 350)
    }),
      $(".search-popup").on("click", function (b) {
        ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function (b) {
        "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
  }

  var initProductQty = function () {

    $('.product-qty').each(function () {

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        if (quantity > 0) {
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }

  $(document).ready(function () {

    searchPopup();
    initProductQty();

    var swiper = new Swiper('.main-swiper', {
      navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
      },
      pagination: {
        el: '#billboard .swiper-pagination', // Contenedor para los puntos
        clickable: true, // Permite hacer clic en los puntos para cambiar de diapositiva
      },
      loop: true, // Hace que el slider sea infinito
      autoplay: {
        delay: 20000, // Deslizamiento automático cada 20 segundos
        disableOnInteraction: false,
      },
    });
    

    var swiper = new Swiper(".product-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: "#spooky-products .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      },loop: true, // Hace que el slider sea infinito
      autoplay: {
        delay: 20000, // Deslizamiento automático cada 20 segundos
        disableOnInteraction: false,
      },
    });

    var swiper = new Swiper(".product-videojuegos-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: "#videojuegos-product .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      },loop: true, // Hace que el slider sea infinito
      autoplay: {
        delay: 20000, // Deslizamiento automático cada 20 segundos
        disableOnInteraction: false,
      },
    });

    var swiper = new Swiper(".product-watch-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: "#caricaturas-product .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      },loop: true, // Hace que el slider sea infinito
      autoplay: {
        delay: 20000, // Deslizamiento automático cada 20 segundos
        disableOnInteraction: false,
      },
    });

    var swiper = new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-prev",
        prevEl: ".swiper-arrow-next",
      },
    });

  }); // End of a document ready

})(jQuery);