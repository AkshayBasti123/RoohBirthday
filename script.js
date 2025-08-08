// Typing Animation
const letterText = `Happy, happy birthday to you. Eighteen is a pretty big number, and it brings both freedom and responsibility. 
Still, I hope our love for each other will always stay the same.
I don’t think words will ever be enough to express how much you mean to me, but I’m going to try anyway. 
From the moment you walked into my life, everything changed. 
Your smile became my favorite sight, your laugh became my favorite sound, and your love became my favorite feeling.
You bring me a kind of peace I didn’t know existed. You’ve grown into the most amazing woman: smart, kind, strong, and so full of life.
Every day with you feels like a gift, and I thank the universe, every single day, for letting me love you.
I know life won’t always be easy, but I promise you this: through every high and every low, I’ll be here.
You’ll never have to face anything alone, not while I’m around. You’re my hibiscus flower, delicate yet powerful, vibrant, and full of light.
I am so, so proud of the person you are and the future that’s waiting for you.
This little website is just a small way of showing how much I care, but more than anything, I just want you to feel loved. Because you are. So deeply.
Happy birthday, my Rooh. I love you endlessly.`;

const letterContainer = document.getElementById("letterContainer");
const letterTextElem = document.getElementById("letterText");

// Confetti
const confettiCanvas = document.getElementById("confetti-canvas");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;
const ctx = confettiCanvas.getContext("2d");

let confettiPieces = [];
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      r: Math.random() * 6 + 4,
      color: `hsl(${Math.random() * 60 + 320}, 100%, 75%)`,
      speed: Math.random() * 3 + 2,
      drift: Math.random() * 2 - 1
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.speed;
    p.x += p.drift;
    if (p.y > confettiCanvas.height) p.y = -10;
  });
  requestAnimationFrame(drawConfetti);
}

// Envelope click
document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("envelope").style.display = "none";
  letterContainer.style.display = "block";
  typeLetter();
  createConfetti();
  drawConfetti();
});

// Typing animation logic
let i = 0;
function typeLetter() {
  if (i < letterText.length) {
    letterTextElem.textContent += letterText.charAt(i);
    i++;
    setTimeout(typeLetter, 35);
  }
}

// Floating hearts
function spawnHearts() {
  const container = document.querySelector('.floating-hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.width = heart.style.height = `${Math.random() * 20 + 10}px`;
    container.appendChild(heart);
  }
}
spawnHearts();

// Clickable hearts
const compliments = [
  "You’re the light of my life 💡",
  "You make everything better 🌟",
  "Your smile is my favorite view 😊",
  "You’re perfect just the way you are 💗",
  "I’m so lucky to have you 🍀",
  "I adore you endlessly 🌸",
  "You make my heart happy 💞",
  "You’re my everything 💖"
];

function createClickableHearts() {
  const container = document.getElementById("clickHeartsContainer");
  compliments.forEach((msg, index) => {
    const heart = document.createElement("div");
    heart.className = "click-heart";
    heart.style.top = Math.random() * 80 + "vh";
    heart.style.left = Math.random() * 90 + "vw";
    heart.title = "Click me!";
    heart.addEventListener("click", () => {
      alert(msg);
    });
    container.appendChild(heart);
  });
}
createClickableHearts();
