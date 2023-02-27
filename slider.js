window.addEventListener("load", () => {
  // initial slide
  let slide = 1;

  // total slides
  let slides = document.querySelectorAll(".slider ul li");
  total = slides.length;

  // show first side
  showSlide(1);

  next = document.querySelector(".next");
  prev = document.querySelector(".prev");
  
  /**
   * event next button
   */
  function nextImage() {
    slide++;
    if (slide > total) {
      slide = 1;
    }
    showSlide(slide);
  }

  next.addEventListener("click", (evt) => {
    evt.preventDefault();
    nextImage();
  });
  /*Event prev button */
  function prevImage() {
    slide--;
    if (slide < 1) {
      slide = total;
    }
    showSlide(slide);
  }

  prev.addEventListener("click", (evt) => {
    evt.preventDefault();
    prevImage();
  });

  /**
   * show slides
   *
   * @param {number} n
   * @return {null}
   *
   */
  function showSlide(n) {
    n--; // decrement 1
    for (i = 0; i < slides.length; i++) {
      i == n
        ? (slides[n].style.display = "block")
        : (slides[i].style.display = "none");
    }
  }
  const interval = setInterval(function () {
    nextImage();
  }, 5000);
});
