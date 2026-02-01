/*const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h2>Yayyy!! ❤️😍</h2>
    <p>You just made my day 💕</p>
  `;
});*/
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");

function moveNoButton(e) {
  const btnRect = noBtn.getBoundingClientRect();

  const mouseX = e.clientX || (e.touches && e.touches[0].clientX);
  const mouseY = e.clientY || (e.touches && e.touches[0].clientY);

  const distance = Math.hypot(
    mouseX - (btnRect.left + btnRect.width / 2),
    mouseY - (btnRect.top + btnRect.height / 2)
  );

  // sensitivity radius (increase = harder)
  if (distance < 60) {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
}

// desktop
document.addEventListener("mousemove", moveNoButton);

// mobile
document.addEventListener("touchmove", moveNoButton);

// if NO somehow gets clicked
noBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h2>❌ Wrong Answer 😜</h2>
    <p>Try again... you know the right one 😉</p>
  `;
});

// YES click
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h2>Yayyy!! ❤️😍</h2>
    <p>You just made my day 💕</p>
  `;
});

/*const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("msg");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let noCount = 0;
let yesScale = 1;
let noScale = 1;

// resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// simple beep sound
function playBeep(freq) {
  const ctxAudio = new AudioContext();
  const osc = ctxAudio.createOscillator();
  osc.frequency.value = freq;
  osc.connect(ctxAudio.destination);
  osc.start();
  osc.stop(ctxAudio.currentTime + 0.1);
}

// move NO when cursor is near
function moveNo(e) {
  const rect = noBtn.getBoundingClientRect();
  const x = e.clientX || e.touches?.[0].clientX;
  const y = e.clientY || e.touches?.[0].clientY;

  const d = Math.hypot(
    x - (rect.left + rect.width / 2),
    y - (rect.top + rect.height / 2)
  );

  if (d < 150) {
    noBtn.style.transform = `
      translate(${Math.random()*400-200}px, ${Math.random()*200-100}px)
      scale(${noScale})
    `;
  }
}

document.addEventListener("mousemove", moveNo);
document.addEventListener("touchmove", moveNo);

// NO clicked
noBtn.addEventListener("click", () => {
  noCount++;
  noScale = Math.max(0.4, noScale - 0.08);
  yesScale += 0.08;

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;

  msg.textContent = `❌ Wrong choice! You tried NO ${noCount} times 😏`;
  playBeep(200);
});

// YES clicked
yesBtn.addEventListener("click", () => {
  msg.textContent = "Yayyy!! ❤️ You chose the right answer!";
  playBeep(600);
  confetti();
});

// 🎉 Confetti
function confetti() {
  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    dx: Math.random() * 6 - 3,
    dy: Math.random() * 6 + 2,
    c: `hsl(${Math.random()*360},100%,50%)`
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      ctx.fillStyle = p.c;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(animate);
  }
  animate();
}*/

