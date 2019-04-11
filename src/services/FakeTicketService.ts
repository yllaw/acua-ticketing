import { Ticket, User } from '@/store/models'

const tickets: Ticket[] = []

for (let i = 0; i < 30; i++) {
  tickets.push({
    id: 'alsdnfklaneg',
    phone: '(132) 456-7890',
    name: 'User 5',
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    number: i,
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

export function removeTicket(num: number, ticket: Ticket) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      for (const key in tickets) {
        if (tickets[key].number === num) {
          tickets[key].isComplete = true
          break
        }
      }
      resolve()
    }, 10)
  })
}

export function strikeTicket(num: number, ticket: Ticket) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const index = tickets.findIndex((t) => t.number === num)
      tickets[index] = ticket
      resolve()
    }, 10)
  })
}
