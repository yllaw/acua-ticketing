<template>
  <v-app>
    <v-toolbar color="teal" dark app>
      <v-toolbar-title>ACUA Ticketing Manager</v-toolbar-title>
      <v-spacer/>
      <span v-if="user !== null">Welcome, {{ user.name }}</span>
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
  public user = userModule.user
}
</script>
