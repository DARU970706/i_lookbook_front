<template>
  <div class="bg_img"/>
  <div class="nav">
    <account_menu/>
    <div class="menu-box">
      <router-link to="/" class="logo"><h1>ILOOKBOOK</h1></router-link>
      <div class="menu-button-box">
        <ul class="menu">
          <label class="hoseo">HOSEO.UNV</label>
          <li><router-link to="/" class="link-menu">HOME</router-link></li>
          <li><router-link to="/" class="link-menu">NEWS</router-link></li>
          <li><router-link to="/" class="link-menu">TAKE</router-link></li>
          <li><router-link to="/" class="link-menu">CONTACT</router-link></li>
          <li><router-link to="/" class="link-menu">EVENTS</router-link></li>
          <router-link to="/"><img src="./h.png" class="hart"></router-link>
          <router-link to="/"><img src="./s.png" class="search"></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import account from '@/components/nav/account_menu/account_menu'
export default {
  name: 'nav',
  data () {
  },
  components: {
    account_menu: account
  }
}
</script>

<style scoped>
  h1{
    color: rgb(17,17,17);
  }
  .bg_img{
    position: absolute;
    left: 50%;
    top:0px;
    transform: translate(-50%, -0%);
    height: 350px;
    width: 100%;
    background-color: white;
  }
  .nav{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin-top: 5px;
  }
  .menu{
    padding: 0;
    width: 300px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    position: absolute;
    left: 50%;
    top: 112px;
    transform: translate(-50%, -50%);
  }
  .hoseo{
    transform: translate(-365%, 21%);
    color: rgb(95,95,95);
    font-weight: bold;
    font-size: 11px;
  }
  .hart{
    width: 20px;
    height: 20px;
    transform: translate(1100%, 21%);
  }
  .search{
    width: 19px;
    height: 19px;
    transform: translate(1350%, 31%);
  }
  .menu-box{
    position: absolute;
    left: 50%;
    top: 111px;
    transform: translate(-50%, -50%);
    width: 100%;
    display: inline-block;
  }
  .menu-button-box{
    border-style: solid;
    border-width: 1px;
    border-color: rgb(240,240,240);
    height: 65px;
  }
  li {
    list-style: none;
  }
  .logo {
    text-decoration: none;
  }
  .link-menu{
    display: block;
    padding: 5px 23px;
    text-transform: uppercase;
    text-decoration: none;
    color: rgb(95,95,95);
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    font-size: 11px;
  }
</style>
