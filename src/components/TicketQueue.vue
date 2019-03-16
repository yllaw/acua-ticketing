<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <!-- DYNAMIC PROFILES -->
      <v-flex v-for="(ticket, i) in fourtickets" :key="i" d-flex>
        <v-card hover>
          <v-card-title class="headline">
            <span v-if="i === 0">Ticket #{{ticket.id}}, please come up</span>
            <span v-else>Ticket #{{ticket.id}}</span>
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>Name:</v-list-tile-content>
                  <v-list-tile-content class="align-end font-weight-bold">{{ ticket.name }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Phone Number:</v-list-tile-content>
                  <v-list-tile-content class="align-end font-weight-bold">{{ ticket.phone }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Question:</v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn flat icon color="teal"  :disabled="i !== 0" @click="active = true">
                      <v-icon>
                        open_in_new
                      </v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Strikes:</v-list-tile-content>
                  <v-list-tile-content class="align-end font-weight-bold">{{ ticket.strikes }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
          </v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-btn flat color="error" :disabled="i !== 0" @click="strikeUser(ticket.id, ticket)">
              <span v-if="ticket.strikes < 2">Strike</span>
              <span v-else>Strike Out</span>
            </v-btn>
            <v-spacer/>
            <v-btn flat color="primary" :disabled="i !== 0" @click="resolve(ticket.id)">resolve</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- user's query -->
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="headline">
          Ticket #{{ fourtickets.length > 0 ? fourtickets[0].id : -1 }} Question
        </v-card-title>
        <v-card-text>
          {{ fourtickets.length > 0 ? fourtickets[0].query : '' }}
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary" @click="active = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Ticket } from '@/store/models'
import tickets from '@/store/modules/tickets'

@Component
export default class TicketQueue extends Vue {
  public active: boolean = false
  private tickets = tickets // ticket state manager

  public get fourtickets(): Ticket[] {
    return this.tickets.fourtickets
  }

  public strikeUser(id: number, ticket: Ticket): void {
    if (ticket.strikes < 2) {
      ticket.strikes++
      ticket.index += 5
      this.tickets.strikeTicket({ id, ticket }).then((res) => {
        this.tickets.loadTickets()
        this.tickets.ticketCount()
      })
    } else {
      this.tickets.resolve(id).then((res) => {
        this.tickets.loadTickets()
        this.tickets.ticketCount()
      })
    }
  }

  public resolve(id: number): void {
    this.tickets.resolve(id).then((res) => {
      this.tickets.loadTickets()
      this.tickets.ticketCount()
    })
  }
}
</script>

