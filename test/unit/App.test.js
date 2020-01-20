import { render, fireEvent } from '@testing-library/svelte'
import App from '../../src/App.svelte'

test('increment', async () => {
  const { container } = render(App)
  const button = container.querySelector('button')

  expect(button.textContent).toBe('0')

  await fireEvent.click(button)

  expect(button.textContent).toBe('1')
})