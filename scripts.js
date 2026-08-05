const updateActiveNavLink = () => {
    const path = window.location.pathname.split('/').pop();
    document.querySelectorAll('.header-links a').forEach((link) => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === path || (href === 'index.html' && path === ''));
    });
};

const initProjectFilters = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    if (!filterButtons.length || !projectCards.length) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach((card) => {
                const category = card.dataset.category;
                card.style.display = filter === 'all' || category === filter ? 'grid' : 'none';
            });
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    initProjectFilters();
});
