import { Button } from '../components/core/Button';
import { Badge } from '../components/core/Badge';
import { Icon } from '../components/Icon';
import { Logo } from '../components/Logo';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: 'smooth' });
}

const NAV_ITEMS = [
  ['Ryzyko', 'ryzyko'],
  ['Co obejmuje', 'polisa'],
  ['Jak działamy', 'proces'],
  ['FAQ', 'faq'],
  ['Kontakt', 'kontakt'],
];

export function Nav({ onContact }) {
  return (
    <nav className="sidenav">
      <a
        href="#top"
        className="sidenav-brand"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      >
        <Logo onDark width={148} />
      </a>

      <div className="sidenav-links">
        {NAV_ITEMS.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToId(id); }}>
            {label}
          </a>
        ))}
      </div>

      <div className="sidenav-cta">
        <Button variant="primary" size="md" fullWidth onClick={onContact}>Sprawdź ochronę</Button>
      </div>
    </nav>
  );
}

export function Hero({ onContact }) {
  const textShadow = '0 2px 22px rgba(4,16,23,0.55)';
  return (
    <header
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        minHeight: 'clamp(540px, 84vh, 780px)',
        padding: 'clamp(56px, 8vw, 104px) clamp(20px, 5vw, 64px)',
        background: 'var(--navy-900)',
      }}
    >
      {/* Brand hero artwork (whale) — kept prominent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-whale.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Light scrim — only enough to keep the headline legible */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(95deg, rgba(6,22,31,0.74) 0%, rgba(6,22,31,0.34) 36%, rgba(6,22,31,0.06) 60%, rgba(6,22,31,0) 78%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
        }}
      >
        <div style={{ maxWidth: '620px' }}>
          <Badge kind="eyebrow">OC Członków Zarządu · D&amp;O</Badge>
          <h1
            style={{
              margin: '22px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(46px, 7vw, 92px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              color: 'var(--ink-0)',
              textShadow,
            }}
          >
            Nie tylko dla <span style={{ fontStyle: 'italic', color: 'var(--gold-300)' }}>wielorybów</span>.
          </h1>
          <p
            style={{
              margin: '24px 0 0',
              maxWidth: '50ch',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(17px, 1.4vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--ink-50)',
              textShadow,
            }}
          >
            Roszczenie nie pyta o wielkość spółki. Ubezpieczenie D&amp;O chroni{' '}
            <strong style={{ color: 'var(--ink-0)', fontWeight: 600 }}>prywatny majątek</strong> prezesów,
            członków zarządu i rad nadzorczych — niezależnie od skali biznesu.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={onContact}
              iconRight={<Icon name="arrow-right" size={18} color="var(--accent-contrast)" />}
            >
              Sprawdź, czy jesteś chroniony
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollToId('ryzyko')}>
              Czytaj więcej
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ShieldBand({ onContact }) {
  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--cream-50)',
        overflow: 'hidden',
      }}
    >
      <div
        className="shield-grid"
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            padding: 'clamp(56px,8vw,112px) clamp(24px,4vw,72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Badge kind="eyebrow">Twoja tarcza</Badge>
          <p
            style={{
              margin: '24px 0 0',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              lineHeight: 1.22,
              letterSpacing: '-0.005em',
              color: 'var(--navy-800)',
            }}
          >
            W biznesie nie musisz pływać sam. Na prawdziwej głębi{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold-600)' }}>warto mieć swoją tarczę.</span>
          </p>
          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '46ch',
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--slate-600)',
            }}
          >
            Drapieżniki krążą tam, gdzie pachnie pieniądzem: akcjonariusze, wierzyciele, urzędy, syndyk.
            Jako broker stajemy między Tobą a roszczeniem — i dobieramy polisę, która naprawdę osłania Twój majątek.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={onContact}
              iconRight={<Icon name="arrow-right" size={18} color="var(--accent-contrast)" />}
            >
              Zbuduj swoją ochronę
            </Button>
          </div>
        </div>

        <div
          className="shield-media"
          aria-hidden="true"
          style={{
            minHeight: '460px',
            backgroundImage: 'url(/shark.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--border-on-dark)', padding: '48px clamp(20px,5vw,64px)' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo onDark width={132} />
        <p style={{ margin: 0, maxWidth: '52ch', fontSize: '13px', lineHeight: 1.6, color: 'var(--navy-300)' }}>
          Materiał ma charakter informacyjny i nie stanowi oferty w rozumieniu Kodeksu cywilnego.
          Zakres ochrony określa każdorazowo umowa ubezpieczenia. Aura Consulting — broker ubezpieczeniowy · D&amp;O.
        </p>
      </div>
    </footer>
  );
}
