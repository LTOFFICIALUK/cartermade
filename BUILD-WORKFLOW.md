# Website build checklist

> Work **one phase at a time**. Tick sub-steps here + mark todo done in **client-portal** when linked.

---

## 1. Brief & setup

- [x] Discovery notes captured (domain, contact, brand vibe, CTA, location)
- [x] `WEBSITE-BRIEF.md` written
- [x] Copy `clients/_template` → `clients/carter-made`
- [x] Fill `BRIEF.md` + update `.cursor/rules/client-context.mdc`
- [ ] Create client + website in client-portal *(when you ask)*

## 2. Scaffold project

- [x] Next.js app in this folder (App Router, TS, Tailwind)
- [x] `npm run dev` works
- [x] `.env.example` created

## 3. Design & build UI

- [x] Brand from BRIEF applied (atelier palette + Fraunces / DM Sans)
- [x] Every BRIEF page built
- [x] Header, footer, mobile nav
- [x] Homepage hero + primary CTA (WhatsApp)
- [ ] Responsive (375 / 768 / 1280) — visual QA pending

## 4. Content & CTAs

- [ ] Real copy (or clearly labelled TBC)
- [ ] WhatsApp / email work
- [ ] Portfolio stills + alt text
- [ ] No fake prices, hours, or reviews

## 5. SEO

- [ ] Meta title + description per page
- [ ] Schema + sitemap + robots.txt
- [ ] Rich Results Test passes

## 6. GEO

- [ ] Clear entity on homepage (ProfessionalService / Person)
- [ ] UK-wide positioning consistent
- [ ] Contact NAP / WhatsApp consistent

## 7. GSC setup

- [ ] Property verified
- [ ] Sitemap submitted
- [ ] Key pages indexed

## 8. GA4 setup

- [ ] Tracking live (production only)
- [ ] Conversion events tested (WhatsApp, email, form)

## 9. Launch & handoff

- [ ] Deployed to cartermade.co.uk
- [ ] Live QA complete
- [ ] Portal todos marked done

---

**Current phase:** 3 — Design (core UI done; polish + visual QA next)

**Blockers:** Polyblock live screenshot blocked by Vercel checkpoint — placeholder image in use
