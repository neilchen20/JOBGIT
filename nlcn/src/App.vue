<template>
  <el-container :class="{ 'text-white': theme === 'LIGHT' }">
    <Loading v-if="isLoading" />
    <div class="background-image"></div>
    <div
      class="bg-light-50 w-100 h-100 -z-1 fixed"
      :class="[darkModeClass, { 'bg-black-50': theme === 'LIGHT' }]"
    ></div>
    <el-header>
      <el-row class="w-100">
        <el-col :span="8"
          ><div class="float-left pl-10 text-xl">
            <img
              class="w-10 h-10 cursor-pointer"
              @click="goToHome"
              :src="theme === 'LIGHT' ? 'src/assets/logoW.png' : 'src/assets/logoB.png'"
              alt="Logo"
            /></div
        ></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="6"
              ><span class="cursor-pointer relative underline" @click="goToProject">{{
                headerProject
              }}</span></el-col
            >
            <el-col :span="6"
              ><span class="cursor-pointer relative underline" @click="goToInterest">{{
                headerInterest
              }}</span></el-col
            >
            <el-col :span="6"
              ><span class="cursor-pointer relative underline">{{ headerLogin }}</span></el-col
            >
            <el-col :span="6"
              ><span class="cursor-pointer relative underline" @click="toggleTheme">{{
                theme === 'LIGHT' ? 'LIGHT' : 'DARK'
              }}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <router-view :theme="theme" class="hidden" />
    <router-view />
  </el-container>
</template>

<script setup>
import Loading from '@/components/loading.vue'
import { ref, computed, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const isLoading = ref(true)
onBeforeUnmount(() => {
  console.log('銷毀前')
  isLoading.value = false
})

const headerProject = ref('PROJECTS')
const headerInterest = ref('INTERESTS')
const headerLogin = ref('LOGIN')
const theme = ref('DARK')

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
  return theme.value === 'DARK' ? 'opacity-50' : 'opacity-80 bg-black'
})
const toggleTheme = () => {
  theme.value = theme.value === 'DARK' ? 'LIGHT' : 'DARK'
}
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
  margin-top: 15px;
}

.el-row {
  align-items: center;
}
</style>
