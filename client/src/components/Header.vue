<template>
  <v-toolbar fixed
             dark
             class="cyan">

    <v-toolbar-title class="mr-4">
      <router-link :to="{name: 'songs'}"
                   tag="span"
                   class="home">
        TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn :to="{name: 'songs'}"
             flat
             dark>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>

    <v-toolbar-items>
      <v-btn v-if="!isUserLoggedIn"
             :to="{name: 'login'}"
             flat
             dark>
        Login
      </v-btn>
      <v-btn v-if="!isUserLoggedIn"
             :to="{name: 'register'}"
             flat
             dark>
        Sign up
      </v-btn>
      <v-btn v-if="isUserLoggedIn"
             flat
             dark
             @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      key: 'value'
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'default'
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
