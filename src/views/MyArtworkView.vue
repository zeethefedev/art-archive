<template>
  <art-list :artworks="initialArtworks" />
  <button @click="handleSave">Save</button>
</template>

<script>
import ArtList from '@/components/ArtList.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { ArtList },
  setup() {
    const store = useStore()
    const artworks = computed(() => store.state.likedArtworks)
    const initialArtworks = computed(() => store.state.initialLikedArtworks)

    const handleSave = () => {
      store.commit('saveLike', artworks)
    }

    return { artworks, initialArtworks, handleSave }
  }
}
</script>

<style scoped></style>
