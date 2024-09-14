<template>
  <div>
    <filter-select />
    <date-picker v-if="results.length" />
    <art-list :artworks="artworks" />
    <div>{{ message }}</div>
  </div>
</template>

<script>
import ArtList from '@/components/ArtList.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import DatePicker from '@/components/DatePicker.vue'
export default {
  components: { FilterSelect, ArtList, DatePicker },
  setup() {
    const store = useStore()
    const artworks = computed(() => store.state.artworks)
    const results = computed(() => store.state.results)
    const loading = computed(() => store.state.loading)
    const message = ref('')

    onMounted(() => {
      store.commit('resetResults')
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

    return { artworks, message, results }
  }
}
</script>

<style scoped></style>
