<!-- 这里登录页面 -->
<template>
    <div class="loginContainer">
        <LoginBox></LoginBox>
    </div>
</template>
<script>
  import LoginBox from '../components/Login.vue'
  export default {
    components: {
      LoginBox
    }
  }
</script>
<style lang="scss">
    .loginContainer{
        padding-top: 100px;
    };
</style>
