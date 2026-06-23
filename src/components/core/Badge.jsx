/**
 * Aura D&O — Badge
 * tone: "accent" (gold), "risk" (red), "covered" (green), "neutral".
 * As an eyebrow label, set kind="eyebrow" for the mono uppercase kicker style.
 */
export function Badge({ tone = 'accent', kind = 'pill', children, style, ...rest }) {
  const tones = {
    accent:  { fg: 'var(--gold-300)', bg: 'rgba(var(--accent-rgb),0.12)', bd: 'rgba(var(--accent-rgb),0.35)' },
    risk:    { fg: '#E78A84', bg: 'rgba(194,67,59,0.14)', bd: 'rgba(194,67,59,0.40)' },
    covered: { fg: '#7FC2A6', bg: 'rgba(62,124,99,0.16)', bd: 'rgba(62,124,99,0.40)' },
    neutral: { fg: 'var(--navy-100)', bg: 'rgba(245,245,240,0.06)', bd: 'var(--border-on-dark)' },
  };
  const t = tones[tone];

  if (kind === 'eyebrow') {
    return (
      <span
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-eyebrow)',
          textTransform: 'uppercase', color: 'var(--text-accent)', ...style,
        }}
        {...rest}
      >
        <span style={{ width: '24px', height: '1px', background: 'var(--accent)', opacity: 0.7 }} />
        {children}
      </span>
    );
  }

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '4px 10px', borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: '0.02em',
        color: t.fg, background: t.bg, border: `1px solid ${t.bd}`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
