<template>
  <el-footer class="m-13">
    <span class="mr-100 btnani textBlack" id="ft" @click="goToHome">{{ footerText }}</span>
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

<style></style>
