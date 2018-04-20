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

        <v-btn
          slot="action"
          :to="{name: 'songs-edit', params() {
            return {
              songId: song.id
            }
          }}"
          color="cyan accent-2">
          Edit
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          color="cyan"
          @click="setAsBookmark()">
          Set as Bookmark
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          color="cyan"
          @click="unsetBookmark()">
          Unset Bookmark
        </v-btn>
      </v-flex>

      <v-flex xs6>
        <img :src="song.albumImageUrl"
             class="song-album-image">
        <br>
        {{ song.album }}
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
