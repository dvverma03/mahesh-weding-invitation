import { Lotus, Paisley, Rangoli } from "./Flowers";

const PAISLEY_COLORS = ["#ffca28", "#f48fb1", "#ffb74d"];

/* A mehndi-style column of paisleys running down one edge of the screen */
function SideBorder({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-0 bottom-0 ${isLeft ? "left-0" : "right-0"} w-14 lg:w-20 hidden md:flex flex-col items-center gap-4 pt-6 overflow-hidden`}
      style={{
        background: `linear-gradient(${isLeft ? 90 : 270}deg, rgba(59,15,63,0.85), transparent)`,
        opacity: 0.75,
      }}
    >
      <div
        className="absolute top-0 bottom-0 w-px"
        style={{
          [isLeft ? "right" : "left"]: 6,
          background: "repeating-linear-gradient(180deg, #ffca28 0 6px, transparent 6px 12px)",
          opacity: 0.6,
        }}
      />
      {Array.from({ length: 14 }, (_, i) => (
        <Paisley
          key={i}
          size={30}
          color={PAISLEY_COLORS[i % PAISLEY_COLORS.length]}
          style={{
            transform: `rotate(${isLeft ? 0 : 180}deg) scaleX(${i % 2 ? -1 : 1})`,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

/* Fixed layer behind the whole invitation: jaali texture, side borders, corner rangolis */
export default function Backdrop() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="jaali absolute inset-0" style={{ opacity: 0.07 }} />

      <SideBorder side="left" />
      <SideBorder side="right" />

      <div className="absolute -top-28 -left-28 sm:-top-36 sm:-left-36 opacity-25 sm:opacity-45">
        <Rangoli size={300} variant={0} className="animate-spin-slow" />
      </div>
      <div className="absolute -bottom-28 -right-28 sm:-bottom-36 sm:-right-36 opacity-25 sm:opacity-45">
        <Rangoli size={300} variant={1} className="animate-spin-rev" />
      </div>
      <div className="absolute bottom-3 left-2 sm:left-20 opacity-40 sm:opacity-70 animate-bob">
        <Lotus size={64} />
      </div>
      <div className="absolute top-24 right-2 sm:right-20 opacity-30 sm:opacity-60 animate-bob" style={{ animationDelay: "-2.5s" }}>
        <Lotus size={48} />
      </div>
    </div>
  );
}
