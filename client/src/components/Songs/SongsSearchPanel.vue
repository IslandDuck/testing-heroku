<template>
  <Panel title="Songs">
    <v-text-field v-model="search"
                  label="Search"/>
  </Panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search || this.search
        }
      }
      this.$router.push(route)
    }, 300),
    '$route.query.search': {
      // whenever the value is initialized
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
