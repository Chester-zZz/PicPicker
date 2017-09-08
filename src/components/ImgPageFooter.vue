<!-- 这里是页面的header -->
<template>
  <div class="imgPageFooter">
    <router-link v-for="item in footerPagesLinks" :to="'/imgs/'+item.num" :class="{ pageSelected: item.selected }"
                 v-on:click.native="refreshNums">
      {{ item.num }}
    </router-link>
    <el-button type="primary" @click="goNextPage">
      下一页
      <i class="el-icon-arrow-right el-icon--right"></i>
    </el-button>
    <el-input class="jumpInput" v-model="jumpNum" placeholder="跳转到"></el-input>
    <el-button type="primary" @click="goNPage">
      跳转
      <i class="el-icon-d-arrow-right el-icon--right"></i>
    </el-button>
  </div>
</template>
<script>
  export default {
    name: 'imgPageFooter',
    data() {
      return {
        footerPagesLinks: [],
        jumpNum:null
      }
    },
    methods: {
      refreshNums() {
        // console.log(this.$route.path);
        // 先获取到跳转到了哪一页
        const thisPageNum = parseInt(this.$route.path.substring(6));
        if (thisPageNum >= 5) {
          let i = 0;
          for (i = thisPageNum - 4; i < thisPageNum + 5; i++) {
            // vue不能检测到直接的数组赋值，必须这样才能检测到，才能更新视图
            this.footerPagesLinks.splice(i + 4 - thisPageNum, 1, {
              num: i,
              selected: false
            });
            // Vue.set(this.footerPagesLinks, i + 4 - thisPageNum, i);
          }
          this.footerPagesLinks.splice(i - thisPageNum - 1, 1, {
            num: thisPageNum,
            selected: true
          });
        } else if (thisPageNum < 5) {
          let i = 0;
          for (i = 1; i < 10; i++) {
            this.footerPagesLinks.splice(i - 1, 1, {
              num: i,
              selected: false
            });
            // Vue.set(this.footerPagesLinks, i-1, i);
          }
          this.footerPagesLinks.splice(thisPageNum - 1, 1, {
            num: thisPageNum,
            selected: true
          });
        }
        this.$emit('refreshPage');

        // console.log(this.footerPagesLinks);
      },
      goNextPage(){
        const thisPageNum = parseInt(this.$route.path.substring(6));
        this.$router.push(`/imgs/${thisPageNum + 1}`);
        this.$router.go(2);
        this.$emit('refreshPage');
        this.refreshNums();
      },
      goNPage(){
        const thePageNum = this.jumpNum;
        this.$router.push(`/imgs/${thePageNum}`);
        this.$router.go(2);
        this.$emit('refreshPage');
        this.refreshNums();
      }
    },
    created() {
      // 这里的创建，只是第一次创建，后面就只是更新数据
      this.refreshNums();
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  $footerHeight: 30px;
  $pageLinkHeight: 24px;
  $pageLinkMarginLR: 5px;
  .imgPageFooter {
    width: 90%;
    height: 30px;
    margin: 20px 5%;
    bottom: 10px;
    // background-color: #e49999;
    text-align: center;
    a {
      display: inline-block;
      width: 30px;
      height: $pageLinkHeight;
      margin: {
        top: ($footerHeight - $pageLinkHeight) / 2;
        left: $pageLinkMarginLR;
        right: $pageLinkMarginLR;
      }
    ;
      border: {
        style: solid;
        color: rgb(187, 196, 217);
        width: 1px;
      }
    ;
      text-decoration: none;
      &:hover {
        background-color: rgba(122, 183, 217, 0.67);
        color: rgba(#040601, 0.62);
        font-weight: bold;
        border-color: rgb(144, 143, 189);
      }
    }
  ;
    button,
    div {
      display: inline-block;
      margin-left: 5px;
    }
  ;
    div {
      width: 90px;
    }
    .pageSelected {
      border: none;

    }
  }
</style>
