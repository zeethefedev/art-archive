<template>
  <div v-if="art" @click="handleClickArt">{{ art.title }}</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    art: {
      type: Object
    }
  },
  setup({ art }) {
    const artData = ref(art)
    const router = useRouter()

    const handleClick = (art) => {
      const { id } = art
    }

    const handleClickArt = () => {
      router.push({ path: `art/${art.id}` })
    }

    return { artData, handleClick, handleClickArt }
  }
}
</script>

<style scoped></style>
