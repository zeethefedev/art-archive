<template>
  <div class="w-full">
    <div class="capitalize">{{ label }}</div>
    <select @change="$emit('change', $event)" class="w-full" :name="name">
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
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup({ options }) {}
}
</script>

<style scoped></style>
