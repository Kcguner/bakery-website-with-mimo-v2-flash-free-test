// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .menu-category, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Add to Cart functionality
const orderButtons = document.querySelectorAll('.order-btn');
const cart = [];

orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // Add to cart
        cart.push({
            name: productName,
            price: productPrice
        });
        
        // Visual feedback
        this.textContent = '✓ Eklendi';
        this.style.background = '#4ecdc4';
        
        setTimeout(() => {
            this.textContent = 'Sepete Ekle';
            this.style.background = '';
        }, 2000);
        
        // Show notification
        showNotification(`${productName} sepete eklendi!`);
    });
});

// Form submission
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            // Show success message
            showSuccessMessage('Siparişiniz alınmıştır! En kısa sürede sizinle iletişime geçeceğiz.');
            
            // Log form data (in real app, this would be sent to server)
            const formData = new FormData(this);
            console.log('Sipariş Detayı:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
        }, 2000);
    });
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--dark-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 2000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Success message modal
function showSuccessMessage(message) {
    const modal = document.createElement('div');
    modal.className = 'success-message';
    modal.textContent = message;
    document.body.appendChild(modal);
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.opacity = '1';
        modal.classList.add('show');
    }, 100);
    
    // Close on click
    const close = () => {
        modal.classList.remove('show');
        overlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
        }, 300);
    };
    
    overlay.addEventListener('click', close);
    modal.addEventListener('click', close);
    
    // Auto close after 4 seconds
    setTimeout(close, 4000);
}

// Product card hover effect enhancement
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Menu category click effect
document.querySelectorAll('.menu-category').forEach(category => {
    category.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add typing effect to hero text
const heroTitle = document.querySelector('.hero h1');
const heroText = document.querySelector('.hero p');

if (heroTitle && heroText) {
    const originalTitle = heroTitle.textContent;
    const originalText = heroText.textContent;
    
    heroTitle.textContent = '';
    heroText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalTitle.length) {
            heroTitle.textContent += originalTitle.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            let j = 0;
            const typeWriter2 = () => {
                if (j < originalText.length) {
                    heroText.textContent += originalText.charAt(j);
                    j++;
                    setTimeout(typeWriter2, 50);
                }
            };
            setTimeout(typeWriter2, 300);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add ripple effect to buttons
document.querySelectorAll('button, .cta-btn, .order-btn, .submit-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to styles
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations can be added here
    console.log('Scroll event processed');
}, 100);

window.addEventListener('scroll', debouncedScroll);

// Console greeting for developers
console.log('%c🥐 Lezzet Pastanesi', 'font-size: 20px; font-weight: bold; color: #ff6b6b;');
console.log('%cWeb sitesi başarıyla yüklendi!', 'font-size: 14px; color: #4ecdc4;');
console.log('%cİyi alışverişler! 🎂', 'font-size: 12px; color: #666;');