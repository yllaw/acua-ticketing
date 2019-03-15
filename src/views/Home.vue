<template>
  <div>
    <TicketQueue/>
    <TicketCount/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TicketQueue from '@/components/TicketQueue.vue'
import TicketCount from '@/components/TicketCount.vue'

@Component({
  components: {
    TicketQueue,
    TicketCount
  }
})
export default class Home extends Vue {}
</script>
