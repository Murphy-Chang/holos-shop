<template>
  <div>
    <h2>登录页面</h2>



    <button @click="handleLogin">授权</button>
  </div>
</template>

<script>
import { authorize } from '@/api/login/login'

export default {
  name: 'Authorize',
  data() {
    return {
      loginForm: {
        response_type: 'code',
        client_id: 'holos',
        scope: 'server',
        redirect_uri: 'http://localhost:9988/#/callback',
        user_oauth_approval: 'true',
        'scope.server': 'true'
      }
    }
  },
  methods: {
    handleLogin() {
      authorize(this.loginForm).then(res => {
        console.log('1')
        console.log(res)
      }).catch((e) => {
        console.log('2')
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
