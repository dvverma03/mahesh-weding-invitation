"use client";

import { motion } from "framer-motion";
import SectionDecor from "./SectionDecor";
import { Lotus, Marigold } from "./Flowers";
import {
  BRIDE_FAMILY,
  DARSHANABHILASHI,
  GROOM_FAMILY,
  KIDS_COUPLET,
  SENDER,
  SWAGATAKANKSHI,
  VENUE,
  VINEET,
} from "@/lib/wedding";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const cardStyle = {
  background: "rgba(31,10,36,0.62)",
  boxShadow: "inset 0 0 0 1px rgba(244,162,27,0.28)",
  backdropFilter: "blur(6px)",
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className="font-body text-base leading-7 mt-2" style={{ color: "var(--ivory-muted)" }}>
      <span style={{ color: "var(--marigold-light)" }}>{label} — </span>
      {value}
    </p>
  );
}

function FamilyCard({
  heading,
  family,
  delay,
}: {
  heading: string;
  family: typeof BRIDE_FAMILY;
  delay: number;
}) {
  return (
    <motion.article {...reveal(delay)} className="relative rounded-2xl p-6 sm:p-7 text-center" style={cardStyle}>
      <div className="flex justify-center mb-2" aria-hidden>
        <Marigold size={34} />
      </div>
      <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
        {heading}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl mt-1 mb-3" style={{ color: "var(--ivory)" }}>
        {family.name}
      </h3>
      <Row label={family.relation} value={family.parents} />
      <Row label={family.grandRelation} value={family.grandparents} />
      <Row label="निवास" value={family.address} />
    </motion.article>
  );
}

function Credit({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div {...reveal(delay)} className="text-center">
      <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
        {label}
      </p>
      <p className="font-body text-base leading-7 mt-1" style={{ color: "var(--ivory)" }}>
        {value}
      </p>
    </motion.div>
  );
}

export default function FamilyDetails() {
  return (
    <section className="relative py-24 px-5">
      <SectionDecor variant={2} />

      <div className="relative flex flex-col items-center mb-14 text-center">
        <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
          वर-वधू परिचय
        </p>
        <h2 className="font-display mt-2" style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", color: "var(--ivory)" }}>
          दो परिवार, एक बंधन
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        <FamilyCard heading="वधू" family={BRIDE_FAMILY} delay={0} />
        <FamilyCard heading="वर" family={GROOM_FAMILY} delay={0.15} />
      </div>

      {/* Venue */}
      <motion.div {...reveal(0.1)} className="relative max-w-2xl mx-auto mt-12 text-center">
        <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
          कार्यक्रम स्थल
        </p>
        <p className="font-display text-xl sm:text-2xl mt-1" style={{ color: "var(--ivory)" }}>
          {VENUE}
        </p>
      </motion.div>

      {/* Children's couplet */}
      <motion.div
        {...reveal(0.1)}
        className="relative max-w-xl mx-auto mt-14 rounded-2xl px-6 py-8 text-center"
        style={{
          background: "linear-gradient(150deg, #c2185b 0%, #6a1b5e 100%)",
          boxShadow: "0 24px 50px -18px rgba(216,27,96,0.6), inset 0 0 0 1px rgba(255,200,87,0.55)",
        }}
      >
        <div className="flex justify-center gap-2 mb-3" aria-hidden>
          <Lotus size={30} />
        </div>
        <p className="font-hindi text-sm mb-3" style={{ color: "var(--marigold-light)" }}>
          बाल मनुहार
        </p>
        {KIDS_COUPLET.lines.map((line) => (
          <p key={line} className="font-hindi italic leading-8" style={{ fontSize: "clamp(1.05rem, 2.6vw, 1.25rem)", color: "var(--ivory)" }}>
            {line}
          </p>
        ))}
        <p className="font-body text-base mt-3" style={{ color: "var(--marigold-light)" }}>
          — {KIDS_COUPLET.by}
        </p>
      </motion.div>

      {/* Hosts */}
      <div className="relative max-w-3xl mx-auto mt-14 grid gap-8 sm:grid-cols-2">
        <Credit label="दर्शनाभिलाषी" value={DARSHANABHILASHI} delay={0} />
        <Credit label="स्वागताकांक्षी" value={SWAGATAKANKSHI} delay={0.1} />
        <Credit label="विनीत" value={VINEET} delay={0.15} />
        <motion.div {...reveal(0.2)} className="text-center">
          <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
            प्रेषक
          </p>
          <p className="font-body text-base leading-7 mt-1" style={{ color: "var(--ivory)" }}>
            {SENDER.name}
          </p>
          <p className="font-body text-base leading-7" style={{ color: "var(--ivory-muted)" }}>
            {SENDER.address}
          </p>
          <p className="font-body text-base leading-7" style={{ color: "var(--ivory-muted)" }}>
            मो॰{" "}
            {SENDER.phones.map((p, i) => (
              <span key={p}>
                {i > 0 && ", "}
                <a href={`tel:+91${p}`} style={{ color: "var(--marigold-light)" }}>
                  {p}
                </a>
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
