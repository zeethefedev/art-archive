<template>
  <div v-if="open" class="overlay-wrapper">
    <div class="overlay max-h-[80vh] overflow-scroll hide-scrollbar">
      <button class="w-auto absolute top-11 right-11" @click="$emit('click')">
        <SVGIcon icon="close" viewBox="0 0 512 512" />
      </button>
      <div class="overlay-content"><slot></slot></div>
    </div>
  </div>
</template>

<script>
import SVGIcon from './SVGIcon.vue'

export default {
  components: { SVGIcon },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.overlay-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
  left: 0;
  /* center dialog overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.overlay {
  width: 50%;
  /* overflow: scroll; */
  background: var(--color-background);
  border-radius: 4px;
  border: 2px black solid;
  padding: 44px;
  transform: translate(-2px, -2px);
  border: 2px solid var(--color-border);
  color: var(--color-text);
}

.overlay-content {
  position: relative;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
