<template>
  <div class="imageContainer" :width="imageDivWidth">
    <img :width="imageWidth" v-lazy="imgInfo.imgAddress">
    <el-button class="keepButton" :disable="btnEnabledComputed" :class="{ picSelected: btnFlagComputed }" type="primary" @click="submitLike">
      {{ btnWordComputed }}
      <i class="el-icon-check" v-if="btnFlagComputed"></i>
    </el-button>
  </div>
</template>
<script>
import Config from '../config.js';
// console.log(Config);
export default {
  // props的用法：首先在子组件中声明要获得的变量，在template中使用。之后在父组件用到子组件的时候用v-bind绑定相应名字的变量
  props: ['imgInfo'],
  data() {
    return {
      imageDivWidth: '10%',
      imageWidth: '100%'
    }
  },
  computed: {
    btnFlagComputed() {
      return !(this.imgInfo.like === undefined || this.imgInfo.like === false);
    },
    btnWordComputed() {
      if (this.imgInfo.like === undefined || this.imgInfo.like === false) {
        return 'Keep';
      } else {
        return 'Saved';
      }
    },
    btnEnabledComputed() {
      return this.btnEnabled;
    }
  },
  methods: {
    // 这里的this指向的还是vue组件
    submitLike() {
      if (this.imgInfo.like === undefined || this.imgInfo.like === false) {
        //          没有选中的时候才请求添加
        this.$http.put(Config.likeApi, {
          num: this.imgInfo.order,
          address: this.imgInfo.imgAddress
        })
          .then(function(response) {
            if (response.status === 200) {
              console.log('like success');
              //            所有设置对象里面的值的地方都要这样用set
              this.$set(this.imgInfo, 'like', true);
            }
          });
      } else {
        //            如果是已经选中的，就进行删除
        this.$http.delete(`${Config.likeApi}/${this.imgInfo.order}`)
          .then(function(response) {
            if (response.status === 200) {
              this.$set(this.imgInfo, 'like', false);
            }

          });
      }
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss">
$color1: #2eb18a;
.imageContainer {
  padding: 0 3px;
  margin-bottom: 10px;
  display: inline-block;
  width: 20%;
  position: float;
}

.keepButton {
  width: 50%;
  position: float;
  float: center;
}

.picSelected {
  background-color: $color1;
  &:hover,
  &:focus {
    background-color: $color1;
  }
}
</style>
