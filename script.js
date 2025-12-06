const vocabList = [
    { char: "你好", pinyin: "ni3hao3" },
    { char: "谢谢", pinyin: "xie4xie5" },
    { char: "爸爸", pinyin: "ba4ba5" },
    { char: "妈妈", pinyin: "ma1ma5" },
    { char: "喜欢", pinyin: "xi3huan1" },
    { char: "中国", pinyin: "zhong1guo2" },
    { char: "再见", pinyin: "zai4jian4" },
    { char: "名字", pinyin: "ming2zi4" },
    { char: "什么", pinyin: "shen2me5" },
    { char: "高兴", pinyin: "gao1xing4" },
    { char: "是", pinyin: "shi4" },
    { char: "的", pinyin: "de5" },
    { char: "和", pinyin: "he2" },
    { char: "一", pinyin: "yi1" },
    { char: "个", pinyin: "ge4" },
    { char: "人", pinyin: "ren2" },
    { char: "大", pinyin: "da4" },
    { char: "小", pinyin: "xiao3" },
    { char: "多", pinyin: "duo1" },
    { char: "少", pinyin: "shao3" },
    { char: "好", pinyin: "hao3" },
    { char: "不好", pinyin: "bu4hao3" },
    { char: "老", pinyin: "lao3" },
    { char: "新", pinyin: "xin1" },
    { char: "长", pinyin: "chang2" },
    { char: "短", pinyin: "duan3" },
    { char: "高", pinyin: "gao1" },
    { char: "矮", pinyin: "ai3" },
    { char: "胖", pinyin: "pang4" },
    { char: "瘦", pinyin: "shou4" },
    { char: "热", pinyin: "re4" },
    { char: "冷", pinyin: "leng3" },
    { char: "男", pinyin: "nan2" },
    { char: "女", pinyin: "nv3" },
    { char: "孩子", pinyin: "hai2zi5" },
    { char: "学生", pinyin: "xue2sheng1" },
    { char: "老师", pinyin: "lao3shi1" },
    { char: "朋友", pinyin: "peng2you5" },
    { char: "家", pinyin: "jia1" },
    { char: "学校", pinyin: "xue2xiao4" },
    { char: "医院", pinyin: "yi1yuan4" },
    { char: "商店", pinyin: "shang1dian4" },
    { char: "公园", pinyin: "gong1yuan2" },
    { char: "公司", pinyin: "gong1si1" },
    { char: "工作", pinyin: "gong1zuo4" },
    { char: "学习", pinyin: "xue2xi2" },
    { char: "吃饭", pinyin: "chi1fan4" },
    { char: "睡觉", pinyin: "shui4jiao4" },
    { char: "走", pinyin: "zou3" },
    { char: "来", pinyin: "lai2" },
    { char: "去", pinyin: "qu4" },
    { char: "坐", pinyin: "zuo4" },
    { char: "站", pinyin: "zhan4" },
    { char: "开", pinyin: "kai1" },
    { char: "关", pinyin: "guan1" },
    { char: "找", pinyin: "zhao3" },
    { char: "看", pinyin: "kan4" },
    { char: "听", pinyin: "ting1" },
    { char: "说", pinyin: "shuo1" },
    { char: "读", pinyin: "du2" },
    { char: "写", pinyin: "xie3" },
    { char: "问", pinyin: "wen4" },
    { char: "答", pinyin: "da2" },
    { char: "买", pinyin: "mai3" },
    { char: "卖", pinyin: "mai4" },
    { char: "给", pinyin: "gei3" },
    { char: "拿", pinyin: "na2" },
    { char: "要", pinyin: "yao4" },
    { char: "想", pinyin: "xiang3" },
    { char: "知道", pinyin: "zhi1dao4" },
    { char: "认识", pinyin: "ren4shi5" },
    { char: "会", pinyin: "hui4" },
    { char: "能", pinyin: "neng2" },
    { char: "可以", pinyin: "ke3yi3" },
    { char: "应该", pinyin: "ying1gai1" },
    { char: "开始", pinyin: "kai1shi3" },
    { char: "结束", pinyin: "jie1shu5" },
    { char: "今天", pinyin: "jin1tian1" },
    { char: "明天", pinyin: "ming2tian1" },
    { char: "昨天", pinyin: "zuo2tian1" },
    { char: "早上", pinyin: "zao3shang5" },
    { char: "中午", pinyin: "zhong1wu3" },
    { char: "晚上", pinyin: "wan3shang5" },
    { char: "现在", pinyin: "xian4zai4" },
    { char: "时候", pinyin: "shi2hou5" },
    { char: "月", pinyin: "yue4" },
    { char: "年", pinyin: "nian2" },
    { char: "天", pinyin: "tian1" },
    { char: "星期", pinyin: "xing1qi1" },
    { char: "点", pinyin: "dian3" },
    { char: "分", pinyin: "fen1" },
    { char: "钱", pinyin: "qian2" },
    { char: "多少钱", pinyin: "duo1shao3qian2" },
    { char: "对", pinyin: "dui4" },
    { char: "错", pinyin: "cuo4" },
    { char: "是的", pinyin: "shi4de5" },
    { char: "不是", pinyin: "bu4shi4" }
];

// Config
const ITEMS_PER_LEVEL = 5; 

const TOTAL_GAME_TIME = 2 * 60 * 1000; // 60000 ms
let gameTimerTimeout = null;
let gameTimerInterval = null;
let gameEndTimestamp = null;

// Level color handling (infinitely scalable)
const LEVEL_PALETTE = [
    '#ffd700', // 1 - gold
    '#ff4500', // 2 - orange
    '#00f3ff', // 3 - neon blue
    '#ff0055', // 4 - neon pink
    '#8a2be2', // 5 - purple
    '#00ff7f', // 6 - spring green
    '#ff69b4'  // 7 - hot pink
];

function getLevelColor(level) {
    if (!level || level < 1) return LEVEL_PALETTE[0];
    if (level <= LEVEL_PALETTE.length) return LEVEL_PALETTE[level - 1];
    // generate a hue-based color for larger levels
    const hue = (level * 47) % 360;
    return `hsl(${hue}, 85%, 55%)`;
}

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function colorToRgba(color, alpha = 1) {
    if (color.startsWith('#')) {
        const { r, g, b } = hexToRgb(color);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (color.startsWith('hsl')) {
        // turn hsl(...) into hsla(..., alpha)
        return color.replace('hsl(', 'hsla(').replace(')', `, ${alpha})`);
    }
    // fallback: return the color unchanged (alpha won't be applied)
    return color;
}

let currentWordIndex = 0;
let score = 0;
let multiplier = 1;
let streakInLevel = 0; 

let holdingFull = false; // when true, keep the bar visually full until we clear it

let timeLeft = 0;
let timerInterval;
let particleInterval; 
let isGameActive = false;
let isTransitioning = false;

// DOM Elements
const tilesWrapper = document.getElementById('tiles-wrapper');
const inputField = document.getElementById('pinyin-input');
const timerBar = document.getElementById('timer-bar');
const scoreVal = document.getElementById('score-val');
const gameArea = document.getElementById('game-area');

const streakContainer = document.getElementById('streak-container');
const streakInner = document.getElementById('streak-inner');
const streakFill = document.getElementById('streak-fill');
const multText = document.getElementById('mult-text');
const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('start-btn');

// NEW DOM refs for total timer + end screen
const totalTimerEl = document.getElementById('total-timer');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const finalScoreEl = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');

startBtn.addEventListener('click', startGame);

// NEW: play again wiring
if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => {
        // hide overlay and restart
        overlay.classList.add('hidden');
        startGame();
    });
}

function startGame() {
    // clear previous timers
    clearTimeout(gameTimerTimeout);
    clearInterval(gameTimerInterval);
    clearInterval(timerInterval);
    clearInterval(particleInterval);

    score = 0;
    resetCombo();
    updateScore();

    // ensure overlay state
    if (startScreen) startScreen.style.display = 'none';
    if (endScreen) endScreen.style.display = 'none';
    overlay.classList.add('hidden');

    inputField.value = '';
    inputField.focus();
    isGameActive = true;
    nextWord();

    clearInterval(particleInterval);
    particleInterval = setInterval(emitContinuousParticles, 100);

    // start overall game timer
    gameEndTimestamp = Date.now() + TOTAL_GAME_TIME;
    gameTimerTimeout = setTimeout(() => endGame(), TOTAL_GAME_TIME);

    // update visible timer immediately and regularly
    updateTotalTimerDisplay();
    gameTimerInterval = setInterval(updateTotalTimerDisplay, 250);
}

// NEW: update MM:SS display
function updateTotalTimerDisplay() {
    if (!totalTimerEl || !gameEndTimestamp) return;
    const remaining = Math.max(0, gameEndTimestamp - Date.now());
    const seconds = Math.ceil(remaining / 1000);
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    totalTimerEl.innerText = `${mm}:${ss}`;
}

// NEW: end game and show end-screen
function endGame() {
    isGameActive = false;
    isTransitioning = false;

    clearInterval(timerInterval);
    clearInterval(particleInterval);
    clearTimeout(gameTimerTimeout);
    clearInterval(gameTimerInterval);

    // ensure top timer shows 00:00
    if (totalTimerEl) totalTimerEl.innerText = '00:00';

    // clear active tile effects
    const tiles = document.querySelectorAll('.majong-tile');
    tiles.forEach(t => t.classList.remove('explode-effect', 'shake-effect'));

    // show overlay end-screen
    if (finalScoreEl) finalScoreEl.innerText = score;
    if (startScreen) startScreen.style.display = 'none';
    if (endScreen) endScreen.style.display = 'block';
    overlay.classList.remove('hidden');

    inputField.blur();
}

function resetCombo() {
    multiplier = 1;
    streakInLevel = 0;
    updateComboVisuals();
}

function nextWord() {
    if (!isGameActive) return;
    isTransitioning = false;
    currentWordIndex = Math.floor(Math.random() * vocabList.length);
    const wordObj = vocabList[currentWordIndex];

    // Render Tiles
    tilesWrapper.innerHTML = '';
    const chars = wordObj.char.split('');
    chars.forEach((char, index) => {
        const tile = document.createElement('div');
        tile.classList.add('majong-tile');
        tile.textContent = char;
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(-20px) rotateX(20deg)';
        setTimeout(() => {
            tile.style.transition = 'all 0.3s ease-out';
            tile.style.opacity = '1';
            tile.style.transform = 'translateY(0) rotateX(10deg)';
        }, index * 100); 
        tilesWrapper.appendChild(tile);
    });

    // Timer (15s Fixed)
    timeLeft = 15000; 
    const totalTime = 15000;
    clearInterval(timerInterval);
    timerBar.style.width = '100%';
    let lastTime = Date.now();

    timerInterval = setInterval(() => {
        if(!isGameActive || isTransitioning) return;
        let now = Date.now();
        let delta = now - lastTime;
        lastTime = now;
        timeLeft -= delta;
        let pct = (timeLeft / totalTime) * 100;
        timerBar.style.width = `${pct}%`;
        if (timeLeft <= 0) handleIncorrect(true);
    }, 16);
}

inputField.addEventListener('input', (e) => {
    if(!isGameActive || isTransitioning) return;
    const val = e.target.value.toLowerCase().replace(/\s/g, '');
    checkAnswer(val);
});

function checkAnswer(input) {
    const targetPinyin = vocabList[currentWordIndex].pinyin;
    const cleanInput = input.replace(/[05]/g, '');
    const cleanTarget = targetPinyin.replace(/[05]/g, '');

    if (cleanInput === cleanTarget) {
        handleCorrect();
    }
}

function handleCorrect() {
    clearInterval(timerInterval);
    isTransitioning = true;
    
    // 1. IMPACT SHAKE
    gameArea.style.transform = "scale(1.02)";
    setTimeout(() => gameArea.style.transform = "scale(1)", 100);

    // 2. EXPLODE TILES
    const tiles = document.querySelectorAll('.majong-tile');
    tiles.forEach(tile => {
        tile.classList.add('explode-effect');
        spawnDebrisExplosion(tile); // New Juicy Explosion
    });

    inputField.value = '';
    score += 10 * multiplier;
    streakInLevel++;

    // If completing the streak level, briefly show a full bar + glow,
    // then increment multiplier and reset the streak.
    if (streakInLevel >= ITEMS_PER_LEVEL) {
        // show and hold full visual state so color + glow persist
        streakInLevel = ITEMS_PER_LEVEL;
        holdingFull = true;
        updateScore();
        updateComboVisuals();

        streakContainer.style.transform = "scale(1.3)";
        // after a short display, clear the hold, bump multiplier and continue
        setTimeout(() => {
            holdingFull = false; // allow visuals to update normally
            streakInLevel = 0;
            multiplier++;
            streakContainer.style.transform = "scale(1)";

            // compute and apply the new base color BEFORE collapsing the fill
            const newBase = (multiplier >= 2) ? getLevelColor(multiplier - 1) : 'rgba(0,0,0,0.35)';
            streakInner.style.backgroundColor = newBase;

            // Prevent the fill from animating downward visibly by collapsing
            // the fill instantly (disable transition briefly), then restore.
            try {
                const useHorizontal = window.matchMedia('(max-width: 800px)').matches;
                // store current inline transition so we can restore it
                const prevTransition = streakFill.style.transition;
                // disable transition and set size to 0 immediately
                streakFill.style.transition = 'none';
                if (useHorizontal) streakFill.style.width = '0%';
                else streakFill.style.height = '0%';
                // force reflow so the collapse paints without transition
                void streakFill.offsetWidth;
                // restore previous transition (or empty string)
                streakFill.style.transition = prevTransition || '';
            } catch (e) {
                // ignore if something goes wrong with transitions
            }

            // update visuals now that multiplier/reset happened
            updateComboVisuals();
            // continue to next word shortly after
            setTimeout(() => nextWord(), 160);
        }, 420); // slightly longer so user sees the filled color + glow
    } else {
        updateScore();
        updateComboVisuals();
        setTimeout(() => nextWord(), 300);
    }
}

function handleIncorrect(isTimeout = false) {
    if (!isGameActive || isTransitioning) return;
    isTransitioning = true;
    clearInterval(timerInterval);

    const tiles = document.querySelectorAll('.majong-tile');
    tiles.forEach(tile => {
        tile.classList.remove('shake-effect');
        void tile.offsetWidth;
        tile.classList.add('shake-effect');
    });

    resetCombo();
    
    setTimeout(() => {
        inputField.value = '';
        nextWord();
    }, 600);
}

function updateScore() {
    scoreVal.innerText = score;
}

function updateComboVisuals() {
    multText.innerText = multiplier + "x";
    multText.style.color = getMultColor(multiplier);
    // If we're holding the full visual (completed streak), force pct to 100 so
    // the bar stays filled with the current level color until we release it.
    const pct = holdingFull ? 100 : (streakInLevel / ITEMS_PER_LEVEL) * 100;
    // Support horizontal layout on narrow screens: use width instead of height
    const useHorizontal = window.matchMedia('(max-width: 800px)').matches;
    if (useHorizontal) {
        streakFill.style.width = `${pct}%`;
        streakFill.style.height = '100%';
    } else {
        streakFill.style.height = `${pct}%`;
        streakFill.style.width = '100%';
    }

    // color for this level (single solid color)
    const fillColor = getLevelColor(multiplier); // color for the progressing fill (current level)
    // base color should show the previous level so the next level "paints over" it
    const baseColor = (multiplier >= 2) ? getLevelColor(multiplier - 1) : 'rgba(0,0,0,0.35)';
    streakFill.style.background = fillColor;
    // set the inner/base to previous level (or neutral for level 1)
    streakInner.style.backgroundColor = baseColor;

    // If the bar is full, add a glow of the level color around the container
    if (pct >= 100) {
        // when full, glow using the fill (current level) color
        streakFill.style.background = fillColor;
        streakContainer.style.boxShadow = `0 0 18px ${colorToRgba(fillColor, 0.95)}, 0 0 36px ${colorToRgba(fillColor, 0.4)}`;
        streakContainer.style.borderColor = fillColor;
        streakInner.style.boxShadow = `inset 0 0 8px ${colorToRgba(fillColor, 0.25)}`;
    }

    streakContainer.classList.remove('shake-lvl-1', 'shake-lvl-2', 'shake-lvl-3');
    let shakeIntensity = 0;
    if (multiplier >= 2) shakeIntensity = 1;
    if (multiplier >= 3) shakeIntensity = 2;
    if (multiplier >= 5) shakeIntensity = 3;
    if (pct > 80 && shakeIntensity < 3) shakeIntensity++;
    if (pct > 50 && shakeIntensity === 0 && streakInLevel > 0) shakeIntensity = 1;

    if (shakeIntensity === 1) streakContainer.classList.add('shake-lvl-1');
    if (shakeIntensity === 2) streakContainer.classList.add('shake-lvl-2');
    if (shakeIntensity >= 3) streakContainer.classList.add('shake-lvl-3');
}

function getMultColor(m) {
    if (m === 1) return '#fff';
    if (m === 2) return '#ff4500';
    if (m === 3) return '#00f3ff';
    if (m >= 4) return '#ff0055';
    return '#fff';
}

// --- JUICY PARTICLE SYSTEM ---

function emitContinuousParticles() {
    if (!isGameActive) return;
    if (multiplier <= 1) return;
    const rect = streakContainer.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top; 
    const count = Math.min(multiplier, 5); 

    let colors = ['#fff'];
    if(multiplier === 2) colors = ['#ff8c00', '#ffd700'];
    else if(multiplier === 3) colors = ['#00f3ff', '#fff'];
    else if(multiplier >= 4) colors = ['#ff0055', '#ffd700', '#00f3ff'];

    for(let i=0; i<count; i++) {
        // Fountain (Up and out)
        createPhysParticle(x, y, colors, -Math.PI/2, 20, 80, true);
    }
}

// The Big Explosion
function spawnDebrisExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // 1. Sparks (Fast, glowy, vanish fast)
    for (let i = 0; i < 20; i++) {
        const colors = ['#ffd700', '#fff', '#ffeb3b'];
        createPhysParticle(centerX, centerY, colors, null, 100, 200, false, 'spark');
    }

    // 2. Tile Shards (Slower, gravity, rotation, persist longer)
    for (let i = 0; i < 15; i++) {
        // Mix of Green (Back) and Ivory (Face)
        const isGreen = Math.random() > 0.5;
        const color = isGreen ? ['#2e8b57', '#062f1b'] : ['#fdf6e3', '#e0d6c1'];
        createPhysParticle(centerX, centerY, color, null, 50, 150, true, 'shard');
    }
}

function createPhysParticle(x, y, colors, forcedAngle, minVel, maxVel, gravity, type = 'spark') {
    const p = document.createElement('div');
    p.classList.add('particle');
    document.body.appendChild(p);

    // Style based on type
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.background = color;
    p.style.left = x + 'px';
    p.style.top = y + 'px';

    if (type === 'shard') {
        const size = Math.random() * 8 + 4; // Chunkier
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.borderRadius = '2px'; // Square-ish
    } else {
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.borderRadius = '50%';
        p.style.boxShadow = `0 0 10px ${color}`; // Glow
    }

    // Physics Calculation
    const angle = forcedAngle !== null 
        ? forcedAngle + (Math.random() * 1 - 0.5) 
        : Math.random() * Math.PI * 2;
        
    const velocity = Math.random() * (maxVel - minVel) + minVel;
    
    // Distance to travel
    const tx = Math.cos(angle) * velocity;
    let ty = Math.sin(angle) * velocity;
    
    // Add Gravity to Y axis
    if (gravity) ty += 150; 

    // Rotation for shards
    const rot = type === 'shard' ? (Math.random() * 720 - 360) : 0;

    const duration = type === 'shard' ? 800 : 500;

    const animation = p.animate([
        { transform: `translate(0,0) rotate(0deg) scale(1)`, opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg) scale(0)`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Decelerate explosion
    });

    animation.onfinish = () => p.remove();
}

document.body.addEventListener('click', () => {
    if(isGameActive) inputField.focus();
});