<template>
  <navigaters/>
  <div class="about">
    {{this.response}}
    <h1>This is an about page</h1>
  </div>
  <div class="dropdown">
  </div>
</template>
<script>
import navigaters from '@/components/nav/nav.vue'
export default {
  components: {
    navigaters: navigaters
  },
  data () {
    return {
      response: ''
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.response = await this.$api('/user/about', 'get')
      if (this.response.message === 'error') location.href = './login'
    }
  }
}
</script>
