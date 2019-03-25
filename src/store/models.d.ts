export interface Ticket {
  id: number
  index: number
  phone: string
  name: string
  query: string
  location: string
  window: number
  strikes: number
}

export interface User {
  token: string
  name: string
  window: number
  location: string
}

export interface UserSubmit {
  name: string
  password: string
}

export interface UserResponse {
  user: User
}
