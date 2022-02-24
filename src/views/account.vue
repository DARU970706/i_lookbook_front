<template>
<div class="account">
  <div>
    <profile/>
  </div>
  <div>
    <accountSet/>
  </div>
</div>
</template>

<script>
import profile from '@/components/account/profile.vue'
import accountSet from '@/components/account/accountSet.vue'
export default {
  name: 'account',
  components: {
    profile,
    accountSet
  }
}
</script>

<style scoped>
  .account{
    border-color: rgb(200,200,200);
    border-style: solid;
    border-width: 1px;
    width: 600px;
    height: 500px;
    background-color: white;
    position: absolute;
    top:70px;
    left: 50%;
    transform: translate(-50%, -0%);
  }
</style>
