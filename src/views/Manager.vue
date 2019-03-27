<template>
  <div>
    <div v-if="!tickets.ticketLoader">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12>
            <TicketCard/>
          </v-flex>
          <v-flex xs12>
            <TicketCount :timer="timer"/>
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
    <TicketQueue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TicketCard from '@/components/TicketCard.vue'
import TicketQueue from '@/components/TicketQueue.vue'
import TicketCount from '@/components/TicketCount.vue'
import tickets from '@/store/modules/tickets'
import users from '@/store/modules/users'

@Component({
  components: {
    TicketQueue,
    TicketCount,
    TicketCard
  }
})
export default class Manager extends Vue {
  public timer: number = 0
  private tickets  = tickets
  private users = users
  private polling: number | undefined = undefined
  private countdown: number | undefined = undefined

  public mounted(): void {
    tickets.loadTickets()
    tickets.ticketCount(this.users.user)
    this.pollData()
  }

  public beforeDestroy(): void {
    clearInterval(this.polling)
    clearInterval(this.countdown)
  }

  private pollData(): void {
    this.polling = setInterval(() => {
      tickets.ticketCount(this.users.user)
      if (tickets.xtickets.length === 0 && tickets.count > 0) {
        tickets.loadTickets()
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
