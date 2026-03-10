const content = {
  simplified: {
    htmlLang: "zh-Hans",
    siteTitle: "Chinese 1W AI Learning Companion",
    siteSubtitle: "AI-assisted learning platform for heritage Chinese learners.",
    welcomeTitle: "Welcome",
    welcomeText: "Explore pronunciation, vocabulary, reading, writing, and Chinese character stories in a supportive learning space.",
    navSound: "Sound Lab",
    navSoundDesc: "Build pronunciation confidence with guided listening and speaking practice.",
    navWord: "Word Explorer",
    navWordDesc: "Learn vocabulary through themes, context, and character families.",
    navReading: "Smart Reading",
    navReadingDesc: "Read with click-to-see support, glosses, and guided comprehension.",
    navFluency: "Reading Fluency",
    navFluencyDesc: "Practice listening, following, and reading aloud at your own pace.",
    navWriting: "Writing Studio",
    navWritingDesc: "Draft, revise, and receive supportive AI feedback on your writing.",
    navCulture: "Culture & Characters",
    navCultureDesc: "Discover cultural notes, radicals, and character stories."
  },
  traditional: {
    htmlLang: "zh-Hant",
    siteTitle: "Chinese 1W AI Learning Companion",
    siteSubtitle: "AI-assisted learning platform for heritage Chinese learners.",
    welcomeTitle: "歡迎",
    welcomeText: "在一個支持性的學習空間中，探索語音、詞彙、閱讀、寫作與漢字文化故事。",
    navSound: "Sound Lab",
    navSoundDesc: "透過引導式聆聽與口說練習，建立更有信心的發音基礎。",
    navWord: "Word Explorer",
    navWordDesc: "從主題、語境與漢字家族中學習詞彙。",
    navReading: "Smart Reading",
    navReadingDesc: "透過點詞支援、詞義提示與閱讀理解練習進行閱讀。",
    navFluency: "Reading Fluency",
    navFluencyDesc: "用自己的節奏練習聆聽、跟讀與朗讀。",
    navWriting: "Writing Studio",
    navWritingDesc: "起草、修改，並獲得支持性的 AI 寫作回饋。",
    navCulture: "Culture & Characters",
    navCultureDesc: "探索文化註解、部首與漢字故事。"
  }
};

function applyLanguage(mode) {
  const data = content[mode];
  document.documentElement.lang = data.htmlLang;

  document.getElementById("site-title").textContent = data.siteTitle;
  document.getElementById("site-subtitle").textContent = data.siteSubtitle;
  document.getElementById("welcome-title").textContent = data.welcomeTitle;
  document.getElementById("welcome-text").textContent = data.welcomeText;

  document.getElementById("nav-sound").textContent = data.navSound;
  document.getElementById("nav-sound-desc").textContent = data.navSoundDesc;

  document.getElementById("nav-word").textContent = data.navWord;
  document.getElementById("nav-word-desc").textContent = data.navWordDesc;

  document.getElementById("nav-reading").textContent = data.navReading;
  document.getElementById("nav-reading-desc").textContent = data.navReadingDesc;

  document.getElementById("nav-fluency").textContent = data.navFluency;
  document.getElementById("nav-fluency-desc").textContent = data.navFluencyDesc;

  document.getElementById("nav-writing").textContent = data.navWriting;
  document.getElementById("nav-writing-desc").textContent = data.navWritingDesc;

  document.getElementById("nav-culture").textContent = data.navCulture;
  document.getElementById("nav-culture-desc").textContent = data.navCultureDesc;

  document.getElementById("btn-simplified").classList.toggle("active", mode === "simplified");
  document.getElementById("btn-traditional").classList.toggle("active", mode === "traditional");

  localStorage.setItem("scriptMode", mode);
}

document.getElementById("btn-simplified").addEventListener("click", () => {
  applyLanguage("simplified");
});

document.getElementById("btn-traditional").addEventListener("click", () => {
  applyLanguage("traditional");
});

const savedMode = localStorage.getItem("scriptMode") || "simplified";
applyLanguage(savedMode);
