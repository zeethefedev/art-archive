<template>
  <art-list :artworks="initialArtworks" :isSavedPage="true" />
  <button @click="handleOpen">Save</button>
  <confirm-popup :open="open" @click="handleClose">
    <h2 class="text-xl mb-4">Do you want to save your new artworks?</h2>
    <div class="flex gap-2 w-full justify-end">
      <button @click="handleClose">No</button>
      <button @click="handleSave">Yes</button>
    </div>
  </confirm-popup>
</template>

<script>
import ArtList from '@/components/ArtList.vue'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import ConfirmPopup from '@/components/ConfirmPopup.vue'
export default {
  components: { ArtList, ConfirmPopup },
  setup() {
    const store = useStore()
    const artworks = computed(() => store.state.likedArtworks)
    const initialArtworks = computed(() => store.state.initialLikedArtworks)
    const body = document.getElementsByTagName('body')

    const open = ref(false)

    const handleOpen = () => {
      open.value = true
    }

    const handleClose = () => {
      open.value = false
    }

    const handleSave = () => {
      store.commit('saveLike')
      handleClose()
    }

    watch(open, (open) => {
      if (body) {
        if (open) body[0].style.overflow = 'hidden'
        else body[0].style.overflow = 'visible'
      }
    })

    return { artworks, initialArtworks, handleSave, open, handleOpen, handleClose }
  }
}
</script>

<style scoped></style>
