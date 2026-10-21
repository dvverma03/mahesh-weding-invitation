"use client";

import { useEffect, useState } from "react";
import { Jasmine, Leaf, Marigold, RosePetal } from "./Flowers";

type Kind = "rose" | "marigold" | "jasmine" | "leaf";

interface Particle {
  id: number;
  left: number;
  size: number;
  delay: number;
  fallDuration: number;
  swayDuration: number;
  opacity: number;
  kind: Kind;
}

const KINDS: Kind[] = ["rose", "rose", "rose", "marigold", "jasmine", "leaf"];

function Flower({ kind, size }: { kind: Kind; size: number }) {
  switch (kind) {
    case "rose":
      return <RosePetal size={size} />;
    case "marigold":
      return <Marigold size={size} />;
    case "jasmine":
      return <Jasmine size={size} />;
    default:
      return <Leaf size={size * 0.8} />;
  }
}

/* Flowers drifting down the page, each swaying on its own rhythm */
export default function FloatingPetals({ count = 18 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        delay: -Math.random() * 24,
        fallDuration: 16 + Math.random() * 14,
        swayDuration: 3 + Math.random() * 3,
        opacity: 0.55 + Math.random() * 0.4,
        kind: KINDS[i % KINDS.length],
      }))
    );
  }, [count]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            opacity: p.opacity,
            animation: `fall ${p.fallDuration}s linear ${p.delay}s infinite`,
          }}
        >
          <div
            style={{
              animation: `sway ${p.swayDuration}s ease-in-out ${p.delay}s infinite`,
            }}
          >
            <Flower kind={p.kind} size={p.size} />
          </div>
        </div>
      ))}
    </div>
  );
}
