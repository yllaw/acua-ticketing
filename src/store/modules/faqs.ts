import {
  getModule,
  Module,
  Mutation,
  Action,
  MutationAction,
  VuexModule
} from 'vuex-module-decorators'
import store from '@/store'
import { Faq } from '../models'
import userModule from './users'
import { fetchFaqs, answerFaq, fetchTotal } from '@/services/FakeFaqService'
// import { fetchTickets, removeTicket, strikeTicket, fetchTotal } from '../api'

@Module({
  namespaced: true,
  name: 'faqs',
  store,
  dynamic: true
})
class FaqsModule extends VuexModule {
  public faqs: Faq[] = []
  public count: number = 0
  public limit: number = 4
  public faqLoader: boolean = false

  @MutationAction
  public async loadFaqs() {
    const faqs: Faq[] = await fetchFaqs(userModule.user)
    return { faqs }
  }

  @MutationAction
  public async faqCount(user: any) {
    const count: number = await fetchTotal(user)
    return { count }
  }

  @Action
  public async answerFaq({ id, faq}: {id: number, faq: Faq}) {
    await answerFaq(id, faq)
  }

  @Mutation
  public setLoader() {
    this.faqLoader = !this.faqLoader
  }

  @Mutation
  public setLimit(limit: number) {
    this.limit = limit
  }

  public get xFaqs(): Faq[] {
    return this.faqs.slice(0, this.limit)
  }

  public get firstFaq(): Faq {
    return this.faqs[0]
  }
}

export default getModule(FaqsModule)
