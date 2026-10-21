"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Diya, GarlandStrand, Lotus, Mandala, Paisley, Rangoli } from "./Flowers";
import { BRIDE, CITY, DATE_RANGE, GROOM } from "@/lib/wedding";
const STRANDS = 15;

function SplitText({
  text,
  delay = 0,
  play,
}: {
  text: string;
  delay?: number;
  play: boolean;
}) {
  return (
    <span className="inline-flex" aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: 60, rotate: -8, filter: "blur(8px)" }}
          animate={play ? { opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" } : undefined}
          transition={{
            duration: 0.9,
            delay: delay + i * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero({ ready }: { ready: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mandalaY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const mandalaRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 620 }}
    >
      {/* Hanging toran */}
      <div className="absolute top-0 inset-x-0 z-20 pointer-events-none">
        <div
          className="h-2.5 w-full"
          style={{ background: "linear-gradient(180deg, #6e8b3d, #4d6a24)" }}
        />
        <div className="flex justify-between px-1">
          {Array.from({ length: STRANDS }, (_, i) => {
            const fromEdge = Math.min(i, STRANDS - 1 - i);
            return (
              <motion.div
                key={i}
                initial={{ y: -200 }}
                animate={ready ? { y: 0 } : undefined}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 9,
                  delay: 0.3 + fromEdge * 0.06,
                }}
              >
                <div
                  className="animate-swing"
                  style={{ animationDelay: `${-i * 0.41}s` }}
                >
                  <GarlandStrand beads={i % 2 === 0 ? 4 : 2} size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mandala */}
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
      <motion.div style={{ y: mandalaY, rotate: mandalaRotate }}>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={ready ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ color: "rgba(255,202,40,0.26)" }}
        >
          <Mandala
            className="animate-spin-slow"
            style={{ width: "min(720px, 130vw)", height: "min(720px, 130vw)" }}
          />
        </motion.div>
      </motion.div>
      </div>

      {/* Rangolis rising from the lower corners */}
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 sm:-bottom-32 sm:-left-28 z-0 pointer-events-none opacity-70"
        initial={{ scale: 0, rotate: -90 }}
        animate={ready ? { scale: 1, rotate: 0 } : undefined}
        transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Rangoli variant={0} className="animate-spin-slow" style={{ width: "min(56vw, 380px)", height: "min(56vw, 380px)" }} />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 sm:-bottom-32 sm:-right-28 z-0 pointer-events-none opacity-70"
        initial={{ scale: 0, rotate: 90 }}
        animate={ready ? { scale: 1, rotate: 0 } : undefined}
        transition={{ duration: 1.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Rangoli variant={2} className="animate-spin-rev" style={{ width: "min(56vw, 380px)", height: "min(56vw, 380px)" }} />
      </motion.div>

      {/* Paisleys and lotuses flanking the names */}
      <motion.div
        aria-hidden
        className="absolute left-[4%] sm:left-[12%] top-1/2 -translate-y-1/2 z-0 hidden sm:flex flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0, x: -40 }}
        animate={ready ? { opacity: 0.9, x: 0 } : undefined}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <Paisley size={46} color="#ffca28" />
        <Lotus size={70} />
        <Paisley size={46} color="#f48fb1" style={{ transform: "scaleX(-1)" }} />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute right-[4%] sm:right-[12%] top-1/2 -translate-y-1/2 z-0 hidden sm:flex flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={ready ? { opacity: 0.9, x: 0 } : undefined}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <Paisley size={46} color="#ffca28" style={{ transform: "scaleX(-1)" }} />
        <Lotus size={70} />
        <Paisley size={46} color="#f48fb1" />
      </motion.div>

      {/* Warm glow behind the names */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, rgba(31,10,36,0.75) 0%, rgba(31,10,36,0.4) 28%, rgba(216,27,96,0.12) 42%, transparent 60%)",
        }}
      />

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          {...fadeUp(0.4)}
          className="relative overflow-hidden mb-3"
          style={{
            width: "clamp(78px, 20vw, 118px)",
            aspectRatio: "0.86",
            borderRadius: "999px 999px 12px 12px",
            border: "2px solid #ffc857",
            boxShadow: "0 0 0 3px #7a0e3a, 0 0 0 5px #ffc857, 0 0 36px rgba(255,200,87,0.45)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/ganesh-gold.webp" alt="Shri Ganesh" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
        <motion.p
          {...fadeUp(0.6)}
          className="font-hindi text-base sm:text-lg mb-2"
          style={{ color: "var(--marigold-light)" }}
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.p>
        <motion.p
          {...fadeUp(0.8)}
          className="font-body font-light text-base sm:text-lg mb-6"
          style={{ color: "var(--ivory-muted)" }}
        >
          Together with their families
        </motion.p>

        <h1
          className="font-display leading-[0.95]"
          style={{ fontSize: "clamp(3.6rem, 13vw, 9rem)", color: "var(--ivory)" }}
        >
          <SplitText text={BRIDE} delay={1.0} play={ready} />
          <motion.span
            className="block font-hindi italic marigold-text my-1"
            style={{ fontSize: "0.5em", lineHeight: 1.2 }}
            initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
            animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : undefined}
            transition={{ duration: 1, delay: 1.5, ease: "backOut" }}
          >
            &amp;
          </motion.span>
          <SplitText text={GROOM} delay={1.7} play={ready} />
        </h1>

        <motion.p
          {...fadeUp(2.3)}
          className="font-hindi italic text-lg sm:text-xl mt-6"
          style={{ color: "var(--ivory)" }}
        >
          request the pleasure of your company
        </motion.p>

        <motion.div {...fadeUp(2.5)} className="flex items-center gap-3 sm:gap-4 mt-6">
          <Diya size={36} />
          <div className="flex flex-col items-center">
            <span
              className="font-display text-xl sm:text-3xl whitespace-nowrap"
              style={{ color: "var(--marigold-light)" }}
            >
              {DATE_RANGE}
            </span>
            <span
              className="font-body text-sm sm:text-base"
              style={{ color: "var(--ivory-muted)" }}
            >
              {CITY}
            </span>
          </div>
          <Diya size={36} />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "var(--ivory-muted)" }}
      >
        <span className="font-body text-sm">Scroll down</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(180deg, var(--marigold), transparent)",
            animation: "scroll-hint 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
