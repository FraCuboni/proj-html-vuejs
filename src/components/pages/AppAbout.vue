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

      ourGoals : [
        {
          imgPath : '/public/img/AppAbout/mision.png',
          title : 'Our Goals',
          paragraph : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
        },
        {
          imgPath : '/public/img/AppAbout/vision.png',
          title : 'Our Vision',
          paragraph : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
        },
        {
          imgPath : '/public/img/AppAbout/value.png',
          title : 'Our Value',
          paragraph : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
        },
      ],

      freshAndHealthyFood : [
        {
          imgPath:'/public/img/AppAbout/pet_food.png',
          title : 'Pet Food',
          paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
          imgPath:'/public/img/AppAbout/pet_accessories.png',
          title : 'Pet Accessories',
          paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
          imgPath:'/public/img/AppAbout/pet_clothes.png',
          title : 'Pet Clothes',
          paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
      ],
    }
  }

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

    <!--column -->
    <div v-for="(goal, index) in ourGoals" :key="index" :class="['column', { 'reverse': (index + 1) % 2 === 0 }]">

      <!-- txt -->
      <div class="col-txt">
        <h3>{{ goal.title }}</h3>
        <p>{{ goal.paragraph}}</p>
      </div>

      <!-- img -->
      <div class="col-img">
        <img :src="goal.imgPath" alt="">
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
      <div v-for="card in freshAndHealthyFood" class="card">

        <!-- img -->
         <div class="img-box">
          <img :src="card.imgPath" alt="">
         </div>
        <!-- txt -->
         <div class="txt">
          <h4>{{card.title}}</h4>
          <p>{{ card.paragraph }}</p>
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
  .column, .reverse{
    display: flex;
    flex-direction: column;
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

  .reverse{

    flex-direction: column-reverse;
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
