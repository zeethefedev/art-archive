<template>
  <div class="flex gap-16 flex-col lg:flex-row w-full max-w-6xl">
    <img :src="image" :alt="thumbnail.alt_text" class="w-full lg:max-w-lg" />
    <div>
      <h1 class="text-2xl">{{ title }}</h1>
      <div class="text-sm">{{ artist_display }}</div>
      <like-button :art="art" @click="handleLikeArt" />
      <div class="mt-4">
        Artists:
        <span v-for="artist in artist_titles" :key="artist">{{ artist }}</span>
      </div>

      <div>
        Categories:
        <span v-for="category in category_titles" :key="category">{{ category }}{{ ', ' }}</span>
      </div>
      <div>Medium: {{ medium_display }}</div>
      <div>
        Styles:
        <span v-for="style in style_titles" :key="style">{{ style }}{{ ', ' }}</span>
      </div>
      <div v-html="description" class="mt-4"></div>
    </div>
  </div>
</template>

<script>
import { getImageURL } from '@/service/api'
import LikeButton from './LikeButton.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { LikeButton },
  props: {
    art: {
      type: Object
    }
  },
  setup({ art }) {
    const {
      id,
      title,
      image_id,
      artist_titles,
      artist_display,
      category_titles,
      description,
      medium_display,
      style_titles,
      thumbnail
    } = art

    const store = useStore()
    const artworks = computed(() => store.state.likedArtworks)

    const image = getImageURL(image_id)
    const handleLikeArt = () => {
      store.commit('toggleLike', art)
      store.commit('saveLike', artworks)
    }

    return {
      id,
      title,
      image,
      artist_titles,
      artist_display,
      category_titles,
      description,
      medium_display,
      style_titles,
      thumbnail,
      handleLikeArt
    }
  }
}
</script>

<style scoped></style>
