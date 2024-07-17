<script>

import { store } from '../../store';
import AppJumbo from '../../components/AppJumbo.vue';

export default{

  name : 'AppAbout',

  components : {
    
    AppJumbo,
  },

  data(){
    return{
      store,
    }
  },

}

</script>

<template>
  <AppJumbo backgroundImage="/public/img/AppAbout/banner4.png" title="About Us" :subtitle="store.lorem" />
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;



</style>
