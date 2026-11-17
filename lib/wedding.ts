/* ─── Every name, date and place on the invitation lives here ─── */

export const BRIDE = "अनुश्री";
export const GROOM = "सुमित";
export const COUPLE = `${BRIDE} संग ${GROOM}`;
export const BRIDE_INITIAL = "अ";
export const GROOM_INITIAL = "सु";

export const CITY = "वाराणसी";
export const VENUE_NAME = "पार्वती उत्सव वाटिका";
export const VENUE = `${VENUE_NAME}, बलुआ रोड, चंद्रा चौराहा के पास, वाराणसी`;

export const DATE_RANGE = "01 – 04 दिसम्बर 2026";
export const MONTH_YEAR = "दिसम्बर 2026";

/* The pheras: what the countdown counts to (रात्रि लग्नानुसार — 8 PM used as an estimate) */
export const WEDDING_DATE = new Date("2026-12-02T20:00:00+05:30");
export const WEDDING_WHEN = "02 दिसम्बर 2026, रात्रि लग्नानुसार";

/* ─── Families ─── */
export const BRIDE_FAMILY = {
  name: "आयु॰ अनुश्री पाण्डेय",
  relation: "सुपुत्री",
  parents: "श्रीमती अनामिका पाण्डेय व श्री अजय कुमार पाण्डेय",
  grandRelation: "सुपौत्री",
  grandparents: "स्व॰ जयंती पाण्डेय व स्व॰ श्यामप्यारे पाण्डेय",
  address: "रामलक्ष्मणपुर, चकिया, चंदौली",
};

export const GROOM_FAMILY = {
  name: "चि॰ सुमित मिश्रा",
  relation: "सुपुत्र",
  parents: "श्रीमती चंद्रकांति मिश्रा व श्री शिव शंकर मिश्रा",
  grandRelation: "सुपौत्र",
  grandparents: "स्व॰ विद्या मिश्रा व स्व॰ महाराज नारायन मिश्रा",
  address: "सा॰ 15/159-R-6-2/C मंगल कालोनी, मवईयां, आशापुर, सारनाथ, वाराणसी",
};

export const VINEET = "रामजी पाण्डेय";
export const DARSHANABHILASHI = "कुशल, दीपक, प्रशांत, ध्रुव, ईवांश एवं समस्त परिवार व मित्रगण";
export const SWAGATAKANKSHI = "संजय पाण्डेय, विनय पाण्डेय, विजय पाण्डेय, अनुज पाण्डेय";

export const SENDER = {
  name: "अजय कुमार पाण्डेय",
  address: "ग्राम- रामलक्ष्मणपुर, चकिया, चंदौली",
  phones: ["6394783316", "9621976301"],
};

export const KIDS_COUPLET = {
  lines: ["हम नन्हे-मुन्ने हैं, नखरे हमारे खास हैं,", "बुआ की शादी में आने की आपसे आस है।"],
  by: "छवि, श्रृजा",
};

/* ─── Events ─── */
export interface WeddingEvent {
  /* ASCII id, used for keys and the calendar file name */
  slug: string;
  title: string;
  day: string;
  month: string;
  weekday: string;
  time?: string;
  /* IST start/end, used for the calendar file */
  start: string;
  end: string;
  venue?: string;
  description: string;
  featured?: boolean;
}

export const EVENTS: WeddingEvent[] = [
  {
    slug: "mehndi-sangeet",
    title: "मेहंदी व संगीत",
    day: "01",
    month: "दिसम्बर",
    weekday: "मंगलवार",
    start: "20261201T180000",
    end: "20261201T230000",
    description: "हाथों में मेहंदी, पैरों में ढोल की थाप — गीत, नृत्य और अपनों के संग एक सुरीली शाम।",
  },
  {
    slug: "haldi",
    title: "हल्दी",
    day: "02",
    month: "दिसम्बर",
    weekday: "बुधवार",
    start: "20261202T100000",
    end: "20261202T130000",
    venue: VENUE,
    description: "हल्दी का उबटन, गेंदे के फूल और ढेर सारी हँसी — पीले वस्त्र पहनकर आइए।",
  },
  {
    slug: "shubh-vivah",
    title: "शुभ विवाह",
    day: "02",
    month: "दिसम्बर",
    weekday: "बुधवार",
    time: "रात्रि लग्नानुसार",
    start: "20261202T200000",
    end: "20261203T040000",
    venue: VENUE,
    description: "बारात का आगमन, जयमाला और पवित्र अग्नि के समक्ष सात फेरे व सात वचन।",
    featured: true,
  },
  {
    slug: "vidai",
    title: "विदाई",
    day: "04",
    month: "दिसम्बर",
    weekday: "शुक्रवार",
    time: "प्रातःकाल",
    start: "20261204T070000",
    end: "20261204T100000",
    description: "भावभीनी विदाई — आशीर्वाद और शुभकामनाओं के साथ बिटिया को नए जीवन की ओर विदा करें।",
  },
];
