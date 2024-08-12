export { FormLogin } from './form'

const test = {
  test: 'test',
  num: 123,
} as const

type Test = keyof typeof test

