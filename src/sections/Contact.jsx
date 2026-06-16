import { useState } from 'react';
import { Button } from '../components/core/Button';
import { Input } from '../components/forms/Input';
import { Badge } from '../components/core/Badge';
import { Icon } from '../components/Icon';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', role: '', company: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Podaj imię i nazwisko';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) er.email = 'Podaj poprawny e-mail';
    if (!form.phone.match(/^[+0-9 ()-]{7,}$/)) er.phone = 'Podaj numer telefonu';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <section id="kontakt" style={{ background: 'var(--navy-900)', padding: 'clamp(64px,8vw,112px) clamp(20px,5vw,64px)' }}>
      <div
        className="contact-grid"
        style={{ maxWidth: '980px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}
      >
        <div>
          <Badge kind="eyebrow">Bezpłatna wycena</Badge>
          <h2 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.08, color: 'var(--ink-0)' }}>
            Sprawdź, czy jesteś chroniony.
          </h2>
          <p style={{ margin: '18px 0 0', maxWidth: '40ch', fontSize: '17px', lineHeight: 1.65, color: 'var(--navy-100)' }}>
            Zostaw kontakt — przygotujemy analizę ekspozycji i indywidualną wycenę D&amp;O. Bez zobowiązań.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Odpowiedź w 24 h', 'Broker po Twojej stronie', 'Poufność zapytania'].map((t, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--navy-100)' }}>
                <Icon name="check" size={16} color="var(--gold-500)" strokeWidth={2.4} /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: 'rgba(245,245,240,0.03)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-lg)', padding: 'clamp(24px,3vw,36px)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '32px 8px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(62,124,99,0.16)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--success-500)',
                }}
              >
                <Icon name="check" size={28} strokeWidth={2.4} />
              </span>
              <h3 style={{ margin: '20px 0 8px', fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--ink-0)' }}>
                Dziękujemy, {form.name.split(' ')[0]}.
              </h3>
              <p style={{ margin: 0, color: 'var(--navy-200)', fontSize: '15px', lineHeight: 1.6 }}>Skontaktujemy się w ciągu 24 godzin roboczych.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Input label="Imię i nazwisko" required placeholder="Jan Kowalski" value={form.name} onChange={set('name')} error={errors.name} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Input label="Stanowisko" placeholder="Prezes Zarządu" value={form.role} onChange={set('role')} />
                <Input label="Spółka" placeholder="Nazwa sp. z o.o." value={form.company} onChange={set('company')} />
              </div>
              <Input label="E-mail służbowy" type="email" required placeholder="jan@spolka.pl" value={form.email} onChange={set('email')} error={errors.email} />
              <Input label="Telefon" type="tel" required placeholder="+48 600 000 000" value={form.phone} onChange={set('phone')} error={errors.phone} />
              <Button type="submit" variant="primary" size="lg" fullWidth iconRight={<Icon name="arrow-right" size={18} color="var(--accent-contrast)" />}>
                Poproś o wycenę
              </Button>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--navy-300)', lineHeight: 1.5 }}>
                Wysyłając formularz, wyrażasz zgodę na kontakt w sprawie zapytania. Twoje dane są poufne.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function StickyCTA({ onContact }) {
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
      <Button variant="primary" size="lg" fullWidth onClick={onContact}>
        Sprawdź, czy jesteś chroniony
      </Button>
    </div>
  );
}
