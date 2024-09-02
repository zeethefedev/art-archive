<template>
  <div>
    <filter-select />
    <art-list :artworks="artworks" />
  </div>
</template>

<script>
import ArtList from '@/components/ArtList.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { FilterSelect, ArtList },
  setup() {
    const store = useStore()
    const artworks = computed(() => store.state.artworks)

    return { artworks }
  }
}
</script>

<style scoped></style>
