import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app title', () => {
    render(<App />)
    expect(screen.getByText('Finance Tracker')).toBeInTheDocument()
  })

  it('renders the transaction form with inputs', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Amount')).toBeInTheDocument()
    expect(screen.getByText('Add Transaction')).toBeInTheDocument()
  })
})
