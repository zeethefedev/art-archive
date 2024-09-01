<template>
  <div>
    <search-input />
    <manga-list />
  </div>
</template>

<script>
import MangaList from '@/components/MangaList.vue'
import SearchInput from '@/components/SearchInput.vue'
export default {
  components: { MangaList, SearchInput }
}
</script>

<style scoped></style>
