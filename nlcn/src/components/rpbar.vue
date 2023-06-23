<template>
  <div class="progress" ref="progress"></div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const progress = ref(null)

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progressWidth = (scrollTop / scrollHeight) * 100
  progress.value.style.setProperty('width', `${progressWidth}%`)
  if (progressWidth > 0) {
    progress.value.style.display = 'block'
  }
}
</script>

<style>
.progress {
  display: none;
  z-index: 2;
  top: 0;
  left: 0;
  height: 5px;
  position: fixed;
  width: 100%;
  background: linear-gradient(to right, #f9b689, #e46510);
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
