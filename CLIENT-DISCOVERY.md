# Client discovery call

Use on **every new website client** before writing the brief.

## Collect from client

- [ ] Business name
- [ ] Contact info (name, phone, email, WhatsApp)
- [ ] Location / address (local vs online-only?)
- [ ] Social links (Facebook, Instagram, etc.)
- [ ] SEO + GEO: local business, service area, primary services to rank for
- [ ] Gather images (socials, client sends, on-site photos)
- [ ] Extra needs (e.g. language selector, booking, ecommerce)

## Then — generate brief

Use **`BRIEF-PROMPT.md`** template in Cursor → outputs full `WEBSITE-BRIEF.md`.

## Then — build chat

New chat: `@WEBSITE-BRIEF.md` + design/quality instructions (mobile, animations, premium positioning, etc.).

## Drop into workspace

Import site to `clients/{slug}/`, copy `WEBSITE-BRIEF.md`, fill summary `BRIEF.md`, update `.cursor/rules/client-context.mdc`.
