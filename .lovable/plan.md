## Portfolio site for Emmanuel Chiboy

A polished single-page personal portfolio built on the existing TanStack Start setup. Reflects the two updates: no Projects/Work section, and testimonials sourced from a diverse mix of countries.

### Sections (in order)

1. **Navbar** — Logo/name, links: Home, About, Services, Testimonials, Contact. (No "Work" link.)
2. **Hero** — Headshot (Emmanuel.png), name, tagline from CV/brief, primary CTA "Get in touch" + secondary "Download CV".
3. **About** — Short bio pulled from CV/brief, key strengths.
4. **Services / What I do** — 3–4 service cards based on CV skills.
5. **Testimonials** — 5 cards, international mix:
  - Sarah Whitfield — London, UK (5.0)
  - James Carter — Austin, TX, USA (4.8)
  - Priya Anand — Toronto, Canada (4.9)
  - Michael O'Connor — Manchester, UK (4.7)
  - Adaeze Okafor — Lagos, Nigeria (4.6)
   Varied tones (warm, concise, technical, enthusiastic, reflective). Ratings 4.6–5.0. Star display + name + role + location.
6. **Contact** — Email, social links, simple contact prompt.
7. **Footer** — Copyright, socials.

*Removed:* Projects / My Work section and the "Work" nav link — no placeholders.

### Design direction

- Clean, modern personal brand. Light theme primary, with a refined accent. Generous whitespace, large display type for hero, subtle motion on scroll. Semantic tokens defined in `src/styles.css` (oklch).
- Headshot featured prominently in hero with a soft shadow/ring treatment.

### Technical notes

- Update `src/routes/index.tsx` to render the full landing page composed of section components.
- New components under `src/components/sections/`: `Navbar`, `Hero`, `About`, `Services`, `Testimonials`, `Contact`, `Footer`.
- Headshot uploaded via `lovable-assets` from `/mnt/user-uploads/Emmanuel.png`, imported through a `.asset.json` pointer.
- CV PDF uploaded the same way and linked from the "Download CV" button.
- Update `src/styles.css` tokens (palette + radius) and route `head()` meta (title, description, og tags) for SEO.
- Smooth-scroll anchors for in-page nav (single-page site, so hash anchors are acceptable here).
- No backend/Cloud needed for this version.  
  
**1. Design: Make it dark-themed, not light. Background #0A0A0F, card surfaces #13131A, accent color electric purple #6C63FF. Use glassmorphism on cards where appropriate. Hero profile photo should have a rotating purple conic-gradient glow ring around it.**
  **2. Floating WhatsApp button: Fixed bottom-right corner, 56px green circle, sonar ping animation, opens** `https://wa.me/message/N4TYXMFOSNGOC1` **in a new tab.**
  **3. Contact section: Include 3 buttons — WhatsApp (**`https://wa.me/message/N4TYXMFOSNGOC1`**), Facebook (**`https://www.facebook.com/emmanuelchiboy001`**), Gmail (**`ignatiusemmanuel1122@gmail.com`**). Add a green whatsapp logo pulsing "Available for work" badge.**
  **4. Fonts: Syne for headings, Inter for body. Load via Google Fonts.**
  **5. Animations: Framer Motion fade+slide-up on scroll for each section, hero stagger entrance, navbar goes transparent to glass on scroll.**
  &nbsp;