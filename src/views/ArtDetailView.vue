<template>
  <art-detail v-if="artwork.id" :art="artwork" />
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ArtDetail from '@/components/ArtDetail.vue'

export default {
  components: { ArtDetail },
  setup() {
    // const router = useRouter()
    const route = useRoute()
    const id = route.params.id

    const store = useStore()
    const artwork = computed(() => store.state.currentArtwork)

    onMounted(() => {
      store.dispatch('getArtwork', id)
    })

    return { id, artwork }
  }
}
</script>

<style scoped></style>
