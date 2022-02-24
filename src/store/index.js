import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    accessToken: '',
    refreshToken: '',
    target: 'localhost'
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
    },
    logout (state) {
      state.refreshToken = ''
      state.username = ''
      state.accessToken = ''
    }
  },
  actions: {},
  modules: {}
})
