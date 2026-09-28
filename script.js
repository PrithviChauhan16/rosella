document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // Booking Form Logic
    const formDate = document.getElementById('form-date');
    if(formDate) formDate.setAttribute('min', new Date().toISOString().split('T')[0]);

    const form = document.getElementById('booking-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('form-success-msg');
            msg.classList.remove('hidden');
            form.reset();
            setTimeout(() => msg.classList.add('hidden'), 5000);
        });
    }

    // WhatsApp Drag Logic
    const waBtn = document.getElementById('wa-button');
    let isDragging = false;
    let startX, startY, initialX, initialY, startTime;

    const startDrag = (e) => {
        const evt = e.type.includes('mouse') ? e : e.touches[0];
        startX = evt.clientX;
        startY = evt.clientY;
        const rect = waBtn.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        isDragging = false;
        startTime = Date.now();

        if(e.type.includes('mouse')) {
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', endDrag);
        } else {
            document.addEventListener('touchmove', drag, { passive: false });
            document.addEventListener('touchend', endDrag);
        }
    };

    const drag = (e) => {
        const evt = e.type.includes('mouse') ? e : e.touches[0];
        const dx = evt.clientX - startX;
        const dy = evt.clientY - startY;

        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) isDragging = true;

        if (isDragging) {
            if(e.cancelable) e.preventDefault();
            let newLeft = Math.max(0, Math.min(initialX + dx, window.innerWidth - waBtn.offsetWidth));
            let newTop = Math.max(0, Math.min(initialY + dy, window.innerHeight - waBtn.offsetHeight));
            waBtn.style.left = `${newLeft}px`;
            waBtn.style.top = `${newTop}px`;
            waBtn.style.bottom = 'auto';
            waBtn.style.right = 'auto';
        }
    };

    const endDrag = (e) => {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', endDrag);
        if (!isDragging && (Date.now() - startTime) < 400) {
            window.open('https://wa.me/919911014950?text=Hello.', '_blank');
        }
    };

    if(waBtn) {
        waBtn.addEventListener('mousedown', startDrag);
        waBtn.addEventListener('touchstart', startDrag, { passive: false });
    }
});

// ==========================================
// BIG CARD MODAL LOGIC
// ==========================================
function openBigCard(title, desc, price, icon) {
    document.getElementById('big-card-title').innerText = title;
    document.getElementById('big-card-desc').innerText = desc;
    document.getElementById('big-card-price').innerText = price;
    document.getElementById('big-card-icon').className = `fa-solid ${icon} text-6xl text-brand-600`;
    
    const modal = document.getElementById('big-card-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }, 10);
}

function closeBigCard() {
    const modal = document.getElementById('big-card-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Close on background click
window.addEventListener('click', (e) => {
    const modal = document.getElementById('big-card-modal');
    if (e.target === modal) closeBigCard();
});
