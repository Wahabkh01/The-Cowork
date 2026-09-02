import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { PlanCards } from "@/components/RateCard";
import { Disclosure, DetailPanel } from "@/components/Details";
import { CtaBand } from "@/components/CtaBand";
import { NAP } from "@/data/site";

export default function WapdaTown() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      <Seo path="/coworking-space-wapda-town" />
      <Breadcrumbs path="/coworking-space-wapda-town" />

      <PageHero
        eyebrow="A short run down College Road"
        h1="Coworking Space near"
        highlight="Wapda Town, Lahore"
        lead="Closer than the boulevard, without the traffic. Parking inside the property."
      />

      <Section>
        <PlanCards />
      </Section>

      <DetailPanel title="Coming from Wapda Town">
        <Disclosure summary="The commute is the whole argument" level="h2">
          <p>
            Wapda Town residents who want a coworking space usually end up looking at the cluster around
            Johar Town's main boulevard — 22-N, Ali Center, the Service Road spaces. They are decent
            places. They are also a slog to reach twice a day, because the boulevard is where every
            commercial building in the area put its front door.
          </p>
          <p>
            We are at {NAP.full}, which from most of Wapda Town is a straight run out along College Road.
            No boulevard, no left turn across three lanes, and parking inside our property rather than a
            hunt for a space on the street. On a bad Lahore morning that difference is twenty minutes
            each way. Over a year of five-day weeks, it is most of a working month.
          </p>
        </Disclosure>

        <Disclosure summary="What you get for the shorter drive" level="h2">
          <p>
            Not a compromise, which is the usual trade for being off the main road. The building runs
            dedicated fibre with an automatic backup line, industrial generators plus UPS on every desk,
            biometric entry, CCTV and on-site security, ergonomic furniture, sound-insulated{" "}
            <Link href="/meeting-rooms-lahore">meeting rooms</Link> with screens and conference audio,
            printing, mail handling, daily cleaning, and complimentary tea and refreshments.
          </p>
          <p>
            It is also open around the clock, with a staffed{" "}
            <Link href="/night-shift-coworking-lahore">night shift from 6 PM to 3 AM</Link> — which
            matters if you are one of the many people in this part of Lahore working American or British
            client hours from a spare bedroom.
          </p>
        </Disclosure>

        <Disclosure summary="Who comes to us from Wapda Town" level="h2">
          <p>
            Mostly two groups. Freelancers and remote employees who have been working from home since the
            pandemic and have finally admitted the house is not an office — those take{" "}
            <Link href="/hot-desk-lahore">hot desks</Link> or{" "}
            <Link href="/dedicated-desk-lahore">dedicated desks</Link>. And small teams of three to
            eight, often an agency or software shop, where the founder lives locally and does not want
            the team commuting into central Lahore every day. Those take{" "}
            <Link href="/private-office-lahore">private offices</Link>.
          </p>
        </Disclosure>

        <Disclosure summary="Coming in for the first time" level="h2">
          <p>
            Head out on College Road towards PCSIR Staff Colony; we are at number 95, on the Johar Town
            side of the colony. There is parking inside the gate. Reception is staffed 9:00 AM to 8:00 PM
            and will show you round in about fifteen minutes — including a live internet speed test,
            which is the thing worth checking at any workspace you are considering.
          </p>
          <p>
            A map and full directions are on the <Link href="/contact">contact page</Link>, rates are on
            the <Link href="/pricing">pricing page</Link>, and the usual questions about hours, parking
            and power are answered on the <Link href="/faq">FAQ page</Link>.
          </p>
        </Disclosure>
      </DetailPanel>

      <CtaBand heading="Ten Minutes from Wapda Town" waMessage="Hi! I'm based in Wapda Town and I'd like to book a tour of The Cowork." />
    </div>
  );
}
