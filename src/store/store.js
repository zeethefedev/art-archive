import {
  fetchArtById,
  fetchCategories,
  fetchTerms,
  searchArtworks,
  searchArtworksByTerm
} from '@/service/api'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      artworks: [],
      results: [],
      currentArtwork: {},
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
    setCurrentArtwork(state, payload) {
      state.currentArtwork = payload
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
      const artworks = await searchArtworks(payload, 'image_id')

      commit('setArtworks', artworks)
      commit('stopLoading')
    },
    //should combine with search
    async searchBy({ commit }, payload) {
      commit('resetArtWorks')
      commit('startLoading')
      const artworks = await searchArtworksByTerm(payload, 'image_id')

      commit('setArtworks', artworks)
      commit('stopLoading')
    },
    async getArtwork({ commit }, payload) {
      const currentArtwork = await fetchArtById(payload)

      console.log(currentArtwork)
      commit('setCurrentArtwork', currentArtwork)
    },
    async getCategories({ commit }) {
      const categories = await fetchCategories()
      commit('setResults', categories)
    },
    async getArtists({ commit }) {},
    async getTerms({ commit }, payload) {
      const terms = await fetchTerms(payload)
      commit('setResults', terms)
    }
  }
})
