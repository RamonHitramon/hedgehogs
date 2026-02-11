/**
 * HEDGEHOGS — Lost in the Fog, Still Hunting Gems
 * Single-page landing: cursor, fog parallax, scroll reveal, copy contract
 */

(function () {
  'use strict';

  // ---------- Custom Cursor (candle + flame) ----------
  const cursorDot = document.getElementById('cursor-dot');
  const cursorCandle = document.getElementById('cursor-candle');

  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  if (cursorDot && cursorCandle && !isTouchDevice()) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Slightly scale candle over interactive elements
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest('a, button')) {
        cursorCandle.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (!e.target.closest('a, button')) {
        cursorCandle.classList.remove('cursor-hover');
      }
    });

    function animateCursor() {
      const ease = 0.15;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;
      cursorDot.style.left = cursorX + 'px';
      cursorDot.style.top = cursorY + 'px';
      cursorCandle.style.left = cursorX + 'px';
      cursorCandle.style.top = cursorY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  } else {
    document.body.classList.add('no-custom-cursor');
  }

  // Fog is fixed (position: fixed) so it stays in viewport while content scrolls = parallax depth.
  // Drift animation is handled in CSS (.fog-layer keyframes).
  // No JS transform so we don't override the CSS animation.

  // ---------- Scroll reveal (sections) ----------
  const sections = document.querySelectorAll('.section');
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(function (section) {
    observer.observe(section);
  });

  // ---------- Copy contract address + toast ----------
  const contractEl = document.getElementById('contract-address');
  const btnCopy = document.getElementById('btn-copy-contract');
  const toast = document.getElementById('copy-toast');

  const CONTRACT_PLACEHOLDER = '';

  if (btnCopy && contractEl && toast) {
    btnCopy.addEventListener('click', function () {
      const text = contractEl.textContent.trim();
      if (!text || text === CONTRACT_PLACEHOLDER) return;
      navigator.clipboard.writeText(text).then(function () {
        toast.classList.add('show');
        setTimeout(function () {
          toast.classList.remove('show');
        }, 2000);
      }).catch(function () {
        toast.textContent = 'Copy failed';
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 2000);
      });
    });
  }

  // ---------- Lazy load images (optional fade-in) ----------
  const lazyImages = document.querySelectorAll('.meme-card, .lore-img-wrap img, .hero-image');
  if ('loading' in HTMLImageElement.prototype) {
    lazyImages.forEach(function (img) {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', function () {
          img.classList.add('loaded');
        });
      }
    });
  } else {
    lazyImages.forEach(function (img) {
      img.classList.add('loaded');
    });
  }

  // ---------- Meme grid: optional dynamic list from /images ----------
  // If you add more images to images/, list them here to auto-build the gallery:
  const IMAGE_LIST = [
    'images/meme1.png',
    'images/meme2.png',
    'images/meme3.png',
    'images/meme4.png',
    'images/meme5.png',
    'images/meme6.png'
  ];
  // Uncomment below to rebuild gallery from IMAGE_LIST (and remove static imgs from HTML):
  /*
  const memeGrid = document.getElementById('meme-grid');
  if (memeGrid) {
    memeGrid.innerHTML = '';
    IMAGE_LIST.forEach(function (src) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'HEDGEHOGS meme';
      img.className = 'meme-card';
      img.loading = 'lazy';
      memeGrid.appendChild(img);
    });
  }
  */
})();
