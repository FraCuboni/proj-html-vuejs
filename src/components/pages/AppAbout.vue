<script>

import { store } from '../../store';
import AppJumbo from '../../components/AppJumbo.vue';
import VideoPlayer from '../VideoPlayer.vue';

export default{

  name : 'AppAbout',

  components : {
    
    AppJumbo,
    VideoPlayer,
  },

  data(){
    return{
      store,

      videoLink:'<iframe width="560" height="315" src="https://www.youtube.com/embed/YClj8irmwFA?si=GCn2g663zvXQjNGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',

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

      playVideo : false,
    }
  },

  methods : {
    playButton(){
      console.log(this.playVideo);
      
      this.playVideo = !this.playVideo;

      console.log(this.playVideo); 
    },
  },

}

</script>

<template>
  <VideoPlayer v-if="playVideo === true" 
  :videoLink="videoLink"
  :play-button="playButton"
  />

  <AppJumbo backgroundImage="/public/img/AppAbout/banner4.png" title="About Us" :subtitle="store.lorem" blueButtonMd="/public/img/up-a.png" />

  <!-- WELCOME DOGMILO PETS CONTAINER-->
  <div class="container">

    <!-- text side -->
    <div class="box">
      <div class="about-dogmilo">
        <div>
          <img src="/public/img/dog-icon.png" alt="">
        </div>
        <div><h4>about dogmilo</h4></div>
      </div>
    
      <h2>Welcome DogMilo Pets</h2>
      <p> {{ store.lorem }} {{ store.lorem }} {{ store.lorem }}</p>
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
        <p class="small">{{goal.paragraph}}</p>
      </div>

      <!-- img -->
      <div class="col-img">
        <img :src="goal.imgPath" alt="">
      </div>
    </div>
  </div>

  <!-- OUR STORY -->
   <div class="container os">
    <h4>our story</h4>
    <h2>DogMilo Pet Care Story For Your Best Friends.</h2>
    <div class="box-video">
      <!-- <video src="https://youtu.be/oNfIbv7iD9w"></video> -->
       <div class="play-icon" @click="playButton">
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
      <h2 class="card">Fresh & Healthy Food</h2>

      <!-- card -->
      <div v-for="card in freshAndHealthyFood" class="card">

        <!-- img -->
         <div class="img-box">
          <img :src="card.imgPath" alt="">
         </div>
        <!-- txt -->
         <div class="txt">
          <h4>{{card.title}}</h4>
          <p class="small">{{ card.paragraph }}</p>
         </div>
      </div>

     </div>
   </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;


p.small {
    font-size: 15px;
    margin-top: 15px;
}
.container{
  margin-top: 50px;
  display: flex;
  min-height: 30px;
  padding-bottom: 100px;
  .box{
    width: 50%;


    .about-dogmilo{
      display: flex;

      img{
        padding-right: 10px;
      }
    }
  }
  .column, .reverse{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: calc(100% / 3);
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
  text-align: center;
  flex-direction: column;
  align-items: center;

  h2,h4{
    width: 50%;
  }

  .box-video{
    position: relative;
    width: 80%;
    aspect-ratio: 18/9;
    background-color: $brown;
    background-image: url(https://dogmilo-wordpress.wrmlabs.com/wp-content/uploads/2022/12/video-bg.png);
    background-size: cover;

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

    h4{
      color: black;
    }

    .card{
      display: flex;
      align-items: center;
      height: calc(100% / 4 - 5px);
      padding: 5px 0 5px 20px;

      .img-box{
        height: 80px;
        background-color: #A69A79;
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
