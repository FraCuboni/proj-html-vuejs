<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppJumbo from './components/AppJumbo.vue';
import PageLoader from './components/PageLoader.vue';
import NotFound from './components/pages/NotFound.vue';
export default{

  name : 'App',

  components : {
    AppHeader,
    AppJumbo,
    AppFooter,
    PageLoader,
    NotFound,
  },

  data(){
    return{
      store,
      isLoading: false,
    }
  },
  methods: {
    showLoader() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  },
  watch: {
    $route(to, from) {
      this.showLoader();
    }
  },
}

</script>

<template>
  <NotFound/>
  <PageLoader :loading="isLoading" />
  <AppHeader/>
  <!-- <AppJumbo backgroundImage="/public/img/AppHome/b.png" title="Services" :subtitle="store.lorem" /> -->

  <router-view/>
  

  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

</style>
