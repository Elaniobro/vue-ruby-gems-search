<template>
  <div>
    <h2>Search Results</h2>
    <div v-for="(gem, index) in gems"
      class="row middle-sm border-color-grey-light p-vertical-10"
      :key="index">
      <Card :gem="gem" type="search"/>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'SearchResults',
  props: {
    gems: Array,
  },
  components: {
    Card,
  },
};
</script>
