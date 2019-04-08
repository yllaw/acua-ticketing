<template>
  <div>
    <div v-if="!faqs.faqLoader">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex d-flex xs6 offset-xs3>
            <FaqCard/>
          </v-flex>
          <v-flex d-flex xs6>
            <FaqCount :timer="timer"/>
          </v-flex>
          <v-flex d-flex xs6>
            <FaqLimit/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="text-xs-center" v-else>
      <v-progress-circular
        :size="100"
        :width="7"
        color="teal"
        indeterminate
      ></v-progress-circular>
    </div>
    <FaqQueue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FaqCard from '@/components/FaqCard.vue'
import FaqQueue from '@/components/FaqQueue.vue'
import FaqLimit from '@/components/FaqLimit.vue'
import FaqCount from '@/components/FaqCount.vue'
import faqs from '@/store/modules/faqs'
import users from '@/store/modules/users'

@Component({
  components: {
    FaqCard,
    FaqQueue,
    FaqLimit,
    FaqCount
  }
})
export default class FaqManager extends Vue {
  public timer: number = 0
  public faqs = faqs
  public users = users
  private polling: number | undefined = undefined
  private countdown: number | undefined = undefined

  public mounted(): void {
    faqs.loadFaqs()
    faqs.faqCount(this.users.user)
    this.pollData()
  }

  public beforeDestroy(): void {
    clearInterval(this.polling)
    clearInterval(this.countdown)
  }

  private pollData(): void {
    this.polling = setInterval(() => {
      faqs.faqCount(this.users.user)
      if (faqs.xFaqs.length === 0 && faqs.count > 0) {
        faqs.loadFaqs()
      }
    }, 11000)

    this.countdown = setInterval(() => {
      if (this.timer === 100) {
        return (this.timer = 0)
      }
      this.timer += 10
    }, 1000)
  }
}
</script>
