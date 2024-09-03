<template>
  <art-detail v-if="artwork.id" :art="artwork" />
  <div>{{ message }}</div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ArtDetail from '@/components/ArtDetail.vue'

export default {
  components: { ArtDetail },
  setup() {
    const route = useRoute()
    const id = route.params.id

    const store = useStore()
    const artwork = computed(() => store.state.currentArtwork)
    const loading = computed(() => store.state.loading)
    const message = ref('')

    onMounted(() => {
      store.dispatch('getArtwork', id)
    })

    watch(loading, (loading) => {
      if (loading) {
        message.value = 'Loading...'
      } else {
        if (!artwork.value.id) {
          message.value = 'No data to display'
        } else {
          message.value = ''
        }
      }
    })

    return { id, artwork, message }
  }
}
</script>

<style scoped></style>
