<template>
  <div>
    <div class="login_box">
      <div class="login_top">
        <h3>회원가입</h3>
      </div>
      <div class="login_middle">
        <br>
        {{this.response}}
        <form @submit.prevent="onSubmit">
          <input class="input_text" type="text" name="id" v-model="id" placeholder="ID"><br>
          <input class="input_text" type="password" name="password" v-model="pw" placeholder="PW">
          <input class="input_text" type="text" name="email" v-model="email" placeholder="Email"><br>
          <br><button class="signIn">회원가입</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      id: '',
      pw: '',
      email: '',
      response: ''
    }
  },
  methods: {
    async onSubmit () {
      this.response = await this.$api('/user/sign', 'post', { id: this.id, pw: this.pw, email: this.email })
      if (this.response.message === 'success') {
        alert('회원가입 성공')
        this.$router.push('./')
      }
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
    width: calc(100% - 21px);
    color : rgb(100,100,100);
    border-top-color: white;
    border-style: solid;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-bottom: 25px;
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
  .signIn{
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
