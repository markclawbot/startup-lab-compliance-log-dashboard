# Automated Compliance Log Dashboard for Medical Equipment — Design Specification

## Design Philosophy: "Clinical Confidence"

In a space dominated by sterile blues and clinical grays—where most healthcare software feels like navigating a hospital corridor at 3 AM—we chart a different course. This is **Clinical Confidence**: a design movement that marries medical precision with human reassurance, creating an interface that feels like a trusted attending physician's calm directive rather than an anxious checklist.

### The Philosophy

**Space and Form: Breathing Room in a Breathless Industry**

Healthcare workers operate in environments of constant urgency. Every interface they encounter adds cognitive load to already maxed-out mental capacity. Clinical Confidence responds with **generous whitespace** and **unhurried layouts**. Elements don't crowd; they respect each other's territory. Cards sit in comfortable proximity, never touching. This isn't minimalism for aesthetics—it's oxygen for overwhelmed minds.

The spatial structure follows a **three-tier hierarchy**: Status, Insight, Action. The eye lands first on the compliance pulse (green, yellow, red), then descends into predictive intelligence (what's coming), finally settling on actionable next steps. This isn't a dashboard you study; it's a situation you **absorb in three seconds** before returning to patient care.

**Color and Material: Confidence Over Sterility**

Competitors default to medical tropes: surgical blues, hospital whites, warning reds that scream "emergency." They mirror the visual language of stress. We choose **deep teals** and **warm greens**—colors that evoke the calm competence of a well-run facility, not the panic of a code blue. Our primary palette says "we've got this" rather than "watch out."

Accent colors are **purposeful, not decorative**. Amber (not red) signals "attention required"—a gentle tap on the shoulder, not a siren. Soft coral marks "action zones"—inviting, not demanding. Status indicators borrow from nature: forest green for health, sun-bleached gold for caution. The system communicates like a trusted colleague, not an alarm panel.

Materials are **tactile without skeuomorphism**. Subtle elevation (soft shadows, not harsh borders) creates depth without dramatics. Glass-like transparency on overlays; paper-like texture on cards. The interface feels like it exists in three-dimensional space—you could reach out and touch it—but it never cosplays as a physical object.

**Scale and Rhythm: Glanceability Over Deep Dives**

The competitive landscape loves complexity: drill-downs, sub-menus, tables within tables. They assume users have time to explore. We assume users have **seven seconds** before a pager goes off. Clinical Confidence optimizes for the **glance**.

Typography operates at two scales: **display** (large, confident, immediate) and **detail** (small but never cramped). There is no middle ground. The most critical information—"96% compliant"—demands space. It's not a data point; it's the headline. Secondary details recede into gentle hierarchies: lighter weights, cooler tones, smaller sizes. The eye knows where to go because the design has already decided.

Rhythm is **syncopated rather than steady**. Not a military grid, but a jazz composition: large panels punctuated by compact widgets; full-bleed hero sections followed by columned details. The layout breathes with varied cadence—moments of expansion, moments of compression. This keeps attention engaged without overwhelming.

**Composition and Balance: Asymmetric Stability**

Most compliance dashboards impose rigid grids: everything in its box, every box the same size. It feels institutional because it **is** institutional. Clinical Confidence breaks symmetry while maintaining balance. A large compliance score card anchors the top-left; a vertical alert feed runs down the right; the center holds a dynamic graph. The composition is **weighted but not uniform**.

This asymmetry serves cognition: your eye tracks the Z-pattern (status → trends → alerts → actions) naturally. There's no hunting, no wondering "where do I look next?" The design has already made that decision. Balance comes not from mirroring, but from **visual weight distribution**: a large, light card balances two small, dense panels.

**Visual Hierarchy: Trust Through Transparency**

Competitive products often hide critical context behind tooltips and modals, assuming users don't want to be "overwhelmed" with details. This breeds distrust: if the system is hiding things, what else am I not seeing? Clinical Confidence makes **transparency** the hierarchy.

Primary level: **THE ANSWER.** "You are 96% compliant." Not buried in a sub-tab, not requiring mental math. Right there, unmissable.

Secondary level: **THE EVIDENCE.** Why 96%? Which equipment is flagged? Show the data, not just the conclusion. Users don't need to click to verify; it's already visible.

Tertiary level: **THE ACTION.** What do I do about the 4%? Specific, prioritized recommendations with one-click initiation. The design earns trust by showing its work and making the next step obvious.

---

This is not a dashboard that asks you to work harder. It's an interface that works **on your behalf**—interpreting, prioritizing, and presenting clarity in a profession that runs on clarity.

---

## Color Palette

### Primary: Deep Teal Family
- **Primary 900 (Deep Teal):** `#0A5F5A` — Main brand color, primary buttons, nav elements
- **Primary 700 (Teal):** `#0D7F79` — Hover states, active indicators
- **Primary 100 (Soft Teal):** `#D4EFED` — Subtle backgrounds, disabled states

**Why these colors:**
The teal family evokes **medical trust** (clinical but not cold) while differentiating from the "surgical blue" overload in competitive products. Research shows competitors lean heavily on blues and grays (sterile, stressful); we choose teal to signal calm competence. This is the color of a well-run OR, not a code red.

### Status Indicators (Nature-Inspired)
- **Success Green:** `#2D7A5F` — Forest green, not neon; feels earned, not alarming
- **Caution Amber:** `#D49A3D` — Warm gold, not traffic light yellow; gentle attention
- **Alert Coral:** `#E07A5F` — Soft coral, not fire-engine red; firm but not panicked
- **Neutral Slate:** `#6B7280` — Cool gray for non-critical info

**Why these colors:**
Research insight: "Hand hygiene tracking felt invasive and micromanaging" (Reddit). Status colors should inform, not police. We avoid harsh reds (stress) and neon greens (gamification). These natural tones communicate **professional assessment**, not judgment.

### Background & Structure
- **Background Base:** `#F9FAFB` — Off-white with warm undertone; reduces eye strain
- **Surface White:** `#FFFFFF` — Pure white for cards and elevated elements
- **Border Subtle:** `#E5E7EB` — Barely-there dividers; structure without clutter

**Why these colors:**
Competitive analysis: OrangeQC, SafetyCulture use stark white backgrounds that echo institutional spaces. Our off-white base adds subtle warmth—this is a tool that helps you, not an audit you endure.

### Accent & CTA
- **Action Coral:** `#E07A5F` — Primary CTA buttons (Generate Report, View Alerts)
- **Accent Teal:** `#0D7F79` — Secondary actions, links

**Why these colors:**
Coral CTA differentiates from both primary teal (avoids confusion) and competitive landscape (most use blue or green CTAs). It's warm and inviting—"this will help you"—not cold and demanding.

---

## Typography

### Font Families

**Display / Headings:** **Inter** (sans-serif)
- Modern, highly legible, excellent at large sizes
- Variable font weights for precise hierarchy
- Geometric clarity matches clinical precision without feeling robotic

**Body / UI:** **Inter** (consistent family)
- Same family for display and body creates cohesion
- Exceptional readability at small sizes (critical for data tables)
- Wide character set supports medical terminology and abbreviations

**Monospace (Data/Metrics):** **JetBrains Mono** or fallback to system monospace
- Used sparingly for exact values, timestamps, equipment IDs
- Fixed-width reinforces "precise measurement" feeling

### Type Scale

**Display (Hero Numbers):**
- **96%** compliance score: 72px / 600 weight / Primary 900
- Dashboard section headers: 32px / 600 weight / Neutral 900

**Headings:**
- H1 (Page titles): 28px / 600 weight / Neutral 900
- H2 (Card titles): 20px / 600 weight / Neutral 800
- H3 (Sub-sections): 16px / 600 weight / Neutral 700

**Body:**
- Default body: 15px / 400 weight / Neutral 700 / 1.6 line-height
- Small (metadata): 13px / 400 weight / Neutral 600
- Tiny (captions): 11px / 500 weight / Neutral 500 / uppercase / letter-spacing: 0.05em

### Typographic Voice

**Authoritative but Approachable**
- Headings are declarative: "Compliance Status" not "Check Your Compliance"
- Alerts are specific: "Infusion Pump #47 PM due in 3 days" not "Maintenance needed"
- Microcopy is supportive: "Great! All equipment current." not just "All current"

**Clinical, Not Bureaucratic**
- Avoid jargon where possible: "Days until audit" not "Temporal audit proximity metric"
- Use active voice: "Schedule maintenance now" not "Maintenance should be scheduled"
- Respect user expertise: Don't over-explain medical equipment; they know their domain

**Confident, Not Arrogant**
- Predictive alerts say "Likely to be flagged" not "Will fail"
- Success messaging celebrates: "Audit-ready!" not just "100% compliant"
- The system is a partner: "We noticed..." not "System detected..."

---

## Layout Principles

### Page Structure: The Compliance Pulse

Every page follows the **Status → Insight → Action** hierarchy:

**Top Zone (Status):**
- Hero metric: THE ANSWER (compliance score, equipment status, alert count)
- Large, unmissable, answers "should I be worried?" in 2 seconds
- Full-width or 2/3 width; never buried below fold

**Mid Zone (Insight):**
- Trends, graphs, predictive alerts, comparative data
- Answers "why is the status what it is?" and "what's coming?"
- Multi-column layout with varied rhythm (not uniform grid)

**Lower Zone (Action):**
- Prioritized task lists, report generators, drill-downs
- Answers "what do I do about it?"
- Organized by urgency, not alphabetically

### Responsive Behavior

**Desktop (>1200px):**
- Three-column layouts for insight zone
- Sidebar navigation + hero dashboard
- Persistent alert feed in right rail

**Tablet (768px - 1200px):**
- Two-column layouts; alert feed collapses into expandable panel
- Touch-friendly targets (min 44px)
- Simplified graphs (fewer data points, larger touch targets)

**Mobile (<768px):**
- Single column, card-based
- Bottom navigation (thumbs, not stretch)
- Status hero remains large (mobile-first = status-first)
- Swipe gestures for moving between sections

**Key principle:** The most critical information (Status) loses the least fidelity on small screens. A mobile user should still get THE ANSWER immediately.

### Key Spatial Relationships

**Proximity = Relationship:**
- Related metrics sit in the same card
- Unrelated metrics get separate cards with whitespace buffer
- Alert + Action sit adjacent (see problem, see solution)

**Elevation = Importance:**
- Hero cards: 4px shadow, white background (most important)
- Standard cards: 2px shadow, white background (default)
- Subtle panels: 0px shadow, off-white background (contextual info)

**Containment = Scope:**
- Full-bleed sections: system-wide data (overall compliance)
- Contained cards: specific equipment or location
- Nested cards: drill-down details (expandable on click)

---

## Component Inventory

### 1. Hero Metric Card
**Description:** Large card displaying primary status (compliance %, audit readiness, alert count)

**Visual expression of philosophy:**
- Generous padding (48px) — embodying "breathing room"
- Display typography (72px score) — glanceability
- Subtle gradient background (teal 100 → white) — depth without dramatics
- Icon + Number + Context: "96% / Compliant / 2 items need attention"

**States:**
- Green glow: >95% compliant
- Amber border: 85-95% compliant
- Coral border: <85% compliant

---

### 2. Predictive Alert Card
**Description:** Prioritized list of upcoming compliance risks with severity indicators

**Visual expression of philosophy:**
- Amber accent stripe (left border) — gentle attention signal
- Icon + Severity badge + Message + Action button
- Example: "⚠️ HIGH | Room 3 cleaning cadence below average | View Details"
- Sorted by severity (HIGH → MEDIUM → LOW)
- Click to expand: shows data supporting prediction + recommended action

**Philosophy connection:** Transparency through visual hierarchy — show the prediction AND the evidence, don't hide it behind modals.

---

### 3. Compliance Trend Graph
**Description:** Line or bar chart showing compliance percentage over time (7 days / 30 days / 90 days)

**Visual expression of philosophy:**
- Minimal chrome: no heavy grid lines, just subtle horizontal guides
- Teal line with gradient fill below (depth without noise)
- Data labels only on hover (clean by default, detailed on demand)
- Threshold line at 95% (visual goal marker)

**Philosophy connection:** Glanceability — the shape of the trend (up/down/flat) is instantly readable; exact numbers are available on hover.

---

### 4. Equipment Status Table
**Description:** Sortable table of all equipment with status indicators, last maintenance, next PM due

**Visual expression of philosophy:**
- Row hover: subtle teal background (interactive feedback)
- Status indicators: colored dots (green/amber/coral) + text labels (accessible)
- Zebra striping: off-white alternating rows (visual rhythm)
- Sticky header on scroll (context preservation)

**Columns:**
- Equipment Name | Type | Status | Last Maintenance | Next PM Due | Actions

**Philosophy connection:** Transparency — all equipment visible, no "only show problems" filtering by default. Users trust what they can verify.

---

### 5. Audit Report Generator
**Description:** One-click report generation with preview and download

**Visual expression of philosophy:**
- Large coral CTA button: "Generate Audit Report" (action-oriented)
- Date range selector: simple calendar picker (last 7/30/90 days presets)
- Preview pane: shows sample report structure before generation
- Download formats: PDF (primary), CSV (data export)

**Philosophy connection:** One-click reporting was a key research insight ("building reports is very easy!"). The design makes this feel effortless.

---

### 6. Multi-Location Dashboard
**Description:** Map or list view comparing compliance across facilities

**Visual expression of philosophy:**
- Card grid: each facility = card with status badge
- Comparison table: sortable by compliance score, alert count, last audit date
- Benchmark highlight: top-performing facility gets subtle green accent
- "Best Practice" callout: expandable section showing what top facility does differently

**Philosophy connection:** Asymmetric balance — different sized cards based on facility size/importance; not a rigid uniform grid.

---

### 7. Training Module Card (Concept)
**Description:** Staff training tracker with completion status and performance linkage

**Visual expression of philosophy:**
- Progress ring: circular progress indicator (completion %)
- Staff list: avatars + names + completion status
- Link to compliance: "Staff completing Training X have 12% higher compliance scores"

**Philosophy connection:** Empowerment not surveillance — frame training as a success enabler, not a disciplinary requirement.

---

### 8. Navigation (Sidebar)
**Description:** Persistent left-side navigation with icon + label

**Visual expression of philosophy:**
- Collapsed by default (icon-only): respects screen real estate
- Expand on hover (icon + label): discoverability
- Active state: teal background + white icon
- Structure: Dashboard / Equipment / Reports / Alerts / Training / Settings

**Philosophy connection:** Clean hierarchy; most users live on Dashboard, so don't force navigation to dominate the view.

---

## User Flows

### Flow 1: Morning Check-In (Director of Environmental Services)
**Goal:** Quick assessment of facility compliance status before shift starts

**Steps:**
1. **Land on Dashboard** → Hero metric immediately visible: "96% Compliant / 2 items need attention"
2. **Scan Alerts** → Right rail shows: "HIGH: Infusion Pump #47 PM due in 2 days"
3. **Check Trend** → Compliance graph shows steady 95-98% over last 30 days (visual reassurance)
4. **Take Action** → Click alert → "Schedule PM" button → Confirm → Alert cleared
5. **Done** → 30 seconds total, confidence restored

**Design elements:**
- Status hero (immediate answer)
- Alert feed (prioritized attention)
- One-click action (low friction)

---

### Flow 2: Audit Prep (Hospital Administrator)
**Goal:** Generate comprehensive audit report for upcoming Joint Commission inspection

**Steps:**
1. **Navigate to Reports** → Click "Audit Reports" in sidebar
2. **Configure Report** → Select date range: "Last 90 days" → Include: Equipment logs, Cleaning records, Staff qualifications
3. **Preview** → Sample report structure appears (verify completeness)
4. **Generate** → Click "Generate Report" → Processing animation (2 seconds) → PDF preview
5. **Download & Share** → Click "Download PDF" → Email to compliance team
6. **Done** → 2 minutes total vs. 20+ hours manual compilation

**Design elements:**
- Report generator (one-click simplicity)
- Preview pane (transparency)
- Professional PDF output (regulatory-ready)

---

### Flow 3: Multi-Location Benchmarking (Regional COO)
**Goal:** Identify underperforming facilities and share best practices across 5-facility health system

**Steps:**
1. **Navigate to Locations** → Multi-location dashboard loads
2. **Scan Comparison Table** → Facilities sorted by compliance score: Facility A (99%), Facility B (97%), Facility C (94%), Facility D (92%), Facility E (88%)
3. **Investigate Low Performer** → Click Facility E → Drill-down shows: High alert count, overdue PMs, low training completion
4. **Identify Best Practice** → Click Facility A → Expandable section: "Uses IoT sensors for auto-logging; 98% staff training completion"
5. **Share Best Practice** → Click "Share Best Practice" → Generate presentation slide → Email to all facility managers
6. **Done** → 5 minutes to identify problem and solution vs. days of manual analysis

**Design elements:**
- Multi-location dashboard (enterprise visibility)
- Benchmark highlighting (best practice identification)
- Asymmetric card layouts (visual interest)

---

### Flow 4: Equipment Maintenance Scheduling (Biomedical Technician)
**Goal:** Schedule preventive maintenance for equipment flagged by predictive alert

**Steps:**
1. **Receive Alert** → Dashboard shows: "MEDIUM: Ventilator #12 PM due in 7 days"
2. **View Equipment Details** → Click alert → Equipment card expands: Last PM 85 days ago, Next PM due in 7 days, Maintenance history (graph)
3. **Check Schedule** → Integrated calendar shows available slots
4. **Schedule PM** → Click "Schedule PM" → Select date/time → Assign technician → Confirm
5. **Verify** → Alert updates to "SCHEDULED: Ventilator #12 PM scheduled for [date]"
6. **Done** → 1 minute vs. manual spreadsheet hunting

**Design elements:**
- Alert card (proactive notification)
- Equipment detail card (transparency)
- One-click scheduling (low friction)

---

## Screens (MVP Prototype)

### Screen 1: Dashboard (Homepage)
**Primary focus of prototype**

**Layout:**
- **Top:** Hero compliance metric card (96% Compliant, 2 items need attention)
- **Mid-Left:** Compliance trend graph (30-day view)
- **Mid-Right:** Predictive alert feed (3-5 alerts with severity badges)
- **Lower-Left:** Equipment status summary (X equipment compliant, Y overdue, Z upcoming)
- **Lower-Right:** Quick actions (Generate Report, Schedule Maintenance, View Training)

**Philosophy expression:**
- Asymmetric layout (not rigid grid)
- Status → Insight → Action hierarchy
- Glanceable hero metric
- Transparent alert details

---

### Screen 2: Equipment Registry
**Comprehensive equipment list with status tracking**

**Layout:**
- **Top:** Filter bar (All / Compliant / Needs Attention / Overdue) + Search
- **Main:** Equipment status table (sortable columns)
- **Right Rail:** Selected equipment detail card (click row to populate)

**Philosophy expression:**
- Table with generous row height (breathing room)
- Status indicators (colored dots + labels)
- Sticky header on scroll

---

### Screen 3: Audit Report Generator
**One-click report creation interface**

**Layout:**
- **Top:** "Generate Audit Report" hero section with date range selector
- **Mid:** Report configuration options (Equipment logs, Cleaning records, Staff qualifications checkboxes)
- **Lower:** Preview pane showing sample report structure
- **Bottom:** Large coral CTA button: "Generate Report"

**Philosophy expression:**
- Generous whitespace around CTA (draws eye)
- Preview transparency (show what you'll get)
- Simple configuration (not overwhelming)

---

### Screen 4: Multi-Location Dashboard
**Enterprise view for regional health systems**

**Layout:**
- **Top:** Map view (if time) or card grid showing all facilities with status badges
- **Mid:** Comparison table (facilities sorted by compliance score)
- **Lower:** Best practice highlight section (expandable)

**Philosophy expression:**
- Asymmetric cards (varied sizes based on facility importance)
- Benchmark highlighting (green accent on top performer)
- Visual weight distribution (large map + compact table)

---

### Screen 5: Alert Details (Modal or Expandable)
**Deep dive into predictive alert with evidence and action**

**Layout:**
- **Top:** Alert summary (severity badge + icon + message)
- **Mid:** Evidence section (graph or table showing data supporting prediction)
- **Lower:** Recommended action (specific steps + one-click initiation button)

**Philosophy expression:**
- Transparency (show the evidence, not just the conclusion)
- Action-oriented (recommended steps are clear and specific)
- Depth without dramatics (modal overlay with soft shadow)

---

## Visual References

### Mood & Direction for Dev Agent

**What this should FEEL like:**
- **Calm competence:** Think Apple Health app meets financial dashboard — clean, confident, trustworthy
- **Breathing room:** Generous whitespace, elements that don't touch, visual rest between sections
- **Intentional asymmetry:** Not a Bootstrap grid; more like a magazine layout with varied rhythms
- **Soft depth:** Subtle shadows and elevation, not flat but not skeuomorphic
- **Nature-inspired status colors:** Forest greens, warm golds, soft corals — not traffic lights

**Competitive visual gaps (from research):**
- Most competitors use **cold blues and stark whites** (institutional feel) → We use **teal and warm off-whites** (approachable trust)
- Most competitors use **uniform grids** (rigid, bureaucratic) → We use **asymmetric balance** (dynamic, human)
- Most competitors hide details behind clicks (lack of transparency) → We show **evidence and context** upfront (transparency)

**NOT these:**
- ❌ Generic admin dashboard (DataTables + Bootstrap)
- ❌ Medical EMR aesthetic (dense, clinical, overwhelming)
- ❌ Gamified fitness app (too playful for compliance)
- ❌ Dark mode hacker aesthetic (wrong tone for healthcare)

**YES these:**
- ✅ Stripe dashboard (confident, clean, data-forward)
- ✅ Linear (asymmetric layouts, soft depth, purposeful whitespace)
- ✅ Apple Health (approachable medical data, nature-inspired colors)
- ✅ Notion (flexible layouts, transparent hierarchy)

---

## Accessibility & Inclusive Design

**Color contrast:**
- All text meets WCAG AA standards (4.5:1 for body, 3:1 for large text)
- Status indicators never rely on color alone (icon + text label + color)

**Keyboard navigation:**
- All interactive elements accessible via Tab
- Skip links for screen readers ("Skip to main content")
- Focus indicators visible and high-contrast

**Screen reader support:**
- Semantic HTML (proper heading hierarchy, landmark regions)
- ARIA labels for icon-only buttons
- Status announcements for dynamic content (alerts, report generation)

**Cognitive accessibility:**
- Clear visual hierarchy (one primary action per screen)
- Consistent patterns (buttons in same location across screens)
- Plain language (no jargon or acronyms without definition)

---

## Implementation Notes for Dev Agent

### Tech Stack Recommendations
- **HTML5** with semantic elements
- **CSS3** with Flexbox/Grid (no framework bloat unless needed)
- **Vanilla JavaScript** or lightweight library (Alpine.js) for interactions
- **Chart.js** or similar for graphs/visualizations
- **Responsive**: Mobile-first CSS with breakpoints at 768px, 1200px

### Key CSS Guidelines
- Use CSS custom properties for colors (easy theme switching)
- Box shadows: `box-shadow: 0 2px 8px rgba(10, 95, 90, 0.08);` for cards
- Border radius: 8px for cards, 6px for buttons (soft but not pill-shaped)
- Transitions: 200ms ease for hover states (responsive feel)

### Mock Data Strategy
- Equipment names: Use realistic medical equipment (Infusion Pump Model X, Ventilator Series Y)
- Dates: Use relative timestamps ("2 days ago", "Due in 5 days")
- Compliance scores: Vary between 85-99% (realistic range)
- Alerts: 3-5 visible at once, mix of severity levels
- Staff names: Generic but professional ("Dr. Martinez", "Tech J. Chen")

### Interactive Elements (RALPH Loop)
- Hover states on all buttons and cards (subtle teal background or elevation increase)
- Click to expand: alert cards, equipment details (smooth animation)
- Generate Report: Button → Loading state (2 sec) → Success message + PDF preview
- Compliance trend graph: Hover shows exact values, click changes time range (7d/30d/90d)

### Visual Polish Checklist
- [ ] All cards have consistent shadow and border-radius
- [ ] Typography scale is visually harmonious (no arbitrary sizes)
- [ ] Status colors are consistent across all components
- [ ] Whitespace is generous but not wasteful
- [ ] Mobile view maintains status hierarchy (hero metric still dominant)
- [ ] Loading states for async actions (report generation, data fetch)
- [ ] Empty states for lists ("No alerts — you're all clear!")
- [ ] Error states with recovery actions ("Report generation failed. Retry?")

---

## Design Philosophy Recap for Dev Agent

Before writing a single line of code, read the **Design Philosophy: "Clinical Confidence"** section at the top of this document. Every CSS decision should reference back to:

1. **Breathing room** → Generous padding, whitespace between elements
2. **Confidence over sterility** → Teal and greens, not blues and grays
3. **Glanceability** → Large hero metrics, obvious visual hierarchy
4. **Asymmetric stability** → Varied layouts, not rigid grids
5. **Transparency** → Show evidence, don't hide context

This isn't a generic Bootstrap dashboard. The design should feel like a **trusted colleague**—calm, competent, and always on your side.

---

*Design Specification completed: 2026-02-13*
*Informed by: PRD user needs, RESEARCH competitive visual analysis, Design Philosophy: Clinical Confidence*
