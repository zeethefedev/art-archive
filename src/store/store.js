import { fetchCategories } from '@/service/api'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      artworks: [],
      results: []
    }
  },
  mutations: {
    setArtworks(state, payload) {
      state.artworks = payload
    },
    setResults(state, payload) {
      state.results = payload
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
    async getCategories({ commit }) {
      const categories = await fetchCategories()
      commit('setResults', categories)
    },
    async searchArt({ commit }, payload) {}
  }
})
