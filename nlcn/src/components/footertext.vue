<template>
  <el-footer class="m-13">
    <span class="mr-100 btn-hover textBlack ft w-[100%]" @click="goToHome">{{ footerText }}</span>
  </el-footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goToHome = () => {
  router.push('/')
}
const footerText = ref('Neil Chen % cd ↵')
</script>

<style>
@media (max-width: 1024px) {
  .ft {
    font-size: small;
  }
}
</style>
