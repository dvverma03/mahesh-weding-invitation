/* ─── Hand-drawn SVG florals used across the invitation ─── */

type FlowerProps = { size?: number; className?: string; style?: React.CSSProperties };

/* Ruffled marigold: three rings of rounded petals */
export function Marigold({ size = 40, className, style }: FlowerProps) {
  const ring = (count: number, r: number, rx: number, ry: number, fill: string) =>
    Array.from({ length: count }, (_, i) => (
      <ellipse
        key={i}
        cx="0"
        cy={-r}
        rx={rx}
        ry={ry}
        fill={fill}
        transform={`rotate(${(360 / count) * i + (r % 7) * 5})`}
      />
    ));
  return (
    <svg
      viewBox="-50 -50 100 100"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden
    >
      <circle r="46" fill="#d9730d" />
      {ring(18, 32, 11, 15, "#e8860f")}
      {ring(14, 22, 10, 13, "#f4a21b")}
      {ring(10, 12, 8, 10, "#ffc857")}
      <circle r="7" fill="#d9730d" />
      <circle r="3" fill="#8e4a06" />
    </svg>
  );
}

/* A single rose petal, cupped */
export function RosePetal({ size = 24, className, style }: FlowerProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      width={size}
      height={size * 1.2}
      className={className}
      style={style}
      aria-hidden
    >
      <defs>
        <radialGradient id="rp" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffc2d1" />
          <stop offset="60%" stopColor="#f28aa6" />
          <stop offset="100%" stopColor="#c21e3a" />
        </radialGradient>
      </defs>
      <path
        d="M20 46 C4 38 0 22 6 10 C10 2 18 0 20 8 C22 0 30 2 34 10 C40 22 36 38 20 46 Z"
        fill="url(#rp)"
      />
      <path d="M20 44 C18 30 18 20 20 10" stroke="rgba(142,16,40,0.25)" strokeWidth="1" fill="none" />
    </svg>
  );
}

/* Five-petal jasmine (mogra) */
export function Jasmine({ size = 22, className, style }: FlowerProps) {
  return (
    <svg
      viewBox="-20 -20 40 40"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-9"
          rx="5.5"
          ry="9"
          fill="#fffaf0"
          stroke="rgba(110,139,61,0.35)"
          strokeWidth="0.6"
          transform={`rotate(${i * 72})`}
        />
      ))}
      <circle r="3" fill="#ffc857" />
    </svg>
  );
}

export function Leaf({ size = 22, className, style }: FlowerProps) {
  return (
    <svg
      viewBox="0 0 30 40"
      width={size}
      height={size * 1.33}
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M15 38 C2 28 2 10 15 2 C28 10 28 28 15 38 Z" fill="#6e8b3d" />
      <path d="M15 36 L15 6" stroke="#4d6a24" strokeWidth="1.2" />
    </svg>
  );
}

/* Concentric mandala, drawn in strokes so it reads as an etching */
export function Mandala({ size = 600, className, style }: FlowerProps) {
  const petals = (count: number, r: number, len: number, w: number, offset = 0) =>
    Array.from({ length: count }, (_, i) => {
      const a = (360 / count) * i + offset;
      return (
        <path
          key={`${r}-${i}`}
          d={`M0 ${-r} Q ${w} ${-r - len / 2} 0 ${-r - len} Q ${-w} ${-r - len / 2} 0 ${-r} Z`}
          transform={`rotate(${a})`}
        />
      );
    });
  return (
    <svg
      viewBox="-300 -300 600 600"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden
      fill="none"
      stroke="currentColor"
    >
      <g strokeWidth="1">
        <circle r="60" />
        <circle r="64" strokeDasharray="2 6" />
        {petals(12, 64, 46, 16)}
        <circle r="116" />
        {petals(24, 116, 52, 12, 7.5)}
        <circle r="174" strokeDasharray="1 5" />
        {petals(36, 174, 40, 9)}
        <circle r="220" />
        {Array.from({ length: 72 }, (_, i) => (
          <circle
            key={i}
            cx="0"
            cy="-236"
            r="4"
            transform={`rotate(${i * 5})`}
          />
        ))}
        <circle r="252" />
        {petals(48, 252, 30, 7, 3.75)}
      </g>
    </svg>
  );
}

/* One hanging strand of a toran: marigold beads, a rose, a bell */
export function GarlandStrand({
  beads = 7,
  size = 18,
  className,
  style,
}: {
  beads?: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex flex-col items-center ${className ?? ""}`}
      style={style}
      aria-hidden
    >
      {Array.from({ length: beads }, (_, i) =>
        i % 3 === 2 ? (
          <Jasmine key={i} size={size * 0.75} style={{ margin: "-2px 0" }} />
        ) : (
          <Marigold key={i} size={size} style={{ margin: "-3px 0" }} />
        )
      )}
      <Leaf size={size * 0.7} style={{ marginTop: -2 }} />
      <svg width={size * 0.8} height={size} viewBox="0 0 20 24" aria-hidden>
        <path d="M10 0 L10 4" stroke="#d9730d" strokeWidth="1.5" />
        <path d="M4 18 Q4 6 10 4 Q16 6 16 18 Z" fill="#f4a21b" />
        <rect x="2.5" y="17" width="15" height="2.5" rx="1" fill="#d9730d" />
        <circle cx="10" cy="22" r="2" fill="#ffc857" />
      </svg>
    </div>
  );
}

/* Clay diya with a flickering flame */
export function Diya({ size = 48, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 60 50"
      width={size}
      height={(size * 50) / 60}
      className={className}
      aria-hidden
    >
      <g className="animate-flicker">
        <path d="M30 4 C24 14 25 22 30 24 C35 22 36 14 30 4 Z" fill="#ffc857" />
        <path d="M30 11 C27 17 28 21 30 22 C32 21 33 17 30 11 Z" fill="#fff4e0" />
      </g>
      <ellipse cx="30" cy="24" rx="14" ry="5" fill="rgba(255,200,87,0.35)" />
      <path d="M6 26 Q30 22 54 26 Q50 44 30 46 Q10 44 6 26 Z" fill="#c2541e" />
      <path d="M6 26 Q30 30 54 26" stroke="#ffc857" strokeWidth="1.5" fill="none" />
      <path d="M14 36 Q30 40 46 36" stroke="rgba(255,200,87,0.6)" strokeWidth="1" fill="none" strokeDasharray="2 3" />
    </svg>
  );
}

/* ─── Colour-filled rangoli, the way it's drawn with powder on the floor ─── */
const RANGOLI_PALETTES = [
  /* rani, marigold, parrot green, haldi, ivory */
  ["#d81b60", "#f57c00", "#43a047", "#ffca28", "#fff3e0", "#7b1fa2"],
  ["#7b1fa2", "#d81b60", "#ffca28", "#26a69a", "#fff3e0", "#f57c00"],
  ["#f57c00", "#c2185b", "#1e88e5", "#ffd54f", "#fff3e0", "#43a047"],
];

export function Rangoli({
  size = 200,
  variant = 0,
  className,
  style,
}: FlowerProps & { variant?: number }) {
  const [a, b, c, d, e, f] = RANGOLI_PALETTES[variant % RANGOLI_PALETTES.length];
  const ring = (count: number, r: number, len: number, w: number, fill: string, offset = 0) =>
    Array.from({ length: count }, (_, i) => (
      <path
        key={`${r}-${i}`}
        d={`M0 ${-r} C ${w} ${-r - len * 0.35} ${w * 0.6} ${-r - len * 0.8} 0 ${-r - len} C ${-w * 0.6} ${-r - len * 0.8} ${-w} ${-r - len * 0.35} 0 ${-r} Z`}
        fill={fill}
        transform={`rotate(${(360 / count) * i + offset})`}
      />
    ));
  const dots = (count: number, r: number, rad: number, fill: string, offset = 0) =>
    Array.from({ length: count }, (_, i) => (
      <circle
        key={`d${r}-${i}`}
        cx="0"
        cy={-r}
        r={rad}
        fill={fill}
        transform={`rotate(${(360 / count) * i + offset})`}
      />
    ));
  return (
    <svg
      viewBox="-100 -100 200 200"
      width={size}
      height={size}
      className={className}
      style={style}
      aria-hidden
    >
      {dots(48, 96, 2.2, e)}
      {ring(16, 62, 30, 13, a)}
      {ring(16, 62, 20, 7, d, 11.25)}
      {ring(16, 64, 16, 5, e)}
      <circle r="62" fill={f} />
      <circle r="62" fill="none" stroke={e} strokeWidth="1.5" strokeDasharray="1 4" />
      {ring(12, 36, 26, 12, b)}
      {ring(12, 38, 16, 5, d)}
      <circle r="36" fill={c} />
      {dots(24, 31, 1.6, e)}
      {ring(8, 12, 18, 9, d, 22.5)}
      {ring(8, 12, 18, 9, a)}
      <circle r="12" fill={e} />
      <circle r="7" fill={b} />
      <circle r="3" fill={a} />
    </svg>
  );
}

/* Paisley (keri), the mehndi motif */
export function Paisley({
  size = 60,
  color = "#ffca28",
  className,
  style,
}: FlowerProps & { color?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      width={size}
      height={(size * 80) / 60}
      className={className}
      style={style}
      fill="none"
      stroke={color}
      aria-hidden
    >
      <path
        d="M30 76 C10 72 4 52 10 38 C16 24 30 22 34 12 C36 6 34 2 30 2 C44 4 56 18 56 40 C56 60 46 76 30 76 Z"
        strokeWidth="2"
      />
      <path
        d="M30 68 C16 64 12 50 17 40 C22 30 32 28 37 20 C46 28 50 40 49 50 C48 62 40 68 30 68 Z"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <circle cx="32" cy="50" r="7" strokeWidth="1.5" />
      <circle cx="32" cy="50" r="2.5" fill={color} />
      {Array.from({ length: 7 }, (_, i) => {
        const t = (i / 6) * Math.PI * 1.1 + 0.2;
        return <circle key={i} cx={32 + Math.cos(t) * 12} cy={50 - Math.sin(t) * 12} r="1.4" fill={color} />;
      })}
    </svg>
  );
}

/* Lotus, open from the side */
export function Lotus({ size = 60, className, style }: FlowerProps) {
  return (
    <svg
      viewBox="0 0 100 64"
      width={size}
      height={(size * 64) / 100}
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M50 60 C30 58 6 46 2 28 C20 30 38 40 50 60 Z" fill="#f48fb1" />
      <path d="M50 60 C70 58 94 46 98 28 C80 30 62 40 50 60 Z" fill="#f48fb1" />
      <path d="M50 60 C34 50 20 30 24 10 C38 18 48 36 50 60 Z" fill="#ec407a" />
      <path d="M50 60 C66 50 80 30 76 10 C62 18 52 36 50 60 Z" fill="#ec407a" />
      <path d="M50 60 C40 44 40 18 50 2 C60 18 60 44 50 60 Z" fill="#d81b60" />
      <path d="M50 56 C46 44 46 22 50 10" stroke="#fce4ec" strokeWidth="1" fill="none" />
    </svg>
  );
}

/* A border of repeating rangoli tiles that runs the full width */
export function RangoliBorder({ height = 44, className }: { height?: number; className?: string }) {
  const id = `rb-${height}`;
  return (
    <svg
      width="100%"
      height={height}
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id={id} width={height * 1.6} height={height} patternUnits="userSpaceOnUse">
          <svg viewBox="0 0 64 40" width={height * 1.6} height={height}>
            <rect width="64" height="40" fill="none" />
            <path d="M0 20 Q16 0 32 20 Q48 40 64 20" stroke="#ffca28" strokeWidth="1.5" fill="none" />
            <path d="M0 20 Q16 40 32 20 Q48 0 64 20" stroke="#d81b60" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="20" r="6" fill="#f57c00" />
            <circle cx="32" cy="20" r="2.5" fill="#fff3e0" />
            {[0, 64].map((x) => (
              <g key={x}>
                <path d={`M${x} 9 L${x + 4} 20 L${x} 31 L${x - 4} 20 Z`} fill="#43a047" />
                <circle cx={x} cy="20" r="1.8" fill="#ffca28" />
              </g>
            ))}
            <circle cx="16" cy="6" r="1.6" fill="#fff3e0" />
            <circle cx="48" cy="34" r="1.6" fill="#fff3e0" />
            <circle cx="16" cy="34" r="1.6" fill="#ffca28" />
            <circle cx="48" cy="6" r="1.6" fill="#ffca28" />
          </svg>
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${id})`} />
    </svg>
  );
}

/* Peacock perched with its train hanging down, Indian miniature style */
export function Peacock({ size = 140, className, style }: FlowerProps) {
  const feathers = [-26, -17, -8, 0, 8, 17, 26];
  return (
    <svg
      viewBox="0 0 160 260"
      width={size}
      height={(size * 260) / 160}
      className={className}
      style={style}
      aria-hidden
    >
      <defs>
        <linearGradient id="pk-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#0d3b8c" />
        </linearGradient>
        <linearGradient id="pk-feather" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b5e20" />
          <stop offset="100%" stopColor="#43a047" />
        </linearGradient>
      </defs>
      {/* Train */}
      {feathers.map((r, i) => (
        <g key={r} transform={`translate(78 86) rotate(${r})`}>
          <path d="M0 0 C-9 50 -10 110 0 160 C10 110 9 50 0 0 Z" fill="url(#pk-feather)" />
          <path d="M0 6 L0 150" stroke="#a5d6a7" strokeWidth="0.8" />
          {[40, 80, 120].map((y) => (
            <path key={y} d={`M0 ${y} l-6 8 M0 ${y} l6 8`} stroke="#81c784" strokeWidth="0.8" />
          ))}
          <ellipse cx="0" cy={150 - (i % 2) * 6} rx="11" ry="14" fill="#fbc02d" />
          <ellipse cx="0" cy={151 - (i % 2) * 6} rx="8" ry="10" fill="#26a69a" />
          <ellipse cx="0" cy={152 - (i % 2) * 6} rx="5.5" ry="7" fill="#1565c0" />
          <ellipse cx="0" cy={153 - (i % 2) * 6} rx="3" ry="4" fill="#0d1b4c" />
        </g>
      ))}
      {/* Body and wing */}
      <path d="M60 96 C52 72 62 52 78 50 C96 48 104 70 98 92 C94 104 70 108 60 96 Z" fill="url(#pk-body)" />
      <path d="M66 70 C80 64 96 72 98 90 C88 96 72 94 66 70 Z" fill="#8d6e63" />
      <path d="M70 76 C80 74 90 80 93 88" stroke="#d7ccc8" strokeWidth="1" fill="none" />
      {/* Neck and head */}
      <path d="M72 56 C66 40 70 26 80 20 C86 24 86 36 82 58 Z" fill="url(#pk-body)" />
      <circle cx="82" cy="20" r="8" fill="#1e88e5" />
      <path d="M89 19 L97 22 L89 24 Z" fill="#f9a825" />
      <circle cx="84" cy="18" r="2.6" fill="#fff" />
      <circle cx="84.6" cy="18" r="1.3" fill="#111" />
      <path d="M80 18 L84 13" stroke="#fff" strokeWidth="1" />
      {/* Crest */}
      {[-18, 0, 18].map((r) => (
        <g key={r} transform={`translate(80 12) rotate(${r})`}>
          <line x1="0" y1="0" x2="0" y2="-12" stroke="#1565c0" strokeWidth="1" />
          <circle cx="0" cy="-13" r="2.2" fill="#1e88e5" />
        </g>
      ))}
      {/* Feet */}
      <path d="M72 100 L70 110 M82 101 L84 110" stroke="#c76a1d" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Laurel of leaves and small blossoms that rings a monogram */
export function FloralWreath({ size = 200, className, style }: FlowerProps) {
  /* Points on a circle (centre 100,72, r 62) from just past the bottom round to the top */
  const leaves = Array.from({ length: 11 }, (_, i) => {
    const deg = 104 + i * 13;
    const t = (deg * Math.PI) / 180;
    return { x: 100 + 62 * Math.cos(t), y: 72 + 62 * Math.sin(t), rot: deg + 90, i };
  });
  return (
    <svg viewBox="0 0 200 150" width={size} height={size * 0.75} className={className} style={style} aria-hidden>
      {[false, true].map((mirror) => (
        <g key={String(mirror)} transform={mirror ? "translate(200 0) scale(-1 1)" : undefined}>
          <path d="M89 133 A62 62 0 0 1 69 18" stroke="#6e8b3d" strokeWidth="1.6" fill="none" />
          {leaves.map(({ x, y, rot, i }) => (
            <g key={i} transform={`translate(${x} ${y}) rotate(${rot})`}>
              <ellipse cx="0" cy="-6" rx="3" ry="7" fill={i % 2 ? "#6e8b3d" : "#4d6a24"} transform="rotate(-35)" />
              <ellipse cx="0" cy="6" rx="2.6" ry="6" fill="#7fa04a" transform="rotate(35)" />
              {i % 3 === 1 && (
                <g transform="translate(-7 0)">
                  {[0, 72, 144, 216, 288].map((r) => (
                    <ellipse key={r} cx="0" cy="-3.6" rx="2.4" ry="3.6" fill={i % 2 ? "#f48fb1" : "#fff3e0"} stroke="rgba(142,20,70,0.25)" strokeWidth="0.4" transform={`rotate(${r})`} />
                  ))}
                  <circle r="1.6" fill="#ffca28" />
                </g>
              )}
            </g>
          ))}
        </g>
      ))}
      <path d="M92 136 Q100 128 108 136 Q100 144 92 136 Z" fill="#d81b60" />
    </svg>
  );
}
