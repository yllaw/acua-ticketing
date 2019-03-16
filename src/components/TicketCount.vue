<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
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
            <span v-if="ticketCount !== 0">
              Tickets Remaining: {{ticketCount}}
            </span>
            <span v-else>
              No Tickets In Queue
            </span>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import tickets from '@/store/modules/tickets'

@Component({
  props: {
    timer: Number
  }
})
export default class TicketCount extends Vue {
  private tickets = tickets // ticket state manager

  public get ticketCount(): number {
    return tickets.count
  }
}
</script>
