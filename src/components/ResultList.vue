<template>
  <div>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id" @click="$emit('click', item)">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  },
  setup({ items }) {
    return {}
  }
}
</script>

<style scoped></style>
