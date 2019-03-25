<template>
  <div>
    <h1>Welcome Home</h1>
    <router-link to="/login">
      <v-btn>Sign In</v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

