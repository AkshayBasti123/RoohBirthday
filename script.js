const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

const message = `
Happy, happy birthday to you. Eighteen is a pretty big number, and it brings both freedom and responsibility. Still, I hope our love for each other will always stay the same. I don’t think words will ever be enough to express how much you mean to me, but I’m going to try anyway.

From the moment you walked into my life, everything changed. Your smile became my favorite sight, your laugh became my favorite sound, and your love became my favorite feeling. You bring me a kind of peace I didn’t know existed.

You’ve grown into the most amazing woman: smart, kind, strong, and so full of life. Every day with you feels like a gift, and I thank the universe, every single day, for letting me love you. I know life won’t always be easy, but I promise you this: through every high and every low, I’ll be here. You’ll never have to face anything alone, not while I’m around.

You’re my hibiscus flower, delicate yet powerful, vibrant, and full of light. I am so, so proud of the person you are and the future that’s waiting for you. This little website is just a small way of showing how much I care, but more than anything, I just want you to feel loved. Because you are. So deeply.

Happy birthday, my Rooh. I love you endlessly.
`;

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.classList.remove("hidden");
  typeWriter();
  music.play();
  launchConfetti();
});

function typeWriter(i = 0) {
  if (i < message.length) {
    typedText.innerHTML += message.charAt(i);
    setTimeout(() => typeWriter(i + 1), 30);
  }
}

// Confetti
function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff69b4', '#ffb6c1', '#ffc0cb']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff69b4', '#ffb6c1', '#ffc0cb']
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Clickable emoji hearts
const sweetMessages = [
  "You're my whole heart 💕",
  "I love you more each day 🌸",
  "You light up my world ✨",
  "You’re the best gift I’ve ever received 🎁",
  "You make life beautiful 🐚"
];

const emojis = ['💖', '🌸', '🐚', '🎁', '🫧'];

function createEmojiHearts() {
  const container = document.getElementById('emoji-container');
  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement('span');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.top = Math.random() > 0.5 ? '5%' : '90%';
    emoji.style.left = `${Math.random() * 90 + 5}%`;

    emoji.onclick = () => {
      alert(sweetMessages[Math.floor(Math.random() * sweetMessages.length)]);
    };

    container.appendChild(emoji);
  }
}

createEmojiHearts();

// Starry background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 100 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1.5,
  speed: Math.random() * 0.5 + 0.2,
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(drawStars);
}
drawStars();
