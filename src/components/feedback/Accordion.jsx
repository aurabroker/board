import React from 'react';

/**
 * Aura D&O — Accordion
 * Collapsible FAQ list. items: [{ q, a }]. Single-open by default.
 */
export function Accordion({ items = [], allowMultiple = false, onDark = true, style }) {
  const [open, setOpen] = React.useState(() => new Set());

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  const line = onDark ? 'var(--border-on-dark)' : 'var(--border-on-light)';
  const qColor = onDark ? 'var(--ink-0)' : 'var(--navy-800)';
  const aColor = onDark ? 'var(--navy-200)' : 'var(--slate-600)';

  return (
    <div style={{ borderTop: `1px solid ${line}`, ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderBottom: `1px solid ${line}` }}>
            <button
              onClick={() => toggle(i)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '20px', padding: '22px 4px', background: 'transparent', border: 'none',
                cursor: 'pointer', textAlign: 'left', color: qColor,
                fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-semibold)',
                fontSize: 'var(--text-lg)', lineHeight: 1.3,
              }}
            >
              <span>{it.q}</span>
              <span style={{
                flexShrink: 0, width: '28px', height: '28px', borderRadius: 'var(--radius-pill)',
                border: `1px solid ${isOpen ? 'var(--accent)' : line}`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', fontSize: '18px', lineHeight: 1,
                transition: 'transform var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              }}>+</span>
            </button>
            <div style={{
              display: 'grid',
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows var(--dur-slow) var(--ease-out)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{
                  margin: 0, padding: '0 4px 24px', maxWidth: '60ch',
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)', color: aColor,
                }}>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
