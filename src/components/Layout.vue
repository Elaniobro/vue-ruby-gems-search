<template>
  <section class="layout-container">
    <div class="saved-container--saved" v-if="isSavedGems">
      <SavedGems
        :savedGems="this.$store.state.savedGems"/>
    </div>
    <div v-else class="saved-container--no-saved">
      <h2>No Saved Gems</h2>
    </div>
    <div class="search-container--results" v-if="isSearchResults">
      <div v-if="gems">
        <SearchResults
          :gems="this.$store.state.searchResults"
        />
      </div>
    </div>

    <div v-else class="search-container--no-results">
       <h2>None found, Search Again</h2>
    </div>
  </section>
</template>
<style scoped>
  .layout-container {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-gap: 2rem;
    padding: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
  }
  .search-container--no-results,
  .saved-container--no-saved,
  .search-container--results,
  .saved-container--saved {
    border: 1px solid #ccc;
    padding: 2rem;
  }

  .saved-container--no-saved,
  .search-container--no-results {
    background: rgba(0,0,0,0.2);
    color: rgba(0,0,0,0.5);
  }

</style>
<script>
import SavedGems from './SavedGems.vue';
import SearchResults from './SearchResults.vue';

export default {
  name: 'Layout',
  components: {
    SavedGems,
    SearchResults,
  },
  computed: {
    isSavedGems() {
      if (this.$store.state.savedGems) {
        return this.$store.state.savedGems.length > 0;
      }
      return false;
    },
    isSearchResults() {
      if (this.$store.state.searchResults) {
        return this.$store.state.searchResults.length > 0;
      }
      return false;
    },
    savedGems() {
      return this.$store.getters.savedGems;
    },
    gems() {
      return this.$store.getters.gems;
    },
  },
};
</script>
