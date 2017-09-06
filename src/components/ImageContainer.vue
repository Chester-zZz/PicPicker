<template>
  <div class="imageContainer" :width="imageDivWidth">
    <img :width="imageWidth" src="../../static/img/0.jpg" alt="">
    <el-button class="keepButton" type="primary" @click="onSubmit">Keep</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageDivWidth: '10%',
      imageWidth: '100%'
    }
  },
}

</script>
<style>
.imageContainer {
  width: 10%;
  position: float;
}
.keepButton{
	width: 50%;
	margin-left: 25%;
	margin-right: 25%;
}
</style>
