# Design System Specification: High-End Security Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Sentinel**
This design system moves away from the "utility-only" look of traditional fintech. Instead, it adopts a "Sovereign Sentinel" aesthetic—a blend of high-end editorial layouts and advanced glassmorphism. It is designed to feel like a private digital vault: authoritative, impenetrable, yet deeply sophisticated.

By breaking the rigid, boxed-in grid of standard mobile apps, we use **intentional asymmetry** and **overlapping glass layers** to create a sense of depth and intelligence. We prioritize breathing room (whitespace) over lines, allowing the typography and tonal shifts to guide the user’s eye through complex financial data.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep, obsidian navies and charcoal, providing a high-contrast stage for vibrant, glowing action states.

### Surface Hierarchy & Nesting
We reject the flat UI. Depth is achieved through "Tonal Stacking."
- **Base Layer:** `surface` (#0b1326) – The foundation of the application.
- **Sectioning:** `surface_container_low` (#131b2e) – Use for large background regions.
- **Content Blocks:** `surface_container` (#171f33) – Use for primary interaction cards.
- **Interactive Elements:** `surface_container_high` (#222a3d) – Use for active or elevated states.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be established through:
1.  **Color Shifts:** Placing a `surface_container` card against a `surface` background.
2.  **Shadows:** Using the `surface_tint` to create ambient depth.
3.  **Negative Space:** Using the `Spacing Scale` (specifically `8` to `12`) to separate content clusters.

### The "Glass & Gradient" Rule
To instill a premium feel, floating headers and critical action modals must use **Glassmorphism**.
- **Recipe:** Apply `surface_variant` at 60% opacity with a `backdrop-blur` of 20px. 
- **CTAs:** Use a subtle linear gradient transitioning from `primary` (#adc6ff) to `primary_container` (#4d8eff) at a 135° angle. This adds a "lithic" soul to buttons that flat hex codes cannot achieve.

---

## 3. Typography: The Editorial Voice
We use a dual-typeface system to balance technical precision with premium authority.

*   **Display & Headlines (Manrope):** Chosen for its modern, geometric structure. Use `display-lg` and `headline-md` for large account balances or critical fraud alerts to command immediate attention.
*   **Body & UI (Inter):** Chosen for its legendary legibility at small sizes. Use `body-md` for transaction details and `label-sm` for timestamps and metadata.

**Hierarchy Strategy:** 
Use `on_surface_variant` (#c2c6d6) for secondary information to create a clear visual step-down from the high-contrast `on_surface` (#dae2fd) primary headers.

---

## 4. Elevation & Depth
In this system, elevation is a physical property of light and translucency.

*   **The Layering Principle:** Stack containers to show importance. An "Alert" card should be `surface_container_highest` placed over a `surface_dim` overlay.
*   **Ambient Shadows:** For floating elements, use a shadow with a 40px blur, 0% spread, and 6% opacity, tinted with the `primary` token. This mimics the soft glow of a high-end OLED display.
*   **The "Ghost Border" Fallback:** If a container requires more definition against a similar background, use `outline_variant` at **15% opacity**. Never use 100% opaque outlines.
*   **Glow States:** Active inputs or "Safe" status indicators should utilize a `0 0 15px` outer glow using `secondary` (success) or `primary` (active) to signify life and AI-activity.

---

## 5. Components

### Buttons
- **Primary:** Gradient-filled (`primary` to `primary_container`), `md` (1.5rem) corner radius. Internal padding: `spacing-4` (vertical) / `spacing-8` (horizontal).
- **Secondary (Glass):** `surface_variant` at 40% opacity with backdrop-blur. No border.
- **Critical (Fraud Alert):** `error_container` background with `on_error_container` text. High-contrast urgency.

### Input Fields
- **Styling:** `surface_container_highest` background. No border. 
- **Active State:** Add a 1px "Ghost Border" using `primary` at 40% and a subtle `primary` outer glow.
- **Error State:** Background shifts to a subtle 10% tint of `error`.

### Cards & Lists
- **Prohibition:** **No dividers.**
- **Implementation:** Group transactions by date using `spacing-6`. Each transaction is a `surface_container_low` block. Use `spacing-4` between items within a group.
- **Interaction:** On press, the card should scale down to 0.98 and increase in surface brightness to `surface_bright`.

### Additional Component: The "Security Pulse"
A custom component for this app. A small, glass-morphic pill at the top of the screen featuring a slow-pulsing `secondary` (Success Green) glow, signaling the AI is actively monitoring.

---

## 6. Do's and Don'ts

### Do
- **Do** use `md` (1.5rem) rounding for all main containers to maintain the "friendly but professional" feel.
- **Do** lean into the "Sovereign Sentinel" vibe by leaving large amounts of `spacing-12` at the top of screens.
- **Do** use `tertiary` (#ffb3ad) for non-critical warnings that require attention but aren't yet "fraud."

### Don't
- **Don't** use pure black (#000000). Always use the `surface` tokens to maintain the deep navy "premium" depth.
- **Don't** use 1px dividers. They break the fluid, glass-like immersion of the system.
- **Don't** clutter the screen. If an element isn't related to security or the current transaction, move it to a nested glass layer.

---

## 7. Spacing & Rhythm
Stick strictly to the 4px-based `Spacing Scale`. 
- **Internal Padding:** Use `spacing-5` or `6` for card internals.
- **External Margins:** Use `spacing-6` (1.5rem) for screen gutters to align with the `md` corner radius, creating a harmonious "echo" of shapes.