import axios from 'axios'
import { Ticket } from './models'

export const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export async function fetchTickets(): Promise<Ticket[]> {
  const response = await api.get('/tickets?filter[order]=name DESC&filter[where][location]=Downey')
  return response.data as Ticket[]
}

export async function removeTicket(id: number): Promise<void> {
  const response = await api.delete(`tickets/${id}`)
  return response.data as void
}
