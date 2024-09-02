<template>
  <div>
    <search-input @search="handleSearch" :message="message" />
    <art-list :artworks="artworks" />
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import ArtList from '@/components/ArtList.vue'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { ArtList, SearchInput },
  setup() {
    const store = useStore()
    const artworks = computed(() => store.state.artworks)
    const loading = computed(() => store.state.loading)
    const message = ref('')

    watch(loading, (loading) => {
      if (loading) message.value = 'Loading...'
      else message.value = ''
    })

    const handleSearch = (search) => {
      store.dispatch('search', search)
    }

    const handleValidate = (search) => {}

    return { artworks, handleSearch, loading, message }
  }
}
</script>

<style scoped></style>
