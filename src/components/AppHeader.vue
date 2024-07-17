<script>

export default{
  name : 'AppHeader',

}

</script>

<template>
  <nav>
    <ul>
      <li><router-link :to="{name: 'home'}">HOME</router-link></li>
      <li><router-link :to="{name: 'about'}">ABOUT</router-link></li>
      <li><router-link :to="{name: 'services'}">SERVICES</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;



</style>
