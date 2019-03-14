<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <!-- DYNAMIC PROFILES -->
      <v-flex v-for="(ticket, i) in fourtickets" :key="i" d-flex>
        <v-card>
          <v-card-title class="headline">
            <span v-if="i === 0">Ticket #{{ticket.ticketId}}, please come up</span>
            <span v-else>Ticket #{{ticket.ticketId}}</span>
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
                  <v-list-tile-action><v-icon color="teal"  :disabled="i !== 0" @click="active = true">
                    open_in_new
                  </v-icon></v-list-tile-action>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Strikes:</v-list-tile-content>
                  <v-list-tile-content class="align-end font-weight-bold">{{ ticket.strikes }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
          </v-card-text>
          <v-divider/>
          <v-card-actions>
            <v-btn flat color="error" :disabled="i !== 0" @click="strikeUser(ticket)">
              <span v-if="ticket.strikes < 2">Strike</span>
              <span v-else>Strike Out</span>
            </v-btn>
            <v-spacer/>
            <v-btn flat color="primary" :disabled="i !== 0" @click="resolve">resolve</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- user's query -->
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="headline">
          Ticket #{{ tickets.length > 0 ? tickets[0].ticketId : -1 }} Question
        </v-card-title>
        <v-card-text>
          {{ tickets.length > 0 ? tickets[0].query : '' }}
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary" @click="active = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Ticket from '@/models/Ticket.ts';

@Component
export default class TicketQueue extends Vue {
  public q: string = '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
    + 'doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto '
    + 'beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut'
    + ' fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam'
    + ' est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi'
    + ' tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis'
    + ' nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    + ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, '
    + 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"';

  public tickets: Ticket[] = [
    new Ticket('(123) 456-7890', 'User 1', this.q, 1),
    new Ticket('(321) 456-7890', 'User 2', this.q, 2),
    new Ticket('(231) 456-7890', 'User 3', this.q, 3),
    new Ticket('(312) 456-7890', 'User 4', this.q, 4),
    new Ticket('(132) 456-7890', 'User 5', this.q, 5),
  ];

  public active: boolean = false;

  public strikeUser(ticket: Ticket): void {
    this.tickets.shift();

    if (ticket.strikes < 2) {
      ticket.strikes++;
      this.tickets.splice(4, 0, ticket);
    }
  }

  public resolve(): void {
    this.tickets.shift();
  }

  public get fourtickets(): Ticket[] {
    return this.tickets.slice(0, 4);
  }
}
</script>

