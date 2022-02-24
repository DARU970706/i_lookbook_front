<template>
<div>
  <div class="profile-box">
    <img :src="img" class="profile">
  </div>
</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      img: null
    }
  },
  created () {
    this.GetToken()
  },
  methods: {
    async GetToken () {
      await this.$api('http://' + this.$store.state.target + ':3000/user/check', 'get').then(() => {
        this.img = 'http://' + this.$store.state.target + ':3000/img/profileGet?token=' + this.$store.state.accessToken
      })
    }
  }
}
</script>

<style scoped>
.profile-box {
  margin-left: 50%;
  margin-top: 10px;
  border-style: solid;
  border-width: 1px;
  width: 180px;
  height: 320px;
  border-radius: 5%;
  overflow: hidden;
  transform: translate(-50%, -0%);
}
.profile {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
