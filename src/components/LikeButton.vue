<template>
  <SVGIcon v-if="liked" @click="$emit('clickLike')" icon="heart-fill" width="2em" height="2em" />
  <SVGIcon v-else @click="$emit('clickLike')" icon="heart" width="2em" height="2em" />
</template>

<script>
import { computed, ref, watch } from 'vue'
import SVGIcon from './SVGIcon.vue'
import { useStore } from 'vuex'
export default {
  components: { SVGIcon },
  props: {
    art: {
      type: Object
    }
  },
  setup({ art }) {
    const { id } = art
    const store = useStore()

    //check liked
    const likedArtworks = computed(() => store.state.likedArtworks.map((artwork) => artwork.id))
    const liked = computed(() => likedArtworks.value.includes(id))
    const icon = ref(liked.value ? 'heart-fill' : 'heart')

    watch(liked, (liked) => {
      icon.value = liked.value ? 'heart-fill' : 'heart'
    })

    return { icon, liked }
  }
}
</script>

<style scoped></style>
