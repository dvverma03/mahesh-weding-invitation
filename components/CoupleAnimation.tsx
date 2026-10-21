"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Jasmine, Lotus, Marigold, Rangoli, RosePetal } from "./Flowers";
import { BRIDE, GROOM } from "@/lib/wedding";

/* ─── Bride SVG ─── */
function BrideAvatar() {
  return (
    <svg
      viewBox="0 0 130 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-lg"
    >
      {/* Bun */}
      <ellipse cx="65" cy="20" rx="16" ry="12" fill="#2a1410" />
      {/* Maang tikka */}
      <line
        x1="65"
        y1="20"
        x2="65"
        y2="36"
        stroke="#e0a526"
        strokeWidth="1.2"
      />
      <circle cx="65" cy="38" r="3.5" fill="#e0a526" />
      {/* Flowers in bun */}
      <circle cx="53" cy="16" r="4.5" fill="#ffc857" />
      <circle cx="77" cy="16" r="4.5" fill="#ffc857" />
      <circle cx="65" cy="11" r="4" fill="#e0a526" />
      <circle cx="53" cy="16" r="2" fill="#fdf0f4" />
      <circle cx="77" cy="16" r="2" fill="#fdf0f4" />
      <circle cx="65" cy="11" r="2" fill="#fdf0f4" />
      {/* Head */}
      <ellipse cx="65" cy="48" rx="19" ry="21" fill="#f1c9a5" />
      {/* Eyes */}
      <ellipse cx="57" cy="46" rx="3" ry="3.5" fill="white" />
      <ellipse cx="73" cy="46" rx="3" ry="3.5" fill="white" />
      <circle cx="57" cy="47" r="1.8" fill="#3d1838" />
      <circle cx="73" cy="47" r="1.8" fill="#3d1838" />
      {/* Lips */}
      <path
        d="M59 56 Q65 60 71 56"
        stroke="#a06070"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bindi */}
      <circle cx="65" cy="40" r="2.2" fill="#e0a526" />
      {/* Earrings */}
      <circle cx="46" cy="50" r="3" fill="#e0a526" />
      <line
        x1="46"
        y1="53"
        x2="46"
        y2="60"
        stroke="#e0a526"
        strokeWidth="1.2"
      />
      <circle cx="46" cy="62" r="2.5" fill="#ffc857" />
      <circle cx="84" cy="50" r="3" fill="#e0a526" />
      <line
        x1="84"
        y1="53"
        x2="84"
        y2="60"
        stroke="#e0a526"
        strokeWidth="1.2"
      />
      <circle cx="84" cy="62" r="2.5" fill="#ffc857" />
      {/* Neck */}
      <rect x="60" y="67" width="10" height="11" rx="2" fill="#f1c9a5" />
      {/* Necklace */}
      <path
        d="M50 72 Q65 80 80 72"
        stroke="#e0a526"
        strokeWidth="1.8"
        fill="none"
      />
      <circle cx="65" cy="78" r="3.5" fill="#e0a526" />
      <circle cx="55" cy="74" r="2" fill="#ffc857" />
      <circle cx="75" cy="74" r="2" fill="#ffc857" />
      {/* Choli */}
      <path d="M44 78 Q65 72 86 78 L88 104 Q65 110 42 104 Z" fill="#c21e3a" />
      <path
        d="M44 78 Q65 73 86 78"
        stroke="#e0a526"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M42 104 Q65 110 88 104"
        stroke="#e0a526"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Dupatta */}
      <path
        d="M44 80 Q30 90 24 108 Q18 126 20 148 Q22 164 28 176"
        stroke="rgba(224,165,38,0.55)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Lehenga */}
      <path
        d="M42 104 Q65 112 88 104 L104 192 Q82 205 65 207 Q48 205 26 192 Z"
        fill="#c21e3a"
      />
      <path
        d="M46 112 L34 196"
        stroke="rgba(224,165,38,0.25)"
        strokeWidth="1.2"
      />
      <path
        d="M58 109 L52 204"
        stroke="rgba(224,165,38,0.25)"
        strokeWidth="1.2"
      />
      <path
        d="M72 109 L74 204"
        stroke="rgba(224,165,38,0.25)"
        strokeWidth="1.2"
      />
      <path
        d="M84 112 L96 196"
        stroke="rgba(224,165,38,0.25)"
        strokeWidth="1.2"
      />
      {/* Hem */}
      <path
        d="M26 192 Q65 207 104 192"
        stroke="#e0a526"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 186 Q65 200 102 186"
        stroke="rgba(224,165,38,0.45)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Arms */}
      <path
        d="M44 82 Q30 98 28 122"
        stroke="#f1c9a5"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M86 82 Q100 98 102 122"
        stroke="#f1c9a5"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Bangles */}
      <circle
        cx="29"
        cy="118"
        r="5.5"
        fill="none"
        stroke="#e0a526"
        strokeWidth="2.2"
      />
      <circle
        cx="29"
        cy="124"
        r="5.5"
        fill="none"
        stroke="#ffc857"
        strokeWidth="1.5"
      />
      <circle
        cx="101"
        cy="118"
        r="5.5"
        fill="none"
        stroke="#e0a526"
        strokeWidth="2.2"
      />
      <circle
        cx="101"
        cy="124"
        r="5.5"
        fill="none"
        stroke="#ffc857"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* ─── Groom SVG ─── */
function GroomAvatar() {
  return (
    <svg
      viewBox="0 0 130 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-lg"
      style={{ transform: "scaleX(-1)" }}
    >
      {/* Turban */}
      <path d="M46 30 Q65 10 84 30 L82 44 Q65 34 48 44 Z" fill="#f4a21b" />
      <path
        d="M46 30 Q65 14 84 30"
        stroke="#e0a526"
        strokeWidth="2"
        fill="none"
      />
      {/* Kalgi */}
      <path
        d="M78 20 Q88 10 86 18"
        stroke="#e0a526"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="86" cy="18" r="3" fill="#ffc857" />
      {/* Sehra strings */}
      <path
        d="M48 44 Q42 60 44 80"
        stroke="rgba(224,165,38,0.7)"
        strokeWidth="1.5"
        strokeDasharray="3,2.5"
        strokeLinecap="round"
      />
      <path
        d="M52 44 Q46 62 48 82"
        stroke="rgba(224,165,38,0.5)"
        strokeWidth="1"
        strokeDasharray="3,2.5"
        strokeLinecap="round"
      />
      {/* Head */}
      <ellipse cx="65" cy="56" rx="19" ry="20" fill="#f1c9a5" />
      {/* Eyes */}
      <ellipse cx="57" cy="54" rx="3" ry="3.5" fill="white" />
      <ellipse cx="73" cy="54" rx="3" ry="3.5" fill="white" />
      <circle cx="57" cy="55" r="1.8" fill="#2d1228" />
      <circle cx="73" cy="55" r="1.8" fill="#2d1228" />
      {/* Moustache */}
      <path
        d="M59 64 Q65 68 71 64"
        stroke="#3d1838"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Earrings */}
      <circle cx="46" cy="58" r="2.5" fill="#e0a526" />
      <circle cx="84" cy="58" r="2.5" fill="#e0a526" />
      {/* Neck */}
      <rect x="60" y="74" width="10" height="10" rx="2" fill="#f1c9a5" />
      {/* Sherwani collar */}
      <path
        d="M50 84 L65 96 L80 84"
        stroke="#e0a526"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Sherwani body */}
      <path d="M42 84 Q65 78 88 84 L90 172 Q65 178 40 172 Z" fill="#f3e2c0" />
      {/* Centre seam */}
      <line
        x1="65"
        y1="84"
        x2="65"
        y2="172"
        stroke="rgba(224,165,38,0.35)"
        strokeWidth="1"
      />
      {/* Buttons */}
      <circle cx="65" cy="100" r="2.5" fill="#e0a526" />
      <circle cx="65" cy="114" r="2.5" fill="#e0a526" />
      <circle cx="65" cy="128" r="2.5" fill="#e0a526" />
      <circle cx="65" cy="142" r="2.5" fill="#e0a526" />
      <circle cx="65" cy="156" r="2.5" fill="#e0a526" />
      {/* Gold trim */}
      <path
        d="M42 84 Q65 79 88 84"
        stroke="#e0a526"
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M40 172 Q65 178 90 172"
        stroke="#e0a526"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Churidar */}
      <path
        d="M40 172 L44 230 L60 230 L65 196 L70 230 L86 230 L90 172 Q65 178 40 172"
        fill="#e9d3a8"
      />
      {/* Arms */}
      <path
        d="M42 88 Q28 106 26 132"
        stroke="#f3e2c0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M88 88 Q102 106 104 132"
        stroke="#f3e2c0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Hands */}
      <ellipse cx="26" cy="135" rx="7" ry="5" fill="#f1c9a5" />
      <ellipse cx="104" cy="135" rx="7" ry="5" fill="#f1c9a5" />
    </svg>
  );
}

/* ─── Main component ─── */
export default function CoupleAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    restDelta: 0.001,
  });

  const groomX = useTransform(smoothProgress, [0, 0.82], ["-46vw", "-7vw"]);
  const brideX = useTransform(smoothProgress, [0, 0.82], ["46vw", "7vw"]);
  const brideY = useTransform(smoothProgress, [0.5, 0.85], ["0px", "-14px"]);
  const groomY = useTransform(smoothProgress, [0.5, 0.85], ["0px", "-14px"]);
  const avatarGlow = useTransform(smoothProgress, [0.5, 0.85], [0, 1]);
  const centerOpacity = useTransform(smoothProgress, [0.62, 0.88], [0, 1]);
  const centerScale = useTransform(smoothProgress, [0.62, 0.88], [0.2, 1]);
  const centerY = useTransform(smoothProgress, [0.62, 0.88], ["22px", "0px"]);
  const labelOpacity = useTransform(smoothProgress, [0.08, 0.35], [0, 1]);
  const headingOpacity = useTransform(smoothProgress, [0, 0.18], [0, 1]);
  const hintOpacity = useTransform(smoothProgress, [0, 0.14], [1, 0]);

  const [united, setUnited] = useState(false);
  useMotionValueEvent(smoothProgress, "change", (v) => setUnited(v > 0.8));

  const avatarW = "clamp(96px, 17vw, 144px)";
  const avatarH = "clamp(162px, 29vw, 242px)";

  return (
    <section ref={sectionRef} style={{ height: "220vh" }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: avatarGlow }}
        >
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: 520,
              height: 520,
              background:
                "radial-gradient(circle, rgba(224,165,38,0.1) 0%, rgba(194,30,58,0.08) 45%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
        </motion.div>

        {/* Mandap floor: a big rangoli under the couple, and lotuses either side */}
        <div
          aria-hidden
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[62%] pointer-events-none opacity-55"
          style={{
            maskImage: "linear-gradient(180deg, black 15%, transparent 38%)",
            WebkitMaskImage: "linear-gradient(180deg, black 15%, transparent 38%)",
          }}
        >
          <Rangoli
            variant={0}
            className="animate-spin-slow"
            style={{ width: "min(110vw, 680px)", height: "min(110vw, 680px)" }}
          />
        </div>
        <div aria-hidden className="absolute bottom-8 left-[6%] hidden sm:block opacity-80 animate-bob">
          <Lotus size={72} />
        </div>
        <div
          aria-hidden
          className="absolute bottom-8 right-[6%] hidden sm:block opacity-80 animate-bob"
          style={{ animationDelay: "-2.5s" }}
        >
          <Lotus size={72} />
        </div>

        {/* Flower shower once they meet */}
        {united && (
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            {Array.from({ length: 26 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute top-0"
                style={{ left: `${(i * 37) % 100}%` }}
                initial={{ y: "-10vh", rotate: 0, opacity: 0 }}
                animate={{ y: "105vh", rotate: (i % 2 ? 1 : -1) * 540, opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3.2 + (i % 5) * 0.4, delay: (i % 7) * 0.12, ease: "easeIn" }}
              >
                {i % 3 === 0 ? <Marigold size={18} /> : <RosePetal size={16} />}
              </motion.div>
            ))}
          </div>
        )}

        {/* Section heading */}
        <motion.div
          style={{ opacity: headingOpacity }}
          className="absolute top-16 flex flex-col items-center gap-1 pointer-events-none text-center px-6"
        >
          <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
            सात फेरे, सात वचन
          </p>
          <p
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "var(--ivory)" }}
          >
            Two hearts, one journey
          </p>
        </motion.div>

        {/* Avatars */}
        <div
          className="relative flex items-end justify-center w-full"
          style={{ height: avatarH }}
        >
          {/* Groom */}
          <motion.div
            className="absolute bottom-0 flex flex-col items-center"
            style={{ x: groomX, y: groomY }}
          >
            <motion.div
              className="absolute -inset-8 rounded-full pointer-events-none"
              style={{
                opacity: avatarGlow,
                background:
                  "radial-gradient(circle, rgba(106,27,94,0.45) 0%, transparent 70%)",
                filter: "blur(18px)",
              }}
            />
            <div style={{ width: avatarW, height: avatarH }}>
              <GroomAvatar />
            </div>
            <motion.p
              className="font-display mt-3 relative"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                color: "var(--ivory)",
                opacity: labelOpacity,
              }}
            >
              {GROOM}
            </motion.p>
          </motion.div>

          {/* Center ring + ampersand */}
          <motion.div
            className="absolute z-10 flex flex-col items-center gap-1"
            style={{
              opacity: centerOpacity,
              scale: centerScale,
              y: centerY,
              bottom: "calc(100% + 14px)",
            }}
          >
            {/* Jaimala — a ring of marigolds */}
            <div className="relative w-24 h-24" aria-hidden>
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-38px)`,
                  }}
                >
                  {i % 4 === 3 ? <Jasmine size={16} /> : <Marigold size={20} />}
                </div>
              ))}
              <div
                className="absolute inset-0 flex items-center justify-center font-hindi italic marigold-text"
                style={{ fontSize: "2.2rem" }}
              >
                &amp;
              </div>
            </div>
          </motion.div>
          {/* Bride */}
          <motion.div
            className="absolute bottom-0 flex flex-col items-center"
            style={{ x: brideX, y: brideY }}
          >
            <motion.div
              className="absolute -inset-8 rounded-full pointer-events-none"
              style={{
                opacity: avatarGlow,
                background:
                  "radial-gradient(circle, rgba(194,30,58,0.3) 0%, transparent 70%)",
                filter: "blur(18px)",
              }}
            />
            <div style={{ width: avatarW, height: avatarH }}>
              <BrideAvatar />
            </div>
            <motion.p
              className="font-display mt-3 relative"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                color: "var(--ivory)",
                opacity: labelOpacity,
              }}
            >
              {BRIDE}
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.p
          className="absolute bottom-10 font-body text-base pointer-events-none"
          style={{ color: "var(--ivory-muted)", opacity: hintOpacity }}
        >
          Scroll to bring them together
        </motion.p>
      </div>
    </section>
  );
}
