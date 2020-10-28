<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Messages</v-btn>
      <v-btn flat to="/newmessage">New Message</v-btn>
      <v-spacer />
      <v-btn flat to="/register">Register</v-btn>
      <v-btn flat>Login</v-btn>
    </v-toolbar>

    <v-content>
      <br />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //
    }
  },
}
</script>
