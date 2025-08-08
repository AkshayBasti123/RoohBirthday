const letterText = `Happy, happy birthday to you. Eighteen is a pretty big number, and it brings both freedom and responsibility. Still, I hope our love for each other will always stay the same. I don’t think words will ever be enough to express how much you mean to me, but I’m going to try anyway. From the moment you walked into my life, everything changed. Your smile became my favorite sight, your laugh became my favorite sound, and your love became my favorite feeling. You bring me a kind of peace I didn’t know existed. You’ve grown into the most amazing woman: smart, kind, strong, and so full of life. Every day with you feels like a gift, and I thank the universe, every single day, for letting me love you. I know life won’t always be easy, but I promise you this: through every high and every low, I’ll be here. You’ll never have to face anything alone, not while I’m around. You’re my hibiscus flower, delicate yet powerful, vibrant, and full of light. I am so, so proud of the person you are and the future that’s waiting for you. This little website is just a small way of showing how much I care, but more than anything, I just want you to feel loved. Because you are. So deeply. Happy birthday, my Rooh. I love you endlessly.`;

function openLetter() {
  document.querySelector('.letter').style.display = 'block';
  typeWriter();
  launchConfetti();
}

function typeWriter() {
  const target = document.getElementById("letter-text");
  target.innerHTML = "";
  let i = 0;
  function typing() {
    if (i < letterText.length) {
      target.innerHTML += letterText.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }
  typing();
}

// Floating emoji hearts (click to reveal messages)
const sweetMessages = [
  "You’re beautiful 💕",
  "I’m so proud of you 💗",
  "I love your smile 🌸",
  "You make me happy 💘",
  "Forever and always 💞"
];

function createEmojiHearts() {
  const emojis = ["💖", "💘", "💝", "💗", "💕"];
  const container = document.getElementById("emoji-container");

  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${Math.random() * 100}%`;

    emoji.onclick = () => {
      alert(sweetMessages[Math.floor(Math.random() * sweetMessages.length)]);
    };

    container.appendChild(emoji);
  }
}

createEmojiHearts();

// Confetti (using canvas-confetti library)
function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff69b4', '#ffc0cb', '#ffb6c1']
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff69b4', '#ffc0cb', '#ffb6c1']
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}


const confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.head.appendChild(confettiScript);
