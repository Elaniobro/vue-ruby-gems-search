import axios from 'axios';
import store from '../store/index';

const search = (query) => {
  console.log({ query, store });
  return axios.get(`https://cors.io/?https://rubygems.org/api/v1/search.json?query=${query}`)
    .then((response) => {
        console.log(store.commit())
      store.commit('add', response.data);
      console.log('added');
    })
    .catch(err => console.log(err));
};

export default search;
// function ({ params, store}) {
//     console.log({ params, store });
//   return axios.get(`https://cors.io/?https://rubygems.org/api/v1/search.json?query=${params}`)
//     .then((response) => {
//         console.log('here!');
//       store.commit('add', response.data);
//     })
//     .catch(err => console.log(err));
// }
