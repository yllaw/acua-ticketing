export interface Ticket {
  id: number
  index: number
  phone: string
  name: string
  query: string
  location: string
  window: number
  strikes: number
  isComplete: boolean
}

export interface User {
  id: number
  token: string
  username: string
  window: number
  location: string
}

export interface UserSubmit {
  username: string
  password: string
}

export interface UserResponse {
  user: User
}
