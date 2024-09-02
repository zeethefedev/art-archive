<template>
  <select-component :options="filterOptions" label="Filter" @change="handleChange" />
  <select-component
    v-if="results.length"
    :label="currentFilter"
    :options="results"
    @change="handleSelect"
  />
  <art-list :artworks="artworks" />
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { FILTERS } from '@/service/utils'
import SelectComponent from './SelectComponent.vue'
import ArtList from './ArtList.vue'

export default {
  components: { SelectComponent, ArtList },
  setup() {
    const filterOptions = ref(FILTERS)

    const store = useStore()
    const results = computed(() => store.state.results)
    const artworks = computed(() => store.state.artworks)

    const currentFilter = ref()

    const handleChange = async (event) => {
      store.commit('resetArtWorks')
      currentFilter.value = event.target.value

      store.dispatch('getTerms', currentFilter.value)
    }

    const handleSelect = (event) => {
      const value = event.target.value
      const search =
        currentFilter.value === 'artists' ? `[artist_ids]=${value}` : `[category_ids]=${value}`

      store.dispatch('searchBy', search)
    }

    return { filterOptions, handleChange, results, handleSelect, currentFilter, artworks }
  }
}
</script>

<style scoped></style>
