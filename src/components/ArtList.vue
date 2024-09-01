<template>
  <div>
    <h1 class="text-2xl">art List</h1>
    <div v-if="arts.length">
      <art-card v-for="art in arts" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ArtCard from './ArtCard.vue'

export default {
  components: { ArtCard },
  props: {
    arts: {
      type: Array,
      default: []
    }
  },
  setup({ arts }) {}
}
</script>

<style scoped></style>
