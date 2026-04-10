# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**noshtio** — India's zero-commission hyperlocal food vendor marketplace.
Tagline: *The Art of Shared Plates*

## Commands

```bash
npm run dev          # local dev server (http://localhost:3000)
npm run build        # production build (also runs next-sitemap via postbuild)
npm run lint         # ESLint via next lint
npm run start        # serve production build
```

After creating the project files, bootstrap dependencies and shadcn/ui:

```bash
npm install
npx shadcn@latest init --defaults
npx shadcn@latest add button card accordion toast
```

## Architecture

**Framework**: Next.js 14 App Router with TypeScript strict mode.

### Key conventions

- All routes live under `app/`. Shared layout (`Navbar` + `Footer` + `WhatsAppButton`) is in `app/layout.tsx`.
- `main` has `pt-16 lg:pt-20` to clear the fixed navbar (h-16 mobile / h-20 desktop).
- Page-level SEO: call `generatePageMeta(title, desc, path)` from `lib/seo.ts` and export it as `metadata` — it reads site defaults from `next-seo.config.ts`.
- shadcn/ui components go in `components/ui/`. Layout components in `components/layout/`.
- Firebase is initialized once in `lib/firebase.ts` using `getApps()` guard; import `db` (Firestore) or `auth` from there.

### Brand tokens (Tailwind)

| Token | Value |
|---|---|
| `navy` / `navy-DEFAULT` | `#0D1B3E` |
| `electricBlue` / `electricBlue-DEFAULT` | `#1E6FFF` |
| `gold` / `gold-DEFAULT` | `#C9A84C` |
| font `display` / `poppins` | Poppins (headings) |
| font `sans` / `dm-sans` | DM Sans (body) |

Utility classes defined in `globals.css`: `btn-primary`, `btn-gold`, `btn-outline`, `section-heading`, `gradient-text`, `container-page`, `section-padding`.

### Environment variables

Copy `.env.local.example` → `.env.local`. Required vars:

- `NEXT_PUBLIC_FIREBASE_*` — Firebase project credentials
- `NEXT_PUBLIC_EMAILJS_*` — EmailJS for lead notifications
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` — image uploads
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — country code + number, no `+` (e.g. `919999999999`)
- `NEXT_PUBLIC_SITE_URL` — canonical base URL for SEO/sitemap

### Image domains allowed in `next.config.ts`

`firebasestorage.googleapis.com`, `res.cloudinary.com`, `images.unsplash.com`
