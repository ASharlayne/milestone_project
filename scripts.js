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

    const fields = [
        {
            field: name,
            errorId: 'error-name',
            validate: () => (name.value.trim() ? '' : 'Enter your full name.')
        },
        {
            field: email,
            errorId: 'error-email',
            validate: () => {
                const value = email.value.trim();
                if (!value) {
                    return 'Enter your email address.';
                }
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? ''
                    : 'Enter an email address in the format name@example.com.';
            }
        },
        {
            field: reasons[0],
            errorId: 'error-reason',
            controls: reasons,
            validate: () => (!reasons.length || reasons.some((radio) => radio.checked)
                ? ''
                : 'Choose a reason for contact.')
        },
        {
            field: message,
            errorId: 'error-message',
            validate: () => (message.value.trim() ? '' : 'Enter a message.')
        }
    ];

    const validateField = ({ field, errorId, controls, validate }) => {
        const msg = validate();

        if (controls) {
            setError(null, errorId, msg);
            controls.forEach((control) => {
                if (msg) {
                    control.setAttribute('aria-invalid', 'true');
                } else {
                    control.removeAttribute('aria-invalid');
                }
            });
        } else {
            setError(field, errorId, msg);
        }

        return msg ? { field, errorId, msg } : null;
    };

    const collectErrors = () => fields.map(validateField).filter(Boolean);

    fields.forEach((entry) => {
        (entry.controls || [entry.field]).filter(Boolean).forEach((control) => {
            control.addEventListener('blur', () => validateField(entry));
            control.addEventListener('change', () => validateField(entry));
            control.addEventListener('input', () => {
                if (document.getElementById(entry.errorId).textContent) {
                    validateField(entry);
                }
            });
        });
    });

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
