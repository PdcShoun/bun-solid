import { createSignal } from 'solid-js'

export const Counter = () => {
  const [count, setCount] = createSignal(0)
  return (
    <>
      <div class="counter"></div>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
      <p>Count: {count()}</p>
    </>
  )
}
