<!-- 这里是首页面 -->
<template>
    <div>
<!--这里必须要有一个root元素包裹模板  -->
        <SiteHeader></SiteHeader>
        <h1>This is the index page.</h1>
        <LoginBox></LoginBox>
        <SiteFooter></SiteFooter>
    </div>
</template>
<script>
  import SiteHeader from '../components/SiteHeader.vue'
  import SiteFooter from '../components/SiteFooter.vue'
  import LoginBox from '../components/Login.vue'
  export default {
    components: {
      SiteHeader,
      SiteFooter,
      LoginBox
    }
  }
</script>
