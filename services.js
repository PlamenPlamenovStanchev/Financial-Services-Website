// Services Page Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-detail-card');
    
    serviceCards.forEach(card => {
        const header = card.querySelector('.service-card-header');
        const content = card.querySelector('.service-content');
        const expandIcon = card.querySelector('.expand-icon');
        
        if (header && content) {
            header.style.cursor = 'pointer';
            
            header.addEventListener('click', function() {
                const isVisible = content.style.display !== 'none';
                
                // Close all other cards
                serviceCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherContent = otherCard.querySelector('.service-content');
                        const otherIcon = otherCard.querySelector('.expand-icon');
                        if (otherContent && otherIcon) {
                            otherContent.style.display = 'none';
                            otherIcon.textContent = '+';
                            otherIcon.style.transform = 'rotate(0deg)';
                            otherCard.classList.remove('expanded');
                        }
                    }
                });
                
                // Toggle current card
                if (isVisible) {
                    content.style.display = 'none';
                    expandIcon.textContent = '+';
                    expandIcon.style.transform = 'rotate(0deg)';
                    card.classList.remove('expanded');
                } else {
                    content.style.display = 'block';
                    expandIcon.textContent = '−';
                    expandIcon.style.transform = 'rotate(180deg)';
                    card.classList.add('expanded');
                    
                    // Smooth scroll to the card
                    setTimeout(() => {
                        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            });
            
            // Add hover effect to header
            header.addEventListener('mouseenter', function() {
                if (!card.classList.contains('expanded')) {
                    header.style.backgroundColor = 'rgba(184, 134, 11, 0.05)';
                }
            });
            
            header.addEventListener('mouseleave', function() {
                if (!card.classList.contains('expanded')) {
                    header.style.backgroundColor = 'transparent';
                }
            });
        }
    });
    
    // Add smooth animations to charts and tables when they appear
    observeElements();
});

// Intersection Observer for fade-in animations
function observeElements() {
    const options = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    const elementsToObserve = document.querySelectorAll(
        '.service-chart-container, .service-table-container'
    );
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
