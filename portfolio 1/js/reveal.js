/* reveal.js — scroll reveal + animated skill bars */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Reveal element
    entry.target.classList.add('visible');

    // Animate any skill bars inside
    entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
      setTimeout(() => {
        bar.style.width = bar.dataset.width + '%';
      }, 200);
    });
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
