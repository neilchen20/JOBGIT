<template>    
  <v-card :class="cardClass" class="opacity-50">
    <v-layout>
      <v-app-bar :class="appBarClass" elevation="0">
        <el-row class="w-100">
          <el-col :span="8"><div class="grid-content ep-bg-purple" /><div class="float-left pl-10">nlc logo</div></el-col>
          <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
          <el-col :span="8"><div class="grid-content ep-bg-purple" />
            <el-row class="w-100">
              <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><a @click="goToProject">PROJECTS</a></el-col>
              <el-col :span="6"><div class="grid-content ep-bg-purple-light" />INTERESTS</el-col>
              <el-col :span="6"><div class="grid-content ep-bg-purple-light" />LOGIN</el-col>
              <el-col :span="6"><div class="grid-content ep-bg-purple-light" />
                <a class="cursor-pointer" @click="toggleTheme">{{ themeText }}</a>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </v-app-bar>
      <v-main style="min-height: 100vh;">放自介</v-main>
    </v-layout>
    <router-view></router-view>
  </v-card>
</template>

<script>
  import { ref , computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      // 創建一個 reactive 的數據
      const theme = ref('DARK')
      const router = useRouter();
      // 點擊 div 時切換主題
      const toggleTheme = () => {
        theme.value = theme.value === 'DARK' ? 'LIGHT' : 'DARK'
      }

      const cardClass = computed(() => {
        return theme.value === 'DARK' ? 'opacity-50' : 'opacity-90 bg-black'
      })

      const appBarClass = computed(() => {
        return theme.value === 'DARK' ? '' : 'bg-black'
      })

      const goToProject = () => {
        router.push({ name: 'project' });
      };

      return {
        theme,
        toggleTheme,
        cardClass,
        appBarClass,
        goToProject
      }
    },
    computed: {
      themeText() {
        return this.theme === 'DARK' ? 'DARK' : 'LIGHT'
      }
    },
    
  }
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.el-col-5{
  min-width: 100px;
}
@media (min-width: 1400px){

}
</style>
