<template>
<div>
  <div class="menu-box">
    <ul class="menu">
      <li>
        <router-link to="/login" v-if="this.$store.state.username === ''">
          로그인
        </router-link>
      </li>
      <li>
        <router-link to="/sign" v-if="this.$store.state.username === ''">
          회원가입
        </router-link>
      </li>
      <li>
        <router-link to="/account" v-if="this.$store.state.username !== ''">
          {{ this.$store.state.username }}님 환영합니다.
        </router-link>
      </li>
      <li>
        <router-link to="/logout" v-if="this.$store.state.username !== ''">
          로그아웃
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'account_menu',
  data () {
    return {
      sa: this.$store.state.username
    }
  }
}
</script>

<style scoped>
.menu{
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
}
.menu-box{
  width: 250px;
  float: right;
  padding-top: 13px;
}
li {
  list-style: none;
}
a{
  display: block;
  text-decoration: none;
  color: rgb(95,95,95);
  transition: all 0.3s ease-in-out;
  font-size: 13px;
}
a:hover {
  color: black;
}
</style>
