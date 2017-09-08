<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LoginPage from './pages/login_page.vue';
import ImgPage from './pages/images_page.vue';
export default {
  name: 'app',
  components: {
      LoginPage,
      ImgPage,
  },
};
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
