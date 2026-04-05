// Generate Star Background in CSS
function generateStars(elementId, count, size, duration) {
    const layer = document.getElementById(elementId);
    let boxShadow = '';

    // Generate 'count' number of random coordinates
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        boxShadow += `${x}px ${y}px #FFF`;
        if (i < count - 1) boxShadow += ', ';
    }

    // Create a dynamic style tag for this star layer
    const style = document.createElement('style');
    style.innerHTML = `
        #${elementId} {
            width: ${size}px;
            height: ${size}px;
            background: transparent;
            box-shadow: ${boxShadow};
            animation: animStar ${duration}s linear infinite;
        }
        #${elementId}::after {
            content: " ";
            position: absolute;
            top: 2000px;
            width: ${size}px;
            height: ${size}px;
            background: transparent;
            box-shadow: ${boxShadow};
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
    // Generate different layers of stars for parallax effect
    generateStars('stars', 700, 1, 50);
    generateStars('stars2', 200, 2, 100);
    generateStars('stars3', 100, 3, 150);

    // Global Keyframe for star animation moving upwards
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        @keyframes animStar {
            from { transform: translateY(0px); }
            to { transform: translateY(-2000px); }
        }
    `;
    document.head.appendChild(globalStyle);

    // Add simple scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-panel, .card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
