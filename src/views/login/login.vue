<template>
  <div>
    <h2>登录页面</h2>

    <p>
      <span>账号</span>
      <input type="text" v-model="loginForm.username">
    </p>

    <p>
      <span>密码</span>
      <input type="password" v-model="loginForm.password">
    </p>

    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { login } from '@/api/login/login'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        grant_type: 'password',
        scope: 'server',
        client_id: 'holos1',
        client_secret: '123'
      }
    }
  },
  methods: {
    handleLogin() {
      login(this.loginForm).then(res => {
        console.log('登录成功')
        console.log(res)
        localStorage.setItem('access_token', res['access_token'])
      }).catch((e) => {
        console.log('登录失败')
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
