<template>
  <Panel title="Lyrics">
    <textarea v-model="song.lyrics"
              readonly />
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
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  outline: none;
  resize: none;
}
</style>
