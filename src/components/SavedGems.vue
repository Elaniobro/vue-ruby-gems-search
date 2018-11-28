<template>
  <div>
    <h2>Saved Gems</h2>
    <div v-for="(gem, index) in $store.state.savedGems"
      class="row middle-sm border-color-grey-light p-vertical-10"
      :key="index">
      <Card :gem="gem" type="saved"/>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'SavedGems',
  props: ['type'],
  components: {
    Card,
  },
  computed: {
    savedGems() {
      return this.$store.getters.savedGems;
    },
  },
};
</script>
