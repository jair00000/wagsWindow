// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add active class to current navigation item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('.nav-links a');
menuItems.forEach(item => {
  if (item.href === currentLocation) {
    item.classList.add('active');
  }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Hamburger menu toggle for responsive navbar
const hamburger = document.getElementById('navbarHamburger');
const menu = document.getElementById('navbarMenu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
}

// Training Gallery Slider
const trainingImages = [
  'public/images/trainings/justine-training.jpg',
  'public/images/trainings/Training _ Wet glaze 2.jpg',
  'public/images/trainings/Training _ Wetglaze 5.jpg'
];
let trainingIndex = 0;
const trainingImg = document.getElementById('trainingSliderImg');
if (trainingImg) {
  setInterval(() => {
    trainingImg.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
    trainingImg.style.transform = 'translateX(-100%)';
    trainingImg.style.opacity = '0';
    setTimeout(() => {
      trainingIndex = (trainingIndex + 1) % trainingImages.length;
      trainingImg.src = trainingImages[trainingIndex];
      trainingImg.style.transition = 'none';
      trainingImg.style.transform = 'translateX(100%)';
      setTimeout(() => {
        trainingImg.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
        trainingImg.style.transform = 'translateX(0)';
        trainingImg.style.opacity = '1';
      }, 30);
    }, 700);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  const faqAccordion = document.getElementById('faqAccordion');
  if (faqAccordion) {
    const items = faqAccordion.querySelectorAll('.faq-item');
    const questions = faqAccordion.querySelectorAll('.faq-question');
    questions.forEach((btn, idx) => {
      btn.addEventListener('click', function() {
        items.forEach((item, i) => {
          const answer = item.querySelector('.faq-answer');
          const questionBtn = item.querySelector('.faq-question');
          if (i === idx) {
            const isOpen = item.classList.contains('open');
            item.classList.toggle('open', !isOpen);
            questionBtn.setAttribute('aria-expanded', !isOpen);
          } else {
            item.classList.remove('open');
            questionBtn.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
    // Optionally, open the first item by default:
    // items[0].classList.add('open');
    // questions[0].setAttribute('aria-expanded', 'true');
  }
}); 