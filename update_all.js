const fs = require('fs');

const scriptContent = fs.readFileSync('script.js', 'utf8');
const lugaresContent = fs.readFileSync('lugares.js', 'utf8');
const testimoniosContent = fs.readFileSync('testimonios.js', 'utf8');

// Replace lugaresData in script.js
let newScript = scriptContent.replace(
    /const lugaresData = \[[\s\S]*?\];/m, 
    lugaresContent.trim()
);

// Append testimoniosData and logic to script.js
const testimoniosLogic = `

${testimoniosContent.trim()}

// Render Testimonios
document.addEventListener('DOMContentLoaded', () => {
    const testimoniosRoot = document.getElementById('testimonios-root');
    if (testimoniosRoot) {
        testimoniosData.forEach((testimonio, i) => {
            const card = document.createElement('div');
            card.className = "testimonio-card fade-in";
            card.innerHTML = \`
                <div class="testimonio-icon">\${testimonio.icon}</div>
                <div class="testimonio-content">
                    <h3>\${testimonio.name}</h3>
                    <p class="testimonio-info">\${testimonio.info}</p>
                    <blockquote class="testimonio-text">\${testimonio.text}</blockquote>
                </div>
            \`;
            testimoniosRoot.appendChild(card);
            // Observer is already defined in script.js, but let's re-observe it manually or use a new observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(card);
        });
    }
});
`;

newScript = newScript + testimoniosLogic;
fs.writeFileSync('script.js', newScript);

// Edit index.html
let htmlContent = fs.readFileSync('index.html', 'utf8');
htmlContent = htmlContent.replace(
    "Brandon Aguirre, Zoe Aguilar, Maximo Maciel.",
    "Brandon Aguirre, Zoe Aguilar, Maximo Maciel, Nayra gonzalez, Ian Molina, Ian rojas."
);
htmlContent = htmlContent.replace(
    '<li><a href="#lugares-historicos">Lugares Históricos</a></li>',
    '<li><a href="#lugares-historicos">Lugares Históricos</a></li>\\n                <li><a href="#testimonios">Testimonios</a></li>'
);
const testimoniosHTML = `
        <section id="testimonios" class="testimonios-section">
            <div class="container testimonios-container">
                <h2 class="section-title centered">Testimonios del Horror</h2>
                <div class="testimonios-list" id="testimonios-root">
                    <!-- Injected via JS -->
                </div>
            </div>
        </section>
`;
htmlContent = htmlContent.replace('</main>', testimoniosHTML + '\\n    </main>');
fs.writeFileSync('index.html', htmlContent);

// Edit style.css
const styles = `
/* Testimonios Section */
.testimonios-section {
    background-color: var(--darker);
    padding: 100px 0;
    color: white;
}
.testimonios-container {
    max-width: 800px;
}
.testimonio-card {
    background: transparent;
    border-left: 2px solid rgba(255,255,255,0.2);
    padding: 40px 0 40px 40px;
    margin-bottom: 80px;
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
    display: flex;
    gap: 30px;
}
.testimonio-card.show {
    opacity: 1;
    transform: translateY(0);
    border-color: var(--light-blue);
}
.testimonio-icon {
    font-size: 3rem;
    line-height: 1;
}
.testimonio-content h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: var(--accent);
}
.testimonio-info {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
}
.testimonio-text {
    font-size: 1.25rem;
    font-style: italic;
    line-height: 1.8;
    color: #f0f0f0;
}
`;
fs.appendFileSync('style.css', styles);

console.log("Updates applied successfully.");
