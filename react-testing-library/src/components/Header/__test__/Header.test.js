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

it('should render same text id', async () => {
  render(<Header title="My header" />)
  const headingElement = screen.getByTestId('header-1')
  expect(headingElement).toBeInTheDocument()
})

it('should render same text', async () => {
  render(<Header title="My header" />)
  const headingElement = await screen.findByText(/My header/)
  expect(headingElement).toBeInTheDocument()
})
