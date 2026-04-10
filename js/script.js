// ===== COUNTDOWN TIMER =====
function startCountdown() {
  const eventDate = new Date('June 27, 2025').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = '<h3 style="text-align: center; color: white;">The conference has started!</h3>';
    }
  };

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== NAVBAR TOGGLE (MOBILE) =====
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarToggle.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarToggle.classList.remove('active');
  });
});

// Set active nav link based on current page
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');

    if (currentPage === 'index.html' || currentPage === '') {
      if (href === '#home') link.classList.add('active');
    } else if (currentPage === 'schedule.html' && href === 'schedule.html') {
      link.classList.add('active');
    } else if (currentPage === 'register.html' && href === 'register.html') {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);

// ===== MODAL FUNCTIONALITY ===== */
const registerModal = document.getElementById('registerModal');

function openRegisterModal(e) {
  if (e) e.preventDefault();
  registerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
  registerModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === registerModal) {
    closeRegisterModal();
  }
});

/* ===== FORM HANDLERS ===== */
function handleRegisterSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const phone = document.getElementById('regPhone').value;
  const category = document.getElementById('regCategory').value;

  // Validate phone
  if (phone.length < 10) {
    alert('Please enter a valid phone number');
    return;
  }

  // Here you would normally send data to a server
  // For now, we'll show a success message
  const formData = {
    name,
    email,
    phone,
    category,
    timestamp: new Date().toISOString()
  };

  console.log('Registration Data:', formData);
  localStorage.setItem('lastRegistration', JSON.stringify(formData));

  alert(`Thank you for registering, ${name}! \n\nA confirmation email has been sent to ${email}.`);

  // Reset form
  document.getElementById('registerForm').reset();
  closeRegisterModal();
}

function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;

  const contactData = {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  console.log('Contact Message:', contactData);
  localStorage.setItem('lastContact', JSON.stringify(contactData));

  alert(`Thank you for reaching out, ${name}! \n\nWe'll get back to you shortly at ${email}.`);

  // Reset form
  document.getElementById('contactForm').reset();
}

/* ===== SCROLL ANIMATIONS ===== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and feature items
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card, .feature-item, .stat-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

/* ===== SMOOTH SCROLL ENHANCEMENT ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#home') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

/* ===== NAVBAR BACKGROUND ON SCROLL ===== */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

/* ===== UTILITY FUNCTIONS ===== */

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
}

// Validate email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Get URL parameters
function getUrlParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Log page view (for analytics)
function logPageView(page) {
  console.log('Page View:', page, new Date().toISOString());
}

// Initialize on page load
window.addEventListener('load', () => {
  logPageView(document.title);
  console.log('HOPECON 2025 - Medical Conference Platform Loaded');

  // Start countdown if countdown element exists
  if (document.getElementById('countdown')) {
    startCountdown();
  }
});

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */

// Add keyboard support for modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeRegisterModal();
  }
});

// Add focus management for modal
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusableElements = registerForm.querySelectorAll(
        'input, textarea, select, button'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
}

/* ===== DEBUG MODE ===== */
// Uncomment for debugging
// window.DEBUG = true;
// if (window.DEBUG) {
//   console.log('Debug mode enabled');
//   window.logData = () => {
//     console.log('LocalStorage:', localStorage);
//   };
// }
