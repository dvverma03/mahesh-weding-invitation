"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Diya } from "./Flowers";
import SectionDecor from "./SectionDecor";
import { CITY, WEDDING_DATE, WEDDING_WHEN } from "@/lib/wedding";

interface Span {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  past: boolean;
}

function getSpan(): Span {
  const diff = WEDDING_DATE.getTime() - Date.now();
  const abs = Math.abs(diff);
  return {
    days: Math.floor(abs / 86_400_000),
    hours: Math.floor((abs / 3_600_000) % 24),
    minutes: Math.floor((abs / 60_000) % 60),
    seconds: Math.floor((abs / 1000) % 60),
    past: diff <= 0,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center w-[4.5rem] sm:w-28">
      <div
        className="relative h-16 sm:h-24 w-full overflow-hidden rounded-xl flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, rgba(106,27,94,0.45), rgba(31,10,36,0.75))",
          boxShadow: "inset 0 0 0 1px rgba(244,162,27,0.3)",
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-display tabular-nums"
            style={{ fontSize: "clamp(2rem, 7vw, 3.4rem)", color: "var(--ivory)" }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
        <div className="absolute inset-x-0 top-1/2 h-px" style={{ background: "rgba(31,10,36,0.6)" }} />
      </div>
      <span className="font-body text-sm mt-2" style={{ color: "var(--marigold-light)" }}>
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [span, setSpan] = useState<Span | null>(null);

  useEffect(() => {
    setSpan(getSpan());
    const id = setInterval(() => setSpan(getSpan()), 1000);
    return () => clearInterval(id);
  }, []);

  const past = span?.past ?? false;

  return (
    <section className="relative py-24 px-5 flex flex-col items-center text-center">
      <SectionDecor flip variant={2} />
      <div className="relative flex items-end gap-4">
        <Diya size={40} />
        <Diya size={56} />
        <Diya size={40} />
      </div>
      <h2
        className="relative font-display mt-4"
        style={{ fontSize: "clamp(2rem, 6vw, 3.4rem)", color: "var(--ivory)" }}
      >
        {past ? "Happily married for" : "Counting down to the vows"}
      </h2>
      <p className="relative font-body text-base mt-2 mb-10" style={{ color: "var(--ivory-muted)" }}>
        {past
          ? `Since ${WEDDING_WHEN}, ${CITY}`
          : `${WEDDING_WHEN}, ${CITY}`}
      </p>

      {span && (
        <div className="relative flex gap-2 sm:gap-4 justify-center">
          <Unit value={span.days} label="days" />
          <Unit value={span.hours} label="hours" />
          <Unit value={span.minutes} label="minutes" />
          <Unit value={span.seconds} label="seconds" />
        </div>
      )}
    </section>
  );
}
