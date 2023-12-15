import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App';
import userEvent from '@testing-library/user-event'

async function addTodo() {
  const inputElement = screen.getByRole('textbox', { name: /add todo/i });
  const buttonElement = screen.getByRole('button', { name: /add/i });
  await userEvent.type(inputElement, 'New Todo')
  await userEvent.click(buttonElement)
}

describe('Add a new Todo', () => {
  it('Add a new Todo after clicking on add button', async () => {
    render(<App />);
    addTodo()
    await screen.findByText(/new todo/i)
  });
})

describe('Complete a Todo', () => {
  it('Complete a Todo', async () => {
    render(<App />);
    const item = screen.getByText(/new todo/i)
    await userEvent.click(item)
    await waitFor(() => {
      expect(item).toHaveClass('line-through')
    })
  });
})

describe('Delete a Todo clicking on delete button', () => {
  it('Delete a Todo', async () => {
    render(<App />);

    const deleteBtn = screen.getByRole('button', {
      name: /borrar/i
    })
    const item = screen.getByText(/new todo/i)
    await userEvent.click(deleteBtn)
    await waitFor(() => {
      expect(item).not.toBeInTheDocument()
    })
  });
})

