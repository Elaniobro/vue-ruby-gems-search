<template>
  <v-toolbar dark color="#1ea69a">
    <v-toolbar-title> Search for Ruby Gems </v-toolbar-title>
    <v-spacer></v-spacer>
    <Search/>
  </v-toolbar>
</template>

<script>
import Search from './Search.vue';

export default {
  components: {
    Search,
  },
  name: 'Toolbar',
};
</script>
