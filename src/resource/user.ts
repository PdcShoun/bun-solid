export type UserData = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  email: string
  username: string
  password: string
}

export type UserList = {
  users: UserData[]
  total: number
  skip: number
  limit: number
}

export const getUserDetail = async (id: string) => {
  const response = await fetch(`/api/users/${id}`)
  const userData: UserData = await response.json()
  return userData
}

export const getUserList = async (page: number) => {
  const limit = 10
  const skip = limit * (page - 1)
  console.log(skip, limit)
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch(`/api/users?skip=${skip}&limit=${limit}`)
  const userData: UserList = await response.json()
  return userData
}
