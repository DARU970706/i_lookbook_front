<template>
  <main_slide></main_slide>
  <div class="main-content">
    <ul class="mdf" v-for="i in parseInt((this.list.list.length-1)/4)+1" :key="i">
      <li v-for="j in this.getLoop(i, this.list.list.length)" :key="j" class="md">
        <router-link :to="'/md/?id='+this.list.list[j-1+((i-1)*4)].code" class="imd">
          <img :src="'http://' + this.$store.state.target +':3000/img/taskImgGet?dir='+this.list.list[j-1+((i-1)*4)].img" class="imd"/>
          <br>{{ this.list.list[j-1+((i-1)*4)].name }}
          <br>10% 60,000
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import MainSlide from '@/components/main_slide/slide.vue'
export default {
  name: 'Home',
  data () {
    return {
      list: [],
      po: 0
    }
  },
  created () {
    console.log(this.chr)
    this.getList()
  },
  components: {
    main_slide: MainSlide
  },
  methods: {
    getLoop (i, max) {
      if (i * 4 < max) {
        return 4
      } else {
        return max - (i - 1) * 4
      }
    },
    async getList () {
      this.list = await this.$api('http://' + this.$store.state.target + ':3000/board/mdListGet', 'get')
    }
  }
}
</script>

<style>
.imd {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(240,240,240);
  width: 230px;
  height: 250px;
}
.main-content{
  width: 1030px;
  height: 1000px;
  position: absolute;
  left: 50%;
  top:505px;
  transform: translate(-50%, -0%);
}
.mdf{
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
}
li.md {
  list-style: none;
  width: 33.33%;
}
a.md {
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(70,70,70);
  transition: all 0.3s ease-in-out;
  font-size: 13px;
}
a.md:hover {
  color: #fff;
  background: rgb(100,100,100);
}
</style>
