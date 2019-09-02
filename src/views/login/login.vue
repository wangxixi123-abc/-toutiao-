<template>
  <div class="login">
<el-card class="login-card">
<div class="logo">
  <img src="../../assets/img/logo_index.png" alt="">
</div>
<el-form ref="loginForm" :model="loginForm" :rules="loginRules">
<el-form-item prop="mobile">
  <!-- 绑定手机号 -->
  <el-input v-model="loginForm.mobile" placeholder="请输入手机号"  style="margin-top:20px;"></el-input>
</el-form-item>
<el-form-item prop="code">
  <!-- 绑定验证码 -->
  <el-input v-model="loginForm.code" placeholder="验证码" style="width:240px;"></el-input>
  <el-button  style="float:right">发送验证码</el-button>
</el-form-item>
<el-form-item prop="check">
  <!-- 绑定是否勾选协议 -->
  <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
</el-form-item>
<el-form-item>
  <el-button @click="login" type="primary" style="width:100%">登录</el-button>
</el-form-item>
</el-form>
</el-card>
  </div>
</template>

<script>
export default {

  data () {
    let func = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('您必须同意'))
      }
    }
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false// 是否勾选协议
      },
      loginRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '请输入正确手机号'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '请填写正确的验证码'
        }],
        check: [{
          validator: func
        }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            // result.data.data.token
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/')
          }).catch(() => {
            this.$message({
              message: '手机号或者验证码错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
background: url('../../assets/img/login_bg.jpg');
width: 100%;
height: 100vh;
background-size: cover;
display: flex;
justify-content:center;
align-items:center;

.login-card{
  width: 440px;
  height: 400px;
.logo{
  text-align: center;
  img{
    height: 50px;
  }
}
}
}
</style>
