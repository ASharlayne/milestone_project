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

const initContactForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) {
        return;
    }

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    const reasons = Array.from(form.querySelectorAll('input[name="reason"]'));
    const status = document.getElementById('form-status');
    const summary = document.getElementById('form-error-summary');
    const summaryList = document.getElementById('form-error-summary-list');

    const setError = (field, errorId, msg) => {
        const errorEl = document.getElementById(errorId);
        if (errorEl) {
            errorEl.textContent = msg;
        }
        if (field) {
            field.setAttribute('aria-invalid', msg ? 'true' : 'false');
        }
    };

    const collectErrors = () => {
        const errors = [];

        if (!name.value.trim()) {
            errors.push({ field: name, errorId: 'error-name', msg: 'Enter your full name.' });
            setError(name, 'error-name', 'Enter your full name.');
        } else {
            setError(name, 'error-name', '');
        }

        if (!email.value.trim()) {
            errors.push({ field: email, errorId: 'error-email', msg: 'Enter your email address.' });
            setError(email, 'error-email', 'Enter your email address.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            errors.push({ field: email, errorId: 'error-email', msg: 'Enter an email address in the format name@example.com.' });
            setError(email, 'error-email', 'Enter an email address in the format name@example.com.');
        } else {
            setError(email, 'error-email', '');
        }

        if (reasons.length && !reasons.some((radio) => radio.checked)) {
            errors.push({ field: reasons[0], errorId: 'error-reason', msg: 'Choose a reason for contact.' });
            setError(null, 'error-reason', 'Choose a reason for contact.');
            reasons.forEach((radio) => radio.setAttribute('aria-invalid', 'true'));
        } else {
            setError(null, 'error-reason', '');
            reasons.forEach((radio) => radio.removeAttribute('aria-invalid'));
        }

        if (!message.value.trim()) {
            errors.push({ field: message, errorId: 'error-message', msg: 'Enter a message.' });
            setError(message, 'error-message', 'Enter a message.');
        } else {
            setError(message, 'error-message', '');
        }

        return errors;
    };

    const showSummary = (errors) => {
        summaryList.innerHTML = '';
        errors.forEach(({ field, msg }) => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + field.id;
            link.textContent = msg;
            link.addEventListener('click', (event) => {
                event.preventDefault();
                field.focus();
            });
            item.appendChild(link);
            summaryList.appendChild(item);
        });
        summary.hidden = false;
        summary.focus();
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.textContent = '';
        const errors = collectErrors();

        if (errors.length) {
            showSummary(errors);
            return;
        }

        summary.hidden = true;
        summaryList.innerHTML = '';
        status.textContent = 'Thank you — your message has been sent.';
        form.reset();
    });
};

window.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    initProjectFilters();
    initContactForm();
});
