<template>
  <Panel title="YouTube Video">
    <!-- Youtube embedded -->
    <youtube :video-id="youtubeId"
             :player-vars="{autoplay: 0}"
             player-width="100%"
             player-height="100%" />
  </Panel>
</template>

<script>
export default {
  props: {
    youtubeId: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
