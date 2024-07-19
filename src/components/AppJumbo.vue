<script>

import VideoPlayer from './VideoPlayer.vue';

export default{
  name : 'AppJumbo',

  components : {
    VideoPlayer,
  },

  data(){
    return{
      videoLink:'<iframe width="560" height="315" src="https://www.youtube.com/embed/4QA30qkRYy8?si=PUdTG1IJNLlV43xq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      playVideo : false,
      videoName : 'DogMilo',
    }
  },

  props: {
    backgroundImage: 'String',
    title: 'String',
    subtitle: 'String',
    startButton: 'String',
    blueButtonSm: 'String',
    blueButtonMd: 'String',


  },

  methods : {
    playButton(){
      console.log(this.playVideo);
      
      this.playVideo = !this.playVideo;

      console.log(this.playVideo); 
    },
  },

  computed: {
    jumboStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`,
      }
    }
  }

}

</script>

<template>
    <div :style="jumboStyle" class="jumbo">
      <div class="container">
        <div class="cont-jumbo">
          <div class="text-container">
            <h2>{{ title }}</h2>
            <h5>{{ subtitle }}</h5>
          </div>
          <div class="flex-container">
            <div v-if="startButton" class="start-button">{{ startButton }}</div>
            <div v-if="blueButtonSm" class="blue-button-sm" @click="playButton">
              <img :src="blueButtonSm" alt="icona">
            </div>
            <div v-if="blueButtonMd" class="blue-button-md">
              <img :src="blueButtonMd" alt="icona">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video player -->
    <VideoPlayer v-if="playVideo === true" 
  :videoName = "videoName"
    :videoLink="videoLink"
    :play-button="playButton"
    />
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.jumbo {
  height: 550px;
  background-size: cover;
  background-position: right center;

  .cont-jumbo {
    height: 550px;
    width: 50%;
    padding-top: 120px;
    color: $white;

    h2 {
      width: 60%;
      font-size: 50px;
      margin-bottom: 20px;
    }

    h5 {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 40px;
    }

    .flex-container{
      display: flex;
      gap: 20px;
      
      .start-button{
        display: flex;
        align-items: center;
        background-color: $orange;
        border-radius: 30px;
        font-size: 25px;
        padding: 2px 30px;
      }

      .start-button:hover {
        cursor: pointer;
        text-decoration: underline;
        background-color: $white;
        color: black;
        transition: background-color linear 0.5s;
      }

      .blue-button-sm,
      .blue-button-md {
        display: flex;
        align-items: center;
        background-color: #00d7ec;
        border-radius: 5px;
      }

      .blue-button-sm {
        padding: 10px 20px;

        img{
          width: 30px;
        }
      }

      .blue-button-md {
        padding: 5px 10px;

        img {
          width: 60px;
        }
      }

      .blue-button-sm:hover {
        cursor: pointer;
        background-color: $orange;
        transition: background-color linear 500ms;
      }
    }
    
  }

}

// fix jumbo buttons
@media screen and (max-width: 1231px){
  .jumbo{
    .cont-jumbo{
      width: 100%;
      display: flex;
      padding-top: 80px;

      &.cont-jumbo>*{
        border: 1px solid black;
      }
    }
    .text-container{
      padding: 20px;

    }

    .flex-container{
      align-items: center;
    }
  }
}

// tablet
@media screen and (max-width: 1031px){

}

// mobile
@media screen and (max-width: 771px){
  .jumbo{
    .cont-jumbo{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 80px;
      text-align: center;
      align-items: center;
      justify-content: center;

      &.cont-jumbo>*{
        border: 1px solid black;
        width: 100%;
      }
    .text-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

    }

    .flex-container{
        display: none;
    }
  }
    }

}

</style>