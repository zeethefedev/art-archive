<template>
  <div>
    <h1 class="text-2xl">Manga List</h1>
    <div v-if="mangas.length">
      <manga-card v-for="manga in mangas" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import MangaCard from './MangaCard.vue'

export default {
  components: { MangaCard },
  props: {
    mangas: {
      type: Array,
      default: []
    }
  },
  setup({ mangas }) {}
}
</script>

<style scoped></style>
