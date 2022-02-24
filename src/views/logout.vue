<template>
  <div></div>
</template>

<script>
export default {
  name: 'logout',
  mounted () {
    this.$store.commit('logout')
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
