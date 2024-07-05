type UserData = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
}

type UserList = {
  users: UserData[]
  total: number
  skip: number
  limit: number
}

export const getUserDetail = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  const userData: UserData = await response.json()
  return userData
}

export const getUserList = async (skip = 0, limit = 10) => {
  const response = await fetch(
    `https://dummyjson.com/users/?skip=${skip}&limit=${limit}`
  )
  const userData: UserList = await response.json()
  return userData
}
