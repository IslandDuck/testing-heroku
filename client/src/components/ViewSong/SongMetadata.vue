<template>
  <Panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
      </v-flex>

      <v-flex xs6>
        <img :src="song.albumImageuUrl"
             class="song-album-image">
        <br>
        {{ song.album }}

        <v-btn
          slot="action"
          color="cyan accent-2"
          @click="navigateTo({name: 'songs-edit'})">
          Edit
        </v-btn>
      </v-flex>
    </v-layout>
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
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.song-album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
