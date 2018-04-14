<template>
  <v-layout>
    <v-flex xs6
            offset-xs3>
      <Panel title="Songs">
        <div v-for="song in songs"
             :key="song.id">
          {{ song.title }} -
          {{ song.artist }} -
          {{ song.album }}
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/UI/Panel'

export default {
  components: {
    Panel
  },
  data () {
    return {
      // songs: [
      //   {title: 'Float On', artist: 'Modest Mose', album: 'Good News for People Who Love BadNews'}
      // ],
      songs: null
    }
  },
  async mounted () {
    // be sure to return data in the end to get real songs.
    this.songs = (await SongsService.index()).data
    console.log(this.songs)
  }
}
</script>

<style scoped>

</style>
