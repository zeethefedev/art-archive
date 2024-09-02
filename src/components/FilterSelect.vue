<template>
  <div class="flex gap-6">
    <select-component :options="filterOptions" label="Browse By" @change="handleChange" />
    <select-component
      v-if="results.length"
      :label="currentFilter"
      :name="currentFilter"
      :options="results"
      @change="handleSelect"
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { FILTERS, filterToTerm } from '@/service/utils'
import SelectComponent from './SelectComponent.vue'

export default {
  components: { SelectComponent },
  setup() {
    const filterOptions = ref(FILTERS)
    const currentFilter = ref()

    const store = useStore()
    const results = computed(() => store.state.results)

    const handleChange = (event) => {
      store.commit('resetResults')
      store.commit('resetArtWorks')

      const filter = event.target.value
      currentFilter.value = filterToTerm[filter]

      store.dispatch('getTerms', filter)
    }

    const handleSelect = (event) => {
      const value = event.target.value
      const name = event.target.name

      const search = { [name]: value }

      store.dispatch('searchBy', search)
    }

    return { filterOptions, handleChange, results, handleSelect, currentFilter }
  }
}
</script>

<style scoped></style>
