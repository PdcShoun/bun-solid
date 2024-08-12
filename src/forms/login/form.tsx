import { SubmitHandler, required } from '@modular-forms/solid'
import { createSignal, Show } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { LoginForm, Form, Field } from './fields'

const [error, setError] = createSignal('')

export const FormLogin = () => {
  const navigate = useNavigate()

  const handleSubmit: SubmitHandler<LoginForm> = async (value, event) => {
    console.log({ value, event, navigate })
    navigate
  }

  return (
    <>
      <div class="w-full max-w-xs">
        <Form
          onSubmit={handleSubmit}
          class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
        >
          <Show when={error()}>{error()}</Show>
          <Field name="username" validate={[required('required')]}>
            {(fieldStore, elementProps) => {
              if (fieldStore.error) setError('Something wrong')
              return (
                <div class="mb-4">
                  <label
                    class="mb-2 block text-sm font-bold text-gray-700"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    {...elementProps}
                    required
                    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              )
            }}
          </Field>
          <Field name="password" validate={[required('required')]}>
            {(_fieldStore, elementProps) => {
              return (
                <div class="mb-6">
                  <label
                    class="mb-2 block text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    {...elementProps}
                    required
                    type="password"
                    class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  />
                </div>
              )
            }}
          </Field>
          <button
            class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Login
          </button>
        </Form>
      </div>
    </>
  )
}
