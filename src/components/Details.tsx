import { ReactNode } from "react";
import { Plus } from "lucide-react";

/**
 * Collapsible long-form content.
 *
 * Built on native <details>, deliberately: the copy is present in the served HTML
 * and is indexed normally, while the page stays visually quiet until a reader opens
 * it. This is the pattern Google sanctions for depth-without-clutter — as opposed to
 * CSS-hiding text, which is cloaking and risks a manual action.
 */
export function Disclosure({
  summary,
  children,
  level = "h3",
}: {
  summary: string;
  children: ReactNode;
  level?: "h2" | "h3";
}) {
  const Heading = level;
  return (
    <details className="group border-b border-white/[0.07]">
      <summary
        className="flex items-center justify-between gap-6 cursor-pointer list-none py-6 marker:hidden
          [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-1
          focus-visible:ring-primary/50 rounded-sm"
      >
        <Heading className="text-white/85 text-base md:text-lg font-medium tracking-tight group-hover:text-primary transition-colors">
          {summary}
        </Heading>
        <Plus
          className="w-4 h-4 shrink-0 text-primary/70 transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        />
      </summary>
      <div
        className="pb-8 max-w-3xl space-y-5 text-white/45 font-light leading-relaxed text-[15px]
          [&_strong]:text-white/70 [&_strong]:font-medium
          [&_a]:text-primary/80 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary
          [&_ul]:space-y-3 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-primary/40
          [&_h4]:text-white/75 [&_h4]:font-medium [&_h4]:text-base [&_h4]:pt-2"
      >
        {children}
      </div>
    </details>
  );
}

/**
 * The quiet container the disclosures live in — one small heading and a stack of
 * closed rows, so a page gains a few hundred words of indexable copy for roughly
 * the vertical space of a paragraph.
 */
export function DetailPanel({
  title = "More about this space",
  children,
  id,
}: {
  title?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="bg-black py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-primary/70 text-[10px] font-bold uppercase tracking-[0.25em] mb-8">{title}</p>
        <div className="border-t border-white/[0.07]">{children}</div>
      </div>
    </section>
  );
}
