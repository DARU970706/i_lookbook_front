import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  methods: {
    async work (url, method, data, token) {
      axios.defaults.headers.common.authorization = token
      const res = (await axios({
        method: method,
        url: url,
        data
      }).catch(e => {
        console.log(e)
      })).data
      return res
    },
    async $api (url, method, data) {
      let res = ''
      res = await this.work(url, method, data, this.$store.state.accessToken)
      if (res.message === 'error') {
        res = await this.work('/user/refresh?token=' + this.$store.state.refreshToken, 'get', data, this.$store.state.refreshToken)
        if (res.message === 'error') {
          this.$store.commit('setAccessToken', '')
          return { message: 'error' }
        } else {
          this.$store.commit('setAccessToken', res.accessToken)
          res = await this.work(url, method, data, res.accessToken)
        }
      }
      return res
    }
  }
}
