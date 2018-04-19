<template>
  <Panel title="Tabs">
    {{ song.tab }}
  </Panel>
</template>

<script>
export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      key: ''
    }
  }
}
</script>

<style scoped>

</style>
