// =================== 
// MAIN.JS - Core functionality
// ===================

// =================== 
// CUSTOM CURSOR
// ===================
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
const cursorText = document.getElementById('cursorText');

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;
let ringX = 0, ringY = 0;

if (cursorDot && cursorRing) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        ringX += (mouseX - ringX) * 0.1;
        ringY += (mouseY - ringY) * 0.1;

        cursorDot.style.left = dotX - 4 + 'px';
        cursorDot.style.top = dotY - 4 + 'px';
        cursorRing.style.left = ringX - 22.5 + 'px';
        cursorRing.style.top = ringY - 22.5 + 'px';
        
        if (cursorText) {
            cursorText.style.left = ringX + 35 + 'px';
            cursorText.style.top = ringY - 6 + 'px';
        }

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverEls = document.querySelectorAll('a, button, .project-card, .magnetic, .skill-item, .sticker, .experiment-card');
    hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.classList.add('hovering');
            if (el.dataset.cursor && cursorText) {
                cursorText.textContent = el.dataset.cursor;
                cursorText.classList.add('visible');
            }
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.classList.remove('hovering');
            if (cursorText) {
                cursorText.classList.remove('visible');
            }
        });
    });
}


// ===================
// PHOTO FRAGMENTATION (Homepage only)
// ===================
const photoContainer = document.getElementById('photoContainer');

if (photoContainer) {
    const rows = 4;
    const cols = 4;
    const fragments = [];
    
    // Match CSS dimensions
    const containerWidth = 500;
    const containerHeight = 600;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const fragment = document.createElement('div');
            fragment.className = 'photo-fragment';

            const w = containerWidth / cols;  // 125px
            const h = containerHeight / rows; // 150px

            fragment.style.width = w + 'px';
            fragment.style.height = h + 'px';
            fragment.style.left = (c * w) + 'px';
            fragment.style.top = (r * h) + 'px';

            const img = document.createElement('img');
            img.src = 'assets/images/me.webp';
            img.style.left = (-c * w) + 'px';
            img.style.top = (-r * h) + 'px';

            fragment.appendChild(img);
            photoContainer.appendChild(fragment);

            fragments.push({
                el: fragment,
                row: r,
                col: c
            });
        }
    }

    // Throttle mousemove with requestAnimationFrame
    let ticking = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // Get the projects section to define the interaction boundary
    const projectsSection = document.querySelector('.projects');
    const heroSection = document.querySelector('.hero');
    
    function updateFragments() {
        // Check if mouse is within interaction boundary (hero section)
        const heroRect = heroSection.getBoundingClientRect();
        const isInBoundary = lastMouseY <= heroRect.bottom;
        
        if (!isInBoundary) {
            // Reset fragments to default position when outside boundary
            fragments.forEach((frag) => {
                frag.el.style.transform = 'translate(0px, 0px) rotate(0deg)';
            });
            ticking = false;
            return;
        }

        const rect = photoContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = (lastMouseX - centerX) / window.innerWidth;
        const distY = (lastMouseY - centerY) / window.innerHeight;

        fragments.forEach((frag) => {
            const rowOffset = (frag.row - (rows - 1) / 2) * distY * 20;
            const colOffset = (frag.col - (cols - 1) / 2) * distX * 20;
            const rotation = distX * (frag.row - (rows - 1) / 2) * 2;

            frag.el.style.transform = `translate(${colOffset}px, ${rowOffset}px) rotate(${rotation}deg)`;
        });

        ticking = false;
    }

    document.addEventListener('mousemove', (e) => {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        if (!ticking) {
            requestAnimationFrame(updateFragments);
            ticking = true;
        }
    });

    // Random glitch with reduced frequency
    setInterval(() => {
        if (Math.random() > 0.85) { // Reduced from 0.8 to 0.85
            const randomFrag = fragments[Math.floor(Math.random() * fragments.length)];
            const glitchX = (Math.random() - 0.5) * 20;
            const glitchY = (Math.random() - 0.5) * 15;

            randomFrag.el.style.transition = 'none';
            randomFrag.el.style.transform = `translate(${glitchX}px, ${glitchY}px)`;

            setTimeout(() => {
                randomFrag.el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            }, 50);
        }
    }, 800); // Increased from 500ms to 800ms
}


// ===================
// MAGNETIC BUTTONS
// ===================
document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = '';
    });
});

// ===================
// SCROLL REVEAL
// ===================
const revealElements = document.querySelectorAll('.reveal, .reveal-left');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ===================
// SMOOTH SCROLL
// ===================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

