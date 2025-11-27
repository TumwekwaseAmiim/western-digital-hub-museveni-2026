/* ============================================================
   TYPED SLOGANS
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // HERO SLOGAN
  new Typed('#typed-slogan', {
    strings: [
      "Vote Stability — Vote Mzee 2026",
      "Peace • Security • Transformation",
      "Vote Museveni — Protect the Gains",
      "Mzee My President — 15 January 2026"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });

  // WHY VOTE SECTION
  new Typed('#typed-why', {
    strings: [
      "Stability that protects all Ugandans.",
      "Leadership that brings peace and growth.",
      "NRM victory strengthens Uganda’s future.",
      "Vote Museveni — Vote Stability."
    ],
    typeSpeed: 40,
    backSpeed: 25,
    loop: true
  });

  // AUTO DETECT PORTRAIT IMAGE
  const img = document.getElementById('mzee-main');
  img.onload = () => {
    if (img.naturalHeight > img.naturalWidth) img.classList.add('portrait');
  };
});

/* ============================================================
   COUNTDOWN — JAN 15 2026
============================================================ */
const countdownEl = document.getElementById("countdown");
const electionDay = new Date("January 15, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = electionDay - now;

  if (diff <= 0) {
    countdownEl.textContent = "Election Day is Here! 🗳️";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  countdownEl.textContent =
    `⏳ ${days}d ${hours}h ${mins}m ${secs}s until Election`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();


/* ============================================================
   WEEKLY MESSAGE PLAYER
============================================================ */
const weeklyFiles = [
  {
    id: 'w1',
    title: 'Weekly Message — Latest (Video)',
    file: 'weekly/muvideo.mp4',   // Your video file
    type: 'video'
  }
];

const playlist = document.getElementById("playlist");
const wVideo = document.getElementById("weekly-video");
const wAudio = document.getElementById("weekly-audio");

function loadPlaylist() {
  weeklyFiles.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.className = "play-item";
    btn.textContent = item.title;

    btn.onclick = () => playWeekly(item, btn);
    playlist.appendChild(btn);

    if (index === 0) playWeekly(item, btn);
  });
}

function clearPlaylistActive() {
  document.querySelectorAll(".play-item")
    .forEach(b => b.classList.remove("active"));
}

function playWeekly(item, btn) {
  clearPlaylistActive();
  btn.classList.add("active");

  if (item.type === "video") {
    wAudio.style.display = "none";
    wVideo.style.display = "block";
    wVideo.src = item.file;
    wVideo.play().catch(()=>{});
  } else {
    wVideo.style.display = "none";
    wAudio.style.display = "block";
    wAudio.src = item.file;
    wAudio.play().catch(()=>{});
  }
}

loadPlaylist();


/* ============================================================
   ACHIEVEMENTS — ANKOLE + NATIONAL
============================================================ */

// SECTION 1 — DETAILED ANKOLE ACHIEVEMENTS
const ankoleAchievements = [
  "Primary education coverage now at 89% across Ankole.",
  "71% of sub-counties have secondary schools, supported by 41 seed schools.",
  "18 technical institutes across the sub-region (50% coverage).",
  "644 youth trained under the Presidential Skilling Initiative.",
  "Health: HC IV coverage at 69%, HC III coverage at 75% across 206 sub-counties.",
  "Major reduction in malaria due to nationwide mosquito net distribution.",
  "Kyenshama Dam completed (2M cubic meters) serving 190,000 cattle.",
  "Kabuyanda Irrigation Scheme under construction (8.8M m³ capacity).",
  "Safe water access: 66% of villages & 86% of parishes now served.",
  "National roads & DUCAR roads upgraded across all 14 districts.",
  "Electricity coverage at district level now 88%.",
  "Over 800 agro-processing & manufacturing enterprises operating.",
  "Mugaba Palace fully restored; Kitagata Hot Springs upgraded.",
  "PDM: Over 241,000 beneficiaries funded in Ankole by June 2025.",
  "Emyooga: UGX 35.6B disbursed, strong recovery levels.",
  "Industrial hubs & value addition centers operating in Mbarara & Bushenyi.",
  "Tourism expanded — Lake Mburo, crater lakes, cultural sites.",
  "Over 125,000 land titles processed via SLAAC in Ankole region."
];

// SECTION 2 — NATIONAL ACHIEVEMENTS
const nationalAchievements = [
  "Uganda now produces over 2,000MW — Karuma & Isimba dams.",
  "Internet coverage expanded nationwide.",
  "Massive investment in roads & national highways.",
  "NRM manifesto focuses on transformation & stability.",
  "Agriculture modernization & wealth creation programs."
];

// RENDER BOTH LISTS
const achievementsList = document.getElementById("achievements-list");

function addHeading(title) {
  const h = document.createElement("h3");
  h.textContent = title;
  h.className = "ach-heading";
  achievementsList.appendChild(h);
}

function addList(items) {
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    achievementsList.appendChild(li);
  });
}

addHeading("Achievements in Ankole Sub-Region (2021–2025)");
addList(ankoleAchievements);

addHeading("National Achievements by President Museveni");
addList(nationalAchievements);


/* ============================================================
   DOWNLOAD SONG
============================================================ */
document.getElementById("download-song").onclick = () => {
  const src = document.querySelector("#campaign-audio source").src;
  if (!src) return alert("Song missing");

  const a = document.createElement("a");
  a.href = src;
  a.download = "educative_song_mzee.mp3";
  document.body.appendChild(a);
  a.click();
  a.remove();
};


/* ============================================================
   SHARE BUTTONS
============================================================ */
const sharedURL = encodeURIComponent(window.location.href);
const sharedMsg = encodeURIComponent("Vote Museveni — Vote Stability 2026 🇺🇬");

document.getElementById("whatsapp").href =
  `https://api.whatsapp.com/send?text=${sharedMsg}%20${sharedURL}`;

document.getElementById("twitter").href =
  `https://twitter.com/intent/tweet?text=${sharedMsg}&url=${sharedURL}`;

document.getElementById("facebook").href =
  `https://www.facebook.com/sharer/sharer.php?u=${sharedURL}`;


/* ============================================================
   BACKGROUND MUSIC TOGGLE
============================================================ */
const musicBtn = document.getElementById("music-float");
const bgAudio = document.getElementById("campaign-audio");
const MUSIC_STATE = "mzee_music";

function setMusicState(on) {
  if (on) {
    bgAudio.play().catch(()=>{});
    musicBtn.textContent = "🔊";
    localStorage.setItem(MUSIC_STATE, "1");
  } else {
    bgAudio.pause();
    musicBtn.textContent = "🔈";
    localStorage.setItem(MUSIC_STATE, "0");
  }
}

musicBtn.onclick = () => {
  const current = localStorage.getItem(MUSIC_STATE) === "1";
  setMusicState(!current);
};

setTimeout(() => {
  const saved = localStorage.getItem(MUSIC_STATE);
  setMusicState(saved === "1");
}, 300);


/* ============================================================
   MUSEVENI AI — WESTERN ASSISTANT (CHATBOT)
============================================================ */
const bot = {
  greetings: [
    "Hello! I am Museveni AI — Western Assistant. How can I support you?",
    "Greetings! Ask me about stability, achievements, energy, roads or the manifesto."
  ],
  gratitude: [
    "You're welcome! Always here for you.",
    "Thank you too. Stability for all!",
    "Glad to assist. Vote Mzee — Vote Stability."
  ],
  identity: [
    "I am Museveni AI — Western Assistant, built to give verified information.",
    "I am a digital assistant created to help you understand Museveni's achievements & vision."
  ],
  education: [
    "Government expanded access to education nationwide.",
    "NRM manifesto emphasizes free government education & youth development."
  ],
  energy: [
    "Over 2,000MW now produced thanks to Karuma & Isimba dams.",
    "Energy access continues to expand across Uganda."
  ],
  roads: [
    "NRM has invested massively in roads, bridges, highways & economic corridors.",
    "New transport networks support trade, agriculture & development."
  ],
  stability: [
    "NRM stability is the foundation of Uganda's peace & progress.",
    "Vote Museveni — protect peace, gains & future stability."
  ],
  manifesto: [
    "The manifesto focuses on wealth creation, transformation & stability.",
    "NRM pillars: Peace, Stability, Development, Prosperity."
  ]
};

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (/hi|hello|hey|assistant|museveni/.test(msg)) return pick(bot.greetings);
  if (/thank/.test(msg)) return pick(bot.gratitude);
  if (/who are you|what are you|your name/.test(msg)) return pick(bot.identity);
  if (/school|education|teacher/.test(msg)) return pick(bot.education);
  if (/power|energy|dam|electric/.test(msg)) return pick(bot.energy);
  if (/road|bridge|highway/.test(msg)) return pick(bot.roads);
  if (/vote|stability|nrm|security/.test(msg)) return pick(bot.stability);
  if (/manifesto|plan|agenda/.test(msg)) return pick(bot.manifesto);

  return "You can ask about: stability, education, roads, energy, achievements or the manifesto.";
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


/* ============================================================
   CHAT UI
============================================================ */
const open = document.getElementById("open-chat");
const close = document.getElementById("close-chat");
const chatBox = document.getElementById("chat");
const chatArea = document.getElementById("chat-messages");
const input = document.getElementById("chat-input-box");
const send = document.getElementById("chat-send");

open.onclick = () => chatBox.style.display = "flex";
close.onclick = () => chatBox.style.display = "none";

send.onclick = sendMessage;
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMsg("You", text);
  input.value = "";

  setTimeout(() => {
    addMsg("Museveni AI — Western Assistant", getBotReply(text));
  }, 400);
}

function addMsg(who, msg) {
  const div = document.createElement("div");
  div.className = "msg";
  div.innerHTML = `<strong>${who}:</strong> ${msg}`;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
}
