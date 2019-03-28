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
import userModule from './users'
import { fetchTickets, removeTicket, strikeTicket, fetchTotal } from '@/services/FakeTicketService'
// import { fetchTickets, removeTicket, strikeTicket, fetchTotal } from '../api'

@Module({
  namespaced: true,
  name: 'tickets',
  store,
  dynamic: true
})
class TicketsModule extends VuexModule {
  public tickets: Ticket[] = []
  public count: number = 0
  public limit: number = 4
  public ticketLoader: boolean = false

  @MutationAction
  public async loadTickets() {
    const tickets: Ticket[] = await fetchTickets(userModule.user)
    return { tickets }
  }

  @MutationAction
  public async ticketCount(user: any) {
    const count: number = await fetchTotal(user)
    return { count }
  }

  @Action
  public async strikeTicket({ id, ticket}: {id: number, ticket: Ticket}) {
    await strikeTicket(id, ticket)
  }

  @Action
  public async resolve({ id, ticket}: {id: number, ticket: Ticket}) {
    await removeTicket(id, ticket)
  }

  @Mutation
  public setLoader() {
    this.ticketLoader = !this.ticketLoader
  }

  @Mutation
  public setLimit(limit: number) {
    this.limit = limit
  }

  public get xtickets(): Ticket[] {
    return this.tickets.slice(0, this.limit)
  }

  public get firstTicket(): Ticket {
    return this.tickets[0]
  }
}

export default getModule(TicketsModule)
