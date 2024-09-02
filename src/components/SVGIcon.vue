<template>
  <div>
    <svg :viewBox="viewBox" :fill="fill" :height="height" :width="width" v-html="iconElement"></svg>
  </div>
</template>

<script>
import { ICONS } from '@/service/utils'

export default {
  props: {
    viewBox: { type: String, default: '0 0 1024 1024' },
    fill: { type: String, default: 'currentColor' },
    icon: { type: String, default: '' },
    height: { type: String, default: '1em' },
    width: { type: String, default: '1em' }
  },
  setup({ icon }) {
    const match = Object.entries(ICONS).find((ic) => ic[0] === icon)

    const iconElement = match && match[1].render

    return { match, iconElement }
  }
}
</script>

<style scoped></style>
