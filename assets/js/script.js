$(document).ready(function () {
  $(".login_usr").focus(function () {
    $(".login-label-usr").addClass("active");
    $(".login-label-psw").removeClass("active");
  });

  $(".login_psw").focus(function () {
    $(".login-label-psw").addClass("active");
    $(".login-label-usr").removeClass("active");
  });

  $(".login_usr").focusout(function () {
    $(".login-label-usr").removeClass("active");
  });
  $(".login_psw").focusout(function () {
    $(".login-label-psw").removeClass("active");
  });
});



$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});

//   preloader jquery timer

$(".technologia-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  dot: true,
  responsive: {
    0: {
      items: 1,
      dot: true,
    },
    600: {
      items: 1,
      dot: true,
    },
    1000: {
      items: 1,
      dot: true,
    },
  },
});

