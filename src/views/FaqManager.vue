<template>
  <div>
    <div v-if="!faqs.faqLoader">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex d-flex xs6 offset-xs3>
            <FaqCard/>
          </v-flex>
          <!-- <v-flex d-flex xs6>
            <TicketCount :timer="timer"/>
          </v-flex>
          <v-flex d-flex xs6>
            <TicketLimit/>
          </v-flex> -->
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
import faqs from '@/store/modules/faqs'
import users from '@/store/modules/users'

@Component({
  components: {
    FaqCard,
    FaqQueue
  }
})
export default class FaqManager extends Vue {
  public faqs = faqs
  public users = users

  public mounted(): void {
    faqs.loadFaqs()
    faqs.faqCount(this.users.user)
  }
}
</script>
