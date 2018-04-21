<template>
  <Panel title="Bookmarks">
    <v-data-table
      :headers="headers"
      :items="bookmarks"
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
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      headers: [
        {text: 'Title', value: 'Title'},
        {text: 'Artist', value: 'Artist'}
      ],
      pagination: {
        sortBy: 'craetedAt',
        descending: true
      },
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      // console.log('making bookmarks request')
      this.bookmarks = (await BookmarksService.index()).data
      // console.log(this.bookmarks)
    }
  }
}
</script>

<style scoped>

</style>
