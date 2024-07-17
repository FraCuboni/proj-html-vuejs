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

  <!-- OUR GOALS CONTAINER -->
  <div class="container">

    <!-- our mission column -->
    <div class="column">

      <!-- txt -->
      <div class="col-txt">
        <h3>Our Goals</h3>
        <p>{{ store.lorem }}</p>
      </div>

      <!-- img -->
      <div class="col-img">
        <img src="/public/img/AppAbout/mision.png" alt="">
      </div>
    </div>

    <!-- our vision column -->
    <div class="column">
      <div class="col-img">
        <img src="/public/img/AppAbout/vision.png" alt="">
      </div>

      <!-- txt -->
      <div class="col-txt">
        <h3>Our Vision</h3>
        <p>{{ store.lorem }}</p>
      </div>
    </div>

    <!-- our value column -->
    <div class="column">

      <!-- txt -->
      <div class="col-txt">
        <h3>Our Value</h3>
        <p>{{ store.lorem }}</p>
      </div>

      <!-- img -->
      <div class="col-img">
        <img src="/public/img/AppAbout/value.png" alt="">
      </div>
    </div>
  </div>

  <!-- OUR STORY -->
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
  .column{
    width: calc(100% / 3);
    border: 1px dashed black;
    color: white;

    .col-img{
      height: 55%;
    }

    .col-txt{
      height: 45%;
      background-color: $brown ;
    }
  }
}



</style>
