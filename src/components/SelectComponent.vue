<template>
  <div>
    <div>{{ label }}</div>
    <select @change="$emit('change', $event)">
      <option v-for="option in options" :key="option" :value="option.id" @click="$emit('select')">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array
    }
  },
  setup({ options }) {}
}
</script>

<style scoped></style>
