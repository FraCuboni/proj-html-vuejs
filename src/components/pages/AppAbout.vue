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
  <AppJumbo backgroundImage="/public/img/AppAbout/banner4.png" title="About Us" :subtitle="store.lorem"/>

  <!-- WELCOME DOGMILO PETS CONTAINER-->
  <div class="container">

    <!-- text side -->
    <div class="box">
      <div class="about-dogmilo">
        <div>icon</div>
        <div><h4>about dogmilo</h4></div>
      </div>

      <div class="paragraph">

        <h2>welcome dog milo pets</h2>
        <p> {{ store.lorem }} </p>

      </div>
    </div>

    <!-- img side -->
    <div class="box">
      <img src="/public/img/AppAbout/about-dog.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.container{
  display: flex;
  min-height: 30px;
  .box{
    width: 50%;
    border: 1px dashed black;
  }
}



</style>
