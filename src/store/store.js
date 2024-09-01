import { fetchArtById, fetchArtworkImages, fetchCategories, searchArtworks } from '@/service/api'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      artworks: [],
      results: [],
      loading: false,
      error: false
    }
  },
  mutations: {
    setArtworks(state, payload) {
      state.artworks = payload
    },
    resetArtWorks(state) {
      state.artworks = []
    },
    setResults(state, payload) {
      state.results = payload
    },
    startLoading(state) {
      state.loading = true
    },
    stopLoading(state) {
      state.loading = false
    }
    // add(state, payload) {
    //   const newToDo = { id: state.todoItems.length, text: payload, done: false }
    //   const newToDos = [...state.todoItems, newToDo]
    //   state.todoItems = newToDos
    //   console.log(state.todoItems)
    // },
    // delete(state, payload) {
    //   const { id } = payload
    //   const newToDos = state.todoItems.filter((todo) => todo.id !== id)
    //   state.todoItems = newToDos
    // },
    // edit(state, payload) {
    //   const { id } = payload
    //   const newToDos = state.todoItems.map((todo) => (todo.id === id ? payload : todo))
    //   state.todoItems = newToDos
    // }
  },
  actions: {
    async search({ commit }, payload) {
      commit('resetArtWorks')
      commit('startLoading')
      const artworkSearchResults = await searchArtworks(payload)
      const artworkIds = artworkSearchResults.map((art) => art.id)
      const artworkImages = await fetchArtworkImages(artworkIds)

      const artworks = artworkSearchResults.map((result) => ({
        ...result,
        image_id: artworkImages[result.id]
      }))

      commit('setArtworks', artworks)
      commit('stopLoading')
    },
    // async getArtwork({ commit }, payload) {
    //   const artwork = await fetchArtById(payload)
    //   commit('setArtworks', artworks)
    // },
    async getCategories({ commit }) {
      const categories = await fetchCategories()
      commit('setResults', categories)
    },
    async getArtists({ commit }) {
      // const categories = await fetchCategories()
      // commit('setResults', categories)
    },
    async getStyles({ commit }) {
      // const categories = await fetchCategories()
      // commit('setResults', categories)
    }
  }
})
