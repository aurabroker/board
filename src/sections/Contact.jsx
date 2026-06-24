import { Icon } from '../components/Icon';

export function ContactSection() {
  return (
    <section id="kontakt" style={{ background: 'var(--navy-900)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.08, color: 'var(--ink-0)' }}>
          Sprawdź, czy jesteś chroniony.
        </h2>
        <p style={{ margin: '18px auto 0', maxWidth: '46ch', fontSize: '17px', lineHeight: 1.65, color: 'var(--navy-100)' }}>
          Bez formularzy i zobowiązań. Zadzwoń — przygotujemy analizę ekspozycji i indywidualną wycenę D&amp;O.
        </p>

        <a
          href="tel:+48500502702"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            margin: '36px 0 0',
            padding: '18px 28px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-accent)',
            background: 'rgba(var(--accent-rgb),0.10)',
            boxShadow: 'var(--shadow-accent)',
            textDecoration: 'none',
          }}
        >
          <Icon name="phone" size={30} color="var(--gold-300)" />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, textAlign: 'left' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy-200)' }}>
              Zadzwoń do brokera
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(34px,5vw,44px)', color: 'var(--ink-0)' }}>
              500 502 702
            </span>
          </span>
        </a>

        <ul style={{ listStyle: 'none', padding: 0, margin: '30px 0 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 26px' }}>
          {['Odpowiedź w 24 h', 'Broker po Twojej stronie', 'Poufność zapytania'].map((t, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '15px', color: 'var(--navy-100)' }}>
              <Icon name="check" size={16} color="var(--gold-500)" strokeWidth={2.4} /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function StickyCTA() {
  return (
    <div
      className="sticky-cta"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
        background: 'rgba(13,27,42,0.92)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--border-on-dark)',
      }}
    >
      <a
        href="tel:+48500502702"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          padding: '16px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--accent)',
          color: 'var(--accent-contrast)',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 'var(--text-md)',
          textDecoration: 'none',
          boxShadow: 'var(--shadow-accent)',
        }}
      >
        <Icon name="phone" size={18} color="var(--accent-contrast)" /> Zadzwoń: 500 502 702
      </a>
    </div>
  );
}
