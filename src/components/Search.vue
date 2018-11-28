<template>
    <div class="search-container">
      <form @submit.prevent="submit">
      <v-btn icon
          @click="submit">
          <v-icon>search</v-icon>
      </v-btn>
      <input placeholder="Enter Name of Gem"
          v-model="query"
          autofocus
          @keyup.enter="submit"
          />
      </form>
    </div>
</template>
<style scoped>
input {
  background-color: #f4f9fb;
  border: 0;
  box-shadow: 0px 1px 1px 0px #E6E9EC;
  color: #555;
  margin-bottom: 14px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 3px;
  letter-spacing: 0.7px;
}

input:focus {
  background: #fff8e6;
  color: #333;
  box-shadow: 0px 1px 1px 0px #f9c4ad;
}
</style>
<script>

export default {
  name: 'Search',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('findGems', this.query);
    },
  },
};
</script>
