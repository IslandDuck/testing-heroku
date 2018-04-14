<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Metadata">
        <v-text-field
          v-model="song.title"
          label="Title" />
        <v-text-field
          v-model="song.artist"
          label="Artist" />
        <v-text-field
          v-model="song.genre"
          label="Genre" />
        <v-text-field
          v-model="song.album"
          label="Album" />
        <v-text-field
          v-model="song.albumImageuUrl"
          label="AlbumImageuUrl" />
        <v-text-field
          v-model="song.youtubeID"
          label="YoutubeID" />
      </Panel>
    </v-flex>
    <v-flex xs8>
      <Panel title="Song Structure"
             class="ml-4">
        <v-text-field
          v-model="song.lyrics"
          multi-line
          label="Lyrics" />
        <v-text-field
          v-model="song.tab"
          multi-line
          label="Tab" />
      </Panel>
      <v-btn class="cyan"
             color="#fff"
             dark
             @click="create">Create a Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/UI/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageuUrl: null,
        youtubeID: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
