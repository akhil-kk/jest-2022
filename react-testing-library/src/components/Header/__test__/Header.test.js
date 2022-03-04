import { render, screen } from '@testing-library/react'
import Header from '../Header'

it('should render same text passd into title prop', async () => {
  render(<Header title="My header" />)
  const headingElement = screen.getByText(/My header/i)
  expect(headingElement).toBeInTheDocument()
})

it('should render same heading', async () => {
  render(<Header title="My header" />)
  const headingElement = screen.getByRole('heading')
  expect(headingElement).toBeInTheDocument()
})
