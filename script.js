document.addEventListener('DOMContentLoaded', () => {
    console.log("Biz Insight Club Website Initialized");

    // Marquee Pause on Hover logic (standard brutalist interaction)
    const marqueeContainer = document.querySelector('.marquee-container');
    const marqueeContent = document.querySelector('.marquee-content');

    if (marqueeContainer && marqueeContent) {
        marqueeContainer.addEventListener('mouseover', () => {
            marqueeContent.style.animationPlayState = 'paused';
        });

        marqueeContainer.addEventListener('mouseout', () => {
            marqueeContent.style.animationPlayState = 'running';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
