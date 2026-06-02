// Simulated Data
const courses = [
    { title: "Web Geliştirme", category: "Yazılım", tags: ["Web", "HTML", "CSS"], price: "Ücretsiz" },
    { title: "Siber Güvenlik", category: "Ağ", tags: ["Siber Güvenlik", "Ağ"], price: "Ücretsiz" },
    { title: "Mobil Uygulama", category: "Yazılım", tags: ["Mobil", "React"], price: "Ücretsiz" },
    { title: "Python ile Yapay Zeka", category: "AI", tags: ["Yapay Zeka", "Python"], price: "Ücretsiz" },
    { title: "UI/UX Tasarım Temelleri", category: "Tasarım", tags: ["Tasarım", "Figma"], price: "Ücretsiz" }
];

let currentUser = null;
let isDarkMode = false;
let bookmarkedCourses = [];
let activeNav = 'homeScreen';

// System Clock
setInterval(() => {
    const d = new Date();
    document.getElementById('statusTime').innerText = 
        d.getHours().toString().padStart(2, '0') + ':' + 
        d.getMinutes().toString().padStart(2, '0');
}, 1000);

// App Initialization
window.onload = () => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('eduLearnUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        document.getElementById('userNameDisplay').innerText = currentUser.name.split(' ')[0] + ' 👋';
        document.getElementById('profileName').innerText = currentUser.name;
        document.getElementById('profileEmail').innerText = currentUser.email;
        document.getElementById('profileInitials').innerText = currentUser.name.substring(0, 2).toUpperCase();
        
        switchNav('homeScreen');
    } else {
        switchAuthScreen('login');
    }

    // Check Dark Mode
    const savedDark = localStorage.getItem('eduLearnDarkMode');
    if (savedDark === 'true') {
        toggleDarkMode();
    }
};

// --- AUTHENTICATION ---

function switchAuthScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('bottomNav').classList.add('hidden'); // Hide nav on auth
    
    if(screen === 'login') {
        document.getElementById('authScreen').classList.add('active');
    } else if(screen === 'register') {
        document.getElementById('registerScreen').classList.add('active');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const pass = document.getElementById('loginPassword').value;
    
    if(email && pass.length >= 6) {
        currentUser = { name: "Enes Daşdan", email: email };
        localStorage.setItem('eduLearnUser', JSON.stringify(currentUser));
        
        document.getElementById('userNameDisplay').innerText = currentUser.name.split(' ')[0] + ' 👋';
        showToast("Başarıyla giriş yapıldı!", "success");
        setTimeout(() => switchNav('homeScreen'), 500);
    } else {
        showToast("Hatalı e-posta veya şifre!", "error");
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pass = document.getElementById('regPassword').value;

    if(name && email && pass.length >= 6) {
        currentUser = { name: name, email: email };
        localStorage.setItem('eduLearnUser', JSON.stringify(currentUser));
        
        document.getElementById('userNameDisplay').innerText = currentUser.name.split(' ')[0] + ' 👋';
        document.getElementById('profileName').innerText = currentUser.name;
        document.getElementById('profileEmail').innerText = currentUser.email;
        document.getElementById('profileInitials').innerText = currentUser.name.substring(0, 2).toUpperCase();

        showToast("Hesap oluşturuldu ve giriş yapıldı!", "success");
        setTimeout(() => switchNav('homeScreen'), 500);
    } else {
        showToast("Lütfen tüm alanları doğru doldurun.", "error");
    }
}

function handleLogout() {
    localStorage.removeItem('eduLearnUser');
    currentUser = null;
    showToast("Çıkış yapıldı.", "info");
    switchAuthScreen('login');
}

// --- NAVIGATION ---

function switchNav(targetScreen) {
    if(!currentUser && targetScreen !== 'login' && targetScreen !== 'register') {
        showToast("Lütfen önce giriş yapın", "error");
        return;
    }

    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(targetScreen).classList.add('active');
    activeNav = targetScreen;

    // Show/Hide bottom nav
    const bottomNav = document.getElementById('bottomNav');
    if(targetScreen === 'courseDetailScreen' || targetScreen === 'authScreen' || targetScreen === 'registerScreen') {
        bottomNav.classList.add('hidden');
    } else {
        bottomNav.classList.remove('hidden');
        // Update nav icons
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.remove('active');
            if(btn.dataset.target === targetScreen) btn.classList.add('active');
        });
    }

    if(targetScreen === 'searchScreen') populateAllCourses();
}

// --- HOME SCREEN ---

function selectCategory(el) {
    document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    showToast(el.innerText + " kategorisi seçildi", "info");
}

// --- SEARCH SCREEN ---

function populateAllCourses() {
    const list = document.getElementById('searchResults');
    list.innerHTML = '';
    courses.forEach(c => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.onclick = () => openCourseDetail(c.title);
        div.innerHTML = `
            <div class="result-icon" style="background: var(--gradient-4)"><i class="fas fa-play"></i></div>
            <div class="result-info">
                <h4>${c.title}</h4>
                <p>${c.category} • ${c.price}</p>
            </div>
            <i class="fas fa-chevron-right" style="color: var(--text-muted)"></i>
        `;
        list.appendChild(div);
    });
}

function filterCourses() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.search-result-item');
    
    items.forEach(item => {
        const title = item.querySelector('h4').innerText.toLowerCase();
        if(title.includes(query)) item.classList.remove('hidden');
        else item.classList.add('hidden');
    });
}

function setSearchQuery(tag) {
    document.getElementById('searchInput').value = tag;
    filterCourses();
}

// --- COURSE DETAIL ---

function openCourseDetail(title) {
    document.getElementById('detailTitle').innerText = title;
    document.getElementById('detailHeaderBg').style.background = `var(--gradient-${Math.floor(Math.random()*4)+1})`;
    
    // Check bookmark state
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    if(bookmarkedCourses.includes(title)) {
        bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
        bookmarkBtn.classList.add('bookmarked');
    } else {
        bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
        bookmarkBtn.classList.remove('bookmarked');
    }

    switchNav('courseDetailScreen');
}

function switchDetailTab(el, tabId) {
    document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    document.querySelectorAll('.detail-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId + 'Content').classList.add('active');
}

function playLesson(title) {
    showToast(`"${title}" dersi oynatılıyor...`, "success");
}

function enrollCourse() {
    const btn = document.getElementById('enrollBtn');
    btn.innerHTML = `<span>Devam Et</span> <i class="fas fa-play"></i>`;
    showToast("Kursa başarıyla kayıt olundu!", "success");
}

function toggleBookmark(btn) {
    const title = document.getElementById('detailTitle').innerText;
    
    if(bookmarkedCourses.includes(title)) {
        bookmarkedCourses = bookmarkedCourses.filter(t => t !== title);
        btn.innerHTML = '<i class="far fa-bookmark"></i>';
        btn.classList.remove('bookmarked');
        showToast("Favorilerden çıkarıldı", "info");
    } else {
        bookmarkedCourses.push(title);
        btn.innerHTML = '<i class="fas fa-bookmark"></i>';
        btn.classList.add('bookmarked');
        showToast("Favorilere eklendi!", "success");
    }
}

// --- NOTIFICATIONS ---

function clearNotifications() {
    document.getElementById('notifList').innerHTML = '<p style="text-align:center; margin-top:20px; color:var(--text-muted);">Bildirim bulunmuyor.</p>';
    document.getElementById('notifBadge').style.display = 'none';
}

function readNotification(el) {
    el.classList.remove('unread');
    
    // update badge
    const unreadCount = document.querySelectorAll('.notification-item.unread').length;
    const badge = document.getElementById('notifBadge');
    if(unreadCount > 0) {
        badge.innerText = unreadCount;
    } else {
        badge.style.display = 'none';
    }
}

// --- PROFILE & DARK MODE ---

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const icon = document.getElementById('darkModeToggle');
    if(isDarkMode) {
        icon.className = 'fas fa-toggle-on arrow';
        icon.style.color = 'var(--primary)';
    } else {
        icon.className = 'fas fa-toggle-off arrow';
        icon.style.color = 'var(--text-muted)';
    }
    
    localStorage.setItem('eduLearnDarkMode', isDarkMode);
    showToast(isDarkMode ? "Karanlık Mod aktif" : "Aydınlık Mod aktif", "info");
}

// --- TOAST SYSTEM ---

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fas fa-info-circle';
    if(type === 'success') icon = 'fas fa-check-circle';
    if(type === 'error') icon = 'fas fa-exclamation-circle';
    
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastExit 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
