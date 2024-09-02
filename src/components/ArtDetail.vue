<template>
  <div>
    <img :src="image" :alt="thumbnail.alt_text" />
    <h1 class="text-2xl">{{ title }}</h1>
    <div>{{ thumbnail.alt_text }}</div>
    <div v-html="description"></div>
  </div>
</template>

<script>
import { getImageURL } from '@/service/api'

export default {
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

    const image = getImageURL(image_id)

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
      thumbnail
    }
  }
}
</script>

<style scoped></style>
