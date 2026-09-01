# The Cowork — SEO operations

The website half of the September 2026 teardown is implemented. This file covers the
half that lives outside the codebase, plus the rules that keep the site half from drifting.

---

## 1. The canonical NAP block

Copy this **character for character** onto every directory, listing and profile.
Inconsistency here is the single most common cause of a local business failing to rank.

```
Name:     The Cowork
Address:  95 College Road, PCSIR Staff Colony, Lahore 54770, Pakistan
Phone:    +92 333 4835258
Email:    thecoworkpk@gmail.com
Website:  https://thecowork.pk
Hours:    Open 24 hours, 7 days a week (reception staffed 9:00 AM – 8:00 PM)
Category: Coworking space
```

**Never** publish "The Cowork Hub" or any keyword-stuffed variant. The source of truth is
`src/data/site.ts` — change it there and the whole site plus every schema.org block follows.

---

## 2. Google Business Profile — do these in order

The profile is the single strongest asset the business has. It is also the biggest remaining
scoring gap, and none of it can be done from the codebase.

1. **Reconcile the hours.** Set "Open 24 hours" for all seven days. Add reception hours as
   "More hours" → the site and the schema now both say the same thing.
2. **Add secondary categories:** Office space rental agency · Business centre ·
   Virtual office rental · Meeting room rental. Primary stays *Coworking space*.
3. **Add Products with prices**, matching the published rate card exactly:
   Hot Desk PKR 15,000/mo · Dedicated Desk PKR 25,000/mo · Private Office from PKR 60,000/mo.
   Link each one to its page (`/hot-desk-lahore`, `/dedicated-desk-lahore`, `/private-office-lahore`).
4. **Add Services:** night shift coworking, meeting room hire, virtual office / business address,
   private office rental, dedicated desks, hot desks.
5. **Seed 10–15 Q&A entries yourself** — use the questions from `src/data/faqs.ts` verbatim.
   They are already written and already match the site copy.
6. **Post weekly.** The last post was May. A photo and two sentences is enough; the signal is
   frequency, not craft.
7. **Do NOT normalise the profile name yet.** It currently reads
   "The Cowork – Coworking Space Johar Town Lahore", which breaks Google's naming rules and is
   suspension-eligible — but it is also carrying ranking weight the site could not previously
   support. Now that the site has 15 indexable pages and full schema, revisit this at ~week 10:
   rename to **The Cowork** once rankings hold on the site's own strength.

---

## 3. Citations — the biggest remaining scoring gap

Local "prominence" is built from mentions across the web. The site currently has almost none.
Every row below either outranks thecowork.pk for the primary keyword today or feeds the
directories that do. Use the exact NAP block above on each.

### Coworking directories
- [ ] coworker.com
- [ ] office-hub.com
- [ ] coworkingers.com
- [ ] instantoffices.com
- [ ] hq.com
- [ ] spacesworks.com

### Pakistani business directories
- [ ] b2c.com.pk
- [ ] blogpakistan.pk
- [ ] cubebell.com
- [ ] launchboxpk.com
- [ ] primecoworking.io
- [ ] vsubletspaces.com

### Listicles — fastest wins available
These already rank page-one for "coworking space Johar Town Lahore". Being *in* them is
faster and cheaper than outranking them. Most add spaces on request or for a nominal fee.
- [ ] kickstart.pk — "Top 14 Coworking Spaces"
- [ ] workpod.pk — "12 Best Coworking Spaces in Lahore"

### Social profiles
- [ ] Facebook — currently `facebook.com/ShareSpacepk`; **rename the page to "The Cowork"** so it
      matches the NAP block. The URL slug can stay; the display name is what matters.
- [ ] Instagram — add the real profile URL to `SOCIAL` in `src/data/site.ts`
- [ ] LinkedIn — add the real company page URL to `SOCIAL` in `src/data/site.ts`

Only Facebook is currently emitted, because it is the only URL that was verified. `SOCIAL` feeds
both the footer icons and the schema.org `sameAs` array, so adding a key there lights up both at
once — and until a URL is added, nothing points at a 404.

---

## 4. Reviews

87 reviews at a perfect 5.0 is the best rating in the radius, but Venture Drive has 341.
Volume is a ranking factor in its own right.

- Put a QR code at reception linking straight to the Google review form.
- Send a WhatsApp follow-up in week two of a new membership.
- Target 15–20 new reviews a month.
- Ask five long-standing members for a **named testimonial with a company name** — no competitor
  in the radius combines a 4.7+ rating, published pricing, FAQ content *and* named testimonials.
  We now have three of the four. Testimonials are the last one.

**Do not** add `aggregateRating` to the site's schema. Google's guidelines prohibit marking up
review data collected on a third-party platform, and a manual action here would cost far more
than the rich-result stars are worth.

---

## 5. Measurement — set this up first

There is currently no analytics or Search Console on the site, which is why the original audit
had to be built entirely from the outside.

- [ ] Verify **Google Search Console** (DNS or HTML tag) and submit `https://thecowork.pk/sitemap.xml`
- [ ] Use **URL Inspection** on `/pricing` and `/night-shift-coworking-lahore` to confirm Google
      now sees rendered content (it should — the HTML is static)
- [ ] Add **Google Analytics 4** or Plausible
- [ ] Re-check the "Coverage" report in two weeks — all 15 URLs should be indexed, zero 404s

---

## 6. Where the SEO copy lives, and why it's collapsed

Most of the long-form copy sits in closed `<details>` rows rendered by
`src/components/Details.tsx` (`<Disclosure>` inside a `<DetailPanel>`), near the foot of each page.
The FAQ blocks use the same component.

**This is deliberate, and it is not cloaking.** The distinction matters:

| Technique | Indexed? | Safe? |
|---|---|---|
| Content in `<details>` / accordions | Yes, fully weighted | ✅ Google's stated position since mobile-first indexing |
| `display:none` on keyword text | Yes, but flagged | ❌ Cloaking — manual action, deindexing |
| White-on-white text, `text-indent:-9999px`, off-screen positioning | — | ❌ Cloaking |

The prerenderer (`scripts/prerender.mjs`) also strips the `opacity:0` that framer-motion writes into
its `initial` state, so no prerendered page ships text a non-JS crawler would read as hidden. If you
ever find `opacity:0` inside `<div id="root">` in a built page, something has regressed — fix it
before deploying.

**Never** replace a `<Disclosure>` with a CSS-hidden block to "clean up" a page. If a page feels too
heavy, close more rows or move copy to a different page — do not hide it.

---

## 7. Rules for keeping the site half healthy

- **Adding a page?** Add it to `src/data/routes.ts` *and* `src/data/meta.ts` *and* `src/App.tsx`.
  The sitemap and prerenderer both read `routes.ts`, so a page missing from it silently
  ships as a client-only route with no static HTML.
- **Changing a price, the address, the phone number or the hours?** Change it in
  `src/data/site.ts` only. Every page, the footer and all schema read from there.
- **Never hardcode a price in page copy** without also updating `site.ts` — the JSON-LD
  `Offer` and the visible number must agree or Google treats the markup as untrustworthy.
- **`npm run build` is now three steps** (client build → SSR build → prerender). Deploying the
  output of `vite build` alone ships an empty shell again. Vercel's build command must be
  `npm run build`.
- **Don't touch the visual layout casually.** `Section.tsx`, `Navigation.tsx` and the page
  hero/card structures are the original, carefully-crafted design, restored verbatim from git. Add
  copy through `<Disclosure>` rows, not by expanding visible blocks.

---

## 8. Keyword targets

| Priority | Term | Page |
|---|---|---|
| **The prize** | coworking space johar town lahore | `/` (homepage — do not split this onto a second page) |
| High intent | coworking space price lahore | `/pricing` |
| Uncontested | night shift coworking space lahore · 24/7 coworking space lahore · coworking space for us timings lahore | `/night-shift-coworking-lahore` |
| Commercial | private office for rent johar town · dedicated desk lahore rate · hot desk lahore | plan pages |
| Own it now | coworking space wapda town · coworking space pcsir · coworking space college road lahore | neighbourhood pages |
| Transactional | meeting room rent johar town | `/meeting-rooms-lahore` |

`coworking space johar town lahore` is the term that has historically driven results. It is the
homepage `<title>`, the homepage `<h1>`, the meta description, the footer, the `LocalBusiness`
description and the `areaServed` schema. **Do not create a separate page for it** — that would
cannibalise the homepage, which is the strongest URL on the domain.
