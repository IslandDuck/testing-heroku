<template>
  <v-layout>
    <v-flex xs6
            offset-xs3>
      <Panel title="Register">
        <form name="tab-tracker-register-form"
              autocomplete="off">
          <v-text-field
            v-model="email"
            label="Email" />
          <br>
          <v-text-field
            v-model="password"
            type="password"
            autocomplete="new-password"
            label="Password" />
          <br>
          <div class="danger-alert"
               v-html="error"/>
          <v-btn class="cyan"
                 color="#fff"
                 dark
                 @click="register">Register</v-btn>
        </form>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
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
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
