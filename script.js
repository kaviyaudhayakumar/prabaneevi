// 1. Audio Playback Control
const audio = document.getElementById('bg-audio');
const musicBtn = document.getElementById('music-btn');

document.body.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {});
  }
}, { once: true });

musicBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
    musicBtn.textContent = '🔊';
  } else {
    audio.pause();
    musicBtn.textContent = '🔈';
  }
});

// 2. Countdown Timer
const targetDate = new Date("2026-11-20T16:30:00").getTime(); // Set your wedding date

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff > 0) {
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
  }
}, 1000);