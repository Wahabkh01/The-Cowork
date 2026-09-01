import { Disclosure, DetailPanel } from "@/components/Details";
import type { Faq } from "@/data/faqs";

/** FAQ answers rendered as closed disclosures — indexed in full, quiet on the page. */
export function FaqSection({
  faqs,
  heading = "Frequently asked",
  id = "faq",
}: {
  faqs: Faq[];
  heading?: string;
  intro?: string;
  id?: string;
}) {
  return (
    <DetailPanel title={heading} id={id}>
      {faqs.map((faq) => (
        <Disclosure key={faq.q} summary={faq.q}>
          <p>{faq.a}</p>
        </Disclosure>
      ))}
    </DetailPanel>
  );
}
