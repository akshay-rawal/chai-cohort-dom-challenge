/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const autoPlayBtn = document.getElementById("autoPlayButton");
const timerDispaly = document.getElementById("timerDisplay");
const timerCircle = document.querySelector(".timer-circle");

const carousalIndicator = document.createElement("div");
carousalIndicator.id = "carouselIndicator";
carousalIndicator.classList = "carousel-indicator";
document.body.appendChild(carousalIndicator);

let currentIndex = 0,
  autoPlayInterval,
  countdownInterval,
  countdown = 5,
  autoPlayDelay;

function updateCarousal() {
  carouselTrack.innerHTML = `<img src = "${images[currentIndex].url}" 
      alt = "${images[currentIndex].caption}" class = "carousal-image">`;
  caption.textContent = images[currentIndex].caption;
  updateIndicator();
}

function createIndicator() {
  carousalIndicator.innerHTML = images
    .map((_, i) => `<span class="indicator-dot ${
          i === currentIndex ? "active" : ""
        }" onclick="changeImage(${i})"></span>`
    )
    .join("");
}

function changeImage(index) {
  currentIndex = index;
  updateCarousal();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousal();
}

function updateIndicator() {
  document
    .querySelectorAll(".indicator-dot")
    .forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));
}

function startAutoPlay() {
  if (!autoPlayInterval) {
     timerCircle.style.animationPlayState = "running"
      autoPlayInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % images.length;
          updateCarousal();
      }, 5000);
  }
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
  timerCircle.style.animationPlayState = "paused";
}

autoPlayBtn.addEventListener("click", () => {
  if (autoPlayInterval) {
      stopAutoPlay();
      autoPlayBtn.textContent = "Start Auto-play";
  } else {
      startAutoPlay();
      autoPlayBtn.textContent = "Stop Auto-Play";
  }
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousal();
});
nextButton.addEventListener("click", nextImage);

createIndicator();
updateCarousal();
