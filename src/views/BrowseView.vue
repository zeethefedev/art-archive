<template>
  <div>
    <filter-select />
    <art-list :artworks="artworks" />
    <div>{{ message }}</div>
  </div>
</template>

<script>
import ArtList from '@/components/ArtList.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { FilterSelect, ArtList },
  setup() {
    const store = useStore()
    const artworks = computed(() => store.state.artworks)
    const loading = computed(() => store.state.loading)
    const message = ref('')

    onMounted(() => {
      store.commit('resetArtWorks')
    })

    watch(loading, (loading) => {
      if (loading) {
        message.value = 'Loading...'
      } else {
        if (!artworks.value.length) {
          message.value = 'No data to display'
        } else {
          message.value = ''
        }
      }
    })

    return { artworks, message }
  }
}
</script>

<style scoped></style>
