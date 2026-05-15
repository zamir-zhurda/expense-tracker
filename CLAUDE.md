# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite finance tracker application (starter project). The app currently has all business logic in `src/App.jsx` with no component splitting. It tracks income/expenses with filtering by type and category.

## Architecture

**Component-based React app:**
- `src/App.jsx` - Main container: holds state, calculates totals, renders child components
- `src/main.jsx` - React entry point rendering App in root div
- `src/index.css` - **All styles consolidated here**

**Components in `src/components/`:**

1. **Summary.jsx** - Displays income/expenses/balance summary cards
2. **TransactionForm.jsx** - Form for adding new transactions
3. **TransactionsList.jsx** - Displays filtered transactions table with filter dropdowns
4. **SpendingChart.jsx** - Bar chart showing expenses by category

**State management:** localStorage persistence in App for transactions array; form state in App (description, amount, type, category, filters)

**Styling approach:** All styles consolidated in `src/index.css` using CSS custom properties. Component CSS files exist for organization but reference global styles.

**Vite config:** Standard React plugin configuration in `vite.config.js`

## Commands

```bash
# Development
npm run dev          # Start Vite dev server at http://localhost:5173

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code quality
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Run tests, build, and push to staging
# Or use the custom skill: /deploy
```

## Test Commands

Tests are configured with vitest. To run tests:

```bash
npm test             # Run all tests
```

## Custom Deploy Skill

The `/deploy` command runs a custom deployment workflow that:
1. Runs all tests (`npm test`)
2. Builds the production bundle (`npm run build`)
3. Commits and pushes changes to the staging area

**Usage:** Simply type `/deploy` in the CLI to run the full deployment pipeline.

The skill automatically handles the entire deployment sequence, ensuring tests pass before pushing to the repository.

## Current State (Post-Redesign)

All critical issues have been resolved:

1. **Persistence** - localStorage saves transactions automatically on every change
2. **Validation** - Form requires non-empty description, valid positive amount
3. **Delete functionality** - Delete button with confirmation works
4. **Initial data** - Empty on first load, sample data added once via useEffect
5. **Empty states** - Transaction list shows "No transactions found" when empty

## Known Limitations

1. **No edit capability** - Can only add/delete transactions
2. **Native confirm dialogs** - Uses `window.confirm()` for delete confirmation (could be improved to custom modal)
3. **No chart threshold** - SpendingChart shows after 5+ expenses only
4. **Form state in parent** - TransactionForm receives individual props (could be refactored to single object prop)

## Design System

**Colors (CSS variables in index.css):**
- Primary: #1a1a2e (deep navy)
- Secondary: #f8f4e8 (warm cream)
- Accent Green: #2d5a27 (emerald)
- Accent Red: #8b2727 (burnt sienna)
- Accent Purple: #4a2e5a

**Typography:**
- Headings: Playfair Display (editorial/luxury)
- Body: Plus Jakarta Sans (clean, modern)

**Effects:**
- Glassmorphism on cards and forms
- Tabular numeric fonts for amounts
- Subtle gradient backgrounds
- Smooth fade-in animations

## Data Model

```typescript
interface Transaction {
  id: number;
  description: string;
  amount: number;  // Always stored as number (not string)
  type: 'income' | 'expense';
  category: string;
  date: string; // YYYY-MM-DD format
}
```

Valid categories: food, housing, utilities, transport, entertainment, salary, other

## File Structure

```
expense-tracker-starter/
├── src/
│   ├── components/
│   │   ├── Summary.jsx            # Summary cards component
│   │   ├── Summary.css            # Summary styles
│   │   ├── TransactionForm.jsx    # Add transaction form
│   │   ├── TransactionForm.css    # Form styles
│   │   ├── TransactionsList.jsx   # Transactions table with filters
│   │   └── TransactionsList.css   # Table styles
│   ├── App.jsx                   # Main app container
│   ├── App.css                   # App container styles
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
└── vite.config.js
```
