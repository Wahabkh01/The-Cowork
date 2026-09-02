import { Link } from "wouter";
import { PlanPageLayout } from "@/components/PlanPageLayout";
import { Disclosure } from "@/components/Details";

export default function HotDesk() {
  return (
    <PlanPageLayout
      slug="hot-desk-lahore"
      h1="Hot Desk in"
      highlight="Lahore"
      lead="Any free seat in the open workspace, any day you turn up."
    >
      <Disclosure summary="What a hot desk actually is" level="h2">
        <p>
          A hot desk is unreserved seating. You turn up, take any free desk in the open workspace, work,
          and pack up at the end of the day. Nothing stays behind. In exchange you pay the lowest monthly
          rate we offer, and you are never paying for a desk that sat empty while you were at a client's
          office.
        </p>
        <p>
          It suits people whose week is irregular: freelancers mixing on-site and remote work, remote
          employees who go into a client office twice a week, consultants who travel, and people testing
          whether coworking suits them before committing to something permanent.
        </p>
      </Disclosure>

      <Disclosure summary="What PKR 15,000 a month buys" level="h2">
        <p>
          The rate is inclusive. No joining fee, no maintenance charge, and no separate electricity bill
          — the line item that catches people out when they rent a small private office elsewhere in
          Lahore and discover generator diesel is theirs to fund.
        </p>
        <ul>
          <li><strong>A seat in the open workspace</strong>, any day, on the shift you have chosen.</li>
          <li><strong>Dedicated fibre internet</strong> with an automatic failover line.</li>
          <li><strong>Full power backup</strong> — generators plus UPS on every desk and network device.</li>
          <li><strong>Complimentary tea and filtered water</strong>, day and night.</li>
          <li><strong>Two hours of meeting room credits</strong> a month.</li>
          <li><strong>A business address</strong> for your invoices, website and registration.</li>
          <li><strong>24/7 biometric access</strong>, CCTV, on-site security and parking inside the property.</li>
        </ul>
      </Disclosure>

      <Disclosure summary="Day shift or night shift, same price" level="h2">
        <p>
          Choose the 9 AM – 6 PM day shift, the 6 PM – 3 AM night shift, or 24/7 flexible access. The
          PKR 15,000 does not change. If you are on US or UK client hours, the{" "}
          <Link href="/night-shift-coworking-lahore">night shift</Link> is why most of our freelancers
          picked us over somewhere closer to the Johar Town boulevard.
        </p>
      </Disclosure>

      <Disclosure summary="When you should not take a hot desk" level="h2">
        <p>
          Two honest cases. If you use two monitors and a proper keyboard, carrying them in and out every
          day gets old inside a fortnight — take a{" "}
          <Link href="/dedicated-desk-lahore">dedicated desk</Link> instead and leave everything set up.
          And if you take calls constantly, the open workspace will frustrate you and the people around
          you; a <Link href="/private-office-lahore">private office</Link> pays for itself in goodwill.
        </p>
      </Disclosure>

      <Disclosure summary="Getting started" level="h2">
        <p>
          Book a fifteen-minute tour, sit in the space for a bit, and see whether the noise level and the
          light suit how you work. Reception is staffed 9:00 AM to 8:00 PM; message us on WhatsApp
          outside those hours and we will reply first thing. Rates for every plan are on the{" "}
          <Link href="/pricing">pricing page</Link>.
        </p>
      </Disclosure>
    </PlanPageLayout>
  );
}
