<template>
<div class="upload">
  <form @submit.prevent="onSubmit">
    <h4>제목</h4>
    <input class="input_text" type="text" name="name" v-model="name">
    <h4>가격</h4>
    <input class="input_text" type="text" name="price" v-model="price">
    <h4>내용</h4>
    <input class="input_text" type="text" name="text" v-model="text">
    <h4>좋아요</h4>
    <input class="input_text" type="text" name="like" v-model="like">
    <h4>이미지를 선택하세요.</h4>
    <input class="input-file" @change="upload($event.target.files)" type="file" name="myfile">
  </form>
</div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      name: '',
      price: '',
      myFile: '',
      text: '',
      like: ''
    }
  },
  methods: {
    async upload (files) {
      alert('1분 내로 이미지가 변경됩니다.')
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('text', this.text)
      formData.append('like', this.like)
      formData.append('file', files[0])
      await this.$api('/board/mdUpload', 'post', formData).then(() => {
        alert('1분 내로 이미지가 변경됩니다.')
        this.$router.push('./')
      })
    }
  }
}
</script>

<style scoped>
.input_text{
  width: 80%;
  height: 20px;
}
.upload{
  border-color: rgb(200,200,200);
  border-style: solid;
  border-width: 1px;
  width: 600px;
  height: 550px;
  background-color: white;
  position: absolute;
  top:70px;
  left: 50%;
  transform: translate(-50%, -0%);
}
.upload_button{
  width: 80%;
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
