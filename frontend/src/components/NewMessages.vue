<template>
  <v-flex sm="8">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Message" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn @click="submit">submit</v-btn>
    </v-form>
  </v-flex>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      messages: [],
    }
  },
  async created() {
    this.messages = (await axios.get('http://localhost:3000/messages')).data
  },
}
</script>
