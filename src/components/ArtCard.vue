<template>
  <div v-if="art" @click="handleClickArt">
    <img :src="image" :alt="art.thumbnail.alt_text" />
    <h1 class="text-2xl">{{ art.title }}</h1>
    <div>{{ art.thumbnail.alt_text }}</div>
  </div>
</template>

<script>
import { getImageURL } from '@/service/api'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    art: {
      type: Object
    }
  },
  setup({ art }) {
    const { id, image_id } = art
    const artData = ref(art)
    const router = useRouter()
    const image = getImageURL(image_id)

    const handleClick = (art) => {}

    const handleClickArt = () => {
      router.push({ path: `art/${art.id}` })
    }

    return { artData, handleClick, handleClickArt, image }
  }
}
</script>

<style scoped></style>
