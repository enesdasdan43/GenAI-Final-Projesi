// ============================================
// CodeQuiz - Eğitici Programlama Oyunu
// ============================================

// --- Soru Bankası ---
const questionBank = {
  html: [
    {
      question: "HTML'de bir paragraf oluşturmak için hangi etiket kullanılır?",
      options: ["<p>", "<paragraph>", "<text>", "<pg>"],
      correct: 0
    },
    {
      question: "HTML'de en büyük başlık etiketi hangisidir?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      correct: 2
    },
    {
      question: "HTML'de bir bağlantı (link) oluşturmak için hangi etiket kullanılır?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    },
    {
      question: "HTML'de bir resim eklemek için hangi etiket kullanılır?",
      options: ["<picture>", "<image>", "<img>", "<photo>"],
      correct: 2
    },
    {
      question: "HTML'de sırasız liste oluşturmak için hangi etiket kullanılır?",
      options: ["<ol>", "<list>", "<li>", "<ul>"],
      correct: 3
    },
    {
      question: "HTML5'te video eklemek için hangi etiket kullanılır?",
      options: ["<media>", "<movie>", "<video>", "<film>"],
      correct: 2
    },
    {
      question: "HTML'de bir formda metin girişi için hangi input tipi kullanılır?",
      options: ["type='string'", "type='text'", "type='input'", "type='words'"],
      correct: 1
    },
    {
      question: "HTML'de bir tablonun satırını tanımlamak için hangi etiket kullanılır?",
      options: ["<td>", "<tr>", "<th>", "<table-row>"],
      correct: 1
    },
    {
      question: "HTML'de sayfa başlığını tanımlamak için hangi etiket kullanılır?",
      options: ["<header>", "<heading>", "<title>", "<meta>"],
      correct: 2
    },
    {
      question: "'<!DOCTYPE html>' bildirimi ne işe yarar?",
      options: [
        "Sayfaya başlık ekler",
        "Tarayıcıya HTML5 belgesi olduğunu bildirir",
        "CSS stillerini yükler",
        "JavaScript dosyasını bağlar"
      ],
      correct: 1
    },
    {
      question: "HTML'de yorum satırı nasıl yazılır?",
      options: ["// yorum", "/* yorum */", "<!-- yorum -->", "# yorum"],
      correct: 2
    },
    {
      question: "HTML'de kalın metin yazmak için hangi etiket kullanılır?",
      options: ["<bold>", "<strong>", "<thick>", "<heavy>"],
      correct: 1
    }
  ],
  css: [
    {
      question: "CSS'de bir elementin arka plan rengini değiştirmek için hangi özellik kullanılır?",
      options: ["color", "bg-color", "background-color", "back-color"],
      correct: 2
    },
    {
      question: "CSS'de bir elementin dış boşluğunu ayarlamak için hangi özellik kullanılır?",
      options: ["padding", "spacing", "border", "margin"],
      correct: 3
    },
    {
      question: "CSS'de Flexbox düzeninde öğeleri yatay olarak ortalamak için hangi özellik kullanılır?",
      options: ["align-items: center", "text-align: center", "justify-content: center", "float: center"],
      correct: 2
    },
    {
      question: "CSS'de bir elementin görünürlüğünü tamamen gizlemek için hangi değer kullanılır?",
      options: ["display: hidden", "visibility: none", "display: none", "opacity: hidden"],
      correct: 2
    },
    {
      question: "CSS'de yazı tipi boyutunu değiştirmek için hangi özellik kullanılır?",
      options: ["text-size", "font-size", "text-style", "font-height"],
      correct: 1
    },
    {
      question: "CSS'de ':hover' ne zaman tetiklenir?",
      options: [
        "Sayfa yüklendiğinde",
        "Elemente tıklandığında",
        "Fare elementin üzerine geldiğinde",
        "Element odaklandığında"
      ],
      correct: 2
    },
    {
      question: "CSS'de 'position: absolute' ne anlama gelir?",
      options: [
        "Elementin normal akışta kalması",
        "Elementin en yakın konumlandırılmış ataya göre yerleşmesi",
        "Elementin sayfanın en üstüne sabitlenmesi",
        "Elementin her zaman görünür olması"
      ],
      correct: 1
    },
    {
      question: "CSS'de bir kutuya gölge eklemek için hangi özellik kullanılır?",
      options: ["text-shadow", "box-shadow", "element-shadow", "drop-shadow"],
      correct: 1
    },
    {
      question: "CSS Grid'de sütun sayısını belirlemek için hangi özellik kullanılır?",
      options: ["grid-columns", "grid-template-columns", "column-count", "grid-layout"],
      correct: 1
    },
    {
      question: "CSS'de geçiş animasyonu eklemek için hangi özellik kullanılır?",
      options: ["animation", "transition", "transform", "motion"],
      correct: 1
    },
    {
      question: "CSS'de 'z-index' özelliği ne işe yarar?",
      options: [
        "Elementin boyutunu ayarlar",
        "Elementin yatay konumunu belirler",
        "Elementin katman sırasını (üst üste binme) belirler",
        "Elementin yakınlaştırma seviyesini ayarlar"
      ],
      correct: 2
    },
    {
      question: "CSS'de medya sorgusu (media query) ne için kullanılır?",
      options: [
        "Video dosyalarını oynatmak için",
        "Farklı ekran boyutlarına göre stil uygulamak için",
        "Ses dosyalarını kontrol etmek için",
        "Resim formatını değiştirmek için"
      ],
      correct: 1
    }
  ],
  javascript: [
    {
      question: "JavaScript'te bir değişken tanımlamak için hangi anahtar kelime kullanılır?",
      options: ["var", "variable", "define", "dim"],
      correct: 0
    },
    {
      question: "JavaScript'te bir diziyi (array) konsola yazdırmak için hangi yöntem kullanılır?",
      options: ["print()", "echo()", "console.log()", "write()"],
      correct: 2
    },
    {
      question: "JavaScript'te '===' operatörü ne yapar?",
      options: [
        "Sadece değer karşılaştırır",
        "Hem değer hem tip karşılaştırır",
        "Atama yapar",
        "Büyüklük karşılaştırır"
      ],
      correct: 1
    },
    {
      question: "JavaScript'te bir fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
      options: ["func", "def", "function", "method"],
      correct: 2
    },
    {
      question: "JavaScript'te bir dizinin eleman sayısını bulmak için hangi özellik kullanılır?",
      options: [".size", ".count", ".length", ".total"],
      correct: 2
    },
    {
      question: "'let' ve 'var' arasındaki temel fark nedir?",
      options: [
        "Fark yoktur",
        "'let' blok kapsamlıdır, 'var' fonksiyon kapsamlıdır",
        "'var' daha hızlıdır",
        "'let' sadece sayılar için kullanılır"
      ],
      correct: 1
    },
    {
      question: "JavaScript'te bir nesnenin (object) özelliğine erişmek için hangi yöntemler kullanılır?",
      options: [
        "Sadece nokta notasyonu (obj.key)",
        "Sadece köşeli parantez (obj['key'])",
        "Hem nokta hem köşeli parantez notasyonu",
        "Sadece get() metodu"
      ],
      correct: 2
    },
    {
      question: "JavaScript'te 'addEventListener' ne işe yarar?",
      options: [
        "Yeni bir HTML elementi ekler",
        "Bir olaya (event) dinleyici fonksiyon bağlar",
        "CSS stili ekler",
        "Sayfa yönlendirmesi yapar"
      ],
      correct: 1
    },
    {
      question: "JavaScript'te 'map()' metodu ne yapar?",
      options: [
        "Dizi elemanlarını sıralar",
        "Her elemana bir fonksiyon uygulayıp yeni bir dizi döndürür",
        "Dizi elemanlarını filtreler",
        "Harita oluşturur"
      ],
      correct: 1
    },
    {
      question: "JavaScript'te asenkron bir işlem için hangi yapı kullanılır?",
      options: ["sync/await", "callback sadece", "async/await", "thread/run"],
      correct: 2
    },
    {
      question: "JavaScript'te 'null' ve 'undefined' arasındaki fark nedir?",
      options: [
        "Fark yoktur, ikisi de aynıdır",
        "'null' bilinçli boş değerdir, 'undefined' değer atanmamıştır",
        "'undefined' bir hata mesajıdır",
        "'null' sadece sayılarda kullanılır"
      ],
      correct: 1
    },
    {
      question: "JavaScript'te DOM'dan bir elementi ID ile seçmek için hangi metod kullanılır?",
      options: [
        "document.findElement()",
        "document.getElementById()",
        "document.selectById()",
        "document.query()"
      ],
      correct: 1
    }
  ],
  python: [
    {
      question: "Python'da ekrana yazdırmak için hangi fonksiyon kullanılır?",
      options: ["echo()", "console.log()", "print()", "write()"],
      correct: 2
    },
    {
      question: "Python'da bir liste (list) nasıl tanımlanır?",
      options: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"],
      correct: 2
    },
    {
      question: "Python'da yorum satırı nasıl yazılır?",
      options: ["// yorum", "# yorum", "<!-- yorum -->", "/* yorum */"],
      correct: 1
    },
    {
      question: "Python'da bir döngü oluşturmak için hangi anahtar kelime kullanılır?",
      options: ["loop", "repeat", "for", "iterate"],
      correct: 2
    },
    {
      question: "Python'da bir sözlük (dictionary) nasıl tanımlanır?",
      options: [
        "dict = [key: value]",
        "dict = {key: value}",
        "dict = (key: value)",
        "dict = <key: value>"
      ],
      correct: 1
    },
    {
      question: "Python'da bir fonksiyon tanımlamak için hangi anahtar kelime kullanılır?",
      options: ["function", "func", "def", "define"],
      correct: 2
    },
    {
      question: "Python'da 'len()' fonksiyonu ne döndürür?",
      options: [
        "Bir nesnenin tipini",
        "Bir nesnenin uzunluğunu/eleman sayısını",
        "Bir nesnenin bellek adresini",
        "Bir nesnenin değerini"
      ],
      correct: 1
    },
    {
      question: "Python'da 'if-elif-else' yapısı ne için kullanılır?",
      options: [
        "Döngü oluşturmak için",
        "Koşullu dallanma (karar yapısı) için",
        "Fonksiyon tanımlamak için",
        "Dosya okumak için"
      ],
      correct: 1
    },
    {
      question: "Python'da bir string'i büyük harfe çevirmek için hangi metod kullanılır?",
      options: [".toUpperCase()", ".upper()", ".capitalize()", ".big()"],
      correct: 1
    },
    {
      question: "Python'da 'try-except' bloğu ne için kullanılır?",
      options: [
        "Döngü kontrolü için",
        "Hata yakalama ve yönetimi için",
        "Değişken tanımlamak için",
        "Fonksiyon çağırmak için"
      ],
      correct: 1
    },
    {
      question: "Python'da liste kavrama (list comprehension) hangisidir?",
      options: [
        "list.create(x for x in range(10))",
        "[x for x in range(10)]",
        "(x for x in range(10))",
        "{x for x in range(10)}"
      ],
      correct: 1
    },
    {
      question: "Python'da bir sınıf (class) tanımlamak için hangi anahtar kelime kullanılır?",
      options: ["struct", "object", "class", "type"],
      correct: 2
    }
  ]
};

// --- Oyun Durumu Değişkenleri ---
let selectedCategory = null;
let selectedDifficulty = null;
let currentQuestion = 0;
let score = 0;
let combo = 0;
let maxComboCount = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 30;
let timerInterval = null;
let questions = [];
let answered = false;

// --- DOM Referansları ---
const screens = {
  start: () => document.getElementById('startScreen'),
  quiz: () => document.getElementById('quizScreen'),
  result: () => document.getElementById('resultScreen'),
  leaderboard: () => document.getElementById('leaderboardScreen')
};

// --- Yardımcı Fonksiyonlar ---
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }
}

// --- Kategori ve Zorluk Seçimi ---
function selectCategory(btn, category) {
  selectedCategory = category;
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  checkStartReady();
}

function selectDifficulty(btn, difficulty) {
  selectedDifficulty = difficulty;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  checkStartReady();
}

function checkStartReady() {
  const startBtn = document.querySelector('.start-btn');
  if (startBtn) {
    if (selectedCategory && selectedDifficulty) {
      startBtn.classList.add('ready');
      startBtn.disabled = false;
    } else {
      startBtn.classList.remove('ready');
    }
  }
}

// --- Oyunu Başlat ---
function startGame() {
  if (!selectedCategory || !selectedDifficulty) {
    // Seçim yapılmamışsa butonları vurgula
    const cards = document.querySelectorAll('.category-btn, .diff-btn');
    cards.forEach(c => {
      c.style.animation = 'shake 0.4s ease';
      setTimeout(() => c.style.animation = '', 400);
    });
    return;
  }

  // Durum sıfırla
  currentQuestion = 0;
  score = 0;
  combo = 0;
  maxComboCount = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  answered = false;

  // Soruları karıştır ve seç
  const bankQuestions = questionBank[selectedCategory];
  questions = shuffleArray(bankQuestions).slice(0, 10);

  // Ekranı değiştir
  showScreen('quizScreen');

  // Skor ve bilgileri güncelle
  updateScoreDisplay();
  updateComboDisplay();

  // İlk soruyu yükle
  loadQuestion();
}

// --- Soru Yükle ---
function loadQuestion() {
  if (currentQuestion >= questions.length) {
    endGame();
    return;
  }

  answered = false;
  const q = questions[currentQuestion];

  // Soru numarasını güncelle
  const questionNum = document.getElementById('questionNum');
  const totalQuestions = document.getElementById('totalQuestions');
  if (questionNum) questionNum.textContent = currentQuestion + 1;
  if (totalQuestions) totalQuestions.textContent = questions.length;

  // Soru metnini ayarla
  const questionText = document.getElementById('questionText');
  if (questionText) questionText.textContent = q.question;

  // Kategori etiketini ayarla
  const categoryTag = document.getElementById('questionCategoryTag');
  if (categoryTag) {
    const categoryNames = {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      python: 'Python'
    };
    categoryTag.textContent = categoryNames[selectedCategory] || selectedCategory.toUpperCase();
  }

  // Cevap butonlarını ayarla
  const answersSection = document.getElementById('answersSection');
  if (answersSection) {
    answersSection.classList.remove('answered');
  }

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`answer${i}`);
    if (btn) {
      btn.textContent = q.options[i];
      btn.className = 'answer-btn';
      btn.disabled = false;
      btn.onclick = () => checkAnswer(i);

      // Animasyon efekti
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(20px)';
      setTimeout(() => {
        btn.style.transition = 'all 0.3s ease';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }, i * 100);
    }
  }

  // Zamanlayıcıyı başlat
  startTimer();
}

// --- Cevabı Kontrol Et ---
function checkAnswer(index) {
  if (answered) return;
  answered = true;

  clearInterval(timerInterval);

  const q = questions[currentQuestion];
  const isCorrect = index === q.correct;

  // Butonları güncelle
  const answersSection = document.getElementById('answersSection');
  if (answersSection) answersSection.classList.add('answered');

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`answer${i}`);
    if (btn) {
      btn.disabled = true;
      if (i === q.correct) {
        btn.classList.add('correct');
      } else if (i === index && !isCorrect) {
        btn.classList.add('wrong');
      }
    }
  }

  if (isCorrect) {
    // Doğru cevap
    combo++;
    if (combo > maxComboCount) maxComboCount = combo;
    correctAnswers++;

    // Puan hesapla: temel 100 + combo bonus
    const comboBonus = Math.min(combo - 1, 5) * 20;
    const timeBonus = Math.floor(timeLeft * 2);
    const points = 100 + comboBonus + timeBonus;
    score += points;

    showFeedback(true, points);
  } else {
    // Yanlış cevap
    combo = 0;
    wrongAnswers++;
    showFeedback(false, 0);
  }

  updateScoreDisplay();
  updateComboDisplay();

  // 1.5 saniye sonra sonraki soru
  setTimeout(() => {
    hideFeedback();
    currentQuestion++;
    loadQuestion();
  }, 1500);
}

// --- Geri Bildirim Overlay ---
function showFeedback(isCorrect, points) {
  const overlay = document.getElementById('feedbackOverlay');
  const content = document.getElementById('feedbackContent');
  if (!overlay || !content) return;

  const emoji = isCorrect ? '✓' : '✗';
  const title = isCorrect ? 'Doğru!' : 'Yanlış!';
  const pointsText = isCorrect ? `+${points} puan` : '';
  const colorClass = isCorrect ? 'feedback-correct' : 'feedback-wrong';

  content.innerHTML = `
    <div class="feedback-icon ${colorClass}">${emoji}</div>
    <div class="feedback-title ${colorClass}">${title}</div>
    <div class="feedback-points">${pointsText}</div>
  `;

  overlay.classList.add('show');
}

function hideFeedback() {
  const overlay = document.getElementById('feedbackOverlay');
  if (overlay) overlay.classList.remove('show');
}

// --- Zamanlayıcı ---
function startTimer() {
  clearInterval(timerInterval);

  const timeLimits = { easy: 30, medium: 20, hard: 15 };
  timeLeft = timeLimits[selectedDifficulty] || 30;

  const totalTime = timeLeft;
  updateTimerDisplay(totalTime);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(totalTime);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay(totalTime) {
  const timerDisplay = document.getElementById('timerDisplay');
  const timerBar = document.getElementById('timerBar');

  if (timerDisplay) timerDisplay.textContent = timeLeft + 's';

  if (timerBar) {
    const percent = (timeLeft / totalTime) * 100;
    timerBar.style.width = percent + '%';

    // Renk değişimi
    if (percent > 50) {
      timerBar.style.background = 'linear-gradient(90deg, #00c853, #69f0ae)';
    } else if (percent > 25) {
      timerBar.style.background = 'linear-gradient(90deg, #ff9800, #ffb74d)';
    } else {
      timerBar.style.background = 'linear-gradient(90deg, #f44336, #ef5350)';
      timerBar.style.animation = 'pulse 0.5s infinite';
    }
  }
}

function timeUp() {
  if (answered) return;
  answered = true;

  combo = 0;
  wrongAnswers++;

  // Doğru cevabı göster
  const q = questions[currentQuestion];
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`answer${i}`);
    if (btn) {
      btn.disabled = true;
      if (i === q.correct) {
        btn.classList.add('correct');
      }
    }
  }

  const answersSection = document.getElementById('answersSection');
  if (answersSection) answersSection.classList.add('answered');

  showFeedback(false, 0);
  updateScoreDisplay();
  updateComboDisplay();

  setTimeout(() => {
    hideFeedback();
    currentQuestion++;
    loadQuestion();
  }, 1500);
}

// --- Skor ve Combo Güncelleme ---
function updateScoreDisplay() {
  const scoreDisplay = document.getElementById('scoreDisplay');
  if (scoreDisplay) {
    scoreDisplay.textContent = score;
    // Animasyon efekti
    scoreDisplay.style.transform = 'scale(1.3)';
    setTimeout(() => scoreDisplay.style.transform = 'scale(1)', 200);
  }
}

function updateComboDisplay() {
  const comboDisplay = document.getElementById('comboDisplay');
  const comboCount = document.getElementById('comboCount');

  if (comboDisplay) {
    if (combo >= 2) {
      comboDisplay.classList.add('active');
    } else {
      comboDisplay.classList.remove('active');
    }
  }

  if (comboCount) {
    comboCount.textContent = combo;
  }
}

// --- Oyun Sonu ---
function endGame() {
  clearInterval(timerInterval);
  showScreen('resultScreen');

  // Sonuç istatistikleri
  const maxPossible = questions.length * 200; // yaklaşık max puan
  const percentage = Math.min(Math.round((score / maxPossible) * 100), 100);

  // Emoji ve başlık
  const resultEmoji = document.getElementById('resultEmoji');
  const resultTitle = document.getElementById('resultTitle');
  const resultSubtitle = document.getElementById('resultSubtitle');
  const finalScore = document.getElementById('finalScore');
  const correctCount = document.getElementById('correctCount');
  const wrongCount = document.getElementById('wrongCount');
  const maxComboEl = document.getElementById('maxCombo');

  if (percentage >= 80) {
    if (resultEmoji) resultEmoji.textContent = '🏆';
    if (resultTitle) resultTitle.textContent = 'Muhteşem!';
    if (resultSubtitle) resultSubtitle.textContent = 'Kod ustası olma yolundasın!';
  } else if (percentage >= 60) {
    if (resultEmoji) resultEmoji.textContent = '🌟';
    if (resultTitle) resultTitle.textContent = 'Harika!';
    if (resultSubtitle) resultSubtitle.textContent = 'Çok iyi gidiyorsun, devam et!';
  } else if (percentage >= 40) {
    if (resultEmoji) resultEmoji.textContent = '💪';
    if (resultTitle) resultTitle.textContent = 'İyi!';
    if (resultSubtitle) resultSubtitle.textContent = 'Biraz daha pratik ile zirveye çıkarsın!';
  } else {
    if (resultEmoji) resultEmoji.textContent = '📚';
    if (resultTitle) resultTitle.textContent = 'Çalışmaya Devam!';
    if (resultSubtitle) resultSubtitle.textContent = 'Her usta bir zamanlar çıraktı!';
  }

  if (finalScore) finalScore.textContent = score;
  if (correctCount) correctCount.textContent = correctAnswers;
  if (wrongCount) wrongCount.textContent = wrongAnswers;
  if (maxComboEl) maxComboEl.textContent = maxComboCount;

  // Skor çemberi animasyonu
  animateScoreCircle(percentage);

  // İsim bölümünü göster
  const nameSection = document.getElementById('nameSection');
  if (nameSection) nameSection.style.display = 'block';
}

function animateScoreCircle(percentage) {
  const scoreFill = document.getElementById('scoreFill');
  if (!scoreFill) return;

  const circumference = 2 * Math.PI * 54; // r=54
  scoreFill.style.strokeDasharray = circumference;
  scoreFill.style.strokeDashoffset = circumference;

  // Renk belirle
  let color = '#f44336';
  if (percentage >= 80) color = '#00c853';
  else if (percentage >= 60) color = '#2196f3';
  else if (percentage >= 40) color = '#ff9800';

  scoreFill.style.stroke = color;

  // Animasyon
  setTimeout(() => {
    const offset = circumference - (percentage / 100) * circumference;
    scoreFill.style.transition = 'stroke-dashoffset 1.5s ease-out';
    scoreFill.style.strokeDashoffset = offset;
  }, 300);
}

// --- Skor Kaydetme ---
function saveScore() {
  const playerNameInput = document.getElementById('playerName');
  const name = playerNameInput ? playerNameInput.value.trim() : '';

  if (!name) {
    if (playerNameInput) {
      playerNameInput.style.border = '2px solid #f44336';
      playerNameInput.placeholder = 'Lütfen bir isim girin!';
      playerNameInput.style.animation = 'shake 0.4s ease';
      setTimeout(() => playerNameInput.style.animation = '', 400);
    }
    return;
  }

  const categoryNames = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    python: 'Python'
  };

  const entry = {
    name: name,
    score: score,
    category: categoryNames[selectedCategory] || selectedCategory,
    correct: correctAnswers,
    total: questions.length,
    maxCombo: maxComboCount,
    difficulty: selectedDifficulty,
    date: new Date().toLocaleDateString('tr-TR')
  };

  let leaderboard = JSON.parse(localStorage.getItem('codeQuizLeaderboard') || '[]');
  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 50); // En fazla 50 kayıt
  localStorage.setItem('codeQuizLeaderboard', JSON.stringify(leaderboard));

  // Kaydet butonunu güncelle
  const nameSection = document.getElementById('nameSection');
  if (nameSection) {
    nameSection.innerHTML = '<div class="save-success">✓ Skor kaydedildi!</div>';
  }
}

// --- Liderlik Tablosu ---
function showLeaderboard() {
  showScreen('leaderboardScreen');

  const leaderboard = JSON.parse(localStorage.getItem('codeQuizLeaderboard') || '[]');
  const list = document.getElementById('leaderboardList');

  if (!list) return;

  if (leaderboard.length === 0) {
    list.innerHTML = `
      <div class="empty-leaderboard">
        <div class="empty-icon">🏆</div>
        <p>Henüz skor kaydedilmemiş!</p>
        <p>İlk rekor senin olsun!</p>
      </div>
    `;
    return;
  }

  const top10 = leaderboard.slice(0, 10);
  const medals = ['🥇', '🥈', '🥉'];

  list.innerHTML = top10.map((entry, i) => {
    const medal = i < 3 ? medals[i] : `<span class="rank-num">${i + 1}</span>`;
    const diffColors = { easy: '#4caf50', medium: '#ff9800', hard: '#f44336' };
    const diffNames = { easy: 'Kolay', medium: 'Orta', hard: 'Zor' };

    return `
      <div class="leaderboard-item ${i < 3 ? 'top-three' : ''}" style="animation-delay: ${i * 0.08}s">
        <div class="lb-rank">${medal}</div>
        <div class="lb-info">
          <div class="lb-name">${entry.name}</div>
          <div class="lb-details">
            <span class="lb-category">${entry.category}</span>
            <span class="lb-diff" style="color: ${diffColors[entry.difficulty] || '#888'}">${diffNames[entry.difficulty] || entry.difficulty}</span>
            <span class="lb-date">${entry.date}</span>
          </div>
        </div>
        <div class="lb-score">${entry.score}</div>
      </div>
    `;
  }).join('');
}

// --- Navigasyon ---
function resetGame() {
  showScreen('startScreen');
  setTimeout(() => startGame(), 100);
}

function goHome() {
  clearInterval(timerInterval);
  selectedCategory = null;
  selectedDifficulty = null;

  // Seçimleri temizle
  document.querySelectorAll('.category-btn, .diff-btn').forEach(b => b.classList.remove('selected'));

  const startBtn = document.querySelector('.start-btn');
  if (startBtn) {
    startBtn.classList.remove('ready');
  }

  showScreen('startScreen');
}

// --- Parçacık Efektleri ---
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const particleCount = 30;
  const colors = [
    'rgba(99, 102, 241, 0.3)',
    'rgba(139, 92, 246, 0.3)',
    'rgba(236, 72, 153, 0.3)',
    'rgba(34, 211, 238, 0.3)',
    'rgba(52, 211, 153, 0.3)',
    'rgba(251, 191, 36, 0.2)'
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 6 + 2;
    const x = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 20;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      left: ${x}%;
      bottom: -20px;
      animation: floatUp ${duration}s linear ${delay}s infinite;
      pointer-events: none;
    `;

    container.appendChild(particle);
  }

  // Kod sembolleri ekle
  const symbols = ['<>', '{}', '()', '//', '#', '&&', '||', '=>', '!=', '++', '[]', '::'];
  for (let i = 0; i < 12; i++) {
    const symbol = document.createElement('div');
    symbol.classList.add('code-symbol');

    const x = Math.random() * 100;
    const duration = Math.random() * 25 + 20;
    const delay = Math.random() * 15;
    const fontSize = Math.random() * 14 + 10;

    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.cssText = `
      position: absolute;
      left: ${x}%;
      bottom: -30px;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: ${fontSize}px;
      color: rgba(99, 102, 241, 0.15);
      animation: floatUp ${duration}s linear ${delay}s infinite;
      pointer-events: none;
    `;

    container.appendChild(symbol);
  }
}

// --- Klavye Kısayolları ---
document.addEventListener('keydown', (e) => {
  const quizScreen = document.getElementById('quizScreen');
  if (!quizScreen || !quizScreen.classList.contains('active')) return;

  if (answered) return;

  const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
  if (keyMap.hasOwnProperty(e.key)) {
    checkAnswer(keyMap[e.key]);
  }
});

// --- CSS Animasyon Ekleme ---
function injectAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatUp {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) rotate(720deg);
        opacity: 0;
      }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scoreCountUp {
      from { transform: scale(0.5); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .feedback-icon {
      font-size: 4rem;
      font-weight: bold;
      animation: scoreCountUp 0.3s ease-out;
    }

    .feedback-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-top: 0.5rem;
    }

    .feedback-points {
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 0.3rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .feedback-correct {
      color: #69f0ae;
    }

    .feedback-wrong {
      color: #ff5252;
    }

    .save-success {
      color: #69f0ae;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0.8rem;
      animation: slideIn 0.3s ease;
    }

    .empty-leaderboard {
      text-align: center;
      padding: 3rem 1rem;
      color: rgba(255, 255, 255, 0.6);
    }

    .empty-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .leaderboard-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.8rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      margin-bottom: 0.5rem;
      animation: slideIn 0.3s ease backwards;
      transition: background 0.2s ease;
    }

    .leaderboard-item:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .leaderboard-item.top-three {
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.2);
    }

    .lb-rank {
      font-size: 1.5rem;
      min-width: 2.5rem;
      text-align: center;
    }

    .rank-num {
      font-size: 1rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.5);
    }

    .lb-info {
      flex: 1;
    }

    .lb-name {
      font-weight: 600;
      font-size: 1rem;
      color: #fff;
    }

    .lb-details {
      display: flex;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 0.2rem;
    }

    .lb-category {
      background: rgba(99, 102, 241, 0.2);
      padding: 0.1rem 0.5rem;
      border-radius: 4px;
      color: rgba(99, 102, 241, 0.9);
    }

    .lb-score {
      font-size: 1.2rem;
      font-weight: 700;
      color: #818cf8;
    }
  `;
  document.head.appendChild(style);
}

// --- Sayfa Yüklendiğinde ---
document.addEventListener('DOMContentLoaded', () => {
  injectAnimations();
  createParticles();
  showScreen('startScreen');
});
