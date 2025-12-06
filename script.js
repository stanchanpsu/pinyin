const vocabList = [
    { char: "你好", pinyin: "ni3hao3" },
    { char: "谢谢", pinyin: "xie4xie" },
    { char: "爸爸", pinyin: "ba4ba" },
    { char: "妈妈", pinyin: "ma1ma" },
    { char: "喜欢", pinyin: "xi3huan1" },
    { char: "中国", pinyin: "zhong1guo2" },
    { char: "再见", pinyin: "zai4jian4" },
    { char: "名字", pinyin: "ming2zi4" },
    { char: "什么", pinyin: "shen2me" },
    { char: "高兴", pinyin: "gao1xing4" },
    { char: "是", pinyin: "shi4" },
    { char: "的", pinyin: "de" },
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
    { char: "长", pinyin: "chang2|zhang1" },
    { char: "短", pinyin: "duan3" },
    { char: "高", pinyin: "gao1" },
    { char: "矮", pinyin: "ai3" },
    { char: "胖", pinyin: "pang4" },
    { char: "瘦", pinyin: "shou4" },
    { char: "热", pinyin: "re4" },
    { char: "冷", pinyin: "leng3" },
    { char: "男", pinyin: "nan2" },
    { char: "女", pinyin: "nv3" },
    { char: "孩子", pinyin: "hai2zi" },
    { char: "学生", pinyin: "xue2sheng1" },
    { char: "老师", pinyin: "lao3shi1" },
    { char: "朋友", pinyin: "peng2you" },
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
    { char: "认识", pinyin: "ren4shi" },
    { char: "会", pinyin: "hui4" },
    { char: "能", pinyin: "neng2" },
    { char: "可以", pinyin: "ke3yi3" },
    { char: "应该", pinyin: "ying1gai1" },
    { char: "开始", pinyin: "kai1shi3" },
    { char: "结束", pinyin: "jie1shu" },
    { char: "今天", pinyin: "jin1tian1" },
    { char: "明天", pinyin: "ming2tian1" },
    { char: "昨天", pinyin: "zuo2tian1" },
    { char: "早上", pinyin: "zao3shang" },
    { char: "中午", pinyin: "zhong1wu3" },
    { char: "晚上", pinyin: "wan3shang" },
    { char: "现在", pinyin: "xian4zai4" },
    { char: "时候", pinyin: "shi2hou" },
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
    { char: "是的", pinyin: "shi4de" },
    { char: "不是", pinyin: "bu4shi4" }
];

// HSK Level 2 vocabulary (expanded list)
const vocabListHSK2 = [
    { char: "哥哥", pinyin: "ge1ge" },
    { char: "姐姐", pinyin: "jie3jie" },
    { char: "弟弟", pinyin: "di4di" },
    { char: "妹妹", pinyin: "mei4mei" },
    { char: "儿子", pinyin: "er2zi" },
    { char: "女儿", pinyin: "nv3er2" },
    { char: "生日", pinyin: "sheng1ri4" },
    { char: "快乐", pinyin: "kuai4le" },
    { char: "礼物", pinyin: "li3wu4" },
    { char: "礼貌", pinyin: "li3mao4" },
    { char: "电影", pinyin: "dian4ying3" },
    { char: "音乐", pinyin: "yin1yue4" },
    { char: "老师", pinyin: "lao3shi1" },
    { char: "学生", pinyin: "xue2sheng1" },
    { char: "同学", pinyin: "tong2xue2" },
    { char: "学校", pinyin: "xue2xiao4" },
    { char: "考试", pinyin: "kao3shi4" },
    { char: "成绩", pinyin: "cheng2ji4" },
    { char: "练习", pinyin: "lian4xi2" },
    { char: "问题", pinyin: "wen4ti2" },
    { char: "回答", pinyin: "hui2da2" },
    { char: "准备", pinyin: "zhun3bei4" },
    { char: "帮助", pinyin: "bang1zhu4" },
    { char: "觉得", pinyin: "jue2de" },
    { char: "想要", pinyin: "xiang3yao4" },
    { char: "需要", pinyin: "xu1yao4" },
    { char: "可以", pinyin: "ke3yi3" },
    { char: "应该", pinyin: "ying1gai1" },
    { char: "知道", pinyin: "zhi1dao4" },
    { char: "认识", pinyin: "ren4shi" },
    { char: "喜欢", pinyin: "xi3huan1" },
    { char: "爱", pinyin: "ai4" },
    { char: "听说", pinyin: "ting1shuo1" },
    { char: "看见", pinyin: "kan4jian4" },
    { char: "觉得", pinyin: "jue2de" },
    { char: "运动", pinyin: "yun4dong4" },
    { char: "跑步", pinyin: "pao3bu4" },
    { char: "游泳", pinyin: "you2yong3" },
    { char: "跳舞", pinyin: "tiao4wu3" },
    { char: "唱歌", pinyin: "chang4ge1" },
    { char: "足球", pinyin: "zu2qiu2" },
    { char: "篮球", pinyin: "lan2qiu2" },
    { char: "工作", pinyin: "gong1zuo4" },
    { char: "公司", pinyin: "gong1si1" },
    { char: "同事", pinyin: "tong2shi4" },
    { char: "经理", pinyin: "jing1li3" },
    { char: "休息", pinyin: "xiu1xi" },
    { char: "旅行", pinyin: "lv3xing2" },
    { char: "酒店", pinyin: "jiu3dian4" },
    { char: "飞机", pinyin: "fei1ji1" },
    { char: "火车", pinyin: "huo3che1" },
    { char: "火车站", pinyin: "huo3che1zhan4" },
    { char: "机场", pinyin: "ji1chang3" },
    { char: "车站", pinyin: "che1zhan4" },
    { char: "公共汽车", pinyin: "gong1gong4qi4che1" },
    { char: "地铁", pinyin: "di4tie3" },
    { char: "商店", pinyin: "shang1dian4" },
    { char: "超市", pinyin: "chao1shi4" },
    { char: "饭馆", pinyin: "fan4guan3" },
    { char: "餐厅", pinyin: "can1ting1" },
    { char: "买单", pinyin: "mai3dan1" },
    { char: "厕所", pinyin: "ce4suo3" },
    { char: "医院", pinyin: "yi1yuan4" },
    { char: "医生", pinyin: "yi1sheng1" },
    { char: "病人", pinyin: "bing4ren2" },
    { char: "感冒", pinyin: "gan3mao4" },
    { char: "药店", pinyin: "yao4dian4" },
    { char: "药", pinyin: "yao4" },
    { char: "健康", pinyin: "jian4kang1" },
    { char: "水果", pinyin: "shui3guo3" },
    { char: "苹果", pinyin: "ping2guo3" },
    { char: "香蕉", pinyin: "xiang1jiao1" },
    { char: "西瓜", pinyin: "xi1gua1" },
    { char: "米饭", pinyin: "mi3fan4" },
    { char: "面条", pinyin: "mian4tiao2" },
    { char: "包子", pinyin: "bao1zi" },
    { char: "鸡蛋", pinyin: "ji1dan4" },
    { char: "牛奶", pinyin: "niu2nai3" },
    { char: "茶", pinyin: "cha2" },
    { char: "咖啡", pinyin: "ka1fei1" },
    { char: "电影票", pinyin: "dian4ying3piao4" },
    { char: "舒服", pinyin: "shu1fu2" },
    { char: "开心", pinyin: "kai1xin1" },
    { char: "生气", pinyin: "sheng1qi4" },
    { char: "累", pinyin: "lei4" },
    { char: "饿", pinyin: "e4" },
    { char: "渴", pinyin: "ke3" },
    { char: "忙", pinyin: "mang2" },
    { char: "觉得", pinyin: "jue2de" }
];

// activeVocab points to the current vocabulary list (HSK1 or HSK2)
let activeVocab = vocabList;

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
// Track which vocab indices the player has already answered correctly this game
let answeredSet = new Set();

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
const vocabSelect = document.getElementById('vocab-select');
const mobileDisplay = document.getElementById('mobile-input-display');
const onscreenKeyboard = document.getElementById('onscreen-keyboard');
let mobileInputValue = '';

function isSmallScreen() {
    return window.matchMedia('(max-width: 800px)').matches;
}

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
    // pick the active vocab list from the start-screen selector
    if (vocabSelect && vocabSelect.value === 'hsk2') activeVocab = vocabListHSK2;
    else activeVocab = vocabList;

    // reset answered tracker for this new game
    answeredSet = new Set();

    // ensure overlay state
    if (startScreen) startScreen.style.display = 'none';
    if (endScreen) endScreen.style.display = 'none';
    overlay.classList.add('hidden');

    inputField.value = '';
    // reset mobile input as well
    mobileInputValue = '';
    updateMobileDisplay();
    // focus native input only on larger screens (prevent mobile keyboard)
    if (!isSmallScreen()) inputField.focus();
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
    // choose a random vocab index that hasn't been answered correctly yet
    const available = [];
    for (let i = 0; i < activeVocab.length; i++) {
        if (!answeredSet.has(i)) available.push(i);
    }
    // if nothing left to show, end the game early
    if (available.length === 0) {
        endGame();
        return;
    }
    currentWordIndex = available[Math.floor(Math.random() * available.length)];
    const wordObj = activeVocab[currentWordIndex];

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
    if (isSmallScreen()) return; // ignore physical/virtual keyboard input on small screens
    const val = e.target.value.toLowerCase().replace(/\s/g, '');
    checkAnswer(val);
});

// Build the on-screen keyboard buttons (if the container exists)
function buildOnscreenKeyboard() {
    if (!onscreenKeyboard) return;
    // clear existing
    onscreenKeyboard.innerHTML = '';

    // build rows explicitly so background and layout fit correctly
    const rowNums = ['1','2','3','4','bzd'];
    const row1 = ['q','w','e','r','t','y','u','i','o','p'];
    const row2 = ['a','s','d','f','g','h','j','k','l'];
    // last row: delete at left, letters, enter at right
    const row3 = ['⌫','z','x','c','v','b','n','m'];

    function makeRow(keys, cls) {
        const row = document.createElement('div');
        row.className = 'row ' + cls;
        keys.forEach(k => {
            const btn = document.createElement('div');
            btn.className = 'key';
            if (k === '⌫' || k === 'BZD') btn.classList.add('special');
            btn.textContent = k;
            btn.dataset.key = k;
            btn.addEventListener('click', () => handleOnscreenKey(k));
            row.appendChild(btn);
        });
        return row;
    }

    onscreenKeyboard.appendChild(makeRow(rowNums, 'numbers'));
    onscreenKeyboard.appendChild(makeRow(row1, 'q1'));
    onscreenKeyboard.appendChild(makeRow(row2, 'q2'));
    onscreenKeyboard.appendChild(makeRow(row3, 'q3'));
}

function updateMobileDisplay() {
    if (!mobileDisplay) return;
    mobileDisplay.textContent = mobileInputValue || 'tap to type pinyin...';
}

function handleOnscreenKey(k) {
    if (!isGameActive || isTransitioning) return;
    if (k === '⌫') {
        mobileInputValue = mobileInputValue.slice(0, -1);
        updateMobileDisplay();
        return;
    }
    if (k === 'BZD') {
        // trigger skip
        skipWord();
        return;
    }
    if (k === 'Enter') {
        const val = mobileInputValue.toLowerCase().replace(/\s/g, '');
        checkAnswer(val);
        return;
    }
    // append character
    mobileInputValue += k;
    updateMobileDisplay();
    // mimic input event behaviour: check after each input
    const val = mobileInputValue.toLowerCase().replace(/\s/g, '');
    checkAnswer(val);
}

function checkAnswer(input) {
    // allow skipping: 'bzd' or 'buzhidao' (buzhidao = I don't know)
    if (input === 'bzd' || input === 'buzhidao') {
        skipWord();
        return;
    }

    const targetPinyin = activeVocab[currentWordIndex].pinyin;
    const cleanInput = input.replace(/\s/g, '');

    // Support multiple pinyin variants. The `pinyin` field may be:
    // - a single string ("chang2")
    // - a pipe-separated string ("chang2|zhang3")
    // - an array of strings
    const targets = Array.isArray(targetPinyin)
        ? targetPinyin
        : String(targetPinyin).split('|').map(s => s.trim());

    for (const t of targets) {
        const cleanTarget = String(t);
        if (cleanInput === cleanTarget) {
            handleCorrect();
            return;
        }
    }
}

function skipWord() {
    if (!isGameActive || isTransitioning) return;
    // skip doesn't mark the word as known; just move to the next word
    isTransitioning = true;
    clearInterval(timerInterval);
    inputField.value = '';
    setTimeout(() => {
        isTransitioning = false;
        nextWord();
    }, 200);
}

function handleCorrect() {
    clearInterval(timerInterval);
    isTransitioning = true;
    // mark this vocab index as answered so we won't show it again this game
    answeredSet.add(currentWordIndex);
    
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
    // clear mobile input as well (for on-screen keyboard)
    mobileInputValue = '';
    updateMobileDisplay();
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
    // explicitly clear any glow/inline styles so the streak bar immediately loses its glow
    try {
        streakContainer.style.boxShadow = '';
        streakContainer.style.borderColor = '';
        streakInner.style.boxShadow = '';
    } catch (e) {
        // ignore if elements not present
    }
    // clear mobile input too
    mobileInputValue = '';
    updateMobileDisplay();
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
        // when full, strong glow using the fill (current level) color
        streakFill.style.background = fillColor;
        streakContainer.style.boxShadow = `0 0 18px ${colorToRgba(fillColor, 0.95)}, 0 0 36px ${colorToRgba(fillColor, 0.4)}`;
        streakContainer.style.borderColor = fillColor;
        streakInner.style.boxShadow = `inset 0 0 8px ${colorToRgba(fillColor, 0.25)}`;
    } else if (streakInLevel > 0 || holdingFull) {
        // subtle persistent glow while the player still has a streak
        streakContainer.style.boxShadow = `0 0 10px ${colorToRgba(fillColor, 0.6)}`;
        streakContainer.style.borderColor = colorToRgba(fillColor, 0.6);
        streakInner.style.boxShadow = `inset 0 0 6px ${colorToRgba(fillColor, 0.16)}`;
    } else {
        // clear any glow/inline styles when there's no streak
        streakContainer.style.boxShadow = '';
        streakContainer.style.borderColor = '';
        streakInner.style.boxShadow = '';
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
    if(isGameActive && !isSmallScreen()) inputField.focus();
});

// build keyboard once
buildOnscreenKeyboard();
// ensure mobile display is initialized
updateMobileDisplay();

// handle resize to keep mobile display text in sync
window.addEventListener('resize', () => {
    updateMobileDisplay();
});

// Ensure mobile UI visibility matches current screen size (fixes cases where CSS
// media queries don't match device behavior). This explicitly shows/hides the
// on-screen keyboard and mobile display at runtime.
function updateMobileUIVisibility() {
    if (mobileDisplay) {
        mobileDisplay.style.display = isSmallScreen() ? 'block' : 'none';
    }
    if (onscreenKeyboard) {
        onscreenKeyboard.style.display = isSmallScreen() ? 'grid' : 'none';
    }
}

// run once and on resize
updateMobileUIVisibility();
window.addEventListener('resize', updateMobileUIVisibility);