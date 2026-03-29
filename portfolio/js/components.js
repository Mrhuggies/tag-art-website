// ===================
// COMPONENTS.JS - Loads shared partials
// ===================

// Determine base path based on current location
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/projects/')) {
        return '..';
    }
    return '.';
}

const basePath = getBasePath();

// Load Navigation
const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
    fetch(`${basePath}/partials/nav.html`)
        .then(response => {
            if (!response.ok) throw new Error('Nav not found');
            return response.text();
        })
        .then(html => {
            navPlaceholder.innerHTML = html;
            // Set correct paths after nav is loaded
            const isInSubfolder = window.location.pathname.includes('/projects/');
            const prefix = isInSubfolder ? '../' : '';
            const experimentsPath = isInSubfolder ? 'creative-experiments.html' : 'projects/creative-experiments.html';
            
            document.querySelector('.nav-home-link').href = prefix + 'index.html';
            document.querySelector('.nav-work-link').href = prefix + 'index.html#work';
            document.querySelector('.nav-about-link').href = prefix + 'index.html#about';
            document.querySelector('.nav-experiments-link').href = experimentsPath;
            document.querySelector('.nav-contact-link').href = prefix + 'index.html#contact';
            
            initNavHovers();
        })
        .catch(err => {
            console.error('Error loading nav:', err);
            // Fallback inline nav
            const isInSubfolder = window.location.pathname.includes('/projects/');
            const prefix = isInSubfolder ? '../' : '';
            const experimentsPath = isInSubfolder ? 'creative-experiments.html' : 'projects/creative-experiments.html';
            navPlaceholder.innerHTML = `
                <nav class="nav">
                    <div class="nav-logo"><a href="${prefix}index.html">TH</a></div>
                    <div class="nav-links">
                        <a href="${prefix}index.html#work">WORK</a>
                        <a href="${prefix}index.html#about">ABOUT</a>
                        <a href="${experimentsPath}">EXPERIMENTS</a>
                        <a href="${prefix}index.html#contact">CONTACT</a>
                    </div>
                </nav>
            `;
        });
}

// Load Footer
const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) {
    fetch(`${basePath}/partials/footer.html`)
        .then(response => {
            if (!response.ok) throw new Error('Footer not found');
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
        })
        .catch(err => {
            console.error('Error loading footer:', err);
            // Fallback inline footer
            const prefix = basePath === '..' ? '../' : '';
            footerPlaceholder.innerHTML = `
                <footer class="footer">
                    <div class="footer-left">© 2026 THOMAS HUGHES</div>
                    <div class="footer-center">TH</div>
                    <div class="footer-right">
                        <a href="https://www.linkedin.com/in/thomashughesuk/" class="footer-link" target="_blank">LINKEDIN</a>
                        <a href="https://github.com/thomashughes" class="footer-link" target="_blank">GITHUB</a>
                        <a href="https://tag-art.co.uk" class="footer-link" target="_blank">TAG-ART</a>
                    </div>
                </footer>
            `;
        });
}

// Initialize nav hover effects after loading
function initNavHovers() {
    const navLinks = document.querySelectorAll('.nav-links a, .nav-logo a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const cursorRing = document.getElementById('cursorRing');
            if (cursorRing) cursorRing.classList.add('hovering');
        });
        link.addEventListener('mouseleave', () => {
            const cursorRing = document.getElementById('cursorRing');
            if (cursorRing) cursorRing.classList.remove('hovering');
        });
    });
}
