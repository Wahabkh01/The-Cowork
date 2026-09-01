import { Link } from "wouter";
import { PlanPageLayout } from "@/components/PlanPageLayout";
import { Disclosure } from "@/components/Details";

export default function DedicatedDesk() {
  return (
    <PlanPageLayout
      slug="dedicated-desk-lahore"
      h1="Dedicated Desk in"
      highlight="Lahore"
      lead="Your own permanent desk and locker. Set up once, leave it there."
    >
      <Disclosure summary="A desk that stays yours" level="h2">
        <p>
          A dedicated desk is a reserved seat in a shared premium office. Nobody else uses it. Your second
          monitor, keyboard, notebooks and cables stay exactly where you left them, and a lockable
          storage cabinet beside the desk takes anything you would rather not leave in the open.
        </p>
        <p>
          The practical difference from a hot desk is not really the furniture — it is that your working
          setup stops being something you rebuild every morning. For anyone in the space five days a
          week, that is worth considerably more than the PKR 10,000 difference in rate.
        </p>
      </Disclosure>

      <Disclosure summary="What PKR 25,000 a month buys" level="h2">
        <ul>
          <li><strong>A reserved desk and ergonomic chair</strong>, permanently assigned to you.</li>
          <li><strong>A lockable storage cabinet</strong> at your desk.</li>
          <li><strong>24/7 biometric access</strong> on whichever shift you choose.</li>
          <li><strong>Five hours of meeting room credits</strong> a month.</li>
          <li><strong>Mail handling and reception service</strong>, 9:00 AM to 8:00 PM.</li>
          <li><strong>100 free printed pages</strong> a month.</li>
          <li><strong>Fibre internet with a backup line, and industrial power backup.</strong></li>
          <li><strong>Unlimited coffee and tea</strong>, daily cleaning, on-site parking, CCTV and security.</li>
        </ul>
      </Disclosure>

      <Disclosure summary="Good for small teams before they need a room" level="h2">
        <p>
          Two, three or four dedicated desks side by side is a sensible way to run an early team. You get
          the continuity of a fixed setup without the deposit, fit-out cost and lease term of an actual
          office, and you can add a seat the month you hire rather than the year you signed. When you
          outgrow it, moving into a <Link href="/private-office-lahore">private office</Link> here is a
          conversation with reception rather than a move.
        </p>
      </Disclosure>

      <Disclosure summary="Working US or UK hours" level="h2">
        <p>
          The night shift runs 6 PM to 3 AM at the same PKR 25,000 rate, with the full facility live —
          internet, power, security, café and meeting rooms. If you have been running a home office
          through the night because nowhere else in Lahore stays open, read the{" "}
          <Link href="/night-shift-coworking-lahore">night shift page</Link>.
        </p>
      </Disclosure>

      <Disclosure summary="How to take one" level="h2">
        <p>
          Dedicated desks are the plan that runs out first, so availability moves. Message reception on
          WhatsApp or book a tour and we will tell you exactly which desks are free, show you them, and
          put the rate in writing. Every plan and price is listed on the{" "}
          <Link href="/pricing">pricing page</Link>.
        </p>
      </Disclosure>
    </PlanPageLayout>
  );
}
