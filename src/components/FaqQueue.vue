<template>
  <v-navigation-drawer
    fixed
    right
    clipped
    app
  >
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="title text-xs-center">Window {{window}} Queue</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class TicketQueue extends Vue {
  private users = users

  public get window(): number | null {
    return this.users.window === null ? null : this.users.window + 1
  }
}
</script>
