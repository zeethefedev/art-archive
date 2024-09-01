<template>
  <div>
    <search-input />
    <art-list />
    <img
      src="https://www.artic.edu/iiif/2/ee8c8903-ed55-c104-49d2-3bd36028d40b/full/843,/0/default.jpg"
      alt="A work made of silver, laminate, and ebony."
      width="3000"
      height="2250"
    />
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import ArtList from '@/components/ArtList.vue'
export default {
  components: { ArtList, SearchInput }
}
</script>

<style scoped></style>
