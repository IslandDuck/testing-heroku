<template>
  <div>
    <h1>Register</h1>
    <input v-model="email"
           type="email"
           name="email"
           placeholder="email">
    <br>
    <input v-model="password"
           type="password"
           name="password"
           placeholder="password">
    <br>
    <div class="error"
         v-html="error"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: 'abc',
      password: '123',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log('Success', response.data)
      } catch (error) {
        console.log('Failed', error.response.data)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
