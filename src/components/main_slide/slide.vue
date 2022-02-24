<template>
  <div class="slide">
    <div class="img-box">
      <img src="./banner1.jpg" class="banners">
    </div>
    <div class="text-box">
      <ul class="menu">
        <li class="m"><router-link class="m" to="/">환영 이벤트</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slide',
  components: {
  }
}
</script>

<style>
.slide {
  width: 100%;
  position: absolute;
  left: 50%;
  top:41px;
  transform: translate(-50%, -0%);
  border-style: none;
}
.img-box {
  border-style: solid;
  border-width: 1px;
  height: 400px;
  background-color: rgb(28,28,28);
  border-color: rgb(231,231,231);
  border-top:0px
}
.banners{
  height: 400px;
}
.text-box {
  position: relative;
  left: 50%;
  transform: translate(-50%, -0%);
  width: 1000px;
  border-style: solid;
  border-width: 1px;
  height: 40px;
  background-color: rgb(242,242,242);
  border-top-width: 0px;
  border-color: rgb(231,231,231);
}
.menu{
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
}
li.m {
  list-style: none;
  width: 130px;
  border-color: rgb(231,231,231);
  border-style: solid;
  border-width: 1px;
  border-bottom-style: none;
  border-left-style: none;
  border-top-style: none;
}
a.m {
  display: block;
  padding: 12px;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(70,70,70);
  transition: all 0.3s ease-in-out;
  font-size: 13px;
}
a.m:hover {
  color: #fff;
  background: rgb(100,100,100);
}
</style>
