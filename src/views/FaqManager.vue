<template>
  <div>
    <FaqQueue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FaqQueue from '@/components/FaqQueue.vue'

@Component({
  components: {
    FaqQueue
  }
})
export default class FaqManager extends Vue {

}
</script>
