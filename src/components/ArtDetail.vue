<template>
  <div class="flex gap-16 flex-col lg:flex-row w-full max-w-6xl">
    <img :src="image" :alt="thumbnail.alt_text" class="w-full lg:max-w-lg" />
    <div>
      <h1 class="text-2xl">{{ title }}</h1>
      <div class="text-sm">{{ artist_display }}</div>

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
