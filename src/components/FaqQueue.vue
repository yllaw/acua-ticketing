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
    <v-list dense v-for="(faq, i) in queue" :key="i">
      <v-list-tile v-if="i === 0">
        <v-list-tile-action>
          <v-icon>receipt</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Faq #{{faq.id}} (Current)</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-else>
        <v-list-tile-action>
          <v-icon>receipt</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Faq #{{faq.id}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense v-if="queue.length === 0">
      <v-list-tile-content>
        <v-list-tile-title class="text-xs-center">No Faqs</v-list-tile-title>
      </v-list-tile-content>
    </v-list>
    <v-list dense v-if="queue.length > 0 && remaining > 0">
      <v-subheader>+ {{remaining}} more</v-subheader>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Faq } from '@/store/models'
import faqs from '@/store/modules/faqs'
import users from '@/store/modules/users'

@Component
export default class TicketQueue extends Vue {
  private faqs = faqs
  private users = users

  public get queue(): Faq[] {
    return this.faqs.xFaqs
  }

  public get faq(): Faq {
    return this.faqs.firstFaq
  }

  public get remaining(): number {
    return this.faqs.count - this.faqs.limit
  }

  public get window(): number | null {
    return this.users.window === null ? null : this.users.window + 1
  }
}
</script>
