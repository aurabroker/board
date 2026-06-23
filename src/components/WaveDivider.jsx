/**
 * Aura D&O — WaveDivider
 * A gently panning ocean wave used to transition between bands.
 * `color` should match the surface the wave flows *into*.
 */
export function WaveDivider({ color = 'var(--cream-50)', style }) {
  return (
    <div className="wave-divider" aria-hidden="true" style={style}>
      <svg className="wave-svg" viewBox="0 0 2880 120" preserveAspectRatio="none">
        <path
          fill={color}
          d="M0,60 C120,90 240,90 360,60 C480,30 600,30 720,60 C840,90 960,90 1080,60
             C1200,30 1320,30 1440,60 C1560,90 1680,90 1800,60 C1920,30 2040,30 2160,60
             C2280,90 2400,90 2520,60 C2640,30 2760,30 2880,60 L2880,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
