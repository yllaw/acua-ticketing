<template>
  <v-app>
    <v-toolbar color="teal" dark app>
      <v-toolbar-title>ACUA Ticketing Manager</v-toolbar-title>
      <v-spacer/>
      <span v-if="username !== null">
        Welcome, {{ username }}
        <v-tooltip bottom color="white">
          <template v-slot:activator="{ on }">
            <v-btn flat icon v-on="on" @click="logout">
              <v-icon>
                exit_to_app
              </v-icon>
            </v-btn>
          </template>
          <span class="teal--text">Logout</span>
        </v-tooltip>
      </span>
      <template v-slot:extension v-if="username !== null">
        <v-tabs
          color="teal"
          grow
        >
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab to="/manager/tickets">
            Tickets
          </v-tab>
          <v-tab to="/manager/faqs">
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
import { User } from '@/store/models'
import users from '@/store/modules/users'

@Component
export default class App extends Vue {
  private users = users

  private get user(): User | null {
    return this.users.currUser
  }

  public get username(): string | null {
    return this.users.username === null ? null : this.users.username
  }

  public logout(): void {
    this.users.logoutUser({user: this.user})
    this.users.logout()
    this.$router.push('/login')
  }

}
</script>
