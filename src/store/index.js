import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);
function initState () {
  if (process.browser) {
    if (localStorage.getItem('savedGems')) {
      return {
        savedGems: JSON.parse(localStorage.savedGems),
        searchResults: null,
      }
    }
  } else {
    return {
      savedGems: [],
      searchResults: null,
    }
  }
}

let store = new Vuex.Store({ // eslint-disable-line
  state: initState(),
  mutations: {
    addGems: (state, payload) => {
      state.searchResults = payload.data;
      let intersection = state.savedGems.filter((x, i) => payload.data.includes(x));
      // console.log(state.savedGems);
    },
    setLocalStorage: (state) => {
      localStorage.setItem('savedGems', JSON.stringify(state.savedGems));
    },
    saveGem: (state, gem) => {
      state.savedGems.push(gem);
      localStorage.setItem('savedGems', JSON.stringify(state.savedGems));
    },
    removeGem: (state, gem) => {
      state.savedGems = state.savedGems.filter(i => i.name !== gem.name);
      localStorage.setItem('savedGems', JSON.stringify(state.savedGems));
    },
  },
  actions: {
    findGems: (context, query) =>{
      return Axios.get(`https://cors.io/?https://rubygems.org/api/v1/search.json?query=${query}`)
        .then((response) => {
          context.commit('addGems', response);
        })
        .catch(err => console.log(err));
    },
    saveGem: (context, gem) => {
      return context.commit('saveGem', gem);
    },
    removeGem: (context, gem) => {
      return context.commit('removeGem', gem);
    },
  },
  getters: {
    gems: (state, getters) => {
      return state.savedGems;
    },
    searchResults: (state, getters) => {
      return state.searchResults;
    },
    savedGems: (state, getters) => {
      return state.savedGems;
    },
  },
});

Vue.store = store;

export default store;
