<script>

export default{
  name : 'AppJumbo',
  props: {
    backgroundImage: 'String',
    title: 'String',
    subtitle: 'String',
    startButton: 'String',
    blueButton: 'String',

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
            <div class="start-button">{{ startButton }}</div>
            <div class="blue-button">
              <img :src="blueButton" alt="icona">
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
  height: 450px;
  background-size: cover;

  .cont-jumbo {
    width: 50%;
    padding-top: 120px;
    color: $white;

    h2,
    h5 {
      margin-bottom: 20px;
    }

    h2 {
      font-size: 40px;
    }

    h5 {
      font-size: 20px;
      font-weight: 400;
    }

    .flex-container{
      display: flex;
      gap: 20px;
      
      .start-button{
        display: flex;
        align-items: center;
        background-color: $orange;
        border-radius: 30px;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
      }

      .blue-button{
        display: flex;
        align-items: center;
        background-color: #00d7ec;
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;

        img{
          width: 40px;
        }
      }
    }
    
  }

}

</style>