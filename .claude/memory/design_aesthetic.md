---
name: design_aesthetic
description: expense tracker visual design direction
metadata:
  type: project
---

Fact: Expense tracker uses an **editorial/luxury aesthetic** with refined typography (Playfair Display + Plus Jakarta Sans), warm neutral palette, and subtle gradients.

**Why:** Creates a premium, trustworthy feel appropriate for finance apps while avoiding generic "AI slop" purple gradients and Inter font.

**How to apply:** All styling now lives in `src/index.css` with CSS variables. Components use glassmorphism, tabular numeric fonts for amounts, and subtle hover animations. Keep new additions consistent with this direction.

Related: [[feedback_no_purple_gradients]] - Avoid clichéd purple-on-white gradients; use warm cream and navy instead.
