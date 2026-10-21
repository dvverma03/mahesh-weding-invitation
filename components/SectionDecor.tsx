import { Jasmine, Leaf, Lotus, Marigold, Rangoli } from "./Flowers";

/* Half-rangolis peeking in from the screen edges, so no section sits on a bare field */
export default function SectionDecor({ flip = false, variant = 0 }: { flip?: boolean; variant?: number }) {
  const a = flip ? "right" : "left";
  const b = flip ? "left" : "right";
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-[12%] opacity-30 sm:opacity-60"
        style={{ [a]: "calc(min(38vw, 260px) / -2)" }}
      >
        <Rangoli
          variant={variant}
          className="animate-spin-slow"
          style={{ width: "min(38vw, 260px)", height: "min(38vw, 260px)" }}
        />
      </div>
      <div
        className="absolute bottom-[10%] opacity-25 sm:opacity-55"
        style={{ [b]: "calc(min(30vw, 200px) / -2)" }}
      >
        <Rangoli
          variant={variant + 1}
          className="animate-spin-rev"
          style={{ width: "min(30vw, 200px)", height: "min(30vw, 200px)" }}
        />
      </div>

      {/* Flower clusters in the opposite corners */}
      <div className="absolute top-6 hidden sm:flex items-end gap-0 opacity-80" style={{ [b]: "8%" }}>
        <Leaf size={18} style={{ transform: "rotate(-50deg)", marginRight: -6 }} />
        <Marigold size={30} />
        <Jasmine size={18} style={{ marginLeft: -6 }} />
        <Marigold size={22} style={{ marginLeft: -4, marginBottom: 14 }} />
      </div>
      <div className="absolute bottom-6 hidden sm:block opacity-75" style={{ [a]: "9%" }}>
        <Lotus size={56} />
      </div>
    </div>
  );
}
