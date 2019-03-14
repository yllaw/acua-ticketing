<template>
  <div>
    <TicketQueue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TicketQueue from '@/components/TicketQueue.vue';
import Ticket from '@/models/Ticket.ts';

@Component({
  components: {
    TicketQueue,
  },
})
export default class Home extends Vue {}
</script>
