# Brief generation prompt (paste into Cursor)

Replace `{placeholders}` from discovery notes.

---

Your job is to write me a website brief for this business.

Use pictures from these links. Where we don't have sufficient media, add placeholder images that are copyright free and match the business nicely and don't look fake.

**Social / media:**
- {facebook_url}
- {instagram_url}

**Business:**
- Name: {business_name}
- Location: {full_address}
- Opening hours: {hours}
- Contact: {contact_name} {phone}

**SEO + GEO:** {local_focus — services, area, goals}

**Extra requirements:** {e.g. Welsh + English, language selector subtle in nav, English default}

**Goals:** Clean professional site extending existing branding. Lead gen through local SEO and GEO. Set up for bi-weekly SEO/GEO content updates. Modern, eyecatching, optimised for results.

Put the full brief in `WEBSITE-BRIEF.md`.

---

## Build prompt (second chat)

```
@WEBSITE-BRIEF.md

Make sure the website is clean, branded, has professional animations where needed, is suitable for mobile, has equitable directions, and is designed to a professional standard in this niche. We are a premium brand in this area and should be positioned as one.
```
