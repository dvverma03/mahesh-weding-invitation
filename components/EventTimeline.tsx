"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Marigold } from "./Flowers";
import SectionDecor from "./SectionDecor";
import { COUPLE, EVENTS as events, type WeddingEvent } from "@/lib/wedding";

function downloadIcs(e: WeddingEvent) {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${COUPLE}//Wedding//EN`,
    "BEGIN:VEVENT",
    `UID:${e.start}-${COUPLE.toLowerCase().replace(/[^a-z]+/g, "-")}@invite`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART;TZID=Asia/Kolkata:${e.start}`,
    `DTEND;TZID=Asia/Kolkata:${e.end}`,
    `SUMMARY:${e.title} — ${COUPLE}`,
    `LOCATION:${e.venue.replace(/,/g, "\\,")}`,
    `DESCRIPTION:${e.description.replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `${e.title.toLowerCase().replace(/[^a-z]+/g, "-")}.ics`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function mapsUrl(venue: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`;
}

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const featured = event.featured;
  return (
    <div className="relative pl-14 sm:pl-0 sm:grid sm:grid-cols-[1fr_72px_1fr] sm:items-center">
      {/* Date — opposite side of the card on wide screens */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`mb-3 sm:mb-0 flex items-baseline gap-3 sm:flex-col sm:items-center sm:gap-0 ${
          index % 2 ? "sm:col-start-3 sm:row-start-1" : "sm:col-start-1 sm:row-start-1"
        }`}
      >
        <span
          className="font-display leading-none"
          style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)", color: featured ? "var(--marigold-light)" : "var(--ivory)" }}
        >
          {event.day}
        </span>
        <span className="font-body text-base sm:text-lg" style={{ color: "var(--ivory-muted)" }}>
          {event.month} 2026, {event.weekday}
        </span>
      </motion.div>

      {/* Node */}
      <motion.div
        className="absolute left-0 top-2 sm:static sm:col-start-2 sm:row-start-1 flex justify-center"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div
          className="rounded-full p-1"
          style={{ background: "var(--ink)", boxShadow: "0 0 0 2px rgba(244,162,27,0.5), 0 0 24px rgba(244,162,27,0.45)" }}
        >
          <Marigold size={featured ? 46 : 38} />
        </div>
      </motion.div>

      {/* Card */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`relative rounded-2xl p-6 sm:p-7 ${
          index % 2 ? "sm:col-start-1 sm:row-start-1" : "sm:col-start-3 sm:row-start-1"
        }`}
        style={
          featured
            ? {
                background: "linear-gradient(150deg, #c2185b 0%, #6a1b5e 100%)",
                boxShadow: "0 24px 50px -18px rgba(216,27,96,0.6), inset 0 0 0 1px rgba(255,200,87,0.55)",
              }
            : {
                background: "rgba(31,10,36,0.62)",
                boxShadow: "inset 0 0 0 1px rgba(244,162,27,0.28)",
                backdropFilter: "blur(6px)",
              }
        }
      >
        <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
          {event.hindi}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl mt-1" style={{ color: "var(--ivory)" }}>
          {event.title}
        </h3>
        <p className="font-body text-base mt-1" style={{ color: "var(--marigold-light)" }}>
          {event.time}
        </p>
        <p className="font-body font-light text-base leading-7 mt-4" style={{ color: "var(--ivory-muted)" }}>
          {event.description}
        </p>
        <p className="font-body text-sm leading-6 mt-4" style={{ color: "var(--ivory)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" className="inline mr-1.5 -mt-0.5" aria-hidden>
            <path
              fill="var(--marigold)"
              d="M12 2C8 2 5 5 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-4-3-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
            />
          </svg>
          {event.venue}
        </p>
        <div className="flex flex-wrap gap-2.5 mt-5">
          <button type="button" className="btn btn-solid" onClick={() => downloadIcs(event)}>
            Add to calendar
          </button>
          <a className="btn btn-line" href={mapsUrl(event.venue)} target="_blank" rel="noreferrer">
            Directions
          </a>
        </div>
      </motion.article>
    </div>
  );
}

export default function EventTimeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section className="relative py-24 px-5">
      <SectionDecor variant={1} />
      <div className="relative flex flex-col items-center mb-16 text-center">
        <p className="font-hindi text-lg" style={{ color: "var(--marigold-light)" }}>
          मांगलिक कार्यक्रम
        </p>
        <h2 className="font-display mt-2" style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", color: "var(--ivory)" }}>
          The celebrations
        </h2>
        <p className="font-body text-base mt-2 max-w-md" style={{ color: "var(--ivory-muted)" }}>
          Three days of colour, music and everyone we love.
        </p>
      </div>

      <div ref={listRef} className="relative max-w-4xl mx-auto flex flex-col gap-14 sm:gap-20">
        {/* Garland thread that grows as you scroll */}
        <div
          className="absolute top-0 bottom-0 left-[23px] sm:left-1/2 sm:-translate-x-1/2 w-0.5"
          style={{ background: "rgba(244,162,27,0.15)" }}
          aria-hidden
        >
          <motion.div
            className="w-full h-full origin-top"
            style={{
              scaleY: lineScale,
              background: "linear-gradient(180deg, var(--marigold-light), var(--marigold-deep), var(--sindoor))",
            }}
          />
        </div>

        {events.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}
