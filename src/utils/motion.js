const SPEED = { slow: 0.7, normal: 0.45, fast: 0.22, off: 0 };
const DIST = { subtle: 8, medium: 16, strong: 28 };
const STAGGER = { slow: 0.1, normal: 0.06, fast: 0.03, off: 0 };

/** Build motion parameters from the chosen speed/intensity. `reduced` forces animations off. */
export function motionConfig(speed, intensity, reduced) {
  const off = reduced || speed === 'off';
  return {
    off,
    duration: off ? 0 : SPEED[speed] ?? SPEED.normal,
    distance: off ? 0 : DIST[intensity] ?? DIST.subtle,
    stagger: off ? 0 : STAGGER[speed] ?? STAGGER.normal,
    ease: [0.22, 0.61, 0.36, 1],
  };
}
