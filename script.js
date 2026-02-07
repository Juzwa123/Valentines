// NAME
const nameEl = document.getElementById("name");
if (nameEl) nameEl.innerText = "Babiiiiii 💕";

// TYPE LETTER
const letterText = "I coded this because loving you is the best thing I’ve ever done.";
let i = 0;
const letterEl = document.getElementById("letter");

if (letterEl) {
  function typeLetter() {
    if (i < letterText.length) {
      letterEl.innerHTML += letterText.charAt(i);
      i++;
      setTimeout(typeLetter, 40);
    }
  }
  typeLetter();
}

// REASONS
const reasons = [
  "You make me smile 😁.",
  "You support my dreams 😊.",
  "You feel like home 🏠.",
  "You understand me 🥺.",
  "You are my favorite person 🤗.",
  "You make me giggle like a kid 😝.",
"You’re my favorite person to annoy 😆.",
"I like you more than snacks 🍟.",
"You make my bad days go bye-bye 🥹.",
"I feel safe being weird with you 🤪.",
"You’re my favorite notification 📱❤️.",
"You feel like my forever 🥹.",
"You’re my favorite part of every day 🌙.",
"I choose you, again and again 💖.",
"You make love feel easy 😌.",
"You steal my hoodies and my heart 😤❤️.",
"I pretend I’m mad at you, but I’m not 😒💖.",
"I would still choose you even if you’re annoying 🙄😂.",
"I love you… even when you’re stubborn 😌.",
"You make my heart race a little too fast 😏.",
"I smile stupidly when I think of you 😳.",
"You drive me crazy… in the best way 😌.",
"You have no idea how attractive you are to me 🔥.",
"I like it when you look at me like that 😘.",
"I miss you even when you’re just asleep 🥺.",
"I feel lost when you’re not around 😔.",
"You’re my comfort person 🤍.",
"You make everything feel okay 🌈.",
"I want you in every version of my future 🫶."
];

function showReason() {
  document.getElementById("reason").innerText =
    reasons[Math.floor(Math.random() * reasons.length)];
}

// MUSIC
const music = document.getElementById("music");

function toggleMusic() {
  if (!music) return;
  music.paused ? music.play() : music.pause();
}

// HEARTS
const hearts = document.querySelector(".hearts");
if (hearts) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

// NO BUTTON EVADE
const noBtn = document.getElementById("no");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  });
}
