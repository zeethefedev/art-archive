<template>
  <div>
    <search-input @search="handleSearch" />
    <art-list :arts="searchResult" />
    <!-- <img
      src="https://www.artic.edu/iiif/2/ee8c8903-ed55-c104-49d2-3bd36028d40b/full/843,/0/default.jpg"
      alt="A work made of silver, laminate, and ebony."
    /> -->
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import ArtList from '@/components/ArtList.vue'
import { ref } from 'vue'
import { searchArt } from '@/service/api'

export default {
  components: { ArtList, SearchInput },
  setup() {
    // onMounted(async () => {
    //   const arts = await fetchArts()
    //   console.log(arts)
    // })

    const searchResult = ref('')

    const handleSearch = async (search) => {
      searchResult.value = await searchArt(search)
      console.log(searchResult.value)
    }

    const handleValidate = (search) => {}
    return { searchResult, handleSearch }
  }
}
</script>

<style scoped></style>
