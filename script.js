document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const letter = document.querySelector(".letter");
  const letterText = document.getElementById("letterText");
  let isOpened = false;

  const message = `Happy, happy birthday to you. Eighteen is a pretty big number, and it brings both freedom and responsibility. Still, I hope our love for each other will always stay the same. I don’t think words will ever be enough to express how much you mean to me, but I’m going to try anyway. From the moment you walked into my life, everything changed. Your smile became my favorite sight, your laugh became my favorite sound, and your love became my favorite feeling. You bring me a kind of peace I didn’t know existed. You’ve grown into the most amazing woman: smart, kind, strong, and so full of life. Every day with you feels like a gift, and I thank the universe, every single day, for letting me love you. I know life won’t always be easy, but I promise you this: through every high and every low, I’ll be here. You’ll never have to face anything alone, not while I’m around. You’re my hibiscus flower, delicate yet powerful, vibrant, and full of light. I am so, so proud of the person you are and the future that’s waiting for you. This little website is just a small way of showing how much I care, but more than anything, I just want you to feel loved. Because you are. So deeply. Happy birthday, my Rooh. I love you endlessly.`;

  envelope.addEventListener("click", () => {
    if (isOpened) return;
    isOpened = true;
    letter.style.display = "block";
    typeWriter(message, letterText, 0);
    showConfetti();
  });

  function typeWriter(text, element, index) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      setTimeout(() => typeWriter(text, element, index + 1), 30);
    }
  }

  function showConfetti() {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#ffc0cb", "#ffb6c1"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#ffc0cb", "#ffb6c1"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  function createEmojiHearts() {
    const messages = [
      "You're amazing 💕",
      "I love you 🌸",
      "You're beautiful 🥰",
      "Forever mine 💖",
      "My hibiscus 🌺",
      "18 looks good on you 🎉",
    ];

    for (let i = 0; i < messages.length; i++) {
      const emoji = document.createElement("div");
      emoji.classList.add("emoji-heart");
      emoji.innerText = "💘";
      emoji.setAttribute("data-message", messages[i]);

      // place randomly around the edge
      const edge = Math.floor(Math.random() * 4);
      switch (edge) {
        case 0: // top
          emoji.style.top = `${Math.random() * 10 + 5}%`;
          emoji.style.left = `${Math.random() * 90}%`;
          break;
        case 1: // right
          emoji.style.top = `${Math.random() * 90}%`;
          emoji.style.right = "5%";
          break;
        case 2: // bottom
          emoji.style.bottom = "5%";
          emoji.style.left = `${Math.random() * 90}%`;
          break;
        case 3: // left
          emoji.style.top = `${Math.random() * 90}%`;
          emoji.style.left = "5%";
          break;
      }

      emoji.addEventListener("click", () => {
        alert(messages[i]);
      });

      document.body.appendChild(emoji);
    }
  }

  createEmojiHearts();
});
