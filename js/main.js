/* ═══════════════════════════════════════════════════════════════════════
   R-SERVIS LOŠEK s.r.o. – Hlavní JavaScript
   ─────────────────────────────────────────────────────────────────────
   ⚠️  PŘED NASAZENÍM:
       Nahraďte 'YOUR_FORM_ID' vaším Formspree ID
       → https://formspree.io → přihlásit → New Form → zkopírovat ID
════════════════════════════════════════════════════════════════════════ */

'use strict';

/* ─── KONFIGURACE ──────────────────────────────────────────────────── */
const FORMSPREE_ID  = 'YOUR_FORM_ID';                        // ← SEM DOSAĎTE VAŠE ID
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

/* ─── SCROLL REVEAL ────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── FORMULÁŘ ──────────────────────────────────────────────────────── */
const form       = document.getElementById('poptavka-form');
const btnText    = document.getElementById('btn-text');
const btnSpinner = document.getElementById('btn-spinner');
const submitBtn  = document.getElementById('submit-btn');

if (form) {

  /**
   * Validace jednoho pole – vrátí true pokud je OK.
   * @param {HTMLElement} input
   * @returns {boolean}
   */
  function validateField(input) {
    const group   = input.closest('.form-group');
    const errorEl = group?.querySelector('.field-error');
    let msg = '';

    if (input.required && input.type !== 'checkbox' && !input.value.trim()) {
      msg = 'Toto pole je povinné.';
    } else if (input.type === 'email' && input.value &&
               !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      msg = 'Zadejte platnou e-mailovou adresu.';
    } else if (input.type === 'checkbox' && input.required && !input.checked) {
      msg = 'Souhlas se zpracováním údajů je povinný.';
    }

    if (errorEl) {
      errorEl.textContent    = msg;
      errorEl.style.display  = msg ? 'block' : 'none';
    }
    input.style.borderColor = msg
      ? 'var(--red)'
      : (input.value ? 'rgba(255,255,255,.2)' : '');

    return !msg;
  }

  // Live validace – spouštěj až po prvním opuštění pole
  form.querySelectorAll('input[required], textarea[required]').forEach(el => {
    el.addEventListener('blur',  () => { el.dataset.touched = '1'; validateField(el); });
    el.addEventListener('input', () => { if (el.dataset.touched) validateField(el); });
  });

  /** Resetuje formulář do výchozího stavu (tlačítko "Odeslat další poptávku"). */
  window.resetForm = function () {
    form.reset();
    form.querySelectorAll('.field-error').forEach(el => {
      el.textContent = ''; el.style.display = 'none';
    });
    form.querySelectorAll('input, textarea').forEach(el => {
      el.style.borderColor = '';
      delete el.dataset.touched;
    });
    submitBtn.disabled      = false;
    btnText.style.display   = 'inline';
    btnSpinner.style.display = 'none';
    document.getElementById('form-wrapper').style.display  = 'block';
    document.getElementById('form-success').style.display  = 'none';
  };

  // Odeslání formuláře
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validovat všechna povinná pole + GDPR checkbox
    const requiredFields = [...form.querySelectorAll('input[required], textarea[required]')];
    const gdpr           = document.getElementById('f-gdpr');
    const allValid       = [...requiredFields, gdpr]
      .map(f => validateField(f))
      .every(Boolean);

    if (!allValid) return;

    // Honeypot – bot vyplnil skryté pole → tiché zahození
    const honeypot = form.querySelector('input[name="_gotcha"]');
    if (honeypot?.value) return;

    // UI: stav načítání
    submitBtn.disabled       = true;
    btnText.style.display    = 'none';
    btnSpinner.style.display = 'inline';
    document.getElementById('form-error').style.display = 'none';

    try {
      const response = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (response.ok) {
        // ✅ Úspěch
        document.getElementById('form-wrapper').style.display = 'none';
        document.getElementById('form-success').style.display  = 'block';

        // Volitelný GA4 event (odkomentujte pokud máte Google Analytics)
        // if (typeof gtag === 'function') {
        //   gtag('event', 'form_submit', {
        //     event_category: 'poptavka',
        //     event_label:    'kontaktni_formular',
        //   });
        // }

      } else {
        throw new Error(`HTTP ${response.status}`);
      }

    } catch (err) {
      console.error('Chyba při odesílání formuláře:', err);
      document.getElementById('form-error').style.display = 'block';
      submitBtn.disabled       = false;
      btnText.style.display    = 'inline';
      btnSpinner.style.display = 'none';
    }
  });

}
