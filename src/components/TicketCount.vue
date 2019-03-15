<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="teal" dark>
          <v-card-text class="headline">
            <span v-if="ticketCount !== 0">
              Tickets Remaining: {{ticketCount}}
            </span>
            <span v-else>
              No Tickets In Queue
            </span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Ticket from '@/models/Ticket'
import tickets from '@/store/modules/tickets'

@Component
export default class TicketCount extends Vue {
  private tickets = tickets // ticket state manager

  public get ticketCount(): number {
    return tickets.ticketCount
  }
}
</script>
