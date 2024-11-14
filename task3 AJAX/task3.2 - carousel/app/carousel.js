const imageCount = 8;
let currentIndex = 0;
const images = [];

const apiUrl =
  "https://api.unsplash.com/photos/random?count=" +
  imageCount +
  "&client_id=EplupXXHmfBedF2qp7KvSEMxX00lIf6GQilq7DoSn1w";

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "ArrowLeft") {
    prevImage();
  }
});

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      images.push(item.urls.regular);
    });
    updateCarousel();
    startAutoChange();
  })
  .catch((error) => console.error("Error fetching images:", error));

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
  restartAutoChange();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
  restartAutoChange();
}

function updateCarousel() {
  const carousel = document.querySelector(".images");
  carousel.innerHTML = `<img class="image" src="${
    images[currentIndex]
  }" alt="Image ${currentIndex + 1}">`;
}

function startAutoChange() {
  interval = setInterval(nextImage, 3000);
}

function restartAutoChange() {
  clearInterval(interval);
  startAutoChange();
}
