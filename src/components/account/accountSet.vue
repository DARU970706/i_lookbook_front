<template>
  <div class="hello">
    {{this.rep}}
    <h1>{{ msg }}</h1>
    <h2>Profile Image</h2>
    <ul>
      <li>합성에 사용할 본인의 이미지를 선택해 주세요.</li>
    </ul>
    <input class="input-file" type="file" name="myfile" @change="upload($event.target.name, $event.target.files)" @drop="upload($event.target.name, $event.target.files)">
    </div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {
      rep: ''
    }
  },
  methods: {
    async upload (name, files) {
      const formData = new FormData()
      formData.append('file', files[0])
      await this.$api('/img/profileUpload', 'post', formData).then(() => {
        alert('1분 내로 이미지가 변경됩니다.')
        this.$router.push('./')
      })
    }
  }
}
</script>

<style scoped>
.input-file{
  border-style: solid;
  border-width: 1px;
}
</style>
