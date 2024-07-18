<script>

export default{
  name : 'AppJumbo',
  props: {
    backgroundImage: 'String',
    title: 'String',
    subtitle: 'String',
    startButton: 'String',
    blueButtonSm: 'String',
    blueButtonMd: 'String',

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
          <h2>{{ title }}</h2>
          <h5>{{ subtitle }}</h5>
          <div class="flex-container">
            <div v-if="startButton" class="start-button">{{ startButton }}</div>
            <div v-if="blueButtonSm" class="blue-button-sm">
              <img :src="blueButtonSm" alt="icona">
            </div>
            <div v-if="blueButtonMd" class="blue-button-md">
              <img :src="blueButtonMd" alt="icona">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.jumbo {
  height: 550px;
  background-size: cover;

  .cont-jumbo {
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
        transition: background-color linear 0.5s;
      }
    }
    
  }

}

</style>