<template>
  <div class="gems-container">
      <Toolbar/>
      <Layout/>
      <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Layout from './components/Layout.vue';
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Layout,
    Toolbar,
  },
};
</script>
