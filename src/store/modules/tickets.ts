import {
  getModule,
  Module,
  Mutation,
  Action,
  MutationAction,
  VuexModule
} from 'vuex-module-decorators'
import store from '@/store'
import { Ticket } from '../models'
import { fetchTickets, removeTicket } from '@/services/FakeTicketService'
// import { fetchTickets, removeTicket } from '../api'

@Module({
  namespaced: true,
  name: 'tickets',
  store,
  dynamic: true
})
class TicketsModule extends VuexModule {
  public tickets: Ticket[] = []
  public ticketLoader: boolean = false

  @MutationAction
  public async loadTickets() {
    const tickets: Ticket[] = await fetchTickets()
    return { tickets }
  }

  @Mutation
  public strikeUser(): void {
    const ticket: Ticket = this.tickets[0]

    if (ticket.strikes < 2) {
      ticket.strikes++
    }
  }

  @Action
  public async resolve(id: number) {
    await removeTicket(id)
  }

  @Mutation
  public setLoader() {
    this.ticketLoader = !this.ticketLoader
  }

  public get fourtickets(): Ticket[] {
    return this.tickets.slice(0, 4)
  }

  public get ticketCount(): number {
    return this.tickets.length
  }
}

export default getModule(TicketsModule)
