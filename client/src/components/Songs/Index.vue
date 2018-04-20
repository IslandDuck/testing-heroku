<template>
  <v-layout>
    <v-flex v-if="isUserLoggedIn"
            xs6>
      <SongsBookmarks />
      <RecentlyViewedSongs class="mt-4" />
    </v-flex>
    <v-flex :class="{
              xs12: !isUserLoggedIn,
              xs6: !isUserLoggedIn
            }"
            xs6
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
import RecentlyViewedSongs from './RecentlyViewedSongs'
import {mapState} from 'vuex'
import SongsHistoryService from '@/services/SongsHistoryService'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
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
