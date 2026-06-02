// Screen navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function switchNav(btn, screenId) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');
    showScreen(screenId);
}

// Detail tabs
function switchDetailTab(btn, tabName) {
    document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.detail-content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabName + 'Content').classList.add('active');
}

// Search filter
function filterCourses() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('.search-result-item').forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        if (name.includes(query) || query === '') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Update status bar time
function updateTime() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('statusTime').textContent = h + ':' + m;
}
updateTime();
setInterval(updateTime, 60000);

// Animate progress bars on load
window.addEventListener('load', () => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
