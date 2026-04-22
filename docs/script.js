// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cursorMain = document.querySelector('.cursor-main');
    const cursorTrail = document.querySelector('.cursor-trail');
    const aura1 = document.querySelector('.aura-1');
    const aura2 = document.querySelector('.aura-2');
    const aura3 = document.querySelector('.aura-3');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;
    let auraX = mouseX;
    let auraY = mouseY;
    
    // Dati progetti per il modal
    const projectData = {
        pcto: {
            tag: 'PCTO',
            title: 'Educazione Digitale',
            description: 'Percorso formativo sulla sicurezza online dedicato a persone con disabilità cognitive. Ho progettato materiali didattici semplificati e sessioni interattive per insegnare a riconoscere tentativi di phishing, creare password sicure e navigare in modo consapevole.',
            details: [
                'Progettazione di materiale didattico accessibile e inclusivo',
                'Comunicazione empatica e adattamento del linguaggio tecnico',
                'Fondamenti di sicurezza informatica e privacy digitale'
            ]
        },
        ms: {
            tag: 'Hardware',
            title: 'Anatomia di un Personal Computer',
            description: 'Esperienza pratica di smontaggio e rimontaggio completo di un computer desktop. L\'attività ha permesso di esplorare concretamente l\'architettura interna di un PC, riconoscendo e analizzando ogni componente hardware e le sue funzionalità.',
            details: [
                'Identificazione dei componenti: CPU, RAM, scheda madre, alimentatore',
                'Tecniche di assemblaggio e cablaggio ordinato',
                'Correlazione tra componenti fisici e logica di sistema'
            ]
        },
        sicurezza: {
            tag: 'Sicurezza',
            title: 'Prevenzione e Tutela negli Ambienti Professionali',
            description: 'Incontro formativo dedicato alla revisione dei concetti fondamentali sulla sicurezza nei luoghi di lavoro e strategie per un ambiente inclusivo.',
            details: [
                'Normativa sulla sicurezza nei luoghi di lavoro',
                'Promozione di un ambiente di lavoro inclusivo',
                'Identificazione e prevenzione dei fattori di rischio'
            ]
        },
        pcto1: {
            tag: 'Orientamento',
            title: 'Introduzione ai Percorsi',
            description: 'Attività formativa promossa dagli Uffici Scolastici Territoriali per introdurre gli studenti al mondo dei Percorsi per le Competenze Trasversali e l\'Orientamento.',
            details: [
                'Sviluppo e valorizzazione delle soft skills',
                'Normativa di riferimento per i PCTO',
                'Diritti e doveri dello studente in ambito formativo'
            ]
        },
        tepsit: {
            tag: 'Networking',
            title: 'Escape Room — Il Labirinto delle Subnet',
            description: 'Sito web interattivo in stile escape room progettato per insegnare i fondamenti del subnetting in modo ludico e coinvolgente. L\'utente deve risolvere enigmi progressivi legati al calcolo di indirizzi IP, maschere di sottorete e notazione CIDR per avanzare tra le stanze virtuali e completare la sfida.',
            details: [
                'Interattività e logica di gioco implementata con jQuery',
                'Calcolo dinamico di subnet mask, indirizzi di rete e broadcast',
                'UI design tematico per mantenere alta l\'immersione'
            ]
        },
        confindustria: {
            tag: 'Soft Skills',
            title: 'Personal Branding e Curriculum Efficace',
            description: 'Attività formativa con esperti di Confindustria focalizzata su presentazione personale e redazione del curriculum vitae.',
            details: [
                'Struttura e ottimizzazione del curriculum vitae',
                'Tecniche di presentazione personale chiara e professionale',
                'Valorizzazione di esperienze formative e competenze trasversali',
                'Comprensione delle aspettative del mercato del lavoro'
            ]
        },
        na: {
            tag: 'Diritto del Lavoro',
            title: 'Dinamiche Aziendali e Contrattualistica',
            description: 'Approfondimento sul funzionamento delle realtà aziendali e sulle principali forme contrattuali, svolto presso il Tecnopolo di Reggio Emilia.',
            details: [
                'Conoscenza della struttura e del funzionamento aziendale',
                'Analisi delle tipologie di contratti di lavoro',
                'Diritti e doveri del lavoratore dipendente',
                'Consapevolezza delle dinamiche del mercato occupazionale'
            ]
        },
        polarity: {
            tag: 'Orientamento IT',
            title: 'Inside a Tech Company',
            description: 'Incontro con i professionisti di Polarity per comprendere dall\'interno il funzionamento di un\'azienda informatica e i suoi servizi.',
            details: [
                'Comprensione del modello operativo di un\'azienda informatica',
                'Conoscenza dei servizi e degli ambiti di intervento nel settore IT',
                'Importanza dell\'equilibrio tra competenze tecniche e trasversali',
                'Orientamento verso i ruoli professionali del mondo tech'
            ]
        },
        ascolto: {
            tag: 'Project Management',
            title: 'Analisi di Progetti Software Reali',
            description: 'Osservazione e analisi dei project work presentati dagli studenti delle classi quinte, con focus su tecnologie e metodologie di sviluppo.',
            details: [
                'Comprensione della struttura di un project work informatico',
                'Analisi critica di progetti software reali',
                'Metodologie di lavoro in team e organizzazione delle attività',
                'Orientamento verso le competenze richieste nel settore IT'
            ]
        }
    };
    
    // Smooth animation loop per cursore e aura
    function animate() {
        cursorMain.style.left = mouseX + 'px';
        cursorMain.style.top = mouseY + 'px';
        
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';
        
        auraX += (mouseX - auraX) * 0.05;
        auraY += (mouseY - auraY) * 0.05;
        
        if (aura1) {
            aura1.style.left = `calc(${auraX}px - 300px)`;
            aura1.style.top = `calc(${auraY}px - 300px)`;
        }
        if (aura2) {
            aura2.style.left = `calc(${auraX}px - 250px + ${Math.sin(Date.now() / 2000) * 20}px)`;
            aura2.style.top = `calc(${auraY}px - 250px + ${Math.cos(Date.now() / 2500) * 20}px)`;
        }
        if (aura3) {
            aura3.style.left = `calc(${auraX}px - 200px + ${Math.cos(Date.now() / 1800) * 25}px)`;
            aura3.style.top = `calc(${auraY}px - 200px + ${Math.sin(Date.now() / 2200) * 25}px)`;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();

    // Movimento mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Effetti cursore
    document.addEventListener('mousedown', () => {
        cursorMain.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorTrail.style.backgroundColor = 'rgba(244, 194, 194, 0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursorMain.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorTrail.style.backgroundColor = 'var(--coquette-pink)';
    });

    // Elementi interattivi per hover cursore
    const interactiveElements = document.querySelectorAll('.project-card, .skill-badge, .detail-link, .scroll-indicator, .welcome-badge, .modal-close');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorMain.style.width = '45px';
            cursorMain.style.height = '45px';
            cursorMain.style.borderColor = 'rgba(244, 194, 194, 0.8)';
            cursorMain.style.backgroundColor = 'rgba(244, 194, 194, 0.1)';
            cursorMain.style.backdropFilter = 'blur(4px)';
            cursorTrail.style.width = '15px';
            cursorTrail.style.height = '15px';
            cursorTrail.style.backgroundColor = 'rgba(244, 194, 194, 0.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorMain.style.width = '24px';
            cursorMain.style.height = '24px';
            cursorMain.style.borderColor = 'var(--coquette-pink)';
            cursorMain.style.backgroundColor = 'transparent';
            cursorMain.style.backdropFilter = 'blur(2px)';
            cursorTrail.style.width = '8px';
            cursorTrail.style.height = '8px';
            cursorTrail.style.backgroundColor = 'var(--coquette-pink)';
        });
    });

    // Funzione per aprire il modal
    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="modal-tag">${data.tag}</span>
                <h3 class="modal-title">${data.title}</h3>
                <div class="modal-divider"></div>
                <p class="modal-description">${data.description}</p>
            </div>
            <div class="modal-details">
                <h4>Competenze sviluppate</h4>
                <ul>
                    ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Chiudi modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners per aprire modal
    document.querySelectorAll('[data-project]').forEach(card => {
        card.addEventListener('click', (e) => {
            // Evita che il click sul link "esplora" triggeri due volte
            if (e.target.classList.contains('detail-link')) {
                e.stopPropagation();
            }
            const projectId = card.dataset.project;
            openModal(projectId);
        });
    });
    
    document.querySelectorAll('.detail-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = link.dataset.project;
            openModal(projectId);
        });
    });
    
    // Chiudi modal con il bottone X
    modalClose.addEventListener('click', closeModal);
    
    // Chiudi modal cliccando sull'overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Chiudi modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    

    // Intersection Observer per fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    }, index * 100);
                });
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    // Mostra elementi già visibili
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add('visible');
            }
        });
    }, 100);

    // Effetto parallax immagini
    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            img.style.transform = `scale(1.05) translate(${x * 5}px, ${y * 5}px)`;
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Gestione visibilità cursore
    document.addEventListener('mouseleave', () => {
        cursorMain.style.opacity = '0';
        cursorTrail.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorMain.style.opacity = '1';
        cursorTrail.style.opacity = '1';
    });
});