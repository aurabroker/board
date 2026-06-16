import React from 'react';

/**
 * Aura D&O — Card
 * surface: "light" (paper) | "dark" (navy) | "outline" (transparent on dark).
 * accentTop adds a gold rule across the top edge.
 */
export function Card({ surface = 'light', accentTop = false, interactive = false, children, style, ...rest }) {
  const surfaces = {
    light: {
      background: 'var(--surface-card-light)',
      color: 'var(--text-on-light)',
      border: '1px solid var(--border-on-light)',
      boxShadow: 'var(--shadow-md)',
    },
    dark: {
      background: 'var(--surface-card-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)',
      boxShadow: 'none',
    },
    outline: {
      background: 'rgba(245,245,240,0.02)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)',
      boxShadow: 'none',
    },
  };

  const [hovered, setHovered] = React.useState(false);
  const s = surfaces[surface];

  return (
    <div
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
        transform: interactive && hovered ? 'translateY(-3px)' : 'translateY(0)',
        overflow: 'hidden',
        ...s,
        borderColor: interactive && hovered ? 'var(--border-accent)' : s.border.split(' ').pop(),
        ...style,
      }}
      {...rest}
    >
      {accentTop && (
        <span style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, var(--gold-500), var(--gold-300))',
        }} />
      )}
      {children}
    </div>
  );
}
