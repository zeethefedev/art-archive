<template>
  <div>Filter</div>
  <select @change="handleChange">
    <option v-for="option in filterOptions" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const filterOptions = ref(['category', 'rating', 'status'])

    const handleChange = (event) => {
      console.log(event.target.value)
    }

    return { filterOptions, handleChange }
  }
}
</script>

<style scoped></style>
