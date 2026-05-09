# noshTio — Product Definition Document

**Status:** LOCKED — final  
**Version:** v3  
**Date locked:** May 2026  
**Purpose:** This is the single source of truth for what noshTio is in Phase 1. Every design, copy, build, and sales decision references this document. New product ideas after this date go to "Parked for later" — they do not modify Phase 1 work.

> **This document is INTERNAL.** It contains pricing details, sales rules, and infrastructure references that must NEVER appear on the public website. Treat as confidential.

---

## 1. What noshTio is, in one sentence

**noshTio is a POS, QR-ordering, and remote-ordering platform for dhabas, restaurants, QSRs, food plazas, hospital canteens, and fine-dining establishments — letting vendors run their billing, menus, and orders on one screen, while letting customers order in-person via QR or remotely via the noshTio app.**

---

## 2. The two surfaces of noshTio

noshTio has two distinct, separate experiences. They are linked but they do different jobs.

### 2A. noshTio.com — the marketing & intent-capture website

- **Job:** Convince vendors to subscribe. Capture customer intent and route it to the PWA.
- **Built in:** Next.js 16 (App Router), Tailwind, Firebase (project: `noshtio-website`), shadcn/ui
- **Codebase:** the current Codespaces project being redesigned
- **Audience:** vendors evaluating noshTio + customers learning what noshTio is
- **Conversion goal:** vendor → "Show Your Interest" lead OR direct self-serve onboarding. Customer → "Open the app" deep-link.
- **Does NOT:** show a live vendor directory, take orders, host the menu engine, run payment flows.

### 2B. The noshTio PWA + native apps — the product

- **Job:** Run actual transactions. Vendor billing. Customer ordering. Menu management.
- **Built in:** separate codebase, hosted on its own infrastructure
- **Capability today (real, working):**
  - Vendor POS / billing (live)
  - Customer QR-table ordering (live)
  - Customer remote ordering for table booking & takeaway (live)
  - Menu management, order management, vendor admin (live)
  - Vendor PWA + Customer PWA with home-screen install (live)
  - **Vendor native mobile app — SHIPPED on Play Store / App Store**
- **In development:**
  - Customer native mobile app — packaging of the customer PWA, same capabilities

Native apps are **packaging** of the PWAs, not feature extensions.

---

## 3. Who pays, who uses, what they get

### Vendor (the paying customer)

- **Who:** owners of dhabas, restaurants, QSRs, food plazas, hospital canteens, fine-dining establishments. Primary focus: highway dhabas. Geographic priority: NH/SH/Expressway routes + 4 cities currently live (Delhi, Noida, Ghaziabad, Gurugram).
- **What they get:** POS for billing, GST-compliant invoicing, QR-table ordering, remote-order acceptance, menu management with image upload, digital payment integration, vendor admin dashboard, vendor mobile app (shipped), customer-facing presence on the noshTio platform.
- **What they pay:** [INTERNAL ONLY — sales team reference, NEVER on the public website]
  - Founding Vendor Program — first 1,000 vendors
  - Annual prepaid: ₹499/month × 12 = ₹5,988/year
  - Monthly: ₹499 for first 6 months, then ₹999/month
  - After 1,000 founding vendors: ₹999/month standard
  - Communicated by sales team only, never displayed publicly

### Customer (free; uses the platform)

- **Who:** highway travelers, local diners at onboarded venues, takeaway/table-booking users.
- **What they get:** scan-to-order at any onboarded vendor's table; or remote table booking & takeaway ordering through the PWA / native app.
- **What they pay:** nothing for using the platform. Pay vendor directly for food.

---

## 4. The vendor categories

In priority order:

1. **Dhabas** (primary — highway/state-road, NH/SH/Expressway-located)
2. **Restaurants** (sit-down, dine-in)
3. **QSRs** (quick-service, dine-in/takeaway)
4. **Food plazas** (highway plazas, malls, food courts)
5. **Hospital canteens** (institutional)
6. **Fine dining**

The marketing site leads with dhaba positioning, with category selector that swaps headline per segment.

---

## 5. Brand identity

- **Name:** **noshTio** — capital T, lowercase n-o-s-h, lowercase i-o. Always, exactly. Never "Noshtio," "NOSHTIO," or "noshtio." This is the only acceptable spelling.
- **Tagline:** *Food's T. Platform — Trust. Technology. Tomorrow. Together.*
- **Logo:** existing wordmark, deep blue + amber on cream
- **Colors (locked):**
  - Brand Blue: `#1E3A8A`
  - Brand Amber: `#E0A52E`
  - Cream Canvas: `#FAF6EE`
  - Navy Deep: `#0F1E4A`
  - Charcoal Text: `#1F2937`
  - Muted Text: `#6B7280`
  - Success Green: `#16A34A`
  - Urgent Red: `#DC2626`
- **Fonts:** Plus Jakarta Sans (700, 800) for display + Inter (400, 500, 600) for body. No serifs. No third font.
- **Voice:** professional + warm + bilingual where it counts. English for marketing prose; Hindi-English on operational UI. Never SaaS jargon. Always "aap," never "tu."

---

## 6. CTA system (locked)

### Primary CTA — "Show Your Interest"

- Button: `Show Your Interest`
- Promise below: `We'll connect with you in 24 hours.`
- Style: filled, brand amber, prominent
- Action: lead-capture form → Firestore → sales team alert
- For: cautious majority

### Secondary CTA — "Onboard Yourself"

- Button: `Onboard Yourself →`
- Style: ghost/text link with arrow
- Action: routes to `/vendor/register`
- For: decisive minority

### Customer CTAs

- Primary: `Open noshTio App →` (deep-links to PWA)
- Secondary: `Get the App` (Play Store / App Store, when customer native ships)

### NEVER use as CTA copy

- "Talk to Sales" / "Sign Up" / "Get Started" / "Onboard Free" / "Claim Spot"
- Any CTA containing pricing numbers (₹499, etc.)

---

## 7. Marketing website — pages

All pages on `noshTio.com`.

1. `/` — Homepage. Vendor-led pitch with category selector. Customer intake strip. Founding Vendor narrative (no numbers). Dual vendor CTA.
2. `/for-vendors` — Hub page that routes to category-specific deep dives.
3. **All 6 category pages** (built in Phase 1, template-driven for data segmentation):
   - `/for-dhabas` (deepest content, dhaba-tuned)
   - `/for-restaurants`
   - `/for-qsr`
   - `/for-food-plazas`
   - `/for-canteens`
   - `/for-fine-dining`
   
   *Implementation: ONE React template + 6 content config files (`content/pages/for-dhabas.ts` etc). Same design, six lead-capture funnels, segmented data per category.*
4. `/how-it-works` — vendor + customer explainers
5. `/pricing` — repurposed: "Founding Vendor Program" narrative. **No numbers on the page.**
6. `/about` — story, mission, "T." expansion
7. `/contact` — form + WhatsApp + phone
8. `/cities` — cities only, not vendors
9. `/blog` + `/blog/[slug]` — SEO content (existing)
10. `/find-your-plan` — 14-question vendor qualification quiz
11. `/vendor/register` — direct self-serve onboarding (existing form, restyle)
12. Legal: `/privacy-policy`, `/terms-of-service`, `/refund-policy`, `/vendor-agreement` — typography only
13. Internal: `/admin`, `/api/*`, `/vendor/welcome` — keep

### What the website explicitly does NOT contain

- Live vendor directory accessible to customers
- Customer ordering flows (PWA only)
- Menu pages, cart, checkout, payment (PWA only)
- **Pricing numbers anywhere visible** (sales-led, no exceptions)
- Generic delivery-platform messaging — no delivery in Phase 1
- WhatsApp ordering claims — not built yet
- Map-based discovery — not built yet
- Trip-aware highway-route ordering — not built yet
- "Delivery Partner" page — no delivery feature exists yet

---

## 8. Customer intake on the marketing site

Small interactive intake (not a directory):
- What kind of food (dine-in / takeaway / table booking)
- Traveling, or local
- Approximate location or route
- Optional: contact for "notify me when vendor is near"

Terminal action — one of two CTAs:
- *"Open noshTio App to order →"* (deep-links to PWA)
- *"Notify me when a vendor is onboarded near you →"* (captures lead)

Not a marketplace.

---

## 9. Vendor qualification quiz (`/find-your-plan`)

14 questions, dhaba-aware:
1. Business type (dhaba / restaurant / QSR / food plaza / canteen / fine dining / takeaway / other)
2. Order types (dine-in / takeaway / both / mostly-delivery → defer)
3. State (28 states + 8 UTs)
4. District (dynamic from state)
5. Highway/road type — *only if dhaba*
6. Highway number/name — *only if dhaba*
7. Landmark or KM marker — *only if dhaba*
8. Customer volume per day
9. Current billing method
10. Payment methods accepted
11. Biggest daily headache (multi-select, max 2)
12. Biggest hope for the year (multi-select, max 2)
13. Decision timeline
14. Contact (name, business name, WhatsApp, role)

Result screen: personalized + dual CTA (Show Your Interest + Onboard Yourself).

---

## 10. Data infrastructure (Firestore)

### Project
- **Firebase project:** `noshtio-website`
- **Database:** Firestore (default)

### Collections

| Collection | Purpose | Triggered by |
|---|---|---|
| `counters/visits` | Visit count per page (existing) | Every page load via `lib/counters.ts` |
| `vendor_leads` | "Show Your Interest" submissions | Hero CTA, footer CTA, sticky CTA, all category pages |
| `vendor_registrations` | Self-serve onboarding (multi-step) | `/vendor/register` |
| `vendor_quiz_responses` | 14-question quiz | `/find-your-plan` |
| `customer_intake` | Customer intent capture | Customer intake widget on homepage |
| `customer_notify_requests` | "Notify me near me" leads | Customer intake terminal step |
| `contact_submissions` | General contact form | `/contact` |
| `vendor_reviews` | Vendor reviews/ratings (existing) | PWA, displayed in admin |

### Common fields across all lead/submission collections

```typescript
{
  id: string,                    // auto-generated
  createdAt: serverTimestamp,
  source: string,                // "homepage" | "for-dhabas" | "find-your-plan" | etc.
  category?: string,             // "dhaba" | "restaurant" | etc. (when relevant)
  utm: {
    source?: string,             // e.g., "google", "instagram", "whatsapp"
    medium?: string,             // e.g., "cpc", "organic", "referral"
    campaign?: string,           // e.g., "founding-vendor-q1"
    content?: string,            // ad variant
    term?: string                // search keyword
  },
  device: "mobile" | "desktop" | "tablet",
  referrer: string,              // page they came from
  status: "new" | "contacted" | "converted" | "rejected",
  notes: string,                 // sales team adds context
  // ...specific fields per collection
}
```

### Firestore principles (locked)

1. **No personally identifiable analytics in Firestore.** Aggregate counts only. Individual user behavior tracking goes through GA4, not Firestore.
2. **`source` and `utm` fields on every lead** — required from day one. Cannot retrofit later.
3. **Sales team alerted on high-intent leads** — Q13 = "this week" or "this month" in quiz, all `vendor_leads`, all category-page submissions.
4. **No EmailJS** — removed. Lead notifications stay in Firestore admin dashboard. Cloud Functions / WhatsApp/email alerts is a separate Phase 1.5 workstream.

---

## 11. Analytics & tracking stack (Phase 1)

### Tier 1 — install on launch, all of Phase 1

| Tool | Purpose | Cost |
|---|---|---|
| **Google Analytics 4** | Primary funnel & traffic analytics | Free |
| **Google Search Console** | SEO insights, search query data | Free |
| **Meta Pixel** | Facebook/Instagram ads conversion tracking | Free (requires Meta Ads Manager) |
| **Google Ads gtag** | Google/YouTube ads conversion tracking | Free (requires Google Ads account) |

### Implementation rules

- All four tags placed in `app/layout.tsx` `<head>` via Next.js `<Script>` component, lazy-loaded with `strategy="afterInteractive"` to preserve Lighthouse scores.
- Tag IDs stored as environment variables (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`).
- **Cookie consent banner required** before any analytics tag fires — DPDP Act compliance for India + GDPR-safe.
- All form submissions fire matching events to GA4 + Meta Pixel for conversion attribution.

### Tier 2 — add after first 100 vendors

- **Microsoft Clarity** (free) — session recordings + heatmaps for behavior insight
- **PostHog** — for the PWA, not the marketing site

### Tier 3 — skip in Phase 1

- Plausible / Fathom (privacy-first but inferior funnels)
- Mixpanel / Amplitude (overkill for marketing site)
- Heap / Pendo / Segment (enterprise tier)

---

## 12. Social media strategy

### Tier 1 — set up first, use daily

| Platform | Purpose for noshTio |
|---|---|
| **WhatsApp Business** | Primary contact channel — every CTA offers WhatsApp |
| **YouTube** | Vendor demos, dhaba success stories, tutorials (long-shelf SEO) |
| **Instagram** | Visual story — dhabas, food, transformation reels |
| **Google Business Profile** | Brand SERP — when someone Googles "noshTio" |

### Tier 2 — set up profile, don't actively post

| Platform | Purpose |
|---|---|
| **Facebook Page** | Required for running Meta ads — exist for the ads infrastructure |
| **LinkedIn Company Page** | Hiring + investor signals; minimal organic content |

### Tier 3 — skip in Phase 1

- X/Twitter — Indian SMB owners aren't there

### Website implementation

- **Footer social icons:** all six platforms in code, conditionally rendered per `lib/social-config.ts`. Icons appear only when URL is live. Phase 1 launch starts with whatever's set up — likely WhatsApp + Google Business at minimum.
- **Sharing buttons on category pages:** WhatsApp Share only. No Twitter, Pinterest, LinkedIn share buttons — irrelevant for the audience.
- **No embedded social feeds** in Phase 1 — performance cost too high, content empty too often. Add in Phase 2 if needed.
- **Conversion tracking pixels** (Meta Pixel, Google Ads gtag) baked in from day one even before running ads, so historical attribution data exists when ads launch.

### Profile setup priority (parallel to website build, do not block on it)

1. **Today/this week:** WhatsApp Business (5 min), Google Business Profile (20 min), Instagram (10 min)
2. **This month:** YouTube channel, Facebook Page (for ads infrastructure)
3. **When hiring/pitching:** LinkedIn company page

---

## 13. Compliance & privacy

- **DPDP Act (India)** + GDPR-safe by design
- **Cookie consent banner** — required before any non-essential cookie/tag fires
- **Privacy policy** — must list GA4, Meta Pixel, Google Ads tag, Firestore
- **No PII in URLs, query strings, or analytics events**
- **Right to erasure** — admin dashboard must support deleting vendor/customer records on request

---

## 14. What is parked for Phase 2 / later

These ideas are real and not forgotten — but they do **not** appear on the Phase 1 website in any form.

- **Delivery** for urban vendors
- **Map-based vendor discovery**
- **Trip-aware pre-ordering**
- **WhatsApp ordering** integration
- **White-label customer apps** per vendor
- **Customer native mobile app** — *in development; promote when shipped, not before*
- **Delivery Partner** marketing page
- **Public vendor directory** on the marketing site
- **Featured Vendors** carousel on marketing site
- **Advisor onboarding program**
- **Real-time visitor count** display
- **Cloud Functions / WhatsApp lead alerts** (Phase 1.5)
- **Embedded social feeds** (Instagram, YouTube)
- **Microsoft Clarity / PostHog** (Tier 2 analytics, post-100-vendors)

---

## 15. The website's job, in one sentence

> **noshTio.com exists to convert food-business owners into sales calls or self-serve onboarding, and to capture customer intent that routes to the PWA — without trying to be a marketplace itself.**

If a proposed feature, section, or page does not directly serve one of these outcomes, it does not belong on Phase 1.

---

*End of locked Product Definition Document, v3.*
