<template>
  <div>
    <filter-select />
    <art-list />
  </div>
</template>

<script>
import ArtList from '@/components/ArtList.vue'
import FilterSelect from '@/components/FilterSelect.vue'
export default {
  components: { FilterSelect, ArtList }
}
</script>

<style scoped></style>
