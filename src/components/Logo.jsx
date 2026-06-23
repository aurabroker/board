/**
 * Aura D&O — Logo
 * Renders the real "Aura consulting" lockup. Use the white derivative on
 * dark surfaces (nav / footer) and the colour derivative on light ones.
 */
export function Logo({ onDark = true, width = 150, style }) {
  const src = onDark ? '/aura_logo_white.png' : '/aura_logo.png';
  return (
    <img
      src={src}
      alt="Aura Consulting — broker ubezpieczeniowy"
      width="520"
      height="303"
      style={{ width, height: 'auto', display: 'block', ...style }}
    />
  );
}
