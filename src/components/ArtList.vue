<template>
  <div>
    <div v-if="artworks.length" class="flex flex-wrap gap-4">
      <art-card v-for="art in artworks" :art="art" :key="art.id" :isSavedPage="isSavedPage" />
    </div>
  </div>
</template>

<script>
import ArtCard from './ArtCard.vue'

export default {
  components: { ArtCard },
  props: {
    artworks: {
      type: Array,
      default: []
    },
    isSavedPage: {
      type: Boolean,
      default: false
    }
  },
  setup({ artworks }) {}
}
</script>

<style scoped></style>
