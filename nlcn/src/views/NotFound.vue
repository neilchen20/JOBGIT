<template>
  <div>
    <div id="notfound">Not Found</div>
    <el-button @click="goToHome">
      Back Home
    </el-button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goToHome = () => {
    router.push('/')
  }
</script>
<style scoped>
#notfound{
  font-size: 2rem;
  margin-bottom:1rem
}
</style>