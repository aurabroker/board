import { Button } from '../components/core/Button';
import { Badge } from '../components/core/Badge';
import { Icon } from '../components/Icon';

const navLink = {
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  fontWeight: 500,
  color: 'var(--navy-100)',
  textDecoration: 'none',
};

export function Nav({ onContact }) {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px clamp(20px, 5vw, 64px)',
        background: 'rgba(13,27,42,0.82)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-on-dark)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            width: '34px',
            height: '34px',
            border: '1.5px solid var(--gold-500)',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(45deg)',
          }}
        >
          <span
            style={{
              transform: 'rotate(-45deg)',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--gold-500)',
            }}
          >
            A
          </span>
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '21px', color: 'var(--ink-0)' }}>
            Aura<span style={{ color: 'var(--gold-500)' }}>.</span>
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '8px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--navy-300)',
              marginTop: '4px',
            }}
          >
            Broker ubezpieczeniowy
          </span>
        </span>
      </div>
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '34px' }}>
        <a href="#ryzyko" style={navLink}>Ryzyko</a>
        <a href="#polisa" style={navLink}>Co obejmuje</a>
        <a href="#proces" style={navLink}>Jak działamy</a>
        <a href="#faq" style={navLink}>FAQ</a>
        <Button variant="primary" size="sm" onClick={onContact}>Sprawdź ochronę</Button>
      </div>
    </nav>
  );
}

export function Hero({ onContact }) {
  return (
    <header
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(64px, 9vw, 130px) clamp(20px, 5vw, 64px) clamp(56px, 7vw, 100px)',
        background: 'radial-gradient(120% 90% at 78% 0%, #16273A 0%, var(--navy-800) 46%, var(--navy-900) 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          backgroundImage: 'linear-gradient(var(--border-on-dark) 1px, transparent 1px)',
          backgroundSize: '100% 64px',
          maskImage: 'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)',
        }}
      />
      <div
        className="hero-grid"
        style={{
          position: 'relative',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
          gap: 'clamp(32px,5vw,72px)',
          alignItems: 'center',
        }}
      >
        <div>
          <Badge kind="eyebrow">OC Członków Zarządu · D&amp;O</Badge>
          <h1
            style={{
              margin: '24px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 76px)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: 'var(--ink-0)',
            }}
          >
            OC spółki nie chroni <span style={{ fontStyle: 'italic', color: 'var(--gold-300)' }}>Twojego</span> majątku.
          </h1>
          <p
            style={{
              margin: '26px 0 0',
              maxWidth: '52ch',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(17px, 1.4vw, 20px)',
              lineHeight: 1.6,
              color: 'var(--navy-100)',
            }}
          >
            Ubezpieczenie D&amp;O chroni <strong style={{ color: 'var(--ink-0)', fontWeight: 600 }}>prywatny majątek</strong> prezesów,
            członków zarządu i rady nadzorczej przed roszczeniami za decyzje podjęte w ramach funkcji.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '38px' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={onContact}
              iconRight={<Icon name="arrow-right" size={18} color="var(--accent-contrast)" />}
            >
              Sprawdź, czy jesteś chroniony
            </Button>
            <Button variant="secondary" size="lg" iconLeft={<Icon name="download" size={18} />}>
              Pobierz przewodnik po ryzyku
            </Button>
          </div>
        </div>

        <aside
          style={{
            position: 'relative',
            padding: '34px',
            borderRadius: 'var(--radius-lg)',
            background: 'rgba(245,245,240,0.03)',
            border: '1px solid var(--border-on-dark)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 34,
              right: 34,
              height: '3px',
              background: 'linear-gradient(90deg, var(--gold-500), transparent)',
            }}
          />
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '64px', lineHeight: 0.9, color: 'var(--gold-500)' }}>§</div>
          <p
            style={{
              margin: '18px 0 0',
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2vw, 26px)',
              lineHeight: 1.35,
              color: 'var(--ink-0)',
            }}
          >
            „Za zobowiązania spółki odpowiadają członkowie zarządu — ze swojego majątku."
          </p>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: 'var(--navy-200)',
            }}
          >
            <span style={{ width: 22, height: 1, background: 'var(--gold-500)' }} /> § 299 Kodeksu spółek handlowych
          </div>
        </aside>
      </div>
    </header>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--ink-0)' }}>
            Aura<span style={{ color: 'var(--gold-500)' }}>.</span> Consulting
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--navy-300)' }}>
            Broker ubezpieczeniowy · D&amp;O
          </span>
        </div>
        <p style={{ margin: 0, maxWidth: '46ch', fontSize: '13px', lineHeight: 1.6, color: 'var(--navy-300)' }}>
          Materiał ma charakter informacyjny i nie stanowi oferty w rozumieniu Kodeksu cywilnego. Zakres ochrony określa każdorazowo umowa ubezpieczenia.
        </p>
      </div>
    </footer>
  );
}
