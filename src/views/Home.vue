<template>
  <div>
    <TicketQueue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TicketQueue from '@/components/TicketQueue.vue'

@Component({
  components: {
    TicketQueue
  }
})
export default class Home extends Vue {}
</script>
