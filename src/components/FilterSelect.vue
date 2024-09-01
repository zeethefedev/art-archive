<template>
  <div>Filter</div>
  <select @change="handleChange">
    <option v-for="option in filterOptions" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
  <result-list :items="results" />
</template>

<script>
import { computed, ref } from 'vue'
import ResultList from './ResultList.vue'
import { useStore } from 'vuex'
import { FILTERS, filterToActions } from '@/service/utils'

export default {
  components: { ResultList },
  setup() {
    const filterOptions = ref(FILTERS)

    const store = useStore()
    const results = computed(() => store.state.results)

    const handleChange = async (event) => {
      const filterValue = event.target.value

      const filterAction = filterToActions[filterValue]

      store.dispatch(filterAction)
    }

    return { filterOptions, handleChange, results }
  }
}
</script>

<style scoped></style>
