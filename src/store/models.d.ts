export interface Ticket {
  id: string
  number: number
  index: number
  phone: string
  name: string
  query: string
  location: string
  window: number
  strikes: number
  isComplete: boolean
}

export interface Faq {
  id: number
  index: number
  query: string
  answer: string | null
  window: number
  isComplete: boolean
}

export interface User {
  id: string
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
