<template>
  <div>
    <div v-if="!tickets.ticketLoader">
      <TicketQueue/>
      <TicketCount :timer="timer"/>
    </div>
    <div class="text-xs-center" v-else>
      <v-progress-circular
        :size="100"
        :width="7"
        color="teal"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TicketQueue from '@/components/TicketQueue.vue'
import TicketCount from '@/components/TicketCount.vue'
import tickets from '@/store/modules/tickets'

@Component({
  components: {
    TicketQueue,
    TicketCount
  }
})
export default class Manager extends Vue {
  public timer: number = 0
  private tickets  = tickets
  private polling: number | undefined = undefined
  private countdown: number | undefined = undefined

  public mounted(): void {
    tickets.loadTickets()
    tickets.ticketCount()
    this.pollData()
  }

  public beforeDestroy(): void {
    clearInterval(this.polling)
    clearInterval(this.countdown)
  }

  private pollData(): void {
    this.polling = setInterval(() => {
      tickets.ticketCount()
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
