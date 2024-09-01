<template>
  <div class="flex gap-2">
    <label>
      <!-- Search -->
      <input :value="search" @input="handleChange" />
    </label>
    <button @click="$emit('search', search)">Search</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup() {
    const search = ref('')

    const handleChange = (event) => {
      search.value = event.target.value
    }

    onMounted(async () => {})

    return { search, handleChange }
  }
}
</script>

<style scoped></style>
