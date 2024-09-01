<template>
  <div class="flex gap-2">
    <label>
      <input :value="search" @input="handleChange" />
    </label>
    <div v-if="error">{{ message }}</div>
    <button @click="$emit('search', search)">Search</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  setup() {
    const search = ref('')

    const handleChange = (event) => {
      search.value = event.target.value
    }

    return { search, handleChange }
  }
}
</script>

<style scoped></style>
