import React from 'react';

/**
 * Aura D&O — Input
 * Text field with label, optional required mark, hint and error.
 * Designed for the contact / quote form. Dark-surface friendly.
 */
export function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  hint,
  error,
  as = 'input',
  rows = 4,
  onDark = true,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);

  const fieldBase = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: onDark ? 'var(--ink-0)' : 'var(--navy-800)',
    background: onDark ? 'rgba(245,245,240,0.04)' : 'var(--paper-0)',
    border: `1px solid ${error ? 'var(--danger-500)' : focused ? 'var(--accent)' : (onDark ? 'var(--border-on-dark-strong)' : 'var(--border-on-light)')}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 15px',
    outline: 'none',
    boxShadow: focused ? 'var(--ring-focus)' : 'none',
    transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
    boxSizing: 'border-box',
    resize: as === 'textarea' ? 'vertical' : undefined,
  };

  const Field = as === 'textarea' ? 'textarea' : 'input';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '7px', ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-medium)',
          color: onDark ? 'var(--navy-100)' : 'var(--slate-600)',
        }}>
          {label}{required && <span style={{ color: 'var(--accent)', marginLeft: '4px' }}>*</span>}
        </span>
      )}
      <Field
        name={name}
        type={as === 'textarea' ? undefined : type}
        rows={as === 'textarea' ? rows : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={fieldBase}
        {...rest}
      />
      {error ? (
        <span style={{ fontSize: 'var(--text-xs)', color: '#E78A84' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 'var(--text-xs)', color: onDark ? 'var(--navy-300)' : 'var(--slate-400)' }}>{hint}</span>
      ) : null}
    </label>
  );
}
