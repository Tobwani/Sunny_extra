let currentSlide = 0;

function startSlideshow() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('slideshow-container').classList.remove('hidden');
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function updateCountdown() {
  const countdownElement = document.getElementById('countdown');
  const now = new Date();
  const targetDate = new Date('2025-01-01T00:00:00');
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('slideshow-container').innerHTML =
      '<h1>Frohes neues Jahr, meine kleine Prinzessin 🎉</h1>' +
      '<p>Ich wünschte ich könnte dir gerade einen Kuss geben aber naja das geht ja leider nicht aber ich wünsche dir alles Glück der Welt für dieses Jahr und ich verspreche dir das ich mein Bestes geben werde dir es so schön wie möglich zu machen das ist mein Ziel und dabei bleibt es auch ich denke 2025 wird für uns beide richtig schön ich hoffe du kannst mit meiner Lust und meinem Tempo mithalten wie du das interpretierst ist dir überlassen haha Ich liebe dich sehrrrrr</p>';
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

// Start initializations
showSlide(currentSlide);
setInterval(updateCountdown, 1000);
