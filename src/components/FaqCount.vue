<template>
  <v-card color="teal" dark>
    <v-card-title class="headline">
      Next Update &nbsp;
      <v-progress-circular
        :rotate="-90"
        :size="50"
        :value="timer"
        dark
      >
        {{ 10 - (timer / 10) }}
      </v-progress-circular>
      <v-spacer/>
      <span v-if="faqCount !== 0">
        Faqs Remaining: {{faqCount}}
      </span>
      <span v-else>
        No Faqs In Queue
      </span>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import faqs from '@/store/modules/faqs'

@Component({
  props: {
    timer: Number
  }
})
export default class TicketCount extends Vue {
  private faqs = faqs // ticket state manager

  public get faqCount(): number {
    return faqs.count
  }
}
</script>
