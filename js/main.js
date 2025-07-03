// Main JavaScript functionality for the portfolio website

// Initialize the skills chart
function initSkillsChart() {
    const ctx = document.getElementById('skillsChart');
    if (!ctx) return null;
    
    // For testing environment, we need to handle the case where getContext is not available
    try {
        return new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: [
                'Python', 
                'Функциональное тестирование', 
                'Ручное тестирование', 
                'Тестирование Web', 
                'Работа с базами данных', 
                'Git',
                'Поиск информации'
            ],
            datasets: [{
                label: 'Уровень владения',
                data: [5, 5, 5, 5, 5, 5, 5],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)', /* Blue */
                    'rgba(34, 197, 94, 0.7)',  /* Green */
                    'rgba(16, 185, 129, 0.7)', /* Teal */
                    'rgba(13, 148, 136, 0.7)', /* Dark Teal */
                    'rgba(234, 179, 8, 0.7)',  /* Yellow */
                    'rgba(249, 115, 22, 0.7)', /* Orange */
                    'rgba(99, 102, 241, 0.7)'  /* Indigo */
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(13, 148, 136, 1)',
                    'rgba(234, 179, 8, 1)',
                    'rgba(249, 115, 22, 1)',
                    'rgba(99, 102, 241, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#e5e7eb' /* Light gray grid lines */
                    },
                    ticks: {
                        color: '#6b7280' /* Gray tick labels */
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#6b7280' /* Gray tick labels */
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += context.parsed.x + ' / 100';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
    } catch (error) {
        console.warn('Error initializing chart:', error);
        return {};  // Return empty object for testing
    }
}

// Initialize mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    if (!mobileMenuButton || !mobileMenu || !menuOpenIcon || !menuCloseIcon) return;

    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });
    
    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu if open when a nav link is clicked
            if (mobileMenu.classList.contains('hidden') === false) {
                mobileMenu.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
            }
        });
    });
}

// Initialize certificate modal functionality
function initCertificateModal() {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    if (!modal || !modalImage || !closeBtn) return;

    document.querySelectorAll('.card[data-certificate-img]').forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'flex'; /* Use flex to center content */
            modalImage.src = card.dataset.certificateImg;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize all functionality when DOM is loaded
function initApp() {
    initSkillsChart();
    initMobileMenu();
    initCertificateModal();
}

// Run initialization when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initApp);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initSkillsChart,
        initMobileMenu,
        initCertificateModal,
        initApp
    };
}