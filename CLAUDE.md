# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite finance tracker application (starter project). The app currently has all business logic in `src/App.jsx` with no component splitting. It tracks income/expenses with filtering by type and category.

## Architecture

**Single-file React app pattern:**
- `src/App.jsx` - Contains entire app: state, logic, and UI (transactions data, form, summary cards, filters, table)
- `src/main.jsx` - React entry point rendering App in root div
- `src/index.css` - Global styles
- No external components, services, or hooks yet

**State management:** useState for transactions array and form inputs (description, amount, type, category, filters)

**Styling approach:** CSS classes in `App.css` (currently referenced but not created in starter)

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
3. **Poor UI** - Minimal styling, uses basic form controls
4. **No validation** - Form accepts empty values
5. **Static category options** - Categories shown only in dropdowns
6. **No edit/delete** - Cannot modify or remove transactions

## Component Splitting Pattern

When refactoring, split App.jsx into:

- `src/components/TransactionForm.jsx` - Add transaction form
- `src/components/TransactionsList.jsx` - Table with filters
- `src/components/SummaryCards.jsx` - Income/expenses/balance cards
- `src/context/FinanceContext.jsx` - Shared state logic

## Data Model

```typescript
interface Transaction {
  id: number;
  description: string;
  amount: string;
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
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```
