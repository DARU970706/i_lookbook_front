<template>
  <div class="main-content">
    <img :src="img" class="mdg"/>
    <div class="md-info">
      <h2>{{this.chr.name}}</h2>
      <h3>Product info</h3>
      <h5>
        <hr>
        <br>
        품번 : {{ this.chr.code }}
        <br><br>
        {{ this.chr.text }}
        <br><br>
        좋아요  {{ this.chr.like }}개
        <br><br>
        재고 {{ this.chr.stock }}개
      </h5>
      <h3>Price info</h3>
      <hr>
      <h4>
        i lookbook 판매가 : {{ this.chr.price }}원
        <br><br>
        무이자 할부가  {{ this.chr.price/3+1000 }}원(3개월)
      </h4>
      <hr>
      <br>
      <form @submit.prevent="try_on">
        <button class="suit">시착하기</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'md',
  data () {
    return {
      chr: [],
      img: '',
      response: ''
    }
  },
  created () {
    console.log(this.chr)
    this.getList()
  },
  methods: {
    async try_on () {
      this.response = await this.$api('/img/upTask?img=' + this.chr.img, 'get', { id: this.id, pw: this.pw })
      if (this.response.message === 'already') alert('이미 작업중이에요! 조금만 더 기다려 주세요')
      else alert('작업 등록이 성공적으로 되었습니다.')
    },
    async getList () {
      this.chr = await this.$api('/board/mdGet?id=' + this.$route.query.id, 'get')
      this.img = 'http://' + this.$store.state.target + ':3000/img/taskImgGet?dir=' + this.chr.img
      if (this.chr.message === 'error') alert('찾을수 없는 모델입니다.')
    }
  }
}
</script>

<style scoped>
.main-content{
  width: 1030px;
  height: 1000px;
  position: absolute;
  top:65px;
  transform: translate(-70%, -0%);
}
.mdg {
  display:inline;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(240,240,240);
  width: 430px;
  height: 500px;
}
.suit {
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: bolder;
  background-color: rgb(170,170,170);
  color : white;
  border-color: rgb(170,170,170);
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  margin-bottom: 25px;
}
.md-info {
  padding-left: 20px;
  text-align: left;
  display:inline;
  margin-left: 20px;
  position: absolute;
  width: 400px;
  height: 450px;
}
</style>
