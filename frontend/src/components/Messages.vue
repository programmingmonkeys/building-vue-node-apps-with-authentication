<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="(message, i) in store.state.messages" :key="i">
          <v-list-tile-content>
            <v-list-tile-title v-text="message"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>
<script>
import axios from 'axios'
import store from '../store'

export default {
  data() {
    return {
      store,
    }
  },
  async created() {
    store.state.messages = (await axios.get('http://localhost:3000/messages')).data
  },
}
</script>
