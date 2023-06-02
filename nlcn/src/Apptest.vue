<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <el-container>
      <div class="background-image"></div>
        <el-header>
          <el-row class="w-100">
            <el-col :span="8"><div class="grid-content ep-bg-purple" /><div class="float-left pl-10 text-xl" :href="indexlogo"><a class="cursor-pointer">𝓷𝓵𝓬</a></div></el-col>
            <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
            <el-col :span="8"><div class="grid-content ep-bg-purple" />
              <el-row>
                    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer" @click="goToProject">{{ headerProject }}</span></el-col>
                    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer">{{ headerInterest }}</span></el-col>
                    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer">{{ headerLogin }}</span></el-col>
                    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer" @click="toggleTheme">{{ themeText }}</span></el-col>
              </el-row>
            </el-col>
          </el-row> -->
  <!-- <el-row class="w-100">
                  <el-col :span="8"><div class="grid-content ep-bg-purple" /><div class="float-left pl-10 text-xl"><a class="cursor-pointer" :href="indexlogo">𝓷𝓵𝓬</a></div></el-col>
                  <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
                  <el-col :span="8"><div class="grid-content ep-bg-purple" />
                <el-row>
                  <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer" @click="goToProject">{{ headerProject }}</span></el-col>
                  <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer">{{ headerInterest }}</span></el-col>
                  <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer">{{ headerLogin }}</span></el-col>
                  <el-col :span="6"><div class="grid-content ep-bg-purple-light" /><span class="cursor-pointer" @click="toggleTheme">{{ themeText }}</span></el-col>
                </el-row>
                
              </el-col>
              
          </el-row> -->
  <!-- </el-header>
      <router-view/>
    </el-container> -->

  <el-container>
    <div class="background-image"></div>
    <el-header>
      <el-row class="w-100">
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <div class="float-left pl-10 text-xl">
            <router-link :to="indexlogo" class="cursor-pointer">𝓷𝓵𝓬</router-link>
          </div></el-col
        >
        <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple">
            <el-row>
              <el-col :span="6"
                ><div class="grid-content ep-bg-purple-light" />
                <span class="cursor-pointer" @click="goToProject">{{ headerProject }}</span></el-col
              >
              <el-col :span="6"
                ><div class="grid-content ep-bg-purple-light" />
                <span class="cursor-pointer">{{ headerInterest }}</span></el-col
              >
              <el-col :span="6"
                ><div class="grid-content ep-bg-purple-light" />
                <span class="cursor-pointer">{{ headerLogin }}</span></el-col
              >
              <el-col :span="6"
                ><div class="grid-content ep-bg-purple-light" />
                <span class="cursor-pointer" @click="toggleTheme">{{ themeText }}</span></el-col
              >
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const theme = ref('DARK')
    const toggleTheme = () => {
      theme.value = theme.value === 'DARK' ? 'LIGHT' : 'DARK'
    }
    const goToProject = () => {
      router.push('/project')
    }

    return {
      theme,
      toggleTheme,
      goToProject
    }
  },
  computed: {
    themeText() {
      return this.theme.value === 'DARK' ? 'DARK' : 'LIGHT'
    }
  },
  data() {
    return {
      headerProject: 'PROJECTS',
      headerInterest: 'INTERESTS',
      headerLogin: 'LOGIN',
      indexlogo: '/'
    }
  },
  methods: {
    goToProject() {
      // 处理跳转到项目页面的逻辑
    }
  }
}
// import { ref , computed } from 'vue';
// import { useRouter } from 'vue-router';

// export default {
//   setup() {
//     const indexlogo = ref('http://127.0.0.1:5173/');
// const headerProject = ref("PROJECTS");
// const headerInterest = ref("INTERESTS");
// const headerLogin = ref("LOGIN");
// const theme = ref('DARK')
// const router = useRouter();

// const goToProject = () => {
//   router.push({ name: 'project' });
// };

// // 點擊 div 時切換主題
// const toggleTheme = () => {
//   theme.value = theme.value === 'DARK' ? 'LIGHT' : 'DARK'
// }

// const DarkMode = computed(() => {
//   return theme.value === 'DARK' ? 'opacity-50' : 'opacity-80 bg-black'
// })

//     return {
//       indexlogo,
//       // headerProject,
//       // goToProject,
//       // headerInterest,
//       // headerLogin,
//       // theme,
//       // toggleTheme,
//       // DarkMode,
//     }
//   },
//   // computed: {
//   //   themeText() {
//   //     return this.theme === 'DARK' ? 'DARK' : 'LIGHT'
//   //   }
//   // },
// }
</script>

<style>
@import './assets/font/font.css';
div {
  font-family: jf_font;
}

.background-image {
  width: 100%;
  min-height: 100%;
  background-image: url('@/assets/bgt.jpg');
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: -2;
  opacity: 0.5;
}
</style>

<style scoped></style>
