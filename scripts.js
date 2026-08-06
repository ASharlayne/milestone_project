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

    // Contact form validation and accessible error states
    const form = document.getElementById('contact-form');
    if (form) {
        const name = document.getElementById('contact-name');
        const email = document.getElementById('contact-email');
        const message = document.getElementById('contact-message');
        const status = document.getElementById('form-status');

        const setError = (el, msg) => {
            const errEl = document.getElementById('error-' + el.id.split('-').pop());
            if (errEl) errEl.textContent = msg;
            el.setAttribute('aria-invalid', msg ? 'true' : 'false');
        };

        const validate = () => {
            let valid = true;
            // name
            if (!name.value.trim()) { setError(name, 'Please enter your name.'); valid = false; } else { setError(name, ''); }
            // email
            if (!email.value.trim()) { setError(email, 'Please enter your email.'); valid = false; }
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { setError(email, 'Please enter a valid email address.'); valid = false; }
            else { setError(email, ''); }
            // message
            if (!message.value.trim()) { setError(message, 'Please enter a message.'); valid = false; } else { setError(message, ''); }
            return valid;
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            status.textContent = '';
            if (validate()) {
                // Simulate successful submission
                status.textContent = 'Message sent — thank you!';
                form.reset();
            } else {
                status.textContent = 'Please correct the errors above and try again.';
            }
        });
    }
});
