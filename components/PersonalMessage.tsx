"use client";

import { motion } from "framer-motion";
import SectionDecor from "./SectionDecor";
import { CornerScroll, Damask, GoldRule, LaceStrip } from "./RoyalFrame";
import { COUPLE } from "@/lib/wedding";

interface PersonalMessageProps {
  name: string;
  withFamily: boolean;
}

export default function PersonalMessage({ name, withFamily }: PersonalMessageProps) {
  const salutation = name
    ? `Dear ${name}${withFamily ? " & family" : ""},`
    : "Dear guest,";

  const familyLine = withFamily
    ? "With great joy, we invite you and your entire family to bless our union and celebrate with us."
    : "With great joy, we invite you to bless our union and celebrate with us.";

  return (
    <section className="relative pt-32 pb-24 px-5 flex flex-col items-center">
      <SectionDecor />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-xl"
      >
        {/* Maroon velvet card with gold lace edges */}
        <div
          className="relative rounded-[14px] p-6 sm:p-9"
          style={{
            background: "radial-gradient(ellipse 90% 70% at 50% 35%, #7d1233 0%, #5a0b22 60%, #3d0618 100%)",
            boxShadow: "0 40px 80px -24px rgba(0,0,0,0.7), 0 0 0 1px rgba(233,185,73,0.6)",
          }}
        >
          <Damask />
          <LaceStrip side="top" />
          <LaceStrip side="bottom" />
          <LaceStrip side="left" />
          <LaceStrip side="right" />
          <CornerScroll corner="tl" />
          <CornerScroll corner="tr" />
          <CornerScroll corner="bl" />
          <CornerScroll corner="br" />

          {/* Ivory panel framed in gold */}
          <div
            className="relative text-center px-6 sm:px-12 pt-24 sm:pt-28 pb-12"
            style={{
              background: "radial-gradient(ellipse at 50% 20%, #fffaf0 0%, #fbefd8 70%, #f3dfbb 100%)",
              borderRadius: 6,
              color: "var(--paper-ink)",
              boxShadow: "0 0 0 2px #e9b949, 0 0 0 5px #5a0b22, 0 0 0 6px rgba(233,185,73,0.7), inset 0 0 40px rgba(201,144,46,0.18)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-2.5 pointer-events-none"
              style={{ border: "1px solid rgba(201,144,46,0.55)", borderRadius: 3 }}
            />

            <p className="relative font-hindi text-base" style={{ color: "#8e1446" }}>
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="relative font-hindi text-lg mt-1" style={{ color: "#b0651a" }}>
              सादर आमंत्रण
            </p>

            <div className="relative my-5">
              <GoldRule width={200} />
            </div>

            <h2
              className="relative font-hindi italic mb-5"
              style={{ fontSize: "clamp(1.6rem, 5vw, 2.2rem)", color: "#7a0e24", lineHeight: 1.25 }}
            >
              {salutation}
            </h2>

            <p
              className="relative font-hindi leading-8 mb-4 max-w-md mx-auto"
              style={{ fontSize: "clamp(1rem, 2.4vw, 1.12rem)" }}
            >
              {familyLine}
            </p>
            <p
              className="relative font-hindi leading-8 max-w-md mx-auto"
              style={{ fontSize: "clamp(1rem, 2.4vw, 1.12rem)" }}
            >
              Your presence and blessings would make our happiness complete.
            </p>

            <div className="relative my-7">
              <GoldRule width={140} />
            </div>

            <p className="relative font-body text-sm" style={{ color: "rgba(74,22,32,0.7)" }}>
              With love,
            </p>
            <p className="relative font-display gold-foil mt-1" style={{ fontSize: "clamp(1.9rem, 6vw, 2.6rem)" }}>
              {COUPLE}
            </p>
          </div>
        </div>

        {/* Golden Ganesh ji as the crest, rising out of the top edge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -top-20 sm:-top-24 -translate-x-1/2 z-10"
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: "clamp(124px, 34vw, 160px)",
              aspectRatio: "0.86",
              borderRadius: "999px 999px 14px 14px",
              border: "3px solid #e9b949",
              boxShadow:
                "0 0 0 5px #5a0b22, 0 0 0 7px #e9b949, 0 0 0 9px rgba(90,11,34,0.9), 0 0 50px rgba(255,200,87,0.55), 0 18px 30px rgba(0,0,0,0.5)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/ganesh-gold.webp" alt="Shri Ganesh" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
