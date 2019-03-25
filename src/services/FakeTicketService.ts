import { Ticket, User } from '@/store/models'

let tickets: Ticket[] = [
  {
    phone: '(123) 456-7890',
    name: 'User 1',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 1,
    index: 1,
    location: 'Downey',
    window: 0,
    strikes: 0
  },
  {
    phone: '(321) 456-7890',
    name: 'User 2',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 2,
    index: 2,
    location: 'Downey',
    window: 0,
    strikes: 0
  },
  {
    phone: '(231) 456-7890',
    name: 'User 3',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 3,
    index: 3,
    location: 'Downey',
    window: 1,
    strikes: 0
  },
  {
    phone: '(312) 456-7890',
    name: 'User 4',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 4,
    index: 4,
    location: 'Downey',
    window: 1,
    strikes: 0
  },
  {
    phone: '(132) 456-7890',
    name: 'User 5',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 5,
    index: 5,
    location: 'Downey',
    window: 1,
    strikes: 0
  },
  {
    phone: '(111) 456-7890',
    name: 'User 6',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 6,
    index: 6,
    location: 'Other',
    window: 3,
    strikes: 0
  }
]


export function fetchTickets(user: any) {
  return new Promise<Ticket[]>((resolve, reject) => {
    const location: Ticket[] = tickets.filter((ticket) => {
      return ticket.location === user.location && ticket.window === user.window
    })
    location.sort((a, b) => {
      if (a.index > b.index) {
        return 1
      } else if (b.index > a.index) {
        return -1
      } else {
        return 0
      }
    })
    setTimeout(() => resolve(location.slice(0, 4)), 10)
  })
}

export function fetchTotal() {
  return new Promise<number>((resolve, reject) => setTimeout(() => resolve(tickets.length)))
}

export function removeTicket(id: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      tickets = tickets.filter((ticket) => ticket.id !== id)
      resolve()
    }, 10)
  })
}

export function strikeTicket(id: number, ticket: Ticket) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const index = tickets.findIndex((t) => t.id === id)
      tickets[index] = ticket
      resolve()
    }, 10)
  })
}
