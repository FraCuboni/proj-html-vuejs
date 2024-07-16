<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppJumbo from './components/AppJumbo.vue';
export default{

  name : 'App',

  components : {
    
    AppHeader,
    AppFooter,
    AppJumbo,
  },

  data(){
    return{
      store,
      Lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum omnis eos ipsum explicabo qui laudantium minus ab culpa error! Ipsum non temporibus voluptates ea, perferendis voluptatum et quibusdam officia molestias!',

    }
  }
}

</script>

<template>
  <AppHeader/>
  <AppJumbo backgroundImage="/img/b.png" title="Services" :subtitle="Lorem" />
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;


</style>
