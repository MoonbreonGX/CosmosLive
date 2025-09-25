/* script.js - shared by index.html and factfiles.html */
console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  const toggleBtn = document.getElementById('toggleBtn');

  // defensive checks
  if (!sidebar || !content || !toggleBtn) {
    console.warn('Missing main UI elements (sidebar/content/toggle).');
  }

  // Toggle sidebar open/close
  window.toggleSidebar = function () {
    sidebar.classList.toggle('closed');
    content.classList.toggle('shifted');

    // update aria-expanded on toggle button if present
    const expanded = !sidebar.classList.contains('closed');
    toggleBtn.setAttribute('aria-pressed', String(!sidebar.classList.contains('closed')));
  };

  toggleBtn.addEventListener('click', window.toggleSidebar);

  // UK Local Time clock (if #clock exists)
  function updateClock() {
    const el = document.getElementById('clock');
    if (!el) return;
    const now = new Date();
    const options = {
      timeZone: "Europe/London",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    el.textContent = now.toLocaleString('en-GB', options);
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Starfield generation (append to #starfield)
  const starfield = document.getElementById('starfield');
  if (starfield) {
    const num = 90;
    for (let i = 0; i < num; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const size = Math.random() * 2 + 0.6;
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.top = `${Math.random() * 100}%`;
      // randomize animation timing
      const dur = (Math.random() * 3 + 2).toFixed(2) + 's';
      s.style.animationDuration = dur;
      const delay = (Math.random() * 5).toFixed(2) + 's';
      s.style.animationDelay = delay;
      starfield.appendChild(s);
    }
  }
});
