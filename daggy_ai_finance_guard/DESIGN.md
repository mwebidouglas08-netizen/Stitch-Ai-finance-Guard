# Design System Strategy: Daggy AI Finance Guard

## 1. Overview & Creative North Star: "The Obsidian Vault"
The vision for this design system is **"The Obsidian Vault."** We are moving away from the cluttered, "dashboard-heavy" look of traditional fintech. Instead, we are creating a high-end editorial experience that feels like a private digital concierge. 

The aesthetic is defined by **Atmospheric Depth**. By utilizing the deep slate tones of our palette, we create a sense of infinite space where data doesn't just sit on a screen—it floats within a secure environment. We break the "template" look through **intentional asymmetry**: large, dramatic typography paired with generous white space and offset terminal-style labels. This design system is built to feel "armored" yet invisible, prioritizing clarity and trust through sophisticated layering rather than rigid boxes.

## 2. Color & Tonal Architecture
The palette is rooted in the deep slate of `#0b1326` (`surface`), providing a canvas that feels premium and focused.

*   **The "No-Line" Rule:** To achieve a high-end feel, designers are **strictly prohibited** from using 1px solid borders for sectioning. Separation must be achieved through background color shifts. For example, a `surface-container-low` section should sit directly against the `surface` background. This creates a "molded" look rather than a "sketched" one.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers.
    *   Base: `surface` (#0b1326)
    *   Secondary Areas: `surface-container-low` (#131b2e)
    *   Interactive Elements: `surface-container-high` (#222a3e)
*   **The Glass & Gradient Rule:** For primary actions and hero components, utilize the `primary-container` (#4d8eff) with a subtle linear gradient toward `primary` (#adc6ff). For floating overlays, use **Glassmorphism**: apply `surface-bright` at 60% opacity with a `20px` backdrop blur to allow the deep slate background to bleed through.
*   **Signature Accents:** Use `tertiary` (#ffb786) sparingly as a "Security Pulse"—only for high-priority alerts or "Guard" status indicators.

## 3. Typography: The Editorial Voice
We use **Manrope** for its geometric precision and modern legibility. In this design system, typography is an architectural element, not just content.

*   **Display Scale (Impact):** Use `display-lg` and `display-md` for high-level financial totals or "Guard Status" headlines. These should be set with tight letter-spacing (-0.02em) to feel authoritative.
*   **The Technical Label:** Use `label-sm` or `label-md` in uppercase with increased letter-spacing (+0.05em) for metadata and security timestamps. This adds a "high-tech" instrument feel.
*   **Contrast as Hierarchy:** Pair a `headline-lg` title with a `body-sm` description to create a sophisticated, editorial contrast that guides the eye toward the most critical financial data.

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for a modern dark-mode experience. We use **Tonal Layering** to convey importance.

*   **The Layering Principle:** Depth is achieved by stacking. A card should be `surface-container-highest` placed upon a `surface-container-low` background. This provides a soft, natural lift.
*   **Ambient Shadows:** If an element must "float" (like a modal), use an ultra-diffused shadow: `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow must never be pure black; it should feel like a deep blue-tinted void.
*   **The "Ghost Border" Fallback:** If a container requires a boundary for accessibility, use the `outline-variant` token at **15% opacity**. This creates a "whisper" of a line that defines the edge without cluttering the visual field.

## 5. Components

### Buttons & Interaction
*   **Primary:** A solid fill of `primary`. Use `on-primary` for text. Corner radius must be `md` (0.375rem) to maintain a balance between "tech" and "approachable."
*   **Secondary/Ghost:** No background fill. Use a `Ghost Border` (outline-variant at 20%) with `primary` text. This ensures the primary CTA remains the undisputed focus.

### Cards & Financial Lists
*   **Rule:** **Forbid divider lines.** 
*   Separate list items using `8px` of vertical space (`spacing-2`) and a subtle background shift to `surface-container-low` on hover. 
*   Cards should use the `xl` (0.75rem) roundedness to feel soft and approachable despite the "high-tech" color palette.

### Input Fields
*   Fields should use `surface-container-highest` as the background. 
*   The active state is indicated not by a thick border, but by a `2px` bottom-only glow using the `primary` color. This mimics a high-tech "scanning" interface.

### Security Indicators (Signature Component)
*   Unique to this system: Small "Guard Glows." Use a `6px` circular pulse of `primary` with a soft outer glow to indicate real-time AI monitoring.

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts where the left column is significantly wider than the right to create an editorial feel.
*   **Do** use `primary-fixed-dim` for secondary text that needs to remain legible but not distracting.
*   **Do** lean into the "Obsidian" aesthetic—let the dark spaces breathe. Use `spacing-16` or `spacing-20` between major sections.

### Don't:
*   **Don't** use pure white (#ffffff). Always use `on-surface` or `primary-fixed` to keep the dark-mode harmony.
*   **Don't** use standard 1px borders. If you feel you need a line, use a background color change instead.
*   **Don't** use "vibrant" colors for everything. Save the `primary` blue for moments of "Action" or "Security." Everything else should be tonal.
*   **Don't** clutter the screen. If the information isn't vital to the "Finance Guard" mission, hide it in a "More Details" glassmorphic tray.

---
*Document produced by the UI/UX Director for the Daggy AI Finance Guard initiative.*