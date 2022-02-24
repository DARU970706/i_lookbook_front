<template>
  <navigaters/>
  <div class="contents">
    <router-view/>
  </div>
</template>

<script>
import navigaters from '@/components/nav/nav.vue'
export default {
  name: 'Home',
  components: {
    navigaters
  }
}
</script>

<style lang="scss">
#app {
  @import url("https://cdn.jsdelivr.net/gh/moonspam/NanumBarunGothic@latest/nanumbarungothicsubset.css");
  font-family: 'Nanum Gothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
.contents {
  position: absolute;
  width: 100%;
  top:148px;
}
</style>
