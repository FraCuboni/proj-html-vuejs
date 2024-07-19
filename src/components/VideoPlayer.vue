<script>
import { store } from '../store';

export default {
  name: 'VideoPlayer',

  props: {
    videoName: String,
    videoLink: String,
    playButton: Function,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    handlePlayButton() {
      if (typeof this.playButton === 'function') {
        this.playButton();
      } else {
        console.error('La prop playButton deve essere una funzione');
      }
    },
  },
};

</script>

<template>

    <div class="background">

        <div class="video-box">
            
            <div class="topbar">

                <h3>{{videoName}}</h3>

                <div class="close" @click="handlePlayButton">
                    <img src="/public/img/x_icon.svg" alt="">
                </div>

            </div>

            <div class="player">

                <div v-html="videoLink"></div>            

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.background{
  height: 100vh;
  width: 100vw;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  .video-box{
    position: absolute;
    width: 60%;
    min-height: 360px;
    min-width: 560px;
    aspect-ratio: 16/9;
    background-color: white;

    .topbar{
      height: 15%;
      background-color: blue;
      color: white;
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .close{
        aspect-ratio: 1/1;
        height: 100%;
        cursor: pointer;
      }
    }

    .player{
      height: 85%;
      padding: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      .video{
          height: 100%;
          width: 100%;
          background-color: black;
      }
    }
  }
}
</style>