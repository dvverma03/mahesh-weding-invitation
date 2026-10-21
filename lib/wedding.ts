/* ─── Every name, date and place on the invitation lives here ─── */

export const BRIDE = "Bride";
export const GROOM = "Groom";
export const COUPLE = `${BRIDE} & ${GROOM}`;
export const INITIALS = `${BRIDE[0]}&${GROOM[0]}`;

export const CITY = "City, State";
export const VENUE = "Venue name, City, State";

export const DATE_RANGE = "26 – 28 November 2026";
export const MONTH_YEAR = "November 2026";

/* The pheras: what the countdown counts to */
export const WEDDING_DATE = new Date("2026-11-28T19:00:00+05:30");
export const WEDDING_WHEN = "28 November 2026 at 7:00 PM";

export interface WeddingEvent {
  title: string;
  hindi: string;
  day: string;
  month: string;
  weekday: string;
  time: string;
  /* IST start/end, used for the calendar file */
  start: string;
  end: string;
  venue: string;
  description: string;
  featured?: boolean;
}

export const EVENTS: WeddingEvent[] = [
  {
    title: "Haldi",
    hindi: "हल्दी",
    day: "26",
    month: "November",
    weekday: "Thursday",
    time: "11:00 AM",
    start: "20261126T110000",
    end: "20261126T140000",
    venue: VENUE,
    description:
      "Turmeric, marigolds and a lot of laughter. Wear yellow and expect to get some on you.",
  },
  {
    title: "Mehndi & sangeet",
    hindi: "मेहंदी व संगीत",
    day: "27",
    month: "November",
    weekday: "Friday",
    time: "6:00 PM onwards",
    start: "20261127T180000",
    end: "20261127T230000",
    venue: VENUE,
    description:
      "Henna for the hands, dhol for the feet. An evening of songs, dances and family performances.",
  },
  {
    title: "Wedding ceremony",
    hindi: "शुभ विवाह",
    day: "28",
    month: "November",
    weekday: "Saturday",
    time: "7:00 PM onwards",
    start: "20261128T190000",
    end: "20261129T020000",
    venue: VENUE,
    description:
      "The baraat arrives, garlands are exchanged and seven vows are taken around the sacred fire.",
    featured: true,
  },
];
