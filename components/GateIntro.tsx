"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GarlandStrand, Mandala, Marigold, Paisley, Rangoli, RosePetal } from "./Flowers";
import { INITIALS } from "@/lib/wedding";

const STRANDS = 13;

function Door({ side, open }: { side: "left" | "right"; open: boolean }) {
  const isLeft = side === "left";
  return (
    <motion.div
      className="relative h-full w-1/2 overflow-hidden"
      style={{
        transformOrigin: isLeft ? "left center" : "right center",
        background:
          "radial-gradient(ellipse 120% 70% at 50% 50%, #c2185b 0%, #880e4f 55%, #4a0a33 100%)",
        boxShadow: isLeft
          ? "inset -2px 0 0 rgba(255,200,87,0.6), inset -14px 0 30px rgba(0,0,0,0.35)"
          : "inset 2px 0 0 rgba(255,200,87,0.6), inset 14px 0 30px rgba(0,0,0,0.35)",
      }}
      animate={
        open
          ? { rotateY: isLeft ? -105 : 105, opacity: 0.2 }
          : { rotateY: 0, opacity: 1 }
      }
      transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
    >
      {/* Carved frame */}
      <div
        className="absolute inset-4 sm:inset-6 rounded-t-[999px]"
        style={{
          border: "2px solid rgba(255,200,87,0.55)",
          [isLeft ? "right" : "left"]: -40,
        }}
      />
      <div
        className="absolute inset-7 sm:inset-10 rounded-t-[999px]"
        style={{
          border: "1px dashed rgba(255,200,87,0.35)",
          [isLeft ? "right" : "left"]: -40,
        }}
      />
      {/* Half of the seam mandala */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          [isLeft ? "right" : "left"]: "calc(min(78vw, 520px) / -2)",
          color: "rgba(255,200,87,0.4)",
        }}
      >
        <Mandala size={520} className="animate-spin-slow" style={{ width: "min(78vw, 520px)", height: "min(78vw, 520px)" }} />
      </div>
      {/* Rangoli and paisleys painted on the door panel */}
      <div
        className="absolute bottom-[6%] opacity-80"
        style={{ [isLeft ? "left" : "right"]: "calc(min(40vw, 240px) / -2.6)" }}
      >
        <Rangoli
          variant={isLeft ? 0 : 2}
          style={{ width: "min(40vw, 240px)", height: "min(40vw, 240px)" }}
        />
      </div>
      <div
        className="absolute top-[10%] flex flex-col gap-3 opacity-70"
        style={{ [isLeft ? "left" : "right"]: "22%" }}
      >
        <Paisley size={28} color="#ffca28" style={{ transform: isLeft ? undefined : "scaleX(-1)" }} />
        <Paisley size={22} color="#f48fb1" style={{ transform: isLeft ? "scaleX(-1)" : undefined }} />
      </div>
      {/* Ganesh ji on the left door, Lakshmi ji on the right, in a gold-edged arch */}
      <div
        className="absolute top-[14%] sm:top-1/2 sm:-translate-y-1/2 flex flex-col items-center"
        style={{
          /* Hug the seam so the two sit together in the middle, either side of the seal */
          [isLeft ? "right" : "left"]: "clamp(8px, calc(50vw - 39vw - 8px), 116px)",
          width: "min(39vw, 260px)",
          zIndex: 1,
        }}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "0.75",
            borderRadius: "999px 999px 10px 10px",
            border: "3px solid #ffc857",
            background: isLeft ? "#ffffff" : "#1f3b5c",
            boxShadow:
              "0 0 0 4px #7a0e3a, 0 0 0 6px #ffc857, 0 18px 40px rgba(0,0,0,0.55), 0 0 40px rgba(255,200,87,0.25)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isLeft ? "/img/ganesh.webp" : "/img/lakshmi.webp"}
            alt={isLeft ? "Shri Ganesh" : "Goddess Lakshmi"}
            draggable={false}
            className={`absolute inset-0 w-full h-full ${isLeft ? "object-contain" : "object-cover"}`}
            style={{ objectPosition: isLeft ? "50% 60%" : "50% 30%" }}
          />
        </div>
        <p
          className="font-hindi text-center mt-3 whitespace-nowrap"
          style={{ color: "#ffd77a", fontSize: "clamp(0.8rem, 3.2vw, 1.15rem)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
        >
          {isLeft ? "॥ श्री गणेशाय नमः ॥" : "॥ श्री लक्ष्म्यै नमः ॥"}
        </p>
      </div>
      {/* Brass studs */}
      {[18, 38, 62, 82].map((top) => (
        <span
          key={top}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            top: `${top}%`,
            [isLeft ? "left" : "right"]: "12%",
            background: "radial-gradient(circle at 35% 35%, #ffe3a3, #d9730d)",
            boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
          }}
        />
      ))}
    </motion.div>
  );
}

/* Carved wedding doors that swing open to reveal the invitation */
export default function GateIntro({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (gone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [gone]);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    onOpen();
    setTimeout(() => setGone(true), 1900);
  };

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-40 flex"
          style={{ perspective: 1600 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Door side="left" open={open} />
          <Door side="right" open={open} />

          {/* Toran across the top */}
          <motion.div
            className="absolute top-0 inset-x-0 flex justify-between px-1 pointer-events-none"
            animate={open ? { y: "-110%" } : { y: 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
          >
            <div
              className="absolute top-0 inset-x-0 h-3"
              style={{ background: "linear-gradient(180deg, #6e8b3d, #4d6a24)" }}
            />
            {Array.from({ length: STRANDS }, (_, i) => (
              <div
                key={i}
                className="animate-swing"
                style={{ animationDelay: `${-i * 0.37}s` }}
              >
                <GarlandStrand beads={i % 2 === 0 ? 5 : 3} size={18} />
              </div>
            ))}
          </motion.div>

          {/* Seal */}
          <AnimatePresence>
            {!open && (
              <motion.button
                type="button"
                onClick={handleOpen}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 cursor-pointer"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.6 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                aria-label="Open the invitation"
              >
                <motion.div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #ffe3a3 0%, #f4a21b 45%, #b5600a 100%)",
                    boxShadow:
                      "0 0 0 4px rgba(255,244,224,0.25), 0 0 0 10px rgba(244,162,27,0.18), 0 18px 50px rgba(0,0,0,0.55)",
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="font-hindi text-sm" style={{ color: "#5c1a0b" }}>
                    शुभ विवाह
                  </span>
                  <span
                    className="font-display leading-none mt-1"
                    style={{ color: "#5c1a0b", fontSize: "2.4rem" }}
                  >
                    {INITIALS[0]}<span className="text-2xl mx-0.5">&amp;</span>{INITIALS[2]}
                  </span>
                  {[0, 90, 180, 270].map((r) => (
                    <Marigold
                      key={r}
                      size={20}
                      className="absolute"
                      style={{
                        transform: `rotate(${r}deg) translateY(calc(-1 * (50% + 3.6rem)))`,
                      }}
                    />
                  ))}
                </motion.div>
                <span
                  className="font-body text-base px-5 py-2 rounded-full whitespace-nowrap"
                  style={{
                    color: "var(--ivory)",
                    background: "rgba(31,10,36,0.45)",
                    border: "1px solid rgba(255,200,87,0.4)",
                  }}
                >
                  Tap to open the invitation
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Petal shower as the doors part */}
          {open && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 36 }, (_, i) => {
                const x = ((i * 53) % 100) - 50;
                return (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
                    animate={{
                      x: `${x * 1.1}vw`,
                      y: [`0vh`, `${-30 - (i % 5) * 6}vh`, `60vh`],
                      opacity: [0, 1, 0],
                      scale: 1,
                      rotate: (i % 2 ? 1 : -1) * 360,
                    }}
                    transition={{ duration: 1.9, ease: "easeOut", delay: (i % 6) * 0.03 }}
                  >
                    {i % 2 ? <RosePetal size={18} /> : <Marigold size={20} />}
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
