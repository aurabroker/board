import React from 'react';

/**
 * Aura D&O — RiskCard
 * A concrete claim scenario. icon node + claimant tag + headline + body.
 * Reads as an exhibit, not a feature card: numbered, hairline, gold index.
 */
export function RiskCard({ index, claimant, title, children, icon = null, style }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex', flexDirection: 'column', gap: '16px',
        padding: 'var(--space-6)',
        background: 'var(--surface-card-dark)',
        border: `1px solid ${hovered ? 'var(--border-accent)' : 'var(--border-on-dark)'}`,
        borderRadius: 'var(--radius-lg)',
        transition: 'border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-out)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        ...style,
      }}
    >
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
          letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
          color: '#E78A84', background: 'rgba(194,67,59,0.14)',
          border: '1px solid rgba(194,67,59,0.4)',
          padding: '4px 10px', borderRadius: 'var(--radius-pill)',
        }}>{claimant}</span>
        {index != null && (
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)',
            fontWeight: 'var(--weight-bold)', color: 'var(--navy-400)',
          }}>{String(index).padStart(2, '0')}</span>
        )}
      </header>

      {icon && (
        <div style={{ color: 'var(--accent)', width: '28px', height: '28px' }}>{icon}</div>
      )}

      <h3 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-snug)', color: 'var(--ink-0)',
      }}>{title}</h3>

      <p style={{
        margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-relaxed)', color: 'var(--navy-200)',
      }}>{children}</p>
    </article>
  );
}
