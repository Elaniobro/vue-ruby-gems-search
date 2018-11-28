<template>
  <v-layout class="gem-card">
    <v-flex>
      <v-card>
        <v-img
          src="https://picsum.photos/200?random"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title>
          <div>
            <h3 class="gem-card__title">
              <a :href="gem.source_code_uri" target="_blank">{{ gem.name }}</a>
            </h3>
            <span class="gem-card__authors">authored by: {{ gem.authors }}</span>
            <span class="gem-card__version">version: {{ gem.version }}</span>
            <div class="gem-card__info">{{ gem.info }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            :key="gem.name"
            :disabled="isSaved(gem)"
            color="orange"
            v-if="cardType(this)"
            @click="add(gem)">
            <v-icon dark>save</v-icon> Save
          </v-btn>

          <v-btn
            flat
            color="orange"
            v-if="disableBtn(gem)"
            @click="remove(gem)">
            <v-icon dark>delete</v-icon> Delete
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  a {
    color: #FF7F45;
    text-decoration: none;
  }
  a:hover {
    color: #FF6D2C;
  }
  .theme--light.v-btn {
    color: #fff;
  }
  .gem-card {
    margin-bottom: 2rem;
  }
  .gem-card__authors,
  .gem-card__version {
    font-size: 12px;
    display: block;
  }
  .gem-card__info {
    font-size: 1rem;
    line-height: 18px;
    margin-top: .5rem;
  }
</style>

<script>
export default {
  name: 'Card',
  props: {
    gem: Object,
  },
  methods: {
    add(gem) {
      this.$store.dispatch('saveGem', gem);
    },
    cardType() {
      return this.$attrs.type === 'search';
    },
    disableBtn(gem) {
      const savedGems = this.$store.getters.savedGems; // eslint-disable-line

      if (savedGems.filter(savedGem => savedGem.name === gem.name).length === 0) {
        return false;
      }
      return true;
    },
    isSaved(gem) {
      const searchResults = this.$store.getters.searchResults; // eslint-disable-line
      const savedGems = this.$store.getters.savedGems; // eslint-disable-line

      let isUsed = savedGems.find(o => o.sha === gem.sha) !== undefined ? true : false;

      return  isUsed;
    },
    remove(gem) {
      this.$store.dispatch('removeGem', gem);
    }
  },
};
</script>
