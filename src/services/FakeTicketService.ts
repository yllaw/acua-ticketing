import { Ticket } from '@/store/models'

let tickets: Ticket[] = [
  {
    phone: '(123) 456-7890',
    name: 'User 1',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 1,
    location: 'Downey',
    strikes: 0
  },
  {
    phone: '(321) 456-7890',
    name: 'User 2',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 2,
    location: 'Downey',
    strikes: 0
  },
  {
    phone: '(231) 456-7890',
    name: 'User 3',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 3,
    location: 'Downey',
    strikes: 0
  },
  {
    phone: '(312) 456-7890',
    name: 'User 4',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 4,
    location: 'Downey',
    strikes: 0
  },
  {
    phone: '(132) 456-7890',
    name: 'User 5',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 5,
    location: 'Downey',
    strikes: 0
  },
  {
    phone: '(111) 456-7890',
    name: 'User 6',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 6,
    location: 'Other',
    strikes: 0
  }
]


export function fetchTickets() {
  return new Promise<Ticket[]>((resolve, reject) => {
    setTimeout(() => resolve(tickets.filter((ticket) => ticket.location === 'Downey')), 10)
  })
}

export function removeTicket(id: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      tickets = tickets.filter((ticket) => ticket.id !== id)
      resolve()
    }, 10)
  })
}
