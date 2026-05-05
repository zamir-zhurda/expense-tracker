# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite finance tracker application (starter project). The app currently has all business logic in `src/App.jsx` with no component splitting. It tracks income/expenses with filtering by type and category.

## Architecture

**Component-based React app:**
- `src/App.jsx` - Main container: holds state, calculates totals, renders child components
- `src/main.jsx` - React entry point rendering App in root div
- `src/index.css` - Global styles

**Components in `src/components/`:**

1. **Summary.jsx** - Displays income/expenses/balance summary cards. Self-contained with its own calculations.
2. **TransactionForm.jsx** - Form for adding new transactions. Receives state setters and submit handler as props.
3. **TransactionsList.jsx** - Displays filtered transactions table with filter dropdowns.

**State management:** useState in App for transactions array and form inputs (description, amount, type, category, filters)

**Styling approach:** Each component has its own CSS file (Summary.css, TransactionForm.css, TransactionsList.css) plus App.css for non-component styles.

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
```

## Test Commands

Tests are not currently set up. To add tests later:

```bash
# Install testing dependencies
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
# or
npx vitest
```

## Known Issues (Current Starter State)

1. **Hardcoded data** - Sample transactions in useState instead of local storage or API
2. **No persistence** - Transactions reset on page refresh
3. **No validation** - Form accepts empty values
4. **No edit/delete** - Cannot modify or remove transactions

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
