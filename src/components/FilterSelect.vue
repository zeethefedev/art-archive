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
import { fetchCategories } from '@/service/api'
import { ref } from 'vue'
import ResultList from './ResultList.vue'

export default {
  components: { ResultList },
  setup() {
    const filterOptions = ref(['category', 'artist', 'style'])
    const results = ref([])
    const handleChange = async (event) => {
      const filterValue = event.target.value

      switch (filterValue) {
        case 'category':
          results.value = await fetchCategories()
          break
        case 'artist':
          break
        case 'style':
          break
      }
    }

    return { filterOptions, handleChange, results }
  }
}
</script>

<style scoped></style>
