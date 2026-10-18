import { Link } from "wouter";
import { PlanPageLayout } from "@/components/PlanPageLayout";
import { Disclosure } from "@/components/Details";

export default function TeamOffice() {
  return (
    <PlanPageLayout
      slug="team-office-lahore"
      h1="6-Person Office in"
      highlight="Lahore"
      lead="A furnished, lockable private office for a team of six. PKR 15,000 per seat."
    >
      <Disclosure summary="A room of your own for a small team" level="h2">
        <p>
          The 6-person office is a private, furnished room with a lockable door, sized for a team of
          six. Nobody else uses it. Monitors, files and cables stay exactly where your team left them,
          and the door closes on client calls and internal discussions alike.
        </p>
        <p>
          It is priced the same way as every seat in the building — PKR 15,000 per seat — so the room
          costs PKR 90,000 a month in total, with internet, electricity, power backup and cleaning
          already inside that figure.
        </p>
      </Disclosure>

      <Disclosure summary="What does a 6-person office cost, and what is included?" level="h2">
        <ul>
          <li><strong>A private furnished office for six</strong>, with desks, ergonomic chairs and a lockable door.</li>
          <li><strong>Sound-insulated walls</strong> for calls, interviews and anything confidential.</li>
          <li><strong>24/7 biometric access</strong> on whichever shift your team works.</li>
          <li><strong>Inclusive meeting room access</strong>, with whiteboards, fibre and power backup.</li>
          <li><strong>Mail handling and reception service</strong>, 9:00 AM to 8:00 PM.</li>
          <li><strong>Daily cleaning service.</strong></li>
          <li><strong>Fibre internet with a backup line, and industrial power backup.</strong></li>
          <li><strong>Complimentary tea and filtered water</strong>, on-site parking, CCTV and security.</li>
        </ul>
      </Disclosure>

      <Disclosure summary="Who is the 6-person office for?" level="h2">
        <p>
          Six seats behind one door is the right shape for an agency, a startup or a remote team that has
          outgrown kitchen tables and <Link href="/hot-desk-lahore">hot desks</Link>. You get a real
          office without the deposit, fit-out cost and lease term of renting one, and when the team
          grows past six, moving into the <Link href="/private-office-lahore">15-person office</Link>{" "}
          is a conversation with reception rather than a move.
        </p>
      </Disclosure>

      <Disclosure summary="Working US or UK hours" level="h2">
        <p>
          The night shift runs 6 PM to 3 AM at the same per-seat rate, with the full facility live —
          internet, power, security and meeting rooms. If your team has been working through the night
          from home because nowhere else in Lahore stays open, read the{" "}
          <Link href="/night-shift-coworking-lahore">night shift page</Link>.
        </p>
      </Disclosure>

      <Disclosure summary="How do I book a 6-person office?" level="h2">
        <p>
          Offices turn over slowly, so availability moves. Message reception on WhatsApp or book a tour
          and we will tell you what is free, show you the room, and put the rate in writing. Every plan
          and price is listed on the <Link href="/pricing">pricing page</Link>.
        </p>
      </Disclosure>
    </PlanPageLayout>
  );
}
