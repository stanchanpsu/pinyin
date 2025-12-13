const AudioEngine = {
  ctx: null,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } else if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  },

  playCorrect() {
    if (!this.ctx) this.init();

    const t = this.ctx.currentTime;
    const masterVol = 0.2; // Overall volume control

    // --- SOUND 1: The "Cha" (Short, slightly lower) ---
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.value = 1200; // First bell pitch

    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);

    // Envelope 1: Fast decay (The mechanical click/first ring)
    gain1.gain.setValueAtTime(0, t);
    gain1.gain.linearRampToValueAtTime(masterVol, t + 0.01);
    gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.1); // Stops quickly

    osc1.start(t);
    osc1.stop(t + 0.15);

    // --- SOUND 2: The "Ching!" (Higher, long ring, delayed) ---
    // We start this 80ms (0.08s) after the first one
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();

    osc2.type = "sine";
    osc2.frequency.value = 2000; // Higher bell pitch

    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);

    // Envelope 2: Long metallic decay
    gain2.gain.setValueAtTime(0, t + 0.08); // Start slightly later
    gain2.gain.linearRampToValueAtTime(masterVol, t + 0.09);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.8); // Long ring out

    osc2.start(t + 0.08);
    osc2.stop(t + 0.85);
  },

  playIncorrect() {
    if (!this.ctx) this.init();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    // Low "Thud"
    osc.type = "triangle";
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.linearRampToValueAtTime(80, t + 0.15);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.start(t);
    osc.stop(t + 0.25);
  },
};
const Visuals = {
  // 0: Grey-Green, 1: Gold, 2: Orange, 3: Neon Blue...
  colors: [
    "#f0ffaf",
    "#ffd700",
    "#ff4500",
    "#00f3ff",
    "#ff0055",
    "#8a2be2",
    "#00ff7f",
  ],

  getLevelColor(level) {
    if (!level || level < 1) return this.colors[0];
    if (level <= this.colors.length) return this.colors[level - 1];
    return `hsl(${(level * 47) % 360}, 85%, 55%)`;
  },

  hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3)
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  },

  colorToRgba(color, alpha = 1) {
    if (color.startsWith("#")) {
      const { r, g, b } = this.hexToRgb(color);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (color.startsWith("hsl")) {
      return color.replace("hsl(", "hsla(").replace(")", `, ${alpha})`);
    }
    return color;
  },

  spawnParticles(x, y, multiplier, type = "fountain") {
    const count = type === "fountain" ? Math.min(multiplier, 5) : 20;

    let colorSet = ["#fff"];
    if (multiplier === 2) colorSet = ["#ffd700", "#fff"];
    else if (multiplier === 3) colorSet = ["#ff4500", "#ffd700"];
    else if (multiplier >= 4) colorSet = ["#00f3ff", "#ff0055", "#8a2be2"];

    if (type === "explosion") {
      for (let i = 0; i < 15; i++) {
        const isGreen = Math.random() > 0.5;
        const c = isGreen ? ["#2e8b57", "#062f1b"] : ["#fdf6e3", "#e0d6c1"];
        this.createPhysParticle(x, y, c, null, 50, 150, true, "shard");
      }
      for (let i = 0; i < 20; i++) {
        this.createPhysParticle(x, y, colorSet, null, 100, 200, false, "spark");
      }
    } else {
      for (let i = 0; i < count; i++) {
        this.createPhysParticle(
          x,
          y,
          colorSet,
          -Math.PI / 2,
          20,
          80,
          true,
          "spark"
        );
      }
    }
  },

  createPhysParticle(x, y, colors, forcedAngle, minVel, maxVel, gravity, type) {
    const p = document.createElement("div");
    p.classList.add("particle");
    document.body.appendChild(p);

    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.background = color;
    p.style.left = x + "px";
    p.style.top = y + "px";

    if (type === "shard") {
      const size = Math.random() * 8 + 4;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.borderRadius = "2px";
    } else {
      const size = Math.random() * 4 + 2;
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.borderRadius = "50%";
      p.style.boxShadow = `0 0 10px ${color}`;
    }

    const angle =
      forcedAngle !== null
        ? forcedAngle + (Math.random() * 1 - 0.5)
        : Math.random() * Math.PI * 2;

    const velocity = Math.random() * (maxVel - minVel) + minVel;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity + (gravity ? 150 : 0);
    const rot = type === "shard" ? Math.random() * 720 - 360 : 0;
    const duration = type === "shard" ? 800 : 500;

    const animation = p.animate(
      [
        { transform: `translate(0,0) rotate(0deg) scale(1)`, opacity: 1 },
        {
          transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0)`,
          opacity: 0,
        },
      ],
      { duration: duration, easing: "cubic-bezier(0.25, 1, 0.5, 1)" }
    );

    animation.onfinish = () => p.remove();
  },
};

// ==============================
// 3. UI MODULE
// ==============================
const UI = {
  // Cache Elements
  elm: {
    score: document.getElementById("score-val"),
    timerTotal: document.getElementById("total-timer"),
    timerBar: document.getElementById("timer-bar"),
    streakContainer: document.getElementById("streak-container"),
    streakInner: document.getElementById("streak-inner"),
    streakFill: document.getElementById("streak-fill"),
    multText: document.getElementById("mult-text"),
    streakCount: document.getElementById("streak-count"),
    tilesWrapper: document.getElementById("tiles-wrapper"),
    input: document.getElementById("pinyin-input"),
    mobileDisplay: document.getElementById("mobile-input-display"),
    keyboard: document.getElementById("onscreen-keyboard"),
    overlay: document.getElementById("overlay"),
    startScreen: document.getElementById("start-screen"),
    endScreen: document.getElementById("end-screen"),
    finalScore: document.getElementById("final-score"),
    gameArea: document.getElementById("game-area"),
  },

  isSmallScreen() {
    return window.matchMedia("(max-width: 800px)").matches;
  },

  toggleScreen(screen, show) {
    if (screen === "overlay") {
      if (show) this.elm.overlay.classList.remove("hidden");
      else this.elm.overlay.classList.add("hidden");
      return;
    }

    const element = this.elm[screen + "Screen"];
    if (element) {
      if (show) {
        element.classList.remove("hidden");
        element.style.display = "flex";
      } else {
        element.classList.add("hidden");
        element.style.display = "none";
      }
    }
  },

  updateScore(val) {
    this.elm.score.innerText = val;
  },

  updateTimerDisplay(ms) {
    const seconds = Math.ceil(ms / 1000);
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    this.elm.timerTotal.innerText = `${mm}:${ss}`;
  },

  updateStreak(multiplier, progressPct, totalStreak) {
    const currColor = Visuals.getLevelColor(multiplier);
    const prevColor =
      multiplier >= 2
        ? Visuals.getLevelColor(multiplier - 1)
        : "rgba(0,0,0,0.35)";

    this.elm.multText.innerText = multiplier + "x";
    this.elm.multText.style.color = multiplier === 1 ? "#ffffff" : prevColor;

    if (this.elm.streakCount) {
      // Display the total running streak instead of "0/5"
      this.elm.streakCount.innerText = `Streak: ${totalStreak}`;
    }

    // Reset visual transition if dropping to 0%
    const isLevelReset = progressPct === 0 && multiplier > 1;
    if (isLevelReset) {
      this.elm.streakFill.style.transition = "none";
      this.elm.streakInner.style.transition = "none";
    } else {
      this.elm.streakFill.style.transition = "";
      this.elm.streakInner.style.transition = "";
    }

    const useHorizontal = this.isSmallScreen();
    const fillProp = useHorizontal ? "width" : "height";
    const resetProp = useHorizontal ? "height" : "width";

    this.elm.streakFill.style[fillProp] = `${progressPct}%`;
    this.elm.streakFill.style[resetProp] = "100%";

    this.elm.streakFill.style.background = currColor;
    this.elm.streakInner.style.backgroundColor = prevColor;

    if (isLevelReset) void this.elm.streakFill.offsetWidth;

    if (progressPct >= 100) {
      this.elm.streakContainer.style.boxShadow = `0 0 18px ${Visuals.colorToRgba(
        currColor,
        0.95
      )}`;
      this.elm.streakContainer.style.borderColor = currColor;
    } else if (multiplier > 1 || progressPct > 0) {
      this.elm.streakContainer.style.boxShadow = `0 0 10px ${Visuals.colorToRgba(
        currColor,
        0.6
      )}`;
      this.elm.streakContainer.style.borderColor = Visuals.colorToRgba(
        currColor,
        0.6
      );
    } else {
      this.elm.streakContainer.style.boxShadow = "";
      this.elm.streakContainer.style.borderColor = "";
    }

    this.elm.streakContainer.classList.remove(
      "shake-lvl-1",
      "shake-lvl-2",
      "shake-lvl-3",
      "shake-lvl-4"
    );
    let shakeLevel = 0;
    if (multiplier === 1) {
      if (progressPct >= 100) shakeLevel = 3;
      else if (progressPct >= 75) shakeLevel = 2;
      else if (progressPct >= 50) shakeLevel = 1;
    } else {
      if (progressPct >= 100) shakeLevel = 4;
      else if (progressPct >= 75) shakeLevel = 3;
      else if (progressPct >= 50) shakeLevel = 2;
      else shakeLevel = 1;
    }
    if (shakeLevel > 0)
      this.elm.streakContainer.classList.add(`shake-lvl-${shakeLevel}`);
  },

  renderTiles(word) {
    this.elm.tilesWrapper.innerHTML = "";
    const chars = word.char.split("");
    chars.forEach((char, index) => {
      const tile = document.createElement("div");
      tile.classList.add("majong-tile");
      tile.textContent = char;
      tile.style.opacity = "0";
      tile.style.transform = "translateY(-20px) rotateX(20deg)";

      setTimeout(() => {
        tile.style.transition = "all 0.3s ease-out";
        tile.style.opacity = "1";
        tile.style.transform = "translateY(0) rotateX(10deg)";
      }, index * 100);

      this.elm.tilesWrapper.appendChild(tile);
    });
  },

  shakeGameArea() {
    if (this.isSmallScreen()) return;
    this.elm.gameArea.style.transform = "scale(1.02)";
    setTimeout(() => (this.elm.gameArea.style.transform = "scale(1)"), 100);
  },

  shakeTiles() {
    const tiles = this.elm.tilesWrapper.querySelectorAll(".majong-tile");
    tiles.forEach((t) => {
      t.classList.remove("shake-effect");
      void t.offsetWidth;
      t.classList.add("shake-effect");
    });
  },

  explodeTiles() {
    const tiles = this.elm.tilesWrapper.querySelectorAll(".majong-tile");
    tiles.forEach((tile) => {
      tile.classList.add("explode-effect");
      const rect = tile.getBoundingClientRect();
      Visuals.spawnParticles(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        Game.state.multiplier,
        "explosion"
      );
    });
  },

  setWordTimer(percent) {
    if (this.elm.timerBar) this.elm.timerBar.style.width = `${percent}%`;
  },

  updateMobileInput(val) {
    if (this.elm.mobileDisplay)
      this.elm.mobileDisplay.textContent = val || "type pinyin...";
  },

  populateResults(
    score,
    levelKey,
    vocabList,
    answeredIndices,
    shownIndices,
    maxStreak
  ) {
    this.elm.finalScore.innerText = score;
    const bestEl = document.getElementById("end-best-streak");
    if (bestEl) bestEl.innerText = maxStreak;
    const levelDisplay = levelKey.toUpperCase().replace("HSK", "HSK ");
    const lvlEl = document.getElementById("end-level-val");
    if (lvlEl) lvlEl.innerText = levelDisplay;

    const correctList = document.getElementById("list-correct");
    const missedList = document.getElementById("list-missed");
    correctList.innerHTML = "";
    missedList.innerHTML = "";

    let correctCount = 0;
    let missedCount = 0;

    shownIndices.forEach((index) => {
      const word = vocabList[index];

      const item = document.createElement("div");
      item.className = "word-item";
      const pinyinDisplay = word.pinyin.replace("|", " / ");

      item.innerHTML = `
            <span class="ch">${word.char}</span>
            <span class="py">${pinyinDisplay}</span>
        `;

      if (answeredIndices.has(index)) {
        correctList.appendChild(item);
        correctCount++;
      } else {
        missedList.appendChild(item);
        missedCount++;
      }
    });
    // --------------------------

    const hCorrect = document.getElementById("header-correct");
    const hMissed = document.getElementById("header-missed");
    if (hCorrect) hCorrect.innerText = `Correct (${correctCount})`;
    if (hMissed) hMissed.innerText = `Missed (${missedCount})`;
  },

  buildKeyboard(callback) {
    if (!this.elm.keyboard) return;
    this.elm.keyboard.innerHTML = "";
    const rows = [
      ["1", "2", "3", "4", "⌫"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["z", "x", "c", "v", "b", "n", "m", "bzd"],
    ];

    rows.forEach((keys, i) => {
      const rowDiv = document.createElement("div");
      rowDiv.className = `row r${i}`;
      keys.forEach((k) => {
        const btn = document.createElement("div");
        btn.className = "key";
        if (["⌫", "bzd"].includes(k)) btn.classList.add("special");
        btn.textContent = k;

        btn.addEventListener("touchstart", (e) => {
          e.preventDefault();
          callback(k);
        });
        btn.addEventListener("mousedown", (e) => {
          e.preventDefault();
          callback(k);
        });

        rowDiv.appendChild(btn);
      });
      this.elm.keyboard.appendChild(rowDiv);
    });
  },

  toggleGameUI(active) {
    if (this.elm.timerBar && this.elm.timerBar.parentElement) {
      this.elm.timerBar.parentElement.style.display = active ? "block" : "none";
    }
    this.handleResize();
  },

  handleResize() {
    const isGameRunning =
      typeof Game !== "undefined" && Game.state && Game.state.isActive;
    const isMobile = this.isSmallScreen();

    const showMobileUI = isMobile && isGameRunning;

    if (this.elm.mobileDisplay)
      this.elm.mobileDisplay.style.display = showMobileUI ? "block" : "none";
    if (this.elm.keyboard)
      this.elm.keyboard.style.display = showMobileUI ? "flex" : "none";

    if (Game.state) {
      const pct = (Game.state.streak / Game.config.itemsPerLevel) * 100;
      this.updateStreak(Game.state.multiplier, pct, Game.state.currentStreak);
    }
  },
};

// ==============================
// 4. MAIN GAME CONTROLLER
// ==============================
const Game = {
  config: {
    totalTime: 10000,
    wordTime: 15000,
    itemsPerLevel: 5,
  },

  state: {
    isActive: false,
    isTransitioning: false,
    score: 0,
    multiplier: 1,
    streak: 0,
    currentStreak: 0,
    maxStreak: 0,
    vocabList: [],
    currentIndex: 0,
    answeredIndices: new Set(),
    shownIndices: new Set(),
    mobileInput: "",
    holdingFull: false,
    currentLevel: "hsk1",
  },

  timers: {
    game: null,
    word: null,
    particles: null,
    gameInterval: null,
  },

  init() {
    const mainMenu = document.getElementById("menu-main");
    const levelMenu = document.getElementById("menu-levels");

    // The consolidated overlay elements
    const rulesOverlay = document.getElementById("rules-overlay");
    const rulesTitle = document.getElementById("rules-title");
    const btnClose = document.getElementById("btn-rules-close");
    const btnStart = document.getElementById("btn-rules-start");

    // 2. Navigation Logic
    document.getElementById("btn-goto-levels").addEventListener("click", () => {
      mainMenu.classList.add("hidden");
      levelMenu.classList.remove("hidden");
    });

    document.getElementById("btn-back-menu").addEventListener("click", () => {
      levelMenu.classList.add("hidden");
      mainMenu.classList.remove("hidden");
    });

    // --- MODE A: HOW TO PLAY (From Main Menu) ---
    document.getElementById("btn-tutorial").addEventListener("click", () => {
      rulesTitle.innerText = "How to Play";
      if (btnClose) btnClose.classList.remove("hidden");
      if (btnStart) btnStart.classList.add("hidden");
      if (rulesOverlay) rulesOverlay.classList.remove("hidden");
    });

    if (btnClose) {
      btnClose.addEventListener("click", () => {
        rulesOverlay.classList.add("hidden");
      });
    }

    let pendingLevel = "hsk1";

    // 3. Level Selection Logic (Trigger Ready Screen)
    document.querySelectorAll(".majong-btn[data-lvl]").forEach((btn) => {
      btn.addEventListener("click", () => {
        pendingLevel = btn.dataset.lvl;

        levelMenu.classList.add("hidden");
        mainMenu.classList.remove("hidden");

        UI.toggleScreen("start", false);
        UI.elm.overlay.classList.remove("solid-bg");

        UI.toggleScreen("overlay", true);
        UI.toggleGameUI(true);

        // --- MODE B: READY SCREEN ---
        rulesTitle.innerText = "Ready?";
        if (btnClose) btnClose.classList.add("hidden");
        if (btnStart) btnStart.classList.remove("hidden");
        if (rulesOverlay) rulesOverlay.classList.remove("hidden");
      });
    });

    // 4. REAL START LISTENER (Inside Overlay)
    if (btnStart) {
      btnStart.addEventListener("click", () => {
        AudioEngine.init();
        rulesOverlay.classList.add("hidden");
        this.start(pendingLevel);
      });
    }

    // 5. Play Again
    document.getElementById("play-again-btn").addEventListener("click", () => {
      UI.toggleScreen("end", false);
      UI.toggleScreen("start", true);
      UI.toggleScreen("overlay", true);
      UI.elm.overlay.classList.add("solid-bg");
    });

    // 6. Game Input
    UI.elm.input.addEventListener("input", (e) => {
      if (
        !this.state.isActive ||
        this.state.isTransitioning ||
        UI.isSmallScreen()
      )
        return;
      this.checkAnswer(e.target.value);
    });

    UI.buildKeyboard((key) => this.handleVirtualKey(key));
    window.addEventListener("resize", () => UI.handleResize());

    // Initial setup
    UI.handleResize();
    UI.elm.overlay.classList.add("solid-bg");
  },

  start(levelKey = "hsk1") {
    this.state.currentLevel = levelKey;
    this.state.score = 0;
    this.state.multiplier = 1;
    this.state.streak = 0;
    this.state.currentStreak = 0;
    this.state.maxStreak = 0;
    this.state.mobileInput = "";
    this.state.answeredIndices.clear();
    this.state.shownIndices.clear();
    this.state.isActive = true;
    this.state.isTransitioning = false;

    this.stopAllTimers();

    this.state.vocabList = VocabData.getList(levelKey);

    UI.elm.input.value = "";
    UI.updateMobileInput("");
    UI.updateScore(0);

    // Hide Overlay Wrapper and sub-screens
    // Note: 'rules-overlay' is hidden by the button click listener already
    UI.toggleScreen("overlay", false);
    UI.toggleScreen("start", false);
    UI.toggleScreen("end", false);

    UI.toggleGameUI(true);

    if (!UI.isSmallScreen()) UI.elm.input.focus();

    const endTime = Date.now() + this.config.totalTime;
    this.timers.gameInterval = setInterval(() => {
      const left = Math.max(0, endTime - Date.now());
      UI.updateTimerDisplay(left);
      if (left <= 0) this.endGame();
    }, 250);

    this.timers.particles = setInterval(() => this.emitParticles(), 100);
    this.nextWord();
  },

  endGame() {
    this.state.isActive = false;
    this.stopAllTimers();

    UI.populateResults(
      this.state.score,
      this.state.currentLevel,
      this.state.vocabList,
      this.state.answeredIndices,
      this.state.shownIndices,
      this.state.maxStreak
    );

    UI.toggleGameUI(false);

    UI.toggleScreen("end", true);
    UI.toggleScreen("overlay", true);
    UI.elm.input.blur();
  },

  stopAllTimers() {
    clearInterval(this.timers.word);
    clearInterval(this.timers.gameInterval);
    clearInterval(this.timers.particles);
    clearTimeout(this.timers.game);
  },

  nextWord() {
    if (!this.state.isActive) return;
    this.state.isTransitioning = false;

    const available = this.state.vocabList
      .map((_, i) => i)
      .filter((i) => !this.state.answeredIndices.has(i));

    if (available.length === 0) {
      this.endGame();
      return;
    }

    this.state.currentIndex =
      available[Math.floor(Math.random() * available.length)];
    this.state.shownIndices.add(this.state.currentIndex);

    const wordObj = this.state.vocabList[this.state.currentIndex];

    UI.renderTiles(wordObj);

    let timeLeft = this.config.wordTime;
    UI.setWordTimer(100);

    clearInterval(this.timers.word);
    let lastTime = Date.now();

    this.timers.word = setInterval(() => {
      if (!this.state.isActive || this.state.isTransitioning) return;
      const now = Date.now();
      timeLeft -= now - lastTime;
      lastTime = now;

      UI.setWordTimer((timeLeft / this.config.wordTime) * 100);

      if (timeLeft <= 0) this.handleIncorrect();
    }, 16);
  },

  checkAnswer(rawInput) {
    const input = rawInput.toLowerCase().replace(/\s/g, "");

    if (input === "bzd" || input === "buzhidao") {
      this.skipWord();
      return;
    }

    const targetPinyin = this.state.vocabList[this.state.currentIndex].pinyin;
    const targets = targetPinyin.includes("|")
      ? targetPinyin.split("|")
      : [targetPinyin];

    if (targets.some((t) => t.toLowerCase() === input)) {
      this.handleCorrect();
    }
  },

  handleVirtualKey(key) {
    if (!this.state.isActive || this.state.isTransitioning) return;

    if (key === "⌫") {
      this.state.mobileInput = this.state.mobileInput.slice(0, -1);
    } else if (key === "bzd") {
      this.skipWord();
      return;
    } else {
      this.state.mobileInput += key;
    }

    UI.updateMobileInput(this.state.mobileInput);
    this.checkAnswer(this.state.mobileInput);
  },

  skipWord() {
    if (this.state.isTransitioning) return;
    AudioEngine.playIncorrect();
    this.state.isTransitioning = true;
    clearInterval(this.timers.word);

    this.state.multiplier = 1;
    this.state.streak = 0;
    this.state.currentStreak = 0;
    UI.updateStreak(1, 0, 0);
    // ---------------------------------------

    UI.elm.input.value = "";
    this.state.mobileInput = "";
    UI.updateMobileInput("");

    setTimeout(() => {
      this.state.isTransitioning = false;
      this.nextWord();
    }, 200);
  },

  handleCorrect() {
    clearInterval(this.timers.word);
    AudioEngine.playCorrect();

    this.state.isTransitioning = true;
    this.state.answeredIndices.add(this.state.currentIndex);

    this.state.score += 10 * this.state.multiplier;
    this.state.streak++;
    this.state.currentStreak++;

    this.state.maxStreak = Math.max(
      this.state.maxStreak,
      this.state.currentStreak
    );

    UI.updateScore(this.state.score);
    UI.shakeGameArea();
    UI.explodeTiles();

    UI.elm.input.value = "";
    this.state.mobileInput = "";
    UI.updateMobileInput("");

    if (this.state.streak >= this.config.itemsPerLevel) {
      this.state.streak = this.config.itemsPerLevel;

      UI.updateStreak(this.state.multiplier, 100, this.state.currentStreak);

      setTimeout(() => {
        this.state.multiplier++;
        this.state.streak = 0;

        UI.updateStreak(this.state.multiplier, 0, this.state.currentStreak);

        setTimeout(() => this.nextWord(), 150);
      }, 400);
    } else {
      const pct = (this.state.streak / this.config.itemsPerLevel) * 100;
      UI.updateStreak(this.state.multiplier, pct, this.state.currentStreak);
      setTimeout(() => this.nextWord(), 300);
    }
  },

  handleIncorrect() {
    if (!this.state.isActive) return;
    AudioEngine.playIncorrect();

    this.state.isTransitioning = true;
    clearInterval(this.timers.word);

    UI.shakeTiles();

    this.state.multiplier = 1;
    this.state.streak = 0;
    this.state.currentStreak = 0;
    UI.updateStreak(1, 0, 0);

    this.state.mobileInput = "";
    UI.updateMobileInput("");

    setTimeout(() => {
      UI.elm.input.value = "";
      this.nextWord();
    }, 600);
  },

  emitParticles() {
    if (!this.state.isActive || this.state.multiplier <= 1) return;

    const rect = UI.elm.streakContainer.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + (UI.isSmallScreen() ? rect.height / 2 : 0);

    Visuals.spawnParticles(x, y, this.state.multiplier, "fountain");
  },
};

// Initialize
Game.init();
