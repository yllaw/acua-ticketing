<template>
  <div>
    <v-card hover v-if="queue.length > 0">
      <v-card-title class="headline">
        FAQ #{{faq.id}}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        {{faq.query}}
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-textarea
          v-model="answer"
          auto-grow
          color="teal"
          label="Answer"
          rows="1"
        ></v-textarea>
        <v-spacer/>
        <v-btn flat :disabled="!answer" color="primary" @click="answerFaq(faq.id, faq)">
          Answer
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Faq } from '@/store/models'
import users from '@/store/modules/users'
import faqs from '@/store/modules/faqs'

@Component
export default class FaqCard extends Vue {
  public answer: string = ''
  private users = users
  private faqs = faqs

  get queue(): Faq[] {
    return this.faqs.xFaqs
  }

  get faq(): Faq {
    return this.faqs.firstFaq
  }

  public answerFaq(id: number, faq: Faq): void {
    this.faqs.setLoader()

    this.faq.answer = this.answer

    this.faqs.answerFaq({ id, faq }).then((res) => {
      this.faqs.loadFaqs()
      faqs.faqCount(this.users.user)
      this.faqs.setLoader()
    })
  }
}
</script>
