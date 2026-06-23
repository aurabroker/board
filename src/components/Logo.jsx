/**
 * Aura D&O — Logo
 * Recreated "Aura consulting" wordmark: an azure water-droplet glyph paired
 * with the name and a small letter-spaced subline. `onLight` flips the
 * wordmark colour for use on light surfaces (footer / scrolled nav).
 */
export function Logo({ onLight = false, size = 'md', style }) {
  const scale = size === 'sm' ? 0.86 : size === 'lg' ? 1.2 : 1;
  const word = onLight ? 'var(--navy-800)' : 'var(--ink-0)';
  const sub = onLight ? 'var(--slate-500)' : 'var(--navy-200)';

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: `${10 * scale}px`, ...style }}>
      <svg
        width={26 * scale}
        height={34 * scale}
        viewBox="0 0 26 34"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0, display: 'block' }}
      >
        {/* water droplet */}
        <path
          d="M13 1.5C13 1.5 2.5 14.2 2.5 21.2a10.5 10.5 0 0 0 21 0C23.5 14.2 13 1.5 13 1.5Z"
          fill="var(--gold-500)"
        />
        <path
          d="M8.6 20.6a4.6 4.6 0 0 0 3.1 5.4"
          stroke="#FFFFFF"
          strokeOpacity="0.85"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: `${22 * scale}px`,
            letterSpacing: '-0.01em',
            color: word,
          }}
        >
          Aura
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: `${9 * scale}px`,
            fontWeight: 500,
            letterSpacing: '0.32em',
            textTransform: 'lowercase',
            color: sub,
            marginTop: `${4 * scale}px`,
          }}
        >
          consulting
        </span>
      </span>
    </span>
  );
}
