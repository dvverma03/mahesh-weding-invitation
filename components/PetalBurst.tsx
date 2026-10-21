"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Jasmine, Marigold, RosePetal } from "./Flowers";

interface Burst {
  id: number;
  x: number;
  y: number;
}

const PIECES = 10;

/* Tap anywhere and a handful of petals bloom out from the finger */
export default function PetalBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) return;
      const id = nextId.current++;
      setBursts((b) => [...b.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1600);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {bursts.map((b) => (
          <div key={b.id} className="absolute" style={{ left: b.x, top: b.y }}>
            {Array.from({ length: PIECES }, (_, i) => {
              const angle = (Math.PI * 2 * i) / PIECES + (b.id % 3) * 0.3;
              const dist = 50 + ((i * 37 + b.id * 13) % 50);
              const dx = Math.cos(angle) * dist;
              const dy = Math.sin(angle) * dist;
              return (
                <motion.div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  initial={{ x: 0, y: 0, scale: 0.2, opacity: 1, rotate: 0 }}
                  animate={{
                    x: [0, dx, dx * 1.15],
                    y: [0, dy, dy + 70],
                    scale: [0.2, 1, 0.8],
                    opacity: [1, 1, 0],
                    rotate: [0, 120, 260],
                  }}
                  transition={{ duration: 1.4, ease: "easeOut", times: [0, 0.4, 1] }}
                >
                  {i % 3 === 0 ? (
                    <Marigold size={14} />
                  ) : i % 3 === 1 ? (
                    <RosePetal size={12} />
                  ) : (
                    <Jasmine size={13} />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
