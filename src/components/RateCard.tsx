import { Link } from "wouter";
import { Check } from "lucide-react";
import { PLANS } from "@/data/site";

/** The published rate card. Rendered as a real table so it is legible to crawlers and screen readers. */
export function RateTable() {
  return (
    <div className="overflow-x-auto border border-white/10 rounded-2xl">
      <table className="w-full min-w-[640px] text-left border-collapse">
        <caption className="sr-only">
          The Cowork monthly coworking rates in Lahore, Pakistani Rupees
        </caption>
        <thead>
          <tr className="bg-white/5 text-[10px] uppercase tracking-[0.18em] text-white/40">
            <th scope="col" className="px-6 py-4 font-bold">Plan</th>
            <th scope="col" className="px-6 py-4 font-bold">Monthly rate</th>
            <th scope="col" className="px-6 py-4 font-bold">Best for</th>
            <th scope="col" className="px-6 py-4 font-bold">Meeting room credits</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {PLANS.map((plan) => (
            <tr key={plan.slug} className="hover:bg-white/[0.03] transition-colors">
              <th scope="row" className="px-6 py-5 text-white font-bold text-base">
                <Link href={`/${plan.slug}`}>
                  <span className="hover:text-primary cursor-pointer transition-colors">{plan.name}</span>
                </Link>
              </th>
              <td className="px-6 py-5 whitespace-nowrap">
                <span className="text-gradient-gold font-bold text-xl">{plan.priceLabel}</span>
                <span className="text-white/30 text-xs ml-2">{plan.period}</span>
              </td>
              <td className="px-6 py-5 text-white/50 text-sm font-light">{plan.bestFor}</td>
              <td className="px-6 py-5 text-white/50 text-sm font-light">
                {plan.slug === "hot-desk-lahore" && "2 hours / month"}
                {plan.slug === "dedicated-desk-lahore" && "5 hours / month"}
                {plan.slug === "private-office-lahore" && "Inclusive"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Three-up plan cards with full feature lists. */
export function PlanCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {PLANS.map((plan) => (
        <div
          key={plan.slug}
          className={`relative p-8 md:p-10 rounded-[2rem] glass-card transition-transform duration-500 hover:-translate-y-1 ${
            plan.featured ? "border-primary/40 ring-1 ring-primary/20" : ""
          }`}
        >
          {plan.featured && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black px-5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
              Most popular
            </div>
          )}
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
            <Link href={`/${plan.slug}`}>
              <span className="hover:text-primary cursor-pointer transition-colors">{plan.name}</span>
            </Link>
          </h3>
          <p className="text-white/40 text-sm font-light leading-relaxed mb-8 min-h-[3.5rem]">{plan.short}</p>

          <div className="mb-8">
            <span className="text-4xl font-bold text-gradient-gold">{plan.priceLabel}</span>
            <span className="text-white/30 text-sm ml-2">{plan.period}</span>
          </div>

          <ul className="space-y-4 mb-10">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Check className="w-3 h-3 text-primary" aria-hidden="true" />
                </span>
                <span className="font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href={`/${plan.slug}`}>
            <button
              className={`w-full py-4 rounded-2xl font-bold transition-transform duration-300 hover:scale-[1.02] ${
                plan.featured ? "bg-primary text-black" : "glass-button text-white"
              }`}
            >
              See {plan.name} details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
