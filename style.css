/* ═══════════════════════════════════════════════════════════════════════
   R-SERVIS LOŠEK s.r.o. – Hlavní stylesheet
   Struktura:
     1. Proměnné & reset
     2. Navigace
     3. Hero
     4. Sdílené styly sekcí
     5. Služby
     6. O nás
     7. Dodavatelé
     8. Zákazníci
     9. Tým
    10. Kontakt & formulář
    11. Footer
    12. Scroll reveal
    13. Responzivita
════════════════════════════════════════════════════════════════════════ */

/* ─── 1. PROMĚNNÉ & RESET ──────────────────────────────────────────── */
:root {
  --red:    #D62828;
  --red2:   #F77F00;
  --dark:   #0C0C0C;
  --dark2:  #161616;
  --dark3:  #1E1E1E;
  --light:  #F0EDE8;
  --muted:  #888;
  --border: rgba(255,255,255,.07);
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--dark);
  color: var(--light);
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  overflow-x: hidden;
}

/* ─── Skip link (přístupnost) ── */
.skip-link {
  position: absolute; top: -100px; left: 1rem; z-index: 9999;
  background: var(--red); color: #fff; padding: .5rem 1rem;
  font-family: 'Barlow Condensed', sans-serif; font-size: .9rem;
  text-decoration: none; transition: top .2s;
}
.skip-link:focus { top: 1rem; }

/* ─── 2. NAVIGACE ──────────────────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; width: 100%; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.2rem 4rem;
  background: rgba(12,12,12,.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; letter-spacing: .12em;
  color: var(--light); text-decoration: none;
}
.nav-logo span { color: var(--red); }
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .85rem; letter-spacing: .1em; text-transform: uppercase;
  color: var(--muted); text-decoration: none;
  transition: color .2s;
}
.nav-links a:hover { color: var(--light); }
.nav-cta {
  background: var(--red); color: #fff;
  padding: .55rem 1.4rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .85rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
  border: none; cursor: pointer; text-decoration: none;
  transition: background .2s;
}
.nav-cta:hover { background: #b01f1f; }

/* ─── 3. HERO ──────────────────────────────────────────────────────── */
#hero {
  min-height: 100vh;
  display: grid; place-items: center;
  position: relative; overflow: hidden;
  padding: 8rem 4rem 4rem;
}
.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background:
    radial-gradient(ellipse 70% 60% at 80% 50%, rgba(214,40,40,.18) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(247,127,0,.08) 0%, transparent 60%),
    linear-gradient(160deg, #0f0f0f 0%, #0c0c0c 100%);
}
.hero-bg::after {
  content: '';
  position: absolute; top: 0; right: 0;
  width: 3px; height: 100%;
  background: linear-gradient(to bottom, transparent, var(--red), transparent);
  opacity: .5;
}
.hero-content { position: relative; z-index: 1; max-width: 900px; }
.hero-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .78rem; letter-spacing: .25em; text-transform: uppercase;
  color: var(--red); margin-bottom: 1.5rem;
  display: flex; align-items: center; gap: .8rem;
}
.hero-tag::before {
  content: ''; display: block; width: 30px; height: 1px; background: var(--red);
}
h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 10vw, 9rem);
  line-height: .95; letter-spacing: .02em;
  margin-bottom: 1.5rem;
}
h1 span { color: var(--red); }
.hero-sub {
  font-size: 1.1rem; line-height: 1.7; color: #aaa;
  max-width: 560px; margin-bottom: 3rem; font-weight: 300;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-primary {
  background: var(--red); color: #fff;
  padding: .9rem 2.2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
  text-decoration: none; border: none; cursor: pointer;
  transition: background .2s, transform .15s;
  display: inline-block;
}
.btn-primary:hover { background: #b01f1f; transform: translateY(-2px); }
.btn-outline {
  background: transparent; color: var(--light);
  padding: .9rem 2.2rem; border: 1px solid rgba(255,255,255,.25);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
  text-decoration: none; cursor: pointer;
  transition: border-color .2s, color .2s;
  display: inline-block;
}
.btn-outline:hover { border-color: var(--light); }
.hero-stats {
  position: absolute; bottom: 3rem; left: 4rem; right: 4rem; z-index: 1;
  display: flex; gap: 3rem;
  border-top: 1px solid var(--border); padding-top: 2rem;
}
.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.4rem; color: var(--red); letter-spacing: .05em;
}
.stat-label {
  font-size: .78rem; letter-spacing: .12em; text-transform: uppercase;
  color: var(--muted); margin-top: .2rem;
}

/* ─── 4. SDÍLENÉ STYLY SEKCÍ ───────────────────────────────────────── */
section { padding: 7rem 4rem; }
.section-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .75rem; letter-spacing: .25em; text-transform: uppercase;
  color: var(--red); margin-bottom: 1rem;
  display: flex; align-items: center; gap: .8rem;
}
.section-tag::before { content: ''; display: block; width: 20px; height: 1px; background: var(--red); }
h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  letter-spacing: .03em; line-height: 1; margin-bottom: 1rem;
}
.section-intro {
  font-size: 1.05rem; color: #999; max-width: 620px;
  line-height: 1.75; font-weight: 300;
}

/* ─── 5. SLUŽBY ────────────────────────────────────────────────────── */
#sluzby { background: var(--dark2); }
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1px; margin-top: 4rem;
  border: 1px solid var(--border);
}
.service-card {
  background: var(--dark3);
  padding: 2.5rem;
  position: relative; overflow: hidden;
  transition: background .25s;
}
.service-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--red), var(--red2));
  transform: scaleX(0); transform-origin: left;
  transition: transform .3s;
}
.service-card:hover { background: #242424; }
.service-card:hover::before { transform: scaleX(1); }
.service-icon {
  font-size: 2rem; margin-bottom: 1.5rem;
  display: flex; align-items: center; justify-content: center;
  width: 56px; height: 56px;
  background: rgba(214,40,40,.1); color: var(--red);
}
.service-card h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.3rem; font-weight: 700; letter-spacing: .05em;
  text-transform: uppercase; margin-bottom: .8rem;
}
.service-card p { font-size: .9rem; color: #888; line-height: 1.7; }
.service-card ul { margin-top: 1rem; padding-left: 0; list-style: none; }
.service-card ul li {
  font-size: .85rem; color: #777; padding: .3rem 0;
  padding-left: 1rem; position: relative;
}
.service-card ul li::before {
  content: '▸'; position: absolute; left: 0;
  color: var(--red); font-size: .7rem;
}

/* ─── 6. O NÁS ────────────────────────────────────────────────────── */
#o-nas {
  display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
}
.o-nas-visual { position: relative; }
.o-nas-block {
  background: var(--dark3);
  border: 1px solid var(--border);
  padding: 3rem; position: relative;
}
.o-nas-block::before {
  content: '25+';
  font-family: 'Bebas Neue', sans-serif;
  font-size: 7rem; color: rgba(214,40,40,.07);
  position: absolute; right: -1rem; top: -1rem;
  letter-spacing: .02em; line-height: 1;
  pointer-events: none;
}
.o-nas-block p { font-size: .95rem; line-height: 1.8; color: #999; }
.accent-line {
  width: 40px; height: 3px;
  background: linear-gradient(90deg, var(--red), var(--red2));
  margin-bottom: 2rem;
}
.check-list { list-style: none; margin-top: 2rem; }
.check-list li {
  display: flex; align-items: flex-start; gap: .8rem;
  font-size: .9rem; color: #888; padding: .5rem 0;
  border-bottom: 1px solid var(--border);
}
.check-list li:last-child { border: none; }
.check-list li::before {
  content: '✔'; color: var(--red); font-size: .75rem; flex-shrink: 0; margin-top: .1rem;
}

/* ─── 7. DODAVATELÉ ────────────────────────────────────────────────── */
#dodavatele {
  background: var(--dark2);
  padding: 4rem; text-align: center;
}
.brands-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .75rem; letter-spacing: .25em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 2.5rem;
}
.brands-row {
  display: flex; flex-wrap: wrap; gap: 3rem;
  justify-content: center; align-items: center;
}
.brand-pill {
  background: var(--dark3);
  border: 1px solid var(--border);
  padding: .8rem 2rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 600;
  letter-spacing: .08em; text-transform: uppercase;
  color: #666; transition: color .2s, border-color .2s;
}
.brand-pill:hover { color: var(--light); border-color: rgba(255,255,255,.3); }

/* ─── 8. ZÁKAZNÍCI ─────────────────────────────────────────────────── */
#zakaznici { background: var(--dark); }
.customers-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1px; margin-top: 3.5rem; border: 1px solid var(--border);
}
.customer-card {
  background: var(--dark3); padding: 2rem 1.5rem;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 600;
  letter-spacing: .06em; color: #555;
  transition: color .2s, background .2s;
}
.customer-card:hover { background: #202020; color: var(--light); }

/* ─── 9. TÝM ───────────────────────────────────────────────────────── */
#tym { background: var(--dark2); }
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2px; margin-top: 4rem;
}
.team-card {
  background: var(--dark3);
  position: relative; overflow: hidden; cursor: default;
}
.team-photo {
  width: 100%; aspect-ratio: 3/4;
  object-fit: cover; display: block;
  filter: grayscale(100%) contrast(1.1);
  transition: filter .4s, transform .5s;
}
.team-card:hover .team-photo {
  filter: grayscale(40%) contrast(1.05);
  transform: scale(1.04);
}
.team-photo-placeholder {
  width: 100%; aspect-ratio: 3/4;
  background: #1a1a1a;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; position: relative;
  transition: transform .5s;
}
.team-card:hover .team-photo-placeholder { transform: scale(1.04); }
.team-photo-placeholder svg {
  width: 60%; height: auto; opacity: .35; transition: opacity .4s;
}
.team-card:hover .team-photo-placeholder svg { opacity: .5; }
.team-photo-placeholder::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(214,40,40,.15) 100%);
  opacity: 0; transition: opacity .4s;
}
.team-card:hover .team-photo-placeholder::after { opacity: 1; }
.team-info {
  padding: 1.5rem 1.8rem 2rem;
  border-top: 2px solid transparent;
  background: var(--dark3);
  transition: border-color .3s;
}
.team-card:hover .team-info { border-color: var(--red); }
.team-role {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
  color: var(--red); margin-bottom: .4rem;
}
.team-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem; letter-spacing: .05em;
  color: var(--light); margin-bottom: .8rem;
}
.team-bio { font-size: .82rem; color: #666; line-height: 1.7; }
.team-card:hover .team-bio { color: #888; }
.team-cert {
  display: inline-block; margin-top: .9rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .7rem; letter-spacing: .12em; text-transform: uppercase;
  color: #444; background: rgba(255,255,255,.04);
  border: 1px solid var(--border);
  padding: .2rem .7rem;
  transition: color .2s, border-color .2s;
}
.team-card:hover .team-cert { color: #777; border-color: rgba(255,255,255,.15); }

/* ─── 10. KONTAKT & FORMULÁŘ ───────────────────────────────────────── */
#kontakt {
  background: linear-gradient(135deg, var(--dark2) 0%, #0e0e0e 100%);
  display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start;
}
.contact-info h2 { margin-bottom: 2rem; }
.contact-item {
  display: flex; align-items: flex-start; gap: 1.2rem;
  padding: 1.4rem 0; border-bottom: 1px solid var(--border);
}
.contact-item:last-child { border: none; }
.contact-icon {
  width: 40px; height: 40px; flex-shrink: 0;
  background: rgba(214,40,40,.12);
  display: flex; align-items: center; justify-content: center;
  color: var(--red); font-size: 1.1rem;
}
.contact-label {
  font-size: .7rem; letter-spacing: .15em; text-transform: uppercase;
  color: var(--muted); margin-bottom: .3rem;
}
.contact-value {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.1rem; font-weight: 600; color: var(--light);
}
.contact-value a { color: inherit; text-decoration: none; }
.contact-value a:hover { color: var(--red); }
.contact-form-block h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.6rem; font-weight: 700; letter-spacing: .05em;
  text-transform: uppercase; margin-bottom: 1.5rem;
}
.form-group { margin-bottom: 1.2rem; }
.form-group label {
  display: block; font-size: .72rem; letter-spacing: .15em; text-transform: uppercase;
  color: var(--muted); margin-bottom: .4rem;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%; background: var(--dark3);
  border: 1px solid var(--border); color: var(--light);
  padding: .85rem 1rem; font-family: 'Barlow', sans-serif; font-size: .95rem;
  outline: none; transition: border-color .2s; resize: none;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus { border-color: var(--red); }
.form-group textarea { height: 120px; }
.form-group select {
  appearance: none; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 1rem center;
}
.field-error {
  display: none; color: #e06060;
  font-size: .75rem; margin-top: .3rem; letter-spacing: .03em;
}
.gdpr-row { margin-top: .5rem; }
.gdpr-label {
  display: flex; align-items: flex-start; gap: .7rem; cursor: pointer;
}
.gdpr-label input[type="checkbox"] {
  width: 16px; height: 16px; flex-shrink: 0; margin-top: .15rem;
  accent-color: var(--red); cursor: pointer;
}
.gdpr-label span { font-size: .82rem; color: #666; line-height: 1.5; }

/* ─── 11. FOOTER ────────────────────────────────────────────────────── */
footer {
  background: #090909;
  padding: 2rem 4rem;
  display: flex; align-items: center; justify-content: space-between;
  border-top: 1px solid var(--border);
  flex-wrap: wrap; gap: 1rem;
}
.footer-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem; letter-spacing: .12em; color: #555;
}
.footer-logo span { color: var(--red); }
footer p { font-size: .78rem; color: #444; }

/* ─── 12. SCROLL REVEAL ─────────────────────────────────────────────── */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s, transform .7s; }
.reveal.visible { opacity: 1; transform: none; }

/* ─── 13. RESPONZIVITA ──────────────────────────────────────────────── */
@media (max-width: 900px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
  section { padding: 4rem 1.5rem; }
  #hero { padding: 7rem 1.5rem 10rem; }
  .hero-stats { left: 1.5rem; right: 1.5rem; flex-wrap: wrap; gap: 1.5rem; }
  #o-nas { grid-template-columns: 1fr; gap: 3rem; }
  #kontakt { grid-template-columns: 1fr; gap: 3rem; }
  .services-grid { grid-template-columns: 1fr; }
  footer { flex-direction: column; text-align: center; }
}
