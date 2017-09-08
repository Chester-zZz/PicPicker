<template>
  <div class="imagePageDiv">
    <!--这里必须要有一个root元素包裹模板  -->
    <!-- 注意这里的imgAddress绑定，如果要绑定一个实值而不是一个变量是在一个双引号里还要有单引号 -->
    <ImageContainer v-for="item in imgAddresses" :imgInfo="item"></ImageContainer>
    <!--这个父组件中监听子组件的绑定要写在这里-->
    <ImageFooter v-on:refreshPage="getPage" @refreshPage="getPage"></ImageFooter>
  </div>
</template>
<script>
  import ImageContainer from '../components/ImageContainer.vue';
  import ImageFooter from '../components/ImgPageFooter.vue';
  export default {
    data() {
      return {
        imgAddresses: []
      }
    },
    methods:{
        getPage(){
//          console.log(this.$route);
//          url类似于/imgs/所以要substring
          const thisPageNum = parseInt(this.$route.path.substring(6));
//          console.log(thisPageNum);
          this.$http.get(`http://127.0.0.1:3000/api/getPage/${thisPageNum}`).then(function (response) {
            this.imgAddresses = response.body;
          });
          window.scrollTo(0, 0);
        }
    },
    components: {
      ImageContainer,
      ImageFooter,
    },
    created() {
        this.getPage();
    }
  }
</script>
<style>
  .imagePageDiv {
    text-align: center;
    height: 100%;
  }
</style>
