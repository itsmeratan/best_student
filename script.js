const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("msg");
const img = document.getElementById("mainImg");

let noCount = 0;

// Move NO button when cursor comes near
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 100) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// If NO is clicked (just in case)
noBtn.addEventListener("click", () => {
  noCount++;
  msg.textContent = `❌ Wrong answer 😄 Try again (${noCount})`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
  msg.textContent = "✅ Yayyy!! ❤️😍 You just made my day 💕";

  // change image to GIF
  img.src = "happy.gif";
});
