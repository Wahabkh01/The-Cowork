export type Faq = { q: string; a: string };

/** Shared answers, written once so the same question never gets two answers. */
const HOURS_A =
  "The Cowork is open 24 hours a day, 7 days a week — members have biometric access at any hour, including weekends and public holidays. Our reception is staffed from 9:00 AM to 8:00 PM daily, and that is the window in which calls, WhatsApp messages and emails get the fastest reply.";

export const GENERAL_FAQS: Faq[] = [
  {
    q: "Where exactly is The Cowork located?",
    a: "We are at 95 College Road, PCSIR Staff Colony, Lahore 54770 — directly beside Johar Town, a few minutes from Wapda Town, Canal Road and UET. There is on-site parking, and the building is easy to reach from Abdul Haq Road and Khayaban-e-Firdousi.",
  },
  {
    q: "What are your opening hours?",
    a: HOURS_A,
  },
  {
    q: "How much does a coworking space in Lahore cost at The Cowork?",
    a: "A Hot Desk is PKR 15,000 per month, a Dedicated Desk is PKR 25,000 per month, and a Private Office starts at PKR 60,000 per month. Every rate includes internet, full power backup, complimentary coffee and tea, meeting room credits and 24/7 access. There are no hidden setup or maintenance charges.",
  },
  {
    q: "Do you offer a night shift?",
    a: "Yes. Our night shift runs 06:00 PM to 03:00 AM and is designed for freelancers and teams working US and UK client hours. The full facility stays open — internet, power backup, security, meeting rooms and the café are all available through the night. Very few coworking spaces in Lahore staff a genuine night shift.",
  },
  {
    q: "Can I visit before I commit?",
    a: "Yes, and we recommend it. Book a tour through the contact form or send us a WhatsApp message and we will show you the space, the desk you would actually sit at, and the internet speed on a live test. Tours take about fifteen minutes.",
  },
  {
    q: "What happens during a power cut?",
    a: "Nothing. We run industrial generators plus UPS backup on every desk and every network device, so the lights, the air conditioning, the internet and your machine stay on through load shedding. This is the single most common reason people leave a home office in Lahore.",
  },
  {
    q: "How fast is the internet?",
    a: "We run dedicated fibre with a redundant secondary line that fails over automatically. It is sized for video calls, large uploads and screen sharing across every desk at once — not a domestic connection shared between forty people.",
  },
  {
    q: "Is there parking?",
    a: "Yes, there is parking on site for members and for visitors you bring in for meetings. College Road access means you are not fighting the Johar Town main boulevard traffic to get in and out.",
  },
];

export const PRICING_FAQS: Faq[] = [
  {
    q: "Are the published prices the final price?",
    a: "Yes. PKR 15,000 for a Hot Desk, PKR 25,000 for a Dedicated Desk and PKR 60,000 for a Private Office are the monthly rates, inclusive of internet, electricity and power backup, coffee and tea, cleaning, and your meeting room credits. We publish them precisely so you do not have to fill in a form to find out whether we fit your budget.",
  },
  {
    q: "Is the price different for the night shift?",
    a: "The same published monthly rate covers the shift you choose — day, night or fully flexible 24/7 access. Tell us your preferred shift when you enquire and we will confirm availability for that slot.",
  },
  {
    q: "Do you charge a security deposit?",
    a: "Deposit and notice terms depend on the plan and the length of your commitment. Ask us on WhatsApp and we will give you the exact figure in writing before you sign anything.",
  },
  {
    q: "Can I pay for a shorter period than a month?",
    a: "Talk to us. Short trials and part-month starts are handled case by case depending on desk availability — message reception between 9 AM and 8 PM and we will tell you what is open.",
  },
  {
    q: "What does a Private Office cost for a larger team?",
    a: "Private Offices start at PKR 60,000 per month. Larger cabins and multi-room layouts for teams above roughly ten people are quoted on the footprint you need — send us your headcount and we will come back with a written figure.",
  },
  {
    q: "Are meeting rooms charged separately?",
    a: "Every plan includes meeting room credits: 2 hours a month on a Hot Desk, 5 hours on a Dedicated Desk, and inclusive access on a Private Office. Additional hours, and bookings for non-members, are quoted per hour on request.",
  },
];

export const NIGHT_SHIFT_FAQS: Faq[] = [
  {
    q: "What hours does the night shift cover?",
    a: "The night shift runs 06:00 PM to 03:00 AM. If you need to be at your desk outside that window as well, take the 24/7 flexible option — the building never closes.",
  },
  {
    q: "Is the space actually staffed at night, or just unlocked?",
    a: "The facility is fully operational: security is on site, power backup is live, the internet is monitored, and the café is stocked. Reception is staffed until 8:00 PM, so anything you need arranged is best raised before then.",
  },
  {
    q: "I work US hours. Does that fit?",
    a: "It fits well. 06:00 PM in Lahore is roughly 8:00 AM US Eastern, so the night shift lines up with a normal American working morning. UK-hours workers usually take the earlier part of the same slot.",
  },
  {
    q: "Is it safe to leave at 3 AM?",
    a: "The premises are covered by CCTV and on-site security personnel, entry is biometric, and parking is inside the property rather than on the road. Members regularly leave late without incident.",
  },
  {
    q: "Can I switch between day and night shift?",
    a: "Yes. Tell reception what you need and we will move you, subject to desk availability in the slot you are moving into. Members who need both routinely take the 24/7 flexible option instead.",
  },
];

export const MEETING_ROOM_FAQS: Faq[] = [
  {
    q: "How do I book a meeting room?",
    a: "Members book through reception between 9:00 AM and 8:00 PM, or by WhatsApp at any time. We confirm the slot and have the room set up before your guests arrive.",
  },
  {
    q: "How many meeting room hours are included?",
    a: "2 hours a month with a Hot Desk, 5 hours with a Dedicated Desk, and inclusive use with a Private Office. Extra hours are available on request.",
  },
  {
    q: "Can non-members book a room?",
    a: "Yes — meeting rooms can be booked by the hour without a membership, subject to availability. Message us with your date, time and headcount and we will confirm the rate and the slot.",
  },
  {
    q: "What equipment is in the rooms?",
    a: "Large-format screens for presentations and video calls, conference audio, whiteboards, and the same fibre internet and power backup as the rest of the building. Tea and coffee service for your guests is included.",
  },
];
