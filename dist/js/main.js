function openBurgerMenu() {
    const burgerMenuOverlay = document.querySelector('.nav-bar_menu');
    const burgerIcon = document.querySelector('.menu-btn_burger')
    burgerMenuOverlay.classList.toggle('hidden-menu');
    burgerIcon.classList.toggle('open');
}


/*-----------------------------TESTIMONIALS SLIDER-------------------------------*/


$(function () {
  var cdSlider = $(".testimonials"),
    wrapper = cdSlider.children("ul"),
    card = wrapper.find("li"),
    animationTime = 600; // Animation duration on IE9

  initSlider();

  function initSlider() {
    var sliderWidth = cdSlider.outerWidth(),
      cardWidth = card.eq(0).outerWidth(),
      marginLeftFirstCard = sliderWidth / 2 - cardWidth / 2, // Center first card
      marginLeft = marginLeftFirstCard - (cardWidth * 1) / 7;

    card.css("margin-left", marginLeft + "px");
    card.eq(0).css("margin-left", marginLeftFirstCard + "px");

    var wrapperWidth =
      card.length * cardWidth +
      (card.length - 1) * marginLeft +
      marginLeftFirstCard;

    if (card.length > 1) {
      wrapper.css("width", wrapperWidth + "px");
    }

    var cardCurrentIndex = cdSlider.find("li.current_slide").index(),
      translate = cardCurrentIndex * (cardWidth + marginLeft) + "px";

    move(translate);
  }

  card.on("click", function () {
    var cardWidth = card.eq(0).outerWidth(),
      sliderWidth = cdSlider.outerWidth(),
      marginLeft = sliderWidth / 2 - cardWidth / 2 - (cardWidth * 1) / 7,
      translate = $(this).index() * (cardWidth + marginLeft) + "px";

    move(translate);

    $(this).addClass("current_slide").siblings().removeClass("current_slide");
  });

  function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    if (Idx > 0) {
      var version = parseInt(
        sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx))
      );
      if (version == 9) {
        $("html").addClass("ie9");
      }
    }
  }

  GetIEVersion();

  function move(translate) {
    // IE 9
    if ($(".ie9").length > 0) {
      wrapper.animate(
        {
          "margin-left": "-" + translate
        },
        animationTime
      );
    } else {
      wrapper.css({
        "-webkit-transform": "translateX(-" + translate + ")",
        transform: "translateX(-" + translate + ")"
      });
    }
  }

  $(window).on("resize", function () {
    initSlider();
  });
});
