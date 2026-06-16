import { Badge } from '../components/core/Badge';
import { Card } from '../components/core/Card';
import { Accordion } from '../components/feedback/Accordion';
import { RiskCard } from '../components/patterns/RiskCard';
import { ProcessStep } from '../components/patterns/ProcessStep';
import { Icon } from '../components/Icon';

function SectionHead({ eyebrow, title, intro, dark = true, align = 'left' }) {
  return (
    <div style={{ maxWidth: '62ch', margin: align === 'center' ? '0 auto' : 0, textAlign: align }}>
      <Badge kind="eyebrow">{eyebrow}</Badge>
      <h2
        style={{
          margin: '20px 0 0',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(30px, 4vw, 46px)',
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
          color: dark ? 'var(--ink-0)' : 'var(--navy-800)',
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          style={{
            margin: '18px 0 0',
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            lineHeight: 1.65,
            color: dark ? 'var(--navy-100)' : 'var(--slate-600)',
            marginLeft: align === 'center' ? 'auto' : 0,
            marginRight: align === 'center' ? 'auto' : 0,
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto' };

export function RiskSection() {
  const risks = [
    { claimant: 'Akcjonariusz', title: 'Pozew po spadku wartości spółki', body: 'Fundusz PE skarży zarząd, zarzucając błędne decyzje inwestycyjne, które obniżyły wartość udziałów.' },
    { claimant: 'Urząd skarbowy', title: 'Zaległości podatkowe — osobiście', body: 'Fiskus dochodzi niezapłaconego podatku spółki bezpośrednio z majątku prezesa (art. 116 Ordynacji).' },
    { claimant: 'Pracownicy', title: 'Pozew zbiorowy o dyskryminację', body: 'Grupa pracowników pozywa zarząd za naruszenie zasad równego traktowania (EPL).' },
    { claimant: 'Syndyk', title: 'Roszczenie z masy upadłościowej', body: 'Syndyk pozywa byłego prezesa za zobowiązania spółki niezgłoszone w terminie do upadłości.' },
  ];
  return (
    <section id="ryzyko" style={{ background: 'var(--navy-800)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div style={wrap}>
        <SectionHead
          eyebrow="Ryzyko jest realne"
          title="Cztery scenariusze, w których pozywają Ciebie — nie spółkę."
          intro="W Polsce odpowiedzialność osobista zarządu wynika z KSH, Ordynacji podatkowej i Kodeksu karnego skarbowego."
        />
        <div className="risk-grid" style={{ marginTop: '52px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {risks.map((r, i) => (
            <RiskCard key={i} index={i + 1} claimant={r.claimant} title={r.title}>
              {r.body}
            </RiskCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const cellHead = { fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate-600)' };

function Mark({ on }) {
  return on ? (
    <span
      style={{
        display: 'inline-flex',
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'rgba(62,124,99,0.14)',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--success-500)',
      }}
    >
      <Icon name="check" size={15} strokeWidth={2.5} />
    </span>
  ) : (
    <span
      style={{
        display: 'inline-flex',
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'rgba(194,67,59,0.10)',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--danger-500)',
      }}
    >
      <Icon name="x" size={15} strokeWidth={2.5} />
    </span>
  );
}

export function CoverageSection() {
  const rows = [
    ['Błędy w zarządzaniu i zaniechania (wrongful acts)', true, false],
    ['Koszty obrony prawnej — postępowania karne i administracyjne', true, false],
    ['Roszczenia ze strony samej spółki (Side B)', true, false],
    ['Ochrona osobista, gdy spółka nie wypłaca (Side A)', true, false],
    ['Naruszenie obowiązków fiducjarnych', true, false],
    ['Majątek prywatny: dom, oszczędności, samochód', true, false],
  ];
  return (
    <section id="polisa" style={{ background: 'var(--paper-50)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div style={wrap}>
        <SectionHead
          dark={false}
          eyebrow="Co obejmuje polisa D&amp;O"
          title="Tego nie znajdziesz w OC spółki."
          intro="Standardowe ubezpieczenie spółki chroni firmę. D&amp;O chroni osobę, która nią zarządza."
        />
        <div style={{ marginTop: '48px', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-on-light)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px 150px', padding: '18px 28px', borderBottom: '1px solid var(--border-on-light)', background: 'var(--paper-100)' }}>
            <span style={cellHead}>Zakres ochrony</span>
            <span style={{ ...cellHead, textAlign: 'center' }}>Polisa D&amp;O</span>
            <span style={{ ...cellHead, textAlign: 'center', color: 'var(--slate-400)' }}>OC spółki</span>
          </div>
          {rows.map(([label, doo, oc], i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 150px 150px',
                padding: '18px 28px',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border-on-light)' : 'none',
                alignItems: 'center',
              }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--navy-800)', lineHeight: 1.45 }}>{label}</span>
              <span style={{ display: 'flex', justifyContent: 'center' }}><Mark on={doo} /></span>
              <span style={{ display: 'flex', justifyContent: 'center' }}><Mark on={oc} /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RolesSection() {
  const roles = [
    { icon: 'crown', role: 'Prezes / CEO', line: 'Każda decyzja strategiczna to potencjalne roszczenie akcjonariuszy.' },
    { icon: 'users', role: 'Członek Zarządu', line: 'Odpowiada solidarnie za zobowiązania podatkowe i ZUS spółki.' },
    { icon: 'calculator', role: 'CFO / Dyrektor Finansowy', line: 'Sprawozdania i decyzje finansowe pod lupą KNF i wierzycieli.' },
    { icon: 'file-signature', role: 'Prokurent', line: 'Działa w imieniu spółki — i ponosi za to osobistą odpowiedzialność.' },
    { icon: 'landmark', role: 'Rada Nadzorcza', line: 'Nadzór to też odpowiedzialność: za to, czego nie dopilnowano.' },
  ];
  return (
    <section style={{ background: 'var(--navy-900)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div style={wrap}>
        <SectionHead eyebrow="Dla kogo" title="Jeśli podejmujesz decyzje — odpowiadasz majątkiem." />
        <div className="roles-grid" style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {roles.map((r, i) => (
            <Card key={i} surface="outline" interactive style={{ padding: '24px 22px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-accent)',
                  background: 'rgba(201,146,42,0.08)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-500)',
                }}
              >
                <Icon name={r.icon} size={22} />
              </span>
              <h3 style={{ margin: '18px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '18px', color: 'var(--ink-0)' }}>{r.role}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.55, color: 'var(--navy-200)' }}>{r.line}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="proces" style={{ background: 'var(--navy-800)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div
        className="process-grid"
        style={{ ...wrap, display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 'clamp(32px,5vw,80px)', alignItems: 'start' }}
      >
        <SectionHead
          eyebrow="Jak działamy"
          title="Trzy kroki. Bez biurokracji."
          intro="Jesteśmy brokerem — pracujemy po Twojej stronie, nie po stronie ubezpieczyciela."
        />
        <div>
          <ProcessStep step={1} title="Analiza ekspozycji">Mapujemy realne ryzyko Twojej funkcji, branży i struktury właścicielskiej spółki.</ProcessStep>
          <ProcessStep step={2} title="Dobór programu">Negocjujemy zakres, sumę gwarancyjną i kluczowe klauzule (run-off, Side A) z rynkiem.</ProcessStep>
          <ProcessStep step={3} title="Wdrożenie polisy" last>Polisa aktywna w kilka dni roboczych. Zostajemy przy Tobie przy każdym roszczeniu.</ProcessStep>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const items = [
    { q: 'Czy spółka może opłacić składkę za zarząd?', a: 'Tak. Składkę finansuje spółka, a ochrona obejmuje imiennie członków zarządu i rady nadzorczej — to standardowy i zgodny z prawem model.' },
    { q: 'Co dzieje się z ochroną, gdy odchodzę z funkcji?', a: 'Roszczenia mogą pojawić się po latach. Klauzula run-off utrzymuje ochronę dla decyzji podjętych w okresie pełnienia funkcji — także po odejściu.' },
    { q: 'Czy polisa działa przy postępowaniach karnych?', a: 'D&O pokrywa koszty obrony prawnej również w postępowaniach karnych i administracyjnych, do czasu prawomocnego rozstrzygnięcia.' },
    { q: 'Ile kosztuje D&O dla spółki z o.o.?', a: 'Składka zależy od skali działalności, branży i sumy gwarancyjnej. Dla wielu spółek z o.o. to koszt rzędu kilku tysięcy złotych rocznie — wycenę przygotujemy indywidualnie.' },
    { q: 'Czym różni się Side A od Side B?', a: 'Side A chroni osobiście menedżera, gdy spółka nie może wypłacić odszkodowania. Side B zwraca spółce koszty, które poniosła, broniąc zarząd.' },
    { q: 'Czy obejmuje roszczenia ze strony samej spółki?', a: 'Tak — to częsty scenariusz. Polisa pokrywa roszczenia spółki wobec własnych członków zarządu (z zastrzeżeniem wyłączeń umownych).' },
  ];
  return (
    <section id="faq" style={{ background: 'var(--paper-50)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
        <SectionHead dark={false} align="center" eyebrow="Najczęstsze pytania" title="To, o co pytają prezesi." />
        <div style={{ marginTop: '40px' }}>
          <Accordion items={items} onDark={false} />
        </div>
      </div>
    </section>
  );
}
