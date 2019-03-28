<template>
  <v-card>
    <v-card-text>
      <v-slider
        v-model="limit"
        step="1"
        thumb-label
        label="Queue Size: "
        ticks
        min="4"
        max="12"
        color="teal"
      ></v-slider>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import tickets from '@/store/modules/tickets'

@Component
export default class TicketLimit extends Vue {
  // public limit: number = 4
  private tickets = tickets // ticket state manager

  public set limit(val: number) {
    tickets.setLimit(val)
  }

  public get limit(): number {
    return tickets.limit
  }
}
</script>

