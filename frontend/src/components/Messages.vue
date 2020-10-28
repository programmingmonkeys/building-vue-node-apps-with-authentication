<template>
  <div>
    <h4 class="display-1">Messages</h4>
    <ul v-for="(message, i) in messages" :key="i">
      <li :key="i">{{ message }}</li>
    </ul>
  </div>
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
