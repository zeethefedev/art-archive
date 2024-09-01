<template>
  <div>
    <h1 class="text-2xl">art List</h1>
    <div v-if="artworks.length">
      <art-card v-for="art in artworks" :art="art" :key="art.id" />
    </div>
    <div v-else>No data to display</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ArtCard from './ArtCard.vue'

export default {
  components: { ArtCard },
  props: {
    artworks: {
      type: Array,
      default: []
    }
  },
  setup({ artworks }) {}
}
</script>

<style scoped></style>
