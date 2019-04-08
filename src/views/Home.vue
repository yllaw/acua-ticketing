<template>
  <div app>
    <section>
      <v-parallax :src="require('@/assets/dog-photo-1.jpg')">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        >
          <router-link to="/login">
            <v-btn
              color="teal"
              dark
              large
            >
              Get Started
            </v-btn>
          </router-link>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">How to Manage Tickets and Faqs.</h2>
            <span class="subheading">
              easily and efficiently!
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent" min-height="410">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">verified_user</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Secure Sign In</div>
                  </v-card-title>
                  <v-card-text>
                    Login with your username and password to securely manage tickets and faqs.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent" min-height="410">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">local_play</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Manage Tickets</div>
                  </v-card-title>
                  <v-card-text>
                    <ul>
                      <li>
                        View and adjust the size of the ticket queue.
                      </li>
                      <li>
                        Updates every 10 seconds.
                      </li>
                      <li>
                        Click on the expand button to view the question ahead of time.
                      </li>
                      <li>
                        <b>Strike</b>: If a person does not come up to the front desk after calling for
                         him/her a few times, press the strike button to push them back 5 places. After
                          doing this 3 times, they will be removed and have to create a new ticket.
                      </li>
                      <li>
                        <b>Resolve</b>: You have successfully helped the owner of the ticket and can remove
                        the ticket.
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent" min-height="410">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">receipt</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Manage Faqs</div>
                  </v-card-title>
                  <v-card-text>
                    <ul>
                      <li>
                        View and adjust the size of the faq queue.
                      </li>
                      <li>
                        Updates every 10 seconds.
                      </li>
                      <li>
                        Fill out the answer to the question in the text field.
                      </li>
                      <li>
                        <b>Answer</b>: This will submit the answered question for the users of the
                         ACUA app to view.
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="require('@/assets/dog-photo-1.jpg')" height="380">
        <v-layout column align-center justify-center>
          <router-link to="/login">
            <v-btn
              color="teal"
              dark
              large
            >
              Get Started
            </v-btn>
          </router-link>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Powered By</div>
              </v-card-title>
              <v-img
                :src="require('@/assets/logo.png')"
              ></v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>California, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

