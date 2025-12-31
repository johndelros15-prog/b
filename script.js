/* ---------- auto-play on scroll ---------- */
let musicStarted = false;
document.addEventListener('scroll', () => {
  if (!musicStarted) {
    const audio = document.getElementById('bgMusic');
    audio.muted = false;
    audio.volume = 0.4;
    audio.play().catch(() => {});
    musicStarted = true;
  }
}, { once: true });

/* ---------- tulip button ---------- */
function showTulip() {
  const tulip = document.createElement('div');
  tulip.className = 'tulip';
  tulip.innerHTML = '🌷';
  tulip.style.left = Math.random() * 80 + 10 + '%';
  tulip.style.fontSize = '60px';
  tulip.style.zIndex = '3';
  tulip.style.animation = 'tulipFloat 6s ease-in-out forwards';
  document.body.appendChild(tulip);
  setTimeout(() => tulip.remove(), 6000);
}

/* ---------- music button ---------- */
let musicPlaying = false;
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn = document.querySelector('.music-button');
  if (musicPlaying) {
    audio.pause();
    btn.textContent = '🎵 Play Our Song';
    musicPlaying = false;
  } else {
    audio.play();
    btn.textContent = '⏸️ Pause Our Song';
    musicPlaying = true;
  }
}

/* ---------- hearts ---------- */
setInterval(() => {
  const h = document.createElement('div');
  h.className = 'heart';
  h.innerHTML = '💖';
  h.style.left = Math.random() * 100 + '%';
  h.style.animationDuration = '12s';
  h.style.zIndex = '1';
  document.querySelector('.hearts-container').appendChild(h);
  setTimeout(() => h.remove(), 12000);
}, 1000);

/* ---------- fireworks ---------- */
setInterval(() => {
  const f = document.createElement('div');
  f.className = 'firework';
  f.style.left = Math.random() * 100 + '%';
  f.style.top = Math.random() * 50 + '%';
  f.style.background = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c'][Math.floor(Math.random() * 7)];
  f.style.zIndex = '2';
  f.style.animation = 'firework 1s ease-out forwards';
  document.querySelector('.fireworks-container').appendChild(f);
  setTimeout(() => f.remove(), 1000);
}, 2000);

/* ---------- confetti ---------- */
setInterval(() => {
  const c = document.createElement('div');
  c.style.position = 'fixed';
  c.style.left = Math.random() * 100 + '%';
  c.style.top = '-10px';
  c.style.width = '10px';
  c.style.height = '10px';
  c.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  c.style.pointerEvents = 'none';
  c.style.zIndex = '2';
  c.style.animation = 'confettiFall 8s linear forwards';
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 8000);
}, 200);

/* ---------- quote pop (longer) ---------- */
const romanticQuotes = [
  "You are my today and all of my tomorrows. 💕",
  "In you, I've found the love of my life and my closest friend. 🌷",
  "Every moment with you is a beautiful dream come true. ✨",
  "Your smile is the sunshine that brightens my darkest days. ☀️",
  "Loving you is like breathing - so effortless and essential. 💖",
  "Tulips are like your love - delicate, beautiful, and everlasting. 🌷"
];
setInterval(() => {
  const q = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
  const el = document.createElement('div');
  el.className = 'quote-element';
  el.style.position = 'fixed';
  el.style.top = '20px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = 'rgba(255, 255, 255, .9)';
  el.style.padding = '15px 25px';
  el.style.borderRadius = '25px';
  el.style.fontSize = '1.1em';
  el.style.color = '#e74c3c';
  el.style.boxShadow = '0 5px 15px rgba(0, 0, 0, .2)';
  el.style.zIndex = '1000';
  el.textContent = q;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 12000);
}, 15000);
