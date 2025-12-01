# Phase 5: Content Pages
## Build About, Services, and Vacancies Pages

**Goal**: Create the About, Services, and Vacancies pages with proper content structure and styling using the provided copy.

**Reference**: See Content Sections, Feature Cards, and Typography in `design-analysis.md`.

**Prerequisites**: Phases 1-4 must be complete.

---

## Step 1: Create About Page

Create `app/about/page.tsx`:

**Structure:**
- Hero section with title "About us"
- Main intro paragraph about Hunters and Farmers
- "What We Recruit" section with roles listed in TWO COLUMNS

**Content:**
- Title: "About us"
- Main copy: "At Hunters and Farmers, we keep recruitment simple, effective, and focused on what works. We're not here to reinvent the wheel – we're here to connect great sales professionals with businesses. With experience recruiting across all levels, from Sales Administrators to Sales Directors, we're well placed to be able to assist you in finding what you need, be that your next position or your next hire. What sets us apart is that our consultants have worked in sales roles themselves, so they know firsthand what it takes to succeed in the field. This real-world insight, combined with proven recruitment expertise, allows us to deliver a straightforward, consultative service."

- "What We Recruit" section with roles in two columns:
  - Sales Director
  - National Sales Manager
  - State Sales Manager
  - Field Sales Manager
  - Channel Sales Manager
  - New Business Sales Manager
  - Account Executive
  - Sales Executive
  - Account Manager
  - Business Development Manager
  - Sales Consultant
  - National Account Manager
  - Key Account Manager
  - Sales Engineer
  - Sales Representative
  - Territory / Area Manager

---

## Step 2: Create Services Page

Create `app/services/page.tsx`:

**Structure:**
- Hero section with title "Our Services"
- Three main service sections:
  1. Permanent Search (with detailed 6-step process)
  2. Retained Search
  3. Bespoke Recruitment Solutions

**Content:**

### Permanent Search
Main description: "This is our most common recruitment process and enables us to fully understand what you require in your next hire and allows you to know how we will find the top talent you require."

**Six steps with detailed descriptions:**

1. **Discovery**
   - Examine organisation's history, mission, vision, strategy, structure, and culture
   - Define needs, provide perspectives, challenge assumptions
   - Create tailored candidate specifications
   - Confirm search strategy and timelines

2. **Identification**
   - Focused research using existing talent network
   - Market mapping for passive candidates
   - Promote role across digital job boards and social media
   - Present long-list candidate report

3. **Screening**
   - Screen candidates for experience and suitability
   - In-person interviews for technical skills and cultural fit
   - Perform preliminary background checks

4. **Review and Assessment**
   - Present short-listed candidates with full breakdown
   - Help with candidate selection for interview
   - Provide interview briefing packages
   - Coordinate all interviews
   - Attend panel interviews if requested

5. **Hiring**
   - Finalise pre-employment checks
   - Facilitate offer negotiations
   - Confirm commencement date
   - Help with resignation process
   - Advise unsuccessful candidates with feedback

6. **Commencing and review**
   - Prepare candidate to start
   - Check in during notice period
   - Remain in contact for six months after commencement

### Retained Search
Description: "Our Retained Search service provides a dedicated and prioritised approach to securing the right talent for critical roles. By working exclusively with you, we commit the time and resources needed to conduct a thorough, tailored search, ensuring access to the highest-quality candidates in the market. Regular sourcing updates and reviews throughout the process ensure that you see the entire market and what suits your needs best."

### Bespoke Recruitment Solutions
Description: "Our Bespoke Recruitment Solutions are designed to give you flexibility and choice beyond traditional search methods. Whether you require project-based hiring, talent mapping, market insights, or a tailored recruitment campaign, we build solutions around your specific needs. By combining industry expertise, innovative sourcing strategies, and a consultative approach, we deliver the outcomes that you require. Our consultants have experience in mass recruitment campaigns, executive search and through tailored recruitment campaigns, with their finger on the pulse in the market they can provide accurate and up to date market analysis and insights."

---

## Step 3: Create Vacancies Page

Create `app/vacancies/page.tsx`:

**Structure:**
- Hero section with title "Current roles we're recruiting"
- Subtitle: "If you can't see a vacancy that interests you, register your ideal role and we will be in touch."
- List of current job vacancies

**Content - Vacancies:**

1. **Sales Executive**
   - Location: Melbourne
   - Compensation: $85,000 plus super plus comms
   - Sector: Logistics

2. **Business Development Manager**
   - Location: S.E Melbourne
   - Compensation: $100,000 - $120,000 plus super plus comms
   - Sector: FMCG

3. **Account Manager**
   - Location: Melbourne
   - Compensation: Uncapped comms
   - Sector: Logistics

**Design:**
- Each vacancy should be displayed as a card or list item
- Include all details: title, location, compensation, sector
- Consider making them clickable/expandable for future detail pages

---

## Step 4: Add Page Metadata

Update all pages with proper metadata:

**About page** (`app/about/page.tsx`):
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Hunters and Farmers',
  description: 'Learn about Hunters and Farmers - simple, effective recruitment focused on connecting great sales professionals with businesses.',
}
```

**Services page** (`app/services/page.tsx`):
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Hunters and Farmers',
  description: 'Discover our recruitment services: Permanent Search, Retained Search, and Bespoke Recruitment Solutions.',
}
```

**Vacancies page** (`app/vacancies/page.tsx`):
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Current Vacancies | Hunters and Farmers',
  description: 'View current sales roles we\'re recruiting. Register your ideal role if you don\'t see a match.',
}
```

---

## Step 5: Update Navigation

Update the Header navigation to include Vacancies link if needed, or keep it as is (Home, About, Services, Contact).

---

## Checklist

- [ ] About page created with "About us" title
- [ ] About page has main intro copy
- [ ] "What We Recruit" section created with roles in TWO COLUMNS
- [ ] Services page created with "Our Services" title
- [ ] Permanent Search section with all 6 steps detailed
- [ ] Retained Search section added
- [ ] Bespoke Recruitment Solutions section added
- [ ] Vacancies page created
- [ ] Vacancies displayed with all details (title, location, compensation, sector)
- [ ] Page metadata added for SEO
- [ ] Responsive design works on all breakpoints
- [ ] Typography hierarchy is correct
- [ ] Spacing is consistent (py-section, py-section-lg)
- [ ] Two-column layout for "What We Recruit" works on mobile

---

## Design Guidelines

### Page Structure
- **Hero**: `py-section-lg` (128px padding), `text-h1` title
- **Sections**: `py-section` (96px padding), `border-t border-neutral-200` dividers
- **Container**: `max-w-content` (1200px) for text-heavy content
- **Headings**: `text-h2` (36px) for section headers, `text-h3` (24px) for subsections

### Content Sections
- **Line length**: Max 75 characters (`max-w-3xl`)
- **Body text**: `text-body text-neutral-700 leading-relaxed`
- **Spacing**: `space-y-6` or `space-y-8` between items

### Two-Column Layout
- **"What We Recruit"**: Use `grid grid-cols-1 md:grid-cols-2 gap-4` for responsive two-column layout
- **Mobile**: Single column
- **Desktop**: Two columns

### Service Steps
- **Permanent Search steps**: Can use numbered list or accordion-style sections
- **Each step**: Clear heading and detailed bullet points or paragraphs

### Vacancies
- **Layout**: Cards or list items with clear hierarchy
- **Information**: Title, location, compensation, sector clearly displayed

---

## Step 6: Commit Changes

Once Phase 5 is complete, commit your changes:

```bash
git add .
git commit -m "Phase 5: Content pages complete - About, Services, and Vacancies pages built"
git push
```

---

## Next Steps

Once Phase 5 is complete, proceed to **Phase 6: Contact Page** (`phase-6-contact.md`) to build the contact form and contact information.

---

## Troubleshooting

**Issue**: Content too wide on large screens
- **Solution**: Use `max-w-content` or `max-w-3xl` for text blocks

**Issue**: Sections too close together
- **Solution**: Ensure `py-section` (96px) spacing between sections

**Issue**: Two-column layout not working properly
- **Solution**: Use `grid grid-cols-1 md:grid-cols-2` for responsive two-column layout

**Issue**: Service steps too long
- **Solution**: Consider using accordion or collapsible sections for better UX
