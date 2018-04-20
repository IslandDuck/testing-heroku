<template>
  <v-layout>
    <v-flex xs6>
      <SongsBookmarks />
    </v-flex>
    <v-flex xs6
            class="ml-4">
      <SongsSearchPanel/>
      <SongsPanel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
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
