document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var totalSlides = document.getElementsByClassName("carousel-slides").length; // Jumlah total slide
  var totalSlideAutoPlay = document.getElementsByClassName("carousel-slide").length; // Jumlah total slide
  var slides = document.querySelector(".carousel-track");

  function showSlide(index) {
    currentSlide = index;
    var translateValue = -currentSlide * 30.3333333; /* Menggunakan nilai 20 karena flex: 0 0 20% pada setiap slide */
    slides.style.transform = "translateX(" + translateValue + "%)";
  }

  function nextSlide() {
    if (currentSlide < (totalSlides - 5)) {
      currentSlide = currentSlide + 1;
    } else {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  function nextSlideAutoPlay() {
    if (currentSlide < (totalSlideAutoPlay - 3)) {
      currentSlide = currentSlide + 1;
    } else {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides * 2 - 1) % (totalSlides * 2 - 1);
    showSlide(currentSlide);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(function () {
      nextSlideAutoPlay();
    }, 3000); // Ganti angka 3000 dengan interval (dalam milidetik) yang Anda inginkan
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Inisialisasi dan autoplay
  showSlide(currentSlide);
  startAutoplay();

  // Tombol navigasi
  document.getElementById("nextBtn").addEventListener("click", function () {
    // stopAutoplay();
    nextSlide();
    // alert('tes');
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    // stopAutoplay();
    prevSlide();
    // alert('tes1')
  });
});
