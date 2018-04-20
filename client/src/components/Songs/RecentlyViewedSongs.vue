<template>
  <Panel title="Recently Viewed Songs">
    <v-data-table
      :headers="headers"
      :items="histories"
      :pagination.sync="pagination"
      hide-actions
      class="elevation-1"
    >
      <template slot="items"
                slot-scope="props">
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.artist }}
        </td>
      </template>
    </v-data-table>
  </Panel>
</template>

<script>
import {mapState} from 'vuex'
import SongsHistoryService from '@/services/SongsHistoryService'

export default {
  data () {
    return {
      headers: [
        {text: 'Title', value: 'Title'},
        {text: 'Artist', value: 'Artist'}
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      console.log('making histories request')
      this.histories = (await SongsHistoryService.index()).data
    }
  }
}
</script>

<style scoped>

</style>
