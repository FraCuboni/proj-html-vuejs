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
          <button>{{ startButton }}</button>
          <button>{{ blueButton }}</button>
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
    padding-top: 150px;
    color: $white;

    h2,
    h5 {
      margin-bottom: 20px;
    }

    h2 {
      font-size: 50px;
    }

    h5 {
      font-size: 20px;
      font-weight: 400;
    }
  }

}

</style>