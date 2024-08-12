export type UserData = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
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
  const skip = limit * page
  const response = await fetch(`/api/users?skip=${skip}&limit=${limit}`)
  const userData: UserList = await response.json()
  return userData
}
