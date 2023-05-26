<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="background-image"></div>
  
  <RouterView />
</template>

<style>
  .background-image {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  position:absolute;
  z-index: -1;
  opacity: 0.5;
}
</style>
<style scoped>
</style>
