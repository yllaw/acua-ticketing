<template>
  <v-app>
    <v-toolbar color="teal" dark app>
      <v-toolbar-title>ACUA Ticketing Manager</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style>
</style>
