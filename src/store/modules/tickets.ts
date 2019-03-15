import {
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators'
import store from '@/store'
import { Ticket } from '../models'

@Module({
  namespaced: true,
  name: 'tickets',
  store,
  dynamic: true
})
class TicketsModule extends VuexModule {

  public tickets: Ticket[] = [
    {
      phone: '(123) 456-7890',
      name: 'User 1',
      query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
      ticketId: 1,
      strikes: 0
    },
    {
      phone: '(321) 456-7890',
      name: 'User 2',
      query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
      ticketId: 2,
      strikes: 0
    },
    {
      phone: '(231) 456-7890',
      name: 'User 3',
      query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
      ticketId: 3,
      strikes: 0
    },
    {
      phone: '(312) 456-7890',
      name: 'User 4',
      query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
      ticketId: 4,
      strikes: 0
    },
    {
      phone: '(132) 456-7890',
      name: 'User 5',
      query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
      ticketId: 5,
      strikes: 0
    }
  ]

  @Mutation
  public strikeUser(ticket: Ticket): void {
    this.tickets.shift()

    if (ticket.strikes < 2) {
      ticket.strikes++
      this.tickets.splice(4, 0, ticket)
    }
  }

  @Mutation
  public resolve(): void {
    this.tickets.shift()
  }

  public get fourtickets(): Ticket[] {
    return this.tickets.slice(0, 4)
  }

  public get ticketCount(): number {
    return this.tickets.length
  }
}

export default getModule(TicketsModule)
