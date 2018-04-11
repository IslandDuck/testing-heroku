<template>
  <v-toolbar fixed
             dark
             class="cyan">

    <v-toolbar-title class="mr-4 home"
                     @click="navigateTo({name: 'root'})">
      Tab Tracker
    </v-toolbar-title>

    <!-- TODO: Implement me -->
    <!-- <v-toolbar-items>
      <v-btn flat
             dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer/>

    <v-toolbar-items>
      <v-btn flat
             dark
             @click="navigateTo({name: 'register'})">
        Sign up
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
