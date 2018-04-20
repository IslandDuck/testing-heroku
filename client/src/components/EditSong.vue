<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Metadata">
        <v-text-field
          v-model="song.title"
          :rules="[rules.required]"
          required
          label="Title" />
        <v-text-field
          v-model="song.artist"
          :rules="[rules.required]"
          required
          label="Artist" />
        <v-text-field
          v-model="song.genre"
          :rules="[rules.required]"
          required
          label="Genre" />
        <v-text-field
          v-model="song.album"
          :rules="[rules.required]"
          required
          label="Album" />
        <v-text-field
          v-model="song.albumImageUrl"
          required
          label="albumImageUrl" />
        <v-text-field
          v-model="song.youtubeID"
          :rules="[rules.required]"
          required
          label="YoutubeID" />
      </Panel>
    </v-flex>
    <v-flex xs8>
      <Panel title="Song Structure"
             class="ml-4">
        <v-text-field
          v-model="song.lyrics"
          :rules="[rules.required]"
          multi-line
          required
          label="Lyrics" />
        <v-text-field
          v-model="song.tab"
          :rules="[rules.required]"
          required
          multi-line
          label="Tab" />
      </Panel>
      <div v-if="error"
           class="danger-alert">
        {{ error }}
      </div>
      <v-btn
        class="cyan"
        color="#fff"
        dark
        @click="$router.go(-1)"
      >Back</v-btn>
      <v-btn
        class="cyan"
        color="#fff"
        dark
        @click="save"
      >Create a Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeID: null,
        lyrics: null,
        tab: null
      },
      error: null,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async save () {
      this.error = null
      const allFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!allFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
      }

      try {
        await SongsService.put(this.song)
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
