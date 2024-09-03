<template>
  <div
    v-if="art"
    class="flex flex-col gap-4 rounded items-center p-8 border-2 border-solid max-w-sm"
  >
    <img
      :src="image"
      :alt="art.thumbnail.alt_text"
      @click="handleClickArt"
      class="cursor-pointer"
    />
    <like-button @click="handleLikeArt" :art="art" />
    <h1 class="text-2xl">{{ art.title }}</h1>
    <div>{{ art.thumbnail.alt_text }}</div>
  </div>
</template>

<script>
import { getImageURL } from '@/service/api'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import LikeButton from './LikeButton.vue'
import { useStore } from 'vuex'

export default {
  components: { LikeButton },
  props: {
    art: {
      type: Object
    },
    isSavedPage: { type: Boolean, default: false }
  },
  setup({ art, isSavedPage }) {
    const { id, image_id } = art
    const artData = ref(art)
    const router = useRouter()
    const image = getImageURL(image_id)

    const store = useStore()
    const artworks = computed(() => store.state.likedArtworks)

    const handleClickArt = () => {
      router.push({ path: `art/${id}` })
    }

    const handleLikeArt = () => {
      store.commit('toggleLike', art)
      if (!isSavedPage) {
        store.commit('saveLike', artworks)
      }
    }

    return { artData, handleClickArt, image, handleLikeArt }
  }
}
</script>

<style scoped></style>
