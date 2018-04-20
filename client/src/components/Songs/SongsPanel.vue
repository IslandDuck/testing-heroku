<template>
  <Panel title="Songs">
    <v-btn
      slot="action"
      :to="{name: 'songs-create'}"
      color="cyan accent-2"
      fab
      light
      medium
      absolute
      right
      middle>
      <v-icon>add</v-icon>
    </v-btn>
    <div v-for="song in songs"
         :key="song.id"
         class="song">
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

          <v-btn
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }"
            class="cyan"
            color="#fff"
            dark
          >View Song</v-btn>
        </v-flex>

        <v-flex xs6>
          <img :src="song.albumImageUrl"
               class="song-album-image">
        </v-flex>
      </v-layout>
    </div>
  </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  },
  async mounted () {
    // be sure to return data in the end to get real songs.
    this.songs = (await SongsService.index()).data
  },
  methods: {
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
