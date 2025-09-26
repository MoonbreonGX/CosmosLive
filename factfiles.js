/* factfiles.js */
console.log('factfiles.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  // Make all cards expandable by header or button
  const cards = document.querySelectorAll('.fact-card');
  
  cards.forEach(card => {
    const header = card.querySelector('.fact-title');
    const button = card.querySelector('.expand-btn');
    const targetId = header?.getAttribute('data-target') || button?.getAttribute('aria-controls');
    const detail = document.getElementById(targetId);

    if (!targetId || !detail) return;

    // Expand/collapse when clicking the title
    if (header) {
      header.addEventListener('click', () => {
        toggleDetail(detail, button);
      });
    }

    // Expand/collapse when clicking the button
    if (button) {
      button.addEventListener('click', () => {
        toggleDetail(detail, button);
      });
    }
  });
});

function toggleDetail(detailEl, btn) {
  const isOpen = detailEl.classList.toggle('show');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}
