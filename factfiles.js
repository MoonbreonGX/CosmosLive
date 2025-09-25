/* factfiles.js */
console.log('factfiles.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  // Buttons with data-target behavior
  const headers = document.querySelectorAll('.fact-title');
  headers.forEach(h => {
    h.addEventListener('click', (e) => {
      const id = h.getAttribute('data-target');
      if (!id) return;
      toggleDetail(id);
      // update the related expand button aria-expanded
      const btn = h.parentElement.querySelector('.expand-btn');
      if (btn) btn.setAttribute('aria-expanded', String(document.getElementById(id).classList.contains('show')));
    });
  });

  // also wire expand buttons
  const expandButtons = document.querySelectorAll('.expand-btn');
  expandButtons.forEach(b => {
    b.addEventListener('click', () => {
      const id = b.getAttribute('aria-controls');
      if (!id) return;
      toggleDetail(id);
      b.setAttribute('aria-expanded', String(document.getElementById(id).classList.contains('show')));
    });
  });
});

// Exposed function for simple toggling
function toggleDetail(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('show');
}
