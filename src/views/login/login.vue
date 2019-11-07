<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">headhunter</div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="账号"
            name="username"
            tabindex="1"
            auto-complete="on"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            prefix-icon="el-icon-lock"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <div class="login-btn">
          <el-button
            :loading="loading"
            :disabled="loading"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login/login'

export default {
  name: 'Login',
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        grant_type: 'password',
        scope: 'server',
        client_id: 'holos1',
        client_secret: '123'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUserName }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password'
    }
  },
  methods: {
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true

          login(this.loginForm).then(res => {
            this.$message.success('登录成功')
            //将用户信息存到localstorage中
            localStorage.setItem('ACCESS', JSON.stringify(res))
            //从localsotrage中获取登录成功回调地址并删除
            const SSO_CALLBACK = localStorage.getItem('SSO_CALLBACK') || `${window.location.protocol}//${window.location.host}`
            localStorage.removeItem('SSO_CALLBACK')
            // 跳转
            window.location.href = SSO_CALLBACK
          }).catch(() => {
            this.$message.error('登录失败')
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -o-background-size: cover;
    /*background-position: center 0;*/
  }
  .ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .ms-login {
    position: absolute;
    left: 50%;
    top: 40%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;
  }
  .ms-content {
    padding: 30px 30px;
  }
  .login-btn {
    text-align: center;
  }
  .login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
  }
  .login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
</style>
