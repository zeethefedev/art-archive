<template>
  <div class="flex items-start gap-2">
    <div class="">
      <label>
        <input :value="search" @input="handleChange" />
      </label>
      <div v-if="message">{{ message }}</div>
    </div>
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
