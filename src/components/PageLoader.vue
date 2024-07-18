<script>
export default {
name: "PageLoader",
props: {
    loading: {
    type: Boolean,
    default: false
    }
}
}
</script>

<template>
    <div v-if="loading" class="loader-overlay">
    <div class="loader">
      <div class="square"></div>
      <div class="square square-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loader {
    position: relative;
    width: 50px;
    height: 50px;

    .square {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $blue;
        animation: rotate 2s linear infinite;
    }
    .square-2 {
        animation-direction: reverse;

    }

    @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
}
}







</style>

