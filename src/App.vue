<template>
  <v-app>
    <v-toolbar color="teal" dark app>
      <v-toolbar-title>ACUA Ticketing Manager</v-toolbar-title>
      <v-spacer/>
      <span v-if="username !== null">Welcome, {{ username }}</span>
      <template v-slot:extension v-if="username !== null">
        <v-tabs
          v-model="tab"
          color="teal"
          grow
        >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab to="/manager">
            Tickets
          </v-tab>
          <v-tab to="/faqs">
            FAQs
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import userModule from '@/store/modules/users'

@Component
export default class App extends Vue {

  public get username(): string | null {
    return userModule.username === null ? null : userModule.username
  }

}
</script>
