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
    { char: "高兴", pinyin: "gao1xing4" }
];

// Config
const ITEMS_PER_LEVEL = 5; 

// Colors
const LEVEL_CONFIG = [
    { bg: '#444', fill: 'linear-gradient(to top, #ff8c00, #ffd700)' }, 
    { bg: '#ff4500', fill: 'linear-gradient(to top, #00f3ff, #0088ff)' }, 
    { bg: '#0088ff', fill: 'linear-gradient(to top, #ff0055, #ff00aa)' }, 
    { bg: '#ff0055', fill: 'linear-gradient(to top, #ffd700, #fff)' }     
];

let currentWordIndex = 0;
let score = 0;
let multiplier = 1;
let streakInLevel = 0; 

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

startBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    resetCombo();
    updateScore();
    overlay.classList.add('hidden');
    inputField.value = '';
    inputField.focus();
    isGameActive = true;
    nextWord();
    
    clearInterval(particleInterval);
    particleInterval = setInterval(emitContinuousParticles, 100);
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

    if (streakInLevel >= ITEMS_PER_LEVEL) {
        streakInLevel = 0;
        multiplier++;
        streakContainer.style.transform = "scale(1.3)";
        setTimeout(() => streakContainer.style.transform = "scale(1)", 200);
    }

    updateScore();
    updateComboVisuals();

    setTimeout(() => {
        nextWord();
    }, 300); // Faster turnaround
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
    const pct = (streakInLevel / ITEMS_PER_LEVEL) * 100;
    streakFill.style.height = `${pct}%`;

    let styleIndex = Math.min(multiplier - 1, LEVEL_CONFIG.length - 1);
    streakInner.style.backgroundColor = LEVEL_CONFIG[styleIndex].bg;
    streakFill.style.background = LEVEL_CONFIG[styleIndex].fill;

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