<template>
  <div>
    <!-- Current Ticket -->
    <v-card hover v-if="queue.length > 0">
      <v-card-title class="headline">
        Ticket #{{ticket.id}}
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
                <v-btn flat icon color="teal" @click="active = true">
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
        <v-btn flat color="error" @click="strikeUser(ticket.id, ticket)">
          <span v-if="ticket.strikes < 2">Strike</span>
          <span v-else>Strike Out</span>
        </v-btn>
        <v-spacer/>
        <v-btn flat color="primary" @click="resolve(ticket.id, ticket)">resolve</v-btn>
      </v-card-actions>
    </v-card>
    <!-- user's query -->
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="headline">
          Ticket #{{ queue.length > 0 ? ticket.id : -1 }} Question
        </v-card-title>
        <v-card-text>
          {{ queue.length > 0 ? ticket.query : '' }}
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary" @click="active = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Ticket } from '@/store/models'
import tickets from '@/store/modules/tickets'
import users from '@/store/modules/users'

@Component
export default class TicketQueue extends Vue {
  public active: boolean = false
  private tickets = tickets // ticket state manager
  private users = users

  public get queue(): Ticket[] {
    return this.tickets.xtickets
  }

  public get ticket(): Ticket {
    return this.tickets.firstTicket
  }

  public strikeUser(id: number, ticket: Ticket): void {
    this.tickets.setLoader()

    if (ticket.strikes < 2) {
      ticket.strikes++
      ticket.index += 5
      this.tickets.strikeTicket({ id, ticket }).then((res) => {
        this.tickets.loadTickets()
        tickets.ticketCount(this.users.user)
        this.tickets.setLoader()
      })
    } else {
      ticket.isComplete = true
      this.tickets.resolve({ id, ticket }).then((res) => {
        this.tickets.loadTickets()
        tickets.ticketCount(this.users.user)
        this.tickets.setLoader()
      })
    }
  }

  public resolve(id: number, ticket: Ticket): void {
    this.tickets.setLoader()

    ticket.isComplete = true
    this.tickets.resolve({ id, ticket }).then((res) => {
      this.tickets.loadTickets()
      tickets.ticketCount(this.users.user)
      this.tickets.setLoader()
    })
  }
}
</script>

