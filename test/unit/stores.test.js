import { get } from 'svelte/store'
import { count, increment } from '../../src/stores'

test('increment', () => {
  expect(get(count)).toBe(0)

  increment()

  expect(get(count)).toBe(1)
})