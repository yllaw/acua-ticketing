import axios from 'axios'
import { Ticket, User } from './models'

export const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export async function fetchTickets(user: any): Promise<Ticket[]> {
  const order: string = 'filter[order]=index ASC'
  const where: string = `filter[where][and][0][location]=${user.location}`
  + `&filter[where][and][1][window]=${user.window}`
  const limit: string = 'filter[limit]=4'

  const response = await api.get(`/tickets?${order}&${where}&${limit}`)

  return response.data as Ticket[]
}

export async function fetchTotal(): Promise<number> {
  const response = await api.get('/tickets/count')

  return response.data.count as number
}

export async function removeTicket(id: number): Promise<void> {
  await api.delete(`tickets/${id}`)
}

export async function strikeTicket(id: number, ticket: Ticket): Promise<void> {
  await api.put(`tickets/${id}`, ticket)
}
