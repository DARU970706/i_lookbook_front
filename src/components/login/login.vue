<template>
  <div>
    <div class="login_box">
      <div class="login_top">
        <h3>Vue Template</h3>
      </div>
      <div class="login_middle">
        <br>
        {{this.response}}
        <form @submit.prevent="onSubmit">
          <input class="input_text" type="text" name="id" v-model="id" placeholder="ID"><br>
          <input class="input_text" type="password" name="password" v-model="pw" placeholder="PW">
          <br><button class="login_button">로그인</button>
        </form>
      </div>
      <div class="login_bottom">
        <label>회원이 아니신가요? </label><a href="#">회원 가입</a><br>
        <a href="#">비밀번호 찾기</a><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      id: '',
      pw: '',
      response: ''
    }
  },
  methods: {
    async onSubmit () {
      this.response = await this.$api('/user/login', 'post', { id: this.id, pw: this.pw })
      this.$store.commit('setUsername', this.id)
      this.$store.commit('setAccessToken', this.response.accessToken)
      this.$store.commit('setRefreshToken', this.response.refreshToken)
      if (this.response.message === 'success') this.$router.push('./')
    }
  }
}
</script>

<style scoped>
  a{
    color: black;
    text-decoration-line: none;
  }
  .login_box{
    display: inline-block;
  }
  .login_top{
    background-color: rgb(246,246,246);
    width: 300px;
    height: 50px;
    display: inline-block;
    border-color: rgb(200,200,200);
    border-width: 1px;
    color : rgb(100,100,100);
    border-style: solid;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    margin-bottom: 10px;
    display:table-cell;
    vertical-align:middle;
  }
  .login_middle{
    border-color: rgb(200,200,200);
    border-width: 1px;
    color : rgb(100,100,100);
    border-top-color: white;
    border-style: solid;
  }
  .login_bottom{
    background-color: rgb(246,246,246);
    font-size: 14px;
    width: 300px;
    height: 50px;
    display: inline-block;
    border-color: rgb(200,200,200);
    border-width: 1px;
    color : rgb(100,100,100);
    border-style: solid;
    border-top-color: white;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-bottom: 10px;
    display:table-cell;
    vertical-align:middle;
  }
  .input_text{
    width: 245px;
    height: 40px;
    text-align: left;
    text-indent: 5px;
    border-color: rgb(221,221,221);
    border-width: 1px;
    color : rgb(100,100,100);
    border-style: solid;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .login_button{
    width: 250px;
    height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: rgb(110,117,124);
    color : rgb(215,217,219);
    border-color: rgb(128,134,140);
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    margin-bottom: 10px;
  }
</style>
