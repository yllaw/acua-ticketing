import { Faq, User } from '@/store/models'

const faqs: Faq[] = []

for (let i = 0; i < 20; i++) {
  faqs.push({
    query: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium?',
    answer: null,
    id: i,
    index: i,
    window: Math.round(Math.random()),
    isComplete: false
  })
}


export function fetchFaqs(user: any) {
  return new Promise<Faq[]>((resolve, reject) => {
    const location: Faq[] = faqs.filter((faq) => {
      return faq.window === user.window && faq.isComplete === false
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

export function fetchFaqTotal(user: any) {
  return new Promise<number>((resolve, reject) => setTimeout(() => resolve(
    faqs.filter((faq) => {
      return faq.window === user.window && faq.isComplete === false
    }).length
  )))
}

export function answerFaq(id: number, faq: Faq) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      for (const key in faqs) {
        if (faqs[key].id === id) {
          faqs[key].isComplete = true
          faqs[key].answer = faq.answer
          break
        }
      }
      resolve()
    }, 10)
  })
}
