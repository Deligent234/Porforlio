// Add subtle animations
document.addEventListener('DOMContentLoaded', function() {
    // Logo animation
    const logo = document.querySelector('.logo');
    setTimeout(() => {
        logo.style.transform = 'scale(1.05)';
        setTimeout(() => {
            logo.style.transform = 'scale(1)';
        }, 300);
    }, 500);
            
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
            
    // Social icon animations
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 600 + (index * 100));
    });
});