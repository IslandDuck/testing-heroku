<template>
  <Panel title="Songs">
    <v-btn
      slot="action"
      color="cyan accent-2"
      fab
      light
      medium
      absolute
      right
      middle
      @click="navigateTo({name: 'songs-create'})">
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
            class="cyan"
            color="#fff"
            dark
            @click="navigateTo({
              name: 'song',
              params: {
                songId: song.id
              }
            })"
          >View Song</v-btn>
        </v-flex>

        <v-flex xs6>
          <img :src="song.albumImageuUrl"
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
  async mounted () {
    // be sure to return data in the end to get real songs.
    this.songs = (await SongsService.index()).data
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
