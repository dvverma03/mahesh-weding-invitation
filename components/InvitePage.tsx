"use client";

import { useState } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import GateIntro from "./GateIntro";
import Hero from "./Hero";
import PersonalMessage from "./PersonalMessage";
import CoupleAnimation from "./CoupleAnimation";
import Countdown from "./Countdown";
import EventTimeline from "./EventTimeline";
import FloatingPetals from "./FloatingPetals";
import PetalBurst from "./PetalBurst";
import Backdrop from "./Backdrop";
import { GarlandStrand, Lotus, Rangoli, RangoliBorder } from "./Flowers";
import { CITY, COUPLE, MONTH_YEAR } from "@/lib/wedding";

interface InvitePageProps {
  name: string;
  withFamily: boolean;
}

/* A strip of rangoli tiles across the screen, with a rangoli medallion at its centre */
function SectionDivider({ variant = 0 }: { variant?: number }) {
  return (
    <div className="relative flex items-center justify-center py-6" aria-hidden>
      <motion.div
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-80"
      >
        <RangoliBorder height={34} />
      </motion.div>
      <motion.div
        initial={{ scale: 0, rotate: -120 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 110, damping: 12, delay: 0.3 }}
        className="relative rounded-full p-1.5"
        style={{ background: "var(--ink)", boxShadow: "0 0 0 2px rgba(255,202,40,0.6), 0 0 30px rgba(216,27,96,0.5)" }}
      >
        <Rangoli size={72} variant={variant} />
      </motion.div>
    </div>
  );
}

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    const data = {
      title: `${COUPLE} — Wedding Invitation`,
      text: `You're invited to the wedding of ${COUPLE}`,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* share sheet dismissed */
    }
  };

  return (
    <button type="button" className="btn btn-solid" onClick={share}>
      {copied ? "Link copied" : "Share invitation"}
    </button>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 inset-x-0 h-1 z-30 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--marigold-light), var(--marigold), var(--sindoor))",
      }}
    />
  );
}

export default function InvitePage({ name, withFamily }: InvitePageProps) {
  const [opened, setOpened] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen">
        <Backdrop />
        <GateIntro onOpen={() => setOpened(true)} />
        <PetalBurst />
        <ScrollProgress />

        {/* Ambient falling flowers */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {opened && <FloatingPetals count={18} />}
        </div>

        <div className="relative z-10">
          <Hero ready={opened} />

          <SectionDivider variant={0} />
          <PersonalMessage name={name} withFamily={withFamily} />

          <SectionDivider variant={1} />
          <CoupleAnimation />

          <SectionDivider variant={2} />
          <EventTimeline />

          <SectionDivider variant={0} />
          <Countdown />

          <SectionDivider variant={1} />

          <footer className="relative pt-4 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
            <div
              className="absolute left-1/2 bottom-0 translate-y-[68%] -translate-x-1/2 pointer-events-none opacity-30"
              aria-hidden
            >
              <Rangoli variant={2} className="animate-spin-slow" style={{ width: "min(560px, 120vw)", height: "min(560px, 120vw)" }} />
            </div>
            <div className="flex gap-6 sm:gap-10 mb-10" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="animate-swing" style={{ animationDelay: `${-i * 0.6}s` }}>
                  <GarlandStrand beads={i % 2 ? 3 : 5} size={18} />
                </div>
              ))}
            </div>
            <div className="relative flex items-end gap-2 mb-2" aria-hidden>
              <Lotus size={40} style={{ transform: "rotate(-14deg)" }} />
              <Lotus size={58} />
              <Lotus size={40} style={{ transform: "rotate(14deg)" }} />
            </div>
            <p className="relative font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
              आपके आगमन की प्रतीक्षा में
            </p>
            <p className="relative font-body text-base mt-1" style={{ color: "var(--ivory-muted)" }}>
              Awaiting your gracious presence
            </p>
            <p
              className="relative font-display marigold-text mt-4"
              style={{ fontSize: "clamp(2.2rem, 7vw, 3.6rem)" }}
            >
              {COUPLE}
            </p>
            <p className="relative font-body text-base mt-1 mb-8" style={{ color: "var(--ivory-muted)" }}>
              {CITY}, {MONTH_YEAR}
            </p>
            <div className="relative">
              <ShareButton />
            </div>
          </footer>
        </div>
      </main>
    </MotionConfig>
  );
}
