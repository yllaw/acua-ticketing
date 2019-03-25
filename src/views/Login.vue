<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="teal">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit="login">
                <v-text-field color="teal" prepend-icon="person" name="login" label="Name" type="text" v-model="name"/>
                <v-text-field color="teal" id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"/>
              </v-form>
              <span class="error-text">
                {{loginError}}
              </span>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="teal" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class Login extends Vue {
  public name: string = ''
  public password: string = ''
  public loginError: string = ''

  public login(): void {
    users.login({
      name: this.name,
      password: this.password
    })
    .then(() => this.$router.push('/manager'))
    .catch((err) => {
      this.loginError = 'Invalid name or password'
    })
  }
}
</script>

<style scoped>
  .error-text {
    color: red;
  }
</style>

