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
  if (distance < 120) {
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

