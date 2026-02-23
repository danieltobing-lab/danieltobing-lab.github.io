/* cursor.js — custom magnetic cursor */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
});

// Smooth lagging ring
(function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
  requestAnimationFrame(animRing);
})();

// Expand ring on interactive elements
const interactives = document.querySelectorAll('a, button, .project-card, .service-card, .skill-item');
interactives.forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width   = '52px';
    ring.style.height  = '52px';
    ring.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width   = '32px';
    ring.style.height  = '32px';
    ring.style.opacity = '0.5';
  });
});
