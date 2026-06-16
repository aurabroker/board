/**
 * Aura D&O — ProcessStep
 * One step of the 3-step engagement. Gold index, serif title, body.
 */
export function ProcessStep({ step, title, children, last = false, style }) {
  return (
    <div style={{ display: 'flex', gap: '20px', position: 'relative', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{
          flexShrink: 0, width: '48px', height: '48px', borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--border-accent)', color: 'var(--accent)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)',
          background: 'rgba(201,146,42,0.08)',
        }}>{String(step).padStart(2, '0')}</span>
        {!last && <span style={{ flex: 1, width: '1px', background: 'var(--border-on-dark)', marginTop: '8px' }} />}
      </div>
      <div style={{ paddingBottom: last ? 0 : 'var(--space-6)' }}>
        <h3 style={{
          margin: '10px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-lg)', color: 'var(--ink-0)',
        }}>{title}</h3>
        <p style={{
          margin: 0, maxWidth: '46ch', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-relaxed)', color: 'var(--navy-200)',
        }}>{children}</p>
      </div>
    </div>
  );
}
