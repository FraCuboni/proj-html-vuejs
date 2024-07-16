<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default{

  name : 'App',

  components : {
    
    AppHeader,
    AppFooter,
  },

  data(){
    return{
      store,

    }
  }
}

</script>

<template>
  <AppHeader/>
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;


</style>
