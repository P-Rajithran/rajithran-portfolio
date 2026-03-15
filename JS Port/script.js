// ==== SMOOTH SCROLL FOR LINKS & BUTTONS ====
document.querySelectorAll('.nav-links a, .sound-btn').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href') || '#about';
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Close mobile nav if open
    navLinks.classList.remove('active');
  });
});

// ==== CLICK SOUND EFFECT ====
const clickSound = new Audio('sound.mp3'); // Make sure this file is present in root folder
clickSound.volume = 0.3;

document.querySelectorAll('button, .sound-btn, .resume-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// ==== SCROLL REVEAL ANIMATION ====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// ==== NAVBAR SCROLL SHADOW ====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ==== HAMBURGER MENU TOGGLE ====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
