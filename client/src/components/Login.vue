<template>
  <v-layout>
    <v-flex xs6
            offset-xs3>
      <Panel title="Login">
        <form name="tab-tracker-login-form">
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
        </form>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/UI/Panel'

export default {
  components: {
    Panel
  },
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
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
