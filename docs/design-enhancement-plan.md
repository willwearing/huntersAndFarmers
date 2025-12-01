# Design enhancement plan
## Transforming Hunters & Farmers from flat to captivating

---

## Current state assessment

**The problem:** The site looks like a corporate template. It's functional but forgettable. No personality, no colour, no movement. The existing accent colour (`#6366F1`) is defined but never used. The monochromatic gray palette makes everything blend together.

**What's working:**
- Clean typography hierarchy
- Good spacing and structure
- Responsive layout foundation
- Framer Motion already installed (but unused)

---

## Design direction

### Philosophy: "Warm professionalism"

Sales recruitment is about people and relationships. The current cold, clinical aesthetic doesn't reflect that. We want:
- **Approachable** but not casual
- **Confident** but not aggressive
- **Modern** but not trendy
- **Distinctive** without being distracting

### Inspiration references
- Linear.app (smooth animations, gradient backgrounds)
- Vercel (dark/light contrast, subtle motion)
- Raycast (warm accents on dark backgrounds)
- Stripe (micro-interactions, attention to detail)

---

## Color system

### Option A: Deep ocean (recommended)

A sophisticated palette with depth. Dark mode-first with a warm accent.

```
Primary (deep navy):     #0F172A → #1E293B (gradient)
Accent (warm coral):     #F97316 (orange-500)
Accent secondary:        #FB923C (orange-400) for hovers
Surface light:           #F8FAFC
Surface dark:            #020617 (slate-950)
Text primary:            #F1F5F9 (on dark) / #0F172A (on light)
Text muted:              #94A3B8
Success:                 #22C55E
```

Why this works:
- Deep navy feels established and trustworthy
- Warm coral accent stands out without being aggressive
- High contrast for accessibility
- Unique in the recruitment space (most use blue/green)

### Option B: Forest & gold

```
Primary:                 #064E3B (emerald-900)
Accent:                  #FBBF24 (amber-400)
Surface:                 #ECFDF5 (emerald-50)
```

### Option C: Midnight violet

```
Primary:                 #1E1B4B (indigo-950)
Accent:                  #A78BFA (violet-400)
Surface:                 #EEF2FF (indigo-50)
```

**Recommendation:** Option A (Deep Ocean) - it's warm, professional, and distinctive without being polarizing.

---

## Typography enhancements

### Font upgrade

Replace Inter with **DM Sans** or **Satoshi** for headlines. Keep Inter for body text.

- DM Sans: Slightly more geometric, modern feel
- Satoshi: Variable font with great personality

### Text animations

- Headlines animate in with staggered character reveal
- Body text fades up with slight delay
- Numbers in stats section count up on scroll

---

## Animation & interaction plan

### Page load sequence

1. **Header** slides down (100ms delay)
2. **Hero headline** fades up with blur (200ms)
3. **Hero body** fades up (300ms)
4. **Background gradient** animates subtly

### Scroll animations

Using Framer Motion's `useInView` and `useScroll`:

1. **Stats section**: Numbers count up when visible
2. **Cards**: Stagger in from bottom with 100ms delay between each
3. **Section headers**: Fade up with slight y-offset
4. **Parallax**: Subtle parallax on hero background (0.2x scroll speed)

### Hover interactions

1. **Navigation links**: Underline grows from center
2. **Cards**:
   - Subtle scale (1.02)
   - Border glow with accent colour
   - Shadow increase
3. **Buttons**:
   - Background colour shift
   - Subtle lift (translateY -2px)
   - Glow effect on primary CTA
4. **Footer links**: Colour transition + slight x-shift

### Cursor effects (optional)

A custom cursor that:
- Changes colour over interactive elements
- Shows a subtle glow/trail

---

## Background treatments

### Hero section

**Option 1: Gradient mesh (recommended)**

A subtle, animated gradient mesh in the background. Not Three.js - just CSS/canvas.

```css
background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
```

With overlaid noise texture and subtle animated gradient blobs using CSS `@keyframes` or Framer Motion.

**Option 2: Particle field**

Lightweight canvas-based dots that move slowly. Simple, performant, adds depth without distraction.

```typescript
// Simple canvas implementation - ~50 lines of code
// Dots drift slowly, respond to mouse proximity
// Much lighter than Three.js
```

**Option 3: Grid pattern**

Subtle grid lines that fade toward edges. Can animate on scroll.

**Recommendation:** Gradient mesh with noise texture. It's:
- Performant (pure CSS)
- Distinctive
- Easy to maintain
- Works on all devices

### Section backgrounds

- Alternate between dark/light sections
- Use subtle gradients rather than flat colours
- Add noise texture overlay for depth (0.02 opacity)

---

## Component redesigns

### Header

```
Current: White background, black text
New: Glass morphism on scroll, accent logo mark, animated nav underlines
```

- Transparent at top, frosted glass on scroll
- Logo gets a small coloured accent mark
- Active page indicator animated
- Mobile menu slides in from right with staggered links

### Hero

```
Current: Plain white, left-aligned text
New: Dark gradient background, centered text, animated entrance
```

- Full viewport height
- Headline animates in with slight blur
- Add a subtle call-to-action button with glow
- Scroll indicator at bottom (animated chevron)

### Stats section

```
Current: Light gray background, static numbers
New: Dark section, glowing numbers, count-up animation
```

- Numbers count up on scroll into view
- Add subtle gradient behind each stat
- Dividers between stats with gradient line
- Labels animate in after numbers

### Preview cards

```
Current: White cards, gray border, basic hover
New: Glass morphism cards, gradient border on hover, icon integration
```

- Add icons to each card (custom SVG or Lucide)
- Gradient border animation on hover
- Stagger animation on scroll
- Arrow indicator that moves on hover

### Footer

```
Current: Light gray, standard link grid
New: Dark gradient, better visual hierarchy, social icons
```

- Match hero's dark treatment
- Add subtle gradient divider
- Social media icons
- Newsletter signup (optional)

---

## Micro-interactions

### Button press

```css
transform: scale(0.98);
transition: transform 100ms ease;
```

### Link hover

```css
/* Underline grows from center */
&::after {
  content: '';
  transform: scaleX(0);
  transition: transform 300ms ease;
}
&:hover::after {
  transform: scaleX(1);
}
```

### Card lift

```css
transition: transform 300ms ease, box-shadow 300ms ease;
&:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
```

### Form focus

- Input border animates to accent colour
- Label floats up with smooth animation
- Submit button has loading state with spinner

---

## Three.js consideration

**Verdict: Skip it**

Three.js is overkill for a recruitment landing page. The bundle size (~500KB) isn't worth it for subtle background effects. Instead:

1. **CSS gradients + keyframe animations** for backgrounds
2. **Canvas 2D** for particle effects if needed
3. **Framer Motion** for all UI animations

This keeps the bundle small, performance high, and maintenance easy.

---

## Implementation phases

### Phase 1: Foundation (1-2 hours)
- [ ] Update `tailwind.config.ts` with new colour palette
- [ ] Update `globals.css` with CSS variables
- [ ] Add noise texture asset
- [ ] Install new font (DM Sans via next/font)

### Phase 2: Core components (2-3 hours)
- [ ] Redesign Header with glass morphism + animations
- [ ] Redesign Hero with dark background + animations
- [ ] Redesign Stats with count-up animation
- [ ] Redesign PreviewCards with new styling + hover effects

### Phase 3: Page polish (2-3 hours)
- [ ] Update About page styling
- [ ] Update Services page styling
- [ ] Update Contact page styling
- [ ] Redesign Footer

### Phase 4: Animation & interaction (1-2 hours)
- [ ] Add scroll-triggered animations (useInView)
- [ ] Add page transition animations
- [ ] Add micro-interactions (buttons, links)
- [ ] Add form animations

### Phase 5: Polish (1 hour)
- [ ] Test all animations on mobile
- [ ] Performance audit (no animation jank)
- [ ] Accessibility check (prefers-reduced-motion)
- [ ] Cross-browser testing

**Total estimated time: 7-11 hours**

---

## Files to modify

```
styles/globals.css          - New CSS variables, global styles
tailwind.config.ts          - New colour palette, fonts
lib/design-tokens.ts        - Updated tokens
app/layout.tsx              - Font setup
components/layout/Header.tsx
components/layout/Footer.tsx
components/sections/Hero.tsx
components/sections/Stats.tsx
components/sections/PreviewCards.tsx
app/page.tsx
app/about/page.tsx
app/services/page.tsx
app/contact/page.tsx
```

---

## New components to create

```
components/ui/AnimatedText.tsx      - Text reveal animation
components/ui/CountUp.tsx           - Number animation
components/ui/GradientBackground.tsx - Animated background
components/ui/GlassCard.tsx         - Glass morphism card
components/ui/ScrollIndicator.tsx   - Animated scroll arrow
```

---

## Performance considerations

1. **CSS over JS**: Use CSS transforms/transitions where possible
2. **will-change**: Only on actively animating elements
3. **prefers-reduced-motion**: Respect user preferences
4. **Lazy animations**: Only animate elements in view
5. **No layout thrashing**: Avoid animating width/height

---

## Success metrics

After implementation:
- [ ] No animation jank at 60fps
- [ ] First Contentful Paint < 1.5s
- [ ] Lighthouse performance > 90
- [ ] Site feels alive and memorable
- [ ] Works beautifully on mobile

---

## Questions for you before starting

1. **Colour preference**: Deep Ocean (A), Forest & Gold (B), or Midnight Violet (C)?
2. **Dark mode toggle**: Add a light/dark mode switch, or commit to one theme?
3. **Background treatment**: Gradient mesh, particle field, or grid pattern?
4. **Logo**: Do you have one, or should we create a text wordmark?
5. **Any specific brands or sites** you want to emulate more closely?

---

## Ready to proceed?

Once you've reviewed this plan and answered the questions above, I'll start with Phase 1 and work through systematically. Each phase can be reviewed before moving to the next.

