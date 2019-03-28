import { Ticket, User } from '@/store/models'

const tickets: Ticket[] = [
  {
    phone: '(123) 456-7890',
    name: 'User 1',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 1,
    index: 1,
    location: 'Downey',
    window: 0,
    strikes: 0,
    isComplete: false
  },
  {
    phone: '(321) 456-7890',
    name: 'User 2',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 2,
    index: 2,
    location: 'Downey',
    window: 0,
    strikes: 0,
    isComplete: false
  },
  {
    phone: '(231) 456-7890',
    name: 'User 3',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 3,
    index: 3,
    location: 'Downey',
    window: 1,
    strikes: 0,
    isComplete: false
  },
  {
    phone: '(312) 456-7890',
    name: 'User 4',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 4,
    index: 4,
    location: 'Downey',
    window: 1,
    strikes: 0,
    isComplete: false
  },
  {
    phone: '(132) 456-7890',
    name: 'User 5',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 5,
    index: 5,
    location: 'Downey',
    window: 1,
    strikes: 0,
    isComplete: false
  },
  {
    phone: '(111) 456-7890',
    name: 'User 6',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: 6,
    index: 6,
    location: 'Other',
    window: 3,
    strikes: 0,
    isComplete: false
  }
]

for (let i = 10; i < 30; i++) {
  tickets.push({
    phone: '(132) 456-7890',
    name: 'User 5',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    id: i,
    index: i,
    location: 'Downey',
    window: Math.round(Math.random()),
    strikes: 0,
    isComplete: false
  })
}


export function fetchTickets(user: any) {
  return new Promise<Ticket[]>((resolve, reject) => {
    const location: Ticket[] = tickets.filter((ticket) => {
      return ticket.location === user.location
      && ticket.window === user.window
      && ticket.isComplete === false
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
    setTimeout(() => resolve(location.slice(0, 12)), 10)
  })
}

export function fetchTotal(user: any) {
  return new Promise<number>((resolve, reject) => setTimeout(() => resolve(
    tickets.filter((ticket) => {
      return ticket.location === user.location
      && ticket.window === user.window
      && ticket.isComplete === false
    }).length
  )))
}

export function removeTicket(id: number, ticket: Ticket) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      for (const key in tickets) {
        if (tickets[key].id === id) {
          tickets[key].isComplete = true
          break
        }
      }
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
