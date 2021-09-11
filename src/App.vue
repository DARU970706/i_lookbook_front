<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">login</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800');
  font-family: 'Nanum Gothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
