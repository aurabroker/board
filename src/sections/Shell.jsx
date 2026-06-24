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

      <div className="sidenav-foot">
        <Button variant="primary" size="md" fullWidth onClick={onContact}>Sprawdź ochronę</Button>
        <a className="sidenav-phone" href="tel:+48500502702">
          <Icon name="phone" size={17} /> 500 502 702
        </a>
      </div>
    </nav>
  );
}

export function Hero({ onContact }) {
  const textShadow = '0 2px 22px rgba(4,16,23,0.55)';

  return (
    <header
      id="top"
      className="hero-fullbleed"
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        aspectRatio: '1366 / 768',
        paddingTop: 'clamp(120px, 16vh, 200px)',
        paddingBottom: 'clamp(48px, 7vw, 92px)',
        paddingRight: 'clamp(20px, 5vw, 64px)',
        paddingLeft: 'calc(var(--rail-w) + clamp(20px, 4vw, 48px))',
        background: 'var(--navy-900)',
      }}
    >
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        poster="/boardnew.png"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Scrim: nav wash on top, and a deep-water fade at the bottom that
          blends seamlessly into the shark band below */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(4,16,23,0.42) 0%, rgba(4,16,23,0) 16%), linear-gradient(0deg, rgba(4,16,23,0.97) 0%, rgba(4,16,23,0.52) 14%, rgba(4,16,23,0) 38%)',
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
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-eyebrow)',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 0 18px rgba(228,192,120,0.9), 0 0 6px rgba(228,192,120,0.7)',
            }}
          >
            <span style={{ width: 24, height: 1, background: 'var(--gold-300)', boxShadow: '0 0 8px rgba(228,192,120,0.9)' }} />
            Odpowiedzialność Cywilna Członków Zarządu · Directors &amp; Officers (D&amp;O)
          </span>
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
      className="hero-fullbleed"
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        aspectRatio: '1366 / 768',
        paddingTop: 'clamp(56px, 7vw, 96px)',
        paddingBottom: 'clamp(56px, 7vw, 96px)',
        paddingRight: 'clamp(20px, 5vw, 64px)',
        paddingLeft: 'calc(var(--rail-w) + clamp(20px, 4vw, 48px))',
        background: 'var(--navy-900)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/sharknew.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(4,16,23,0.97) 0%, rgba(4,16,23,0.45) 13%, rgba(4,16,23,0) 32%), linear-gradient(0deg, rgba(4,16,23,0.97) 0%, rgba(4,16,23,0.32) 16%, rgba(4,16,23,0) 38%), linear-gradient(95deg, rgba(4,16,23,0.78) 0%, rgba(4,16,23,0.44) 32%, rgba(4,16,23,0.10) 58%, rgba(4,16,23,0) 80%)',
        }}
      />

      <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ maxWidth: '600px' }}>
          <Badge kind="eyebrow">Twoja tarcza</Badge>
          <p
            style={{
              margin: '22px 0 0',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 3.8vw, 54px)',
              lineHeight: 1.18,
              letterSpacing: '-0.005em',
              color: 'var(--ink-0)',
              textShadow: '0 2px 22px rgba(4,16,23,0.6)',
            }}
          >
            W biznesie nie musisz pływać sam. Na prawdziwej głębi{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold-300)' }}>warto mieć swoją tarczę.</span>
          </p>
          <p
            style={{
              margin: '20px 0 0',
              maxWidth: '44ch',
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'var(--ink-50)',
              textShadow: '0 1px 16px rgba(4,16,23,0.7)',
            }}
          >
            Drapieżniki krążą tam, gdzie pachnie pieniądzem: akcjonariusze, wierzyciele, urzędy, syndyk, nawet Twoi pracownicy.
            Jako broker stajemy między Tobą a roszczeniem.
          </p>
          <div style={{ marginTop: '30px' }}>
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
