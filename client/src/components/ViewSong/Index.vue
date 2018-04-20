<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <SongMetadata :song="song"/>
      </v-flex>

      <v-flex xs6>
        <YouTube :youtube-id="song.youtubeID"/>
      </v-flex>
    </v-layout>

    <v-layout class="mt-4">
      <v-flex xs6>
        <Lyrics :song="song"/>
      </v-flex>

      <v-flex xs6
              class="ml-2">
        <Tabs :song="song"/>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import Lyrics from './Lyrics'
import Tabs from './Tabs'
import YouTube from './YouTube'

export default {
  components: {
    SongMetadata,
    YouTube,
    Tabs,
    Lyrics
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
