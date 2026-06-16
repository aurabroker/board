/**
 * Aura D&O — Button
 * Variants: primary (gold), secondary (outline on dark), ghost, light (on light bg).
 * Sizes: sm, md, lg.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', gap: '8px' },
    md: { padding: '12px 24px', fontSize: 'var(--text-base)', gap: '10px' },
    lg: { padding: '16px 32px', fontSize: 'var(--text-md)', gap: '12px' },
  };

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)',
      boxShadow: 'var(--shadow-accent)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark-strong)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
    light: {
      background: 'var(--navy-800)',
      color: 'var(--ink-0)',
      border: '1px solid var(--navy-800)',
      boxShadow: 'var(--shadow-md)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: sizes[size].padding,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    ...variants[variant],
    ...style,
  };

  const hover = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-hover)';
    if (variant === 'secondary') e.currentTarget.style.borderColor = 'var(--accent)';
    if (variant === 'secondary') e.currentTarget.style.color = 'var(--text-accent)';
    if (variant === 'ghost') e.currentTarget.style.background = 'rgba(201,146,42,0.10)';
    if (variant === 'light') e.currentTarget.style.background = 'var(--navy-700)';
  };
  const leave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.color = variants[variant].color;
    e.currentTarget.style.borderColor = variants[variant].border.split(' ').pop();
  };
  const down = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; };
  const up = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0)'; };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={hover}
      onMouseLeave={leave}
      onMouseDown={down}
      onMouseUp={up}
      style={base}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
