import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PlanCards } from "@/components/RateCard";
import { Disclosure, DetailPanel } from "@/components/Details";
import { CtaBand } from "@/components/CtaBand";

export default function Pcsir() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      <Seo path="/coworking-space-pcsir" />
      <Breadcrumbs path="/coworking-space-pcsir" />

      <PageHero
        eyebrow="95 College Road · inside the colony"
        h1="Coworking Space in PCSIR &"
        highlight="College Road, Lahore"
        lead="Not near PCSIR Staff Colony — inside it. The closest professional workspace there is."
      />

      <Section>
        <PlanCards />
      </Section>

      <DetailPanel title="Working from PCSIR & College Road">
        <Disclosure summary="A workspace inside the neighbourhood, not across the city" level="h2">
          <p>
            PCSIR Staff Colony is residential, quiet and well positioned — and until recently it had no
            proper place to work from that was not a bedroom or a café. Residents who needed an office
            drove into Johar Town or further. We opened here specifically because that was an obvious
            gap: a dense population of engineers, academics, consultants and remote workers with nowhere
            local to put a desk.
          </p>
          <p>
            For most of the colony, we are a walk or a two-minute drive. That changes the economics of
            coworking entirely. A membership you can reach in five minutes gets used; one that costs you
            forty minutes of Lahore traffic a day gets abandoned by March.
          </p>
        </Disclosure>

        <Disclosure summary="Close to UET and the College Road corridor" level="h2">
          <p>
            College Road runs past us towards UET and the university belt, which brings a particular kind
            of member: postgraduate researchers who need somewhere with reliable power to write in,
            faculty consulting on the side, and recent graduates running their first freelance or startup
            work. If you are on that corridor, you do not need to go to Johar Town for a desk.
          </p>
        </Disclosure>

        <Disclosure summary="What the building offers" level="h2">
          <p>
            Dedicated fibre internet with an automatic failover line. Industrial generators plus UPS on
            every desk and network device, so load shedding is not an interruption. Biometric entry, CCTV
            and on-site security. Ergonomic chairs and desks. Sound-insulated{" "}
            <Link href="/meeting-rooms-lahore">meeting rooms</Link> with screens, conference audio and
            whiteboards. Printing and mail handling. Daily cleaning. Parking inside the property. A
            complimentary café. Full list on the <Link href="/amenities">amenities page</Link>.
          </p>
          <p>
            And it is open 24 hours a day, with a staffed{" "}
            <Link href="/night-shift-coworking-lahore">night shift running 6 PM to 3 AM</Link> for
            members working US and UK client hours.
          </p>
        </Disclosure>

        <Disclosure summary="Also convenient from" level="h2">
          <ul>
            <li>
              <strong>Johar Town</strong> — we sit on its western edge, reachable without the boulevard
              traffic. This is our main catchment and the phrase most of our members search before they
              find us: coworking space Johar Town Lahore.
            </li>
            <li><strong><Link href="/coworking-space-wapda-town">Wapda Town</Link></strong> — a straight run along College Road.</li>
            <li><strong>Canal Road and Thokar Niaz Baig</strong> — quick access without crossing the centre of Johar Town.</li>
            <li><strong>UET and the university corridor</strong> — a short drive down College Road.</li>
          </ul>
        </Disclosure>

        <Disclosure summary="Visiting" level="h2">
          <p>
            Reception is staffed 9:00 AM to 8:00 PM daily and tours take about fifteen minutes. Ask to
            see the actual desk you would be sitting at, and ask us to run a speed test in front of you —
            we would rather you checked. Map and directions are on the{" "}
            <Link href="/contact">contact page</Link>; rates are on the{" "}
            <Link href="/pricing">pricing page</Link>.
          </p>
        </Disclosure>
      </DetailPanel>

      <CtaBand heading="Your Nearest Desk Is in Your Own Colony" waMessage="Hi! I'm local to PCSIR / College Road and I'd like to see The Cowork." />
    </div>
  );
}
