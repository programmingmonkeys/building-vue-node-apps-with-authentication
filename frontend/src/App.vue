<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Messages</v-btn>
      <v-btn flat to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn flat v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn flat v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn flat v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
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
}
</script>
