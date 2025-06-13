$(document).ready(function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  $("#slider-hero").owlCarousel({
    loop: true,
    nav: true,
    margin: 0,
    items: 1,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-hero-nav",
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });

  $("#tenaga-pendidik-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3, // Default untuk desktop
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-1",
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 3,
      },
    },
  });

  $("#alumni-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 2,
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-2",
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });

  $("#galeri-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 2,
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-3",
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 800,
  });
});
