import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './ThemeToggle'

beforeEach(() => {
  document.documentElement.className = ''
  localStorage.clear()
})

test('toggling switch updates DOM class and localStorage', () => {
  render(<ThemeToggle />)
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(document.documentElement.classList.contains('dark')).toBe(true)
  expect(localStorage.getItem('theme')).toBe('dark')

  fireEvent.click(checkbox)
  expect(document.documentElement.classList.contains('dark')).toBe(false)
  expect(localStorage.getItem('theme')).toBe('light')
})
