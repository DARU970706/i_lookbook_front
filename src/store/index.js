import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    accessToken: '',
    refreshToken: ''
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    },
    setAccessToken (state, token) {
      state.accessToken = token
    },
    setRefreshToken (state, token) {
      state.refreshToken = token
    }
  },
  actions: {},
  modules: {}
})
