<template>
  <transition name="fade">
    <div v-if="!isLoading" class="content"></div>
    <div v-else class="loading-container">
      <div class="background-overlay"></div>
      <img src="src/assets/logoW.png" alt="Logo" class="logo mb-5" />
      <span class="loader mt-5"></span>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.loading-container {
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.606);
  backdrop-filter: blur(5px);
}

.logo {
  width: 100px;
  height: 100px;
}

.loader {
  width: 0;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  animation: animFw 8s linear infinite;
}

.loader::after,
.loader::before {
  content: '';
  width: 10px;
  height: 1px;
  background: #fff;
  position: absolute;
  top: 9px;
  right: -2px;
  opacity: 0;
  transform: rotate(-45deg) translateX(0px);
  box-sizing: border-box;
}

.loader::before {
  top: -4px;
  transform: rotate(45deg);
}

.loader::after {
  animation: coli1 0.3s linear infinite;
}

.loader::before {
  animation: coli2 0.3s linear infinite;
}

@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes coli1 {
  0% {
    transform: rotate(-45deg) translateX(0px);
    opacity: 0.7;
  }
  100% {
    transform: rotate(-45deg) translateX(-45px);
    opacity: 0;
  }
}

@keyframes coli2 {
  0% {
    transform: rotate(45deg) translateX(0px);
    opacity: 1;
  }
  100% {
    transform: rotate(45deg) translateX(-45px);
    opacity: 0.7;
  }
}
</style>
