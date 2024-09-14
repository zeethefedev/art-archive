import { fetchArtById, fetchTerms, searchArtworks } from '@/service/api'
import { clearFromStorage, getFromStorage, LIKED_ARTWORKS, saveToStorage } from '@/service/utils'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: null,
      artworks: [],
      results: [],
      currentArtwork: {},
      loading: false,
      error: false,
      likedArtworks: LIKED_ARTWORKS,
      initialLikedArtworks: LIKED_ARTWORKS
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
    resetCurrentArtwork(state) {
      state.currentArtwork = {}
    },
    setResults(state, payload) {
      state.results = payload
    },
    resetResults(state) {
      state.results = []
    },
    startLoading(state) {
      state.loading = true
    },
    stopLoading(state) {
      state.loading = false
    },
    toggleLike(state, payload) {
      const likedArtworkIds = state.likedArtworks.map((artwork) => artwork.id)
      const current = payload
      const artworkExists = likedArtworkIds.includes(current.id)
      let newLikedArtworks = state.likedArtworks

      if (artworkExists) {
        newLikedArtworks = state.likedArtworks.filter((artwork) => artwork.id !== current.id)
      } else {
        newLikedArtworks = [...state.likedArtworks, current]
      }
      state.likedArtworks = newLikedArtworks
    },
    saveLike(state) {
      state.initialLikedArtworks = state.likedArtworks
    },
    setUser(state) {
      const userInfo = getFromStorage('USER')
      state.user = userInfo
    },
    login(state, payload) {
      state.user = payload
      saveToStorage('USER', state.user)
    },
    logout(state) {
      state.user = null
      clearFromStorage('USER')
    }
  },
  actions: {
    async search({ commit }, payload) {
      commit('resetArtWorks')
      commit('startLoading')
      const artworks = await searchArtworks(payload, ['image_id'])

      commit('setArtworks', artworks)
      commit('stopLoading')
    },
    async searchBy({ commit }, payload) {
      commit('resetArtWorks')
      commit('startLoading')
      const artworks = await searchArtworks('', ['image_id'], payload)

      commit('setArtworks', artworks)
      commit('stopLoading')
    },
    async getArtwork({ commit }, payload) {
      commit('resetCurrentArtwork')
      commit('startLoading')
      const currentArtwork = await fetchArtById(payload)

      commit('setCurrentArtwork', currentArtwork)
      commit('stopLoading')
    },
    async getTerms({ commit }, payload) {
      commit('startLoading')
      const terms = await fetchTerms(payload)

      commit('setResults', terms)
      commit('stopLoading')
    }
  }
})
