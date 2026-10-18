import { Link } from "wouter";
import { PlanPageLayout } from "@/components/PlanPageLayout";
import { Disclosure } from "@/components/Details";

export default function PrivateOffice() {
  return (
    <PlanPageLayout
      slug="private-office-lahore"
      h1="15-Person Private Office in"
      highlight="Lahore"
      lead="A furnished, lockable, sound-insulated office for a team of fifteen. PKR 15,000 per seat."
    >
      <Disclosure summary="An office without the lease" level="h2">
        <p>
          Renting a small commercial office in Lahore means a security deposit, a year or more of
          commitment, furniture, wiring, a generator arrangement, an internet contract, a cleaner, and
          somebody in your team spending their week on all of it. The 15-person office here means one monthly
          figure — PKR 15,000 per seat, PKR 225,000 for the room — and a key.
        </p>
        <p>
          The rooms are fully furnished and sound-insulated, so client calls and internal arguments both
          stay inside them. You can brand the door and the interior. You get guest reception for
          visitors, daily cleaning, and full access to meeting rooms rather than a monthly credit.
        </p>
      </Disclosure>

      <Disclosure summary="What PKR 225,000 a month buys" level="h2">
        <ul>
          <li><strong>A fully furnished private office for fifteen</strong> with a lockable door.</li>
          <li><strong>Sound-insulated walls</strong> — usable for client calls, interviews and anything confidential.</li>
          <li><strong>Custom branding</strong> on the door and inside the office.</li>
          <li><strong>Inclusive meeting room access</strong>, with whiteboards, fibre and power backup.</li>
          <li><strong>Guest reception and visitor management</strong> during staffed hours.</li>
          <li><strong>Daily cleaning service.</strong></li>
          <li><strong>Fibre internet with failover and full generator plus UPS backup</strong>, included — no separate electricity or diesel bill.</li>
          <li><strong>24/7 biometric access</strong>, CCTV, on-site security and parking inside the property.</li>
        </ul>
      </Disclosure>

      <Disclosure summary="Smaller and larger teams" level="h2">
        <p>
          Teams of six or fewer take the <Link href="/team-office-lahore">6-person office</Link> at the
          same PKR 15,000 per seat. Multi-room layouts for teams above fifteen are quoted on the
          footprint you need — tell us your headcount and how you want the room laid
          out and we will come back with a written figure rather than a range. Teams above roughly twenty
          people usually want a bespoke arrangement; we build those.
        </p>
      </Disclosure>

      <Disclosure summary="Who takes private offices here" level="h2">
        <p>
          Mostly three kinds of tenant. Agencies and product teams of ten to fifteen who have outgrown the{" "}
          <Link href="/team-office-lahore">6-person office</Link> and need more room. Companies opening a
          Lahore delivery or support office and wanting to be operational in a week rather than a
          quarter. And established firms that want a professional room near Johar Town without paying
          boulevard rent.
        </p>
      </Disclosure>

      <Disclosure summary="Night operations, and arranging a viewing" level="h2">
        <p>
          If your team runs to US or UK client hours, the 15-person office works on the{" "}
          <Link href="/night-shift-coworking-lahore">night shift</Link> exactly as it does in the day:
          full power, full internet, security on site.
        </p>
        <p>
          Private offices turn over slowly, so what is available changes month to month. Send us your
          team size and target start date and we will tell you honestly what is free now and what frees
          up next. Reception answers 9:00 AM to 8:00 PM; the{" "}
          <Link href="/contact">contact form</Link> reaches us at any hour.
        </p>
      </Disclosure>
    </PlanPageLayout>
  );
}
