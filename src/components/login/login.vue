<template>
  <div>
    <div class="login_box">
      <div class="login_top">
        <h3>Login</h3>
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
          <a href="sign">회원가입</a> | <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a>
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
    top: 70px;
    transform: translate(-50%, 0%);
    position: absolute;
    margin-top: 40px;
    display: inline-block;
  }
  .login_top{
    background-color: rgb(251,251,251);
    width: 300px;
    height: 70px;
    display: inline-block;
    border-color: rgb(200,200,200);
    border-width: 1px;
    color : black;
    font-weight: bolder;
    font-size: 20px;
    border-style: solid;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin-bottom: 10px;
    display:table-cell;
    vertical-align:middle;
    padding-left: 25px;
    text-align: left;
  }
  .login_middle{
    border-color: rgb(200,200,200);
    border-width: 1px;
    color : rgb(100,100,100);
    border-top-color: white;
    border-style: solid;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-bottom: 25px;
  }
  .login_bottom{
    font-size: 15px;
    width: 300px;
    display: inline-block;
    color : rgb(100,100,100);
    display:table-cell;
    vertical-align:middle;
  }
  .input_text{
    width: 87%;
    height: 50px;
    text-align: left;
    text-indent: 10px;
    border-color: rgb(221,221,221);
    border-width: 1px;
    color : rgb(175,175,175);
    font-size: 15px;
    border-style: solid;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .login_button{
    width: 89%;
    height: 60px;
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
    background-color: rgb(70,130,255);
    color : white;
    border-color: rgb(71,125,255);
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    margin-bottom: 25px;
  }
</style>
