import axios from 'axios'
import { Ticket, User } from './models'

export const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

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
