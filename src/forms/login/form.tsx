import { SubmitHandler, required } from '@modular-forms/solid'
import { createSignal, Show } from 'solid-js'
import { useNavigate } from '@solidjs/router'

import { LoginForm, Form, Field } from './fields'

const [error, setError] = createSignal('')

export const FormLogin = () => {
  const navigate = useNavigate()

  const handleSubmit: SubmitHandler<LoginForm> = async (value, event) => {
    console.log({ value, event })
    navigate
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Show when={error()}>{error()}</Show>
        <Field name="username" validate={[required('required')]}>
          {(fieldStore, elementProps) => {
            if (fieldStore.error) setError('Something wrong')
            return <input {...elementProps} required />
          }}
        </Field>
        <Field name="password" validate={[required('required')]}>
          {(_fieldStore, elementProps) => {
            return <input {...elementProps} required type="password" />
          }}
        </Field>
        <button type="submit">Login</button>
      </Form>
    </>
  )
}
