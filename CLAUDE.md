# CLAUDE.md — noshTio Marketing Website

This file is the operational constitution for the noshTio marketing website. Read it before every task. If anything you're about to do contradicts this file, **stop and ask the human**.

The companion document is `docs/product-definition.md` (the locked Product Definition Document v3). When this file and that file ever conflict, **product-definition.md wins** — and you must flag the conflict so the human can update CLAUDE.md.

---

## 1. What this project is (and is NOT)

This codebase is **noshTio.com**, the marketing & intent-capture website. It is **NOT** the noshTio product (PWA + native apps). The PWA lives in a separate codebase, on separate infrastructure.

- **This codebase's job:** convert food-business owners into sales calls or self-serve onboarding. Capture customer intent and route customers to the PWA.
- **This codebase's job is NOT:** taking orders, hosting menus, processing payments, listing vendors as a marketplace directory, or any other transactional workflow.

If a request would turn this codebase into a marketplace, an order system, or a menu engine — **refuse the request** and tell the human "that belongs in the PWA codebase, not the marketing site."

---

## 2. Commands

```bash
npm run dev          # local dev server (http://localhost:3000)
npm run build        # production build (also runs next-sitemap via postbuild)
npm run lint         # ESLint via next lint
npm run start        # serve production build
npm run test         # playwright tests (tests/site.spec.ts)
```

### Bootstrap (already done — for reference only)

```bash
npm install
npx shadcn@latest init --defaults
npx shadcn@latest add button card accordion toast badge slider skeleton sonner
```

---

## 3. Architecture

**Framework:** Next.js 16 App Router with TypeScript strict mode.  
**Styling:** Tailwind 3.4 + shadcn/ui (`base-nova` style, lucide icons).  
**Data:** Firebase (project: `noshtio-website`) — Firestore + Auth.  
**Forms:** react-hook-form + zod + @hookform/resolvers.  
**Content:** MDX for blog posts (next-mdx-remote, gray-matter).  
**Deployment:** [confirm with human].

### Key conventions

- All routes live under `app/`. Shared layout (`Navbar` + `Footer` + `WhatsAppButton`) is in `app/layout.tsx`.
- `<main>` has `pt-[100px] lg:pt-[116px]` to clear the fixed navbar plus the announcement bar above it (navbar h-16/h-20 + announcement bar ~36px). Preserve this clearance — pages assume it.
- Page-level SEO: call `generatePageMeta(title, desc, path)` from `lib/seo.ts` and export it as `metadata`. It reads site defaults from `next-seo.config.ts`.
- shadcn/ui primitives in `components/ui/`. Layout components in `components/layout/`. Page-section components in `components/{page}/`.
- Firebase is initialized once in `lib/firebase.ts` using a `getApps()` guard. Import `db` (Firestore) or `auth` from there — do not re-initialize.

### Environment variables

Copy `.env.local.example` → `.env.local`. Required vars:

- `NEXT_PUBLIC_FIREBASE_*` — Firebase project credentials (existing)
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — image uploads (existing)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — country code + number, no `+` (e.g. `919999999999`)
- `NEXT_PUBLIC_SITE_URL` — canonical base URL for SEO/sitemap (e.g. `https://noshtio.com`)
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID (NEW, see Section 12)
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID (NEW)
- `NEXT_PUBLIC_GOOGLE_ADS_ID` — Google Ads conversion tag (NEW)

**Removed:** `NEXT_PUBLIC_EMAILJS_*` — EmailJS uninstalled. If these still exist in `.env.local.example`, remove them.

### Image domains allowed in `next.config.ts`

`firebasestorage.googleapis.com`, `res.cloudinary.com`, `images.unsplash.com`. Add new domains here when needed; do not bypass via `<img>` tags or `unoptimized` props.

---

## 4. Brand — locked rules

### Name

- The brand name is **noshTio** — capital T, lowercase n-o-s-h, lowercase i-o.
- This is the **only** acceptable spelling. Never "noshtio," "Noshtio," "NOSHTIO," "Nosh Tio," or any other form.
- In code: variable names, file names, and class names may use camelCase or kebab-case as needed (`noshTioLogo`, `nosh-tio-button`) — but any user-facing text must be exactly **noshTio**.

### Tagline

- Full: *Food's T. Platform — Trust. Technology. Tomorrow. Together.*
- Short: *Food's T. Platform*
- The "T." is deliberately ambiguous. Do NOT replace it with "Technology" or "Trust" alone. The four-word expansion is shown in the footer, About page, and brand section only — never in the homepage hero.

### Colors (Tailwind tokens — see Section 6)

| Token | Hex | Usage |
|---|---|---|
| `brand.blue` | `#1E3A8A` | Primary brand blue (from logo) |
| `brand.amber` | `#E0A52E` | Primary action color (CTAs, accents) |
| `brand.cream` | `#FAF6EE` | Primary canvas / page background |
| `brand.navy` | `#0F1E4A` | Footer, dark feature sections |
| `brand.charcoal` | `#1F2937` | Heading text on cream |
| `brand.muted` | `#6B7280` | Body text, secondary info |
| `brand.amberHover` | `#C8881A` | Amber button hover state |
| `semantic.success` | `#16A34A` | Success states, "claimed" badges |
| `semantic.urgent` | `#DC2626` | Urgency badges only — never buttons or body |

**Forbidden:** any other color in user-facing UI. No generic Tailwind palette (`text-red-500`, `bg-blue-600`, etc.). If a section seems to need another color, use one of the locked tokens or ask the human.

### Typography

- **Display:** Plus Jakarta Sans, weights 700 + 800 only. CSS variable `--font-display`.
- **Body:** Inter, weights 400 + 500 + 600 only. CSS variable `--font-body`.
- **No serifs anywhere.** No Fraunces, Playfair, Instrument Serif, etc.
- **No third font.** Drop existing Poppins, DM Sans, Geist references.
- Both fonts loaded via `next/font/google` in `app/layout.tsx`.

### Voice

- Professional, warm, direct. Never SaaS jargon ("synergize," "ecosystem," "seamless," "leverage," "unlock potential").
- English for marketing prose. Hindi-English bilingual on operational UI (form labels, error messages, secondary CTAs). Always formal "aap" (आप), never informal "tu/tum."
- Talk to the vendor, not at them.

---

## 5. Legacy utility classes — PRESERVE NAMES, REPAINT VALUES

The existing `globals.css` defines reusable utility classes used across many components:

`btn-primary`, `btn-gold`, `btn-outline`, `section-heading`, `gradient-text`, `container-page`, `section-padding`

### Migration rule

**Do NOT rename these classes.** Many components reference them; renaming would require a wide refactor.

Instead, in the new `globals.css`, **redefine each class with the new color/font tokens**, keeping the same selectors. For example:

```css
/* OLD */
.btn-primary {
  @apply bg-electricBlue text-white ...;
}

/* NEW */
.btn-primary {
  @apply bg-brand-amber text-white hover:bg-brand-amberHover ...;
}
```

`btn-gold` becomes essentially identical to `btn-primary` under the new palette (both amber). Either keep both as separate classes mapped to similar styles, or quietly alias `btn-gold` to use the same definition — but **don't delete `btn-gold` from the CSS** while old components still reference it.

This is a **restyle**, not a **refactor**. We change values, not names. A future Phase 1.5 task can migrate components to pure Tailwind utilities and retire these legacy classes.

If you find a component referencing a utility class that doesn't exist in `globals.css`, **flag it to the human** before adding a new one.

---

## 6. Tailwind + global CSS configuration

The token system lives in two files: `tailwind.config.ts` and `app/globals.css`. Both are delivered as part of foundation setup. After applied, **do not modify them** without explicit human approval — every component depends on them.

### Permitted Tailwind utilities

- All standard layout utilities (flex, grid, padding, margin, etc.)
- Typography utilities, BUT colors only via `text-brand-*` and `text-semantic-*` tokens
- Background utilities, BUT colors only via `bg-brand-*` and `bg-semantic-*` tokens
- Tailwind animation utilities + tailwindcss-animate

### Forbidden in Tailwind classes

- Hardcoded hex colors via `text-[#xxxxxx]` arbitrary syntax (always use a token)
- Default Tailwind color palette (`text-red-500`, `bg-blue-600`, etc.)
- Custom `text-[14px]` arbitrary sizes — use Tailwind's scale
- Inline `style={{ color: '...' }}` props except where dynamic theming is genuinely required

---

## 7. CTA system — locked

### Vendor CTAs (only these exist)

**Primary — `Show Your Interest`**
- Style: filled button, `bg-brand-amber text-white`
- Promise text underneath: *"We'll connect with you in 24 hours."*
- Action: opens lead-capture form → writes to Firestore `vendor_leads`
- This is the dominant vendor CTA on every page.

**Secondary — `Onboard Yourself →`**
- Style: ghost button OR text link with arrow
- Action: routes to `/vendor/register`
- Visually less prominent than primary.

### Customer CTAs (only these exist)

**Primary — `Open noshTio App →`** — deep-links to PWA  
**Secondary — `Get the App`** — Play Store / App Store; conditionally rendered when store URL is live.

### NEVER use as CTA copy

- "Talk to Sales" / "Sign Up" / "Get Started" / "Onboard Free" / "Claim Spot" / "Free Trial"
- Any CTA containing pricing numbers (₹499, etc.)

If new copy is needed and it doesn't fit one of the four above, **ask the human** before inventing a new label.

---

## 8. Pricing — never on the website

The vendor pricing structure (₹499/month, ₹999/month, founding 1,000 cap) is **internal sales information only**. It must never appear in any form:

- No pricing cards, tables, or comparison grids with numbers
- No CTAs containing prices
- No "starts at ₹X" copy
- No "₹499" anywhere in JSX, MDX content, or component props
- The `/pricing` route exists but contains a narrative-only "Founding Vendor Program" page with **zero numbers**.

If a section seems to need pricing for the user to make a decision, the answer is **always** "Show Your Interest" CTA. Sales handles pricing 1-on-1.

If you find any pricing number in the existing codebase during the restyle, **flag it before removing** in case it's intentional somewhere.

---

## 9. Pages and routes

### Existing routes — keep + restyle

- `/` — Homepage (full redesign)
- `/about`, `/contact`, `/cities`, `/how-it-works` — full restyle
- `/for-vendors` — restyle into a category hub
- `/blog`, `/blog/[slug]` — template restyle, content untouched
- `/vendor/register`, `/vendor/welcome` — restyle, **preserve all Firebase wiring**
- `/areas`, `/areas/[city]` — keep, restyle
- `/download` — keep, restyle
- `/vendors`, `/vendors/[slug]` — restyle priority (noisiest old pages)
- `/admin` — keep as-is, no restyle (internal tool)
- `/api/*` — no UI changes
- `/privacy-policy`, `/terms-of-service`, `/refund-policy`, `/vendor-agreement` — typography inheritance only

### Existing routes — repurpose

- `/pricing` — keep URL, replace contents with "Founding Vendor Program" narrative (no numbers)

### NEW routes to create in Phase 1

- `/for-dhabas` — primary deep-dive (highway dhaba focus)
- `/for-restaurants`
- `/for-qsr`
- `/for-food-plazas`
- `/for-canteens`
- `/for-fine-dining`
- `/find-your-plan` — 14-question vendor qualification quiz

### Implementation rule for the 6 category pages

**One template + 6 content config files.** Do NOT create 6 separate hand-coded pages.
- One generic page component
- Each route imports content from `content/categories/{category}.ts`
- Adding a 7th category later = add one content file, no code changes

### Routes that will NEVER exist in Phase 1

- `/for-delivery-partners` — no delivery feature exists
- `/for-advisors` — advisor program parked
- `/find-food` or any customer vendor browse — vendors stay in PWA
- `/order`, `/cart`, `/checkout` — PWA only
- `/menu/[vendor]` — PWA only

---

## 10. The two CTAs and one form

The vendor has **two paths**:
1. "Show Your Interest" → small lead-capture form (4-5 fields) → Firestore `vendor_leads` → 24-hour sales callback
2. "Onboard Yourself" → existing multi-step `/vendor/register` form → Firestore `vendor_registrations`

These are **different forms**, **different collections**, **different intents**. Do not consolidate them. The dual-funnel is intentional.

---

## 11. Firestore data model — schema rules

### Project

- Firebase project: `noshtio-website`
- Database: Firestore default

### Collections

| Collection | Purpose |
|---|---|
| `counters/visits` | Visit counts (existing, via `lib/counters.ts`) |
| `vendor_leads` | "Show Your Interest" submissions (NEW) |
| `vendor_registrations` | Self-serve onboarding (existing — preserve schema) |
| `vendor_quiz_responses` | Quiz submissions (NEW) |
| `customer_intake` | Customer intent capture (NEW) |
| `customer_notify_requests` | "Notify me" leads (NEW) |
| `contact_submissions` | General `/contact` form |
| `vendor_reviews` | Vendor reviews (existing) |

### Required common fields on every NEW lead/submission

```typescript
{
  id: string,                       // auto-generated
  createdAt: serverTimestamp,
  source: string,                   // "homepage" | "for-dhabas" | "find-your-plan" | etc.
  category?: string,                // "dhaba" | "restaurant" | etc. (when applicable)
  utm: {
    source?: string,
    medium?: string,
    campaign?: string,
    content?: string,
    term?: string,
  },
  device: "mobile" | "desktop" | "tablet",
  referrer: string,
  status: "new" | "contacted" | "converted" | "rejected",  // initial: "new"
  notes: string,                    // initial: empty, sales fills
  // ...specific fields per collection
}
```

UTM params are read from URL on page load and stored in component state, attached at submit time.

### Existing collections — preserve schema

- `vendor_registrations` — DO NOT change field names. Add new fields if needed (e.g., dhaba highway details), but don't rename existing — admin dashboard depends on them.
- `vendor_reviews` — same rule.

---

## 12. Analytics & tracking — Phase 1 stack

Install all of these in `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`:

| Tool | Env var | Purpose |
|---|---|---|
| Google Analytics 4 | `NEXT_PUBLIC_GA_ID` | Funnel + traffic |
| Google Search Console | meta tag in `<head>` | SEO data |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | Facebook/Instagram ads |
| Google Ads gtag | `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google/YouTube ads |

### Rules

- IDs are placeholders during dev. Real IDs paste into `.env.local` at launch.
- All four tags must be gated behind a **cookie consent banner**. No tag fires before user accepts.
- Form submissions must fire matching events to GA4 + Meta Pixel for conversion attribution. Use a single `track()` helper in `lib/analytics.ts` fanning out to both.
- Do NOT add Microsoft Clarity, Plausible, Mixpanel, Amplitude, Heap, PostHog, or any other analytics in Phase 1. They're parked.

---

## 13. Social media — implementation rules

### Footer icons

- File: `lib/social-config.ts` defines all six platforms (WhatsApp, YouTube, Instagram, Facebook, Google Business, LinkedIn) with URLs.
- Each platform has an `enabled: boolean` flag.
- Footer renders icons **conditionally** — only if `enabled === true`.
- Phase 1 launch starts with whatever's set up.

### Sharing buttons

- WhatsApp Share only, only on category pages (`/for-{category}`).
- No Twitter, Pinterest, LinkedIn, Reddit, or generic Web Share API fallback.
- Implementation: `https://api.whatsapp.com/send?text=...` link with pre-filled URL.

### Embedded social feeds

- **None in Phase 1.** No Instagram embeds, no YouTube auto-play hero, no Twitter timelines.

---

## 14. Compliance

- **DPDP Act (India)** + GDPR-safe by design.
- **Cookie consent banner** required on first visit.
- **Privacy policy** must list: Firestore, GA4, Meta Pixel, Google Ads tag.
- **No PII in URLs, query strings, or analytics events.**
- **No third-party fonts loaded from CDNs** other than Google Fonts via `next/font` (which inlines them at build time).

---

## 15. Components — preserve, restyle, replace

### Preserve (working integrations — don't touch internals, only restyle visuals)

- `lib/firebase.ts` — Firebase init with `getApps()` guard, do not modify
- `lib/counters.ts` — visit counter
- `lib/seo.ts`, `next-seo.config.ts` — `generatePageMeta()` SEO helper
- `lib/utils.ts` — `cn()` utility
- `lib/cities.ts`, `lib/vendors.ts`, `lib/blog.ts`, `lib/reviews.ts` — data fetchers
- `app/api/*` — server routes
- `components/blog/mdx/*` — MDX rendering primitives
- `components/forms/StepProgressBar.tsx` — used by vendor register
- `components/ContactForm.tsx`, `components/vendors/VendorLeadForm.tsx` — Firebase-wired, restyle visuals only

### Restyle (these power the whole site — restyle once, ripples everywhere)

- `components/layout/Navbar.tsx`, `Footer.tsx`
- `components/ui/button.tsx`, `card.tsx`, `accordion.tsx`, `badge.tsx`, `slider.tsx` — shadcn primitives. Restyle via tokens, don't replace.
- `components/home/*` — homepage sections (most substantially rewritten)
- `components/cities/*`, `components/vendors/*` — restyle visuals, preserve data flow

### Replace or rebuild

- Hero section content — full content rewrite per new positioning
- Old pricing/comparison cards — replace with founding-vendor narrative
- Anything with hardcoded old colors (navy-everywhere, electric blue, etc.)

### Remove

- `@emailjs/browser` — uninstall (was unused). Remove `NEXT_PUBLIC_EMAILJS_*` from `.env.local.example`.
- Unused fonts (Poppins, DM Sans, Geist) from `app/layout.tsx`
- Any references to "Onboard Free" CTA copy across all components

---

## 16. Tests — `tests/site.spec.ts`

One Playwright test file. Rules during the restyle:

- **Don't disable tests.** Disabled tests rot.
- Before restyling a component, **read what the test asserts.**
- Behavior assertions (link goes to `/contact`, button submits) — preserve. Don't change.
- Visual content assertions (heading text "Onboard Free" exists) — update assertion to match new copy in the **same commit** as the restyle.
- If a test breaks for a reason you don't understand, **stop and ask** — don't auto-fix by changing assertions.

---

## 17. Approval gates — sequential build, not parallel

Codespaces Claude operates with **explicit human approval at each step**. Do not chain multiple major changes in one response.

Build order:
1. ✅ Foundation: this `CLAUDE.md`, `tailwind.config.ts`, `globals.css`, `app/layout.tsx` font swap
2. ✅ Cleanup: remove `@emailjs/browser`, scrub stale references, update `.env.local.example`
3. ✅ Shared components: Navbar, Footer, base Button, Card primitives
4. ✅ Homepage
5. ✅ For Vendors hub + the 6 category pages (template + content files)
6. ✅ Existing core pages restyle: About, How It Works, Cities, Contact, /pricing repurpose
7. ✅ Vendor directory pages restyle (the noisiest old pages)
8. ✅ Blog template restyle
9. ✅ Vendor registration form restyle (Firebase wiring preserved)
10. ✅ Vendor qualification quiz at `/find-your-plan`
11. ✅ Customer intake widget on homepage
12. ✅ Cookie consent banner + analytics tags + UTM capture
13. ✅ Polish: Lighthouse, mobile spot-checks, accessibility, copy review

After every step, **stop and report the diff to the human**. Wait for explicit approval before moving to the next step. Do not skip ahead.

---

## 18. What to do when something is unclear

- If a request would violate this file → refuse, cite the rule, ask the human to clarify.
- If a request is ambiguous → ask one specific question, don't guess.
- If you discover something in the codebase that contradicts this file → flag it, don't auto-fix.
- If a Phase 2 idea is brought up during a build → log it under "Parked" in `docs/product-definition.md` Section 14, then continue the current task.
- If the human and this file disagree → the human wins **for that task**, and you flag the disagreement so this file gets updated for next time.

---

## 19. What is parked for Phase 2 / later

These ideas are real and not forgotten — but they do **not** appear on the Phase 1 website in any form. No "coming soon" badges, no teaser sections.

- Delivery for urban vendors
- Map-based vendor discovery
- Trip-aware highway pre-ordering
- WhatsApp ordering integration
- White-label customer apps
- Customer native mobile app (in development; promote when shipped, not before)
- Delivery Partner page
- Public vendor directory on the marketing site
- Featured Vendors carousel on the marketing site
- Advisor onboarding program
- Real-time visitor count display
- Cloud Functions for WhatsApp/email lead alerts (Phase 1.5)
- Embedded social feeds
- Microsoft Clarity, PostHog, or any Tier-2 analytics
- Internationalization (i18n) — Phase 1 is English + bilingual UI strings only

---

*End of CLAUDE.md. This file is the operational truth. When in doubt, re-read it.*
