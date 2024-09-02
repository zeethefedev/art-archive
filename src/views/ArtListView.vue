<template>
  <div>
    <search-input @search="handleSearch" class="mb-4" />
    <art-list :artworks="artworks" />
    <div>{{ message }}</div>
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
    const touched = ref(false)

    watch(loading, (loading) => {
      if (loading) {
        message.value = 'Loading...'
      } else {
        if (!artworks.value.length && touched) {
          message.value = 'No data to display'
        } else {
          message.value = ''
        }
      }
    })

    const handleSearch = (search) => {
      const valid = handleValidate(search)

      valid && store.dispatch('search', search)
    }

    const handleValidate = (search) => {
      touched.value = true
      if (!search) {
        message.value = 'Please fill in search'
        return false
      } else return true
    }

    return { artworks, handleSearch, loading, message }
  }
}
</script>

<style scoped></style>
