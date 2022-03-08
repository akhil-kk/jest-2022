import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe('TodoFooter', () => {
  it('should render sthe correct amount of incomplete tasks', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={6} />)
    const paragraphElement = screen.getByText(/6 tasks left/i)
    expect(paragraphElement).toBeInTheDocument()
  })

  it('should render task when number is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />)
    const paragraphElement = screen.getByText(/1 task left/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})
