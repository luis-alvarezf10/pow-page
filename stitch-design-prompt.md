# Pow Fitness — Full Website Redesign Prompt for Stitch AI

## Brand Overview

**Pow Fitness** is a premium gym located in Lechería, Anzoátegui, Venezuela. Two locations: Sede Principal and Sede Smash. The brand focuses on high-impact 60-minute workouts, community, and transformation. The tone is bold, energetic, motivating, and modern — targeting young professionals and fitness enthusiasts aged 18–40.

**Tagline**: "Potenciamos tu vida" (Empowering your life)

---

## Design System

### Color Palette

- **Background Primary**: `#0a0a0a` (near-black)
- **Background Secondary**: `#141414` (dark charcoal)
- **Background Tertiary**: `#1a1a1a` (slightly lighter dark)
- **Surface/Glass**: `rgba(255,255,255,0.05)` with `backdrop-blur`
- **Accent Primary (Yellow)**: `#fdff00` — CTAs, highlights, popular badges, checkmarks
- **Accent Cyan Light**: `#c6e4ee` — headings, links, secondary highlights
- **Accent Cyan Mid**: `#bce5ef` — section titles, icon backgrounds
- **Accent Teal Dark**: `#819ca3` — subtle accents, social button backgrounds
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a0a0a0` / `#9ca3af` (gray-400)
- **Border**: `rgba(255,255,255,0.1)` to `rgba(255,255,255,0.2)`
- **Gradient overlays**: dark-to-transparent for section transitions

### Typography

- **Display / Hero Font**: Bold, condensed, impactful — similar to "Bebas Neue" or "Oswald" for headlines
- **Body Font**: Clean sans-serif — "Inter", "DM Sans", or similar
- **Accent Font**: Handwritten/grunge style for motivational quotes — similar to "Permanent Marker"

### Design Language

- **Dark luxury gym aesthetic** — premium, not cluttered
- **Glassmorphism cards** — semi-transparent backgrounds with blur and subtle borders
- **Gradient overlays** on images (dark-to-transparent)
- **Subtle particle effects** or ambient motion in hero and key sections
- **Yellow glow effects** on CTAs and popular items
- **Rounded corners** (xl to 2xl radius)
- **Generous whitespace** between sections
- **Scroll-triggered animations** — elements fade/slide in as user scrolls

---

## Pages to Design

### 1. HOME PAGE (Main Landing)

The home page is a single long-scroll page with these sections in order:

---

#### SECTION 1: Hero

**Layout**: Full viewport height, centered content over a dark gym interior background image with a dark overlay (80% black).

**Content**:
- **Pow Fitness logo** (white version, centered, prominent)
- **Main headline**: "Entrena. Transforma. Repite." (bold, large, centered, white)
- **Subheadline**: "Clases grupales, entrenamiento personalizado y más en 60 minutos" (gray-400, centered)
- **Primary CTA button**: "Agendar mi clase gratis" — yellow (#fdff00) background, black text, rounded-full, prominent, with a subtle glow effect. This is the most important button on the page.
- **Secondary CTA text link**: "Ver planes →" (white, subtle, scrolls to pricing section)
- **NO location cards in the hero** — locations are shown in their own section below

**Visual effects**: Subtle light rays or ambient glow from the top center, faint particle overlay for depth.

---

#### SECTION 2: Scrolling Marquee Banner

**Layout**: Full-width horizontal scrolling text banner.

**Content**: Repeating text "POTENCIAMOS TU VIDA ✦ ENTRENA CON LOS MEJORES ✦ LECHERÍA, VENEZUELA ✦" in dark text on cyan (#c6e4ee) background. Icon separators (lightning bolt ⚡ or star ✦) between phrases.

---

#### SECTION 3: Services

**Layout**: Section title centered, followed by a responsive grid — 3 columns on desktop, 1 column on mobile.

**Section Title**: "Nuestros Servicios" (cyan #bce5ef, large, bold)

**Service Cards** (glassmorphism style — dark bg with blur, subtle border, rounded-2xl):

Each card contains:
- Circular icon background (teal #819ca3) with a white icon
- Service name (white, bold)
- Short description (gray-400)
- Availability badge at the bottom (yellow border, yellow text, small)

**Services to display**:
1. **CrossFit** — "Entrenamientos funcionales de alta intensidad que combinan cardio, fuerza y flexibilidad" — Sede Principal only
2. **Bodybuilding** — "Programas especializados en construcción muscular y definición corporal" — Ambas sedes
3. **Entrenamiento Personalizado** — "Sesiones uno a uno con entrenadores certificados" — Ambas sedes
4. **Running** — "Plan de entrenamiento de running con la mejor planificación" — Disponible
5. **Swimming** — "Sesiones de nado con profesores con años de experiencia" — Centro Gallego
6. **Fisioterapia** — "Rehabilitación y reacondicionamiento al mayor nivel" — Ambas sedes
7. **Nutrición** — "Plan de alimentación personalizado según tus objetivos" — Ambas sedes

**Note**: If PDFs from Mariangela provide updated services/plans, replace this data with the PDF content.

---

#### SECTION 4: WodUp App Integration

**Layout**: Two-column layout on desktop (text left, phone mockup right), stacked on mobile.

**Section Title**: "Tu entrenamiento, siempre contigo" (white, bold)

**Left column (text)**:
- Headline: "Lleva tu rutina con WodUp" (white, bold)
- Description: "Descarga nuestra app WodUp para seguir tus entrenamientos, registrar tus progresos y conectarte con tu coach. Tu rutina personalizada, tu historial y tus metas — todo en un solo lugar." (gray-400)
- Two CTA buttons side by side:
  - "Descargar en App Store" (white bg, black text, rounded-lg, with Apple icon)
  - "Disponible en Google Play" (white bg, black text, rounded-lg, with Google Play icon)

**Right column**:
- Phone mockup showing a fitness app interface (dark theme, showing a workout list or progress chart)

---

#### SECTION 5: Staff / Equipo

**Layout**: Section title centered, horizontal scroll carousel on mobile, 3-column grid on desktop.

**Section Title**: "Nuestro Equipo" (cyan #bce5ef, large, bold)

**Staff Cards** (glassmorphism — dark bg, blur, border, rounded-2xl, ~450px height):
- Staff photo (top, 60% of card height, rounded-lg, with dark gradient overlay at bottom)
- Category badge on the photo (top-left): "Coach" (yellow), "Fisioterapeuta" (blue), "Nutricionista" (green)
- Name (white, bold, centered)
- Divider line (subtle, centered)
- Role (gray-200, semibold)
- Specialty (gray-300, small)

**Staff members**:
1. **Jorman Sánchez** — Head Coach — Running, Natación, Entrenamiento funcional & CrossFit — 5 años — Category: coach
2. **Ricardo Lugo** — Fisioterapeuta y Coach Personal — Fuerza & acondicionamiento — 8 años — Category: fisio
3. **Elimar Barrios** — Coach funcional — Natación, CrossFit & HIIT — 6 años — Category: coach
4. **Mariangela Álvarez** — Nutricionista — Nutrición — 10 años — Category: nutri

---

#### SECTION 6: Pricing / Planes

**Layout**: Section title centered, 4-column grid of plan cards on desktop, 1 column on mobile. Below the grid, a full-width annual plan banner.

**Section Title**: "Elige tu plan" (white, large, bold)

**Plan Cards** (glassmorphism — dark bg, blur, border, rounded-xl):

Each card contains:
- Icon (circular bg, white icon)
- Plan name (yellow #fdff00, bold)
- Price (white, large, bold) + period (gray-400)
- CTA button: "Seleccionar Plan"
  - Popular plan: yellow bg, black text, with "Más Popular" badge on top
  - Other plans: transparent bg with white/5, white text
- Feature list with yellow checkmarks

**Plans to display**:
1. **Básico** — $45/mes — 3 días/semana, Elije tus días de entrenamiento, Horario fijo
2. **Completo** (Más Popular) — $60/mes — 6 días/semana, Horario fijo, Plan de nutrición gratis cada 3 meses
3. **Familiar** — $45/persona/mes — 2+ personas, Horario fijo, Plan de nutrición gratis cada 3 meses
4. **Premium** — $120/mes — Horario totalmente flexible, Rutina personalizada, Plan de nutrición incluido, Descuento en fisioterapia

**Annual Plan Banner** (below the grid, full-width, glassmorphism):
- Strikethrough price: $720 → Bold price: $600/año
- "Ahorra hasta un 16.67%"
- Features: Todas las clases incluidas, Evaluación Física Semestral, 2 consultas nutricionales gratis
- CTA: "¡Ahorra $120!" (yellow button)
- "Garantía de satisfacción 100%" text below

**Note**: If PDFs from Mariangela provide updated pricing, replace this data.

---

#### SECTION 7: Location / Sedes

**Layout**: Two location blocks, alternating layout (map left/info right, then reversed).

**Section Title**: "Encuéntranos" (white, large, bold)

**Each location block**:
- **Left/Right**: Google Maps embed (rounded-2xl, dark border)
- **Right/Left**: Location info card
  - Location name (cyan #aee6f0, large, bold) + highlight badge ("Sede Original" / "Sede Polideportiva")
  - Address with MapPin icon (gray-300)
  - Phone with Phone icon (gray-300) — clickable tel: link
  - Hours with Clock icon (gray-300)
  - Available services list with icons

**Locations**:
1. **Sede Principal** — Lechería, a 2 cuadras de Av. Principal — +58 412-7563518 — Lun-Vie 6AM-7PM, Sáb 6AM-12PM — CrossFit, Bodybuilding, Entrenamiento Personalizado
2. **Sede Smash** — Lechería, Av. Intercomunal, Atrás de Inversan — +58 412-2530116 — Lun-Vie 6AM-7PM, Sáb 6AM-12PM — Bodybuilding, Entrenamiento Personalizado

---

#### SECTION 8: Testimonials / Clientes

**Layout**: Section title centered, horizontal drag-scrollable carousel of testimonial cards.

**Section Title**: "Lo que dicen nuestros clientes" (cyan #bce5ef, large, bold)

**Testimonial Cards** (glassmorphism with spotlight hover effect):
- Quote icon (large, subtle, gray-10% opacity)
- Testimonial text (white, italic, centered)
- Client name (gray-400, semibold)

**Testimonial Data** (replace with real testimonials when available):
1. María González — "En solo 60 minutos sentí una energía increíble. El mejor entrenamiento de mi vida."
2. Carlos Ruiz — "Resultados visibles desde la primera sesión. Totalmente recomendado."
3. Ana López — "El equipo es excepcional y el ambiente motivador. No puedo estar más feliz."
4. Diego Martín — "Nunca pensé que podría lograr tanto en tan poco tiempo. Increíble experiencia."

---

#### SECTION 9: Final CTA / Photo Section

**Layout**: Full-width section with a dramatic gym photo as background (dark overlay). Centered content.

**Content**:
- **Headline**: "¿Estás listo para potenciar tu vida?" (white, bold, large — Permanent Marker / grunge font style)
- **Subheadline**: "Tu primera clase es gratis. Sin compromisos. Solo vos y tu mejor versión." (gray-300)
- **Primary CTA button**: "Agendar mi clase gratis" — yellow (#fdff00) background, black text, rounded-full, with glow effect — links to WhatsApp
- **Secondary**: Small text below: "O llamanos al +58 412-7563518" (gray-400)

---

#### SECTION 10: Footer

**Layout**: Dark background (#141414), 4-column grid on desktop, stacked on mobile.

**Columns**:
1. **Logo + Description**: Pow Fitness logo (white), short tagline, social media icons (Instagram, TikTok, WhatsApp)
2. **Sede Principal**: Address, phone (clickable), hours
3. **Sede Smash**: Address, phone (clickable), hours
4. **Contacto General**: Email (info@powfitness.com), phone, hours

**Bottom bar**: Copyright "© 2026 Pow Fitness. Todos los derechos reservados." + links to Política de Privacidad and Términos de Uso

---

### 2. HEADER (Sticky Navigation)

**Layout**: Fixed at top, appears after scrolling 100px. Floating pill shape (rounded-full), centered horizontally, 90% width, glassmorphism (dark bg with blur, subtle border).

**Content**:
- **Left**: Pow Fitness logo (white, small)
- **Center**: Navigation links — Inicio, Servicios, Equipo, Precios, Ubicación, Testimonios
- **Right (Desktop)**: CTA button "Clase gratis" — yellow bg, black text, rounded-full, small but prominent
- **Right (Mobile)**: Hamburger menu icon

**Mobile menu**: Full-width dropdown, dark bg with blur, stacked links with active state highlight (yellow bg, black text), plus "Clase gratis" CTA button at the bottom.

**Active section indicator**: Current section link highlighted in cyan (#c6e4ee).

---

### 3. WHATSAPP FLOATING BUTTON

**Layout**: Fixed position, bottom-right corner, always visible.

**Design**:圆形 green (#25D366) button with WhatsApp icon, subtle shadow, pulse animation on hover. Links to `https://wa.me/584127563518` (Sede Principal number).

---

## Key Design Principles

1. **Dark luxury gym** — premium feel, not generic fitness template
2. **Yellow (#fdff00) is sacred** — only for CTAs, highlights, and important badges. Never for body text.
3. **Glassmorphism everywhere** — cards, nav, mobile menu all use blur + transparency
4. **Breathing room** — generous padding between sections (py-20 to py-32)
5. **Mobile-first** — every section must look excellent on phones (375px+)
6. **One clear CTA per section** — never more than 2 actions per viewport
7. **Real photos preferred** — use actual gym/team photos over stock imagery where possible

---

## Responsive Breakpoints

- **Mobile**: 375px – 767px (1 column, stacked layouts, horizontal scroll for carousels)
- **Tablet**: 768px – 1023px (2 columns where appropriate)
- **Desktop**: 1024px+ (full multi-column layouts)

---

## Animations & Micro-interactions

- **Scroll reveal**: Elements fade in and slide up as they enter viewport
- **Card hover**: Scale 1.05, border color changes to yellow/30, shadow intensifies
- **Button hover**: Scale 1.02, background brightens, subtle glow
- **Marquee**: Continuous horizontal scroll, 20s loop
- **WhatsApp button**: Subtle pulse animation, scale on hover
- **Nav appear**: Slides down with fade when scrolling past hero
