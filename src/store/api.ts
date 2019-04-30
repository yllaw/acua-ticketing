import axios from 'axios'
import { Ticket, UserSubmit, User, Faq } from './models'

export const api = axios.create({
  baseURL: 'https://acua-server.herokuapp.com/' // points to loopback server wherever hosted
})

/**
 * Ticket API calls
 */

export async function fetchTickets(user: any): Promise<Ticket[]> {
  const order: string = 'filter[order]=index ASC'
  const where: string = `filter[where][and][0][location]=${user.location}`
  + `&filter[where][and][1][window]=${user.window}`
  + `&filter[where][and][2][isComplete]=false`
  const limit: string = 'filter[limit]=12'

  const response = await api.get(`/tickets?${order}&${where}&${limit}`)

  return response.data as Ticket[]
}

export async function fetchTotal(user: any): Promise<number> {
  const where: string = `where[and][0][location]=${user.location}`
  + `&where[and][1][window]=${user.window}`
  + `&where[and][2][isComplete]=false`

  const response = await api.get(`/tickets/count?${where}`)

  return response.data.count as number
}

export async function removeTicket(id: number, update: any): Promise<void> {
  await api.patch(`tickets/${id}`, update)
}

export async function strikeTicket(id: number, ticket: Ticket): Promise<void> {
  await api.put(`tickets/${id}`, ticket)
}

/**
 * FAQ API calls
 */

export async function fetchFaqs(user: any): Promise<Faq[]> {
  const order: string = 'filter[order]=index ASC'
  const where: string = `&filter[where][and][1][window]=${user.window}`
  + `&filter[where][and][2][isComplete]=false`
  const limit: string = 'filter[limit]=12'

  const response = await api.get(`/faqs?${order}&${where}&${limit}`)

  return response.data as Faq[]
}

export async function fetchFaqTotal(user: any): Promise<number> {
  const where: string = `&where[and][1][window]=${user.window}`
  + `&where[and][2][isComplete]=false`

  const response = await api.get(`/faqs/count?${where}`)

  return response.data.count as number
}

export async function answerFaq(id: number, update: any): Promise<void> {
  await api.patch(`faqs/${id}`, update)
}

/**
 * User API calls
 */

export async function loginUser(userSubmit: UserSubmit): Promise<User> {
  const response = await api.patch('/users/login', userSubmit)

  return response.data as User
}

export async function logoutUser(user: any): Promise<void> {
  await api.patch('/users/logout', user)
}
