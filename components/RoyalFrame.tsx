/* ─── Gold laser-cut lace, scroll corners and damask, for the royal letter card ─── */

const MAROON = "#5a0b22";

function GoldDefs({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#fff1b8" />
      <stop offset="30%" stopColor="#e9b949" />
      <stop offset="60%" stopColor="#b8801f" />
      <stop offset="100%" stopColor="#f3d27a" />
    </linearGradient>
  );
}

/* A run of scalloped lace along one edge, scallops pointing outward */
export function LaceStrip({ side }: { side: "top" | "bottom" | "left" | "right" }) {
  const vertical = side === "left" || side === "right";
  /* The tile is drawn for the top edge, then mapped onto the others */
  const map = {
    top: undefined,
    bottom: "matrix(1 0 0 -1 0 16)",
    left: "matrix(0 1 1 0 0 0)",
    right: "matrix(0 1 -1 0 16 0)",
  }[side];
  const id = `lace-${side}`;
  const pos: React.CSSProperties = vertical
    ? { top: 18, [side]: 0, width: 16, height: "calc(100% - 36px)" }
    : { left: 18, [side]: 0, height: 16, width: "calc(100% - 36px)" };
  return (
    <svg aria-hidden className="absolute pointer-events-none" style={pos}>
      <defs>
        <GoldDefs id={`${id}-g`} />
        <pattern id={id} width={vertical ? 16 : 28} height={vertical ? 28 : 16} patternUnits="userSpaceOnUse">
          <g transform={map}>
            <path d="M0 16 C3 5 9 1 14 1 C19 1 25 5 28 16 Z" fill={`url(#${id}-g)`} />
            <circle cx="14" cy="10" r="3.4" fill={MAROON} />
            <path d="M14 3.5 L15.4 6 L14 7.4 L12.6 6 Z" fill={MAROON} />
            <circle cx="0" cy="14.5" r="1.6" fill="#f3d27a" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* Ornate scrollwork for one corner; drawn for top-left and rotated for the rest */
export function CornerScroll({ corner, size = 92 }: { corner: "tl" | "tr" | "bl" | "br"; size?: number }) {
  const rot = { tl: 0, tr: 90, br: 180, bl: 270 }[corner];
  const pos: React.CSSProperties = {
    [corner[0] === "t" ? "top" : "bottom"]: 4,
    [corner[1] === "l" ? "left" : "right"]: 4,
    transform: `rotate(${rot}deg)`,
  };
  return (
    <svg aria-hidden viewBox="0 0 92 92" width={size} height={size} className="absolute pointer-events-none" style={pos}>
      <defs>
        <GoldDefs id={`cs-${corner}`} />
      </defs>
      <g fill="none" stroke={`url(#cs-${corner})`} strokeLinecap="round">
        <path d="M6 88 C6 42 42 6 88 6" strokeWidth="3" />
        <path d="M15 88 C15 50 50 15 88 15" strokeWidth="1.2" />
        <path d="M22 66 C10 56 16 38 31 42 C41 45 39 58 29 56" strokeWidth="2.2" />
        <path d="M66 22 C56 10 38 16 42 31 C45 41 58 39 56 29" strokeWidth="2.2" />
        <path d="M24 84 C30 74 26 68 22 66" strokeWidth="1.4" />
        <path d="M84 24 C74 30 68 26 66 22" strokeWidth="1.4" />
      </g>
      <g fill={`url(#cs-${corner})`}>
        <path d="M30 16 C24 22 24 32 30 40 C36 32 36 22 30 16 Z" transform="rotate(-45 30 30)" />
        <circle cx="30" cy="30" r="3" />
        {[0.15, 0.32, 0.5, 0.68, 0.85].map((t) => {
          const a = (Math.PI / 2) * t + Math.PI;
          return <circle key={t} cx={88 + Math.cos(a) * 82} cy={88 + Math.sin(a) * 82} r="2.2" />;
        })}
      </g>
    </svg>
  );
}

/* Faint gold damask vines across the maroon */
export function Damask({ opacity = 0.12 }: { opacity?: number }) {
  return (
    <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
      <defs>
        <pattern id="damask" width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#e9b949" strokeWidth="1">
            <path d="M32 8 C24 18 24 28 32 34 C40 28 40 18 32 8 Z" />
            <path d="M32 34 C22 34 16 42 18 50 M32 34 C42 34 48 42 46 50" />
            <path d="M18 50 C22 46 26 48 26 52 M46 50 C42 46 38 48 38 52" />
            <path d="M0 32 C6 28 10 30 10 36 M64 32 C58 28 54 30 54 36" />
          </g>
          <g fill="#e9b949">
            <circle cx="32" cy="22" r="1.6" />
            <circle cx="0" cy="0" r="2" />
            <circle cx="64" cy="0" r="2" />
            <circle cx="0" cy="64" r="2" />
            <circle cx="64" cy="64" r="2" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#damask)" />
    </svg>
  );
}

/* Gold scroll rule with a lotus bud in the middle */
export function GoldRule({ width = 220 }: { width?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 220 24" width={width} height={(width * 24) / 220} className="mx-auto block">
      <defs>
        <GoldDefs id="gold-rule" />
      </defs>
      <g fill="none" stroke="url(#gold-rule)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M10 12 H80 C88 12 90 4 98 6" />
        <path d="M210 12 H140 C132 12 130 4 122 6" />
        <path d="M80 12 C88 12 92 20 99 18" />
        <path d="M140 12 C132 12 128 20 121 18" />
      </g>
      <g fill="url(#gold-rule)">
        <path d="M110 1 C104 7 104 15 110 21 C116 15 116 7 110 1 Z" />
        <circle cx="10" cy="12" r="2" />
        <circle cx="210" cy="12" r="2" />
        <circle cx="96" cy="12" r="1.6" />
        <circle cx="124" cy="12" r="1.6" />
      </g>
    </svg>
  );
}
