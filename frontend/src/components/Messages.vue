<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="(message, i) in $store.state.messages" :key="i" :to="`message/${i}`">
          <v-list-tile-content>
            <v-list-tile-title v-text="message.text"></v-list-tile-title>
            <v-list-tile-sub-title v-text="message.user"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('getMessages')
  },
}
</script>
