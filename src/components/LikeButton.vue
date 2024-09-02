<template>
  <SVGIcon @click="$emit('click')" icon="heart" width="2em" height="2em" />
</template>

<script>
import SVGIcon from './SVGIcon.vue'
export default {
  components: { SVGIcon },
  setup() {}
}
</script>

<style scoped></style>
