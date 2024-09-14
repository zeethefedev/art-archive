<template>
  <div>
    Filter art work from -- to --
    <VueDatePicker
      v-model="date"
      @update:model-value="handleDate"
      range
      :year-range="yearRange"
      year-picker
    ></VueDatePicker>
    <div>{{ message }}</div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import dayjs from 'dayjs'

import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { VueDatePicker },

  setup() {
    const date = ref()
    const store = useStore()
    const message = ref('')
    const disabledDate = new Date()
    const yearRange = [1600, dayjs().year()]

    const handleDate = (modelData) => {
      const [start, end] = modelData

      if (start && end) {
        message.value = ''
        store.commit('filterArtworks', modelData)
      } else {
        message.value = 'please select a valid year range'
      }
    }

    onMounted(() => {
      const startDate = new Date()
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
      date.value = [startDate, endDate]
    })

    return { date, handleDate, disabledDate, message, yearRange }
  }
}
</script>

<style scoped></style>
