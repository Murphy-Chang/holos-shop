<template>
  <div>
    <div>1111</div>
    <div>{{ loginForm.code }}</div>
  </div>
</template>

<script>
import { login } from '@/api/login/login'

export default {
  name: 'Callback',
  created() {
    this.loginForm.code = this.$route.query.code
    debugger
    this.handleLogin()
  },
  data() {
    return {
      loginForm: {
        grant_type: 'authorization_code',
        code: '',
        scope: 'server',
        client_id: 'holos1',
        client_secret: '123',
        redirect_uri: 'http://localhost:9988/#/callback'
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
