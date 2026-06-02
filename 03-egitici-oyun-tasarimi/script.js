const questions = {
    html: [
        { q: "En büyük başlık (heading) etiketi hangisidir?", options: ["<h1>", "<heading>", "<h6>", "<head>"], answer: 0 },
        { q: "HTML'in açılımı nedir?", options: ["High Text Markup Language", "Hyper Text Markup Language", "Hyper Tabular Markup Language", "None of these"], answer: 1 },
        { q: "Satır atlamak (line break) için hangi etiket kullanılır?", options: ["<br>", "<lb>", "<break>", "<newline>"], answer: 0 },
        { q: "Bir bağlantı (link) oluşturmak için hangi etiket kullanılır?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
        { q: "Numaralandırılmış liste oluşturmak için hangi etiket kullanılır?", options: ["<ul>", "<list>", "<ol>", "<nl>"], answer: 2 },
        { q: "HTML5'te video eklemek için hangi etiket kullanılır?", options: ["<media>", "<video>", "<movie>", "<play>"], answer: 1 },
        { q: "Hangisi semantik bir HTML etiketidir?", options: ["<div>", "<span>", "<article>", "<b>"], answer: 2 },
        { q: "Metni kalın (bold) yapmak için hangisi kullanılır?", options: ["<bold>", "<strong>", "<i>", "<thick>"], answer: 1 },
        { q: "Tablo satırı oluşturmak için hangi etiket kullanılır?", options: ["<td>", "<th>", "<tr>", "<table-row>"], answer: 2 },
        { q: "Bir giriş alanını (input) zorunlu kılmak için hangi nitelik kullanılır?", options: ["validate", "required", "mandatory", "important"], answer: 1 }
    ],
    css: [
        { q: "CSS'in açılımı nedir?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: 1 },
        { q: "Tüm 'p' etiketlerinin arka planını kırmızı yapmak için hangi kod kullanılır?", options: ["p {background-color: red;}", "p {color: red;}", "all.p {bg: red;}", "p.all {background: red;}"], answer: 0 },
        { q: "CSS'te bir ID'yi seçmek için hangi sembol kullanılır?", options: [".", "*", "#", "$"], answer: 2 },
        { q: "CSS'te bir Sınıfı (Class) seçmek için hangi sembol kullanılır?", options: ["#", ".", "@", "%"], answer: 1 },
        { q: "Yazı tipini değiştirmek için hangi özellik kullanılır?", options: ["font-family", "font-style", "text-style", "font-weight"], answer: 0 },
        { q: "Elemanların etrafındaki boşluğu (dış boşluk) ayarlamak için hangisi kullanılır?", options: ["padding", "spacing", "margin", "border"], answer: 2 },
        { q: "Elemanların iç boşluğunu ayarlamak için hangisi kullanılır?", options: ["margin", "padding", "spacing", "inner-space"], answer: 1 },
        { q: "Flexbox'ta öğeleri yatayda ortalamak için hangisi kullanılır?", options: ["align-items: center", "justify-content: center", "text-align: center", "vertical-align: middle"], answer: 1 },
        { q: "Hangi CSS özelliği metnin altına çizgi ekler?", options: ["text-decoration: underline;", "font-style: underline;", "text-line: bottom;", "decoration: underline;"], answer: 0 },
        { q: "Pozisyonu sabitlemek (sayfa kaysa bile yerinde kalması) için hangisi kullanılır?", options: ["position: absolute;", "position: relative;", "position: fixed;", "position: static;"], answer: 2 }
    ],
    js: [
        { q: "Ekrana bir uyarı (alert) kutusu çıkarmak için hangisi kullanılır?", options: ["msgBox('Hello');", "alert('Hello');", "msg('Hello');", "alertBox('Hello');"], answer: 1 },
        { q: "JavaScript'te bir değişken nasıl tanımlanır?", options: ["variable x;", "v x;", "let x;", "def x;"], answer: 2 },
        { q: "Hangi sembol ile tek satırlık yorum yapılır?", options: ["//", "/*", "<!--", "#"], answer: 0 },
        { q: "Bir dizinin (array) uzunluğunu bulmak için hangi özellik kullanılır?", options: ["size", "length", "count", "index"], answer: 1 },
        { q: "'===' operatörünün '==' operatöründen farkı nedir?", options: ["Daha hızlıdır", "Sadece değerleri karşılaştırır", "Hem değer hem tür karşılaştırması yapar", "Farkı yoktur"], answer: 2 },
        { q: "Hangi fonksiyon bir string'i tam sayıya (integer) çevirir?", options: ["ParseInt()", "toInt()", "Integer()", "parseInt()"], answer: 3 },
        { q: "JavaScript'te bir fonksiyon nasıl oluşturulur?", options: ["function = myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"], answer: 1 },
        { q: "HTML'deki bir elementi ID ile seçmek için hangi metod kullanılır?", options: ["getElementById()", "getElement()", "selectId()", "querySelector('#id')"], answer: 0 },
        { q: "Dizinin sonuna bir eleman eklemek için hangi metod kullanılır?", options: ["add()", "push()", "append()", "insert()"], answer: 1 },
        { q: "JSON verisini bir JavaScript nesnesine çevirmek için hangisi kullanılır?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], answer: 0 }
    ],
    python: [
        { q: "Python'da ekrana yazı yazdırmak için hangi fonksiyon kullanılır?", options: ["echo", "print()", "console.log()", "write()"], answer: 1 },
        { q: "Python'da fonksiyon tanımlamak için hangi anahtar kelime kullanılır?", options: ["func", "function", "def", "define"], answer: 2 },
        { q: "Hangi veri tipi değiştirilemez (immutable)?", options: ["List (Liste)", "Dictionary (Sözlük)", "Set (Küme)", "Tuple (Demet)"], answer: 3 },
        { q: "Python'da yorum satırı hangi sembolle başlar?", options: ["//", "/*", "#", "--"], answer: 2 },
        { q: "Bir listenin eleman sayısını bulmak için hangi fonksiyon kullanılır?", options: ["length()", "size()", "count()", "len()"], answer: 3 },
        { q: "Aşağıdakilerden hangisi bir sözlük (dictionary) tanımlar?", options: ["x = []", "x = ()", "x = {}", "x = ''"], answer: 2 },
        { q: "Kullanıcıdan girdi almak için hangi fonksiyon kullanılır?", options: ["get()", "scan()", "input()", "read()"], answer: 2 },
        { q: "'Hello'.upper() kodunun çıktısı ne olur?", options: ["hello", "Hello", "HELLO", "Hata verir"], answer: 2 },
        { q: "Hata yakalama blokları hangi kelimelerle oluşturulur?", options: ["try / catch", "try / except", "do / while", "catch / throw"], answer: 1 },
        { q: "Bir modülü (kütüphaneyi) içeri aktarmak için hangi kelime kullanılır?", options: ["include", "import", "require", "using"], answer: 1 }
    ]
};

// Game State
let currentCategory = 'html';
let currentDifficulty = 'easy';
let currentQuestions = [];
let questionIndex = 0;
let score = 0;
let combo = 0;
let maxCombo = 0;
let correctCount = 0;
let wrongCount = 0;
let timerInterval;
let timeLeft = 30;
let maxTime = 30;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

// Selections
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.dataset.cat;
    });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentDifficulty = e.currentTarget.dataset.diff;
        
        if(currentDifficulty === 'easy') maxTime = 30;
        if(currentDifficulty === 'medium') maxTime = 20;
        if(currentDifficulty === 'hard') maxTime = 10;
    });
});

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', () => {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
});

function startGame() {
    // Reset state
    score = 0;
    combo = 0;
    maxCombo = 0;
    correctCount = 0;
    wrongCount = 0;
    questionIndex = 0;
    
    document.getElementById('score').innerText = score;
    document.getElementById('comboContainer').classList.add('hidden');
    
    // Shuffle and pick 10 questions
    currentQuestions = [...questions[currentCategory]].sort(() => Math.random() - 0.5).slice(0, 10);
    
    let catNames = { html: 'HTML', css: 'CSS', js: 'JavaScript', python: 'Python' };
    document.getElementById('qCategory').innerText = catNames[currentCategory];
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    if(questionIndex >= currentQuestions.length) {
        endGame();
        return;
    }
    
    const q = currentQuestions[questionIndex];
    document.getElementById('questionCount').innerText = questionIndex + 1;
    document.getElementById('questionText').innerText = q.q;
    
    const optionsGrid = document.getElementById('optionsGrid');
    optionsGrid.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt.replace(/</g, "&lt;").replace(/>/g, "&gt;")}`;
        btn.onclick = () => checkAnswer(idx, btn);
        optionsGrid.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = maxTime;
    updateTimerUI();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerUI() {
    document.getElementById('timer').innerText = timeLeft;
    const percentage = (timeLeft / maxTime) * 100;
    const timeBar = document.getElementById('timeBar');
    timeBar.style.width = percentage + '%';
    
    if(percentage < 25) {
        timeBar.style.background = 'linear-gradient(90deg, #ff1744, #ff5252)';
    } else if(percentage < 50) {
        timeBar.style.background = 'linear-gradient(90deg, #ff9100, #ffd740)';
    } else {
        timeBar.style.background = 'linear-gradient(90deg, #00e676, #4facfe)';
    }
}

function checkAnswer(selectedIndex, btnElement) {
    clearInterval(timerInterval);
    const q = currentQuestions[questionIndex];
    const isCorrect = (selectedIndex === q.answer);
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    if(isCorrect) {
        btnElement.classList.add('correct');
        correctCount++;
        combo++;
        if(combo > maxCombo) maxCombo = combo;
        
        let points = 100 + (combo * 20) + (timeLeft * 2);
        score += points;
        document.getElementById('score').innerText = score;
        showFeedback(true, points);
        
        if(combo >= 2) {
            const comboEl = document.getElementById('comboContainer');
            comboEl.classList.remove('hidden');
            document.getElementById('comboText').innerText = `${combo}x Kombo!`;
        }
    } else {
        btnElement.classList.add('wrong');
        buttons[q.answer].classList.add('correct');
        wrongCount++;
        combo = 0;
        document.getElementById('comboContainer').classList.add('hidden');
        showFeedback(false, 0);
    }
    
    setTimeout(() => {
        questionIndex++;
        loadQuestion();
    }, 1500);
}

function handleTimeout() {
    const q = currentQuestions[questionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    buttons[q.answer].classList.add('correct');
    wrongCount++;
    combo = 0;
    document.getElementById('comboContainer').classList.add('hidden');
    showFeedback(false, 0, "Süre Doldu!");
    
    setTimeout(() => {
        questionIndex++;
        loadQuestion();
    }, 1500);
}

function showFeedback(isCorrect, points, customText) {
    const overlay = document.getElementById('feedbackOverlay');
    const content = overlay.querySelector('.feedback-content');
    const icon = document.getElementById('feedbackIcon');
    const title = document.getElementById('feedbackTitle');
    const pointsText = document.getElementById('feedbackPoints');
    
    overlay.classList.remove('hidden');
    content.className = 'feedback-content ' + (isCorrect ? 'success' : 'error');
    
    if(isCorrect) {
        icon.className = 'fas fa-check-circle';
        title.innerText = 'Doğru!';
        pointsText.innerText = `+${points} Puan`;
    } else {
        icon.className = 'fas fa-times-circle';
        title.innerText = customText || 'Yanlış!';
        pointsText.innerText = 'Kombo Sıfırlandı';
    }
    
    setTimeout(() => overlay.classList.add('hidden'), 1200);
}

function endGame() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    document.getElementById('finalScore').innerText = score;
    document.getElementById('correctCount').innerText = correctCount;
    document.getElementById('wrongCount').innerText = wrongCount;
    
    let emoji = '😐';
    let title = 'Oyun Bitti!';
    if(correctCount >= 8) { emoji = '🏆'; title = 'Mükemmel!'; }
    else if(correctCount >= 5) { emoji = '👍'; title = 'İyi İş!'; }
    
    document.getElementById('resultIcon').innerText = emoji;
    document.getElementById('resultTitle').innerText = title;
    
    // Animate SVG Circle
    const circle = document.getElementById('scoreCircle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const percent = (correctCount / 10) * 100;
    const offset = circumference - (percent / 100) * circumference;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
}
