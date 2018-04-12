<template>
  <v-layout>
    <v-flex xs6
            offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat
                   dark
                   class="cyan">
          <v-toolbar-title >
            Register
          </v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="Email" />
          <br>
          <v-text-field
            v-model="password"
            type="password"
            label="Password" />
          <br>
          <div class="error"
               v-html="error"/>
          <v-btn class="cyan"
                 color="#fff"
                 dark
                 @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
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
<style scoped lang="scss">

</style>
