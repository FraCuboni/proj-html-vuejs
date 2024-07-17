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
    
      <h2>Welcome DogMilo Pets</h2>
      <p> {{ store.lorem }} </p>

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
   <div class="container os">
    <h5>our story</h5>
    <h3>DogMilo Pet Care Story For Your Best Friends.</h3>
    <div class="box-video">
      <!-- <video src="https://youtu.be/oNfIbv7iD9w"></video> -->
       <div class="play-icon">
        <img src="/public/img/play.png" alt="">
       </div>
    </div>

   </div>

  <!-- FRESH & HEALTHY FOOD -->
   <div class="container fne">

    <!-- img -->
    <div class="box">
      <img src="/public/img/AppAbout/food.png" alt="">
    </div>

    <!-- paragraph -->
     <div class="box paragraph">
      <h3 class="card">Fresh & Healthy Food</h3>

      <!-- card -->
      <div class="card">

        <!-- img -->
         <div class="img-box">
          <img src="/public/img/AppAbout/pet_food.png" alt="">
         </div>
        <!-- txt -->
         <div class="txt">
          <h4>pet Food</h4>
          <p>{{ store.lorem }}</p>
         </div>
      </div>

      <!-- card -->
      <div class="card">

        <!-- img -->
         <div class="img-box">
          <img src="/public/img/AppAbout/pet_accessories.png" alt="">
         </div>
        <!-- txt -->
         <div class="txt">
          <h4>pet Food</h4>
          <p>{{ store.lorem }}</p>
         </div>
      </div>

      <!-- card -->
      <div class="card">

        <!-- img -->
         <div class="img-box">
          <img src="/public/img/AppAbout/pet_clothes.png" alt="">
         </div>
        <!-- txt -->
         <div class="txt">
          <h4>pet Food</h4>
          <p>{{ store.lorem }}</p>
         </div>
      </div>

     </div>
   </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.container{
  margin-top: 50px;
  display: flex;
  min-height: 30px;
  .box{
    width: 50%;
    border: 1px dashed black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    .about-dogmilo{
      display: flex;
    }
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
      padding: 15px;
    }
  }
}

.container.os{
  flex-direction: column;
  align-items: center;

  .box-video{
    position: relative;
    width: 80%;
    aspect-ratio: 16/9;
    background-color: $brown;

    .play-icon{
      width: 50px;
      
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }
}


.container.fne{
  .box{
    width: 40%;

  }

  .paragraph{
    width: 60%;

    h3{
      height: calc(100% / 4 - 5px);
    }

    .card{
      display: flex;
      align-items: center;
      border: 1px solid $brown;
      height: calc(100% / 4 - 5px);
      padding: 5px 0 5px 20px;

      .img-box{
        height: 80px;
        background-color: $brown;
        aspect-ratio: 1/1;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 70%;
        }
      }

      .txt{
        padding-left: 20px;
      }
    }
  }

}



</style>
