// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ============================================
// HEADER SHADOW ON SCROLL
// ============================================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .process-step, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// NEWSLETTER FORM HANDLING
// ============================================

const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        newsletterForm.reset();
    }
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

// Add click handlers to all CTA buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    if (!button.closest('form')) {
        button.addEventListener('click', (e) => {
            // Check button text to determine action
            const buttonText = button.textContent.trim();
            
            if (buttonText === 'Request Service') {
                alert('Thank you for your interest! Our team will contact you shortly.\n\nPhone: +255 792 178 828\nEmail: info@holdwell.co.tz');
            } else if (buttonText === 'Explore Products') {
                document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            } else if (buttonText === 'Learn More') {
                alert('Product details coming soon! Contact us for more information.\n\nPhone: +255 792 178 828');
            }
        });
    }
});

// ============================================
// SMOOTH HOVER EFFECTS
// ============================================

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function(e) {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// PERFORMANCE: LAZY LOADING
// ============================================

// Initialize lazy loading for images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// CONSOLE BRANDING
// ============================================

console.log('%c Holdwell LTD ', 'background: #008000; color: #ffffff; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Strategic Consulting & Services ', 'color: #008000; font-size: 14px;');
console.log('%c Website by Holdwell Digital Solutions ', 'color: #666; font-size: 12px;');
