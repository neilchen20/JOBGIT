<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { House } from '@element-plus/icons-vue'
import { MoonNight } from '@element-plus/icons-vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
    <el-container>
      <el-header class="bg-light-50">
        <el-row class="p-4">
          <el-col :span="12"><el-icon class="float-left"><House /></el-icon></el-col>
          <el-col :span="12"><el-icon class="float-right"><MoonNight /></el-icon></el-col>
        </el-row>
      </el-header>

      <el-main class="bg-gray-100"><a href="https://neilchen20.github.io/Neilgit/demo/DSMdemo/index.html">大傷</a></el-main>

      <el-footer class="bg-blue-50">Neil Chen</el-footer>
    </el-container>

</template>

<style scoped>

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
.el-container{
  width: 100%;
  height: 100%;
}

.el-row{
  width: 100%;
  height: 100%;
}

.el-icon , .el-icon svg{
  width: 2em;
  height: 2em;
}

</style>
