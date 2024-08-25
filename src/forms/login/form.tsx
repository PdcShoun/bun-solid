import { SubmitHandler, required } from '@modular-forms/solid'
import { createSignal, Show } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { LoginForm, Form, Field } from './fields'

export const FormLogin = () => {
  const [error, setError] = createSignal('')
  const navigate = useNavigate()

  const handleSubmit: SubmitHandler<LoginForm> = async (value, event) => {
    console.log({ value, event, navigate })
    navigate
  }

  return (
    <>
      <Card class="mb-4 w-[380px] p-8">
        <Form onSubmit={handleSubmit} class="">
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
          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </>
  )
}
