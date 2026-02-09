let popped = 0;

/* SCREEN CONTROL – DO NOT TOUCH */
function showScreen(n) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.style.display = "none";
  });
  document.getElementById(`screen-${n}`).style.display = "flex";
}

showScreen(1);

/* DECORATE */
function decorate() {
  document.body.style.background =
    "linear-gradient(135deg, #ffd1dc, #fff)";
  showScreen(4);
}

/* BALLOON POP WITH BLAST */
function pop(el) {
  const rect = el.getBoundingClientRect();
  const items = ["🎉", "❤️", "✨", "💖", "⭐"];

  for (let i = 0; i < 25; i++) {
    const blast = document.createElement("div");
    blast.className = "falling";
    blast.innerHTML = items[Math.floor(Math.random() * items.length)];
    blast.style.left = rect.left + Math.random() * 40 + "px";
    blast.style.top = rect.top + "px";
    blast.style.animationDuration = 1 + Math.random() * 1.5 + "s";
    document.body.appendChild(blast);
    setTimeout(() => blast.remove(), 2000);
  }

  el.remove();
  popped++;

  if (popped === 4) {
    setTimeout(() => showScreen(6), 800);
  }
}

/* 🔴 CONTINUOUS FALLING HEARTS / EMOJIS */
setInterval(() => {
  const el = document.createElement("div");
  el.className = "falling";
  el.innerHTML = Math.random() > 0.5 ? "❤️" : "✨";
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 6000);
}, 300);

/* ❤️ HEARTS FOLLOW CURSOR / FINGER */
document.addEventListener("mousemove", e => {
  createHeart(e.clientX, e.clientY);
});

document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  createHeart(t.clientX, t.clientY);
});

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "trail-heart";
  heart.innerHTML = "❤️";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1200);
}

/* RESTART */
function restart() {
  location.reload();
}