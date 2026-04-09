
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const page = document.body.dataset.page;
const form = document.querySelector('.real-form');
const success = document.getElementById('form-success');

const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
};

if (nav && page) {
  nav.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    const isActive =
      (page === 'home' && href === 'index.html') ||
      (page === 'programs' && href === 'programs.html') ||
      (page === 'about' && href === 'about.html') ||
      (page === 'pricing' && href === 'pricing.html') ||
      (page === 'book' && href === 'book.html');
    if (isActive) link.classList.add('active');
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('visible'));
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const missingConfig = Object.values(EMAILJS_CONFIG).some((value) => value.startsWith('YOUR_'));
    if (missingConfig) {
      success.textContent = 'Replace the EmailJS placeholders in script.js with your real service ID, template ID and public key.';
      return;
    }
    if (!window.emailjs) {
      success.textContent = 'EmailJS failed to load. Please refresh and try again.';
      return;
    }
    try {
      window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
      await window.emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form);
      success.textContent = 'Thanks — your enquiry has been sent successfully.';
      form.reset();
    } catch (error) {
      success.textContent = 'Something went wrong sending the form. Please try again or email admin@adrus.com.au.';
    }
  });
}
