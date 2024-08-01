  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Autoplay delay in milliseconds (adjust as needed)
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    loop: true, // Enable continuous loop
  });
  window.addEventListener("scroll", function () {
    updateHeaderBackground();
  });

  window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 50) { // Adjust this value as needed
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

