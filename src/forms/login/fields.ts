import { createForm } from '@modular-forms/solid'

export type LoginForm = { username: string; password: string }

export type LoginFormKey = keyof LoginForm

export const [loginForm, { Form, Field }] = createForm<LoginForm>()
