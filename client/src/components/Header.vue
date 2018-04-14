<template>
  <v-toolbar fixed
             dark
             class="cyan">

    <v-toolbar-title class="mr-4 home"
                     @click="navigateTo({name: 'root'})">
      Tab Tracker
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat
             dark
             @click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn"
             flat
             dark
             @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn"
             flat
             dark
             @click="navigateTo({name: 'register'})">
        Sign up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn"
             flat
             dark
             @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      key: 'value'
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  cursor: pointer;
  &:hover {
    color: orange;
  }
}
</style>
