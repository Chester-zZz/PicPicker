<template>
  <div class="loginForm">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="20" :offset="20">
          <el-button class="loginButton" type="primary" @click="onSubmit">登录</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        pwd: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}

</script>
<style>
.loginForm {
  width: 30%;
  margin-left: 35%;
  margin-right: 35%;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

</style>
