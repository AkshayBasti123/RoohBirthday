// Typing animation
const message = `My Rooh ❤️,

From the moment I met you, my life has felt softer, warmer, and brighter. You're the reason my heart beats a little faster and my days feel a little sweeter. Watching you grow into the beautiful, strong, and radiant person you are has been the greatest gift of my life.

Happy 18th birthday, my love 🌸
You're everything to me, always.`;

let index = 0;
let letterOpened = false;

function typeWriter() {
  const letter = document.getElementById("letter");
  if (index < message.length) {
    letter.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  }
}

// Confetti
function playConfetti() {
  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.position = "fixed";
    confetti.style.width = "6px";
    confetti.style.height = "6px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%)`;
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.opacity = 0.7;
    confetti.style.zIndex = 9999;
    confetti.style.borderRadius = "50%";
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s ease-in-out forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Envelope click
document.getElementById("envelope").addEventListener("click", function () {
  if (letterOpened) return;
  letterOpened = true;

  document.getElementById("letterContainer").style.display = "block";
  typeWriter();
  playConfetti();
});

// Floating hearts
function spawnFloatingHearts() {
  const container = document.getElementById("floatingHeartsContainer");
  const emojis = ["💖", "💗", "💘", "💕", "💞", "💓"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }, 600);
}
spawnFloatingHearts();

// Click-to-reveal hearts
const sweetMessages = [
  "You make my world better 🌍",
  "Your smile is everything 😍",
  "I'm so proud of you 💫",
  "You shine like hibiscus in bloom 🌺",
  "You're my safe place 🫶",
  "You’re the best gift I’ve ever had 🎁",
  "I'm always thinking about you 💭",
  "You’re the softest part of my soul 💗",
];

function spawnRevealHearts() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "reveal-heart";
    heart.textContent = "🎈";
    heart.style.left = Math.random() < 0.5
      ? Math.random() * 60 + "px"
      : screenWidth - Math.random() * 60 + "px";
    heart.style.top = Math.random() * (screenHeight - 100) + "px";

    heart.addEventListener("click", () => {
      alert(sweetMessages[Math.floor(Math.random() * sweetMessages.length)]);
    });

    document.body.appendChild(heart);
  }
}
spawnRevealHearts();
