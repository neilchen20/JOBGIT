<template>
  <el-container :class="{ 'text-white': themeText === 'LIGHT' }">
    <div class="background-image"></div>
    <div
      class="bg-light-50 w-100 h-100 -z-1 fixed"
      :class="[darkModeClass, { 'bg-black-50': themeText === 'LIGHT' }]"
    ></div>
    <!-- <div :class="{
      'bg-dark-50': themeText === 'LIGHT',
      'bg-light-50': themeText === 'DARK',
    }"
    class="w-100 h-100 -z-1 fixed opacity-80"></div> -->
    <!-- <div class="bg-light-50 w-100 h-100 -z-1 fixed opacity-80"></div> -->
    <el-header>
      <el-row class="w-100">
        <el-col :span="8"
          ><div class="float-left pl-10 text-xl">
            <img
              class="w-10 h-10 cursor-pointer"
              @click="goToHome"
              :src="themeText === 'LIGHT' ? 'src/assets/logoW.png' : 'src/assets/logoB.png'"
              alt="Logo"
            /></div
        ></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="6"
              ><span class="cursor-pointer relative" @click="goToProject">{{
                headerProject
              }}</span></el-col
            >
            <el-col :span="6"
              ><span class="cursor-pointer relative" @click="goToInterest">{{
                headerInterest
              }}</span></el-col
            >
            <el-col :span="6"
              ><span class="cursor-pointer relative">{{ headerLogin }}</span></el-col
            >
            <el-col :span="6"
              ><span class="cursor-pointer relative" @click="toggleTheme">{{
                themeText
              }}</span></el-col
            >
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <router-view />
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue' //ref定義資料
import { useRouter } from 'vue-router'
const router = useRouter()

const headerProject = ref('PROJECTS')
const headerInterest = ref('INTERESTS')
const headerLogin = ref('LOGIN')
const themeText = ref('DARK')

const goToHome = () => {
  router.push('/')
}

const goToProject = () => {
  router.push('/project')
}

const goToInterest = () => {
  router.push('/interest')
}
const darkModeClass = computed(() => {
  return themeText.value === 'DARK' ? 'opacity-50' : 'opacity-80 bg-black'
})
const toggleTheme = () => {
  if (themeText.value === 'DARK') {
    themeText.value = 'LIGHT'
  } else {
    themeText.value = 'DARK'
  }

  // if (themeText === 'DARK') {
  //   themeText.value = 'LIGHT'
  //   document.documentElement.style.color = 'white'
  //   console.log('light')
  // } else {
  //   themeText.value = 'DARK'
  //   document.documentElement.style.color = 'black'
  //   console.log('dark')
  // }
}

// data() {
//   return {
//     // headerProject: 'PROJECTS',
//     // headerInterest: 'INTERESTS',
//     // headerLogin: 'LOGIN',
//     // themeText: 'DARK'
//   }
// },
// methods: {
//   goToHome() {
//     this.$router.push('/')
//   },
//   goToProject() {
//     this.$router.push('/project')
//   },
//   goToInterest() {
//     this.$router.push('/interest')
//   },
//   toggleTheme() {
//     if (this.themeText === 'DARK') {
//       this.themeText = 'LIGHT'
//       document.documentElement.style.color = 'white'
//     } else {
//       this.themeText = 'DARK'
//       document.documentElement.style.color = 'black'
//     }
//   }
// },
// computed: {
//   darkModeClass() {
//     return this.themeText === 'DARK' ? 'opacity-50' : 'opacity-80 bg-black'
//   }
// }
</script>

<style>
@import '@/assets/font/font.css';
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

.el-header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
}

.el-row {
  align-items: center;
}
</style>

<style scoped></style>
