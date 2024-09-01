<template>
  <div>
    <filter-select />
    <manga-list />
  </div>
</template>

<script>
import FilterSelect from '@/components/FilterSelect.vue'
import MangaList from '@/components/MangaList.vue'
export default {
  components: { FilterSelect, MangaList }
}
</script>

<style scoped></style>
