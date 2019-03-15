import Ticket from '@/models/Ticket'

let tickets: Ticket[] = [
  {
    phone: '(123) 456-7890',
    name: 'User 1',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 1,
    strikes: 0
  },
  {
    phone: '(321) 456-7890',
    name: 'User 2',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 2,
    strikes: 0
  },
  {
    phone: '(231) 456-7890',
    name: 'User 3',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 3,
    strikes: 0
  },
  {
    phone: '(312) 456-7890',
    name: 'User 4',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 4,
    strikes: 0
  },
  {
    phone: '(132) 456-7890',
    name: 'User 5',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 5,
    strikes: 0
  }
]


export function fetchTickets() {
  return new Promise<Ticket[]>((resolve, reject) => {
    setTimeout(() => resolve(tickets), 10)
  })
}

export function removeTicket(id: number) {
  return new Promise<Ticket[]>((resolve, reject) => {
    setTimeout(() => {
      tickets = tickets.filter((ticket) => ticket.id !== id)
      resolve(tickets)
    }, 10)
  })
}
